---
schema_version: "1.2"
content_id: "recovery-einleitung"
content_version: "3.14"
title: "Recovery"
subtitle: "Ina introducziun cumplessiva — Speranza. Pussanza. Senn."
language: "rm"
translation_status: "draft-machine-translated"
translation_date: "2026-06-20"
translator: "Claude subagent (draft – BESONDERS NÖTIG: professional review by Rumantsch-Native mit Mental-Health-Hintergrund). Updated 2026-06-20 with Standard mode blocks. STRONGLY recommend Rumantsch-native + mental-health review."
region: "D-A-CH"
target_audience: "betroffene"
target_audience_label: "Per persunas cun atgna experientscha da chargias psichicas"
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
    status: "draft-machine-translated"
  - code: "en"
    label: "English"
    status: "planned"
  - code: "pt"
    label: "Português"
    status: "planned"
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
  full:  "Detagliad — cun perscrutaziun, citaziuns e funtaunas"
  easy:  "Simpel — curt ed en lingua simpla"
  standard: "Standard — lunghezza meziana, cler e persunal"
default_reading_mode: "standard"
# - full: rendert alles ausser :::easy und :::standard
# - easy: rendert NUR :::easy-Blöcke aller Kapitel
# - standard: rendert NUR :::standard-Blöcke (alle Kapitel haben einen)

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
  standard:      "Mittellange Standard-Variante des Kapitels – in jedem Kapitel vorhanden"
  standard-quiz: "Mini-Quiz pro Kapitel im Standard-Modus (2–3 Fragen)"
  standard-flashcards: "Lernkarten pro Kapitel im Standard-Modus (2–4 Karten)"

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
    name: "La Maun Purschida (Die Dargebotene Hand)"
    number: "143"
    coverage: "24/7, multilingual"
    target: "tuts"
    url: "https://www.143.ch"
  - country: "CH"
    name: "Pro Juventute"
    number: "147"
    coverage: "24/7"
    target: "uffants/giuvenils"
    url: "https://www.147.ch"
  - country: "CH"
    name: "Numer d'urgenza / Sanitad"
    number: "144"
    coverage: "privel da vita"
    target: "tuts"
  - country: "DE"
    name: "Telefonseelsorge"
    number: "0800 111 0 111 / 0800 111 0 222"
    coverage: "24/7, gratuit, anonim"
    target: "tuts"
    url: "https://www.telefonseelsorge.de"
  - country: "DE"
    name: "Info-Telefon Depression"
    number: "0800 33 44 533"
    coverage: "glindesdi/mardi/gievgia 13–17, mesemna/venderdi 8.30–12.30"
    target: "tuts"
    url: "https://www.deutsche-depressionshilfe.de"
  - country: "DE"
    name: "Numer d'urgenza general"
    number: "112"
    coverage: "privel da vita"
    target: "tuts"
  - country: "AT"
    name: "Telefonseelsorge"
    number: "142"
    coverage: "24/7"
    target: "tuts"
    url: "https://www.telefonseelsorge.at"
  - country: "AT"
    name: "Rat auf Draht"
    number: "147"
    coverage: "24/7"
    target: "uffants/giuvenils"
    url: "https://www.rataufdraht.at"
  - country: "AT"
    name: "Numer d'urgenza general / Salvament"
    number: "144"
    coverage: "privel da vita"
    target: "tuts"
  - country: "EU"
    name: "Numer d'urgenza european"
    number: "112"
    coverage: "en tut l'UE, privel da vita"
    target: "tuts"
---
# Indicaziun impurtanta avant la lectura
{#disclaimer reading_time=2}

:::info{type=warmth title="Per plaschair leger en emprim"}
Questa app è in **prototip**. Ella vegn anc sviluppada ed è betg cumpletta.

Ella serva exclusivamain per testar in pussaivel futur workbook en il sectur dal recovery.
:::

## Tge che quai è e tge che quai n'è betg

Ti dovras actualmain ina **versiun da test** d'ina app ch'è anc en svilup. Ils texts e las funcziuns èn ina emprima sboz. Els n'èn anc betg vegnids verifitgads professiunalmain — ni dal puntg da vista clinic ni linguistic.

**Questa app è BETG in utensil terapeutic.** Ella na remplazza nagina tractament, nagina terapia, nagin cussegl medicinal e nagina intervenziun da crisa.

## Per plaschair tegna quintas las suandantas reglas

- **Betg duvrar en in setting clinic.** En sia furma actuala na dastga questa app betg vegnir duvrada sco utensil en clinicas, praticas, lieus da cussegliaziun u auters lieus da provedida.
- **Betg duvrar sco sustegn unic en il sectur privat.** Sche ti es svess pertutgà/da, dovra questa app per plaschair mo en il rom d'ina fasa da test organisada — betg sco accumpagnament unic en ina situaziun da vita greva.
- **En cas da dubi: vai per agid real.** Sche ti vas mal, drizza tai vers ina persuna da confidenza, vers tias persunas tractantas u vers ils numers da crisa ch'èn inditgads en il chapitel 20 da quest workbook.

## Nagina garanzia, nagina responsabladad

Ils cuntegns da questa app vegnan messi a disposiziun senza garanzia. I na vegn surpigliada nagina responsabladad per donns — materials u immaterials — che pudessan resultar da l'utilisaziun u da la betg-utilisaziun da questa app.

L'app è vegnida elaborada tenor noss meglier savair ed sin la basa da la perscrutaziun actuala dal recovery. Tuttina pon ils cuntegns cuntegnair sbagls, malexactezzas u furmulaziuns betg adattadas. Sche ti remartgas insatge, ans legrain nus d'in resun — quai è precis il senn da questa fasa da test.

## Sche ti es actualmain en ina crisa

Sche la lectura da questa app ta cuosta u ta destabilisescha, metta la dapart.

En crisas acutas pos ti contactar a tut las uras:
- **Svizra:** 143 (Die Dargebotene Hand)
- **Germania:** 0800 111 0 111 (Telefonseelsorge)
- **Austria:** 142 (Telefonseelsorge)
- **En privel da vita:** 112 u 144 (CH/AT) resp. 112 (DE)

Tschertgar agid n'è mai memia baud.

:::standard{reading_time=2}
Ti dovras ussa in **prototip**. Questa app n'è anc betg ferma — ella duai mussar co in cudesch da lavur Recovery futur pudess esser. Ils texts e las funcziuns èn ina emprima rusca e n'èn anc betg controllads professiunalmain.

**Questa app n'è betg in instrument terapeutic.** Ella na remplazza nagina tractament, nagina terapia, nagina cussegliaziun medicinala e nagina intervenziun en crisa.

**Tegnas per plaschair questas reglas:**

- N'utilisa betg en in context clinic — pia betg sco agid en clinicas, praticas u uffizis da cussegliaziun.
- N'utilisa betg sco sustegn sulet en ina situaziun greva da la vita.
- En cas da dubi: tschertgar agid ver — ina persuna da confidenza, tia squadra da tgira u ina lingia da crisa.

**En crisas acutas** ti pos clamar 24 uras al di: Svizra **143**, Germania **0800 111 0 111**, Austria **142**. En privel da vita: **112** (CH/AT/DE/UE).

Ils cuntegns vegnan messi a disposiziun senza garanzia. Sche ti vesas insatge, ans legram per tia resposta — è exactamain quai il senn da questa fasa da test.

Cuntinuond la lectura, ti conferms d'avair chapì quests avis.
:::

:::pull
Cun cuntinuar la lectura conferma ti che ti has chapì questas indicaziuns e che ti dovras l'app en il rom d'ina fasa da test.
:::


# Avantpled: Recovery cumenza cun istorgias
{#vorspann reading_time=4}

:::pull
Recovery, quai èn bleras milli istorgias da persunas che han chattà — malgrà u pervia da lur simptoms — ina via en ina buna vita.
:::

Quai èn istorgias che èn darar en las gasettas, pervia ch'ellas dattan nagin scandal. Istorgias che capitan tuttina mintga di — en libraregias, vi da pianos, en chors, en gruppas da discussiun, en stanzas da seser, en stanzas d'aspetta, en cuschinas.

Ina dunna che era ditg persvadida ch'ella na vegnia mai pli ad exequitar ina professiun, e che maina oz ina pitschna libraregia. In bab che giauda darnovamain piano suenter ina psicosa — autramain che pli baud, cun damain perfecziun, cun dapli amur. In um giuven che è daventà accumpagnader dal sanament suenter onns cun ina diagnosa borderline, perquai ch'el vul stender ad auters la maun che ad el sez ha mancà. Ina mamma che ha accumpagnà sia figlia tras ina greva disordinaziun da mangiar e che di: en quel temp hai jau emprendì dapli davart l'amur che en tut mia vita avant.

Talas istorgias n'existan betg a duzainas. Ellas existan a milli. Probablamain a tschient milli. Uschè bleras sco ch'i dat persunas che èn mai passadas tras in temp psichic grev.

## Recovery è documentà

La Rait Scotica dal Recovery ha rimnà l'onn 2007 sessantaquatter talas istorgias e las ha analisadas sistematicamain [^brown2007]. L'iniziativa britannica ImROC rimna rapports d'experientscha dapi onns [^imroc]. La cuminanza internaziunala dals udiders da vuschs rimna dapi ils onns 1990 vuschs che n'èn betg en cudeschs da scola [^hvn].

A l'Universitad da Nottingham ha Mike Slade construì cun il program NEON — Narrative Experiences Online — ina collecziun scientifica d'istorgias da Recovery registradas [^slade2021neon]. En studis controllads randomisads è vegnì mussà ch'udir talas istorgias megliera la qualitad da vita en moda mesirabla — tar persunas cun experientscha da psicosa [^rennick2024neon] e tar confamigliars che las accumpognan [^neonc2024].

Auter ditg: Recovery n'è betg mo ina empermischun sentida. Recovery è in fenomen documentà. Ed istorgias d'autras persunas èn sezzas ina furma d'agid.

## Recovery è pratic

Recovery na capita betg en emprima lingia en la stanza da tractament. Recovery èn inscunters. Recovery è il curtin, en il qual ins planta puspè suenter mais. Il chaun che chatta mintga damaun la porta. Il chor en il qual l'agen flad ha puspè ina vusch. L'amia che taidla, senza vulair reparar. La gruppa trialogica da discussiun la sairada da la mesemna. La spassegiada en las collinas. Il paun che ha basegn da dudesch uras en il furmaint zur.

Recovery èn istorgias da resilienza — e da creativitad che nascha savens precis là nua ch'insatge è ì a tocs. Recovery è fitg savens er: fortuna.

Betg quella fortuna senza tocca, adina sclerinta, da las broschuras glisginadas. Mabain l'autra — la fortuna quieta, engraziada, mintgatant surprida. La fortuna che ins enconuscha pir, sch'ins sa quant lung che po esser in di.

## E ti?

Ti na stos sentir nagut da tut quai per esser qua. Forsa n'è gist betg il mument per pleds gronds sco fortuna u senn. Forsa basta oz ch'i ti legias questa pagina. Quai è avunda.

Quest workbook è scrit per persunas che fan ina tala via — u che accumpognan, u che vulan chapir. El na vul betg esser ina bella teoria. El vul esser segns da via.

:::pull
Avant che cumenzar — in cuort fil cundutter.
:::

:::easy{reading_time=1}
Recovery è in moviment. Bleras persunas han fatg quai: ellas han gì in temp grev. Oz vivan ellas bain. Malgrà la malsogna. Mintgatant er pervia da la malsogna.

I dat milli talas istorgias.

Recovery na capita betg mo tar il medi. Recovery capita en tia vita. Tar il cuschinar. Tar il spassegiar. Tar il discurrer cun bunas persunas.

Quest workbook vul ta gidar. El n'è betg in cudesch per emprender. El è in accumpagnader.
:::

:::quiz{id=q-vorspann}
- q: "Nua capita Recovery il pli savens?"
  type: multiple-choice
  options:
    - text: "Mo en la clinica."
      correct: false
      explanation: "Na. Recovery capita surtut en il mintgadi — en inscunters, en pitschens pass."
    - text: "En la vita — en inscunters, en il mintgadi."
      correct: true
      explanation: "Gist uschia. Il tractament è in utensil, betg in lieu."
    - text: "Pir cur che tut ils simptoms èn ida davent."
      correct: false
      explanation: "Recovery na cumenza betg pir suenter la libertad da simptoms."

- q: "Quantas istorgias da Recovery datti?"
  type: multiple-choice
  options:
    - text: "Ina maunada."
      correct: false
    - text: "Tschientiners."
      correct: false
    - text: "Milliers, sche betg tschient milliers."
      correct: true
      explanation: "Uschè bleras sco ch'i dat persunas che èn mai passadas tras in temp grev."
:::

:::flashcards{id=f-vorspann}
- front: "Recovery cumenza cun …"
  back: "… istorgias. Milli persunas che han chattà — malgrà u pervia da lur simptoms — ina via en ina buna vita."
- front: "Program NEON"
  back: "Collecziun scientifica d'istorgias da Recovery registradas (Universitad da Nottingham). Studis mussan: tadlar talas istorgias megliera la qualitad da vita en moda mesirabla."
- front: "Recovery capita …"
  back: "… betg en emprima lingia en la stanza da tractament. En il curtin, en il chor, en il discurs, tar il cuschinar, en inscunters."
:::

:::standard{reading_time=2}
Recovery cumenza cun istorgias. Betg cun teoria, betg cun diagnosas — cun umans che han chattà ina via.

Ina dunna che ha pensà durant onns ch'ella na vegnia mai pli ad exercitar ina professiun, e che maina oz ina pitschna libraria. In bab che giogia puspè il pianoforte suenter ina psicosa — autramain che pli baud, cun damain perfecziun, cun dapli amur. In um giuven che accumpogna oz auters suenter ina diagnosa Borderline, perquai ch'el vul porscher ad els la maun che ad el aveva mancada.

Talas istorgias na datti betg en dunsainas. Ellas existan en milliers. Tantas, sco ch'i dat umans che han mai passentà in temp psichic difficil.

Recovery è dapli ch'ina empermischun sentida. Recovery è documentà:

- La Rait Recovery Scozaisa ha analisà sistematicamain 64 vias da vita.
- L'Universitad da Nottingham raduna istorgias da Recovery a moda scientifica.
- Studis mussan: Tadlar talas istorgias meglierescha mesirablamain la qualitad da vita.

Recovery succeda er darar l'emprima giada en la stanza da tractament. Recovery succeda en l'iert, nua ch'i vegn puspè plantà suenter mais. En il chor, nua che tia respiraziun ha puspè ina vusch. En l'amia che taidla senza vulair reparar.

Ti na stos anc betg sentir nagut da quai per esser qua. Forsa basta oz, che ti legias questa pagina. Quai basta.

Quest workbook è in segn da via. Betg ina bella teoria — mabain in accumpagnatur per tia via.
:::

:::standard-quiz{id=q-vorspann-std}
- q: "Nua succeda Recovery surtut?"
  type: multiple-choice
  options:
    - text: "Mo en la clinica u en la terapia."
      correct: false
      explanation: "Recovery succeda surtut en il mintgadi — en inscunters, en l'iert, en il chor, cuschinond."
    - text: "En la vita — en inscunters ed en il mintgadi."
      correct: true
      explanation: "Exact. Tractament è in utensil, betg in lieu."
    - text: "Pir cur che tut ils simptoms èn sparids."
      correct: false
      explanation: "Na. Recovery cumenza amez la difficultad."

- q: "Quantas istorgias da Recovery datti?"
  type: multiple-choice
  options:
    - text: "Ina pugnada."
      correct: false
    - text: "Milliers, probablamain tschientmilliers."
      correct: true
      explanation: "Tantas, sco ch'i dat umans che han mai passentà in temp difficil."
    - text: "Mo paucs cas singuls."
      correct: false
:::

:::standard-flashcards{id=f-vorspann-std}
- front: "Recovery cumenza cun …"
  back: "… istorgias. Milliers d'umans che han chattà, malgrà u pervia da lur simptoms, ina via en ina buna vita."
- front: "Nua ha lieu Recovery?"
  back: "En il mintgadi. En l'iert, en il chor, en la conversaziun, cuschinond. Tractament è in utensil, betg in lieu."
- front: "Es ti sulet/a?"
  back: "Na. Milliers èn ids tras temps sumegliants. Lur istorgias mussan: I dat ina via."
:::


# Ina nota curta a la lingua
{#sprache reading_time=2}

Pleds creeschan realitad. Tgi che vegn discurrì sco „schizofren" auda ina diagnosa. Tgi che vegn discurrì sco „persuna cun la diagnosa schizofrenia" resta en emprima lingia ina persuna. Questa introducziun dovra cuschientamain ina lingua orientada a la persuna (person-first): la diagnosa suenter la persuna, betg avant ella [^ameringschmolke2012] [^knuf2026].

Nus discurrin da persunas cun crisas psichicas, experientschas da crisa u experientscha da la psichiatria — betg da „malsauns". Nus discurrin da persunas en Recovery — betg da „guaridas". Nus duvrain „ti", perquai che il workbook digital è in spazi persunal — betg perquai che nus ans plazzessan sur tai. Sche ti legias sco persuna spezialista: legia il „ti" sco model per in stil da lingua che crea proximitad senza accentuar ierarchia.

Ina elegant translaziun rumantscha da Recovery n'è betg s'etablida — uschè pauc sco per il term proxim Empowerment. Perquai duvrain nus Recovery dapertut sco term tecnic e cumpletain el en il proxim chapitel cun la lectura tudestga „Speranza — Pussanza — Senn" [^ameringschmolke2006].

:::easy{reading_time=1}
Pleds èn impurtants.

Tgi che vegn numnà „schizofren" è mo pli malsaun. Tgi che vegn numnà „persuna cun schizofrenia" resta en emprima lingia ina persuna.

Nus duvrain il pled Recovery. El è englais. I na dat nagin bun pled rumantsch per quai. Recovery vul dir: far ina via en ina buna vita.

En questa app discurrin nus cun tai cun „ti". Betg perquai che nus essan meglier. Mabain perquai che quest spazi è tes spazi.
:::

:::quiz{id=q-sprache}
- q: "Tge furmulaziun è person-first?"
  type: multiple-choice
  options:
    - text: "Il schizofren"
      correct: false
    - text: "Persuna cun la diagnosa schizofrenia"
      correct: true
      explanation: "La diagnosa suenter la persuna, betg avant ella."
    - text: "In schizo"
      correct: false
:::

:::flashcards{id=f-sprache}
- front: "Lingua person-first"
  back: "Diagnosa suenter la persuna, betg avant ella: 'persuna cun schizofrenia' empè da 'schizofren'."
- front: "Pertge Recovery sco term?"
  back: "I na dat betg ina translaziun rumantscha eleganta. Recovery vegn duvrà sco term tecnic stabilì dapertut."
:::

:::standard{reading_time=2}
Pleds crean realitad. Els n'èn betg innocents.

Tgi che vegn adressà sco "Schizofren", auda ina diagnosa, avant ch'el saja in uman. Tgi che vegn adressà sco "uman cun la diagnosa schizofrenia", resta l'emprim in uman — e porta la diagnosa sco ina part, betg sco l'entir.

Quest workbook utilisescha consciaintamain la lingua Person-first: la diagnosa vegn suenter l'uman, betg avant el.

Concretamain quai vul dir:

- Nus discurrin d'umans cun crisas psichicas, betg da "malsauns".
- Nus discurrin d'umans en Recovery, betg da "guarids".
- Nus discurrin d'accumpagnament da sanament (Genesungsbegleitung), betg da "lavur d'internads".

Per il pled Recovery sez na datti nagina translaziun tudestga curta — uschè pauc sco per Empowerment. Nus utilisain Recovery perquai cuntinuadamain sco term tecnic. En il proxim chapitel mettain nus al vart la lectura tudestga "Speranza — Pussanza — Senn" (Hoffnung — Macht — Sinn).

Ina particularitad: Ti vegns adressà cuntinuadamain cun "ti". Betg perquai che nus ans mettan sur tai — al cunfegn. Il workbook digital è in spazi persunal. Il "ti" creescha vicinanza, senza accentuar ierarchia. Sche ti legias sco persuna professiunala: legia il "ti" sco model per in stil da lingua che exprima egualitad.
:::

:::standard-quiz{id=q-sprache-std}
- q: "Tge formulaziun è Person-first?"
  type: multiple-choice
  options:
    - text: "Il schizofren"
      correct: false
      explanation: "Qua vegn la diagnosa l'emprim — quai n'è betg Person-first."
    - text: "Uman cun la diagnosa schizofrenia"
      correct: true
      explanation: "Exact. Diagnosa suenter l'uman — l'uman resta l'emprim visibel."
    - text: "In schizo"
      correct: false
      explanation: "Stigmatisant e reducescha la persuna a la diagnosa."

- q: "Pertge utilisescha il workbook il «ti»?"
  type: multiple-choice
  options:
    - text: "Perquai che las autur:as as sentan superiuras."
      correct: false
    - text: "Perquai che il workbook digital è in spazi persunal — vicinanza senza ierarchia."
      correct: true
      explanation: "Il «ti» creescha vicinanza, betg distanza vers giu."
:::

:::standard-flashcards{id=f-sprache-std}
- front: "Lingua Person-first"
  back: "Diagnosa suenter l'uman, betg avant el. «Uman cun schizofrenia» empè da «schizofren»."
- front: "Pertge resta «Recovery» englais?"
  back: "I na datti nagina translaziun tudestga curta. Recovery vegn utilisà sco term tecnic stampà."
:::


# Bainvegni
{#willkommen reading_time=3}

Bainvegni. I ans legra che ti es qua.

Quest workbook digital è scrit per tai — sche ti vivas gist ussa in temp grev, sche ti has retschet ina diagnosa u sche ti vivas gia dapi ditg cun ina malsogna psichica.

Forsa eras ti savens en tractament. Forsa stas ti a l'entschatta. Forsa has ti gia ina lunga via davostiers e tschertgas ina nova lingua per quai che ti vivas.

Quest workbook è scrit uschia che ti pos l'explorar en tes agen tempo. Ti na stos betg leger tut. Ti na stos far nagut en in tschert urden. Ti dastgas siglir, turnar, deponer.

:::info{type=metaphor title="In maletg per la via: Kintsugi"}
Kintsugi è ina art tradiziunala giapunaisa da reparatur. Ceramica rutta vegn cumglutinada cun aur. Las plazzas ruttas na vegnan betg zuppadas, mabain rendidas visiblas e nobilitadas. Il vaschè na vegn betg main valaivel tras la ruttira — mabain, en ils egls da blers, dapli.

Vias da sanament suondan savens ina logica sumeglianta: i na va betg per stertgar las plazzas ruttas, mabain per las integrar en in nov entir.

Recovery na vul betg dir daventar uschia sco ins era pli baud. Recovery vul dir che quai ch'è stà dastga daventar part d'in nov entir.
:::

:::quote{author="U.S. Substance Abuse and Mental Health Services Administration (SAMHSA), 2012" source="samhsa2012"}
Recovery è in viadi da sanar e da transfurmar che mussa ad ina persuna cun ina malsogna psichica la via per manar ina vita plain senn en ina cuminanza da sia chaussa — e per stentar a medem temp per realisar sia pussibilitad cumpletta.
:::

:::easy{reading_time=1}
I ans legra che ti es qua.

Quest workbook è scrit per tai — sche ti vivas temps grevs.

Ti na stos betg leger tut. Tscherna quai che ta vala bain. Turna sche ti vuls.

Ti decidas tes tempo.
:::

:::quiz{id=q-willkommen}
- q: "Per tgi è quest workbook?"
  type: multiple-choice
  options:
    - text: "Per persunas cun atgna experientscha da chargia psichica."
      correct: true
      explanation: "El è scrit per tai — egal nua che ti stas gist ussa sin tia via."
    - text: "Mo per persunas spezialistas."
      correct: false
    - text: "Mo per persunas cun ina diagnosa tschertga."
      correct: false

- q: "Stos ti leger il workbook en l'urden?"
  type: true-false
  correct: false
  explanation: "Na. Ti dastgas siglir, turnar, deponer. Ti decidas tempo ed urden."
:::

:::flashcards{id=f-willkommen}
- front: "Per tgi è quest workbook?"
  back: "Per tai — sche ti has agna experientscha cun chargia psichica."
- front: "Kintsugi"
  back: "Art giapunaisa da reparatur: plazzas ruttas cumglutinadas cun aur, betg zuppadas. Metafra per Recovery: il rut daventa part d'in nov entir."
- front: "Autodeterminaziun tar la lectura"
  back: "Ti tscherna quai che ti legias. Ti tscherna tes tempo. Ti dastgas turnar dapertut."
:::

:::standard{reading_time=2}
Bel ch'i ti es qua.

Quest workbook è scrit per tai — sche ti sez vivas in temp difficil, has retschavì ina diagnosa u vivas gia ditg cun ina malsogna psichica.

Forsa stas ti a l'entschatta. Forsa has ti gia bleras terapias dasperas. Forsa tschertgas ti gist ina nova lingua per quai che ti vivas — u simplamain insatgi che na vul betg reparar, mabain ir cun tai.

Ti na stos purtar nagut cun tai. Naginas enconuschientschas, nagin bun di, nagina istorgia finida. Legia tge che ta tutga. Lascha vi tge che gist na covegn betg. Turna sche ti vuls.

In maletg che nus utilisain gugent è Kintsugi — l'art giapunaisa da reparaziun. Ceramica rutta vegn turnada ensemen cun aur. Ils lieus rutts na vegnan betg zuppads, mabain fatgs visibels. Il vaschè na vegn betg main pretschus tras la ruttira — en ils egls da blers vegn el dapli.

Recovery suonda ina logica sumeglianta. I na sa tracta betg da retutgar tut quai ch'è stà. I sa tracta che il rutt po daventar part d'in nov entir.

In pèr indicaziuns avant che ti cumenzas:

- Ti determineschas il tempo e la successiun.
- I dat differents modus da lectura: simpel, standard, detaglià.
- Ti pos entrar e sortir dapertut.
- Sche insatge vegn memia bler: metta'l vi. Quai n'è betg dar si — quai è tgira da sai.

Nagin ta sfurza. Quest spazi ta tutga.
:::

:::standard-quiz{id=q-willkommen-std}
- q: "Tgi determinescha il tempo e la successiun?"
  type: multiple-choice
  options:
    - text: "L'app."
      correct: false
    - text: "Ti."
      correct: true
      explanation: "Ti dastgas siglir, metter vi, turnar."
    - text: "La successiun è fixa."
      correct: false

- q: "Tge munta Kintsugi sco maletg per Recovery?"
  type: multiple-choice
  options:
    - text: "Ils lieus rutts vegnan fatgs uschè invisibels sco pussaivel."
      correct: false
    - text: "Ils lieus rutts vegnan visibels — e part d'in nov entir."
      correct: true
      explanation: "Recovery na vul betg dir, retutgar tut. Quai ch'è stà dastga esser part dal nov."
:::

:::standard-flashcards{id=f-willkommen-std}
- front: "Tes tempo"
  back: "Ti determineschas tge che ti legias e cura. Siglir, metter vi, turnar — tut lubì."
- front: "Kintsugi"
  back: "Art giapunaisa da reparaziun: lieus rutts turnads ensemen cun aur. Metafora per Recovery — il rutt daventa part d'in nov entir."
- front: "Sche insatge vegn memia bler"
  back: "Metta'l vi. Quai n'è betg dar si — quai è tgira da sai."
:::


# 1. Tge che Recovery signifitga propi
{#kap-1 reading_time=5}

## Il pled e sia istorgia

Il pled englais recovery vul dir litteralmain sanament, regudada, requitanza. En la sanadad psichica è el daventà dapi ils onns 1980 in term general per ina nova vista sin il sufrir psichic [^anthony1993] [^deegan1988].

Recovery n'è qua betg en emprima lingia in term medicinal. El deriva da las experientschas da persunas che han retschet sezzas diagnosas psichiatricas e che ant refusà da sa laschar reducir a quellas [^chamberlin1978] [^deegan1988].

## La definiziun classica

La definiziun la pli savens citada deriva da William Anthony, l'antarn directur dal Center for Psychiatric Rehabilitation da la Boston University.

:::quote{author="Anthony, 1993, p. 15" source="anthony1993" lang="en"}
Recovery is described as a deeply personal, unique process of changing one's attitudes, values, feelings, goals, skills, and/or roles. It is a way of living a satisfying, hopeful, and contributing life even with limitations caused by illness.
:::

:::quote-translation{source="anthony1993" translator="atgna translaziun"}
Recovery è in process da midada profundamain persunal ed unic — da las atgnas tegnidas, valurs, sentiments, finamiras, capacitads u rollas. Igl è ina moda da viver en la quala ins po manar — er cun las restricziuns d'ina malsogna — ina vita cumplenida, plain speranza, ed apportar ina contribuziun.
:::

Questa definiziun è dapi passa trais decennis il puntg da referenza internaziunal. Ella è vegnida surpigliada tranter auter da la SAMHSA [^samhsa2012], modlada da la tradiziun dal Sainsbury Centre for Mental Health ed integrada en las directivas da l'OMS [^who2021].

## Sanament clinic e persunal

La perscrutaziun distingua dus terms [^slade2009]:

- **Sanament clinic** (clinical recovery): Ils simptoms vegnan main u svaneschan, la diagnosa perda sia impurtanza. Questa chapientscha vegn da la medischina.
- **Sanament persunal** (personal recovery): Ti vivas tia vita sco plain senn, degna da viver ed autodeterminada — independent dal fatg sche tut ils simptoms èn svanids u betg.

Recovery en il senn da quest workbook signifitga surtut il sanament persunal. El po ir per pèr cun il sanament clinic, ma na sto betg.

## Definiziuns en lingua tudestga

:::quote{author="Fundaziun Pro Mente Sana Svizra, 2024" source="promentesana"}
La pli curta descripziun da Recovery è: manar ina vita uschè buna sco pussaivel, era en confruntaziun cun ina greva chargia psichica.
:::

Amering e Schmolke discurran da la „fin da l'inguaribilitad" [^ameringschmolke2012]. Ellas sa fundan sin perscrutaziun longitudinala che mussa: er suenter malsognas grevas sco la schizofrenia è ina vita cumplenida pussaivla. Knuf chapescha Recovery sco process da debatta cun sasez e cun la malsogna — cun la finamira da manar, malgrà problems psichics, ina vita plain speranza ed activa [^knuf2026].

La directiva tudestga S3 „Terapias psicosocialas tar malsognas psichicas grevas" ha sustegnì Recovery en il mainstream da la chira en lingua tudestga ed ha nominà l'orientaziun Recovery sco princip directiv [^dgppn2019].

:::reflection{id=1 title="Tge signifitga sanament per tai?"}
- Cur che ti audas il pled sanament — tge maletg ta vegn l'emprim en il senn?
- Tgenina da las definiziuns survart ta tutga il pli? E pertge?
- Tge fiss per tai ina „buna vita" — er sch'i n'è betg tut „davent"?
:::

:::easy{reading_time=2}
Recovery vul dir: sanament.

Ma Recovery na vul betg dir: tut ils simptoms ston esser davent.

Recovery vul dir: ti vivas bain. Era sche ti vivas anc grevs.

I dat duas sorts da sanament:

- Ils simptoms vegnan main. Quai è il sanament clinic.
- Ti vivas tia vita sco buna e plain senn. Quai è il sanament persunal.

Tuts dus èn pussaivels. Tuts dus dastgan esser a medem temp.

Ina fundaziun svizra di: Recovery vul dir manar ina vita uschè buna sco pussaivel. Era sch'i è quaiche grev.

:::reflection{id=1-easy title="Damonda tai sezza"}
- Tge vul dir per tai ina buna vita?
- Tge stos ti avair per quai? Tge betg?
:::
:::

:::quiz{id=q-1}
- q: "Tge vul dir Recovery?"
  type: multiple-choice
  options:
    - text: "Tut ils simptoms ston svanir."
      correct: false
      explanation: "Na. Il sanament persunal po er funcziunar cun simptoms persistents."
    - text: "Manar ina vita plain senn ed autodeterminada — er sch'ils simptoms restan."
      correct: true
      explanation: "Gist uschia. Quai è il cor dal sanament persunal (Anthony 1993)."
    - text: "Ina tscherta metoda da terapia."
      correct: false

- q: "Tge duas sorts da sanament distingua la perscrutaziun?"
  type: multiple-choice
  options:
    - text: "Sanament svelt e plaun."
      correct: false
    - text: "Sanament clinic e persunal."
      correct: true
      explanation: "Clinic = simptoms davent. Persunal = manar ina vita plain senn."
    - text: "Sanament terapeutic e medicamentus."
      correct: false
:::

:::flashcards{id=f-1}
- front: "Sanament clinic"
  back: "Ils simptoms vegnan main u svaneschan. La diagnosa perda sia impurtanza. La chapientscha medicinala dal guarir."
- front: "Sanament persunal"
  back: "Ti vivas tia vita sco plain senn, degna da viver ed autodeterminada — independent dal fatg sche tut ils simptoms èn svanids."
- front: "Anthony 1993 — la definiziun centrala"
  back: "Recovery è in process da midada profundamain persunal ed unic da las tegnidas, valurs, sentiments, finamiras e rollas — ina via per manar ina vita cumplenida, er cun restricziuns."
- front: "Pro Mente Sana — la pli curta definiziun"
  back: "Manar ina vita uschè buna sco pussaivel — era en confruntaziun cun ina greva chargia psichica."
:::

:::standard{reading_time=2}
Recovery è in pled englais. Litteralmain munta el sanament (Genesung), recuperaziun, repos. En la sanadad psichica è el dapi ils onns 1980 il term collectiv per ina nova vista sin la suffrientscha psichica — ed ina che n'è betg vegnida inventada da medis, mabain dals pertutgads sezs.

La definiziun classica deriva da William Anthony, in retschertgader da Boston: Recovery è in process da midada profundamain persunal da las atgnas posiziuns, valurs, mètas e rolas — ina via da menar ina vita cuntenta e plain speranza, er cun las limitaziuns d'ina malsogna.

La retschertga distingua dus moments da lectura:

- **Sanament clinic:** Ils simptoms vegnan main u spariran. La diagnosa perda sia muntada. Quai è la vista medicinala.
- **Sanament persunal:** Ti vivas tia vita sco plain senn, degna da vegnir vivida ed autodeterminada — independentamain sche i ha anc simptoms u na.

Recovery en il senn da quest workbook munta surtut il sanament persunal. El po ir ensemen cun il sanament clinic, ma na stoppa betg. Omadus dastgan esser a medem temp. Ed omadus dastgan avair lur agen tempo.

La fundaziun svizra Pro Mente Sana al resumescha en ina frasa: Recovery munta menar ina vita pussaivlamain buna — er en confruntaziun cun ina impediment psichic grav.

Impurtant è: Ti es dapli che tia diagnosa. Ti es uman l'emprim — tut auter vegn suenter. E ti na stos betg ir questa via sulet/a. Auters pon t'accumpagnar.
:::

:::standard-quiz{id=q-1-std}
- q: "Tge munta Recovery surtut?"
  type: multiple-choice
  options:
    - text: "Esser guarì. Nagins simptoms pli."
      correct: false
      explanation: "Quai fiss sanament clinic. Recovery munta dapli — surtut sanament persunal."
    - text: "Ina vita cuntenta — er cun simptoms."
      correct: true
      explanation: "Gist quai è la definiziun classica d'Anthony (1993)."
    - text: "Ina tscherta metoda da terapia."
      correct: false

- q: "Tge duas spezias da sanament distingua la retschertga?"
  type: multiple-choice
  options:
    - text: "Sanament svelt e plaun."
      correct: false
    - text: "Sanament clinic e persunal."
      correct: true
      explanation: "Clinic = simptoms davent. Persunal = menar ina vita plain senn."

- q: "Tgi ha sviluppà Recovery sco concept?"
  type: multiple-choice
  options:
    - text: "Surtut medis e firmas farmaceuticas."
      correct: false
    - text: "Umans cun atgna experientscha psichiatrica — ensemen cun la retschertga."
      correct: true
      explanation: "Il moviment vegn da las experientschas dals pertutgads."
:::

:::standard-flashcards{id=f-1-std}
- front: "Recovery (definiziun centrala)"
  back: "Menar ina vita cuntenta e plain speranza — er cun las limitaziuns d'ina malsogna (Anthony 1993)."
- front: "Sanament clinic"
  back: "Ils simptoms vegnan main u spariran. La diagnosa perda sia muntada."
- front: "Sanament persunal"
  back: "Ti vivas tia vita sco plain senn, degna da vegnir vivida ed autodeterminada — independentamain sche simptoms restan."
- front: "Pro Mente Sana — la definiziun la pli curta"
  back: "Menar ina vita pussaivlamain buna, er en confruntaziun cun ina impediment grav."
:::


# 2. „Speranza — Pussanza — Senn"
{#kap-2 reading_time=3}

L'onn 2006 han Michaela Amering e Margit Schmolke publitgà en la revista svizra Managed Care in artitgel cun il titel „Hoffnung – Macht – Sinn. Recovery-Konzepte in der Psychiatrie" („Speranza — Pussanza — Senn. Concepts da Recovery en la psichiatria") [^ameringschmolke2006]. Cun quai han ellas furmà en moda decisiva la lectura tudestg-linguala da Recovery.

La triada „Speranza — Pussanza — Senn" resumescha da tge ch'i va tar Recovery ord la perspectiva D-A-CH — sco ina translaziun simpla ed orientada vid il mintgadi dals concepts centrals englishs.

| Tudestg | Englais | Senn en il context D-A-CH |
|---------|----------|-----------------------------|
| **Speranza** | Hope | (Anew) chattar in sentiment da sai er independent da la malsogna — la speranza sco resursa terapeutica. |
| **Pussanza** | Empowerment | Autoefficacia, libertad da tscherna, atgna responsabladad — „pussanza" en il senn da la reconquista d'in spazi d'agir [^knufseibert2004]. |
| **Senn** | Meaning | Valurs, finamiras, contribuziun, appartegnientscha — definir la vita sur la rolla da pazient:a or. |

La speranza en quest senn è strenschamain colliada cun il sentiment da sai: cun in autovalur che ha tegnida independent da l'experientscha da malsogna, e cun in'identitad che cumpiglia dapli che la rolla da pazient:a [^ameringschmolke2006].

Quests trais concepts correspundan a la definiziun da Recovery d'Anthony [^anthony1993]. Ed els correspundan centralmain al model CHIME [^leamy2011]: Speranza = Hope, Pussanza = Empowerment, Senn = Meaning. Colliaziun (Connectedness) ed identitad (Identity) furman il rom da relaziun e da sai enturn.

:::easy{reading_time=1}
Duas perscrutadras han chattà trais pleds simpels per Recovery:

- **Speranza** — Ti crais che pudess gnir meglier.
- **Pussanza** — Ti has il dretg da decider. Ti n'es betg mo pazient:a.
- **Senn** — Tia vita ha valur. Ti tutgas tar.

Quests trais pleds èn la lectura tudestg-linguala dal model englais CHIME. La colliaziun cun auters ed in'atgna identitad fan er part da quai.
:::

:::quiz{id=q-2}
- q: "Tge munta 'Pussanza' en questa lectura?"
  type: multiple-choice
  options:
    - text: "Exequir pussanza sur autras persunas."
      correct: false
    - text: "Autoefficacia – il dretg da decider mez sur l'atgna vita."
      correct: true
      explanation: "'Pussanza' munta qua Empowerment en il senn positiv – betg pussanza sur auters."
    - text: "Cumpetenzas medicinalas."
      correct: false

- q: "Tgi ha introducì la triada 'Speranza — Pussanza — Senn'?"
  type: multiple-choice
  options:
    - text: "Patricia Deegan"
      correct: false
    - text: "Amering & Schmolke (2006)"
      correct: true
      explanation: "En la revista svizra Managed Care, 2006."
    - text: "La OMS"
      correct: false
:::

:::flashcards{id=f-2}
- front: "Speranza — Pussanza — Senn"
  back: "La lectura tudestg-linguala da Recovery, introducida da Amering & Schmolke 2006. Correspunda a Hope, Empowerment, Meaning en il model CHIME."
- front: "Pussanza (en il senn da Recovery)"
  back: "Autoefficacia – il dretg da decider mez sur l'atgna vita. Betg pussanza sur auters."
:::

:::standard{reading_time=2}
Recovery è in pled englais ch'è grev da translatar en tudestg. Las psichiatras austriacas Michaela Amering e Margit Schmolke han proponì 2006 en la revista svizra spezialisada Managed Care trais terms tudestgs che tutgan il nicgel — ina triada ch'è ozendi currenta en il spazi DACH:

- **Hoffnung (Speranza)** — la cardientscha che tia vita po esser dapli che la malsogna. In sentiment da sai che ha tegnida er independentamain dals simptoms.
- **Macht (Pussanza)** — autocapaciziun (Selbstbefähigung). Betg pussanza sur auters, mabain pussanza sur tia atgna vita. Dastgar decider cun. Libertad da tscherna. Atgna responsabladad.
- **Sinn (Senn)** — valurs, mètas, appartegnientscha. Dastgar definir la vita ultra da la rolla da pazient:a.

Quests trais pleds covegnan a la definiziun classica da Recovery. Els correspundan er a parts centralas dal model da Recovery internaziunalmain il pli impurtant, il model CHIME:

- Hoffnung = Hope
- Macht = Empowerment
- Sinn = Meaning

Colliaziun (Connectedness) ed Identitad (Identity) furman la fanestra che circumda — relaziuns ed atgna maletg sco terren, sin il qual speranza, pussanza e senn pon crescher.

Ti na stos betg sentir tut trais a medem temp. Mintgatant è mo speranza qua, mintgatant mo senn. Mintgatant cumenza quai cun pussanza — cun ina sula decisiun che ti prendas sez. Quai basta. Recovery n'è nagina glista per crusar via.
:::

:::standard-quiz{id=q-2-std}
- q: "Tge munta 'Macht' (pussanza) en questa lectura?"
  type: multiple-choice
  options:
    - text: "Exercitar pussanza sur auters."
      correct: false
    - text: "Autocapaciziun — il dretg da decider cun davart la atgna vita."
      correct: true
      explanation: "'Macht' munta qua Empowerment en il senn positiv."
    - text: "Cumpetenzas medicinalas."
      correct: false

- q: "Tgi ha introducì la triada «Hoffnung — Macht — Sinn»?"
  type: multiple-choice
  options:
    - text: "Patricia Deegan"
      correct: false
    - text: "Amering e Schmolke (2006)"
      correct: true
      explanation: "En la revista svizra spezialisada Managed Care."
    - text: "La WHO"
      correct: false
:::

:::standard-flashcards{id=f-2-std}
- front: "Hoffnung — Macht — Sinn (Speranza — Pussanza — Senn)"
  back: "La lectura tudestga da Recovery (Amering e Schmolke 2006). Corrispunda a Hope, Empowerment, Meaning en il model CHIME."
- front: "Macht (pussanza) en il senn da Recovery"
  back: "Autocapaciziun — il dretg da decider cun davart la atgna vita. Betg pussanza sur auters."
- front: "Hoffnung (speranza) en il senn da Recovery"
  back: "La cardientscha che tia vita po esser dapli che la malsogna. In sentiment da sai che ha tegnida er senza libertad dals simptoms."
:::


# 3. Tge che Recovery NA è — sis mits
{#kap-3 reading_time=5}

Recovery vegn savens chapì faussamain en il mintgadi.

## Mit 1: Recovery vul dir che tut ils simptoms ston esser ius

Fauss. Era persunas cun simptoms persistents pon viver Recovery [^anthony1993] [^deegan1996] [^andresen2003]. Il sanament persunal po coexistir cun simptoms.

## Mit 2: Recovery vul dir simplamain pensar positiv

Fauss. Recovery n'è betg ina clamada ad optimissem sin cumand. La speranza en la perscrutaziun da Recovery munta ina persvasiun realistica, savens uschia, che midada è pussaivla [^slade2013] [^schrank2012].

## Mit 3: Recovery vul dir s'arrangiar senza medicaments u terapia

Fauss. Recovery n'è betg in moviment anti-medicina. I munta che TI deciders cun tge ch'agida [^deegandrake2006] [^slade2017sdm]. Amering e Schmolke pointan quai uschia: L'acceptaziun da medicaments u d'ina tscherta diagnosa na duess betg esser l'unica premissa per sustegn psicosocial [^ameringschmolke2006].

## Mit 4: Recovery è in via direct e previsibel

Fauss. Andresen, Oades e Caputi [^andresen2003] e blers auters mussan: Recovery decurra bunamain mai en moda lineara. Pass enavos fan part dal via e na èn betg la fin, mabain part da la via.

## Mit 5: Tgi che na vegn betg „san", è sez culpa

Fauss. Recovery n'è ni in concept da prestaziun ni in giudicament moralic. Il via dependa da blers facturs – da relaziuns, da chira, da cundiziuns socio-economicas, da traumas, da casualitads [^leboutillier2011].

## Mit 6: Ina malsogna psichica è „nunguariv" – „cronica"

Fauss e nuschaivel. Studis da lung temp sco il studi dal Vermont [^harding1987] e reviews pli novas [^lally2017] mussan: sanament – era da diagnosas grevas – è regularmain pussaivel.

Amering e Schmolke avertan expressivamain davant talas fixaziuns [^ameringschmolke2012]: frasas sco „Vus essas memia malsaun:a per ina terapia da discurs" u il cuntrari „Tut vegn puspè sco pli baud" èn ord lur vista betg mo faussas, mabain – litteralmain – „extremamain privlusas". Talas prognosas raubeschan a las persunas lur agen spazi d'agir avant ch'ellas hajan pudì duvrar quel.

Heinz Katschnig ha chattà ina maletg fitg precis per quai: la mancanza da speranza – communitgada da nà ord ed savens prendida vi enturn – saja la furma la pli perfida da chadainas en la psichiatria. Ella è uschia efficazia, perquai ch'ella n'è betg visibla dasper [^ameringschmolke2012].

:::reflection{id=2 title="Tge mit t'ha tutgà?"}
- Tge dad ils sis mits è stà ditg ina realitad per tai sez?
- Tgi t'ha intermediì quest mit – la famiglia, la scola, ils medias, il sistem psichiatric?
- Tge fiss auter, sche ti laschass ir quest mit oz?
:::

:::easy{reading_time=2}
I dat bleras ideas faussas davart Recovery. Sis da quellas vegnan savens:

1. **Fauss:** Tut ils simptoms ston esser ius. → Recovery va era cun simptoms.
2. **Fauss:** Ti stos pensar positiv. → Nagina obligaziun da buna luna.
3. **Fauss:** Nagins medicaments permess. → Ti deciders cun tge ch'agida.
4. **Fauss:** Il via è direct. → Pass enavos fan part.
5. **Fauss:** Tgi che na vegn betg san, è culpa. → Nagin n'è culpa.
6. **Fauss:** Tscherts èn „nunguarivs". → Sanament è era pussaivel suenter malsognas grevas.
:::

:::quiz{id=q-3}
- q: "Tge fitg è ditg?"
  type: multiple-choice
  options:
    - text: "Recovery munta che tut ils simptoms ston sparir."
      correct: false
    - text: "Recovery po era funcziunar cun simptoms persistents."
      correct: true
      explanation: "L'enunziaziun centrala d'Anthony 1993 e da bleras studis suandants."
    - text: "Recovery è mo pussaivel tar malsognas leughtas."
      correct: false

- q: "Vair u fauss: Recovery munta da betg prender medicaments."
  type: true-false
  correct: false
  explanation: "Recovery n'è betg in moviment anti-medicina. Ti deciders ensemen cun persunas spezialistas tge ch'agida."

- q: "Tge dischan studis da lung temp sco Harding (1987) e Lally (2017) davart diagnosas grevas?"
  type: multiple-choice
  options:
    - text: "Ellas èn nunguarivas."
      correct: false
    - text: "Sanament è era suenter decurs grevs regularmain pussaivel."
      correct: true
      explanation: "Quai è la basa per la 'fin da la nunguaribladad' d'Amering."
:::

:::flashcards{id=f-3}
- front: "Il pli grond mit da Recovery"
  back: "Recovery na vul betg dir: tut ils simptoms ius. Recovery vul dir: ina buna vita – era cun difficultads."
- front: "Linearitad – fauss"
  back: "Recovery n'è betg linear. Pass enavos fan part e n'èn betg in nunsuccess."
- front: "'Nunguariv' – fauss"
  back: "Studis da lung temp (Harding 1987, Lally 2017) mussan: era suenter malsognas grevas è il sanament regularmain pussaivel."
- front: "'Extremamain privlus'"
  back: "Amering & Schmolke (2012) davart prognosas sco 'Vus essas memia malsaun:a per terapia da discurs' – talas fixaziuns raubeschan il spazi d'agir."
:::

:::standard{reading_time=2}
Davart Recovery circuleschan blers maletgs fauss. Sis da quels s'inscuntran en il mintgadi particularmain savens — e tut sis èn fauss.

- **„Recovery vul dir che tut ils simptoms ston svanir."** Na vairs. Era persunas cun simptoms persistents pon manar ina vita cuntenta. Il sanament persunal (persönliche Genesung) po coexister cun simptoms.
- **„Recovery vul dir, pensar adina positiv."** Fauss. Recovery n'è betg ina clamada per optimissem sin pression d'in buttun. La speranza en la perscrutaziun da Recovery è ina persvasiun realistica, savens ustinada — betg in bun umur sfurzà.
- **„Recovery vul dir, sa cumpensar senza medicaments."** Fauss. Recovery n'è betg in moviment anti-medicina. El vul dir che TI decidas cun, tge che gida — e tge betg.
- **„Recovery è ina via dretga e prevesaivla."** Fauss. Recovery na va quasi mai en lingia dretga. Pass enavos fan part da quai. Els na èn betg in fiasco, mabain part da la via.
- **„Tgi che na vegn betg san, ha sez la culpa."** Fauss. Recovery n'è nagin concept da prestaziun e nagin giuditgi moralic. La via dependa da blers facturs: relaziuns, provediment, cundiziuns socioeconomicas, trauma, cas.
- **„Malsognas psichicas grevas n'èn betg curablas."** Fauss — e privlus. Studis a lunga durada mussan dapi decennis: il sanament è regulà pussaivel era suenter diagnosas grevas.

Amering e Schmolke numnan frasas sco „Vus essas memia malsang per ina terapia da discurs" u „I vegn anc sco pli baud" schizunt „brand-privlus". Talas prediziuns ta privan il spazi da moviment, avant che ti possias el nizzegiar.

La disperaziun che vegn communitgada da defora ed assumida ad intern — quai èn las chadainas las pli perfidas en la psichiatria. Gist perquai ch'ellas èn invisiblas.
:::

:::standard-quiz{id=q-3-std}
- q: "Tge declaraziun è gista?"
  type: multiple-choice
  options:
    - text: "Recovery vul dir che tut ils simptoms ston svanir."
      correct: false
    - text: "Recovery po era funcziunar cun simptoms persistents."
      correct: true
      explanation: "Quai è la declaraziun centrala dapi Anthony 1993."
    - text: "Recovery è mo pussaivel tar malsognas leivas."
      correct: false

- q: "Tgi ha la culpa, sche Recovery croda grev?"
  type: multiple-choice
  options:
    - text: "Ti sez — ti na ta dast betg avunda fadia."
      correct: false
    - text: "Nagin. Recovery n'è nagina concurrenza e nagin giuditgi moralic."
      correct: true
      explanation: "La via dependa da blers facturs — betg da tia forza da voluntad sulet."

- q: "Tge dian ils studis a lunga durada davart diagnosas „incurablas"?"
  type: multiple-choice
  options:
    - text: "Incurabel resta incurabel."
      correct: false
    - text: "Il sanament è regulà pussaivel era suenter decurses gravs."
      correct: true
      explanation: "Studi da Vermont (Harding 1987), meta-analisas actualas (Lally 2017)."
:::

:::standard-flashcards{id=f-3-std}
- front: "Il pli grond mit da Recovery"
  back: "„Tut ils simptoms ston svanir." — Na vairs. Recovery vul dir, manar ina buna vita, era cun difficultads."
- front: "Linearitad — fauss"
  back: "Recovery na va quasi mai en lingia dretga. Pass enavos fan part da quai e n'èn nagin fiasco."
- front: "„Incurabel" — fauss"
  back: "Studis a lunga durada mussan: era suenter malsognas grevas è il sanament regulà pussaivel."
- front: "„Brand-privlus""
  back: "Amering e Schmolke davart prognosas sco „Vus essas memia malsang per terapia" — talas fixaziuns privan il spazi da moviment."
:::


# 4. Istorgia dal moviment Recovery
{#kap-4 reading_time=6}

## Las vuschs da las persunas pertutgadas – ils onns 1970 e 1980

Il moviment Recovery n'è betg naschì en in institut da perscrutaziun. El ha cumenzà en ils onns 1970 en l'America dal Nord, en las iniziativas da pazientas e pazients psichiatrics anteriurs – il numnà Ex-Patient- u Survivor-Movement [^chamberlin1978].

Ina da las vuschs centralas è Patricia Deegan. Cun 17 onns ha ella obtegnì la diagnosa schizofrenia ed udì d'in medi ch'ella na manass mai ina vita normala. Oz è ella psicologa cun doctorat, perscrutadra e piuniera da Recovery renconuschida internaziunalmain [^deegan1988] [^deegan1996].

Patricia Deegan ha formulà dus pensiers centrals che marcheschan dapi lura il moviment Recovery internaziunal [^deegan1996]:

- Recovery na saja betg in puntg final ni ina pura stabilisaziun, mabain ina transformaziun – in via, sin il qual ins renconuscha sias atgnas limitas e scuvra parallelamain novas pussaivladads.
- Persunas cun malsognas psichicas na sajan betg recepientas passivas d'agid, mabain subjects capabels d'agir che pon midar lur situaziun cun lur agen far.

## Dorothea Buck, Trialog ed audidurs da vuschs

En il territori tudestg-lingual ha Dorothea Buck spianà in via cumparegliabel. Sterilisada per forza sut il regim NS e tractada bleras giadas en la psichiatria, ha ella cumbattì duront tut sia vita per ina psichiatria umana [^buck1990].

L'onn 1989 è naschì a Hamburg sin iniziativa da Thomas Bock l'emprim seminari trialogic da psicosa – in format, en il qual persunas pertutgadas, confamigliars e persunas spezialistas discurran sin in nivel egual [^bockpriebe2005]. L'onn 1992 è vegnida fundada la federaziun „Bundesverband Psychiatrie-Erfahrener" (BPE). Il rait internaziunal Hearing Voices è activ dapi ils onns 1990 en la Germania, en l'Austria ed en la Svizra [^hvn].

## La scientificaziun – ils onns 1990 e 2000

William Anthony ha furnì cun in artitgel clav da l'onn 1993 la definiziun scientifica [^anthony1993]. Andresen, Oades e Caputi han sviluppà en l'Australia il model da tschintg fasas dal sanament psicologic [^andresen2003].

## Dal concept al sistem – a partir da 2007

Il 2007 ha cumenzà en la Gronda Britannia il program ImROC (Implementing Recovery through Organisational Change). El ha dapi lura accumpagnà tschientaners da servetschs da chira en la transformaziun envers ina pratica orientada vid Recovery [^imroc] [^perkins2012].

En ils USA è Recovery daventà il 2006 la directiva uffiziala da l'autoritad federala da sanadad SAMHSA. La Convenziun da l'ONU per ils dretgs da las persunas cun impediment ha ancrà ina concepziun dals dretgs umans orientada vid l'autodeterminaziun [^uncrpd2006]. La OMS ha publitgà il 2019 l'iniziativa QualityRights [^who2019] ed il 2021 la directiva „Guidance on Community Mental Health Services" [^who2021].

## Il territori tudestg-lingual

En l'Austria han Amering e Schmolke marcà il 2006 cun l'artitgel „Speranza — Pussanza — Senn" [^ameringschmolke2006] ed il 2012 cun il cudesch „Recovery. Das Ende der Unheilbarkeit" („Recovery. La fin da la nunguaribladad") [^ameringschmolke2012] in puntg da svieuta. En la Germania ha Andreas Knuf gia publitgà il 2004 ensemen cun Ulrich Seibert „Selbstbefähigung fördern" („Promover l'autoefficacia") [^knufseibert2004]; ses „Recovery und Empowerment" exista oz en la 2avla ediziun [^knuf2026].

EX-IN (Experienced Involvement) è vegnì sviluppà a partir da 2005 a Bremen – inspirà tras Dorothea Buck e tras in project Leonardo da Vinci promovì da l'UE [^utschakowski2009]. Dapi 2011 vegn EX-IN coordinà tras l'uniun EX-IN Deutschland e.V. [^exin_de]. In RCT tudestg davart Peer-Support ha cumprovà l'efficacia [^mahlke2017].

En la Svizra porta la fundaziun Pro Mente Sana il concept da Recovery en la chira [^promentesana]. Recovery Colleges existan oz tranter auter a Berna, en la Svizra orientala, a Genevra, a Son Gagl ed a Turitg [^rcbern]. L'orientaziun vid Recovery en la psichiatria svizra è vegnida ancrada scientificamain tranter auter tras Rössler [^roessler2004].

:::easy{reading_time=2}
Recovery n'è betg vegnì inventà en l'ospital. Recovery è vegnì inventà da las persunas pertutgadas.

En l'America han pazientas e pazients cumenzà en ils onns 1970 a scriver cudeschs. Els han ditg: Nus essan dapli che nossa malsogna.

Ina vusch enconuschenta è Patricia Deegan. Ella ha obtegnì cun 17 onns la diagnosa schizofrenia. Oz è ella doctura ed agida ad auters.

En la Germania era Dorothea Buck impurtanta. Ella ha cumbattì per ina meglra psichiatria.

Oz è Recovery renconuschì en tut il mund – era da la OMS.
:::

:::quiz{id=q-4}
- q: "Tgi ha furmà il moviment Recovery al cumenzament?"
  type: multiple-choice
  options:
    - text: "L'industria farmazeutica."
      correct: false
    - text: "Persunas cun atgna experientscha en la psichiatria."
      correct: true
      explanation: "Il moviment è naschì en ils USA en ils onns 1970 ord il Survivor-Movement."
    - text: "Las administraziuns d'ospital."
      correct: false

- q: "Tgi è Patricia Deegan?"
  type: multiple-choice
  options:
    - text: "Ina medica senza atgna experientscha."
      correct: false
    - text: "Ina piuniera da Recovery cun atgna diagnosa da schizofrenia."
      correct: true
      explanation: "Diagnostitgada cun 17 onns. Oz psicologa cun doctorat e vusch renconuschida internaziunalmain."
    - text: "Ina perscrutadra svizra da chira."
      correct: false
:::

:::flashcards{id=f-4}
- front: "Patricia Deegan"
  back: "Cun 17 onns diagnosa schizofrenia, oz psicologa cun doctorat. Vusch marcanta dal moviment Recovery internaziunal."
- front: "Dorothea Buck"
  back: "Piuniera tudestga, sterilisada per forza sut il regim NS. Ha cumbattì duront tut sia vita per ina psichiatria umana. Ha inspirà EX-IN."
- front: "Survivor-Movement"
  back: "Moviment da pazientas e pazients psichiatrics anteriurs en ils USA dals onns 1970. Ragisch dal moviment Recovery."
- front: "ImROC"
  back: "Implementing Recovery through Organisational Change. Program britannic dapi 2007 ch'accumpogna ils servetschs da chira en la transformaziun envers ina pratica orientada vid Recovery."
:::

:::standard{reading_time=2}
Recovery n'è betg naschì en l'aula da curs ed era betg en la stanza da tractament. Recovery è naschì sin via — en las iniziativas da pazientas e pazients anteriurs che sa refusavan da sa laschar reducir sin lur diagnosa.

Il moviment è cumenzà ils onns 1970 en l'America dal Nord, en il numnà Survivor-Movement. Ina da las vuschs las pli impurtantas è Patricia Deegan. Cun 17 onns ha ella retschavì la diagnosa schizofrenia. In medi al ha ditg ch'ella na vegnia mai a manar ina vita normala. Oz è ella psicologa cun doctorat ed ina da las piunieras Recovery las pli influentas dal mund.

En il territori tudestg-lingual era Dorothea Buck ina vusch confrunta. Sterilisada cun forza sut il regim NS e plirs giadas tractada en la psichiatria, ha ella cumbattì duront tut sia vita per ina psichiatria umana. Il 1989 è naschì a Hamburg, sin iniziativa da Thomas Bock, l'emprim seminari trialogic sur da psicosa — in format en il qual persunas pertutgadas, confamigliars e persunas spezialistas discurran sin l'egliada egala.

Etapas impurtantas dapi lura:

- **1993** — William Anthony furnescha la definiziun scientifica da Recovery.
- **2003** — Perscrutaders australians descrivan tschintg fasas dal sanament.
- **2007** — En Gronda-Britannia cumenza il program ImROC, che reorientescha ils servetschs da chira vers Recovery.
- **2011** — Il model CHIME vegn publitgà e daventa il standard internaziunal.
- **2021** — L'OMS publitgescha sia directiva per ina chira psichica basada sin ils dretgs umans.

En Svizra porta la Fundaziun Pro Mente Sana il concept Recovery en la chira. Recovery Colleges existan oz a Berna, en la Svizra orientala, a Genevra, a Son Gagl ed a Turitg. En Germania ha EX-IN — Experienced Involvement — stabilì l'accumpagnament da sanament sco professiun.

Recovery n'è plitost mai pli ina idea da defora. I è practica viva da milli persunas.
:::

:::standard-quiz{id=q-4-std}
- q: "Tgi ha furmà il moviment Recovery a l'entschatta?"
  type: multiple-choice
  options:
    - text: "L'industria farmaceutica."
      correct: false
    - text: "Persunas cun atgna experientscha en la psichiatria."
      correct: true
      explanation: "Il moviment è naschì ils onns 1970 ord il Survivor-Movement."
    - text: "Las administraziuns d'ospital."
      correct: false

- q: "Tgi è Patricia Deegan?"
  type: multiple-choice
  options:
    - text: "Ina medica senza atgna experientscha."
      correct: false
    - text: "Ina piuniera Recovery cun atgna diagnosa da schizofrenia, oz psicologa cun doctorat."
      correct: true
      explanation: "Diagnosticada cun 17 onns, oz vusch internaziunala dal moviment Recovery."

- q: "Tge è EX-IN?"
  type: multiple-choice
  options:
    - text: "Ina gruppa da medicaments."
      correct: false
    - text: "Experienced Involvement — accumpagnament da sanament sco professiun renconuschida."
      correct: true
      explanation: "Sviluppà a partir dal 2005 a Brema, inspirà da Dorothea Buck."
:::

:::standard-flashcards{id=f-4-std}
- front: "Nua è naschì Recovery?"
  back: "Betg en l'aula. En las iniziativas da pazientas e pazients psichiatrics anteriurs — il Survivor-Movement dals onns 1970 en l'America dal Nord."
- front: "Patricia Deegan"
  back: "Cun 17 onns diagnosa schizofrenia, oz psicologa cun doctorat. Ina da las vuschs las pli influentas dal moviment Recovery."
- front: "Trialog"
  back: "Format en il qual persunas pertutgadas, confamigliars e persunas spezialistas discurran sin l'egliada egala. Naschì il 1989 a Hamburg (Thomas Bock)."
- front: "Recovery Colleges en Svizra"
  back: "Berna, Svizra orientala, Genevra, Son Gagl, Turitg. Lieus d'emprender per Recovery — averts a tuts."
:::



# 5. CHIME e CHIME-D
{#kap-5 reading_time=6}

L'onn 2011 ha ina gruppa da perscrutaziun enturn Mary Leamy e Mike Slade al King's College London evaluà sistematicamain 97 artitgels scientifics e 87 ulteriurs rapports davart decurs da sanament [^leamy2011]. Ellas e els vulevan savair: Tge descrivan las persunas adina puspè, cur ch'ellas raquintan lur via tras ina malsogna psichica?

Tschintg process èn vegnids ord, dals quals las literas inizialas englishas furman il pled CHIME – il pled englais per il sun da las champanas.

:::table{name="CHIME"}
| Litera | Process | Tge ch'ella munta |
|-----------|---------|-----------------|
| **C** | Connectedness · Colliaziun | Relaziuns, contacts da pers, famiglia, appartegnientscha, cuminanza |
| **H** | Hope and Optimism · Speranza | Cretta en la midada, motivaziun, confidenza en il process, models |
| **I** | Identity · Identitad | Tgi sun jau or da la diagnosa? Maletg da sai positiv, autovalur |
| **M** | Meaning and Purpose · Senn | Senn da vita, valurs, rollas, finamiras, eventualmain spiritualitad |
| **E** | Empowerment · Autoefficacia | Surprender responsabladad, decider, duvrar las atgnas fermezzas |
:::

CHIME è oz il model da Recovery il pli influent en tut il mund. Bird ed auters han confermà en in studi da validaziun l'applitgabladad dal frame [^bird2014]. El è la basa dal studi britannic REFOCUS, in trial cluster-randomisà [^slade2015refocus].

CHIME n'è ni in model en gradins ni ina glista da controlla. El descriva tschintg temas che sa cuvran in cun l'auter. Mintgatant è l'in en il prim plaun, mintgatant l'auter. En il territori tudestg-lingual sa lascha CHIME bain colliar cun la lectura „Speranza — Pussanza — Senn" [^ameringschmolke2006].

## CHIME-D – la sisavla dimensiun: difficultads

In svilup impurtant dal model è CHIME-D. Stuart, Tansey e Quayle han constatà en ina sintesa sistematica best-fit da litteratura qualitativa davart Recovery, ch'en il frame original da CHIME mancava ina dimensiun ch'i sa preschenta regularmain en ils rapports d'experientscha: la renconuschientscha expressiva da difficultads (Difficulties) – trauma, perdita, stigmatisaziun e consequenzas da malsogna [^stuart2017].

Els han perquai cumplettà il model cun la litera D:

- **C** – Connectedness · Colliaziun
- **H** – Hope · Speranza
- **I** – Identity · Identitad
- **M** – Meaning · Senn
- **E** – Empowerment · Autoefficacia
- **D** – Difficulties · Difficultads: renconuscher expressivamain trauma, perdita, stigma e consequenzas da malsogna

Las analisas mussan che en media radund 54 % dal cuntegn da las raquintadas da Recovery van da viavi sin difficultads vivì [^stuart2017]. CHIME-D admonescha perquai: L'orientaziun da Recovery na dastga betg sbittar en in optimissem toxic. Ella sto laschar plaz per il dalur, per il led, per quai ch'è propi stà ed è – e parallelamain mantegnair l'egliada vid las resursas e vid la midada.

La perscrutaziun actuala valideschescha CHIME-D sco rom robust per ina chira orientada vid Recovery [^vanweeghel2024] [^hancock2025].

:::info{type=note title="Pertge che CHIME-D è impurtant per quest workbook"}
Concepts da Recovery vegnan tar e tar criticads, perquai ch'els pon sminuir las suffrientschas u crear in „dovair da speranza".

CHIME-D prenda questa critica seriusamain: Il sanament na dastga betg dir che il grev na haja betg pli in plaz.

En il workbook digital munta quai: plaz per il dalur E per la speranza. Per las perditas E per las finamiras. Per quai ch'è stà E per quai che dastga daventar.
:::

:::reflection{id=3 title="Nua stas ti en il CHIME?"}
- Tge litera (C, H, I, M, E) ta tutga il pli fitg en quest mument?
- Tge è ozendi il pli grev per tai?
- Sche ti pensas a las ultimas duas emnas: Nua ha gia dà ina pitschna glisch – ed a tge litera l'attribuiressas ti?
:::

:::easy{reading_time=2}
Perscrutaders han chattà il 2011 tschintg temas impurtants tar Recovery. Las literas inizialas englishas furman il pled CHIME (englais per il sun da las champanas):

- **C** – Connectedness · Colliaziun
- **H** – Hope · Speranza
- **I** – Identity · Identitad
- **M** – Meaning · Senn
- **E** – Empowerment · Autoefficacia

Pli tard è anc ina litera s'agiuntada:

- **D** – Difficulties · Difficultads

La D è impurtanta. Recovery na duai betg sminuir il grev. Il dalur ed il led dastgan avair plaz.
:::

:::quiz{id=q-5}
- q: "Per tge stat il 'D' en CHIME-D?"
  type: multiple-choice
  options:
    - text: "Diagnosa"
      correct: false
    - text: "Difficulties – difficultads (trauma, perdita, stigma)"
      correct: true
      explanation: "Stuart, Tansey & Quayle (2017) han mussà che questa dimensiun mancava en il CHIME original."
    - text: "Depressiun"
      correct: false

- q: "Tge litera stat per 'colliaziun'?"
  type: multiple-choice
  options:
    - text: "C – Connectedness"
      correct: true
    - text: "I – Identity"
      correct: false
    - text: "E – Empowerment"
      correct: false

- q: "È CHIME ina glista da controllar?"
  type: true-false
  correct: false
  explanation: "Na – CHIME descriva tschintg temas che sa cuvran in cun l'auter. Mintgatant è l'in en il prim plaun, mintgatant l'auter."
:::

:::flashcards{id=f-5}
- front: "CHIME"
  back: "Connectedness · Hope · Identity · Meaning · Empowerment. Tschintg process da Recovery (Leamy et al. 2011)."
- front: "La D en CHIME-D"
  back: "Difficulties – difficultads, trauma, perdita, stigma, consequenzas da malsogna. Recovery na dastga betg zuppar il grev (Stuart et al. 2017)."
- front: "Connectedness"
  back: "Colliaziun. Relaziuns, contacts da pers, famiglia, appartegnientscha, cuminanza."
- front: "Empowerment"
  back: "Autoefficacia. Surprender responsabladad, prender decisiuns, duvrar las atgnas fermezzas."
:::

:::standard{reading_time=2}
Il 2011 ha ina gruppa da perscrutaziun al King's College London evaluà passa 180 studis e rapports e dumandà: Tge descrivan las persunas adina puspè, cur ch'ellas raquintan lur via Recovery? Tschintg process èn vegnids ord — e lur literas inizialas englishas furman il pled CHIME (englais per il sun da las champanas).

- **C — Connectedness · Colliaziun:** Relaziuns, famiglia, contacts da pers, appartegnientscha, cuminanza.
- **H — Hope · Speranza:** La cretta en la midada. Models. Confidenza en il process.
- **I — Identity · Identitad:** Tgi sun jau or da la diagnosa? In maletg da sai positiv ordaifer la rolla da pazient.
- **M — Meaning · Senn:** Valurs, finamiras, rollas, mintgatant spiritualitad.
- **E — Empowerment · Autoefficacia:** Surprender responsabladad. Prender decisiuns. Duvrar las atgnas fermezzas.

CHIME è oz il model da Recovery il pli impurtant internaziunalmain. Ma el n'è betg ina glista da controlla ed era betg ina stgala. El descriva tschintg temas che sa cuvran in cun l'auter. Mintgatant è l'in en il prim plaun, mintgatant l'auter.

## La D en CHIME-D

Il 2017 han perscrutaders constatà: en il model CHIME manca insatge. Insatge ch'i sa preschenta adina puspè en las raquintadas da Recovery — la renconuschientscha expressiva da difficultads. Els han perquai cumplettà ina litera:

- **D — Difficulties · Difficultads:** Trauma, perdita, stigma, consequenzas da malsogna.

Las analisas mussan: radund 54 % dal cuntegn da las raquintadas da Recovery van da viavi sin difficultads vivì. CHIME-D admonescha perquai: Recovery na dastga betg sbittar en in optimissem sfurzà. El sto laschar plaz per il dalur, per il led e per quai ch'è propi stà — parallelamain a l'egliada vid las resursas.

Per tai munta quai: en il workbook ha il grev plaz. Tuttina sco la speranza.
:::

:::standard-quiz{id=q-5-std}
- q: "Per tge stat la „D" en CHIME-D?"
  type: multiple-choice
  options:
    - text: "Diagnosa"
      correct: false
    - text: "Difficulties — difficultads (trauma, perdita, stigma)"
      correct: true
      explanation: "Stuart, Tansey e Quayle han mussà il 2017 che questa dimensiun mancava en il CHIME original."
    - text: "Depressiun"
      correct: false

- q: "Tge litera stat per „colliaziun"?"
  type: multiple-choice
  options:
    - text: "C — Connectedness"
      correct: true
    - text: "I — Identity"
      correct: false
    - text: "E — Empowerment"
      correct: false

- q: "È CHIME ina glista da controllar?"
  type: true-false
  correct: false
  explanation: "Na — CHIME descriva tschintg temas che sa cuvran in cun l'auter. Mintgatant è l'in en il prim plaun, mintgatant l'auter."
:::

:::standard-flashcards{id=f-5-std}
- front: "CHIME"
  back: "Connectedness · Hope · Identity · Meaning · Empowerment. Tschintg process da Recovery (Leamy et al. 2011)."
- front: "La D en CHIME-D"
  back: "Difficulties — difficultads, trauma, perdita, stigma. Recovery na dastga betg zuppar il grev."
- front: "CHIME — glista u betg?"
  back: "Nagina glista da controllar. Tschintg temas che sa cuvran. Mintgatant è l'in en il prim plaun, mintgatant l'auter."
- front: "Empowerment"
  back: "Autoefficacia. Surprender responsabladad, prender decisiuns, duvrar las atgnas fermezzas."
:::



# 6. Tschintg fasas dal sanament
{#kap-6 reading_time=3}

Sche CHIME descriva ils tschintg process interns, descriva il model d'Andresen, Oades e Caputi las fasas tipicas dal via [^andresen2003] [^andresen2006].

:::table{name="Phasen-der-Genesung"}
| Fasa | Rumantsch | Tge che capita en l'intern |
|-------|---------|------------------------|
| **1. Moratorium** | Fermada | Sentiment da perdita, mancanza da speranza, retratga |
| **2. Awareness** | Svegliada | Emprima speranza, renconuscher: betg tut è pers |
| **3. Preparation** | Preparaziun | Far inventari: tge sai jau far, da tge hai jau basegn? |
| **4. Rebuilding** | Reconstrucziun | Construir activamain novas finamiras, rollas, relaziuns |
| **5. Growth** | Crescha | Ina vita cuntenta – cun u senza simptoms restants |
:::

Las fasas n'èn betg rigidas. I è normal da passar bleras giadas tras la medema fasa. I è era normal da sa viver en la medema mument en duas fasas – en in champ da vita en la crescha, en in auter puspè en la fermada. Quatter incumbensas centralas vegnan tras tut las fasas [^andresen2003]: chattar speranza, construir danovamain l'identitad, chattar senn, surprender responsabladad.

:::easy{reading_time=1}
Recovery ha savens fasas. Trais perscrutaders d'Australia han descrit tschintg fasas:

1. **Fermada** – Tut s'auza grev e senza speranza.
2. **Svegliada** – Ti remartgas: forsa va anc insatge.
3. **Preparaziun** – Ti guardas tge che ti sas far.
4. **Reconstrucziun** – Ti fas novs plans.
5. **Crescha** – Ti vivas tia vita. Cun simptoms u senza.

Ti dastgas siglir tranter las fasas. I n'è betg sco ina stgala. I è plitost sco ina spirala.
:::

:::quiz{id=q-6}
- q: "Quantas fasas descrivan Andresen, Oades e Caputi?"
  type: multiple-choice
  options:
    - text: "Trais"
      correct: false
    - text: "Tschintg"
      correct: true
    - text: "Set"
      correct: false

- q: "Èn las fasas linearas?"
  type: true-false
  correct: false
  explanation: "Na. Ti pos siglir, passar bleras giadas tras la medema fasa u esser en il medem mument en duas fasas."
:::

:::flashcards{id=f-6}
- front: "Moratorium"
  back: "Emprima fasa: fermada. Sentiment da perdita, mancanza da speranza, retratga."
- front: "Awareness"
  back: "Fasa da la svegliada. Emprima speranza. Renconuscher: betg tut è pers."
- front: "Growth"
  back: "Crescha – ina vita cuntenta cun u senza simptoms restants."
- front: "Quatter incumbensas en tut las fasas"
  back: "Chattar speranza · construir danovamain l'identitad · chattar senn · surprender responsabladad."
:::

:::standard{reading_time=2}
Recovery na curra raramain en ina lingia directa. Trais perscrutaders australians — Andresen, Oades e Caputi — han elavurà ord bleras istorgias da vita tschintg fasas tipicas:

- **Moratorium (Fermada)** — Tut para grev. Ti ta sentas pers, ti ta retiras. La speranza è lontana.
- **Awareness (Svegliada)** — In emprim sblach: forsa n'è betg tut perdì.
- **Preparation (Preparaziun)** — Ti fas inventari. Tge sai jau? Da tge hai jau basegn? Tgi è qua?
- **Rebuilding (Reconstrucziun)** — Pass per pass construis ti novas rollas, finamiras e relaziuns.
- **Growth (Crescha)** — Ti vivas ina vita che ta fa bain — cun u senza simptoms restants.

Impurtant da savair: Questas fasas n'èn nagina stgala. I è normal da passar bleras giadas tras la medema fasa. I è normal d'esser gia en la crescha en in champ da vita ed anc en la fermada en in auter. Ils sturnims tutgan tar. Els na vulan betg dir ch'ti hajas fallì.

Quatter incumbensas vegnan tras tut las fasas: chattar speranza, construir danovamain l'identitad, chattar senn, surprender responsabladad.

Dumonda tai: En tge fasa ta sentas ti uss — forsa en pliras dal medem mument?
:::

:::standard-quiz{id=q-6-std}
- q: "Èn las tschintg fasas sco ina stgala — l'ina suenter l'autra?"
  type: multiple-choice
  options:
    - text: "Gea, ti stos las passar en la successiun."
      correct: false
      explanation: "Na — las fasas n'èn betg rigidas. Sturnims e sigls èn normals."
    - text: "Na. Ti pos siglir, repeter u esser pliras dal medem mument."
      correct: true
      explanation: "Recovery è plitost ina spirala che ina stgala."

- q: "Tge fasa descriva la fermada a l'entschatta?"
  type: multiple-choice
  options:
    - text: "Growth"
      correct: false
    - text: "Moratorium"
      correct: true
      explanation: "Moratorium = fasa da la mancanza da speranza e da la retratga."
    - text: "Awareness"
      correct: false
:::

:::standard-flashcards{id=f-6-std}
- front: "Tschintg fasas"
  back: "Moratorium · Awareness · Preparation · Rebuilding · Growth. Nagina stgala — sigls e sturnims èn normals."
- front: "Quatter incumbensas en tut las fasas"
  back: "Chattar speranza · construir danovamain l'identitad · chattar senn · surprender responsabladad."
- front: "Sturnim — tge vul quai dir?"
  back: "Nagina fallida. Mabain ina part normala dal via. Recovery è ina spirala, betg ina lingia directa."
:::



# 7. Trais nivels da sanament
{#kap-7 reading_time=3}

En la perscrutaziun vegnan distints trais nivels [^slade2009]:

- **Sanament clinic**: Ils simptoms vegnan damain, ina diagnosa perda da rendiment.
- **Sanament funcziunal**: Ti pos puspè far chaussas che t'èn impurtantas: lavurar, emprender, tgirar relaziuns, ta tgirar da tes mintgadi.
- **Sanament persunal**: Ti chattas nov senn, in nov maletg da tai, nova speranza. Ti ta vivas sco insatgi che po dar ina direcziun a sia vita – era sche betg tut è „ius".

Ils trais nivels pon sa rinforzar in cun l'auter, ma na ston betg capitar en quella successiun.

:::reflection{id=4 title="Tge nivel è impurtant per tai?"}
- Sche ti t'imaginas en in onn ina vita che ta fa bain: Tge fiss auter?
- Tge dals trais nivels – clinic, funcziunal, persunal – sa senta il pli impurtant per tai en quest mument?
- Datti insatge che ti has fatg gugent pli baud e che ti vuls turnar a purtar en la vita?
:::

:::easy{reading_time=1}
I dat trais sorts da sanament:

- **Clinic:** Ils simptoms vegnan damain.
- **Funcziunal:** Ti pos puspè far chaussas: lavurar, emprender, tgirar relaziuns.
- **Persunal:** Ti vivas senn e speranza. Ti decideras cun davart tia vita.

Il pli impurtant per Recovery è il sanament persunal.
:::

:::quiz{id=q-7}
- q: "Tge nivel è il senn central da Recovery?"
  type: multiple-choice
  options:
    - text: "Sanament clinic"
      correct: false
    - text: "Sanament funcziunal"
      correct: false
    - text: "Sanament persunal"
      correct: true
      explanation: "Quai è la lectura centrala dal moviment Recovery."

- q: "Ston ils trais nivels capitar en ina tscherta successiun?"
  type: true-false
  correct: false
  explanation: "Na – els pon sa rinforzar in cun l'auter, ma na ston betg capitar en ina successiun fixa."
:::

:::flashcards{id=f-7}
- front: "Trais nivels da sanament"
  back: "Clinic (simptoms) · funcziunal (mintgadi, lavur, relaziuns) · persunal (senn, speranza, autodeterminaziun)."
- front: "Sanament persunal – il pli impurtant"
  back: "Il cor dal moviment Recovery. Pussaivel era sche ils simptoms clinics restan."
:::

:::standard{reading_time=2}
En la perscrutaziun da Recovery vegnan savens distints trais nivels da sanament — e quai ch'è da dischuncher:

- **Sanament clinic** — Ils simptoms vegnan damain u svaneschan. La diagnosa perda pais. Quai è la lectura da la medischina classica.
- **Sanament funcziunal** — Ti pos puspè far chaussas che t'èn impurtantas. Lavurar u emprender. Manegiar in tegnachasa. Tgirar amicizias. Furmar tes mintgadi.
- **Sanament persunal** — Ti chattas nov senn. Ti construis in'identitad or da la diagnosa. Ti ta vivas sco insatgi che dastga dar direcziun a sia vita. La speranza turna.

Ils trais nivels pon sa purtar in cun l'auter. Ma els na ston betg capitar en questa successiun. Tschertas persunas vivan il sanament persunal lung avant ch'ils simptoms daventan pli silenzius. Autras construeschan emprim la funcziun — e remartgan pir lura ch'era enturn s'è muventà insatge.

Il moviment da Recovery metta cleramain il pais sin il sanament persunal. Perquai ch'el è era pussaivel cur ch'ils simptoms clinics restan. Ti na stos betg esser „guarì" per manar ina buna vita.

Dumonda tai: tge dals trais nivels sa senta uss il pli impurtant per tai?
:::

:::standard-quiz{id=q-7-std}
- q: "Tge nivel stat en il center dal moviment Recovery?"
  type: multiple-choice
  options:
    - text: "Sanament clinic — mo sche ils simptoms èn davent, vala."
      correct: false
    - text: "Sanament persunal — senn, speranza, identitad or da la diagnosa."
      correct: true
      explanation: "Gist quai. Il sanament persunal è era pussaivel cur ch'ils simptoms restan."
    - text: "Sanament funcziunal — chaussa principala è che ti funcziuneschas."
      correct: false

- q: "Ston ils trais nivels gnir l'in suenter l'auter?"
  type: multiple-choice
  options:
    - text: "Gea — emprim clinic, lura funcziunal, lura persunal."
      correct: false
    - text: "Na. Els pon sa purtar, ma na ston betg capitar en ina successiun fixa."
      correct: true
:::

:::standard-flashcards{id=f-7-std}
- front: "Trais nivels da sanament"
  back: "Clinic (simptoms) · funcziunal (mintgadi, lavur, relaziuns) · persunal (senn, speranza, identitad)."
- front: "Sanament persunal"
  back: "Il cor da Recovery. Manar ina buna vita — era sche ils simptoms restan."
- front: "Successiun?"
  back: "Nagina fixa. Tschertas persunas vivan il sanament intern lung avant la reducziun clinica dals simptoms."
:::



# 8. La speranza — il pli important
{#kap-8 reading_time=4}

La speranza è en quasi tut ils models da Recovery la prima chaussa ch'è numnada [^leamy2011] [^andresen2003] [^schrank2012]. Schrank ed ils collegas han demussà: la speranza predisch il sanament persunal independentamain dals simptoms [^schrank2012].

La speranza en la perscrutaziun da Recovery n'è betg ina cunfidenza naiva. Ella n'è er betg il cuntrari da realissem. Ella è ina persvasiun concreta, savens silenziusa, che tia vita po esser dapli che il pejer di che ti vivas en quest mument [^slade2013].

Mike Slade resumescha quest chattament uschia: la speranza saja quell'energia che metta endretg in process da sanament — senza ella na cumenza nagut [^slade2013].

## La speranza sco resursa emprestada

In'idea centrala dal moviment da Recovery di: la speranza na sto betg vegnir da tai sez. Ella po vegnir mantegnida ed emprestada d'auters fin che ti la pos puspè sentir [^russinova1999] [^deegan1996] [^schrank2012]. Quai fan ils buns peers, las bunas persunas spezialistas, ils buns confamigliars: «Sche ti na pos avair nagina speranza en quest mument, la tegnain nus per tai.»

Per persunas spezialistas n'è la speranza perquai betg ina caracteristica persunala, mabain ina cumpetenza professiunala — la «hope-inspiring competence» tenor Russinova [^russinova1999].

:::reflection{id=5 title="Funtaunas da speranza"}
- Tge t'ha dà speranza pli baud — ina persuna, in lieu, in'activitad, in patratg?
- Tgi en tia entuorn tegna en quest mument la speranza per tai, cur che ti sez na la sentas betg?
- Datti in pitschen pass che pudess hoz ta mover en direcziun da speranza?
:::

:::easy{reading_time=1}
La speranza è il cor dal Recovery.

Speranza na vul betg dir: ti es adina legher. Speranza vul dir: ti craias che tia vita po esser dapli che il pejer di.

Il pli impurtant: ti na stos betg avair la speranza sulet. Auters pon la tegnair per tai. Fin che ti la sentas puspè.

Ina buna frasa: «Sche ti n'has nagina speranza ussa, la tegnain nus per tai.»
:::

:::quiz{id=q-8}
- q: "Tge di la perscrutaziun (Schrank et al. 2012) davart la speranza?"
  type: multiple-choice
  options:
    - text: "La speranza predisch il sanament persunal independentamain dals simptoms."
      correct: true
      explanation: "La speranza è in predictur — er sche ils simptoms restan."
    - text: "La speranza ha mo in effect cun malsognas leivas."
      correct: false
    - text: "La speranza sto adina vegnir da sai sez."
      correct: false

- q: "Tge vul dir 'speranza emprestada'?"
  type: multiple-choice
  options:
    - text: "Cumprar speranza da la famiglia."
      correct: false
    - text: "Auters tegnan la speranza per tai, fin che ti la sentas sez."
      correct: true
      explanation: "In'idea centrala dal moviment da Recovery."
:::

:::flashcards{id=f-8}
- front: "Speranza emprestada"
  back: "Sche ti na pos avair nagina speranza, peers, persunas spezialistas u confamigliars la tegnan per tai — fin che ti la sentas puspè."
- front: "La speranza en la perscrutaziun da Recovery"
  back: "Betg ina cunfidenza naiva — mabain ina persvasiun silenziusa, savens stinada, che tia vita po esser dapli che il pejer di."
- front: "Hope-inspiring competence"
  back: "Russinova 1999: inspirar speranza è ina cumpetenza professiunala, betg ina caracteristica persunala."
:::

:::standard{reading_time=2}
La speranza è en quasi tut ils models da Recovery la prima chaussa ch'è numnada. E quai n'è betg in cas.

Mike Slade resumescha uschia la perscrutaziun: **„La speranza è l'energia che metta endretg in process da sanament — senza ella na cumenza nagut."**

La speranza en la lectura da Recovery n'è betg ina cunfidenza naiva. Ella n'è era betg il cuntrari da realissem. Ella è ina persvasiun silenziusa, mintgatant stinada: che tia vita po esser dapli che il pejer di che ti vivas en quest mument.

## La speranza po vegnir emprestada

Ina da las pli impurtantas ideas dal moviment da Recovery di: **La speranza na sto betg vegnir da tai sez.** Ella po vegnir mantegnida ed emprestada d'auters fin che ti la pos puspè sentir.

Gist quai fan ils buns peers, las bunas persunas spezialistas, ils buns confamigliars. Els dischan — mintgatant en pleds, mintgatant mo cun lur preschientscha:

> „Sche ti na pos avair nagina speranza en quest mument, la tegnain nus per tai. Uschè ditg sco ch'i dovra."

Quai n'è nagina tecnica da terapia. Quai è atgnadad. Per persunas spezialistas n'è la speranza perquai betg ina dumonda da l'atgna disposiziun, mabain ina cumpetenza professiunala — la *hope-inspiring competence* (Russinova).

Dumonda tai:

- Tgi en tia vita tegna en quest mument la speranza per tai?
- Tgi pudess far quai sche ti dumondas?
- E per tgi tegnas ti forsa la speranza — senza remartgar?
:::

:::standard-quiz{id=q-8-std}
- q: "Tge vul dir „speranza emprestada"?"
  type: multiple-choice
  options:
    - text: "Ti stos elavurar la speranza tut suletta u tut sulet."
      correct: false
    - text: "Auters tegnan la speranza per tai, fin che ti la sentas puspè sez."
      correct: true
      explanation: "In'idea centrala dal moviment da Recovery. La speranza n'è betg mo ina prestaziun individuala."

- q: "È la speranza en la perscrutaziun da Recovery la medema chaussa sco ina cunfidenza naiva?"
  type: multiple-choice
  options:
    - text: "Gea, simplamain optimissem."
      correct: false
    - text: "Na. Ina persvasiun silenziusa, savens stinada, che tia vita po esser dapli che il pejer di."
      correct: true
:::

:::standard-flashcards{id=f-8-std}
- front: "La speranza en Recovery"
  back: "Betg ina cunfidenza naiva — mabain la persvasiun silenziusa che tia vita po esser dapli che il pejer di."
- front: "Speranza emprestada"
  back: "Sche ti na pos avair nagina speranza, peers, persunas spezialistas u confamigliars la tegnan per tai — fin che ti la sentas puspè."
- front: "Citat da Slade"
  back: "„La speranza è l'energia che metta endretg il process da sanament — senza ella na cumenza nagut.""
:::



# 9. Empowerment ed autodeterminaziun
{#kap-9 reading_time=4}

Il pled Empowerment è ligià stretg cun Recovery. El vegn dals moviments dals dretgs civils e d'emancipaziun dal 20avel tschientaner [^herriger2014] [^knufseibert2004] [^knuf2026].

Ils onns 1980 è il concept vegnì surpiglià er en la tgira psicgiatrica. Empowerment vul dir: autocapacitaziun. Participaziun activa. Surpigliar atgna responsabladad là, nua che ti la vuls e pos purtar. Rogers ed ils collegas han sviluppà ina emprima scala d'Empowerment cumprovada empiricamain [^rogers1997]. En il territori tudestg-lingual è «Selbstbefähigung fördern» («Promover autocapacitaziun») l'ovra da standard [^knufseibert2004].

## Shared Decision-Making

En pratica vul Empowerment surtut dir ina chaussa: decisiuns cuminaivlas empè da disposiziuns. Persunas spezialistas decidan cun tai, betg sur da tai [^charles1997] [^deegandrake2006]. Studis mussan: tgi che vegn integrà en las decisiuns è pli cuntent ed obtegna savens meglras resultats [^joosten2008] [^slade2017sdm].

## Personal Medicine

Pat Deegan ha cunià il term Personal Medicine: las chaussas betg-medicamentusas ch'agidan ad ina persuna da restar sauna — durmida, in chaun, ina determinada spassegiada, chantar en il chor, ina telefonada la saira. Personal Medicine vegn chapida en il moviment da Recovery sco equivalenta als medicaments e vegn integrada en cunvegnas da tractament [^deegan2005].

## Disposiziuns anticipadas e Joint Crisis Plans

In instrument concret d'Empowerment èn las cunvegnas da tractament u Joint Crisis Plans — cunvegnas, en las qualas ti fixeschas en in stadi stabil tge che duai capitar en cas da crisa e tge betg. Henderson ed ils collegas han pudì mussar en in studi RCT che ils Joint Crisis Plans reduceschan d'ina maniera significanta ils ingressis sut sforz [^henderson2004].

:::easy{reading_time=2}
Empowerment vul dir: ti as dastgas decider. Ti has pussanza sur tia atgna vita.

En la psicgiatria vul quai savens dir: nus decidain ensemen. Betg: il medi decida sulet.

Ti as dastgas far dumondas. Ti as dastgas dir na. Ti as dastgas ir tschertgar ina segunda opiniun.

Datti er la «Personal Medicine». Quai èn chaussas ordvart medicaments ch'agidan: in chaun, ina spassegiada, in chor, in bun ami. Questas chaussas èn precis uschè impurtantas sco ils medicaments.
:::

:::quiz{id=q-9}
- q: "Tge vul dir 'Shared Decision-Making'?"
  type: multiple-choice
  options:
    - text: "Il medi decida sulet."
      correct: false
    - text: "Persuna spezialista e persuna pertutgada decidan ensemen."
      correct: true
      explanation: "Charles, Gafni & Whelan 1997 han stabilì il term."
    - text: "La famiglia decida."
      correct: false

- q: "Tge munta 'Personal Medicine' (Pat Deegan)?"
  type: multiple-choice
  options:
    - text: "Medicaments persunalisads tenor profil DNA."
      correct: false
    - text: "Chaussas betg-medicamentusas ch'agidan ad ina persuna da restar sauna."
      correct: true
      explanation: "Chaun, spassegiada, chor, chantar — integrablas en cunvegnas da tractament."

- q: "Tge mussa il studi RCT davart ils Joint Crisis Plans (Henderson 2004)?"
  type: multiple-choice
  options:
    - text: "Els n'han nagin effect mesirabel."
      correct: false
    - text: "Els reduceschan d'ina maniera significanta ils ingressis sut sforz."
      correct: true
:::

:::flashcards{id=f-9}
- front: "Empowerment"
  back: "Autocapacitaziun. Participaziun activa. Surpigliar responsabladad là, nua che ti la vuls e pos purtar."
- front: "Personal Medicine"
  back: "Pat Deegan: chaussas betg-medicamentusas che ta tegnan sauna — durmida, moviment, relaziuns, hobis. Equivalentas als medicaments."
- front: "Joint Crisis Plan"
  back: "Cunvegna en stadi stabil: tge duai capitar en cas da crisa, tge betg? Il studi RCT (Henderson 2004) mussa: reducescha ingressis sut sforz."
- front: "Shared Decision-Making"
  back: "Persuna spezialista e persuna pertutgada decidan ensemen — betg disposiziun e cumpliientscha."
:::

:::standard{reading_time=2}
Empowerment vul dir autocompetenza. Ti dastgas decider — sur da tia vita e sur da tes tractament.

Quai suna evident, ma en il mintgadi da la psichiatria n'è quai savens betg. Lung temp valeva: la persuna spezialista decida, la paziente u il pazient suonda. Recovery sposta quest punct cleramain — vers ina **responsabladad cuminaivla**.

## Trais utensils concrets

**Shared Decision-Making** — Las decisiuns vegnan prendidas ensemen. Ti dumondas tge ch'è recumandà. Ti dis tge che va per tai e per tia vita. Studis mussan: tgi ch'è integrà è pli cuntent ed obtegna meglras consequenzas.

**Personal Medicine** (Pat Deegan) — Betg mo medicaments gidan. Era quai che ta tegna saun sco persuna: in chaun, ina spassegiada la damaun, in chor, in telefon la saira, l'iert, la tura en ils munts. En il moviment da Recovery è la Personal Medicine **da medema valur** sco il tractament medicinal — ed appartegna en mintga cunvegna da tractament.

**Joint Crisis Plan** — Ina cunvegna che ti registreschas en il stadi stabil cun tia squadra: Tge duai capitar en cas da crisa? Tge na? Tgi vi jau avair infurmà? Tge medicaments stuppel jau, tge na? In RCT (Henderson 2004) mussa: tals plans reduceschan signifitgantamain las internaziuns sfurzadas.

## Tge n'è Empowerment betg

Empowerment na vul betg dir: far tut suletta u tut sulet. El na vul betg dir: esser cunter las persunas spezialistas. El vul dir: tia vusch quinta — sper la vusch professiunala. Omaduas ensemen èn dapli.

Dumonda tai: Nua dastgas ti gia decider? Nua vuls ti survegnir dapli vusch?
:::

:::standard-quiz{id=q-9-std}
- q: "Tge vul dir Shared Decision-Making?"
  type: multiple-choice
  options:
    - text: "Ti decidas tut suletta, il medi tascha."
      correct: false
    - text: "La persuna spezialista e ti decidais ensemen."
      correct: true
      explanation: "Gist quai. Tia vusch quinta sper la vusch professiunala."

- q: "Tge è „Personal Medicine" tenor Pat Deegan?"
  type: multiple-choice
  options:
    - text: "Medicaments persunalisads tenor il test DNA."
      correct: false
    - text: "Las chaussas senza medicaments che ta tegnan saun — chaun, spassegiada, chor, amia u ami."
      correct: true
      explanation: "Da medema valur sco ils medicaments e part da mintga cunvegna da tractament."

- q: "Tge porta in Joint Crisis Plan?"
  type: multiple-choice
  options:
    - text: "El è ina obligaziun che gist na fa nagut."
      correct: false
    - text: "El reduceschia las internaziuns sfurzadas — cumprovà tras in RCT (Henderson 2004)."
      correct: true
:::

:::standard-flashcards{id=f-9-std}
- front: "Empowerment"
  back: "Autocompetenza. Ti dastgas decider — sur da tia vita e sur da tes tractament. Betg: far tut suletta u sulet."
- front: "Shared Decision-Making"
  back: "Persuna spezialista e ti decidais ensemen. Meglras consequenzas, pli auta cuntentientscha."
- front: "Personal Medicine"
  back: "Pat Deegan: las chaussas senza medicaments che ta tegnan saun. Da medema valur sco ils medicaments."
- front: "Joint Crisis Plan"
  back: "Cunvegna en il stadi stabil: tge duai capitar en cas da crisa, tge na? Reducescha las internaziuns sfurzadas."
:::



# 10. Salutogenesa — restar saun
{#kap-10 reading_time=3}

Il patratgar orientà a Recovery è ligià stretg cun il concept da salutogenesa [^antonovsky1979] [^antonovsky1997]. Empè da dumandar «Tge renda persunas malsaunas?» (patogenesa), dumonda la salutogenesa «Tge tegna persunas saunas?»

Antonovsky ha identifitgà il sentiment da coerenza (Sense of Coherence) sco factur central da protecziun — la capacitad da viver l'atgna vita sco chapibla, manegiabla e plain senn. Las trais cumponentas correspundan d'ina maniera evidenta cun ils process da CHIME e cun la triada «speranza — pussanza — senn».

En il territori tudestg-lingual ha Schmolke fatg utilisabels ils concepts salutogenetics per persunas cun ina diagnosa da schizofrenia [^schmolke2001]. Salutogenesa e Recovery vegnan regularmain descrits en la litteratura DACH sco duas varts da la medema vart — orientadas a las resursas empè dals deficits [^knuf2026] [^ameringschmolke2012].

:::info{type=note title="Las trais cumponentas dal sentiment da coerenza tenor Antonovsky"}
- **Chapibladad** (Comprehensibility): mia vita resulta en in connex, ella ha senn.
- **Manegiabladad** (Manageability): jau pos far frunt a quai che vegn — sulet u cun agid.
- **Impurtanza** (Meaningfulness): igl ha senn ch'jau m'engaschia.
:::

:::easy{reading_time=1}
La medischina dumonda savens: Tge renda persunas malsaunas? Quai sa numna patogenesa.

La salutogenesa dumonda autramain: Tge tegna persunas saunas?

Il perscrutader Aaron Antonovsky ha chattà trais puncts impurtants:

- Jau chapesch mia vita.
- Jau pos far frunt a chaussas pesantas — sulet u cun agid.
- Mia vita ha in senn.

Cur che quels trais puncts èn preschents, es ti pli ferm cunter las grevezzas.
:::

:::quiz{id=q-10}
- q: "Tge è la differenza tranter patogenesa e salutogenesa?"
  type: multiple-choice
  options:
    - text: "La patogenesa è pli nova."
      correct: false
    - text: "La patogenesa dumonda suenter la malsogna — la salutogenesa suenter la sanadad."
      correct: true
    - text: "La patogenesa vala mo per malsognas corporalas."
      correct: false

- q: "Tgi ha sviluppà il concept da la salutogenesa?"
  type: multiple-choice
  options:
    - text: "Sigmund Freud"
      correct: false
    - text: "Aaron Antonovsky"
      correct: true
:::

:::flashcards{id=f-10}
- front: "Salutogenesa"
  back: "Tge tegna persunas saunas? (Antonovsky 1979). Cuntrapart a la patogenesa — la dumonda 'tge renda malsaun?'."
- front: "Sentiment da coerenza"
  back: "Chapibladad · manegiabladad · impurtanza. Factur da protecziun tenor Antonovsky."
:::

:::standard{reading_time=2}
La medischina classica dumonda: **„Tge fa malsognas las persunas?"** Quai vegn numnà patogenesa. Ella tschertga ils motivs, ils ristgs, ils deficits.

Il sociolog Aaron Antonovsky ha mess la dumonda surentscha. El ha dumandà: **„Tge tegna las persunas saunas — er sut chargia?"** Quai vegn numnà salutogenesa.

## Il sentiment da coherenza

Antonovsky ha observà: Persunas che surmuntan bain greva crisas da vita partan savens ina tscherta atgnadad interna. El l'ha numnada il **sentiment da coherenza** ed ha descrit trais cumponentas:

- **Chapibladad** — Mia vita dat ina connexiun. Quai che ma capita sa lascha integrar.
- **Manegiabladad** — Jau sai manegiar cun quai che vegn. Suletta u cun agid.
- **Sensibladad** — Igl è la paina da s'engaschar. Mia vita ha ina direcziun.

Questas trais cumponentas tunan enconuschentas. Ellas stattan ordvart datiers dals tschintg process CHIME e da la triada „Speranza — Pussanza — Senn".

## Pertge ch'i è impurtant

Salutogenesa e Recovery partan la medema atgnadad fundamentala: orientà a las resursas empè da als deficits. Ti na vegns betg vis sco in fasch da simptoms, mabain sco persuna cun fermezzas, experientschas, relaziuns — era sche bler è grev.

En la litteratura D-A-CH (Schmolke; Amering & Schmolke) vegnan perquai salutogenesa e Recovery savens descrits sco duas varts da la medema medaglia.

Dumonda tai: Tge ta tegna saun — era oz, era ussa?
:::

:::standard-quiz{id=q-10-std}
- q: "Tge dumonda la salutogenesa — en cuntradicziun a la patogenesa?"
  type: multiple-choice
  options:
    - text: "Tge fa las persunas malsognas?"
      correct: false
      explanation: "Quai è la patogenesa. La salutogenesa dumonda enviers."
    - text: "Tge tegna las persunas saunas — er sut chargia?"
      correct: true
      explanation: "La dumonda ch'Antonovsky ha mess."

- q: "Tge trais cumponentas tutgan tar il sentiment da coherenza?"
  type: multiple-choice
  options:
    - text: "Chapibladad · manegiabladad · sensibladad"
      correct: true
      explanation: "Las trais cumponentas d'Antonovsky. Ordvart datiers da „Speranza — Pussanza — Senn"."
    - text: "Speranza · cretta · charezza"
      correct: false
:::

:::standard-flashcards{id=f-10-std}
- front: "Salutogenesa"
  back: "Tge tegna las persunas saunas? (Antonovsky). Cuntraria a la patogenesa — la dumonda „Tge fa malsogn?"."
- front: "Sentiment da coherenza"
  back: "Chapibladad · manegiabladad · sensibladad. Factur da protecziun en cas da chargia."
- front: "Salutogenesa e Recovery"
  back: "Duas varts da la medema atgnadad: orientà a las resursas empè da als deficits. Ti es dapli che tes simptoms."
:::



# 11. Stigma e auto-stigma
{#kap-11 reading_time=4}

Il stigma è ina da las pli grondas barrieras al Recovery. Goffman ha cunià il term per las scienzas socialas: il stigma è ina caracteristica ch'avilescha ina persuna agli egls dals auters [^goffman1963].

## Trais nivels da stigma

Corrigan e Watson distinguan trais nivels [^corrigan2002]:

- **Stigma public**: pregiudizis en la societad («persunas cun ina malsogna psichica èn privlusas»).
- **Stigma structural**: dischavantatgs en las leschas, en il martgà da lavur, en il sistem d'assicuranza.
- **Auto-stigma** (stigma internalisà): ti surpiglias las maginas negativas sco magina sur da tai sez.

## Auto-stigma — cur che la tempesta sa volva enviers l'intern

Corrigan ed ils collegas descrivan l'auto-stigma sco process regressiv en quatter pass: percepir, conceder, applitgar a sai, suffrir — cun consequenzas per il sentiment d'atgna valur, per l'autoeffectivitad e per il decurs da la malsogna [^corrigan2011].

La buna nova: l'auto-stigma è midabel. Revistas sistematicas mussan che intervenziuns psicosocialas — surtut en gruppas — pon reducir il stigma internalisà [^yanos2015] [^buechter2023]. Er programs cunter il stigma cun contact direct cun persunas cun experientscha viva mussan en meta-analisas effects pitschens fin mediocers [^corrigan2012] [^thornicroft2016].

En ils rapports d'experientscha da las persunas che accumpognan il sanament [^utschakowski2009] returna in patratg adina puspè: betg la diagnosa sezza è quai che fa propi mal. Igl è quai che la diagnosa fa or d'ina persuna agli egls dals auters — e quai che la persuna pertutgada cumenza alura a crair sur da sai sezza. L'auto-stigma nascha exact a questa cusima.

:::reflection{id=6 title="Vuschs interiuras"}
- Tge frasas as dis ti sez sur da tia malsogna u sur da la malsogna da la persuna che ti accumpognas?
- Tge da questas frasas n'è atgnamain betg ina propria vusch, mabain maginas surpiglidas dad ordvart?
- Tge frasa fiss ina versiun pli affabla da la medema vardad?
:::

:::easy{reading_time=2}
Stigma vul dir: ti vegns giuditgà mal pervi d'ina chaussa. Per exempel: perquai che ti has ina diagnosa.

Datti stigma en trais champs:

- En la societad — pregiudizis, plaids nauschs.
- En reglas e leschas — p.ex. difficultads cun assicuranzas.
- En tai sez — ti craias las nauschas chaussas sur da tai.

L'ultim sa numna auto-stigma. Igl è privlus. El ta fa pitschen avant ch'ils auters il fan.

La buna nova: l'auto-stigma sa po midar. Discurrer agida. Encuntrar autras persunas che vivan la medema chaussa agida er.
:::

:::quiz{id=q-11}
- q: "Tge è l'auto-stigma?"
  type: multiple-choice
  options:
    - text: "Il stigma che ils auters mi fan."
      correct: false
    - text: "Cur ch'jau surpigl las maginas negativas sco magina sur da mai sez."
      correct: true
      explanation: "Corrigan & Watson 2002 il descrivan sco process regressiv."

- q: "Tge metoda reducescha il stigma il pli efficazzamain?"
  type: multiple-choice
  options:
    - text: "Tasair."
      correct: false
    - text: "Contact direct cun persunas cun experientscha viva."
      correct: true
      explanation: "Thornicroft et al. 2016 mussan quai en ina meta-analisa."

- q: "L'auto-stigma è el midabel?"
  type: true-false
  correct: true
  explanation: "Gea — intervenziuns psicosocialas, surtut en gruppas, reduceschan il stigma internalisà (Yanos 2015)."
:::

:::flashcards{id=f-11}
- front: "Trais nivels da stigma"
  back: "Stigma public · stigma structural · auto-stigma (stigma internalisà)."
- front: "Auto-stigma"
  back: "Cur che ti surpiglias las maginas socialas negativas sco magina sur da tai sez. Midabel."
- front: "La metoda anti-stigma la pli efficazza"
  back: "Contact persunal direct cun persunas cun experientscha viva (Corrigan et al. 2012; Thornicroft et al. 2016)."
:::

:::standard{reading_time=2}
Il stigma è ina da las pli grondas barrieras sin il via Recovery. Il sociolog Erving Goffman ha descrit il stigma sco ina caracteristica che bassa il pretsch d'ina persuna en ils egls dad auters.

## Trais nivels

Patrick Corrigan distingua trais nivels sin ils quals il stigma agescha:

- **Stigma public** — Prejudizis en la societad. „Persunas cun malsognas psichicas èn privlusas." „Tira tai ensemen."
- **Stigma structural** — Disadvantatgs en leschas, en il martgà da lavur, tar las assicuranzas, tar las autoritads.
- **Auto-stigma** — Ti surpiglias ils maletgs negativs dad ora sco maletg sur da tai sez.

## Cur che la tempesta batta vers l'intern

L'auto-stigma è particularmain isnel. El ta fa pitschen — avant ch'auters empruvian. Corrigan descriva in process en quatter pass: percepir, consentir, applitgar, suffrir. La consequenza: damain autovalur, damain autoefficacia, savens er in decurs pli grev da la malsogna.

En rapports d'experientscha dad accumpagnaders e accumpagnadras da sanament vegn adina puspè questa patratga: **Betg la diagnosa sez è quai ch'è propi vulnerant. Vulnerant è quai che la diagnosa fa or da la persuna en ils egls dad auters — e quai che la persuna lura cumenza a crair sur da sai sezza.**

## La buna nova

L'auto-stigma sa lascha midar. La perscrutaziun mussa: intervenziuns psicosocialas — particularmain en gruppas — reduceschan il stigma internalisà. Il pli efficazi cunter il stigma public è il **contact direct** cun persunas cun experientscha vivida.

Ti n'es betg tia diagnosa. Ti es ina persuna cun ina istorgia, cun valurs, cun relaziuns, cun abilitads.

Dumonda tai: Tge frasas dis ti a tai sez sur da tia malsogna — e talas èn surpernidas vuschs dad ora?
:::

:::standard-quiz{id=q-11-std}
- q: "Tge è auto-stigma?"
  type: multiple-choice
  options:
    - text: "Il stigma che auters ma fan."
      correct: false
    - text: "Cur che jau surpigl ils maletgs negativs da la societad sco maletg sur da mai sez."
      correct: true
      explanation: "Corrigan & Watson 2002: in process regressiv en quatter pass."

- q: "Tge funcziuna il meglier cunter il stigma public?"
  type: multiple-choice
  options:
    - text: "Tascher e sa zuppentar."
      correct: false
    - text: "Contact direct tranter la populaziun generala e persunas cun experientscha vivida."
      correct: true
      explanation: "Thornicroft et al. 2016: l'inscunter mida ils maletgs."

- q: "Sa lascha l'auto-stigma midar?"
  type: multiple-choice
  options:
    - text: "Na — el è ina giada per adina fix."
      correct: false
    - text: "Gea — particularmain en gruppas e tras intervenziuns psicosocialas."
      correct: true
:::

:::standard-flashcards{id=f-11-std}
- front: "Trais nivels da stigma"
  back: "Stigma public · stigma structural · auto-stigma (internalisà)."
- front: "Auto-stigma"
  back: "Cur che ti craias als maletgs negativs dad ora sur da tai sez. Ta fa pitschna u pitschen avant ch'auters fan quai. Sa lascha midar."
- front: "Tge funcziuna cunter il stigma?"
  back: "Contact direct cun persunas cun experientscha vivida. Discurrer. Gruppas. Cundivider istorgias."
- front: "Ti n'es betg tia diagnosa"
  back: "Ti es ina persuna cun ina istorgia, cun valurs, cun relaziuns, cun abilitads."
:::



# Il midament il pli important: dal rol da pazient a expert da l’atgna experientscha
{#kap-shift reading_time=8}

Sche ti es stà lung temp en tractament psicgiatric — forsa onns, u decennis — alura ha quai fatg insatge cun tai. Betg mo la malsogna. Er il rol.

En la medischina classica datti ina cumpartiziun clera da las incumbensas: la persuna spezialista sa. La pazienta u il pazient suonda. La diagnosa declera tge che capita. Il medicament u la terapia rendan puspè saun. Questa logica funcziuna bain tar bleras malsognas corporalas. Tar la suffrientscha psichica datti cunfins ch'èn daventads adina pli evidents en ils ultims trenta onns.

## Tge che il rol lung po avair fatg cun tai

Forsa enconuschas ti in u plirs da quels puncts:

- Ti has emprendì da ta descriver sez tras ina diagnosa. «Jau sun bipolar.» «Jau sun borderline.» «Jau sun in cas cronic.»
- Ti has emprendì che insatgi auter sa meglier tge che è bun per tai — la medi, il terapeut, l'equipa da tractament.
- Ti has emprendì che tia atgna sentida vegn observada cun mistrust — sco «mancanza da chapientscha da la malsogna» u «non-cumpliientscha».
- Ti has emprendì da spetgar — sin il proxim termin, il proxim medicament, la proxima metoda che duai finalmain agir.
- Ti has emprendì che il sanament è insatge che vegn fatg cun tai. Betg insatge che ti fas.

Quai n'è betg ina debladad persunala. Quai è ina reacziun emprendida. En la perscrutaziun sa numna ella *anc-pussanza emprendida* (erlernte Hilflosigkeit) — ed ella sa preschenta dapertut nua che persunas vivan lung temp en sistems en ils quals ellas han pauc controlla [^seligman1975].

Patricia Deegan, ina da las vuschs il pli marcantas dal moviment da Recovery, ha cunià per quai in term fitg taglient: *spirit breaking* [^deegan1990]. Ella descriva uschia co che sistems d'agid fan magari il cuntrari da quai che els duessan far — co che els ruttan il sentiment da sai, l'atgna pussanza, la vusch da las persunas, empè da las rinforzar. Betg cun mala intenziun. Mabain perquai che la logica dal sistem prevesa quai uschia.

## Il paradigma che blochegia la guariziun

Larry Davidson e David Roe han cumprais la differenza scientificamain [^davidsonroe2007]. Els discurran da duas significaziuns fitg differentas da Recovery:

- **Recovery FROM** — sanament D'ina malsogna. Quai è la lectura medicinala: simptoms enavos, funcziun enavos, diagnosa en il meglier cas davos tai.
- **Recovery IN** — sanament CUN ina malsogna. Quai è la lectura persunala: manar ina vita che ta cuntenta, er sche ils simptoms èn anc preschents.

Tuts dus èn pussaivels. Tuts dus èn valaivels. Ma els suondan logicas fitg differentas. *Recovery FROM* ha lieu en la stanza da tractament — ti es destinaziun passiva. *Recovery IN* ha lieu en tia vita — ti es la persuna ch'agescha.

La perscrutadra ollandaisa da Recovery Wilma Boevink il di anc pli aguzzà [^boevink2017]: per bleras persunas cun malsognas psichicas grevas n'è il sistem psicgiatric da prima dretg betg in sistem da guariziun. Igl è in dad in pèr utensils sin in lung viadi. Tgi che chapescha quai — e cumenza ad utilisar la psicgiatria sco med empè da sa viver sco ses object — sposta insatge fundamental.

## Co che il spostament para en pratica

Il spostament capita en pitschens pass. Pir savens datti nagin mument explosiv. Qua datti in pèr exempels co ch'el po parair:

:::table{name="Vom-Patient-zum-Experten"}
| Dal rol da pazient … | … en la posiziun d'expert(a) |
|-----------------------|--------------------------|
| «Dimi tge ch'jau duai far.» | «Tge recumandais Vus — e tge va per mai cun mia vita?» |
| «I na vegn mai meglier.» | «Hoz è stà grev. Vegnin a vesair tge che porta la proxima emna.» |
| «Mes medi sa tge che è bun per mai.» | «Nus decidain ensemen — e jau dastg far dumondas tranter en.» |
| «Jau sun mia diagnosa.» | «Jau hai ina diagnosa. Ella n'è betg tut quai ch'jau sun.» |
| «Jau hai fatg fiasco.» | «Jau hai in di grev. Quai è infurmaziun, betg in giudicat.» |
| «Forsa che l'equipa mi prenda davent ils medicaments, sch'jau quint da quai.» | «Quest effect secundar mi grava. Pudain nus examinar alternativas ensemen?» |
| «Jau stoss esser valent.» | «Jau dastg acceptar agid — e jau dastg decider qual.» |
:::

Nagin da quels spostaments vul dir che ti n'has pli da basegn da nagin agid. Nagin vul dir che ti stoppias esser cunter las persunas spezialistas. Igl èn betg revoltas, igl è posiziun.

## Pertge che quest spostament è uschè impurtant

El n'è betg ina recumandaziun da bleras. El è la premissa per che il Recovery possia veramain agir per tai:

- La **speranza** sa po sviluppar mo en in jau che sa viva mo in pau sco subject.
- Las **finamiras persunalas** sa pon persequitar mo sche ins sa viva sco insatgi che dastga avair finamiras.
- L'**autoeffectivitad** sa construescha mo là, nua ch'ins fa experientschas dad effectuar insatge sez — betg mo a spetgar che insatge capitia cun ina persuna.
- Il **senn** en la vita nascha tras la tscherna. Tgi che n'ha nagina tscherna, ha greva da chattar senn.

La perscrutaziun conferma quai cleramain. Roe e Davidson [^roedavidson2005] descrivan il Recovery sco in «rampar enavos las paliras» ed in nov scriver da l'atgna istorgia. Studis actuals davart la reconstrucziun narrativa da l'identitad mussan [^chiba2019narrative]: tgi che (re)construescha en la fasa da Recovery in'identitad ultra dal rol da pazient, vegn enavant marcantamain — er sche ils simptoms restan.

:::info{type=note title="Tge ch'i n'è betg manegià qua"}
Il spostament dal stadi da pazient a la posiziun d'expert(a) n'è nagin appel da terminar ils medicaments, da terminar tractaments u da s'inrumar a sulet. El n'è nagin reproch a las persunas spezialistas.

El è in envit da prender tia atgna vusch sco funtauna — sper las vuschs da las persunas spezialistas. E da trar a la glisch tge che vala per tai.
:::

## Da quel ch'ha viv l'experientscha a la persuna che ha experientscha

En il territori tudestg-lingual datti per quest pass in bel num: «Erfahrungsexpertin», «Erfahrungsexperte» — experta, expert d'experientscha. En la furmaziun EX-IN vegn precis quai sviluppà sistematicamain — sur dudesch moduls daventan persunas cun experientscha en la psicgiatria persunas che accumpognan il sanament e che fan utilisabla lur atgna experientscha sco resursa per auters [^utschakowski2009] [^exin_de].

Ti na stos betg daventar persuna che accumpogna il sanament per cumplenir quest spostament. Ma l'idea agida, er sche ti l'applitgas mo a tai sez: tia istorgia n'è betg insatge che t'è capità e che ta definescha. Ella è insatge che ti enconuschas — ed or da la quala ti pos trair savida. Savida che t'agida da chapir meglier tai sez ed ils auters.

Wilma Boevink numna quai *experiential expertise* — expertisa d'experientscha [^boevink2017] [^boevink2012]. Tia savida d'experientscha n'è betg main valaivla che la savida spezialisada da terapeuts. Ella è autra. Ed amenduas ensemen èn dapli che la summa da las parts.

## Sche ti dubiteschas anc

Forsa leges ti tut quai e patratgas: bel ditg, ma per mai na va quai betg pli. Forsa has ti trenta onns d'experientscha clinica. Forsa has ti pers la cretta. Forsa n'ha anc mai nagin gì ditg che quest rol ta cumpetia er a tai.

Trais chaussas:

1. **Igl è mai memia tard.** La perscrutaziun da Recovery na conuscha nagina limita d'etad e nagina limita da gravitad. Er persunas ch'han vivì decennis en tgira staziunara descrivan spostaments — magari precis cur ch'ellas sezzas n'hajan betg pli quintà cun quai [^harding1987] [^lally2017].

2. **Ti na stos betg far tut en in colp.** Ina suletta dumonda la damaun — «Da tge avess jau basegn hoz?» — è gia in moviment. Ina suletta resposta a tai sez la saira — «Hoz è stà grev, e jau era tuttina là» — è er in moviment.

3. **Ti has basegn d'alliads.** Nagin n'arriva da far quest spostament a sulet. Peers, ina gruppa d'agid sez, ina persuna da confidenza, ina persuna spezialista che viva il concept, in Recovery College. Sche tia equipa da tractament na fa betg quest viadi cun tai, n'è quai betg ton fiasco — alura ha quella equipa en quel mument ina maglia tschorva.

:::quote{author="Patricia Deegan, 1996" source="deegan1996" lang="en"}
We are a conspiracy of hope and we are pressing back against the strong tide of oppression which for centuries has been the legacy of those of us who are labeled with mental illness.
:::

:::quote-translation{source="deegan1996" translator="atgna translaziun"}
Nus essan ina conspiraziun da la speranza. Nus ans opponain a la fluida ferma da l'oppressiun che è dapi tschientaners il retgavadi da quels da nus che vegnan etichettads cun ina diagnosa psichica.
:::

:::reflection{id=10 title="Tia posiziun"}
- A tge plazzas ta vivas ti anc en il rol classic da pazient?
- Nua datti moments en ils quals ti ta vivas gia sco expert(a) da tia atgna experientscha — er sch'els èn curts?
- Tge frasa da la colonna sanestra da la tabella t'è familiara — quala da la colonna dretga vuless danovamain prender plaz?
- Tgi pudess esser tia conspiraturas u conspiratur da la speranza?
:::

:::easy{reading_time=3}
Forsa es ti stà lung temp en tractament. Lura has ti probablamain emprendì insatge ben determinà:

- Il medi sa meglier che jau.
- Jau stoss far quai ch'ins mi di.
- Jau sun malsaun, auters m'agidan.

Quai è in rol. El sa numna il rol da pazient.

Quest rol agida magari. Ma el po er far donn. Ti vegns pitschen. Ti spetgas. Ti ta fas dependent.

Il Recovery di: ti dastgas surventir quest rol. Pass per pass.

Ti na daventas betg medi. Ma ti daventas expert(a) per tia atgna vita. Ti t'enconuschas il meglier. Tia experientscha è savida.

**Quest midament è il midament il pli impurtant en il Recovery. Senza el na va quai betg.**

Trais chaussas per finir:

- Igl è mai memia tard. Er suenter blers onns en tractament.
- Ti na stos betg far quai en in colp. Ils pitschens pass cuntan.
- Ti has basegn d'alliads.

:::reflection{id=shift-easy title="Dumondati sez"}
- A tge plazza ta vivas ti anc en il vegl rol?
- Nua es ti gia expert(a) per tia vita?
:::
:::

:::quiz{id=q-shift}
- q: "Tge munta qua il 'rol da pazient'?"
  type: multiple-choice
  options:
    - text: "Ina diagnosa medicinala."
      correct: false
    - text: "Ina posiziun emprendida: spetgar passiv, ils auters san meglier, jau vegn rendì saun."
      correct: true
      explanation: "In rol, betg ina diagnosa — ed el è midabel."

- q: "Tge di Patricia Deegan davart il 'spirit breaking'?"
  type: multiple-choice
  options:
    - text: "El descriva in cas excepziunal e rar."
      correct: false
    - text: "Sistems d'agid pon rumper il sentiment da sai, la vusch e l'atgna pussanza — il pli savens senza mala intenziun."
      correct: true
      explanation: "Deegan 1990 — in term taglient, ma precis."

- q: "Tge è la differenza tranter Recovery FROM e Recovery IN?"
  type: multiple-choice
  options:
    - text: "FROM = lectura veglia, IN = pli nova."
      correct: false
    - text: "FROM = sanament D'ina malsogna (medicinal). IN = sanament CUN ina malsogna (persunal)."
      correct: true
      explanation: "Davidson & Roe 2007."

- q: "È quai vair, che quest spostament è mo ina recumandaziun da bleras?"
  type: true-false
  correct: false
  explanation: "Na — el è la premissa per che il Recovery possia veramain agir."

- q: "Da quala etad / suenter quants onns da tractament èsi memia tard per quest spostament?"
  type: multiple-choice
  options:
    - text: "Suenter 10 onns."
      correct: false
    - text: "Da 60 onns."
      correct: false
    - text: "Mai."
      correct: true
      explanation: "La perscrutaziun da Recovery na conuscha nagina limita d'etad. Er suenter decennis pussaivel."
:::

:::flashcards{id=f-shift}
- front: "Spirit Breaking"
  back: "Patricia Deegan (1990): co che sistems d'agid ruttan il sentiment da sai, la vusch e l'atgna pussanza — il pli savens betg cun mala intenziun."
- front: "Recovery FROM"
  back: "Sanament D'ina malsogna — lectura medicinala. Simptoms enavos, diagnosa en il meglier cas davos tai."
- front: "Recovery IN"
  back: "Sanament CUN ina malsogna — lectura persunala. Ina vita cuntenta, er sche ils simptoms restan."
- front: "Rol da pazient"
  back: "Ina posiziun emprendida: passiva, en spetga, manada dad auters. Agida curtterminadamain, fa donn ditgterminadamain. Midabla."
- front: "Expertisa d'experientscha (Boevink)"
  back: "Tia savida viva è independenta ed equivalenta a la savida spezialisada. Ti la pos utilisar — per tai e per auters."
- front: "Conspiracy of Hope"
  back: "Patricia Deegan 1996: 'Nus essan ina conspiraziun da la speranza.' — il Recovery sco project collectiv cunter l'incapacitaziun istorica."
:::

:::standard{reading_time=3}
Sche ti es stà ditg en tractament psichiatric — onns forsa, decennis — alura ha quai fatg insatge cun tai. Betg mo la malsogna. Era **la rolla**.

## Tge che la rolla ha fatg cun tai

Forsa has ti emprendì:

- Il medi sa il meglier. Mes sentiment quinta damain.
- Jau stoss spetgar. Sin il proxim termin, il proxim medicament, la proxima metoda.
- Jau sun mia diagnosa: „Jau sun Borderlinerin." „Jau sun bipolar."
- Il sanament è insatge che vegn fatg cun mai — betg insatge che jau fatsch.

Quai n'è nagina debladad persunala. Quai è ina **reacziun emprendida** suenter onns en in sistem che lascha pauca controlla.

Patricia Deegan, ina da las vuschs marcantas dal moviment Recovery, ha furmà in pled fitg agid per quai: **„spirit breaking"**. Sistems d'agid pon — savens senza intenziun mala — rumper il sentiment da sai, la vusch, l'autocompetenza d'ina persuna. Betg perquai ch'ils collavuraturs èn mals. Mabain perquai che la logica dal sistem prevesa quai.

## Recovery FROM vs. Recovery IN

Larry Davidson e David Roe distinguan duas lecturas fitg differentas da Recovery:

- **Recovery FROM** — Sanament **DA** ina malsogna. La lectura medicinala: simptoms davent, diagnosa davos tai. Ti es retschavidra u retschavider passiv d'in tractament.
- **Recovery IN** — Sanament **CUN** ina malsogna. La lectura persunala: manar ina vita cuntenta, era sche ils simptoms restan. Ti es la persuna agenta.

Omaduas èn pussaivlas. Omaduas èn valitaivlas. Ma ellas suondan fitg differentas logicas. **Recovery IN è la premissa per che Recovery puss'er daventar efficazi per tai.** Pertge che speranza, finamiras, autoefficacia, senn — tut quai naschan mo nua che ti ta vivas sco insatgi che dastga eleger.

## Ti restas dependenta dad agid — e tuttina subject

Questa spustada n'è nagina clamada da deponer ils medicaments u da terminar il tractament. I n'è nagina critica enviers las persunas spezialistas. I è ina invitaziun da prender tia atgna vusch sco funtauna — **sper** las vuschs professiunalas.

Trais chaussas a la fin:

- **Igl n'è mai memia tard.** Era suenter decennis da tractament èn talas spustadas pussaivlas.
- **I va en pitschens pass.** Ina dumonda la damaun: „Da tge avess jau basegn oz?" basta per cumenzar.
- **Ti has basegn d'allianzas.** Peers. Ina persuna da confidenza. In Recovery College. Nagin n'arriva quai sulet.
:::

:::standard-quiz{id=q-shift-std}
- q: "Tge vul dir Patricia Deegan cun „spirit breaking"?"
  type: multiple-choice
  options:
    - text: "In cas singul rar che gist na capita betg."
      correct: false
    - text: "Co che sistems d'agid pon rumper il sentiment da sai, la vusch e l'autocompetenza — savens senza intenziun mala."
      correct: true
      explanation: "In pled agid ma precis (Deegan 1990)."

- q: "Tge è la differenza tranter Recovery FROM e Recovery IN?"
  type: multiple-choice
  options:
    - text: "FROM è anticà, IN è la nova versiun."
      correct: false
    - text: "FROM = sanament DA ina malsogna (medicinal). IN = sanament CUN ina malsogna (persunal)."
      correct: true
      explanation: "Davidson & Roe 2007. Omaduas èn pussaivlas, ma suondan differentas logicas."

- q: "Tgi è expert u experta per tia vita?"
  type: multiple-choice
  options:
    - text: "Tia squadra da tractament."
      correct: false
    - text: "Ti sez — sper il savair professiunal da las persunas spezialistas."
      correct: true

- q: "Da tge mument davent è memia tard per questa spustada?"
  type: multiple-choice
  options:
    - text: "Suenter 20 onns da tractament."
      correct: false
    - text: "A partir da 60 onns."
      correct: false
    - text: "Mai. Era suenter decennis èn las spustadas pussaivlas."
      correct: true
:::

:::standard-flashcards{id=f-shift-std}
- front: "Spirit Breaking (Deegan)"
  back: "Cur che sistems d'agid — savens senza intenziun mala — rumpan il sentiment da sai, la vusch e l'autocompetenza d'ina persuna."
- front: "Recovery FROM"
  back: "Sanament DA ina malsogna. La lectura medicinala: simptoms davent, diagnosa davos tai."
- front: "Recovery IN"
  back: "Sanament CUN ina malsogna. La lectura persunala: ina vita cuntenta, era sche ils simptoms restan."
- front: "Expert u experta da tia vita"
  back: "Ti enconuschas tai il meglier. Tia experientscha è savair — sper il savair professiunal, betg empè."
- front: "Mai memia tard"
  back: "Recovery n'enconuscha nagina limita d'etad e nagina limita da gravitad. Era suenter decennis pussaivel."
:::



# 12. Sustegn da pairs, Trialog ed EX-IN
{#kap-12 reading_time=5}

## Tge che Peer-Support è

Peer-Support signifitga l'accumpagnament tras persunas che han sezzas fatg l'experientscha da crisas psichicas e las han lavurà tras. En il spazi tudestg-linguistic: accumpagnaders/accumpagnadras dal sanament (Genesungsbegleiter:innen), expertas/experts d'experientscha, peers u collavuraturas/collavuraturs EX-IN [^utschakowski2009] [^exin_de].

Las ragischs van enavos lunsch — en la tradiziun da l'agid d'in agid sez, en il concept WRAP da Mary Ellen Copeland [^copeland1997], en il model tudestg dal Trialog [^bockpriebe2005] ed en l'iniziativa EX-IN a partir dal 2005 [^utschakowski2009].

## Trialog — l'ierta tudestg-linguistica

Il Trialog — il discurs a puntg d'egl tranter persunas pertutgadas, confamigliars e persunas spezialisadas — è vegnì fundà l'onn 1989 a Hamburg da Thomas Bock e sias collegas [^bockpriebe2005]. El è ina contribuziun tudestg-linguistica al moviment internaziunal da Recovery ed ha midà ferm la chira en il spazi D-A-CH [^vonpeter2015].

## Tge che la perscrutaziun mussa

La basa d'evidenza per Peer-Support è oz considerabla. In studi controllà randomisà multicentric cun passa 600 participantas e participants en quatter pajais ha mussà effects significants sin Empowerment e qualitad da vita [^slade2024peer]. Metaanalisas actualas chattan en moda coerenta effects positivs sin l'autoefficacitad ed effects pli pitschens sin la speranza ed Empowerment [^white2024] [^lyons2021]. In studi controllà randomisà tudestg ha er pudì cumprovar effects positivs [^mahlke2017].

Ils facturs d'efficacitad èn: l'experientscha vivida sco anchur da credibilitad, la speranza sco model, la furmaziun d'ina relaziun a puntg d'egl ed ina communicaziun nun-stigmatisanta [^mead2001] [^davidson2012].

Wilma Boevink resumescha quest princip cun ina frasa simpla: il savair d'experientscha che vegn dal moviment da las persunas pertutgadas è da medema valur sco il savair professiunal — ed el furma la basa d'in savair Recovery autentic [^boevink2012].

:::easy{reading_time=2}
Peer-Support vul dir: persunas accumpognan autras persunas cun in'experientscha sumeglianta.

Quai fa bain. La perscrutaziun mussa: sch'insatgi è „passà tras" e stat avant tai, è quai in segn fitg ferm. Quai fa speranza.

En il spazi tudestg-linguistic datti accumpagnaders/accumpagnadras dal sanament cun ina furmaziun (EX-IN).

I dat era il Trialog — discurs tranter persunas pertutgadas, confamigliars e persunas spezialisadas. A puntg d'egl. Senza ch'in/ina saja pli impurtant/a.

Tals discurs datti en bleras citads en Svizra, en Germania ed en Austria.
:::

:::quiz{id=q-12}
- q: "Tge munga EX-IN?"
  type: multiple-choice
  options:
    - text: "Ina diagnosa."
      correct: false
    - text: "Experienced Involvement — furmaziun per accumpagnaders/accumpagnadras dal sanament."
      correct: true
      explanation: "Sviluppà dapi il 2005 a Bremen."

- q: "Tgi discurra a puntg d'egl en il Trialog?"
  type: multiple-choice
  options:
    - text: "Mo persunas spezialisadas."
      correct: false
    - text: "Persunas pertutgadas, confamigliars e persunas spezialisadas ensemen."
      correct: true
      explanation: "Fundà l'onn 1989 da Thomas Bock a Hamburg."

- q: "Tge mussa la perscrutaziun da Peer-Support (Slade et al. 2024)?"
  type: multiple-choice
  options:
    - text: "Nagins effects mesirabels."
      correct: false
    - text: "Effects significants sin Empowerment e qualitad da vita."
      correct: true
:::

:::flashcards{id=f-12}
- front: "EX-IN"
  back: "Experienced Involvement — furmaziun per persunas cun experientscha da psichiatria a daventar accumpagnaders/accumpagnadras dal sanament (dapi il 2005, Bremen). Inspirà da Dorothea Buck."
- front: "Trialog"
  back: "Discurs a puntg d'egl tranter persunas pertutgadas, confamigliars e persunas spezialisadas. Fundà l'onn 1989 da Thomas Bock a Hamburg."
- front: "Peer-Support — facturs d'efficacitad"
  back: "Experientscha vivida sco anchur da credibilitad · speranza sco model · relaziun a puntg d'egl · communicaziun nun-stigmatisanta."
- front: "Mahlke et al. 2017"
  back: "Studi controllà randomisà tudestg davart Peer Support in-cun-in — ha cumprovà effects significants sin Empowerment ed autoefficacitad."
:::

:::standard{reading_time=2}
Peer-Support vul dir: persunas che èn elas sezzas passadas tras ina crisa psichica accumpognan autras — sin l'egliada egala, cun experientscha vivida empè da cun titel professiunal.

En il territori tudestg-lingual numnain nus questas persunas accumpagnaders u accumpagnadras da sanament, expertas u experts d'experientscha u collavuraturs/-as EX-IN. EX-IN stat per „Experienced Involvement" — ina furmaziun naschida il 2005 a Brema, oz ancurada en bleras clinicas, lieus da cussegliaziun e Recovery Colleges.

Trais noziuns èn impurtantas:

- **Peer-Support:** Accumpagnament tras insatgi cun experientscha sumegliainta. Crediblas perquai che vividas.
- **Trialog:** Il discurs sin l'egliada egala tranter persunas pertutgadas, confamigliars e persunas spezialistas — fundà il 1989 a Hamburg da Thomas Bock.
- **EX-IN:** Furmaziun structurada per l'accumpagnament da sanament, inspirada da Dorothea Buck.

Tge ditg la perscrutaziun: in grond studi internaziunal cun passa 600 participants en quatter pajais ha mussà effects signifitgants sin l'empowerment e sin la qualitad da vita. In studi tudestg ha confermà quai. Quai ch'agescha n'è betg in artifizi — i è l'inscunter cun insatgi che po dir: „Jau era er lartg. Ed igl exista in via."

Forsa enconuschas ti sez insatgi tgi che t'ha purtà cun sia istorgia. Forsa daventas ti sez ina giada questa persuna per insatgi auter.
:::

:::standard-quiz{id=q-12-std}
- q: "Tge vul dir EX-IN?"
  type: multiple-choice
  options:
    - text: "Ina nova diagnosa."
      correct: false
    - text: "Experienced Involvement — ina furmaziun per l'accumpagnament da sanament."
      correct: true
      explanation: "Sviluppà dapi il 2005 a Brema, oz ancurà en bleras instituziuns D-A-CH."
    - text: "Ina classa da medicaments."
      correct: false

- q: "Tgi discurra ensemen en il Trialog?"
  type: multiple-choice
  options:
    - text: "Mo persunas spezialistas tranter sai."
      correct: false
    - text: "Persunas pertutgadas, confamigliars e persunas spezialistas — sin l'egliada egala."
      correct: true
      explanation: "Fundà il 1989 a Hamburg da Thomas Bock."
    - text: "Mo persunas pertutgadas sulettas."
      correct: false
:::

:::standard-flashcards{id=f-12-std}
- front: "Peer-Support"
  back: "Accumpagnament tras persunas cun atgna experientscha da crisa. Agescha tras l'experientscha vivida, la speranza e l'egliada egala."
- front: "Trialog"
  back: "Discurs egal tranter persunas pertutgadas, confamigliars e persunas spezialistas. Dapi 1989 (Bock, Hamburg)."
- front: "EX-IN"
  back: "Experienced Involvement — furmaziun per persunas cun experientscha psichiatrica, dapi 2005."
:::



# 13. Recovery Colleges — emprender empè dad esser tractà
{#kap-13 reading_time=5}

Ils Recovery Colleges èn in model britannic ch'è naschì a partir dal 2009 [^perkins2012]. Els n'èn betg clinicas, mabain instituziuns da furmaziun. Els èn gratuits, averts a tuts e tuttas — persunas pertutgadas, confamigliars, persunas spezialisadas e persunas interessadas — ed utilisan la furma pedagogica da la furmaziun per adults empè da la sesida terapeutica.

Dus princips centrals caracteriseschan ils Recovery Colleges [^perkins2012] [^meddings2015]:

- **Furmaziun empè da terapia.** Las participantas e participants èn studentas e students, betg pazientas e pazients. Focus sin resursas e sin imprender, betg sin deficit e diagnosa.
- **Coproducziun (Co-Production).** Mintga curs vegn sviluppà e manà ensemen d'ina persuna spezialisada e d'ina persuna cun experientscha vivida — a puntg d'egl.

## Tge che la perscrutaziun mussa

Hayes e sias collegas dumbran en tut il mund 221 Recovery Colleges en 28 pajais sin tschintg continents [^hayes2023].

Il studi RECOLLECT è enfin ussa l'analisa scientifica la pli vasta dals Recovery Colleges [^henderson2024recollect]. In studi da cohorta retrospectiv our da l'Engalterra cun 1'193 studentas e students dal Recovery College cunter 3'508 persunas da controlla sur 6, 12 e 60 mais ha mussà: reducziun significanta da las hospitalisaziuns psichiatricas, dals dis staziunars e da las consultaziuns d'urgenza — accumpagnà d'in bainstar megliurà [^ronaldson2024].

In'enquista da litteratura sur diesch onns da perscrutaziun dals Recovery Colleges [^theriault2020] conferma effects coerents sin la speranza, l'Empowerment, l'autoefficacitad, l'inclusiun sociala, l'arrivada dals nies e las enconuschientschas davart la sanadad psichica. Crowther e sias collegas mussan ch'era persunas spezialisadas profitan da la collavuraziun en ils Recovery Colleges [^crowther2019].

:::info{type=evidence title="Evidenza en il spazi tudestg-linguistic"}
Datas D-A-CH validadas empiricamain davart l'efficacitad da la chira orientada a Recovery èn naschidas en ils ultims onns.

In studi tudestg controllà randomisà davart l'accumpagnament da pairs cun persunas che han malsognas psichicas grevas [^mahlke2017] ha cumprovà effects significants sin l'Empowerment e l'autoefficacitad.

La directiva S3 da la DGPPN „Psychosoziale Therapien bei schweren psychischen Erkrankungen" (2. ediziun 2019) ha integrà l'orientaziun a Recovery, il Peer-Support ed il Shared Decision-Making sco recumandaziuns [^dgppn2019].

La perscrutaziun dals Recovery Colleges en il spazi tudestg-linguistic crescha — la situaziun da las datas per locaziuns D-A-CH specificas è en construcziun.
:::

En il spazi tudestg-linguistic existan Recovery Colleges tranter auter a Berna [^rcbern], en la Svizra orientala, a Genevra, a Son Gagl ed a Turitg — sco era adina dapli en Germania ed Austria (tranter auter l'Empowerment College Bremen).

:::easy{reading_time=2}
Ils Recovery Colleges èn ina schientscha spezifica da scola. Ma betg ina scola per uffants.

Qua imprendan adults davart la sanadad psichica. Tuts dastgan vegnir: persunas pertutgadas, confamigliars, persunas spezialisadas, persunas interessadas.

Ils curs èn gratuits. Ti na dovras nagina diagnosa.

Mintga curs vegn planisà ensemen: d'ina persuna spezialisada e d'ina persuna cun atgna experientscha. Tuts dus èn medemamain impurtants.

I dat oz passa 220 Recovery Colleges en 28 pajais. Era en Svizra, en Germania ed en Austria.

La perscrutaziun mussa: tgi che frequentescha in Recovery College va silsuenter meglier.
:::

:::quiz{id=q-13}
- q: "Tgi dastga participar ad in Recovery College?"
  type: multiple-choice
  options:
    - text: "Mo persunas cun diagnosa."
      correct: false
    - text: "Persunas pertutgadas, confamigliars, persunas spezialisadas e persunas interessadas — tuts."
      correct: true
      explanation: "Avert per tuts e tuttas. Nagina diagnosa necessaria. Gratuit."

- q: "Tge munga 'Co-Production'?"
  type: multiple-choice
  options:
    - text: "In trick dal cinema."
      correct: false
    - text: "Ina persuna spezialisada ed ina persuna cun experientscha vivida planiseschan ils curs ensemen — a puntg d'egl."
      correct: true

- q: "Tge mussa il studi da cohorta britannic Ronaldson et al. 2024?"
  type: multiple-choice
  options:
    - text: "Nagins effects."
      correct: false
    - text: "Reducziun significanta da las hospitalisaziuns psichiatricas e dals dis staziunars."
      correct: true
:::

:::flashcards{id=f-13}
- front: "Recovery College"
  back: "Instituziun da furmaziun — betg in lieu da tractament. Imprender empè da terapia. Gratuit. Avert per tuts."
- front: "Co-Production"
  back: "Ils curs vegnan sviluppads e manads ensemen d'ina persuna spezialisada e d'ina persuna cun experientscha vivida."
- front: "Efficacitad"
  back: "Hayes 2023: 221 Recovery Colleges en 28 pajais. Ronaldson 2024: damain hospitalisaziuns, dapli bainstar."
:::

:::standard{reading_time=2}
In Recovery College n'è nagina clinica. I è ina scola per persunas creschidas — averta a tut quels che vulan emprender insatge sur da la sanadad psichica: persunas pertutgadas, confamigliars, persunas spezialistas, interessadas. Ils curs èn gratuits, ti n'has betg basegn d'ina diagnosa, na d'in renviament e na d'ina annunzia tar il medi da chasa.

Dus princips portan quest model:

- **Furmaziun empè da terapia.** Ti es studenta u student, betg paziente u pazient. En il center stattan l'emprender, las resursas e las dumondas — betg la diagnosa ed il deficit.
- **Coproducziun (Co-Production).** Mintga curs vegn sviluppà e fatg ensemen d'ina persuna spezialista e d'ina persuna cun experientscha vivida. Omaduas funtaunas da savair èn da medema valur.

L'emprim Recovery College è naschì il 2009 a Londra. Oz dattan ils passa 220 en tut il mund en 28 pajais — er en Svizra (tranter auter Berna, Svizra orientala, Genevra, Son Gagl, Turitg), en Germania ed en Austria.

Il pli grond studi a quest reguard, RECOLLECT or da l'Engalterra, ha cumpareglià bunamain 1200 studentas e students da Recovery Colleges cun passa 3500 persunas da controlla durant tschintg onns. La consequenza: damain ospitalisaziuns psichiatricas, damain emergenzas, dapli bainstar. Diesch onns da perscrutaziun confermeschan: la speranza, l'empowerment, l'inclusiun sociala e l'autoefficacia crescha messurablamain.

Forsa è in Recovery College en tia vischinanza in emprim lieu nua che ti na stos betg t'explitgar — mabain dastgas emprender.
:::

:::standard-quiz{id=q-13-std}
- q: "Tgi dastga ir en in Recovery College?"
  type: multiple-choice
  options:
    - text: "Mo persunas cun diagnosa psichiatrica."
      correct: false
    - text: "Tuts — persunas pertutgadas, confamigliars, persunas spezialistas, interessadas. Senza diagnosa."
      correct: true
      explanation: "Recovery Colleges èn averts, gratuits e na dovran nagin renviament."
    - text: "Mo persunas spezialistas."
      correct: false

- q: "Tge vul dir Co-Production?"
  type: multiple-choice
  options:
    - text: "Tegnair pliras pelliculas ensemen."
      correct: false
    - text: "Ils curs vegnan planisads ensemen d'ina persuna spezialista e d'ina experta d'experientscha — sin l'egliada egala."
      correct: true
      explanation: "Quai è il princip central dals Recovery Colleges."
    - text: "In video da furmaziun da participar."
      correct: false
:::

:::standard-flashcards{id=f-13-std}
- front: "Recovery College"
  back: "Lieu da furmaziun empè da lieu da tractament. Gratuit, avert per tuts. Emprender empè da terapia."
- front: "Co-Production"
  back: "Mintga curs vegn furmà ensemen d'ina persuna spezialista e d'ina persuna cun experientscha vivida."
- front: "Effect (RECOLLECT)"
  back: "Damain ospitalisaziuns, damain emergenzas, dapli bainstar — cumprovà sur tschintg onns."
:::



# 14. Posiziun infurmada da trauma
{#kap-14 reading_time=3}

:::info{type=warmth title="Avant che ti legias inavant"}
Quest chapitel numna violenza, sviament e discriminaziun. Sche ti has fatg experientschas grevas, po la lectura far surventir bler. Quai è normal. Legia tar tia velocitad. Fa paussas. Sgola al proxim chapitel sche è memia oz. Sche ti basegnas sustegn ussa: il Chapitel 20 (Crisa) è mo paucs taps lontan — u clama en Svizra **143**, en Germania **0800 111 0 111**, en Austria **142**.
:::

Bleras persunas che vegnan chiradas en la psichiatria han fatg en lur istorgia experientschas traumaticas — violenza, abus, negligientscha, discriminaziun. Era ils sojourns psichiatrics sezs pon avair in effect retraumatisant [^felitti1998].

In'attitudine infurmada sin trauma è perquai ina part integrala da la pratica orientada a Recovery. L'autoritad americana SAMHSA [^samhsa2014trauma] ha definì sis princips directivs per quai:

- **Segirezza** — fisica ed emoziunala.
- **Confidenza e transparenza** — infurmaziun clera, rom da fidar.
- **Peer-Support** — l'experientscha vivida sco resursa.
- **Collavuraziun e reciprocitad** — reducir las ierarchias.
- **Empowerment, vusch ed elecziun** — decisiun ed autodeterminaziun.
- **Sensibilitad culturala, istorica e da gener.**

Quests princips valan era en in workbook digital. Ti decidas tge che ti legias cura, tge che ti memoriseschas, tge che ti stizzas.

:::easy{reading_time=1}
Bleras persunas en la psichiatria han vivì chaussas grevas. Violenza. Abus. Negligientscha.

Mintgatant è era il sojourn en la clinica sez stentus.

Perquai è in'attitudine sensibla al trauma impurtanta. Quai vul dir:

- Segirezza emprim.
- Crear confidenza.
- Communitgar onestamain.
- Nagin decida sur ti via.

Questa attitudine vala era en questa app. Ti decidas tge che ti legias. Tge che ti memoriseschas. Tge che ti stizzas.
:::

:::quiz{id=q-14}
- q: "Quants princips ha SAMHSA definì per la chira infurmada sin trauma?"
  type: multiple-choice
  options:
    - text: "Trais"
      correct: false
    - text: "Sis"
      correct: true
    - text: "Diesch"
      correct: false

- q: "Tge NU n'è in princip da la pratica infurmada sin trauma?"
  type: multiple-choice
  options:
    - text: "Segirezza"
      correct: false
    - text: "Severitad"
      correct: true
      explanation: "La severitad na fa betg part dals princips da SAMHSA."
    - text: "Peer-Support"
      correct: false
:::

:::flashcards{id=f-14}
- front: "Sis princips (SAMHSA 2014)"
  back: "Segirezza · confidenza & transparenza · Peer-Support · collavuraziun · Empowerment · sensibilitad culturala/da gener."
- front: "Retraumatisaziun"
  back: "Cura che ils sistems d'agid sezs agiunschan in trauma supplementar. La pratica infurmada sin trauma vul activamain impedir quai."
- front: "Studi ACE (Felitti 1998)"
  back: "Cumprova: las experientschas traumaticas da l'uffanza èn fitg derasadas e marcheschan la sanadad la vita en lunga."
:::

:::standard{reading_time=2}
Bleras persunas che vegnan tgiradas en la psichiatria portan cun sai grevas experientschas — violenza, abus, negligientscha, discriminaziun, perditas. Mintgatant agescha era la dimora psichiatrica sezza grevamain u retraumatisamain. Ina atgnadad infurmada dal trauma prenda quai en serius senza ta sfurzar da mussar plajas che ti na vuls betg mussar.

L'autoritad da sanadad americana SAMHSA ha descrit sis princips che portan in accumpagnament sensibel al trauma:

- **Segirezza** — corporala ed emoziunala. Nagin duai esser en in lieu nua ch'el na sa senta betg segir.
- **Confidenza e transparenza** — infurmaziun cleara, in rom fidaivel, naginas surpraisas sur da tia testa.
- **Peer-Support** — l'experientscha vivida sco punt fidaivel.
- **Cooperaziun sin l'egliada egala** — reducir las gerarchias, betg las engrondir.
- **Empowerment, vusch ed elecziun** — ti decidas cun. Adina.
- **Sensibladad culturala, istorica e per il gener** — tia istorgia è part da quai che ti es.

Quels princips valan era en in workbook digital. Ti decidas tge che ti legias e cura. Tge che ti memoriseschas. Tge che ti stizzas. Sche in chapitel è memia bler, serra el. Returna cur che ti es prest. U lascha el cumplettamain davent.

Infurmà dal trauma na vul betg dir: emprim elavurar il trauma, lura viver. I vul dir: tut quai che capita qua resguarda quai ch'ti has gia purtà.
:::

:::standard-quiz{id=q-14-std}
- q: "Quants princips ha SAMHSA definì per la pratica infurmada dal trauma?"
  type: multiple-choice
  options:
    - text: "Trais."
      correct: false
    - text: "Sis."
      correct: true
      explanation: "Segirezza, confidenza, Peer-Support, cooperaziun, empowerment, sensibladad culturala."
    - text: "Diesch."
      correct: false

- q: "Tgi decida tge ch'è memorisà en questa app?"
  type: multiple-choice
  options:
    - text: "L'app."
      correct: false
    - text: "Ti. Adina."
      correct: true
      explanation: "L'autodeterminaziun sur da tias datas è expressiun da l'atgnadad sensibla al trauma."
:::

:::standard-flashcards{id=f-14-std}
- front: "Sis princips (SAMHSA)"
  back: "Segirezza · confidenza & transparenza · Peer-Support · cooperaziun · empowerment · sensibladad culturala e per il gener."
- front: "Segirezza emprim"
  back: "Nagin decida sur da tia testa. Ti determineschas il tempo, la profunditad ed il stop."
- front: "Retraumatisaziun"
  back: "Cur che sistems d'agid blessan ultra. La pratica infurmada dal trauma vul activamain evitar quai."
:::



# 15. Recovery e dretgs umans
{#kap-15 reading_time=4}

Recovery n'è betg mo ina dumonda professiunala, mabain era ina dumonda dals dretgs umans. La Convenziun da l'UNO davart ils dretgs da persunas cun impediments garantescha a persunas cun impediments — inclus impediments psichics — il dretg da l'autodeterminaziun, da l'inclusiun e da la decisiun sustegnida [^uncrpd2006]. La Germania ha ratifitgà la convenziun l'onn 2009, l'Austria l'onn 2008, la Svizra l'onn 2014.

L'OMS ha lantschà l'iniziativa QualityRights l'onn 2019 [^who2019] ed ha publitgà l'onn 2021 la directiva „Guidance on Community Mental Health Services" [^who2021]. Recovery vegn numnà là sco princip central da la chira moderna.

Concret munga quai: reducir la sforza, mai metter la diagnosa sur la persuna, purtar agid là nua che las persunas n'han basegn — ed integrar las persunas pertutgadas sco partenarias e partenaris cun ils medems dretgs en tut las decisiuns da chira.

:::info{type=example title="Exempel: Dialog avert (Open Dialogue)"}
En la Laponia dal vest finlandaisa ha Jaakko Seikkula sviluppà il concept dal Dialog avert ils onns 1980.

En cas da crisas psicoticas acutas vegnan integradas entaifer 24 uras tut las persunas da referenza impurtantas. Tut las discussiuns han lieu ensemen, tut las decisiuns vegnan tractadas en moda transparenta.

Ils resultats a lunga vista èn extraordinaris: en la Laponia dal vest èn passa 80 % da las persunas pertutgadas da l'emprima psicosa returnadas entaifer dus onns en il lavur u en la furmaziun. In studi sur 19 onns ha confermà la stabilitad dals resultats a lunga vista [^seikkula2011] [^bergstroem2018].
:::

:::easy{reading_time=1}
Recovery è era in dretg uman.

L'UNO ha fatg ina convenziun l'onn 2006. Ella di: persunas cun impediments han il dretg da decider sezzas. Era persunas cun malsognas psichicas.

L'OMS di l'onn 2021: la psichiatria duai respectar quests dretgs. Betg il medi duai decider sulet. Mabain tuts ensemen.

Quai vala era en Svizra, en Germania ed en Austria.
:::

:::quiz{id=q-15}
- q: "Tge è la convenziun da l'UNO davart ils dretgs da persunas cun impediments?"
  type: multiple-choice
  options:
    - text: "Ina metoda da tractament."
      correct: false
    - text: "La convenziun da l'UNO davart ils dretgs da persunas cun impediments dal 2006."
      correct: true
      explanation: "La Svizra l'ha ratifitgada il 2014, la Germania il 2009, l'Austria il 2008."

- q: "Tge di l'OMS l'onn 2021?"
  type: multiple-choice
  options:
    - text: "Recovery è nunscientific."
      correct: false
    - text: "La chira duai esser centrada sin la persuna e basada sin ils dretgs."
      correct: true
:::

:::flashcards{id=f-15}
- front: "Convenziun UNO 2006"
  back: "Convenziun da l'UNO davart ils dretgs da persunas cun impediments. Garantescha l'autodeterminaziun — era cun impediments psichics. CH ratifitgada 2014, DE 2009, AT 2008."
- front: "WHO QualityRights"
  back: "Iniziativa da l'OMS dapi il 2019. Directiva 2021 'Guidance on Community Mental Health Services': centrada sin la persuna, basada sin ils dretgs, orientada a Recovery."
- front: "Open Dialogue (Seikkula)"
  back: "Laponia dal vest dapi ils onns 1980. Passa 80 % da las persunas pertutgadas da l'emprima psicosa returnan en il lavur u en la furmaziun entaifer 2 onns. Confermà en il follow-up sur 19 onns."
:::

:::standard{reading_time=2}
Recovery n'è betg mo ina dumonda professiunala — i è era ina dumonda dals dretgs umans. Tgi ch'è malsaun psichicamain na perda betg il dretg dad esser udì, integrà e prendì en serius.

La **Convenziun da l'ONU dals dretgs da las persunas cun impediment** (UN-BRK) dal 2006 garantescha a tut las persunas cun impediment — corporal, mental, psichic — il dretg da l'autodeterminaziun, da l'inclusiun e da la decisiun sustegnida. La Svizra l'ha ratifitgà il 2014, la Germania il 2009, l'Austria il 2008. Quai è dretg vigent.

L'**Organisaziun mundiala da sanadad (OMS)** ha dà pais a quai cun l'iniziativa QualityRights il 2019 ed ha publitgà il 2021 la directiva „Guidance on Community Mental Health Services". Recovery stat là sco princip central da la chira moderna — sper la persuncentralitad ed il basament sin ils dretgs.

Tge vul quai dir concretamain?

- Reducir il sforz — nua che pussaivel.
- Mai metter la diagnosa surora la persuna.
- Purschir sustegn nua che las persunas vivan.
- Integrar las persunas pertutgadas sco partenarias egalas en las decisiuns da chira.

In exempel per quai è l'**Open Dialogue** or da la Finlanda. En crisas psicoticas acutas vegnan integradas entaifer 24 uras tut las persunas da referenza impurtantas. Passa 80 % da las persunas pertutgadas cun emprima psicosa èn returnadas entaifer dus onns en la lavur u en la furmaziun — studis a lunga vista confermeschan la stabilitad da quels resultats.

Ti na stos betg savair tuts quels rams da memoria. Ma igl è bun da savair: sche ti dis „Jau vegl decider cun", stas ti sin in fundament dretgal solid.
:::

:::standard-quiz{id=q-15-std}
- q: "Tge garantescha la Convenziun da l'ONU dals dretgs da las persunas cun impediment era a las persunas cun malsognas psichicas?"
  type: multiple-choice
  options:
    - text: "Ina sanitad svelta."
      correct: false
    - text: "Autodeterminaziun, inclusiun e decisiun sustegnida."
      correct: true
      explanation: "UN-BRK dal 2006. Ratifitgà: CH 2014, DE 2009, AT 2008."
    - text: "Ina determinada furma da terapia."
      correct: false

- q: "Tge ditg la directiva da l'OMS 2021 davart la chira psichiatrica?"
  type: multiple-choice
  options:
    - text: "Ella duai esser persuncentrala e basada sin ils dretgs."
      correct: true
      explanation: "Recovery vegn numnà là sco princip central."
    - text: "Ella duai esser pussaivlamain staziunara e da lunga durada."
      correct: false
    - text: "Ella duai capitar senza la participaziun da las persunas pertutgadas."
      correct: false
:::

:::standard-flashcards{id=f-15-std}
- front: "UN-BRK 2006"
  back: "Convenziun da l'ONU dals dretgs da las persunas cun impediment. Garantescha l'autodeterminaziun — era cun impediments psichics. Ratifitgà: CH 2014, DE 2009, AT 2008."
- front: "WHO QualityRights"
  back: "Iniziativa da l'OMS dapi 2019. Directiva 2021: persuncentrala, basada sin ils dretgs, orientada vid Recovery."
- front: "Open Dialogue"
  back: "Model finlandais. Passa 80 % da las persunas cun emprima psicosa èn returnadas entaifer 2 onns en la lavur u en la furmaziun."
:::



# 16. Malsogna u Recovery: duas vistas
{#kap-16 reading_time=3}

Recovery è dapli che ina nova metoda — è ina midada da perspectiva [^knuf2026] [^slade2014] [^ameringschmolke2012].

:::table{name="Paradigmenvergleich"}
| Vista orientada a la malsogna | Vista orientada a Recovery |
|----------------------------|---------------------------|
| Diagnosa en il center | Persuna en il center |
| Absenza da sintoms sco nies | Vita cun senn sco nies |
| Expert/a = persuna spezialisada | Dubla expertisa: savair professiunal + savair d'experientscha |
| Plan da tractament | Plan da Recovery + plan da tractament |
| Compliance | Shared Decision-Making |
| Egliada sin il deficit (patogenesa) | Egliada sin las resursas (salutogenesa) |
| Via linerica da sanament | Via individuala, nun-linerica |
| La persuna spezialisada porta la speranza sulet/a | La speranza vegn partida ed emprestada |
| Pazient/a / client/a | Persuna / persuna cun experientscha / student/a |
:::

La colonna a dretga na remplazza betg quella a sanestra. Tuttas duas colonnas han lur plaz — il paradigma orientà a Recovery amplifitgescha il paradigma medicinal, na remplazza betg el [^slade2014].

Amering e Schmolke accentueschan in punct ch'è savens trasvis: la pratica orientada a Recovery n'è betg in modul supplementar sur. Ella è in'autra moda da producir savair — tras la connexiun dal savair professiunal e da l'experientscha vivida sco funtaunas da medema valur [^ameringschmolke2012].

:::easy{reading_time=2}
I dat duas vistas sin la malsogna psichica:

**Vista veglia:**
- La malsogna stat en il center.
- Nies: sintoms ord via.
- Il medi sa il meglier.
- Ti es pazient/a.

**Vista Recovery:**
- La persuna stat en il center.
- Nies: ina buna vita.
- Ti e la persuna spezialisada decidais ensemen.
- Ti es persuna cun experientscha.

La vista veglia n'è betg fauss. Ella gida savens. Ma ella na basta betg sulet.

La vista Recovery amplifitgescha la vista veglia. Ella na la remplazza betg.
:::

:::quiz{id=q-16}
- q: "Remplazza la vista Recovery la vista medicinala?"
  type: true-false
  correct: false
  explanation: "Na — ella l'amplifitgescha. Tuttas duas han lur plaz."

- q: "Tge stat en il center da la vista Recovery?"
  type: multiple-choice
  options:
    - text: "La diagnosa"
      correct: false
    - text: "La persuna"
      correct: true
:::

:::flashcards{id=f-16}
- front: "Midada da paradigma"
  back: "Da l'egliada sin il deficit (patogenesa) a l'egliada sin las resursas (salutogenesa) — senza abandunar la vista medicinala."
- front: "Compliance vs. Shared Decision-Making"
  back: "Compliance = ti suondas. Shared Decision-Making = vus decidais ensemen."
- front: "Sintesa dal savair"
  back: "La pratica orientada a Recovery connecta il savair professiunal e l'experientscha vivida sco funtaunas da medema valur (Amering & Schmolke 2012)."
:::

:::standard{reading_time=2}
Recovery è dapli ch'ina nova metoda. I è ina midada da perspectiva — in'autra moda da guardar la crisa psichica ed il sanament.

La **vista orientada vid la malsogna** metta la diagnosa en il center. La finamira è la libertad dals simptoms. La persuna spezialista è l'experta. Ti suondas in plan da tractament. La vista guarda sin quai che manca u ch'è disturbà — sin il deficit.

La **vista orientada vid Recovery** metta la persuna en il center. La finamira è ina vita plain senn — cun u malgrà ils simptoms. Ils experts èn dus: la persuna spezialista E ti sezza. Las decisiuns vegnan prendidas ensemen (Shared Decision-Making). La vista guarda sin las resursas, la speranza, la colliaziun.

Qualche pèr da noziuns mussan la differenza:

- Diagnosa en il center → persuna en il center
- Libertad dals simptoms sco finamira → vita cun senn sco finamira
- Compliance → Shared Decision-Making
- Vista da deficit (patogenesa) → vista da resursas (salutogenesa)
- Via linear da sanament → via individual, betg linear
- Paziente/pazient → persuna / persuna cun experientscha / studenta-/student

Impurtant: La colonna a dretga na sopprima betg quella a sanestra. Omaduas han lur plaz. Medicaments pon gidar. Diagnosas pon orientar. Ina clinica po esser in lieu segir. Ma quai sulet na basta betg — Recovery ingrondescha il maletg medicinal cun tia vusch, cun tias valurs, cun tes senn.

Amering e Schmolke al portan a la finamira: la pratica orientada vid Recovery n'è betg in modul supplementar sur il rest. Ella è in'autra moda da producir savair — tras la colliaziun da savair professiunal ed experientscha vivida sco funtaunas da medema valur.
:::

:::standard-quiz{id=q-16-std}
- q: "Sopprima la vista da Recovery la vista medicinala?"
  type: multiple-choice
  options:
    - text: "Gea, ella la sopprima cumplettamain."
      correct: false
    - text: "Na — ella la ingrondescha. Omaduas han lur plaz."
      correct: true
      explanation: "Recovery è ina midada da perspectiva, betg ina renunzia al savair medicinal."
    - text: "Na, ella stat en cuntradicziun a quella."
      correct: false

- q: "Tge stat en la vista da Recovery en il center?"
  type: multiple-choice
  options:
    - text: "La diagnosa."
      correct: false
    - text: "La persuna — cun sia istorgia, cun sias valurs, cun ses senn."
      correct: true
      explanation: "La diagnosa orientescha, ma na ta definescha betg."
    - text: "La clinica."
      correct: false
:::

:::standard-flashcards{id=f-16-std}
- front: "Midada da paradigma"
  back: "Da la vista da deficit (patogenesa) a la vista da resursas (salutogenesa) — senza abandunar la vista medicinala."
- front: "Compliance vs. Shared Decision-Making"
  back: "Compliance = ti suondas. Shared Decision-Making = vus decidais ensemen."
- front: "Duas expertisas"
  back: "Savair professiunal E experientscha vivida èn funtaunas da savair da medema valur."
:::



# 17. Trais frasas per tai
{#kap-17 reading_time=3}

Ti n'es betg tia diagnosa. Ti es ina persuna cun in'istorgia, cun abilitads, cun valurs, cun relaziuns. Ina diagnosa po esser in'orientaziun — ella n'è mai tutta la vardad sur da tai.

## Trais frasas che chasan savens en il moviment Recovery

- Ti es experta u expert da tia vita. Tia experientscha è savair.
- Ti na stos betg purtar tut sulet/a. Tschertga ti allianzas — peers, persunas spezialisadas, persunas da confidenza.
- Ti dastgas decider sez tempo e direcziun. In pass enavos n'è betg in nuncussegn.

## Tge che la perscrutaziun po dar a tai

La speranza è in predictur dal sanament [^schrank2012]. Il Peer-Support ha in effect mesirabel sin l'autoefficacitad [^slade2024peer] [^mahlke2017]. La participaziun ad in Recovery College reducescha ils custs da chira posteriurs ed augmenta il bainstar [^ronaldson2024]. L'autostigma sa midar [^yanos2015].

:::reflection{id=7 title="Tes emprim pass"}
- Tgi pudessas ti contactar questa emna che ta tadlass, senza giuditgar?
- Tge pitschna acziun realisabla pudess esser in'anchur da speranza per ils proxims set dis?
- Tge sectur dal model CHIME — u da la trias Speranza-Pussanza-Senn — duai survegnir in zic dapli attenziun questa emna?
:::

:::easy{reading_time=1}
Ti n'es betg tia diagnosa. Ti es ina persuna.

Trais frasas impurtantas:

- Ti enconuschas tia vita il meglier.
- Ti na stos betg purtar tut sulet/a.
- Ti dastgas decider tes tempo.

Ils pass enavos fan part. Els n'èn betg in nuncussegn.
:::

:::quiz{id=q-17}
- q: "Tge munga 'en Recovery'?"
  type: multiple-choice
  options:
    - text: "Ti es sanada/sanà."
      correct: false
    - text: "Ti es sin via — in process, betg in stadi."
      correct: true

- q: "È in pass enavos in nuncussegn?"
  type: true-false
  correct: false
  explanation: "Na — ils pass enavos fan part dal decurs nun-lineric da Recovery."
:::

:::flashcards{id=f-17}
- front: "Ti es expert/a da tia vita"
  back: "Nagin enconuscha tia experientscha uschè bain sco ti. Tia vusch quinta — da medema valur sco il savair professiunal."
- front: "Tempo & direcziun"
  back: "Ti decidas tuts dus. Recovery n'è ni mesirabel ni cumparegliabel."
:::

:::standard{reading_time=2}
Ti n'es betg tia diagnosa. Ti es ina persuna cun ina istorgia, cun abilitads, cun valurs, cun relaziuns. Ina diagnosa po esser ina orientaziun — ella n'è mai la vardad cumpletta sur da tai.

Trais frasas che crodan adina puspè en il moviment Recovery — e ch'i vulain dar avant:

- **Ti es experta u expert da tia vita.** Tia experientscha è savair. Nagin n'enconuscha tia respiraziun, tias notgs, tias speranzas uschia sco ti. Questa vusch quinta — egala a mintga savair professiunal.
- **Ti na stos betg purtar tut suletta u sulet.** Tschertga allianzas. Peers, persunas spezialistas, persunas da confidenza, confamigliars, ina gruppa d'autagid, in Recovery College. La speranza dastgas ti emprestar fin che ti la sentas puspè sez.
- **Ti dastgas determinar il tempo e la direcziun.** Recovery n'è betg messurabel e betg comparabel. In sturnim n'è nagina fallida — el tutga tar il via betg linear. Mintgatant è er ina pausa progress.

Tge che la perscrutaziun ta po dar: la speranza è in predictur dal sanament. Il Peer-Support rinfortga messurablamain l'autoefficacia. Ils Recovery Colleges bassan las ospitalisaziuns e auzan il bainstar. L'auto-stigma sa lascha midar.

Questas trais frasas n'èn betg in program da lavurar via. Ellas èn plitost sco trais crappas che ti mettas en il satgun. Ti las prendas ord cur che ti las dovras.

Forsa oz. Forsa mo en in mez onn.
:::

:::standard-quiz{id=q-17-std}
- q: "Tge vul dir 'in Recovery'?"
  type: multiple-choice
  options:
    - text: "Ti es guaribel cumplettamain."
      correct: false
    - text: "Ti es sin via — in process, betg in stadi."
      correct: true
      explanation: "Recovery è in via persistent, betg in punct da finamira."
    - text: "Ti es senza simptoms."
      correct: false

- q: "È in sturnim ina fallida?"
  type: multiple-choice
  options:
    - text: "Gea, alura è il via fallì."
      correct: false
    - text: "Na — el tutga tar il decurs betg linear da Recovery."
      correct: true
      explanation: "Recovery curra raramain linear. Pausas e sturnims èn part dal via."
    - text: "Forsa — tenor co grond ch'el è."
      correct: false
:::

:::standard-flashcards{id=f-17-std}
- front: "Trais frasas"
  back: "1) Ti es expert da tia vita. 2) Ti na stos betg purtar sulet. 3) Ti determineschas tempo e direcziun."
- front: "Sturnim"
  back: "Nagina fallida. El tutga tar il via betg linear."
- front: "Emprestar la speranza"
  back: "Sche ti sez na sentas nagina speranza, dastgas ti la emprestar dad auters — fin che ti l'has puspè sezza."
:::



# 18. Lingua e posiziun — pertge che ils pleds importan
{#kap-18 reading_time=3}

La lingua orientada a Recovery n'è betg cosmetica. Ella mida tgi che vegn renconuschì sco subject en in lieu — e tgi che daventa l'object d'in tractament [^ameringschmolke2012] [^knuf2026].

## Tge che nus evitain — e tge che nus din empè

En il discurs tudestg-linguistic da Recovery èn s'impostas ina rorta da reglas linguisticas concretas [^ameringschmolke2012] [^knuf2026] [^slade2013]:

- „Il/la schizofren/a" → meglier: „persuna cun la diagnosa schizofrenia" (lingua centrada sin la persuna).
- „Pazient/a" / „client/a" en il context da furmaziun → meglier: „student/a", „participant/a", „persuna cun experientscha da crisa".
- „Cronic", „nunsanabel" → evitar. Tuts dus terms èn empiricamain dubius e franan cumprovadamain il sanament.
- „Compliance" → meglier: „adesiun terapeutica", anc meglier: „decisiun cumina".
- „Vesair la malsogna" → meglier: „atgna chapientscha da la malsogna".
- „Recovered" → en rumantsch: „en Recovery" (term da process).
- „Deficit", „purtader/a da sintoms" → meglier: „resursas", „experientscha da vita", „scussa da l'olma".

La lingua ta mida era tai sez. Tgi che cumenza a dir „en Recovery", pensa pli svelt en processus empè da stadis fixads — e fa cun quai savens l'emprim pass impercepitbel.

:::easy{reading_time=1}
Ils pleds midan la realitad. In pèr exempels:

- Betg: „malsaun/a cronic/a" → meglier: „viva cun la diagnosa"
- Betg: „Compliance" → meglier: „decisiun cumina"
- Betg: „schizofren/a" → meglier: „persuna cun schizofrenia"
- Betg: „sanada/sanà" → meglier: „en Recovery"

La lingua n'è betg tut. Ma ella mida savens il cumenzament.
:::

:::quiz{id=q-18}
- q: "Tge formulaziun è centrada sin la persuna (person-first)?"
  type: multiple-choice
  options:
    - text: "Il borderliner"
      correct: false
    - text: "Persuna cun diagnosa borderline"
      correct: true

- q: "Tge term duess esser evità?"
  type: multiple-choice
  options:
    - text: "Persuna cun experientscha da crisa"
      correct: false
    - text: "Cronicamain nunsanabel"
      correct: true
      explanation: "Empiricamain dubius e cumprovadamain franant il sanament."
:::

:::flashcards{id=f-18}
- front: "Lingua centrada sin la persuna (person-first)"
  back: "Diagnosa suenter la persuna, betg avant ella. 'Persuna cun schizofrenia' empè da 'schizofren'."
- front: "en Recovery"
  back: "Il term da process. Empè da 'sanà' u 'malsaun' — sco ina via che cuntinuescha."
- front: "Evitar 'Compliance'"
  back: "Empè da 'Compliance' (ti suondas instrucziuns) plitost 'decisiun cumina' u 'adesiun terapeutica'."
:::

:::standard{reading_time=2}
Ils pleds n'èn betg innocents. Els midan tgi ch'è renconuschì sco persuna en in lieu — e tgi che daventa object d'in tractament. La lingua orientada vid Recovery n'è perquai nagina cosmetica. Ella è atgnadad.

En il discurs Recovery tudestg-lingual èn sa stabilidas reglas linguisticas concretas. Qualche exempel:

- „Il schizofren" → meglier: „persuna cun la diagnosa schizofrenia" (**Person-first-Language**).
- „Paziente/pazient" / „client/clienta" en il context da furmaziun → meglier: „studenta/student", „participant/participanta", „persuna cun experientscha da crisa".
- „Cronic", „incurabel" → evitar. Omaduas noziuns èn dubiusas empiricamain e dischognan demussablamain il sanament.
- „Compliance" → meglier: „Aderenza terapeutica" — anc meglier: „decisiun cuminaivla".
- „Cumprenida da malsogna" → meglier: „atgna cumprenida da la malsogna".
- „Guarì" / „recovered" → en rumantsch: „in Recovery" — sco process, betg sco stadi final.
- „Deficit", „purtader da simptoms" → meglier: „resursa", „experientscha da vita", „commoziun da l'olma".

Quels chambis n'èn betg simplas dumondas d'etichetta. Tgi che cumenza a dir „in Recovery" pensa pli svelt en process empè da en stadis fixads. Tgi che di „persuna cun diagnosa" vesa la persuna emprim e la diagnosa suenter. Quai mida savens gist quel pass nunpussibel da remartgar, cun il qual cumenza insatge da nov.

La lingua mida era tai sezza. Co ti discurras sur da tai, formescha co ti pensas sur da tai. Ti na stos betg emprender tut quels pleds dal medem mument. Ma forsa udis ti en ils proxims dis cun autras ureglias — quai che medis, confamigliars, terapeutas, ti sez disch.

E sch'insatge ta fa mal: ti dastgas dir quai.
:::

:::standard-quiz{id=q-18-std}
- q: "Tge furmulaziun è Person-first?"
  type: multiple-choice
  options:
    - text: "Il borderliner."
      correct: false
    - text: "Persuna cun diagnosa Borderline."
      correct: true
      explanation: "Emprim la persuna, lura la diagnosa. Quai è la lingua Person-first."
    - text: "La malsogna psichica."
      correct: false

- q: "Tge noziun duai vegnir evitada?"
  type: multiple-choice
  options:
    - text: "Persuna cun experientscha da crisa."
      correct: false
    - text: "Cronic incurabel."
      correct: true
      explanation: "Dubius empiricamain e demussablamain inhibent dal sanament."
    - text: "In Recovery."
      correct: false
:::

:::standard-flashcards{id=f-18-std}
- front: "Lingua Person-first"
  back: "La diagnosa suenter la persuna — betg avant ella. „Persuna cun schizofrenia" empè da „schizofren"."
- front: "In Recovery"
  back: "La noziun da process en rumantsch. Empè da „guarì" u „cronic" — sco via persistent."
- front: "Evitar la compliance"
  back: "Empè da „compliance" (ti suondas) pli gugent „decisiun cuminaivla" u „aderenza terapeutica"."
:::



# 19. Co duvrar quest workbook
{#kap-19 reading_time=2}

Quest workbook digital n'è betg in manual. El è in accumpagnader:

- Prenda tes temp. Ina pagina al di basta.
- Sajas onest/a cun tatez. Ti decidas tge che vegn memorisà u parti.
- Sigl. Suonda quai che ta tutga.
- Repetescha. La medema dumonda sa lescha autramain en trais mais.
- Parta, sche ti vuls — cun ina persuna da confidenza, cun in accumpagnament da Peer, en ina gruppa.

## Protecziun da datas ed autodeterminaziun

Tut quai che ti registreschas en questa app appartegna a tai. Ti decidas sche insatge vegn sincronisà, memorisà u stizzà. Las endataziuns èn criptadas. Ina stizzada cumplaina da las datas è pussaivla en mintga mument. Questa architectura d'autodeterminaziun n'è betg in detagl tecnic, mabain l'expressiun da l'attitudine orientada a Recovery da quest workbook [^who2021] [^samhsa2014trauma] [^uncrpd2006].

:::easy{reading_time=1}
Uschia duvras ti questa app:

- Prenda tes temp. Ina pagina al di basta.
- Sajas onest/a cun tatez.
- Sigl da chapitel a chapitel.
- Returna. La medema dumonda sa lescha pli tard autramain.
- Parta, sche ti vuls.

Tias datas appartegnan a tai. L'app memorisescha mo quai che ti vuls. Ti dastgas stizzar tut. En mintga mument.
:::

:::quiz{id=q-19}
- q: "Ston ils chapitels vegnir legids en l'urden?"
  type: true-false
  correct: false
  explanation: "Na — sigl, sco quai ch'è bun per tai."

- q: "Tgi decida tge che vegn memorisà?"
  type: multiple-choice
  options:
    - text: "L'app"
      correct: false
    - text: "Ti"
      correct: true
:::

:::flashcards{id=f-19}
- front: "Protecziun da datas en questa app"
  back: "Tias datas appartegnan a tai. Criptadas. Ti decidas tge che vegn sincronisà, memorisà u stizzà. Stizzabel en mintga mument."
- front: "Moda da lavurar"
  back: "Ina pagina al di. Sigl pussaibel. Repetiziun giavischada. Partir facultativ."
:::

:::standard{reading_time=2}
Quest workbook n'è nagin manual da scola. I è in accumpagnader — e ti determineschas co ch'el t'accumpogna.

Qualche referiment ch'è sa cumprovà:

- **Prenda temp.** Ina pagina al di basta. Mintgatant basta in tschert. I n'exista nagin tempo che ti stoppias attegnair.
- **Sajas onest cun tai.** Ti na stos demussar nagut a nagin — er betg a l'app. Tias endataziuns èn per tai.
- **Sigli.** Suonda a quai che ta tutga. Ti na stos betg leger en la successiun.
- **Repetescha.** La medema dumonda da reflexiun sa lescha leger en trais mais autramain. Returna.
- **Cundividia, sche ti vuls.** Cun ina persuna da confidenza, in accumpagnament da pers, ina gruppa — u cun nagin. Omaduas èn endretg.

**Protecziun da datas ed autodeterminaziun.** Tut quai che ti registreschas en questa app appartegna a tai. Ti decidas, sche insatge vegn sincronisà, memorisà u stizzà. Las endataziuns èn cifradas. Ina cumpletta autoannullaziun da tias datas è pussaivla mintga mument.

Quai n'è betg mo in detagl tecnic. I è expressiun da l'atgnadad da quest workbook: ti n'es betg object d'in tractament, mabain subject da tes via. L'autodeterminaziun sur da las atgnas datas è in toc concret da Recovery — e dal medem mument in dretg uman (UN-BRK, OMS 2021, SAMHSA).

Sche in chapitel daventa memia bler, serra el. Sche insatge ta tutga, resta là. I n'exista nagina successiun fauss. I exista mo tes via — e quest workbook va uschè ditg cun, sco che ti il laschas.
:::

:::standard-quiz{id=q-19-std}
- q: "Stos ti leger ils chapitels en la successiun?"
  type: multiple-choice
  options:
    - text: "Gea, autramain na va betg."
      correct: false
    - text: "Na — sigli, sco ch'i passa per tai."
      correct: true
      explanation: "Suonda a quai che ta tutga. Repeter è gugent vis."
    - text: "Mo cun ina direcziun d'ina persuna spezialista."
      correct: false

- q: "Tgi decida tge ch'è memorisà u stizzà en l'app?"
  type: multiple-choice
  options:
    - text: "L'app sezza."
      correct: false
    - text: "Ti — mintga mument, cumplettamain stizzabel."
      correct: true
      explanation: "L'autodeterminaziun sur da tias datas è expressiun da l'atgnadad orientada vid Recovery."
    - text: "Tia persuna spezialista."
      correct: false
:::

:::standard-flashcards{id=f-19-std}
- front: "Moda da lavurar"
  back: "Ina pagina al di. Siglir lubì. Repeter gugent vis. Cundivider opziunal."
- front: "Protecziun da datas"
  back: "Tias endataziuns èn cifradas e appartegnan a tai. Stizzar cumplettamain mintga mument pussaivel."
- front: "Atgnadad dal workbook"
  back: "Accumpagnader, betg manual da scola. Ti determineschas tempo, profunditad e portada — e dastgas era serrar."
:::



# 20. Crisa e segirezza — numers d’urgenza D-A-CH
{#kap-20 reading_time=2}

Sche ti es ussa en ina grond stress acut — sche ti has patratgs da far mal a tatez u ad auters, u sche ti has la sensaziun che cuntegns qua ta destabiliseschan supplementarmain — alura n'è quai betg il dretg mument per dumondas da reflexiun. Per plaschair, tschertga ussa sustegn.

:::crisis
Ils numers d'urgenza èn structurads en il frontmatter sut `helplines:`. L'app als rendescha sco cartas pajais per pajais cun tap-to-call e tap-to-open-URL.
:::

Quests posts èn anonims, gratuits e senza giuditgar. Ti na stos betg avair ina „vaira crisa" per telefonar. In telefon a temp baud è adina meglier che nagin telefon.

:::info{type=warmth title="Avant da serrar: trais frasas per uras grevas"}
- Ti na stos betg ir questa via sulet/a.
- In sentiment è in'infurmaziun, betg in incumbensa — era il sentiment il pli grev sa mover.
- Ir a tschertgar agid n'è mai in segn da debilezza. Quai è in segn che ti prendas tia vita seriusamain.
:::

:::easy{reading_time=1}
Sche ti vas ussa fitg mal, na cuntinuescha betg a leger qua. Va a tschertgar agid.

- **Svizra**: Telefon 143 (Die Dargebotene Hand — il post central da telefon per agid en Svizra, plurilingual, serva era a persunas rumantschas). Di e notg.
- **Per uffants e giuvenils en Svizra**: Telefon 147 (Pro Juventute).
- **En cas d'urgenza medicinala en Svizra**: Telefon 144.
- **Numer d'urgenza UE**: 112.
- **Germania**: Telefon 0800 111 0 111 (Telefonseelsorge).
- **Austria**: Telefon 142 (Telefonseelsorge).

Quests posts èn gratuits ed anonims. Ti dastgas telefonar, era sche ti na sas betg sche quai è uschè grav avunda.

In telefon n'è mai memia baud.
:::

:::quiz{id=q-20}
- q: "Tge numer telefoneschas ti en Svizra per Die Dargebotene Hand?"
  type: multiple-choice
  options:
    - text: "112"
      correct: false
    - text: "143"
      correct: true
    - text: "147"
      correct: false
      explanation: "147 è Pro Juventute — per uffants e giuvenils."

- q: "Sto in avair ina 'vaira crisa' per telefonar?"
  type: true-false
  correct: false
  explanation: "Na — in telefon baud è adina meglier che nagin telefon."
:::

:::flashcards{id=f-20}
- front: "Numer da crisa Svizra"
  back: "143 — Die Dargebotene Hand. Il post central plurilingual, era per persunas rumantschas. Di e notg. Anonim. Gratuit."
- front: "Numer da crisa Germania"
  back: "0800 111 0 111 u 0800 111 0 222. Telefonseelsorge. 24/7. Gratuit."
- front: "Numer da crisa Austria"
  back: "142. Telefonseelsorge. 24/7."
- front: "Uffants & giuvenils CH/AT"
  back: "147 — Pro Juventute (CH) resp. Rat auf Draht (AT). 24/7."
- front: "Urgenza medicinala e numer UE"
  back: "144 per l'urgenza medicinala en Svizra. 112 sco numer d'urgenza UE."
:::

:::standard{reading_time=2}
Sche ti es acutamain en chargia uss — sche ti has patratgs da far insatge a tai u ad auters, u sche cuntegns qua ta destabiliseschan ultra — alura n'è quai betg il mument per dumondas da reflexiun. Per plaschair, ta tschertga ussa sustegn.

**Las pli impurtantas numeras per ils pajais tudestg-linguals:**

- **Svizra:** **143** — La Maun Tendida. 24/7. Anonim. Gratuit.
- **Germania:** **0800 111 0 111** u **0800 111 0 222** — Telefonseelsorge. 24/7. Senza custs.
- **Austria:** **142** — Telefonseelsorge. 24/7.

En cas da privel da vita: **112** (en l'UE) u **144** (sanitad CH/AT).

Per uffants e giuvenils: **147** (Pro Juventute CH / Rat auf Draht AT). 24/7.

Quels servetschs èn anonims, gratuits e senza dischientscha. Ti na stos betg avair ina „crisa endretga" per telefonar. Ti na stos betg explitgar, sche quai è abast grev. In telefon ad ina ura emprima è adina meglier che nagin.

**Trais frasas per uras grevas — avant che ti serras davent:**

- Ti na stos betg ir quest via sulet u suletta.
- In sentiment è ina infurmaziun, betg in incumbensa. Era il sentiment il pli grev sa moventerà.
- Ir tschertgar agid n'è nagin segn da debladad. I è in segn che ti prendas tia vita en serius.

Sche ti na pos telefonar a nagin uss: prenda contact cun ina persuna a la quala ti has confidenza. Scriva in messadi. Va a la proxima staziun d'urgenza. In pitschen sigl vers l'or'a basta.

Ti n'es betg suletta u sulet. Era sche quai sa senta gist uschia.
:::

:::standard-quiz{id=q-20-std}
- q: "Tge numera tschernas ti en Svizra en cas da chargia psichica acuta?"
  type: multiple-choice
  options:
    - text: "112"
      correct: false
    - text: "143 (La Maun Tendida)"
      correct: true
      explanation: "143 è la numera 24/7 per la chargia psichica en Svizra."
    - text: "144 — quai è mo per privel da vita / sanitad."
      correct: false

- q: "Stos ti avair ina 'crisa endretga' per telefonar?"
  type: multiple-choice
  options:
    - text: "Gea, autramain na vegns betg prendida en serius."
      correct: false
    - text: "Na — in telefon ad ina ura emprima è adina meglier che nagin."
      correct: true
      explanation: "Ti dastgas telefonar, era sche ti es nunsegir."
    - text: "Mo sche ti es en privel da vita."
      correct: false
:::

:::standard-flashcards{id=f-20-std}
- front: "Numera d'urgenza Svizra"
  back: "143 — La Maun Tendida. 24/7. Anonim. Gratuit."
- front: "Numera d'urgenza Germania"
  back: "0800 111 0 111 u 0800 111 0 222 — Telefonseelsorge. 24/7. Senza custs."
- front: "Numera d'urgenza Austria"
  back: "142 — Telefonseelsorge. 24/7."
- front: "Cura telefonar?"
  back: "Adina. Era cun nunsegirezza. In telefon n'è mai memia baud."
:::



# 21. Ina pitschna empermischun a la fin
{#kap-21 reading_time=2}

Recovery na munga betg che tut daventa puspè uschia sco quai ch'era ina giada. Quai munga ch'insatge nov dastga naschar — mintgatant schizunt insatge che, senza questa experientscha, n'avess mai dà.

Ti vegns ad avair dis che quai qua sa fa udir sco in'empermischun vida. E ti vegns ad avair dis che ti sezza/sez sentas ch'insatge è sa midà — ina pitschnischma speranza, ina pitschna colliaziun, in patratg ch'avant betg n'era pussaivel.

Tge che la perscrutaziun po dar a tai per la via: ti n'es betg sulet/a. I dat ina via. E speranza dastgas ti emprastar, fin che ti la sentas puspè sezza/sez.

:::quote{author="Patricia Deegan, 1996" source="deegan1996" lang="en"}
By accepting what we cannot do or be, we begin to discover what we can do and who we can become.
:::

:::quote-translation{source="deegan1996" translator="atgna translaziun"}
Cura che nus acceptain quai che nus n'astgain betg esser u far, cumenzain nus a scuvrir tgi che nus astgain esser e tge che nus astgain far.
:::

:::quote{author="Antonio Machado"}
Las vias naschan, cura ch'ins las va.
:::

:::pull
Sin tia via.
:::

:::easy{reading_time=1}
Recovery na vul betg dir: tut daventa puspè sco pli baud.

Recovery vul dir: insatge nov dastga naschar.

Ti vegns ad avair dis grevs. Ti vegns era ad avair dis pli legers.

Trais frasas a la fin:

- Ti n'es betg sulet/a.
- I dat ina via.
- Speranza dastgas ti emprastar, fin che ti l'has puspè sezza/sez.

Sin tia via.
:::

:::quiz{id=q-21}
- q: "Tge maletg descriva Recovery il meglier?"
  type: multiple-choice
  options:
    - text: "Ina lingia dretga al nies."
      correct: false
    - text: "Ina via che nascha, durant ch'ins la va (Machado)."
      correct: true

- q: "A tgi appartegna la via?"
  type: multiple-choice
  options:
    - text: "Al medi."
      correct: false
    - text: "A tai — cun allianzas."
      correct: true
:::

:::flashcards{id=f-21}
- front: "Sin tia via"
  back: "La frasa finala da l'introducziun. Recovery è adina tia via — cun allianzas."
- front: "Trais frasas finalas"
  back: "Ti n'es betg sulet/a. I dat ina via. Speranza dastgas ti emprastar, fin che ti l'has sezza/sez."
- front: "Las vias naschan, cura ch'ins las va"
  back: "Antonio Machado — il motto da bleras workbooks da Recovery ed era da questa app."
:::

:::standard{reading_time=2}
Recovery na vul betg dir che tut daventa puspè uschia sco i era ina giada. I vul dir ch'insatge nov dastga naschair — mintgatant era insatge che senza questa experientscha mai existiss. In'autra profunditad. In'autra attenziun. Mintgatant ina lingua che ti na vevas betg avant.

Ti avras dis en ils quals quai suna sco ina permissiun vida. Ed ti avras dis en ils quals ti remartgas sez ch'insatge è sa spustà — ina pitschna speranza, ina pitschna colliaziun, in patratg che era anc impussibel.

Omaduas tutgan tar. Recovery n'è nagin via dretg. El ha pausas, voltas, sturnims. Antonio Machado l'ha ditg uschia: „Las vias naschan en il chaminar." Quai vala era per tes via.

Tge che la perscrutaziun ta po dar:

- **Ti n'es betg suletta u sulet.** Milli persunas èn passadas tras temps sumegliants — ed han chattà ina buna vita.
- **I exista in via.** Era sch'el è oz nunvisibel. Era sche el n'aspetta betg sco il via dad auters.
- **La speranza dastgas ti emprestar.** Sche ti n'has nagina uss, auters la tegnan per tai — in accumpagnament da pers, ina terapeuta, ina amia, in cudesch, ina istorgia or da quest workbook.

Ti dastgas serrar puspè quest workbook. Ti dastgas l'avrir puspè mais pli tard. Ti dastgas il cundivider. Ti dastgas l'emblidar. Ti dastgas era dir: oz na.

Quai che resta è questa pitschna empermischun: Sin tes via. Nus ans cumpagnain in toc.
:::

:::standard-quiz{id=q-21-std}
- q: "Tge, sche ti na sentas nagina speranza uss?"
  type: multiple-choice
  options:
    - text: "Lura è Recovery finì."
      correct: false
    - text: "Lura dastgas ti emprestar speranza dad auters — fin che ti l'has puspè sezza."
      correct: true
      explanation: "La speranza è cundividibla. Auters pon la tegnair per tai."
    - text: "Lura has ti fatg insatge fauss."
      correct: false

- q: "Co curra Recovery?"
  type: multiple-choice
  options:
    - text: "Sco lingia dretga vers la finamira."
      correct: false
    - text: "Sco via individual — cun pausas, voltas, sturnims. „Las vias naschan en il chaminar." (Machado)"
      correct: true
      explanation: "Recovery n'è betg linear. Ils sturnims tutgan tar."
    - text: "Precis sco tar auters."
      correct: false
:::

:::standard-flashcards{id=f-21-std}
- front: "Recovery"
  back: "Insatge nov dastga naschair. Betg: tut daventa puspè sco avant."
- front: "Emprestar la speranza"
  back: "Sche ti sez n'has nagina: auters la tegnan per tai — fin che ti la sentas puspè."
- front: "Trais frasas finalas"
  back: "Ti n'es betg suletta u sulet. I exista in via. La speranza dastgas ti emprestar."
- front: "Sin tes via"
  back: "„Las vias naschan en il chaminar." (Antonio Machado) — Nus ans cumpagnain in toc."
:::



# Notizias metodicas (intern)
{#methodik}

Tut las indicaziuns èn vegnidas controlladas cun las funtaunas primaras enumeradas en il frontmatter. Là nua che reviews e metaanalisas eran disponiblas, han ellas survegnì la precedenza sin studis singulars.

Las citaziuns litteralas èn renduras en l'expressiun originala (widget Quote cun referenza `source`). Las translaziuns rumantschas èn marcadas sco „atgna translaziun" (widget Quote-Translation). Ils terms ed ils models (CHIME, CHIME-D, Speranza-Pussanza-Senn, Personal Medicine, Trialog, EX-IN, salutogenesa, Open Dialogue) vegnan duvrads sco terminologia scientifica e collegads en il register da las funtaunas cun lur auturas ed auturs.

Avant ina derasaziun commerziala da l'app vegn recumandà in'examinaziun finala dal puntg da vista dal dretg d'autur.
