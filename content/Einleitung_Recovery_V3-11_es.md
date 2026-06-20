---
schema_version: "1.2"
content_id: "recovery-einleitung"
content_version: "3.14"
title: "Recovery"
subtitle: "Una introducción completa — Esperanza. Poder. Sentido."
language: "es"
translation_status: "draft-machine-translated"
translation_date: "2026-06-20"
translator: "Claude subagent (draft — needs professional review of crisis content)"
region: "D-A-CH"
target_audience: "betroffene"
target_audience_label: "Para personas con experiencia vivida de malestar psíquico"
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
    status: "planned"
  - code: "sq"
    label: "Shqip"
    status: "planned"
  - code: "es"
    label: "Español"
    status: "draft-machine-translated"
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
  full:  "Detallado — con investigación, citas y fuentes"
  easy:  "Sencillo — breve y en lenguaje fácil"
  standard: "Estándar — longitud media, claro y personal"
default_reading_mode: "standard"
# - full: rendert alles ausser :::easy und :::standard
# - easy: rendert NUR :::easy-Blöcke aller Kapitel
# - standard: rendert NUR :::standard-Blöcke (alle Kapitel haben einen)
#/low bleibt als Empfehlungs-Metadatum für die App

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

# === CRISIS HELPLINES (D-A-CH + ES + LATAM) ===
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
  - country: "ES"
    name: "Teléfono de la Esperanza"
    number: "717 003 717"
    coverage: "24h"
    target: "alle"
    url: "https://telefonodelaesperanza.org"
  - country: "ES"
    name: "Línea 024 — atención a la conducta suicida"
    number: "024"
    coverage: "24/7"
    target: "alle"
  - country: "AR"
    name: "Centro de Asistencia al Suicida (CAS)"
    number: "135 / (011) 5275-1135"
    coverage: "24/7"
    target: "alle"
  - country: "MX"
    name: "SAPTEL"
    number: "(55) 5259 8121"
    coverage: "24/7"
    target: "alle"
---
# Aviso importante antes de leer
{#disclaimer reading_time=2}

:::info{type=warmth title="Léelo primero, por favor"}
Esta app es un **prototipo**. Aún se está desarrollando y no está terminada.

Sirve exclusivamente para probar un posible futuro workbook en el ámbito del recovery.
:::

## Qué es esto y qué no es

Estás usando una **versión de prueba** de una app que todavía está en desarrollo. Los textos y las funciones son un primer borrador. Aún no han sido revisados de forma profesional — ni clínica ni lingüísticamente.

**Esta app NO es una herramienta terapéutica.** No sustituye ningún tratamiento, terapia, asesoramiento médico ni intervención en crisis.

## Por favor, respeta las siguientes reglas

- **No usarla en entornos clínicos.** En su forma actual, esta app no puede usarse como herramienta en clínicas, consultas, centros de asesoramiento u otros contextos asistenciales.
- **No usarla como único apoyo en el ámbito privado.** Si tú misma o tú mismo estáis afectados, utiliza esta app solo dentro de una fase de prueba organizada — no como único acompañamiento en un momento difícil.
- **En caso de duda: busca ayuda real.** Si te sientes mal, dirígete a una persona de confianza, a quienes te tratan o a los números de crisis que figuran en el capítulo 20 de este workbook.

## Sin garantía, sin responsabilidad

Los contenidos de esta app se ofrecen sin ninguna garantía. No se asume ninguna responsabilidad por daños — materiales o inmateriales — que pudieran derivarse del uso o no uso de esta app.

La app se ha creado según nuestro mejor saber y entender y sobre la base de la investigación actual sobre recovery. Aun así, puede contener errores, imprecisiones o formulaciones poco apropiadas. Si notas algo, tu feedback es bienvenido — para eso sirve precisamente esta fase de prueba.

## Si te encuentras ahora mismo en una crisis

Si leer esta app te resulta difícil o te desestabiliza, déjala a un lado.

En crisis agudas puedes contactar las 24 horas:
- **Suiza:** 143 (Die Dargebotene Hand)
- **Alemania:** 0800 111 0 111 (Telefonseelsorge)
- **Austria:** 142 (Telefonseelsorge)
- **En peligro de muerte:** 112 o 144 (CH/AT) o 112 (DE)

Pedir ayuda nunca es demasiado pronto.

:::standard{reading_time=2}
Estás usando un **prototipo**. Esta app aún no está terminada — quiere mostrar cómo podría verse un futuro workbook de Recovery. Los textos y funciones son un primer borrador y todavía no han sido revisados profesionalmente.

**Esta app no es una herramienta terapéutica.** No sustituye tratamiento, terapia, consejo médico ni intervención en crisis.

**Por favor sigue estas reglas:**

- No la uses en contextos clínicos — es decir, no como recurso en clínicas, consultas o servicios de consejería.
- No la uses como apoyo único en una situación difícil.
- En caso de duda: busca ayuda real — una persona de confianza, tu equipo de atención o una línea de crisis.

**En crisis aguda** puedes llamar las 24 horas: Teléfono de la Esperanza (España) **717 003 717**, Suiza **143**, Alemania **0800 111 0 111**, Austria **142**. En peligro vital: **112**.

Los contenidos se ofrecen sin garantía. Si notas algo, agradecemos tu retorno — para eso está esta fase de prueba.

Al continuar leyendo, confirmas que has comprendido estos avisos.
:::

:::pull
Al seguir leyendo confirmas que has entendido estas indicaciones y que usas la app dentro de una fase de prueba.
:::


# Prólogo: Recovery empieza con historias
{#vorspann reading_time=4}

:::pull
Recovery son miles de historias de personas que, a pesar de sus síntomas o gracias a ellos, han encontrado un camino hacia una vida buena.
:::

Son historias que rara vez aparecen en los periódicos, porque no son escandalosas. Pero ocurren todos los días — en librerías, junto a pianos, en coros, en grupos de conversación, en salones, en salas de espera, en cocinas.

Una mujer que durante mucho tiempo estuvo convencida de que nunca volvería a ejercer una profesión, y que hoy lleva una pequeña librería. Un padre que después de una psicosis vuelve a tocar el piano — distinto que antes, con menos perfección, con más amor. Un hombre joven que, tras años con un diagnóstico de trastorno límite, se ha convertido en acompañante de recuperación, porque quiere tender a otras personas la mano que a él le faltó. Una madre que acompañó a su hija a través de un grave trastorno alimentario y dice: en ese tiempo aprendí más sobre el amor que en toda mi vida anterior.

No hay docenas de estas historias. Hay miles. Probablemente cientos de miles. Tantas como personas han pasado alguna vez por un tiempo psíquico difícil.

## Recovery está documentado

La Scottish Recovery Network reunió en 2007 sesenta y cuatro de estas historias y las analizó sistemáticamente [^brown2007]. La iniciativa británica ImROC recopila experiencias desde hace años [^imroc]. La comunidad internacional de personas que oyen voces lleva desde los años 90 reuniendo voces que no aparecen en los manuales [^hvn].

En la Universidad de Nottingham, Mike Slade ha construido con el programa NEON — Narrative Experiences Online — una colección científica de historias grabadas de recuperación [^slade2021neon]. En ensayos controlados aleatorizados se ha demostrado que escuchar estas historias mejora de forma medible la calidad de vida — tanto en personas con experiencia de psicosis [^rennick2024neon] como en familiares que las acompañan [^neonc2024].

Dicho de otro modo: Recovery no es solo una promesa sentida. Recovery es un fenómeno documentado. Y las historias de otras personas son, en sí mismas, una forma de ayuda.

## Recovery es práctico

Recovery no ocurre primero en la consulta. Recovery son encuentros. Recovery es el jardín en el que después de meses se vuelve a plantar. El perro que cada mañana encuentra la puerta. El coro en el que tu propio aliento vuelve a tener voz. La amiga que escucha sin querer reparar. El grupo trialógico del miércoles por la noche. La caminata por las colinas. El pan que necesita doce horas de fermentación en la masa madre.

Recovery son historias de resiliencia — y de creatividad, que a menudo nace justo allí donde algo se ha roto. Recovery es muy a menudo también: felicidad.

No la felicidad impecable y siempre radiante de los folletos brillantes. Sino la otra — la silenciosa, agradecida, a veces sorprendida. La felicidad que solo conoces cuando sabes lo largo que puede ser un día.

## ¿Y tú?

No tienes que sentir todavía nada de esto para estar aquí. Tal vez ahora no sea el momento para grandes palabras como felicidad o sentido. Tal vez hoy baste con que leas esta página. Es suficiente.

Este workbook está escrito para personas que recorren un camino así — o que acompañan, o que quieren comprender. No quiere ser una teoría bonita. Quiere ser una señal en el camino.

:::pull
Antes de empezar — una breve orientación.
:::

:::easy{reading_time=1}
Recovery es un movimiento. Muchas personas lo han logrado: pasaron una etapa difícil. Hoy viven bien. A pesar de la enfermedad. A veces, incluso gracias a ella.

Hay miles de historias así.

Recovery no ocurre solo en la consulta del médico. Recovery ocurre en tu vida. Al cocinar. Al pasear. Al hablar con buenas personas.

Este workbook quiere ayudarte. No es un libro para estudiar. Es un compañero de camino.
:::

:::quiz{id=q-vorspann}
- q: "¿Dónde ocurre Recovery sobre todo?"
  type: multiple-choice
  options:
    - text: "Solo en la clínica."
      correct: false
      explanation: "No. Recovery ocurre sobre todo en la vida cotidiana — en encuentros, en pequeños pasos."
    - text: "En la vida — en encuentros, en lo cotidiano."
      correct: true
      explanation: "Exacto. El tratamiento es una herramienta, no un lugar."
    - text: "Solo cuando todos los síntomas han desaparecido."
      correct: false
      explanation: "Recovery no empieza solo después de que cesen los síntomas."

- q: "¿Cuántas historias de Recovery hay?"
  type: multiple-choice
  options:
    - text: "Un puñado."
      correct: false
    - text: "Cientos."
      correct: false
    - text: "Miles, si no cientos de miles."
      correct: true
      explanation: "Tantas como personas han pasado alguna vez por un tiempo difícil."
:::

:::flashcards{id=f-vorspann}
- front: "Recovery empieza con …"
  back: "… historias. Miles de personas que, a pesar de sus síntomas o gracias a ellos, han encontrado un camino hacia una vida buena."
- front: "Programa NEON"
  back: "Colección científica de historias grabadas de recuperación (Univ. Nottingham). Los estudios muestran: escuchar estas historias mejora de forma medible la calidad de vida."
- front: "Recovery ocurre …"
  back: "… no primero en la consulta. En el jardín, en el coro, en la conversación, al cocinar, en los encuentros."
:::

:::standard{reading_time=2}
Recovery empieza con historias. No con teoría, no con diagnósticos — con personas que han encontrado un camino.

Una mujer que durante años creyó que nunca volvería a trabajar, y que hoy lleva una pequeña librería. Un padre que después de una psicosis vuelve a tocar el piano — diferente que antes, con menos perfección y con más amor. Un hombre joven que tras un diagnóstico de trastorno límite acompaña hoy a otras personas, porque quiere tenderles la mano que a él le faltó.

No hay docenas de estas historias. Hay miles. Tantas como personas han pasado alguna vez por un tiempo psíquico difícil.

Recovery es más que una promesa sentida. Recovery está documentado:

- La Scottish Recovery Network analizó sistemáticamente 64 trayectorias vitales.
- La Universidad de Nottingham recopila narrativas de recuperación de forma científica.
- Los estudios muestran: escuchar estas historias mejora de forma medible la calidad de vida.

Recovery rara vez ocurre primero en la consulta. Recovery ocurre en el jardín donde se vuelve a plantar después de meses. En el coro en el que tu aliento vuelve a tener voz. En la amiga que escucha sin querer reparar.

No tienes que sentir todavía nada de esto para estar aquí. Tal vez hoy baste con que leas esta página. Es suficiente.

Este workbook es una señal en el camino. No una teoría bonita — sino un compañero para tu camino.
:::

:::standard-quiz{id=q-vorspann-std}
- q: "¿Dónde ocurre Recovery sobre todo?"
  type: multiple-choice
  options:
    - text: "Solo en la clínica o en la terapia."
      correct: false
      explanation: "Recovery ocurre sobre todo en lo cotidiano — en encuentros, en el jardín, en el coro, al cocinar."
    - text: "En la vida — en encuentros y en lo cotidiano."
      correct: true
      explanation: "Exacto. El tratamiento es una herramienta, no un lugar."
    - text: "Solo cuando todos los síntomas han desaparecido."
      correct: false
      explanation: "No. Recovery comienza en medio de la dificultad."

- q: "¿Cuántas historias de Recovery hay?"
  type: multiple-choice
  options:
    - text: "Un puñado."
      correct: false
    - text: "Miles, probablemente cientos de miles."
      correct: true
      explanation: "Tantas como personas han pasado alguna vez por un tiempo difícil."
    - text: "Solo muy pocos casos aislados."
      correct: false
:::

:::standard-flashcards{id=f-vorspann-std}
- front: "Recovery empieza con …"
  back: "… historias. Miles de personas que, a pesar de sus síntomas o gracias a ellos, han encontrado un camino hacia una vida buena."
- front: "¿Dónde ocurre Recovery?"
  back: "En lo cotidiano. En el jardín, en el coro, en la conversación, al cocinar. El tratamiento es una herramienta, no un lugar."
- front: "¿Estás solo/a?"
  back: "No. Miles han pasado por tiempos parecidos. Sus historias muestran: hay un camino."
:::


# Una breve nota sobre el lenguaje
{#sprache reading_time=2}

Las palabras crean realidad. A quien se le llama «esquizofrénico», escucha un diagnóstico. A quien se le llama «persona con el diagnóstico de esquizofrenia», sigue siendo primero una persona. Esta introducción usa de forma consciente el lenguaje centrado en la persona: el diagnóstico va después de la persona, no antes [^ameringschmolke2012] [^knuf2026].

Hablamos de personas con crisis psíquicas, con experiencias de crisis o con experiencia psiquiátrica — no de «enfermos». Hablamos de personas en Recovery — no de «curados». Usamos el tú, porque este workbook digital es un espacio personal — no porque nos situemos por encima de ti. Si lees como profesional: léelo como modelo de un estilo lingüístico que crea cercanía sin acentuar la jerarquía.

No se ha asentado una traducción elegante de Recovery al español — igual que tampoco para el término estrechamente vinculado de Empowerment. Por eso usamos Recovery a lo largo del texto como término técnico, y le añadimos en el siguiente capítulo la lectura complementaria «Esperanza — Poder — Sentido» [^ameringschmolke2006].

:::easy{reading_time=1}
Las palabras importan.

A quien le llaman «esquizofrénico» queda reducido a su enfermedad. A quien le llaman «persona con esquizofrenia» sigue siendo primero una persona.

Usamos la palabra Recovery. Es inglesa. No hay una buena palabra en español para sustituirla. Recovery significa: recorrer un camino hacia una vida buena.

En esta app te tratamos de tú. No porque seamos mejores. Sino porque este espacio es tu espacio.
:::

:::quiz{id=q-sprache}
- q: "¿Qué formulación es centrada en la persona?"
  type: multiple-choice
  options:
    - text: "El esquizofrénico"
      correct: false
    - text: "Persona con el diagnóstico de esquizofrenia"
      correct: true
      explanation: "El diagnóstico va después de la persona, no antes."
    - text: "Un esquizo"
      correct: false
:::

:::flashcards{id=f-sprache}
- front: "Lenguaje centrado en la persona"
  back: "El diagnóstico va después de la persona, no antes: «persona con esquizofrenia» en lugar de «esquizofrénico»."
- front: "¿Por qué Recovery como término?"
  back: "No hay una traducción elegante al español. Recovery se usa de forma consistente como término técnico establecido."
:::

:::standard{reading_time=2}
Las palabras crean realidad. No son inofensivas.

A quien se le llama «esquizofrénico» escucha un diagnóstico antes de ser persona. A quien se le llama «persona con el diagnóstico de esquizofrenia» sigue siendo primero una persona — y porta el diagnóstico como una parte, no como el todo.

Este workbook usa de forma consciente el lenguaje centrado en la persona: el diagnóstico va después de la persona, no antes.

En concreto significa:

- Hablamos de personas con crisis psíquicas, no de «enfermos».
- Hablamos de personas en Recovery, no de «curados».
- Hablamos de acompañamiento de recuperación, no de «trabajo con internos».

Para la palabra Recovery no existe una traducción elegante al español — igual que tampoco para Empowerment. Por eso usamos Recovery de forma consistente como término técnico. En el siguiente capítulo le añadimos la lectura «Esperanza — Poder — Sentido».

Una particularidad: te tuteamos a lo largo de todo el texto. No porque nos situemos por encima de ti — al contrario. El workbook digital es un espacio personal. El «tú» crea cercanía sin acentuar la jerarquía. Si lees como profesional: léelo como modelo de un estilo lingüístico que expresa cercanía a la misma altura.
:::

:::standard-quiz{id=q-sprache-std}
- q: "¿Qué formulación es centrada en la persona?"
  type: multiple-choice
  options:
    - text: "El esquizofrénico"
      correct: false
      explanation: "Aquí el diagnóstico va primero — no es centrado en la persona."
    - text: "Persona con el diagnóstico de esquizofrenia"
      correct: true
      explanation: "Exacto. Diagnóstico después de la persona — la persona sigue siendo visible primero."
    - text: "Un esquizo"
      correct: false
      explanation: "Estigmatizador y reduce a la persona al diagnóstico."

- q: "¿Por qué usa el workbook el tú?"
  type: multiple-choice
  options:
    - text: "Porque las autoras se sienten superiores."
      correct: false
    - text: "Porque el workbook digital es un espacio personal — cercanía sin jerarquía."
      correct: true
      explanation: "El «tú» crea cercanía, no distancia hacia abajo."
:::

:::standard-flashcards{id=f-sprache-std}
- front: "Lenguaje centrado en la persona"
  back: "El diagnóstico va después de la persona, no antes. «Persona con esquizofrenia» en lugar de «esquizofrénico»."
- front: "¿Por qué Recovery sigue en inglés?"
  back: "No hay una traducción elegante al español. Recovery se usa como término técnico establecido."
:::


# Bienvenida, bienvenido
{#willkommen reading_time=3}

Qué bueno que estés aquí.

Este workbook digital está escrito para ti — si tú mismo o tú misma estás pasando ahora por una etapa difícil, has recibido un diagnóstico o vives desde hace tiempo con una enfermedad psíquica.

Tal vez has estado muchas veces en tratamiento. Tal vez estás al principio. Tal vez ya tienes un largo camino detrás y buscas un lenguaje nuevo para lo que estás viviendo.

Este workbook está escrito para que puedas explorarlo a tu propio ritmo. No tienes que leerlo todo. No tienes que hacer nada en un orden determinado. Puedes saltar, volver, dejarlo a un lado.

:::info{type=metaphor title="Una imagen para el camino: Kintsugi"}
Kintsugi es un arte japonés tradicional de reparación. La cerámica rota se pega con oro. Las grietas no se ocultan, sino que se hacen visibles y se ennoblecen. La pieza no pierde valor por la rotura — a los ojos de muchos, gana.

Los caminos de recuperación siguen a menudo una lógica parecida: no se trata de borrar las grietas, sino de integrarlas en un nuevo todo.

Recovery no significa volver a ser quien eras antes. Recovery significa que lo que fue puede llegar a formar parte de un nuevo todo.
:::

:::quote{author="U.S. Substance Abuse and Mental Health Services Administration (SAMHSA), 2012" source="samhsa2012"}
Recovery es un viaje de sanación y transformación que permite a una persona con una enfermedad mental llevar una vida con sentido en una comunidad de su elección — mientras al mismo tiempo se esfuerza por desarrollar todo su potencial.
:::

:::easy{reading_time=1}
Qué bueno que estés aquí.

Este workbook está escrito para ti — si tú mismo o tú misma vives tiempos difíciles.

No tienes que leerlo todo. Elige lo que te encaje. Vuelve cuando quieras.

Tú decides tu ritmo.
:::

:::quiz{id=q-willkommen}
- q: "¿Para quién es este workbook?"
  type: multiple-choice
  options:
    - text: "Para personas con experiencia propia de malestar psíquico."
      correct: true
      explanation: "Está escrito para ti — sin importar dónde estés ahora en tu camino."
    - text: "Solo para profesionales."
      correct: false
    - text: "Solo para personas con un diagnóstico concreto."
      correct: false

- q: "¿Tienes que leer el workbook en orden?"
  type: true-false
  correct: false
  explanation: "No. Puedes saltar, volver, dejarlo a un lado. Tú decides ritmo y orden."
:::

:::flashcards{id=f-willkommen}
- front: "¿Para quién es este workbook?"
  back: "Para ti — si tienes experiencia propia de malestar psíquico."
- front: "Kintsugi"
  back: "Arte japonés de reparación: las grietas se pegan con oro, no se ocultan. Metáfora para Recovery: lo roto se integra en un nuevo todo."
- front: "Autodeterminación al leer"
  back: "Tú eliges lo que lees. Tú eliges tu ritmo. Puedes volver a entrar en cualquier momento."
:::

:::standard{reading_time=2}
Qué bueno que estés aquí.

Este workbook está escrito para ti — si tú mismo o tú misma estás pasando por una etapa difícil, has recibido un diagnóstico o vives desde hace tiempo con una enfermedad psíquica.

Tal vez estás al principio. Tal vez ya tienes muchas terapias detrás. Tal vez buscas un lenguaje nuevo para lo que estás viviendo — o simplemente a alguien que no quiera reparar, sino acompañar.

No necesitas traer nada. Ni conocimientos previos, ni un buen día, ni una historia terminada. Lee lo que te llame. Deja lo que ahora no te encaje. Vuelve cuando quieras.

Una imagen que nos gusta usar es Kintsugi — el arte japonés de reparación. La cerámica rota se pega con oro. Las grietas no se ocultan, sino que se hacen visibles. La pieza no pierde valor por la rotura — a los ojos de muchos, gana.

Recovery sigue una lógica parecida. No se trata de borrar todo lo que fue. Se trata de que lo roto pueda formar parte de un nuevo todo.

Algunas indicaciones antes de empezar:

- Tú decides ritmo y orden.
- Hay varios modos de lectura: fácil, estándar, detallado.
- Puedes entrar y salir donde quieras.
- Si algo se vuelve demasiado: déjalo a un lado. Eso no es rendirse — es autocuidado.

Nadie te empuja. Este espacio es tuyo.
:::

:::standard-quiz{id=q-willkommen-std}
- q: "¿Quién decide ritmo y orden?"
  type: multiple-choice
  options:
    - text: "La app."
      correct: false
    - text: "Tú."
      correct: true
      explanation: "Puedes saltar, dejarlo a un lado, volver."
    - text: "El orden está fijado de antemano."
      correct: false

- q: "¿Qué significa Kintsugi como imagen para Recovery?"
  type: multiple-choice
  options:
    - text: "Las grietas se hacen lo más invisibles posible."
      correct: false
    - text: "Las grietas se hacen visibles — y forman parte de un nuevo todo."
      correct: true
      explanation: "Recovery no significa borrar todo. Lo que fue puede formar parte de lo nuevo."
:::

:::standard-flashcards{id=f-willkommen-std}
- front: "Tu ritmo"
  back: "Tú decides qué lees y cuándo. Saltar, dejarlo a un lado, volver — todo está permitido."
- front: "Kintsugi"
  back: "Arte japonés de reparación: grietas pegadas con oro. Metáfora para Recovery — lo roto forma parte de un nuevo todo."
- front: "Si algo se vuelve demasiado"
  back: "Déjalo a un lado. Eso no es rendirse — es autocuidado."
:::


# 1. Qué significa realmente Recovery
{#kap-1 reading_time=5}

## La palabra y su historia

La palabra inglesa recovery significa literalmente recuperación, restablecimiento, descanso. En salud mental se ha establecido desde los años 80 como término que engloba una nueva mirada sobre el sufrimiento psíquico [^anthony1993] [^deegan1988].

Recovery no es en primer lugar un término médico. Surge de las experiencias de personas que habían recibido diagnósticos psiquiátricos y se negaban a quedar reducidas a ellos [^chamberlin1978] [^deegan1988].

## La definición clásica

La definición más citada procede de William Anthony, entonces director del Center for Psychiatric Rehabilitation de la Universidad de Boston.

:::quote{author="Anthony, 1993, p. 15" source="anthony1993" lang="en"}
Recovery is described as a deeply personal, unique process of changing one's attitudes, values, feelings, goals, skills, and/or roles. It is a way of living a satisfying, hopeful, and contributing life even with limitations caused by illness.
:::

:::quote-translation{source="anthony1993" translator="traducción propia"}
Recovery es un proceso profundamente personal y único de cambio de las propias actitudes, valores, sentimientos, metas, capacidades o roles. Es una forma de vivir una vida satisfactoria, con esperanza, que aporta — incluso con las limitaciones causadas por una enfermedad.
:::

Esta definición es desde hace más de tres décadas la referencia internacional. Fue adoptada, entre otros, por SAMHSA [^samhsa2012], marcada por la tradición del Sainsbury Centre for Mental Health e integrada en las directrices de la OMS [^who2021].

## Recuperación clínica y personal

La investigación distingue dos conceptos [^slade2009]:

- **Recuperación clínica** (clinical recovery): los síntomas disminuyen o desaparecen, el diagnóstico pierde significado. Esta lectura viene de la medicina.
- **Recuperación personal** (personal recovery): vives tu vida como significativa, valiosa y autodeterminada — independientemente de si todos los síntomas han desaparecido o no.

Recovery en el sentido de este workbook se refiere sobre todo a la recuperación personal. Puede ir junto con la recuperación clínica, pero no tiene por qué.

## Definiciones en alemán

:::quote{author="Stiftung Pro Mente Sana Suiza, 2024" source="promentesana"}
La descripción más breve de Recovery es: llevar una vida lo mejor posible, incluso enfrentando un grave malestar psíquico.
:::

Amering y Schmolke hablan del «fin de la incurabilidad» [^ameringschmolke2012]. Se apoyan en estudios longitudinales que muestran: incluso después de enfermedades graves como la esquizofrenia es posible una vida plena. Knuf entiende Recovery como un proceso de elaboración personal con uno mismo y con la enfermedad — con el objetivo de llevar una vida esperanzada y activa a pesar de las dificultades psíquicas [^knuf2026].

La directriz alemana S3 «Terapias psicosociales en enfermedades psíquicas graves» ha llevado Recovery al centro de la atención sanitaria en lengua alemana y ha nombrado la orientación a la recuperación como principio rector [^dgppn2019].

:::reflection{id=1 title="¿Qué significa recuperación para ti?"}
- Cuando escuchas la palabra recuperación — ¿qué imagen aparece primero?
- ¿Cuál de las definiciones anteriores te llega más? ¿Y por qué?
- ¿Qué sería para ti una «vida buena» — incluso cuando no todo esté «resuelto»?
:::

:::easy{reading_time=2}
Recovery significa: recuperación.

Pero Recovery no significa: todos los síntomas tienen que desaparecer.

Recovery significa: vives bien. Aunque vivas todavía cosas difíciles.

Hay dos tipos de recuperación:

- Los síntomas disminuyen. Eso es recuperación clínica.
- Vives tu vida como buena y con sentido. Eso es recuperación personal.

Las dos son posibles. Las dos pueden coexistir.

Una fundación suiza dice: Recovery significa llevar una vida lo mejor posible. Incluso cuando hay algo difícil.

:::reflection{id=1-easy title="Pregúntate a ti mismo/a"}
- ¿Qué significa para ti una vida buena?
- ¿Qué necesitas para ella? ¿Qué no?
:::
:::

:::quiz{id=q-1}
- q: "¿Qué significa Recovery?"
  type: multiple-choice
  options:
    - text: "Todos los síntomas tienen que desaparecer."
      correct: false
      explanation: "No. La recuperación personal puede funcionar también con síntomas persistentes."
    - text: "Llevar una vida con sentido y autodeterminada — incluso si quedan síntomas."
      correct: true
      explanation: "Exacto. Ese es el núcleo de la recuperación personal (Anthony 1993)."
    - text: "Un método terapéutico concreto."
      correct: false

- q: "¿Qué dos tipos de recuperación distingue la investigación?"
  type: multiple-choice
  options:
    - text: "Rápida y lenta."
      correct: false
    - text: "Clínica y personal."
      correct: true
      explanation: "Clínica = sin síntomas. Personal = llevar una vida con sentido."
    - text: "Terapéutica y farmacológica."
      correct: false
:::

:::flashcards{id=f-1}
- front: "Recuperación clínica"
  back: "Los síntomas disminuyen o desaparecen. El diagnóstico pierde significado. La comprensión médica de curación."
- front: "Recuperación personal"
  back: "Vives tu vida como significativa, valiosa y autodeterminada — independientemente de si todos los síntomas han desaparecido."
- front: "Anthony 1993 — la definición central"
  back: "Recovery es un proceso profundamente personal y único de cambio de actitudes, valores, sentimientos, metas y roles — un modo de llevar una vida plena, incluso con limitaciones."
- front: "Pro Mente Sana — la definición más breve"
  back: "Llevar una vida lo mejor posible — incluso enfrentando un grave malestar psíquico."
:::

:::standard{reading_time=2}
Recovery es una palabra inglesa. Literalmente significa recuperación, restablecimiento, descanso. En salud mental, desde los años 80, es el término que engloba una nueva mirada sobre el sufrimiento psíquico — y, además, no fue inventado por médicos, sino por las propias personas afectadas.

La definición clásica viene de William Anthony, un investigador de Boston: Recovery es un proceso profundamente personal de cambio de las propias actitudes, valores, metas y roles — un modo de llevar una vida plena y esperanzada, incluso con las limitaciones de una enfermedad.

La investigación distingue dos lecturas:

- **Recuperación clínica:** los síntomas disminuyen o desaparecen. El diagnóstico pierde significado. Es la mirada médica.
- **Recuperación personal:** vives tu vida como significativa, valiosa y autodeterminada — independientemente de si quedan síntomas o no.

Recovery en este workbook se refiere sobre todo a la recuperación personal. Puede coincidir con la clínica, pero no tiene por qué. Ambas pueden ocurrir a la vez. Y cada una puede tener su propio ritmo.

La fundación suiza Pro Mente Sana lo resume en una frase: Recovery significa llevar una vida lo mejor posible — incluso enfrentando un grave malestar psíquico.

Lo importante es esto: eres más que tu diagnóstico. Eres persona primero — todo lo demás viene después. Y no tienes que recorrer este camino solo o sola. Otros pueden acompañarte.
:::

:::standard-quiz{id=q-1-std}
- q: "¿Qué significa Recovery sobre todo?"
  type: multiple-choice
  options:
    - text: "Estar curado. Ya sin síntomas."
      correct: false
      explanation: "Eso sería la recuperación clínica. Recovery significa más — sobre todo recuperación personal."
    - text: "Una vida plena — incluso con síntomas."
      correct: true
      explanation: "Exactamente la definición clásica de Anthony (1993)."
    - text: "Un método terapéutico concreto."
      correct: false

- q: "¿Qué dos tipos de recuperación distingue la investigación?"
  type: multiple-choice
  options:
    - text: "Rápida y lenta."
      correct: false
    - text: "Clínica y personal."
      correct: true
      explanation: "Clínica = sin síntomas. Personal = llevar una vida con sentido."

- q: "¿Quién desarrolló Recovery como concepto?"
  type: multiple-choice
  options:
    - text: "Sobre todo médicos y empresas farmacéuticas."
      correct: false
    - text: "Personas con experiencia psiquiátrica propia — junto con la investigación."
      correct: true
      explanation: "El movimiento nace de las experiencias de las personas afectadas."
:::

:::standard-flashcards{id=f-1-std}
- front: "Recovery (definición central)"
  back: "Llevar una vida plena y esperanzada — incluso con las limitaciones de una enfermedad (Anthony 1993)."
- front: "Recuperación clínica"
  back: "Los síntomas disminuyen o desaparecen. El diagnóstico pierde significado."
- front: "Recuperación personal"
  back: "Vives tu vida como significativa, valiosa y autodeterminada — independientemente de si quedan síntomas."
- front: "Pro Mente Sana — la definición más breve"
  back: "Llevar una vida lo mejor posible, incluso enfrentando un grave malestar psíquico."
:::


# 2. Esperanza — Poder — Sentido
{#kap-2 reading_time=3}

En 2006, Michaela Amering y Margit Schmolke publicaron en la revista suiza Managed Care un artículo titulado «Esperanza — Poder — Sentido. Conceptos de Recovery en psiquiatría» [^ameringschmolke2006]. Con él marcaron decisivamente la lectura de Recovery en el ámbito de lengua alemana.

La tríada «Esperanza — Poder — Sentido» resume de qué va Recovery desde la perspectiva D-A-CH — como traducción intuitiva y cercana a la vida cotidiana de los conceptos centrales en inglés.

| Español | Inglés | Significado en el contexto D-A-CH |
|---------|--------|-----------------------------------|
| **Esperanza** | Hope | Recuperar un sentido de sí mismo independiente de la enfermedad — la esperanza como recurso terapéutico. |
| **Poder** | Empowerment | Autoempoderamiento, libertad de elección, responsabilidad propia — «poder» en el sentido de reapropiación del margen de acción [^knufseibert2004]. |
| **Sentido** | Meaning | Valores, metas, contribución, pertenencia — definir la vida más allá del rol de paciente. |

Esperanza en este sentido está estrechamente ligada al sentido de sí mismo: una autoestima que se mantiene independientemente de la vivencia de enfermedad, y una identidad que abarca más que el rol de paciente [^ameringschmolke2006].

Los tres conceptos encajan con la definición de Recovery de Anthony [^anthony1993]. Y se corresponden de forma central con el modelo CHIME [^leamy2011]: Esperanza = Hope, Poder = Empowerment, Sentido = Meaning. Conectividad (Connectedness) e Identidad (Identity) forman el marco relacional y de sí mismo que las rodea.

:::easy{reading_time=1}
Dos investigadoras encontraron tres palabras en alemán para Recovery:

- **Esperanza** — Crees que las cosas pueden mejorar.
- **Poder** — Tienes derecho a decidir. No eres solo paciente.
- **Sentido** — Tu vida tiene valor. Perteneces.

Estas tres palabras son la lectura en alemán del modelo inglés CHIME. La conexión con otras personas y una identidad propia también forman parte.
:::

:::quiz{id=q-2}
- q: "¿Qué significa 'Poder' en esta lectura?"
  type: multiple-choice
  options:
    - text: "Ejercer poder sobre otras personas."
      correct: false
    - text: "Autoempoderamiento — el derecho a decidir sobre la propia vida."
      correct: true
      explanation: "Aquí «poder» significa Empowerment en sentido positivo — no poder sobre otros."
    - text: "Atribuciones médicas."
      correct: false

- q: "¿Quién introdujo la tríada 'Esperanza — Poder — Sentido'?"
  type: multiple-choice
  options:
    - text: "Patricia Deegan"
      correct: false
    - text: "Amering y Schmolke (2006)"
      correct: true
      explanation: "En la revista suiza Managed Care, 2006."
    - text: "La OMS"
      correct: false
:::

:::flashcards{id=f-2}
- front: "Esperanza — Poder — Sentido"
  back: "La lectura en alemán de Recovery, introducida por Amering & Schmolke 2006. Corresponde a Hope, Empowerment, Meaning en el modelo CHIME."
- front: "Poder (en sentido Recovery)"
  back: "Autoempoderamiento — el derecho a decidir sobre la propia vida. No poder sobre otros."
:::

:::standard{reading_time=2}
Recovery es una palabra inglesa difícil de traducir al alemán o al español. Las psiquiatras austríacas Michaela Amering y Margit Schmolke propusieron en 2006, en la revista suiza Managed Care, tres palabras en alemán que captan el núcleo — una tríada hoy común en el ámbito DACH:

- **Esperanza** — la creencia de que tu vida puede ser más que la enfermedad. Un sentido de sí mismo que se mantiene también con independencia de los síntomas.
- **Poder** — autoempoderamiento. No poder sobre otros, sino poder sobre tu propia vida. Tener derecho a decidir. Libertad de elección. Responsabilidad propia.
- **Sentido** — valores, metas, pertenencia. Tener derecho a definir la vida más allá del rol de paciente.

Estas tres palabras encajan con la definición clásica de Recovery. También corresponden a partes centrales del modelo de Recovery internacionalmente más importante, el modelo CHIME:

- Esperanza = Hope
- Poder = Empowerment
- Sentido = Meaning

Conectividad (Connectedness) e Identidad (Identity) forman el marco que las rodea — relaciones y autoimagen como suelo en el que pueden crecer esperanza, poder y sentido.

No tienes que sentir las tres a la vez. A veces solo hay esperanza, a veces solo sentido. A veces empieza con poder — con una sola decisión que tomas tú mismo o tú misma. Eso ya es suficiente. Recovery no es una lista que tachar.
:::

:::standard-quiz{id=q-2-std}
- q: "¿Qué significa 'Poder' en esta lectura?"
  type: multiple-choice
  options:
    - text: "Ejercer poder sobre otros."
      correct: false
    - text: "Autoempoderamiento — el derecho a decidir sobre la propia vida."
      correct: true
      explanation: "Aquí «poder» significa Empowerment en sentido positivo."
    - text: "Atribuciones médicas."
      correct: false

- q: "¿Quién introdujo la tríada «Esperanza — Poder — Sentido»?"
  type: multiple-choice
  options:
    - text: "Patricia Deegan"
      correct: false
    - text: "Amering y Schmolke (2006)"
      correct: true
      explanation: "En la revista suiza Managed Care."
    - text: "La OMS"
      correct: false
:::

:::standard-flashcards{id=f-2-std}
- front: "Esperanza — Poder — Sentido"
  back: "La lectura en alemán de Recovery (Amering y Schmolke 2006). Corresponde a Hope, Empowerment, Meaning en el modelo CHIME."
- front: "Poder en sentido Recovery"
  back: "Autoempoderamiento — el derecho a decidir sobre la propia vida. No poder sobre otros."
- front: "Esperanza en sentido Recovery"
  back: "La creencia de que tu vida puede ser más que la enfermedad. Un sentido de sí mismo que se mantiene incluso sin ausencia de síntomas."
:::


# 3. Lo que Recovery NO es — seis mitos
{#kap-3 reading_time=5}

A menudo Recovery se malentiende en la vida cotidiana.

## Mito 1: Recovery significa que todos los síntomas tienen que desaparecer

Falso. También personas con síntomas persistentes pueden experimentar Recovery [^anthony1993] [^deegan1996] [^andresen2003]. La recuperación personal puede coexistir con los síntomas.

## Mito 2: Recovery significa simplemente pensar en positivo

Falso. Recovery no es una llamada al optimismo a la carta. Esperanza en la investigación de Recovery significa una convicción realista, a menudo tozuda, de que el cambio es posible [^slade2013] [^schrank2012].

## Mito 3: Recovery significa apañárselas sin medicación ni terapia

Falso. Recovery no es un movimiento antimedicina. Significa que TÚ decides con otros qué te ayuda [^deegandrake2006] [^slade2017sdm]. Amering y Schmolke lo plantean así: la aceptación de la medicación o de un determinado diagnóstico no debería ser la única condición para recibir apoyo psicosocial [^ameringschmolke2006].

## Mito 4: Recovery es un camino recto y previsible

Falso. Andresen, Oades y Caputi [^andresen2003] y muchos otros muestran: Recovery casi nunca transcurre de forma lineal. Los retrocesos forman parte y no son el final, sino parte del camino.

## Mito 5: Quien no «se cura» es culpable de ello

Falso. Recovery no es un concepto de rendimiento ni un juicio moral. El camino depende de muchos factores — relaciones, atención, condiciones socioeconómicas, traumas, casualidades [^leboutillier2011].

## Mito 6: Una enfermedad psíquica es «incurable» — «crónica»

Falso y dañino. Estudios longitudinales como el estudio de Vermont [^harding1987] y revisiones más recientes [^lally2017] muestran: la recuperación — también de diagnósticos graves — es habitualmente posible.

Amering y Schmolke advierten explícitamente contra estas fijaciones [^ameringschmolke2012]: frases como «Está usted demasiado enferma para una psicoterapia» o, por el contrario, «Todo volverá a ser como antes», son a su juicio no solo falsas, sino — textualmente — «extremadamente peligrosas». Pronósticos de este tipo le quitan a las personas su margen antes incluso de que puedan usarlo.

Heinz Katschnig ha encontrado una imagen contundente: la desesperanza — comunicada desde fuera y a menudo asumida por dentro — es la forma más insidiosa de cadenas en la psiquiatría. Es tan eficaz precisamente porque desde fuera no se ve [^ameringschmolke2012].

:::reflection{id=2 title="¿Qué mito te ha tocado?"}
- ¿Cuál de estos seis mitos fue durante mucho tiempo realidad para ti?
- ¿Quién te transmitió este mito — familia, escuela, medios, el sistema psiquiátrico?
- ¿Qué sería distinto si soltaras hoy este mito?
:::

:::easy{reading_time=2}
Hay muchas ideas falsas sobre Recovery. Seis de ellas aparecen a menudo:

1. **Falso:** Todos los síntomas tienen que desaparecer. → Recovery también va con síntomas.
2. **Falso:** Tienes que pensar en positivo. → No hay obligación de buen humor.
3. **Falso:** No se permite la medicación. → Tú decides con otros qué ayuda.
4. **Falso:** El camino es recto. → Los retrocesos forman parte.
5. **Falso:** Quien no se cura es culpable. → Nadie es culpable.
6. **Falso:** Algunos son «incurables». → La recuperación también es posible tras enfermedades graves.
:::

:::quiz{id=q-3}
- q: "¿Qué afirmación es correcta?"
  type: multiple-choice
  options:
    - text: "Recovery significa que todos los síntomas deben desaparecer."
      correct: false
    - text: "Recovery también puede funcionar con síntomas persistentes."
      correct: true
      explanation: "La afirmación central de Anthony 1993 y muchos estudios posteriores."
    - text: "Recovery solo es posible en enfermedades leves."
      correct: false

- q: "Verdadero o falso: Recovery significa no tomar medicación."
  type: true-false
  correct: false
  explanation: "Recovery no es un movimiento antimedicina. Tú decides junto con los profesionales qué ayuda."

- q: "¿Qué dicen los estudios longitudinales como Harding (1987) y Lally (2017) sobre los diagnósticos graves?"
  type: multiple-choice
  options:
    - text: "Son incurables."
      correct: false
    - text: "La recuperación es habitualmente posible también tras evoluciones graves."
      correct: true
      explanation: "Esa es la base del 'fin de la incurabilidad' de Amering."
:::

:::flashcards{id=f-3}
- front: "El mito más grande de Recovery"
  back: "Recovery no significa: todos los síntomas desaparecidos. Recovery significa: una vida buena — también con dificultades."
- front: "Linealidad — falso"
  back: "Recovery no es lineal. Los retrocesos forman parte y no son un fracaso."
- front: "'Incurable' — falso"
  back: "Los estudios longitudinales (Harding 1987, Lally 2017) muestran: la recuperación es habitualmente posible también tras enfermedades graves."
- front: "'Extremadamente peligroso'"
  back: "Amering & Schmolke (2012) sobre pronósticos como 'Está demasiado enferma para una psicoterapia' — esas fijaciones quitan margen."
:::

:::standard{reading_time=2}
Sobre Recovery circulan muchas imágenes falsas. Seis se cruzan con especial frecuencia en lo cotidiano — y las seis son falsas.

- **«Recovery significa que todos los síntomas tienen que desaparecer.»** No es cierto. También personas con síntomas persistentes pueden llevar una vida plena. La recuperación personal puede coexistir con los síntomas.
- **«Recovery significa pensar siempre en positivo.»** Falso. Recovery no es una llamada al optimismo a la carta. Esperanza en la investigación de Recovery es una convicción realista, a menudo tozuda — no un buen humor forzado.
- **«Recovery significa apañárselas sin medicación.»** Falso. Recovery no es un movimiento antimedicina. Significa que TÚ decides con otros qué te ayuda — y qué no.
- **«Recovery es un camino recto y previsible.»** Falso. Recovery casi nunca transcurre de forma lineal. Los retrocesos forman parte. No son un fracaso, sino parte del camino.
- **«Quien no se cura es culpable.»** Falso. Recovery no es un concepto de rendimiento ni un juicio moral. El camino depende de muchos factores: relaciones, atención, condiciones socioeconómicas, trauma, azar.
- **«Las enfermedades psíquicas graves son incurables.»** Falso — y peligroso. Los estudios longitudinales muestran desde hace décadas: la recuperación es habitualmente posible también tras diagnósticos graves.

Amering y Schmolke llaman a frases como «Está demasiado enferma para una psicoterapia» o «Todo volverá a ser como antes» incluso «extremadamente peligrosas». Esos pronósticos te quitan el margen antes incluso de que puedas usarlo.

La desesperanza, comunicada desde fuera y asumida por dentro — esas son las cadenas más insidiosas en la psiquiatría. Precisamente porque son invisibles.
:::

:::standard-quiz{id=q-3-std}
- q: "¿Qué afirmación es correcta?"
  type: multiple-choice
  options:
    - text: "Recovery significa que todos los síntomas deben desaparecer."
      correct: false
    - text: "Recovery también puede funcionar con síntomas persistentes."
      correct: true
      explanation: "Es la afirmación central desde Anthony 1993."
    - text: "Recovery solo es posible en enfermedades leves."
      correct: false

- q: "¿De quién es la culpa cuando Recovery resulta difícil?"
  type: multiple-choice
  options:
    - text: "Tuya — no te esfuerzas lo suficiente."
      correct: false
    - text: "De nadie. Recovery no es una competición ni un juicio moral."
      correct: true
      explanation: "El camino depende de muchos factores — no solo de tu fuerza de voluntad."

- q: "¿Qué dicen los estudios longitudinales sobre los diagnósticos «incurables»?"
  type: multiple-choice
  options:
    - text: "Lo incurable sigue siendo incurable."
      correct: false
    - text: "La recuperación es habitualmente posible también tras evoluciones graves."
      correct: true
      explanation: "Estudio de Vermont (Harding 1987), metaanálisis actuales (Lally 2017)."
:::

:::standard-flashcards{id=f-3-std}
- front: "El mito más grande de Recovery"
  back: "«Todos los síntomas tienen que desaparecer.» — No es cierto. Recovery significa llevar una vida buena, también con dificultades."
- front: "Linealidad — falso"
  back: "Recovery casi nunca transcurre de forma lineal. Los retrocesos forman parte y no son un fracaso."
- front: "«Incurable» — falso"
  back: "Los estudios longitudinales muestran: la recuperación es habitualmente posible también tras enfermedades graves."
- front: "«Extremadamente peligroso»"
  back: "Amering y Schmolke sobre pronósticos como «Está demasiado enferma para terapia» — esas fijaciones quitan margen."
:::


# 4. Historia del movimiento Recovery
{#kap-4 reading_time=6}

## Las voces de las personas afectadas — años 70 y 80

El movimiento Recovery no nació en un instituto de investigación. Empezó en los años 70 en Norteamérica, en las iniciativas de antiguos pacientes psiquiátricos — el llamado movimiento Ex-Patient o Survivor [^chamberlin1978].

Una de las voces centrales es Patricia Deegan. Con 17 años recibió el diagnóstico de esquizofrenia y oyó de un médico que nunca llevaría una vida normal. Hoy es doctora en psicología, investigadora y pionera de Recovery internacionalmente reconocida [^deegan1988] [^deegan1996].

Patricia Deegan formuló dos ideas centrales que desde entonces marcan el movimiento Recovery internacional [^deegan1996]:

- Recovery no es un punto final ni una mera estabilización, sino una transformación — un camino en el que se reconocen los propios límites y al mismo tiempo se descubren nuevas posibilidades.
- Las personas con enfermedades psíquicas no son receptoras pasivas de ayuda, sino sujetos con capacidad de acción que pueden transformar su situación con su propio hacer.

## Dorothea Buck, Triálogo y personas que oyen voces

En el ámbito de habla alemana, Dorothea Buck abrió un camino comparable. Esterilizada forzosamente bajo el nazismo y tratada varias veces en psiquiatría, luchó toda la vida por una psiquiatría humana [^buck1990].

En 1989 nació en Hamburgo, por iniciativa de Thomas Bock, el primer seminario trialógico sobre psicosis — un formato en el que personas afectadas, familiares y profesionales hablan a la misma altura [^bockpriebe2005]. En 1992 se fundó la asociación federal alemana de personas con experiencia psiquiátrica (BPE). La red internacional Hearing Voices está activa desde los 90 en Alemania, Austria y Suiza [^hvn].

## La cientificación — años 90 y 2000

William Anthony aportó la definición científica con un artículo clave de 1993 [^anthony1993]. Andresen, Oades y Caputi desarrollaron en Australia el modelo de cinco fases de la recuperación psicológica [^andresen2003].

## Del concepto al sistema — desde 2007

En 2007 arrancó en Gran Bretaña el programa ImROC (Implementing Recovery through Organisational Change). Desde entonces ha acompañado a cientos de servicios en la transformación hacia una práctica orientada a Recovery [^imroc] [^perkins2012].

En EE. UU., Recovery se convirtió en 2006 en directriz oficial de la agencia nacional de salud SAMHSA. La Convención de la ONU sobre los Derechos de las Personas con Discapacidad ancló una comprensión de los derechos humanos orientada a la autodeterminación [^uncrpd2006]. La OMS publicó en 2019 la iniciativa QualityRights [^who2019] y en 2021 la directriz «Guidance on Community Mental Health Services» [^who2021].

## El espacio de habla alemana

En Austria, Amering y Schmolke marcaron un punto de inflexión con el artículo «Esperanza — Poder — Sentido» en 2006 [^ameringschmolke2006] y con el libro «Recovery. El fin de la incurabilidad» en 2012 [^ameringschmolke2012]. En Alemania, Andreas Knuf publicó junto con Ulrich Seibert ya en 2004 «Promover el autoempoderamiento» [^knufseibert2004]; su «Recovery y Empowerment» está hoy en su 2.ª edición [^knuf2026].

EX-IN (Experienced Involvement) se desarrolló a partir de 2005 en Bremen — inspirado por Dorothea Buck y un proyecto Leonardo da Vinci financiado por la UE [^utschakowski2009]. Desde 2011 EX-IN está coordinado por la asociación EX-IN Deutschland e.V. [^exin_de]. Un ensayo controlado aleatorizado alemán confirmó la eficacia del apoyo entre pares [^mahlke2017].

En Suiza, la Stiftung Pro Mente Sana lleva el concepto de Recovery a la atención sanitaria [^promentesana]. Hoy hay Recovery Colleges en Berna, en la Suiza Oriental, en Ginebra, en St. Gallen y en Zúrich [^rcbern]. La orientación a Recovery se ancló científicamente en la psiquiatría suiza, entre otros, a través de Rössler [^roessler2004].

:::easy{reading_time=2}
Recovery no se inventó en el hospital. Recovery lo inventaron las personas afectadas.

En América, las pacientes y los pacientes empezaron en los años 70 a escribir libros. Decían: somos más que nuestra enfermedad.

Una voz conocida es Patricia Deegan. Con 17 años recibió el diagnóstico de esquizofrenia. Hoy es doctora y ayuda a otras personas.

En Alemania fue importante Dorothea Buck. Luchó por una psiquiatría mejor.

Hoy Recovery está reconocido en todo el mundo — también por la OMS.
:::

:::quiz{id=q-4}
- q: "¿Quién marcó el movimiento Recovery al principio?"
  type: multiple-choice
  options:
    - text: "La industria farmacéutica."
      correct: false
    - text: "Personas con experiencia psiquiátrica propia."
      correct: true
      explanation: "El movimiento nació en EE. UU. en los 70 a partir del movimiento Survivor."
    - text: "Las direcciones de hospitales."
      correct: false

- q: "¿Quién es Patricia Deegan?"
  type: multiple-choice
  options:
    - text: "Una médica sin experiencia propia."
      correct: false
    - text: "Una pionera de Recovery con diagnóstico propio de esquizofrenia."
      correct: true
      explanation: "Diagnosticada con 17 años. Hoy doctora en psicología y voz internacional reconocida."
    - text: "Una investigadora en enfermería suiza."
      correct: false
:::

:::flashcards{id=f-4}
- front: "Patricia Deegan"
  back: "Con 17 años diagnóstico de esquizofrenia, hoy doctora en psicología. Voz determinante del movimiento Recovery internacional."
- front: "Dorothea Buck"
  back: "Pionera alemana, esterilizada forzosamente bajo el nazismo. Luchó toda la vida por una psiquiatría humana. Inspiró EX-IN."
- front: "Survivor Movement"
  back: "Movimiento de antiguos pacientes psiquiátricos en los EE. UU. de los 70. Raíz del movimiento Recovery."
- front: "ImROC"
  back: "Implementing Recovery through Organisational Change. Programa británico desde 2007 que acompaña a servicios en la transformación hacia una práctica orientada a Recovery."
:::

:::standard{reading_time=2}
Recovery no nació en el aula magna ni en la consulta. Recovery nació en la calle — en las iniciativas de antiguos pacientes que se negaron a quedar reducidos a su diagnóstico.

El movimiento empezó en los años 70 en Norteamérica, en el llamado Survivor Movement. Una de sus voces más importantes es Patricia Deegan. Con 17 años recibió el diagnóstico de esquizofrenia. Un médico le dijo que nunca llevaría una vida normal. Hoy es doctora en psicología y una de las pioneras de Recovery más influyentes del mundo.

En el ámbito de habla alemana, Dorothea Buck fue una voz comparable. Esterilizada forzosamente bajo el nazismo y tratada varias veces en psiquiatría, luchó toda la vida por una psiquiatría humana. En 1989 nació en Hamburgo, por iniciativa de Thomas Bock, el primer seminario trialógico sobre psicosis — un formato en el que personas afectadas, familiares y profesionales hablan a la misma altura.

Estaciones importantes desde entonces:

- **1993** — William Anthony aporta la definición científica de Recovery.
- **2003** — Investigadores australianos describen cinco fases de la recuperación.
- **2007** — En Gran Bretaña arranca el programa ImROC, que reorienta servicios hacia Recovery.
- **2011** — Se publica el modelo CHIME y se convierte en estándar internacional.
- **2021** — La OMS publica su directriz para una atención en salud mental basada en derechos humanos.

En Suiza, la Stiftung Pro Mente Sana lleva el concepto de Recovery a la atención sanitaria. Hoy hay Recovery Colleges en Berna, en la Suiza Oriental, en Ginebra, en St. Gallen y en Zúrich. En Alemania, EX-IN — Experienced Involvement — ha establecido el acompañamiento de recuperación como profesión.

Recovery ya no es desde hace tiempo una idea marginal. Es práctica vivida por miles de personas.
:::

:::standard-quiz{id=q-4-std}
- q: "¿Quién marcó el movimiento Recovery al principio?"
  type: multiple-choice
  options:
    - text: "La industria farmacéutica."
      correct: false
    - text: "Personas con experiencia psiquiátrica propia."
      correct: true
      explanation: "El movimiento nació en los 70 a partir del Survivor Movement."
    - text: "Las direcciones de hospitales."
      correct: false

- q: "¿Quién es Patricia Deegan?"
  type: multiple-choice
  options:
    - text: "Una médica sin experiencia propia."
      correct: false
    - text: "Una pionera de Recovery con diagnóstico propio de esquizofrenia, hoy doctora en psicología."
      correct: true
      explanation: "Diagnosticada con 17 años, hoy voz internacional del movimiento Recovery."

- q: "¿Qué es EX-IN?"
  type: multiple-choice
  options:
    - text: "Un grupo de medicamentos."
      correct: false
    - text: "Experienced Involvement — acompañamiento de recuperación como profesión reconocida."
      correct: true
      explanation: "Desarrollado a partir de 2005 en Bremen, inspirado en Dorothea Buck."
:::

:::standard-flashcards{id=f-4-std}
- front: "¿Dónde nació Recovery?"
  back: "No en el aula magna. En las iniciativas de antiguos pacientes psiquiátricos — el Survivor Movement de los años 70 en Norteamérica."
- front: "Patricia Deegan"
  back: "Con 17 años diagnóstico de esquizofrenia, hoy doctora en psicología. Una de las voces más influyentes del movimiento Recovery."
- front: "Triálogo"
  back: "Formato en el que personas afectadas, familiares y profesionales hablan a la misma altura. Nacido en Hamburgo en 1989 (Thomas Bock)."
- front: "Recovery Colleges en Suiza"
  back: "Berna, Suiza Oriental, Ginebra, St. Gallen, Zúrich. Lugares de aprendizaje sobre Recovery — abiertos a todas las personas."
:::


# 5. CHIME y CHIME-D
{#kap-5 reading_time=6}

En 2011, un equipo de investigación dirigido por Mary Leamy y Mike Slade en el King's College de Londres analizó sistemáticamente 97 artículos científicos y 87 informes más sobre trayectorias de recuperación [^leamy2011]. Querían saber: ¿qué describen las personas una y otra vez cuando relatan su camino a través de una enfermedad psíquica?

Resultaron cinco procesos cuyas iniciales en inglés forman la palabra CHIME — la palabra inglesa para campanada.

:::table{name="CHIME"}
| Letra | Proceso | Lo que significa |
|-------|---------|-----------------|
| **C** | Connectedness · Conectividad | Relaciones, contactos entre pares, familia, pertenencia, comunidad |
| **H** | Hope and Optimism · Esperanza | Creencia en el cambio, motivación, confianza en el proceso, modelos |
| **I** | Identity · Identidad | ¿Quién soy más allá del diagnóstico? Autoimagen positiva, autoestima |
| **M** | Meaning and Purpose · Sentido | Sentido vital, valores, roles, metas, en su caso espiritualidad |
| **E** | Empowerment · Autoeficacia | Asumir responsabilidad, decidir, usar las fortalezas |
:::

CHIME es hoy el modelo de Recovery más influyente del mundo. Bird et al. confirmaron en un estudio de validación la aplicabilidad del marco [^bird2014]. Sustenta el estudio británico REFOCUS, un ensayo clúster aleatorizado [^slade2015refocus].

CHIME no es un modelo por etapas ni una lista de verificación. Describe cinco temas que se solapan. A veces uno está en primer plano, a veces otro. En el ámbito de habla alemana, CHIME encaja bien con la lectura «Esperanza — Poder — Sentido» [^ameringschmolke2006].

## CHIME-D — la sexta dimensión: dificultades

Un desarrollo importante del modelo es CHIME-D. Stuart, Tansey y Quayle constataron, en una síntesis best-fit sistemática de la literatura cualitativa sobre Recovery, que en el marco CHIME original falta una dimensión que aparece de forma regular en los relatos de experiencia: el reconocimiento explícito de las dificultades (Difficulties) — trauma, pérdida, estigmatización y consecuencias de la enfermedad [^stuart2017].

Por eso ampliaron el modelo con la letra D:

- **C** – Connectedness · Conectividad
- **H** – Hope · Esperanza
- **I** – Identity · Identidad
- **M** – Meaning · Sentido
- **E** – Empowerment · Autoeficacia
- **D** – Difficulties · Dificultades: reconocer explícitamente trauma, pérdida, estigma y consecuencias de la enfermedad

Los estudios muestran que, en promedio, alrededor del 54 % del contenido de las narrativas de Recovery corresponde a dificultades vividas [^stuart2017]. CHIME-D advierte por eso: la orientación a Recovery no puede caer en un optimismo tóxico. Tiene que dejar espacio para el dolor, para el duelo, para lo que realmente fue y es — y al mismo tiempo mantener la mirada en los recursos y el cambio.

La investigación actual valida CHIME-D como marco de referencia robusto de una atención orientada a Recovery [^vanweeghel2024] [^hancock2025].

:::info{type=note title="Por qué CHIME-D es importante para este workbook"}
A los conceptos de Recovery se les critica a veces porque pueden minimizar el sufrimiento o generar un «deber de esperanza».

CHIME-D toma esta crítica en serio: la recuperación no puede significar que lo difícil ya no tenga lugar.

En el workbook digital esto significa: espacio para el dolor Y para la esperanza. Para las pérdidas Y para las metas. Para lo que fue Y para lo que puede llegar a ser.
:::

:::reflection{id=3 title="¿Dónde estás dentro de CHIME?"}
- ¿Qué letra (C, H, I, M, E) te llama más ahora mismo?
- ¿Cuál se siente ahora más difícil?
- Si piensas en las dos últimas semanas: ¿dónde hubo un pequeño rayo de luz — y a qué letra lo atribuirías?
:::

:::easy{reading_time=2}
En 2011, unos investigadores encontraron cinco temas importantes en Recovery. Las iniciales en inglés forman la palabra CHIME (inglés para campanada):

- **C** – Connectedness · Conectividad
- **H** – Hope · Esperanza
- **I** – Identity · Identidad
- **M** – Meaning · Sentido
- **E** – Empowerment · Autoeficacia

Más tarde se añadió otra letra:

- **D** – Difficulties · Dificultades

La D es importante. Recovery no debe minimizar lo difícil. El dolor y el duelo pueden tener su sitio.
:::

:::quiz{id=q-5}
- q: "¿Qué representa la 'D' en CHIME-D?"
  type: multiple-choice
  options:
    - text: "Diagnóstico"
      correct: false
    - text: "Difficulties — Dificultades (trauma, pérdida, estigma)"
      correct: true
      explanation: "Stuart, Tansey & Quayle (2017) mostraron que esta dimensión faltaba en el CHIME original."
    - text: "Depresión"
      correct: false

- q: "¿Qué letra representa la 'Conectividad'?"
  type: multiple-choice
  options:
    - text: "C – Connectedness"
      correct: true
    - text: "I – Identity"
      correct: false
    - text: "E – Empowerment"
      correct: false

- q: "¿Es CHIME una lista para tachar?"
  type: true-false
  correct: false
  explanation: "No — CHIME describe cinco temas que se solapan. A veces uno está en primer plano, a veces otro."
:::

:::flashcards{id=f-5}
- front: "CHIME"
  back: "Connectedness · Hope · Identity · Meaning · Empowerment. Cinco procesos de Recovery (Leamy et al. 2011)."
- front: "La D en CHIME-D"
  back: "Difficulties — dificultades, trauma, pérdida, estigma, consecuencias de la enfermedad. Recovery no debe ignorar lo difícil (Stuart et al. 2017)."
- front: "Connectedness"
  back: "Conectividad. Relaciones, contactos entre pares, familia, pertenencia, comunidad."
- front: "Empowerment"
  back: "Autoeficacia. Asumir responsabilidad, tomar decisiones, usar las fortalezas."
:::

:::standard{reading_time=2}
En 2011 un equipo de investigación del King's College de Londres analizó más de 180 estudios e informes y preguntó: ¿qué describen las personas una y otra vez cuando relatan su camino de Recovery? Resultaron cinco procesos — y sus iniciales en inglés forman la palabra CHIME (campanada).

- **C — Connectedness · Conectividad:** relaciones, familia, contactos entre pares, pertenencia, comunidad.
- **H — Hope · Esperanza:** la creencia en el cambio. Modelos. Confianza en el proceso.
- **I — Identity · Identidad:** ¿quién soy más allá del diagnóstico? Una autoimagen positiva más allá del rol de paciente.
- **M — Meaning · Sentido:** valores, metas, roles, a veces espiritualidad.
- **E — Empowerment · Autoeficacia:** asumir responsabilidad. Tomar decisiones. Usar las fortalezas.

CHIME es hoy el modelo de Recovery internacionalmente más importante. Pero no es una lista de verificación ni una escalera. Describe cinco temas que se solapan. A veces uno está en primer plano, a veces otro.

## La D en CHIME-D

En 2017 los investigadores constataron: en el modelo CHIME falta algo. Algo que aparece una y otra vez en las narrativas de Recovery — el reconocimiento explícito de las dificultades. Por eso añadieron una letra:

- **D — Difficulties · Dificultades:** trauma, pérdida, estigma, consecuencias de la enfermedad.

Los estudios muestran: alrededor del 54 % del contenido de las narrativas de Recovery trata de dificultades vividas. Por eso CHIME-D advierte: Recovery no puede caer en un optimismo forzado. Tiene que haber espacio para el dolor, el duelo y lo que realmente fue — en paralelo a la mirada sobre los recursos.

Para ti significa: en el workbook lo difícil tiene su lugar. Igual que la esperanza.
:::

:::standard-quiz{id=q-5-std}
- q: "¿Qué representa la «D» en CHIME-D?"
  type: multiple-choice
  options:
    - text: "Diagnóstico"
      correct: false
    - text: "Difficulties — dificultades (trauma, pérdida, estigma)"
      correct: true
      explanation: "Stuart, Tansey y Quayle mostraron en 2017 que esa dimensión faltaba en el CHIME original."
    - text: "Depresión"
      correct: false

- q: "¿Qué letra representa la «conectividad»?"
  type: multiple-choice
  options:
    - text: "C — Connectedness"
      correct: true
    - text: "I — Identity"
      correct: false
    - text: "E — Empowerment"
      correct: false

- q: "¿Es CHIME una lista para tachar?"
  type: true-false
  correct: false
  explanation: "No — CHIME describe cinco temas que se solapan. A veces uno está en primer plano, a veces otro."
:::

:::standard-flashcards{id=f-5-std}
- front: "CHIME"
  back: "Connectedness · Hope · Identity · Meaning · Empowerment. Cinco procesos de Recovery (Leamy et al. 2011)."
- front: "La D en CHIME-D"
  back: "Difficulties — dificultades, trauma, pérdida, estigma. Recovery no debe ignorar lo difícil."
- front: "CHIME — ¿lista o no?"
  back: "No es una lista para tachar. Cinco temas que se solapan. A veces uno está en primer plano, a veces otro."
- front: "Empowerment"
  back: "Autoeficacia. Asumir responsabilidad, tomar decisiones, usar las fortalezas."
:::


# 6. Cinco fases de la recuperación
{#kap-6 reading_time=3}

Si CHIME describe los cinco procesos internos, el modelo de Andresen, Oades y Caputi describe las fases típicas del camino [^andresen2003] [^andresen2006].

:::table{name="Fases-de-la-recuperacion"}
| Fase | Español | Qué pasa por dentro |
|------|---------|---------------------|
| **1. Moratorium** | Estancamiento | Sensación de pérdida, desesperanza, retirada |
| **2. Awareness** | Despertar | Primera esperanza, reconocer: no todo está perdido |
| **3. Preparation** | Preparación | Hacer inventario: ¿qué puedo, qué necesito? |
| **4. Rebuilding** | Reconstrucción | Construir activamente nuevas metas, roles, relaciones |
| **5. Growth** | Crecimiento | Una vida plena — con o sin síntomas residuales |
:::

Las fases no son rígidas. Es normal pasar varias veces por la misma fase. Es también normal vivirse a la vez en dos fases — en un ámbito de la vida en crecimiento, en otro de nuevo en estancamiento. Cuatro tareas centrales atraviesan todas las fases [^andresen2003]: encontrar esperanza, reconstruir la identidad, encontrar sentido, asumir responsabilidad.

:::easy{reading_time=1}
Recovery suele tener fases. Tres investigadores australianos describieron cinco fases:

1. **Estancamiento** — Todo se siente difícil y desesperanzado.
2. **Despertar** — Te das cuenta: quizá todavía es posible algo.
3. **Preparación** — Miras qué puedes hacer.
4. **Reconstrucción** — Haces nuevos planes.
5. **Crecimiento** — Vives tu vida. Con síntomas o sin ellos.

Puedes saltar entre las fases. No es como una escalera. Es más bien como una espiral.
:::

:::quiz{id=q-6}
- q: "¿Cuántas fases describen Andresen, Oades y Caputi?"
  type: multiple-choice
  options:
    - text: "Tres"
      correct: false
    - text: "Cinco"
      correct: true
    - text: "Siete"
      correct: false

- q: "¿Son lineales las fases?"
  type: true-false
  correct: false
  explanation: "No. Puedes saltar, pasar varias veces por la misma fase o estar a la vez en dos fases."
:::

:::flashcards{id=f-6}
- front: "Moratorium"
  back: "Primera fase: estancamiento. Sensación de pérdida, desesperanza, retirada."
- front: "Awareness"
  back: "Fase del despertar. Primera esperanza. Reconocer: no todo está perdido."
- front: "Growth"
  back: "Crecimiento — una vida plena con o sin síntomas residuales."
- front: "Cuatro tareas de todas las fases"
  back: "Encontrar esperanza · reconstruir identidad · encontrar sentido · asumir responsabilidad."
:::

:::standard{reading_time=2}
Recovery rara vez transcurre en línea recta. Tres investigadores australianos — Andresen, Oades y Caputi — sacaron de muchas historias de vida cinco fases típicas:

- **Moratorium (Estancamiento)** — Todo parece difícil. Te sientes perdido o perdida, te retiras. La esperanza está lejos.
- **Awareness (Despertar)** — Una primera chispa: quizá no está todo terminado.
- **Preparation (Preparación)** — Haces inventario. ¿Qué puedo? ¿Qué necesito? ¿Quién está ahí?
- **Rebuilding (Reconstrucción)** — Construyes paso a paso nuevos roles, metas y relaciones.
- **Growth (Crecimiento)** — Vives una vida que se siente bien — con o sin síntomas residuales.

Importante saber: estas fases no son una escalera. Es normal pasar varias veces por la misma fase. Es normal estar en crecimiento en un ámbito de la vida y de nuevo en estancamiento en otro. Los retrocesos forman parte. No significan que hayas fracasado.

Cuatro tareas atraviesan todas las fases: encontrar esperanza, reconstruir la identidad, encontrar sentido, asumir responsabilidad.

Pregúntate: ¿en qué fase te sientes ahora — quizás en varias a la vez?
:::

:::standard-quiz{id=q-6-std}
- q: "¿Son las cinco fases como una escalera — una después de otra?"
  type: multiple-choice
  options:
    - text: "Sí, hay que pasarlas en orden."
      correct: false
      explanation: "No — las fases no son rígidas. Los retrocesos y saltos son normales."
    - text: "No. Puedes saltar, repetir o estar en varias a la vez."
      correct: true
      explanation: "Exacto. Recovery es más bien una espiral que una escalera."

- q: "¿Qué fase describe el estancamiento al inicio?"
  type: multiple-choice
  options:
    - text: "Growth"
      correct: false
    - text: "Moratorium"
      correct: true
      explanation: "Moratorium = fase de desesperanza y retirada."
    - text: "Awareness"
      correct: false
:::

:::standard-flashcards{id=f-6-std}
- front: "Cinco fases"
  back: "Moratorium · Awareness · Preparation · Rebuilding · Growth. No son una escalera — saltos y retrocesos son normales."
- front: "Cuatro tareas en todas las fases"
  back: "Encontrar esperanza · reconstruir identidad · encontrar sentido · asumir responsabilidad."
- front: "Retroceso — ¿qué significa?"
  back: "No es un fracaso. Es una parte normal del camino. Recovery es una espiral, no una línea recta."
:::


# 7. Tres niveles de recuperación
{#kap-7 reading_time=3}

En la investigación se distinguen tres niveles [^slade2009]:

- **Recuperación clínica**: los síntomas disminuyen, un diagnóstico pierde peso.
- **Recuperación funcional**: puedes volver a hacer cosas que te importan: trabajar, aprender, cuidar relaciones, ocuparte de tu vida cotidiana.
- **Recuperación personal**: encuentras nuevo sentido, una nueva autoimagen, nueva esperanza. Te vives como alguien que puede dar dirección a su vida — incluso cuando no todo está «resuelto».

Los tres niveles pueden reforzarse mutuamente, pero no tienen que ocurrir en este orden.

:::reflection{id=4 title="¿Qué nivel es importante para ti?"}
- Si imaginas dentro de un año una vida que se sienta bien: ¿qué sería distinto?
- ¿Cuál de los tres niveles — clínico, funcional, personal — sientes ahora más importante para ti?
- ¿Hay algo que te gustara hacer antes y quieras traer de vuelta a tu vida?
:::

:::easy{reading_time=1}
Hay tres tipos de recuperación:

- **Clínica:** los síntomas disminuyen.
- **Funcional:** puedes volver a hacer cosas: trabajar, aprender, cuidar relaciones.
- **Personal:** vives sentido y esperanza. Decides sobre tu vida.

La más importante para Recovery es la recuperación personal.
:::

:::quiz{id=q-7}
- q: "¿Qué nivel es el significado central de Recovery?"
  type: multiple-choice
  options:
    - text: "Recuperación clínica"
      correct: false
    - text: "Recuperación funcional"
      correct: false
    - text: "Recuperación personal"
      correct: true
      explanation: "Es la lectura central del movimiento Recovery."

- q: "¿Tienen los tres niveles que ocurrir en un orden determinado?"
  type: true-false
  correct: false
  explanation: "No — pueden reforzarse mutuamente, pero no tienen que ocurrir en un orden fijo."
:::

:::flashcards{id=f-7}
- front: "Tres niveles de recuperación"
  back: "Clínico (síntomas) · funcional (vida cotidiana, trabajo, relaciones) · personal (sentido, esperanza, autodeterminación)."
- front: "Recuperación personal — la más importante"
  back: "El corazón del movimiento Recovery. Posible también cuando permanecen síntomas clínicos."
:::

:::standard{reading_time=2}
En la investigación de Recovery se suele distinguir entre tres niveles de recuperación — y vale la pena diferenciarlos:

- **Recuperación clínica** — Los síntomas disminuyen o desaparecen. El diagnóstico pierde peso. Es la lectura de la medicina clásica.
- **Recuperación funcional** — Puedes volver a hacer cosas que te importan. Trabajar o aprender. Llevar una casa. Cuidar amistades. Configurar tu vida cotidiana.
- **Recuperación personal** — Encuentras nuevo sentido. Construyes una identidad más allá del diagnóstico. Te vives como alguien que puede dar dirección a su vida. La esperanza regresa.

Los tres niveles pueden sostenerse mutuamente. Pero no tienen que ocurrir en este orden. Algunas personas viven la recuperación personal mucho antes de que los síntomas se vuelvan más silenciosos. Otras construyen primero la función — y solo entonces notan que algo también se mueve por dentro.

El movimiento Recovery pone claramente el acento en la recuperación personal. Porque también es posible cuando los síntomas clínicos permanecen. No tienes que estar «curada» o «curado» para llevar una vida buena.

Pregúntate: ¿cuál de los tres niveles se siente ahora más importante para ti?
:::

:::standard-quiz{id=q-7-std}
- q: "¿Qué nivel está en el centro del movimiento Recovery?"
  type: multiple-choice
  options:
    - text: "Recuperación clínica — solo cuenta si los síntomas se han ido."
      correct: false
    - text: "Recuperación personal — sentido, esperanza, identidad más allá del diagnóstico."
      correct: true
      explanation: "Exacto. La recuperación personal es posible también si quedan síntomas."
    - text: "Recuperación funcional — lo importante es que funciones."
      correct: false

- q: "¿Tienen los tres niveles que venir en orden?"
  type: multiple-choice
  options:
    - text: "Sí — primero clínico, luego funcional, después personal."
      correct: false
    - text: "No. Pueden sostenerse, pero no tienen que ocurrir en un orden fijo."
      correct: true
:::

:::standard-flashcards{id=f-7-std}
- front: "Tres niveles de recuperación"
  back: "Clínico (síntomas) · funcional (cotidiano, trabajo, relaciones) · personal (sentido, esperanza, identidad)."
- front: "Recuperación personal"
  back: "El corazón de Recovery. Llevar una vida buena — también si quedan síntomas."
- front: "¿Orden?"
  back: "Ninguno fijo. Algunas personas viven la recuperación interior mucho antes de la reducción clínica de los síntomas."
:::


# 8. La esperanza — el corazón
{#kap-8 reading_time=4}

La esperanza es, en casi todos los modelos de Recovery, lo primero que se nombra [^leamy2011] [^andresen2003] [^schrank2012]. Schrank y sus colegas demostraron: la esperanza, con independencia de los síntomas, predice la recuperación personal [^schrank2012].

La esperanza en la investigación de Recovery no es una confianza ingenua. Tampoco es lo contrario del realismo. Es una convicción concreta, a menudo silenciosa, de que tu vida puede ser más que el peor día en el que estás ahora [^slade2013].

Mike Slade resume este hallazgo así: la esperanza sería esa energía que pone en marcha por primera vez un proceso de recuperación — sin ella no empieza nada [^slade2013].

## La esperanza como recurso prestado

Una idea central del movimiento Recovery dice: la esperanza no tiene que venir de ti. Puede ser sostenida y prestada por otros, hasta que tú vuelvas a sentirla [^russinova1999] [^deegan1996] [^schrank2012]. Es exactamente lo que hacen los buenos pares, los buenos profesionales, los buenos familiares: «Si tú ahora no puedes tener esperanza, nosotros la sostenemos por ti.»

Para las y los profesionales, la esperanza no es por eso un rasgo de carácter, sino una competencia profesional — la «hope-inspiring competence» según Russinova [^russinova1999].

:::reflection{id=5 title="Fuentes de esperanza"}
- ¿Qué te daba antes esperanza — una persona, un lugar, una actividad, un pensamiento?
- ¿Quién en tu entorno sostiene ahora la esperanza por ti, cuando tú no la sientes?
- ¿Hay un pequeño paso que hoy te pueda mover en dirección a la esperanza?
:::

:::easy{reading_time=1}
La esperanza es el corazón de Recovery.

Esperanza no significa: estar siempre alegre. Esperanza significa: crees que tu vida puede ser más que el peor día.

Lo más importante: no tienes que tener la esperanza tú solo o tú sola. Otros pueden sostenerla por ti. Hasta que vuelvas a sentirla.

Una buena frase: «Si tú ahora no tienes esperanza, nosotros la sostenemos por ti.»
:::

:::quiz{id=q-8}
- q: "¿Qué dice la investigación (Schrank et al. 2012) sobre la esperanza?"
  type: multiple-choice
  options:
    - text: "La esperanza, con independencia de los síntomas, predice la recuperación personal."
      correct: true
      explanation: "La esperanza es un predictor — incluso cuando los síntomas persisten."
    - text: "La esperanza solo funciona en enfermedades leves."
      correct: false
    - text: "La esperanza siempre tiene que venir de uno mismo."
      correct: false

- q: "¿Qué significa 'esperanza prestada'?"
  type: multiple-choice
  options:
    - text: "Comprar esperanza a la familia."
      correct: false
    - text: "Otros sostienen la esperanza por ti, hasta que tú mismo la sientas."
      correct: true
      explanation: "Una idea central del movimiento Recovery."
:::

:::flashcards{id=f-8}
- front: "Esperanza prestada"
  back: "Si tú no puedes tener esperanza, pares, profesionales o familiares la sostienen por ti — hasta que vuelvas a sentirla."
- front: "La esperanza en la investigación de Recovery"
  back: "No es una confianza ingenua — sino una convicción silenciosa, a menudo tozuda, de que tu vida puede ser más que el peor día."
- front: "Hope-inspiring competence"
  back: "Russinova 1999: inspirar esperanza es una competencia profesional, no un rasgo de carácter."
:::

:::standard{reading_time=2}
La esperanza es, en casi todos los modelos de Recovery, lo primero que se nombra. Y no es casualidad.

Mike Slade resume así la investigación: **«La esperanza es la energía que pone en marcha por primera vez el proceso de recuperación — sin ella no empieza nada.»**

La esperanza en la lectura de Recovery no es una confianza ingenua. Tampoco es lo contrario del realismo. Es una convicción silenciosa, a veces tozuda: que tu vida puede ser más que el peor día en el que estás ahora.

## La esperanza puede prestarse

Una de las ideas más importantes del movimiento Recovery dice: **la esperanza no tiene que venir de ti.** Puede ser sostenida y prestada por otros, hasta que tú vuelvas a sentirla.

Es exactamente lo que hacen los buenos pares, los buenos profesionales, los buenos familiares. Lo dicen — a veces con palabras, a veces solo con su presencia:

> «Si tú ahora no puedes tener esperanza, nosotros la sostenemos por ti. Tanto tiempo como haga falta.»

No es una técnica terapéutica. Es una actitud. Para las y los profesionales, la esperanza no es por eso una cuestión del propio ánimo, sino una competencia profesional — la *hope-inspiring competence* (Russinova).

Pregúntate:

- ¿Quién en tu vida sostiene ahora la esperanza por ti?
- ¿Quién podría hacerlo si se lo pides?
- Y ¿por quién quizás sostienes tú mismo o tú misma la esperanza — sin darte cuenta?
:::

:::standard-quiz{id=q-8-std}
- q: "¿Qué significa «esperanza prestada»?"
  type: multiple-choice
  options:
    - text: "Tienes que ganarte la esperanza por ti mismo."
      correct: false
    - text: "Otros sostienen la esperanza por ti, hasta que tú mismo la vuelvas a sentir."
      correct: true
      explanation: "Una idea central del movimiento Recovery. La esperanza no es solo un logro individual."

- q: "¿Es la esperanza en la investigación de Recovery lo mismo que la confianza ingenua?"
  type: multiple-choice
  options:
    - text: "Sí, simplemente optimismo."
      correct: false
    - text: "No. Una convicción silenciosa, a menudo tozuda, de que tu vida puede ser más que el peor día."
      correct: true
:::

:::standard-flashcards{id=f-8-std}
- front: "La esperanza en Recovery"
  back: "No una confianza ingenua — sino la convicción silenciosa de que tu vida puede ser más que el peor día."
- front: "Esperanza prestada"
  back: "Si tú no puedes tener esperanza, pares, profesionales o familiares la sostienen por ti — hasta que vuelvas a sentirla."
- front: "Cita de Slade"
  back: "«La esperanza es la energía que pone en marcha por primera vez el proceso de recuperación — sin ella no empieza nada.»"
:::


# 9. Empoderamiento y autodeterminación
{#kap-9 reading_time=4}

La palabra Empowerment está estrechamente vinculada a Recovery. Viene de los movimientos por los derechos civiles y de emancipación del siglo XX [^herriger2014] [^knufseibert2004] [^knuf2026].

En los años 80, el concepto fue retomado también en la atención psiquiátrica. Empowerment significa: autoempoderamiento. Participación activa. Asumir responsabilidad allí donde quieres y puedes hacerlo. Rogers y sus colegas desarrollaron una primera escala de empoderamiento empíricamente fundamentada [^rogers1997]. En el ámbito de habla alemana, «Promover el autoempoderamiento» es la obra de referencia [^knufseibert2004].

## Shared Decision-Making

Empowerment en la práctica significa sobre todo una cosa: decisiones compartidas en lugar de instrucciones. Las y los profesionales deciden contigo, no sobre ti [^charles1997] [^deegandrake2006]. Los estudios muestran: quien es incluido en las decisiones está más satisfecho y a menudo logra mejores resultados [^joosten2008] [^slade2017sdm].

## Personal Medicine

Pat Deegan acuñó el concepto de Personal Medicine: las cosas no farmacológicas que ayudan a una persona a mantenerse sana — el sueño, un perro, un determinado paseo, cantar en un coro, una llamada por la noche. La Personal Medicine se entiende en el movimiento Recovery como equivalente a los medicamentos y se incorpora a los acuerdos de tratamiento [^deegan2005].

## Directrices anticipadas y Joint Crisis Plans

Un instrumento concreto de empoderamiento son los acuerdos de tratamiento o Joint Crisis Plans — acuerdos en los que, estando estable, dejas constancia de lo que debe ocurrir en caso de crisis y lo que no. Henderson y sus colegas mostraron en un ensayo controlado aleatorizado que los Joint Crisis Plans reducen significativamente los ingresos involuntarios [^henderson2004].

:::easy{reading_time=2}
Empowerment significa: puedes decidir. Tienes poder sobre tu propia vida.

En psiquiatría a menudo significa: decidimos juntos. No: el médico decide solo.

Puedes hacer preguntas. Puedes decir no. Puedes pedir una segunda opinión.

También existe la «Personal Medicine». Son cosas, además de los medicamentos, que ayudan: un perro, un paseo, un coro, un buen amigo. Estas cosas son tan importantes como los medicamentos.
:::

:::quiz{id=q-9}
- q: "¿Qué significa 'Shared Decision-Making'?"
  type: multiple-choice
  options:
    - text: "El médico decide solo."
      correct: false
    - text: "Profesional y persona afectada deciden juntos."
      correct: true
      explanation: "Charles, Gafni y Whelan establecieron el término en 1997."
    - text: "La familia decide."
      correct: false

- q: "¿Qué significa 'Personal Medicine' (Pat Deegan)?"
  type: multiple-choice
  options:
    - text: "Medicamentos personalizados según perfil de ADN."
      correct: false
    - text: "Cosas no farmacológicas que ayudan a una persona a mantenerse sana."
      correct: true
      explanation: "Perro, paseo, coro, cantar — integrables en acuerdos de tratamiento."

- q: "¿Qué muestra el ensayo controlado sobre Joint Crisis Plans (Henderson 2004)?"
  type: multiple-choice
  options:
    - text: "No tienen efecto medible."
      correct: false
    - text: "Reducen significativamente los ingresos involuntarios."
      correct: true
:::

:::flashcards{id=f-9}
- front: "Empoderamiento"
  back: "Autoempoderamiento. Participación activa. Asumir responsabilidad allí donde quieres y puedes."
- front: "Personal Medicine"
  back: "Pat Deegan: cosas no farmacológicas que te mantienen sano — sueño, movimiento, relaciones, aficiones. Equivalente a los medicamentos."
- front: "Joint Crisis Plan"
  back: "Acuerdo en estado estable: qué debe ocurrir en caso de crisis, qué no. El ensayo controlado (Henderson 2004) muestra: reduce los ingresos involuntarios."
- front: "Shared Decision-Making"
  back: "Profesional y persona afectada deciden juntos — no instrucción y obediencia."
:::

:::standard{reading_time=2}
Empoderamiento significa autoempoderamiento. Puedes decidir — sobre tu vida y tu tratamiento.

Suena obvio, pero en la práctica psiquiátrica cotidiana a menudo no lo es. Durante mucho tiempo rigió: la profesional decide, la paciente o el paciente obedece. Recovery desplaza claramente este punto — hacia la **responsabilidad compartida**.

## Tres herramientas concretas

**Shared Decision-Making** — Las decisiones se toman juntos. Tú preguntas qué se recomienda. Tú dices qué encaja contigo y con tu vida. Los estudios muestran: quien es incluido está más satisfecho y logra mejores resultados.

**Personal Medicine** (Pat Deegan) — No solo ayudan los medicamentos. También lo que te mantiene sana o sano como persona: un perro, un paseo por la mañana, un coro, una llamada por la noche, el jardín, una caminata. En el movimiento Recovery, la Personal Medicine es **equivalente** al tratamiento médico — y forma parte de todo acuerdo de tratamiento.

**Joint Crisis Plan** — Un acuerdo que dejas por escrito con tu equipo cuando estás estable: ¿qué debe ocurrir en una crisis? ¿Qué no? ¿A quién quiero que se informe? ¿Qué medicamentos tolero, cuáles no? Un ensayo controlado (Henderson 2004) muestra: estos planes reducen significativamente los ingresos involuntarios.

## Lo que no significa empoderamiento

Empoderamiento no significa: lograrlo todo por uno mismo. No significa: estar en contra de los profesionales. Significa: tu voz cuenta — junto a la voz profesional. Las dos juntas son más.

Pregúntate: ¿dónde ya puedes decidir? ¿Dónde te gustaría tener más voz?
:::

:::standard-quiz{id=q-9-std}
- q: "¿Qué significa Shared Decision-Making?"
  type: multiple-choice
  options:
    - text: "Decides tú solo, el médico calla."
      correct: false
    - text: "Profesional y tú decidís juntos."
      correct: true
      explanation: "Exacto. Tu voz cuenta junto a la voz profesional."

- q: "¿Qué es «Personal Medicine» según Pat Deegan?"
  type: multiple-choice
  options:
    - text: "Medicamentos personalizados según prueba de ADN."
      correct: false
    - text: "Las cosas no farmacológicas que te mantienen sano — perro, paseo, coro, amistad."
      correct: true
      explanation: "Equivalente a los medicamentos y parte de todo acuerdo de tratamiento."

- q: "¿Qué aporta un Joint Crisis Plan?"
  type: multiple-choice
  options:
    - text: "Es un trámite formal que apenas tiene efecto."
      correct: false
    - text: "Reduce los ingresos involuntarios — confirmado por un ensayo controlado (Henderson 2004)."
      correct: true
:::

:::standard-flashcards{id=f-9-std}
- front: "Empoderamiento"
  back: "Autoempoderamiento. Puedes decidir — sobre tu vida y tu tratamiento. No: lograrlo todo solo."
- front: "Shared Decision-Making"
  back: "Profesional y tú decidís juntos. Mejores resultados, mayor satisfacción."
- front: "Personal Medicine"
  back: "Pat Deegan: las cosas no farmacológicas que te mantienen sano. Equivalente a los medicamentos."
- front: "Joint Crisis Plan"
  back: "Acuerdo en estado estable: qué debe ocurrir en una crisis, qué no. Reduce los ingresos involuntarios."
:::


# 10. Salutogénesis — mantenerse sano
{#kap-10 reading_time=3}

El pensamiento orientado a Recovery está estrechamente vinculado al concepto de salutogénesis [^antonovsky1979] [^antonovsky1997]. En lugar de preguntar «¿Qué enferma a las personas?» (patogénesis), la salutogénesis pregunta: «¿Qué mantiene sanas a las personas?»

Antonovsky identificó el sentido de coherencia (Sense of Coherence) como factor protector central — la capacidad de vivir la propia vida como comprensible, manejable y con sentido. Las tres componentes coinciden de forma llamativa con los procesos CHIME y con la tríada «Esperanza — Poder — Sentido».

En el ámbito de habla alemana, Schmolke ha hecho útil el concepto de salutogénesis para personas con diagnóstico de esquizofrenia [^schmolke2001]. Salutogénesis y Recovery se describen regularmente en la literatura D-A-CH como dos caras de la misma actitud — orientada a recursos en lugar de a déficits [^knuf2026] [^ameringschmolke2012].

:::info{type=note title="Las tres componentes del sentido de coherencia de Antonovsky"}
- **Comprensibilidad** (Comprehensibility): mi vida tiene una coherencia.
- **Manejabilidad** (Manageability): puedo enfrentar lo que viene — solo o con ayuda.
- **Significatividad** (Meaningfulness): vale la pena implicarme.
:::

:::easy{reading_time=1}
La medicina suele preguntar: ¿qué enferma a las personas? A eso se le llama patogénesis.

La salutogénesis pregunta distinto: ¿qué mantiene sanas a las personas?

El investigador Aaron Antonovsky encontró tres puntos importantes:

- Entiendo mi vida.
- Puedo enfrentar cosas difíciles — solo o con ayuda.
- Mi vida tiene un sentido.

Si estos tres puntos están, eres más fuerte ante las cargas.
:::

:::quiz{id=q-10}
- q: "¿Cuál es la diferencia entre patogénesis y salutogénesis?"
  type: multiple-choice
  options:
    - text: "La patogénesis es más reciente."
      correct: false
    - text: "La patogénesis pregunta por la enfermedad — la salutogénesis por la salud."
      correct: true
    - text: "La patogénesis solo vale para enfermedades físicas."
      correct: false

- q: "¿Quién desarrolló el concepto de salutogénesis?"
  type: multiple-choice
  options:
    - text: "Sigmund Freud"
      correct: false
    - text: "Aaron Antonovsky"
      correct: true
:::

:::flashcards{id=f-10}
- front: "Salutogénesis"
  back: "¿Qué mantiene sanas a las personas? (Antonovsky 1979). Contraparte de la patogénesis — la pregunta 'qué enferma'."
- front: "Sentido de coherencia"
  back: "Comprensibilidad · manejabilidad · significatividad. Factor protector según Antonovsky."
:::

:::standard{reading_time=2}
La medicina clásica pregunta: **«¿Qué enferma a las personas?»** Eso se llama patogénesis. Busca causas, riesgos, déficits.

El sociólogo Aaron Antonovsky dio la vuelta a la pregunta. Preguntó: **«¿Qué mantiene sanas a las personas — incluso bajo carga?»** Eso se llama salutogénesis.

## El sentido de coherencia

Antonovsky observó: las personas que superan bien crisis vitales graves comparten a menudo una determinada actitud interior. La llamó **sentido de coherencia** y describió tres componentes:

- **Comprensibilidad** — mi vida tiene una coherencia. Lo que me pasa puede ordenarse.
- **Manejabilidad** — puedo enfrentar lo que viene. Solo o con ayuda.
- **Significatividad** — vale la pena implicarme. Mi vida tiene una dirección.

Estas tres componentes suenan familiares. Están sorprendentemente cerca de los cinco procesos CHIME y de la tríada «Esperanza — Poder — Sentido».

## Por qué es importante

Salutogénesis y Recovery comparten la misma actitud de fondo: orientación a recursos en lugar de a déficits. No se te ve como un manojo de síntomas, sino como una persona con fortalezas, experiencias, relaciones — también cuando muchas cosas son difíciles.

En la literatura D-A-CH (Schmolke; Amering y Schmolke) salutogénesis y Recovery se describen por eso a menudo como dos caras de la misma moneda.

Pregúntate: ¿qué te mantiene sano o sana — también hoy, también ahora?
:::

:::standard-quiz{id=q-10-std}
- q: "¿Qué pregunta la salutogénesis — frente a la patogénesis?"
  type: multiple-choice
  options:
    - text: "¿Qué enferma a las personas?"
      correct: false
      explanation: "Esa es la patogénesis. La salutogénesis pregunta lo contrario."
    - text: "¿Qué mantiene sanas a las personas — incluso bajo carga?"
      correct: true
      explanation: "La pregunta que planteó Antonovsky."

- q: "¿Qué tres componentes forman el sentido de coherencia?"
  type: multiple-choice
  options:
    - text: "Comprensibilidad · manejabilidad · significatividad"
      correct: true
      explanation: "La tríada de Antonovsky. Sorprendentemente cerca de «Esperanza — Poder — Sentido»."
    - text: "Esperanza · fe · amor"
      correct: false
:::

:::standard-flashcards{id=f-10-std}
- front: "Salutogénesis"
  back: "¿Qué mantiene sanas a las personas? (Antonovsky). Contraparte de la patogénesis — la pregunta «qué enferma»."
- front: "Sentido de coherencia"
  back: "Comprensibilidad · manejabilidad · significatividad. Factor protector bajo carga."
- front: "Salutogénesis y Recovery"
  back: "Dos caras de la misma actitud: orientación a recursos en lugar de a déficits. Eres más que tus síntomas."
:::


# 11. Estigma y auto-estigma
{#kap-11 reading_time=4}

El estigma es una de las mayores barreras para Recovery. Goffman acuñó el término para las ciencias sociales: el estigma es un rasgo que desvaloriza a una persona a los ojos de otros [^goffman1963].

## Tres niveles de estigma

Corrigan y Watson distinguen tres niveles [^corrigan2002]:

- **Estigma público**: prejuicios en la sociedad («las personas con enfermedad mental son peligrosas»).
- **Estigma estructural**: desventaja en leyes, mercado laboral, sistema de seguros.
- **Auto-estigma** (estigma internalizado): tomas las imágenes negativas como imagen sobre ti mismo o ti misma.

## Auto-estigma — cuando la tormenta golpea hacia adentro

Corrigan y sus colegas describen el auto-estigma como un proceso regresivo en cuatro pasos: percibir, asentir, aplicar, sufrir — con consecuencias para la autoestima, la autoeficacia y la evolución de la enfermedad [^corrigan2011].

La buena noticia: el auto-estigma es cambiable. Las revisiones sistemáticas muestran que las intervenciones psicosociales — sobre todo en grupos — pueden reducir el estigma internalizado [^yanos2015] [^buechter2023]. También los programas anti-estigma con contacto directo con personas con experiencia vivida muestran en metaanálisis efectos de pequeños a medianos [^corrigan2012] [^thornicroft2016].

En los relatos de acompañantes de recuperación [^utschakowski2009] aparece una idea una y otra vez: no es el diagnóstico en sí lo que realmente hiere. Es lo que el diagnóstico convierte a una persona a los ojos de otros — y lo que la persona afectada empieza entonces a creer sobre sí misma. El auto-estigma surge justo en esa costura.

:::reflection{id=6 title="Voces internas"}
- ¿Qué frases te dices a ti mismo o a ti misma sobre tu enfermedad o sobre la de la persona a la que acompañas?
- ¿Cuáles de esas frases no son en realidad tu propia voz, sino imágenes asumidas de fuera?
- ¿Qué frase sería una versión más amable de la misma verdad?
:::

:::easy{reading_time=2}
Estigma significa: te marcan negativamente por algo. Por ejemplo: por tener un diagnóstico.

Hay estigma en tres ámbitos:

- En la sociedad — prejuicios, palabras dañinas.
- En reglas y leyes — por ejemplo, dificultades con seguros.
- En ti — crees las cosas malas sobre ti.

Lo último se llama auto-estigma. Es peligroso. Te empequeñece antes de que otros lo hagan.

La buena noticia: el auto-estigma puede cambiar. Hablar ayuda. Conocer a otras personas que viven lo mismo, también ayuda.
:::

:::quiz{id=q-11}
- q: "¿Qué es el auto-estigma?"
  type: multiple-choice
  options:
    - text: "El estigma que otros me hacen."
      correct: false
    - text: "Cuando asumo las imágenes negativas como imagen sobre mí mismo."
      correct: true
      explanation: "Corrigan & Watson 2002 lo describen como un proceso regresivo."

- q: "¿Qué método reduce el estigma con más eficacia?"
  type: multiple-choice
  options:
    - text: "El silencio."
      correct: false
    - text: "El contacto directo con personas con experiencia vivida."
      correct: true
      explanation: "Thornicroft et al. 2016 lo muestran en un metaanálisis."

- q: "¿Es cambiable el auto-estigma?"
  type: true-false
  correct: true
  explanation: "Sí — las intervenciones psicosociales, sobre todo en grupo, reducen el estigma internalizado (Yanos 2015)."
:::

:::flashcards{id=f-11}
- front: "Tres niveles de estigma"
  back: "Estigma público · estigma estructural · auto-estigma (estigma internalizado)."
- front: "Auto-estigma"
  back: "Cuando asumes las imágenes sociales negativas como imagen sobre ti mismo. Es cambiable."
- front: "El método anti-estigma más eficaz"
  back: "Contacto personal directo con personas con experiencia vivida (Corrigan et al. 2012; Thornicroft et al. 2016)."
:::

:::standard{reading_time=2}
El estigma es una de las mayores barreras en el camino de Recovery. El sociólogo Erving Goffman describió el estigma como un rasgo que desvaloriza a una persona a los ojos de otros.

## Tres niveles

Patrick Corrigan distingue tres niveles en los que actúa el estigma:

- **Estigma público** — prejuicios en la sociedad. «Las personas con enfermedad mental son peligrosas.» «Espabílate.»
- **Estigma estructural** — desventaja en leyes, en el mercado laboral, en seguros, ante la administración.
- **Auto-estigma** — asumes las imágenes negativas de fuera como imagen sobre ti mismo.

## Cuando la tormenta golpea hacia adentro

El auto-estigma es especialmente insidioso. Te empequeñece — antes de que otros siquiera lo intenten. Corrigan describe un proceso en cuatro pasos: percibir, asentir, aplicar, sufrir. El resultado: menos autoestima, menos autoeficacia, a menudo también una evolución más difícil de la enfermedad.

En los relatos de acompañantes de recuperación aparece una idea una y otra vez: **no es el diagnóstico en sí lo que realmente hiere. Lo que hiere es lo que el diagnóstico convierte a una persona a los ojos de otros — y lo que la persona empieza entonces a creer sobre sí misma.**

## La buena noticia

El auto-estigma es cambiable. La investigación muestra: las intervenciones psicosociales — especialmente en grupo — reducen el estigma internalizado. Lo más eficaz contra el estigma público es el **contacto directo** con personas con experiencia vivida.

No eres tu diagnóstico. Eres una persona con una historia, con valores, con relaciones, con capacidades.

Pregúntate: ¿qué frases te dices a ti misma o a ti mismo sobre tu enfermedad — y cuáles de ellas son en realidad voces de fuera que has asumido?
:::

:::standard-quiz{id=q-11-std}
- q: "¿Qué es el auto-estigma?"
  type: multiple-choice
  options:
    - text: "El estigma que otros me hacen."
      correct: false
    - text: "Cuando asumo las imágenes sociales negativas como imagen sobre mí mismo."
      correct: true
      explanation: "Corrigan & Watson 2002: un proceso regresivo en cuatro pasos."

- q: "¿Qué funciona mejor contra el estigma público?"
  type: multiple-choice
  options:
    - text: "Callar y esconderse."
      correct: false
    - text: "Contacto directo entre la población general y personas con experiencia vivida."
      correct: true
      explanation: "Thornicroft et al. 2016: el encuentro cambia las imágenes."

- q: "¿Es cambiable el auto-estigma?"
  type: multiple-choice
  options:
    - text: "No — está fijado para siempre."
      correct: false
    - text: "Sí — sobre todo en grupos y mediante intervenciones psicosociales."
      correct: true
:::

:::standard-flashcards{id=f-11-std}
- front: "Tres niveles de estigma"
  back: "Estigma público · estigma estructural · auto-estigma (internalizado)."
- front: "Auto-estigma"
  back: "Cuando crees sobre ti mismo las imágenes negativas de fuera. Te empequeñece antes de que otros lo hagan. Cambiable."
- front: "¿Qué funciona contra el estigma?"
  back: "Contacto directo con personas con experiencia vivida. Hablar. Grupos. Compartir historias."
- front: "No eres tu diagnóstico"
  back: "Eres una persona con una historia, con valores, con relaciones, con capacidades."
:::


# De paciente a experto/a de tu vida
{#kap-shift reading_time=8}

Si has estado mucho tiempo en tratamiento psiquiátrico — quizás años, quizás décadas — eso ha hecho algo en ti. No solo la enfermedad. También **el rol**.

En la medicina clásica hay un reparto claro de tareas: la profesional sabe. La paciente o el paciente obedece. El diagnóstico explica lo que pasa. El medicamento o la terapia vuelve a curar. Esta lógica funciona bien en muchas enfermedades físicas. En el sufrimiento psíquico choca con límites que en los últimos treinta años se han ido haciendo más visibles.

## Lo que el rol largo ha podido hacer en ti

Quizás reconoces una o varias de estas cosas:

- Has aprendido a describirte por un diagnóstico. «Soy bipolar.» «Soy borderliner.» «Soy un caso crónico.»
- Has aprendido que otra persona sabe mejor que tú lo que te conviene — la médica, el terapeuta, el equipo de tratamiento.
- Has aprendido que tu propia intuición es vista con sospecha — como «falta de conciencia de enfermedad» o «no-adherencia».
- Has aprendido a esperar — la próxima cita, el próximo medicamento, el próximo método que por fin funcione.
- Has aprendido que la recuperación es algo que se te hace. No algo que tú haces.

Eso no es una debilidad personal. Es una reacción aprendida. En la investigación se llama *desesperanza aprendida* — y aparece allí donde las personas viven mucho tiempo en sistemas en los que tienen poco control [^seligman1975].

Patricia Deegan, una de las voces más influyentes del movimiento Recovery, ha acuñado para esto un término muy duro: *spirit breaking* [^deegan1990]. Describe cómo los sistemas de ayuda a veces hacen lo contrario de lo que deberían — cómo rompen el sentido de sí mismo, la autonomía, la voz de las personas, en lugar de fortalecerlas. No por mala intención. Sino porque la lógica del sistema lo prevé así.

## El paradigma que bloquea la curación

Larry Davidson y David Roe han formulado científicamente la diferencia [^davidsonroe2007]. Hablan de dos significados muy distintos de Recovery:

- **Recovery FROM** — recuperación DE una enfermedad. Es la lectura médica: síntomas de vuelta, función de vuelta, diagnóstico en el mejor de los casos detrás de ti.
- **Recovery IN** — recuperación CON una enfermedad. Es la lectura personal: llevar una vida que te llene, incluso si los síntomas siguen ahí.

Ambos son posibles. Ambos son valiosos. Pero siguen lógicas muy distintas. *Recovery FROM* ocurre en la consulta — eres receptor pasivo. *Recovery IN* ocurre en tu vida — eres la persona que actúa.

La investigadora holandesa de Recovery Wilma Boevink lo dice con más agudeza [^boevink2017]: para muchas personas con enfermedades psíquicas graves el sistema psiquiátrico no es primariamente un sistema de curación. Es una de varias herramientas en un camino más largo. Quien entiende esto — y empieza a usar la psiquiatría como medio en lugar de vivirse como su objeto — desplaza algo fundamental.

## Cómo se ve en la práctica este desplazamiento

El desplazamiento ocurre en pequeños pasos. Pocas veces tiene un momento estallido. Aquí algunos ejemplos de cómo puede verse:

:::table{name="Del-paciente-al-experto"}
| Del rol de paciente … | … a la postura de experta/o |
|-----------------------|-----------------------------|
| «Dígame qué tengo que hacer.» | «¿Qué recomienda — y qué encaja conmigo, con mi vida?» |
| «Nunca va a mejorar.» | «Hoy ha sido duro. Veamos qué trae la próxima semana.» |
| «Mi médico sabe qué me conviene.» | «Decidimos juntos — y puedo hacer preguntas por el camino.» |
| «Soy mi diagnóstico.» | «Tengo un diagnóstico. No es todo lo que soy.» |
| «He fracasado.» | «Hoy tengo un día difícil. Eso es información, no juicio.» |
| «Quizá el equipo me retire los medicamentos si lo cuento.» | «Este efecto secundario me pesa. ¿Podemos revisar alternativas juntos?» |
| «Tengo que ser fuerte.» | «Puedo aceptar ayuda — y puedo decidir cuál.» |
:::

Ninguno de estos desplazamientos significa que ya no necesites ayuda. Ninguno significa que tengas que estar contra los profesionales. No se trata de rebelión, se trata de posición.

## Por qué este desplazamiento es tan importante

No es una recomendación entre muchas. Es la condición para que Recovery llegue a ser eficaz para ti:

- **La esperanza** solo puede desarrollarse en un sí mismo que se vive como sujeto.
- **Las metas personales** solo se pueden perseguir cuando uno se vive como alguien con derecho a tener metas.
- **La autoeficacia** solo se construye allí donde haces experiencias de provocar algo tú mismo — y no solo de esperar a que algo te ocurra.
- **El sentido** en la vida surge por la elección. Quien no tiene elección, difícilmente tiene sentido.

La investigación lo confirma con claridad. Roe y Davidson [^roedavidson2005] describen Recovery como un «recoger los trozos» y un reescribir la propia historia. Los estudios actuales sobre la reconstrucción narrativa de la identidad muestran [^chiba2019narrative]: quien reconstruye en la fase de Recovery una identidad más allá del rol de paciente, avanza claramente más — también cuando los síntomas permanecen.

:::info{type=note title="Lo que aquí no se quiere decir"}
El desplazamiento del ser-paciente a la postura de experta/o no es una llamada a dejar la medicación, a terminar el tratamiento o a arreglárselas a solas. No es un reproche a las y los profesionales.

Es una invitación a tomar tu propia voz como fuente — junto a las voces de las y los profesionales. Y a descubrir qué es lo que para ti es verdad.
:::

## De la persona con experiencia, a la persona experta

En el ámbito de habla alemana hay un nombre bonito para este paso: experta o experto por experiencia. En la formación EX-IN se desarrolla precisamente esto de forma sistemática — durante doce módulos, personas con experiencia psiquiátrica se convierten en acompañantes que pueden poner su propia experiencia al servicio de otras personas como recurso [^utschakowski2009] [^exin_de].

No tienes que convertirte en acompañante de recuperación para realizar este desplazamiento. Pero la idea ayuda, incluso si solo la aplicas a ti: tu historia no es algo que te ocurrió y te define. Es algo que conoces — y de lo que puedes extraer conocimiento. Conocimiento que te ayuda a entenderte mejor a ti misma o a ti mismo y a las y los demás.

Wilma Boevink llama a esto *experiential expertise* — experticia por experiencia [^boevink2017] [^boevink2012]. Tu saber experiencial no vale menos que el saber técnico de las y los terapeutas. Es diferente. Y los dos juntos son más que la suma de las partes.

## Si todavía dudas

Quizás lees todo esto y piensas: bonito decirlo, pero en mi caso ya no funciona. Quizás tienes treinta años de experiencia en clínicas. Quizás has perdido la fe. Quizás nadie te dijo nunca que este rol también te corresponde a ti.

Tres cosas:

1. **Nunca es tarde.** La investigación de Recovery no conoce límite de edad ni límite de gravedad. Incluso personas que han vivido décadas en atención residencial describen desplazamientos — a veces justo cuando ya no contaban con ello [^harding1987] [^lally2017].

2. **No tienes que hacerlo todo a la vez.** Una sola pregunta por la mañana — «¿Qué necesitaría yo hoy?» — ya es movimiento. Una sola respuesta a ti misma o a ti mismo por la noche — «Hoy fue duro y aun así estuve ahí» — también es movimiento.

3. **Necesitas aliados.** Nadie logra solo este desplazamiento. Pares, un grupo de autoayuda, una persona de confianza, una profesional que viva el concepto, un Recovery College. Si tu equipo de tratamiento no acompaña este camino, no es tu fracaso — entonces es este equipo el que tiene en ese momento un punto ciego.

:::quote{author="Patricia Deegan, 1996" source="deegan1996" lang="en"}
We are a conspiracy of hope and we are pressing back against the strong tide of oppression which for centuries has been the legacy of those of us who are labeled with mental illness.
:::

:::quote-translation{source="deegan1996" translator="traducción propia"}
Somos una conspiración de la esperanza. Empujamos contra la fuerte marea de opresión que durante siglos ha sido la herencia de quienes hemos sido etiquetados con un diagnóstico psiquiátrico.
:::

:::reflection{id=10 title="Tu posición"}
- ¿En qué lugares te vives todavía en el rol clásico de paciente?
- ¿Dónde hay momentos en los que ya te vives como experta/o de tu propia experiencia — aunque sean cortos?
- ¿Qué frase de la columna izquierda de la tabla te resulta familiar — y qué frase de la derecha querría ir ganando lentamente espacio?
- ¿Quién podría ser tu coconspirador/a por la esperanza?
:::

:::easy{reading_time=3}
Quizás estuviste mucho tiempo en tratamiento. Entonces probablemente aprendiste algo concreto:

- El médico sabe mejor.
- Tengo que hacer lo que me dicen.
- Estoy enferma o enfermo, otros me ayudan.

Eso es un rol. Se llama rol de paciente.

Este rol ayuda a veces. Pero también puede hacer daño. Te empequeñeces. Esperas. Te vuelves dependiente.

Recovery dice: puedes salir de este rol. Paso a paso.

No te conviertes en médico. Pero te conviertes en experta/o de tu propia vida. Tú te conoces mejor. Tu experiencia es conocimiento.

**Este cambio es el cambio más importante en Recovery. Sin él no funciona.**

Tres cosas al final:

- Nunca es tarde. Tampoco tras muchos años en tratamiento.
- No tienes que hacerlo todo a la vez. Los pasos pequeños cuentan.
- Necesitas aliados.

:::reflection{id=shift-easy title="Pregúntate a ti mismo/a"}
- ¿En qué lugar te vives todavía en el rol antiguo?
- ¿Dónde ya eres experta/o de tu vida?
:::
:::

:::quiz{id=q-shift}
- q: "¿Qué significa aquí el 'rol de paciente'?"
  type: multiple-choice
  options:
    - text: "Un diagnóstico médico."
      correct: false
    - text: "Una actitud aprendida: esperar pasivamente, los otros saben mejor, me curan."
      correct: true
      explanation: "Un rol, no un diagnóstico — y es cambiable."

- q: "¿Qué dice Patricia Deegan sobre 'spirit breaking'?"
  type: multiple-choice
  options:
    - text: "Describe un caso excepcional raro."
      correct: false
    - text: "Los sistemas de ayuda pueden romper el sentido de sí mismo, la voz y la autonomía — la mayoría sin mala intención."
      correct: true
      explanation: "Deegan 1990 — un término duro, pero preciso."

- q: "¿Cuál es la diferencia entre Recovery FROM y Recovery IN?"
  type: multiple-choice
  options:
    - text: "FROM = lectura antigua, IN = más reciente."
      correct: false
    - text: "FROM = recuperación DE la enfermedad (médica). IN = recuperación CON la enfermedad (personal)."
      correct: true
      explanation: "Davidson & Roe 2007."

- q: "¿Es cierto que este desplazamiento es solo una recomendación entre muchas?"
  type: true-false
  correct: false
  explanation: "No — es la condición para que Recovery llegue a ser eficaz."

- q: "¿A partir de qué edad / tras cuántos años de tratamiento es tarde para este desplazamiento?"
  type: multiple-choice
  options:
    - text: "Tras 10 años."
      correct: false
    - text: "A partir de los 60."
      correct: false
    - text: "Nunca."
      correct: true
      explanation: "La investigación de Recovery no conoce límite de edad. Posible también tras décadas."
:::

:::flashcards{id=f-shift}
- front: "Spirit Breaking"
  back: "Patricia Deegan (1990): cómo los sistemas de ayuda rompen el sentido de sí mismo, la voz y la autonomía — la mayoría no por mala intención."
- front: "Recovery FROM"
  back: "Recuperación DE una enfermedad — lectura médica. Síntomas de vuelta, diagnóstico en el mejor de los casos detrás de ti."
- front: "Recovery IN"
  back: "Recuperación CON una enfermedad — lectura personal. Una vida plena, también si los síntomas permanecen."
- front: "Rol de paciente"
  back: "Una actitud aprendida: pasiva, en espera, heterodirigida. Ayuda a corto plazo, daña a largo plazo. Cambiable."
- front: "Experticia por experiencia (Boevink)"
  back: "Tu saber vivido es propio y equivalente al saber técnico. Puedes usarlo — para ti y para otras personas."
- front: "Conspiracy of Hope"
  back: "Patricia Deegan 1996: «Somos una conspiración de la esperanza.» — Recovery como proyecto colectivo contra la incapacitación histórica."
:::

:::standard{reading_time=3}
Si has estado mucho tiempo en tratamiento psiquiátrico — quizás años, décadas — eso ha hecho algo en ti. No solo la enfermedad. También **el rol**.

## Lo que el rol ha hecho contigo

Quizás aprendiste:

- El médico sabe mejor. Mi intuición vale menos.
- Tengo que esperar. La próxima cita, el próximo medicamento, el próximo método.
- Soy mi diagnóstico: «Soy borderliner.» «Soy bipolar.»
- La recuperación es algo que se me hace — no algo que yo hago.

Eso no es una debilidad personal. Es una **reacción aprendida** a años en un sistema que permite poco control.

Patricia Deegan, una voz determinante del movimiento Recovery, acuñó para esto un término duro: **«spirit breaking»**. Los sistemas de ayuda pueden — la mayoría sin mala intención — romper el sentido de sí mismo, la voz, la autonomía de una persona. No porque las personas que trabajan ahí sean malas. Sino porque la lógica del sistema lo prevé así.

## Recovery FROM vs. Recovery IN

Larry Davidson y David Roe distinguen dos lecturas muy distintas de Recovery:

- **Recovery FROM** — recuperación **DE** una enfermedad. La lectura médica: síntomas de vuelta, diagnóstico detrás de ti. Eres receptor pasivo de un tratamiento.
- **Recovery IN** — recuperación **CON** una enfermedad. La lectura personal: llevar una vida plena, también si los síntomas permanecen. Eres la persona que actúa.

Ambos son posibles. Ambos son valiosos. Pero siguen lógicas muy distintas. **Recovery IN es la condición para que Recovery llegue a ser eficaz para ti.** Porque la esperanza, las metas, la autoeficacia, el sentido — todo eso surge solo allí donde te vives como alguien con derecho a elegir.

## Sigues dependiendo de ayuda — y aun así eres sujeto

Este desplazamiento no es una llamada a dejar la medicación o a terminar el tratamiento. No es un reproche a las y los profesionales. Es una invitación a tomar tu propia voz como fuente — **junto a** las voces profesionales.

Tres cosas al final:

- **Nunca es tarde.** También tras décadas de tratamiento son posibles desplazamientos así.
- **Va en pasos pequeños.** Una pregunta por la mañana: «¿Qué necesitaría yo hoy?» basta para empezar.
- **Necesitas aliados.** Pares. Una persona de confianza. Un Recovery College. Nadie lo logra solo.
:::

:::standard-quiz{id=q-shift-std}
- q: "¿Qué quiere decir Patricia Deegan con «spirit breaking»?"
  type: multiple-choice
  options:
    - text: "Un caso aislado raro que apenas ocurre."
      correct: false
    - text: "Cómo los sistemas de ayuda pueden romper el sentido de sí mismo, la voz y la autonomía — la mayoría sin mala intención."
      correct: true
      explanation: "Un término duro pero preciso (Deegan 1990)."

- q: "¿Cuál es la diferencia entre Recovery FROM y Recovery IN?"
  type: multiple-choice
  options:
    - text: "FROM es la versión anticuada, IN la nueva."
      correct: false
    - text: "FROM = recuperación DE una enfermedad (médica). IN = recuperación CON una enfermedad (personal)."
      correct: true
      explanation: "Davidson & Roe 2007. Ambos posibles, pero siguen lógicas distintas."

- q: "¿Quién es experta/o de tu vida?"
  type: multiple-choice
  options:
    - text: "Tu equipo de tratamiento."
      correct: false
    - text: "Tú — junto al saber técnico de quienes te atienden."
      correct: true

- q: "¿A partir de qué punto es tarde para este desplazamiento?"
  type: multiple-choice
  options:
    - text: "Tras 20 años de tratamiento."
      correct: false
    - text: "A partir de los 60."
      correct: false
    - text: "Nunca. También tras décadas son posibles desplazamientos."
      correct: true
:::

:::standard-flashcards{id=f-shift-std}
- front: "Spirit Breaking (Deegan)"
  back: "Cuando los sistemas de ayuda — la mayoría sin mala intención — rompen el sentido de sí mismo, la voz y la autonomía de una persona."
- front: "Recovery FROM"
  back: "Recuperación DE una enfermedad. La lectura médica: síntomas se van, diagnóstico detrás de ti."
- front: "Recovery IN"
  back: "Recuperación CON una enfermedad. La lectura personal: una vida plena, también si los síntomas permanecen."
- front: "Experta/o de tu vida"
  back: "Tú te conoces mejor. Tu experiencia es conocimiento — junto al saber técnico, no en su lugar."
- front: "Nunca es tarde"
  back: "Recovery no conoce límite de edad ni de gravedad. Posible también tras décadas."
:::


# 12. Apoyo entre pares, Triálogo y EX-IN
{#kap-12 reading_time=5}

## Qué es el apoyo entre pares

El apoyo entre pares significa el acompañamiento por personas que han vivido y elaborado crisis psíquicas. En el ámbito de habla alemana: acompañantes de recuperación, expertas/os por experiencia, pares o trabajadoras/es EX-IN [^utschakowski2009] [^exin_de].

Las raíces llegan lejos — hasta la tradición de autoayuda, hasta el concepto WRAP de Mary Ellen Copeland [^copeland1997], hasta el modelo alemán de Triálogo [^bockpriebe2005] y hasta la iniciativa EX-IN desde 2005 [^utschakowski2009].

## Triálogo — el legado en habla alemana

El Triálogo — la conversación en pie de igualdad entre personas afectadas, familiares y profesionales — fue fundado en 1989 en Hamburgo por Thomas Bock y otras personas [^bockpriebe2005]. Es una aportación de habla alemana al movimiento internacional Recovery y ha transformado de forma duradera la atención sanitaria en D-A-CH [^vonpeter2015].


## Qué muestra la investigación

La base de evidencia del apoyo entre pares es hoy considerable. Un ensayo controlado aleatorizado multicéntrico con más de 600 participantes en cuatro países mostró efectos significativos sobre empoderamiento y calidad de vida [^slade2024peer]. Los metaanálisis actuales encuentran de forma consistente efectos positivos sobre la autoeficacia y efectos menores sobre la esperanza y el empoderamiento [^white2024] [^lyons2021]. Un ensayo controlado aleatorizado alemán también pudo demostrar efectos positivos [^mahlke2017].

Los factores de eficacia son: la experiencia vivida como ancla de credibilidad, la esperanza como modelo, la creación de relación en pie de igualdad y la comunicación no estigmatizante [^mead2001] [^davidson2012].

Wilma Boevink lleva este principio a un punto sencillo: el saber por experiencia que viene del movimiento de personas afectadas es equivalente al saber profesional — y constituye la base de un saber auténtico sobre Recovery [^boevink2012].

:::easy{reading_time=2}
El apoyo entre pares significa: personas que acompañan a otras personas con experiencia parecida.

Eso hace bien. La investigación muestra: si alguien ha «llegado al otro lado» y está delante de ti, es una señal fuerte. Da esperanza.

En el ámbito de habla alemana hay acompañantes de recuperación con una formación (EX-IN).

También existe el Triálogo — conversaciones entre personas afectadas, familiares y profesionales. En pie de igualdad. Sin que nadie sea más importante.

Estas conversaciones existen en muchas ciudades de Suiza, Alemania y Austria.
:::

:::quiz{id=q-12}
- q: "¿Qué significa EX-IN?"
  type: multiple-choice
  options:
    - text: "Un diagnóstico."
      correct: false
    - text: "Experienced Involvement — formación para acompañantes de recuperación."
      correct: true
      explanation: "Desarrollada desde 2005 en Bremen."

- q: "¿Quién habla en el Triálogo en pie de igualdad?"
  type: multiple-choice
  options:
    - text: "Solo profesionales."
      correct: false
    - text: "Personas afectadas, familiares y profesionales juntos."
      correct: true
      explanation: "Fundado en 1989 por Thomas Bock en Hamburgo."

- q: "¿Qué muestra la investigación sobre el apoyo entre pares (Slade et al. 2024)?"
  type: multiple-choice
  options:
    - text: "Sin efectos medibles."
      correct: false
    - text: "Efectos significativos sobre empoderamiento y calidad de vida."
      correct: true
:::

:::flashcards{id=f-12}
- front: "EX-IN"
  back: "Experienced Involvement — formación para personas con experiencia psiquiátrica como acompañantes de recuperación (desde 2005, Bremen). Inspirada por Dorothea Buck."
- front: "Triálogo"
  back: "Conversación en pie de igualdad entre personas afectadas, familiares y profesionales. Fundado en 1989 por Thomas Bock en Hamburgo."
- front: "Apoyo entre pares — factores de eficacia"
  back: "Experiencia vivida como ancla de credibilidad · esperanza como modelo · relación en pie de igualdad · comunicación no estigmatizante."
- front: "Mahlke et al. 2017"
  back: "Ensayo controlado aleatorizado alemán sobre apoyo entre pares uno a uno — demostró efectos significativos sobre empoderamiento y autoeficacia."
:::

:::standard{reading_time=2}
Apoyo entre pares significa: personas que han pasado por una crisis psíquica propia acompañan a otras — en pie de igualdad, con experiencia vivida en lugar de un título profesional.

En el ámbito de habla alemana las llamamos acompañantes de recuperación, expertas/os por experiencia o trabajadoras/es EX-IN. EX-IN viene de «Experienced Involvement» — una formación nacida en 2005 en Bremen, hoy anclada en muchas clínicas, centros de asesoramiento y Recovery Colleges.

Tres conceptos son importantes:

- **Apoyo entre pares:** acompañamiento por alguien con experiencia parecida. Creíble porque ha sido vivido.
- **Triálogo:** la conversación en pie de igualdad entre personas afectadas, familiares y profesionales — fundada en 1989 por Thomas Bock en Hamburgo.
- **EX-IN:** formación estructurada para el acompañamiento de recuperación, inspirada por Dorothea Buck.

Lo que dice la investigación: un gran estudio internacional con más de 600 participantes en cuatro países mostró efectos significativos sobre empoderamiento y calidad de vida. Un estudio alemán lo confirmó. Lo que funciona no es un truco — es el encuentro con alguien que puede decir: «Yo también estuve ahí. Y hay un camino.»

Quizás conoces a alguien cuya historia te ha sostenido. Quizás algún día tú mismo serás esa persona para alguien.
:::

:::standard-quiz{id=q-12-std}
- q: "¿Qué significa EX-IN?"
  type: multiple-choice
  options:
    - text: "Un nuevo diagnóstico."
      correct: false
    - text: "Experienced Involvement — una formación en acompañamiento de recuperación."
      correct: true
      explanation: "Desarrollada desde 2005 en Bremen, hoy anclada en muchas instituciones D-A-CH."
    - text: "Una clase de medicamentos."
      correct: false

- q: "¿Quiénes hablan en el Triálogo?"
  type: multiple-choice
  options:
    - text: "Solo profesionales entre sí."
      correct: false
    - text: "Personas afectadas, familiares y profesionales — en pie de igualdad."
      correct: true
      explanation: "Fundado en 1989 en Hamburgo por Thomas Bock."
    - text: "Solo personas afectadas."
      correct: false
:::

:::standard-flashcards{id=f-12-std}
- front: "Apoyo entre pares"
  back: "Acompañamiento por personas con experiencia de crisis propia. Funciona por la experiencia vivida, la esperanza y la igualdad."
- front: "Triálogo"
  back: "Conversación en pie de igualdad entre personas afectadas, familiares y profesionales. Desde 1989 (Bock, Hamburgo)."
- front: "EX-IN"
  back: "Experienced Involvement — formación para personas con experiencia psiquiátrica, desde 2005."
:::


# 13. Recovery Colleges — aprender en vez de ser tratado
{#kap-13 reading_time=5}

Los Recovery Colleges son un modelo británico que nació a partir de 2009 [^perkins2012]. No son clínicas, sino instituciones educativas. Son gratuitos, abiertos a todas las personas — afectadas, familiares, profesionales e interesadas — y usan la forma pedagógica de la educación de personas adultas en lugar de la sesión terapéutica.

Dos principios centrales caracterizan a los Recovery Colleges [^perkins2012] [^meddings2015]:

- **Educación en vez de terapia.** Las personas participantes son estudiantes, no pacientes. Foco en recursos y aprendizaje, no en déficit y diagnóstico.
- **Coproducción (Co-Production).** Cada curso se desarrolla e imparte juntos por una profesional y una persona con experiencia vivida — en pie de igualdad.

## Qué muestra la investigación

Hayes y sus colegas cuentan en todo el mundo 221 Recovery Colleges en 28 países de cinco continentes [^hayes2023].

El estudio RECOLLECT es hasta ahora el análisis científico más amplio sobre los Recovery Colleges [^henderson2024recollect]. Un estudio de cohortes retrospectivo de Inglaterra con 1.193 estudiantes de Recovery College frente a 3.508 personas de control durante 6, 12 y 60 meses mostró: reducción significativa de hospitalizaciones psiquiátricas, días de cama hospitalarios y consultas de urgencia — con a la vez mejora del bienestar [^ronaldson2024].

Una revisión de diez años de investigación sobre Recovery Colleges [^theriault2020] confirma efectos consistentes sobre esperanza, empoderamiento, autoeficacia, inclusión social, consecución de metas y conocimientos sobre salud mental. Crowther y sus colegas muestran que también las y los profesionales se benefician de trabajar en Recovery Colleges [^crowther2019].

:::info{type=evidence title="Evidencia en el espacio de habla alemana"}
En los últimos años han ido apareciendo datos D-A-CH validados empíricamente sobre la eficacia de la atención orientada a Recovery.

Un ensayo controlado aleatorizado alemán sobre el acompañamiento entre pares en personas con enfermedades psíquicas graves [^mahlke2017] demostró efectos significativos sobre empoderamiento y autoeficacia.

La directriz S3 de la DGPPN «Terapias psicosociales en enfermedades psíquicas graves» (2.ª edición 2019) ha incorporado la orientación a Recovery, el apoyo entre pares y el Shared Decision-Making como recomendaciones [^dgppn2019].

La investigación sobre Recovery Colleges en el ámbito de habla alemana está creciendo — los datos sobre sedes concretas en D-A-CH están en construcción.
:::

En el ámbito de habla alemana hay Recovery Colleges, entre otros, en Berna [^rcbern], en la Suiza Oriental, en Ginebra, en St. Gallen y en Zúrich — y de forma creciente en Alemania y Austria (entre otros, Empowerment College de Bremen).

:::easy{reading_time=2}
Los Recovery Colleges son un tipo especial de escuela. Pero no una escuela para niños.

Aquí las personas adultas aprenden sobre salud mental. Todas pueden venir: personas afectadas, familiares, profesionales, interesadas.

Los cursos son gratis. No necesitas un diagnóstico.

Cada curso se planifica juntos: por una profesional y por una persona con experiencia propia. Las dos son igual de importantes.

Hoy hay más de 220 Recovery Colleges en 28 países. También en Suiza, Alemania y Austria.

La investigación muestra: quien asiste a un Recovery College, está después mejor.
:::

:::quiz{id=q-13}
- q: "¿Quién puede participar en un Recovery College?"
  type: multiple-choice
  options:
    - text: "Solo personas con diagnóstico."
      correct: false
    - text: "Personas afectadas, familiares, profesionales e interesadas — todas."
      correct: true
      explanation: "Abierto a todas. No hace falta diagnóstico. Gratis."

- q: "¿Qué significa 'Co-Production'?"
  type: multiple-choice
  options:
    - text: "Un truco de cine."
      correct: false
    - text: "Profesional y persona con experiencia vivida planifican los cursos juntas — en pie de igualdad."
      correct: true

- q: "¿Qué muestra el estudio de cohortes del Reino Unido Ronaldson et al. 2024?"
  type: multiple-choice
  options:
    - text: "Sin efectos."
      correct: false
    - text: "Reducción significativa de hospitalizaciones psiquiátricas y días de cama."
      correct: true
:::

:::flashcards{id=f-13}
- front: "Recovery College"
  back: "Institución educativa — no lugar de tratamiento. Aprender en vez de terapia. Gratis. Abierto a todas las personas."
- front: "Co-Production"
  back: "Los cursos se desarrollan e imparten juntos por una profesional y una persona con experiencia vivida."
- front: "Eficacia"
  back: "Hayes 2023: 221 Recovery Colleges en 28 países. Ronaldson 2024: menos hospitalizaciones, más bienestar."
:::

:::standard{reading_time=2}
Un Recovery College no es una clínica. Es una escuela para personas adultas — abierta a todas las personas que quieren aprender algo sobre salud mental: afectadas, familiares, profesionales, interesadas. Los cursos son gratuitos, no necesitas un diagnóstico, ni una derivación, ni una inscripción a través del médico de cabecera.

Dos principios sostienen este modelo:

- **Educación en vez de terapia.** Eres estudiante, no paciente. En el centro están el aprendizaje, los recursos y las preguntas — no el diagnóstico ni el déficit.
- **Coproducción (Co-Production).** Cada curso se desarrolla e imparte juntos por una profesional y una persona con experiencia vivida. Las dos fuentes de saber son equivalentes.

El primer Recovery College nació en 2009 en Londres. Hoy hay más de 220 en 28 países en todo el mundo — también en Suiza (entre otros Berna, Suiza Oriental, Ginebra, St. Gallen, Zúrich), en Alemania y en Austria.

El mayor estudio sobre el tema, RECOLLECT en Inglaterra, comparó a casi 1.200 estudiantes de Recovery College con más de 3.500 personas de control durante cinco años. Resultado: menos hospitalizaciones psiquiátricas, menos urgencias, más bienestar. Diez años de investigación confirman: la esperanza, el empoderamiento, la inclusión social y la autoeficacia aumentan de forma medible.

Quizás un Recovery College cerca de ti sea un primer lugar en el que no tengas que explicarte — sino aprender.
:::

:::standard-quiz{id=q-13-std}
- q: "¿Quién puede asistir a un Recovery College?"
  type: multiple-choice
  options:
    - text: "Solo personas con un diagnóstico psiquiátrico."
      correct: false
    - text: "Todas las personas — afectadas, familiares, profesionales, interesadas. Sin diagnóstico."
      correct: true
      explanation: "Los Recovery Colleges son abiertos, gratuitos y no necesitan derivación."
    - text: "Solo profesionales."
      correct: false

- q: "¿Qué significa Co-Production?"
  type: multiple-choice
  options:
    - text: "Grabar varias películas juntos."
      correct: false
    - text: "Los cursos se planifican juntos por una profesional y una experta/o por experiencia — en pie de igualdad."
      correct: true
      explanation: "Es el principio central de los Recovery Colleges."
    - text: "Un vídeo formativo para participar."
      correct: false
:::

:::standard-flashcards{id=f-13-std}
- front: "Recovery College"
  back: "Lugar de educación en lugar de lugar de tratamiento. Gratis, abierto a todas las personas. Aprender en vez de terapia."
- front: "Co-Production"
  back: "Cada curso se diseña juntos por una profesional y una persona con experiencia vivida."
- front: "Efecto (RECOLLECT)"
  back: "Menos hospitalizaciones, menos urgencias, más bienestar — demostrado a lo largo de cinco años."
:::


# 14. Enfoque informado por el trauma
{#kap-14 reading_time=3}

:::info{type=warmth title="Antes de seguir leyendo"}
Este capítulo nombra violencia, abuso, negligencia y discriminación. Si has vivido cosas difíciles, leer puede mover mucho. Es normal. Lee a tu ritmo. Haz pausas. Salta al próximo capítulo si hoy es demasiado. Si necesitas apoyo ahora: el Capítulo 20 (Crisis) está a unos pocos toques — o llama al **Teléfono de la Esperanza 717 003 717** (España), en Suiza **143**, en Alemania **0800 111 0 111**, en Austria **142**.
:::

Muchas personas atendidas en psiquiatría han vivido en su historia experiencias traumáticas — violencia, abuso, abandono, discriminación. También los propios ingresos psiquiátricos pueden tener efectos retraumatizantes [^felitti1998].

Un enfoque informado por el trauma es por eso parte integral de la práctica orientada a Recovery. La agencia estadounidense SAMHSA [^samhsa2014trauma] ha definido para ello seis principios rectores:

- **Seguridad** — física y emocional.
- **Confianza y transparencia** — información clara, marco fiable.
- **Apoyo entre pares** — la experiencia vivida como recurso.
- **Colaboración y reciprocidad** — reducir jerarquías.
- **Empoderamiento, voz y elección** — decisión y autodeterminación.
- **Sensibilidad cultural, histórica y de género.**

Estos principios valen también en un workbook digital. Tú decides qué lees y cuándo, qué guardas, qué borras.

:::easy{reading_time=1}
Muchas personas en psiquiatría han vivido cosas duras. Violencia. Abuso. Abandono.

A veces, también el ingreso en la clínica es una carga.

Por eso es importante un enfoque sensible al trauma. Eso significa:

- Primero la seguridad.
- Generar confianza.
- Comunicar con honestidad.
- Nadie decide por encima de tu cabeza.

Este enfoque vale también en esta app. Tú decides qué lees. Qué guardas. Qué borras.
:::

:::quiz{id=q-14}
- q: "¿Cuántos principios ha definido SAMHSA para una atención informada por el trauma?"
  type: multiple-choice
  options:
    - text: "Tres"
      correct: false
    - text: "Seis"
      correct: true
    - text: "Diez"
      correct: false

- q: "¿Cuál NO es un principio de la práctica informada por el trauma?"
  type: multiple-choice
  options:
    - text: "Seguridad"
      correct: false
    - text: "Rigidez"
      correct: true
      explanation: "La rigidez no figura entre los principios de SAMHSA."
    - text: "Apoyo entre pares"
      correct: false
:::

:::flashcards{id=f-14}
- front: "Seis principios (SAMHSA 2014)"
  back: "Seguridad · confianza y transparencia · apoyo entre pares · colaboración · empoderamiento · sensibilidad cultural/de género."
- front: "Retraumatización"
  back: "Cuando los propios sistemas de ayuda actúan de forma adicionalmente traumatizante. La práctica informada por el trauma quiere evitarlo activamente."
- front: "Estudio ACE (Felitti 1998)"
  back: "Demuestra: las experiencias traumáticas en la infancia están muy extendidas y actúan sobre la salud durante toda la vida."
:::

:::standard{reading_time=2}
Muchas personas atendidas en psiquiatría llevan consigo experiencias duras — violencia, abuso, abandono, discriminación, pérdidas. A veces los propios ingresos psiquiátricos resultan también cargantes o retraumatizantes. Un enfoque informado por el trauma toma esto en serio, sin presionarte a mostrar heridas que no quieres mostrar.

La agencia sanitaria estadounidense SAMHSA ha descrito seis principios rectores que sostienen un acompañamiento sensible al trauma:

- **Seguridad** — física y emocional. Nadie debería estar en un espacio en el que no se sienta seguro.
- **Confianza y transparencia** — información clara, marco fiable, ninguna sorpresa por encima de tu cabeza.
- **Apoyo entre pares** — la experiencia vivida como puente confiable.
- **Colaboración en pie de igualdad** — reducir las jerarquías, no aumentarlas.
- **Empoderamiento, voz y elección** — tú decides. Siempre.
- **Sensibilidad cultural, histórica y de género** — tu historia forma parte de quién eres.

Estos principios valen también en un workbook digital. Tú decides qué lees y cuándo. Qué guardas. Qué borras. Si un capítulo es demasiado, ciérralo. Vuelve cuando estés lista o listo. O déjalo del todo.

Informado por el trauma no significa: primero elaborar el trauma, luego vivir. Significa: todo lo que ocurre aquí presta atención a lo que ya has cargado.
:::

:::standard-quiz{id=q-14-std}
- q: "¿Cuántos principios rectores ha definido SAMHSA para la práctica informada por el trauma?"
  type: multiple-choice
  options:
    - text: "Tres."
      correct: false
    - text: "Seis."
      correct: true
      explanation: "Seguridad, confianza, apoyo entre pares, colaboración, empoderamiento, sensibilidad cultural."
    - text: "Diez."
      correct: false

- q: "¿Quién decide qué se guarda en esta app?"
  type: multiple-choice
  options:
    - text: "La app."
      correct: false
    - text: "Tú. Siempre."
      correct: true
      explanation: "La autodeterminación sobre tus datos es expresión de una actitud sensible al trauma."
:::

:::standard-flashcards{id=f-14-std}
- front: "Seis principios (SAMHSA)"
  back: "Seguridad · confianza y transparencia · apoyo entre pares · colaboración · empoderamiento · sensibilidad cultural y de género."
- front: "Primero la seguridad"
  back: "Nadie decide por encima de tu cabeza. Tú decides ritmo, profundidad y cuándo parar."
- front: "Retraumatización"
  back: "Cuando los sistemas de ayuda hieren adicionalmente. La práctica informada por el trauma quiere evitarlo activamente."
:::


# 15. Recovery y derechos humanos
{#kap-15 reading_time=4}

Recovery no es solo una cuestión técnica, sino también una cuestión de derechos humanos. La Convención de la ONU sobre los Derechos de las Personas con Discapacidad garantiza a las personas con discapacidades — incluidas las discapacidades psíquicas — el derecho a la autodeterminación, la inclusión y la toma de decisiones con apoyo [^uncrpd2006]. Alemania la ratificó en 2009, Austria en 2008, Suiza en 2014. España la ratificó en 2008.

La OMS lanzó en 2019 la iniciativa QualityRights [^who2019] y publicó en 2021 la directriz «Guidance on Community Mental Health Services» [^who2021]. Recovery aparece en ella como principio central de una atención sanitaria moderna.

En concreto significa: reducir la coerción, no situar nunca el diagnóstico por encima de la persona, ofrecer apoyo allí donde las personas lo necesitan — e implicar a las personas afectadas como compañeras a la misma altura en todas las decisiones de atención.

:::info{type=example title="Ejemplo: Diálogo Abierto (Open Dialogue)"}
En la Laponia Occidental finlandesa, Jaakko Seikkula desarrolló en los años 80 el concepto de Diálogo Abierto.

En crisis psicóticas agudas, en 24 horas se implica a todas las personas de referencia importantes. Todas las conversaciones se mantienen en común, todas las decisiones se negocian de forma transparente.

Los resultados a largo plazo son extraordinarios: en la Laponia Occidental, más del 80 % de las personas afectadas por un primer episodio psicótico volvieron al trabajo o a la formación en dos años. Un estudio de 19 años confirmó la estabilidad a largo plazo de los resultados [^seikkula2011] [^bergstroem2018].
:::

:::easy{reading_time=1}
Recovery es también un derecho humano.

La ONU hizo en 2006 un acuerdo. Dice: las personas con discapacidad tienen derecho a decidir sobre sí mismas. También las personas con enfermedades psíquicas.

La OMS dice en 2021: la psiquiatría debe respetar estos derechos. No debe decidir el médico solo. Sino todas las personas juntas.

En Suiza, Alemania, Austria y España vale lo mismo.
:::

:::quiz{id=q-15}
- q: "¿Qué es la CDPD de la ONU?"
  type: multiple-choice
  options:
    - text: "Un método de tratamiento."
      correct: false
    - text: "La Convención de la ONU sobre los Derechos de las Personas con Discapacidad, de 2006."
      correct: true
      explanation: "Suiza la ratificó en 2014, Alemania en 2009, Austria en 2008, España en 2008."

- q: "¿Qué dice la OMS en 2021?"
  type: multiple-choice
  options:
    - text: "Recovery es no científico."
      correct: false
    - text: "La atención debe estar centrada en la persona y basada en derechos."
      correct: true
:::

:::flashcards{id=f-15}
- front: "CDPD ONU 2006"
  back: "Convención de la ONU sobre los Derechos de las Personas con Discapacidad. Garantiza autodeterminación — también en discapacidades psíquicas. Ratificada por CH 2014, DE 2009, AT 2008, ES 2008."
- front: "OMS QualityRights"
  back: "Iniciativa de la OMS desde 2019. Directriz 2021 «Guidance on Community Mental Health Services»: centrada en la persona, basada en derechos, orientada a Recovery."
- front: "Open Dialogue (Seikkula)"
  back: "Laponia Occidental desde los 80. Más del 80 % de las personas afectadas por un primer episodio psicótico volvieron al trabajo o a la formación en 2 años. Confirmado en el seguimiento de 19 años."
:::

:::standard{reading_time=2}
Recovery no es solo una cuestión técnica — es también una cuestión de derechos humanos. Quien enferma psíquicamente no pierde el derecho a ser escuchado, incluido y tomado en serio.

La **Convención de la ONU sobre los Derechos de las Personas con Discapacidad** (CDPD) de 2006 garantiza a todas las personas con discapacidad — física, mental, psíquica — el derecho a la autodeterminación, la inclusión y la toma de decisiones con apoyo. Suiza la ratificó en 2014, Alemania en 2009, Austria en 2008, España en 2008. Es derecho vigente.

La **Organización Mundial de la Salud (OMS)** le dio peso en 2019 con la iniciativa QualityRights y publicó en 2021 la directriz «Guidance on Community Mental Health Services». Recovery aparece allí como principio central de una atención moderna — junto al centrado en la persona y la base en derechos.

¿Qué significa esto en concreto?

- Reducir la coerción — siempre que sea posible.
- No situar nunca el diagnóstico por encima de la persona.
- Ofrecer apoyo allí donde viven las personas.
- Implicar a las personas afectadas como compañeras en pie de igualdad en las decisiones de atención.

Un ejemplo es el **Diálogo Abierto** de Finlandia. En crisis psicóticas agudas, en 24 horas se implica a todas las personas de referencia importantes. Más del 80 % de las personas con primer episodio volvieron al trabajo o a la formación en dos años — estudios a largo plazo confirman la estabilidad de estos resultados.

No necesitas conocer de memoria estos marcos. Pero está bien saberlo: si dices «Quiero participar en la decisión», estás sobre un terreno jurídico sólido.
:::

:::standard-quiz{id=q-15-std}
- q: "¿Qué garantiza la Convención de la ONU también a las personas con enfermedades psíquicas?"
  type: multiple-choice
  options:
    - text: "Una curación rápida."
      correct: false
    - text: "Autodeterminación, inclusión y toma de decisiones con apoyo."
      correct: true
      explanation: "CDPD de 2006. Ratificada por CH 2014, DE 2009, AT 2008, ES 2008."
    - text: "Una forma de terapia concreta."
      correct: false

- q: "¿Qué dice la directriz de la OMS de 2021 sobre la atención psiquiátrica?"
  type: multiple-choice
  options:
    - text: "Debe estar centrada en la persona y basada en derechos."
      correct: true
      explanation: "Recovery aparece allí como principio central."
    - text: "Debe ser lo más institucional y prolongada posible."
      correct: false
    - text: "Debe hacerse sin participación de las personas afectadas."
      correct: false
:::

:::standard-flashcards{id=f-15-std}
- front: "CDPD ONU 2006"
  back: "Convención de la ONU sobre los Derechos de las Personas con Discapacidad. Garantiza autodeterminación — también en discapacidades psíquicas. Ratificada: CH 2014, DE 2009, AT 2008, ES 2008."
- front: "OMS QualityRights"
  back: "Iniciativa de la OMS desde 2019. Directriz 2021: centrada en la persona, basada en derechos, orientada a Recovery."
- front: "Open Dialogue"
  back: "Modelo finlandés. Más del 80 % de las personas con primer episodio psicótico volvieron al trabajo o a la formación en 2 años."
:::


# 16. Enfermedad o Recovery: dos vistas
{#kap-16 reading_time=3}

Recovery es más que un nuevo método — es un cambio de perspectiva [^knuf2026] [^slade2014] [^ameringschmolke2012].

:::table{name="Comparacion-de-paradigmas"}
| Vista orientada a la enfermedad | Vista orientada a Recovery |
|---------------------------------|----------------------------|
| Diagnóstico en el centro | Persona en el centro |
| Ausencia de síntomas como meta | Vida con sentido como meta |
| Experta/o = profesional | Doble experticia: saber profesional + saber por experiencia |
| Plan de tratamiento | Plan de Recovery + plan de tratamiento |
| Adherencia (Compliance) | Shared Decision-Making |
| Mirada de déficit (patogénesis) | Mirada de recursos (salutogénesis) |
| Camino de curación lineal | Camino individual, no lineal |
| La profesional sostiene sola la esperanza | La esperanza se comparte y se presta |
| Paciente / cliente | Persona / persona con experiencia / estudiante |
:::

La columna de la derecha no desplaza a la izquierda. Ambas columnas tienen su lugar — el paradigma orientado a Recovery amplía el médico, no lo sustituye [^slade2014].

Amering y Schmolke subrayan un punto que a menudo se pasa por alto: la práctica orientada a Recovery no es un módulo añadido encima. Es otro modo de producir conocimiento — por la unión del saber profesional y la experiencia vivida como fuentes equivalentes [^ameringschmolke2012].

:::easy{reading_time=2}
Hay dos miradas sobre la enfermedad psíquica:

**Mirada antigua:**
- La enfermedad está en el centro.
- Meta: sin síntomas.
- El médico sabe mejor.
- Tú eres paciente.

**Mirada Recovery:**
- La persona está en el centro.
- Meta: una vida buena.
- Tú y el profesional decidís juntos.
- Tú eres una persona con experiencia.

La mirada antigua no es falsa. Ayuda a menudo. Pero no basta sola.

La mirada Recovery amplía la antigua. No la sustituye.
:::

:::quiz{id=q-16}
- q: "¿Sustituye la mirada Recovery a la mirada médica?"
  type: true-false
  correct: false
  explanation: "No — la amplía. Ambas tienen su lugar."

- q: "¿Qué está en el centro de la mirada Recovery?"
  type: multiple-choice
  options:
    - text: "El diagnóstico"
      correct: false
    - text: "La persona"
      correct: true
:::

:::flashcards{id=f-16}
- front: "Cambio de paradigma"
  back: "De la mirada de déficit (patogénesis) a la mirada de recursos (salutogénesis) — sin renunciar a la mirada médica."
- front: "Compliance vs. Shared Decision-Making"
  back: "Compliance = obedeces. Shared Decision-Making = decidís juntos."
- front: "Síntesis de saberes"
  back: "La práctica orientada a Recovery une saber profesional y experiencia vivida como fuentes equivalentes (Amering & Schmolke 2012)."
:::

:::standard{reading_time=2}
Recovery es más que un nuevo método. Es un cambio de perspectiva — otro modo de mirar la crisis y la recuperación psíquicas.

La **vista orientada a la enfermedad** pone el diagnóstico en el centro. La meta es la ausencia de síntomas. La experta/o es la profesional. Sigues un plan de tratamiento. La mirada se dirige a lo que falta o está alterado — al déficit.

La **vista orientada a Recovery** pone a la persona en el centro. La meta es una vida con sentido — con o a pesar de los síntomas. Hay dos expertos: la profesional Y tú. Las decisiones se toman juntos (Shared Decision-Making). La mirada se dirige a recursos, esperanza, conexión.

Algunos pares de conceptos muestran la diferencia:

- Diagnóstico en el centro → persona en el centro
- Ausencia de síntomas como meta → vida con sentido como meta
- Compliance → Shared Decision-Making
- Mirada de déficit (patogénesis) → mirada de recursos (salutogénesis)
- Camino de curación lineal → camino individual, no lineal
- Paciente → persona / persona con experiencia / estudiante

Importante: la columna derecha no desplaza a la izquierda. Ambas tienen su lugar. Los medicamentos pueden ayudar. Los diagnósticos pueden orientar. Una clínica puede ser un lugar seguro. Pero eso solo no basta — Recovery amplía la imagen médica con tu voz, tus valores, tu sentido.

Amering y Schmolke lo expresan así: la práctica orientada a Recovery no es un módulo añadido encima. Es otra forma de producir conocimiento — por la unión de saber profesional y experiencia vivida como fuentes equivalentes.
:::

:::standard-quiz{id=q-16-std}
- q: "¿Sustituye la mirada Recovery a la mirada médica?"
  type: multiple-choice
  options:
    - text: "Sí, la sustituye por completo."
      correct: false
    - text: "No — la amplía. Ambas tienen su lugar."
      correct: true
      explanation: "Recovery es un cambio de perspectiva, no una renuncia al saber médico."
    - text: "No, está en contradicción con ella."
      correct: false

- q: "¿Qué está en el centro de la mirada Recovery?"
  type: multiple-choice
  options:
    - text: "El diagnóstico."
      correct: false
    - text: "La persona — con su historia, sus valores, su sentido."
      correct: true
      explanation: "El diagnóstico orienta, pero no te define."
    - text: "La clínica."
      correct: false
:::

:::standard-flashcards{id=f-16-std}
- front: "Cambio de paradigma"
  back: "De la mirada de déficit (patogénesis) a la mirada de recursos (salutogénesis) — sin renunciar a la mirada médica."
- front: "Compliance vs. Shared Decision-Making"
  back: "Compliance = obedeces. Shared Decision-Making = decidís juntos."
- front: "Dos experticias"
  back: "Saber profesional Y experiencia vivida son fuentes de saber equivalentes."
:::


# 17. Tres frases para ti
{#kap-17 reading_time=3}

No eres tu diagnóstico. Eres una persona con una historia, con capacidades, con valores, con relaciones. Un diagnóstico puede ser una orientación — nunca es toda la verdad sobre ti.

## Tres frases que se repiten en el movimiento Recovery

- Eres experta o experto de tu vida. Tu experiencia es conocimiento.
- No tienes que cargar con todo a solas. Busca aliadas y aliados — pares, profesionales, personas de confianza.
- Puedes decidir tú misma o tú mismo el ritmo y la dirección. Un retroceso no es un fracaso.

## Lo que la investigación te puede dar

La esperanza es un predictor de la recuperación [^schrank2012]. El apoyo entre pares tiene un efecto medible sobre la autoeficacia [^slade2024peer] [^mahlke2017]. La participación en Recovery Colleges reduce los costes posteriores de atención y aumenta el bienestar [^ronaldson2024]. El auto-estigma se puede cambiar [^yanos2015].

:::reflection{id=7 title="Tu primer paso"}
- ¿A quién podrías dirigirte esta semana y que te escuchara sin juzgar?
- ¿Qué acción pequeña y posible podría ser un ancla de esperanza para los próximos siete días?
- ¿Qué ámbito del modelo CHIME — o de la tríada Esperanza-Poder-Sentido — debería recibir esta semana un poco más de atención?
:::

:::easy{reading_time=1}
No eres tu diagnóstico. Eres una persona.

Tres frases importantes:

- Tú conoces tu vida mejor.
- No tienes que cargar con todo a solas.
- Puedes decidir tu ritmo.

Los retrocesos forman parte. No son un fracaso.
:::

:::quiz{id=q-17}
- q: "¿Qué significa 'in Recovery'?"
  type: multiple-choice
  options:
    - text: "Estás curado/a."
      correct: false
    - text: "Estás en camino — un proceso, no un estado."
      correct: true

- q: "¿Es un retroceso un fracaso?"
  type: true-false
  correct: false
  explanation: "No — los retrocesos forman parte del recorrido no lineal de Recovery."
:::

:::flashcards{id=f-17}
- front: "Eres experta/o de tu vida"
  back: "Nadie conoce tu experiencia como tú. Tu voz cuenta — en pie de igualdad con el saber técnico."
- front: "Ritmo y dirección"
  back: "Tú decides ambos. Recovery no es medible y no es comparable."
:::

:::standard{reading_time=2}
No eres tu diagnóstico. Eres una persona con una historia, con capacidades, con valores, con relaciones. Un diagnóstico puede ser una orientación — nunca es toda la verdad sobre ti.

Tres frases que se repiten una y otra vez en el movimiento Recovery — y que queremos darte:

- **Eres experta o experto de tu vida.** Tu experiencia es conocimiento. Nadie conoce tu aliento, tus noches, tus esperanzas como tú. Esta voz cuenta — en pie de igualdad con cualquier saber técnico.
- **No tienes que cargar con todo a solas.** Busca aliadas y aliados. Pares, profesionales, personas de confianza, familiares, un grupo de autoayuda, un Recovery College. Puedes pedir prestada la esperanza, hasta que vuelvas a sentirla tú.
- **Puedes decidir tú el ritmo y la dirección.** Recovery no es medible y no es comparable. Un retroceso no es un fracaso — forma parte del camino no lineal. A veces hacer pausa también es avanzar.

Lo que la investigación te puede dar: la esperanza es un predictor de la recuperación. El apoyo entre pares fortalece la autoeficacia de forma medible. Los Recovery Colleges bajan las hospitalizaciones y aumentan el bienestar. El auto-estigma se puede cambiar.

Estas tres frases no son un programa para ejecutar. Son más bien como tres piedras que te metes en el bolsillo. Las sacas cuando las necesitas.

Quizás hoy. Quizás dentro de medio año.
:::

:::standard-quiz{id=q-17-std}
- q: "¿Qué significa 'in Recovery'?"
  type: multiple-choice
  options:
    - text: "Estás totalmente curada/o."
      correct: false
    - text: "Estás en camino — un proceso, no un estado."
      correct: true
      explanation: "Recovery es un camino continuo, no un punto de llegada."
    - text: "Estás sin síntomas."
      correct: false

- q: "¿Es un retroceso un fracaso?"
  type: multiple-choice
  options:
    - text: "Sí, entonces el camino ha fracasado."
      correct: false
    - text: "No — forma parte del recorrido no lineal de Recovery."
      correct: true
      explanation: "Recovery rara vez transcurre lineal. Pausas y retrocesos forman parte."
    - text: "Quizás — según lo grande que sea."
      correct: false
:::

:::standard-flashcards{id=f-17-std}
- front: "Tres frases"
  back: "1) Eres experta/o de tu vida. 2) No tienes que cargar a solas. 3) Tú decides ritmo y dirección."
- front: "Retroceso"
  back: "No es un fracaso. Forma parte del camino no lineal."
- front: "Pedir prestada la esperanza"
  back: "Si tú misma no sientes esperanza, puedes pedirla prestada a otras personas — hasta que la vuelvas a tener tú."
:::


# 18. Lenguaje y actitud — por qué las palabras importan
{#kap-18 reading_time=3}

El lenguaje orientado a Recovery no es cosmética. Cambia quién es reconocido como sujeto en un espacio — y quién es convertido en objeto de un tratamiento [^ameringschmolke2012] [^knuf2026].

## Lo que evitamos — y lo que decimos en su lugar

En el discurso de Recovery en habla alemana se ha establecido una serie de reglas concretas de lenguaje [^ameringschmolke2012] [^knuf2026] [^slade2013]:

- «El/la esquizofrénico/a» → mejor: «persona con el diagnóstico de esquizofrenia» (lenguaje centrado en la persona).
- «Paciente» / «cliente» en contexto educativo → mejor: «estudiante», «participante», «persona con experiencia de crisis».
- «Crónico/a», «incurable» → evitar. Ambos términos son empíricamente cuestionables y dañan demostrablemente la recuperación.
- «Compliance» → mejor: «adherencia terapéutica» — mejor aún: «decisión compartida».
- «Conciencia de enfermedad» → mejor: «comprensión propia de la enfermedad».
- «Recovered» / «curada/o» → en español: «en Recovery» (término de proceso).
- «Déficit», «portador/a de síntomas» → mejor: «recurso», «experiencia vital», «conmoción anímica».

El lenguaje también te cambia a ti. Quien empieza a decir «en Recovery», piensa antes en procesos que en estados fijos — y da así a menudo el primer paso imperceptible.

:::easy{reading_time=1}
Las palabras cambian la realidad. Algunos ejemplos:

- No: «enfermo crónico» → mejor: «vive con el diagnóstico»
- No: «Compliance» → mejor: «decisión compartida»
- No: «esquizofrénico» → mejor: «persona con esquizofrenia»
- No: «curado» → mejor: «en Recovery»

El lenguaje no es todo. Pero a menudo cambia el principio.
:::

:::quiz{id=q-18}
- q: "¿Qué formulación es centrada en la persona?"
  type: multiple-choice
  options:
    - text: "El borderliner"
      correct: false
    - text: "Persona con diagnóstico de trastorno límite"
      correct: true

- q: "¿Qué término debería evitarse?"
  type: multiple-choice
  options:
    - text: "Persona con experiencia de crisis"
      correct: false
    - text: "Crónico/a incurable"
      correct: true
      explanation: "Empíricamente cuestionable y demostradamente perjudicial para la recuperación."
:::

:::flashcards{id=f-18}
- front: "Lenguaje centrado en la persona"
  back: "El diagnóstico va después de la persona, no antes. «Persona con esquizofrenia» en lugar de «esquizofrénico»."
- front: "En Recovery"
  back: "El término de proceso. En lugar de «curado» o «enfermo» — como camino continuo."
- front: "Evitar Compliance"
  back: "En lugar de «Compliance» (obedeces instrucciones) mejor «decisión compartida» o «adherencia terapéutica»."
:::

:::standard{reading_time=2}
Las palabras no son inofensivas. Cambian quién es reconocido como persona en un espacio — y quién es convertido en objeto de un tratamiento. Por eso el lenguaje orientado a Recovery no es cosmética. Es actitud.

En el discurso de Recovery en habla alemana se han establecido reglas concretas de lenguaje. Algunos ejemplos:

- «El esquizofrénico» → mejor: «persona con el diagnóstico de esquizofrenia» (**lenguaje centrado en la persona**).
- «Paciente» / «cliente» en contexto educativo → mejor: «estudiante», «participante», «persona con experiencia de crisis».
- «Crónico», «incurable» → evitar. Ambos términos son empíricamente cuestionables y dañan demostrablemente la recuperación.
- «Compliance» → mejor: «adherencia terapéutica» — mejor aún: «decisión compartida».
- «Conciencia de enfermedad» → mejor: «comprensión propia de la enfermedad».
- «Curado» / «recovered» → en español: «en Recovery» — como proceso, no como estado final.
- «Déficit», «portador de síntomas» → mejor: «recurso», «experiencia vital», «conmoción anímica».

Estos cambios no son una mera cuestión de etiquetas. Quien empieza a decir «en Recovery», piensa antes en procesos que en estados fijos. Quien dice «persona con diagnóstico», ve primero a la persona y después el diagnóstico. Eso cambia a menudo justo aquel paso imperceptible con el que comienza algo nuevo.

El lenguaje también te cambia a ti. Cómo hablas de ti misma o de ti mismo marca cómo piensas sobre ti. No tienes que aprender estos conceptos todos a la vez. Pero quizás los próximos días escuches con otros oídos — lo que dicen médicos, familiares, terapeutas, tú misma o tú mismo.

Y si algo te duele: puedes decirlo.
:::

:::standard-quiz{id=q-18-std}
- q: "¿Qué formulación es centrada en la persona?"
  type: multiple-choice
  options:
    - text: "El borderliner."
      correct: false
    - text: "Persona con diagnóstico de trastorno límite."
      correct: true
      explanation: "La persona primero, el diagnóstico después. Eso es lenguaje centrado en la persona."
    - text: "La enferma mental."
      correct: false

- q: "¿Qué término debería evitarse?"
  type: multiple-choice
  options:
    - text: "Persona con experiencia de crisis."
      correct: false
    - text: "Crónico incurable."
      correct: true
      explanation: "Empíricamente cuestionable y demostradamente perjudicial para la recuperación."
    - text: "En Recovery."
      correct: false
:::

:::standard-flashcards{id=f-18-std}
- front: "Lenguaje centrado en la persona"
  back: "El diagnóstico después de la persona — no antes. «Persona con esquizofrenia» en lugar de «esquizofrénico»."
- front: "En Recovery"
  back: "El término de proceso. En lugar de «curado» o «crónico» — como camino continuo."
- front: "Evitar Compliance"
  back: "En lugar de «Compliance» (obedeces) mejor «decisión compartida» o «adherencia terapéutica»."
:::


# 19. Cómo usar este workbook
{#kap-19 reading_time=2}

Este workbook digital no es un libro de texto. Es un compañero de camino:

- Tómate tiempo. Una página al día es suficiente.
- Sé honesta u honesto contigo. Tú decides qué se guarda o comparte.
- Salta. Sigue lo que te llama.
- Repite. La misma pregunta se lee distinta en tres meses.
- Comparte, si quieres — con una persona de confianza, un acompañamiento entre pares, en un grupo.

## Protección de datos y autodeterminación

Todo lo que escribes en esta app es tuyo. Tú decides si algo se sincroniza, se guarda o se borra. Las entradas están cifradas. Es posible borrar tus datos por completo en cualquier momento. Esta arquitectura de autodeterminación no es un detalle técnico, sino expresión de la actitud orientada a Recovery de este workbook [^who2021] [^samhsa2014trauma] [^uncrpd2006].

:::easy{reading_time=1}
Así usas esta app:

- Tómate tiempo. Una página al día es suficiente.
- Sé honesta u honesto contigo.
- Salta de capítulo a capítulo.
- Vuelve. La misma pregunta se lee distinta más tarde.
- Comparte, si quieres.

Tus datos son tuyos. La app solo guarda lo que tú quieras. Puedes borrar todo. En cualquier momento.
:::

:::quiz{id=q-19}
- q: "¿Tienen que leerse los capítulos en orden?"
  type: true-false
  correct: false
  explanation: "No — salta como te encaje."

- q: "¿Quién decide qué se guarda?"
  type: multiple-choice
  options:
    - text: "La app"
      correct: false
    - text: "Tú"
      correct: true
:::

:::flashcards{id=f-19}
- front: "Protección de datos en esta app"
  back: "Tus datos son tuyos. Cifrados. Tú decides qué se sincroniza, se guarda o se borra. Borrable en cualquier momento."
- front: "Forma de trabajar"
  back: "Una página al día. Saltar permitido. Repetir bienvenido. Compartir opcional."
:::

:::standard{reading_time=2}
Este workbook no es un libro de texto. Es un compañero de camino — y tú decides cómo te acompaña.

Algunas indicaciones que se han demostrado útiles:

- **Tómate tiempo.** Una página al día es suficiente. A veces basta un párrafo. No hay un ritmo que tengas que alcanzar.
- **Sé honesta u honesto contigo.** No tienes que demostrarle nada a nadie — tampoco a la app. Tus entradas son para ti.
- **Salta.** Sigue lo que te llama. No tienes que leer en orden.
- **Repite.** La misma pregunta de reflexión se lee distinta en tres meses. Vuelve.
- **Comparte, si quieres.** Con una persona de confianza, un acompañamiento entre pares, un grupo — o con nadie. Ambas opciones son correctas.

**Protección de datos y autodeterminación.** Todo lo que escribes en esta app es tuyo. Tú decides si algo se sincroniza, se guarda o se borra. Las entradas están cifradas. Es posible borrar tus datos por completo en cualquier momento.

Esto no es solo un detalle técnico. Es expresión de la actitud de este workbook: no eres objeto de un tratamiento, sino sujeto de tu camino. La autodeterminación sobre los propios datos es una parte concreta de Recovery — y al mismo tiempo un derecho humano (CDPD ONU, OMS 2021, SAMHSA).

Si un capítulo es demasiado, ciérralo. Si algo te toca, quédate ahí. No hay un orden equivocado. Solo hay tu camino — y este workbook lo acompaña hasta donde tú lo dejes.
:::

:::standard-quiz{id=q-19-std}
- q: "¿Tienes que leer los capítulos en orden?"
  type: multiple-choice
  options:
    - text: "Sí, si no, no funciona."
      correct: false
    - text: "No — salta como te encaje."
      correct: true
      explanation: "Sigue lo que te llama. Repetir es bienvenido."
    - text: "Solo bajo la guía de una profesional."
      correct: false

- q: "¿Quién decide qué se guarda o se borra en la app?"
  type: multiple-choice
  options:
    - text: "La propia app."
      correct: false
    - text: "Tú — en cualquier momento, borrable por completo."
      correct: true
      explanation: "La autodeterminación sobre tus datos es expresión de la actitud orientada a Recovery."
    - text: "Tu profesional."
      correct: false
:::

:::standard-flashcards{id=f-19-std}
- front: "Forma de trabajar"
  back: "Una página al día. Saltar permitido. Repetir bienvenido. Compartir opcional."
- front: "Protección de datos"
  back: "Tus entradas están cifradas y son tuyas. Borrado completo posible en cualquier momento."
- front: "Actitud del workbook"
  back: "Compañero de camino, no libro de texto. Tú decides ritmo, profundidad y alcance — y puedes cerrarlo también."
:::


# 20. Crisis y seguridad — líneas de emergencia
{#kap-20 reading_time=2}

Si ahora mismo estás en una carga aguda — si tienes pensamientos de hacerte daño a ti o a otras personas, o si sientes que los contenidos aquí te desestabilizan adicionalmente — este no es el momento adecuado para preguntas de reflexión. Por favor, busca apoyo ahora.

:::crisis
Las líneas de emergencia están guardadas de forma estructurada en el frontmatter bajo `helplines:`. La app las muestra como tarjetas país por país con tap-to-call y tap-to-open-URL.
:::

Estos servicios son anónimos, gratuitos y sin juicio. No tienes que tener una «crisis de verdad» para llamar. Una llamada en un momento temprano siempre es mejor que ninguna.

:::info{type=warmth title="Antes de cerrar: tres frases para horas difíciles"}
- No tienes que recorrer este camino a solas.
- Un sentimiento es información, no una orden — también el sentimiento más duro se va a mover.
- Pedir ayuda nunca es señal de debilidad. Es señal de que te tomas en serio tu vida.
:::

:::easy{reading_time=1}
Si ahora estás muy mal, no sigas leyendo aquí. Pide ayuda.

- **España**: teléfono 717 003 717 (Teléfono de la Esperanza). 24 horas. Anónimo. También la línea 024 (conducta suicida).
- **Suiza**: teléfono 143 (Die Dargebotene Hand). Día y noche.
- **Alemania**: teléfono 0800 111 0 111.
- **Austria**: teléfono 142.
- **Argentina**: teléfono 135 (CAS).
- **México**: teléfono (55) 5259 8121 (SAPTEL).

Estos servicios son gratuitos y anónimos. Puedes llamar también si no sabes si es lo suficientemente grave.

Una llamada nunca es demasiado pronto.
:::

:::quiz{id=q-20}
- q: "¿Qué número marcas en España para el Teléfono de la Esperanza?"
  type: multiple-choice
  options:
    - text: "112"
      correct: false
    - text: "717 003 717"
      correct: true
    - text: "024"
      correct: false
      explanation: "024 es la línea de atención a la conducta suicida — también muy útil."

- q: "¿Hace falta tener una 'crisis de verdad' para llamar?"
  type: true-false
  correct: false
  explanation: "No — una llamada temprana siempre es mejor que ninguna."
:::

:::flashcards{id=f-20}
- front: "Línea de crisis España"
  back: "717 003 717 — Teléfono de la Esperanza. 24h. También 024 — Línea de atención a la conducta suicida."
- front: "Línea de crisis Suiza"
  back: "143 — Die Dargebotene Hand. Día y noche. Anónimo. Gratis."
- front: "Línea de crisis Alemania"
  back: "0800 111 0 111 o 0800 111 0 222. Telefonseelsorge. 24/7. Gratis."
- front: "Línea de crisis Austria"
  back: "142. Telefonseelsorge. 24/7."
- front: "Líneas en América Latina"
  back: "Argentina: 135 (CAS). México: (55) 5259 8121 (SAPTEL)."
- front: "Niños y jóvenes CH/AT"
  back: "147 — Pro Juventute (CH) y Rat auf Draht (AT). 24/7."
:::

:::standard{reading_time=2}
Si ahora mismo estás en una carga aguda — si tienes pensamientos de hacerte daño a ti o a otras personas, o si los contenidos aquí te desestabilizan adicionalmente — este no es el momento para preguntas de reflexión. Por favor, busca apoyo ahora.

**Los números más importantes:**

- **España:** **717 003 717** — Teléfono de la Esperanza. 24h. Anónimo. Y **024** — Línea de atención a la conducta suicida.
- **Suiza:** **143** — Die Dargebotene Hand. 24/7. Anónimo. Gratis.
- **Alemania:** **0800 111 0 111** o **0800 111 0 222** — Telefonseelsorge. 24/7. Gratis.
- **Austria:** **142** — Telefonseelsorge. 24/7.
- **Argentina:** **135** o **(011) 5275-1135** — Centro de Asistencia al Suicida. 24/7.
- **México:** **(55) 5259 8121** — SAPTEL. 24/7.

En peligro de vida: **112** (en España y la UE), **911** en muchos países de América Latina, **144** (servicio sanitario CH/AT).

Para niños y jóvenes en Suiza/Austria: **147** (Pro Juventute CH / Rat auf Draht AT). 24/7.

Estos servicios son anónimos, gratuitos y sin juicio. No tienes que tener una «crisis de verdad» para llamar. No tienes que explicar si es lo suficientemente grave. Una llamada en un momento temprano siempre es mejor que ninguna.

**Tres frases para horas difíciles — antes de cerrar:**

- No tienes que recorrer este camino a solas.
- Un sentimiento es información, no una orden. Incluso el sentimiento más duro se va a mover.
- Pedir ayuda no es señal de debilidad. Es señal de que te tomas en serio tu vida.

Si ahora mismo no puedes llamar a nadie: contacta con una persona en la que confíes. Escribe un mensaje. Ve a la urgencia más cercana. Un pequeño movimiento hacia fuera basta.

No estás sola. No estás solo. Incluso si ahora se siente así.
:::

:::standard-quiz{id=q-20-std}
- q: "¿Qué número marcas en España en una carga psíquica aguda?"
  type: multiple-choice
  options:
    - text: "112"
      correct: false
      explanation: "112 es la urgencia general. Para crisis psíquica usa 717 003 717 o 024."
    - text: "717 003 717 (Teléfono de la Esperanza) o 024 (atención a la conducta suicida)"
      correct: true
      explanation: "Líneas específicas para crisis psíquica y conducta suicida."
    - text: "144"
      correct: false

- q: "¿Tienes que tener una 'crisis de verdad' para llamar?"
  type: multiple-choice
  options:
    - text: "Sí, si no, no te toman en serio."
      correct: false
    - text: "No — una llamada temprana siempre es mejor que ninguna."
      correct: true
      explanation: "Puedes llamar incluso si no estás segura o seguro."
    - text: "Solo en peligro de vida."
      correct: false
:::

:::standard-flashcards{id=f-20-std}
- front: "Línea de crisis España"
  back: "717 003 717 — Teléfono de la Esperanza, 24h. Y 024 — atención a la conducta suicida, 24/7."
- front: "Línea de crisis Suiza"
  back: "143 — Die Dargebotene Hand. 24/7. Anónimo. Gratis."
- front: "Línea de crisis Alemania"
  back: "0800 111 0 111 o 0800 111 0 222 — Telefonseelsorge. 24/7. Gratis."
- front: "Línea de crisis Austria"
  back: "142 — Telefonseelsorge. 24/7."
- front: "Líneas en América Latina"
  back: "Argentina: CAS 135. México: SAPTEL (55) 5259 8121."
- front: "¿Cuándo llamar?"
  back: "Siempre. También en la duda. Una llamada nunca es demasiado pronto."
:::


# 21. Una pequeña promesa al final
{#kap-21 reading_time=2}

Recovery no significa que todo vuelva a ser como una vez fue. Significa que algo nuevo puede nacer — a veces incluso algo que sin esta experiencia nunca habría existido.

Tendrás días en los que todo esto suene como una promesa vacía. Y tendrás días en los que tú mismo o tú misma notes que algo se ha desplazado — una esperanza minúscula, una pequeña conexión, un pensamiento que antes no era posible.

Lo que la investigación te puede dar para el camino: no estás sola. No estás solo. Hay un camino. Y puedes pedir prestada la esperanza, hasta que vuelvas a sentirla.

:::quote{author="Patricia Deegan, 1996" source="deegan1996" lang="en"}
By accepting what we cannot do or be, we begin to discover what we can do and who we can become.
:::

:::quote-translation{source="deegan1996" translator="traducción propia"}
Al aceptar lo que no podemos hacer o ser, comenzamos a descubrir lo que sí podemos hacer y en quién podemos llegar a convertirnos.
:::

:::quote{author="Antonio Machado"}
Caminante, no hay camino, se hace camino al andar.
:::

:::pull
En tu camino.
:::

:::easy{reading_time=1}
Recovery no significa: todo será como antes.

Recovery significa: algo nuevo puede nacer.

Tendrás días duros. También tendrás días más ligeros.

Tres frases al final:

- No estás sola, no estás solo.
- Hay un camino.
- Puedes pedir prestada la esperanza, hasta que la vuelvas a tener.

En tu camino.
:::

:::quiz{id=q-21}
- q: "¿Qué imagen describe Recovery mejor?"
  type: multiple-choice
  options:
    - text: "Una línea recta hacia la meta."
      correct: false
    - text: "Un camino que se hace al andar (Machado)."
      correct: true

- q: "¿De quién es el camino?"
  type: multiple-choice
  options:
    - text: "Del médico."
      correct: false
    - text: "Tuyo — con aliadas y aliados."
      correct: true
:::

:::flashcards{id=f-21}
- front: "En tu camino"
  back: "La frase de cierre de la introducción. Recovery siempre es tu camino — con aliadas y aliados."
- front: "Tres frases finales"
  back: "No estás sola/o. Hay un camino. Puedes pedir prestada la esperanza, hasta que la vuelvas a tener."
- front: "Se hace camino al andar"
  back: "Antonio Machado — el lema de muchos workbooks de Recovery y también de esta app."
:::

:::standard{reading_time=2}
Recovery no significa que todo vuelva a ser como una vez fue. Significa que algo nuevo puede nacer — a veces incluso algo que sin esta experiencia nunca habría existido. Otra profundidad. Otra atención. A veces un lenguaje que antes no tenías.

Tendrás días en los que todo esto suene como una promesa vacía. Y tendrás días en los que tú mismo o tú misma notes que algo se ha desplazado — una esperanza minúscula, una pequeña conexión, un pensamiento que antes no era posible.

Las dos cosas forman parte. Recovery no es un camino recto. Tiene pausas, lazos, vueltas atrás. Antonio Machado lo dijo así: «Caminante, no hay camino, se hace camino al andar.» Vale también para tu camino.

Lo que la investigación te puede dar para el camino:

- **No estás sola. No estás solo.** Miles de personas han pasado por tiempos parecidos — y han encontrado una vida buena.
- **Hay un camino.** Aunque hoy sea invisible. Aunque no se parezca al camino de otras personas.
- **Puedes pedir prestada la esperanza.** Si no la tienes ahora, otros la sostienen por ti — un acompañamiento entre pares, una terapeuta, una amiga, un libro, una historia de este workbook.

Puedes volver a cerrar este workbook. Puedes abrirlo meses después. Puedes compartirlo. Puedes olvidarlo. Puedes también decir: hoy no.

Lo que queda es esta pequeña promesa: en tu camino. Vamos un trecho contigo.
:::

:::standard-quiz{id=q-21-std}
- q: "¿Qué pasa si ahora no sientes esperanza?"
  type: multiple-choice
  options:
    - text: "Entonces Recovery se ha terminado."
      correct: false
    - text: "Entonces puedes pedir prestada la esperanza a otras personas — hasta que la vuelvas a tener tú."
      correct: true
      explanation: "La esperanza es compartible. Otras personas pueden sostenerla por ti."
    - text: "Entonces has hecho algo mal."
      correct: false

- q: "¿Cómo transcurre Recovery?"
  type: multiple-choice
  options:
    - text: "Como una línea recta hacia la meta."
      correct: false
    - text: "Como un camino individual — con pausas, lazos, vueltas atrás. «Caminante, no hay camino, se hace camino al andar.» (Machado)"
      correct: true
      explanation: "Recovery no es lineal. Los retrocesos forman parte."
    - text: "Exactamente igual que en otras personas."
      correct: false
:::

:::standard-flashcards{id=f-21-std}
- front: "Recovery"
  back: "Algo nuevo puede nacer. No: todo será como antes."
- front: "Pedir prestada la esperanza"
  back: "Si tú no la tienes: otras personas la sostienen por ti — hasta que la vuelvas a sentir."
- front: "Tres frases finales"
  back: "No estás sola/o. Hay un camino. Puedes pedir prestada la esperanza."
- front: "En tu camino"
  back: "«Se hace camino al andar.» (Antonio Machado) — Vamos un trecho contigo."
:::


# Notas metodológicas (internas)
{#methodik}

Todas las afirmaciones se han comprobado contra las fuentes primarias listadas en el frontmatter. Donde había revisiones y metaanálisis, se les ha dado prioridad sobre los estudios individuales.

Las citas literales se reproducen en su redacción original (widget Quote con referencia `source`). Las versiones en español están marcadas como «traducción propia» (widget Quote-Translation). Los conceptos y modelos (CHIME, CHIME-D, Esperanza-Poder-Sentido, Personal Medicine, Triálogo, EX-IN, Salutogénesis, Open Dialogue) se utilizan como términos científicos y están vinculados en el registro de fuentes con sus autoras y autores.


Esta traducción al español es un borrador automático (Claude subagent, 2026-06-20). En particular el contenido sobre crisis y trauma (capítulos 14 y 20) debe ser revisado por una persona profesional con experiencia clínica y por hablantes nativas/os antes de su uso.
