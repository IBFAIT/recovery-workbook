/* ==========================================================================
   rcz-app · app.js
   Gemeinsames Verhalten + gemeinsame Shell aller Seiten.
     0 · Shell aufbauen   – Sidebar-Navigation + Topbar zur Laufzeit injizieren
                            (Single Source: NAV-Array & Topbar hier definiert)
     1 · Drawer           – mobile Navigation
     2 · Theme            – Hell/Dunkel, gemerkt in localStorage
     3 · Lesemodus        – Sidebar & Chrome ausblenden
     4 · Sprache          – Umschalter (<html lang> + localStorage)

   Eine Seite liefert nur ihren <main id="main"> sowie am <body>:
     data-nav="<id>"      – aktiver Navigationspunkt
     data-crumb="A|B"     – Brotkrumen (| trennt Ebenen, letzte = aktuell)
   ========================================================================== */
(function () {
    'use strict';

    /* ===== Geteilter Loader + Cache-Version =====
       Version wird aus dem eigenen <script src="app.js?v=…"> abgeleitet → einzige Quelle ist das ?v in den HTML-Dateien. */
    window.RCZ = window.RCZ || {};
    window.RCZ.v = window.RCZ.v || ((document.currentScript && document.currentScript.src.match(/[?&]v=([^&]+)/)) || [])[1] || '0';
    window.RCZ.load = window.RCZ.load || (() => { const c = {}; return (u) => (c[u] = c[u] || fetch(u).then((r) => { if (!r.ok) throw new Error(r.status); return r.text(); })); })();

    /* ===== Icons (Innencontent der SVGs) ===== */
    const ICON = {
        home:     '<path d="M3 10 L 12 3 L 21 10 V 21 H 14 V 14 H 10 V 21 H 3 Z"/>',
        book:     '<path d="M4 5 H 11 V 19 H 4 Z"/><path d="M13 5 H 20 V 19 H 13 Z"/>',
        compass:  '<path d="M12 3 C 7 3, 4 7, 4 12 C 4 17, 8 21, 12 21 C 16 21, 20 17, 20 12"/><path d="M12 21 V 12 L 19 8"/>',
        pen:      '<path d="M16 4 L 20 8 L 9 19 L 5 20 L 6 16 Z"/>',
        doc:      '<path d="M6 3 H 16 L 19 6 V 21 H 6 Z"/><line x1="9" y1="9" x2="16" y2="9"/><line x1="9" y1="13" x2="16" y2="13"/>',
        journal:  '<path d="M5 4 H 19 V 20 H 5 Z"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/>',
        heart:    '<path d="M12 20 C 6 16, 3 12, 3 8 A 4 4 0 0 1 12 6 A 4 4 0 0 1 21 8 C 21 12, 18 16, 12 20 Z"/>',
        list:     '<line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>',
        info:     '<circle cx="12" cy="12" r="9"/><line x1="12" y1="11" x2="12" y2="16"/><circle cx="12" cy="8" r=".6" fill="currentColor"/>',
        menu:     '<line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/>',
        search:   '<circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/>',
        settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
        help:     '<circle cx="12" cy="12" r="9"/><path d="M9.2 9.3a2.8 2.8 0 0 1 5.5.8c0 1.9-2.7 2.4-2.7 4"/><circle cx="12" cy="17" r=".6" fill="currentColor" stroke="none"/>',
        eye:      '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',
        moon:     '<path d="M20 14.5A8 8 0 0 1 9.5 4 7 7 0 1 0 20 14.5z"/>'
    };
    const navSvg = (n) => '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">' + ICON[n] + '</svg>';
    const uiSvg  = (n) => '<svg viewBox="0 0 24 24" aria-hidden="true">' + ICON[n] + '</svg>';

    /* ===== Navigation – Single Source ===== */
    const NAV = [
        { group: null, items: [
            { id: 'start', label: 'Start', href: 'start.html', icon: 'home' }
        ] },
        { group: 'Lernen', items: [
            { id: 'einfuehrung', label: 'Einführung', href: 'einfuehrung.html', icon: 'book' },
            // Unterpunkte (Kapitel) werden datengetrieben aus dem Content-File geladen — siehe populateChapters()
            { id: 'recovery', label: 'Recovery', href: 'recovery.html', icon: 'compass', chapters: true, children: [
                { label: 'Übersicht', href: 'recovery.html' }
            ] }
        ] },
        { group: 'Werkzeuge', items: [
            { id: 'tools', label: 'Übungen & Tools', href: 'tool.html', icon: 'pen', children: [
                { label: 'Belastungsskala', href: 'tool.html' },
                { label: 'Stimmungsrad', href: '#' },
                { label: 'Dankbarkeit', href: '#' }
            ] },
            { id: 'wrap', label: 'WRAP-Plan', href: 'wrap.html', icon: 'doc' }
        ] },
        { group: 'Eigenes', items: [
            { id: 'journal', label: 'Journal', href: 'journal.html', icon: 'journal' },
            { id: 'selbstfuersorge', label: 'Selbstfürsorge', href: '#', icon: 'heart' }
        ] },
        { group: 'Info', items: [
            { id: 'toc', label: 'Inhaltsverzeichnis', href: 'inhaltsverzeichnis.html', icon: 'list' },
            { id: 'impressum', label: 'Über & Impressum', href: '#', icon: 'info' }
        ] }
    ];

    /* ===== 0 · Shell aufbauen ===== */
    (function buildShell() {
        const main = document.getElementById('main');
        if (!main || document.querySelector('.app')) return;
        const active = document.body.dataset.nav || '';
        const crumb  = document.body.dataset.crumb || '';
        const currentFile = (location.pathname.split('/').pop() || 'index.html');
        const currentHash = (location.hash && location.hash !== '#') ? location.hash : '';
        const here = currentFile + currentHash;
        const isActiveHref = (href) => {
            if (!href || href === '#') return false;
            return href.indexOf('#') >= 0 ? href === here : (href === currentFile && currentHash === '');
        };

        let side = '<a href="start.html" class="sidebar__brand" aria-label="Startseite"><span class="mark">R</span>Recovery</a><nav class="sidebar__nav">';
        NAV.forEach((g) => {
            side += '<div class="nav-group">';
            if (g.group) side += '<p class="nav-group__label">' + g.group + '</p>';
            g.items.forEach((it) => {
                if (it.children) {
                    const open = (it.id === active) || it.children.some((c) => isActiveHref(c.href));
                    side += '<div class="nav-parent' + (open ? ' open' : '') + '"><div class="nav-row">';
                    side += '<a href="' + it.href + '" class="nav-link"' + (it.id === active ? ' aria-current="page"' : '') + '>' + navSvg(it.icon) + it.label + '</a>';
                    side += '<button type="button" class="nav-toggle" aria-label="Unterpunkte ein-/ausklappen" aria-expanded="' + open + '"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg></button>';
                    side += '</div><div class="nav-sub"' + (it.chapters ? ' data-chapters="1"' : '') + '>';
                    it.children.forEach((c) => {
                        side += c.href === '#'
                            ? '<span class="nav-sublink is-disabled" aria-disabled="true" title="In Arbeit">' + c.label + '<span class="nav-wip">in Arbeit</span></span>'
                            : '<a href="' + c.href + '" class="nav-sublink"' + (isActiveHref(c.href) ? ' aria-current="page"' : '') + '>' + c.label + '</a>';
                    });
                    side += '</div></div>';
                } else if (it.href === '#') {
                    side += '<span class="nav-link is-disabled" aria-disabled="true" title="In Arbeit">' + navSvg(it.icon) + it.label + '<span class="nav-wip">in Arbeit</span></span>';
                } else {
                    side += '<a href="' + it.href + '" class="nav-link"' + (it.id === active ? ' aria-current="page"' : '') + '>' + navSvg(it.icon) + it.label + '</a>';
                }
            });
            side += '</div>';
        });
        side += '</nav>';
        side += '<div class="sidebar__footer">' +
            '<button type="button" class="icon-btn" aria-label="Suche (in Arbeit)" title="In Arbeit" disabled>' + uiSvg('search') + '</button>' +
            '<button type="button" class="icon-btn" id="settingsBtn" aria-haspopup="dialog" aria-label="Einstellungen" title="Einstellungen">' + uiSvg('settings') + '</button>' +
            '<button type="button" class="icon-btn" id="helpBtn" aria-haspopup="dialog" aria-label="Hilfe & Überblick" title="Hilfe & Überblick">' + uiSvg('help') + '</button>' +
            '</div>';

        const parts = crumb.split('|').filter(Boolean);
        const crumbs = parts.map((p, i) => (i === parts.length - 1)
            ? '<li aria-current="page">' + p + '</li>'
            : '<li><a href="#">' + p + '</a></li>').join('');

        const top =
            '<button type="button" class="icon-btn topbar__menu" id="menuBtn" aria-label="Navigation öffnen" aria-controls="sidebar" aria-expanded="false">' + uiSvg('menu') + '</button>' +
            '<nav class="crumbs" aria-label="Brotkrumen"><ol>' + crumbs + '</ol></nav>' +
            '<div class="topbar__actions">' +
                '<button type="button" class="icon-btn read-toggle" id="readBtn" aria-label="Lesemodus" aria-pressed="false"></button>' +
                '<button type="button" class="icon-btn" id="themeBtn" aria-label="Dunkelmodus einschalten"></button>' +
                '<button type="button" class="icon-btn lang-btn" id="langBtn" aria-haspopup="true" aria-expanded="false" aria-label="Sprache wählen"></button>' +
            '</div>';

        const app = document.createElement('div'); app.className = 'app';
        const aside = document.createElement('aside'); aside.className = 'sidebar'; aside.id = 'sidebar'; aside.setAttribute('aria-label', 'Hauptnavigation'); aside.innerHTML = side;
        const scrim = document.createElement('div'); scrim.className = 'scrim'; scrim.id = 'scrim'; scrim.hidden = true;
        const col = document.createElement('div'); col.className = 'main-col';
        const header = document.createElement('header'); header.className = 'topbar'; header.innerHTML = top;

        app.appendChild(aside);
        app.appendChild(scrim);
        app.appendChild(col);
        col.appendChild(header);
        main.parentNode.insertBefore(app, main);
        col.appendChild(main);   // vorhandenes <main> in die Spalte verschieben

        /* Modal-Ebene: Onboarding/Hilfe + Einstellungen (über die ganze Shell gelegt) */
        const X = '<svg viewBox="0 0 24 24" aria-hidden="true" style="fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></svg>';
        const layer = document.createElement('div'); layer.className = 'modal-layer';
        layer.innerHTML =
            '<div class="modal-scrim" id="modalScrim" hidden></div>' +
            '<div class="modal-card ob-card" id="onboardCard" role="dialog" aria-modal="true" aria-labelledby="obTitle" aria-describedby="obLead" hidden>' +
                '<button type="button" class="icon-btn modal-card__close" id="obClose" aria-label="Schliessen">' + X + '</button>' +
                '<p class="modal-eyebrow">Kurz zur Orientierung</p>' +
                '<h2 id="obTitle">Willkommen</h2>' +
                '<p class="modal-lead" id="obLead">Dies ist ein Arbeits-Prototyp deines Recovery-Workbooks. Lies alles in deinem Tempo — nichts musst du sofort verstehen. Hier ein ruhiger Überblick, was die Knöpfe tun.</p>' +
                '<p class="ob-section-label">Die Symbole</p>' +
                '<ul class="ob-legend" id="obLegend"></ul>' +
                '<div class="ob-status">' +
                    '<p><b>Schon nutzbar:</b> Lesen in drei Ansichten (Standard · Einfach · Ausführlich), hell/dunkel, Sprache wechseln, ablenkungsfreier Lesemodus, Einstellungen, Reflexionen (lokal gespeichert).</p>' +
                    '<p><b>Noch in Arbeit:</b> Suche und einzelne Menüpunkte (als «in Arbeit» markiert). Manche Seiten sind Platzhalter.</p>' +
                '</div>' +
                '<div class="modal-actions"><button type="button" class="btn btn--ghost" id="obSkip">Später</button><button type="button" class="btn" id="obDone" data-autofocus>Verstanden</button></div>' +
            '</div>' +
            '<div class="modal-card" id="settingsCard" role="dialog" aria-modal="true" aria-labelledby="setTitle" hidden>' +
                '<button type="button" class="icon-btn modal-card__close" id="setClose" aria-label="Schliessen">' + X + '</button>' +
                '<p class="modal-eyebrow">Nur auf diesem Gerät</p>' +
                '<h2 id="setTitle">Einstellungen</h2>' +
                '<p class="ob-section-label">Erscheinungsbild</p>' +
                '<div class="seg" role="group" aria-label="Erscheinungsbild" id="themeSeg"><button type="button" data-theme-set="light">Hell</button><button type="button" data-theme-set="dark">Dunkel</button><button type="button" data-theme-set="system">System</button></div>' +
                '<p class="ob-section-label">Meine Daten</p>' +
                '<p class="settings-hint">Reflexionen, Theme, Sprache und Lesemodus werden nur <b>lokal auf diesem Gerät</b> gespeichert (unverschlüsselt, keine Übertragung). Auf einem geteilten Testgerät bitte nach der Sitzung löschen.</p>' +
                '<div class="settings-danger"><button type="button" class="btn btn--ghost" id="dataDeleteBtn">Meine Daten löschen</button>' +
                    '<div class="settings-confirm" id="dataConfirm" hidden><span>Wirklich alle lokalen Daten löschen?</span><span class="settings-confirm__row"><button type="button" class="btn" id="dataDeleteYes">Ja, löschen</button><button type="button" class="btn btn--ghost" id="dataDeleteNo">Abbrechen</button></span></div>' +
                '</div>' +
                '<div class="modal-actions"><button type="button" class="btn" id="setDone" data-autofocus>Schliessen</button></div>' +
            '</div>';
        document.body.appendChild(layer);
    })();

    /* ===== Sub-Navigation aufklappen ===== */
    document.querySelectorAll('.nav-toggle').forEach((btn) => {
        btn.addEventListener('click', () => {
            const parent = btn.closest('.nav-parent');
            const open = parent.classList.toggle('open');
            btn.setAttribute('aria-expanded', String(open));
        });
    });

    /* ===== Aktive Kapitel-Sublink markieren (Initial + bei Hash-Wechsel) ===== */
    function markActiveSublink() {
        const file = location.pathname.split('/').pop() || 'index.html';
        const hash = (location.hash && location.hash !== '#') ? location.hash : '';
        const cur = file + hash;
        let activeEl = null;
        document.querySelectorAll('.nav-sublink').forEach((a) => {
            const href = a.getAttribute('href') || '';
            const on = href !== '#' && (href.indexOf('#') >= 0 ? href === cur : (href === file && hash === ''));
            if (on) { a.setAttribute('aria-current', 'page'); activeEl = a; } else { a.removeAttribute('aria-current'); }
        });
        if (activeEl) {
            const side = activeEl.closest('.sidebar__nav');
            if (side) {
                const er = activeEl.getBoundingClientRect(), sr = side.getBoundingClientRect();
                if (er.top < sr.top + 8) side.scrollTop += er.top - sr.top - 8;
                else if (er.bottom > sr.bottom - 8) side.scrollTop += er.bottom - sr.bottom + 8;
            }
        }
    }
    window.addEventListener('hashchange', markActiveSublink);

    /* ===== Kapitel der Einleitung datengetrieben in die Sidebar laden ===== */
    (function populateChapters() {
        const sub = document.querySelector('.nav-sub[data-chapters]');
        if (!sub) return;
        const lang = (() => { try { return localStorage.getItem('rcz-lang') || document.documentElement.lang || 'de'; } catch (e) { return 'de'; } })();
        const V = window.RCZ.v;   // Cache-Version (zentral, s. oben)
        const render = (chs) => {
            sub.insertAdjacentHTML('beforeend', chs.map((c) =>
                '<a href="einleitung.html#' + c.id + '" class="nav-sublink">' + c.title + '</a>').join(''));
            markActiveSublink();
        };
        // 1) Session-Cache: Sidebar ohne erneuten Fetch aufbauen (gilt für jede Folgeseite)
        const cacheKey = 'rcz-nav-' + lang + '-' + V;
        try { const c = sessionStorage.getItem(cacheKey); if (c) { render(JSON.parse(c)); return; } } catch (e) {}
        // 2) Sonst Content-File laden (geteilt mit content.js → ein Fetch), parsen, cachen
        const guille = ['de', 'fr', 'it', 'rm'].indexOf(lang) >= 0;   // «» nur für CH-Landessprachen
        const swissify = (s) => {
            if (guille) s = s.replace(/„([^„]*?)["“”]/g, '«$1»').replace(/„/g, '«').replace(/[“”]/g, '»');
            if (lang === 'de') s = s.replace(/ß/g, 'ss');
            return s;
        };
        const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        const parseChapters = (text) => {
            const m = text.match(/^---\n[\s\S]*?\n---\n([\s\S]*)$/);
            const lines = (m ? m[1] : text).split('\n');
            const out = [];
            for (let i = 0; i < lines.length; i++) {
                const mm = lines[i].match(/^#\s+(.*)$/);
                if (!mm) continue;
                const title = mm[1]; let id = '';
                if (lines[i + 1] && lines[i + 1].trim().startsWith('{')) { const a = lines[i + 1].match(/#([\w-]+)/); id = a ? a[1] : ''; i++; }
                if (id === 'methodik' || /^Methodische[rs]?\s+Hinweis/i.test(title)) break;   // technischer Anhang (sprachunabhängig via {#methodik})
                if (!id) continue;
                out.push({ id, title: esc(swissify(title.replace(/^\d+\.\s+/, ''))) });
            }
            return out;
        };
        const file = 'content/Einleitung_Recovery_V3-11_' + lang + '.md?v=' + V;
        const fallback = 'content/Einleitung_Recovery_V3-11_de.md?v=' + V;
        window.RCZ.load(file).catch(() => (file !== fallback ? window.RCZ.load(fallback) : Promise.reject()))
            .then((text) => {
                const chs = parseChapters(text);
                try { sessionStorage.setItem(cacheKey, JSON.stringify(chs)); } catch (e) {}
                render(chs);
            })
            .catch(() => {});
    })();

    /* ===== Reading-Progress (nur auf Artikel-Leseseiten) ===== */
    if (document.querySelector('main article.prose')) {
        const bar = document.createElement('div');
        bar.className = 'read-progress';
        const fill = document.createElement('span');
        bar.appendChild(fill);
        document.body.appendChild(bar);
        const updateProgress = () => {
            const h = document.documentElement;
            const max = h.scrollHeight - h.clientHeight;
            const p = max > 0 ? h.scrollTop / max : 0;
            fill.style.width = (p * bar.getBoundingClientRect().width) + 'px';   // px statt % (Container-%-Auflösung unzuverlässig)
        };
        window.addEventListener('scroll', updateProgress, { passive: true });
        window.addEventListener('resize', updateProgress);
        updateProgress();
    }

    /* ===== 1 · Drawer / mobile Navigation ===== */
    const sidebar = document.getElementById('sidebar');
    const scrim   = document.getElementById('scrim');
    const menuBtn = document.getElementById('menuBtn');
    const mqDesktop = window.matchMedia('(min-width: 900px)');

    if (sidebar && scrim && menuBtn) {
        const openNav = () => {
            sidebar.classList.add('open');
            scrim.hidden = false;
            requestAnimationFrame(() => scrim.classList.add('show'));
            menuBtn.setAttribute('aria-expanded', 'true');
        };
        const closeNav = () => {
            sidebar.classList.remove('open');
            scrim.classList.remove('show');
            menuBtn.setAttribute('aria-expanded', 'false');
        };
        menuBtn.addEventListener('click', () => sidebar.classList.contains('open') ? closeNav() : openNav());
        scrim.addEventListener('click', closeNav);
        scrim.addEventListener('transitionend', () => { if (!scrim.classList.contains('show')) scrim.hidden = true; });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeNav(); });
        sidebar.querySelectorAll('a').forEach((a) =>
            a.addEventListener('click', () => { if (!mqDesktop.matches) closeNav(); })
        );
        mqDesktop.addEventListener('change', (e) => { if (e.matches) closeNav(); });
    }

    /* ===== 2 · Theme-Umschalter ===== */
    const themeBtn = document.getElementById('themeBtn');
    const T_ICON = {
        sun:  '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
        moon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4 7 7 0 1 0 20 14.5z"/></svg>'
    };
    const effective = () => document.documentElement.dataset.theme ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    const renderThemeBtn = () => {
        if (!themeBtn) return;
        const dark = effective() === 'dark';
        themeBtn.innerHTML = dark ? T_ICON.sun : T_ICON.moon;
        themeBtn.setAttribute('aria-label', dark ? 'Hellmodus einschalten' : 'Dunkelmodus einschalten');
        themeBtn.setAttribute('aria-pressed', String(dark));
    };
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const next = effective() === 'dark' ? 'light' : 'dark';
            document.documentElement.dataset.theme = next;
            try { localStorage.setItem('rcz-theme', next); } catch (e) {}
            renderThemeBtn();
        });
        renderThemeBtn();
    }

    /* ===== 2b · Modale: Onboarding/Hilfe (rcz-onboarded) + Einstellungen ===== */
    (function modals() {
        const mscrim = document.getElementById('modalScrim');
        const onboard = document.getElementById('onboardCard');
        const settings = document.getElementById('settingsCard');
        const appEl = document.querySelector('.app');
        if (!mscrim || !onboard || !settings) return;

        let openCard = null, lastFocus = null;
        const reduce = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const focusables = () => Array.prototype.slice.call(
            openCard.querySelectorAll('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])')
        ).filter((el) => el.offsetParent !== null);

        function onKey(e) {
            if (e.key === 'Escape') { e.preventDefault(); closeModal(); return; }
            if (e.key !== 'Tab' || !openCard) return;
            const els = focusables(); if (!els.length) return;
            const first = els[0], last = els[els.length - 1];
            if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
            else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
            else if (!openCard.contains(document.activeElement)) { e.preventDefault(); first.focus(); }
        }
        function openModal(card) {
            lastFocus = document.activeElement; openCard = card;
            mscrim.hidden = false; card.hidden = false;
            if (appEl) appEl.setAttribute('aria-hidden', 'true');
            requestAnimationFrame(() => { mscrim.classList.add('show'); card.classList.add('show'); });
            (card.querySelector('[data-autofocus]') || card.querySelector('button') || card).focus();
            document.addEventListener('keydown', onKey, true);
        }
        function closeModal() {
            if (!openCard) return;
            const card = openCard; openCard = null;
            if (card.id === 'onboardCard') { try { localStorage.setItem('rcz-onboarded', '1'); } catch (e) {} }
            mscrim.classList.remove('show'); card.classList.remove('show');
            document.removeEventListener('keydown', onKey, true);
            if (appEl) appEl.removeAttribute('aria-hidden');
            const finish = () => { mscrim.hidden = true; card.hidden = true; };
            reduce() ? finish() : window.setTimeout(finish, 260);
            if (lastFocus && lastFocus.focus) lastFocus.focus();
        }
        mscrim.addEventListener('click', closeModal);

        /* --- Onboarding / Hilfe --- */
        const LEGEND = [
            { svg: uiSvg('eye'),      t: 'Auge — Lesemodus',        d: 'Blendet alles Drumherum aus und zentriert den Text. Mit Esc oder dem Kreuz beenden.' },
            { svg: uiSvg('moon'),     t: 'Mond — Hell / Dunkel',    d: 'Schaltet zwischen hellem und dunklem Erscheinungsbild.' },
            { svg: '<span class="ob-de">DE</span>', t: 'DE — Sprache', d: 'Wechselt die Sprache von Inhalt und Navigation.' },
            { svg: uiSvg('search'),   t: 'Lupe — Suche',            d: 'Findet Inhalte.', soon: true },
            { svg: uiSvg('settings'), t: 'Zahnrad — Einstellungen', d: 'Erscheinungsbild und «Meine Daten löschen».' },
            { svg: uiSvg('help'),     t: '? — Hilfe',               d: 'Öffnet diese Übersicht jederzeit erneut.' }
        ];
        const ul = document.getElementById('obLegend');
        if (ul) ul.innerHTML = LEGEND.map((it) =>
            '<li><span class="ob-ico">' + it.svg + '</span><span><b>' + it.t + '</b><span>' + it.d +
            (it.soon ? ' <span class="soon">— noch in Arbeit</span>' : '') + '</span></span></li>').join('');

        const seen = () => { try { return localStorage.getItem('rcz-onboarded') === '1'; } catch (e) { return false; } };
        const helpBtn = document.getElementById('helpBtn');
        if (helpBtn) helpBtn.addEventListener('click', () => openModal(onboard));
        ['obDone', 'obSkip', 'obClose'].forEach((id) => { const b = document.getElementById(id); if (b) b.addEventListener('click', closeModal); });
        if (!seen()) openModal(onboard);   // First-Run: einmal automatisch

        /* --- Einstellungen --- */
        const settingsBtn = document.getElementById('settingsBtn');
        const confirmBox = document.getElementById('dataConfirm');
        const resetConfirm = () => { if (confirmBox) confirmBox.hidden = true; };
        const markThemeSeg = () => {
            let cur = 'system'; try { cur = localStorage.getItem('rcz-theme') || 'system'; } catch (e) {}
            settings.querySelectorAll('[data-theme-set]').forEach((b) =>
                b.setAttribute('aria-pressed', String(b.dataset.themeSet === cur)));
        };
        if (settingsBtn) settingsBtn.addEventListener('click', () => { markThemeSeg(); resetConfirm(); openModal(settings); });
        settings.querySelectorAll('[data-theme-set]').forEach((b) => b.addEventListener('click', () => {
            const mode = b.dataset.themeSet;
            if (mode === 'system') { delete document.documentElement.dataset.theme; try { localStorage.removeItem('rcz-theme'); } catch (e) {} }
            else { document.documentElement.dataset.theme = mode; try { localStorage.setItem('rcz-theme', mode); } catch (e) {} }
            renderThemeBtn(); markThemeSeg();
        }));
        ['setDone', 'setClose'].forEach((id) => { const b = document.getElementById(id); if (b) b.addEventListener('click', closeModal); });
        if (confirmBox) {
            const delBtn = document.getElementById('dataDeleteBtn');
            if (delBtn) delBtn.addEventListener('click', () => { confirmBox.hidden = false; });
            const no = document.getElementById('dataDeleteNo');
            if (no) no.addEventListener('click', resetConfirm);
            const yes = document.getElementById('dataDeleteYes');
            if (yes) yes.addEventListener('click', () => {
                try { Object.keys(localStorage).filter((k) => k.indexOf('rcz-') === 0).forEach((k) => localStorage.removeItem(k)); } catch (e) {}
                location.reload();
            });
        }
    })();

    /* ===== 3 · Lesemodus ===== */
    const readBtn = document.getElementById('readBtn');
    const EYE   = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>';
    const CLOSE = '<svg viewBox="0 0 24 24" aria-hidden="true"><line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></svg>';

    if (readBtn) {
        const renderReadBtn = () => {
            const on = document.body.classList.contains('reading');
            readBtn.innerHTML = on ? CLOSE : EYE;
            readBtn.setAttribute('aria-pressed', String(on));
            readBtn.setAttribute('aria-label', on ? 'Lesemodus beenden' : 'Lesemodus');
        };
        readBtn.addEventListener('click', () => { document.body.classList.toggle('reading'); renderReadBtn(); });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && document.body.classList.contains('reading')) {
                document.body.classList.remove('reading');
                renderReadBtn();
            }
        });
        renderReadBtn();
    }

    /* ===== 4 · Sprachumschalter ===== */
    const langBtn = document.getElementById('langBtn');
    const LANGS = [   // nach CH-Verbreitung (BFS), Landessprachen zuerst, + Tschechisch
        { code: 'de', label: 'Deutsch' },
        { code: 'fr', label: 'Français' },
        { code: 'it', label: 'Italiano' },
        { code: 'rm', label: 'Rumantsch' },
        { code: 'en', label: 'English' },
        { code: 'pt', label: 'Português' },
        { code: 'sq', label: 'Shqip' },
        { code: 'es', label: 'Español' },
        { code: 'sr', label: 'Srpski / Hrvatski' },
        { code: 'tr', label: 'Türkçe' },
        { code: 'cs', label: 'Čeština' }
    ];

    if (langBtn) {
        let current = 'de';
        try { current = localStorage.getItem('rcz-lang') || document.documentElement.lang || 'de'; } catch (e) {}
        document.documentElement.lang = current;

        const menu = document.createElement('div');
        menu.className = 'lang-menu';
        menu.id = 'langMenu';
        menu.setAttribute('role', 'menu');
        menu.hidden = true;
        LANGS.forEach((l) => {
            const b = document.createElement('button');
            b.type = 'button';
            b.setAttribute('role', 'menuitemradio');
            b.dataset.code = l.code;
            b.innerHTML = '<span>' + l.label + '</span><span class="lang-code">' + l.code.toUpperCase() + '</span>';
            b.addEventListener('click', () => selectLang(l.code));
            menu.appendChild(b);
        });
        document.body.appendChild(menu);

        function renderLang() {
            langBtn.textContent = current.toUpperCase();   // nur Kürzel, kein Globus
            const cur = LANGS.find((l) => l.code === current);
            langBtn.setAttribute('aria-label', 'Sprache: ' + (cur ? cur.label : current));
            [...menu.children].forEach((b) => b.setAttribute('aria-checked', String(b.dataset.code === current)));
        }
        function openMenu() {
            const r = langBtn.getBoundingClientRect();
            menu.style.top = (r.bottom + 4) + 'px';
            menu.style.right = (window.innerWidth - r.right) + 'px';
            menu.hidden = false;
            langBtn.setAttribute('aria-expanded', 'true');
        }
        function closeMenu() {
            menu.hidden = true;
            langBtn.setAttribute('aria-expanded', 'false');
        }
        function selectLang(code) {
            const changed = code !== current;
            current = code;
            document.documentElement.lang = code;
            try { localStorage.setItem('rcz-lang', code); } catch (e) {}
            renderLang();
            closeMenu();
            langBtn.focus();
            if (changed) location.reload();   // Inhalt + Sidebar-Labels in neuer Sprache laden
        }

        langBtn.addEventListener('click', () => menu.hidden ? openMenu() : closeMenu());
        document.addEventListener('click', (e) => {
            if (!menu.hidden && !menu.contains(e.target) && !langBtn.contains(e.target)) closeMenu();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !menu.hidden) { closeMenu(); langBtn.focus(); }
        });
        window.addEventListener('resize', () => { if (!menu.hidden) closeMenu(); });
        renderLang();
    }
})();
