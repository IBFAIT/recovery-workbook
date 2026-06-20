---
schema_version: "1.2"
content_id: "recovery-einleitung"
content_version: "3.14"
title: "Recovery"
subtitle: "Uma introdução abrangente — Esperança. Poder. Sentido."
language: "pt"
translation_status: "draft-machine-translated"
translation_date: "2026-06-20"
translator: "Claude subagent (draft — needs professional review of crisis content)"
region: "D-A-CH"
target_audience: "betroffene"
target_audience_label: "Para pessoas com experiência vivida de sofrimento psíquico"
reading_time_minutes: 35
last_updated: "2026-06-20"

# === MULTILINGUAL ===
# Diese App ist mehrsprachig konzipiert. Pro Sprache existiert ein eigenes
# Inhalts-File: Einleitung_Recovery_V3-11_<lang>.md
# Quellen-IDs, Widget-Typen und Notruf-Daten bleiben sprachunabhängig.
# Übersetzt werden Fliesstext, Überschriften, Quote/Flashcard/Quiz-Inhalte.
supported_languages:
  - code: "de"
    label: "Deutsch"
    status: "primary-source"
  - code: "fr"
    label: "Français"
    status: "planned"
  - code: "it"
    label: "Italiano"
    status: "planned"
  - code: "rm"
    label: "Rumantsch"
    status: "planned"
  - code: "en"
    label: "English"
    status: "planned"
  - code: "pt"
    label: "Português"
    status: "draft-machine-translated"
  - code: "sq"
    label: "Shqip"
    status: "planned"
  - code: "es"
    label: "Español"
    status: "planned"
  - code: "sr"
    label: "Srpski / Hrvatski"
    status: "planned"
  - code: "tr"
    label: "Türkçe"
    status: "planned"
  - code: "cs"
    label: "Čeština"
    status: "planned"

reading_modes:
  full:  "Detalhado — com pesquisa, citações e fontes"
  easy:  "Simples — curto e em linguagem fácil"
default_reading_mode: "standard"
# Wenn user auf "easy" toggelt, rendert die App NUR die :::easy-Blöcke jedes Kapitels
# (plus die Überschrift) – nicht den umgebenden Volltext.
# Wenn "full", rendert sie alles ausser :::easy-Blöcken.

widget_types:
  reflection:    "Interaktive Reflexionsfrage(n) – lokal gespeichert"
  quote:         "Wörtliches Zitat mit Quelle"
  quote_translation: "Frei übertragene Wiedergabe mit Quellenhinweis"
  info:          "Hintergrundbox"
  metaphor:      "Bildhafte Erklärung"
  crisis:        "Notruf-/Krisen-Hinweis"
  source_chip:   "Inline-Quelle als anklickbarer Chip"
  pull:          "Hervorgehobener Schlüsselsatz"
  table:         "Strukturierte Tabelle"
  easy:          "Kurze, einfache Variante des Kapitels – wird nur im Reading-Mode 'easy' gerendert"
  quiz:          "Mini-Quiz pro Kapitel (Multiple-Choice/True-False) – prüft Verständnis"
  flashcards:    "Lernkarten pro Kapitel (Front/Back) – User kann zur eigenen Sammlung speichern"
  standard:      "Mittellange Standard-Variante des Kapitels — in jedem Kapitel vorhanden"
  standard-quiz: "Mini-Quiz pro Kapitel im Standard-Modus (2-3 Fragen)"
  standard-flashcards: "Lernkarten pro Kapitel im Standard-Modus (2-4 Karten)"

# === SOURCES REGISTRY ===
# Inline-Referenz in Text: [^id]
# Die App rendert [^id] als anklickbaren Chip mit Popup-Detail.
sources:
  - id: anthony1993
    authors: "Anthony, W. A."
    year: 1993
    title: "Recovery from mental illness: The guiding vision of the mental health service system in the 1990s"
    journal: "Psychosocial Rehabilitation Journal"
    locator: "16(4), 11–23"
    type: journal
    note: "Klassische Definition von Personal Recovery."

  - id: deegan1988
    authors: "Deegan, P. E."
    year: 1988
    title: "Recovery: The lived experience of rehabilitation"
    journal: "Psychosocial Rehabilitation Journal"
    locator: "11(4), 11–19"
    type: journal

  - id: deegan1996
    authors: "Deegan, P. E."
    year: 1996
    title: "Recovery as a journey of the heart"
    journal: "Psychiatric Rehabilitation Journal"
    locator: "19(3), 91–97"
    type: journal

  - id: deegan2005
    authors: "Deegan, P. E."
    year: 2005
    title: "The importance of personal medicine: A qualitative study of resilience in people with psychiatric disabilities"
    journal: "Scandinavian Journal of Public Health"
    locator: "33(Suppl 66), 29–35"
    type: journal

  - id: deegan1990
    authors: "Deegan, P. E."
    year: 1990
    title: "Spirit breaking: When the helping professions hurt"
    journal: "The Humanistic Psychologist"
    locator: "18(3), 301–313"
    type: journal
    primary_concept: "Spirit breaking durch helfende Systeme"

  - id: davidsonroe2007
    authors: "Davidson, L., & Roe, D."
    year: 2007
    title: "Recovery from versus recovery in serious mental illness: One strategy for lessening confusion plaguing recovery"
    journal: "Journal of Mental Health"
    locator: "16(4), 459–470"
    type: journal
    url: "https://www.tandfonline.com/doi/abs/10.1080/09638230701482394"
    primary_concept: "Recovery FROM vs. Recovery IN"

  - id: roedavidson2005
    authors: "Roe, D., & Davidson, L."
    year: 2005
    title: "Self and narrative in schizophrenia: time to author a new story"
    journal: "Medical Humanities"
    locator: "31(2), 89–94"
    type: journal
    primary_concept: "Narrative Identitätsrekonstruktion"

  - id: boevink2017
    authors: "Boevink, W."
    year: 2017
    title: "Planting a Tree: On recovery, empowerment and experiential expertise in psychiatry"
    publisher: "Trimbos / Universität Maastricht (PhD-Dissertation)"
    type: book
    primary_concept: "Erfahrungsexpertise als eigenständiges Wissen"

  - id: seligman1975
    authors: "Seligman, M. E. P."
    year: 1975
    title: "Helplessness: On Depression, Development, and Death"
    publisher: "Freeman, San Francisco"
    type: book
    primary_concept: "Erlernte Hilflosigkeit"

  - id: chiba2019narrative
    authors: "Chiba, R., et al."
    year: 2019
    title: "Narrative Identity Reconstruction as Adaptive Growth During Mental Health Recovery"
    journal: "Frontiers in Psychology"
    locator: "10, 994"
    type: journal
    url: "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2019.00994/full"

  - id: chamberlin1978
    authors: "Chamberlin, J."
    year: 1978
    title: "On Our Own: Patient-Controlled Alternatives to the Mental Health System"
    publisher: "McGraw-Hill"
    type: book

  - id: leamy2011
    authors: "Leamy, M., Bird, V., Le Boutillier, C., Williams, J., & Slade, M."
    year: 2011
    title: "Conceptual framework for personal recovery in mental health: Systematic review and narrative synthesis"
    journal: "British Journal of Psychiatry"
    locator: "199, 445–452"
    type: journal
    url: "https://www.cambridge.org/core/journals/the-british-journal-of-psychiatry/article/conceptual-framework-for-personal-recovery-in-mental-health-systematic-review-and-narrative-synthesis/9B3B8D6EF823A1064E9683C43D70F577"
    primary_concept: "CHIME-Modell"

  - id: bird2014
    authors: "Bird, V., Leamy, M., Tew, J., Le Boutillier, C., Williams, J., & Slade, M."
    year: 2014
    title: "Fit for purpose? Validation of a conceptual framework for personal recovery with current mental health consumers"
    journal: "Australian & New Zealand Journal of Psychiatry"
    locator: "48(7), 644–653"
    type: journal

  - id: stuart2017
    authors: "Stuart, S. R., Tansey, L., & Quayle, E."
    year: 2017
    title: "What we talk about when we talk about recovery: A systematic review and best-fit framework synthesis of qualitative literature"
    journal: "Journal of Mental Health"
    locator: "26(3), 291–304"
    type: journal
    primary_concept: "CHIME-D (Erweiterung um Difficulties)"

  - id: vanweeghel2024
    authors: "van Weeghel, J., et al."
    year: 2024
    title: "Is personal recovery a transdiagnostic concept? Testing the fit of the CHIME framework using narrative experiences"
    journal: "Journal of Mental Health"
    type: journal
    url: "https://www.tandfonline.com/doi/full/10.1080/09638237.2024.2361225"

  - id: hancock2025
    authors: "Hancock, N., et al."
    year: 2025
    title: "Psychosocial Recovery Coaching and the National Disability Insurance Scheme: Outcomes and their alignment with the CHIME-D recovery framework"
    journal: "International Journal of Environmental Research and Public Health"
    type: journal
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12408737/"

  - id: andresen2003
    authors: "Andresen, R., Oades, L., & Caputi, P."
    year: 2003
    title: "The experience of recovery from schizophrenia: Towards an empirically validated stage model"
    journal: "Australian & New Zealand Journal of Psychiatry"
    locator: "37(5), 586–594"
    type: journal

  - id: andresen2006
    authors: "Andresen, R., Caputi, P., & Oades, L."
    year: 2006
    title: "Stages of Recovery Instrument: Development of a measure of recovery from serious mental illness"
    journal: "Australian & New Zealand Journal of Psychiatry"
    locator: "40(11–12), 972–980"
    type: journal

  - id: slade2009
    authors: "Slade, M."
    year: 2009
    title: "Personal Recovery and Mental Illness"
    publisher: "Cambridge University Press"
    type: book

  - id: slade2013
    authors: "Slade, M."
    year: 2013
    title: "100 Ways to Support Recovery (2nd ed.)"
    publisher: "Rethink Mental Illness / King's College London"
    type: book
    url: "https://www.researchintorecovery.com/files/100%20ways%20%282nd%20ed%29.pdf"

  - id: slade2014
    authors: "Slade, M."
    year: 2014
    title: "Uses and abuses of recovery: Implementing recovery-oriented practices in mental health systems"
    journal: "World Psychiatry"
    locator: "13(1), 12–20"
    type: journal
    url: "https://onlinelibrary.wiley.com/doi/full/10.1002/wps.20084"

  - id: slade2015refocus
    authors: "Slade, M., et al."
    year: 2015
    title: "Supporting recovery in patients with psychosis through care by community-based adult mental health teams (REFOCUS): A multisite, cluster, randomised, controlled trial"
    journal: "The Lancet Psychiatry"
    locator: "2(6), 503–514"
    type: journal
    url: "https://www.thelancet.com/journals/lanpsy/article/PIIS2215-0366(15)00086-3/fulltext"

  - id: slade2017sdm
    authors: "Slade, M."
    year: 2017
    title: "Implementing shared decision making in routine mental health care"
    journal: "World Psychiatry"
    locator: "16(2), 146–153"
    type: journal

  - id: slade2024peer
    authors: "Slade, M., et al."
    year: 2024
    title: "Effectiveness of peer support for people with severe mental health conditions in high-, middle- and low-income countries: Multicentre RCT"
    journal: "British Journal of Psychiatry"
    type: journal
    url: "https://www.cambridge.org/core/journals/the-british-journal-of-psychiatry/article/effectiveness-of-peer-support-for-people-with-severe-mental-health-conditions-in-high-middle-and-lowincome-countries-multicentre-randomised-controlled-trial/12B11F541341A894771EE76B7695F4B9"

  - id: leboutillier2011
    authors: "Le Boutillier, C., Leamy, M., Bird, V., Davidson, L., Williams, J., & Slade, M."
    year: 2011
    title: "What does recovery mean in practice? A qualitative analysis of international recovery-oriented practice guidance"
    journal: "Psychiatric Services"
    locator: "62(12), 1470–1476"
    type: journal

  - id: schrank2012
    authors: "Schrank, B., Bird, V., Rudnick, A., & Slade, M."
    year: 2012
    title: "Determinants, self-management strategies and interventions for hope in people with mental disorders"
    journal: "Social Science & Medicine"
    locator: "74, 554–564"
    type: journal

  - id: russinova1999
    authors: "Russinova, Z."
    year: 1999
    title: "Providers' hope-inspiring competence as a factor optimizing psychiatric rehabilitation outcomes"
    journal: "Journal of Rehabilitation"
    locator: "65(4), 50–57"
    type: journal

  - id: rogers1997
    authors: "Rogers, E. S., Chamberlin, J., Ellison, M. L., & Crean, T."
    year: 1997
    title: "A consumer-constructed scale to measure empowerment among users of mental health services"
    journal: "Psychiatric Services"
    locator: "48(8), 1042–1047"
    type: journal

  - id: charles1997
    authors: "Charles, C., Gafni, A., & Whelan, T."
    year: 1997
    title: "Shared decision-making in the medical encounter: What does it mean?"
    journal: "Social Science & Medicine"
    locator: "44(5), 681–692"
    type: journal

  - id: deegandrake2006
    authors: "Deegan, P. E., & Drake, R. E."
    year: 2006
    title: "Shared decision making and medication management in the recovery process"
    journal: "Psychiatric Services"
    locator: "57(11), 1636–1639"
    type: journal

  - id: joosten2008
    authors: "Joosten, E. A. G., et al."
    year: 2008
    title: "Systematic review of the effects of shared decision-making on patient satisfaction, treatment adherence and health status"
    journal: "Psychotherapy and Psychosomatics"
    locator: "77, 219–226"
    type: journal

  - id: henderson2004
    authors: "Henderson, C., Flood, C., Leese, M., Thornicroft, G., Sutherby, K., & Szmukler, G."
    year: 2004
    title: "Effect of joint crisis plans on use of compulsory treatment in psychiatry: Single blind randomised controlled trial"
    journal: "BMJ"
    locator: "329, 136"
    type: journal

  - id: antonovsky1979
    authors: "Antonovsky, A."
    year: 1979
    title: "Health, Stress and Coping"
    publisher: "Jossey-Bass"
    type: book

  - id: antonovsky1997
    authors: "Antonovsky, A."
    year: 1997
    title: "Salutogenese. Zur Entmystifizierung der Gesundheit"
    publisher: "dgvt-Verlag"
    type: book

  - id: schmolke2001
    authors: "Schmolke, M."
    year: 2001
    title: "Gesundheitsressourcen im Lebensalltag schizophrener Menschen"
    publisher: "Psychiatrie-Verlag"
    type: book

  - id: goffman1963
    authors: "Goffman, E."
    year: 1963
    title: "Stigma: Notes on the Management of Spoiled Identity"
    publisher: "Prentice-Hall"
    type: book

  - id: corrigan2002
    authors: "Corrigan, P. W., & Watson, A. C."
    year: 2002
    title: "The paradox of self-stigma and mental illness"
    journal: "Clinical Psychology: Science and Practice"
    locator: "9(1), 35–53"
    type: journal

  - id: corrigan2011
    authors: "Corrigan, P. W., Rafacz, J., & Ruesch, N."
    year: 2011
    title: "Examining a progressive model of self-stigma and its impact on people with serious mental illness"
    journal: "Psychiatry Research"
    locator: "189(3), 339–343"
    type: journal

  - id: corrigan2012
    authors: "Corrigan, P. W., et al."
    year: 2012
    title: "Challenging the public stigma of mental illness: A meta-analysis of outcome studies"
    journal: "Psychiatric Services"
    locator: "63(10), 963–973"
    type: journal

  - id: yanos2015
    authors: "Yanos, P. T., Lucksted, A., Drapalski, A. L., Roe, D., & Lysaker, P."
    year: 2015
    title: "Interventions targeting mental health self-stigma: A review and comparison"
    journal: "Psychiatric Rehabilitation Journal"
    locator: "38(2), 171–178"
    type: journal

  - id: buechter2023
    authors: "Buechter, R., Schlegel, T., & Becker, S."
    year: 2023
    title: "Evidence for the effectiveness of psychological interventions for internalized stigma among adults with schizophrenia spectrum disorders"
    journal: "Schizophrenia Bulletin Open"
    type: journal

  - id: thornicroft2016
    authors: "Thornicroft, G., et al."
    year: 2016
    title: "Evidence for effective interventions to reduce mental-health-related stigma and discrimination"
    journal: "The Lancet"
    locator: "387, 1123–1132"
    type: journal

  - id: mead2001
    authors: "Mead, S., Hilton, D., & Curtis, L."
    year: 2001
    title: "Peer support: A theoretical perspective"
    journal: "Psychiatric Rehabilitation Journal"
    locator: "25(2), 134–141"
    type: journal

  - id: davidson2012
    authors: "Davidson, L., Bellamy, C., Guy, K., & Miller, R."
    year: 2012
    title: "Peer support among persons with severe mental illnesses: A review of evidence and experience"
    journal: "World Psychiatry"
    locator: "11, 123–128"
    type: journal

  - id: white2024
    authors: "White, S., Foster, R., Marks, J., & Morshead, R."
    year: 2024
    title: "Effectiveness of Peer Support Programs for Severe Mental Illness: A Systematic Review and Meta-Analysis"
    journal: "Healthcare"
    locator: "12(12), 1179"
    type: journal
    url: "https://www.mdpi.com/2227-9032/12/12/1179"

  - id: lyons2021
    authors: "Lyons, N., Cooper, C., & Lloyd-Evans, B."
    year: 2021
    title: "Group peer support interventions for adults with mental health conditions: SR & meta-analysis"
    journal: "BMC Psychiatry"
    locator: "21, 315"
    type: journal

  - id: mahlke2017
    authors: "Mahlke, C. I., et al."
    year: 2017
    title: "Effectiveness of one-to-one peer support for patients with severe mental illness – a randomised controlled trial"
    journal: "European Psychiatry"
    locator: "42, 103–110"
    type: journal

  - id: copeland1997
    authors: "Copeland, M. E."
    year: 1997
    title: "Wellness Recovery Action Plan (WRAP)"
    publisher: "Peach Press"
    type: book

  - id: utschakowski2009
    authors: "Utschakowski, J., Sielaff, G., & Bock, T."
    year: 2009
    title: "Vom Erfahrenen zum Experten. Wie Peers die Psychiatrie verändern"
    publisher: "Psychiatrie Verlag"
    type: book

  - id: bockpriebe2005
    authors: "Bock, T., & Priebe, S."
    year: 2005
    title: "Psychosis Seminars: An unconventional approach"
    journal: "Psychiatric Services"
    locator: "56(11), 1441–1443"
    type: journal

  - id: vonpeter2015
    authors: "von Peter, S., Schwedler, H. M., Amering, M., & Munk, I."
    year: 2015
    title: "„Diese Offenheit muss weitergehen.\" Eine qualitative Studie zu trialogischen Erfahrungen"
    journal: "Psychiatrische Praxis"
    type: journal

  - id: boevink2012
    authors: "Boevink, W."
    year: 2012
    title: "Towards recovery, empowerment and experiential expertise"
    publisher: "Trimbos Institute"
    type: book

  - id: buck1990
    authors: "Buck, D."
    year: 1990
    title: "Auf der Spur des Morgensterns. Psychose als Selbstfindung"
    publisher: "Paranus"
    type: book

  - id: exin_de
    authors: "EX-IN Deutschland e.V."
    year: 2024
    title: "EX-IN Genesungsbegleitung"
    url: "https://ex-in.de/ex-in-kurse/ex-in-genesungsbegleitung/"
    type: website

  - id: perkins2012
    authors: "Perkins, R., Repper, J., Rinaldi, M., & Brown, H."
    year: 2012
    title: "Recovery Colleges. ImROC Briefing Paper 1"
    publisher: "Centre for Mental Health, London"
    type: report
    url: "https://www.imroc.org/publications"

  - id: imroc
    authors: "Implementing Recovery through Organisational Change (ImROC)"
    year: 2024
    title: "ImROC – Publikationen und Briefings"
    url: "https://www.imroc.org/"
    type: website

  - id: meddings2015
    authors: "Meddings, S., et al."
    year: 2015
    title: "Recovery Colleges: Quality and outcomes"
    journal: "Mental Health and Social Inclusion"
    locator: "19(4), 212–221"
    type: journal

  - id: hayes2023
    authors: "Hayes, D., et al."
    year: 2023
    title: "Organisational and student characteristics, fidelity, funding models, and unit costs of Recovery Colleges in 28 countries"
    journal: "The Lancet Psychiatry"
    type: journal

  - id: theriault2020
    authors: "Theriault, J., Quaglia, P., Roussel-Bergeron, S., & Krupa, T."
    year: 2020
    title: "Recovery Colleges after a decade of research: A literature review"
    journal: "Psychiatric Services"
    locator: "71(9), 928–940"
    type: journal

  - id: henderson2024recollect
    authors: "Henderson, C., et al."
    year: 2024
    title: "Characteristics of mental health service users attending Recovery Colleges in England: Baseline findings from RECOLLECT"
    journal: "BJPsych Bulletin"
    type: journal

  - id: ronaldson2024
    authors: "Ronaldson, A., et al."
    year: 2024
    title: "The impact of Recovery College enrolment on health service use and patient outcomes"
    publisher: "medRxiv preprint"
    type: preprint

  - id: crowther2019
    authors: "Crowther, A., et al."
    year: 2019
    title: "The impact of Recovery Colleges on mental health staff, services and society"
    journal: "Epidemiology and Psychiatric Sciences"
    locator: "28(5), 481–488"
    type: journal

  - id: samhsa2014trauma
    authors: "SAMHSA"
    year: 2014
    title: "SAMHSA's Concept of Trauma and Guidance for a Trauma-Informed Approach"
    publisher: "HHS Publication No. (SMA) 14-4884"
    type: report
    url: "https://www.samhsa.gov/mental-health/trauma-violence/trauma-informed-approaches-programs"

  - id: samhsa2012
    authors: "SAMHSA"
    year: 2012
    title: "SAMHSA's Working Definition of Recovery"
    publisher: "Substance Abuse and Mental Health Services Administration, USA"
    type: report

  - id: felitti1998
    authors: "Felitti, V. J., et al."
    year: 1998
    title: "Adverse Childhood Experiences (ACE) Study"
    journal: "American Journal of Preventive Medicine"
    locator: "14, 245–258"
    type: journal

  - id: who2019
    authors: "World Health Organization"
    year: 2019
    title: "QualityRights initiative"
    publisher: "WHO, Geneva"
    type: report
    url: "https://www.who.int/teams/mental-health-and-substance-use/policy-law-rights/qr-guidance-training"

  - id: who2021
    authors: "World Health Organization"
    year: 2021
    title: "Guidance on community mental health services: Promoting person-centred and rights-based approaches"
    publisher: "WHO, Geneva"
    type: report
    url: "https://www.who.int/publications/i/item/9789240025707"

  - id: uncrpd2006
    authors: "United Nations"
    year: 2006
    title: "Convention on the Rights of Persons with Disabilities"
    publisher: "UN, New York"
    type: treaty
    url: "https://www.un.org/development/desa/disabilities/convention-on-the-rights-of-persons-with-disabilities.html"

  - id: seikkula2011
    authors: "Seikkula, J., Alakare, B., & Aaltonen, J."
    year: 2011
    title: "The comprehensive open-dialogue approach II. Long-term stability of acute psychosis outcomes"
    journal: "Psychosis"
    locator: "3(3), 192–204"
    type: journal

  - id: bergstroem2018
    authors: "Bergström, T., et al."
    year: 2018
    title: "The family-oriented open dialogue approach in the treatment of first-episode psychosis: 19-year outcomes"
    journal: "Psychiatry Research"
    locator: "270, 168–175"
    type: journal

  - id: ameringschmolke2006
    authors: "Amering, M., & Schmolke, M."
    year: 2006
    title: "Hoffnung – Macht – Sinn. Recovery-Konzepte in der Psychiatrie"
    journal: "Managed Care"
    locator: "1/2006, 20–22"
    type: journal
    primary_concept: "DACH-Lesart Hoffnung-Macht-Sinn"

  - id: ameringschmolke2012
    authors: "Amering, M., & Schmolke, M."
    year: 2012
    title: "Recovery. Das Ende der Unheilbarkeit (5. Aufl.)"
    publisher: "Psychiatrie Verlag"
    type: book

  - id: knufseibert2004
    authors: "Knuf, A., & Seibert, U."
    year: 2004
    title: "Selbstbefähigung fördern. Empowerment in der psychiatrischen Arbeit"
    publisher: "Psychiatrie Verlag, Bonn"
    type: book

  - id: knuf2026
    authors: "Knuf, A."
    year: 2026
    title: "Recovery und Empowerment (PraxisWissen Bd. 8, 2. Aufl.)"
    publisher: "Psychiatrie Verlag"
    type: book

  - id: dgppn2019
    authors: "DGPPN (Hrsg.)"
    year: 2019
    title: "S3-Leitlinie Psychosoziale Therapien bei schweren psychischen Erkrankungen (2. Aufl.)"
    publisher: "Springer"
    type: guideline

  - id: herriger2014
    authors: "Herriger, N."
    year: 2014
    title: "Empowerment in der Sozialen Arbeit (5. Aufl.)"
    publisher: "Kohlhammer"
    type: book

  - id: who2010emp
    authors: "WHO Regional Office for Europe"
    year: 2010
    title: "User empowerment in mental health"
    publisher: "WHO, Copenhagen"
    type: report

  - id: roessler2004
    authors: "Rössler, W."
    year: 2004
    title: "Psychiatrische Rehabilitation"
    publisher: "Springer"
    type: book

  - id: harding1987
    authors: "Harding, C. M., Brooks, G. W., Ashikaga, T., Strauss, J. S., & Breier, A."
    year: 1987
    title: "The Vermont longitudinal study of persons with severe mental illness"
    journal: "American Journal of Psychiatry"
    locator: "144(6), 718–735"
    type: journal

  - id: lally2017
    authors: "Lally, J., et al."
    year: 2017
    title: "Remission and recovery from first-episode psychosis in adults: Systematic review and meta-analysis"
    journal: "British Journal of Psychiatry"
    locator: "211(6), 350–358"
    type: journal

  - id: aldersey2019
    authors: "Aldersey, H. M., et al."
    year: 2019
    title: "Family recovery in serious mental illness: A systematic review"
    journal: "Psychiatric Rehabilitation Journal"
    type: journal

  - id: wechsler2021
    authors: "Wechsler, T., et al."
    year: 2021
    title: "Family recovery in mental illness: A systematic review of the literature"
    journal: "Issues in Mental Health Nursing"
    locator: "42(9), 850–862"
    type: journal

  - id: pitschelwalz2001
    authors: "Pitschel-Walz, G., Leucht, S., Bäuml, J., Kissling, W., & Engel, R. R."
    year: 2001
    title: "The effect of family interventions on relapse and rehospitalization in schizophrenia: A meta-analysis"
    journal: "Schizophrenia Bulletin"
    locator: "27(1), 73–92"
    type: journal

  - id: bapk2024
    authors: "BApK – Bundesverband der Angehörigen psychisch erkrankter Menschen e.V."
    year: 2024
    title: "BApK – Beratung und Information für Angehörige"
    url: "https://www.bapk.de"
    type: website

  - id: brown2007
    authors: "Brown, W., & Kandirikirira, N."
    year: 2007
    title: "Recovering Mental Health in Scotland. Report on Narrative Investigation of Mental Health Recovery"
    publisher: "Scottish Recovery Network, Glasgow"
    type: report
    url: "https://lx.iriss.org.uk/sites/default/files/resources/BROWN%20-and-%20KANDIRIKIRIRA%202007%20Recovering%20Mental%20Health%20in%20Scotland.%20Report.pdf"

  - id: rennick2024neon
    authors: "Rennick-Egglestone, S., et al."
    year: 2024
    title: "Effectiveness and cost-effectiveness of online recorded recovery narratives in improving quality of life for people with psychosis experience (NEON Trial)"
    journal: "The Lancet Regional Health – Europe"
    type: journal
    url: "https://www.thelancet.com/journals/lanepe/article/PIIS2666-7762(24)00268-0/fulltext"

  - id: neonc2024
    authors: "NEON-C Trial Group"
    year: 2024
    title: "Pragmatic, feasibility randomised controlled trial of a recorded mental health recovery narrative intervention for informal carers (NEON-C)"
    journal: "BMJ Open"
    type: journal
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10845336/"

  - id: slade2021neon
    authors: "Slade, M., et al."
    year: 2021
    title: "Recorded mental health recovery narratives as a resource for people affected by mental health problems"
    journal: "JMIR Formative Research"
    type: journal
    url: "https://formative.jmir.org/2021/5/e24417/"

  - id: scottishrecovery
    authors: "Scottish Recovery Network"
    year: 2024
    title: "Sharing recovery stories"
    url: "https://scottishrecovery.net/sharing-recovery/"
    type: website

  - id: hvn
    authors: "Hearing Voices Network"
    year: 2024
    title: "Hearing Voices Network – International"
    url: "https://www.hearing-voices.org/"
    type: website

  - id: promentesana
    authors: "Stiftung Pro Mente Sana Schweiz"
    year: 2024
    title: "Grundlagen zur Genesung"
    url: "https://promentesana.ch/selbstbestimmt-genesen/grundlagen-zur-genesung/was-bedeutet-recovery"
    type: website

  - id: rcbern
    authors: "Recovery College Bern"
    year: 2024
    title: "Recovery College Bern"
    url: "https://www.recoverycollegebern.ch/"
    type: website

  - id: salyers2017
    authors: "Salyers, M. P., et al."
    year: 2017
    title: "Burnout and quality/safety in healthcare: A meta-analysis"
    journal: "Journal of General Internal Medicine"
    locator: "32(4), 475–482"
    type: journal

# === CRISIS HELPLINES (D-A-CH) ===
helplines:
  - country: "CH"
    name: "Die Dargebotene Hand"
    number: "143"
    coverage: "24/7"
    target: "alle"
    url: "https://www.143.ch"
  - country: "CH"
    name: "Pro Juventute"
    number: "147"
    coverage: "24/7"
    target: "Kinder/Jugendliche"
    url: "https://www.147.ch"
  - country: "CH"
    name: "Allgemeiner Notruf / Sanität"
    number: "144"
    coverage: "Lebensgefahr"
    target: "alle"
  - country: "DE"
    name: "Telefonseelsorge"
    number: "0800 111 0 111 / 0800 111 0 222"
    coverage: "24/7, kostenlos, anonym"
    target: "alle"
    url: "https://www.telefonseelsorge.de"
  - country: "DE"
    name: "Info-Telefon Depression"
    number: "0800 33 44 533"
    coverage: "Mo/Di/Do 13–17 Uhr, Mi/Fr 8.30–12.30 Uhr"
    target: "alle"
    url: "https://www.deutsche-depressionshilfe.de"
  - country: "DE"
    name: "Allgemeiner Notruf"
    number: "112"
    coverage: "Lebensgefahr"
    target: "alle"
  - country: "AT"
    name: "Telefonseelsorge"
    number: "142"
    coverage: "24/7"
    target: "alle"
    url: "https://www.telefonseelsorge.at"
  - country: "AT"
    name: "Rat auf Draht"
    number: "147"
    coverage: "24/7"
    target: "Kinder/Jugendliche"
    url: "https://www.rataufdraht.at"
  - country: "AT"
    name: "Allgemeiner Notruf / Rettung"
    number: "144"
    coverage: "Lebensgefahr"
    target: "alle"
  - country: "EU"
    name: "European Emergency Number"
    number: "112"
    coverage: "EU-weit, Lebensgefahr"
    target: "alle"
  # === Linhas portuguesas (para pessoas lusófonas em Portugal) ===
  - country: "PT"
    name: "SOS Voz Amiga"
    number: "213 544 545"
    coverage: "Todos os dias 16h–24h"
    target: "adultos"
    url: "https://www.sosvozamiga.org"
  - country: "PT"
    name: "Linha SOS Estudante"
    number: "239 484 020"
    coverage: "Todos os dias 20h–01h"
    target: "estudantes e jovens adultos"
  - country: "PT"
    name: "Telefone da Amizade"
    number: "222 080 707"
    coverage: "Todos os dias 16h–23h"
    target: "adultos"
  - country: "PT"
    name: "Número Europeu de Emergência"
    number: "112"
    coverage: "perigo de vida"
    target: "todos"
  # === Linhas brasileiras (para pessoas lusófonas no Brasil) ===
  - country: "BR"
    name: "CVV — Centro de Valorização da Vida"
    number: "188"
    coverage: "24/7, gratuito, sigiloso"
    target: "todos"
    url: "https://www.cvv.org.br"
  - country: "BR"
    name: "SAMU"
    number: "192"
    coverage: "emergência médica"
    target: "todos"
---
# Aviso importante antes de ler
{#disclaimer reading_time=2}

:::info{type=warmth title="Lê primeiro isto, por favor"}
Esta aplicação é um **protótipo**. Está a ser desenvolvida e ainda não está concluída.

Serve exclusivamente para testar um possível futuro workbook na área do recovery.
:::

## O que isto é e o que não é

Estás a usar uma **versão de teste** de uma aplicação que ainda está em desenvolvimento. Os textos e funcionalidades são um primeiro rascunho. Ainda não foram revistos de forma profissional — nem do ponto de vista clínico nem linguístico.

**Esta aplicação NÃO é uma ferramenta terapêutica.** Não substitui qualquer tratamento, terapia, aconselhamento médico ou intervenção em crise.

## Por favor, segue as seguintes regras

- **Não a uses em contextos clínicos.** Na sua forma atual, esta aplicação não pode ser usada como recurso em clínicas, consultórios, gabinetes de aconselhamento ou outros contextos de cuidados.
- **Não a uses como apoio único na esfera privada.** Se tu próprio/a estás em sofrimento, utiliza esta aplicação apenas no âmbito de uma fase de teste organizada — não como acompanhamento único numa situação difícil de vida.
- **Em caso de dúvida: procura ajuda real.** Se estás a sentir-te mal, dirige-te a uma pessoa de confiança, a quem te acompanha clinicamente ou aos números de crise indicados no capítulo 20 deste workbook.

## Sem garantia, sem responsabilidade

Os conteúdos desta aplicação são disponibilizados sem qualquer garantia. Não se assume qualquer responsabilidade por danos — materiais ou imateriais — que possam surgir do uso ou do não uso desta aplicação.

A aplicação foi elaborada com o melhor do nosso conhecimento e com base na investigação atual sobre recovery. Ainda assim, pode conter erros, imprecisões ou formulações pouco adequadas. Se notares algo, o teu retorno é bem-vindo — é exatamente esse o propósito desta fase de teste.

## Se estás neste momento numa crise

Se ler esta aplicação te custa ou te desestabiliza, põe-na de lado.

Em crises agudas podes contactar a qualquer hora:
- **Suíça:** 143 (Die Dargebotene Hand)
- **Alemanha:** 0800 111 0 111 (Telefonseelsorge)
- **Áustria:** 142 (Telefonseelsorge)
- **Em perigo de vida:** 112 ou 144 (CH/AT) ou 112 (DE)

Pedir ajuda nunca é cedo demais.

:::standard{reading_time=2}
Estás a usar um **protótipo**. Esta aplicação ainda não está terminada — pretende mostrar como poderia ser um futuro workbook de Recovery. Os textos e funcionalidades são um primeiro esboço e ainda não foram revistos profissionalmente.

**Esta aplicação não é uma ferramenta terapêutica.** Não substitui tratamento, terapia, aconselhamento médico nem intervenção em crise.

**Por favor segue estas regras:**

- Não a uses em contextos clínicos — ou seja, não como recurso em clínicas, consultórios ou serviços de aconselhamento.
- Não a uses como apoio único numa situação de vida difícil.
- Em caso de dúvida: procura ajuda real — uma pessoa de confiança, a tua equipa de cuidados ou uma linha de crise.

**Em crise aguda** podes ligar 24h por dia: SOS Voz Amiga (PT) **213 544 545**, CVV (BR) **188**, Suíça **143**, Alemanha **0800 111 0 111**, Áustria **142**. Em perigo de vida: **112**.

Os conteúdos são disponibilizados sem garantia. Se notares algo, agradecemos o teu retorno — é precisamente esse o objectivo desta fase de testes.

Ao continuar a ler, confirmas que compreendeste estas indicações.
:::

:::pull
Ao continuares a ler confirmas que compreendeste estas indicações e que utilizas a aplicação no âmbito de uma fase de teste.
:::


# Prefácio: Recovery começa com histórias
{#vorspann reading_time=4}

:::pull
Recovery são muitos milhares de histórias de pessoas que, apesar dos seus sintomas ou por causa deles, encontraram um caminho para uma vida boa.
:::

São histórias que raramente aparecem nos jornais, porque não dão escândalo. Histórias que, no entanto, acontecem todos os dias — em livrarias, junto a pianos, em coros, em grupos de conversa, em salas de estar, em salas de espera, em cozinhas.

Uma mulher que durante muito tempo esteve convencida de que nunca mais exerceria uma profissão e que hoje gere uma pequena livraria. Um pai que, depois de uma psicose, volta a tocar piano — de forma diferente do que antes, com menos perfeição, com mais amor. Um jovem que, após anos com um diagnóstico de borderline, se tornou acompanhante de recovery, porque quer estender a outros a mão que a ele próprio faltou. Uma mãe que acompanhou a filha através de um transtorno alimentar grave e diz: nesse tempo aprendi mais sobre o amor do que em toda a minha vida anterior.

Histórias assim não se contam às dúzias. Contam-se aos milhares. Provavelmente às centenas de milhares. Tantas quantas são as pessoas que alguma vez atravessaram um período psíquico difícil.

## Recovery está documentado

A Rede Escocesa de Recovery reuniu em 2007 sessenta e quatro destas histórias e avaliou-as sistematicamente [^brown2007]. A iniciativa britânica ImROC recolhe relatos de experiência há anos [^imroc]. A comunidade internacional de ouvidores de vozes reúne, desde os anos 1990, vozes que não estão nos manuais [^hvn].

Na Universidade de Nottingham, Mike Slade construiu com o programa NEON — Narrative Experiences Online — uma coleção científica de histórias de recovery gravadas [^slade2021neon]. Em estudos controlados aleatorizados ficou demonstrado que ouvir estas histórias melhora de forma mensurável a qualidade de vida — em pessoas com experiência de psicose [^rennick2024neon] e em familiares que as acompanham [^neonc2024].

Dito de outro modo: Recovery não é apenas uma promessa sentida. Recovery é um fenómeno documentado. E as histórias de outras pessoas são, por si só, uma forma de ajuda.

## Recovery é prático

Recovery não acontece, em primeiro lugar, na sala de consulta. Recovery são encontros. Recovery é o jardim em que, depois de meses, se volta a plantar. É o cão que todas as manhãs encontra a porta. É o coro em que a própria respiração volta a ter uma voz. É a amiga que escuta sem querer reparar. É o grupo trialógico de quarta à noite. É a caminhada pelas colinas. É o pão que, com massa-mãe, precisa de doze horas.

Recovery são histórias de resiliência — e de criatividade, que nasce muitas vezes precisamente ali onde algo se quebrou. E muito frequentemente Recovery é também: felicidade.

Não a felicidade impecável e sempre radiante das brochuras polidas. Mas aquela outra — a felicidade silenciosa, agradecida, por vezes surpreendida. A felicidade que só se conhece quando se sabe quão longo pode ser um dia.

## E tu?

Não tens de sentir nada disto para estares aqui. Talvez este não seja o momento para palavras grandes como felicidade ou sentido. Talvez hoje baste que leias esta página. Isso é suficiente.

Este workbook foi escrito para pessoas que percorrem um caminho assim — ou que o acompanham, ou que o querem compreender. Não quer ser uma teoria bonita. Quer ser um sinal de caminho.

:::pull
Antes de começarmos — uma breve orientação.
:::

:::easy{reading_time=1}
Recovery é um movimento. Muitas pessoas conseguiram: tiveram um tempo difícil. Hoje vivem bem. Apesar da doença. Por vezes até por causa da doença.

Existem milhares destas histórias.

Recovery não acontece só no médico. Recovery acontece na tua vida. A cozinhar. A passear. A falar com pessoas boas.

Este workbook quer ajudar-te. Não é um livro para estudar. É um companheiro.
:::

:::quiz{id=q-vorspann}
- q: "Onde acontece mais Recovery?"
  type: multiple-choice
  options:
    - text: "Só na clínica."
      correct: false
      explanation: "Não. Recovery acontece sobretudo no quotidiano — em encontros, em pequenos passos."
    - text: "Na vida — em encontros, no quotidiano."
      correct: true
      explanation: "Exatamente. O tratamento é uma ferramenta, não um lugar."
    - text: "Só quando todos os sintomas desaparecerem."
      correct: false
      explanation: "Recovery não começa só depois da ausência de sintomas."

- q: "Quantas histórias de Recovery existem?"
  type: multiple-choice
  options:
    - text: "Um punhado."
      correct: false
    - text: "Centenas."
      correct: false
    - text: "Milhares, se não centenas de milhares."
      correct: true
      explanation: "Tantas quantas as pessoas que alguma vez atravessaram um tempo difícil."
:::

:::flashcards{id=f-vorspann}
- front: "Recovery começa com …"
  back: "… histórias. Milhares de pessoas que, apesar dos seus sintomas ou por causa deles, encontraram um caminho para uma vida boa."
- front: "Programa NEON"
  back: "Coleção científica de histórias de recovery gravadas (Uni. Nottingham). Estudos mostram: ouvir estas histórias melhora de forma mensurável a qualidade de vida."
- front: "Recovery acontece …"
  back: "… não em primeiro lugar na sala de consulta. No jardim, no coro, na conversa, ao cozinhar, em encontros."
:::

:::standard{reading_time=2}
Recovery começa com histórias. Não com teoria, não com diagnósticos — com pessoas que encontraram um caminho.

Uma mulher que durante anos pensou que não voltaria a exercer uma profissão e que hoje gere uma pequena livraria. Um pai que, depois de uma psicose, volta a tocar piano — de forma diferente, com menos perfeição, com mais amor. Um jovem que, após um diagnóstico de borderline, acompanha hoje outras pessoas, porque quer estender-lhes a mão que a ele próprio faltou.

Histórias assim não se contam às dúzias. Contam-se aos milhares. Tantas quantas as pessoas que atravessaram um período psíquico difícil.

Recovery é mais do que uma promessa sentida. Recovery está documentado:

- A rede escocesa de recovery analisou sistematicamente 64 percursos de vida.
- A Universidade de Nottingham reúne cientificamente narrativas de recovery.
- Os estudos mostram: ouvir estas histórias melhora de forma mensurável a qualidade de vida.

Recovery raramente acontece primeiro na sala de consulta. Acontece no jardim onde, depois de meses, se volta a plantar. No coro onde a tua respiração volta a ter voz. Na amiga que escuta sem querer consertar.

Não precisas de sentir nada disto para estares aqui. Talvez hoje baste que leias esta página. É suficiente.

Este workbook é um sinal de caminho. Não uma teoria bonita — mas um companheiro para o teu percurso.
:::

:::standard-quiz{id=q-vorspann-std}
- q: "Onde acontece sobretudo Recovery?"
  type: multiple-choice
  options:
    - text: "Só em clínica ou em terapia."
      correct: false
      explanation: "Recovery acontece sobretudo no quotidiano — em encontros, no jardim, no coro, ao cozinhar."
    - text: "Na vida — em encontros e no quotidiano."
      correct: true
      explanation: "Exatamente. O tratamento é uma ferramenta, não um lugar."
    - text: "Só quando todos os sintomas desapareceram."
      correct: false
      explanation: "Não. Recovery começa no meio da dificuldade."

- q: "Quantas são as histórias de Recovery?"
  type: multiple-choice
  options:
    - text: "Um punhado."
      correct: false
    - text: "Milhares, provavelmente centenas de milhares."
      correct: true
      explanation: "Tantas quantas as pessoas que atravessaram um período difícil."
    - text: "Apenas alguns casos isolados."
      correct: false
:::

:::standard-flashcards{id=f-vorspann-std}
- front: "Recovery começa com …"
  back: "… histórias. Milhares de pessoas que, apesar dos seus sintomas ou por causa deles, encontraram um caminho para uma vida boa."
- front: "Onde acontece Recovery?"
  back: "No quotidiano. No jardim, no coro, na conversa, ao cozinhar. O tratamento é uma ferramenta, não um lugar."
- front: "Estás sozinho, estás sozinha?"
  back: "Não. Milhares de pessoas atravessaram períodos semelhantes. As suas histórias mostram: existe um caminho."
:::


# Uma breve nota sobre a linguagem
{#sprache reading_time=2}

As palavras criam realidade. Quem é tratado por «esquizofrénico» ouve um diagnóstico. Quem é tratado por «pessoa com o diagnóstico de esquizofrenia» continua a ser, em primeiro lugar, uma pessoa. Esta introdução usa deliberadamente uma linguagem person-first: o diagnóstico depois da pessoa, não antes [^ameringschmolke2012] [^knuf2026].

Falamos de pessoas com crises psíquicas, experiências de crise ou experiência com a psiquiatria — não de «doentes». Falamos de pessoas em Recovery — não de «curados». Usamos «tu», porque o workbook digital é um espaço pessoal — não porque nos coloquemos acima de ti. Se lês como profissional: lê esse «tu» como modelo de um estilo de linguagem que cria proximidade sem marcar a hierarquia.

Não se estabeleceu uma tradução portuguesa elegante de Recovery — tal como não existe para o termo estreitamente aparentado Empowerment. Por isso usamos Recovery de forma consistente como termo técnico e, no próximo capítulo, juntamos-lhe a leitura alemã complementar «Esperança — Poder — Sentido» [^ameringschmolke2006].

:::easy{reading_time=1}
As palavras são importantes.

Quem é chamado «esquizofrénico» fica reduzido à doença. Quem é chamado «pessoa com esquizofrenia» continua a ser, em primeiro lugar, uma pessoa.

Usamos a palavra Recovery. É inglesa. Não há uma boa palavra portuguesa para isso. Recovery quer dizer: percorrer um caminho para uma vida boa.

Nesta app tratamos-te por «tu». Não porque sejamos melhores. Mas porque este espaço é o teu espaço.
:::

:::quiz{id=q-sprache}
- q: "Qual formulação é person-first?"
  type: multiple-choice
  options:
    - text: "O esquizofrénico"
      correct: false
    - text: "Pessoa com o diagnóstico de esquizofrenia"
      correct: true
      explanation: "Diagnóstico depois da pessoa, não antes."
    - text: "Um esquizo"
      correct: false
:::

:::flashcards{id=f-sprache}
- front: "Linguagem person-first"
  back: "Diagnóstico depois da pessoa, não antes: 'pessoa com esquizofrenia' em vez de 'esquizofrénico'."
- front: "Porquê Recovery como termo?"
  back: "Não existe uma tradução portuguesa elegante. Recovery é usado de forma consistente como termo técnico consolidado."
:::

:::standard{reading_time=2}
As palavras criam realidade. Não são inocentes.

Quem é chamado «esquizofrénico» ouve um diagnóstico antes mesmo de ser uma pessoa. Quem é chamado «pessoa com o diagnóstico de esquizofrenia» continua a ser, em primeiro lugar, uma pessoa — e carrega o diagnóstico como uma parte, não como o todo.

Este workbook usa deliberadamente uma linguagem person-first: o diagnóstico vem depois da pessoa, não antes dela.

Em concreto significa:

- Falamos de pessoas com crises psíquicas, não de «doentes».
- Falamos de pessoas em Recovery, não de «curados».
- Falamos de acompanhamento de Recovery, não de «trabalho com internados».

Para a própria palavra Recovery não existe tradução portuguesa natural — tal como para Empowerment. Por isso usamos Recovery de forma consistente como termo técnico. No próximo capítulo juntamos-lhe a leitura alemã «Esperança — Poder — Sentido».

Uma particularidade: tratamos-te sempre por «tu». Não porque nos coloquemos acima de ti — pelo contrário. O workbook digital é um espaço pessoal. O «tu» cria proximidade, sem marcar a hierarquia. Se lês como profissional: lê esse «tu» como modelo de um estilo de linguagem que exprime paridade.
:::

:::standard-quiz{id=q-sprache-std}
- q: "Qual formulação é person-first?"
  type: multiple-choice
  options:
    - text: "O esquizofrénico"
      correct: false
      explanation: "Aqui o diagnóstico vem primeiro — não é person-first."
    - text: "Pessoa com o diagnóstico de esquizofrenia"
      correct: true
      explanation: "Exato. O diagnóstico depois da pessoa — a pessoa fica em primeiro plano."
    - text: "Um esquizo"
      correct: false
      explanation: "Estigmatizante e reduz a pessoa ao diagnóstico."

- q: "Porque é que o workbook usa «tu»?"
  type: multiple-choice
  options:
    - text: "Porque quem escreve se sente superior."
      correct: false
    - text: "Porque o workbook digital é um espaço pessoal — proximidade sem hierarquia."
      correct: true
      explanation: "O «tu» cria proximidade, não distância para baixo."
:::

:::standard-flashcards{id=f-sprache-std}
- front: "Linguagem person-first"
  back: "Diagnóstico depois da pessoa, não antes. «Pessoa com esquizofrenia» em vez de «esquizofrénico»."
- front: "Porque é que «Recovery» fica em inglês?"
  back: "Não existe uma tradução portuguesa natural. Recovery é usado como termo técnico consolidado."
:::


# Bem-vinda, bem-vindo
{#willkommen reading_time=3}

Que bom que estás aqui.

Este workbook digital foi escrito para ti — se estás a viver agora um tempo difícil, se recebeste um diagnóstico ou se vives há muito tempo com uma doença psíquica.

Talvez tenhas estado muitas vezes em tratamento. Talvez estejas no início. Talvez já tenhas um longo caminho atrás de ti e procures uma nova linguagem para aquilo que vives.

Este workbook foi escrito para que o possas explorar ao teu próprio ritmo. Não tens de ler tudo. Não tens de fazer nada por uma ordem específica. Podes saltar, voltar, pousar.

:::info{type=metaphor title="Uma imagem para o caminho: Kintsugi"}
Kintsugi é uma arte tradicional japonesa de reparação. A cerâmica partida é recomposta com ouro. As linhas de fratura não são escondidas, mas tornadas visíveis e enobrecidas. O vaso não vale menos por se ter quebrado — aos olhos de muitos, vale mais.

Os caminhos de recovery seguem muitas vezes uma lógica semelhante: não se trata de apagar as fraturas, mas de as integrar num novo conjunto.

Recovery não significa voltar a ser o que se era antes. Recovery significa que aquilo que foi pode tornar-se parte de um novo conjunto.
:::

:::quote{author="U.S. Substance Abuse and Mental Health Services Administration (SAMHSA), 2012" source="samhsa2012"}
Recovery é uma viagem de cura e transformação que permite a uma pessoa com uma doença psíquica viver uma vida com sentido numa comunidade da sua escolha — ao mesmo tempo que procura realizar todo o seu potencial.
:::

:::easy{reading_time=1}
Que bom que estás aqui.

Este workbook foi escrito para ti — se estás a viver tempos difíceis.

Não tens de ler tudo. Escolhe o que combina contigo. Volta quando quiseres.

És tu que decides o teu ritmo.
:::

:::quiz{id=q-willkommen}
- q: "Para quem é este workbook?"
  type: multiple-choice
  options:
    - text: "Para pessoas com experiência vivida de sofrimento psíquico."
      correct: true
      explanation: "Foi escrito para ti — onde quer que estejas no teu caminho."
    - text: "Só para profissionais."
      correct: false
    - text: "Só para pessoas com um diagnóstico específico."
      correct: false

- q: "Tens de ler o workbook por ordem?"
  type: true-false
  correct: false
  explanation: "Não. Podes saltar, voltar, pousar. És tu que decides o ritmo e a ordem."
:::

:::flashcards{id=f-willkommen}
- front: "Para quem é este workbook?"
  back: "Para ti — se tens experiência vivida de sofrimento psíquico."
- front: "Kintsugi"
  back: "Arte japonesa de reparação: as fraturas são recompostas com ouro, não escondidas. Metáfora para Recovery: aquilo que se quebrou torna-se parte de um novo conjunto."
- front: "Autodeterminação na leitura"
  back: "Tu escolhes o que lês. Tu escolhes o teu ritmo. Podes voltar a entrar em qualquer parte."
:::

:::standard{reading_time=2}
Que bom que estás aqui.

Este workbook foi escrito para ti — se estás a viver agora um tempo difícil, se recebeste um diagnóstico ou se vives há muito tempo com uma doença psíquica.

Talvez estejas no início. Talvez tenhas já muitas terapias atrás de ti. Talvez procures uma linguagem nova para o que vives — ou simplesmente alguém que não queira consertar, mas que caminhe ao teu lado.

Não tens de trazer nada contigo. Nenhum conhecimento prévio, nenhum dia bom, nenhuma história já fechada. Lê o que te falar. Deixa o que não fizer sentido agora. Volta quando quiseres.

Uma imagem que gostamos de usar é Kintsugi — a arte japonesa da reparação. A cerâmica partida é recomposta com ouro. As linhas de fratura não são escondidas, mas tornadas visíveis. O vaso não vale menos por se ter partido — aos olhos de muitos, vale mais.

Recovery segue uma lógica semelhante. Não se trata de apagar o que foi. Trata-se de permitir que aquilo que se quebrou se torne parte de um novo conjunto.

Algumas indicações antes de começar:

- És tu que decides o ritmo e a ordem.
- Há diferentes modos de leitura: fácil, padrão, aprofundado.
- Podes entrar e sair em qualquer parte.
- Se algo se tornar demasiado: pousa-o. Não é desistir — é cuidar de ti.

Ninguém te empurra. Este espaço é o teu.
:::

:::standard-quiz{id=q-willkommen-std}
- q: "Quem decide o ritmo e a ordem?"
  type: multiple-choice
  options:
    - text: "A app."
      correct: false
    - text: "Tu."
      correct: true
      explanation: "Podes saltar, pousar, voltar."
    - text: "A ordem está predefinida."
      correct: false

- q: "O que significa Kintsugi como imagem para Recovery?"
  type: multiple-choice
  options:
    - text: "As linhas de fratura devem ficar o mais invisíveis possível."
      correct: false
    - text: "As linhas de fratura tornam-se visíveis — e parte de um novo conjunto."
      correct: true
      explanation: "Recovery não significa apagar tudo. O que foi pode tornar-se parte do novo."
:::

:::standard-flashcards{id=f-willkommen-std}
- front: "O teu ritmo"
  back: "És tu que decides o que lês e quando. Saltar, pousar, voltar — tudo é permitido."
- front: "Kintsugi"
  back: "Arte japonesa de reparação: linhas de fratura recompostas com ouro. Metáfora de Recovery — o que se quebrou torna-se parte de um novo conjunto."
- front: "Quando algo se torna demasiado"
  back: "Pousa-o. Não é desistir — é cuidar de ti."
:::


# 1. O que Recovery realmente significa
{#kap-1 reading_time=5}

## A palavra e a sua história

A palavra inglesa recovery significa literalmente recuperação, reaquisição, retomada. Na saúde mental, afirmou-se desde os anos 80 como termo guarda-chuva para um novo olhar sobre o sofrimento psíquico [^anthony1993] [^deegan1988].

Recovery não é, em primeiro lugar, um termo médico. Nasce das experiências de pessoas que receberam diagnósticos psiquiátricos e que se recusaram a deixar-se reduzir a eles [^chamberlin1978] [^deegan1988].

## A definição clássica

A definição mais citada é de William Anthony, na altura diretor do Center for Psychiatric Rehabilitation da Universidade de Boston.

:::quote{author="Anthony, 1993, p. 15" source="anthony1993" lang="en"}
Recovery is described as a deeply personal, unique process of changing one's attitudes, values, feelings, goals, skills, and/or roles. It is a way of living a satisfying, hopeful, and contributing life even with limitations caused by illness.
:::

:::quote-translation{source="anthony1993" translator="tradução própria"}
Recovery é um processo de mudança profundamente pessoal e único — das próprias atitudes, valores, sentimentos, objetivos, competências ou papéis. É uma forma de viver na qual, mesmo com as limitações causadas por uma doença, se pode levar uma vida plena, cheia de esperança, e dar um contributo.
:::

Esta definição é, há mais de três décadas, o ponto de referência internacional. Foi adotada, entre outros, pela SAMHSA [^samhsa2012], moldada pela tradição do Sainsbury Centre for Mental Health e integrada nas diretrizes da OMS [^who2021].

## Recuperação clínica e recuperação pessoal

A investigação distingue dois conceitos [^slade2009]:

- **Recuperação clínica** (clinical recovery): os sintomas diminuem ou desaparecem, o diagnóstico perde relevância. É a compreensão que vem da medicina.
- **Recuperação pessoal** (personal recovery): vives a tua vida como cheia de sentido, digna de ser vivida e autodeterminada — independentemente de todos os sintomas terem desaparecido ou não.

Recovery, no sentido deste workbook, refere-se sobretudo à recuperação pessoal. Pode acompanhar-se da recuperação clínica, mas não tem de o fazer.

## Definições da área de língua alemã

:::quote{author="Fundação Pro Mente Sana Suíça, 2024" source="promentesana"}
A descrição mais breve de Recovery é: levar a melhor vida possível, mesmo em confronto com um sofrimento psíquico grave.
:::

Amering e Schmolke falam do «fim da incurabilidade» [^ameringschmolke2012]. Apoiam-se em investigação longitudinal que mostra: também depois de doenças graves como a esquizofrenia, uma vida plena é possível. Knuf entende Recovery como processo de confronto consigo próprio e com a doença — com o objetivo de levar, apesar dos problemas psíquicos, uma vida cheia de esperança e ativa [^knuf2026].

A diretriz alemã S3 «Terapias psicossociais nas doenças psíquicas graves» trouxe Recovery para o mainstream da assistência na área germanófona e definiu a orientação Recovery como princípio orientador [^dgppn2019].

:::reflection{id=1 title="O que significa recuperação para ti?"}
- Quando ouves a palavra recuperação — que imagem surge primeiro?
- Qual das definições acima te fala mais? E porquê?
- O que seria para ti uma «boa vida» — mesmo que nem tudo tivesse «desaparecido»?
:::

:::easy{reading_time=2}
Recovery significa: recuperação.

Mas Recovery não significa: todos os sintomas têm de desaparecer.

Recovery significa: vives bem. Mesmo que ainda vivas coisas difíceis.

Existem dois tipos de recuperação:

- Os sintomas diminuem. Isto é a recuperação clínica.
- Vives a tua vida como boa e cheia de sentido. Isto é a recuperação pessoal.

Ambas são possíveis. Ambas podem estar lá ao mesmo tempo.

Uma fundação suíça diz: Recovery significa levar a melhor vida possível. Mesmo que haja algo difícil.

:::reflection{id=1-easy title="Pergunta a ti mesma, a ti mesmo"}
- O que significa uma boa vida para ti?
- Do que precisas para a ter? E do que não precisas?
:::
:::

:::quiz{id=q-1}
- q: "O que significa Recovery?"
  type: multiple-choice
  options:
    - text: "Todos os sintomas têm de desaparecer."
      correct: false
      explanation: "Não. A recuperação pessoal pode funcionar mesmo com sintomas persistentes."
    - text: "Levar uma vida cheia de sentido e autodeterminada — mesmo que fiquem sintomas."
      correct: true
      explanation: "Exatamente. É o cerne da recuperação pessoal (Anthony 1993)."
    - text: "Um método terapêutico específico."
      correct: false

- q: "Que dois tipos de recuperação distingue a investigação?"
  type: multiple-choice
  options:
    - text: "Recuperação rápida e lenta."
      correct: false
    - text: "Recuperação clínica e pessoal."
      correct: true
      explanation: "Clínica = sintomas desaparecem. Pessoal = viver uma vida com sentido."
    - text: "Recuperação terapêutica e medicamentosa."
      correct: false
:::

:::flashcards{id=f-1}
- front: "Recuperação clínica"
  back: "Os sintomas diminuem ou desaparecem. O diagnóstico perde relevância. A compreensão médica de cura."
- front: "Recuperação pessoal"
  back: "Vives a tua vida como cheia de sentido, digna de ser vivida e autodeterminada — independentemente de todos os sintomas terem desaparecido."
- front: "Anthony 1993 — a definição central"
  back: "Recovery é um processo profundamente pessoal e único de mudança de atitudes, valores, sentimentos, objetivos e papéis — um caminho para uma vida plena, mesmo com limitações."
- front: "Pro Mente Sana — a definição mais breve"
  back: "Levar a melhor vida possível — mesmo em confronto com um sofrimento psíquico grave."
:::

:::standard{reading_time=2}
Recovery é uma palavra inglesa. Literalmente significa recuperação, reaquisição, retomada. Na saúde mental, desde os anos 80, é o termo guarda-chuva para um novo olhar sobre o sofrimento psíquico — um olhar que não foi inventado pelos médicos, mas pelas pessoas com experiência direta.

A definição clássica vem de William Anthony, investigador de Boston: Recovery é um processo profundamente pessoal de mudança das próprias atitudes, valores, objetivos e papéis — uma forma de levar uma vida plena, cheia de esperança, mesmo com as limitações de uma doença.

A investigação distingue duas leituras:

- **Recuperação clínica:** os sintomas diminuem ou desaparecem. O diagnóstico perde o seu peso. É a perspetiva médica.
- **Recuperação pessoal:** vives a tua vida como cheia de sentido, digna de ser vivida e autodeterminada — independentemente de ainda haver sintomas.

Recovery, no sentido deste workbook, refere-se sobretudo à recuperação pessoal. Pode acompanhar-se da recuperação clínica, mas não é obrigatório. Ambas podem coexistir. E ambas podem ter o seu próprio ritmo.

A fundação suíça Pro Mente Sana resume-o numa frase: Recovery significa levar a melhor vida possível — mesmo em confronto com um sofrimento psíquico grave.

O importante é: és mais do que o teu diagnóstico. És, antes de mais, pessoa — o resto vem depois. E não tens de percorrer este caminho sozinha, sozinho. Outras pessoas podem acompanhar-te.
:::

:::standard-quiz{id=q-1-std}
- q: "O que significa Recovery sobretudo?"
  type: multiple-choice
  options:
    - text: "Estar curado. Sem mais sintomas."
      correct: false
      explanation: "Isso seria a recuperação clínica. Recovery significa mais — sobretudo recuperação pessoal."
    - text: "Uma vida plena — mesmo com os sintomas."
      correct: true
      explanation: "Exatamente a definição clássica de Anthony (1993)."
    - text: "Um método terapêutico específico."
      correct: false

- q: "Que dois tipos de recuperação distingue a investigação?"
  type: multiple-choice
  options:
    - text: "Recuperação rápida e lenta."
      correct: false
    - text: "Recuperação clínica e pessoal."
      correct: true
      explanation: "Clínica = sintomas desaparecem. Pessoal = levar uma vida cheia de sentido."

- q: "Quem desenvolveu Recovery como conceito?"
  type: multiple-choice
  options:
    - text: "Sobretudo médicos e empresas farmacêuticas."
      correct: false
    - text: "Pessoas com experiência própria de psiquiatria — em conjunto com a investigação."
      correct: true
      explanation: "O movimento nasce das experiências das pessoas com vivência direta."
:::

:::standard-flashcards{id=f-1-std}
- front: "Recovery (definição central)"
  back: "Levar uma vida plena, cheia de esperança — mesmo com as limitações de uma doença (Anthony 1993)."
- front: "Recuperação clínica"
  back: "Os sintomas diminuem ou desaparecem. O diagnóstico perde o seu peso."
- front: "Recuperação pessoal"
  back: "Vives a tua vida como cheia de sentido, digna e autodeterminada — independentemente de os sintomas permanecerem."
- front: "Pro Mente Sana — a definição mais breve"
  back: "Levar a melhor vida possível, mesmo em confronto com um sofrimento psíquico grave."
:::


# 2. «Esperança — Poder — Sentido»
{#kap-2 reading_time=3}

Em 2006, Michaela Amering e Margit Schmolke publicaram na revista científica suíça Managed Care um artigo intitulado «Esperança — Poder — Sentido. Conceitos de Recovery na psiquiatria» [^ameringschmolke2006]. Com isso marcaram de forma decisiva a leitura germanófona de Recovery.

A tríade «Esperança — Poder — Sentido» resume, na perspetiva D-A-CH, aquilo de que Recovery se trata — como uma tradução clara e próxima do quotidiano dos conceitos centrais em inglês.

| Português | Inglês | Significado no contexto D-A-CH |
|-----------|--------|---------------------------------|
| **Esperança** | Hope | (Re)encontrar um sentimento de si próprio também independente da doença — a esperança como recurso terapêutico. |
| **Poder** | Empowerment | Autocapacitação, liberdade de escolha, responsabilidade própria — «poder» no sentido de reapropriação do espaço de ação [^knufseibert2004]. |
| **Sentido** | Meaning | Valores, objetivos, contributo, pertença — definir a vida para além do papel de paciente. |

A esperança, neste entendimento, está estreitamente ligada ao sentimento de si próprio: a um autovalor que perdura independentemente da experiência da doença, e a uma identidade que abrange mais do que o papel de paciente [^ameringschmolke2006].

Os três conceitos encaixam com a definição de Recovery de Anthony [^anthony1993]. E correspondem ao núcleo do modelo CHIME [^leamy2011]: Esperança = Hope, Poder = Empowerment, Sentido = Meaning. A conexão (Connectedness) e a identidade (Identity) formam o quadro relacional e de si que envolve o resto.

:::easy{reading_time=1}
Duas investigadoras encontraram três palavras para dizer Recovery:

- **Esperança** — Acreditas que pode melhorar.
- **Poder** — Podes decidir. Não és só paciente.
- **Sentido** — A tua vida tem valor. Fazes parte.

Estas três palavras são a leitura germanófona do modelo inglês CHIME. A conexão com os outros e uma identidade própria também fazem parte.
:::

:::quiz{id=q-2}
- q: "O que significa 'Poder' nesta leitura?"
  type: multiple-choice
  options:
    - text: "Exercer poder sobre outras pessoas."
      correct: false
    - text: "Autocapacitação — o direito de co-decidir sobre a própria vida."
      correct: true
      explanation: "'Poder' significa aqui Empowerment no sentido positivo — não poder sobre os outros."
    - text: "Poderes médicos."
      correct: false

- q: "Quem introduziu a tríade 'Esperança — Poder — Sentido'?"
  type: multiple-choice
  options:
    - text: "Patricia Deegan"
      correct: false
    - text: "Amering & Schmolke (2006)"
      correct: true
      explanation: "Na revista científica suíça Managed Care, 2006."
    - text: "A OMS"
      correct: false
:::

:::flashcards{id=f-2}
- front: "Esperança — Poder — Sentido"
  back: "A leitura germanófona de Recovery, introduzida por Amering & Schmolke em 2006. Corresponde a Hope, Empowerment, Meaning no modelo CHIME."
- front: "Poder (no sentido Recovery)"
  back: "Autocapacitação — o direito de co-decidir sobre a própria vida. Não poder sobre os outros."
:::

:::standard{reading_time=2}
Recovery é uma palavra inglesa que se traduz com dificuldade para outras línguas. As psiquiatras austríacas Michaela Amering e Margit Schmolke propuseram em 2006, na revista científica suíça Managed Care, três palavras que captam o cerne — uma tríade hoje divulgada no espaço D-A-CH:

- **Esperança** — a crença de que a tua vida pode ser mais do que a doença. Um sentimento de si próprio que perdura também independentemente dos sintomas.
- **Poder** — autocapacitação. Não poder sobre os outros, mas poder sobre a própria vida. Poder co-decidir. Liberdade de escolha. Responsabilidade própria.
- **Sentido** — valores, objetivos, pertença. Poder definir a vida para além do papel de paciente.

Estas três palavras encaixam com a definição clássica de Recovery. Correspondem também a partes centrais do modelo de Recovery mais influente a nível internacional, o modelo CHIME:

- Esperança = Hope
- Poder = Empowerment
- Sentido = Meaning

Conexão (Connectedness) e Identidade (Identity) formam o quadro envolvente — relações e imagem de si próprio como solo no qual Esperança, Poder e Sentido podem crescer.

Não tens de sentir os três ao mesmo tempo. Por vezes há só esperança, por vezes só sentido. Por vezes começa com o poder — com uma única decisão que tomas tu. Já é suficiente. Recovery não é uma lista para ir riscando.
:::

:::standard-quiz{id=q-2-std}
- q: "O que significa 'Poder' nesta leitura?"
  type: multiple-choice
  options:
    - text: "Exercer poder sobre os outros."
      correct: false
    - text: "Autocapacitação — o direito de co-decidir sobre a própria vida."
      correct: true
      explanation: "'Poder' significa aqui Empowerment no sentido positivo."
    - text: "Poderes médicos."
      correct: false

- q: "Quem introduziu a tríade «Esperança — Poder — Sentido»?"
  type: multiple-choice
  options:
    - text: "Patricia Deegan"
      correct: false
    - text: "Amering e Schmolke (2006)"
      correct: true
      explanation: "Na revista científica suíça Managed Care."
    - text: "A OMS"
      correct: false
:::

:::standard-flashcards{id=f-2-std}
- front: "Esperança — Poder — Sentido"
  back: "A leitura germanófona de Recovery (Amering e Schmolke 2006). Corresponde a Hope, Empowerment, Meaning no modelo CHIME."
- front: "Poder no sentido Recovery"
  back: "Autocapacitação — o direito de co-decidir sobre a própria vida. Não poder sobre os outros."
- front: "Esperança no sentido Recovery"
  back: "A crença de que a tua vida pode ser mais do que a doença. Um sentimento de si próprio que perdura também sem ausência de sintomas."
:::


# 3. O que Recovery NÃO é — seis mitos
{#kap-3 reading_time=5}

Recovery é muitas vezes mal entendido no quotidiano.

## Mito 1: Recovery significa que todos os sintomas têm de desaparecer

Falso. Também pessoas com sintomas persistentes podem viver Recovery [^anthony1993] [^deegan1996] [^andresen2003]. A recuperação pessoal pode coexistir com os sintomas.

## Mito 2: Recovery significa simplesmente pensar positivo

Falso. Recovery não é um apelo ao otimismo a pedido. A esperança, na investigação sobre Recovery, designa uma convicção realista — muitas vezes teimosa — de que a mudança é possível [^slade2013] [^schrank2012].

## Mito 3: Recovery significa passar sem medicamentos ou terapia

Falso. Recovery não é um movimento antimédico. Significa que ÉS TU a co-decidir o que ajuda [^deegandrake2006] [^slade2017sdm]. Amering e Schmolke colocam-no assim: a aceitação de medicamentos ou de um determinado diagnóstico não deveria ser o único pressuposto para apoio psicossocial [^ameringschmolke2006].

## Mito 4: Recovery é um caminho reto e previsível

Falso. Andresen, Oades e Caputi [^andresen2003] e muitos outros mostram: Recovery quase nunca decorre de forma linear. Os recuos fazem parte do caminho — não são o fim, são parte da viagem.

## Mito 5: Quem não «fica bem» tem culpa disso

Falso. Recovery não é um conceito de desempenho nem um juízo moral. O caminho depende de muitos fatores — relações, cuidados, condições socioeconómicas, traumas, acasos [^leboutillier2011].

## Mito 6: Uma doença psíquica é «incurável» — «crónica»

Falso e prejudicial. Estudos longitudinais como o estudo de Vermont [^harding1987] e revisões mais recentes [^lally2017] mostram: a recuperação — também a partir de diagnósticos graves — é possível com regularidade.

Amering e Schmolke alertam de forma expressa contra estas fixações [^ameringschmolke2012]: frases como «o senhor está demasiado doente para psicoterapia» ou, ao contrário, «tudo voltará a ser como antes» seriam, na sua opinião, não só falsas, mas — literalmente — «perigosíssimas». Previsões deste tipo retiram às pessoas o seu próprio espaço de ação antes mesmo de o poderem usar.

Heinz Katschnig encontrou uma imagem forte para isto: o desespero — comunicado a partir de fora e muitas vezes interiorizado — seria a forma mais insidiosa de correntes na psiquiatria. É tão eficaz precisamente porque, visto de fora, não se vê [^ameringschmolke2012].

:::reflection{id=2 title="Que mito te tocou?"}
- Qual destes seis mitos foi, durante muito tempo, realidade para ti?
- Quem te transmitiu este mito — a família, a escola, os meios de comunicação, o sistema psiquiátrico?
- O que seria diferente se largasses hoje este mito?
:::

:::easy{reading_time=2}
Há muitas ideias falsas sobre Recovery. Seis delas são frequentes:

1. **Falso:** Todos os sintomas têm de desaparecer. → Recovery resulta também com sintomas.
2. **Falso:** Tens de pensar positivo. → Não há obrigação de bom humor.
3. **Falso:** Sem medicamentos. → Decides tu o que te ajuda.
4. **Falso:** O caminho é reto. → Os recuos fazem parte.
5. **Falso:** Quem não fica bem é por culpa sua. → Ninguém tem culpa.
6. **Falso:** Há quem seja «incurável». → A recuperação é possível mesmo depois de doenças graves.
:::

:::quiz{id=q-3}
- q: "Qual a afirmação correta?"
  type: multiple-choice
  options:
    - text: "Recovery significa que todos os sintomas têm de desaparecer."
      correct: false
    - text: "Recovery pode resultar também com sintomas persistentes."
      correct: true
      explanation: "A afirmação central de Anthony 1993 e de muitos estudos seguintes."
    - text: "Recovery só é possível em doenças ligeiras."
      correct: false

- q: "Verdadeiro ou falso: Recovery significa não tomar medicamentos."
  type: true-false
  correct: false
  explanation: "Recovery não é um movimento antimédico. Decides em conjunto com profissionais o que ajuda."

- q: "O que dizem os estudos longitudinais como Harding (1987) e Lally (2017) sobre diagnósticos graves?"
  type: multiple-choice
  options:
    - text: "São incuráveis."
      correct: false
    - text: "A recuperação é possível com regularidade mesmo após percursos graves."
      correct: true
      explanation: "É a base do 'fim da incurabilidade' de Amering."
:::

:::flashcards{id=f-3}
- front: "O maior mito de Recovery"
  back: "Recovery não significa: todos os sintomas vão embora. Recovery significa: uma boa vida — também com Dificuldades."
- front: "Linearidade — falso"
  back: "Recovery não é linear. Os recuos fazem parte e não são um fracasso."
- front: "'Incurável' — falso"
  back: "Estudos longitudinais (Harding 1987, Lally 2017) mostram: também depois de doenças graves a recuperação é possível com regularidade."
- front: "'Perigosíssimo'"
  back: "Amering & Schmolke (2012) sobre prognósticos como 'o senhor está demasiado doente para psicoterapia' — estas fixações roubam espaço de ação."
:::

:::standard{reading_time=2}
Sobre Recovery circulam muitas imagens falsas. Seis delas encontram-se no quotidiano com particular frequência — e todas as seis são erradas.

- **«Recovery significa que todos os sintomas têm de desaparecer.»** Não é verdade. Também pessoas com sintomas persistentes podem levar uma vida plena. A recuperação pessoal pode coexistir com os sintomas.
- **«Recovery significa pensar sempre positivo.»** Falso. Recovery não é um apelo ao otimismo a pedido. A esperança, na investigação sobre Recovery, é uma convicção realista, muitas vezes teimosa — não um bom humor forçado.
- **«Recovery significa passar sem medicamentos.»** Falso. Recovery não é um movimento antimédico. Significa que ÉS TU a co-decidir o que ajuda — e o que não.
- **«Recovery é um caminho reto, previsível.»** Falso. Recovery quase nunca é linear. Os recuos fazem parte do caminho. Não são um fracasso, são parte da viagem.
- **«Quem não fica bem é por culpa sua.»** Falso. Recovery não é um conceito de desempenho nem um juízo moral. O caminho depende de muitos fatores: relações, cuidados, condições socioeconómicas, trauma, acaso.
- **«As doenças psíquicas graves são incuráveis.»** Falso — e perigoso. Há décadas que os estudos longitudinais mostram: a recuperação é possível com regularidade mesmo após diagnósticos graves.

Amering e Schmolke chegam a chamar a frases como «o senhor está demasiado doente para psicoterapia» ou «vai voltar a ser como antes» de «perigosíssimas». Previsões deste tipo roubam-te o espaço de ação antes mesmo de o poderes usar.

O desespero, comunicado a partir de fora e interiorizado — são as correntes mais insidiosas da psiquiatria. Precisamente porque são invisíveis.
:::

:::standard-quiz{id=q-3-std}
- q: "Qual a afirmação correta?"
  type: multiple-choice
  options:
    - text: "Recovery significa que todos os sintomas têm de desaparecer."
      correct: false
    - text: "Recovery pode resultar também com sintomas persistentes."
      correct: true
      explanation: "Afirmação central desde Anthony 1993."
    - text: "Recovery só é possível em doenças ligeiras."
      correct: false

- q: "De quem é a culpa quando Recovery é difícil?"
  type: multiple-choice
  options:
    - text: "Tua — não te estás a esforçar o suficiente."
      correct: false
    - text: "De ninguém. Recovery não é uma corrida nem um juízo moral."
      correct: true
      explanation: "O caminho depende de muitos fatores — não só da tua força de vontade."

- q: "O que dizem os estudos longitudinais sobre diagnósticos «incuráveis»?"
  type: multiple-choice
  options:
    - text: "Incurável é incurável."
      correct: false
    - text: "A recuperação é possível com regularidade mesmo após percursos graves."
      correct: true
      explanation: "Estudo de Vermont (Harding 1987), meta-análises atuais (Lally 2017)."
:::

:::standard-flashcards{id=f-3-std}
- front: "O maior mito de Recovery"
  back: "«Todos os sintomas têm de desaparecer.» — Não é verdade. Recovery significa levar uma boa vida, também com Dificuldades."
- front: "Linearidade — falso"
  back: "Recovery quase nunca decorre de forma linear. Os recuos fazem parte do caminho e não são um fracasso."
- front: "«Incurável» — falso"
  back: "Estudos longitudinais mostram: também depois de doenças graves a recuperação é possível com regularidade."
- front: "«Perigosíssimo»"
  back: "Amering e Schmolke sobre prognósticos como «o senhor está demasiado doente para terapia» — estas fixações roubam espaço de ação."
:::


# 4. História do movimento Recovery
{#kap-4 reading_time=6}

## As vozes das pessoas com experiência direta — anos 70 e 80

O movimento Recovery não nasceu num instituto de investigação. Começou nos anos 70 na América do Norte, nas iniciativas de antigos pacientes psiquiátricos — o chamado Ex-Patient ou Survivor-Movement [^chamberlin1978].

Uma das vozes centrais é Patricia Deegan. Aos 17 anos recebeu o diagnóstico de esquizofrenia e ouviu de um médico que nunca levaria uma vida normal. Hoje é psicóloga doutorada, investigadora e pioneira de Recovery reconhecida internacionalmente [^deegan1988] [^deegan1996].

Patricia Deegan formulou dois pensamentos centrais que desde então marcam o movimento Recovery internacional [^deegan1996]:

- Recovery não seria um ponto final nem mera estabilização, mas uma transformação — um caminho no qual se reconhecem os próprios limites e, ao mesmo tempo, se descobrem novas possibilidades.
- As pessoas com doenças psíquicas não seriam recetoras passivas de ajuda, mas sujeitos com capacidade de ação que, pelo seu próprio fazer, podem mudar a sua situação.

## Dorothea Buck, Triálogo e quem ouve vozes

No espaço germanófono, Dorothea Buck abriu um caminho comparável. Esterilizada à força sob o nacional-socialismo e várias vezes tratada em psiquiatria, lutou toda a vida por uma psiquiatria humana [^buck1990].

Em 1989 surgiu em Hamburgo, por iniciativa de Thomas Bock, o primeiro seminário trialógico sobre psicose — um formato em que pessoas com experiência própria, familiares e profissionais falam ao mesmo nível [^bockpriebe2005]. Em 1992 foi fundada a Federação Federal das Pessoas com Experiência em Psiquiatria (BPE). A rede internacional Hearing Voices está ativa na Alemanha, Áustria e Suíça desde os anos 90 [^hvn].

## A cientificação — anos 90 e 2000

William Anthony forneceu, com um artigo-chave de 1993, a definição científica [^anthony1993]. Andresen, Oades e Caputi desenvolveram na Austrália o modelo das cinco fases da recuperação psicológica [^andresen2003].

## Do conceito ao sistema — a partir de 2007

Em 2007 arrancou no Reino Unido o programa ImROC (Implementing Recovery through Organisational Change). Desde então acompanhou centenas de serviços na transformação para uma prática orientada para Recovery [^imroc] [^perkins2012].

Nos EUA, Recovery tornou-se em 2006 a diretriz oficial da agência nacional de saúde SAMHSA. A Convenção da ONU sobre os Direitos das Pessoas com Deficiência ancorou uma compreensão dos direitos humanos orientada para a autodeterminação [^uncrpd2006]. A OMS publicou em 2019 a iniciativa QualityRights [^who2019] e em 2021 a diretriz «Guidance on Community Mental Health Services» [^who2021].

## O espaço germanófono

Na Áustria, Amering e Schmolke marcaram em 2006 um ponto de viragem com o artigo «Esperança — Poder — Sentido» [^ameringschmolke2006] e em 2012 com o livro «Recovery. O fim da incurabilidade» [^ameringschmolke2012]. Na Alemanha, Andreas Knuf publicou já em 2004, com Ulrich Seibert, «Promover a autocapacitação» [^knufseibert2004]; o seu «Recovery e Empoderamento» encontra-se hoje em 2.ª edição [^knuf2026].

O EX-IN (Experienced Involvement) foi desenvolvido a partir de 2005 em Bremen — inspirado por Dorothea Buck e por um projeto Leonardo da Vinci financiado pela UE [^utschakowski2009]. Desde 2011 o EX-IN é coordenado pela associação EX-IN Deutschland e.V. [^exin_de]. Um ensaio aleatório controlado alemão sobre Peer-Support demonstrou a sua eficácia [^mahlke2017].

Na Suíça, a fundação Pro Mente Sana leva o conceito de Recovery aos serviços [^promentesana]. Existem hoje Recovery Colleges, entre outros, em Berna, na Suíça Oriental, em Genebra, em St.Gallen e em Zurique [^rcbern]. A orientação Recovery foi ancorada cientificamente na psiquiatria suíça, entre outros, por Rössler [^roessler2004].

:::easy{reading_time=2}
Recovery não foi inventado no hospital. Recovery foi inventado pelas pessoas com experiência direta.

Na América, as pacientes e os pacientes começaram nos anos 70 a escrever livros. Disseram: somos mais do que a nossa doença.

Uma voz conhecida é Patricia Deegan. Recebeu aos 17 o diagnóstico de esquizofrenia. Hoje é doutora e ajuda outras pessoas.

Na Alemanha foi importante Dorothea Buck. Lutou por uma psiquiatria melhor.

Hoje Recovery é reconhecido em todo o mundo — também pela OMS.
:::

:::quiz{id=q-4}
- q: "Quem marcou o movimento Recovery no início?"
  type: multiple-choice
  options:
    - text: "A indústria farmacêutica."
      correct: false
    - text: "Pessoas com experiência própria em psiquiatria."
      correct: true
      explanation: "O movimento surgiu nos EUA nos anos 70 a partir do Survivor-Movement."
    - text: "Administrações hospitalares."
      correct: false

- q: "Quem é Patricia Deegan?"
  type: multiple-choice
  options:
    - text: "Uma médica sem experiência própria."
      correct: false
    - text: "Uma pioneira de Recovery com diagnóstico próprio de esquizofrenia."
      correct: true
      explanation: "Diagnosticada aos 17. Hoje psicóloga doutorada e voz reconhecida internacionalmente."
    - text: "Uma investigadora de enfermagem suíça."
      correct: false
:::

:::flashcards{id=f-4}
- front: "Patricia Deegan"
  back: "Aos 17 diagnóstico de esquizofrenia, hoje psicóloga doutorada. Voz marcante do movimento Recovery internacional."
- front: "Dorothea Buck"
  back: "Pioneira alemã, esterilizada à força sob o nacional-socialismo. Lutou toda a vida por uma psiquiatria humana. Inspirou o EX-IN."
- front: "Survivor-Movement"
  back: "Movimento de antigos pacientes psiquiátricos nos EUA dos anos 70. Raiz do movimento Recovery."
- front: "ImROC"
  back: "Implementing Recovery through Organisational Change. Programa britânico desde 2007 que acompanha serviços na transformação para uma prática orientada para Recovery."
:::

:::standard{reading_time=2}
Recovery não nasceu no auditório nem na sala de consultas. Recovery nasceu na rua — nas iniciativas de antigos pacientes que se recusaram a deixar-se reduzir ao seu diagnóstico.

O movimento começou nos anos 70 na América do Norte, no chamado Survivor-Movement. Uma das suas vozes mais importantes é Patricia Deegan. Aos 17 recebeu o diagnóstico de esquizofrenia. Um médico disse-lhe que nunca levaria uma vida normal. Hoje é psicóloga doutorada e uma das pioneiras de Recovery mais influentes do mundo.

No espaço germanófono, Dorothea Buck foi uma voz comparável. Ela própria esterilizada à força durante o nacional-socialismo e várias vezes tratada em psiquiatria, lutou toda a vida por uma psiquiatria humana. Em 1989 surgiu em Hamburgo, por iniciativa de Thomas Bock, o primeiro seminário trialógico sobre psicose — um formato em que pessoas com experiência própria, familiares e profissionais falam ao mesmo nível.

Marcos importantes desde então:

- **1993** — William Anthony fornece a definição científica de Recovery.
- **2003** — Investigadores australianos descrevem cinco fases da recuperação.
- **2007** — No Reino Unido arranca o programa ImROC, que reorienta serviços para Recovery.
- **2011** — É publicado o modelo CHIME, que se torna o padrão internacional.
- **2021** — A OMS publica a sua diretriz para uma saúde mental baseada nos direitos humanos.

Na Suíça, a fundação Pro Mente Sana leva o conceito de Recovery aos serviços. Recovery Colleges existem hoje em Berna, na Suíça Oriental, em Genebra, em St.Gallen e em Zurique. Na Alemanha, o EX-IN — Experienced Involvement — estabeleceu o acompanhamento de recovery como profissão.

Recovery já não é, portanto, uma ideia de fora do sistema. É prática vivida por milhares de pessoas.
:::

:::standard-quiz{id=q-4-std}
- q: "Quem marcou o movimento Recovery no início?"
  type: multiple-choice
  options:
    - text: "A indústria farmacêutica."
      correct: false
    - text: "Pessoas com experiência própria em psiquiatria."
      correct: true
      explanation: "O movimento surgiu nos anos 70 a partir do Survivor-Movement."
    - text: "Administrações hospitalares."
      correct: false

- q: "Quem é Patricia Deegan?"
  type: multiple-choice
  options:
    - text: "Uma médica sem experiência própria."
      correct: false
    - text: "Uma pioneira de Recovery com diagnóstico próprio de esquizofrenia, hoje psicóloga doutorada."
      correct: true
      explanation: "Diagnosticada aos 17, hoje voz internacional do movimento Recovery."

- q: "O que é o EX-IN?"
  type: multiple-choice
  options:
    - text: "Um grupo de medicamentos."
      correct: false
    - text: "Experienced Involvement — acompanhamento de recovery como profissão reconhecida."
      correct: true
      explanation: "Desenvolvido a partir de 2005 em Bremen, inspirado por Dorothea Buck."
:::

:::standard-flashcards{id=f-4-std}
- front: "Onde nasceu Recovery?"
  back: "Não no auditório. Nas iniciativas de antigos pacientes psiquiátricos — o Survivor-Movement dos anos 70 na América do Norte."
- front: "Patricia Deegan"
  back: "Aos 17 diagnóstico de esquizofrenia, hoje psicóloga doutorada. Uma das vozes mais influentes do movimento Recovery."
- front: "Triálogo"
  back: "Formato em que pessoas com experiência própria, familiares e profissionais falam ao mesmo nível. Surgiu em 1989 em Hamburgo (Thomas Bock)."
- front: "Recovery Colleges na Suíça"
  back: "Berna, Suíça Oriental, Genebra, St.Gallen, Zurique. Locais de aprendizagem para Recovery — abertos a todas e a todos."
:::


# 5. CHIME e CHIME-D
{#kap-5 reading_time=6}

Em 2011, uma equipa de investigação em torno de Mary Leamy e Mike Slade, no King's College London, analisou sistematicamente 97 artigos científicos e 87 outros relatos sobre percursos de recuperação [^leamy2011]. Queriam saber: o que descrevem as pessoas, sempre de novo, quando contam o seu caminho através de uma doença psíquica?

Surgiram cinco processos cujas iniciais inglesas formam a palavra CHIME — a palavra inglesa para o som de um sino.

:::table{name="CHIME"}
| Letra | Processo | O que significa |
|-------|----------|-----------------|
| **C** | Connectedness · Conexão | Relações, contactos entre pares, família, pertença, comunidade |
| **H** | Hope and Optimism · Esperança | Crer na mudança, motivação, confiança no processo, modelos |
| **I** | Identity · Identidade | Quem sou eu para além do diagnóstico? Imagem positiva de si, autoestima |
| **M** | Meaning and Purpose · Sentido | Sentido de vida, valores, papéis, objetivos, eventualmente espiritualidade |
| **E** | Empowerment · Autoeficácia | Assumir responsabilidade, decidir, usar as próprias forças |
:::

CHIME é hoje o modelo de Recovery mais influente em todo o mundo. Bird et al. confirmaram a sua aplicabilidade num estudo de validação [^bird2014]. Está na base do ensaio britânico REFOCUS, um estudo aleatorizado por aglomerados [^slade2015refocus].

CHIME não é um modelo por etapas nem uma lista para riscar. Descreve cinco temas que se sobrepõem. Por vezes um está em primeiro plano, por vezes outro. No espaço germanófono, CHIME pode ser bem combinado com a leitura «Esperança — Poder — Sentido» [^ameringschmolke2006].

## CHIME-D — a sexta dimensão: Dificuldades

Um desenvolvimento importante do modelo é o CHIME-D. Stuart, Tansey e Quayle, numa síntese best-fit sistemática da literatura qualitativa sobre Recovery, constataram que no quadro original do CHIME faltava uma dimensão que aparece regularmente nos relatos de experiência: o reconhecimento explícito das Dificuldades (Difficulties) — trauma, perdas, estigmatização e consequências da doença [^stuart2017].

Por isso integraram o modelo com a letra D:

- **C** — Connectedness · Conexão
- **H** — Hope · Esperança
- **I** — Identity · Identidade
- **M** — Meaning · Sentido
- **E** — Empowerment · Autoeficácia
- **D** — Difficulties · Dificuldades: reconhecer expressamente trauma, perdas, estigma e consequências da doença

Os estudos mostram que, em média, cerca de 54 % do conteúdo dos relatos de Recovery diz respeito a Dificuldades vividas [^stuart2017]. Por isso o CHIME-D alerta: a orientação Recovery não pode escorregar para um otimismo tóxico. Tem de deixar espaço para a dor, para o luto, para aquilo que realmente foi e é — e, em paralelo, manter o olhar nos recursos e na mudança.

A investigação atual valida o CHIME-D como quadro de referência sólido para uma assistência orientada para Recovery [^vanweeghel2024] [^hancock2025].

:::info{type=note title="Porque é que o CHIME-D é importante para este workbook"}
Os conceitos de Recovery são por vezes criticados por poderem minimizar o sofrimento ou gerar um «dever de esperar».

O CHIME-D leva esta crítica a sério: recuperação não pode significar que o que é difícil deixa de ter lugar.

No workbook digital isto significa: espaço para a dor E para a esperança. Para as perdas E para os objetivos. Para aquilo que foi E para aquilo que pode vir a ser.
:::

:::reflection{id=3 title="Onde estás tu no CHIME?"}
- Que letra (C, H, I, M, E) te fala mais neste momento?
- Qual sentes como mais pesada neste momento?
- Se pensares nas últimas duas semanas: onde houve um pequeno raio de luz — e a que letra o associarias?
:::

:::easy{reading_time=2}
Em 2011 alguns investigadores encontraram cinco temas importantes na Recovery. As iniciais inglesas formam a palavra CHIME (em inglês: o som do sino):

- **C** — Connectedness · Conexão
- **H** — Hope · Esperança
- **I** — Identity · Identidade
- **M** — Meaning · Sentido
- **E** — Empowerment · Autoeficácia

Mais tarde acrescentou-se outra letra:

- **D** — Difficulties · Dificuldades

O D é importante. Recovery não deve minimizar o que é difícil. A dor e o luto podem ter lugar.
:::

:::quiz{id=q-5}
- q: "O que significa o 'D' em CHIME-D?"
  type: multiple-choice
  options:
    - text: "Diagnóstico"
      correct: false
    - text: "Difficulties — Dificuldades (trauma, perdas, estigma)"
      correct: true
      explanation: "Stuart, Tansey & Quayle (2017) mostraram que esta dimensão faltava no CHIME original."
    - text: "Depressão"
      correct: false

- q: "Que letra está para 'Conexão'?"
  type: multiple-choice
  options:
    - text: "C — Connectedness"
      correct: true
    - text: "I — Identity"
      correct: false
    - text: "E — Empowerment"
      correct: false

- q: "CHIME é uma lista para riscar?"
  type: true-false
  correct: false
  explanation: "Não — CHIME descreve cinco temas que se sobrepõem. Por vezes um está em primeiro plano, por vezes outro."
:::

:::flashcards{id=f-5}
- front: "CHIME"
  back: "Connectedness · Hope · Identity · Meaning · Empowerment. Cinco processos de Recovery (Leamy et al. 2011)."
- front: "O D em CHIME-D"
  back: "Difficulties — Dificuldades, trauma, perdas, estigma, consequências da doença. Recovery não pode esconder o que é difícil (Stuart et al. 2017)."
- front: "Connectedness"
  back: "Conexão. Relações, contactos entre pares, família, pertença, comunidade."
- front: "Empowerment"
  back: "Autoeficácia. Assumir responsabilidade, tomar decisões, usar as próprias forças."
:::

:::standard{reading_time=2}
Em 2011 uma equipa de investigação no King's College London analisou mais de 180 estudos e relatos e perguntou: o que descrevem as pessoas, sempre de novo, quando contam o seu caminho de Recovery? Surgiram cinco processos — e as suas iniciais inglesas formam a palavra CHIME (em inglês: som de sino).

- **C — Connectedness · Conexão:** relações, família, contactos entre pares, pertença, comunidade.
- **H — Hope · Esperança:** crer na mudança. Modelos. Confiança no processo.
- **I — Identity · Identidade:** quem sou eu para além do diagnóstico? Uma imagem positiva de si para além do papel de paciente.
- **M — Meaning · Sentido:** valores, objetivos, papéis, por vezes espiritualidade.
- **E — Empowerment · Autoeficácia:** assumir responsabilidade. Tomar decisões. Usar as próprias forças.

CHIME é hoje o modelo de Recovery mais importante a nível internacional. Mas não é uma lista de verificação nem uma escada. Descreve cinco temas que se sobrepõem. Por vezes um está em primeiro plano, por vezes outro.

## O D em CHIME-D

Em 2017 alguns investigadores constataram: no modelo CHIME falta algo. Algo que surge continuamente nos relatos de Recovery — o reconhecimento explícito das Dificuldades. Por isso acrescentaram uma letra:

- **D — Difficulties · Dificuldades:** trauma, perdas, estigma, consequências da doença.

Os estudos mostram: cerca de 54 % do conteúdo dos relatos de Recovery diz respeito a Dificuldades vividas. Por isso o CHIME-D alerta: Recovery não pode escorregar para um otimismo forçado. Tem de dar espaço à dor, ao luto e ao que realmente foi — paralelamente ao olhar sobre os recursos.

Para ti significa: no workbook há lugar para o que é difícil. Tanto quanto para a esperança.
:::

:::standard-quiz{id=q-5-std}
- q: "O que significa o «D» em CHIME-D?"
  type: multiple-choice
  options:
    - text: "Diagnóstico"
      correct: false
    - text: "Difficulties — Dificuldades (trauma, perdas, estigma)"
      correct: true
      explanation: "Stuart, Tansey e Quayle mostraram em 2017 que esta dimensão faltava no CHIME original."
    - text: "Depressão"
      correct: false

- q: "Que letra está para «Conexão»?"
  type: multiple-choice
  options:
    - text: "C — Connectedness"
      correct: true
    - text: "I — Identity"
      correct: false
    - text: "E — Empowerment"
      correct: false

- q: "CHIME é uma lista para riscar?"
  type: true-false
  correct: false
  explanation: "Não — CHIME descreve cinco temas que se sobrepõem. Por vezes um está em primeiro plano, por vezes outro."
:::

:::standard-flashcards{id=f-5-std}
- front: "CHIME"
  back: "Connectedness · Hope · Identity · Meaning · Empowerment. Cinco processos de Recovery (Leamy et al. 2011)."
- front: "O D em CHIME-D"
  back: "Difficulties — Dificuldades, trauma, perdas, estigma. Recovery não pode esconder o que é difícil."
- front: "CHIME — lista ou não?"
  back: "Não é uma lista para riscar. Cinco temas que se sobrepõem. Por vezes um está em primeiro plano, por vezes outro."
- front: "Empowerment"
  back: "Autoeficácia. Assumir responsabilidade, tomar decisões, usar as próprias forças."
:::


# 6. Cinco fases da recuperação
{#kap-6 reading_time=3}

Se o CHIME descreve os cinco processos interiores, o modelo de Andresen, Oades e Caputi descreve as fases típicas do caminho [^andresen2003] [^andresen2006].

:::table{name="Phasen-der-Genesung"}
| Fase | Português | O que acontece por dentro |
|------|-----------|---------------------------|
| **1. Moratorium** | Paragem | Sentimento de perda, desesperança, retraimento |
| **2. Awareness** | Despertar | Primeira esperança, perceber: nem tudo está perdido |
| **3. Preparation** | Preparação | Fazer inventário: o que sei fazer, do que preciso? |
| **4. Rebuilding** | Reconstrução | Construir ativamente novos objetivos, papéis, relações |
| **5. Growth** | Crescimento | Uma vida plena — com ou sem sintomas residuais |
:::

As fases não são rígidas. É normal atravessar várias vezes a mesma fase. É normal viver-se simultaneamente em duas fases — numa área da vida em crescimento, noutra de novo em paragem. Quatro tarefas centrais atravessam todas as fases [^andresen2003]: encontrar esperança, reconstruir a identidade, encontrar sentido, assumir responsabilidade.

:::easy{reading_time=1}
Recovery tem muitas vezes fases. Três investigadores australianos descreveram cinco fases:

1. **Paragem** — Tudo parece pesado e sem esperança.
2. **Despertar** — Percebes: talvez ainda haja alguma coisa.
3. **Preparação** — Olhas para o que sabes fazer.
4. **Reconstrução** — Fazes planos novos.
5. **Crescimento** — Vives a tua vida. Com ou sem sintomas.

Podes saltar entre as fases. Não é como uma escada. É mais como uma espiral.
:::

:::quiz{id=q-6}
- q: "Quantas fases descrevem Andresen, Oades e Caputi?"
  type: multiple-choice
  options:
    - text: "Três"
      correct: false
    - text: "Cinco"
      correct: true
    - text: "Sete"
      correct: false

- q: "As fases são lineares?"
  type: true-false
  correct: false
  explanation: "Não. Podes saltar, atravessar várias vezes a mesma fase ou estar em duas fases ao mesmo tempo."
:::

:::flashcards{id=f-6}
- front: "Moratorium"
  back: "Primeira fase: paragem. Sentimento de perda, desesperança, retraimento."
- front: "Awareness"
  back: "Fase do despertar. Primeira esperança. Perceber: nem tudo está perdido."
- front: "Growth"
  back: "Crescimento — uma vida plena com ou sem sintomas residuais."
- front: "Quatro tarefas de todas as fases"
  back: "Encontrar esperança · reconstruir a identidade · encontrar sentido · assumir responsabilidade."
:::

:::standard{reading_time=2}
Recovery raramente segue uma linha reta. Três investigadores australianos — Andresen, Oades e Caputi — extraíram de muitas histórias de vida cinco fases típicas:

- **Moratorium (Paragem)** — Tudo parece pesado. Sentes-te perdida, perdido, retiras-te. A esperança está longe.
- **Awareness (Despertar)** — Uma primeira faísca: talvez afinal nem tudo esteja acabado.
- **Preparation (Preparação)** — Fazes inventário. O que sei fazer? Do que preciso? Quem está aqui?
- **Rebuilding (Reconstrução)** — Constróis passo a passo novos papéis, objetivos e relações.
- **Growth (Crescimento)** — Vives uma vida que se sente bem — com ou sem sintomas residuais.

É importante saber: estas fases não são uma escada. É normal atravessar várias vezes a mesma fase. É normal estar já em crescimento numa área da vida e de novo em paragem noutra. Os recuos fazem parte. Não significam que falhaste.

Quatro tarefas atravessam todas as fases: encontrar esperança, reconstruir a identidade, encontrar sentido, assumir responsabilidade.

Pergunta a ti: em que fase te sentes neste momento — talvez em várias ao mesmo tempo?
:::

:::standard-quiz{id=q-6-std}
- q: "As cinco fases são como uma escada — uma a seguir à outra?"
  type: multiple-choice
  options:
    - text: "Sim, tens de as percorrer por ordem."
      correct: false
      explanation: "Não — as fases não são rígidas. Recuos e saltos são normais."
    - text: "Não. Podes saltar, repetir ou estar em várias ao mesmo tempo."
      correct: true
      explanation: "Exato. Recovery é mais uma espiral do que uma escada."

- q: "Que fase descreve a paragem no início?"
  type: multiple-choice
  options:
    - text: "Growth"
      correct: false
    - text: "Moratorium"
      correct: true
      explanation: "Moratorium = fase da desesperança e do retraimento."
    - text: "Awareness"
      correct: false
:::

:::standard-flashcards{id=f-6-std}
- front: "Cinco fases"
  back: "Moratorium · Awareness · Preparation · Rebuilding · Growth. Não são uma escada — saltos e recuos são normais."
- front: "Quatro tarefas em todas as fases"
  back: "Encontrar esperança · reconstruir a identidade · encontrar sentido · assumir responsabilidade."
- front: "Recuo — o que significa?"
  back: "Não é um fracasso. É uma parte normal do caminho. Recovery é uma espiral, não uma linha reta."
:::


# 7. Três níveis de recuperação
{#kap-7 reading_time=3}

Na investigação distinguem-se três níveis [^slade2009]:

- **Recuperação clínica**: os sintomas tornam-se menores, um diagnóstico perde importância.
- **Recuperação funcional**: voltas a poder fazer coisas que te são importantes: trabalhar, aprender, cuidar de relações, gerir o teu dia a dia.
- **Recuperação pessoal**: encontras novo sentido, uma nova imagem de ti, nova esperança. Sentes-te alguém que pode dar direção à própria vida — mesmo que nem tudo tenha «desaparecido».

Os três níveis podem reforçar-se mutuamente, mas não têm de acontecer por esta ordem.

:::reflection{id=4 title="Que nível é importante para ti?"}
- Se imaginares daqui a um ano uma vida que se sente bem: o que estaria diferente?
- Qual dos três níveis — clínico, funcional, pessoal — sentes neste momento como o mais importante?
- Há alguma coisa que gostavas de voltar a trazer para a tua vida, que costumavas fazer com gosto?
:::

:::easy{reading_time=1}
Há três tipos de recuperação:

- **Clínica:** Os sintomas tornam-se menores.
- **Funcional:** Voltas a poder fazer coisas: trabalhar, aprender, cuidar de relações.
- **Pessoal:** Sentes sentido e esperança. Co-decides sobre a tua vida.

A mais importante para Recovery é a recuperação pessoal.
:::

:::quiz{id=q-7}
- q: "Que nível é o significado central de Recovery?"
  type: multiple-choice
  options:
    - text: "Recuperação clínica"
      correct: false
    - text: "Recuperação funcional"
      correct: false
    - text: "Recuperação pessoal"
      correct: true
      explanation: "É a leitura central do movimento Recovery."

- q: "Os três níveis têm de acontecer numa ordem específica?"
  type: true-false
  correct: false
  explanation: "Não — podem reforçar-se mutuamente, mas não têm de acontecer numa ordem fixa."
:::

:::flashcards{id=f-7}
- front: "Três níveis de recuperação"
  back: "Clínica (sintomas) · funcional (dia a dia, trabalho, relações) · pessoal (sentido, esperança, autodeterminação)."
- front: "Recuperação pessoal — a mais importante"
  back: "O coração do movimento Recovery. Possível também quando os sintomas clínicos permanecem."
:::

:::standard{reading_time=2}
Na investigação sobre Recovery distingue-se muitas vezes entre três níveis de recuperação — e vale a pena mantê-los separados:

- **Recuperação clínica** — Os sintomas tornam-se menores ou desaparecem. O diagnóstico perde peso. É a leitura da medicina clássica.
- **Recuperação funcional** — Voltas a poder fazer coisas que te são importantes. Trabalhar ou aprender. Gerir a casa. Cuidar de amizades. Organizar o teu dia a dia.
- **Recuperação pessoal** — Encontras novo sentido. Constróis uma identidade para além do diagnóstico. Sentes-te alguém que pode dar direção à própria vida. A esperança regressa.

Os três níveis podem suportar-se mutuamente. Mas não têm de acontecer por esta ordem. Algumas pessoas vivem a recuperação pessoal muito antes de os sintomas se acalmarem. Outras constroem primeiro a função — e só depois notam que por dentro também algo se desloca.

O movimento Recovery coloca claramente o foco na recuperação pessoal. Porque ela é possível também quando os sintomas clínicos permanecem. Não tens de estar «curada», «curado» para levar uma boa vida.

Pergunta a ti: qual dos três níveis sentes neste momento como o mais importante para ti?
:::

:::standard-quiz{id=q-7-std}
- q: "Que nível está no centro do movimento Recovery?"
  type: multiple-choice
  options:
    - text: "Recuperação clínica — só conta se os sintomas desaparecerem."
      correct: false
    - text: "Recuperação pessoal — sentido, esperança, identidade para além do diagnóstico."
      correct: true
      explanation: "Exato. Recuperação pessoal é possível também quando os sintomas permanecem."
    - text: "Recuperação funcional — desde que funciones."
      correct: false

- q: "Os três níveis têm de vir por ordem?"
  type: multiple-choice
  options:
    - text: "Sim — primeiro clínica, depois funcional, depois pessoal."
      correct: false
    - text: "Não. Podem suportar-se, mas não têm de acontecer numa ordem fixa."
      correct: true
:::

:::standard-flashcards{id=f-7-std}
- front: "Três níveis de recuperação"
  back: "Clínica (sintomas) · funcional (dia a dia, trabalho, relações) · pessoal (sentido, esperança, identidade)."
- front: "Recuperação pessoal"
  back: "O coração de Recovery. Levar uma boa vida — também quando os sintomas permanecem."
- front: "Ordem?"
  back: "Não há ordem fixa. Algumas pessoas vivem a recuperação interior muito antes da redução clínica de sintomas."
:::


# 8. A esperança — o coração
{#kap-8 reading_time=4}

A esperança é, em quase todos os modelos de Recovery, a primeira coisa que se menciona [^leamy2011] [^andresen2003] [^schrank2012]. Schrank e colegas demonstraram: a esperança prevê, independentemente dos sintomas, a recuperação pessoal [^schrank2012].

A esperança na investigação sobre Recovery não é uma confiança ingénua. Também não é o contrário do realismo. É uma convicção concreta, muitas vezes silenciosa, de que a tua vida pode ser mais do que o pior dia em que estás neste momento [^slade2013].

Mike Slade resume este achado assim: a esperança seria aquela energia que põe em marcha um processo de recuperação — sem ela, nada começa [^slade2013].

## A esperança como recurso emprestado

Uma ideia central do movimento Recovery diz: a esperança não tem de vir de ti. Pode ser sustida e emprestada por outros, até voltares a senti-la [^russinova1999] [^deegan1996] [^schrank2012]. É exatamente isto que fazem bons Peers, bons profissionais, bons familiares: «Quando agora não consegues ter esperança, nós sustemo-la por ti.»

Para os profissionais, a esperança não é portanto um traço de caráter, mas uma competência profissional — a «hope-inspiring competence» segundo Russinova [^russinova1999].

:::reflection{id=5 title="Fontes de esperança"}
- O que te dava esperança antigamente — uma pessoa, um lugar, uma atividade, um pensamento?
- Quem, à tua volta, está agora a sustentar a esperança por ti, quando tu próprio não a sentes?
- Há um pequeno passo que te pudesse mover hoje na direção da esperança?
:::

:::easy{reading_time=1}
A esperança é o coração de Recovery.

Esperança não significa: estás sempre alegre. Esperança significa: acreditas que a tua vida pode ser mais do que o pior dia.

O mais importante: não tens de ter a esperança sozinha, sozinho. Outras pessoas podem sustê-la por ti. Até voltares a senti-la.

Uma boa frase: «Quando agora não tens esperança, nós sustemo-la por ti.»
:::

:::quiz{id=q-8}
- q: "O que diz a investigação (Schrank et al. 2012) sobre a esperança?"
  type: multiple-choice
  options:
    - text: "A esperança prevê, independentemente dos sintomas, a recuperação pessoal."
      correct: true
      explanation: "A esperança é um preditor — também quando os sintomas permanecem."
    - text: "A esperança só funciona em doenças ligeiras."
      correct: false
    - text: "A esperança tem de vir sempre de nós próprios."
      correct: false

- q: "O que significa 'esperança emprestada'?"
  type: multiple-choice
  options:
    - text: "Comprar esperança à família."
      correct: false
    - text: "Outros sustêm a esperança por ti, até a sentires por ti."
      correct: true
      explanation: "Uma ideia central do movimento Recovery."
:::

:::flashcards{id=f-8}
- front: "Esperança emprestada"
  back: "Quando não consegues ter esperança, Peers, profissionais ou familiares sustêm-na por ti — até voltares a senti-la."
- front: "Esperança na investigação sobre Recovery"
  back: "Não é confiança ingénua — é uma convicção silenciosa, muitas vezes teimosa, de que a tua vida pode ser mais do que o pior dia."
- front: "Hope-inspiring competence"
  back: "Russinova 1999: inspirar esperança é uma competência profissional, não um traço de caráter."
:::

:::standard{reading_time=2}
A esperança é, em quase todos os modelos de Recovery, a primeira coisa que se menciona. E isso não é por acaso.

Mike Slade resume a investigação assim: **«A esperança é a energia que põe em marcha o processo de recuperação — sem ela, nada começa.»**

A esperança na leitura Recovery não é confiança ingénua. Também não é o contrário do realismo. É uma convicção silenciosa, por vezes teimosa: que a tua vida pode ser mais do que o pior dia em que estás neste momento.

## A esperança pode ser emprestada

Uma das ideias mais importantes do movimento Recovery diz: **a esperança não tem de vir de ti.** Pode ser sustida e emprestada por outros, até voltares a senti-la.

É exatamente isso que fazem bons Peers, bons profissionais, bons familiares. Dizem — por vezes em palavras, por vezes só com a sua presença:

> «Quando agora não consegues ter esperança, nós sustemo-la por ti. Pelo tempo que for preciso.»

Isto não é uma técnica terapêutica. Isto é postura. Para os profissionais, a esperança não é por isso uma questão do seu próprio estado de espírito, mas uma competência profissional — a *hope-inspiring competence* (Russinova).

Pergunta a ti:

- Quem na tua vida sustém agora a esperança por ti?
- Quem o poderia fazer, se lho pedisses?
- E por quem talvez tu mesma, tu mesmo sustenhas a esperança — sem dares por isso?
:::

:::standard-quiz{id=q-8-std}
- q: "O que significa «esperança emprestada»?"
  type: multiple-choice
  options:
    - text: "Tens de trabalhar tu próprio a esperança."
      correct: false
    - text: "Outros sustêm a esperança por ti, até voltares a senti-la."
      correct: true
      explanation: "Uma ideia central do movimento Recovery. A esperança não é apenas um esforço individual."

- q: "A esperança na investigação sobre Recovery é o mesmo que confiança ingénua?"
  type: multiple-choice
  options:
    - text: "Sim, simplesmente otimismo."
      correct: false
    - text: "Não. Uma convicção silenciosa, muitas vezes teimosa, de que a tua vida pode ser mais do que o pior dia."
      correct: true
:::

:::standard-flashcards{id=f-8-std}
- front: "Esperança em Recovery"
  back: "Não confiança ingénua — mas a convicção silenciosa de que a tua vida pode ser mais do que o pior dia."
- front: "Esperança emprestada"
  back: "Quando não consegues ter esperança, Peers, profissionais ou familiares sustêm-na por ti — até voltares a senti-la."
- front: "Citação de Slade"
  back: "«A esperança é a energia que põe em marcha o processo de recuperação — sem ela, nada começa.»"
:::


# 9. Empoderamento e autodeterminação
{#kap-9 reading_time=4}

A palavra Empowerment está estreitamente ligada a Recovery. Vem dos movimentos de direitos civis e de emancipação do século XX [^herriger2014] [^knufseibert2004] [^knuf2026].

Nos anos 80, o conceito foi também adotado na assistência psiquiátrica. Empoderamento significa: autocapacitação. Participação ativa. Assumir responsabilidade onde a queres e a podes carregar. Rogers e colegas desenvolveram a este propósito uma primeira escala de Empowerment empiricamente fundamentada [^rogers1997]. No espaço germanófono, «Promover a autocapacitação» é a obra de referência [^knufseibert2004].

## Shared Decision-Making

Empoderamento significa, na prática, sobretudo uma coisa: decisões conjuntas em vez de instruções. Os profissionais decidem contigo, não sobre ti [^charles1997] [^deegandrake2006]. Os estudos mostram: quem é envolvido nas decisões está mais satisfeito e alcança muitas vezes melhores resultados [^joosten2008] [^slade2017sdm].

## Personal Medicine

Pat Deegan cunhou o conceito de Personal Medicine: as coisas não-medicamentosas que ajudam uma pessoa a manter-se saudável — sono, um cão, um determinado passeio, cantar no coro, uma chamada à noite. A Personal Medicine é entendida no movimento Recovery como equivalente aos medicamentos e integrada nos acordos de tratamento [^deegan2005].

## Diretivas antecipadas e Joint Crisis Plans

Um instrumento concreto de Empowerment são os acordos de tratamento ou Joint Crisis Plans — acordos nos quais, em estado estável, defines o que deve e o que não deve acontecer em caso de crise. Henderson e colegas conseguiram mostrar num ensaio aleatório controlado que os Joint Crisis Plans reduzem significativamente os internamentos compulsivos [^henderson2004].

:::easy{reading_time=2}
Empoderamento significa: podes decidir. Tens poder sobre a tua própria vida.

Em psiquiatria significa muitas vezes: decidimos em conjunto. Não: o médico decide sozinho.

Podes fazer perguntas. Podes dizer não. Podes pedir uma segunda opinião.

Existe também «Personal Medicine». São coisas para além de medicamentos que ajudam: um cão, um passeio, um coro, um bom amigo. Estas coisas são tão importantes como os medicamentos.
:::

:::quiz{id=q-9}
- q: "O que significa 'Shared Decision-Making'?"
  type: multiple-choice
  options:
    - text: "O médico decide sozinho."
      correct: false
    - text: "Profissional e pessoa decidem em conjunto."
      correct: true
      explanation: "Charles, Gafni & Whelan 1997 estabeleceram o conceito."
    - text: "A família decide."
      correct: false

- q: "O que significa 'Personal Medicine' (Pat Deegan)?"
  type: multiple-choice
  options:
    - text: "Medicamentos personalizados segundo o perfil de ADN."
      correct: false
    - text: "Coisas não-medicamentosas que ajudam uma pessoa a manter-se saudável."
      correct: true
      explanation: "Cão, passeio, coro, cantar — integráveis nos acordos de tratamento."

- q: "O que mostra o ensaio aleatório controlado sobre Joint Crisis Plans (Henderson 2004)?"
  type: multiple-choice
  options:
    - text: "Não têm efeito mensurável."
      correct: false
    - text: "Reduzem significativamente os internamentos compulsivos."
      correct: true
:::

:::flashcards{id=f-9}
- front: "Empoderamento"
  back: "Autocapacitação. Participação ativa. Assumir responsabilidade onde a queres e a podes carregar."
- front: "Personal Medicine"
  back: "Pat Deegan: coisas não-medicamentosas que te mantêm saudável — sono, movimento, relações, hobbies. Equivalentes a medicamentos."
- front: "Joint Crisis Plan"
  back: "Acordo em estado estável: o que deve acontecer em caso de crise, o que não? Ensaio aleatório controlado (Henderson 2004) mostra: reduz internamentos compulsivos."
- front: "Shared Decision-Making"
  back: "Profissional e pessoa decidem em conjunto — não instrução e adesão."
:::

:::standard{reading_time=2}
Empoderamento significa autocapacitação. Podes decidir — sobre a tua vida e o teu tratamento.

Isto parece evidente, mas no quotidiano da psiquiatria muitas vezes não é. Durante muito tempo valeu: o profissional decide, a paciente ou o paciente cumpre. Recovery desloca este ponto de forma clara — em direção à **responsabilidade conjunta**.

## Três ferramentas concretas

**Shared Decision-Making** — As decisões são tomadas em conjunto. Tu perguntas o que é recomendado. Tu dizes o que se adequa a ti e à tua vida. Os estudos mostram: quem é envolvido está mais satisfeito e alcança melhores resultados.

**Personal Medicine** (Pat Deegan) — Não são só os medicamentos que ajudam. Também aquilo que te mantém saudável como pessoa: um cão, um passeio de manhã, um coro, uma chamada à noite, o jardim, a caminhada. No movimento Recovery, a Personal Medicine é **equivalente** ao tratamento médico — e pertence a qualquer acordo de tratamento.

**Joint Crisis Plan** — Um acordo que, em estado estável, fixas com a tua equipa: o que deve acontecer em caso de crise? O que não? Quem quero que seja informado? Que medicamentos tolero, quais não? Um ensaio aleatório controlado (Henderson 2004) mostra: estes planos reduzem significativamente os internamentos compulsivos.

## O que Empoderamento não significa

Empoderamento não significa: fazer tudo sozinha, sozinho. Não significa: estar contra os profissionais. Significa: a tua voz conta — ao lado da voz profissional. As duas juntas são mais.

Pergunta a ti: onde já podes decidir agora? Onde gostavas de ter mais voz?
:::

:::standard-quiz{id=q-9-std}
- q: "O que significa Shared Decision-Making?"
  type: multiple-choice
  options:
    - text: "Decides sozinho, o médico cala-se."
      correct: false
    - text: "O profissional e tu decidem em conjunto."
      correct: true
      explanation: "Exato. A tua voz conta ao lado da voz profissional."

- q: "O que é a «Personal Medicine» segundo Pat Deegan?"
  type: multiple-choice
  options:
    - text: "Medicamentos personalizados a partir de um teste de ADN."
      correct: false
    - text: "As coisas não-medicamentosas que te mantêm saudável — cão, passeio, coro, uma amiga ou um amigo."
      correct: true
      explanation: "Equivalentes a medicamentos e parte de qualquer acordo de tratamento."

- q: "O que traz um Joint Crisis Plan?"
  type: multiple-choice
  options:
    - text: "É uma obrigação burocrática que pouco efeito tem."
      correct: false
    - text: "Reduz internamentos compulsivos — demonstrado por um ensaio aleatório controlado (Henderson 2004)."
      correct: true
:::

:::standard-flashcards{id=f-9-std}
- front: "Empoderamento"
  back: "Autocapacitação. Podes decidir — sobre a tua vida e o teu tratamento. Não: fazer tudo sozinha, sozinho."
- front: "Shared Decision-Making"
  back: "O profissional e tu decidem em conjunto. Melhores resultados, maior satisfação."
- front: "Personal Medicine"
  back: "Pat Deegan: as coisas não-medicamentosas que te mantêm saudável. Equivalentes a medicamentos."
- front: "Joint Crisis Plan"
  back: "Acordo em estado estável: o que deve acontecer em caso de crise, o que não? Reduz internamentos compulsivos."
:::


# 10. Salutogénese — manter-se saudável
{#kap-10 reading_time=3}

O pensamento orientado para Recovery está estreitamente ligado ao conceito de salutogénese [^antonovsky1979] [^antonovsky1997]. Em vez de perguntar «o que torna as pessoas doentes?» (patogénese), a salutogénese pergunta «o que mantém as pessoas saudáveis?»

Antonovsky identificou o sentido de coerência (Sense of Coherence) como fator de proteção central — a capacidade de viver a própria vida como compreensível, controlável e dotada de sentido. As três componentes correspondem de forma notável aos processos do CHIME e à tríade «Esperança — Poder — Sentido».

No espaço germanófono, Schmolke tornou conceitos salutogénicos utilizáveis para pessoas com diagnóstico de esquizofrenia [^schmolke2001]. Salutogénese e Recovery são descritos regularmente na literatura D-A-CH como duas faces da mesma postura — orientada para os recursos em vez de para os défices [^knuf2026] [^ameringschmolke2012].

:::info{type=note title="As três componentes do sentido de coerência segundo Antonovsky"}
- **Compreensibilidade** (Comprehensibility): a minha vida faz um conjunto coerente.
- **Controlabilidade** (Manageability): consigo lidar com aquilo que vem — sozinho ou com ajuda.
- **Sentido** (Meaningfulness): vale a pena envolver-me.
:::

:::easy{reading_time=1}
A medicina pergunta muitas vezes: o que torna as pessoas doentes? A isso chama-se patogénese.

A salutogénese pergunta de outra forma: o que mantém as pessoas saudáveis?

O investigador Aaron Antonovsky encontrou três pontos importantes:

- Compreendo a minha vida.
- Consigo lidar com coisas difíceis — sozinho ou com ajuda.
- A minha vida tem um sentido.

Quando estes três pontos estão presentes, ficas mais forte contra as Dificuldades.
:::

:::quiz{id=q-10}
- q: "Qual a diferença entre patogénese e salutogénese?"
  type: multiple-choice
  options:
    - text: "A patogénese é mais recente."
      correct: false
    - text: "Patogénese pergunta pela doença — salutogénese pela saúde."
      correct: true
    - text: "A patogénese só vale para doenças físicas."
      correct: false

- q: "Quem desenvolveu o conceito de salutogénese?"
  type: multiple-choice
  options:
    - text: "Sigmund Freud"
      correct: false
    - text: "Aaron Antonovsky"
      correct: true
:::

:::flashcards{id=f-10}
- front: "Salutogénese"
  back: "O que mantém as pessoas saudáveis? (Antonovsky 1979). Contraparte da patogénese — a pergunta 'O que torna doente?'."
- front: "Sentido de coerência"
  back: "Compreensibilidade · controlabilidade · sentido. Fator de proteção segundo Antonovsky."
:::

:::standard{reading_time=2}
A medicina clássica pergunta: **«O que torna as pessoas doentes?»** A isso chama-se patogénese. Procura causas, riscos, défices.

O sociólogo Aaron Antonovsky inverteu a pergunta. Perguntou: **«O que mantém as pessoas saudáveis — mesmo sob Dificuldades?»** A isso chama-se salutogénese.

## O sentido de coerência

Antonovsky observou: pessoas que ultrapassam bem crises de vida pesadas partilham muitas vezes uma certa postura interior. Chamou-lhe **sentido de coerência** e descreveu três componentes:

- **Compreensibilidade** — A minha vida faz um conjunto coerente. O que me acontece pode ser enquadrado.
- **Controlabilidade** — Consigo lidar com aquilo que vem. Sozinha, sozinho, ou com ajuda.
- **Sentido** — Vale a pena envolver-me. A minha vida tem uma direção.

Estas três componentes soam familiares. Estão surpreendentemente próximas dos cinco processos do CHIME e da tríade «Esperança — Poder — Sentido».

## Porque é que isto é importante

Salutogénese e Recovery partilham a mesma postura de base: orientada para os recursos em vez de para os défices. Não és vista, não és visto como um feixe de sintomas, mas como uma pessoa com forças, experiências, relações — também quando muito é difícil.

Na literatura D-A-CH (Schmolke; Amering & Schmolke), salutogénese e Recovery são por isso muitas vezes descritas como duas faces da mesma moeda.

Pergunta a ti: o que te mantém saudável — também hoje, também agora?
:::

:::standard-quiz{id=q-10-std}
- q: "O que pergunta a salutogénese — em contraste com a patogénese?"
  type: multiple-choice
  options:
    - text: "O que torna as pessoas doentes?"
      correct: false
      explanation: "Isso é a patogénese. A salutogénese pergunta o contrário."
    - text: "O que mantém as pessoas saudáveis — também sob Dificuldades?"
      correct: true
      explanation: "A pergunta que Antonovsky colocou."

- q: "Que três componentes pertencem ao sentido de coerência?"
  type: multiple-choice
  options:
    - text: "Compreensibilidade · controlabilidade · sentido"
      correct: true
      explanation: "O tríplice acorde de Antonovsky. Surpreendentemente próximo de «Esperança — Poder — Sentido»."
    - text: "Esperança · fé · amor"
      correct: false
:::

:::standard-flashcards{id=f-10-std}
- front: "Salutogénese"
  back: "O que mantém as pessoas saudáveis? (Antonovsky). Contraparte da patogénese — da pergunta «O que torna doente?»."
- front: "Sentido de coerência"
  back: "Compreensibilidade · controlabilidade · sentido. Fator de proteção em situações de Dificuldade."
- front: "Salutogénese e Recovery"
  back: "Duas faces da mesma postura: orientada para os recursos em vez de para os défices. És mais do que os teus sintomas."
:::


# 11. Estigma e auto-estigma
{#kap-11 reading_time=4}

O estigma é uma das maiores barreiras à Recovery. Goffman cunhou o conceito para as ciências sociais: estigma é uma marca que desvaloriza uma pessoa aos olhos dos outros [^goffman1963].

## Três níveis de estigma

Corrigan e Watson distinguem três níveis [^corrigan2002]:

- **Estigma público**: preconceitos na sociedade («os doentes psíquicos são perigosos»).
- **Estigma estrutural**: discriminação nas leis, no mercado de trabalho, nos seguros.
- **Auto-estigma** (estigma internalizado): adotas as imagens negativas como imagem sobre ti.

## Auto-estigma — quando a tempestade bate para dentro

Corrigan e colegas descrevem o auto-estigma como processo regressivo em quatro passos: perceber, concordar, aplicar, sofrer — com consequências para a autoestima, a autoeficácia e o curso da doença [^corrigan2011].

A boa notícia: o auto-estigma é modificável. Revisões sistemáticas mostram que intervenções psicossociais — sobretudo em grupo — podem reduzir o estigma internalizado [^yanos2015] [^buechter2023]. Também programas anti-estigma com contacto direto com pessoas com experiência de vida mostram, em meta-análises, efeitos pequenos a médios [^corrigan2012] [^thornicroft2016].

Nos relatos de experiência de acompanhantes de recovery [^utschakowski2009] surge um pensamento repetidamente: não é o diagnóstico em si o que verdadeiramente fere. É aquilo que o diagnóstico faz de uma pessoa aos olhos dos outros — e aquilo que a pessoa afetada começa então a acreditar sobre si própria. O auto-estigma nasce exatamente nesta costura.

:::reflection{id=6 title="Vozes interiores"}
- Que frases te dizes a ti sobre a tua doença ou sobre a doença da pessoa que acompanhas?
- Quais destas frases não são, na verdade, voz tua, mas imagens vindas de fora?
- Que frase seria uma versão mais amável da mesma verdade?
:::

:::easy{reading_time=2}
Estigma significa: és diminuída, diminuído por causa de uma coisa. Por exemplo: por teres um diagnóstico.

Há estigma em três áreas:

- Na sociedade — preconceitos, palavras feias.
- Nas regras e nas leis — por ex. Dificuldades com seguros.
- Em ti mesma, em ti mesmo — acreditas nas coisas feias sobre ti.

A última chama-se auto-estigma. É perigosa. Torna-te pequena, pequeno, antes que os outros o façam.

A boa notícia: o auto-estigma pode mudar. Falar ajuda. Encontrar outras pessoas que vivem o mesmo também ajuda.
:::

:::quiz{id=q-11}
- q: "O que é o auto-estigma?"
  type: multiple-choice
  options:
    - text: "O estigma que os outros me lançam."
      correct: false
    - text: "Quando adoto as imagens negativas como imagem sobre mim."
      correct: true
      explanation: "Corrigan & Watson 2002 descrevem-no como um processo regressivo."

- q: "Que método reduz o estigma de forma mais eficaz?"
  type: multiple-choice
  options:
    - text: "O silêncio."
      correct: false
    - text: "Contacto direto com pessoas com experiência vivida."
      correct: true
      explanation: "Thornicroft et al. 2016 mostram isto numa meta-análise."

- q: "O auto-estigma é modificável?"
  type: true-false
  correct: true
  explanation: "Sim — intervenções psicossociais, sobretudo em grupo, reduzem o estigma internalizado (Yanos 2015)."
:::

:::flashcards{id=f-11}
- front: "Três níveis de estigma"
  back: "Estigma público · estigma estrutural · auto-estigma (estigma internalizado)."
- front: "Auto-estigma"
  back: "Quando adotas como imagem sobre ti as imagens sociais negativas. Modificável."
- front: "Método anti-estigma mais eficaz"
  back: "Contacto pessoal direto com pessoas com experiência vivida (Corrigan et al. 2012; Thornicroft et al. 2016)."
:::

:::standard{reading_time=2}
O estigma é uma das maiores barreiras no caminho de Recovery. O sociólogo Erving Goffman descreveu o estigma como uma marca que desvaloriza uma pessoa aos olhos dos outros.

## Três níveis

Patrick Corrigan distingue três níveis em que o estigma atua:

- **Estigma público** — preconceitos na sociedade. «Os doentes psíquicos são perigosos.» «Tem juízo.»
- **Estigma estrutural** — discriminação nas leis, no mercado de trabalho, nos seguros, junto das instituições.
- **Auto-estigma** — adotas as imagens negativas vindas de fora como imagem sobre ti.

## Quando a tempestade bate para dentro

O auto-estigma é particularmente insidioso. Torna-te pequena, pequeno — antes que os outros sequer tentem. Corrigan descreve um processo em quatro passos: perceber, concordar, aplicar, sofrer. O resultado: menos autoestima, menos autoeficácia, muitas vezes também um percurso da doença mais difícil.

Em relatos de experiência de acompanhantes de recovery surge um pensamento repetidamente: **não é o diagnóstico em si o que verdadeiramente fere. O que fere é aquilo que o diagnóstico faz de uma pessoa aos olhos dos outros — e aquilo que a pessoa começa então a acreditar sobre si própria.**

## A boa notícia

O auto-estigma é modificável. A investigação mostra: intervenções psicossociais — sobretudo em grupo — reduzem o estigma internalizado. O mais eficaz contra o estigma público é o **contacto direto** com pessoas com experiência vivida.

Não és o teu diagnóstico. És uma pessoa com uma história, com valores, com relações, com capacidades.

Pergunta a ti: que frases dizes a ti sobre a tua doença — e quais delas são, na verdade, vozes vindas de fora que adotaste?
:::

:::standard-quiz{id=q-11-std}
- q: "O que é o auto-estigma?"
  type: multiple-choice
  options:
    - text: "O estigma que os outros me lançam."
      correct: false
    - text: "Quando adoto as imagens sociais negativas como imagem sobre mim."
      correct: true
      explanation: "Corrigan & Watson 2002: um processo regressivo em quatro passos."

- q: "O que funciona melhor contra o estigma público?"
  type: multiple-choice
  options:
    - text: "O silêncio e esconder-se."
      correct: false
    - text: "Contacto direto entre a população em geral e pessoas com experiência vivida."
      correct: true
      explanation: "Thornicroft et al. 2016: o encontro muda as imagens."

- q: "O auto-estigma é modificável?"
  type: multiple-choice
  options:
    - text: "Não — está fixo de uma vez por todas."
      correct: false
    - text: "Sim — sobretudo em grupo e através de intervenções psicossociais."
      correct: true
:::

:::standard-flashcards{id=f-11-std}
- front: "Três níveis de estigma"
  back: "Estigma público · estigma estrutural · auto-estigma (internalizado)."
- front: "Auto-estigma"
  back: "Quando acreditas em ti as imagens negativas vindas de fora. Torna-te pequena, pequeno, antes que os outros o façam. Modificável."
- front: "O que funciona contra o estigma?"
  back: "Contacto direto com pessoas com experiência vivida. Falar. Grupos. Partilhar histórias."
- front: "Não és o teu diagnóstico"
  back: "És uma pessoa com uma história, com valores, com relações, com capacidades."
:::


# De paciente a especialista da tua vida
{#kap-shift reading_time=8}

Se estiveste muito tempo em tratamento psiquiátrico — anos talvez, ou décadas — então isso fez-te alguma coisa. Não foi só a doença. Foi também o papel.

Na medicina clássica há uma divisão clara de tarefas: a pessoa especialista sabe. A paciente ou o paciente cumpre. O diagnóstico explica o que se passa. O medicamento ou a terapia voltam a curar. Esta lógica funciona bem em muitas doenças físicas. No sofrimento psíquico, esbarra em limites que se tornaram cada vez mais evidentes ao longo dos últimos trinta anos.

## O que esse longo papel te pode ter feito

Talvez reconheças uma ou várias destas coisas:

- Aprendeste a descrever-te a ti próprio/a através de um diagnóstico. «Sou bipolar.» «Sou borderline.» «Sou um caso crónico.»
- Aprendeste que outra pessoa sabe melhor o que é bom para ti — a médica, o terapeuta, a equipa de tratamento.
- Aprendeste que o teu próprio sentir é olhado com desconfiança — como «falta de consciência da doença» ou «não-adesão».
- Aprendeste a esperar — pela próxima consulta, pelo próximo medicamento, pelo próximo método que finalmente deve funcionar.
- Aprendeste que a recuperação é algo que te é feito. Não algo que tu fazes.

Isto não é uma fraqueza pessoal. É uma reação aprendida. Na investigação chama-se *desamparo aprendido* — e aparece em todo o lado onde as pessoas vivem durante muito tempo dentro de sistemas em que têm pouco controlo [^seligman1975].

Patricia Deegan, uma das vozes mais marcantes do movimento Recovery, cunhou para isto um termo muito incisivo: *spirit breaking* [^deegan1990]. Descreve assim como os sistemas de ajuda fazem por vezes o oposto daquilo que deviam — como quebram o sentido de si, o poder próprio, a voz das pessoas, em vez de as fortalecer. Não por má intenção. Mas porque a lógica do sistema assim o prevê.

## O paradigma que bloqueia a cura

Larry Davidson e David Roe captaram cientificamente esta diferença [^davidsonroe2007]. Falam de dois significados muito distintos de Recovery:

- **Recovery FROM** — recuperação DE uma doença. É a leitura médica: sintomas embora, função recuperada, diagnóstico no melhor dos casos para trás.
- **Recovery IN** — recuperação COM uma doença. É a leitura pessoal: levar uma vida que te preenche, mesmo que os sintomas ainda estejam lá.

Ambas são possíveis. Ambas têm valor. Mas seguem lógicas muito diferentes. *Recovery FROM* acontece no consultório — és recetor/a passivo/a. *Recovery IN* acontece na tua vida — tu és a pessoa que age.

A investigadora neerlandesa Wilma Boevink diz isto ainda de forma mais aguçada [^boevink2017]: para muitas pessoas com perturbações psíquicas graves, o sistema psiquiátrico nem sequer é primariamente um sistema de cura. É uma ferramenta entre várias num caminho mais longo. Quem percebe isto — e começa a usar a psiquiatria como meio em vez de se viver como seu objeto — desloca algo fundamental.

## Como é esta deslocação na prática

A deslocação acontece em pequenos passos. Raramente tem um momento de rotura. Aqui ficam alguns exemplos de como pode aparecer:

:::table{name="De-paciente-a-especialista"}
| Do papel de paciente … | … à postura de especialista |
|------------------------|------------------------------|
| «Diga-me o que tenho de fazer.» | «O que é que recomenda — e o que se ajusta à minha vida?» |
| «Nunca vai melhorar.» | «Hoje foi difícil. Vamos ver o que a próxima semana traz.» |
| «O meu médico sabe o que é bom para mim.» | «Decidimos em conjunto — e posso fazer perguntas pelo caminho.» |
| «Eu sou o meu diagnóstico.» | «Tenho um diagnóstico. Ele não é tudo o que sou.» |
| «Falhei.» | «Estou a ter um dia difícil. É informação, não é juízo.» |
| «Se eu falar disto, talvez a equipa me tire os medicamentos.» | «Este efeito secundário pesa-me. Podemos avaliar alternativas em conjunto?» |
| «Tenho de ser corajoso/a.» | «Posso aceitar ajuda — e posso decidir qual.» |
:::

Nenhuma destas deslocações significa que já não precises de ajuda. Nenhuma significa que tenhas de estar contra as pessoas especialistas. Não se trata de revolta, trata-se de posição.

## Porque é que esta deslocação é tão importante

Não é uma recomendação entre muitas. É o pressuposto para que Recovery possa sequer tornar-se eficaz para ti:

- A **esperança** só se pode desenvolver num eu que se vive como sujeito.
- Os **objetivos pessoais** só se podem perseguir quando alguém se vive como alguém que pode ter objetivos.
- A **autoeficácia** só se constrói onde se fazem experiências de causar algo — não onde se espera apenas que algo aconteça.
- O **sentido** da vida nasce da escolha. Quem não tem escolha, dificilmente tem sentido.

A investigação confirma-o com clareza. Roe e Davidson [^roedavidson2005] descrevem Recovery como um «juntar os cacos» e um reescrever da própria história. Estudos atuais sobre a reconstrução narrativa da identidade mostram [^chiba2019narrative]: quem na fase de Recovery (re)constrói uma identidade para lá do papel de paciente, avança muito mais — mesmo que os sintomas permaneçam.

:::info{type=note title="O que aqui não se quer dizer"}
A deslocação do ser-paciente para a postura de especialista não é um apelo a parar medicamentos, a interromper tratamentos ou a desenrascares-te sozinho/a. Não é uma acusação às pessoas especialistas.

É um convite a tomares a tua própria voz como fonte — ao lado das vozes das pessoas especialistas. E a descobrires o que é verdade para ti.
:::

## De quem viveu a especialista por experiência

No mundo de língua alemã existe um nome bonito para este passo: «Erfahrungsexpert*in» (especialista por experiência). Na formação EX-IN é precisamente isto que se desenvolve de forma sistemática — pessoas com experiência psiquiátrica tornam-se, ao longo de doze módulos, acompanhantes que tornam utilizável a sua própria experiência como recurso para outras [^utschakowski2009] [^exin_de].

Não tens de te tornar acompanhante de recovery para fazer esta deslocação. Mas a ideia ajuda, mesmo que a apliques só a ti: a tua história não é algo que te aconteceu e te define. É algo que tu conheces — e do qual podes tirar saber. Saber que te ajuda a compreender melhor a ti e às outras pessoas.

Wilma Boevink chama a isto *experiential expertise* — competência experiencial [^boevink2017] [^boevink2012]. O teu saber experiencial não vale menos do que o saber técnico de terapeutas. É diferente. E ambos em conjunto são mais do que a soma das partes.

## Se ainda estás a hesitar

Talvez leias tudo isto e penses: bonito de dizer, mas para mim já não dá. Talvez tenhas trinta anos de experiência de internamento. Talvez tenhas perdido a fé. Talvez nunca ninguém te tenha dito que este papel sequer te pertence.

Três coisas:

1. **Nunca é tarde demais.** A investigação sobre Recovery não conhece limite de idade nem limite de gravidade. Mesmo pessoas que viveram décadas em cuidados residenciais descrevem deslocações — por vezes precisamente quando já não contavam com isso [^harding1987] [^lally2017].

2. **Não tens de fazer tudo de uma vez.** Uma única pergunta de manhã — «do que precisaria eu hoje?» — já é movimento. Uma única resposta a ti próprio/a à noite — «hoje foi difícil, e eu estive cá apesar disso» — também é movimento.

3. **Precisas de aliados.** Ninguém faz esta deslocação sozinho. Peers, um grupo de autoajuda, uma pessoa de confiança, uma pessoa especialista que viva o conceito, um Recovery College. Se a tua equipa de tratamento não acompanhar este caminho, isso não é o teu falhanço — essa equipa tem, neste momento, um ponto cego.

:::quote{author="Patricia Deegan, 1996" source="deegan1996" lang="en"}
We are a conspiracy of hope and we are pressing back against the strong tide of oppression which for centuries has been the legacy of those of us who are labeled with mental illness.
:::

:::quote-translation{source="deegan1996" translator="tradução própria"}
Somos uma conspiração de esperança. Empurramos contra a forte corrente de opressão que durante séculos foi a herança de nós que somos rotulados com uma doença mental.
:::

:::reflection{id=10 title="A tua posição"}
- Em que pontos te vives ainda no clássico papel de paciente?
- Onde há momentos em que já te vives como especialista da tua própria experiência — mesmo que sejam breves?
- Que frase da coluna esquerda da tabela te é familiar — qual da coluna direita quer, devagar, ganhar espaço?
- Quem poderia ser o teu, a tua co-conspirador/a de esperança?
:::

:::easy{reading_time=3}
Talvez tenhas estado muito tempo em tratamento. Então provavelmente aprendeste uma coisa muito concreta:

- O médico sabe melhor.
- Tenho de fazer aquilo que me dizem.
- Eu estou doente, os outros ajudam-me.

Isto é um papel. Chama-se papel de paciente.

Este papel ajuda às vezes. Mas também pode fazer mal. Tu ficas pequeno/a. Esperas. Tornas-te dependente.

Recovery diz: podes sair deste papel. Passo a passo.

Não te tornas médico. Mas tornas-te especialista da tua própria vida. Tu conheces-te melhor. A tua experiência é saber.

**Esta mudança é a mudança mais importante em Recovery. Sem ela não há caminho.**

Três coisas para o fim:

- Nunca é tarde demais. Mesmo depois de muitos anos em tratamento.
- Não tens de fazer tudo de uma vez. Os pequenos passos contam.
- Precisas de aliados.

:::reflection{id=shift-easy title="Pergunta a ti próprio/a"}
- Em que ponto ainda te vives no velho papel?
- Onde já és especialista da tua vida?
:::
:::

:::quiz{id=q-shift}
- q: "O que se quer dizer aqui com «papel de paciente»?"
  type: multiple-choice
  options:
    - text: "Um diagnóstico médico."
      correct: false
    - text: "Uma postura aprendida: esperar passivamente, os outros sabem melhor, eu sou curado/a."
      correct: true
      explanation: "Um papel, não um diagnóstico — e é modificável."

- q: "O que diz Patricia Deegan sobre «spirit breaking»?"
  type: multiple-choice
  options:
    - text: "Descreve um caso raro de exceção."
      correct: false
    - text: "Os sistemas de ajuda podem quebrar o sentido de si, a voz e o poder próprio — geralmente sem má intenção."
      correct: true
      explanation: "Deegan 1990 — um termo incisivo mas preciso."

- q: "Qual é a diferença entre Recovery FROM e Recovery IN?"
  type: multiple-choice
  options:
    - text: "FROM = leitura antiga, IN = leitura mais recente."
      correct: false
    - text: "FROM = recuperação DE uma doença (médica). IN = recuperação COM uma doença (pessoal)."
      correct: true
      explanation: "Davidson & Roe 2007."

- q: "É verdade que esta deslocação é só mais uma recomendação entre tantas?"
  type: true-false
  correct: false
  explanation: "Não — é o pressuposto para que Recovery se torne sequer eficaz."

- q: "A partir de que idade / de quantos anos de tratamento é tarde demais para esta deslocação?"
  type: multiple-choice
  options:
    - text: "Depois de 10 anos."
      correct: false
    - text: "A partir dos 60."
      correct: false
    - text: "Nunca."
      correct: true
      explanation: "A investigação sobre Recovery não conhece limite de idade. Possível também depois de décadas."
:::

:::flashcards{id=f-shift}
- front: "Spirit Breaking"
  back: "Patricia Deegan (1990): como os sistemas de ajuda quebram o sentido de si, a voz e o poder próprio — geralmente sem má intenção."
- front: "Recovery FROM"
  back: "Recuperação DE uma doença — leitura médica. Sintomas embora, diagnóstico no melhor dos casos para trás."
- front: "Recovery IN"
  back: "Recuperação COM uma doença — leitura pessoal. Uma vida plena, mesmo que os sintomas permaneçam."
- front: "Papel de paciente"
  back: "Uma postura aprendida: passiva, em espera, dirigida por outros. Ajuda a curto prazo, prejudica a longo prazo. Modificável."
- front: "Competência experiencial (Boevink)"
  back: "O teu saber vivido é autónomo e de igual valor ao saber técnico. Podes usá-lo — para ti e para outras pessoas."
- front: "Conspiracy of Hope"
  back: "Patricia Deegan 1996: «Somos uma conspiração de esperança.» — Recovery como projeto coletivo contra a histórica privação de voz."
:::

:::standard{reading_time=3}
Se estiveste muito tempo em tratamento psiquiátrico — anos talvez, décadas — isso fez-te alguma coisa. Não só a doença. Também **o papel**.

## O que o papel te fez

Talvez tenhas aprendido:

- O médico sabe melhor. O meu sentir conta menos.
- Tenho de esperar. Pela próxima consulta, pelo próximo medicamento, pelo próximo método.
- Eu sou o meu diagnóstico: «sou borderline.» «sou bipolar.»
- A recuperação é algo que me é feito — não algo que eu faço.

Isto não é uma fraqueza pessoal. É uma **reação aprendida** a anos dentro de um sistema que permite pouco controlo.

Patricia Deegan, uma voz marcante do movimento Recovery, cunhou para isto um termo incisivo: **«spirit breaking»**. Os sistemas de ajuda podem — geralmente sem má intenção — quebrar o sentido de si, a voz, o poder próprio de uma pessoa. Não porque as pessoas que lá trabalham sejam más. Mas porque a lógica do sistema assim o prevê.

## Recovery FROM vs. Recovery IN

Larry Davidson e David Roe distinguem duas leituras muito diferentes de Recovery:

- **Recovery FROM** — recuperação **DE** uma doença. A leitura médica: sintomas embora, diagnóstico para trás. És recetor/a passivo/a de um tratamento.
- **Recovery IN** — recuperação **COM** uma doença. A leitura pessoal: levar uma vida plena, mesmo que os sintomas permaneçam. Tu és a pessoa que age.

Ambas são possíveis. Ambas têm valor. Mas seguem lógicas completamente diferentes. **Recovery IN é o pressuposto para que Recovery possa tornar-se verdadeiramente eficaz para ti.** Porque esperança, objetivos, autoeficácia, sentido — tudo isto só nasce onde te vives como alguém que pode escolher.

## Continuas a depender de ajuda — e ainda assim sujeito

Esta deslocação não é um apelo a parar medicamentos ou a interromper o tratamento. Não é uma acusação às pessoas especialistas. É um convite a tomares a tua voz como fonte — **ao lado** das vozes técnicas.

Três coisas para concluir:

- **Nunca é tarde demais.** Mesmo depois de décadas de tratamento, estas deslocações são possíveis.
- **Acontece em pequenos passos.** Uma pergunta de manhã: «do que precisaria eu hoje?» — já é um começo.
- **Precisas de aliados.** Peers. Uma pessoa de confiança. Um Recovery College. Ninguém consegue isto sozinho.
:::

:::standard-quiz{id=q-shift-std}
- q: "O que quer dizer Patricia Deegan com «spirit breaking»?"
  type: multiple-choice
  options:
    - text: "Um caso raro de exceção que quase não aparece."
      correct: false
    - text: "Como os sistemas de ajuda podem quebrar o sentido de si, a voz e o poder próprio — geralmente sem má intenção."
      correct: true
      explanation: "Um termo incisivo mas preciso (Deegan 1990)."

- q: "Qual é a diferença entre Recovery FROM e Recovery IN?"
  type: multiple-choice
  options:
    - text: "FROM está ultrapassado, IN é a versão nova."
      correct: false
    - text: "FROM = recuperação DE uma doença (médica). IN = recuperação COM uma doença (pessoal)."
      correct: true
      explanation: "Davidson & Roe 2007. Ambas são possíveis, mas seguem lógicas diferentes."

- q: "Quem é especialista da tua vida?"
  type: multiple-choice
  options:
    - text: "A tua equipa de tratamento."
      correct: false
    - text: "Tu próprio/a — ao lado do saber técnico das pessoas que te cuidam."
      correct: true

- q: "A partir de que ponto é tarde demais para esta deslocação?"
  type: multiple-choice
  options:
    - text: "Depois de 20 anos de tratamento."
      correct: false
    - text: "A partir dos 60."
      correct: false
    - text: "Nunca. Mesmo depois de décadas as deslocações são possíveis."
      correct: true
:::

:::standard-flashcards{id=f-shift-std}
- front: "Spirit Breaking (Deegan)"
  back: "Quando os sistemas de ajuda — geralmente sem má intenção — quebram o sentido de si, a voz e o poder próprio de uma pessoa."
- front: "Recovery FROM"
  back: "Recuperação DE uma doença. A leitura médica: sintomas embora, diagnóstico para trás."
- front: "Recovery IN"
  back: "Recuperação COM uma doença. A leitura pessoal: uma vida plena, mesmo que os sintomas permaneçam."
- front: "Especialista da tua vida"
  back: "Tu conheces-te melhor. A tua experiência é saber — ao lado do saber técnico, não no lugar dele."
- front: "Nunca é tarde demais"
  back: "Recovery não conhece limite de idade nem limite de gravidade. Possível também depois de décadas."
:::


# 12. Apoio entre pares, Triálogo e EX-IN
{#kap-12 reading_time=5}

## O que é o apoio entre pares

O apoio entre pares é o acompanhamento por pessoas que viveram e atravessaram crises psíquicas. Na área de língua alemã fala-se de Genesungsbegleiter*innen (acompanhantes de recovery), Erfahrungsexpert*innen (especialistas por experiência), peers ou colaboradores EX-IN [^utschakowski2009] [^exin_de].

As raízes vêm de longe — da tradição de autoajuda, do conceito WRAP de Mary Ellen Copeland [^copeland1997], do modelo alemão do Triálogo [^bockpriebe2005] e da iniciativa EX-IN a partir de 2005 [^utschakowski2009].

## Triálogo — a herança germanófona

O Triálogo — o diálogo paritário entre pessoas com experiência direta, familiares e pessoas especialistas — foi fundado em Hamburgo em 1989 por Thomas Bock e colaboradores [^bockpriebe2005]. É um contributo germanófono ao movimento Recovery internacional e transformou de forma duradoura os cuidados na área D-A-CH [^vonpeter2015].

## O que a investigação mostra

A base de evidências sobre o apoio entre pares é hoje consistente. Um RCT multicêntrico com mais de 600 participantes em quatro países mostrou efeitos significativos sobre empoderamento e qualidade de vida [^slade2024peer]. Meta-análises atuais encontram efeitos consistentemente positivos sobre a autoeficácia e efeitos menores sobre a esperança e o empoderamento [^white2024] [^lyons2021]. Também um RCT alemão demonstrou efeitos positivos [^mahlke2017].

Os fatores de eficácia são: experiência vivida como âncora de credibilidade, esperança como modelo, relações ao mesmo nível e comunicação não estigmatizante [^mead2001] [^davidson2012].

Wilma Boevink resume isto num ponto simples: o saber experiencial que vem do movimento das pessoas com experiência direta é equivalente ao saber técnico profissional — e constitui a base de um saber autêntico sobre Recovery [^boevink2012].

:::easy{reading_time=2}
Apoio entre pares quer dizer: pessoas acompanham outras pessoas com experiência semelhante.

Faz bem. A investigação mostra: se alguém «conseguiu» e está à tua frente, isso é um sinal forte. Dá esperança.

Na área de língua alemã há acompanhantes de recovery com uma formação (EX-IN).

Há também o Triálogo — conversas entre pessoas com experiência direta, familiares e pessoas especialistas. Ao mesmo nível. Sem que ninguém seja mais importante.

Conversas assim existem em muitas cidades na Suíça, na Alemanha e na Áustria.
:::

:::quiz{id=q-12}
- q: "O que significa EX-IN?"
  type: multiple-choice
  options:
    - text: "Um diagnóstico."
      correct: false
    - text: "Experienced Involvement — formação para acompanhantes de recovery."
      correct: true
      explanation: "Desenvolvido desde 2005 em Bremen."

- q: "Quem fala ao mesmo nível no Triálogo?"
  type: multiple-choice
  options:
    - text: "Só pessoas especialistas."
      correct: false
    - text: "Pessoas com experiência direta, familiares e pessoas especialistas em conjunto."
      correct: true
      explanation: "Fundado em Hamburgo em 1989 por Thomas Bock."

- q: "O que mostra a investigação sobre apoio entre pares (Slade et al. 2024)?"
  type: multiple-choice
  options:
    - text: "Nenhum efeito mensurável."
      correct: false
    - text: "Efeitos significativos sobre empoderamento e qualidade de vida."
      correct: true
:::

:::flashcards{id=f-12}
- front: "EX-IN"
  back: "Experienced Involvement — formação para pessoas com experiência psiquiátrica como acompanhantes de recovery (desde 2005, Bremen). Inspirado por Dorothea Buck."
- front: "Triálogo"
  back: "Diálogo paritário entre pessoas com experiência direta, familiares e pessoas especialistas. Fundado em Hamburgo em 1989 por Thomas Bock."
- front: "Apoio entre pares — fatores de eficácia"
  back: "Experiência vivida como âncora de credibilidade · esperança como modelo · relação ao mesmo nível · comunicação não estigmatizante."
- front: "Mahlke et al. 2017"
  back: "RCT alemão sobre apoio entre pares 1:1 — mostrou efeitos significativos sobre empoderamento e autoeficácia."
:::

:::standard{reading_time=2}
Apoio entre pares quer dizer: pessoas que atravessaram uma crise psíquica acompanham outras — ao mesmo nível, com experiência vivida em vez de um título profissional.

Na área de língua alemã chamamos-lhes acompanhantes de recovery, especialistas por experiência ou colaboradores EX-IN. EX-IN significa «Experienced Involvement» — uma formação nascida em Bremen em 2005 que hoje está ancorada em muitas clínicas, centros de aconselhamento e Recovery Colleges.

Três conceitos são aqui importantes:

- **Apoio entre pares:** acompanhamento por alguém com experiência semelhante. Credível porque é vivido.
- **Triálogo:** o diálogo paritário entre pessoas com experiência direta, familiares e pessoas especialistas — fundado em Hamburgo em 1989 por Thomas Bock.
- **EX-IN:** formação estruturada para acompanhamento de recovery, inspirada por Dorothea Buck.

O que diz a investigação: um grande estudo internacional com mais de 600 participantes em quatro países mostrou efeitos significativos sobre empoderamento e qualidade de vida. Um estudo alemão confirmou-o. O que age não é um truque — é o encontro com alguém que pode dizer: «eu também estive aí. E existe um caminho.»

Talvez tu próprio/a conheças alguém cuja história te sustentou. Talvez um dia sejas tu essa pessoa para outra.
:::

:::standard-quiz{id=q-12-std}
- q: "O que significa EX-IN?"
  type: multiple-choice
  options:
    - text: "Um novo diagnóstico."
      correct: false
    - text: "Experienced Involvement — uma formação para acompanhamento de recovery."
      correct: true
      explanation: "Desenvolvida a partir de 2005 em Bremen, hoje ancorada em muitos serviços D-A-CH."
    - text: "Uma classe de medicamentos."
      correct: false

- q: "Quem dialoga no Triálogo?"
  type: multiple-choice
  options:
    - text: "Só as pessoas especialistas entre si."
      correct: false
    - text: "Pessoas com experiência direta, familiares e pessoas especialistas — ao mesmo nível."
      correct: true
      explanation: "Fundado em 1989 em Hamburgo por Thomas Bock."
    - text: "Só as pessoas com experiência direta sozinhas."
      correct: false
:::

:::standard-flashcards{id=f-12-std}
- front: "Apoio entre pares"
  back: "Acompanhamento por pessoas com experiência própria de crise. Age através da experiência vivida, da esperança e da paridade."
- front: "Triálogo"
  back: "Diálogo paritário entre pessoas com experiência direta, familiares e pessoas especialistas. Desde 1989 (Bock, Hamburgo)."
- front: "EX-IN"
  back: "Experienced Involvement — formação para pessoas com experiência psiquiátrica, desde 2005."
:::


# 13. Recovery Colleges — aprender em vez de ser tratado
{#kap-13 reading_time=5}

Os Recovery Colleges são um modelo britânico nascido a partir de 2009 [^perkins2012]. Não são clínicas, mas espaços de formação. São gratuitos, abertos a todos — pessoas com experiência direta, familiares, pessoas especialistas e pessoas interessadas — e usam a forma pedagógica da formação de adultos em vez da sessão terapêutica.

Dois princípios centrais distinguem os Recovery Colleges [^perkins2012] [^meddings2015]:

- **Formação em vez de terapia.** Quem participa é estudante, não paciente. Foco em recursos e aprendizagem, não em défice e diagnóstico.
- **Coprodução (Co-Production).** Cada curso é desenvolvido e dado em conjunto por uma pessoa especialista e por uma pessoa com experiência vivida — ao mesmo nível.

## O que a investigação mostra

Hayes e colegas contam no mundo 221 Recovery Colleges em 28 países em cinco continentes [^hayes2023].

O estudo RECOLLECT é até agora a análise científica mais ampla sobre Recovery Colleges [^henderson2024recollect]. Um estudo de coorte retrospetivo em Inglaterra, com 1193 estudantes de Recovery College comparados com 3508 pessoas de controlo aos 6, 12 e 60 meses, mostrou: redução significativa de internamentos psiquiátricos, de dias de internamento e de consultas de urgência — com melhoria simultânea do bem-estar [^ronaldson2024].

Uma revisão da literatura sobre dez anos de investigação em Recovery Colleges [^theriault2020] confirma efeitos consistentes sobre esperança, empoderamento, autoeficácia, inclusão social, alcance de objetivos e conhecimento sobre saúde mental. Crowther e colegas mostram que também as pessoas especialistas beneficiam da colaboração nos Recovery Colleges [^crowther2019].

:::info{type=evidence title="Evidências na área germanófona"}
Nos últimos anos surgiram dados D-A-CH empiricamente validados sobre a eficácia dos cuidados orientados para Recovery.

Um estudo aleatorizado controlado alemão sobre apoio entre pares para pessoas com perturbações psíquicas graves [^mahlke2017] demonstrou efeitos significativos sobre empoderamento e autoeficácia.

A diretriz alemã S3 da DGPPN «Terapias psicossociais nas perturbações psíquicas graves» (2.ª edição 2019) incluiu como recomendações a orientação Recovery, o apoio entre pares e a Shared Decision-Making [^dgppn2019].

A investigação sobre Recovery Colleges na área germanófona está a crescer — os dados sobre locais específicos D-A-CH estão em construção.
:::

Na área germanófona existem Recovery Colleges, entre outros, em Berna [^rcbern], na Suíça oriental, em Genebra, em St.Gallen e em Zurique — e cada vez mais na Alemanha e na Áustria (entre os quais o Empowerment College Bremen).

:::easy{reading_time=2}
Os Recovery Colleges são um tipo especial de escola. Mas não uma escola para crianças.

Aqui os adultos aprendem sobre saúde mental. Todos podem vir: pessoas com experiência direta, familiares, pessoas especialistas, pessoas interessadas.

Os cursos são gratuitos. Não precisas de um diagnóstico.

Cada curso é planeado em conjunto: por uma pessoa especialista e por uma pessoa com experiência própria. Ambas são igualmente importantes.

Hoje há mais de 220 Recovery Colleges em 28 países. Também na Suíça, na Alemanha e na Áustria.

A investigação mostra: quem frequenta um Recovery College fica melhor depois.
:::

:::quiz{id=q-13}
- q: "Quem pode participar num Recovery College?"
  type: multiple-choice
  options:
    - text: "Só pessoas com diagnóstico."
      correct: false
    - text: "Pessoas com experiência, familiares, pessoas especialistas e interessadas — todas."
      correct: true
      explanation: "Aberto a todos. Sem diagnóstico necessário. Gratuito."

- q: "O que significa «Co-Production»?"
  type: multiple-choice
  options:
    - text: "Um truque de cinema."
      correct: false
    - text: "Pessoa especialista e pessoa com experiência vivida planeiam os cursos em conjunto — ao mesmo nível."
      correct: true

- q: "O que mostra o estudo de coorte do Reino Unido Ronaldson et al. 2024?"
  type: multiple-choice
  options:
    - text: "Nenhum efeito."
      correct: false
    - text: "Redução significativa de internamentos psiquiátricos e de dias de internamento."
      correct: true
:::

:::flashcards{id=f-13}
- front: "Recovery College"
  back: "Espaço de formação — não espaço de tratamento. Aprender em vez de terapia. Gratuito. Aberto a todos."
- front: "Co-Production"
  back: "Os cursos são desenvolvidos e dados em conjunto por uma pessoa especialista e por uma pessoa com experiência vivida."
- front: "Eficácia"
  back: "Hayes 2023: 221 Recovery Colleges em 28 países. Ronaldson 2024: menos internamentos, mais bem-estar."
:::

:::standard{reading_time=2}
Um Recovery College não é uma clínica. É uma escola para adultos — aberta a todos quantos queiram aprender alguma coisa sobre saúde mental: pessoas com experiência direta, familiares, pessoas especialistas, pessoas interessadas. Os cursos são gratuitos, não precisas de diagnóstico, não precisas de credencial nem de inscrição através do médico de família.

Dois princípios sustentam este modelo:

- **Formação em vez de terapia.** És estudante, não paciente. No centro estão a aprendizagem, os recursos e as perguntas — não o diagnóstico e o défice.
- **Coprodução (Co-Production).** Cada curso é desenvolvido e dado em conjunto por uma pessoa especialista e por uma pessoa com experiência vivida. Ambas as fontes de saber são de igual valor.

O primeiro Recovery College nasceu em Londres em 2009. Hoje existem no mundo mais de 220 em 28 países — também na Suíça (entre outros Berna, Suíça oriental, Genebra, St.Gallen, Zurique), na Alemanha e na Áustria.

O maior estudo a este respeito, RECOLLECT em Inglaterra, comparou cerca de 1200 estudantes de Recovery College com mais de 3500 pessoas de controlo durante cinco anos. O resultado: menos internamentos psiquiátricos, menos emergências, mais bem-estar. Dez anos de investigação confirmam: esperança, empoderamento, inclusão social e autoeficácia aumentam de forma mensurável.

Talvez um Recovery College perto de ti seja um primeiro lugar onde não tens de te explicar — mas onde podes aprender.
:::

:::standard-quiz{id=q-13-std}
- q: "Quem pode frequentar um Recovery College?"
  type: multiple-choice
  options:
    - text: "Só pessoas com diagnóstico psiquiátrico."
      correct: false
    - text: "Todas — pessoas com experiência direta, familiares, pessoas especialistas, interessadas. Sem diagnóstico."
      correct: true
      explanation: "Os Recovery Colleges são abertos, gratuitos e não exigem credencial."
    - text: "Só pessoas especialistas."
      correct: false

- q: "O que significa Co-Production?"
  type: multiple-choice
  options:
    - text: "Gravar vários filmes em conjunto."
      correct: false
    - text: "Os cursos são planeados em conjunto por uma pessoa especialista e por uma pessoa com experiência vivida — ao mesmo nível."
      correct: true
      explanation: "É o princípio central dos Recovery Colleges."
    - text: "Um vídeo formativo interativo."
      correct: false
:::

:::standard-flashcards{id=f-13-std}
- front: "Recovery College"
  back: "Espaço de formação em vez de cuidado. Gratuito, aberto a todos. Aprender em vez de terapia."
- front: "Co-Production"
  back: "Cada curso é planeado em conjunto por uma pessoa especialista e por uma pessoa com experiência vivida."
- front: "Eficácia (RECOLLECT)"
  back: "Menos internamentos, menos emergências, mais bem-estar — demonstrado em cinco anos."
:::


# 14. Abordagem informada pelo trauma
{#kap-14 reading_time=3}

:::info{type=warmth title="Antes de continuares a ler"}
Este capítulo nomeia violência, abuso, negligência e discriminação. Se viveste coisas difíceis, a leitura pode mexer com muita coisa. Isso é normal. Lê ao teu ritmo. Faz pausas. Passa ao capítulo seguinte se hoje for demais. Se precisares de apoio agora: o Capítulo 20 (Crise) está a alguns toques — ou liga para **SOS Voz Amiga** (Portugal) **213 544 545**, em Brasil **CVV 188**, na Suíça **143**, na Alemanha **0800 111 0 111**, na Áustria **142**.
:::

Muitas pessoas acompanhadas em psiquiatria têm na sua história experiências traumáticas — violência, abusos, negligência, discriminação. Também os próprios internamentos psiquiátricos podem ter um efeito de retraumatização [^felitti1998].

Uma abordagem informada pelo trauma é, por isso, parte integrante da prática orientada para Recovery. A agência norte-americana SAMHSA [^samhsa2014trauma] definiu para isto seis princípios orientadores:

- **Segurança** — física e emocional.
- **Confiança e transparência** — informação clara, enquadramento fiável.
- **Apoio entre pares** — experiência vivida como recurso.
- **Colaboração e reciprocidade** — reduzir hierarquias.
- **Empoderamento, voz e escolha** — decisão e autodeterminação.
- **Sensibilidade cultural, histórica e de género.**

Estes princípios valem também num workbook digital. Tu decides o que lês e quando, o que guardas, o que apagas.

:::easy{reading_time=1}
Muitas pessoas em psiquiatria viveram coisas difíceis. Violência. Abusos. Negligência.

Por vezes o próprio internamento também pesa.

Por isso é importante uma postura sensível ao trauma. Quer dizer:

- Primeiro a segurança.
- Criar confiança.
- Comunicar com honestidade.
- Ninguém decide por cima de ti.

Isto vale também nesta aplicação. Tu decides o que lês. O que guardas. O que apagas.
:::

:::quiz{id=q-14}
- q: "Quantos princípios definiu a SAMHSA para os cuidados informados pelo trauma?"
  type: multiple-choice
  options:
    - text: "Três"
      correct: false
    - text: "Seis"
      correct: true
    - text: "Dez"
      correct: false

- q: "Qual destes NÃO é um princípio da prática informada pelo trauma?"
  type: multiple-choice
  options:
    - text: "Segurança"
      correct: false
    - text: "Severidade"
      correct: true
      explanation: "A severidade não faz parte dos princípios da SAMHSA."
    - text: "Apoio entre pares"
      correct: false
:::

:::flashcards{id=f-14}
- front: "Seis princípios (SAMHSA 2014)"
  back: "Segurança · Confiança e transparência · Apoio entre pares · Colaboração · Empoderamento · Sensibilidade cultural/de género."
- front: "Retraumatização"
  back: "Quando os próprios sistemas de ajuda traumatizam ainda mais. A prática informada pelo trauma quer prevenir isto ativamente."
- front: "Estudo ACE (Felitti 1998)"
  back: "Demonstra: as experiências traumáticas na infância são muito frequentes e têm impacto ao longo de toda a vida na saúde."
:::

:::standard{reading_time=2}
Muitas pessoas acompanhadas em psiquiatria trazem consigo experiências pesadas — violência, abusos, negligência, discriminação, perdas. Por vezes os próprios internamentos psiquiátricos também são pesados ou retraumatizantes. Uma abordagem informada pelo trauma leva tudo isto a sério, sem te pressionar a mostrar feridas que não queres mostrar.

A agência de saúde norte-americana SAMHSA descreveu seis princípios orientadores que sustentam um acompanhamento sensível ao trauma:

- **Segurança** — física e emocional. Ninguém deve estar num espaço onde não se sinta seguro.
- **Confiança e transparência** — informação clara, enquadramento fiável, sem surpresas por cima da tua cabeça.
- **Apoio entre pares** — experiência vivida como ponte fiável.
- **Colaboração ao mesmo nível** — reduzir hierarquias, não aumentá-las.
- **Empoderamento, voz e escolha** — co-decides. Sempre.
- **Sensibilidade cultural, histórica e de género** — a tua história é parte de quem és.

Estes princípios valem também num workbook digital. Tu decides o que lês e quando. O que guardas. O que apagas. Se um capítulo for demasiado, fecha-o. Volta quando estiveres pronto/a. Ou deixa-o de fora.

Informado pelo trauma não quer dizer: primeiro elaborar o trauma, depois viver. Quer dizer: tudo o que aqui acontece tem em conta aquilo que já trouxeste contigo.
:::

:::standard-quiz{id=q-14-std}
- q: "Quantos princípios orientadores definiu a SAMHSA para a prática informada pelo trauma?"
  type: multiple-choice
  options:
    - text: "Três."
      correct: false
    - text: "Seis."
      correct: true
      explanation: "Segurança, confiança, apoio entre pares, colaboração, empoderamento, sensibilidade cultural."
    - text: "Dez."
      correct: false

- q: "Quem decide o que é guardado nesta aplicação?"
  type: multiple-choice
  options:
    - text: "A aplicação."
      correct: false
    - text: "Tu. Sempre."
      correct: true
      explanation: "A autodeterminação sobre os teus dados é expressão de uma postura sensível ao trauma."
:::

:::standard-flashcards{id=f-14-std}
- front: "Seis princípios (SAMHSA)"
  back: "Segurança · Confiança e transparência · Apoio entre pares · Colaboração · Empoderamento · sensibilidade cultural e de género."
- front: "Primeiro a segurança"
  back: "Ninguém decide por cima de ti. És tu que determinas ritmo, profundidade e paragem."
- front: "Retraumatização"
  back: "Quando os sistemas de ajuda ferem ainda mais. A prática informada pelo trauma quer prevenir isto ativamente."
:::


# 15. Recovery e direitos humanos
{#kap-15 reading_time=4}

Recovery não é apenas uma questão técnica, mas também uma questão de direitos humanos. A Convenção da ONU sobre os Direitos das Pessoas com Deficiência garante às pessoas com deficiência — incluindo a deficiência psíquica — o direito à autodeterminação, à inclusão e a um apoio nas decisões [^uncrpd2006]. A Alemanha ratificou-a em 2009, a Áustria em 2008, a Suíça em 2014. Portugal ratificou-a em 2009.

A OMS lançou em 2019 a iniciativa QualityRights [^who2019] e em 2021 publicou a diretriz «Guidance on Community Mental Health Services» [^who2021]. Recovery é indicado como princípio central dos cuidados modernos.

Concretamente significa: reduzir a coação, nunca colocar o diagnóstico acima da pessoa, oferecer apoio onde as pessoas dele precisam — e envolver as pessoas com experiência direta como parceiras ao mesmo nível em todas as decisões sobre o cuidado.

:::info{type=example title="Exemplo: Diálogo Aberto (Open Dialogue)"}
Na Lapónia ocidental finlandesa, Jaakko Seikkula desenvolveu nos anos 1980 o conceito de Diálogo Aberto.

Nas crises psicóticas agudas, em 24 horas são envolvidas todas as pessoas de referência importantes. Todas as conversas acontecem em conjunto, todas as decisões são negociadas de forma transparente.

Os resultados a longo prazo são extraordinários: na Lapónia ocidental, mais de 80 % das pessoas com primeiro episódio psicótico voltaram ao trabalho ou à formação em dois anos. Um estudo de 19 anos confirmou a estabilidade a longo prazo dos resultados [^seikkula2011] [^bergstroem2018].
:::

:::easy{reading_time=1}
Recovery é também um direito humano.

A ONU fez em 2006 uma convenção. Diz: as pessoas com deficiência têm o direito de decidir por si próprias. Também as pessoas com doença psíquica.

A OMS diz em 2021: a psiquiatria deve respeitar estes direitos. Não deve ser o médico a decidir sozinho. Mas todos em conjunto.

Na Suíça, na Alemanha, na Áustria e em Portugal vale o mesmo.
:::

:::quiz{id=q-15}
- q: "O que é a Convenção da ONU sobre os Direitos das Pessoas com Deficiência?"
  type: multiple-choice
  options:
    - text: "Um método de tratamento."
      correct: false
    - text: "O tratado da ONU de 2006 sobre os direitos das pessoas com deficiência."
      correct: true
      explanation: "A Suíça ratificou-a em 2014, a Alemanha em 2009, a Áustria em 2008, Portugal em 2009."

- q: "O que diz a OMS em 2021?"
  type: multiple-choice
  options:
    - text: "Recovery não é científico."
      correct: false
    - text: "Os cuidados devem ser centrados na pessoa e baseados nos direitos."
      correct: true
:::

:::flashcards{id=f-15}
- front: "Convenção ONU deficiência 2006"
  back: "Garante autodeterminação — também nas deficiências psíquicas. CH ratifica 2014, DE 2009, AT 2008, PT 2009."
- front: "WHO QualityRights"
  back: "Iniciativa da OMS desde 2019. Em 2021 diretriz «Guidance on Community Mental Health Services»: centrada na pessoa, baseada nos direitos, orientada para Recovery."
- front: "Open Dialogue (Seikkula)"
  back: "Lapónia ocidental desde os anos 1980. Mais de 80 % das pessoas com primeira psicose voltam ao trabalho/formação em 2 anos. Confirmado no seguimento de 19 anos."
:::

:::standard{reading_time=2}
Recovery não é apenas uma questão técnica — é também uma questão de direitos humanos. Quem adoece psiquicamente não perde o direito de ser ouvido, envolvido e levado a sério.

A **Convenção da ONU sobre os Direitos das Pessoas com Deficiência** (UN-CRPD) de 2006 garante a todas as pessoas com deficiência — física, intelectual, psíquica — o direito à autodeterminação, à inclusão e a um apoio nas decisões. A Suíça ratificou-a em 2014, a Alemanha em 2009, a Áustria em 2008, Portugal em 2009. É direito em vigor.

A **Organização Mundial da Saúde (OMS)** deu peso a tudo isto em 2019 com a iniciativa QualityRights e em 2021 publicou a diretriz «Guidance on Community Mental Health Services». Recovery está aí como princípio central dos cuidados modernos — ao lado da centração na pessoa e da orientação para os direitos.

O que quer isto dizer em concreto?

- Reduzir a coação — sempre que possível.
- Nunca colocar o diagnóstico acima da pessoa.
- Oferecer apoio onde as pessoas vivem.
- Envolver as pessoas com experiência direta como parceiras ao mesmo nível nas decisões sobre o cuidado.

Um exemplo disto é o **Diálogo Aberto** da Finlândia. Nas crises psicóticas agudas, em 24 horas são envolvidas todas as pessoas de referência importantes. Mais de 80 % das pessoas no primeiro episódio voltaram ao trabalho ou à formação em dois anos — estudos a longo prazo confirmam a estabilidade destes resultados.

Não tens de saber estas estruturas de cor. Mas é bom saber: quando dizes «quero co-decidir», estás em terreno jurídico sólido.
:::

:::standard-quiz{id=q-15-std}
- q: "O que garante a Convenção da ONU sobre os Direitos das Pessoas com Deficiência também a pessoas com perturbações psíquicas?"
  type: multiple-choice
  options:
    - text: "Uma cura rápida."
      correct: false
    - text: "Autodeterminação, inclusão e apoio nas decisões."
      correct: true
      explanation: "UN-CRPD de 2006. Ratificada: CH 2014, DE 2009, AT 2008, PT 2009."
    - text: "Uma forma terapêutica específica."
      correct: false

- q: "O que diz a diretriz da OMS de 2021 sobre os cuidados psiquiátricos?"
  type: multiple-choice
  options:
    - text: "Devem ser centrados na pessoa e baseados nos direitos."
      correct: true
      explanation: "Recovery é aí indicado como princípio central."
    - text: "Devem ser o mais possível residenciais e a longo prazo."
      correct: false
    - text: "Devem ocorrer sem envolvimento das pessoas com experiência direta."
      correct: false
:::

:::standard-flashcards{id=f-15-std}
- front: "UN-CRPD 2006"
  back: "Convenção da ONU sobre os Direitos das Pessoas com Deficiência. Garante autodeterminação — também na deficiência psíquica. Ratificada: CH 2014, DE 2009, AT 2008, PT 2009."
- front: "WHO QualityRights"
  back: "Iniciativa da OMS desde 2019. Diretriz 2021: centrada na pessoa, baseada nos direitos, orientada para Recovery."
- front: "Open Dialogue"
  back: "Modelo finlandês. Mais de 80 % das pessoas com primeira psicose voltam ao trabalho ou à formação em 2 anos."
:::


# 16. Doença ou Recovery: duas visões
{#kap-16 reading_time=3}

Recovery é mais do que um novo método — é uma mudança de perspetiva [^knuf2026] [^slade2014] [^ameringschmolke2012].

:::table{name="Comparacao-paradigmas"}
| Visão orientada para a doença | Visão orientada para Recovery |
|------------------------------|-------------------------------|
| Diagnóstico no centro | Pessoa no centro |
| Ausência de sintomas como objetivo | Vida com sentido como objetivo |
| Especialista = pessoa especialista | Dupla competência: saber técnico + saber experiencial |
| Plano de tratamento | Plano de Recovery + plano de tratamento |
| Compliance | Shared Decision-Making |
| Olhar sobre o défice (patogénese) | Olhar sobre os recursos (salutogénese) |
| Caminho linear de cura | Caminho individual, não linear |
| A pessoa especialista carrega a esperança sozinha | A esperança é partilhada e emprestada |
| Paciente / cliente | Pessoa / pessoa com experiência / estudante |
:::

A coluna da direita não expulsa a da esquerda. Ambas têm o seu lugar — o paradigma orientado para Recovery alarga o médico, não o substitui [^slade2014].

Amering e Schmolke sublinham um ponto muitas vezes esquecido: a prática orientada para Recovery não é um módulo adicional colocado por cima. É outra forma de produzir saber — através da ligação entre saber técnico profissional e experiência vivida como fontes de igual valor [^ameringschmolke2012].

:::easy{reading_time=2}
Há duas visões sobre a doença psíquica:

**Visão antiga:**
- A doença está no centro.
- Objetivo: sintomas embora.
- O médico sabe melhor.
- Tu és paciente.

**Visão Recovery:**
- A pessoa está no centro.
- Objetivo: uma boa vida.
- Tu e a pessoa especialista decidem em conjunto.
- Tu és uma pessoa com experiência.

A visão antiga não está errada. Muitas vezes ajuda. Mas não chega sozinha.

A visão Recovery alarga a antiga. Não a substitui.
:::

:::quiz{id=q-16}
- q: "A visão Recovery substitui a visão médica?"
  type: true-false
  correct: false
  explanation: "Não — alarga-a. Ambas têm o seu lugar."

- q: "O que está no centro na visão Recovery?"
  type: multiple-choice
  options:
    - text: "O diagnóstico"
      correct: false
    - text: "A pessoa"
      correct: true
:::

:::flashcards{id=f-16}
- front: "Mudança de paradigma"
  back: "Do olhar sobre o défice (patogénese) ao olhar sobre os recursos (salutogénese) — sem abandonar a visão médica."
- front: "Compliance vs. Shared Decision-Making"
  back: "Compliance = segues. Shared Decision-Making = decidem em conjunto."
- front: "Síntese de saber"
  back: "A prática orientada para Recovery une saber técnico profissional e experiência vivida como fontes de igual valor (Amering & Schmolke 2012)."
:::

:::standard{reading_time=2}
Recovery é mais do que um novo método. É uma mudança de perspetiva — outra forma de olhar para a crise psíquica e para a recuperação.

A **visão orientada para a doença** coloca o diagnóstico no centro. O objetivo é a ausência de sintomas. A pessoa especialista é o especialista. Tu segues um plano de tratamento. O olhar vira-se para o que falta ou não funciona — para o défice.

A **visão orientada para Recovery** coloca a pessoa no centro. O objetivo é uma vida com sentido — com ou apesar dos sintomas. Especialistas são duas: a pessoa especialista E tu próprio/a. As decisões são tomadas em conjunto (Shared Decision-Making). O olhar vira-se para recursos, esperança, ligação.

Alguns pares de conceitos mostram a diferença:

- Diagnóstico no centro → Pessoa no centro
- Ausência de sintomas como objetivo → Vida com sentido como objetivo
- Compliance → Shared Decision-Making
- Olhar sobre o défice (patogénese) → Olhar sobre os recursos (salutogénese)
- Caminho linear de cura → Caminho individual, não linear
- Paciente → Pessoa / pessoa com experiência / estudante

Importante: a coluna da direita não expulsa a da esquerda. Ambas têm o seu lugar. Os medicamentos podem ajudar. Os diagnósticos podem orientar. Uma clínica pode ser um lugar seguro. Mas sozinho isto não chega — Recovery alarga a imagem médica com a tua voz, os teus valores, o teu sentido.

Amering e Schmolke dizem-no de forma clara: a prática orientada para Recovery não é um módulo adicional colocado por cima. É outra forma de produzir saber — através da ligação entre saber técnico e experiência vivida como fontes de igual valor.
:::

:::standard-quiz{id=q-16-std}
- q: "A visão Recovery substitui a visão médica?"
  type: multiple-choice
  options:
    - text: "Sim, substitui-a por completo."
      correct: false
    - text: "Não — alarga-a. Ambas têm o seu lugar."
      correct: true
      explanation: "Recovery é uma mudança de perspetiva, não uma renúncia ao saber médico."
    - text: "Não, está em contradição com ela."
      correct: false

- q: "O que está no centro na visão Recovery?"
  type: multiple-choice
  options:
    - text: "O diagnóstico."
      correct: false
    - text: "A pessoa — com a sua história, os seus valores, o seu sentido."
      correct: true
      explanation: "O diagnóstico orienta, mas não te define."
    - text: "A clínica."
      correct: false
:::

:::standard-flashcards{id=f-16-std}
- front: "Mudança de paradigma"
  back: "Do olhar sobre o défice (patogénese) ao olhar sobre os recursos (salutogénese) — sem abandonar a visão médica."
- front: "Compliance vs. Shared Decision-Making"
  back: "Compliance = segues. Shared Decision-Making = decidem em conjunto."
- front: "Duas competências"
  back: "Saber técnico E experiência vivida são fontes de saber de igual valor."
:::


# 17. Três frases para ti
{#kap-17 reading_time=3}

Não és o teu diagnóstico. És uma pessoa com uma história, com capacidades, com valores, com relações. Um diagnóstico pode ser uma orientação — nunca é toda a verdade sobre ti.

## Três frases que se ouvem muitas vezes no movimento Recovery

- És especialista da tua vida. A tua experiência é saber.
- Não tens de carregar tudo sozinha, sozinho. Procura aliados — peers, profissionais, pessoas de confiança.
- Podes decidir tu o ritmo e a direcção. Um passo atrás não é um fracasso.

## O que a investigação te pode dar

A esperança é um preditor da recuperação [^schrank2012]. O peer-support tem um efeito mensurável sobre a autoeficácia [^slade2024peer] [^mahlke2017]. A frequência em Recovery Colleges reduz custos posteriores de cuidados e aumenta o bem-estar [^ronaldson2024]. O auto-estigma pode mudar [^yanos2015].

:::reflection{id=7 title="O teu primeiro passo"}
- A quem poderias dirigir-te esta semana, alguém que te ouvisse sem julgar?
- Que pequena acção concretizável seria uma âncora de esperança para os próximos sete dias?
- Que área do modelo CHIME — ou da tríade Esperança-Poder-Sentido — devia receber um pouco mais de atenção esta semana?
:::

:::easy{reading_time=1}
Não és o teu diagnóstico. És uma pessoa.

Três frases importantes:

- Tu conheces a tua vida melhor do que ninguém.
- Não tens de carregar tudo sozinha, sozinho.
- Podes decidir o teu ritmo.

Os passos atrás fazem parte. Não são um fracasso.
:::

:::quiz{id=q-17}
- q: "O que significa «in Recovery»?"
  type: multiple-choice
  options:
    - text: "Estás curada, curado."
      correct: false
    - text: "Estás a caminho — um processo, não um estado."
      correct: true

- q: "Um passo atrás é um fracasso?"
  type: true-false
  correct: false
  explanation: "Não — os passos atrás fazem parte do percurso não linear do Recovery."
:::

:::flashcards{id=f-17}
- front: "És especialista da tua vida"
  back: "Ninguém conhece a tua experiência como tu. A tua voz conta — em pé de igualdade com o saber técnico."
- front: "Ritmo e direcção"
  back: "Decides tu ambos. O Recovery não é mensurável nem comparável."
:::

:::standard{reading_time=2}
Não és o teu diagnóstico. És uma pessoa com uma história, com capacidades, com valores, com relações. Um diagnóstico pode ser uma orientação — nunca é toda a verdade sobre ti.

Três frases que aparecem repetidamente no movimento Recovery — e que te queremos dar:

- **És especialista da tua vida.** A tua experiência é saber. Ninguém conhece a tua respiração, as tuas noites, as tuas esperanças como tu. Esta voz conta — em pé de igualdade com qualquer saber técnico.
- **Não tens de carregar tudo sozinha, sozinho.** Procura aliados. Peers, profissionais, pessoas de confiança, familiares, um grupo de entreajuda, um Recovery College. A esperança podes pedi-la emprestada, até voltares a senti-la.
- **Podes decidir tu o ritmo e a direcção.** O Recovery não é mensurável nem comparável. Um passo atrás não é um fracasso — faz parte do caminho não linear. Por vezes, uma pausa também é progresso.

O que a investigação te pode dar: a esperança é um preditor da recuperação. O peer-support reforça de forma mensurável a autoeficácia. Os Recovery Colleges reduzem hospitalizações e aumentam o bem-estar. O auto-estigma pode mudar.

Estas três frases não são um programa para cumprir. São antes como três pedras que pões no bolso. Tira-las quando precisas delas.

Talvez hoje. Talvez só daqui a meio ano.
:::

:::standard-quiz{id=q-17-std}
- q: "O que significa «in Recovery»?"
  type: multiple-choice
  options:
    - text: "Estás completamente curada, curado."
      correct: false
    - text: "Estás a caminho — um processo, não um estado."
      correct: true
      explanation: "Recovery é um caminho contínuo, não um ponto de chegada."
    - text: "Estás sem sintomas."
      correct: false

- q: "Um passo atrás é um fracasso?"
  type: multiple-choice
  options:
    - text: "Sim, então o caminho fracassou."
      correct: false
    - text: "Não — faz parte do percurso não linear do Recovery."
      correct: true
      explanation: "O Recovery raramente progride de forma linear. Pausas e recaídas fazem parte do caminho."
    - text: "Talvez — depende de quão grande for."
      correct: false
:::

:::standard-flashcards{id=f-17-std}
- front: "Três frases"
  back: "1) És especialista da tua vida. 2) Não tens de carregar tudo sozinha, sozinho. 3) Decides tu o ritmo e a direcção."
- front: "Passo atrás"
  back: "Não é um fracasso. Faz parte do caminho não linear."
- front: "Esperança emprestada"
  back: "Se não sentes esperança, podes pedi-la emprestada aos outros — até voltares a senti-la."
:::


# 18. Linguagem e postura — porque as palavras importam
{#kap-18 reading_time=3}

A linguagem orientada para o Recovery não é cosmética. Muda quem é reconhecido, num espaço, como sujeito — e quem se torna objecto de um tratamento [^ameringschmolke2012] [^knuf2026].

## O que evitamos — e o que dizemos em vez disso

No discurso germanófono sobre o Recovery consolidou-se uma série de regras concretas de linguagem [^ameringschmolke2012] [^knuf2026] [^slade2013]:

- «O/A esquizofrénico/a» → melhor: «pessoa com diagnóstico de esquizofrenia» (linguagem person-first).
- «Paciente» / «cliente» no contexto formativo → melhor: «estudante», «participante», «pessoa com experiência de crise».
- «Crónico», «incurável» → evitar. Ambos os termos são empiricamente questionáveis e prejudicam comprovadamente a recuperação.
- «Compliance» → melhor: «adesão terapêutica», melhor ainda: «decisão partilhada».
- «Consciência da doença» → melhor: «compreensão própria da doença».
- «Recovered» → em português: «in Recovery» (conceito de processo).
- «Défice», «portador de sintomas» → melhor: «recursos», «experiência de vida», «abalo psíquico».

A linguagem muda-te também a ti. Quem começa a dizer «in Recovery» pensa mais depressa em processos em vez de estados fixos — e dá assim, muitas vezes, o primeiro passo impercetível.

:::easy{reading_time=1}
As palavras mudam a realidade. Alguns exemplos:

- Não: «doente crónico» → melhor: «vive com o diagnóstico»
- Não: «Compliance» → melhor: «decisão partilhada»
- Não: «esquizofrénico» → melhor: «pessoa com esquizofrenia»
- Não: «curado» → melhor: «in Recovery»

A linguagem não é tudo. Mas muda muitas vezes o começo.
:::

:::quiz{id=q-18}
- q: "Qual formulação é person-first?"
  type: multiple-choice
  options:
    - text: "O borderline"
      correct: false
    - text: "Pessoa com diagnóstico borderline"
      correct: true

- q: "Que termo se deve evitar?"
  type: multiple-choice
  options:
    - text: "Pessoa com experiência de crise"
      correct: false
    - text: "Cronicamente incurável"
      correct: true
      explanation: "Empiricamente questionável e comprovadamente um obstáculo à recuperação."
:::

:::flashcards{id=f-18}
- front: "Linguagem person-first"
  back: "Diagnóstico depois da pessoa, não antes. «Pessoa com esquizofrenia» em vez de «esquizofrénico»."
- front: "in Recovery"
  back: "O conceito de processo. Em vez de «curado» ou «doente» — como caminho em curso."
- front: "Evitar «Compliance»"
  back: "Em vez de «Compliance» (segues instruções), antes «decisão partilhada» ou «adesão terapêutica»."
:::

:::standard{reading_time=2}
As palavras não são inofensivas. Mudam quem é reconhecido, num espaço, como pessoa — e quem se torna objecto de um tratamento. A linguagem orientada para o Recovery não é, por isso, cosmética. É postura.

No discurso germanófono sobre o Recovery consolidaram-se regras concretas de linguagem. Alguns exemplos:

- «O esquizofrénico» → melhor: «pessoa com diagnóstico de esquizofrenia» (**linguagem person-first**).
- «Paciente» / «cliente» no contexto formativo → melhor: «estudante», «participante», «pessoa com experiência de crise».
- «Crónico», «incurável» → evitar. Ambos os termos são empiricamente questionáveis e prejudicam comprovadamente a recuperação.
- «Compliance» → melhor: «adesão terapêutica» — melhor ainda: «decisão partilhada».
- «Consciência da doença» → melhor: «compreensão própria da doença».
- «Curado» / «recovered» → em português: «in Recovery» — como processo, não como estado final.
- «Défice», «portador de sintomas» → melhor: «recurso», «experiência de vida», «abalo psíquico».

Estas mudanças não são uma mera questão de etiquetas. Quem começa a dizer «in Recovery» pensa mais depressa em processos em vez de estados fixos. Quem diz «pessoa com diagnóstico» vê primeiro a pessoa e depois o diagnóstico. Muda muitas vezes precisamente aquele passo impercetível com que algo de novo começa.

A linguagem muda-te também a ti. O modo como falas de ti molda o modo como pensas sobre ti. Não tens de aprender todos estes termos ao mesmo tempo. Mas talvez nos próximos dias escutes com outros ouvidos — o que dizem médicos, familiares, terapeutas, tu própria, tu próprio.

E se algo te magoar: podes dizê-lo.
:::

:::standard-quiz{id=q-18-std}
- q: "Qual formulação é person-first?"
  type: multiple-choice
  options:
    - text: "O borderline."
      correct: false
    - text: "Pessoa com diagnóstico borderline."
      correct: true
      explanation: "Primeiro a pessoa, depois o diagnóstico. Isso é linguagem person-first."
    - text: "A doente mental."
      correct: false

- q: "Que termo se deve evitar?"
  type: multiple-choice
  options:
    - text: "Pessoa com experiência de crise."
      correct: false
    - text: "Cronicamente incurável."
      correct: true
      explanation: "Empiricamente questionável e comprovadamente um obstáculo à recuperação."
    - text: "In Recovery."
      correct: false
:::

:::standard-flashcards{id=f-18-std}
- front: "Linguagem person-first"
  back: "Diagnóstico depois da pessoa — não antes. «Pessoa com esquizofrenia» em vez de «esquizofrénico»."
- front: "In Recovery"
  back: "O conceito de processo. Em vez de «curado» ou «crónico» — como caminho em curso."
- front: "Evitar «Compliance»"
  back: "Em vez de «Compliance» (segues), antes «decisão partilhada» ou «adesão terapêutica»."
:::


# 19. Como usar este workbook
{#kap-19 reading_time=2}

Este workbook digital não é um manual. É um companheiro:

- Dá-te tempo. Uma página por dia chega.
- Sê honesta, honesto contigo. Decides tu o que é guardado ou partilhado.
- Salta. Segue aquilo que te fala.
- Repete. A mesma pergunta lê-se de outra forma daqui a três meses.
- Partilha, se quiseres — com uma pessoa de confiança, com um acompanhamento peer, num grupo.

## Protecção de dados e autodeterminação

Tudo o que escreves nesta app pertence-te. Decides tu se algo é sincronizado, guardado ou apagado. Os registos são encriptados. Uma auto-eliminação dos dados é possível a qualquer momento. Esta arquitectura de autodeterminação não é um pormenor técnico, é expressão da postura orientada para o Recovery deste workbook [^who2021] [^samhsa2014trauma] [^uncrpd2006].

:::easy{reading_time=1}
Como usar esta app:

- Dá-te tempo. Uma página por dia chega.
- Sê honesta, honesto contigo.
- Salta de capítulo em capítulo.
- Volta. A mesma pergunta lê-se de outra forma mais tarde.
- Partilha, se quiseres.

Os teus dados pertencem-te. A app só guarda o que tu queres. Podes apagar tudo. A qualquer momento.
:::

:::quiz{id=q-19}
- q: "É preciso ler os capítulos pela ordem?"
  type: true-false
  correct: false
  explanation: "Não — salta como te fizer sentido."

- q: "Quem decide o que é guardado?"
  type: multiple-choice
  options:
    - text: "A app"
      correct: false
    - text: "Tu"
      correct: true
:::

:::flashcards{id=f-19}
- front: "Protecção de dados nesta app"
  back: "Os teus dados pertencem-te. Encriptados. Decides tu o que é sincronizado, guardado ou apagado. Apagáveis a qualquer momento."
- front: "Modo de trabalho"
  back: "Uma página por dia. Saltar permitido. Repetir bem-vindo. Partilhar opcional."
:::

:::standard{reading_time=2}
Este workbook não é um manual. É um companheiro — e és tu que decides como te acompanha.

Algumas indicações que se têm mostrado úteis:

- **Dá-te tempo.** Uma página por dia chega. Por vezes basta um parágrafo. Não há um ritmo que tenhas de atingir.
- **Sê honesta, honesto contigo.** Não tens de provar nada a ninguém — nem sequer à app. Os teus registos são para ti.
- **Salta.** Segue aquilo que te fala. Não tens de ler pela ordem.
- **Repete.** A mesma pergunta de reflexão lê-se de outra forma daqui a três meses. Volta.
- **Partilha, se quiseres.** Com uma pessoa de confiança, com um acompanhamento peer, com um grupo — ou com ninguém. Ambas as opções estão certas.

**Protecção de dados e autodeterminação.** Tudo o que escreves nesta app pertence-te. Decides tu se algo é sincronizado, guardado ou apagado. Os registos são encriptados. Uma auto-eliminação completa dos teus dados é possível a qualquer momento.

Não é só um pormenor técnico. É expressão da postura deste workbook: não és objecto de um tratamento, és sujeito do teu caminho. A autodeterminação sobre os próprios dados é um pedaço concreto de Recovery — e ao mesmo tempo um direito humano (UN-CRPD, OMS 2021, SAMHSA).

Se um capítulo se tornar demasiado, fecha-o. Se algo te tocar, fica aí. Não existe uma ordem errada. Existe só o teu caminho — e este workbook acompanha-te até onde o deixares.
:::

:::standard-quiz{id=q-19-std}
- q: "Tens de ler os capítulos pela ordem?"
  type: multiple-choice
  options:
    - text: "Sim, senão não funciona."
      correct: false
    - text: "Não — salta como te fizer sentido."
      correct: true
      explanation: "Segue aquilo que te fala. Repetir é bem-vindo."
    - text: "Só com a orientação de um profissional."
      correct: false

- q: "Quem decide o que é guardado ou apagado na app?"
  type: multiple-choice
  options:
    - text: "A própria app."
      correct: false
    - text: "Tu — a qualquer momento, completamente apagável."
      correct: true
      explanation: "A autodeterminação sobre os teus dados é expressão da postura orientada para o Recovery."
    - text: "O teu profissional."
      correct: false
:::

:::standard-flashcards{id=f-19-std}
- front: "Modo de trabalho"
  back: "Uma página por dia. Saltar permitido. Repetir bem-vindo. Partilhar opcional."
- front: "Protecção de dados"
  back: "Os teus registos são encriptados e pertencem-te. Eliminação completa possível a qualquer momento."
- front: "Postura do workbook"
  back: "Companheiro, não manual. Decides tu ritmo, profundidade e alcance — e podes também fechá-lo."
:::


# 20. Crise e segurança — linhas de emergência D-A-CH
{#kap-20 reading_time=2}

Se estás agora em sofrimento agudo — se tens pensamentos de te magoar ou de magoar outros, ou se sentes que os conteúdos aqui te estão a destabilizar mais — este não é o momento certo para perguntas de reflexão. Por favor, procura apoio agora.

:::crisis
Os números de emergência estão estruturados na frontmatter em `helplines:`. A app mostra-os como cartões país a país com Tap-to-Call e Tap-to-Open-URL.
:::

Estas linhas são anónimas, gratuitas e sem julgamento. Não precisas de ter uma «crise verdadeira» para ligar. Uma chamada feita cedo é sempre melhor do que nenhuma.

:::info{type=warmth title="Antes de fechar: três frases para as horas difíceis"}
- Não tens de percorrer este caminho sozinha, sozinho.
- Um sentimento é uma informação, não uma ordem — também o sentimento mais pesado se vai mover.
- Pedir ajuda nunca é um sinal de fraqueza. É um sinal de que levas a tua vida a sério.
:::

:::easy{reading_time=1}
Se neste momento estás a sentir-te muito mal, não leias mais aqui. Pede ajuda.

- **Suíça**: Telefone 143 (Die Dargebotene Hand / La Mano Tesa). Dia e noite.
- **Alemanha**: Telefone 0800 111 0 111.
- **Áustria**: Telefone 142.

Estas linhas são gratuitas e anónimas. Podes ligar mesmo que não saibas se é suficientemente grave.

Uma chamada nunca é demasiado cedo.
:::

:::quiz{id=q-20}
- q: "Que número marcas na Suíça para a Die Dargebotene Hand?"
  type: multiple-choice
  options:
    - text: "112"
      correct: false
    - text: "143"
      correct: true
    - text: "147"
      correct: false
      explanation: "147 é a Pro Juventute — para crianças e jovens."

- q: "É preciso ter uma «crise verdadeira» para ligar?"
  type: true-false
  correct: false
  explanation: "Não — uma chamada cedo é sempre melhor do que nenhuma."
:::

:::flashcards{id=f-20}
- front: "Número de crise Suíça"
  back: "143 — Die Dargebotene Hand. Dia e noite. Anónimo. Gratuito."
- front: "Número de crise Alemanha"
  back: "0800 111 0 111 ou 0800 111 0 222. Telefonseelsorge. 24/7. Gratuito."
- front: "Número de crise Áustria"
  back: "142. Telefonseelsorge. 24/7."
- front: "Crianças e jovens CH/AT"
  back: "147 — Pro Juventute (CH) ou Rat auf Draht (AT). 24/7."
:::

:::standard{reading_time=2}
Se neste momento estás em sofrimento agudo — se tens pensamentos de te magoar ou de magoar outros, ou se os conteúdos aqui te destabilizam mais — este não é o momento para perguntas de reflexão. Por favor, procura apoio agora.

**Os números mais importantes para os países de língua alemã:**

- **Suíça:** **143** — Die Dargebotene Hand. 24/7. Anónimo. Gratuito.
- **Alemanha:** **0800 111 0 111** ou **0800 111 0 222** — Telefonseelsorge. 24/7. Gratuito.
- **Áustria:** **142** — Telefonseelsorge. 24/7.

Em perigo de vida: **112** (na UE) ou **144** (serviço de emergência médica CH/AT).

Para crianças e jovens: **147** (Pro Juventute CH / Rat auf Draht AT). 24/7.

Estas linhas são anónimas, gratuitas e sem julgamento. Não precisas de ter uma «crise verdadeira» para ligar. Não tens de explicar se é suficientemente grave. Uma chamada feita cedo é sempre melhor do que nenhuma.

**Três frases para as horas difíceis — antes de fechares:**

- Não tens de percorrer este caminho sozinha, sozinho.
- Um sentimento é uma informação, não uma ordem. Também o sentimento mais pesado se vai mover.
- Pedir ajuda não é um sinal de fraqueza. É um sinal de que levas a tua vida a sério.

Se neste momento não consegues ligar a ninguém: entra em contacto com uma pessoa em quem confias. Envia uma mensagem. Vai ao serviço de urgência mais próximo. Um pequeno movimento para fora basta.

Não estás sozinha, não estás sozinho. Mesmo que agora pareça assim.
:::

:::standard-quiz{id=q-20-std}
- q: "Que número marcas na Suíça em sofrimento psíquico agudo?"
  type: multiple-choice
  options:
    - text: "112"
      correct: false
    - text: "143 (Die Dargebotene Hand)"
      correct: true
      explanation: "143 é o número de crise 24/7 para sofrimento psíquico na Suíça."
    - text: "144 — é só para perigo de vida / emergência médica."
      correct: false

- q: "É preciso ter uma «crise verdadeira» para ligar?"
  type: multiple-choice
  options:
    - text: "Sim, senão não te levam a sério."
      correct: false
    - text: "Não — uma chamada cedo é sempre melhor do que nenhuma."
      correct: true
      explanation: "Podes ligar mesmo que estejas insegura, inseguro."
    - text: "Só se estiveres em perigo de vida."
      correct: false
:::

:::standard-flashcards{id=f-20-std}
- front: "Emergência Suíça"
  back: "143 — Die Dargebotene Hand. 24/7. Anónimo. Gratuito."
- front: "Emergência Alemanha"
  back: "0800 111 0 111 ou 0800 111 0 222 — Telefonseelsorge. 24/7. Gratuito."
- front: "Emergência Áustria"
  back: "142 — Telefonseelsorge. 24/7."
- front: "Quando ligar?"
  back: "Sempre. Mesmo em caso de incerteza. Uma chamada nunca é demasiado cedo."
:::


# 21. Uma pequena promessa para o fim
{#kap-21 reading_time=2}

Recovery não significa que tudo volta a ser como era. Significa que algo de novo pode nascer — por vezes mesmo algo que sem esta experiência nunca teria existido.

Vais ter dias em que isto vai soar como uma promessa vazia. E vais ter dias em que tu própria, tu próprio te aperceberás de que algo se mexeu — uma esperança minúscula, uma pequena ligação, um pensamento que antes não era possível.

O que a investigação te pode dar para o caminho: não estás sozinha, não estás sozinho. Há um caminho. E a esperança podes pedi-la emprestada, até voltares a senti-la.

:::quote{author="Patricia Deegan, 1996" source="deegan1996" lang="en"}
By accepting what we cannot do or be, we begin to discover what we can do and who we can become.
:::

:::quote-translation{source="deegan1996" translator="tradução própria"}
Ao aceitar o que não podemos fazer ou ser, começamos a descobrir quem podemos ser e o que podemos fazer.
:::

:::quote{author="Antonio Machado"}
Os caminhos fazem-se caminhando.
:::

:::pull
No teu caminho.
:::

:::easy{reading_time=1}
Recovery não significa: tudo volta a ser como antes.

Recovery significa: algo de novo pode nascer.

Vais ter dias difíceis. Vais ter também dias mais leves.

Três frases para o fim:

- Não estás sozinha, não estás sozinho.
- Há um caminho.
- A esperança podes pedi-la emprestada, até voltares a tê-la.

No teu caminho.
:::

:::quiz{id=q-21}
- q: "Que imagem descreve melhor o Recovery?"
  type: multiple-choice
  options:
    - text: "Uma linha recta até à meta."
      correct: false
    - text: "Um caminho que se faz caminhando (Machado)."
      correct: true

- q: "A quem pertence o caminho?"
  type: multiple-choice
  options:
    - text: "Ao médico."
      correct: false
    - text: "A ti — com aliados."
      correct: true
:::

:::flashcards{id=f-21}
- front: "No teu caminho"
  back: "A frase de fecho da introdução. Recovery é sempre o teu caminho — com aliados."
- front: "Três frases para o fim"
  back: "Não estás sozinha, não estás sozinho. Há um caminho. A esperança podes pedi-la emprestada, até voltares a tê-la."
- front: "Os caminhos fazem-se caminhando"
  back: "Antonio Machado — o lema de muitos workbooks Recovery e também desta app."
:::

:::standard{reading_time=2}
Recovery não significa que tudo volta a ser como era. Significa que algo de novo pode nascer — por vezes mesmo algo que sem esta experiência nunca teria existido. Outra profundidade. Outra atenção. Por vezes, uma linguagem que antes não tinhas.

Vais ter dias em que isto vai soar como uma promessa vazia. E vais ter dias em que tu própria, tu próprio te aperceberás de que algo se mexeu — uma esperança minúscula, uma pequena ligação, um pensamento que antes não era possível.

Ambas as coisas fazem parte. Recovery não é um caminho a direito. Tem pausas, voltas, regressos. Antonio Machado disse-o assim: «Os caminhos fazem-se caminhando.» Vale também para o teu caminho.

O que a investigação te pode dar para a viagem:

- **Não estás sozinha, não estás sozinho.** Milhares de pessoas atravessaram períodos semelhantes — e encontraram uma boa vida.
- **Há um caminho.** Mesmo que hoje seja invisível. Mesmo que não se pareça com o caminho dos outros.
- **A esperança podes pedi-la emprestada.** Se neste momento não a tens, outros seguram-na por ti — um acompanhamento peer, uma terapeuta, uma amiga, um livro, uma história deste workbook.

Podes voltar a fechar este workbook. Podes voltar a abri-lo meses depois. Podes partilhá-lo. Podes esquecê-lo. Podes também dizer: hoje não.

O que fica é esta pequena promessa: no teu caminho. Caminhamos um bocadinho contigo.
:::

:::standard-quiz{id=q-21-std}
- q: "E se neste momento não sentes esperança?"
  type: multiple-choice
  options:
    - text: "Então o Recovery acabou."
      correct: false
    - text: "Podes pedir a esperança emprestada aos outros — até voltares a senti-la."
      correct: true
      explanation: "A esperança partilha-se. Outros podem segurá-la por ti."
    - text: "Então fizeste algo de errado."
      correct: false

- q: "Como decorre o Recovery?"
  type: multiple-choice
  options:
    - text: "Como uma linha recta até à meta."
      correct: false
    - text: "Como um caminho individual — com pausas, voltas, regressos. «Os caminhos fazem-se caminhando.» (Machado)"
      correct: true
      explanation: "O Recovery não é linear. As recaídas fazem parte do caminho."
    - text: "Exactamente igual ao dos outros."
      correct: false
:::

:::standard-flashcards{id=f-21-std}
- front: "Recovery"
  back: "Algo de novo pode nascer. Não: tudo volta a ser como antes."
- front: "Esperança emprestada"
  back: "Se não a tens: outros seguram-na por ti — até voltares a senti-la."
- front: "Três frases para o fim"
  back: "Não estás sozinha, não estás sozinho. Há um caminho. A esperança podes pedi-la emprestada."
- front: "No teu caminho"
  back: "«Os caminhos fazem-se caminhando.» (Antonio Machado) — Caminhamos um bocadinho contigo."
:::


# Notas metodológicas (internas)
{#methodik}

Todas as afirmações foram verificadas em relação às fontes primárias listadas na frontmatter. Onde existiam revisões e meta-análises, deu-se-lhes preferência face a estudos individuais.

As citações textuais são apresentadas no seu enunciado original (widget Quote com referência `source`). As versões em português estão assinaladas como «tradução própria» (widget Quote-Translation). Conceitos e modelos (CHIME, CHIME-D, Esperança-Poder-Sentido, Personal Medicine, Triálogo, EX-IN, Salutogénese, Open Dialogue) são usados como termos científicos e estão ligados, no registo de fontes, aos seus autores.


**Nota sobre a tradução portuguesa (Junho de 2026):** Esta versão é uma tradução de rascunho produzida por uma IA, com base na fonte alemã primária. O estilo é o «tu» caloroso e pessoal (português europeu); os termos técnicos Recovery, Empowerment, CHIME, EX-IN, Triálogo mantêm-se como consolidados na literatura. Os conteúdos sobre crise e segurança necessitam de uma revisão profissional antes de qualquer uso clínico ou difusão oficial. Os números de emergência D-A-CH foram mantidos conforme a fonte alemã.
