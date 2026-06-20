/* ==========================================================================
   content.js — rendert ein V3.x Content-Markdown (App-Ready) in die Widgets.
   Trennt Inhalt (content/*.md) von Darstellung. Lädt die Datei aus
   <main id="main" data-content="…md">, parst Frontmatter (Quellen, Notrufe)
   + Body (Kapitel, Listen, Tabellen, :::widgets, [^quellen]) und verdrahtet
   Quellen (als Sidenotes), Reflexionen (localStorage), Quiz, Lernkarten, Notrufe.
   Lesemodi: Standard | Einfach | Ausführlich. Schweizer Typografie: „…" → «…», ß → ss.
   ========================================================================== */
(function () {
    'use strict';
    const PAGE = document.getElementById('main');
    const RAW = PAGE && PAGE.dataset.content;
    if (!PAGE || !RAW) return;

    const LANG = (() => { try { return localStorage.getItem('rcz-lang') || document.documentElement.lang || 'de'; } catch (e) { return 'de'; } })();
    const VIEW = PAGE.dataset.view || 'reader';                 // 'overview' (Karten) | 'reader' (Kapitel)
    const READER = PAGE.dataset.reader || 'einleitung.html';    // Ziel der Übersichts-Karten
    const OVERVIEW = PAGE.dataset.overview || 'recovery.html';  // Ziel von Back-Link/Pager-Enden
    const VERSION = (window.RCZ && window.RCZ.v) || '0';   // zentrale Cache-Version (in app.js aus dem ?v abgeleitet)
    const FILE = RAW.replace('{lang}', LANG) + '?v=' + VERSION;
    const FILE_DE = RAW.replace('{lang}', 'de') + '?v=' + VERSION;

    let SOURCES = {};
    let HELP = [];
    let STATE = null;
    const slug = (s) => s.toLowerCase().replace(/[^\wäöü]+/g, '-').replace(/^-|-$/g, '').slice(0, 40);

    // Geteilter, memoisierter Loader (definiert in app.js; hier idempotent absichern → ein Fetch teilen)
    window.RCZ = window.RCZ || {};
    window.RCZ.load = window.RCZ.load || (() => { const c = {}; return (u) => (c[u] = c[u] || fetch(u).then((r) => { if (!r.ok) throw new Error(r.status); return r.text(); })); })();
    window.RCZ.load(FILE)
        .catch(() => (FILE !== FILE_DE ? window.RCZ.load(FILE_DE) : Promise.reject()))   // fehlende Sprache → Deutsch
        .then(render)
        .catch((err) => {
            PAGE.innerHTML = '<article class="prose"><p>Inhalt konnte nicht geladen werden.</p></article>';
            console.error('[content.js]', err);
        });

    /* ---------- Text-Helfer ---------- */
    // Typografie locale-abhängig: «» nur für CH-Landessprachen; ß→ss nur Deutsch. Andere Sprachen unverändert lassen.
    const GUILLEMET_LANGS = ['de', 'fr', 'it', 'rm'];
    const swiss = (s) => {
        if (GUILLEMET_LANGS.indexOf(LANG) >= 0) s = s.replace(/„([^„]*?)["“”]/g, '«$1»').replace(/„/g, '«').replace(/[“”]/g, '»');
        if (LANG === 'de') s = s.replace(/ß/g, 'ss');
        return s;
    };
    const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    function inline(s) {
        s = esc(swiss(s));
        s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        s = s.replace(/\*([^*]+)\*/g, '<em>$1</em>');
        s = s.replace(/\s*\[\^([\w]+)\]/g, (m, id) => cite(id));   // Fussnote → Sidenote (Ziffer direkt ans Wort, Tufte-Stil)
        return s;
    }
    /* Quellen-Fussnote: hochgestellte Mediäval-Ziffer im Text + Quellenangabe in der Marginalspalte */
    function cite(id) {
        const num = '<button type="button" class="sn-num" aria-label="Quelle anzeigen"></button>';
        const s = SOURCES[id];
        if (!s) return num + '<span class="sidenote">' + esc(id) + '</span>';
        const where = s.journal ? (s.journal + (s.locator ? ', ' + s.locator : '')) : (s.publisher || '');
        let body = esc(s.authors || '') + (s.year ? ' (' + esc(s.year) + ')' : '') +
            (s.title ? ': ' + esc(swiss(s.title)) : '') + (where ? '. ' + esc(swiss(where)) : '') + '.';
        if (s.url) body = '<a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + body + '</a>';
        return num + '<span class="sidenote">' + body + '</span>';
    }
    function unq(v) {
        v = (v || '').trim();
        if ((v[0] === '"' && v.slice(-1) === '"') || (v[0] === "'" && v.slice(-1) === "'")) v = v.slice(1, -1);
        return v;
    }
    function scalar(fm, key) {
        const m = fm.match(new RegExp('^' + key + ':\\s*(.*)$', 'm'));
        return m ? unq(m[1]) : '';
    }
    function attrs(str) {
        const o = {}; if (!str) return o;
        const re = /(#[\w-]+)|([\w-]+)=("([^"]*)"|(\S+))/g; let m;
        while ((m = re.exec(str))) {
            if (m[1]) o.id = m[1].slice(1);
            else o[m[2]] = m[4] !== undefined ? m[4] : m[5];
        }
        return o;
    }

    /* ---------- Frontmatter-Records (sources / helplines) ---------- */
    function parseRecords(fmLines, startKey, stopKeys) {
        const out = []; let cur = null, active = false;
        for (const raw of fmLines) {
            if (raw.replace(/\s+$/, '') === startKey + ':') { active = true; continue; }
            if (!active) continue;
            if (stopKeys.some((k) => raw.indexOf(k + ':') === 0)) break;
            let m = raw.match(/^\s*-\s+(\w+):\s*(.*)$/);
            if (m) { if (cur) out.push(cur); cur = {}; cur[m[1]] = unq(m[2]); continue; }
            m = raw.match(/^\s+(\w+):\s*(.*)$/);
            if (m && cur) cur[m[1]] = unq(m[2]);
        }
        if (cur) out.push(cur);
        return out;
    }

    /* ---------- Block-Parser ---------- */
    function renderBlocks(lines) {
        let html = '', i = 0;
        while (i < lines.length) {
            const line = lines[i];
            if (line.trim() === '') { i++; continue; }
            let m;
            if ((m = line.match(/^#\s+(.*)$/))) {
                const title = m[1]; i++;
                let id = '';
                if (i < lines.length && lines[i].trim().startsWith('{')) { id = attrs(lines[i].trim().replace(/^\{|\}$/g, '')).id || ''; i++; }
                if (id === 'methodik' || /^Methodische[rs]?\s+Hinweis/i.test(title)) break;   // technischer Anhang: nicht rendern (sprachunabhängig via {#methodik})
                if (!id) id = 'kap-' + slug(title);
                html += '<h2 id="' + id + '">' + inline(title) + '</h2>';   // defensiv: H1 erscheint im Normalfall nicht (splitChapters trennt sie ab)
                continue;
            }
            if ((m = line.match(/^##\s+(.*)$/))) { html += '<h2>' + inline(m[1]) + '</h2>'; i++; continue; }   // Schema: ## = H2-Sektionstitel
            if (line.match(/^:::[\w-]+/)) { const b = collectDirective(lines, i); html += renderDirective(b.type, b.attrsStr, b.inner); i = b.next; continue; }
            if (line.trim() === ':::') { i++; continue; }   // verirrtes Schluss-::: (Content-Tippfehler) überspringen, nicht crashen
            if (line.trim().startsWith('|')) { const t = collectRaw(lines, i, (l) => l.trim().startsWith('|')); html += renderTable(parseTable(t.raw)); i = t.next; continue; }
            if (line.match(/^\s*-\s+/)) { const l = collectList(lines, i, /^\s*-\s+(.*)$/); html += '<ul>' + l.items.map((x) => '<li>' + inline(x) + '</li>').join('') + '</ul>'; i = l.next; continue; }
            if (line.match(/^\s*\d+\.\s+/)) { const l = collectList(lines, i, /^\s*\d+\.\s+(.*)$/); html += '<ol>' + l.items.map((x) => '<li>' + inline(x) + '</li>').join('') + '</ol>'; i = l.next; continue; }
            const para = [];
            while (i < lines.length && lines[i].trim() !== '' && !lines[i].startsWith(':::') && !lines[i].match(/^#{1,6}\s/) && !lines[i].trim().startsWith('|') && !lines[i].match(/^\s*-\s+/) && !lines[i].match(/^\s*\d+\.\s+/)) {
                para.push(lines[i]); i++;
            }
            if (para.length) html += '<p>' + inline(para.join(' ')) + '</p>';
        }
        return html;
    }
    function collectList(lines, i, re) {
        const items = []; let j = i;
        while (j < lines.length && lines[j].match(re)) { items.push(lines[j].match(re)[1]); j++; }
        return { items, next: j };
    }
    function collectRaw(lines, i, test) {
        const raw = []; let j = i;
        while (j < lines.length && test(lines[j])) { raw.push(lines[j]); j++; }
        return { raw, next: j };
    }
    function collectDirective(lines, i) {
        const open = lines[i].match(/^:::([\w-]+)(\{[^}]*\})?/);
        if (!open) return { type: '', attrsStr: '', inner: [], next: i + 1 };   // defensiv
        const type = open[1], attrsStr = open[2] || '';
        let depth = 1; const inner = []; let j = i + 1;
        for (; j < lines.length; j++) {
            const l = lines[j];
            if (l.match(/^:::[\w-]+/)) { depth++; inner.push(l); }
            else if (l.trim() === ':::') { depth--; if (depth === 0) { j++; break; } inner.push(l); }
            else inner.push(l);
        }
        return { type, attrsStr, inner, next: j };
    }

    /* ---------- Tabellen ---------- */
    function parseTable(raw) {
        return raw.map((l) => l.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim()))
            .filter((r) => !r.every((c) => /^:?-{2,}:?$/.test(c)));
    }
    function renderTable(rows) {
        if (!rows.length) return '';
        const head = rows[0], body = rows.slice(1);
        let h = '<table><thead><tr>' + head.map((c) => '<th>' + inline(c) + '</th>').join('') + '</tr></thead><tbody>';
        body.forEach((r) => { h += '<tr>' + r.map((c) => '<td>' + inline(c) + '</td>').join('') + '</tr>'; });
        return h + '</tbody></table>';
    }

    /* ---------- Widgets ---------- */
    const INFO_LABEL = { metaphor: 'Bild', note: 'Hinweis', evidence: 'Evidenz', example: 'Beispiel', warmth: 'Mit Wärme' };

    function renderDirective(type, attrsStr, inner) {
        const a = attrs(attrsStr.replace(/^\{|\}$/g, ''));
        switch (type) {
            case 'pull':
                return '<p class="pull">' + inline(inner.join(' ').trim()) + '</p>';
            case 'info':
                return '<div class="infobox" data-type="' + (a.type || 'note') + '"><p class="infobox__kicker">' + (INFO_LABEL[a.type] || 'Hinweis') + '</p>' + (a.title ? '<h4>' + inline(a.title) + '</h4>' : '') + renderBlocks(inner) + '</div>';
            case 'quote':
                return '<figure class="rec-quote"><p>' + inline(inner.join(' ').trim()) + '</p><span class="rec-quote__author">' + inline(a.author || '') + (a.source ? ' ' + cite(a.source) : '') + '</span></figure>';
            case 'quote-translation':
                return '<div class="quote-translation"><span class="quote-translation__kicker">Eigene Übertragung</span>' + inline(inner.join(' ').trim()) + '</div>';
            case 'reflection': {
                const id = a.id || ('r' + Math.abs(hash(inner.join(''))));
                let items = '', intro = '', qn = 0, mm;
                inner.forEach((l) => {
                    if ((mm = l.match(/^intro:\s*"?(.*?)"?\s*$/))) intro = '<p class="reflection__intro">' + inline(mm[1]) + '</p>';
                    else if ((mm = l.match(/^\s*-\s+(.*)$/))) { qn++; items += '<div class="reflection__item"><p class="reflection__q">' + inline(mm[1]) + '</p><textarea data-q="' + qn + '" rows="2" aria-label="Antwortfeld"></textarea></div>'; }
                });
                return '<div class="reflection" data-reflection="' + id + '"><p class="reflection__kicker">Reflexion</p>' + (a.title ? '<h4>' + inline(a.title) + '</h4>' : '') + intro + items + '<p class="reflection__note">Privat – nur auf diesem Gerät gespeichert.</p></div>';
            }
            case 'table':
                return renderTable(parseTable(inner.filter((l) => l.trim().startsWith('|'))));
            case 'crisis':
                return renderCrisis();
            case 'easy':
                return '<div class="easy">' + renderBlocks(inner) + '</div>';
            case 'standard':   // Standard-Fassung; .standard = CSS-Gruppe des Standard-Modus
                return '<div class="standard standard-prose">' + renderBlocks(inner) + '</div>';
            case 'standard-quiz':
                return '<div class="standard">' + renderQuiz(a.id, parseQuiz(inner)) + '</div>';
            case 'standard-flashcards':
                return '<div class="standard">' + renderCards(a.id, parseCards(inner)) + '</div>';
            case 'quiz':
                return renderQuiz(a.id, parseQuiz(inner));
            case 'flashcards':
                return renderCards(a.id, parseCards(inner));
            default:
                return renderBlocks(inner);
        }
    }
    function renderCrisis() {
        const row = (h) => '<div class="helpline"><span class="helpline__name">' + esc(h.name) + '<span class="helpline__cov">' + esc([h.coverage, (h.target && h.target !== 'alle') ? h.target : ''].filter(Boolean).join(' · ')) + '</span></span><a class="helpline__num" href="tel:' + (h.number || '').replace(/[^0-9+]/g, '') + '">' + esc(h.number || '') + '</a></div>';
        const ch = HELP.filter((h) => h.country === 'CH');
        const other = HELP.filter((h) => h.country !== 'CH');
        return '<div class="crisis"><p class="crisis__kicker">Im Notfall</p><h4>Hilfe in der Schweiz</h4>' + ch.map(row).join('') +
            (other.length ? '<details class="crisis__more"><summary>Weitere Länder (DE · AT · EU)</summary>' + other.map(row).join('') + '</details>' : '') + '</div>';
    }
    function hash(s) { let h = 0; for (let i = 0; i < s.length; i++) { h = (h << 5) - h + s.charCodeAt(i); h |= 0; } return h; }
    const escAttr = (s) => esc(swiss(s || '')).replace(/"/g, '&quot;');

    /* ---------- Quiz (YAML-artiger Block) ---------- */
    function parseQuiz(lines) {
        const qs = []; let q = null, opt = null, m;
        for (const raw of lines) {
            const t = raw.trim(); if (!t) continue;
            if ((m = t.match(/^-\s+q:\s*(.*)$/))) { if (q) qs.push(q); q = { q: unq(m[1]), type: 'multiple-choice', options: [] }; opt = null; continue; }
            if (!q) continue;
            if ((m = t.match(/^type:\s*(.*)$/))) { q.type = unq(m[1]); continue; }
            if (/^options:\s*$/.test(t)) { opt = null; continue; }
            if ((m = t.match(/^-\s+text:\s*(.*)$/))) { opt = { text: unq(m[1]), correct: false }; q.options.push(opt); continue; }
            if ((m = t.match(/^correct:\s*(.*)$/))) { const v = /true/i.test(m[1]); if (opt) opt.correct = v; else q.correct = v; continue; }
            if ((m = t.match(/^explanation:\s*(.*)$/))) { const v = unq(m[1]); if (opt) opt.explanation = v; else q.explanation = v; continue; }
        }
        if (q) qs.push(q);
        return qs;
    }
    function renderQuiz(id, qs) {
        if (!qs.length) return '';
        let h = '<div class="quiz" data-quiz="' + (id || '') + '"><p class="quiz__kicker">Selbsttest</p>';
        qs.forEach((q) => {
            const multi = q.type === 'multi-select';
            h += '<fieldset class="quiz-q" data-type="' + q.type + '"><legend class="quiz-q__q">' + inline(q.q) + '</legend>';
            if (q.type === 'true-false') {
                h += '<div class="quiz-opts">' +
                    '<button type="button" class="quiz-opt" data-correct="' + (q.correct === true) + '">Stimmt</button>' +
                    '<button type="button" class="quiz-opt" data-correct="' + (q.correct === false) + '">Stimmt nicht</button>' +
                    '</div>';
            } else {
                h += '<div class="quiz-opts' + (multi ? ' is-multi' : '') + '">';
                q.options.forEach((o) => { h += '<button type="button" class="quiz-opt" data-correct="' + (!!o.correct) + '"' + (o.explanation ? ' data-expl="' + escAttr(o.explanation) + '"' : '') + '>' + inline(o.text) + '</button>'; });
                h += '</div>';
                if (multi) h += '<button type="button" class="quiz-check">Prüfen</button>';
            }
            h += '<p class="quiz-feedback" hidden>' + (q.explanation ? inline(q.explanation) : '') + '</p>';
            h += '</fieldset>';
        });
        return h + '</div>';
    }

    /* ---------- Lernkarten (YAML-artiger Block) ---------- */
    function parseCards(lines) {
        const out = []; let c = null, m;
        for (const raw of lines) {
            const t = raw.trim(); if (!t) continue;
            if ((m = t.match(/^-\s+front:\s*(.*)$/))) { if (c) out.push(c); c = { front: unq(m[1]), back: '' }; continue; }
            if (!c) continue;
            if ((m = t.match(/^back:\s*(.*)$/))) { c.back = unq(m[1]); continue; }
            if ((m = t.match(/^category:\s*(.*)$/))) { c.category = unq(m[1]); continue; }
        }
        if (c) out.push(c);
        return out;
    }
    function renderCards(id, cards) {
        if (!cards.length) return '';
        let h = '<div class="flashcards" data-deck="' + (id || '') + '"><p class="fc__kicker">Lernkarten</p><div class="fc-deck">';
        cards.forEach((c, i) => {
            h += '<div class="fc-card" data-i="' + i + '"' + (i ? ' hidden' : '') + ' tabindex="0" role="button" aria-label="Karte umdrehen">' +
                '<div class="fc-card__face fc-card__front">' + inline(c.front) + '</div>' +
                '<div class="fc-card__face fc-card__back">' + inline(c.back) + '</div></div>';
        });
        h += '</div><div class="fc-nav"><button type="button" class="fc-prev" aria-label="Vorige Karte">‹</button><span class="fc-count">1 / ' + cards.length + '</span><button type="button" class="fc-next" aria-label="Nächste Karte">›</button></div></div>';
        return h;
    }

    /* ---------- Kapitel-Aufteilung ---------- */
    const cleanTitle = (t) => t.replace(/^\d+\.\s+/, '');   // führende „N. " entfernen
    function splitChapters(lines) {
        const chs = []; let cur = null;
        for (let i = 0; i < lines.length; i++) {
            const m = lines[i].match(/^#\s+(.*)$/);
            if (m) {
                const title = m[1]; let id = '', rt = '';
                if (lines[i + 1] && lines[i + 1].trim().startsWith('{')) {
                    const a = attrs(lines[i + 1].trim().replace(/^\{|\}$/g, ''));
                    id = a.id || ''; rt = a.reading_time || ''; i++;
                }
                if (id === 'methodik' || /^Methodische[rs]?\s+Hinweis/i.test(title)) { cur = null; break; }  // technischer Anhang (sprachunabhängig via {#methodik})
                if (!id) id = 'kap-' + slug(title);
                cur = { id, title, reading_time: rt, lines: [] };
                chs.push(cur);
                continue;
            }
            if (cur) cur.lines.push(lines[i]);
        }
        chs.forEach((c) => {
            c.hasEasy = c.lines.some((l) => /^:::easy(\{|\s|$)/.test(l.trim()));
            c.hasStandard = c.lines.some((l) => /^:::standard(\{|\s|$)/.test(l.trim()));   // hat das Kapitel eine Standard-Fassung?
        });
        return chs;
    }
    /* Lesemodus: standard=Standard (Default) | easy=Einfach | full=Ausführlich */
    const MODE_ORDER = ['standard', 'easy', 'full'];   // Cycle-Reihenfolge: Standard → Einfach → Ausführlich
    const MODE_LABEL = { standard: 'Standard', easy: 'Einfach', full: 'Ausführlich' };
    const readMode = () => { try { const m = localStorage.getItem('rcz-reading-mode'); return MODE_LABEL[m] ? m : 'full'; } catch (e) { return 'full'; } };   // Default für neue Nutzer:innen: Ausführlich
    function modeControls(mode) {
        return '<div class="reading-controls">' +
            '<button type="button" class="mode-cycle" data-mode-cycle aria-label="Ansicht wechseln: Standard, Einfach, Ausführlich">' +
            '<span class="mode-cycle__pre">Ansicht:</span> <span class="mode-cycle__val">' + MODE_LABEL[mode] + '</span> <span class="mode-cycle__ic" aria-hidden="true">⟳</span>' +
            '</button></div>';
    }
    /* Fallback: hat die Sprache (noch) keine Standard-Fassung, zeigt der Standard-Modus den Volltext */
    const effectiveMode = () => {
        const m = readMode();
        return (m === 'standard' && STATE && !STATE.hasAnyStandard) ? 'full' : m;
    };

    /* ---------- Render-Einstieg + Routing ---------- */
    function render(text) {
        const fmM = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
        const fm = fmM ? fmM[1] : '';
        const body = fmM ? fmM[2] : text;
        const fmLines = fm.split('\n');
        parseRecords(fmLines, 'sources', ['helplines']).forEach((s) => { SOURCES[s.id] = s; });
        HELP = parseRecords(fmLines, 'helplines', []);

        const chapters = splitChapters(body.split('\n'));
        const totalTime = chapters.reduce((s, c) => s + (parseInt(c.reading_time, 10) || 0), 0);
        STATE = {
            title: scalar(fm, 'title') || 'Recovery',
            subtitle: scalar(fm, 'subtitle'),
            upd: scalar(fm, 'last_updated'),
            contentVersion: scalar(fm, 'content_version'),
            chapters, totalTime,
            hasAnyStandard: chapters.some((c) => c.hasStandard),   // gibt es überhaupt eine Standard-Fassung?
        };
        // content_version für QA verfügbar machen (nicht user-sichtbar) — RELEASE_NOTES Punkt «Was die App MUSS»
        try { window.RCZ = window.RCZ || {}; window.RCZ.contentVersion = STATE.contentVersion; document.documentElement.setAttribute('data-content-version', STATE.contentVersion || ''); } catch (e) {}
        setupGlobals();
        window.addEventListener('hashchange', route);
        route();
    }
    function route() {
        if (VIEW === 'overview') {
            PAGE.innerHTML = renderOverview();
            document.title = STATE.title;
            wireContent();
            return;
        }
        const id = decodeURIComponent((location.hash || '').replace(/^#/, ''));
        const idx = STATE.chapters.findIndex((c) => c.id === id);
        if (idx < 0) { location.replace(OVERVIEW); return; }   // Reader ohne Kapitel → zur Übersicht
        PAGE.innerHTML = renderChapter(idx);
        document.title = swiss(cleanTitle(STATE.chapters[idx].title)) + ' · ' + STATE.title;
        const ol = document.querySelector('.crumbs ol');   // Brotkrumen um aktuelles Kapitel erweitern
        if (ol) ol.innerHTML = '<li><a href="' + OVERVIEW + '">Recovery</a></li>' +
            '<li aria-current="page">' + inline(cleanTitle(STATE.chapters[idx].title)) + '</li>';
        window.scrollTo(0, 0);
        wireContent();
    }

    /* Übersicht: flaches Kartenraster (Stil der bestehenden recovery.html) */
    function renderOverview() {
        const mode = effectiveMode();
        const chapters = mode === 'standard' ? STATE.chapters.filter((c) => c.hasStandard) : STATE.chapters;
        let h = '<div class="page chapter-overview"><h1>' + inline(STATE.title) + '</h1>';
        h += modeControls(readMode());
        h += '<div class="card-grid">';
        chapters.forEach((c) => {
            h += '<a class="card" href="' + READER + '#' + c.id + '">' +
                '<h3>' + inline(cleanTitle(c.title)) + '</h3>' +
                (c.reading_time ? '<p>' + c.reading_time + ' Min Lesezeit</p>' : '') +
                '<span class="card__more">Öffnen</span></a>';
        });
        h += '</div>';
        if (STATE.upd) h += '<p class="page__updated">Stand: ' + esc(STATE.upd) + '</p>';
        return h + '</div>';
    }

    /* Kapitel-Ansicht: ein Kapitel + Pager (innerhalb des Readers via Hash) */
    function renderChapter(idx) {
        const c = STATE.chapters[idx], total = STATE.chapters.length, mode = effectiveMode();
        const modeClass = mode === 'easy' ? ' is-easy' : (mode === 'standard' ? ' is-standard' : '');
        const step = (dir) => {   // im Standard-Modus Kapitel ohne Standard-Fassung überspringen
            let i = idx + dir;
            if (mode === 'standard') { while (i >= 0 && i < total && !STATE.chapters[i].hasStandard) i += dir; }
            return (i >= 0 && i < total) ? STATE.chapters[i] : null;
        };
        const pagerLink = (cls, dir, target) => target
            ? '<a class="chapter-pager__link ' + cls + '" href="#' + target.id + '"><span class="chapter-pager__dir">' + dir + '</span><span class="chapter-pager__title">' + inline(cleanTitle(target.title)) + '</span></a>'
            : '<a class="chapter-pager__link ' + cls + '" href="' + OVERVIEW + '"><span class="chapter-pager__dir">' + dir + '</span><span class="chapter-pager__title">Übersicht</span></a>';
        let h = '<article class="prose chapter-view' + modeClass + '">';
        h += modeControls(readMode());
        h += '<h1>' + inline(cleanTitle(c.title)) + '</h1>';
        h += renderBlocks(c.lines);
        if (!c.hasEasy) h += '<p class="mode-note mode-note--easy">Von diesem Kapitel gibt es keine einfache Fassung. <button type="button" class="mode-note__btn" data-mode="full">Ausführlich lesen</button></p>';
        if (!c.hasStandard) h += '<p class="mode-note mode-note--standard">Dieses Kapitel gibt es nur ausführlich. <button type="button" class="mode-note__btn" data-mode="full">Ausführlich lesen</button></p>';
        h += '<nav class="chapter-pager">';
        h += pagerLink('chapter-pager__prev', '‹ Zurück', step(-1));
        h += pagerLink('chapter-pager__next', 'Weiter ›', step(1));
        h += '</nav>';
        return h + '</article>';
    }

    /* ---------- Globale Elemente (einmalig) ---------- */
    function setupGlobals() {
        if (VIEW === 'overview') return;   // Reading-Progress nur in der Kapitel-Ansicht
        const bar = document.createElement('div'); bar.className = 'read-progress';
        const fill = document.createElement('span'); bar.appendChild(fill); document.body.appendChild(bar);
        const upd = () => { const hd = document.documentElement; const max = hd.scrollHeight - hd.clientHeight; fill.style.width = (max > 0 ? hd.scrollTop / max : 0) * bar.getBoundingClientRect().width + 'px'; };
        window.addEventListener('scroll', upd, { passive: true });
        window.addEventListener('resize', upd);
        upd();
    }

    /* ---------- Inhalts-Interaktionen (pro Ansicht) ---------- */
    function wireContent() {
        /* Quellen-Fussnoten: Ziffer klappt die Sidenote auf schmalen Screens auf/zu (in der Marginalspalte immer sichtbar) */
        PAGE.querySelectorAll('.sn-num').forEach((b) => {
            b.addEventListener('click', () => {
                const note = b.nextElementSibling;
                if (note && note.classList.contains('sidenote')) note.classList.toggle('show');
            });
        });

        /* Reflexionen */
        PAGE.querySelectorAll('.reflection').forEach((r) => {
            const base = 'rcz-refl-' + r.dataset.reflection;
            r.querySelectorAll('textarea').forEach((t) => {
                const k = base + '-' + t.dataset.q;
                try { t.value = localStorage.getItem(k) || ''; } catch (e) {}
                t.addEventListener('input', () => { try { localStorage.setItem(k, t.value); } catch (e) {} });
            });
        });

        /* Lesemodus zyklisch schalten: Standard → Einfach → Ausführlich */
        const cycleBtn = PAGE.querySelector('[data-mode-cycle]');
        if (cycleBtn) cycleBtn.addEventListener('click', () => {
            const next = MODE_ORDER[(MODE_ORDER.indexOf(readMode()) + 1) % MODE_ORDER.length];
            try { localStorage.setItem('rcz-reading-mode', next); } catch (e) {}
            route();
        });
        /* "Ausführlich lesen"-Links in den Hinweisen */
        PAGE.querySelectorAll('.mode-note__btn').forEach((b) => {
            b.addEventListener('click', () => {
                try { localStorage.setItem('rcz-reading-mode', b.dataset.mode); } catch (e) {}
                route();
            });
        });

        /* Quiz */
        PAGE.querySelectorAll('.quiz-q').forEach((q) => {
            const type = q.dataset.type;
            const opts = [...q.querySelectorAll('.quiz-opt')];
            const fb = q.querySelector('.quiz-feedback');
            const reveal = (text) => { if (text && !fb.textContent) fb.textContent = text; fb.hidden = false; };
            if (type === 'multi-select') {
                opts.forEach((o) => o.addEventListener('click', () => { if (!q.classList.contains('answered')) o.classList.toggle('selected'); }));
                const check = q.querySelector('.quiz-check');
                check && check.addEventListener('click', () => {
                    if (q.classList.contains('answered')) return;
                    q.classList.add('answered'); let ok = true;
                    opts.forEach((o) => {
                        const c = o.dataset.correct === 'true', sel = o.classList.contains('selected');
                        if (c) o.classList.add('is-correct');
                        if (sel && !c) { o.classList.add('is-wrong'); ok = false; }
                        if (c && !sel) ok = false;
                    });
                    reveal(ok ? 'Richtig.' : 'Nicht ganz – die richtigen Antworten sind markiert.');
                });
            } else {
                opts.forEach((o) => o.addEventListener('click', () => {
                    if (q.classList.contains('answered')) return;
                    q.classList.add('answered');
                    const correct = o.dataset.correct === 'true';
                    opts.forEach((x) => { if (x.dataset.correct === 'true') x.classList.add('is-correct'); });
                    if (!correct) o.classList.add('is-wrong');
                    reveal(o.dataset.expl || (correct ? 'Richtig.' : 'Das stimmt nicht.'));
                }));
            }
        });

        /* Lernkarten */
        PAGE.querySelectorAll('.flashcards').forEach((deck) => {
            const cards = [...deck.querySelectorAll('.fc-card')];
            const count = deck.querySelector('.fc-count');
            let idx = 0;
            const flip = (card) => card.classList.toggle('is-flipped');
            const show = (n) => {
                cards[idx].hidden = true; cards[idx].classList.remove('is-flipped');
                idx = (n + cards.length) % cards.length;
                cards[idx].hidden = false;
                count.textContent = (idx + 1) + ' / ' + cards.length;
            };
            cards.forEach((card) => {
                card.addEventListener('click', () => flip(card));
                card.addEventListener('keydown', (e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip(card); } });
            });
            const prev = deck.querySelector('.fc-prev'), next = deck.querySelector('.fc-next');
            prev && prev.addEventListener('click', () => show(idx - 1));
            next && next.addEventListener('click', () => show(idx + 1));
        });
    }
})();
