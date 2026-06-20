---
schema_version: "1.2"
content_id: "recovery-einleitung"
content_version: "3.14"
title: "Recovery"
subtitle: "Une introduction complète — Espoir. Pouvoir. Sens."
language: "fr"
translation_status: "draft-machine-translated"
translation_date: "2026-06-20"
translator: "Claude subagent (draft — needs professional review of crisis content). Updated 2026-06-20 with Standard mode blocks"
region: "D-A-CH"
target_audience: "betroffene"
target_audience_label: "Pour les personnes ayant une expérience vécue de difficultés psychiques"
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
    status: "draft-machine-translated"
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
  full:  "Détaillé — avec recherche, citations et sources"
  easy:  "Simple — court et en langage facile"
  standard: "Standard — longueur moyenne, clair et personnel"
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

# === CRISIS HELPLINES (D-A-CH) ===
helplines:
  - country: "CH"
    name: "Die Dargebotene Hand"
    number: "143"
    coverage: "24/7"
    target: "tous"
    url: "https://www.143.ch"
  - country: "CH"
    name: "Pro Juventute"
    number: "147"
    coverage: "24/7"
    target: "enfants/adolescents"
    url: "https://www.147.ch"
  - country: "CH"
    name: "Numéro d'urgence général / Sanitaire"
    number: "144"
    coverage: "Urgence vitale"
    target: "tous"
  - country: "DE"
    name: "Telefonseelsorge"
    number: "0800 111 0 111 / 0800 111 0 222"
    coverage: "24/7, gratuit, anonyme"
    target: "tous"
    url: "https://www.telefonseelsorge.de"
  - country: "DE"
    name: "Info-Telefon Depression"
    number: "0800 33 44 533"
    coverage: "Lu/Ma/Je 13h–17h, Me/Ve 8h30–12h30"
    target: "tous"
    url: "https://www.deutsche-depressionshilfe.de"
  - country: "DE"
    name: "Numéro d'urgence général"
    number: "112"
    coverage: "Urgence vitale"
    target: "tous"
  - country: "AT"
    name: "Telefonseelsorge"
    number: "142"
    coverage: "24/7"
    target: "tous"
    url: "https://www.telefonseelsorge.at"
  - country: "AT"
    name: "Rat auf Draht"
    number: "147"
    coverage: "24/7"
    target: "enfants/adolescents"
    url: "https://www.rataufdraht.at"
  - country: "AT"
    name: "Numéro d'urgence général / Secours"
    number: "144"
    coverage: "Urgence vitale"
    target: "tous"
  - country: "EU"
    name: "European Emergency Number"
    number: "112"
    coverage: "UE, urgence vitale"
    target: "tous"
  - country: "FR"
    name: "SOS Amitié"
    number: "09 72 39 40 50"
    coverage: "24/7, anonyme, gratuit"
    target: "tous"
    url: "https://www.sos-amitie.com"
  - country: "FR"
    name: "Suicide Écoute"
    number: "01 45 39 40 00"
    coverage: "24/7"
    target: "tous"
    url: "https://www.suicide-ecoute.fr"
  - country: "FR"
    name: "Numéro national de prévention du suicide"
    number: "3114"
    coverage: "24/7, gratuit"
    target: "tous"
    url: "https://3114.fr"
  - country: "BE"
    name: "Centre de Prévention du Suicide"
    number: "0800 32 123"
    coverage: "24/7"
    target: "tous"
    url: "https://www.preventionsuicide.be"
---
# Note importante avant la lecture
{#disclaimer reading_time=2}

:::info{type=warmth title="À lire en premier"}
Cette application est un **prototype**. Elle est en cours de développement et n'est pas terminée.

Elle sert uniquement à tester un futur workbook possible dans le domaine du recovery.
:::

## Ce que c'est et ce que ce n'est pas

Tu utilises actuellement une **version test** d'une application encore en développement. Les textes et fonctionnalités sont une première ébauche. Ils n'ont pas encore été contrôlés de manière professionnelle — ni sur le plan clinique, ni sur le plan linguistique.

**Cette application n'est PAS un outil thérapeutique.** Elle ne remplace ni un traitement, ni une thérapie, ni un avis médical, ni une intervention de crise.

## Merci de respecter les règles suivantes

- **À ne pas utiliser en milieu clinique.** Dans sa forme actuelle, cette application ne doit pas être utilisée comme outil dans les cliniques, cabinets, centres de consultation ou autres lieux de prise en charge.
- **À ne pas utiliser comme seul soutien dans le privé.** Si tu es toi-même concerné·e, utilise cette application uniquement dans le cadre d'une phase de test organisée — pas comme accompagnement unique dans une période difficile.
- **En cas de doute : va chercher de l'aide réelle.** Si ça ne va pas, adresse-toi à une personne de confiance, à tes soignant·es ou aux numéros de crise listés au chapitre 20 de ce workbook.

## Aucune garantie, aucune responsabilité

Les contenus de cette application sont mis à disposition sans aucune garantie. Aucune responsabilité n'est assumée pour des dommages — matériels ou immatériels — qui pourraient résulter de l'utilisation ou de la non-utilisation de cette application.

L'application a été conçue au mieux de nos connaissances et sur la base de la recherche actuelle en recovery. Malgré cela, elle peut contenir des erreurs, des imprécisions ou des formulations inadéquates. Si tu remarques quelque chose, ton retour est le bienvenu — c'est justement à cela que sert cette phase de test.

## Si tu traverses actuellement une crise

Si lire cette application te coûte ou te déstabilise, mets-la de côté.

En cas de crise aiguë, tu peux joindre à toute heure :
- **Suisse :** 143 (La Main Tendue)
- **Allemagne :** 0800 111 0 111 (Telefonseelsorge)
- **Autriche :** 142 (Telefonseelsorge)
- **En cas de danger vital :** 112 ou 144 (CH/AT) ou 112 (DE)

Demander de l'aide n'est jamais trop tôt.

:::standard{reading_time=2}
Tu utilises actuellement un **prototype**. Cette application n'est pas encore finalisée — elle a pour but de montrer à quoi pourrait ressembler un futur workbook Recovery. Les textes et fonctions sont une première ébauche et n'ont pas encore été révisés professionnellement.

**Cette application n'est pas un outil thérapeutique.** Elle ne remplace ni traitement, ni thérapie, ni conseil médical, ni intervention de crise.

**Merci de respecter ces règles :**

- Ne l'utilise pas dans un cadre clinique — c'est-à-dire pas dans les cliniques, cabinets ou services de conseil comme moyen d'aide.
- Ne l'utilise pas comme unique soutien dans une situation difficile.
- En cas de doute : cherche une vraie aide — une personne de confiance, ton équipe soignante ou une ligne de crise.

**En cas de crise aiguë**, tu peux appeler 24h/24 : La Main Tendue (Suisse) **143**, 3114 (France), 107 (Belgique), Allemagne **0800 111 0 111**, Autriche **142**. En danger de mort : **112**.

Le contenu est fourni sans garantie. Si quelque chose te frappe, nous accueillons volontiers ton retour — c'est précisément à cela que sert cette phase de test.

En poursuivant la lecture, tu confirmes avoir compris ces avertissements.
:::

:::pull
En continuant la lecture, tu confirmes que tu as compris ces indications et que tu utilises l'application dans le cadre d'une phase de test.
:::


# Avant-propos : Recovery commence par des histoires
{#vorspann reading_time=4}

:::pull
Recovery, ce sont plusieurs milliers d'histoires de personnes qui, malgré ou grâce à leurs symptômes, ont trouvé un chemin vers une bonne vie.
:::

Ce sont des histoires qui se retrouvent rarement dans les journaux, parce qu'elles ne fournissent aucun scandale. Des histoires qui se produisent pourtant chaque jour — dans des librairies, devant des pianos, dans des chorales, dans des groupes de parole, dans des salons, dans des salles d'attente, dans des cuisines.

Une femme qui était longtemps convaincue qu'elle n'exercerait plus jamais de métier, et qui tient aujourd'hui une petite librairie. Un père qui rejoue du piano après une psychose — autrement qu'avant, avec moins de perfection, avec plus d'amour. Un jeune homme qui, après des années avec un diagnostic borderline, est devenu pair-aidant en rétablissement parce qu'il veut tendre aux autres la main qui lui a manqué. Une mère qui a accompagné sa fille à travers un trouble alimentaire sévère et qui dit : durant cette période, j'ai plus appris sur l'amour que durant toute ma vie d'avant.

De telles histoires, il n'y en a pas par douzaines. Il y en a par milliers. Probablement par centaines de milliers. Autant qu'il y a de personnes ayant un jour traversé une période psychique difficile.

## Recovery est documenté

Le Scottish Recovery Network a rassemblé en 2007 soixante-quatre de ces histoires et les a analysées systématiquement [^brown2007]. L'initiative britannique ImROC collecte des récits d'expérience depuis des années [^imroc]. La communauté internationale des entendeurs de voix (Hearing Voices) rassemble depuis les années 1990 des voix qu'on ne trouve pas dans les manuels [^hvn].

À l'Université de Nottingham, Mike Slade a bâti avec le programme NEON — Narrative Experiences Online — une collection scientifique d'histoires de rétablissement enregistrées [^slade2021neon]. Des essais contrôlés randomisés ont montré que l'écoute de ces récits améliore mesurablement la qualité de vie — chez des personnes ayant une expérience de psychose [^rennick2024neon] et chez les proches qui les accompagnent [^neonc2024].

Autrement dit : Recovery n'est pas seulement une promesse ressentie. Recovery est un phénomène documenté. Et les histoires d'autres personnes constituent en elles-mêmes une forme d'aide.

## Recovery est pratique

Recovery ne se passe pas d'abord dans le cabinet de consultation. Recovery, ce sont des rencontres. Recovery, c'est le jardin où l'on plante à nouveau après des mois. Le chien qui retrouve la porte chaque matin. La chorale dans laquelle ton propre souffle retrouve une voix. L'amie qui écoute, sans vouloir réparer. Le cercle trialogique du mercredi soir. La marche dans les collines. Le pain au levain qui a besoin de douze heures.

Recovery, ce sont des histoires de résilience — et de créativité, qui naît souvent précisément là où quelque chose s'est brisé. Recovery, c'est très souvent aussi : du bonheur.

Pas le bonheur sans tache, toujours éclatant, des brochures sur papier glacé. Mais l'autre — le bonheur silencieux, reconnaissant, parfois étonné. Le bonheur qu'on ne connaît qu'une fois qu'on a su combien une journée peut être longue.

## Et toi ?

Tu n'as besoin de rien ressentir de tout cela pour être ici. Peut-être que ce n'est pas le moment des grands mots comme bonheur ou sens. Peut-être qu'aujourd'hui, il suffit que tu lises cette page. C'est assez.

Ce carnet est écrit pour des personnes qui empruntent un tel chemin — ou qui l'accompagnent, ou qui veulent le comprendre. Il ne veut pas être une belle théorie. Il veut être un panneau indicateur.

:::pull
Avant de commencer — un bref repère.
:::

:::easy{reading_time=1}
Recovery est un mouvement. Beaucoup de gens y sont arrivés : ils ont vécu une période difficile. Aujourd'hui, ils vivent bien. Malgré la maladie. Parfois même grâce à elle.

Il existe des milliers d'histoires de ce genre.

Recovery ne se passe pas seulement chez le médecin. Recovery se passe dans ta vie. En cuisinant. En marchant. En parlant avec de bonnes personnes.

Ce carnet veut t'aider. Ce n'est pas un livre pour apprendre. C'est un compagnon.
:::

:::quiz{id=q-vorspann}
- q: "Où Recovery se passe-t-il le plus souvent ?"
  type: multiple-choice
  options:
    - text: "Seulement à la clinique."
      correct: false
      explanation: "Non. Recovery se passe surtout dans la vie de tous les jours — dans les rencontres, dans les petits pas."
    - text: "Dans la vie — dans les rencontres, au quotidien."
      correct: true
      explanation: "Exactement. Le traitement est un outil, pas un lieu."
    - text: "Seulement quand tous les symptômes ont disparu."
      correct: false
      explanation: "Recovery ne commence pas seulement après la disparition des symptômes."

- q: "Combien existe-t-il d'histoires de Recovery ?"
  type: multiple-choice
  options:
    - text: "Une poignée."
      correct: false
    - text: "Quelques centaines."
      correct: false
    - text: "Des milliers, voire des centaines de milliers."
      correct: true
      explanation: "Autant qu'il y a de personnes ayant un jour traversé une période difficile."
:::

:::flashcards{id=f-vorspann}
- front: "Recovery commence par …"
  back: "… des histoires. Des milliers de personnes qui, malgré ou grâce à leurs symptômes, ont trouvé un chemin vers une bonne vie."
- front: "Programme NEON"
  back: "Collection scientifique d'histoires de Recovery enregistrées (Université de Nottingham). Les études montrent : écouter ces récits améliore mesurablement la qualité de vie."
- front: "Recovery se passe …"
  back: "… pas d'abord dans le cabinet de consultation. Dans le jardin, dans la chorale, dans la conversation, en cuisinant, dans les rencontres."
:::

:::standard{reading_time=2}
Recovery commence par des histoires. Pas par une théorie, pas par des diagnostics — par des personnes qui ont trouvé un chemin.

Une femme qui pensait depuis des années qu'elle n'exercerait plus jamais de métier, et qui tient aujourd'hui une petite librairie. Un père qui rejoue du piano après une psychose — autrement qu'avant, avec moins de perfection, avec plus d'amour. Un jeune homme qui, après un diagnostic borderline, accompagne aujourd'hui d'autres personnes parce qu'il veut leur tendre la main qui lui a manqué.

De telles histoires, il n'y en a pas par douzaines. Il y en a par milliers. Autant qu'il y a de personnes ayant un jour traversé une période psychique difficile.

Recovery, c'est plus qu'une promesse ressentie. Recovery est documenté :

- Le Scottish Recovery Network a analysé systématiquement 64 parcours de vie.
- L'Université de Nottingham collecte scientifiquement des récits de rétablissement.
- Des études montrent : écouter ces récits améliore mesurablement la qualité de vie.

Recovery, ce n'est aussi que rarement d'abord dans le cabinet de consultation. Recovery, c'est le jardin où l'on replante après des mois. La chorale dans laquelle ton souffle retrouve une voix. L'amie qui écoute, sans vouloir réparer.

Tu n'as encore besoin de rien ressentir de tout cela pour être ici. Peut-être qu'aujourd'hui, il suffit que tu lises cette page. C'est assez.

Ce carnet est un panneau indicateur. Pas une belle théorie — mais un compagnon sur ton chemin.
:::

:::standard-quiz{id=q-vorspann-std}
- q: "Où Recovery se passe-t-il surtout ?"
  type: multiple-choice
  options:
    - text: "Seulement à la clinique ou en thérapie."
      correct: false
      explanation: "Recovery se passe surtout dans la vie quotidienne — dans les rencontres, au jardin, dans la chorale, en cuisinant."
    - text: "Dans la vie — dans les rencontres et au quotidien."
      correct: true
      explanation: "Exactement. Le traitement est un outil, pas un lieu."
    - text: "Seulement quand tous les symptômes ont disparu."
      correct: false
      explanation: "Non. Recovery commence au milieu de la difficulté."

- q: "Combien existe-t-il d'histoires de Recovery ?"
  type: multiple-choice
  options:
    - text: "Une poignée."
      correct: false
    - text: "Des milliers, probablement des centaines de milliers."
      correct: true
      explanation: "Autant qu'il y a de personnes ayant un jour traversé une période difficile."
    - text: "Seulement quelques cas isolés."
      correct: false
:::

:::standard-flashcards{id=f-vorspann-std}
- front: "Recovery commence par …"
  back: "… des histoires. Des milliers de personnes qui, malgré ou grâce à leurs symptômes, ont trouvé un chemin vers une bonne vie."
- front: "Où Recovery a-t-il lieu ?"
  back: "Dans le quotidien. Au jardin, dans la chorale, dans la conversation, en cuisinant. Le traitement est un outil, pas un lieu."
- front: "Es-tu seul·e ?"
  back: "Non. Des milliers de personnes ont traversé des moments semblables. Leurs histoires le montrent : il existe un chemin."
:::


# Une brève note sur le langage
{#sprache reading_time=2}

Les mots créent la réalité. Quand on s'adresse à quelqu'un comme à « un schizophrène », il entend un diagnostic. Quand on s'adresse à quelqu'un comme à « une personne ayant un diagnostic de schizophrénie », il reste d'abord une personne. Cette introduction utilise délibérément un langage centré sur la personne (person-first) : le diagnostic après la personne, pas avant elle [^ameringschmolke2012] [^knuf2026].

Nous parlons de personnes en crise psychique, ayant une expérience de crise ou une expérience de la psychiatrie — pas de « malades ». Nous parlons de personnes en Recovery — pas de personnes « guéries ». Nous utilisons le tutoiement, parce que ce carnet numérique est un espace personnel — pas parce que nous nous placerions au-dessus de toi. Si tu lis ces pages en tant que professionnel·le, prends ce « tu » comme un modèle de style qui crée la proximité sans souligner la hiérarchie.

Aucune traduction française accrocheuse de Recovery ne s'est imposée — pas plus que pour le terme étroitement apparenté d'empowerment. C'est pourquoi nous utilisons Recovery de bout en bout comme terme technique et lui adjoignons, dans le chapitre suivant, la lecture allemande complémentaire « Espoir — Pouvoir — Sens » [^ameringschmolke2006].

:::easy{reading_time=1}
Les mots sont importants.

Qui est appelé « schizophrène » n'est plus qu'un malade. Qui est appelé « personne avec une schizophrénie » reste d'abord une personne.

Nous utilisons le mot Recovery. C'est de l'anglais. Il n'y a pas de bon mot français pour le dire. Recovery veut dire : suivre un chemin vers une bonne vie.

Dans cette application, nous te tutoyons. Pas parce que nous serions meilleurs. Mais parce que cet espace est ton espace.
:::

:::quiz{id=q-sprache}
- q: "Quelle formulation est centrée sur la personne (person-first) ?"
  type: multiple-choice
  options:
    - text: "Le schizophrène"
      correct: false
    - text: "Personne ayant un diagnostic de schizophrénie"
      correct: true
      explanation: "Le diagnostic après la personne, pas avant elle."
    - text: "Un schizo"
      correct: false
:::

:::flashcards{id=f-sprache}
- front: "Langage centré sur la personne (person-first)"
  back: "Diagnostic après la personne, pas avant elle : « personne avec une schizophrénie » plutôt que « schizophrène »."
- front: "Pourquoi Recovery comme terme ?"
  back: "Il n'existe pas de traduction française élégante. Recovery est utilisé de manière constante comme terme technique consacré."
:::

:::standard{reading_time=2}
Les mots créent la réalité. Ils ne sont pas anodins.

Quand on s'adresse à quelqu'un comme à « un schizophrène », il entend un diagnostic avant d'être une personne. Quand on s'adresse à lui comme à « une personne ayant un diagnostic de schizophrénie », il reste d'abord une personne — et porte le diagnostic comme une part de lui, pas comme un tout.

Ce carnet utilise délibérément un langage centré sur la personne (person-first) : le diagnostic après la personne, pas avant elle.

Concrètement, cela veut dire :

- Nous parlons de personnes en crise psychique, pas de « malades ».
- Nous parlons de personnes en Recovery, pas de personnes « guéries ».
- Nous parlons d'accompagnement par les pairs, pas de « travail avec les internés ».

Pour le mot Recovery lui-même, il n'existe pas de traduction française accrocheuse — pas plus que pour empowerment. C'est pourquoi nous utilisons Recovery de bout en bout comme terme technique. Dans le chapitre suivant, nous lui adjoignons la lecture allemande « Espoir — Pouvoir — Sens ».

Une particularité : nous te tutoyons d'un bout à l'autre. Pas parce que nous nous placerions au-dessus de toi — au contraire. Le carnet numérique est un espace personnel. Le tutoiement crée la proximité sans souligner la hiérarchie. Si tu lis ces pages en tant que professionnel·le : prends ce tutoiement comme un modèle de style qui exprime l'égalité à hauteur d'humain.
:::

:::standard-quiz{id=q-sprache-std}
- q: "Quelle formulation est centrée sur la personne (person-first) ?"
  type: multiple-choice
  options:
    - text: "Le schizophrène"
      correct: false
      explanation: "Ici, le diagnostic vient en premier — ce n'est pas person-first."
    - text: "Personne ayant un diagnostic de schizophrénie"
      correct: true
      explanation: "Exactement. Le diagnostic après la personne — la personne reste visible en premier."
    - text: "Un schizo"
      correct: false
      explanation: "Stigmatisant et réduit la personne à son diagnostic."

- q: "Pourquoi le carnet utilise-t-il le tutoiement ?"
  type: multiple-choice
  options:
    - text: "Parce que les auteur·e·s se sentent supérieur·e·s."
      correct: false
    - text: "Parce que le carnet numérique est un espace personnel — proximité sans hiérarchie."
      correct: true
      explanation: "Le tutoiement crée la proximité, pas une distance vers le bas."
:::

:::standard-flashcards{id=f-sprache-std}
- front: "Langage centré sur la personne (person-first)"
  back: "Diagnostic après la personne, pas avant elle. « Personne avec une schizophrénie » plutôt que « schizophrène »."
- front: "Pourquoi « Recovery » reste-t-il anglais ?"
  back: "Il n'existe pas de traduction française accrocheuse. Recovery est utilisé comme terme technique consacré."
:::


# Bienvenue
{#willkommen reading_time=3}

Bienvenue. Nous sommes content·e·s que tu sois là.

Ce carnet numérique est écrit pour toi — si tu traverses toi-même actuellement une période difficile, si tu as reçu un diagnostic ou si tu vis depuis longtemps avec une maladie psychique.

Peut-être que tu as été souvent en traitement. Peut-être que tu es au début. Peut-être que tu as déjà fait un long chemin et que tu cherches un nouveau langage pour ce que tu vis.

Ce carnet est écrit de manière à ce que tu puisses l'explorer à ton propre rythme. Tu n'as pas besoin de tout lire. Tu n'es pas obligé·e de faire les choses dans un ordre précis. Tu peux sauter d'un endroit à l'autre, revenir, le mettre de côté.

:::info{type=metaphor title="Une image pour le chemin : Kintsugi"}
Kintsugi est un art japonais traditionnel de la réparation. La céramique brisée est recollée avec de l'or. Les lignes de cassure ne sont pas dissimulées, mais rendues visibles et anoblies. À cause de la cassure, le récipient ne perd pas de valeur — au contraire, aux yeux de beaucoup, il en gagne.

Les chemins de rétablissement suivent souvent une logique similaire : il ne s'agit pas de masquer les cassures, mais de les intégrer dans un nouveau tout.

Recovery ne veut pas dire redevenir celui ou celle que l'on était avant. Recovery veut dire que ce qui a été peut devenir partie d'un nouveau tout.
:::

:::quote{author="U.S. Substance Abuse and Mental Health Services Administration (SAMHSA), 2012" source="samhsa2012"}
Le rétablissement est un voyage de guérison et de transformation qui permet à une personne atteinte d'une maladie psychique de mener une vie pleine de sens dans une communauté de son choix — tout en s'efforçant d'atteindre son plein potentiel.
:::

:::easy{reading_time=1}
Nous sommes content·e·s que tu sois là.

Ce carnet est écrit pour toi — si tu traverses des moments difficiles.

Tu n'as pas besoin de tout lire. Choisis ce qui te convient. Reviens quand tu veux.

C'est toi qui décides du rythme.
:::

:::quiz{id=q-willkommen}
- q: "À qui s'adresse ce carnet ?"
  type: multiple-choice
  options:
    - text: "Aux personnes ayant une expérience vécue de difficultés psychiques."
      correct: true
      explanation: "Il est écrit pour toi — quel que soit l'endroit où tu te trouves sur ton chemin."
    - text: "Seulement aux professionnel·le·s."
      correct: false
    - text: "Seulement aux personnes ayant un diagnostic précis."
      correct: false

- q: "Faut-il lire le carnet dans l'ordre ?"
  type: true-false
  correct: false
  explanation: "Non. Tu peux sauter, revenir, le mettre de côté. C'est toi qui décides du rythme et de l'ordre."
:::

:::flashcards{id=f-willkommen}
- front: "À qui s'adresse ce carnet ?"
  back: "À toi — si tu as une expérience vécue de difficultés psychiques."
- front: "Kintsugi"
  back: "Art japonais de la réparation : les cassures sont recollées à l'or, pas cachées. Métaphore du Recovery : ce qui est brisé devient partie d'un nouveau tout."
- front: "Autodétermination dans la lecture"
  back: "Tu choisis ce que tu lis. Tu choisis ton rythme. Tu peux reprendre n'importe où."
:::

:::standard{reading_time=2}
Nous sommes content·e·s que tu sois là.

Ce carnet est écrit pour toi — si tu traverses actuellement une période difficile, si tu as reçu un diagnostic ou si tu vis depuis longtemps avec une maladie psychique.

Peut-être que tu es au début. Peut-être que tu as déjà de nombreuses thérapies derrière toi. Peut-être que tu cherches actuellement un nouveau langage pour ce que tu vis — ou simplement quelqu'un qui ne veut pas réparer, mais marcher à tes côtés.

Tu n'as rien à apporter. Pas de connaissances préalables, pas de bonne journée, pas d'histoire achevée. Lis ce qui te parle. Laisse de côté ce qui ne convient pas. Reviens quand tu veux.

Une image que nous aimons utiliser est le Kintsugi — l'art japonais de la réparation. La céramique brisée est recollée à l'or. Les cassures ne sont pas dissimulées, mais rendues visibles. À cause de la cassure, le récipient ne perd pas de valeur — aux yeux de beaucoup, il en gagne.

Recovery suit une logique semblable. Il ne s'agit pas d'effacer tout ce qui a été. Il s'agit que le brisé puisse devenir partie d'un nouveau tout.

Quelques indications avant de commencer :

- C'est toi qui choisis le rythme et l'ordre.
- Il existe différents modes de lecture : simple, standard, détaillé.
- Tu peux entrer et sortir partout.
- Si quelque chose devient trop : mets-le de côté. Ce n'est pas abandonner — c'est prendre soin de toi.

Personne ne te presse. Cet espace t'appartient.
:::

:::standard-quiz{id=q-willkommen-std}
- q: "Qui décide du rythme et de l'ordre ?"
  type: multiple-choice
  options:
    - text: "L'application."
      correct: false
    - text: "Toi."
      correct: true
      explanation: "Tu peux sauter, mettre de côté, revenir."
    - text: "L'ordre est imposé."
      correct: false

- q: "Que signifie Kintsugi comme image du Recovery ?"
  type: multiple-choice
  options:
    - text: "Les cassures sont rendues aussi invisibles que possible."
      correct: false
    - text: "Les cassures deviennent visibles — et partie d'un nouveau tout."
      correct: true
      explanation: "Recovery ne veut pas dire tout effacer. Ce qui a été peut faire partie du nouveau."
:::

:::standard-flashcards{id=f-willkommen-std}
- front: "Ton rythme"
  back: "C'est toi qui décides de ce que tu lis et quand. Sauter, mettre de côté, revenir — tout est permis."
- front: "Kintsugi"
  back: "Art japonais de la réparation : les cassures recollées à l'or. Métaphore du Recovery — le brisé devient partie d'un nouveau tout."
- front: "Quand quelque chose devient trop"
  back: "Mets-le de côté. Ce n'est pas abandonner — c'est prendre soin de toi."
:::


# 1. Ce que Recovery signifie vraiment
{#kap-1 reading_time=5}

## Le mot et son histoire

Le mot anglais recovery signifie littéralement guérison, rétablissement, reprise. En santé mentale, il s'est imposé depuis les années 1980 comme terme générique pour désigner une nouvelle façon de regarder la souffrance psychique [^anthony1993] [^deegan1988].

Recovery n'est pas, à l'origine, un terme médical. Il vient de l'expérience de personnes qui avaient elles-mêmes reçu un diagnostic psychiatrique et qui ont refusé de s'y laisser réduire [^chamberlin1978] [^deegan1988].

## La définition classique

La définition la plus citée vient de William Anthony, alors directeur du Center for Psychiatric Rehabilitation de l'Université de Boston.

:::quote{author="Anthony, 1993, p. 15" source="anthony1993" lang="en"}
Recovery is described as a deeply personal, unique process of changing one's attitudes, values, feelings, goals, skills, and/or roles. It is a way of living a satisfying, hopeful, and contributing life even with limitations caused by illness.
:::

:::quote-translation{source="anthony1993" translator="traduction libre"}
Recovery est un processus profondément personnel et unique de transformation — de ses attitudes, valeurs, sentiments, objectifs, compétences ou rôles. C'est une manière de vivre une vie épanouie, pleine d'espoir et utile à autrui, même avec les limites liées à une maladie.
:::

Cette définition est, depuis plus de trois décennies, la référence internationale. Elle a notamment été reprise par SAMHSA [^samhsa2012], façonnée par la tradition du Sainsbury Centre for Mental Health et intégrée dans les recommandations de l'OMS [^who2021].

## Rétablissement clinique et rétablissement personnel

La recherche distingue deux notions [^slade2009] :

- **Rétablissement clinique** (clinical recovery) : les symptômes diminuent ou disparaissent, le diagnostic perd de son poids. Cette conception vient de la médecine.
- **Rétablissement personnel** (personal recovery) : tu fais l'expérience d'une vie pleine de sens, qui vaut la peine d'être vécue et autodéterminée — que tous les symptômes aient disparu ou non.

Recovery, au sens de ce carnet, désigne avant tout le rétablissement personnel. Il peut aller de pair avec un rétablissement clinique, mais cela n'est pas nécessaire.

## Définitions de l'espace germanophone

:::quote{author="Fondation Pro Mente Sana Suisse, 2024" source="promentesana"}
La description la plus brève du Recovery est : mener une vie aussi bonne que possible, même en présence d'une atteinte psychique sévère.
:::

Amering et Schmolke parlent de la « fin de l'incurabilité » [^ameringschmolke2012]. Elles s'appuient sur la recherche longitudinale qui montre : même après des maladies sévères comme la schizophrénie, une vie épanouie reste possible. Knuf comprend Recovery comme un processus de dialogue avec soi-même et avec la maladie — avec pour but de mener une vie pleine d'espoir et active, malgré les difficultés psychiques [^knuf2026].

La recommandation allemande S3 « Thérapies psychosociales pour les maladies psychiques sévères » a fait entrer Recovery dans le courant principal des soins germanophones et a désigné l'orientation Recovery comme principe directeur [^dgppn2019].

:::reflection{id=1 title="Que signifie le rétablissement pour toi ?"}
- Quand tu entends le mot rétablissement — quelle image surgit en premier ?
- Laquelle de ces définitions te parle le plus ? Et pourquoi ?
- Que serait pour toi une « bonne vie » — même si tout n'est pas « parti » ?
:::

:::easy{reading_time=2}
Recovery veut dire : rétablissement.

Mais Recovery ne veut pas dire : tous les symptômes doivent disparaître.

Recovery veut dire : tu vis bien. Même si tu vis encore des choses difficiles.

Il y a deux sortes de rétablissement :

- Les symptômes diminuent. C'est le rétablissement clinique.
- Tu vis ta vie comme bonne et porteuse de sens. C'est le rétablissement personnel.

Les deux sont possibles. Les deux peuvent exister en même temps.

Une fondation suisse dit : Recovery veut dire mener une vie aussi bonne que possible. Même quand il y a du difficile.

:::reflection{id=1-easy title="Demande-toi"}
- Qu'est-ce qu'une bonne vie pour toi ?
- Que dois-tu avoir pour cela ? Que n'as-tu pas besoin d'avoir ?
:::
:::

:::quiz{id=q-1}
- q: "Que signifie Recovery ?"
  type: multiple-choice
  options:
    - text: "Tous les symptômes doivent disparaître."
      correct: false
      explanation: "Non. Le rétablissement personnel peut aussi fonctionner avec des symptômes persistants."
    - text: "Mener une vie pleine de sens et autodéterminée — même si des symptômes restent."
      correct: true
      explanation: "Exactement. C'est le cœur du rétablissement personnel (Anthony 1993)."
    - text: "Une méthode thérapeutique précise."
      correct: false

- q: "Quels deux types de rétablissement la recherche distingue-t-elle ?"
  type: multiple-choice
  options:
    - text: "Rétablissement rapide et lent."
      correct: false
    - text: "Rétablissement clinique et personnel."
      correct: true
      explanation: "Clinique = symptômes partis. Personnel = mener une vie pleine de sens."
    - text: "Rétablissement thérapeutique et médicamenteux."
      correct: false
:::

:::flashcards{id=f-1}
- front: "Rétablissement clinique"
  back: "Les symptômes diminuent ou disparaissent. Le diagnostic perd de son poids. La conception médicale de la guérison."
- front: "Rétablissement personnel"
  back: "Tu vis ta vie comme pleine de sens, qui vaut la peine d'être vécue et autodéterminée — que tous les symptômes aient disparu ou non."
- front: "Anthony 1993 — la définition centrale"
  back: "Recovery est un processus profondément personnel et unique de transformation des attitudes, valeurs, sentiments, objectifs et rôles — une manière de mener une vie épanouie, même avec des limites."
- front: "Pro Mente Sana — la définition la plus brève"
  back: "Mener une vie aussi bonne que possible — même en présence d'une atteinte psychique sévère."
:::

:::standard{reading_time=2}
Recovery est un mot anglais. Littéralement, il signifie guérison, rétablissement, reprise. En santé mentale, il est depuis les années 1980 le terme générique pour désigner une nouvelle façon de regarder la souffrance psychique — une façon qui n'a pas été inventée par des médecins, mais par les personnes concernées elles-mêmes.

La définition classique vient de William Anthony, un chercheur de Boston : Recovery est un processus profondément personnel de transformation des propres attitudes, valeurs, objectifs et rôles — une manière de mener une vie épanouie, pleine d'espoir, même avec les limites liées à une maladie.

La recherche distingue deux lectures :

- **Rétablissement clinique :** les symptômes diminuent ou disparaissent. Le diagnostic perd de son poids. C'est la vision médicale.
- **Rétablissement personnel :** tu fais l'expérience d'une vie pleine de sens, qui vaut la peine d'être vécue et autodéterminée — peu importe que des symptômes subsistent.

Recovery, au sens de ce carnet, désigne avant tout le rétablissement personnel. Il peut aller de pair avec un rétablissement clinique, mais ce n'est pas nécessaire. Les deux peuvent exister en même temps. Et chacun peut avoir son propre rythme.

La Fondation suisse Pro Mente Sana le résume en une phrase : Recovery, c'est mener une vie aussi bonne que possible — même en présence d'une atteinte psychique sévère.

Ce qui est important : tu es plus que ton diagnostic. Tu es d'abord une personne — tout le reste vient après. Et tu n'as pas à parcourir ce chemin seul·e. D'autres peuvent t'accompagner.
:::

:::standard-quiz{id=q-1-std}
- q: "Que veut surtout dire Recovery ?"
  type: multiple-choice
  options:
    - text: "Être guéri·e. Plus aucun symptôme."
      correct: false
      explanation: "Ce serait le rétablissement clinique. Recovery désigne plus — surtout le rétablissement personnel."
    - text: "Une vie épanouie — même avec des symptômes."
      correct: true
      explanation: "Exactement la définition classique d'Anthony (1993)."
    - text: "Une méthode thérapeutique précise."
      correct: false

- q: "Quels deux types de rétablissement la recherche distingue-t-elle ?"
  type: multiple-choice
  options:
    - text: "Rétablissement rapide et lent."
      correct: false
    - text: "Rétablissement clinique et personnel."
      correct: true
      explanation: "Clinique = symptômes partis. Personnel = mener une vie pleine de sens."

- q: "Qui a développé Recovery comme concept ?"
  type: multiple-choice
  options:
    - text: "Surtout des médecins et des laboratoires pharmaceutiques."
      correct: false
    - text: "Des personnes ayant une expérience vécue de la psychiatrie — avec la recherche."
      correct: true
      explanation: "Le mouvement vient de l'expérience des personnes concernées."
:::

:::standard-flashcards{id=f-1-std}
- front: "Recovery (définition centrale)"
  back: "Mener une vie épanouie, pleine d'espoir — même avec les limites liées à une maladie (Anthony 1993)."
- front: "Rétablissement clinique"
  back: "Les symptômes diminuent ou disparaissent. Le diagnostic perd de son poids."
- front: "Rétablissement personnel"
  back: "Tu vis ta vie comme pleine de sens, qui vaut la peine d'être vécue et autodéterminée — peu importe que les symptômes subsistent."
- front: "Pro Mente Sana — la définition la plus brève"
  back: "Mener une vie aussi bonne que possible, même en présence d'une atteinte sévère."
:::


# 2. « Espoir — Pouvoir — Sens »
{#kap-2 reading_time=3}

En 2006, Michaela Amering et Margit Schmolke ont publié dans la revue suisse Managed Care un article intitulé « Hoffnung – Macht – Sinn. Recovery-Konzepte in der Psychiatrie » (« Espoir — Pouvoir — Sens. Les concepts de Recovery en psychiatrie ») [^ameringschmolke2006]. Elles ont ainsi marqué de manière décisive la lecture germanophone du Recovery.

La triade « Espoir — Pouvoir — Sens » résume ce dont il s'agit dans le Recovery du point de vue D-A-CH — comme une traduction parlante et proche du quotidien des concepts anglophones centraux.

| Français | Anglais | Sens dans le contexte D-A-CH |
|---------|----------|-----------------------------|
| **Espoir** | Hope | (Re)trouver un sentiment de soi indépendant de la maladie — l'espoir comme ressource thérapeutique. |
| **Pouvoir** | Empowerment | Auto-capacitation, liberté de choix, responsabilité — le « pouvoir » au sens de la reconquête d'une marge d'action [^knufseibert2004]. |
| **Sens** | Meaning | Valeurs, objectifs, contribution, appartenance — définir sa vie au-delà du rôle de patient·e. |

L'espoir, dans cette perspective, est étroitement lié au sentiment de soi : une estime de soi qui tient indépendamment de l'expérience de la maladie, et une identité qui englobe plus que le rôle de patient·e [^ameringschmolke2006].

Ces trois termes correspondent à la définition de Recovery d'Anthony [^anthony1993]. Et ils dialoguent au cœur du modèle CHIME [^leamy2011] : Espoir = Hope, Pouvoir = Empowerment, Sens = Meaning. Le lien (Connectedness) et l'identité (Identity) constituent le cadre relationnel et identitaire environnant.

:::easy{reading_time=1}
Deux chercheuses ont trouvé trois mots simples pour Recovery :

- **Espoir** — Tu crois que ça peut aller mieux.
- **Pouvoir** — Tu as le droit de décider. Tu n'es pas seulement patient·e.
- **Sens** — Ta vie a de la valeur. Tu as ta place.

Ces trois mots sont la lecture germanophone du modèle anglais CHIME. Le lien avec les autres et une identité propre en font aussi partie.
:::

:::quiz{id=q-2}
- q: "Que signifie « Pouvoir » dans cette lecture ?"
  type: multiple-choice
  options:
    - text: "Exercer du pouvoir sur les autres."
      correct: false
    - text: "Auto-capacitation — le droit de codécider de sa propre vie."
      correct: true
      explanation: "« Pouvoir » signifie ici empowerment au sens positif — pas pouvoir sur les autres."
    - text: "Des prérogatives médicales."
      correct: false

- q: "Qui a introduit la triade « Espoir — Pouvoir — Sens » ?"
  type: multiple-choice
  options:
    - text: "Patricia Deegan"
      correct: false
    - text: "Amering & Schmolke (2006)"
      correct: true
      explanation: "Dans la revue suisse Managed Care, 2006."
    - text: "L'OMS"
      correct: false
:::

:::flashcards{id=f-2}
- front: "Espoir — Pouvoir — Sens"
  back: "La lecture germanophone du Recovery, introduite par Amering & Schmolke en 2006. Correspond à Hope, Empowerment, Meaning dans le modèle CHIME."
- front: "Pouvoir (au sens du Recovery)"
  back: "Auto-capacitation — le droit de codécider de sa propre vie. Pas pouvoir sur les autres."
:::

:::standard{reading_time=2}
Recovery est un mot anglais qui se traduit difficilement en français. Les psychiatres autrichiennes Michaela Amering et Margit Schmolke ont proposé en 2006, dans la revue suisse Managed Care, trois mots allemands qui en touchent le cœur — une triade qui est aujourd'hui courante dans l'espace germanophone :

- **Espoir (Hoffnung)** — la conviction que ta vie peut être plus que la maladie. Un sentiment de soi qui tient aussi indépendamment des symptômes.
- **Pouvoir (Macht)** — auto-capacitation. Pas un pouvoir sur les autres, mais un pouvoir sur ta propre vie. Pouvoir codécider. Liberté de choix. Responsabilité personnelle.
- **Sens (Sinn)** — valeurs, objectifs, appartenance. Pouvoir définir sa vie au-delà du rôle de patient·e.

Ces trois mots correspondent à la définition classique du Recovery. Ils correspondent aussi à des parties centrales du modèle Recovery international le plus important, le modèle CHIME :

- Espoir = Hope
- Pouvoir = Empowerment
- Sens = Meaning

La connectivité (Connectedness) et l'identité (Identity) forment le cadre — les relations et l'image de soi comme sol sur lequel espoir, pouvoir et sens peuvent croître.

Tu n'as pas besoin de ressentir les trois en même temps. Parfois, il n'y a que l'espoir, parfois que le sens. Parfois, cela commence par le pouvoir — avec une seule décision que tu prends toi-même. C'est assez. Recovery n'est pas une liste à cocher.
:::

:::standard-quiz{id=q-2-std}
- q: "Que veut dire « Pouvoir » dans cette lecture ?"
  type: multiple-choice
  options:
    - text: "Exercer un pouvoir sur les autres."
      correct: false
    - text: "Auto-capacitation — le droit de codécider de sa propre vie."
      correct: true
      explanation: "« Pouvoir » désigne ici l'empowerment au sens positif."
    - text: "Des autorisations médicales."
      correct: false

- q: "Qui a introduit la triade « Espoir — Pouvoir — Sens » ?"
  type: multiple-choice
  options:
    - text: "Patricia Deegan"
      correct: false
    - text: "Amering et Schmolke (2006)"
      correct: true
      explanation: "Dans la revue suisse Managed Care."
    - text: "L'OMS"
      correct: false
:::

:::standard-flashcards{id=f-2-std}
- front: "Espoir — Pouvoir — Sens"
  back: "La lecture germanophone du Recovery (Amering et Schmolke 2006). Correspond à Hope, Empowerment, Meaning dans CHIME."
- front: "Pouvoir au sens du Recovery"
  back: "Auto-capacitation — le droit de codécider de sa propre vie. Pas un pouvoir sur les autres."
- front: "Espoir au sens du Recovery"
  back: "La conviction que ta vie peut être plus que la maladie. Un sentiment de soi qui tient aussi sans disparition des symptômes."
:::


# 3. Ce que Recovery N’EST PAS — six mythes
{#kap-3 reading_time=5}

Recovery est souvent mal compris au quotidien.

## Mythe 1 : Recovery veut dire que tous les symptômes doivent disparaître

Faux. Des personnes avec des symptômes persistants peuvent aussi vivre un Recovery [^anthony1993] [^deegan1996] [^andresen2003]. Le rétablissement personnel peut coexister avec les symptômes.

## Mythe 2 : Recovery veut dire simplement penser positif

Faux. Recovery n'est pas un appel à l'optimisme sur commande. L'espoir, dans la recherche sur le Recovery, désigne une conviction réaliste, souvent obstinée, que le changement est possible [^slade2013] [^schrank2012].

## Mythe 3 : Recovery veut dire se passer de médicaments ou de thérapie

Faux. Recovery n'est pas un mouvement anti-médecine. Il signifie que C'EST TOI qui codécides de ce qui aide [^deegandrake2006] [^slade2017sdm]. Amering et Schmolke le pointent ainsi : l'acceptation de médicaments ou d'un diagnostic donné ne devrait pas être l'unique condition pour bénéficier d'un soutien psychosocial [^ameringschmolke2006].

## Mythe 4 : Recovery est un chemin droit et prévisible

Faux. Andresen, Oades et Caputi [^andresen2003] et bien d'autres le montrent : Recovery n'est presque jamais linéaire. Les reculs font partie du chemin et ne sont pas la fin, mais une étape.

## Mythe 5 : Qui ne « guérit » pas en est responsable

Faux. Recovery n'est ni une question de performance, ni un jugement moral. Le chemin dépend de nombreux facteurs — relations, soins, conditions socio-économiques, traumatismes, hasards [^leboutillier2011].

## Mythe 6 : Une maladie psychique est « incurable » — « chronique »

Faux et nuisible. Des études longitudinales comme l'étude du Vermont [^harding1987] et des revues plus récentes [^lally2017] le montrent : le rétablissement — même après des diagnostics sévères — est régulièrement possible.

Amering et Schmolke mettent en garde explicitement contre ce type de pronostics figés [^ameringschmolke2012] : des phrases comme « Vous êtes trop malade pour une psychothérapie » ou, à l'inverse, « Tout redeviendra comme avant » sont à leurs yeux non seulement fausses, mais — littéralement — « extrêmement dangereuses ». De tels pronostics retirent aux personnes leur marge de manœuvre avant même qu'elles aient pu l'utiliser.

Heinz Katschnig a trouvé une image saisissante : le désespoir — communiqué de l'extérieur et souvent intériorisé — serait la forme la plus insidieuse de chaînes en psychiatrie. Il est si efficace précisément parce qu'il n'est pas visible de l'extérieur [^ameringschmolke2012].

:::reflection{id=2 title="Quel mythe t'a touché·e ?"}
- Lequel de ces six mythes a longtemps été ta réalité ?
- Qui t'a transmis ce mythe — la famille, l'école, les médias, le système psychiatrique ?
- Qu'est-ce qui serait différent si tu laissais aller ce mythe aujourd'hui ?
:::

:::easy{reading_time=2}
Il y a beaucoup d'idées fausses sur le Recovery. Six d'entre elles reviennent souvent :

1. **Faux :** Tous les symptômes doivent disparaître. → Recovery fonctionne aussi avec des symptômes.
2. **Faux :** Tu dois penser positif. → Aucune obligation d'être de bonne humeur.
3. **Faux :** Pas de médicaments autorisés. → Tu codécides de ce qui aide.
4. **Faux :** Le chemin est droit. → Les reculs en font partie.
5. **Faux :** Qui ne guérit pas est coupable. → Personne n'est coupable.
6. **Faux :** Certains sont « incurables ». → Le rétablissement est possible aussi après des maladies sévères.
:::

:::quiz{id=q-3}
- q: "Quelle affirmation est juste ?"
  type: multiple-choice
  options:
    - text: "Recovery signifie que tous les symptômes doivent disparaître."
      correct: false
    - text: "Recovery peut aussi fonctionner avec des symptômes persistants."
      correct: true
      explanation: "L'affirmation centrale d'Anthony 1993 et de nombreuses études suivantes."
    - text: "Recovery n'est possible qu'avec des maladies légères."
      correct: false

- q: "Vrai ou faux : Recovery signifie ne pas prendre de médicaments."
  type: true-false
  correct: false
  explanation: "Recovery n'est pas un mouvement anti-médecine. Tu décides avec les professionnel·le·s de ce qui aide."

- q: "Que disent les études longitudinales comme Harding (1987) et Lally (2017) sur les diagnostics sévères ?"
  type: multiple-choice
  options:
    - text: "Ils sont incurables."
      correct: false
    - text: "Le rétablissement est régulièrement possible aussi après des évolutions sévères."
      correct: true
      explanation: "C'est le fondement de la « fin de l'incurabilité » d'Amering."
:::

:::flashcards{id=f-3}
- front: "Le plus grand mythe du Recovery"
  back: "Recovery ne veut pas dire : tous les symptômes partis. Recovery veut dire : une bonne vie — même avec des difficultés."
- front: "Linéarité — faux"
  back: "Recovery n'est pas linéaire. Les reculs en font partie et ne sont pas un échec."
- front: "« Incurable » — faux"
  back: "Les études longitudinales (Harding 1987, Lally 2017) montrent : le rétablissement après des maladies sévères est régulièrement possible."
- front: "« Extrêmement dangereux »"
  back: "Amering & Schmolke (2012) à propos des pronostics comme « Vous êtes trop malade pour une psychothérapie » — de telles assignations volent toute marge de manœuvre."
:::

:::standard{reading_time=2}
De nombreuses images fausses circulent sur Recovery. Six d'entre elles reviennent particulièrement souvent dans le quotidien — et toutes les six sont fausses.

- **« Recovery veut dire que tous les symptômes doivent disparaître. »** C'est faux. Des personnes avec des symptômes persistants peuvent aussi mener une vie épanouie. Le rétablissement personnel peut coexister avec les symptômes.
- **« Recovery veut dire toujours penser positif. »** Faux. Recovery n'est pas un appel à l'optimisme sur commande. L'espoir, dans la recherche sur le Recovery, est une conviction réaliste, souvent obstinée — pas une bonne humeur forcée.
- **« Recovery veut dire se passer de médicaments. »** Faux. Recovery n'est pas un mouvement anti-médecine. Cela signifie que C'EST TOI qui codécides de ce qui aide — et de ce qui n'aide pas.
- **« Recovery est un chemin droit et prévisible. »** Faux. Recovery n'est presque jamais linéaire. Les reculs en font partie. Ils ne sont pas un échec, mais une étape du chemin.
- **« Qui ne guérit pas en est responsable. »** Faux. Recovery n'est ni une question de performance, ni un jugement moral. Le chemin dépend de nombreux facteurs : relations, soins, conditions socio-économiques, traumatismes, hasards.
- **« Les maladies psychiques sévères sont incurables. »** Faux — et dangereux. Les études longitudinales le montrent depuis des décennies : le rétablissement, même après des diagnostics sévères, est régulièrement possible.

Amering et Schmolke qualifient même des phrases comme « Vous êtes trop malade pour une psychothérapie » ou « Tout redeviendra comme avant » d'« extrêmement dangereuses ». De tels pronostics te volent la marge de manœuvre avant même que tu puisses l'utiliser.

Le désespoir communiqué de l'extérieur et intériorisé — ce sont les chaînes les plus insidieuses en psychiatrie. Précisément parce qu'elles sont invisibles.
:::

:::standard-quiz{id=q-3-std}
- q: "Quelle affirmation est juste ?"
  type: multiple-choice
  options:
    - text: "Recovery signifie que tous les symptômes doivent disparaître."
      correct: false
    - text: "Recovery peut aussi fonctionner avec des symptômes persistants."
      correct: true
      explanation: "C'est l'affirmation centrale depuis Anthony 1993."
    - text: "Recovery n'est possible qu'avec des maladies légères."
      correct: false

- q: "Qui est responsable si le Recovery est difficile ?"
  type: multiple-choice
  options:
    - text: "Toi-même — tu ne fais pas assez d'efforts."
      correct: false
    - text: "Personne. Recovery n'est ni une compétition, ni un jugement moral."
      correct: true
      explanation: "Le chemin dépend de nombreux facteurs — pas seulement de ta force de volonté."

- q: "Que disent les études longitudinales sur les diagnostics « incurables » ?"
  type: multiple-choice
  options:
    - text: "Incurable reste incurable."
      correct: false
    - text: "Le rétablissement est régulièrement possible aussi après des évolutions sévères."
      correct: true
      explanation: "Étude du Vermont (Harding 1987), méta-analyses actuelles (Lally 2017)."
:::

:::standard-flashcards{id=f-3-std}
- front: "Le plus grand mythe du Recovery"
  back: "« Tous les symptômes doivent disparaître. » — C'est faux. Recovery veut dire mener une bonne vie, même avec des difficultés."
- front: "Linéarité — faux"
  back: "Recovery n'est presque jamais linéaire. Les reculs en font partie et ne sont pas un échec."
- front: "« Incurable » — faux"
  back: "Les études longitudinales montrent : même après des maladies sévères, le rétablissement est régulièrement possible."
- front: "« Extrêmement dangereux »"
  back: "Amering et Schmolke à propos des pronostics comme « Vous êtes trop malade pour une thérapie » — de telles assignations volent la marge de manœuvre."
:::


# 4. Histoire du mouvement Recovery
{#kap-4 reading_time=6}

## Les voix des personnes concernées — années 1970 et 1980

Le mouvement Recovery n'est pas né dans un institut de recherche. Il a commencé dans les années 1970 en Amérique du Nord, dans les initiatives d'ancien·ne·s patient·e·s de la psychiatrie — le mouvement dit ex-patient ou survivor [^chamberlin1978].

L'une des voix centrales est Patricia Deegan. À 17 ans, elle reçoit le diagnostic de schizophrénie et entend d'un médecin qu'elle ne mènera jamais une vie normale. Aujourd'hui, elle est psychologue, docteure, chercheuse et figure pionnière du Recovery reconnue internationalement [^deegan1988] [^deegan1996].

Patricia Deegan a formulé deux idées centrales qui marquent depuis le mouvement Recovery international [^deegan1996] :

- Le Recovery ne serait pas un point d'arrivée ni une simple stabilisation, mais une transformation — un chemin sur lequel on reconnaît ses propres limites et on découvre en même temps de nouvelles possibilités.
- Les personnes vivant avec une maladie psychique ne seraient pas des destinataires passives d'aide, mais des sujets capables d'agir et de changer leur situation par leur propre action.

## Dorothea Buck, Trialogue et entendeurs de voix

Dans l'espace germanophone, Dorothea Buck a ouvert un chemin comparable. Elle-même stérilisée de force sous le nazisme et hospitalisée à plusieurs reprises en psychiatrie, elle a lutté toute sa vie pour une psychiatrie humaine [^buck1990].

En 1989, à Hambourg, sur l'initiative de Thomas Bock, naît le premier séminaire trialogique sur la psychose — un format où personnes concernées, proches et professionnel·le·s parlent à égalité [^bockpriebe2005]. En 1992 se crée la fédération allemande des personnes ayant une expérience de la psychiatrie (BPE). Le réseau international Hearing Voices est actif en Allemagne, en Autriche et en Suisse depuis les années 1990 [^hvn].

## La scientifisation — années 1990 et 2000

William Anthony fournit, avec un article clé de 1993, la définition scientifique [^anthony1993]. Andresen, Oades et Caputi développent en Australie le modèle des cinq phases du rétablissement psychologique [^andresen2003].

## Du concept au système — à partir de 2007

En 2007 démarre au Royaume-Uni le programme ImROC (Implementing Recovery through Organisational Change). Il a depuis accompagné des centaines de services dans leur transformation vers une pratique orientée Recovery [^imroc] [^perkins2012].

Aux États-Unis, Recovery devient en 2006 la ligne directrice officielle de l'agence fédérale SAMHSA. La Convention de l'ONU relative aux droits des personnes handicapées a ancré une compréhension des droits humains centrée sur l'autodétermination [^uncrpd2006]. L'OMS a publié en 2019 l'initiative QualityRights [^who2019] et en 2021 le guide « Guidance on Community Mental Health Services » [^who2021].

## L'espace germanophone

En Autriche, Amering et Schmolke ont marqué un tournant en 2006 avec l'article « Espoir — Pouvoir — Sens » [^ameringschmolke2006] et en 2012 avec le livre « Recovery. Das Ende der Unheilbarkeit » (« Recovery. La fin de l'incurabilité ») [^ameringschmolke2012]. En Allemagne, Andreas Knuf a publié dès 2004 avec Ulrich Seibert « Selbstbefähigung fördern » (« Favoriser l'auto-capacitation ») [^knufseibert2004] ; son ouvrage « Recovery und Empowerment » en est aujourd'hui à sa 2e édition [^knuf2026].

EX-IN (Experienced Involvement) a été développé à partir de 2005 à Brême — inspiré par Dorothea Buck et par un projet européen Leonardo da Vinci [^utschakowski2009]. Depuis 2011, EX-IN est coordonné par l'association EX-IN Deutschland e.V. [^exin_de]. Un essai allemand randomisé contrôlé sur le pair-soutien en a démontré l'efficacité [^mahlke2017].

En Suisse, la fondation Pro Mente Sana porte le concept de Recovery dans les services [^promentesana]. Des Recovery Colleges existent aujourd'hui notamment à Berne, en Suisse orientale, à Genève, à Saint-Gall et à Zurich [^rcbern]. L'ancrage scientifique de l'orientation Recovery dans la psychiatrie suisse est notamment dû à Rössler [^roessler2004].

:::easy{reading_time=2}
Recovery n'a pas été inventé à l'hôpital. Recovery a été inventé par des personnes concernées.

En Amérique, dans les années 1970, des patient·e·s ont commencé à écrire des livres. Elles et ils ont dit : nous sommes plus que notre maladie.

Une voix connue est Patricia Deegan. À 17 ans, elle a reçu le diagnostic de schizophrénie. Aujourd'hui, elle est docteure et aide d'autres personnes.

En Allemagne, Dorothea Buck a été importante. Elle s'est battue pour une meilleure psychiatrie.

Aujourd'hui, Recovery est reconnu dans le monde entier — même par l'OMS.
:::

:::quiz{id=q-4}
- q: "Qui a façonné le mouvement Recovery à ses débuts ?"
  type: multiple-choice
  options:
    - text: "L'industrie pharmaceutique."
      correct: false
    - text: "Des personnes ayant une expérience vécue de la psychiatrie."
      correct: true
      explanation: "Le mouvement est né aux États-Unis dans les années 1970, du Survivor Movement."
    - text: "Les directions d'hôpitaux."
      correct: false

- q: "Qui est Patricia Deegan ?"
  type: multiple-choice
  options:
    - text: "Une médecin sans expérience vécue."
      correct: false
    - text: "Une pionnière du Recovery avec un diagnostic personnel de schizophrénie."
      correct: true
      explanation: "Diagnostiquée à 17 ans. Aujourd'hui psychologue docteure et voix reconnue internationalement."
    - text: "Une chercheuse suisse en soins infirmiers."
      correct: false
:::

:::flashcards{id=f-4}
- front: "Patricia Deegan"
  back: "Diagnostic de schizophrénie à 17 ans, aujourd'hui psychologue docteure. Voix marquante du mouvement Recovery international."
- front: "Dorothea Buck"
  back: "Pionnière allemande, stérilisée de force sous le nazisme. A lutté toute sa vie pour une psychiatrie humaine. A inspiré EX-IN."
- front: "Survivor Movement"
  back: "Mouvement d'ancien·ne·s patient·e·s de la psychiatrie aux États-Unis dans les années 1970. Racine du mouvement Recovery."
- front: "ImROC"
  back: "Implementing Recovery through Organisational Change. Programme britannique depuis 2007 qui accompagne les services dans la transformation vers une pratique orientée Recovery."
:::

:::standard{reading_time=2}
Recovery n'est pas né dans un amphithéâtre, ni dans un cabinet de consultation. Recovery est né dans la rue — dans les initiatives d'ancien·ne·s patient·e·s qui refusaient de se laisser réduire à leur diagnostic.

Le mouvement a commencé dans les années 1970 en Amérique du Nord, dans ce qu'on a appelé le Survivor Movement. Une de ses voix les plus importantes est Patricia Deegan. À 17 ans, elle reçoit le diagnostic de schizophrénie. Un médecin lui dit qu'elle ne mènera jamais une vie normale. Aujourd'hui, elle est psychologue docteure et l'une des pionnières du Recovery les plus influentes au monde.

Dans l'espace germanophone, Dorothea Buck a été une voix comparable. Stérilisée de force sous le national-socialisme et soignée à plusieurs reprises en psychiatrie, elle a lutté toute sa vie pour une psychiatrie humaine. En 1989 à Hambourg, sur l'initiative de Thomas Bock, est né le premier séminaire trialogique sur la psychose — un format dans lequel personnes concernées, proches et professionnel·le·s parlent d'égal·e à égal·e.

Étapes importantes depuis :

- **1993** — William Anthony livre la définition scientifique du Recovery.
- **2003** — Des chercheur·euse·s australien·ne·s décrivent cinq phases du rétablissement.
- **2007** — Le programme ImROC débute en Grande-Bretagne et reconfigure les services autour de l'orientation Recovery.
- **2011** — Le modèle CHIME est publié et devient le standard international.
- **2021** — L'OMS publie sa directive pour des soins en santé mentale fondés sur les droits humains.

En Suisse, la Fondation Pro Mente Sana porte le concept de Recovery dans les soins. Des Recovery Colleges existent aujourd'hui à Berne, en Suisse orientale, à Genève, à Saint-Gall et à Zurich. En Allemagne, EX-IN — Experienced Involvement — a établi l'accompagnement par les pairs comme un métier.

Recovery n'est donc plus depuis longtemps une idée marginale. C'est une pratique vécue par des milliers de personnes.
:::

:::standard-quiz{id=q-4-std}
- q: "Qui a marqué le mouvement Recovery au début ?"
  type: multiple-choice
  options:
    - text: "L'industrie pharmaceutique."
      correct: false
    - text: "Des personnes ayant une expérience vécue de la psychiatrie."
      correct: true
      explanation: "Le mouvement est né dans les années 1970 du Survivor Movement."
    - text: "Les administrations hospitalières."
      correct: false

- q: "Qui est Patricia Deegan ?"
  type: multiple-choice
  options:
    - text: "Une médecin sans expérience vécue."
      correct: false
    - text: "Une pionnière du Recovery avec un diagnostic de schizophrénie, aujourd'hui psychologue docteure."
      correct: true
      explanation: "Diagnostiquée à 17 ans, aujourd'hui voix internationale du mouvement Recovery."

- q: "Qu'est-ce qu'EX-IN ?"
  type: multiple-choice
  options:
    - text: "Un groupe de médicaments."
      correct: false
    - text: "Experienced Involvement — l'accompagnement par les pairs comme métier reconnu."
      correct: true
      explanation: "Développé à Brême à partir de 2005, inspiré par Dorothea Buck."
:::

:::standard-flashcards{id=f-4-std}
- front: "Où Recovery est-il né ?"
  back: "Pas dans un amphithéâtre. Dans les initiatives d'ancien·ne·s patient·e·s de la psychiatrie — le Survivor Movement des années 1970 en Amérique du Nord."
- front: "Patricia Deegan"
  back: "Diagnostic de schizophrénie à 17 ans, aujourd'hui psychologue docteure. Une des voix les plus influentes du mouvement Recovery."
- front: "Trialogue"
  back: "Format dans lequel personnes concernées, proches et professionnel·le·s parlent d'égal·e à égal·e. Né en 1989 à Hambourg (Thomas Bock)."
- front: "Recovery Colleges en Suisse"
  back: "Berne, Suisse orientale, Genève, Saint-Gall, Zurich. Lieux d'apprentissage du Recovery — ouverts à tou·te·s."
:::


# 5. CHIME et CHIME-D
{#kap-5 reading_time=6}

En 2011, une équipe de recherche autour de Mary Leamy et Mike Slade au King's College de Londres a analysé systématiquement 97 articles scientifiques et 87 autres documents sur des parcours de rétablissement [^leamy2011]. Elle voulait savoir : qu'est-ce que les personnes décrivent de façon récurrente quand elles racontent leur chemin à travers une maladie psychique ?

Cinq processus sont apparus, dont les initiales anglaises forment le mot CHIME — qui signifie en anglais le son d'une cloche.

:::table{name="CHIME"}
| Lettre | Processus | Ce que cela signifie |
|-----------|---------|-----------------|
| **C** | Connectedness · Lien | Relations, contacts entre pairs, famille, appartenance, communauté |
| **H** | Hope and Optimism · Espoir | Croire au changement, motivation, confiance dans le processus, modèles |
| **I** | Identity · Identité | Qui suis-je au-delà du diagnostic ? Image de soi positive, estime de soi |
| **M** | Meaning and Purpose · Sens | Sens de la vie, valeurs, rôles, objectifs, éventuellement spiritualité |
| **E** | Empowerment · Auto-efficacité | Prendre des responsabilités, décider, utiliser ses forces |
:::

CHIME est aujourd'hui le modèle Recovery le plus influent au monde. Bird et al. ont confirmé l'applicabilité du cadre dans une étude de validation [^bird2014]. Il est à la base de l'étude britannique REFOCUS, un essai contrôlé randomisé en grappes [^slade2015refocus].

CHIME n'est ni un modèle par étapes, ni une liste à cocher. Il décrit cinq thèmes qui se chevauchent. Parfois l'un est au premier plan, parfois un autre. Dans l'espace germanophone, CHIME se relie bien à la lecture « Espoir — Pouvoir — Sens » [^ameringschmolke2006].

## CHIME-D — la sixième dimension : les difficultés

Un développement important du modèle est CHIME-D. Stuart, Tansey et Quayle ont constaté, dans une synthèse systématique best-fit de la littérature qualitative sur le Recovery, qu'une dimension manquait au CHIME original — pourtant régulièrement présente dans les récits d'expérience : la reconnaissance explicite des difficultés (Difficulties) — traumatisme, perte, stigmatisation et conséquences de la maladie [^stuart2017].

Ils ont donc ajouté la lettre D au modèle :

- **C** — Connectedness · Lien
- **H** — Hope · Espoir
- **I** — Identity · Identité
- **M** — Meaning · Sens
- **E** — Empowerment · Auto-efficacité
- **D** — Difficulties · Difficultés : reconnaître explicitement traumatisme, perte, stigma et conséquences de la maladie

Les analyses montrent qu'en moyenne, environ 54 % du contenu des récits de rétablissement porte sur des difficultés vécues [^stuart2017]. CHIME-D rappelle donc : l'orientation Recovery ne doit pas basculer dans un optimisme toxique. Elle doit laisser de la place pour la douleur, pour le deuil, pour ce qui a vraiment été et est — et parallèlement maintenir le regard sur les ressources et le changement.

La recherche actuelle valide CHIME-D comme cadre robuste pour des soins orientés Recovery [^vanweeghel2024] [^hancock2025].

:::info{type=note title="Pourquoi CHIME-D est important pour ce carnet"}
Les concepts de Recovery sont parfois critiqués parce qu'ils peuvent minimiser la souffrance ou créer un « devoir d'espoir ».

CHIME-D prend cette critique au sérieux : le rétablissement ne doit pas signifier que le difficile n'a plus de place.

Dans ce carnet numérique, cela veut dire : de la place pour la douleur ET pour l'espoir. Pour les pertes ET pour les objectifs. Pour ce qui a été ET pour ce qui peut devenir.
:::

:::reflection{id=3 title="Où en es-tu dans CHIME ?"}
- Quelle lettre (C, H, I, M, E) te parle le plus en ce moment ?
- Laquelle te semble la plus lourde actuellement ?
- Si tu penses aux deux dernières semaines : où y a-t-il eu une petite lueur — et à quelle lettre l'associerais-tu ?
:::

:::easy{reading_time=2}
Des chercheurs ont trouvé en 2011 cinq thèmes importants dans le Recovery. Les initiales anglaises forment le mot CHIME (en anglais : le son d'une cloche) :

- **C** — Connectedness · Lien
- **H** — Hope · Espoir
- **I** — Identity · Identité
- **M** — Meaning · Sens
- **E** — Empowerment · Auto-efficacité

Plus tard, une lettre s'est ajoutée :

- **D** — Difficulties · Difficultés

Le D est important. Recovery ne doit pas minimiser ce qui est difficile. La douleur et la tristesse ont le droit d'avoir leur place.
:::

:::quiz{id=q-5}
- q: "Que représente le « D » dans CHIME-D ?"
  type: multiple-choice
  options:
    - text: "Diagnostic"
      correct: false
    - text: "Difficulties — Difficultés (traumatisme, perte, stigma)"
      correct: true
      explanation: "Stuart, Tansey & Quayle (2017) ont montré que cette dimension manquait dans le CHIME original."
    - text: "Dépression"
      correct: false

- q: "Quelle lettre représente le « lien » ?"
  type: multiple-choice
  options:
    - text: "C — Connectedness"
      correct: true
    - text: "I — Identity"
      correct: false
    - text: "E — Empowerment"
      correct: false

- q: "CHIME est-il une liste à cocher ?"
  type: true-false
  correct: false
  explanation: "Non — CHIME décrit cinq thèmes qui se chevauchent. Parfois l'un est au premier plan, parfois un autre."
:::

:::flashcards{id=f-5}
- front: "CHIME"
  back: "Connectedness · Hope · Identity · Meaning · Empowerment. Cinq processus du Recovery (Leamy et al. 2011)."
- front: "Le D dans CHIME-D"
  back: "Difficulties — difficultés, traumatisme, perte, stigma, conséquences de la maladie. Recovery ne doit pas masquer ce qui est difficile (Stuart et al. 2017)."
- front: "Connectedness"
  back: "Lien. Relations, contacts entre pairs, famille, appartenance, communauté."
- front: "Empowerment"
  back: "Auto-efficacité. Prendre des responsabilités, prendre des décisions, utiliser ses forces."
:::

:::standard{reading_time=2}
En 2011, une équipe de recherche au King's College London a analysé plus de 180 études et rapports en se posant la question : que décrivent les personnes encore et encore quand elles racontent leur chemin de Recovery ? Cinq processus en sont ressortis — et leurs initiales anglaises forment le mot CHIME (anglais pour son de cloche).

- **C — Connectedness · Lien :** relations, famille, contacts entre pairs, appartenance, communauté.
- **H — Hope · Espoir :** la conviction qu'un changement est possible. Des modèles. La confiance dans le processus.
- **I — Identity · Identité :** qui suis-je au-delà du diagnostic ? Une image de soi positive au-delà du rôle de patient·e.
- **M — Meaning · Sens :** valeurs, objectifs, rôles, parfois spiritualité.
- **E — Empowerment · Auto-efficacité :** prendre des responsabilités. Prendre des décisions. Utiliser ses forces.

CHIME est aujourd'hui le modèle Recovery international le plus important. Mais ce n'est pas une liste à cocher, ni un escalier. Il décrit cinq thèmes qui se chevauchent. Parfois l'un est au premier plan, parfois un autre.

## Le D dans CHIME-D

En 2017, des chercheur·euse·s ont constaté : il manque quelque chose dans le modèle CHIME. Quelque chose qui revient sans cesse dans les récits de Recovery — la reconnaissance explicite des difficultés. Ils et elles ont donc ajouté une lettre :

- **D — Difficulties · Difficultés :** traumatismes, pertes, stigma, conséquences de la maladie.

Les études le montrent : environ 54 % du contenu des récits de Recovery porte sur des difficultés vécues. CHIME-D rappelle donc : Recovery ne doit pas basculer dans un optimisme forcé. Il doit y avoir de la place pour la douleur, le deuil et ce qui a vraiment été — parallèlement au regard sur les ressources.

Pour toi, cela veut dire : dans ce carnet, ce qui est difficile a sa place. Tout comme l'espoir.
:::

:::standard-quiz{id=q-5-std}
- q: "Que désigne le « D » dans CHIME-D ?"
  type: multiple-choice
  options:
    - text: "Diagnostic"
      correct: false
    - text: "Difficulties — difficultés (traumatisme, perte, stigma)"
      correct: true
      explanation: "Stuart, Tansey et Quayle ont montré en 2017 que cette dimension manquait dans le CHIME originel."
    - text: "Dépression"
      correct: false

- q: "Quelle lettre représente le « lien » ?"
  type: multiple-choice
  options:
    - text: "C — Connectedness"
      correct: true
    - text: "I — Identity"
      correct: false
    - text: "E — Empowerment"
      correct: false

- q: "CHIME est-il une liste à cocher ?"
  type: true-false
  correct: false
  explanation: "Non — CHIME décrit cinq thèmes qui se chevauchent. Parfois l'un est au premier plan, parfois un autre."
:::

:::standard-flashcards{id=f-5-std}
- front: "CHIME"
  back: "Connectedness · Hope · Identity · Meaning · Empowerment. Cinq processus du Recovery (Leamy et al. 2011)."
- front: "Le D dans CHIME-D"
  back: "Difficulties — difficultés, traumatisme, perte, stigma. Recovery ne doit pas masquer ce qui est difficile."
- front: "CHIME — liste ou pas ?"
  back: "Pas une liste à cocher. Cinq thèmes qui se chevauchent. Parfois l'un domine, parfois un autre."
- front: "Empowerment"
  back: "Auto-efficacité. Prendre des responsabilités, prendre des décisions, utiliser ses forces."
:::


# 6. Cinq phases du rétablissement
{#kap-6 reading_time=3}

Si CHIME décrit les cinq processus internes, le modèle d'Andresen, Oades et Caputi décrit les phases typiques du chemin [^andresen2003] [^andresen2006].

:::table{name="Phasen-der-Genesung"}
| Phase | Français | Ce qui se passe à l'intérieur |
|-------|---------|------------------------|
| **1. Moratorium** | Arrêt | Sentiment de perte, désespoir, repli |
| **2. Awareness** | Éveil | Premier espoir, prise de conscience : tout n'est pas perdu |
| **3. Preparation** | Préparation | Faire l'inventaire : qu'est-ce que je sais faire, qu'est-ce dont j'ai besoin ? |
| **4. Rebuilding** | Reconstruction | Construire activement de nouveaux objectifs, rôles, relations |
| **5. Growth** | Croissance | Une vie épanouie — avec ou sans symptômes résiduels |
:::

Les phases ne sont pas rigides. Il est normal de traverser plusieurs fois la même phase. Il est aussi normal de se vivre dans deux phases à la fois — en croissance dans un domaine de vie, à nouveau en arrêt dans un autre. Quatre tâches centrales traversent toutes les phases [^andresen2003] : trouver l'espoir, reconstruire son identité, trouver du sens, prendre des responsabilités.

:::easy{reading_time=1}
Le Recovery a souvent des phases. Trois chercheurs australiens en ont décrit cinq :

1. **Arrêt** — Tout semble lourd et sans espoir.
2. **Éveil** — Tu remarques : peut-être que quelque chose est encore possible.
3. **Préparation** — Tu regardes ce dont tu es capable.
4. **Reconstruction** — Tu fais de nouveaux plans.
5. **Croissance** — Tu vis ta vie. Avec ou sans symptômes.

Tu as le droit de sauter entre les phases. Ce n'est pas comme un escalier. C'est plutôt comme une spirale.
:::

:::quiz{id=q-6}
- q: "Combien de phases Andresen, Oades et Caputi décrivent-ils ?"
  type: multiple-choice
  options:
    - text: "Trois"
      correct: false
    - text: "Cinq"
      correct: true
    - text: "Sept"
      correct: false

- q: "Les phases sont-elles linéaires ?"
  type: true-false
  correct: false
  explanation: "Non. Tu peux sauter, traverser plusieurs fois la même phase ou être dans deux phases à la fois."
:::

:::flashcards{id=f-6}
- front: "Moratorium"
  back: "Première phase : arrêt. Sentiment de perte, désespoir, repli."
- front: "Awareness"
  back: "Phase de l'éveil. Premier espoir. Prise de conscience : tout n'est pas perdu."
- front: "Growth"
  back: "Croissance — une vie épanouie avec ou sans symptômes résiduels."
- front: "Quatre tâches de toutes les phases"
  back: "Trouver l'espoir · reconstruire son identité · trouver du sens · prendre des responsabilités."
:::

:::standard{reading_time=2}
Recovery se déroule rarement en ligne droite. Trois chercheur·euse·s australien·ne·s — Andresen, Oades et Caputi — ont dégagé cinq phases typiques à partir de nombreuses histoires de vie :

- **Moratorium (arrêt)** — tout semble lourd. Tu te sens perdu·e, tu te replies. L'espoir est loin.
- **Awareness (éveil)** — une première étincelle : peut-être que tout n'est pas fini.
- **Preparation (préparation)** — tu fais un inventaire. Que sais-je faire ? De quoi ai-je besoin ? Qui est là ?
- **Rebuilding (reconstruction)** — pas à pas, tu reconstruis de nouveaux rôles, objectifs et relations.
- **Growth (croissance)** — tu vis une vie qui te convient — avec ou sans symptômes résiduels.

Important à savoir : ces phases ne sont pas un escalier. Il est normal de passer plusieurs fois par la même phase. Il est normal d'être déjà dans la croissance dans un domaine de la vie et à nouveau dans l'arrêt dans un autre. Les reculs en font partie. Ils ne veulent pas dire que tu as échoué.

Quatre tâches traversent toutes les phases : trouver l'espoir, reconstruire son identité, trouver du sens, prendre des responsabilités.

Demande-toi : dans quelle phase te sens-tu en ce moment — peut-être dans plusieurs en même temps ?
:::

:::standard-quiz{id=q-6-std}
- q: "Les cinq phases sont-elles comme un escalier — l'une après l'autre ?"
  type: multiple-choice
  options:
    - text: "Oui, il faut les parcourir dans l'ordre."
      correct: false
      explanation: "Non — les phases ne sont pas rigides. Les reculs et les sauts sont normaux."
    - text: "Non. Tu peux sauter, répéter ou être dans plusieurs en même temps."
      correct: true
      explanation: "Exactement. Recovery est plus une spirale qu'un escalier."

- q: "Quelle phase décrit l'arrêt au début ?"
  type: multiple-choice
  options:
    - text: "Growth"
      correct: false
    - text: "Moratorium"
      correct: true
      explanation: "Moratorium = phase du désespoir et du repli."
    - text: "Awareness"
      correct: false
:::

:::standard-flashcards{id=f-6-std}
- front: "Cinq phases"
  back: "Moratorium · Awareness · Preparation · Rebuilding · Growth. Elles ne sont pas un escalier — les sauts et les reculs sont normaux."
- front: "Quatre tâches dans toutes les phases"
  back: "Trouver l'espoir · reconstruire son identité · trouver du sens · prendre des responsabilités."
- front: "Recul — qu'est-ce que cela veut dire ?"
  back: "Pas un échec. Une part normale du chemin. Recovery est une spirale, pas une ligne droite."
:::


# 7. Trois niveaux de rétablissement
{#kap-7 reading_time=3}

La recherche distingue trois niveaux [^slade2009] :

- **Rétablissement clinique** : les symptômes diminuent, un diagnostic perd de son poids.
- **Rétablissement fonctionnel** : tu peux à nouveau faire des choses qui te tiennent à cœur : travailler, apprendre, entretenir des relations, t'occuper de ton quotidien.
- **Rétablissement personnel** : tu trouves un nouveau sens, une nouvelle image de toi, un nouvel espoir. Tu te vis comme quelqu'un qui peut donner une direction à sa vie — même si tout n'est pas « parti ».

Les trois niveaux peuvent se renforcer mutuellement, mais ne doivent pas se produire dans cet ordre.

:::reflection{id=4 title="Quel niveau est important pour toi ?"}
- Si tu t'imagines dans un an une vie qui te fait du bien : qu'est-ce qui serait différent ?
- Lequel des trois niveaux — clinique, fonctionnel, personnel — te semble le plus important actuellement ?
- Y a-t-il quelque chose que tu aimais faire autrefois et que tu veux ramener dans ta vie ?
:::

:::easy{reading_time=1}
Il y a trois sortes de rétablissement :

- **Clinique :** les symptômes diminuent.
- **Fonctionnel :** tu peux à nouveau faire des choses : travailler, apprendre, entretenir des relations.
- **Personnel :** tu vis du sens et de l'espoir. Tu codécides de ta vie.

Le plus important pour le Recovery est le rétablissement personnel.
:::

:::quiz{id=q-7}
- q: "Quel niveau est le sens central du Recovery ?"
  type: multiple-choice
  options:
    - text: "Rétablissement clinique"
      correct: false
    - text: "Rétablissement fonctionnel"
      correct: false
    - text: "Rétablissement personnel"
      correct: true
      explanation: "C'est la lecture centrale du mouvement Recovery."

- q: "Les trois niveaux doivent-ils se produire dans un ordre précis ?"
  type: true-false
  correct: false
  explanation: "Non — ils peuvent se renforcer mutuellement, mais pas dans un ordre fixe."
:::

:::flashcards{id=f-7}
- front: "Trois niveaux de rétablissement"
  back: "Clinique (symptômes) · fonctionnel (quotidien, travail, relations) · personnel (sens, espoir, autodétermination)."
- front: "Rétablissement personnel — le plus important"
  back: "Le cœur du mouvement Recovery. Possible même quand les symptômes cliniques persistent."
:::

:::standard{reading_time=2}
Dans la recherche sur le Recovery, on distingue souvent trois niveaux de rétablissement — et il vaut la peine de les distinguer :

- **Rétablissement clinique** — les symptômes diminuent ou disparaissent. Le diagnostic perd de son poids. C'est la lecture de la médecine classique.
- **Rétablissement fonctionnel** — tu peux à nouveau faire des choses qui te tiennent à cœur. Travailler ou étudier. Tenir un foyer. Entretenir des amitiés. Façonner ton quotidien.
- **Rétablissement personnel** — tu trouves un nouveau sens. Tu construis une identité au-delà du diagnostic. Tu te vis comme quelqu'un qui peut donner une direction à sa vie. L'espoir revient.

Les trois niveaux peuvent se soutenir mutuellement. Mais ils n'ont pas besoin de se produire dans cet ordre. Certaines personnes vivent un rétablissement personnel longtemps avant que les symptômes ne s'apaisent. D'autres construisent d'abord la fonction — et remarquent ensuite que quelque chose bouge aussi à l'intérieur.

Le mouvement Recovery met clairement l'accent sur le rétablissement personnel. Car il est possible aussi quand les symptômes cliniques persistent. Tu n'as pas besoin d'être « guéri·e » pour mener une bonne vie.

Demande-toi : lequel des trois niveaux te semble le plus important en ce moment ?
:::

:::standard-quiz{id=q-7-std}
- q: "Quel niveau est au centre du mouvement Recovery ?"
  type: multiple-choice
  options:
    - text: "Rétablissement clinique — seulement quand les symptômes sont partis, cela compte."
      correct: false
    - text: "Rétablissement personnel — sens, espoir, identité au-delà du diagnostic."
      correct: true
      explanation: "Exactement. Le rétablissement personnel est possible aussi quand des symptômes persistent."
    - text: "Rétablissement fonctionnel — l'essentiel est que tu fonctionnes."
      correct: false

- q: "Les trois niveaux doivent-ils venir dans l'ordre ?"
  type: multiple-choice
  options:
    - text: "Oui — d'abord clinique, puis fonctionnel, puis personnel."
      correct: false
    - text: "Non. Ils peuvent se soutenir, mais n'ont pas besoin de se produire dans un ordre fixe."
      correct: true
:::

:::standard-flashcards{id=f-7-std}
- front: "Trois niveaux de rétablissement"
  back: "Clinique (symptômes) · fonctionnel (quotidien, travail, relations) · personnel (sens, espoir, identité)."
- front: "Rétablissement personnel"
  back: "Le cœur du Recovery. Mener une bonne vie — même quand les symptômes persistent."
- front: "Ordre ?"
  back: "Pas d'ordre fixe. Certaines personnes vivent le rétablissement intérieur bien avant la réduction clinique des symptômes."
:::


# 8. L’espoir — le cœur
{#kap-8 reading_time=4}

L'espoir est, dans presque tous les modèles Recovery, ce qui est nommé en premier [^leamy2011] [^andresen2003] [^schrank2012]. Schrank et ses collègues l'ont démontré : l'espoir prédit le rétablissement personnel indépendamment des symptômes [^schrank2012].

L'espoir, dans la recherche sur le Recovery, n'est pas une confiance naïve. Ce n'est pas non plus le contraire du réalisme. C'est une conviction concrète, souvent discrète, que ta vie peut être davantage que le pire jour que tu traverses [^slade2013].

Mike Slade résume ce constat ainsi : l'espoir serait cette énergie qui met en route un processus de rétablissement — sans lui, rien ne commence [^slade2013].

## L'espoir comme ressource empruntée

Une idée centrale du mouvement Recovery dit : l'espoir n'a pas besoin de venir de toi seul·e. Il peut être maintenu et prêté par d'autres jusqu'à ce que tu puisses à nouveau le ressentir [^russinova1999] [^deegan1996] [^schrank2012]. C'est exactement ce que font les bons pairs, les bons·nes professionnel·le·s, les bons proches : « Quand tu ne peux pas avoir d'espoir, nous le gardons pour toi. »

Pour les professionnel·le·s, l'espoir n'est donc pas un trait de caractère, mais une compétence professionnelle — la « hope-inspiring competence » selon Russinova [^russinova1999].

:::reflection{id=5 title="Sources d'espoir"}
- Qu'est-ce qui te donnait de l'espoir autrefois — une personne, un lieu, une activité, une pensée ?
- Qui, dans ton entourage, porte l'espoir avec toi quand tu ne le ressens pas toi-même ?
- Y a-t-il un petit pas qui pourrait t'orienter aujourd'hui vers l'espoir ?
:::

:::easy{reading_time=1}
L'espoir est le cœur du Recovery.

L'espoir ne veut pas dire : tu es toujours joyeux·se. L'espoir veut dire : tu crois que ta vie peut être davantage que le pire jour.

Le plus important : tu n'as pas besoin de porter l'espoir seul·e. D'autres peuvent le garder pour toi. Jusqu'à ce que tu le ressentes à nouveau.

Une phrase qui aide : « Quand tu n'as pas d'espoir, nous le gardons pour toi. »
:::

:::quiz{id=q-8}
- q: "Que dit la recherche (Schrank et al. 2012) sur l'espoir ?"
  type: multiple-choice
  options:
    - text: "L'espoir prédit le rétablissement personnel indépendamment des symptômes."
      correct: true
      explanation: "L'espoir est un prédicteur — même quand les symptômes persistent."
    - text: "L'espoir n'agit que pour les maladies légères."
      correct: false
    - text: "Il faut toujours porter l'espoir soi-même."
      correct: false

- q: "Que signifie « l'espoir emprunté » ?"
  type: multiple-choice
  options:
    - text: "Acheter de l'espoir à la famille."
      correct: false
    - text: "D'autres portent l'espoir pour toi, jusqu'à ce que tu le ressentes à nouveau."
      correct: true
      explanation: "Une idée centrale du mouvement Recovery."
:::

:::flashcards{id=f-8}
- front: "Espoir emprunté"
  back: "Quand tu ne peux pas avoir d'espoir, des pairs, des professionnel·le·s ou des proches le gardent pour toi — jusqu'à ce que tu le ressentes à nouveau."
- front: "L'espoir dans la recherche Recovery"
  back: "Pas une confiance naïve — mais une conviction discrète, souvent obstinée, que ta vie peut être davantage que le pire jour."
- front: "Hope-inspiring competence"
  back: "Russinova 1999 : inspirer l'espoir est une compétence professionnelle, pas un trait de caractère."
:::

:::standard{reading_time=2}
L'espoir est, dans presque tous les modèles Recovery, ce qui est nommé en premier. Et ce n'est pas un hasard.

Mike Slade résume la recherche ainsi : **« L'espoir est l'énergie qui met en route le processus de rétablissement — sans lui, rien ne commence. »**

L'espoir dans la lecture Recovery n'est pas une confiance naïve. Il n'est pas non plus le contraire du réalisme. C'est une conviction discrète, parfois obstinée : ta vie peut être davantage que le pire jour que tu traverses en ce moment.

## L'espoir peut être emprunté

L'une des idées les plus importantes du mouvement Recovery dit : **L'espoir ne doit pas venir de toi-même.** Il peut être tenu par d'autres et te être prêté, jusqu'à ce que tu puisses le ressentir à nouveau.

C'est exactement ce que font les bon·ne·s pair·e·s, les bon·ne·s professionnel·le·s, les bon·ne·s proches. Ils et elles disent — parfois en mots, parfois seulement par leur présence :

> « Si tu ne peux pas avoir d'espoir en ce moment, nous le gardons pour toi. Aussi longtemps qu'il le faudra. »

Ce n'est pas une technique thérapeutique. C'est une posture. Pour les professionnel·le·s, l'espoir n'est donc pas une question d'humeur personnelle, mais une compétence professionnelle — la *hope-inspiring competence* (Russinova).

Demande-toi :

- Qui dans ta vie garde l'espoir avec toi en ce moment ?
- Qui pourrait le faire, si tu demandais ?
- Et pour qui gardes-tu peut-être toi-même l'espoir — sans le remarquer ?
:::

:::standard-quiz{id=q-8-std}
- q: "Que veut dire « espoir emprunté » ?"
  type: multiple-choice
  options:
    - text: "Tu dois te construire l'espoir toi-même."
      correct: false
    - text: "D'autres gardent l'espoir pour toi, jusqu'à ce que tu le ressentes à nouveau."
      correct: true
      explanation: "Une idée centrale du mouvement Recovery. L'espoir n'est pas seulement une performance individuelle."

- q: "L'espoir dans la recherche Recovery est-il la même chose qu'une confiance naïve ?"
  type: multiple-choice
  options:
    - text: "Oui, simplement de l'optimisme."
      correct: false
    - text: "Non. Une conviction discrète, souvent obstinée, que ta vie peut être davantage que le pire jour."
      correct: true
:::

:::standard-flashcards{id=f-8-std}
- front: "L'espoir en Recovery"
  back: "Pas une confiance naïve — mais la conviction discrète que ta vie peut être davantage que le pire jour."
- front: "Espoir emprunté"
  back: "Quand tu ne peux pas avoir d'espoir, des pairs, des professionnel·le·s ou des proches le gardent pour toi — jusqu'à ce que tu le ressentes à nouveau."
- front: "Citation de Slade"
  back: "« L'espoir est l'énergie qui met en route le processus de rétablissement — sans lui, rien ne commence. »"
:::


# 9. Empowerment et autodétermination
{#kap-9 reading_time=4}

Le mot empowerment est étroitement lié au Recovery. Il vient des mouvements de droits civiques et d'émancipation du XXe siècle [^herriger2014] [^knufseibert2004] [^knuf2026].

Dans les années 1980, le concept est aussi repris dans les soins psychiatriques. Empowerment veut dire : auto-capacitation. Participation active. Prendre des responsabilités là où tu veux et peux les porter. Rogers et ses collègues ont développé à ce sujet une première échelle d'empowerment validée empiriquement [^rogers1997]. Dans l'espace germanophone, « Selbstbefähigung fördern » (« Favoriser l'auto-capacitation ») est l'ouvrage de référence [^knufseibert2004].

## Shared Decision-Making

Empowerment veut dire en pratique surtout une chose : décisions partagées plutôt qu'instructions. Les professionnel·le·s décident avec toi, pas sur toi [^charles1997] [^deegandrake2006]. Des études le montrent : qui est inclus·e dans les décisions est plus satisfait·e et obtient souvent de meilleurs résultats [^joosten2008] [^slade2017sdm].

## Personal Medicine

Pat Deegan a forgé le terme Personal Medicine : les choses non médicamenteuses qui aident une personne à rester en bonne santé — le sommeil, un chien, une certaine promenade, chanter en chorale, un appel le soir. Personal Medicine est considéré dans le mouvement Recovery comme équivalent aux médicaments et intégré dans les conventions de traitement [^deegan2005].

## Directives anticipées et Joint Crisis Plans

Un instrument concret d'empowerment, ce sont les conventions de traitement ou Joint Crisis Plans — des accords dans lesquels tu fixes, en période stable, ce qui doit ou ne doit pas se passer en cas de crise. Henderson et ses collègues ont pu montrer dans un essai contrôlé randomisé que les Joint Crisis Plans réduisent significativement les hospitalisations sous contrainte [^henderson2004].

:::easy{reading_time=2}
Empowerment veut dire : tu as le droit de décider. Tu as du pouvoir sur ta propre vie.

En psychiatrie, cela veut souvent dire : nous décidons ensemble. Pas : le médecin décide seul.

Tu as le droit de poser des questions. Tu as le droit de dire non. Tu as le droit de demander un deuxième avis.

Il existe aussi la « Personal Medicine ». Ce sont des choses, en dehors des médicaments, qui aident : un chien, une promenade, une chorale, un·e bon·ne ami·e. Ces choses sont aussi importantes que les médicaments.
:::

:::quiz{id=q-9}
- q: "Que signifie « Shared Decision-Making » ?"
  type: multiple-choice
  options:
    - text: "Le médecin décide seul."
      correct: false
    - text: "Professionnel·le et personne concernée décident ensemble."
      correct: true
      explanation: "Charles, Gafni & Whelan 1997 ont consacré le terme."
    - text: "La famille décide."
      correct: false

- q: "Que signifie « Personal Medicine » (Pat Deegan) ?"
  type: multiple-choice
  options:
    - text: "Des médicaments personnalisés selon le profil ADN."
      correct: false
    - text: "Les choses non médicamenteuses qui aident une personne à rester en bonne santé."
      correct: true
      explanation: "Chien, promenade, chorale, chant — intégrables dans les conventions de traitement."

- q: "Que montre l'essai contrôlé randomisé sur les Joint Crisis Plans (Henderson 2004) ?"
  type: multiple-choice
  options:
    - text: "Ils n'ont aucun effet mesurable."
      correct: false
    - text: "Ils réduisent significativement les hospitalisations sous contrainte."
      correct: true
:::

:::flashcards{id=f-9}
- front: "Empowerment"
  back: "Auto-capacitation. Participation active. Prendre des responsabilités là où tu veux et peux les porter."
- front: "Personal Medicine"
  back: "Pat Deegan : les choses non médicamenteuses qui te gardent en santé — sommeil, mouvement, relations, loisirs. Équivalentes aux médicaments."
- front: "Joint Crisis Plan"
  back: "Accord en période stable : que doit-il se passer en cas de crise, et que ne doit-il pas ? L'essai contrôlé randomisé (Henderson 2004) montre : réduit les hospitalisations sous contrainte."
- front: "Shared Decision-Making"
  back: "Professionnel·le et personne concernée décident ensemble — pas instruction et compliance."
:::

:::standard{reading_time=2}
Empowerment veut dire auto-capacitation. Tu peux décider — sur ta vie et sur ton traitement.

Cela semble évident, mais ne l'est souvent pas dans le quotidien psychiatrique. Pendant longtemps, la règle était : la professionnelle décide, la patiente ou le patient obéit. Recovery déplace ce point — vers une **responsabilité partagée**.

## Trois outils concrets

**Shared Decision-Making (décision partagée)** — les décisions sont prises ensemble. Tu demandes ce qui est recommandé. Tu dis ce qui te convient, à toi et à ta vie. Les études le montrent : qui est impliqué·e est plus satisfait·e et obtient de meilleurs résultats.

**Personal Medicine** (Pat Deegan) — il n'y a pas que les médicaments qui aident. Ce qui te garde en santé en tant que personne aide aussi : un chien, une promenade le matin, une chorale, un appel téléphonique le soir, le jardin, la randonnée. Dans le mouvement Recovery, la Personal Medicine est **équivalente** au traitement médical — et a sa place dans tout accord de traitement.

**Joint Crisis Plan (plan de crise commun)** — un accord que tu rédiges en période stable avec ton équipe : que doit-il se passer en cas de crise ? Que ne doit-il pas se passer ? Qui veux-tu voir informé ? Quels médicaments tolères-tu, lesquels pas ? Un essai contrôlé randomisé (Henderson 2004) le montre : de tels plans réduisent significativement les hospitalisations sous contrainte.

## Ce que l'empowerment ne veut pas dire

Empowerment ne veut pas dire : tout faire seul·e. Cela ne veut pas dire : être contre les professionnel·le·s. Cela veut dire : ta voix compte — à côté de la voix professionnelle. Les deux ensemble, c'est plus.

Demande-toi : où peux-tu déjà décider ? Où voudrais-tu avoir plus de voix ?
:::

:::standard-quiz{id=q-9-std}
- q: "Que veut dire Shared Decision-Making ?"
  type: multiple-choice
  options:
    - text: "Tu décides seul·e, le médecin se tait."
      correct: false
    - text: "La professionnelle et toi décidez ensemble."
      correct: true
      explanation: "Exactement. Ta voix compte à côté de la voix professionnelle."

- q: "Qu'est-ce que la « Personal Medicine » selon Pat Deegan ?"
  type: multiple-choice
  options:
    - text: "Des médicaments personnalisés selon un test ADN."
      correct: false
    - text: "Les choses non médicamenteuses qui te gardent en santé — chien, promenade, chorale, ami·e."
      correct: true
      explanation: "Équivalente aux médicaments et partie intégrante de tout accord de traitement."

- q: "À quoi sert un Joint Crisis Plan ?"
  type: multiple-choice
  options:
    - text: "C'est une formalité qui n'a guère d'effet."
      correct: false
    - text: "Il réduit les hospitalisations sous contrainte — démontré par un essai contrôlé randomisé (Henderson 2004)."
      correct: true
:::

:::standard-flashcards{id=f-9-std}
- front: "Empowerment"
  back: "Auto-capacitation. Tu peux décider — sur ta vie et ton traitement. Pas : tout faire seul·e."
- front: "Shared Decision-Making"
  back: "La professionnelle et toi décidez ensemble. Meilleurs résultats, satisfaction plus élevée."
- front: "Personal Medicine"
  back: "Pat Deegan : les choses non médicamenteuses qui te gardent en santé. Équivalentes aux médicaments."
- front: "Joint Crisis Plan"
  back: "Accord en période stable : que doit-il se passer en cas de crise, et que ne doit-il pas ? Réduit les hospitalisations sous contrainte."
:::


# 10. Salutogenèse — rester en santé
{#kap-10 reading_time=3}

La pensée orientée Recovery est étroitement liée au concept de salutogenèse [^antonovsky1979] [^antonovsky1997]. Au lieu de demander « Qu'est-ce qui rend les gens malades ? » (pathogenèse), la salutogenèse demande « Qu'est-ce qui maintient les gens en santé ? »

Antonovsky a identifié le sentiment de cohérence (Sense of Coherence) comme facteur de protection central — la capacité à vivre sa propre vie comme compréhensible, gérable et porteuse de sens. Les trois composantes correspondent de façon frappante aux processus CHIME et à la triade « Espoir — Pouvoir — Sens ».

Dans l'espace germanophone, Schmolke a rendu les concepts salutogénétiques utilisables pour les personnes ayant un diagnostic de schizophrénie [^schmolke2001]. Salutogenèse et Recovery sont régulièrement décrits dans la littérature D-A-CH comme deux faces de la même posture — orientation vers les ressources plutôt que vers le déficit [^knuf2026] [^ameringschmolke2012].

:::info{type=note title="Les trois composantes du sentiment de cohérence selon Antonovsky"}
- **Compréhensibilité** (Comprehensibility) : ma vie a une cohérence, elle a du sens.
- **Maniabilité** (Manageability) : je peux faire face à ce qui vient — seul·e ou avec de l'aide.
- **Significativité** (Meaningfulness) : il vaut la peine que je m'engage.
:::

:::easy{reading_time=1}
La médecine demande souvent : qu'est-ce qui rend les gens malades ? Cela s'appelle la pathogenèse.

La salutogenèse demande autrement : qu'est-ce qui maintient les gens en santé ?

Le chercheur Aaron Antonovsky a trouvé trois points importants :

- Je comprends ma vie.
- Je peux faire face à ce qui est difficile — seul·e ou avec de l'aide.
- Ma vie a un sens.

Quand ces trois points sont là, tu es plus solide face aux difficultés.
:::

:::quiz{id=q-10}
- q: "Quelle est la différence entre pathogenèse et salutogenèse ?"
  type: multiple-choice
  options:
    - text: "La pathogenèse est plus récente."
      correct: false
    - text: "La pathogenèse interroge la maladie — la salutogenèse la santé."
      correct: true
    - text: "La pathogenèse ne vaut que pour les maladies physiques."
      correct: false

- q: "Qui a développé le concept de salutogenèse ?"
  type: multiple-choice
  options:
    - text: "Sigmund Freud"
      correct: false
    - text: "Aaron Antonovsky"
      correct: true
:::

:::flashcards{id=f-10}
- front: "Salutogenèse"
  back: "Qu'est-ce qui maintient les gens en santé ? (Antonovsky 1979). Pendant de la pathogenèse — la question « qu'est-ce qui rend malade ? »."
- front: "Sentiment de cohérence"
  back: "Compréhensibilité · maniabilité · significativité. Facteur de protection selon Antonovsky."
:::

:::standard{reading_time=2}
La médecine classique demande : **« Qu'est-ce qui rend les gens malades ? »** Cela s'appelle la pathogenèse. Elle cherche des causes, des risques, des déficits.

Le sociologue Aaron Antonovsky a inversé la question. Il a demandé : **« Qu'est-ce qui maintient les gens en santé — même sous tension ? »** Cela s'appelle la salutogenèse.

## Le sentiment de cohérence

Antonovsky a observé : les personnes qui surmontent bien des crises de vie sévères partagent souvent une certaine posture intérieure. Il l'a nommée le **sentiment de cohérence** et l'a décrite en trois composantes :

- **Compréhensibilité** — ma vie fait un tout. Ce qui m'arrive peut être situé.
- **Maniabilité** — je peux composer avec ce qui vient. Seul·e ou avec de l'aide.
- **Significativité** — cela vaut la peine de m'engager. Ma vie a une direction.

Ces trois composantes sonnent familières. Elles sont étonnamment proches des cinq processus CHIME et de la triade « Espoir — Pouvoir — Sens ».

## Pourquoi c'est important

Salutogenèse et Recovery partagent la même posture de base : orientée vers les ressources, pas vers les déficits. Tu n'es pas vu·e comme un faisceau de symptômes, mais comme une personne avec des forces, des expériences, des relations — même quand beaucoup de choses sont difficiles.

Dans la littérature germanophone (Schmolke ; Amering et Schmolke), salutogenèse et Recovery sont donc souvent décrites comme deux faces de la même médaille.

Demande-toi : qu'est-ce qui te maintient en santé — aussi aujourd'hui, aussi maintenant ?
:::

:::standard-quiz{id=q-10-std}
- q: "Que demande la salutogenèse — par opposition à la pathogenèse ?"
  type: multiple-choice
  options:
    - text: "Qu'est-ce qui rend les gens malades ?"
      correct: false
      explanation: "C'est la pathogenèse. La salutogenèse pose la question inverse."
    - text: "Qu'est-ce qui maintient les gens en santé — même sous tension ?"
      correct: true
      explanation: "La question qu'a posée Antonovsky."

- q: "Quelles trois composantes appartiennent au sentiment de cohérence ?"
  type: multiple-choice
  options:
    - text: "Compréhensibilité · maniabilité · significativité"
      correct: true
      explanation: "Le triptyque d'Antonovsky. Étonnamment proche d'« Espoir — Pouvoir — Sens »."
    - text: "Espoir · foi · amour"
      correct: false
:::

:::standard-flashcards{id=f-10-std}
- front: "Salutogenèse"
  back: "Qu'est-ce qui maintient les gens en santé ? (Antonovsky). Pendant de la pathogenèse — la question « qu'est-ce qui rend malade ? »."
- front: "Sentiment de cohérence"
  back: "Compréhensibilité · maniabilité · significativité. Facteur de protection sous tension."
- front: "Salutogenèse et Recovery"
  back: "Deux faces de la même posture : orientée ressources, pas déficits. Tu es plus que tes symptômes."
:::


# 11. Stigmatisation et auto-stigmatisation
{#kap-11 reading_time=4}

Le stigma est l'une des plus grandes barrières au Recovery. Goffman a forgé le terme pour les sciences sociales : le stigma est une caractéristique qui dévalorise une personne aux yeux des autres [^goffman1963].

## Trois niveaux de stigma

Corrigan et Watson distinguent trois niveaux [^corrigan2002] :

- **Stigma public** : préjugés dans la société (« les personnes psychiquement malades sont dangereuses »).
- **Stigma structurel** : désavantages dans les lois, le marché du travail, les assurances.
- **Auto-stigma** (stigma internalisé) : tu reprends à ton compte les images négatives comme image de toi-même.

## Auto-stigma — quand la tempête se retourne vers l'intérieur

Corrigan et ses collègues décrivent l'auto-stigma comme un processus régressif en quatre étapes : percevoir, approuver, s'appliquer à soi, souffrir — avec des conséquences sur l'estime de soi, l'auto-efficacité et l'évolution de la maladie [^corrigan2011].

La bonne nouvelle : l'auto-stigma peut changer. Des revues systématiques montrent que des interventions psychosociales — surtout en groupe — peuvent réduire le stigma internalisé [^yanos2015] [^buechter2023]. Les programmes anti-stigma avec contact direct avec des personnes ayant une expérience vécue montrent aussi, dans des méta-analyses, des effets faibles à modérés [^corrigan2012] [^thornicroft2016].

Dans les récits d'expérience des pair-aidant·e·s [^utschakowski2009], une pensée revient sans cesse : ce n'est pas le diagnostic en lui-même qui blesse réellement. C'est ce que le diagnostic fait d'une personne aux yeux des autres — et ce que la personne concernée commence ensuite à croire d'elle-même. L'auto-stigma naît exactement à cette couture.

:::reflection{id=6 title="Voix intérieures"}
- Quelles phrases te dis-tu à toi-même sur ta maladie, ou sur la maladie de la personne que tu accompagnes ?
- Lesquelles de ces phrases ne sont pas vraiment ta propre voix, mais des images reprises de l'extérieur ?
- Quelle phrase serait une version plus bienveillante de la même vérité ?
:::

:::easy{reading_time=2}
Stigma veut dire : tu es jugé·e mal à cause de quelque chose. Par exemple : parce que tu as un diagnostic.

Il y a du stigma à trois endroits :

- Dans la société — préjugés, mauvais mots.
- Dans les règles et les lois — par exemple des difficultés avec les assurances.
- En toi — tu crois les choses négatives sur toi.

Ce dernier point s'appelle l'auto-stigma. C'est dangereux. Ça te rabaisse avant même que les autres le fassent.

La bonne nouvelle : l'auto-stigma peut changer. Parler aide. Rencontrer d'autres personnes qui vivent la même chose aide aussi.
:::

:::quiz{id=q-11}
- q: "Qu'est-ce que l'auto-stigma ?"
  type: multiple-choice
  options:
    - text: "Le stigma que les autres me font subir."
      correct: false
    - text: "Quand je reprends à mon compte les images négatives comme image de moi-même."
      correct: true
      explanation: "Corrigan & Watson 2002 le décrivent comme un processus régressif."

- q: "Quelle méthode réduit le plus efficacement le stigma ?"
  type: multiple-choice
  options:
    - text: "Le silence."
      correct: false
    - text: "Le contact direct avec des personnes ayant une expérience vécue."
      correct: true
      explanation: "Thornicroft et al. 2016 le montrent dans une méta-analyse."

- q: "L'auto-stigma peut-il changer ?"
  type: true-false
  correct: true
  explanation: "Oui — des interventions psychosociales, surtout en groupe, réduisent le stigma internalisé (Yanos 2015)."
:::

:::flashcards{id=f-11}
- front: "Trois niveaux de stigma"
  back: "Stigma public · stigma structurel · auto-stigma (stigma internalisé)."
- front: "Auto-stigma"
  back: "Quand tu reprends à ton compte les images sociales négatives comme image de toi-même. Modifiable."
- front: "Méthode anti-stigma la plus efficace"
  back: "Contact personnel direct avec des personnes ayant une expérience vécue (Corrigan et al. 2012 ; Thornicroft et al. 2016)."
:::

:::standard{reading_time=2}
Le stigma est l'une des plus grandes barrières sur le chemin du Recovery. Le sociologue Erving Goffman a décrit le stigma comme une caractéristique qui dévalorise une personne aux yeux des autres.

## Trois niveaux

Patrick Corrigan distingue trois niveaux où le stigma agit :

- **Stigma public** — préjugés dans la société. « Les malades psychiques sont dangereux. » « Ressaisis-toi. »
- **Stigma structurel** — désavantages dans les lois, le marché du travail, les assurances, les administrations.
- **Auto-stigma** — tu reprends à ton compte les images négatives venues de l'extérieur comme image de toi-même.

## Quand la tempête frappe vers l'intérieur

L'auto-stigma est particulièrement insidieux. Il te rapetisse — avant même que les autres ne le tentent. Corrigan décrit un processus en quatre étapes : percevoir, approuver, appliquer, souffrir. Le résultat : moins d'estime de soi, moins d'auto-efficacité, souvent aussi une évolution plus difficile de la maladie.

Dans les récits d'expérience de pair·e·s-aidant·e·s, une pensée revient encore et encore : **Ce n'est pas le diagnostic lui-même qui est véritablement blessant. Ce qui blesse, c'est ce que le diagnostic fait d'une personne aux yeux des autres — et ce qu'elle commence ensuite à croire d'elle-même.**

## La bonne nouvelle

L'auto-stigma est modifiable. La recherche le montre : les interventions psychosociales — surtout en groupe — réduisent le stigma internalisé. Contre le stigma public, ce qui marche le mieux est le **contact direct** avec des personnes ayant une expérience vécue.

Tu n'es pas ton diagnostic. Tu es une personne avec une histoire, des valeurs, des relations, des capacités.

Demande-toi : quelles phrases te dis-tu à toi-même sur ta maladie — et lesquelles d'entre elles sont en fait des voix reprises de l'extérieur ?
:::

:::standard-quiz{id=q-11-std}
- q: "Qu'est-ce que l'auto-stigma ?"
  type: multiple-choice
  options:
    - text: "Le stigma que les autres me font."
      correct: false
    - text: "Quand je reprends à mon compte les images sociales négatives comme image de moi-même."
      correct: true
      explanation: "Corrigan et Watson 2002 : un processus régressif en quatre étapes."

- q: "Qu'est-ce qui marche le mieux contre le stigma public ?"
  type: multiple-choice
  options:
    - text: "Le silence et la dissimulation."
      correct: false
    - text: "Le contact direct entre la population générale et des personnes ayant une expérience vécue."
      correct: true
      explanation: "Thornicroft et al. 2016 : la rencontre change les images."

- q: "L'auto-stigma est-il modifiable ?"
  type: multiple-choice
  options:
    - text: "Non — il est fixé une fois pour toutes."
      correct: false
    - text: "Oui — surtout en groupe et par des interventions psychosociales."
      correct: true
:::

:::standard-flashcards{id=f-11-std}
- front: "Trois niveaux de stigma"
  back: "Stigma public · stigma structurel · auto-stigma (internalisé)."
- front: "Auto-stigma"
  back: "Quand tu crois sur toi-même les images négatives venues de l'extérieur. Te rapetisse avant les autres. Modifiable."
- front: "Qu'est-ce qui marche contre le stigma ?"
  back: "Le contact direct avec des personnes ayant une expérience vécue. Parler. Groupes. Partager des histoires."
- front: "Tu n'es pas ton diagnostic"
  back: "Tu es une personne avec une histoire, des valeurs, des relations, des capacités."
:::


# Du statut de patient à expert de ta vie
{#kap-shift reading_time=8}

Si tu as été longtemps en traitement psychiatrique — peut-être pendant des années, ou des décennies — cela a fait quelque chose en toi. Pas seulement la maladie. Le rôle aussi.

Dans la médecine classique, la répartition des tâches est claire : le ou la professionnel·le sait. La ou le patient·e suit. Le diagnostic explique ce qui se passe. Le médicament ou la thérapie remet en état. Cette logique fonctionne bien pour beaucoup de maladies physiques. Pour la souffrance psychique, elle se heurte à des limites devenues toujours plus évidentes au cours des trente dernières années.

## Ce que le long rôle a pu te faire

Tu te reconnaîtras peut-être dans un ou plusieurs de ces points :

- Tu as appris à te décrire toi-même par un diagnostic. « Je suis bipolaire. » « Je suis borderline. » « Je suis un cas chronique. »
- Tu as appris que quelqu'un d'autre sait mieux ce qui est bon pour toi — le médecin, la thérapeute, l'équipe soignante.
- Tu as appris que ton propre ressenti est regardé avec méfiance — comme un « manque d'insight » ou de la « non-compliance ».
- Tu as appris à attendre — le prochain rendez-vous, le prochain médicament, la prochaine méthode qui finira par marcher.
- Tu as appris que le rétablissement est quelque chose qu'on te fait. Pas quelque chose que tu fais.

Ce n'est pas une faiblesse personnelle. C'est une réaction apprise. Dans la recherche, on l'appelle *impuissance apprise* — et elle apparaît partout où des personnes vivent longtemps dans des systèmes où elles ont peu de contrôle [^seligman1975].

Patricia Deegan, l'une des voix les plus marquantes du mouvement Recovery, a forgé pour cela un terme très tranchant : *spirit breaking* [^deegan1990]. Elle décrit ainsi la manière dont les systèmes d'aide font parfois le contraire de ce qu'ils devraient — comment ils brisent le sentiment de soi, la puissance d'agir, la voix des personnes, au lieu de les renforcer. Pas par malveillance. Mais parce que la logique du système le prévoit ainsi.

## Le paradigme qui bloque la guérison

Larry Davidson et David Roe ont saisi la différence scientifiquement [^davidsonroe2007]. Ils parlent de deux significations très différentes de Recovery :

- **Recovery FROM** — guérison D'UNE maladie. C'est la lecture médicale : symptômes en retrait, fonction retrouvée, diagnostic dans le meilleur des cas derrière toi.
- **Recovery IN** — rétablissement AVEC une maladie. C'est la lecture personnelle : mener une vie qui te remplit, même si les symptômes sont encore là.

Les deux sont possibles. Les deux sont précieux. Mais ils suivent des logiques très différentes. *Recovery FROM* a lieu dans le cabinet — tu es destinataire passive. *Recovery IN* a lieu dans ta vie — tu es la personne qui agit.

La chercheuse néerlandaise en Recovery Wilma Boevink le dit encore plus crûment [^boevink2017] : pour beaucoup de personnes ayant des maladies psychiques sévères, le système psychiatrique n'est pas en premier lieu un système de guérison. C'est un outil parmi plusieurs sur un chemin plus long. Celui ou celle qui comprend cela — et commence à utiliser la psychiatrie comme un moyen plutôt que de se vivre comme son objet — déplace quelque chose de fondamental.

## À quoi ressemble le glissement en pratique

Le glissement se fait par petits pas. Il a rarement un moment fracassant. Voici quelques exemples de ce à quoi il peut ressembler :

:::table{name="Vom-Patient-zum-Experten"}
| Depuis le rôle de patient·e … | … vers la posture d'expert·e |
|-----------------------|--------------------------|
| « Dites-moi ce que je dois faire. » | « Que recommandez-vous — et qu'est-ce qui convient à ma vie ? » |
| « Ça n'ira jamais mieux. » | « Aujourd'hui c'était dur. On verra ce qu'apportera la semaine prochaine. » |
| « Mon médecin sait ce qui est bon pour moi. » | « Nous décidons ensemble — et j'ai le droit de poser des questions au passage. » |
| « Je suis mon diagnostic. » | « J'ai un diagnostic. Il n'est pas tout ce que je suis. » |
| « J'ai échoué. » | « J'ai un jour difficile. C'est une information, pas un jugement. » |
| « Si j'en parle, l'équipe va peut-être me retirer mes médicaments. » | « Cet effet secondaire me pèse. Pouvons-nous examiner ensemble des alternatives ? » |
| « Je dois être fort·e. » | « J'ai le droit d'accepter de l'aide — et de décider laquelle. » |
:::

Aucun de ces glissements ne veut dire que tu n'as plus besoin d'aide. Aucun ne veut dire qu'il faut être contre les professionnel·le·s. Il ne s'agit pas de révolte, il s'agit de position.

## Pourquoi ce glissement est si important

Il n'est pas une recommandation parmi d'autres. Il est la condition pour que le Recovery puisse réellement agir pour toi :

- **L'espoir** ne peut se développer que dans un soi qui se vit, ne serait-ce qu'un peu, comme sujet.
- **Les objectifs personnels** ne peuvent être poursuivis que si l'on se vit comme quelqu'un à qui il est permis d'avoir des objectifs.
- **L'auto-efficacité** ne se construit que là où l'on fait l'expérience d'agir soi-même — pas seulement en attendant que quelque chose nous arrive.
- **Le sens** de la vie naît par le choix. Qui n'a pas le choix peine à trouver du sens.

La recherche le confirme nettement. Roe et Davidson [^roedavidson2005] décrivent Recovery comme un « rassemblement des éclats » et une réécriture de sa propre histoire. Des études récentes sur la reconstruction narrative de l'identité le montrent [^chiba2019narrative] : qui (re)construit, en phase de Recovery, une identité au-delà du rôle de patient·e, avance nettement plus loin — même si des symptômes persistent.

:::info{type=note title="Ce qui n'est pas voulu ici"}
Le glissement du statut de patient·e à la posture d'expert·e n'est pas un appel à arrêter les médicaments, à interrompre les traitements ou à se débrouiller seul·e. Ce n'est pas un reproche aux professionnel·le·s.

C'est une invitation à prendre ta propre voix comme source — à côté des voix des professionnel·le·s. Et à découvrir ce qui est juste pour toi.
:::

## Du fait d'avoir l'expérience à l'expertise par expérience

Dans l'espace germanophone, il existe un beau nom pour cette étape : Erfahrungsexpertin, Erfahrungsexperte — experte, expert par expérience. C'est exactement ce que la formation EX-IN développe systématiquement — sur douze modules, des personnes ayant une expérience de la psychiatrie deviennent des pair-aidant·e·s qui rendent leur propre expérience utilisable comme ressource pour les autres [^utschakowski2009] [^exin_de].

Tu n'as pas besoin de devenir pair-aidant·e pour accomplir ce glissement. Mais l'idée aide, même si tu ne l'appliques qu'à toi-même : ton histoire n'est pas quelque chose qui t'est arrivé et qui te définit. C'est quelque chose que tu connais — et dont tu peux tirer du savoir. Un savoir qui t'aide à mieux te comprendre toi-même et à mieux comprendre les autres.

Wilma Boevink appelle cela *experiential expertise* — l'expertise par expérience [^boevink2017] [^boevink2012]. Ton savoir d'expérience n'a pas moins de valeur que le savoir spécialisé des thérapeutes. Il est différent. Et les deux ensemble sont plus que la somme des parties.

## Si tu hésites encore

Peut-être que tu lis tout cela et que tu penses : c'est bien dit, mais pour moi ça ne marche plus. Peut-être que tu as trente ans d'expérience clinique. Peut-être que tu as perdu la foi. Peut-être que personne ne t'a jamais dit que ce rôle te revenait, à toi aussi.

Trois choses :

1. **Il n'est jamais trop tard.** La recherche sur le Recovery ne connaît ni limite d'âge, ni limite de sévérité. Même des personnes qui ont vécu des décennies en hospitalisation décrivent des glissements — parfois précisément au moment où elles ne s'y attendaient plus elles-mêmes [^harding1987] [^lally2017].

2. **Tu n'as pas besoin de tout faire d'un coup.** Une seule question le matin — « De quoi aurais-je besoin aujourd'hui ? » — est déjà un mouvement. Une seule réponse à toi-même le soir — « Aujourd'hui c'était dur, et j'étais là quand même » — est aussi un mouvement.

3. **Tu as besoin d'allié·e·s.** Personne ne réussit ce glissement seul. Des pairs, un groupe d'entraide, une personne de confiance, un·e professionnel·le qui incarne le concept, un Recovery College. Si ton équipe soignante ne fait pas ce chemin avec toi, ce n'est pas ton échec — c'est que cette équipe a, pour l'instant, un angle mort.

:::quote{author="Patricia Deegan, 1996" source="deegan1996" lang="en"}
We are a conspiracy of hope and we are pressing back against the strong tide of oppression which for centuries has been the legacy of those of us who are labeled with mental illness.
:::

:::quote-translation{source="deegan1996" translator="traduction libre"}
Nous sommes une conspiration de l'espoir. Nous nous opposons au courant puissant de l'oppression qui, depuis des siècles, est l'héritage de celles et ceux d'entre nous qui sont étiqueté·e·s avec un diagnostic psychique.
:::

:::reflection{id=10 title="Ta position"}
- À quels endroits te vis-tu encore dans le rôle classique de patient·e ?
- Où y a-t-il des moments où tu te vis déjà comme expert·e de ta propre expérience — même brièvement ?
- Quelle phrase de la colonne de gauche du tableau t'est familière — laquelle de la colonne de droite voudrait, lentement, prendre de la place ?
- Qui pourrait être ton/ta complice de conspiration pour l'espoir ?
:::

:::easy{reading_time=3}
Peut-être que tu as été longtemps en traitement. Alors tu as probablement appris une chose précise :

- Le médecin sait mieux que moi.
- Je dois faire ce qu'on me dit.
- Je suis malade, les autres m'aident.

C'est un rôle. Il s'appelle le rôle de patient·e.

Ce rôle aide parfois. Mais il peut aussi faire du mal. Tu deviens petit·e. Tu attends. Tu te rends dépendant·e.

Le Recovery dit : tu as le droit de sortir de ce rôle. Pas à pas.

Tu ne deviens pas médecin. Mais tu deviens expert·e de ta propre vie. Tu te connais le mieux. Ton expérience est un savoir.

**Ce changement est le changement le plus important dans le Recovery. Sans lui, rien ne marche.**

Trois choses pour conclure :

- Il n'est jamais trop tard. Même après de nombreuses années de traitement.
- Tu n'as pas besoin de tout faire d'un coup. Les petits pas comptent.
- Tu as besoin d'allié·e·s.

:::reflection{id=shift-easy title="Demande-toi"}
- À quel endroit te vis-tu encore dans l'ancien rôle ?
- Où es-tu déjà expert·e de ta vie ?
:::
:::

:::quiz{id=q-shift}
- q: "Que signifie ici le « rôle de patient·e » ?"
  type: multiple-choice
  options:
    - text: "Un diagnostic médical."
      correct: false
    - text: "Une posture apprise : attendre passivement, les autres savent mieux, on me rend en santé."
      correct: true
      explanation: "Un rôle, pas un diagnostic — et il est modifiable."

- q: "Que dit Patricia Deegan sur le « spirit breaking » ?"
  type: multiple-choice
  options:
    - text: "Il décrit un cas exceptionnel et rare."
      correct: false
    - text: "Les systèmes d'aide peuvent briser le sentiment de soi, la voix et la puissance d'agir — la plupart du temps sans intention malveillante."
      correct: true
      explanation: "Deegan 1990 — un terme tranchant mais précis."

- q: "Quelle est la différence entre Recovery FROM et Recovery IN ?"
  type: multiple-choice
  options:
    - text: "FROM = lecture ancienne, IN = plus récente."
      correct: false
    - text: "FROM = guérison D'UNE maladie (médical). IN = rétablissement AVEC une maladie (personnel)."
      correct: true
      explanation: "Davidson & Roe 2007."

- q: "Est-il vrai que ce glissement n'est qu'une recommandation parmi d'autres ?"
  type: true-false
  correct: false
  explanation: "Non — c'est la condition pour que le Recovery puisse réellement agir."

- q: "À partir de quel âge / après combien d'années de traitement est-il trop tard pour ce glissement ?"
  type: multiple-choice
  options:
    - text: "Après 10 ans."
      correct: false
    - text: "À partir de 60 ans."
      correct: false
    - text: "Jamais."
      correct: true
      explanation: "La recherche sur le Recovery ne connaît pas de limite d'âge. Possible aussi après des décennies."
:::

:::flashcards{id=f-shift}
- front: "Spirit Breaking"
  back: "Patricia Deegan (1990) : comment les systèmes d'aide brisent le sentiment de soi, la voix et la puissance d'agir — la plupart du temps sans intention malveillante."
- front: "Recovery FROM"
  back: "Guérison D'UNE maladie — lecture médicale. Symptômes en retrait, diagnostic dans le meilleur des cas derrière soi."
- front: "Recovery IN"
  back: "Rétablissement AVEC une maladie — lecture personnelle. Une vie épanouie, même si des symptômes persistent."
- front: "Rôle de patient·e"
  back: "Une posture apprise : passive, dans l'attente, hétéronome. Aide à court terme, nuit à long terme. Modifiable."
- front: "Expertise par expérience (Boevink)"
  back: "Ton savoir vécu est autonome et de valeur égale au savoir spécialisé. Tu peux l'utiliser — pour toi et pour les autres."
- front: "Conspiracy of Hope"
  back: "Patricia Deegan 1996 : « Nous sommes une conspiration de l'espoir. » — Recovery comme projet collectif contre la mise sous tutelle historique."
:::

:::standard{reading_time=3}
Si tu as été longtemps en traitement psychiatrique — peut-être des années, des décennies — cela a fait quelque chose en toi. Pas seulement la maladie. **Le rôle aussi**.

## Ce que le rôle a fait de toi

Peut-être que tu as appris :

- Le médecin sait mieux. Mon ressenti compte moins.
- Je dois attendre. Le prochain rendez-vous, le prochain médicament, la prochaine méthode.
- Je suis mon diagnostic : « Je suis borderline. » « Je suis bipolaire. »
- Le rétablissement est quelque chose que l'on me fait — pas quelque chose que je fais.

Ce n'est pas une faiblesse personnelle. C'est une **réaction apprise** à des années dans un système qui laisse peu de contrôle.

Patricia Deegan, voix marquante du mouvement Recovery, a forgé un terme tranchant pour cela : **« spirit breaking »**. Les systèmes d'aide peuvent — la plupart du temps sans intention malveillante — briser le sentiment de soi, la voix, la puissance d'agir d'une personne. Pas parce que les collaborateur·rice·s sont méchant·e·s. Mais parce que la logique du système le prévoit ainsi.

## Recovery FROM vs. Recovery IN

Larry Davidson et David Roe distinguent deux lectures très différentes du Recovery :

- **Recovery FROM** — guérison **D'UNE** maladie. La lecture médicale : symptômes en retrait, diagnostic derrière toi. Tu es destinataire passif·ve d'un traitement.
- **Recovery IN** — rétablissement **AVEC** une maladie. La lecture personnelle : mener une vie épanouie, même si des symptômes persistent. Tu es la personne agissante.

Les deux sont possibles. Les deux sont précieuses. Mais elles suivent des logiques très différentes. **Recovery IN est la condition pour que Recovery puisse devenir réellement efficace pour toi.** Car espoir, objectifs, auto-efficacité, sens — tout cela ne naît que là où tu te vis comme quelqu'un qui peut choisir.

## Tu restes dépendant·e d'aide — et pourtant sujet·te

Ce déplacement n'est pas un appel à arrêter les médicaments ou à mettre fin au traitement. Ce n'est pas un reproche aux professionnel·le·s. C'est une invitation à prendre ta propre voix comme source — **à côté** des voix professionnelles.

Trois choses pour finir :

- **Il n'est jamais trop tard.** Même après des décennies de traitement, de tels déplacements sont possibles.
- **Cela se fait par petits pas.** Une question le matin : « De quoi aurais-je besoin aujourd'hui ? » suffit pour commencer.
- **Tu as besoin d'allié·e·s.** Des pair·e·s. Une personne de confiance. Un Recovery College. Personne n'y parvient seul·e.
:::

:::standard-quiz{id=q-shift-std}
- q: "Que veut dire Patricia Deegan par « spirit breaking » ?"
  type: multiple-choice
  options:
    - text: "Un cas isolé rare, qui n'arrive presque pas."
      correct: false
    - text: "Comment les systèmes d'aide peuvent briser le sentiment de soi, la voix et la puissance d'agir — la plupart du temps sans intention malveillante."
      correct: true
      explanation: "Un terme tranchant mais précis (Deegan 1990)."

- q: "Quelle est la différence entre Recovery FROM et Recovery IN ?"
  type: multiple-choice
  options:
    - text: "FROM est dépassé, IN est la nouvelle version."
      correct: false
    - text: "FROM = guérison D'UNE maladie (médical). IN = rétablissement AVEC une maladie (personnel)."
      correct: true
      explanation: "Davidson et Roe 2007. Les deux sont possibles, mais suivent des logiques différentes."

- q: "Qui est expert·e de ta vie ?"
  type: multiple-choice
  options:
    - text: "Ton équipe de traitement."
      correct: false
    - text: "Toi-même — à côté du savoir spécialisé des soignant·e·s."
      correct: true

- q: "À partir de quel point est-il trop tard pour ce déplacement ?"
  type: multiple-choice
  options:
    - text: "Après 20 ans de traitement."
      correct: false
    - text: "À partir de 60 ans."
      correct: false
    - text: "Jamais. Même après des décennies, des déplacements sont possibles."
      correct: true
:::

:::standard-flashcards{id=f-shift-std}
- front: "Spirit Breaking (Deegan)"
  back: "Quand les systèmes d'aide — la plupart du temps sans intention malveillante — brisent le sentiment de soi, la voix et la puissance d'agir d'une personne."
- front: "Recovery FROM"
  back: "Guérison D'UNE maladie. La lecture médicale : symptômes partis, diagnostic derrière soi."
- front: "Recovery IN"
  back: "Rétablissement AVEC une maladie. La lecture personnelle : une vie épanouie, même si des symptômes persistent."
- front: "Expert·e de ta vie"
  back: "Tu te connais le mieux. Ton expérience est un savoir — à côté du savoir spécialisé, pas à sa place."
- front: "Jamais trop tard"
  back: "Recovery ne connaît pas de limite d'âge ni de seuil de sévérité. Possible aussi après des décennies."
:::


# 12. Soutien par les pairs, Trialogue et EX-IN
{#kap-12 reading_time=5}

## Ce qu'est le peer-support

Le peer-support (pair-soutien) désigne l'accompagnement par des personnes ayant elles-mêmes vécu et traversé des crises psychiques. Dans l'espace germanophone : pair-aidant·e·s en rétablissement (Genesungsbegleiter:innen), expert·e·s par expérience, pairs ou collaborateur·rice·s EX-IN [^utschakowski2009] [^exin_de].

Les racines remontent loin — dans la tradition de l'entraide, dans le concept WRAP de Mary Ellen Copeland [^copeland1997], dans le modèle allemand du Trialogue [^bockpriebe2005] et dans l'initiative EX-IN à partir de 2005 [^utschakowski2009].

## Trialogue — l'héritage germanophone

Le Trialogue — la conversation à égalité entre personnes concernées, proches et professionnel·le·s — a été fondé en 1989 à Hambourg par Thomas Bock et ses collègues [^bockpriebe2005]. C'est une contribution germanophone au mouvement Recovery international qui a profondément changé les soins en D-A-CH [^vonpeter2015].

## Ce que montre la recherche

La base de preuves du peer-support est aujourd'hui considérable. Un essai contrôlé randomisé multicentrique avec plus de 600 participant·e·s dans quatre pays a montré des effets significatifs sur l'empowerment et la qualité de vie [^slade2024peer]. Les méta-analyses récentes trouvent de manière cohérente des effets positifs sur l'auto-efficacité et des effets plus modestes sur l'espoir et l'empowerment [^white2024] [^lyons2021]. Un essai contrôlé randomisé allemand a également démontré des effets positifs [^mahlke2017].

Les facteurs d'efficacité sont : l'expérience vécue comme ancre de crédibilité, l'espoir comme modèle, l'établissement d'une relation à égalité et une communication non stigmatisante [^mead2001] [^davidson2012].

Wilma Boevink résume ce principe d'une phrase simple : le savoir d'expérience issu du mouvement des personnes concernées est de valeur égale au savoir spécialisé professionnel — et il constitue le fondement d'un savoir Recovery authentique [^boevink2012].

:::easy{reading_time=2}
Le peer-support veut dire : des personnes accompagnent d'autres personnes qui ont vécu des choses similaires.

Cela fait du bien. La recherche le montre : quand quelqu'un est « passé à travers » et se tient devant toi, c'est un signal fort. Cela donne de l'espoir.

Dans l'espace germanophone, il existe des pair-aidant·e·s en rétablissement avec une formation (EX-IN).

Il y a aussi le Trialogue — des discussions entre personnes concernées, proches et professionnel·le·s. À égalité. Sans que l'un·e soit plus important·e qu'un·e autre.

De telles conversations existent dans de nombreuses villes en Suisse, en Allemagne et en Autriche.
:::

:::quiz{id=q-12}
- q: "Que signifie EX-IN ?"
  type: multiple-choice
  options:
    - text: "Un diagnostic."
      correct: false
    - text: "Experienced Involvement — formation pour pair-aidant·e·s en rétablissement."
      correct: true
      explanation: "Développé à partir de 2005 à Brême."

- q: "Qui parle à égalité dans le Trialogue ?"
  type: multiple-choice
  options:
    - text: "Seulement les professionnel·le·s."
      correct: false
    - text: "Personnes concernées, proches et professionnel·le·s ensemble."
      correct: true
      explanation: "Fondé en 1989 par Thomas Bock à Hambourg."

- q: "Que montre la recherche sur le peer-support (Slade et al. 2024) ?"
  type: multiple-choice
  options:
    - text: "Aucun effet mesurable."
      correct: false
    - text: "Effets significatifs sur l'empowerment et la qualité de vie."
      correct: true
:::

:::flashcards{id=f-12}
- front: "EX-IN"
  back: "Experienced Involvement — formation pour des personnes ayant une expérience de la psychiatrie comme pair-aidant·e·s en rétablissement (depuis 2005, Brême). Inspirée par Dorothea Buck."
- front: "Trialogue"
  back: "Conversation à égalité entre personnes concernées, proches et professionnel·le·s. Fondé en 1989 par Thomas Bock à Hambourg."
- front: "Peer-support — facteurs d'efficacité"
  back: "Expérience vécue comme ancre de crédibilité · espoir comme modèle · relation à égalité · communication non stigmatisante."
- front: "Mahlke et al. 2017"
  back: "Essai contrôlé randomisé allemand sur le pair-soutien individuel — a démontré des effets significatifs sur l'empowerment et l'auto-efficacité."
:::

:::standard{reading_time=2}
Peer-support veut dire : des personnes qui ont elles-mêmes traversé une crise psychique en accompagnent d'autres — à hauteur d'humain, avec une expérience vécue plutôt qu'avec un titre professionnel.

Dans l'espace germanophone, on les appelle pair-aidant·e·s en rétablissement, expert·e·s par expérience ou collaborateur·rice·s EX-IN. EX-IN signifie « Experienced Involvement » — une formation née en 2005 à Brême, aujourd'hui ancrée dans de nombreuses cliniques, services de consultation et Recovery Colleges.

Trois notions sont importantes :

- **Peer-support :** accompagnement par quelqu'un avec une expérience semblable. Crédible parce que vécu.
- **Trialogue :** la conversation à égalité entre personnes concernées, proches et professionnel·le·s — fondé en 1989 à Hambourg par Thomas Bock.
- **EX-IN :** formation structurée à l'accompagnement par les pairs, inspirée par Dorothea Buck.

Ce que dit la recherche : une grande étude internationale avec plus de 600 participant·e·s dans quatre pays a montré des effets significatifs sur l'empowerment et la qualité de vie. Une étude allemande l'a confirmé. Ce qui agit n'est pas un truc — c'est la rencontre avec quelqu'un qui peut dire : « J'y étais aussi. Et il y a un chemin. »

Peut-être que tu connais toi-même quelqu'un dont l'histoire t'a porté·e. Peut-être qu'un jour, tu seras cette personne pour quelqu'un d'autre.
:::

:::standard-quiz{id=q-12-std}
- q: "Que veut dire EX-IN ?"
  type: multiple-choice
  options:
    - text: "Un nouveau diagnostic."
      correct: false
    - text: "Experienced Involvement — une formation à l'accompagnement par les pairs."
      correct: true
      explanation: "Développée à Brême depuis 2005, aujourd'hui ancrée dans de nombreuses structures germanophones."
    - text: "Une classe de médicaments."
      correct: false

- q: "Qui parle dans le Trialogue ?"
  type: multiple-choice
  options:
    - text: "Seulement des professionnel·le·s entre eux·elles."
      correct: false
    - text: "Personnes concernées, proches et professionnel·le·s — à hauteur d'humain."
      correct: true
      explanation: "Fondé en 1989 par Thomas Bock à Hambourg."
    - text: "Seulement des personnes concernées."
      correct: false
:::

:::standard-flashcards{id=f-12-std}
- front: "Peer-support"
  back: "Accompagnement par des personnes ayant leur propre expérience de crise. Agit par l'expérience vécue, l'espoir et l'égalité à hauteur d'humain."
- front: "Trialogue"
  back: "Conversation à égalité entre personnes concernées, proches et professionnel·le·s. Depuis 1989 (Bock, Hambourg)."
- front: "EX-IN"
  back: "Experienced Involvement — formation pour personnes ayant une expérience de la psychiatrie, depuis 2005."
:::


# 13. Recovery Colleges — apprendre plutôt qu’être traité
{#kap-13 reading_time=5}

Les Recovery Colleges sont un modèle britannique apparu à partir de 2009 [^perkins2012]. Ce ne sont pas des cliniques, mais des établissements de formation. Ils sont gratuits, ouverts à tous et toutes — personnes concernées, proches, professionnel·le·s et personnes intéressées — et utilisent la forme pédagogique de la formation pour adultes plutôt que la séance thérapeutique.

Deux principes centraux marquent les Recovery Colleges [^perkins2012] [^meddings2015] :

- **Formation plutôt que thérapie.** Les participant·e·s sont des étudiant·e·s, pas des patient·e·s. Focalisation sur les ressources et l'apprentissage, pas sur le déficit et le diagnostic.
- **Coproduction (Co-Production).** Chaque cours est développé et animé en commun par une personne professionnelle et une personne ayant une expérience vécue — à égalité.

## Ce que montre la recherche

Hayes et ses collègues recensent 221 Recovery Colleges dans 28 pays sur cinq continents [^hayes2023].

L'étude RECOLLECT est l'analyse scientifique la plus complète à ce jour des Recovery Colleges [^henderson2024recollect]. Une étude de cohorte rétrospective anglaise avec 1 193 étudiant·e·s de Recovery College face à 3 508 personnes témoins sur 6, 12 et 60 mois a montré : réduction significative des hospitalisations psychiatriques, des jours d'hospitalisation et des consultations d'urgence — avec en même temps un bien-être accru [^ronaldson2024].

Une revue de la littérature sur dix ans de recherche sur les Recovery Colleges [^theriault2020] confirme des effets cohérents sur l'espoir, l'empowerment, l'auto-efficacité, l'inclusion sociale, l'atteinte des objectifs et les connaissances sur la santé mentale. Crowther et ses collègues montrent que les professionnel·le·s tirent aussi bénéfice de leur participation aux Recovery Colleges [^crowther2019].

:::info{type=evidence title="Évidences dans l'espace germanophone"}
Des données D-A-CH empiriquement validées sur l'efficacité des soins orientés Recovery sont apparues ces dernières années.

Un essai contrôlé randomisé allemand sur le pair-accompagnement pour des personnes ayant des maladies psychiques sévères [^mahlke2017] a démontré des effets significatifs sur l'empowerment et l'auto-efficacité.

La recommandation S3 de la DGPPN « Thérapies psychosociales pour les maladies psychiques sévères » (2e édition 2019) a intégré l'orientation Recovery, le peer-support et le Shared Decision-Making comme recommandations [^dgppn2019].

La recherche sur les Recovery Colleges dans l'espace germanophone croît — les données sur les sites D-A-CH spécifiques sont en cours de constitution.
:::

Dans l'espace germanophone, des Recovery Colleges existent notamment à Berne [^rcbern], en Suisse orientale, à Genève, à Saint-Gall et à Zurich — ainsi que de plus en plus en Allemagne et en Autriche (entre autres l'Empowerment College de Brême).

:::easy{reading_time=2}
Les Recovery Colleges sont une école d'un genre particulier. Mais pas une école pour enfants.

Ici, des adultes apprennent au sujet de la santé mentale. Tout le monde peut venir : personnes concernées, proches, professionnel·le·s, personnes intéressées.

Les cours sont gratuits. Tu n'as pas besoin de diagnostic.

Chaque cours est conçu ensemble : par une personne professionnelle et une personne ayant une expérience vécue. Les deux sont aussi importantes.

Il existe aujourd'hui plus de 220 Recovery Colleges dans 28 pays. Aussi en Suisse, en Allemagne et en Autriche.

La recherche le montre : qui suit un Recovery College va ensuite mieux.
:::

:::quiz{id=q-13}
- q: "Qui peut participer à un Recovery College ?"
  type: multiple-choice
  options:
    - text: "Seulement les personnes avec un diagnostic."
      correct: false
    - text: "Personnes concernées, proches, professionnel·le·s et personnes intéressées — tout le monde."
      correct: true
      explanation: "Ouvert à tous et toutes. Pas besoin de diagnostic. Gratuit."

- q: "Que signifie « Co-Production » ?"
  type: multiple-choice
  options:
    - text: "Un truc de cinéma."
      correct: false
    - text: "Une personne professionnelle et une personne ayant une expérience vécue conçoivent les cours ensemble — à égalité."
      correct: true

- q: "Que montre l'étude de cohorte britannique de Ronaldson et al. 2024 ?"
  type: multiple-choice
  options:
    - text: "Aucun effet."
      correct: false
    - text: "Réduction significative des hospitalisations psychiatriques et des jours d'hospitalisation."
      correct: true
:::

:::flashcards{id=f-13}
- front: "Recovery College"
  back: "Établissement de formation — pas un lieu de traitement. Apprendre plutôt qu'être traité. Gratuit. Ouvert à tous et toutes."
- front: "Co-Production"
  back: "Les cours sont développés et animés ensemble par une personne professionnelle et une personne ayant une expérience vécue."
- front: "Efficacité"
  back: "Hayes 2023 : 221 Recovery Colleges dans 28 pays. Ronaldson 2024 : moins d'hospitalisations, plus de bien-être."
:::

:::standard{reading_time=2}
Un Recovery College n'est pas une clinique. C'est une école pour adultes — ouverte à tou·te·s celles et ceux qui veulent apprendre quelque chose sur la santé mentale : personnes concernées, proches, professionnel·le·s, intéressé·e·s. Les cours sont gratuits, tu n'as besoin ni de diagnostic, ni d'orientation, ni d'inscription chez ton médecin.

Deux principes portent ce modèle :

- **Formation plutôt que thérapie.** Tu es étudiant·e, pas patient·e. Au centre : l'apprentissage, les ressources et les questions — pas le diagnostic ni le déficit.
- **Co-Production.** Chaque cours est développé et animé ensemble par une personne professionnelle et une personne ayant une expérience vécue. Les deux sources de savoir sont d'égale valeur.

Le premier Recovery College est né en 2009 à Londres. Aujourd'hui, il y en a plus de 220 dans le monde, dans 28 pays — aussi en Suisse (notamment Berne, Suisse orientale, Genève, Saint-Gall, Zurich), en Allemagne et en Autriche.

La plus grande étude à ce sujet, RECOLLECT, en Angleterre, a comparé près de 1 200 étudiant·e·s de Recovery Colleges avec plus de 3 500 personnes de contrôle sur cinq ans. Le résultat : moins d'hospitalisations psychiatriques, moins d'urgences, plus de bien-être. Dix ans de recherche le confirment : espoir, empowerment, inclusion sociale et auto-efficacité augmentent de manière mesurable.

Peut-être qu'un Recovery College près de chez toi est un premier lieu où tu n'as pas à t'expliquer — mais où tu as le droit d'apprendre.
:::

:::standard-quiz{id=q-13-std}
- q: "Qui peut fréquenter un Recovery College ?"
  type: multiple-choice
  options:
    - text: "Seulement des personnes avec un diagnostic psychiatrique."
      correct: false
    - text: "Tout le monde — personnes concernées, proches, professionnel·le·s, intéressé·e·s. Sans diagnostic."
      correct: true
      explanation: "Les Recovery Colleges sont ouverts, gratuits et ne nécessitent aucune orientation."
    - text: "Seulement des professionnel·le·s."
      correct: false

- q: "Que veut dire Co-Production ?"
  type: multiple-choice
  options:
    - text: "Tourner plusieurs films ensemble."
      correct: false
    - text: "Les cours sont planifiés ensemble par professionnel·le et expert·e par expérience — à hauteur d'humain."
      correct: true
      explanation: "C'est le principe clé des Recovery Colleges."
    - text: "Une vidéo de formation interactive."
      correct: false
:::

:::standard-flashcards{id=f-13-std}
- front: "Recovery College"
  back: "Lieu de formation plutôt que de traitement. Gratuit, ouvert à tou·te·s. Apprendre plutôt qu'être traité."
- front: "Co-Production"
  back: "Chaque cours est conçu ensemble par une professionnelle et une personne ayant une expérience vécue."
- front: "Effet (RECOLLECT)"
  back: "Moins d'hospitalisations, moins d'urgences, plus de bien-être — démontré sur cinq ans."
:::


# 14. Approche informée par le trauma
{#kap-14 reading_time=3}

:::info{type=warmth title="Avant de poursuivre la lecture"}
Ce chapitre nomme la violence, les abus, la négligence et la discrimination. Si tu as vécu des choses difficiles, la lecture peut faire remonter beaucoup. C'est normal. Lis à ton rythme. Fais des pauses. Passe au chapitre suivant si c'est trop aujourd'hui. Si tu as besoin de soutien tout de suite : le Chapitre 20 (Crise) est à quelques pressions — ou appelle **La Main Tendue** (Suisse) au **143**, en France **3114**, en Belgique **107**, en Allemagne **0800 111 0 111**, en Autriche **142**.
:::

Beaucoup de personnes prises en charge en psychiatrie ont, dans leur histoire, vécu des expériences traumatiques — violence, abus, négligence, discrimination. Des séjours psychiatriques eux-mêmes peuvent également avoir un effet retraumatisant [^felitti1998].

Une posture informée par le trauma est donc partie intégrante d'une pratique orientée Recovery. L'agence américaine SAMHSA [^samhsa2014trauma] en a défini six principes directeurs :

- **Sécurité** — physique et émotionnelle.
- **Confiance et transparence** — information claire, cadre fiable.
- **Peer-support** — l'expérience vécue comme ressource.
- **Collaboration et réciprocité** — réduire les hiérarchies.
- **Empowerment, voix et choix** — décision et autodétermination.
- **Sensibilité culturelle, historique et de genre.**

Ces principes valent aussi dans un carnet numérique. Tu décides ce que tu lis et quand, ce que tu enregistres, ce que tu supprimes.

:::easy{reading_time=1}
Beaucoup de personnes en psychiatrie ont vécu des choses lourdes. De la violence. Des abus. De la négligence.

Parfois, le séjour à la clinique lui-même est éprouvant.

C'est pourquoi une posture sensible au trauma est importante. Cela veut dire :

- La sécurité d'abord.
- Créer de la confiance.
- Communiquer honnêtement.
- Personne ne décide par-dessus ta tête.

Cette posture vaut aussi dans cette application. C'est toi qui décides ce que tu lis. Ce que tu enregistres. Ce que tu supprimes.
:::

:::quiz{id=q-14}
- q: "Combien de principes la SAMHSA a-t-elle définis pour les soins informés par le trauma ?"
  type: multiple-choice
  options:
    - text: "Trois"
      correct: false
    - text: "Six"
      correct: true
    - text: "Dix"
      correct: false

- q: "Lequel n'est PAS un principe de la pratique informée par le trauma ?"
  type: multiple-choice
  options:
    - text: "Sécurité"
      correct: false
    - text: "Sévérité"
      correct: true
      explanation: "La sévérité ne fait pas partie des principes SAMHSA."
    - text: "Peer-support"
      correct: false
:::

:::flashcards{id=f-14}
- front: "Six principes (SAMHSA 2014)"
  back: "Sécurité · confiance & transparence · peer-support · collaboration · empowerment · sensibilité culturelle/de genre."
- front: "Retraumatisation"
  back: "Quand les systèmes d'aide deviennent eux-mêmes une source supplémentaire de traumatisme. La pratique informée par le trauma veut activement empêcher cela."
- front: "Étude ACE (Felitti 1998)"
  back: "Démontre : les expériences traumatiques de l'enfance sont très répandues et marquent la santé toute la vie."
:::

:::standard{reading_time=2}
Beaucoup de personnes prises en charge en psychiatrie portent des expériences lourdes — violences, abus, négligences, discriminations, pertes. Parfois, les séjours psychiatriques eux-mêmes sont éprouvants ou retraumatisants. Une approche informée par le trauma prend cela au sérieux, sans te pousser à montrer des blessures que tu ne veux pas montrer.

L'agence américaine de santé SAMHSA a décrit six principes directeurs qui portent un accompagnement sensible au trauma :

- **Sécurité** — corporelle et émotionnelle. Personne ne doit se trouver dans un espace où il ou elle ne se sent pas en sécurité.
- **Confiance et transparence** — information claire, cadre fiable, pas de surprises au-dessus de ta tête.
- **Peer-support** — l'expérience vécue comme pont fiable.
- **Collaboration à hauteur d'humain** — abaisser les hiérarchies, pas les agrandir.
- **Empowerment, voix et choix** — tu codécides. Toujours.
- **Sensibilité culturelle, historique et de genre** — ton histoire fait partie de qui tu es.

Ces principes valent aussi dans un carnet numérique. C'est toi qui décides ce que tu lis et quand. Ce que tu enregistres. Ce que tu effaces. Si un chapitre est trop, ferme-le. Reviens quand tu seras prêt·e. Ou laisse-le complètement de côté.

Approche informée par le trauma ne veut pas dire : traiter d'abord le trauma, puis vivre. Cela veut dire : tout ce qui se passe ici tient compte de ce que tu as déjà porté.
:::

:::standard-quiz{id=q-14-std}
- q: "Combien de principes directeurs SAMHSA a-t-elle définis pour la pratique informée par le trauma ?"
  type: multiple-choice
  options:
    - text: "Trois."
      correct: false
    - text: "Six."
      correct: true
      explanation: "Sécurité, confiance, peer-support, collaboration, empowerment, sensibilité culturelle."
    - text: "Dix."
      correct: false

- q: "Qui décide ce qui est enregistré dans cette application ?"
  type: multiple-choice
  options:
    - text: "L'application."
      correct: false
    - text: "Toi. Toujours."
      correct: true
      explanation: "L'autodétermination sur tes données est l'expression d'une posture informée par le trauma."
:::

:::standard-flashcards{id=f-14-std}
- front: "Six principes (SAMHSA)"
  back: "Sécurité · confiance & transparence · peer-support · collaboration · empowerment · sensibilité culturelle et de genre."
- front: "Sécurité d'abord"
  back: "Personne ne décide au-dessus de ta tête. C'est toi qui détermines le rythme, la profondeur et l'arrêt."
- front: "Retraumatisation"
  back: "Quand les systèmes d'aide blessent en plus. La pratique informée par le trauma veut activement empêcher cela."
:::


# 15. Recovery et droits humains
{#kap-15 reading_time=4}

Recovery n'est pas seulement une question professionnelle, c'est aussi une question de droits humains. La Convention de l'ONU relative aux droits des personnes handicapées garantit aux personnes en situation de handicap — y compris en situation de handicap psychique — le droit à l'autodétermination, à l'inclusion et à la prise de décision soutenue [^uncrpd2006]. L'Allemagne a ratifié la CDPH en 2009, l'Autriche en 2008, la Suisse en 2014.

L'OMS a lancé en 2019 l'initiative QualityRights [^who2019] et publié en 2021 le guide « Guidance on Community Mental Health Services » [^who2021]. Recovery y est désigné comme principe central des soins modernes.

Concrètement, cela signifie : réduire la contrainte, ne jamais placer le diagnostic au-dessus de la personne, offrir le soutien là où les personnes en ont besoin — et associer les personnes concernées comme partenaires à part entière à toutes les décisions concernant les soins.

:::info{type=example title="Exemple : Dialogue ouvert (Open Dialogue)"}
En Laponie occidentale finlandaise, Jaakko Seikkula a développé dans les années 1980 le concept de Dialogue ouvert.

En cas de crise psychotique aiguë, tous les proches importants sont impliqués dans les 24 heures. Toutes les conversations ont lieu en commun, toutes les décisions sont négociées de manière transparente.

Les résultats à long terme sont exceptionnels : en Laponie occidentale, plus de 80 % des personnes ayant fait un premier épisode psychotique sont retournées au travail ou en formation dans les deux ans. Une étude sur 19 ans a confirmé la stabilité à long terme des résultats [^seikkula2011] [^bergstroem2018].
:::

:::easy{reading_time=1}
Recovery est aussi un droit humain.

L'ONU a adopté en 2006 une convention. Elle dit : les personnes en situation de handicap ont le droit de décider elles-mêmes. Y compris les personnes avec une maladie psychique.

L'OMS dit en 2021 : la psychiatrie doit respecter ces droits. Ce n'est pas au médecin de décider seul. Mais à tous ensemble.

Cela vaut aussi en Suisse, en Allemagne et en Autriche.
:::

:::quiz{id=q-15}
- q: "Qu'est-ce que la CDPH de l'ONU ?"
  type: multiple-choice
  options:
    - text: "Une méthode de traitement."
      correct: false
    - text: "La Convention de l'ONU relative aux droits des personnes handicapées de 2006."
      correct: true
      explanation: "La Suisse l'a ratifiée en 2014, l'Allemagne en 2009, l'Autriche en 2008."

- q: "Que dit l'OMS en 2021 ?"
  type: multiple-choice
  options:
    - text: "Recovery est non scientifique."
      correct: false
    - text: "Les soins doivent être centrés sur la personne et fondés sur les droits."
      correct: true
:::

:::flashcards{id=f-15}
- front: "CDPH de l'ONU 2006"
  back: "Convention de l'ONU relative aux droits des personnes handicapées. Garantit l'autodétermination — y compris en cas de handicap psychique. Ratifiée par la CH en 2014, l'Allemagne en 2009, l'Autriche en 2008."
- front: "WHO QualityRights"
  back: "Initiative de l'OMS depuis 2019. Guide 2021 « Guidance on Community Mental Health Services » : centré sur la personne, fondé sur les droits, orienté Recovery."
- front: "Open Dialogue (Seikkula)"
  back: "Laponie occidentale depuis les années 1980. Plus de 80 % des personnes ayant fait un premier épisode psychotique retournent au travail ou en formation dans les 2 ans. Confirmé dans le suivi à 19 ans."
:::

:::standard{reading_time=2}
Recovery n'est pas seulement une question professionnelle — c'est aussi une question de droits humains. Qui souffre psychiquement ne perd pas le droit d'être entendu·e, impliqué·e et pris·e au sérieux.

La **Convention de l'ONU relative aux droits des personnes handicapées** (CDPH) de 2006 garantit à toutes les personnes handicapées — physiquement, mentalement, psychiquement — le droit à l'autodétermination, à l'inclusion et à la prise de décision accompagnée. La Suisse l'a ratifiée en 2014, l'Allemagne en 2009, l'Autriche en 2008. C'est du droit en vigueur.

L'**Organisation mondiale de la santé (OMS)** a donné du poids à cela en 2019 avec l'initiative QualityRights et a publié en 2021 le guide « Guidance on Community Mental Health Services ». Recovery y est cité comme principe central des soins modernes — à côté du centrage sur la personne et du fondement sur les droits.

Que signifie cela concrètement ?

- Réduire la contrainte — partout où c'est possible.
- Ne jamais placer le diagnostic au-dessus de la personne.
- Proposer du soutien là où les gens vivent.
- Impliquer les personnes concernées comme partenaires à parts égales dans les décisions de soins.

Un exemple en est l'**Open Dialogue** finlandais. En cas de crise psychotique aiguë, toutes les personnes de confiance importantes sont impliquées dans les 24 heures. Plus de 80 % des personnes ayant fait un premier épisode psychotique sont retournées au travail ou en formation dans les deux ans — les études à long terme confirment la stabilité de ces résultats.

Tu n'as pas besoin de connaître ces cadres par cœur. Mais c'est bon à savoir : quand tu dis « Je veux codécider », tu te tiens sur un sol juridique solide.
:::

:::standard-quiz{id=q-15-std}
- q: "Que garantit la CDPH de l'ONU aussi aux personnes ayant des maladies psychiques ?"
  type: multiple-choice
  options:
    - text: "Une guérison rapide."
      correct: false
    - text: "L'autodétermination, l'inclusion et la prise de décision accompagnée."
      correct: true
      explanation: "CDPH de l'ONU 2006. Ratifiée : CH 2014, DE 2009, AT 2008."
    - text: "Une forme de thérapie déterminée."
      correct: false

- q: "Que dit le guide OMS 2021 sur les soins psychiatriques ?"
  type: multiple-choice
  options:
    - text: "Ils doivent être centrés sur la personne et fondés sur les droits."
      correct: true
      explanation: "Recovery y est cité comme principe central."
    - text: "Ils doivent être autant que possible stationnaires et de longue durée."
      correct: false
    - text: "Ils doivent se faire sans participation des personnes concernées."
      correct: false
:::

:::standard-flashcards{id=f-15-std}
- front: "CDPH de l'ONU 2006"
  back: "Convention de l'ONU relative aux droits des personnes handicapées. Garantit l'autodétermination — y compris en cas de handicap psychique. Ratifiée : CH 2014, DE 2009, AT 2008."
- front: "WHO QualityRights"
  back: "Initiative de l'OMS depuis 2019. Guide 2021 : centré sur la personne, fondé sur les droits, orienté Recovery."
- front: "Open Dialogue"
  back: "Modèle finlandais. Plus de 80 % des personnes ayant fait un premier épisode psychotique retournent au travail ou en formation dans les 2 ans."
:::


# 16. Maladie ou Recovery : deux vues
{#kap-16 reading_time=3}

Recovery est plus qu'une nouvelle méthode — c'est un changement de perspective [^knuf2026] [^slade2014] [^ameringschmolke2012].

:::table{name="Paradigmenvergleich"}
| Vision orientée maladie | Vision orientée Recovery |
|----------------------------|---------------------------|
| Diagnostic au centre | Personne au centre |
| Absence de symptômes comme but | Vie pleine de sens comme but |
| Expert·e = professionnel·le | Double expertise : savoir spécialisé + savoir d'expérience |
| Plan de traitement | Plan de Recovery + plan de traitement |
| Compliance | Shared Decision-Making |
| Regard sur le déficit (pathogenèse) | Regard sur les ressources (salutogenèse) |
| Chemin linéaire de guérison | Chemin individuel, non linéaire |
| Le ou la professionnel·le porte seul·e l'espoir | L'espoir est partagé et prêté |
| Patient·e / client·e | Personne / personne ayant une expérience / étudiant·e |
:::

La colonne de droite ne remplace pas celle de gauche. Les deux colonnes ont leur place — le paradigme orienté Recovery élargit le paradigme médical, il ne le remplace pas [^slade2014].

Amering et Schmolke soulignent un point souvent négligé : la pratique orientée Recovery n'est pas un module supplémentaire posé par-dessus. C'est une autre manière de produire du savoir — par la jonction du savoir spécialisé professionnel et de l'expérience vécue comme sources de valeur égale [^ameringschmolke2012].

:::easy{reading_time=2}
Il y a deux visions de la maladie psychique :

**Ancienne vision :**
- La maladie est au centre.
- But : faire partir les symptômes.
- Le médecin sait mieux.
- Tu es patient·e.

**Vision Recovery :**
- La personne est au centre.
- But : une bonne vie.
- Toi et le ou la professionnel·le décidez ensemble.
- Tu es une personne avec une expérience.

L'ancienne vision n'est pas fausse. Elle aide souvent. Mais elle ne suffit pas à elle seule.

La vision Recovery élargit l'ancienne. Elle ne la remplace pas.
:::

:::quiz{id=q-16}
- q: "La vision Recovery remplace-t-elle la vision médicale ?"
  type: true-false
  correct: false
  explanation: "Non — elle l'élargit. Les deux ont leur place."

- q: "Qu'est-ce qui est au centre dans la vision Recovery ?"
  type: multiple-choice
  options:
    - text: "Le diagnostic"
      correct: false
    - text: "La personne"
      correct: true
:::

:::flashcards{id=f-16}
- front: "Changement de paradigme"
  back: "Du regard sur le déficit (pathogenèse) au regard sur les ressources (salutogenèse) — sans abandonner la vision médicale."
- front: "Compliance vs. Shared Decision-Making"
  back: "Compliance = tu suis. Shared Decision-Making = vous décidez ensemble."
- front: "Synthèse des savoirs"
  back: "La pratique orientée Recovery relie savoir spécialisé professionnel et expérience vécue comme sources de valeur égale (Amering & Schmolke 2012)."
:::

:::standard{reading_time=2}
Recovery est plus qu'une nouvelle méthode. C'est un changement de perspective — une autre manière de regarder la crise psychique et la guérison.

La **vision orientée maladie** place le diagnostic au centre. L'objectif est la disparition des symptômes. L'expert·e est la professionnelle. Tu suis un plan de traitement. Le regard se porte sur ce qui manque ou est perturbé — sur le déficit.

La **vision orientée Recovery** place la personne au centre. L'objectif est une vie pleine de sens — avec ou malgré les symptômes. Il y a deux expert·e·s : la professionnelle ET toi-même. Les décisions sont prises ensemble (Shared Decision-Making). Le regard se porte sur les ressources, l'espoir, le lien.

Quelques paires de notions montrent la différence :

- Diagnostic au centre → personne au centre
- Disparition des symptômes comme objectif → vie pleine de sens comme objectif
- Compliance → Shared Decision-Making
- Regard sur le déficit (pathogenèse) → regard sur les ressources (salutogenèse)
- Chemin de guérison linéaire → chemin individuel, non linéaire
- Patient·e → personne / personne avec une expérience / étudiant·e

Important : la colonne de droite ne remplace pas celle de gauche. Les deux ont leur place. Les médicaments peuvent aider. Les diagnostics peuvent orienter. Une clinique peut être un lieu sûr. Mais cela seul ne suffit pas — Recovery élargit le tableau médical en y ajoutant ta voix, tes valeurs, ton sens.

Amering et Schmolke résument : la pratique orientée Recovery n'est pas un module supplémentaire ajouté par-dessus. C'est une autre manière de produire du savoir — en reliant savoir spécialisé et expérience vécue comme sources de valeur égale.
:::

:::standard-quiz{id=q-16-std}
- q: "La vision Recovery remplace-t-elle la vision médicale ?"
  type: multiple-choice
  options:
    - text: "Oui, elle la remplace complètement."
      correct: false
    - text: "Non — elle l'élargit. Les deux ont leur place."
      correct: true
      explanation: "Recovery est un changement de perspective, pas un abandon du savoir médical."
    - text: "Non, elle s'y oppose."
      correct: false

- q: "Qu'est-ce qui est au centre de la vision Recovery ?"
  type: multiple-choice
  options:
    - text: "Le diagnostic."
      correct: false
    - text: "La personne — avec son histoire, ses valeurs, son sens."
      correct: true
      explanation: "Le diagnostic oriente, mais ne te définit pas."
    - text: "La clinique."
      correct: false
:::

:::standard-flashcards{id=f-16-std}
- front: "Changement de paradigme"
  back: "Du regard sur le déficit (pathogenèse) au regard sur les ressources (salutogenèse) — sans abandonner la vision médicale."
- front: "Compliance vs. Shared Decision-Making"
  back: "Compliance = tu suis. Shared Decision-Making = vous décidez ensemble."
- front: "Deux expertises"
  back: "Savoir spécialisé ET expérience vécue sont des sources de savoir d'égale valeur."
:::


# 17. Trois phrases pour toi
{#kap-17 reading_time=3}

Tu n'es pas ton diagnostic. Tu es une personne avec une histoire, des capacités, des valeurs, des relations. Un diagnostic peut être un repère — il n'est jamais toute la vérité sur toi.

## Trois phrases qui reviennent souvent dans le mouvement Recovery

- Tu es expert·e de ta vie. Ton expérience est un savoir.
- Tu n'as pas à tout porter seul·e. Cherche-toi des allié·e·s — des pairs, des professionnel·le·s, des personnes de confiance.
- Tu as le droit de décider toi-même du rythme et de la direction. Un recul n'est pas un échec.

## Ce que la recherche peut t'apporter

L'espoir est un prédicteur du rétablissement [^schrank2012]. Le peer-support a un effet mesurable sur l'auto-efficacité [^slade2024peer] [^mahlke2017]. La participation à un Recovery College réduit les coûts de soins ultérieurs et augmente le bien-être [^ronaldson2024]. L'auto-stigma peut changer [^yanos2015].

:::reflection{id=7 title="Ton premier pas"}
- Qui pourrais-tu contacter cette semaine, qui t'écouterait sans juger ?
- Quelle petite action concrète pourrait être une ancre d'espoir pour les sept prochains jours ?
- Quel domaine du modèle CHIME — ou de la triade Espoir-Pouvoir-Sens — mériterait un peu plus d'attention cette semaine ?
:::

:::easy{reading_time=1}
Tu n'es pas ton diagnostic. Tu es une personne.

Trois phrases importantes :

- Tu connais ta vie le mieux.
- Tu n'as pas à tout porter seul·e.
- Tu as le droit de décider de ton rythme.

Les reculs en font partie. Ils ne sont pas un échec.
:::

:::quiz{id=q-17}
- q: "Que signifie « en Recovery » ?"
  type: multiple-choice
  options:
    - text: "Tu es guéri·e."
      correct: false
    - text: "Tu es en chemin — un processus, pas un état."
      correct: true

- q: "Un recul est-il un échec ?"
  type: true-false
  correct: false
  explanation: "Non — les reculs font partie de l'évolution non linéaire du Recovery."
:::

:::flashcards{id=f-17}
- front: "Tu es expert·e de ta vie"
  back: "Personne ne connaît ton expérience aussi bien que toi. Ta voix compte — à égalité avec le savoir spécialisé."
- front: "Rythme & direction"
  back: "Tu décides des deux. Recovery n'est ni mesurable, ni comparable."
:::

:::standard{reading_time=2}
Tu n'es pas ton diagnostic. Tu es une personne avec une histoire, des capacités, des valeurs, des relations. Un diagnostic peut être une orientation — il n'est jamais toute la vérité sur toi.

Trois phrases qui reviennent encore et encore dans le mouvement Recovery — et que nous voulons te donner :

- **Tu es expert·e de ta vie.** Ton expérience est un savoir. Personne ne connaît ton souffle, tes nuits, tes espoirs comme toi. Cette voix compte — à égalité avec n'importe quel savoir spécialisé.
- **Tu n'as pas à tout porter seul·e.** Cherche-toi des allié·e·s. Pair·e·s, professionnel·le·s, personnes de confiance, proches, un groupe d'entraide, un Recovery College. Tu as le droit d'emprunter de l'espoir, jusqu'à ce que tu le ressentes à nouveau toi-même.
- **Tu peux décider toi-même du rythme et de la direction.** Recovery n'est ni mesurable, ni comparable. Un recul n'est pas un échec — il fait partie du chemin non linéaire. Parfois, une pause est aussi un progrès.

Ce que la recherche peut te donner : l'espoir est un prédicteur du rétablissement. Le peer-support renforce de manière mesurable l'auto-efficacité. Les Recovery Colleges réduisent les hospitalisations et augmentent le bien-être. L'auto-stigma peut être modifié.

Ces trois phrases ne sont pas un programme à exécuter. Elles sont plutôt comme trois pierres que tu glisses dans ta poche. Tu les sors quand tu en as besoin.

Peut-être aujourd'hui. Peut-être seulement dans six mois.
:::

:::standard-quiz{id=q-17-std}
- q: "Que veut dire « en Recovery » ?"
  type: multiple-choice
  options:
    - text: "Tu es complètement guéri·e."
      correct: false
    - text: "Tu es en chemin — un processus, pas un état."
      correct: true
      explanation: "Recovery est un chemin continu, pas un point d'arrivée."
    - text: "Tu es sans symptôme."
      correct: false

- q: "Un recul est-il un échec ?"
  type: multiple-choice
  options:
    - text: "Oui, alors le chemin a échoué."
      correct: false
    - text: "Non — il fait partie du parcours non linéaire du Recovery."
      correct: true
      explanation: "Recovery est rarement linéaire. Les pauses et les reculs font partie du chemin."
    - text: "Peut-être — selon sa taille."
      correct: false
:::

:::standard-flashcards{id=f-17-std}
- front: "Trois phrases"
  back: "1) Tu es expert·e de ta vie. 2) Tu n'as pas à tout porter seul·e. 3) Tu décides du rythme et de la direction."
- front: "Recul"
  back: "Pas un échec. Il fait partie du chemin non linéaire."
- front: "Emprunter de l'espoir"
  back: "Quand tu ne ressens pas d'espoir toi-même, tu peux l'emprunter à d'autres — jusqu'à ce que tu le retrouves."
:::


# 18. Langage et posture — pourquoi les mots comptent
{#kap-18 reading_time=3}

Le langage orienté Recovery n'est pas de la cosmétique. Il change qui est reconnu comme sujet dans un espace — et qui devient objet d'un traitement [^ameringschmolke2012] [^knuf2026].

## Ce que nous évitons — et ce que nous disons à la place

Dans le discours Recovery germanophone, un certain nombre de règles linguistiques concrètes se sont imposées [^ameringschmolke2012] [^knuf2026] [^slade2013] :

- « Le/la schizophrène » → mieux : « personne ayant un diagnostic de schizophrénie » (langage centré sur la personne).
- « Patient·e » / « client·e » dans un contexte de formation → mieux : « étudiant·e », « participant·e », « personne avec une expérience de crise ».
- « Chronique », « incurable » → à éviter. Ces termes sont empiriquement contestables et nuisent de manière démontrée au rétablissement.
- « Compliance » → mieux : « adhésion thérapeutique », mieux encore : « décision partagée ».
- « Insight de la maladie » → mieux : « propre compréhension de la maladie ».
- « Guéri·e » (Recovered) → en français : « en Recovery » (terme de processus).
- « Déficit », « porteur de symptômes » → mieux : « ressources », « expérience de vie », « ébranlement psychique ».

Le langage te transforme aussi toi-même. Qui commence à dire « en Recovery » pense plus vite en termes de processus qu'en termes d'états figés — et fait ainsi souvent le premier pas, imperceptible.

:::easy{reading_time=1}
Les mots changent la réalité. Quelques exemples :

- Pas : « malade chronique » → mieux : « vit avec le diagnostic »
- Pas : « Compliance » → mieux : « décision partagée »
- Pas : « schizophrène » → mieux : « personne avec une schizophrénie »
- Pas : « guéri·e » → mieux : « en Recovery »

Le langage n'est pas tout. Mais il change souvent le début.
:::

:::quiz{id=q-18}
- q: "Quelle formulation est centrée sur la personne (person-first) ?"
  type: multiple-choice
  options:
    - text: "Le borderline"
      correct: false
    - text: "Personne avec un diagnostic borderline"
      correct: true

- q: "Quel terme faudrait-il éviter ?"
  type: multiple-choice
  options:
    - text: "Personne avec une expérience de crise"
      correct: false
    - text: "Chronique incurable"
      correct: true
      explanation: "Empiriquement contestable et nuisible au rétablissement de manière démontrée."
:::

:::flashcards{id=f-18}
- front: "Langage centré sur la personne (person-first)"
  back: "Diagnostic après la personne, pas avant elle. « Personne avec une schizophrénie » plutôt que « schizophrène »."
- front: "en Recovery"
  back: "Le terme de processus. Plutôt que « guéri·e » ou « malade » — comme un chemin qui continue."
- front: "Éviter « Compliance »"
  back: "Plutôt que « Compliance » (tu suis les instructions), préférer « décision partagée » ou « adhésion thérapeutique »."
:::

:::standard{reading_time=2}
Les mots ne sont pas anodins. Ils changent qui est reconnu comme une personne dans un espace — et qui devient objet d'un traitement. Un langage orienté Recovery n'est donc pas une cosmétique. C'est une posture.

Dans le discours Recovery germanophone, des règles de langage concrètes se sont imposées. Quelques exemples :

- « Le schizophrène » → mieux : « Personne ayant le diagnostic de schizophrénie » (**langage centré sur la personne**).
- « Patient·e » / « client·e » dans un contexte de formation → mieux : « étudiant·e », « participant·e », « personne ayant une expérience de crise ».
- « Chronique », « incurable » → à éviter. Les deux termes sont empiriquement contestables et nuisent au rétablissement, c'est démontré.
- « Compliance » → mieux : « adhésion thérapeutique » — encore mieux : « décision partagée ».
- « Conscience de la maladie » → mieux : « compréhension personnelle de la maladie ».
- « Guéri·e » / « recovered » → en français : « en Recovery » — comme processus, pas comme état final.
- « Déficit », « porteur·euse de symptômes » → mieux : « ressource », « expérience de vie », « ébranlement psychique ».

Ces changements ne sont pas une simple question d'étiquette. Qui commence à dire « en Recovery » pense plus vite en processus qu'en états figés. Qui dit « personne avec un diagnostic » voit la personne d'abord et le diagnostic ensuite. Cela change souvent justement ce pas imperceptible par lequel quelque chose de nouveau commence.

Le langage te change aussi toi-même. La façon dont tu parles de toi marque la façon dont tu penses à toi. Tu n'as pas besoin d'apprendre tous ces termes en même temps. Mais peut-être que dans les jours qui viennent, tu écouteras avec d'autres oreilles — ce que disent les médecins, les proches, les thérapeutes, et toi-même.

Et si quelque chose te fait mal : tu as le droit de le dire.
:::

:::standard-quiz{id=q-18-std}
- q: "Quelle formulation est centrée sur la personne (person-first) ?"
  type: multiple-choice
  options:
    - text: "Le borderline."
      correct: false
    - text: "Personne ayant un diagnostic borderline."
      correct: true
      explanation: "La personne d'abord, le diagnostic ensuite. C'est le langage person-first."
    - text: "La malade psychique."
      correct: false

- q: "Quel terme devrait être évité ?"
  type: multiple-choice
  options:
    - text: "Personne avec une expérience de crise."
      correct: false
    - text: "Chronique incurable."
      correct: true
      explanation: "Empiriquement contestable et démontré comme nuisible au rétablissement."
    - text: "En Recovery."
      correct: false
:::

:::standard-flashcards{id=f-18-std}
- front: "Langage centré sur la personne"
  back: "Diagnostic après la personne — pas avant elle. « Personne avec une schizophrénie » plutôt que « schizophrène »."
- front: "En Recovery"
  back: "Le terme de processus en français. Plutôt que « guéri·e » ou « chronique » — comme chemin continu."
- front: "Éviter « Compliance »"
  back: "Plutôt que « Compliance » (tu suis), préférer « décision partagée » ou « adhésion thérapeutique »."
:::


# 19. Comment utiliser ce carnet
{#kap-19 reading_time=2}

Ce carnet numérique n'est pas un manuel. C'est un compagnon :

- Prends ton temps. Une page par jour suffit.
- Sois honnête avec toi-même. C'est toi qui décides ce qui est enregistré ou partagé.
- Saute. Suis ce qui te parle.
- Reviens. La même question se lit autrement dans trois mois.
- Partage, si tu le veux — avec une personne de confiance, un·e pair-aidant·e, dans un groupe.

## Protection des données et autodétermination

Tout ce que tu inscris dans cette application t'appartient. C'est toi qui décides si quelque chose est synchronisé, enregistré ou supprimé. Les entrées sont chiffrées. Un effacement complet de tes données est possible à tout moment. Cette architecture d'autodétermination n'est pas un détail technique, mais l'expression de la posture orientée Recovery de ce carnet [^who2021] [^samhsa2014trauma] [^uncrpd2006].

:::easy{reading_time=1}
Voici comment utiliser cette application :

- Prends ton temps. Une page par jour suffit.
- Sois honnête avec toi-même.
- Saute de chapitre en chapitre.
- Reviens. La même question se lit autrement plus tard.
- Partage, si tu le veux.

Tes données t'appartiennent. L'application n'enregistre que ce que tu veux. Tu as le droit de tout supprimer. À tout moment.
:::

:::quiz{id=q-19}
- q: "Faut-il lire les chapitres dans l'ordre ?"
  type: true-false
  correct: false
  explanation: "Non — saute comme cela te convient."

- q: "Qui décide de ce qui est enregistré ?"
  type: multiple-choice
  options:
    - text: "L'application"
      correct: false
    - text: "Toi"
      correct: true
:::

:::flashcards{id=f-19}
- front: "Protection des données dans cette application"
  back: "Tes données t'appartiennent. Chiffrées. C'est toi qui décides ce qui est synchronisé, enregistré ou supprimé. Effaçable à tout moment."
- front: "Mode de travail"
  back: "Une page par jour. Sauter autorisé. Répéter souhaité. Partager facultatif."
:::

:::standard{reading_time=2}
Ce carnet n'est pas un manuel. C'est un compagnon — et c'est toi qui détermines comment il t'accompagne.

Quelques indications qui ont fait leurs preuves :

- **Prends ton temps.** Une page par jour suffit. Parfois un paragraphe suffit. Il n'y a aucun rythme que tu dois atteindre.
- **Sois honnête avec toi.** Tu n'as à prouver quoi que ce soit à personne — pas même à l'application. Tes entrées sont pour toi.
- **Saute.** Suis ce qui te parle. Tu n'es pas obligé·e de lire dans l'ordre.
- **Reviens.** La même question de réflexion se lit autrement dans trois mois. Reviens.
- **Partage si tu veux.** Avec une personne de confiance, un·e pair·e-aidant·e, un groupe — ou avec personne. Les deux sont justes.

**Protection des données et autodétermination.** Tout ce que tu inscris dans cette application t'appartient. C'est toi qui décides ce qui est synchronisé, enregistré ou supprimé. Les entrées sont chiffrées. Un effacement complet de tes données est possible à tout moment.

Ce n'est pas seulement un détail technique. C'est l'expression de la posture de ce carnet : tu n'es pas objet d'un traitement, mais sujet de ton chemin. L'autodétermination sur tes propres données est un morceau concret de Recovery — et en même temps un droit humain (CDPH de l'ONU, OMS 2021, SAMHSA).

Si un chapitre devient trop, ferme-le. Si quelque chose te touche, reste là. Il n'y a pas de mauvais ordre. Il n'y a que ton chemin — et ce carnet va aussi loin que tu le laisses aller.
:::

:::standard-quiz{id=q-19-std}
- q: "Dois-tu lire les chapitres dans l'ordre ?"
  type: multiple-choice
  options:
    - text: "Oui, sinon ça ne marche pas."
      correct: false
    - text: "Non — saute, comme cela te convient."
      correct: true
      explanation: "Suis ce qui te parle. Répéter est souhaité."
    - text: "Seulement sous la conduite d'une professionnelle."
      correct: false

- q: "Qui décide ce qui est enregistré ou supprimé dans l'application ?"
  type: multiple-choice
  options:
    - text: "L'application elle-même."
      correct: false
    - text: "Toi — à tout moment, entièrement effaçable."
      correct: true
      explanation: "L'autodétermination sur tes données est l'expression de la posture orientée Recovery."
    - text: "Ta professionnelle."
      correct: false
:::

:::standard-flashcards{id=f-19-std}
- front: "Mode de travail"
  back: "Une page par jour. Sauter autorisé. Répéter souhaité. Partager facultatif."
- front: "Protection des données"
  back: "Tes entrées sont chiffrées et t'appartiennent. Effacement complet possible à tout moment."
- front: "Posture du carnet"
  back: "Compagnon, pas manuel. C'est toi qui détermines le rythme, la profondeur et la portée — et tu peux aussi fermer."
:::


# 20. Crise et sécurité — lignes d’urgence D-A-CH
{#kap-20 reading_time=2}

Si tu es actuellement en grande détresse — si tu as des pensées de te faire du mal ou de faire du mal à d'autres, ou si tu as le sentiment que des contenus ici te déstabilisent davantage — ce n'est pas le bon moment pour des questions de réflexion. S'il te plaît, cherche du soutien maintenant.

:::crisis
Les numéros d'urgence sont structurés dans le frontmatter sous `helplines:`. L'application les affiche sous forme de cartes pays par pays avec tap-to-call et tap-to-open-URL.
:::

Ces lignes sont anonymes, gratuites et sans jugement. Tu n'as pas besoin d'avoir une « vraie crise » pour appeler. Un appel à une heure précoce vaut toujours mieux que pas d'appel du tout.

:::info{type=warmth title="Avant de fermer : trois phrases pour les heures lourdes"}
- Tu n'as pas besoin de faire ce chemin seul·e.
- Un sentiment est une information, pas un ordre — même le sentiment le plus lourd finira par bouger.
- Aller chercher de l'aide n'est jamais un signe de faiblesse. C'est un signe que tu prends ta vie au sérieux.
:::

:::easy{reading_time=1}
Si tu vas vraiment très mal en ce moment, ne continue pas à lire ici. Va chercher de l'aide.

- **Suisse** : Téléphone 143 (La Main Tendue). Jour et nuit.
- **France** : Téléphone 3114 (Numéro national de prévention du suicide). Gratuit, 24/7.
- **Belgique** : Téléphone 0800 32 123 (Centre de Prévention du Suicide).
- **Allemagne** : Téléphone 0800 111 0 111.
- **Autriche** : Téléphone 142.

Ces lignes sont gratuites et anonymes. Tu as le droit d'appeler, même si tu ne sais pas si c'est « assez grave ».

Un appel n'est jamais trop tôt.
:::

:::quiz{id=q-20}
- q: "Quel numéro composes-tu en Suisse pour La Main Tendue ?"
  type: multiple-choice
  options:
    - text: "112"
      correct: false
    - text: "143"
      correct: true
    - text: "147"
      correct: false
      explanation: "147 c'est Pro Juventute — pour enfants et adolescents."

- q: "Faut-il avoir une « vraie crise » pour appeler ?"
  type: true-false
  correct: false
  explanation: "Non — un appel précoce vaut toujours mieux que pas d'appel du tout."
:::

:::flashcards{id=f-20}
- front: "Numéro de crise Suisse"
  back: "143 — La Main Tendue (Die Dargebotene Hand). Jour et nuit. Anonyme. Gratuit."
- front: "Numéro de crise France"
  back: "3114 — Numéro national de prévention du suicide. 24/7. Gratuit."
- front: "Numéro de crise Belgique"
  back: "0800 32 123 — Centre de Prévention du Suicide. 24/7."
- front: "Numéro de crise Allemagne"
  back: "0800 111 0 111 ou 0800 111 0 222. Telefonseelsorge. 24/7. Gratuit."
- front: "Numéro de crise Autriche"
  back: "142. Telefonseelsorge. 24/7."
- front: "Enfants & adolescent·e·s CH/AT"
  back: "147 — Pro Juventute (CH) ou Rat auf Draht (AT). 24/7."
:::

:::standard{reading_time=2}
Si tu es en détresse aiguë en ce moment — si tu as des pensées de te faire du mal ou d'en faire aux autres, ou si les contenus ici te déstabilisent encore plus — ce n'est pas le moment des questions de réflexion. S'il te plaît, va chercher du soutien maintenant.

**Les numéros les plus importants pour les pays germanophones et francophones :**

- **Suisse :** **143** — La Main Tendue. 24/7. Anonyme. Gratuit.
- **France :** **3114** — Numéro national de prévention du suicide. 24/7. Gratuit.
- **Belgique :** **0800 32 123** — Centre de Prévention du Suicide. 24/7.
- **Allemagne :** **0800 111 0 111** ou **0800 111 0 222** — Telefonseelsorge. 24/7. Gratuit.
- **Autriche :** **142** — Telefonseelsorge. 24/7.

En cas de danger de mort : **112** (dans l'UE) ou **144** (ambulance CH/AT).

Pour enfants et adolescent·e·s : **147** (Pro Juventute CH / Rat auf Draht AT). 24/7.

Ces services sont anonymes, gratuits et sans jugement. Tu n'as pas besoin d'avoir une « vraie crise » pour appeler. Tu n'as pas à expliquer si c'est assez grave. Un appel à une heure précoce est toujours mieux que pas d'appel du tout.

**Trois phrases pour les heures lourdes — avant que tu fermes :**

- Tu n'as pas à parcourir ce chemin seul·e.
- Un sentiment est une information, pas un ordre. Même le sentiment le plus lourd va bouger.
- Demander de l'aide n'est pas un signe de faiblesse. C'est un signe que tu prends ta vie au sérieux.

Si tu ne peux appeler personne en ce moment : prends contact avec une personne en qui tu as confiance. Écris un message. Va aux urgences les plus proches. Un petit mouvement vers l'extérieur suffit.

Tu n'es pas seul·e. Même si cela semble être le cas en ce moment.
:::

:::standard-quiz{id=q-20-std}
- q: "Quel numéro composes-tu en Suisse en cas de détresse psychique aiguë ?"
  type: multiple-choice
  options:
    - text: "112"
      correct: false
    - text: "143 (La Main Tendue)"
      correct: true
      explanation: "143 est le numéro de crise 24/7 pour la détresse psychique en Suisse."
    - text: "144 — c'est seulement pour le danger de mort / ambulance."
      correct: false

- q: "Dois-tu avoir une « vraie crise » pour appeler ?"
  type: multiple-choice
  options:
    - text: "Oui, sinon on ne te prend pas au sérieux."
      correct: false
    - text: "Non — un appel précoce est toujours mieux que pas d'appel."
      correct: true
      explanation: "Tu as le droit d'appeler, même si tu n'es pas sûr·e."
    - text: "Seulement si tu es en danger de mort."
      correct: false
:::

:::standard-flashcards{id=f-20-std}
- front: "Numéro d'urgence Suisse"
  back: "143 — La Main Tendue. 24/7. Anonyme. Gratuit."
- front: "Numéro d'urgence Allemagne"
  back: "0800 111 0 111 ou 0800 111 0 222 — Telefonseelsorge. 24/7. Gratuit."
- front: "Numéro d'urgence Autriche"
  back: "142 — Telefonseelsorge. 24/7."
- front: "Quand appeler ?"
  back: "Toujours. Même dans le doute. Un appel n'est jamais trop tôt."
:::


# 21. Une petite promesse pour finir
{#kap-21 reading_time=2}

Recovery ne veut pas dire que tout redeviendra comme c'était. Cela veut dire que quelque chose de nouveau peut naître — parfois même quelque chose qui, sans cette expérience, n'aurait jamais existé.

Tu auras des jours où cela sonnera comme une promesse vide. Et tu auras des jours où tu remarqueras toi-même que quelque chose s'est déplacé — un minuscule espoir, un petit lien, une pensée qui n'était pas possible avant.

Ce que la recherche peut te donner pour le chemin : tu n'es pas seul·e. Il y a un chemin. Et tu as le droit d'emprunter l'espoir, jusqu'à ce que tu puisses à nouveau le ressentir toi-même.

:::quote{author="Patricia Deegan, 1996" source="deegan1996" lang="en"}
By accepting what we cannot do or be, we begin to discover what we can do and who we can become.
:::

:::quote-translation{source="deegan1996" translator="traduction libre"}
En acceptant ce que nous ne pouvons faire ou être, nous commençons à découvrir qui nous pouvons être et ce que nous pouvons faire.
:::

:::quote{author="Antonio Machado"}
Le chemin se fait en marchant.
:::

:::pull
Sur ton chemin.
:::

:::easy{reading_time=1}
Recovery ne veut pas dire : tout redevient comme avant.

Recovery veut dire : quelque chose de nouveau peut naître.

Tu auras des jours difficiles. Tu auras aussi des jours plus légers.

Trois phrases pour conclure :

- Tu n'es pas seul·e.
- Il y a un chemin.
- Tu peux emprunter l'espoir, jusqu'à ce que tu l'aies à nouveau toi-même.

Sur ton chemin.
:::

:::quiz{id=q-21}
- q: "Quelle image décrit le mieux le Recovery ?"
  type: multiple-choice
  options:
    - text: "Une ligne droite vers le but."
      correct: false
    - text: "Un chemin qui se fait en marchant (Machado)."
      correct: true

- q: "À qui appartient le chemin ?"
  type: multiple-choice
  options:
    - text: "Au médecin."
      correct: false
    - text: "À toi — avec des allié·e·s."
      correct: true
:::

:::flashcards{id=f-21}
- front: "Sur ton chemin"
  back: "La phrase finale de l'introduction. Recovery est toujours ton chemin — avec des allié·e·s."
- front: "Trois phrases finales"
  back: "Tu n'es pas seul·e. Il y a un chemin. Tu peux emprunter l'espoir, jusqu'à ce que tu l'aies toi-même."
- front: "Le chemin se fait en marchant"
  back: "Antonio Machado — la devise de nombreux carnets Recovery, et de cette application."
:::

:::standard{reading_time=2}
Recovery ne veut pas dire que tout redevient comme avant. Cela veut dire que quelque chose de nouveau peut naître — parfois même quelque chose qui n'aurait jamais existé sans cette expérience. Une autre profondeur. Une autre attention. Parfois un langage que tu n'avais pas avant.

Tu auras des jours où tout cela sonnera comme une promesse vide. Et tu auras des jours où tu remarqueras toi-même que quelque chose s'est déplacé — un petit espoir, une petite connexion, une pensée qui n'était pas possible auparavant.

Les deux en font partie. Recovery n'est pas un chemin droit. Il a des pauses, des boucles, des retours en arrière. Antonio Machado l'a dit ainsi : « Le chemin se fait en marchant. » Cela vaut aussi pour ton chemin.

Ce que la recherche peut te donner pour la route :

- **Tu n'es pas seul·e.** Des milliers de personnes ont traversé des temps semblables — et ont trouvé une bonne vie.
- **Il y a un chemin.** Même s'il est invisible aujourd'hui. Même s'il ne ressemble pas au chemin des autres.
- **Tu peux emprunter de l'espoir.** Si tu n'en as pas en ce moment, d'autres le gardent pour toi — un·e pair·e-aidant·e, une thérapeute, une amie, un livre, une histoire de ce carnet.

Tu as le droit de refermer ce carnet. Tu as le droit de le rouvrir des mois plus tard. Tu as le droit de le partager. Tu as le droit de l'oublier. Tu as aussi le droit de dire : pas aujourd'hui.

Ce qui reste, c'est cette petite promesse : sur ton chemin. Nous faisons un bout avec toi.
:::

:::standard-quiz{id=q-21-std}
- q: "Et si tu ne ressens pas d'espoir en ce moment ?"
  type: multiple-choice
  options:
    - text: "Alors le Recovery est terminé."
      correct: false
    - text: "Alors tu as le droit d'emprunter l'espoir à d'autres — jusqu'à ce que tu le retrouves toi-même."
      correct: true
      explanation: "L'espoir est partageable. D'autres peuvent le garder pour toi."
    - text: "Alors tu as fait quelque chose de faux."
      correct: false

- q: "Comment se déroule le Recovery ?"
  type: multiple-choice
  options:
    - text: "Comme une ligne droite vers le but."
      correct: false
    - text: "Comme un chemin individuel — avec des pauses, des boucles, des retours. « Le chemin se fait en marchant. » (Machado)"
      correct: true
      explanation: "Recovery n'est pas linéaire. Les reculs en font partie."
    - text: "Exactement comme chez les autres."
      correct: false
:::

:::standard-flashcards{id=f-21-std}
- front: "Recovery"
  back: "Quelque chose de nouveau peut naître. Pas : tout redevient comme avant."
- front: "Emprunter de l'espoir"
  back: "Quand tu n'en as pas toi-même : d'autres le gardent pour toi — jusqu'à ce que tu le ressentes à nouveau."
- front: "Trois phrases finales"
  back: "Tu n'es pas seul·e. Il y a un chemin. Tu peux emprunter de l'espoir."
- front: "Sur ton chemin"
  back: "« Le chemin se fait en marchant. » (Antonio Machado) — Nous faisons un bout avec toi."
:::


# Notes méthodologiques (internes)
{#methodik}

Toutes les affirmations sont vérifiées par rapport aux sources primaires listées dans le frontmatter. Là où des revues et méta-analyses existaient, la priorité leur a été donnée par rapport aux études individuelles.

Les citations littérales sont reproduites dans leur formulation originale (widget Quote avec référence `source`). Les restitutions françaises sont signalées comme « traduction libre » (widget Quote-Translation). Les termes et modèles (CHIME, CHIME-D, Espoir-Pouvoir-Sens, Personal Medicine, Trialogue, EX-IN, salutogenèse, Open Dialogue) sont utilisés comme termes scientifiques et sont reliés à leurs auteur·e·s dans le registre des sources.

