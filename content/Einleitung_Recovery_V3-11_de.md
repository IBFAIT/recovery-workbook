---
schema_version: "1.2"
content_id: "recovery-einleitung"
content_version: "3.15"
title: "Recovery"
subtitle: "Eine umfassende Einleitung – Hoffnung. Macht. Sinn."
language: "de"
translation_status: "primary-source"
translation_date: "2026-06-19"
translator: ""
region: "D-A-CH"
target_audience: "betroffene"
target_audience_label: "Für Menschen mit eigener Erfahrung psychischer Belastung"
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
  full:  "Ausführlich – mit Forschung, Zitaten und Quellen"
  easy:  "Einfach – kurz und in einfacher Sprache"
  standard: "Standard – mittlere Länge, klar und persönlich"
default_reading_mode: "ausführlich"
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
---


# Wichtiger Hinweis vor dem Lesen
{#disclaimer reading_time=2}

:::info{type=warmth title="Bitte zuerst lesen"}
Diese App ist ein **Prototyp**. Sie wird gerade entwickelt und ist nicht fertig.

Sie dient ausschliesslich dazu, ein mögliches zukünftiges Workbook im Bereich Recovery zu testen.
:::

## Was das hier ist und was nicht

Du nutzt gerade eine **Test-Version** einer App, die noch in Entwicklung ist. Die Texte und Funktionen sind ein erster Entwurf. Sie wurden noch nicht professionell geprüft – weder fachlich-klinisch noch sprachlich.

**Diese App ist KEIN therapeutisches Werkzeug.** Sie ersetzt keine Behandlung, keine Therapie, keine ärztliche Beratung und keine Krisenintervention.

## Bitte halte dich an folgende Regeln

- **Nicht im klinischen Setting verwenden.** Diese App darf in der jetzigen Form nicht in Kliniken, Praxen, Beratungsstellen oder anderen Versorgungssettings als Hilfsmittel eingesetzt werden.
- **Nicht als alleinige Unterstützung im privaten Bereich verwenden.** Wenn du selbst betroffen bist, nutze diese App bitte nur im Rahmen einer organisierten Test-Phase – nicht als alleinige Begleitung in einer schwierigen Lebenslage.
- **Im Zweifel: hol dir echte Hilfe.** Wenn es dir schlecht geht, wende dich an eine Vertrauensperson, an deine Behandelnden oder an die Krisennummern, die in Kapitel 20 dieses Workbooks aufgeführt sind.

## Keine Gewähr, keine Haftung

Die Inhalte dieser App werden ohne jede Gewähr zur Verfügung gestellt. Es wird keinerlei Haftung übernommen für Schäden – materieller oder immaterieller Art – die durch die Nutzung oder Nicht-Nutzung dieser App entstehen könnten.

Die App wurde nach bestem Wissen und auf Basis aktueller Recovery-Forschung erstellt. Trotzdem können Fehler, Ungenauigkeiten oder unpassende Formulierungen enthalten sein. Wenn dir etwas auffällt, freuen wir uns über Rückmeldung – das ist genau der Zweck dieser Testphase.

## Wenn du dich gerade in einer Krise befindest

Wenn dir das Lesen dieser App schwerfällt oder dich destabilisiert, leg sie weg.

In akuten Krisen erreichst du rund um die Uhr:
- **Schweiz:** 143 (Die Dargebotene Hand)
- **Deutschland:** 0800 111 0 111 (Telefonseelsorge)
- **Österreich:** 142 (Telefonseelsorge)
- **In Lebensgefahr:** 112 oder 144 (CH/AT) bzw. 112 (DE)

Hilfe holen ist nie zu früh.

:::standard{reading_time=2}
Du nutzt gerade einen **Prototyp**. Diese App ist noch nicht fertig — sie soll zeigen, wie ein zukünftiges Recovery-Workbook aussehen könnte. Die Texte und Funktionen sind ein erster Entwurf und noch nicht professionell geprüft.

**Diese App ist kein therapeutisches Werkzeug.** Sie ersetzt keine Behandlung, keine Therapie, keine ärztliche Beratung und keine Krisenintervention.

**Bitte halte dich an folgende Regeln:**

- Nicht im klinischen Setting verwenden — also nicht in Kliniken, Praxen oder Beratungsstellen als Hilfsmittel einsetzen.
- Nicht als alleinige Unterstützung in einer schwierigen Lebenslage nutzen.
- Im Zweifel: hol dir echte Hilfe — eine Vertrauensperson, deine Behandelnden oder eine Krisennummer.

**In akuten Krisen** erreichst du rund um die Uhr: Schweiz **143**, Deutschland **0800 111 0 111**, Österreich **142**. In Lebensgefahr: **112** (überall) oder **144** (CH/AT).

Die Inhalte werden ohne Gewähr bereitgestellt. Wenn dir etwas auffällt, freuen wir uns über Rückmeldung — das ist genau der Sinn dieser Testphase.

Mit dem Weiterlesen bestätigst du, dass du diese Hinweise verstanden hast.
:::

:::pull
Mit dem Weiterlesen bestätigst du, dass du diese Hinweise verstanden hast und die App im Rahmen einer Test-Phase nutzt.
:::


# Recovery sind auch Geschichten
{#vorspann reading_time=4}

:::pull
Recovery, das sind unzählige Geschichten von Menschen, die trotz oder wegen ihrer Symptome einen Weg in ein gutes Leben gefunden haben.
:::

Es sind Geschichten, die selten in Zeitungen stehen, weil sie keinen Skandal liefern. Geschichten, die aber jeden Tag passieren – in Buchhandlungen, an Klavieren, in Chören, in Gesprächskreisen, in Wohnzimmern, in Wartezimmern, in Küchen.

Eine Frau, die lange überzeugt war, sie werde nie wieder einen Beruf ausüben, und die heute eine kleine Buchhandlung führt. Ein Vater, der nach einer Psychose wieder Klavier spielt – anders als früher, mit weniger Perfektion, mit mehr Liebe. Ein junger Mann, der nach Jahren mit einer Borderline-Diagnose Genesungsbegleiter geworden ist, weil er anderen die Hand reichen will, die ihm selbst gefehlt hat. Eine Mutter, die ihre Tochter durch eine schwere Essstörung begleitet hat und sagt: in dieser Zeit habe ich mehr über Liebe gelernt als in meinem ganzen Leben davor.

Solche Geschichten gibt es nicht zu Dutzenden. Es gibt sie zu Tausenden. Zu Hunderttausenden. So viele, wie es Menschen gibt, die jemals durch eine schwere psychische Zeit gegangen sind.

## Recovery ist dokumentiert

Das Schottische Recovery-Netzwerk hat 2007 vierundsechzig solcher Geschichten zusammengetragen und systematisch ausgewertet [^brown2007]. Die britische Initiative ImROC sammelt Erfahrungsberichte seit Jahren [^imroc]. Die internationale Stimmenhörer-Gemeinschaft trägt seit den 1990er-Jahren Stimmen zusammen, die nicht in Lehrbüchern stehen [^hvn].

An der Universität Nottingham hat Mike Slade mit dem NEON-Programm – Narrative Experiences Online – eine wissenschaftliche Sammlung aufgezeichneter Recovery-Geschichten aufgebaut [^slade2021neon]. In randomisierten kontrollierten Studien wurde gezeigt, dass das Hören solcher Geschichten messbar die Lebensqualität verbessert – bei Menschen mit Psychose-Erfahrung [^rennick2024neon] und bei Angehörigen, die sie begleiten [^neonc2024].

Anders gesagt: Recovery ist nicht nur ein gefühltes Versprechen. Recovery ist ein dokumentiertes Phänomen. Und Geschichten anderer Menschen sind selbst eine Form von Hilfe.

## Recovery ist praktisch

Recovery findet nicht zuerst im Behandlungszimmer statt. Recovery sind Begegnungen. Recovery ist der Garten, in dem nach Monaten wieder gepflanzt wird. Der Hund, der jeden Morgen die Tür findet. Der Chor, in dem der eigene Atem wieder eine Stimme hat. Die Freundin, die zuhört, ohne reparieren zu wollen. Der trialogische Gesprächskreis am Mittwochabend. Die Wanderung in die Hügel. Das Brot, das im Sauerteig zwölf Stunden Zeit braucht.

Recovery sind Geschichten von Resilienz – und von Kreativität, die oft genau dort entsteht, wo etwas zerbrochen ist. Recovery ist sehr oft auch: Glück.

Nicht das makellose, immer strahlende Glück der Hochglanzbroschüren. Sondern das andere – das stille, dankbare, manchmal überraschte Glück. Das Glück, das man erst kennt, wenn man weiss, wie lang ein Tag sein kann.

## Und du?

Du musst nichts von alledem schon spüren, um hier zu sein. Vielleicht ist gerade nicht der Moment für grosse Worte wie Glück oder Sinn. Vielleicht reicht es heute, dass du diese Seite liest. Das ist genug.

Dieses Workbook ist für Menschen geschrieben, die einen solchen Weg gehen – oder begleiten, oder verstehen wollen. Es will keine schöne Theorie sein. Es will Wegzeichen sein.

:::pull
Bevor wir loslegen – ein kurzer Wegweiser.
:::

:::easy{reading_time=1}
Recovery ist eine Bewegung. Viele Menschen haben es geschafft: Sie hatten eine schwere Zeit. Heute leben sie gut. Trotz Krankheit. Manchmal sogar wegen der Krankheit.

Es gibt Tausende solcher Geschichten.

Recovery passiert nicht nur beim Arzt. Recovery passiert in deinem Leben. Beim Kochen. Beim Spazieren. Beim Reden mit guten Menschen.

Dieses Workbook will dir helfen. Es ist kein Buch zum Lernen. Es ist ein Begleiter.
:::

:::quiz{id=q-vorspann}
- q: "Wo passiert Recovery am meisten?"
  type: multiple-choice
  options:
    - text: "Nur in der Klinik."
      correct: false
      explanation: "Nein. Recovery passiert vor allem im Alltag – in Begegnungen, in kleinen Schritten."
    - text: "Im Leben – in Begegnungen, im Alltag."
      correct: true
      explanation: "Genau. Behandlung ist ein Werkzeug, kein Ort."
    - text: "Erst, wenn alle Symptome weg sind."
      correct: false
      explanation: "Recovery beginnt nicht erst nach der Symptomfreiheit."

- q: "Wie viele Recovery-Geschichten gibt es?"
  type: multiple-choice
  options:
    - text: "Eine Handvoll."
      correct: false
    - text: "Hunderte."
      correct: false
    - text: "Tausende, wenn nicht hunderttausende."
      correct: true
      explanation: "So viele, wie es Menschen gibt, die je durch eine schwere Zeit gegangen sind."
- q: "Was meint der Satz ‚Recovery beginnt mit Geschichten‘?"
  type: multiple-choice
  options:
    - text: "Nur erzählte Lebensgeschichten ermöglichen Genesung."
      correct: false
    - text: "Hoffnung wächst, wenn wir sehen: andere haben einen Weg gefunden – das könnte auch meiner sein."
      correct: true
      explanation: "Geschichten machen Recovery konkret und vorstellbar."
    - text: "Geschichten ersetzen wissenschaftliche Erkenntnisse über Recovery."
      correct: false

:::

:::flashcards{id=f-vorspann}
- front: "Recovery beginnt mit …"
  back: "… Geschichten. Tausenden von Menschen, die trotz oder wegen ihrer Symptome einen Weg in ein gutes Leben gefunden haben."
- front: "NEON-Programm"
  back: "Wissenschaftliche Sammlung aufgezeichneter Recovery-Geschichten (Uni Nottingham). Studien zeigen: Hören solcher Geschichten verbessert messbar die Lebensqualität."
- front: "Recovery findet statt …"
  back: "… nicht zuerst im Behandlungszimmer. Im Garten, im Chor, im Gespräch, beim Kochen, in Begegnungen."
:::

:::standard{reading_time=2}
Recovery beginnt mit Geschichten. Nicht mit Theorie, nicht mit Diagnosen — mit Menschen, die einen Weg gefunden haben.

Eine Frau, die jahrelang dachte, sie werde nie wieder einen Beruf ausüben, und heute eine kleine Buchhandlung führt. Ein Vater, der nach einer Psychose wieder Klavier spielt — anders als früher, mit weniger Perfektion, mit mehr Liebe. Ein junger Mann, der nach einer Borderline-Diagnose heute andere begleitet, weil er ihnen die Hand reichen will, die ihm gefehlt hat.

Solche Geschichten gibt es nicht zu Dutzenden. Es gibt sie zu Tausenden. So viele, wie es Menschen gibt, die je durch eine schwere psychische Zeit gegangen sind.

Recovery ist mehr als ein gefühltes Versprechen. Recovery ist dokumentiert:

- Das Schottische Recovery-Netzwerk hat 64 Lebenswege systematisch ausgewertet.
- Die Universität Nottingham sammelt Recovery-Erzählungen wissenschaftlich.
- Studien zeigen: Das Hören solcher Geschichten verbessert messbar die Lebensqualität.

Recovery passiert auch selten zuerst im Behandlungszimmer. Recovery passiert im Garten, in dem nach Monaten wieder gepflanzt wird. Im Chor, in dem dein Atem wieder eine Stimme hat. In der Freundin, die zuhört, ohne reparieren zu wollen.

Du musst noch nichts davon spüren, um hier zu sein. Vielleicht reicht es heute, dass du diese Seite liest. Das ist genug.

Dieses Workbook ist ein Wegzeichen. Keine schöne Theorie — sondern ein Begleiter für deinen Weg.
:::

:::standard-quiz{id=q-vorspann-std}
- q: "Wo passiert Recovery vor allem?"
  type: multiple-choice
  options:
    - text: "Nur in der Klinik oder Therapie."
      correct: false
      explanation: "Recovery passiert vor allem im Alltag — in Begegnungen, im Garten, im Chor, beim Kochen."
    - text: "Im Leben — in Begegnungen und im Alltag."
      correct: true
      explanation: "Genau. Behandlung ist ein Werkzeug, kein Ort."
    - text: "Erst wenn alle Symptome verschwunden sind."
      correct: false
      explanation: "Nein. Recovery beginnt mitten in der Schwierigkeit."

- q: "Wie viele Recovery-Geschichten gibt es?"
  type: multiple-choice
  options:
    - text: "Eine Handvoll."
      correct: false
    - text: "Tausende, wahrscheinlich hunderttausende."
      correct: true
      explanation: "So viele, wie es Menschen gibt, die je durch eine schwere Zeit gegangen sind."
    - text: "Nur sehr wenige Einzelfälle."
      correct: false
- q: "Was macht Geschichten so wichtig?"
  type: multiple-choice
  options:
    - text: "Sie ersetzen die Forschung."
      correct: false
    - text: "Sie machen Hoffnung greifbar — andere haben es geschafft, also gibt es einen Weg."
      correct: true
      explanation: "Geschichten sagen: was bei dir gerade unmöglich scheint, ist anderen schon gelungen."
    - text: "Sie sind reine Unterhaltung."
      correct: false

:::

:::standard-flashcards{id=f-vorspann-std}
- front: "Recovery beginnt mit …"
  back: "… Geschichten. Tausenden von Menschen, die trotz oder wegen ihrer Symptome einen Weg in ein gutes Leben gefunden haben."
- front: "Wo findet Recovery statt?"
  back: "Im Alltag. Im Garten, im Chor, im Gespräch, beim Kochen. Behandlung ist ein Werkzeug, kein Ort."
- front: "Bist du allein?"
  back: "Nein. Tausende sind durch ähnliche Zeiten gegangen. Ihre Geschichten zeigen: Es gibt einen Weg."
:::


# Eine kurze Vorbemerkung zur Sprache
{#sprache reading_time=2}

Worte schaffen Realität. Wer als „Schizophrener" angesprochen wird, hört eine Diagnose. Wer als „Mensch mit der Diagnose Schizophrenie" angesprochen wird, bleibt zuerst ein Mensch. Diese Einleitung verwendet bewusst Person-first-Sprache: Diagnose nach dem Menschen, nicht vor ihm [^ameringschmolke2012] [^knuf2026].

Wir sprechen von Menschen mit psychischen Krisen, Krisenerfahrungen oder Psychiatrieerfahrung – nicht von „Kranken". Wir sprechen von Menschen in Recovery – nicht von „Geheilten". Wir verwenden „du", weil das digitale Workbook ein persönlicher Raum ist – nicht weil wir uns über dich stellen. Wenn du als Fachperson liest: lies das „du" als Modell für einen Sprachstil, der Nähe schafft, ohne Hierarchie zu betonen.

Eine eingängige deutsche Übersetzung von Recovery hat sich nicht etabliert – ebenso wenig wie für den eng verwandten Begriff Empowerment. Wir verwenden Recovery deshalb durchgängig als Fachbegriff und stellen ihm im nächsten Kapitel die ergänzende deutsche Lesart „Hoffnung – Macht – Sinn" [^ameringschmolke2006] zur Seite.

:::easy{reading_time=1}
Worte sind wichtig.

Wer „Schizophrener" genannt wird, ist nur noch krank. Wer „Mensch mit Schizophrenie" heisst, bleibt zuerst ein Mensch.

Wir benutzen das Wort Recovery. Es ist Englisch. Es gibt kein gutes deutsches Wort dafür. Recovery heisst: einen Weg gehen zu einem guten Leben.

In dieser App sprechen wir dich mit „du" an. Nicht weil wir besser sind. Sondern weil dieser Raum dein Raum ist.
:::

:::quiz{id=q-sprache}
- q: "Welche Formulierung ist Person-first?"
  type: multiple-choice
  options:
    - text: "Der Schizophrene"
      correct: false
    - text: "Mensch mit der Diagnose Schizophrenie"
      correct: true
      explanation: "Diagnose nach dem Menschen, nicht vor ihm."
    - text: "Ein Schizo"
      correct: false
- q: "Warum schreibt dieses Workbook ‚Mensch mit Schizophrenie‘ statt ‚Schizophrener‘?"
  type: multiple-choice
  options:
    - text: "Weil ‚Mensch‘ ein längeres Wort ist."
      correct: false
    - text: "Weil Person-first-Sprache den Menschen vor die Diagnose stellt."
      correct: true
      explanation: "Du bist mehr als deine Diagnose – das soll auch die Sprache zeigen."
    - text: "Weil das Bundesamt für Gesundheit das vorschreibt."
      correct: false

- q: "Wieso wird der englische Begriff ‚Recovery‘ auch im Deutschen verwendet?"
  type: multiple-choice
  options:
    - text: "Weil englische Wörter moderner klingen."
      correct: false
    - text: "Weil es keine elegante, gleichwertige deutsche Übersetzung gibt – Recovery wird als Fachbegriff geprägt verwendet."
      correct: true
      explanation: "‚Genesung‘ und ‚Wiederherstellung‘ treffen nur Teilbedeutungen."
    - text: "Weil die Schweizer das so beschlossen haben."
      correct: false

:::

:::flashcards{id=f-sprache}
- front: "Person-first-Sprache"
  back: "Diagnose nach dem Menschen, nicht vor ihm: 'Mensch mit Schizophrenie' statt 'Schizophrener'."
- front: "Warum Recovery als Begriff?"
  back: "Eine elegante deutsche Übersetzung gibt es nicht. Recovery wird als geprägter Fachbegriff durchgängig verwendet."
- front: "Du-Form im Workbook"
  back: "Das Workbook spricht dich direkt an, persönlich – nicht von oben herab, nicht in der dritten Person."
:::

:::standard{reading_time=2}
Worte schaffen Realität. Sie sind nicht harmlos.

Wer als „Schizophrener" angesprochen wird, hört eine Diagnose, bevor er ein Mensch ist. Wer als „Mensch mit der Diagnose Schizophrenie" angesprochen wird, bleibt zuerst ein Mensch — und trägt die Diagnose als einen Teil, nicht als das Ganze.

Dieses Workbook verwendet bewusst Person-first-Sprache: die Diagnose steht nach dem Menschen, nicht vor ihm.

Konkret heisst das:

- Wir sprechen von Menschen mit psychischen Krisen, nicht von „Kranken".
- Wir sprechen von Menschen in Recovery, nicht von „Geheilten".
- Wir sprechen von Genesungsbegleitung, nicht von „Insassenarbeit".

Für das Wort Recovery selbst gibt es keine eingängige deutsche Übersetzung — genauso wenig wie für Empowerment. Wir verwenden Recovery deshalb durchgängig als Fachbegriff. Im nächsten Kapitel stellen wir ihm die deutsche Lesart „Hoffnung — Macht — Sinn" zur Seite.

Eine Besonderheit: Du wirst durchgängig geduzt. Nicht weil wir uns über dich stellen — im Gegenteil. Das digitale Workbook ist ein persönlicher Raum. Das „Du" schafft Nähe, ohne Hierarchie zu betonen. Wenn du als Fachperson liest: lies das „Du" als Modell für einen Sprachstil, der Augenhöhe ausdrückt.
:::

:::standard-quiz{id=q-sprache-std}
- q: "Welche Formulierung ist Person-first?"
  type: multiple-choice
  options:
    - text: "Der Schizophrene"
      correct: false
      explanation: "Hier kommt die Diagnose zuerst — das ist nicht Person-first."
    - text: "Mensch mit der Diagnose Schizophrenie"
      correct: true
      explanation: "Genau. Diagnose nach dem Mensch — der Mensch bleibt zuerst sichtbar."
    - text: "Ein Schizo"
      correct: false
      explanation: "Stigmatisierend und reduziert die Person auf die Diagnose."

- q: "Warum verwendet das Workbook „du"?"
  type: multiple-choice
  options:
    - text: "Weil die Autor:innen sich überlegen fühlen."
      correct: false
    - text: "Weil das digitale Workbook ein persönlicher Raum ist — Nähe ohne Hierarchie."
      correct: true
      explanation: "Das „Du" schafft Nähe, nicht Distanz nach unten."
- q: "Warum sagt das Workbook ‚Mensch mit Schizophrenie‘?"
  type: multiple-choice
  options:
    - text: "Weil ‚Schizophrener‘ veraltet klingt."
      correct: false
    - text: "Weil der Mensch vor die Diagnose gehört — nicht umgekehrt."
      correct: true
      explanation: "Person-first-Sprache: du bist mehr als ein Krankheitsbild."
    - text: "Aus juristischen Gründen."
      correct: false

:::

:::standard-flashcards{id=f-sprache-std}
- front: "Person-first-Sprache"
  back: "Diagnose nach dem Menschen, nicht vor ihm. „Mensch mit Schizophrenie" statt „Schizophrener"."
- front: "Warum bleibt „Recovery" englisch?"
  back: "Es gibt keine eingängige deutsche Übersetzung. Recovery wird als geprägter Fachbegriff verwendet."
- front: "Warum Du-Form?"
  back: "Damit das Workbook persönlich spricht — nicht von oben, nicht über dich hinweg."
:::


# Willkommen
{#willkommen reading_time=3}

Schön, dass du hier bist.

Dieses digitale Workbook ist für dich geschrieben – wenn du selbst gerade eine schwere Zeit erlebst, eine Diagnose erhalten hast oder schon lange mit einer psychischen Erkrankung lebst.

Vielleicht warst du oft in Behandlung. Vielleicht stehst du am Anfang. Vielleicht hast du schon einen langen Weg hinter dir und suchst eine neue Sprache für das, was du erlebst.

Dieses Workbook ist so geschrieben, dass du es in deinem eigenen Tempo erkunden kannst. Du musst nicht alles lesen. Du musst nichts in einer bestimmten Reihenfolge tun. Du darfst springen, wiederkommen, weglegen.

:::info{type=metaphor title="Ein Bild für den Weg: Kintsugi"}
Kintsugi ist eine traditionelle japanische Reparatur-Kunst. Zerbrochene Keramik wird mit Gold gekittet. Die Bruchstellen werden nicht versteckt, sondern sichtbar gemacht und veredelt. Das Gefäss wird durch den Bruch nicht weniger wertvoll – sondern, in den Augen vieler, mehr.

Genesungswege folgen oft einer ähnlichen Logik: Es geht nicht darum, die Bruchstellen wegzuretuschieren, sondern sie in ein neues Ganzes zu integrieren.

Recovery heisst nicht, so zu werden, wie man früher war. Recovery heisst, dass das, was war, Teil eines neuen Ganzen werden darf.
:::

:::quote{author="U.S. Substance Abuse and Mental Health Services Administration (SAMHSA), 2012" source="samhsa2012"}
Recovery ist eine Reise des Heilens und der Verwandlung, die einen Menschen mit einer psychischen Erkrankung in die Lage versetzt, ein sinnvolles Leben in einer Gemeinschaft seiner Wahl zu führen – während er gleichzeitig danach strebt, sein volles Potenzial auszuschöpfen.
:::

:::easy{reading_time=1}
Schön, dass du hier bist.

Dieses Workbook ist für dich geschrieben – wenn du selbst schwere Zeiten erlebst.

Du musst nicht alles lesen. Wähle, was zu dir passt. Komm wieder, wenn du willst.

Du bestimmst dein Tempo.
:::

:::quiz{id=q-willkommen}
- q: "Für wen ist dieses Workbook?"
  type: multiple-choice
  options:
    - text: "Für Menschen mit eigener Erfahrung psychischer Belastung."
      correct: true
      explanation: "Es ist für dich geschrieben – egal, wo du auf deinem Weg gerade stehst."
    - text: "Nur für Fachpersonen."
      correct: false
    - text: "Nur für Menschen mit einer bestimmten Diagnose."
      correct: false

- q: "Musst du das Workbook der Reihe nach lesen?"
  type: true-false
  correct: false
  explanation: "Nein. Du darfst springen, wiederkommen, weglegen. Du bestimmst Tempo und Reihenfolge."
- q: "An wen richtet sich dieses Workbook?"
  type: multiple-choice
  options:
    - text: "An Fachpersonen, die psychisch kranke Menschen behandeln."
      correct: false
    - text: "An dich, wenn du selbst eigene Erfahrung mit psychischer Belastung hast oder hattest."
      correct: true
      explanation: "Das Workbook spricht direkt Betroffene in der Du-Form an."
    - text: "An Angehörige und Familienmitglieder."
      correct: false

:::

:::flashcards{id=f-willkommen}
- front: "Für wen ist dieses Workbook?"
  back: "Für dich – wenn du selbst Erfahrung mit psychischer Belastung hast."
- front: "Kintsugi"
  back: "Japanische Reparatur-Kunst: Bruchstellen mit Gold gekittet, nicht versteckt. Metapher für Recovery: das Zerbrochene wird Teil eines neuen Ganzen."
- front: "Selbstbestimmung beim Lesen"
  back: "Du wählst, was du liest. Du wählst dein Tempo. Du darfst überall wieder einsteigen."
:::

:::standard{reading_time=2}
Schön, dass du hier bist.

Dieses Workbook ist für dich geschrieben — wenn du selbst gerade eine schwere Zeit erlebst, eine Diagnose erhalten hast oder schon lange mit einer psychischen Erkrankung lebst.

Vielleicht stehst du am Anfang. Vielleicht hast du schon viele Therapien hinter dir. Vielleicht suchst du gerade eine neue Sprache für das, was du erlebst — oder einfach jemanden, der nicht reparieren will, sondern mitgeht.

Du musst nichts mitbringen. Keine Vorkenntnisse, keinen guten Tag, keine fertige Geschichte. Lies, was dich anspricht. Lass weg, was gerade nicht passt. Komm wieder, wenn du willst.

Ein Bild, das wir gern verwenden, ist Kintsugi — die japanische Reparatur-Kunst. Zerbrochene Keramik wird mit Gold gekittet. Die Bruchstellen werden nicht versteckt, sondern sichtbar gemacht. Das Gefäss wird durch den Bruch nicht weniger wertvoll — in den Augen vieler wird es mehr.

Recovery folgt einer ähnlichen Logik. Es geht nicht darum, alles wegzuretuschieren, was war. Es geht darum, dass das Zerbrochene Teil eines neuen Ganzen werden darf.

Ein paar Hinweise, bevor du startest:

- Du bestimmst Tempo und Reihenfolge.
- Es gibt verschiedene Lese-Modi: einfach, Standard, ausführlich.
- Du kannst überall ein- und aussteigen.
- Wenn etwas zu viel wird: leg es weg. Das ist kein Aufgeben — das ist Selbstfürsorge.

Niemand drängt dich. Dieser Raum gehört dir.
:::

:::standard-quiz{id=q-willkommen-std}
- q: "Wer bestimmt Tempo und Reihenfolge?"
  type: multiple-choice
  options:
    - text: "Die App."
      correct: false
    - text: "Du."
      correct: true
      explanation: "Du darfst springen, weglegen, wiederkommen."
    - text: "Die Reihenfolge ist fest vorgegeben."
      correct: false

- q: "Was bedeutet Kintsugi als Bild für Recovery?"
  type: multiple-choice
  options:
    - text: "Bruchstellen werden möglichst unsichtbar gemacht."
      correct: false
    - text: "Bruchstellen werden sichtbar — und Teil eines neuen Ganzen."
      correct: true
      explanation: "Recovery heisst nicht, alles wegzuretuschieren. Das, was war, darf Teil des Neuen sein."
- q: "Wer hat dieses Workbook im Kopf, wenn er ‚du‘ sagt?"
  type: multiple-choice
  options:
    - text: "Behandelnde und Forschende."
      correct: false
    - text: "Dich — wenn du selbst Erfahrung mit psychischer Belastung hast oder hattest."
      correct: true
      explanation: "Das ‚Du‘ ist persönlich gemeint, nicht akademisch."
    - text: "Schulklassen und Studierende."
      correct: false

:::

:::standard-flashcards{id=f-willkommen-std}
- front: "Dein Tempo"
  back: "Du bestimmst, was du liest und wann. Springen, weglegen, wiederkommen — alles erlaubt."
- front: "Kintsugi"
  back: "Japanische Reparatur-Kunst: Bruchstellen mit Gold gekittet. Metapher für Recovery — das Zerbrochene wird Teil eines neuen Ganzen."
- front: "Wenn etwas zu viel wird"
  back: "Leg es weg. Das ist kein Aufgeben — das ist Selbstfürsorge."
:::


# 1. Was Recovery wirklich heisst
{#kap-1 reading_time=5}

## Das Wort und seine Geschichte

Das englische Wort recovery bedeutet wörtlich Genesung, Wiedererlangung, Erholung. In der psychischen Gesundheit hat es sich seit den 1980er-Jahren als Sammelbegriff für eine neue Sicht auf seelisches Leiden etabliert [^anthony1993] [^deegan1988].

Recovery ist dabei nicht in erster Linie ein medizinischer Begriff. Er stammt aus den Erfahrungen von Menschen, die selbst psychiatrische Diagnosen erhalten hatten und die sich weigerten, sich darauf reduzieren zu lassen [^chamberlin1978] [^deegan1988].

## Die klassische Definition

Die meistzitierte Definition stammt von William Anthony, dem damaligen Direktor des Center for Psychiatric Rehabilitation der Boston University.

:::quote{author="Anthony, 1993, S. 15" source="anthony1993" lang="en"}
Recovery is described as a deeply personal, unique process of changing one's attitudes, values, feelings, goals, skills, and/or roles. It is a way of living a satisfying, hopeful, and contributing life even with limitations caused by illness.
:::

:::quote-translation{source="anthony1993" translator="eigene Übertragung"}
Recovery ist ein zutiefst persönlicher, einzigartiger Prozess der Veränderung von Einstellungen, Werten, Gefühlen, Zielen, Fähigkeiten und Rollen. Es ist ein Weg, ein erfülltes, hoffnungsvolles und sinnstiftendes Leben zu führen – auch mit den Einschränkungen, die eine Krankheit mit sich bringt.
:::

Diese Definition ist seit über drei Jahrzehnten der internationale Bezugspunkt. Sie wurde u.a. von SAMHSA übernommen [^samhsa2012], von der Sainsbury Centre for Mental Health-Tradition geprägt und in die WHO-Leitlinien integriert [^who2021].

## Klinische und persönliche Genesung

Die Forschung unterscheidet zwei Begriffe [^slade2009]:

- **Klinische Genesung** (clinical recovery): Symptome werden geringer oder verschwinden, die Diagnose verliert ihre Bedeutung. Dieses Verständnis kommt aus der Medizin.
- **Persönliche Genesung** (personal recovery): Du erlebst dein Leben als sinnvoll, lebenswert und selbstbestimmt – unabhängig davon, ob alle Symptome verschwunden sind oder nicht.

Recovery im Sinn dieses Workbooks meint vor allem die persönliche Genesung. Sie kann mit klinischer Genesung einhergehen, muss es aber nicht.

## Deutschsprachige Definitionen

:::quote{author="Stiftung Pro Mente Sana Schweiz, 2024" source="promentesana"}
Die kürzeste Beschreibung von Recovery ist: ein möglichst gutes Leben führen, auch in Konfrontation mit einer schweren psychischen Beeinträchtigung.
:::

Amering und Schmolke sprechen vom „Ende der Unheilbarkeit" [^ameringschmolke2012]. Sie stützen sich auf Längsschnittforschung, die zeigt: Auch nach schweren Erkrankungen wie Schizophrenie ist ein erfülltes Leben möglich. Knuf versteht Recovery als Prozess der Auseinandersetzung mit sich selbst und der Erkrankung – mit dem Ziel, trotz psychischer Probleme ein hoffnungsvolles und aktives Leben zu führen [^knuf2026].

Die deutsche S3-Leitlinie „Psychosoziale Therapien bei schweren psychischen Erkrankungen" hat Recovery in den deutschsprachigen Versorgungs-Mainstream gehoben und Recovery-Orientierung als Leitprinzip benannt [^dgppn2019].

:::reflection{id=1 title="Was bedeutet Genesung für dich?"}
- Wenn du das Wort Genesung hörst – welches Bild steigt zuerst auf?
- Welche der oberen Definitionen spricht dich am meisten an? Und warum?
- Was wäre für dich ein „gutes Leben" – auch dann, wenn nicht alles „weg" ist?
:::

:::easy{reading_time=2}
Recovery bedeutet: Genesung.

Aber Recovery heisst nicht: Alle Symptome müssen weg sein.

Recovery heisst: Du lebst gut. Auch wenn du noch Schweres erlebst.

Es gibt zwei Arten von Genesung:

- Die Symptome werden weniger. Das ist klinische Genesung.
- Du erlebst dein Leben als gut und sinnvoll. Das ist persönliche Genesung.

Beides ist möglich. Beides darf gleichzeitig sein.

Eine Schweizer Stiftung sagt: Recovery heisst, ein möglichst gutes Leben führen. Auch wenn etwas Schweres da ist.

:::reflection{id=1-easy title="Frag dich selbst"}
- Was bedeutet ein gutes Leben für dich?
- Was musst du dafür haben? Was nicht?
:::
:::

:::quiz{id=q-1}
- q: "Was bedeutet Recovery?"
  type: multiple-choice
  options:
    - text: "Alle Symptome müssen verschwinden."
      correct: false
      explanation: "Nein. Persönliche Genesung kann auch mit anhaltenden Symptomen funktionieren."
    - text: "Ein sinnvolles, selbstbestimmtes Leben führen – auch wenn Symptome bleiben."
      correct: true
      explanation: "Genau. Das ist der Kern von persönlicher Genesung (Anthony 1993)."
    - text: "Eine bestimmte Therapie-Methode."
      correct: false

- q: "Welche zwei Arten von Genesung unterscheidet die Forschung?"
  type: multiple-choice
  options:
    - text: "Schnelle und langsame Genesung."
      correct: false
    - text: "Klinische und persönliche Genesung."
      correct: true
      explanation: "Klinische = Symptome weg. Persönliche = Leben mit Sinn führen."
    - text: "Therapeutische und medikamentöse Genesung."
      correct: false
- q: "Welche Aussage über persönliche Genesung stimmt?"
  type: true-false
  correct: true
  explanation: "Persönliche Genesung kann beginnen und tragfähig sein, auch wenn Symptome bleiben – der Lebensentwurf ist der Massstab."

:::

:::flashcards{id=f-1}
- front: "Klinische Genesung"
  back: "Symptome werden geringer oder verschwinden. Die Diagnose verliert ihre Bedeutung. Das medizinische Verständnis von Heilung."
- front: "Persönliche Genesung"
  back: "Du erlebst dein Leben als sinnvoll, lebenswert und selbstbestimmt – unabhängig davon, ob alle Symptome verschwunden sind."
- front: "Anthony 1993 – die Kerndefinition"
  back: "Recovery ist ein zutiefst persönlicher, einzigartiger Veränderungsprozess der Haltungen, Werte, Gefühle, Ziele und Rollen – ein Weg, ein erfülltes Leben zu führen, auch mit Einschränkungen."
- front: "Pro Mente Sana – die kürzeste Definition"
  back: "Ein möglichst gutes Leben führen – auch in Konfrontation mit einer schweren psychischen Beeinträchtigung."
:::

:::standard{reading_time=2}
Recovery ist ein englisches Wort. Wörtlich heisst es Genesung, Wiedererlangung, Erholung. In der psychischen Gesundheit ist es seit den 1980er-Jahren der Sammelbegriff für eine neue Sicht auf seelisches Leiden — und zwar eine, die nicht von Ärzten erfunden wurde, sondern von Betroffenen selbst.

Die klassische Definition stammt von William Anthony, einem Forscher aus Boston: Recovery ist ein zutiefst persönlicher Veränderungsprozess der eigenen Haltungen, Werte, Ziele und Rollen — ein Weg, ein erfülltes, hoffnungsvolles Leben zu führen, auch mit den Einschränkungen einer Erkrankung.

Die Forschung unterscheidet zwei Lesarten:

- **Klinische Genesung:** Symptome werden geringer oder verschwinden. Die Diagnose verliert ihre Bedeutung. Das ist die medizinische Sicht.
- **Persönliche Genesung:** Du erlebst dein Leben als sinnvoll, lebenswert und selbstbestimmt — unabhängig davon, ob noch Symptome da sind.

Recovery im Sinn dieses Workbooks meint vor allem die persönliche Genesung. Sie kann mit klinischer Genesung einhergehen, muss es aber nicht. Beides darf gleichzeitig sein. Und beides darf sein eigenes Tempo haben.

Die Schweizer Stiftung Pro Mente Sana fasst es in einem Satz zusammen: Recovery heisst, ein möglichst gutes Leben führen — auch in Konfrontation mit einer schweren psychischen Beeinträchtigung.

Wichtig ist: Du bist mehr als deine Diagnose. Du bist Mensch zuerst — alles andere kommt danach. Und du musst diesen Weg nicht allein gehen. Andere können dich begleiten.
:::

:::standard-quiz{id=q-1-std}
- q: "Was heisst Recovery vor allem?"
  type: multiple-choice
  options:
    - text: "Geheilt sein. Keine Symptome mehr."
      correct: false
      explanation: "Das wäre klinische Genesung. Recovery meint mehr — vor allem persönliche Genesung."
    - text: "Ein erfülltes Leben — auch mit Symptomen."
      correct: true
      explanation: "Genau das ist Anthonys klassische Definition (1993)."
    - text: "Eine bestimmte Therapie-Methode."
      correct: false

- q: "Welche zwei Arten von Genesung unterscheidet die Forschung?"
  type: multiple-choice
  options:
    - text: "Schnelle und langsame Genesung."
      correct: false
    - text: "Klinische und persönliche Genesung."
      correct: true
      explanation: "Klinisch = Symptome weg. Persönlich = sinnvolles Leben führen."

- q: "Wer hat Recovery als Konzept entwickelt?"
  type: multiple-choice
  options:
    - text: "Vor allem Ärzte und Pharmafirmen."
      correct: false
    - text: "Menschen mit eigener Psychiatrie-Erfahrung — gemeinsam mit der Forschung."
      correct: true
      explanation: "Die Bewegung kommt aus den Erfahrungen Betroffener."
:::

:::standard-flashcards{id=f-1-std}
- front: "Recovery (Kerndefinition)"
  back: "Ein erfülltes, hoffnungsvolles Leben führen — auch mit den Einschränkungen einer Erkrankung (Anthony 1993)."
- front: "Klinische Genesung"
  back: "Symptome werden geringer oder verschwinden. Die Diagnose verliert ihre Bedeutung."
- front: "Persönliche Genesung"
  back: "Du erlebst dein Leben als sinnvoll, lebenswert und selbstbestimmt — unabhängig davon, ob Symptome bleiben."
- front: "Pro Mente Sana — die kürzeste Definition"
  back: "Ein möglichst gutes Leben führen, auch in Konfrontation mit einer schweren Beeinträchtigung."
:::


# 2. Hoffnung – Macht – Sinn
{#kap-2 reading_time=3}

Im Jahr 2006 haben Michaela Amering und Margit Schmolke in der Schweizer Fachzeitschrift Managed Care einen Artikel mit dem Titel „Hoffnung – Macht – Sinn. Recovery-Konzepte in der Psychiatrie" veröffentlicht [^ameringschmolke2006]. Damit haben sie die deutschsprachige Recovery-Lesart entscheidend geprägt.

Die Trias „Hoffnung – Macht – Sinn" fasst zusammen, worum es bei Recovery aus DACH-Perspektive geht – als eingängige, alltagsnahe Eindeutschung der zentralen englischsprachigen Begriffe.

| Deutsch | Englisch | Bedeutung im D-A-CH-Kontext |
|---------|----------|-----------------------------|
| **Hoffnung** | Hope | Selbstgefühl auch unabhängig von der Erkrankung (wieder)finden – Hoffnung als therapeutische Wirkressource. |
| **Macht** | Empowerment | Selbstbefähigung, Wahlfreiheit, Eigenverantwortung – „Macht" im Sinne der Wiederaneignung von Handlungsspielraum [^knufseibert2004]. |
| **Sinn** | Meaning | Werte, Ziele, Beitrag, Zugehörigkeit – das Leben jenseits der Patient:innenrolle definieren. |

Hoffnung in diesem Verständnis ist eng mit dem Selbstgefühl verknüpft: einem Selbstwert, der unabhängig vom Krankheitserleben Bestand hat, und einer Identität, die mehr umfasst als die Patient:innen-Rolle [^ameringschmolke2006].

Die drei Begriffe passen zu Anthonys Recovery-Definition [^anthony1993]. Und sie korrespondieren zentral mit dem CHIME-Modell [^leamy2011]: Hoffnung = Hope, Macht = Empowerment, Sinn = Meaning. Verbundenheit (Connectedness) und Identität (Identity) bilden den umgebenden Beziehungs- und Selbstrahmen.

:::easy{reading_time=1}
Zwei Forscherinnen haben drei Worte für Recovery auf Deutsch gefunden:

- **Hoffnung** – Du glaubst, dass es besser werden kann.
- **Macht** – Du darfst entscheiden. Du bist nicht nur Patient:in.
- **Sinn** – Dein Leben hat Wert. Du gehörst dazu.

Diese drei Worte sind die deutsche Lesart des englischen CHIME-Modells. Verbundenheit mit anderen und eine eigene Identität gehören auch dazu.
:::

:::quiz{id=q-2}
- q: "Was bedeutet 'Macht' in dieser deutschen Lesart?"
  type: multiple-choice
  options:
    - text: "Macht über andere Menschen ausüben."
      correct: false
    - text: "Selbstbefähigung – das Recht, über das eigene Leben mitzuentscheiden."
      correct: true
      explanation: "'Macht' meint hier Empowerment im positiven Sinn – nicht Macht über andere."
    - text: "Medizinische Befugnisse."
      correct: false

- q: "Wer hat die Trias 'Hoffnung – Macht – Sinn' eingeführt?"
  type: multiple-choice
  options:
    - text: "Patricia Deegan"
      correct: false
    - text: "Amering & Schmolke (2006)"
      correct: true
      explanation: "In der Schweizer Fachzeitschrift Managed Care, 2006."
    - text: "Die WHO"
      correct: false
- q: "Welcher Dreiklang gilt als Kern recovery-orientierter Praxis?"
  type: multiple-choice
  options:
    - text: "Diagnose – Medikament – Therapie"
      correct: false
    - text: "Hoffnung – Macht – Sinn"
      correct: true
      explanation: "Drei Säulen, die persönliche Genesung tragen (Knuf 2017, Pro Mente Sana)."
    - text: "Sport – Schlaf – Ernährung"
      correct: false

:::

:::flashcards{id=f-2}
- front: "Hoffnung – Macht – Sinn"
  back: "Die deutschsprachige Lesart von Recovery, eingeführt von Amering & Schmolke 2006. Entspricht Hope, Empowerment, Meaning im CHIME-Modell."
- front: "Macht (im Recovery-Sinn)"
  back: "Selbstbefähigung – das Recht, über das eigene Leben mitzuentscheiden. Nicht Macht über andere."
- front: "Hoffnung – Macht – Sinn"
  back: "Drei Säulen recovery-orientierter Praxis: Hoffnung trägt, Macht heisst Selbstbestimmung, Sinn macht Leben tragbar."
:::

:::standard{reading_time=2}
Recovery ist ein englisches Wort, das sich auf Deutsch schwer übersetzen lässt. Die österreichischen Psychiaterinnen Michaela Amering und Margit Schmolke haben 2006 in der Schweizer Fachzeitschrift Managed Care drei deutsche Begriffe vorgeschlagen, die den Kern treffen — eine Trias, die heute im DACH-Raum geläufig ist:

- **Hoffnung** — der Glaube, dass dein Leben mehr sein kann als die Erkrankung. Ein Selbstgefühl, das auch unabhängig von Symptomen Bestand hat.
- **Macht** — Selbstbefähigung. Nicht Macht über andere, sondern Macht über dein eigenes Leben. Mitentscheiden dürfen. Wahlfreiheit. Eigenverantwortung.
- **Sinn** — Werte, Ziele, Zugehörigkeit. Das Leben jenseits der Patient:innenrolle definieren dürfen.

Diese drei Worte passen zur klassischen Recovery-Definition. Sie entsprechen auch zentralen Teilen des international wichtigsten Recovery-Modells, dem CHIME-Modell:

- Hoffnung = Hope
- Macht = Empowerment
- Sinn = Meaning

Verbundenheit (Connectedness) und Identität (Identity) bilden den umgebenden Rahmen — Beziehungen und Selbstbild als Boden, auf dem Hoffnung, Macht und Sinn wachsen können.

Du musst nicht alle drei gleichzeitig spüren. Manchmal ist nur Hoffnung da, manchmal nur Sinn. Manchmal beginnt es mit Macht — mit einer einzigen Entscheidung, die du selbst triffst. Das ist genug. Recovery ist keine Liste zum Abhaken.
:::

:::standard-quiz{id=q-2-std}
- q: "Was meint 'Macht' in dieser Lesart?"
  type: multiple-choice
  options:
    - text: "Macht über andere ausüben."
      correct: false
    - text: "Selbstbefähigung — das Recht, über das eigene Leben mitzuentscheiden."
      correct: true
      explanation: "'Macht' meint hier Empowerment im positiven Sinn."
    - text: "Medizinische Befugnisse."
      correct: false

- q: "Wer hat die Trias „Hoffnung — Macht — Sinn" eingeführt?"
  type: multiple-choice
  options:
    - text: "Patricia Deegan"
      correct: false
    - text: "Amering und Schmolke (2006)"
      correct: true
      explanation: "In der Schweizer Fachzeitschrift Managed Care."
    - text: "Die WHO"
      correct: false
- q: "Was meinen die drei Wörter ‚Hoffnung – Macht – Sinn‘?"
  type: multiple-choice
  options:
    - text: "Drei Therapieformen."
      correct: false
    - text: "Drei Säulen, die Genesung tragen: Hoffnung trägt, Macht heisst Selbstbestimmung, Sinn macht Leben tragbar."
      correct: true
      explanation: "Diese drei zusammen sind das Herzstück recovery-orientierter Praxis."
    - text: "Drei Medikamente."
      correct: false

:::

:::standard-flashcards{id=f-2-std}
- front: "Hoffnung — Macht — Sinn"
  back: "Die deutsche Lesart von Recovery (Amering und Schmolke 2006). Entspricht Hope, Empowerment, Meaning im CHIME-Modell."
- front: "Macht im Recovery-Sinn"
  back: "Selbstbefähigung — das Recht, über das eigene Leben mitzuentscheiden. Nicht Macht über andere."
- front: "Hoffnung im Recovery-Sinn"
  back: "Der Glaube, dass dein Leben mehr sein kann als die Erkrankung. Ein Selbstgefühl, das auch ohne Symptomfreiheit Bestand hat."
:::


# 3. Was Recovery NICHT ist – sechs Mythen
{#kap-3 reading_time=5}

Recovery wird im Alltag oft missverstanden.

## Mythos 1: Recovery heisst, dass alle Symptome weg sein müssen

Falsch. Auch Menschen mit anhaltenden Symptomen können Recovery erleben [^anthony1993] [^deegan1996] [^andresen2003]. Persönliche Genesung kann mit Symptomen koexistieren.

## Mythos 2: Recovery heisst, einfach positiv zu denken

Falsch. Recovery ist kein Aufruf zu Optimismus auf Knopfdruck. Hoffnung in der Recovery-Forschung meint eine realistische, oft trotzige Überzeugung, dass Veränderung möglich ist [^slade2013] [^schrank2012].

## Mythos 3: Recovery heisst, ohne Medikamente oder Therapie auszukommen

Falsch. Recovery ist keine Anti-Medizin-Bewegung. Es bedeutet, dass DU mitentscheidest, was hilft [^deegandrake2006] [^slade2017sdm]. Amering und Schmolke pointieren das so: Die Akzeptanz von Medikamenten oder einer bestimmten Diagnose sollte nicht die alleinige Voraussetzung für psychosoziale Unterstützung sein [^ameringschmolke2006].

## Mythos 4: Recovery ist ein gerader, vorhersagbarer Weg

Falsch. Andresen, Oades und Caputi [^andresen2003] und viele andere zeigen: Recovery verläuft fast nie linear. Rückschritte gehören dazu und sind nicht das Ende, sondern Teil des Weges.

## Mythos 5: Wer nicht „gesund" wird, ist selbst schuld

Falsch. Recovery ist kein Leistungskonzept und kein moralisches Urteil. Der Weg hängt von vielen Faktoren ab – von Beziehungen, Versorgung, sozioökonomischen Bedingungen, Traumata, Zufällen [^leboutillier2011].

## Mythos 6: Eine psychische Erkrankung ist „unheilbar" – „chronisch"

Falsch und schädlich. Längsschnittstudien wie die Vermont-Studie [^harding1987] und neuere Reviews [^lally2017] zeigen: Genesung – auch von schweren Diagnosen – ist regelhaft möglich.

Amering und Schmolke warnen ausdrücklich vor solchen Festschreibungen [^ameringschmolke2012]: Sätze wie „Sie sind zu krank für eine Gesprächstherapie" oder das gegenteilige „Alles wird wieder wie früher sein" seien aus ihrer Sicht nicht nur falsch, sondern – wörtlich – „brandgefährlich". Vorhersagen dieser Art entziehen Menschen den eigenen Spielraum, bevor sie ihn überhaupt nutzen können.

Heinz Katschnig hat dafür ein eindringliches Bild gefunden: Hoffnungslosigkeit – von aussen kommuniziert und oft nach innen übernommen – sei die heimtückischste Form der Ketten in der Psychiatrie. Sie ist deshalb so wirksam, weil sie nicht von aussen sichtbar ist [^ameringschmolke2012].

:::reflection{id=2 title="Welcher Mythos hat dich berührt?"}
- Welcher dieser sechs Mythen war für dich selbst lange Realität?
- Wer hat dir diesen Mythos vermittelt – Familie, Schule, Medien, das psychiatrische System?
- Was wäre anders, wenn du diesen Mythos heute loslässt?
:::

:::easy{reading_time=2}
Es gibt viele falsche Ideen über Recovery. Sechs davon kommen oft vor:

1. **Falsch:** Alle Symptome müssen weg sein. → Recovery geht auch mit Symptomen.
2. **Falsch:** Du musst positiv denken. → Keine Pflicht zur guten Laune.
3. **Falsch:** Keine Medikamente erlaubt. → Du entscheidest mit, was hilft.
4. **Falsch:** Der Weg ist gerade. → Rückschritte gehören dazu.
5. **Falsch:** Wer nicht gesund wird, ist schuld. → Niemand ist schuld.
6. **Falsch:** Manche sind „unheilbar". → Genesung ist auch nach schweren Erkrankungen möglich.
:::

:::quiz{id=q-3}
- q: "Welche Aussage ist richtig?"
  type: multiple-choice
  options:
    - text: "Recovery bedeutet, alle Symptome müssen verschwinden."
      correct: false
    - text: "Recovery kann auch mit anhaltenden Symptomen funktionieren."
      correct: true
      explanation: "Die zentrale Aussage von Anthony 1993 und vieler Folgestudien."
    - text: "Recovery ist nur bei leichten Krankheiten möglich."
      correct: false

- q: "Wahr oder falsch: Recovery bedeutet, keine Medikamente zu nehmen."
  type: true-false
  correct: false
  explanation: "Recovery ist keine Anti-Medizin-Bewegung. Du entscheidest gemeinsam mit Fachpersonen, was hilft."

- q: "Was sagen Längsschnittstudien wie Harding (1987) und Lally (2017) über schwere Diagnosen?"
  type: multiple-choice
  options:
    - text: "Sie sind unheilbar."
      correct: false
    - text: "Genesung ist auch nach schweren Verläufen regelhaft möglich."
      correct: true
      explanation: "Das ist die Grundlage für Amerings 'Ende der Unheilbarkeit'."
:::

:::flashcards{id=f-3}
- front: "Der grösste Recovery-Mythos"
  back: "Recovery heisst nicht: alle Symptome weg. Recovery heisst: ein gutes Leben – auch mit Schwierigkeiten."
- front: "Linearität – falsch"
  back: "Recovery ist nicht linear. Rückschritte gehören dazu und sind kein Versagen."
- front: "'Unheilbar' – falsch"
  back: "Längsschnittstudien (Harding 1987, Lally 2017) zeigen: auch nach schweren Erkrankungen ist Genesung regelhaft möglich."
- front: "'Brandgefährlich'"
  back: "Amering & Schmolke (2012) über Prognosen wie 'Sie sind zu krank für Gesprächstherapie' – solche Festschreibungen rauben Spielraum."
:::

:::standard{reading_time=2}
Über Recovery kursieren viele falsche Bilder. Sechs davon begegnen einem im Alltag besonders oft — und alle sechs sind falsch.

- **„Recovery heisst, dass alle Symptome weg sein müssen."** Stimmt nicht. Auch Menschen mit anhaltenden Symptomen können ein erfülltes Leben führen. Persönliche Genesung kann mit Symptomen koexistieren.
- **„Recovery heisst, immer positiv zu denken."** Falsch. Recovery ist kein Aufruf zum Optimismus auf Knopfdruck. Hoffnung in der Recovery-Forschung ist eine realistische, oft trotzige Überzeugung — keine erzwungene gute Laune.
- **„Recovery heisst, ohne Medikamente auszukommen."** Falsch. Recovery ist keine Anti-Medizin-Bewegung. Es bedeutet, dass DU mitentscheidest, was hilft — und was nicht.
- **„Recovery ist ein gerader, vorhersagbarer Weg."** Falsch. Recovery verläuft fast nie linear. Rückschritte gehören dazu. Sie sind kein Versagen, sondern Teil des Weges.
- **„Wer nicht gesund wird, ist selbst schuld."** Falsch. Recovery ist kein Leistungskonzept und kein moralisches Urteil. Der Weg hängt von vielen Faktoren ab: Beziehungen, Versorgung, sozioökonomischen Bedingungen, Trauma, Zufall.
- **„Schwere psychische Erkrankungen sind unheilbar."** Falsch — und gefährlich. Längsschnittstudien zeigen seit Jahrzehnten: Genesung ist auch nach schweren Diagnosen regelhaft möglich.

Amering und Schmolke nennen Sätze wie „Sie sind zu krank für eine Gesprächstherapie" oder „Es wird wieder wie früher" sogar „brandgefährlich". Solche Vorhersagen rauben dir den Spielraum, bevor du ihn überhaupt nutzen kannst.

Hoffnungslosigkeit, die von aussen kommuniziert und nach innen übernommen wird — das sind die heimtückischsten Ketten in der Psychiatrie. Genau weil sie unsichtbar sind.
:::

:::standard-quiz{id=q-3-std}
- q: "Welche Aussage ist richtig?"
  type: multiple-choice
  options:
    - text: "Recovery bedeutet, dass alle Symptome verschwinden müssen."
      correct: false
    - text: "Recovery kann auch mit anhaltenden Symptomen funktionieren."
      correct: true
      explanation: "Das ist die zentrale Aussage seit Anthony 1993."
    - text: "Recovery ist nur bei leichten Krankheiten möglich."
      correct: false

- q: "Wer ist schuld, wenn Recovery schwer fällt?"
  type: multiple-choice
  options:
    - text: "Du selbst — du strengst dich nicht genug an."
      correct: false
    - text: "Niemand. Recovery ist kein Wettbewerb und kein moralisches Urteil."
      correct: true
      explanation: "Der Weg hängt von vielen Faktoren ab — nicht von deiner Willenskraft allein."

- q: "Was sagen Längsschnittstudien über „unheilbare" Diagnosen?"
  type: multiple-choice
  options:
    - text: "Unheilbar bleibt unheilbar."
      correct: false
    - text: "Genesung ist auch nach schweren Verläufen regelhaft möglich."
      correct: true
      explanation: "Vermont-Studie (Harding 1987), aktuelle Meta-Analysen (Lally 2017)."
:::

:::standard-flashcards{id=f-3-std}
- front: "Der grösste Recovery-Mythos"
  back: "„Alle Symptome müssen weg sein." — Stimmt nicht. Recovery heisst, ein gutes Leben führen, auch mit Schwierigkeiten."
- front: "Linearität — falsch"
  back: "Recovery verläuft fast nie linear. Rückschritte gehören dazu und sind kein Versagen."
- front: "„Unheilbar" — falsch"
  back: "Längsschnittstudien zeigen: Auch nach schweren Erkrankungen ist Genesung regelhaft möglich."
- front: "„Brandgefährlich""
  back: "Amering und Schmolke über Prognosen wie „Sie sind zu krank für Therapie" — solche Festschreibungen rauben Spielraum."
:::


# 4. Geschichte der Recovery-Bewegung
{#kap-4 reading_time=6}

## Die Stimmen der Betroffenen – 1970er und 1980er

Die Recovery-Bewegung ist nicht in einem Forschungsinstitut entstanden. Sie begann in den 1970er-Jahren in Nordamerika, in den Initiativen ehemaliger psychiatrischer Patient:innen – dem sogenannten Ex-Patient- oder Survivor-Movement [^chamberlin1978].

Eine der zentralen Stimmen ist Patricia Deegan. Mit 17 erhielt sie die Diagnose Schizophrenie und hörte von einem Arzt, sie werde nie ein normales Leben führen. Heute ist sie promovierte Psychologin, Forscherin und international anerkannte Recovery-Pionierin [^deegan1988] [^deegan1996].

Patricia Deegan hat zwei Kerngedanken formuliert, die seither die internationale Recovery-Bewegung prägen [^deegan1996]:

- Recovery sei kein Endpunkt und keine blosse Stabilisierung, sondern eine Transformation – ein Weg, auf dem man die eigenen Grenzen anerkennt und gleichzeitig neue Möglichkeiten entdeckt.
- Menschen mit psychischen Erkrankungen seien keine passiven Empfänger:innen von Hilfe, sondern handlungsfähige Subjekte, die im eigenen Tun ihre Situation verändern können.

## Dorothea Buck, Trialog und Stimmenhörer

Im deutschsprachigen Raum hat Dorothea Buck einen vergleichbaren Weg geebnet. Selbst NS-Zwangssterilisierte und mehrfach in der Psychiatrie behandelt, hat sie ein Leben lang für eine humane Psychiatrie gekämpft [^buck1990].

1989 entstand in Hamburg auf Initiative von Thomas Bock das erste trialogische Psychoseseminar – ein Format, in dem Betroffene, Angehörige und Fachpersonen auf Augenhöhe sprechen [^bockpriebe2005]. 1992 gründete sich der Bundesverband Psychiatrie-Erfahrener (BPE). Der internationale Hearing-Voices-Verbund ist seit den 1990er-Jahren in Deutschland, Österreich und der Schweiz aktiv [^hvn].

## Die Verwissenschaftlichung – 1990er und 2000er

William Anthony lieferte mit einem Schlüsselartikel von 1993 die wissenschaftliche Definition [^anthony1993]. Andresen, Oades und Caputi entwickelten in Australien das Fünf-Phasen-Modell psychologischer Genesung [^andresen2003].

## Vom Konzept zum System – ab 2007

2007 startete in Grossbritannien das Programm ImROC (Implementing Recovery through Organisational Change). Es hat seither Hunderte von Versorgungsdiensten in der Transformation zu recovery-orientierter Praxis begleitet [^imroc] [^perkins2012].

In den USA wurde Recovery 2006 zur offiziellen Leitlinie der nationalen Gesundheitsbehörde SAMHSA. Die UN-Behindertenrechtskonvention verankerte ein selbstbestimmungsorientiertes Menschenrechtsverständnis [^uncrpd2006]. Die WHO veröffentlichte 2019 die QualityRights-Initiative [^who2019] und 2021 die Leitlinie „Guidance on Community Mental Health Services" [^who2021].

## Der deutschsprachige Raum

In Österreich haben Amering und Schmolke 2006 mit dem Artikel „Hoffnung – Macht – Sinn" [^ameringschmolke2006] und 2012 mit dem Buch „Recovery. Das Ende der Unheilbarkeit" [^ameringschmolke2012] einen Wendepunkt markiert. In Deutschland hat Andreas Knuf gemeinsam mit Ulrich Seibert bereits 2004 „Selbstbefähigung fördern" vorgelegt [^knufseibert2004]; sein „Recovery und Empowerment" liegt heute in 2. Auflage vor [^knuf2026].

EX-IN (Experienced Involvement) wurde ab 2005 in Bremen entwickelt – inspiriert durch Dorothea Buck und ein EU-gefördertes Leonardo-da-Vinci-Projekt [^utschakowski2009]. Seit 2011 wird EX-IN durch den Verein EX-IN Deutschland e.V. koordiniert [^exin_de]. Eine deutsche RCT zu Peer-Support belegte die Wirksamkeit [^mahlke2017].

In der Schweiz trägt die Stiftung Pro Mente Sana das Recovery-Konzept in die Versorgung [^promentesana]. Recovery Colleges bestehen heute u.a. in Bern, in der Ostschweiz, in Genf, in St.Gallen und in Zürich [^rcbern]. Wissenschaftlich verankert wurde die Recovery-Orientierung in der Schweizer Psychiatrie unter anderem durch Rössler [^roessler2004].

:::easy{reading_time=2}
Recovery ist nicht im Krankenhaus erfunden worden. Recovery ist von Betroffenen erfunden worden.

In Amerika begannen Patientinnen und Patienten in den 1970er Jahren, Bücher zu schreiben. Sie sagten: Wir sind mehr als unsere Krankheit.

Eine bekannte Stimme ist Patricia Deegan. Sie bekam mit 17 die Diagnose Schizophrenie. Heute ist sie Doktor und hilft anderen.

In Deutschland war Dorothea Buck wichtig. Sie kämpfte für eine bessere Psychiatrie.

Heute ist Recovery weltweit anerkannt – auch von der WHO.
:::

:::quiz{id=q-4}
- q: "Wer prägte die Recovery-Bewegung am Anfang?"
  type: multiple-choice
  options:
    - text: "Die Pharmaindustrie."
      correct: false
    - text: "Menschen mit eigener Psychiatrieerfahrung."
      correct: true
      explanation: "Die Bewegung entstand in den USA in den 1970ern aus dem Survivor-Movement."
    - text: "Krankenhausverwaltungen."
      correct: false

- q: "Wer ist Patricia Deegan?"
  type: multiple-choice
  options:
    - text: "Eine Ärztin ohne eigene Erfahrung."
      correct: false
    - text: "Eine Recovery-Pionierin mit eigener Schizophrenie-Diagnose."
      correct: true
      explanation: "Mit 17 diagnostiziert. Heute promovierte Psychologin und international anerkannte Stimme."
    - text: "Eine Schweizer Pflegeforscherin."
      correct: false
- q: "Aus welcher Bewegung sind viele Impulse der Recovery-Bewegung gekommen?"
  type: multiple-choice
  options:
    - text: "Aus der Pharmaforschung der 1990er-Jahre."
      correct: false
    - text: "Aus der Selbsthilfe- und Psychiatrie-Erfahrenen-Bewegung der 1970er/80er."
      correct: true
      explanation: "Betroffene haben Recovery zuerst gelebt und benannt – nicht das Versorgungssystem."
    - text: "Aus der internationalen WHO-Forschung."
      correct: false

:::

:::flashcards{id=f-4}
- front: "Patricia Deegan"
  back: "Mit 17 Diagnose Schizophrenie, heute promovierte Psychologin. Prägende Stimme der internationalen Recovery-Bewegung."
- front: "Dorothea Buck"
  back: "Deutsche Pionierin, NS-Zwangssterilisierte. Kämpfte ein Leben lang für eine humane Psychiatrie. Inspirierte EX-IN."
- front: "Survivor-Movement"
  back: "Bewegung ehemaliger psychiatrischer Patient:innen in den USA der 1970er. Wurzel der Recovery-Bewegung."
- front: "ImROC"
  back: "Implementing Recovery through Organisational Change. Britisches Programm seit 2007, das Versorgungsdienste in der Transformation zu recovery-orientierter Praxis begleitet."
:::

:::standard{reading_time=2}
Recovery ist nicht im Hörsaal entstanden und nicht im Behandlungszimmer. Recovery ist auf der Strasse entstanden — in den Initiativen ehemaliger Patient:innen, die sich weigerten, sich auf ihre Diagnose reduzieren zu lassen.

Die Bewegung begann in den 1970er-Jahren in Nordamerika, im sogenannten Survivor-Movement. Eine ihrer wichtigsten Stimmen ist Patricia Deegan. Mit 17 erhielt sie die Diagnose Schizophrenie. Ein Arzt sagte ihr, sie werde nie ein normales Leben führen. Heute ist sie promovierte Psychologin und eine der einflussreichsten Recovery-Pionierinnen weltweit.

Im deutschsprachigen Raum war Dorothea Buck eine vergleichbare Stimme. Selbst während des Nationalsozialismus zwangssterilisiert und mehrfach in der Psychiatrie behandelt, hat sie ein Leben lang für eine humane Psychiatrie gekämpft. 1989 entstand in Hamburg auf Initiative von Thomas Bock das erste trialogische Psychoseseminar — ein Format, in dem Betroffene, Angehörige und Fachpersonen auf Augenhöhe sprechen.

Wichtige Stationen seither:

- **1993** — William Anthony liefert die wissenschaftliche Definition von Recovery.
- **2003** — Australische Forscher beschreiben fünf Phasen der Genesung.
- **2007** — In Grossbritannien startet das Programm ImROC, das Versorgungsdienste auf Recovery-Orientierung umstellt.
- **2011** — Das CHIME-Modell wird publiziert und wird zum internationalen Standard.
- **2021** — Die WHO veröffentlicht ihre Leitlinie für menschenrechtsbasierte psychische Gesundheitsversorgung.

In der Schweiz trägt die Stiftung Pro Mente Sana das Recovery-Konzept in die Versorgung. Recovery Colleges gibt es heute in Bern, in der Ostschweiz, in Genf, in St.Gallen und in Zürich. In Deutschland hat EX-IN — Experienced Involvement — die Genesungsbegleitung als Beruf etabliert.

Recovery ist also längst keine Aussenseiter-Idee mehr. Es ist gelebte Praxis von Tausenden.
:::

:::standard-quiz{id=q-4-std}
- q: "Wer hat die Recovery-Bewegung am Anfang geprägt?"
  type: multiple-choice
  options:
    - text: "Die Pharmaindustrie."
      correct: false
    - text: "Menschen mit eigener Psychiatrie-Erfahrung."
      correct: true
      explanation: "Die Bewegung entstand in den 1970er-Jahren aus dem Survivor-Movement."
    - text: "Krankenhausverwaltungen."
      correct: false

- q: "Wer ist Patricia Deegan?"
  type: multiple-choice
  options:
    - text: "Eine Ärztin ohne eigene Erfahrung."
      correct: false
    - text: "Eine Recovery-Pionierin mit eigener Schizophrenie-Diagnose, heute promovierte Psychologin."
      correct: true
      explanation: "Mit 17 diagnostiziert, heute internationale Stimme der Recovery-Bewegung."

- q: "Was ist EX-IN?"
  type: multiple-choice
  options:
    - text: "Eine Medikamentengruppe."
      correct: false
    - text: "Experienced Involvement — Genesungsbegleitung als anerkannter Beruf."
      correct: true
      explanation: "Ab 2005 in Bremen entwickelt, inspiriert von Dorothea Buck."
:::

:::standard-flashcards{id=f-4-std}
- front: "Wo entstand Recovery?"
  back: "Nicht im Hörsaal. In den Initiativen ehemaliger psychiatrischer Patient:innen — dem Survivor-Movement der 1970er-Jahre in Nordamerika."
- front: "Patricia Deegan"
  back: "Mit 17 Diagnose Schizophrenie, heute promovierte Psychologin. Eine der einflussreichsten Stimmen der Recovery-Bewegung."
- front: "Trialog"
  back: "Format, in dem Betroffene, Angehörige und Fachpersonen auf Augenhöhe sprechen. 1989 in Hamburg entstanden (Thomas Bock)."
- front: "Recovery Colleges in der Schweiz"
  back: "Bern, Ostschweiz, Genf, St.Gallen, Zürich. Lernorte für Recovery — offen für alle."
:::


# 5. CHIME und CHIME-D
{#kap-5 reading_time=6}

Im Jahr 2011 hat ein Forschungsteam um Mary Leamy und Mike Slade am King's College London 97 wissenschaftliche Artikel und 87 weitere Berichte über Genesungsverläufe systematisch ausgewertet [^leamy2011]. Sie wollten wissen: Was beschreiben Menschen immer wieder, wenn sie ihren Weg durch eine psychische Erkrankung schildern?

Heraus kamen fünf Prozesse, deren englische Anfangsbuchstaben das Wort CHIME ergeben – das englische Wort für Glockenklang.

:::table{name="CHIME"}
| Buchstabe | Prozess | Was er bedeutet |
|-----------|---------|-----------------|
| **C** | Connectedness · Verbundenheit | Beziehungen, Peer-Kontakte, Familie, Zugehörigkeit, Gemeinschaft |
| **H** | Hope and Optimism · Hoffnung | Glaube an Veränderung, Motivation, Vertrauen in den Prozess, Vorbilder |
| **I** | Identity · Identität | Wer bin ich jenseits der Diagnose? Positives Selbstbild, Selbstwert |
| **M** | Meaning and Purpose · Sinn | Lebenssinn, Werte, Rollen, Ziele, ggf. Spiritualität |
| **E** | Empowerment · Selbstwirksamkeit | Verantwortung übernehmen, Entscheiden, Stärken nutzen |
:::

CHIME ist heute das weltweit einflussreichste Recovery-Modell. Bird et al. bestätigten in einer Validierungsstudie die Anwendbarkeit des Frameworks [^bird2014]. Es liegt der britischen REFOCUS-Studie zugrunde, einem cluster-randomisierten Trial [^slade2015refocus].

CHIME ist kein Stufenmodell und keine Checkliste. Es beschreibt fünf Themen, die sich überlagern. Manchmal steht eines im Vordergrund, manchmal ein anderes. Im deutschsprachigen Raum lässt sich CHIME gut mit der Lesart „Hoffnung – Macht – Sinn" [^ameringschmolke2006] verbinden.

## CHIME-D – die sechste Dimension: Schwierigkeiten

Eine wichtige Weiterentwicklung des Modells ist CHIME-D. Stuart, Tansey und Quayle haben in einer systematischen best-fit-Synthese qualitativer Recovery-Literatur festgestellt, dass im ursprünglichen CHIME-Framework eine Dimension fehlt, die in den Erfahrungsberichten regelmässig auftaucht: die ausdrückliche Anerkennung von Schwierigkeiten (Difficulties) – Trauma, Verlust, Stigmatisierung und Krankheitsfolgen [^stuart2017].

Sie haben das Modell deshalb um den Buchstaben D ergänzt:

- **C** – Connectedness · Verbundenheit
- **H** – Hope · Hoffnung
- **I** – Identity · Identität
- **M** – Meaning · Sinn
- **E** – Empowerment · Selbstwirksamkeit
- **D** – Difficulties · Schwierigkeiten: Trauma, Verlust, Stigma und Krankheitsfolgen ausdrücklich anerkennen

Untersuchungen zeigen, dass im Durchschnitt rund 54 % des Inhalts von Recovery-Erzählungen auf erlebte Schwierigkeiten entfallen [^stuart2017]. CHIME-D mahnt deshalb: Recovery-Orientierung darf nicht in toxischen Optimismus kippen. Sie muss Raum lassen für Schmerz, für Trauer, für das, was wirklich war und ist – und parallel den Blick auf Ressourcen und Veränderung halten.

Aktuelle Forschung validiert CHIME-D als robusten Bezugsrahmen recovery-orientierter Versorgung [^vanweeghel2024] [^hancock2025].

:::info{type=note title="Warum CHIME-D für dieses Workbook wichtig ist"}
Recovery-Konzepte werden gelegentlich kritisiert, weil sie Leid kleinreden oder eine „Pflicht zur Hoffnung" erzeugen können.

CHIME-D nimmt diese Kritik ernst: Genesung darf nicht heissen, dass das Schwere keinen Platz mehr hat.

Im digitalen Workbook bedeutet das: Raum für Schmerz UND für Hoffnung. Für Verluste UND für Ziele. Für das, was war, UND für das, was werden darf.
:::

:::reflection{id=3 title="Wo stehst du im CHIME?"}
- Welcher Buchstabe (C, H, I, M, E) spricht dich gerade am meisten an?
- Welcher fühlt sich gerade am schwersten an?
- Wenn du an die letzten zwei Wochen denkst: Wo gab es einen kleinen Lichtblick – und welchem Buchstaben würdest du ihn zuordnen?
:::

:::easy{reading_time=2}
Forscher haben 2011 fünf wichtige Themen bei Recovery gefunden. Die englischen Anfangsbuchstaben ergeben das Wort CHIME (englisch für Glockenklang):

- **C** – Connectedness · Verbundenheit
- **H** – Hope · Hoffnung
- **I** – Identity · Identität
- **M** – Meaning · Sinn
- **E** – Empowerment · Selbstwirksamkeit

Später kam noch ein Buchstabe dazu:

- **D** – Difficulties · Schwierigkeiten

Das D ist wichtig. Recovery soll Schweres nicht klein machen. Schmerz und Trauer dürfen Platz haben.
:::

:::quiz{id=q-5}
- q: "Wofür steht das 'D' in CHIME-D?"
  type: multiple-choice
  options:
    - text: "Diagnose"
      correct: false
    - text: "Difficulties – Schwierigkeiten (Trauma, Verlust, Stigma)"
      correct: true
      explanation: "Stuart, Tansey & Quayle (2017) haben gezeigt, dass diese Dimension im ursprünglichen CHIME fehlte."
    - text: "Depression"
      correct: false

- q: "Welcher Buchstabe steht für 'Verbundenheit'?"
  type: multiple-choice
  options:
    - text: "C – Connectedness"
      correct: true
    - text: "I – Identity"
      correct: false
    - text: "E – Empowerment"
      correct: false

- q: "Ist CHIME eine Liste zum Abhaken?"
  type: true-false
  correct: false
  explanation: "Nein – CHIME beschreibt fünf Themen, die sich überlagern. Manchmal steht eines im Vordergrund, manchmal ein anderes."
:::

:::flashcards{id=f-5}
- front: "CHIME"
  back: "Connectedness · Hope · Identity · Meaning · Empowerment. Fünf Recovery-Prozesse (Leamy et al. 2011)."
- front: "Das D in CHIME-D"
  back: "Difficulties – Schwierigkeiten, Trauma, Verlust, Stigma, Krankheitsfolgen. Recovery darf das Schwere nicht ausblenden (Stuart et al. 2017)."
- front: "Connectedness"
  back: "Verbundenheit. Beziehungen, Peer-Kontakte, Familie, Zugehörigkeit, Gemeinschaft."
- front: "Empowerment"
  back: "Selbstwirksamkeit. Verantwortung übernehmen, Entscheidungen treffen, Stärken nutzen."
:::

:::standard{reading_time=2}
2011 hat ein Forschungsteam am King's College London über 180 Studien und Berichte ausgewertet und gefragt: Was beschreiben Menschen immer wieder, wenn sie ihren Recovery-Weg schildern? Heraus kamen fünf Prozesse — und ihre englischen Anfangsbuchstaben ergeben das Wort CHIME (englisch für Glockenklang).

- **C — Connectedness · Verbundenheit:** Beziehungen, Familie, Peer-Kontakte, Zugehörigkeit, Gemeinschaft.
- **H — Hope · Hoffnung:** Der Glaube an Veränderung. Vorbilder. Vertrauen in den Prozess.
- **I — Identity · Identität:** Wer bin ich jenseits der Diagnose? Ein positives Selbstbild jenseits der Patient:innenrolle.
- **M — Meaning · Sinn:** Werte, Ziele, Rollen, manchmal Spiritualität.
- **E — Empowerment · Selbstwirksamkeit:** Verantwortung übernehmen. Entscheidungen treffen. Stärken nutzen.

CHIME ist heute das international wichtigste Recovery-Modell. Aber es ist keine Checkliste und keine Treppe. Es beschreibt fünf Themen, die sich überlagern. Manchmal steht eines im Vordergrund, manchmal ein anderes.

## Das D in CHIME-D

2017 haben Forscher festgestellt: Im CHIME-Modell fehlt etwas. Etwas, das in Recovery-Erzählungen immer wieder vorkommt — die ausdrückliche Anerkennung von Schwierigkeiten. Sie haben deshalb einen Buchstaben ergänzt:

- **D — Difficulties · Schwierigkeiten:** Trauma, Verlust, Stigma, Krankheitsfolgen.

Untersuchungen zeigen: Rund 54 % des Inhalts von Recovery-Erzählungen handelt von erlebten Schwierigkeiten. CHIME-D mahnt deshalb: Recovery darf nicht in einen erzwungenen Optimismus kippen. Es muss Raum für Schmerz, Trauer und das, was wirklich war, geben — parallel zum Blick auf Ressourcen.

Für dich heisst das: Im Workbook hat das Schwere Platz. Genauso wie die Hoffnung.
:::

:::standard-quiz{id=q-5-std}
- q: "Wofür steht das „D" in CHIME-D?"
  type: multiple-choice
  options:
    - text: "Diagnose"
      correct: false
    - text: "Difficulties — Schwierigkeiten (Trauma, Verlust, Stigma)"
      correct: true
      explanation: "Stuart, Tansey und Quayle haben 2017 gezeigt, dass diese Dimension im ursprünglichen CHIME fehlte."
    - text: "Depression"
      correct: false

- q: "Welcher Buchstabe steht für „Verbundenheit"?"
  type: multiple-choice
  options:
    - text: "C — Connectedness"
      correct: true
    - text: "I — Identity"
      correct: false
    - text: "E — Empowerment"
      correct: false

- q: "Ist CHIME eine Liste zum Abhaken?"
  type: true-false
  correct: false
  explanation: "Nein — CHIME beschreibt fünf Themen, die sich überlagern. Manchmal steht eines im Vordergrund, manchmal ein anderes."
:::

:::standard-flashcards{id=f-5-std}
- front: "CHIME"
  back: "Connectedness · Hope · Identity · Meaning · Empowerment. Fünf Recovery-Prozesse (Leamy et al. 2011)."
- front: "Das D in CHIME-D"
  back: "Difficulties — Schwierigkeiten, Trauma, Verlust, Stigma. Recovery darf das Schwere nicht ausblenden."
- front: "CHIME — Liste oder nicht?"
  back: "Keine Liste zum Abhaken. Fünf Themen, die sich überlagern. Mal steht eines im Vordergrund, mal ein anderes."
- front: "Empowerment"
  back: "Selbstwirksamkeit. Verantwortung übernehmen, Entscheidungen treffen, Stärken nutzen."
:::


# 6. Fünf Phasen der Genesung
{#kap-6 reading_time=3}

Wenn CHIME die fünf inneren Prozesse beschreibt, dann beschreibt das Modell von Andresen, Oades und Caputi die typischen Phasen des Weges [^andresen2003] [^andresen2006].

:::table{name="Phasen-der-Genesung"}
| Phase | Deutsch | Was im Inneren passiert |
|-------|---------|------------------------|
| **1. Moratorium** | Stillstand | Gefühl von Verlust, Hoffnungslosigkeit, Rückzug |
| **2. Awareness** | Erwachen | Erste Hoffnung, Erkennen: nicht alles ist verloren |
| **3. Preparation** | Vorbereitung | Inventur machen: was kann ich, was brauche ich? |
| **4. Rebuilding** | Wiederaufbau | Aktiv neue Ziele, Rollen, Beziehungen aufbauen |
| **5. Growth** | Wachstum | Ein erfülltes Leben – mit oder ohne Restsymptome |
:::

Die Phasen sind nicht starr. Es ist normal, mehrmals durch dieselbe Phase zu gehen. Es ist auch normal, sich gleichzeitig in zwei Phasen zu erleben – in einem Lebensbereich im Wachstum, in einem anderen wieder im Moratorium. Vier zentrale Aufgaben durchziehen alle Phasen [^andresen2003]: Hoffnung finden, Identität neu aufbauen, Sinn finden, Verantwortung übernehmen.

:::easy{reading_time=1}
Recovery hat oft Phasen. Drei Forscher aus Australien haben fünf Phasen beschrieben:

1. **Stillstand** – Alles fühlt sich schwer und hoffnungslos an.
2. **Erwachen** – Du merkst: Vielleicht geht doch noch was.
3. **Vorbereitung** – Du schaust, was du kannst.
4. **Wiederaufbau** – Du machst neue Pläne.
5. **Wachstum** – Du lebst dein Leben. Mit Symptomen oder ohne.

Du darfst zwischen den Phasen springen. Es ist nicht wie eine Treppe. Es ist eher wie eine Spirale.
:::

:::quiz{id=q-6}
- q: "Wie viele Phasen beschreiben Andresen, Oades und Caputi?"
  type: multiple-choice
  options:
    - text: "Drei"
      correct: false
    - text: "Fünf"
      correct: true
    - text: "Sieben"
      correct: false

- q: "Sind die Phasen linear?"
  type: true-false
  correct: false
  explanation: "Nein. Du kannst springen, mehrfach durch dieselbe Phase gehen oder gleichzeitig in zwei Phasen sein."
- q: "Sind die fünf Phasen nach Andresen linear durchzulaufen?"
  type: true-false
  correct: false
  explanation: "Nein – Phasen können sich überlappen, wiederholen oder rückwärts laufen. Sie sind eine Landkarte, kein Stundenplan."

:::

:::flashcards{id=f-6}
- front: "Moratorium"
  back: "Erste Phase: Stillstand. Gefühl von Verlust, Hoffnungslosigkeit, Rückzug."
- front: "Awareness"
  back: "Phase des Erwachens. Erste Hoffnung. Erkennen: nicht alles ist verloren."
- front: "Growth"
  back: "Wachstum – ein erfülltes Leben mit oder ohne Restsymptome."
- front: "Vier Aufgaben aller Phasen"
  back: "Hoffnung finden · Identität neu aufbauen · Sinn finden · Verantwortung übernehmen."
:::

:::standard{reading_time=2}
Recovery verläuft selten in einer geraden Linie. Drei australische Forschende — Andresen, Oades und Caputi — haben aus vielen Lebensgeschichten fünf typische Phasen herausgearbeitet:

- **Moratorium (Stillstand)** — Alles wirkt schwer. Du fühlst dich verloren, ziehst dich zurück. Hoffnung ist fern.
- **Awareness (Erwachen)** — Ein erster Funke: vielleicht ist doch nicht alles vorbei.
- **Preparation (Vorbereitung)** — Du machst Inventur. Was kann ich? Was brauche ich? Wer ist da?
- **Rebuilding (Wiederaufbau)** — Du baust Schritt für Schritt neue Rollen, Ziele und Beziehungen auf.
- **Growth (Wachstum)** — Du lebst ein Leben, das sich gut anfühlt — mit oder ohne Restsymptome.

Wichtig zu wissen: Diese Phasen sind keine Treppe. Es ist normal, mehrmals durch dieselbe Phase zu gehen. Es ist normal, in einem Lebensbereich schon im Wachstum zu sein und in einem anderen wieder im Stillstand. Rückschritte gehören dazu. Sie bedeuten nicht, dass du versagt hast.

Vier Aufgaben ziehen sich durch alle Phasen: Hoffnung finden, Identität neu aufbauen, Sinn finden, Verantwortung übernehmen.

Frag dich: In welcher Phase fühlst du dich gerade — vielleicht in mehreren gleichzeitig?
:::

:::standard-quiz{id=q-6-std}
- q: "Sind die fünf Phasen wie eine Treppe — eine nach der anderen?"
  type: multiple-choice
  options:
    - text: "Ja, du musst sie der Reihe nach durchgehen."
      correct: false
      explanation: "Nein — die Phasen sind nicht starr. Rückschritte und Sprünge sind normal."
    - text: "Nein. Du kannst springen, wiederholen oder gleichzeitig in mehreren sein."
      correct: true
      explanation: "Genau. Recovery ist eher eine Spirale als eine Treppe."

- q: "Welche Phase beschreibt den Stillstand am Anfang?"
  type: multiple-choice
  options:
    - text: "Growth"
      correct: false
    - text: "Moratorium"
      correct: true
      explanation: "Moratorium = Phase der Hoffnungslosigkeit und des Rückzugs."
    - text: "Awareness"
      correct: false
- q: "Geht man die fünf Phasen der Reihe nach durch?"
  type: true-false
  correct: false
  explanation: "Nein. Du kannst hin- und herspringen, eine Phase wiederholen, manchmal mehrere gleichzeitig erleben."

:::

:::standard-flashcards{id=f-6-std}
- front: "Fünf Phasen"
  back: "Moratorium · Awareness · Preparation · Rebuilding · Growth. Sie sind keine Treppe — Sprünge und Rückschritte sind normal."
- front: "Vier Aufgaben in allen Phasen"
  back: "Hoffnung finden · Identität neu aufbauen · Sinn finden · Verantwortung übernehmen."
- front: "Rückschritt — was heisst das?"
  back: "Kein Versagen. Sondern ein normaler Teil des Weges. Recovery ist eine Spirale, keine gerade Linie."
:::


# 7. Drei Ebenen von Genesung
{#kap-7 reading_time=3}

In der Forschung werden drei Ebenen unterschieden [^slade2009]:

- **Klinische Genesung**: Symptome werden geringer, eine Diagnose verliert an Bedeutung.
- **Funktionale Genesung**: Du kannst wieder Dinge tun, die dir wichtig sind: arbeiten, lernen, Beziehungen pflegen, dich um deinen Alltag kümmern.
- **Persönliche Genesung**: Du findest neuen Sinn, ein neues Selbstbild, neue Hoffnung. Du erlebst dich als jemand, der seinem Leben Richtung geben kann – auch wenn nicht alles „weg" ist.

Die drei Ebenen können sich gegenseitig stärken, müssen aber nicht in dieser Reihenfolge passieren.

:::reflection{id=4 title="Welche Ebene ist dir wichtig?"}
- Wenn du dir in einem Jahr ein Leben vorstellst, das sich gut anfühlt: Was wäre anders?
- Welche der drei Ebenen – klinisch, funktional, persönlich – fühlt sich für dich gerade am wichtigsten an?
- Gibt es etwas, das du früher gern getan hast, das du wieder ins Leben holen willst?
:::

:::easy{reading_time=1}
Es gibt drei Arten von Genesung:

- **Klinisch:** Die Symptome werden weniger.
- **Funktional:** Du kannst wieder Dinge tun: arbeiten, lernen, Beziehungen pflegen.
- **Persönlich:** Du erlebst Sinn und Hoffnung. Du bestimmst dein Leben mit.

Die wichtigste für Recovery ist die persönliche Genesung.
:::

:::quiz{id=q-7}
- q: "Welche Ebene ist die Kernbedeutung von Recovery?"
  type: multiple-choice
  options:
    - text: "Klinische Genesung"
      correct: false
    - text: "Funktionale Genesung"
      correct: false
    - text: "Persönliche Genesung"
      correct: true
      explanation: "Das ist die zentrale Lesart der Recovery-Bewegung."

- q: "Müssen die drei Ebenen in einer bestimmten Reihenfolge passieren?"
  type: true-false
  correct: false
  explanation: "Nein – sie können sich gegenseitig stärken, müssen aber nicht in fester Reihenfolge passieren."
- q: "Welche drei Ebenen von Genesung werden unterschieden?"
  type: multiple-choice
  options:
    - text: "Akut, chronisch, geheilt."
      correct: false
    - text: "Klinisch, funktional, persönlich."
      correct: true
      explanation: "Drei Ebenen, die sich ergänzen, aber unabhängig laufen können (Slade 2009)."
    - text: "Stationär, ambulant, häuslich."
      correct: false

:::

:::flashcards{id=f-7}
- front: "Drei Ebenen von Genesung"
  back: "Klinisch (Symptome) · funktional (Alltag, Arbeit, Beziehungen) · persönlich (Sinn, Hoffnung, Selbstbestimmung)."
- front: "Persönliche Genesung – die wichtigste"
  back: "Das Herz der Recovery-Bewegung. Möglich auch dann, wenn klinische Symptome bleiben."
- front: "Klinische, funktionale, persönliche Genesung"
  back: "Drei Ebenen, die sich ergänzen, aber unabhängig laufen können. Du musst nicht alle gleichzeitig schaffen."
:::

:::standard{reading_time=2}
In der Recovery-Forschung wird oft zwischen drei Ebenen der Genesung unterschieden — und es lohnt sich, sie auseinanderzuhalten:

- **Klinische Genesung** — Die Symptome werden weniger oder verschwinden. Die Diagnose verliert an Gewicht. Das ist die Lesart der klassischen Medizin.
- **Funktionale Genesung** — Du kannst wieder Dinge tun, die dir wichtig sind. Arbeiten oder lernen. Einen Haushalt führen. Freundschaften pflegen. Deinen Alltag gestalten.
- **Persönliche Genesung** — Du findest neuen Sinn. Du baust eine Identität jenseits der Diagnose. Du erlebst dich als jemand, der seinem Leben Richtung geben darf. Hoffnung kehrt zurück.

Die drei Ebenen können sich gegenseitig tragen. Sie müssen aber nicht in dieser Reihenfolge passieren. Manche Menschen erleben persönliche Genesung lange, bevor Symptome leiser werden. Andere bauen erst die Funktion auf — und merken erst dann, dass sich auch innen etwas verschiebt.

Die Recovery-Bewegung legt den Schwerpunkt klar auf die persönliche Genesung. Denn sie ist auch dann möglich, wenn klinische Symptome bleiben. Du musst nicht „geheilt" sein, um ein gutes Leben zu führen.

Frag dich: Welche der drei Ebenen fühlt sich gerade für dich am wichtigsten an?
:::

:::standard-quiz{id=q-7-std}
- q: "Welche Ebene steht im Zentrum der Recovery-Bewegung?"
  type: multiple-choice
  options:
    - text: "Klinische Genesung — nur wenn die Symptome weg sind, gilt es."
      correct: false
    - text: "Persönliche Genesung — Sinn, Hoffnung, Identität jenseits der Diagnose."
      correct: true
      explanation: "Genau. Persönliche Genesung ist auch möglich, wenn Symptome bleiben."
    - text: "Funktionale Genesung — Hauptsache du funktionierst."
      correct: false

- q: "Müssen die drei Ebenen der Reihe nach kommen?"
  type: multiple-choice
  options:
    - text: "Ja — erst klinisch, dann funktional, dann persönlich."
      correct: false
    - text: "Nein. Sie können sich tragen, müssen aber nicht in fester Reihenfolge passieren."
      correct: true
- q: "Können die drei Ebenen unabhängig voneinander laufen?"
  type: true-false
  correct: true
  explanation: "Ja. Du kannst klinisch noch Symptome haben und persönlich schon viel verändert haben — oder umgekehrt."

:::

:::standard-flashcards{id=f-7-std}
- front: "Drei Ebenen von Genesung"
  back: "Klinisch (Symptome) · funktional (Alltag, Arbeit, Beziehungen) · persönlich (Sinn, Hoffnung, Identität)."
- front: "Persönliche Genesung"
  back: "Das Herz von Recovery. Ein gutes Leben führen — auch wenn Symptome bleiben."
- front: "Reihenfolge?"
  back: "Keine feste. Manche Menschen erleben innere Genesung lange vor klinischer Symptomreduktion."
:::


# 8. Hoffnung – das Herzstück
{#kap-8 reading_time=4}

Hoffnung ist in fast allen Recovery-Modellen das erste, was genannt wird [^leamy2011] [^andresen2003] [^schrank2012]. Schrank und Kolleg:innen haben nachgewiesen: Hoffnung sagt unabhängig von Symptomen die persönliche Genesung voraus [^schrank2012].

Hoffnung in der Recovery-Forschung ist nicht naive Zuversicht. Sie ist auch nicht das Gegenteil von Realismus. Sie ist eine konkrete, oft leise Überzeugung, dass dein Leben mehr sein kann als der schlimmste Tag, an dem du gerade bist [^slade2013].

Mike Slade fasst diesen Befund so zusammen: Hoffnung sei jene Energie, die einen Genesungsprozess überhaupt erst in Gang setze – ohne sie beginne nichts [^slade2013].

## Hoffnung als geliehene Ressource

Eine zentrale Idee der Recovery-Bewegung lautet: Hoffnung muss nicht von dir selbst kommen. Sie kann von anderen vorgehalten und geliehen werden, bis du sie wieder spüren kannst [^russinova1999] [^deegan1996] [^schrank2012]. Genau das tun gute Peers, gute Fachpersonen, gute Angehörige: „Wenn du gerade keine Hoffnung haben kannst, halten wir sie für dich."

Für Fachpersonen ist Hoffnung deshalb keine Charaktereigenschaft, sondern eine professionelle Kompetenz – die „hope-inspiring competence" nach Russinova [^russinova1999].

:::reflection{id=5 title="Quellen der Hoffnung"}
- Was hat dir früher Hoffnung gegeben – ein Mensch, ein Ort, eine Aktivität, ein Gedanke?
- Wer in deinem Umfeld hält gerade die Hoffnung für dich mit, wenn du sie selbst nicht spürst?
- Gibt es einen kleinen Schritt, der dich heute in Richtung Hoffnung bewegen könnte?
:::

:::easy{reading_time=1}
Hoffnung ist das Herz von Recovery.

Hoffnung heisst nicht: Du bist immer fröhlich. Hoffnung heisst: Du glaubst, dass dein Leben mehr sein kann als der schlimmste Tag.

Das Wichtigste: Du musst die Hoffnung nicht allein haben. Andere können sie für dich halten. Bis du sie wieder spürst.

Ein guter Satz: „Wenn du gerade keine Hoffnung hast, halten wir sie für dich."
:::

:::quiz{id=q-8}
- q: "Was sagt die Forschung (Schrank et al. 2012) über Hoffnung?"
  type: multiple-choice
  options:
    - text: "Hoffnung sagt unabhängig von Symptomen die persönliche Genesung voraus."
      correct: true
      explanation: "Hoffnung ist ein Prädiktor – auch dann, wenn Symptome bestehen bleiben."
    - text: "Hoffnung wirkt nur bei leichten Erkrankungen."
      correct: false
    - text: "Hoffnung muss man immer selbst aufbringen."
      correct: false

- q: "Was meint 'geliehene Hoffnung'?"
  type: multiple-choice
  options:
    - text: "Hoffnung von der Familie kaufen."
      correct: false
    - text: "Andere halten die Hoffnung für dich, bis du sie selbst spürst."
      correct: true
      explanation: "Eine Kernidee der Recovery-Bewegung."
- q: "Welche Funktion hat Hoffnung in Recovery-Prozessen?"
  type: multiple-choice
  options:
    - text: "Sie ist ein netter Bonus, aber nicht entscheidend."
      correct: false
    - text: "Sie sagt – unabhängig von Symptomen – persönliche Genesung voraus."
      correct: true
      explanation: "Hoffnung wirkt als ‚Motor‘ und ist ein eigenständiger Prädiktor (Schrank 2012)."
    - text: "Sie ist nur dann wichtig, wenn die Diagnose leicht ist."
      correct: false

:::

:::flashcards{id=f-8}
- front: "Geliehene Hoffnung"
  back: "Wenn du keine Hoffnung haben kannst, halten Peers, Fachpersonen oder Angehörige sie für dich – bis du sie wieder spürst."
- front: "Hoffnung in der Recovery-Forschung"
  back: "Nicht naive Zuversicht – sondern leise, oft trotzige Überzeugung, dass dein Leben mehr sein kann als der schlimmste Tag."
- front: "Hope-inspiring competence"
  back: "Russinova 1999: Hoffnung zu inspirieren ist eine professionelle Kompetenz, keine Charaktereigenschaft."
:::

:::standard{reading_time=2}
Hoffnung ist in fast allen Recovery-Modellen das erste, was genannt wird. Und das ist kein Zufall.

Mike Slade fasst die Forschung so zusammen: **„Hoffnung ist die Energie, die den Genesungsprozess überhaupt erst in Gang setzt — ohne sie beginnt nichts."**

Hoffnung in der Recovery-Lesart ist nicht naive Zuversicht. Sie ist auch nicht das Gegenteil von Realismus. Sie ist eine leise, manchmal trotzige Überzeugung: dass dein Leben mehr sein kann als der schlimmste Tag, an dem du gerade bist.

## Hoffnung kann geliehen werden

Eine der wichtigsten Ideen der Recovery-Bewegung lautet: **Hoffnung muss nicht von dir selbst kommen.** Sie kann von anderen vorgehalten und geliehen werden, bis du sie wieder spüren kannst.

Genau das tun gute Peers, gute Fachpersonen, gute Angehörige. Sie sagen — manchmal in Worten, manchmal nur durch ihre Anwesenheit:

> „Wenn du gerade keine Hoffnung haben kannst, halten wir sie für dich. So lange, wie es braucht."

Das ist keine Therapietechnik. Das ist Haltung. Für Fachpersonen ist Hoffnung deshalb nicht eine Frage der eigenen Stimmung, sondern eine professionelle Kompetenz — die *hope-inspiring competence* (Russinova).

Frag dich:

- Wer in deinem Leben hält gerade Hoffnung für dich mit?
- Wer könnte es tun, wenn du fragst?
- Und für wen hältst du vielleicht selbst die Hoffnung — ohne es zu merken?
:::

:::standard-quiz{id=q-8-std}
- q: "Was meint „geliehene Hoffnung“?"
  type: multiple-choice
  options:
    - text: "Du musst dir die Hoffnung selbst erarbeiten."
      correct: false
    - text: "Andere halten die Hoffnung für dich, bis du sie selbst wieder spürst."
      correct: true
      explanation: "Eine Kernidee der Recovery-Bewegung. Hoffnung ist nicht nur eine Einzelleistung."

- q: "Ist Hoffnung in der Recovery-Forschung dasselbe wie naive Zuversicht?"
  type: multiple-choice
  options:
    - text: "Ja, einfach Optimismus."
      correct: false
    - text: "Nein. Eine leise, oft trotzige Überzeugung, dass dein Leben mehr sein kann als der schlimmste Tag."
      correct: true
- q: "Wofür ist Hoffnung in der Genesung gut?"
  type: multiple-choice
  options:
    - text: "Sie ist eine nette Begleiterscheinung — sonst nichts."
      correct: false
    - text: "Sie ist der Motor: Forschung zeigt, sie sagt Genesung voraus — unabhängig von den Symptomen."
      correct: true
      explanation: "Hoffnung trägt, auch wenn Symptome bleiben (Schrank 2012)."
    - text: "Sie hilft nur bei leichten Erkrankungen."
      correct: false

:::

:::standard-flashcards{id=f-8-std}
- front: "Hoffnung in Recovery"
  back: "Nicht naive Zuversicht — sondern die leise Überzeugung, dass dein Leben mehr sein kann als der schlimmste Tag."
- front: "Geliehene Hoffnung"
  back: "Wenn du keine Hoffnung haben kannst, halten Peers, Fachpersonen oder Angehörige sie für dich — bis du sie wieder spürst."
- front: "Slade-Zitat"
  back: "„Hoffnung ist die Energie, die den Genesungsprozess überhaupt erst in Gang setzt — ohne sie beginnt nichts.“"
:::


# 9. Empowerment und Selbstbestimmung
{#kap-9 reading_time=4}

Das Wort Empowerment ist eng mit Recovery verbunden. Es kommt aus den Bürgerrechts- und Emanzipationsbewegungen des 20. Jahrhunderts [^herriger2014] [^knufseibert2004] [^knuf2026].

In den 1980er-Jahren wurde das Konzept auch in der psychiatrischen Versorgung aufgegriffen. Empowerment meint: Selbstbefähigung. Aktive Beteiligung. Verantwortung dort übernehmen, wo du sie tragen willst und kannst. Rogers und Kolleg:innen entwickelten dazu eine erste empirisch belegte Empowerment-Skala [^rogers1997]. Im deutschsprachigen Raum ist „Selbstbefähigung fördern" das Standardwerk [^knufseibert2004].

## Shared Decision-Making

Empowerment heisst in der Praxis vor allem eines: gemeinsame Entscheidungen statt Anweisungen. Fachpersonen entscheiden mit dir, nicht über dich [^charles1997] [^deegandrake2006]. Studien zeigen: Wer in Entscheidungen einbezogen wird, ist zufriedener und erreicht oft bessere Outcomes [^joosten2008] [^slade2017sdm].

## Personal Medicine

Pat Deegan hat den Begriff Personal Medicine geprägt: die nicht-medikamentösen Dinge, die einem Menschen helfen, gesund zu bleiben – Schlaf, ein Hund, ein bestimmter Spaziergang, das Singen im Chor, ein abendlicher Anruf. Personal Medicine wird in der Recovery-Bewegung als gleichwertig zu Medikamenten verstanden und in Behandlungsvereinbarungen aufgenommen [^deegan2005].

## Vorausverfügungen und Joint Crisis Plans

Ein konkretes Empowerment-Instrument sind Behandlungsvereinbarungen oder Joint Crisis Plans – Vereinbarungen, in denen du im stabilen Zustand festhältst, was im Krisenfall geschehen soll und was nicht. Henderson und Kolleg:innen konnten in einer RCT zeigen, dass Joint Crisis Plans Zwangseinweisungen signifikant reduzieren [^henderson2004].

:::easy{reading_time=2}
Empowerment heisst: Du darfst entscheiden. Du hast Macht über dein eigenes Leben.

In der Psychiatrie heisst das oft: Wir entscheiden gemeinsam. Nicht: Der Arzt entscheidet allein.

Du darfst Fragen stellen. Du darfst Nein sagen. Du darfst eine zweite Meinung holen.

Es gibt auch „Personal Medicine". Das sind Dinge ausser Medikamenten, die helfen: ein Hund, ein Spaziergang, ein Chor, ein guter Freund. Diese Dinge sind genauso wichtig wie Medikamente.
:::

:::quiz{id=q-9}
- q: "Was heisst 'Shared Decision-Making'?"
  type: multiple-choice
  options:
    - text: "Der Arzt entscheidet allein."
      correct: false
    - text: "Fachperson und Betroffene entscheiden gemeinsam."
      correct: true
      explanation: "Charles, Gafni & Whelan 1997 haben den Begriff etabliert."
    - text: "Die Familie entscheidet."
      correct: false

- q: "Was bedeutet 'Personal Medicine' (Pat Deegan)?"
  type: multiple-choice
  options:
    - text: "Personalisierte Medikamente nach DNA-Profil."
      correct: false
    - text: "Nicht-medikamentöse Dinge, die einem Menschen helfen, gesund zu bleiben."
      correct: true
      explanation: "Hund, Spaziergang, Chor, Singen – in Behandlungsvereinbarungen integrierbar."

- q: "Was zeigt die RCT zu Joint Crisis Plans (Henderson 2004)?"
  type: multiple-choice
  options:
    - text: "Sie haben keinen messbaren Effekt."
      correct: false
    - text: "Sie reduzieren Zwangseinweisungen signifikant."
      correct: true
:::

:::flashcards{id=f-9}
- front: "Empowerment"
  back: "Selbstbefähigung. Aktive Beteiligung. Verantwortung dort übernehmen, wo du sie tragen willst und kannst."
- front: "Personal Medicine"
  back: "Pat Deegan: nicht-medikamentöse Dinge, die dich gesund halten – Schlaf, Bewegung, Beziehungen, Hobbys. Gleichwertig zu Medikamenten."
- front: "Joint Crisis Plan"
  back: "Vereinbarung im stabilen Zustand: was soll im Krisenfall passieren, was nicht? RCT (Henderson 2004) zeigt: reduziert Zwangseinweisungen."
- front: "Shared Decision-Making"
  back: "Fachperson und Betroffene entscheiden gemeinsam – nicht Anweisung und Compliance."
:::

:::standard{reading_time=2}
Empowerment heisst Selbstbefähigung. Du darfst entscheiden — über dein Leben und deine Behandlung.

Das klingt selbstverständlich, ist es im Alltag der Psychiatrie aber oft nicht. Lange Zeit galt: Die Fachperson entscheidet, die Patientin oder der Patient befolgt. Recovery verschiebt diesen Punkt deutlich — hin zu **gemeinsamer Verantwortung**.

## Drei konkrete Werkzeuge

**Shared Decision-Making** — Entscheidungen werden zusammen getroffen. Du fragst, was empfohlen wird. Du sagst, was zu dir und deinem Leben passt. Studien zeigen: Wer einbezogen wird, ist zufriedener und erreicht bessere Ergebnisse.

**Personal Medicine** (Pat Deegan) — Nicht nur Medikamente helfen. Auch das, was dich als Person gesund hält: ein Hund, ein Spaziergang am Morgen, ein Chor, ein abendlicher Anruf, der Garten, die Wanderung. In der Recovery-Bewegung ist Personal Medicine **gleichwertig** zu medizinischer Behandlung — und gehört in jede Behandlungsvereinbarung.

**Joint Crisis Plan** — Eine Vereinbarung, die du im stabilen Zustand mit deinem Team festhältst: Was soll im Krisenfall passieren? Was nicht? Wen will ich informiert haben? Welche Medikamente vertrage ich, welche nicht? Eine RCT (Henderson 2004) zeigt: solche Pläne reduzieren Zwangseinweisungen signifikant.

## Was Empowerment nicht heisst

Empowerment heisst nicht: alles allein schaffen. Es heisst nicht: gegen die Fachpersonen sein. Es heisst: deine Stimme zählt — neben der Fachstimme. Beides zusammen ist mehr.

Frag dich: Wo darfst du gerade schon entscheiden? Wo möchtest du mehr Stimme bekommen?
:::

:::standard-quiz{id=q-9-std}
- q: "Was meint Shared Decision-Making?"
  type: multiple-choice
  options:
    - text: "Du entscheidest allein, der Arzt schweigt."
      correct: false
    - text: "Fachperson und du entscheidet gemeinsam."
      correct: true
      explanation: "Genau. Deine Stimme zählt neben der Fachstimme."

- q: "Was ist „Personal Medicine“ nach Pat Deegan?"
  type: multiple-choice
  options:
    - text: "Personalisierte Medikamente nach DNA-Test."
      correct: false
    - text: "Die nicht-medikamentösen Dinge, die dich gesund halten — Hund, Spaziergang, Chor, Freund:in."
      correct: true
      explanation: "Gleichwertig zu Medikamenten und Teil jeder Behandlungsvereinbarung."

- q: "Was bringt ein Joint Crisis Plan?"
  type: multiple-choice
  options:
    - text: "Er ist eine Pflichtübung, die kaum wirkt."
      correct: false
    - text: "Er reduziert Zwangseinweisungen — belegt durch eine RCT (Henderson 2004)."
      correct: true
:::

:::standard-flashcards{id=f-9-std}
- front: "Empowerment"
  back: "Selbstbefähigung. Du darfst entscheiden — über dein Leben und deine Behandlung. Nicht: alles allein schaffen."
- front: "Shared Decision-Making"
  back: "Fachperson und du entscheidet gemeinsam. Bessere Outcomes, höhere Zufriedenheit."
- front: "Personal Medicine"
  back: "Pat Deegan: die nicht-medikamentösen Dinge, die dich gesund halten. Gleichwertig zu Medikamenten."
- front: "Joint Crisis Plan"
  back: "Vereinbarung im stabilen Zustand: was soll im Krisenfall passieren, was nicht? Reduziert Zwangseinweisungen."
:::


# 10. Salutogenese – gesund bleiben
{#kap-10 reading_time=3}

Recovery-orientiertes Denken steht eng mit dem Konzept der Salutogenese [^antonovsky1979] [^antonovsky1997]. Statt zu fragen „Was macht Menschen krank?" (Pathogenese) fragt die Salutogenese „Was hält Menschen gesund?"

Antonovsky identifizierte das Kohärenzgefühl (Sense of Coherence) als zentralen Schutzfaktor – die Fähigkeit, das eigene Leben als verständlich, handhabbar und sinnvoll zu erleben. Die drei Komponenten korrespondieren auffallend mit den CHIME-Prozessen und mit der Trias „Hoffnung – Macht – Sinn".

Im deutschsprachigen Raum hat Schmolke salutogenetische Konzepte für Menschen mit Schizophrenie-Diagnose nutzbar gemacht [^schmolke2001]. Salutogenese und Recovery werden in der DACH-Literatur regelmässig als zwei Seiten derselben Haltung beschrieben – ressourcen- statt defizitorientiert [^knuf2026] [^ameringschmolke2012].

:::info{type=note title="Antonovskys drei Komponenten des Kohärenzgefühls"}
- **Verstehbarkeit** (Comprehensibility): Mein Leben ergibt einen Zusammenhang.
- **Handhabbarkeit** (Manageability): Ich kann mit dem umgehen, was kommt – allein oder mit Hilfe.
- **Sinnhaftigkeit** (Meaningfulness): Es lohnt sich, mich zu engagieren.
:::

:::easy{reading_time=1}
Die Medizin fragt oft: Was macht Menschen krank? Das nennt sich Pathogenese.

Salutogenese fragt anders: Was hält Menschen gesund?

Der Forscher Aaron Antonovsky fand drei wichtige Punkte:

- Ich verstehe mein Leben.
- Ich kann mit schweren Sachen umgehen – allein oder mit Hilfe.
- Mein Leben hat einen Sinn.

Wenn diese drei Punkte da sind, bist du stärker gegen Belastungen.
:::

:::quiz{id=q-10}
- q: "Was ist der Unterschied zwischen Pathogenese und Salutogenese?"
  type: multiple-choice
  options:
    - text: "Pathogenese ist neuer."
      correct: false
    - text: "Pathogenese fragt nach Krankheit – Salutogenese nach Gesundheit."
      correct: true
    - text: "Pathogenese gilt nur für körperliche Krankheiten."
      correct: false

- q: "Wer hat das Konzept der Salutogenese entwickelt?"
  type: multiple-choice
  options:
    - text: "Sigmund Freud"
      correct: false
    - text: "Aaron Antonovsky"
      correct: true
- q: "Was beschreibt Salutogenese?"
  type: multiple-choice
  options:
    - text: "Die Suche nach den Ursachen von Krankheit."
      correct: false
    - text: "Die Frage, was Menschen gesund hält – auch unter Belastung."
      correct: true
      explanation: "Antonovsky verschiebt den Blick von Pathogenese zu Salutogenese: was schützt, was trägt."
    - text: "Eine spezielle Form der Pflanzenheilkunde."
      correct: false

:::

:::flashcards{id=f-10}
- front: "Salutogenese"
  back: "Was hält Menschen gesund? (Antonovsky 1979). Gegenstück zur Pathogenese – die Frage 'Was macht krank?'."
- front: "Kohärenzgefühl"
  back: "Verstehbarkeit · Handhabbarkeit · Sinnhaftigkeit. Schutzfaktor nach Antonovsky."
- front: "Salutogenese (Antonovsky)"
  back: "Frage verschiebt sich: nicht ‚was macht krank?‘, sondern ‚was hält gesund?‘ Verstehbarkeit, Handhabbarkeit, Sinnhaftigkeit."
:::

:::standard{reading_time=2}
Die klassische Medizin fragt: **„Was macht Menschen krank?"** Das nennt sich Pathogenese. Sie sucht nach Ursachen, Risiken, Defiziten.

Der Soziologe Aaron Antonovsky hat die Frage umgedreht. Er fragte: **„Was hält Menschen gesund — auch unter Belastung?"** Das nennt sich Salutogenese.

## Das Kohärenzgefühl

Antonovsky beobachtete: Menschen, die schwere Lebenskrisen gut überstehen, teilen oft eine bestimmte innere Haltung. Er nannte sie das **Kohärenzgefühl** und beschrieb drei Komponenten:

- **Verstehbarkeit** — Mein Leben ergibt einen Zusammenhang. Was mir passiert, lässt sich einordnen.
- **Handhabbarkeit** — Ich kann mit dem umgehen, was kommt. Allein oder mit Hilfe.
- **Sinnhaftigkeit** — Es lohnt sich, mich zu engagieren. Mein Leben hat eine Richtung.

Diese drei Komponenten klingen vertraut. Sie stehen erstaunlich nahe bei den fünf CHIME-Prozessen und bei der Trias „Hoffnung — Macht — Sinn".

## Warum das wichtig ist

Salutogenese und Recovery teilen dieselbe Grundhaltung: ressourcen- statt defizitorientiert. Du wirst nicht als Bündel von Symptomen gesehen, sondern als Mensch mit Stärken, Erfahrungen, Beziehungen — auch dann, wenn vieles schwer ist.

In der DACH-Literatur (Schmolke; Amering & Schmolke) werden Salutogenese und Recovery deshalb oft als zwei Seiten derselben Medaille beschrieben.

Frag dich: Was hält dich gesund — auch heute, auch jetzt?
:::

:::standard-quiz{id=q-10-std}
- q: "Was fragt die Salutogenese — im Gegensatz zur Pathogenese?"
  type: multiple-choice
  options:
    - text: "Was macht Menschen krank?"
      correct: false
      explanation: "Das ist die Pathogenese. Salutogenese fragt umgekehrt."
    - text: "Was hält Menschen gesund — auch unter Belastung?"
      correct: true
      explanation: "Die Frage, die Antonovsky stellte."

- q: "Welche drei Komponenten gehören zum Kohärenzgefühl?"
  type: multiple-choice
  options:
    - text: "Verstehbarkeit · Handhabbarkeit · Sinnhaftigkeit"
      correct: true
      explanation: "Antonovskys Drei-Klang. Erstaunlich nahe an „Hoffnung – Macht – Sinn“."
    - text: "Hoffnung · Glaube · Liebe"
      correct: false
- q: "Was fragt die Salutogenese?"
  type: multiple-choice
  options:
    - text: "‚Was macht krank?‘"
      correct: false
    - text: "‚Was hält gesund — auch unter Belastung?‘"
      correct: true
      explanation: "Antonovsky verschiebt den Blick: Schutzfaktoren, Kohärenzgefühl, Ressourcen."
    - text: "‚Welches Medikament wirkt?‘"
      correct: false

:::

:::standard-flashcards{id=f-10-std}
- front: "Salutogenese"
  back: "Was hält Menschen gesund? (Antonovsky). Gegenstück zur Pathogenese — der Frage „Was macht krank?“."
- front: "Kohärenzgefühl"
  back: "Verstehbarkeit · Handhabbarkeit · Sinnhaftigkeit. Schutzfaktor bei Belastung."
- front: "Salutogenese und Recovery"
  back: "Zwei Seiten derselben Haltung: ressourcen- statt defizitorientiert. Du bist mehr als deine Symptome."
:::


# 11. Stigma und Selbststigma
{#kap-11 reading_time=4}

Stigma ist eine der grössten Recovery-Barrieren. Goffman hat den Begriff für die Sozialwissenschaften geprägt: Stigma ist ein Merkmal, das eine Person in den Augen anderer entwertet [^goffman1963].

## Drei Ebenen von Stigma

Corrigan und Watson unterscheiden drei Ebenen [^corrigan2002]:

- **Öffentliches Stigma**: Vorurteile in der Gesellschaft („psychisch Kranke sind gefährlich").
- **Strukturelles Stigma**: Benachteiligung in Gesetzen, Arbeitsmarkt, Versicherungswesen.
- **Selbststigma** (internalisiertes Stigma): Du übernimmst die negativen Bilder als Bild über dich selbst.

## Selbststigma – wenn der Sturm nach innen schlägt

Corrigan und Kolleg:innen beschreiben Selbststigma als regressiven Prozess in vier Schritten: wahrnehmen, zustimmen, anwenden, leiden – mit Folgen für Selbstwert, Selbstwirksamkeit und Verlauf der Erkrankung [^corrigan2011].

Die gute Nachricht: Selbststigma ist veränderbar. Systematische Reviews zeigen, dass psychosoziale Interventionen – vor allem in Gruppen – internalisiertes Stigma reduzieren können [^yanos2015] [^buechter2023]. Auch Anti-Stigma-Programme mit direktem Kontakt zu Menschen mit Lebenserfahrung zeigen in Meta-Analysen kleine bis mittlere Effekte [^corrigan2012] [^thornicroft2016].

In den Erfahrungsberichten von Genesungsbegleiter:innen [^utschakowski2009] taucht ein Gedanke immer wieder auf: Nicht die Diagnose selbst ist das eigentlich Verletzende. Es ist das, was die Diagnose in den Augen anderer aus einem Menschen macht – und was die betroffene Person dann über sich selbst zu glauben beginnt. Selbststigma entsteht genau an dieser Naht.

:::reflection{id=6 title="Innere Stimmen"}
- Welche Sätze sagst du dir selbst über deine Erkrankung oder die Erkrankung der Person, die du begleitest?
- Welche dieser Sätze sind eigentlich keine eigene Stimme, sondern übernommene Bilder von aussen?
- Welcher Satz wäre eine freundlichere Version derselben Wahrheit?
:::

:::easy{reading_time=2}
Stigma heisst: Du wirst wegen einer Sache schlecht gemacht. Zum Beispiel: weil du eine Diagnose hast.

Es gibt Stigma in drei Bereichen:

- In der Gesellschaft – Vorurteile, schlechte Worte.
- In Regeln und Gesetzen – z.B. Schwierigkeiten bei Versicherungen.
- In dir selbst – du glaubst die schlechten Sachen über dich.

Das Letzte heisst Selbststigma. Es ist gefährlich. Es macht dich klein, bevor andere es tun.

Die gute Nachricht: Selbststigma kann sich ändern. Reden hilft. Andere Menschen treffen, die dasselbe erleben, hilft auch.
:::

:::quiz{id=q-11}
- q: "Was ist Selbststigma?"
  type: multiple-choice
  options:
    - text: "Das Stigma, das andere mir machen."
      correct: false
    - text: "Wenn ich die negativen Bilder als Bild über mich selbst übernehme."
      correct: true
      explanation: "Corrigan & Watson 2002 beschreiben das als regressiven Prozess."

- q: "Welche Methode reduziert Stigma am wirksamsten?"
  type: multiple-choice
  options:
    - text: "Schweigen."
      correct: false
    - text: "Direkter Kontakt mit Menschen mit gelebter Erfahrung."
      correct: true
      explanation: "Thornicroft et al. 2016 zeigen dies in einer Meta-Analyse."

- q: "Ist Selbststigma veränderbar?"
  type: true-false
  correct: true
  explanation: "Ja – psychosoziale Interventionen, vor allem in Gruppen, reduzieren internalisiertes Stigma (Yanos 2015)."
:::

:::flashcards{id=f-11}
- front: "Drei Ebenen von Stigma"
  back: "Öffentliches Stigma · strukturelles Stigma · Selbststigma (internalisiertes Stigma)."
- front: "Selbststigma"
  back: "Wenn du die negativen gesellschaftlichen Bilder als Bild über dich selbst übernimmst. Veränderbar."
- front: "Wirksamste Anti-Stigma-Methode"
  back: "Direkter persönlicher Kontakt mit Menschen mit gelebter Erfahrung (Corrigan et al. 2012; Thornicroft et al. 2016)."
:::

:::standard{reading_time=2}
Stigma ist eine der grössten Barrieren auf dem Recovery-Weg. Der Soziologe Erving Goffman beschrieb Stigma als ein Merkmal, das eine Person in den Augen anderer entwertet.

## Drei Ebenen

Patrick Corrigan unterscheidet drei Ebenen, auf denen Stigma wirkt:

- **Öffentliches Stigma** — Vorurteile in der Gesellschaft. „Psychisch Kranke sind gefährlich." „Reiss dich zusammen."
- **Strukturelles Stigma** — Benachteiligung in Gesetzen, im Arbeitsmarkt, bei Versicherungen, bei Behörden.
- **Selbststigma** — Du übernimmst die negativen Bilder von aussen als Bild über dich selbst.

## Wenn der Sturm nach innen schlägt

Selbststigma ist besonders heimtückisch. Es macht dich klein — bevor andere es überhaupt versuchen. Corrigan beschreibt einen Prozess in vier Schritten: wahrnehmen, zustimmen, anwenden, leiden. Das Ergebnis: weniger Selbstwert, weniger Selbstwirksamkeit, oft auch ein schwierigerer Krankheitsverlauf.

In Erfahrungsberichten von Genesungsbegleiter:innen taucht ein Gedanke immer wieder auf: **Nicht die Diagnose selbst ist das eigentlich Verletzende. Verletzend ist das, was die Diagnose in den Augen anderer aus einem Menschen macht — und was die Person dann über sich selbst zu glauben beginnt.**

## Die gute Nachricht

Selbststigma ist veränderbar. Forschung zeigt: psychosoziale Interventionen — besonders in Gruppen — reduzieren internalisiertes Stigma. Am wirksamsten gegen öffentliches Stigma ist **direkter Kontakt** mit Menschen mit gelebter Erfahrung.

Du bist nicht deine Diagnose. Du bist ein Mensch mit einer Geschichte, mit Werten, mit Beziehungen, mit Fähigkeiten.

Frag dich: Welche Sätze sagst du dir selbst über deine Erkrankung — und welche davon sind eigentlich übernommene Stimmen von aussen?
:::

:::standard-quiz{id=q-11-std}
- q: "Was ist Selbststigma?"
  type: multiple-choice
  options:
    - text: "Das Stigma, das andere mir machen."
      correct: false
    - text: "Wenn ich die negativen gesellschaftlichen Bilder als Bild über mich selbst übernehme."
      correct: true
      explanation: "Corrigan & Watson 2002: ein regressiver Prozess in vier Schritten."

- q: "Was wirkt am besten gegen öffentliches Stigma?"
  type: multiple-choice
  options:
    - text: "Schweigen und Verstecken."
      correct: false
    - text: "Direkter Kontakt zwischen der Allgemeinbevölkerung und Menschen mit gelebter Erfahrung."
      correct: true
      explanation: "Thornicroft et al. 2016: Begegnung verändert Bilder."

- q: "Ist Selbststigma veränderbar?"
  type: multiple-choice
  options:
    - text: "Nein — es ist ein für allemal fest."
      correct: false
    - text: "Ja — besonders in Gruppen und durch psychosoziale Interventionen."
      correct: true
:::

:::standard-flashcards{id=f-11-std}
- front: "Drei Ebenen von Stigma"
  back: "Öffentliches Stigma · strukturelles Stigma · Selbststigma (internalisiert)."
- front: "Selbststigma"
  back: "Wenn du die negativen Bilder von aussen über dich selbst glaubst. Macht dich klein, bevor andere es tun. Veränderbar."
- front: "Was wirkt gegen Stigma?"
  back: "Direkter Kontakt zu Menschen mit gelebter Erfahrung. Reden. Gruppen. Geschichten teilen."
- front: "Du bist nicht deine Diagnose"
  back: "Du bist ein Mensch mit einer Geschichte, mit Werten, mit Beziehungen, mit Fähigkeiten."
:::


# Vom Patient zum Experten deines Lebens
{#kap-shift reading_time=8}

Wenn du lange in psychiatrischer Behandlung warst – Jahre vielleicht, oder Jahrzehnte – dann hat das etwas mit dir gemacht. Nicht nur die Krankheit. Auch die Rolle.

In der klassischen Medizin gibt es eine klare Aufgabenteilung: Die Fachperson weiss Bescheid. Die Patientin oder der Patient befolgt. Die Diagnose erklärt, was los ist. Das Medikament oder die Therapie macht wieder heil. Diese Logik funktioniert bei vielen körperlichen Erkrankungen gut. Bei seelischem Leiden stösst sie an Grenzen, die in den letzten dreissig Jahren immer deutlicher geworden sind.

## Was die lange Rolle mit dir gemacht haben kann

Vielleicht erkennst du eines oder mehreres davon wieder:

- Du hast gelernt, dich selbst durch eine Diagnose zu beschreiben. „Ich bin Bipolar." „Ich bin Borderlinerin." „Ich bin ein chronischer Fall."
- Du hast gelernt, dass jemand anderes besser weiss, was gut für dich ist – die Ärztin, der Therapeut, das Behandlungsteam.
- Du hast gelernt, dass dein eigenes Gespür misstrauisch betrachtet wird – als „mangelnde Krankheitseinsicht" oder „Non-Compliance".
- Du hast gelernt zu warten – auf den nächsten Termin, das nächste Medikament, die nächste Methode, die endlich wirken soll.
- Du hast gelernt, dass Genesung etwas ist, das mit dir gemacht wird. Nicht etwas, das du machst.

Das ist keine persönliche Schwäche. Das ist eine erlernte Reaktion. In der Forschung heisst sie *erlernte Hilflosigkeit* – und sie tritt überall dort auf, wo Menschen über lange Zeit in Systemen leben, in denen sie wenig Kontrolle haben [^seligman1975].

Patricia Deegan, eine der prägendsten Stimmen der Recovery-Bewegung, hat dafür einen sehr scharfen Begriff geprägt: *spirit breaking* [^deegan1990]. Sie beschreibt damit, wie helfende Systeme manchmal das Gegenteil dessen tun, was sie sollen – wie sie das Selbstgefühl, die Eigenmächtigkeit, die Stimme von Menschen brechen, anstatt sie zu stärken. Nicht aus böser Absicht. Sondern weil die Logik des Systems es so vorsieht.

## Das Paradigma, das die Heilung blockiert

Larry Davidson und David Roe haben den Unterschied wissenschaftlich gefasst [^davidsonroe2007]. Sie sprechen von zwei sehr unterschiedlichen Bedeutungen von Recovery:

- **Recovery FROM** – Genesung VON einer Erkrankung. Das ist die medizinische Lesart: Symptome zurück, Funktion zurück, Diagnose im besten Fall hinter dir.
- **Recovery IN** – Genesung MIT einer Erkrankung. Das ist die persönliche Lesart: ein Leben führen, das dich erfüllt, auch wenn die Symptome noch da sind.

Beide sind möglich. Beide sind wertvoll. Aber sie folgen ganz unterschiedlichen Logiken. *Recovery FROM* findet im Behandlungszimmer statt – du bist passive Empfänger:in. *Recovery IN* findet in deinem Leben statt – du bist die handelnde Person.

Die niederländische Recovery-Forscherin Wilma Boevink sagt es noch zugespitzter [^boevink2017]: Für viele Menschen mit schweren psychischen Erkrankungen ist das psychiatrische System gar nicht primär ein Heilungssystem. Es ist eines von mehreren Werkzeugen auf einem längeren Weg. Wer das versteht – und beginnt, die Psychiatrie als Mittel zu nutzen statt sich als ihr Objekt zu erleben – verschiebt etwas Fundamentales.

## Wie die Verschiebung in der Praxis aussieht

Die Verschiebung passiert in kleinen Schritten. Sie hat selten einen Knall-Moment. Hier ein paar Beispiele, wie sie aussehen kann:

:::table{name="Vom-Patient-zum-Experten"}
| Aus der Patientenrolle … | … in die Expert:innen-Haltung |
|-----------------------|--------------------------|
| „Sagen Sie mir, was ich tun soll." | „Was empfehlen Sie – und was passt für mich zu meinem Leben?" |
| „Es wird nie besser." | „Heute war es schwer. Mal sehen, was die nächste Woche bringt." |
| „Mein Arzt weiss, was gut für mich ist." | „Wir entscheiden gemeinsam – und ich darf zwischendurch Fragen stellen." |
| „Ich bin meine Diagnose." | „Ich habe eine Diagnose. Sie ist nicht alles, was ich bin." |
| „Ich habe versagt." | „Ich habe gerade einen schweren Tag. Das ist Information, kein Urteil." |
| „Vielleicht nimmt mir das Team die Medikamente weg, wenn ich davon erzähle." | „Diese Nebenwirkung belastet mich. Können wir gemeinsam Alternativen prüfen?" |
| „Ich muss tapfer sein." | „Ich darf Hilfe annehmen – und ich darf entscheiden, welche." |
:::

Keine dieser Verschiebungen heisst, dass du keine Hilfe mehr brauchst. Keine bedeutet, dass du gegen Fachpersonen sein musst. Es geht nicht um Aufstand, es geht um Position.

## Warum diese Verschiebung so wichtig ist

Sie ist nicht eine Empfehlung von vielen. Sie ist die Voraussetzung dafür, dass Recovery überhaupt für dich wirksam wird:

- **Hoffnung** kann man nur in einem Selbst entwickeln, das sich überhaupt als Subjekt erlebt.
- **Persönliche Ziele** kann man nur dann verfolgen, wenn man sich als jemand erlebt, der Ziele haben darf.
- **Selbstwirksamkeit** baut sich nur dort auf, wo man Erfahrungen macht, etwas selbst zu bewirken – nicht ausschliesslich darauf zu warten, dass etwas mit einem geschieht.
- **Sinn** im Leben entsteht durch Wahl. Wer keine Wahl hat, hat schwer Sinn.

Die Forschung bestätigt das eindeutig. Roe und Davidson [^roedavidson2005] beschreiben Recovery als ein „Wiederaufsammeln der Scherben" und ein Neuschreiben der eigenen Geschichte. Aktuelle Studien zur narrativen Identitätsrekonstruktion zeigen [^chiba2019narrative]: Wer in der Recovery-Phase eine Identität jenseits der Patientenrolle (re)konstruiert, kommt deutlich weiter – auch dann, wenn Symptome bleiben.

:::info{type=note title="Was hier nicht gemeint ist"}
Die Verschiebung vom Patient-Sein zur Expert:innen-Haltung ist kein Aufruf, Medikamente abzusetzen, Behandlungen zu beenden oder allein zurechtzukommen. Sie ist kein Vorwurf an Fachpersonen.

Sie ist eine Einladung, deine eigene Stimme als Quelle zu nehmen – neben den Stimmen der Fachpersonen. Und herauszufinden, was für dich stimmt.
:::

## Aus dem Erfahrenen wird der oder die Erfahrene

Im deutschsprachigen Raum gibt es für diesen Schritt einen schönen Namen: Erfahrungsexpertin, Erfahrungsexperte. In der EX-IN-Ausbildung wird genau das systematisch entwickelt – aus Menschen mit Psychiatrieerfahrung werden über zwölf Module Begleiter:innen, die ihre eigene Erfahrung als Ressource für andere nutzbar machen [^utschakowski2009] [^exin_de].

Du musst nicht Genesungsbegleiter:in werden, um diese Verschiebung zu vollziehen. Aber die Idee ist hilfreich, auch wenn du sie nur auf dich anwendest: Deine Geschichte ist nicht etwas, das dir passiert ist und dich definiert. Sie ist etwas, das du kennst – und woraus du Wissen ziehen kannst. Wissen, das dir hilft, dich selbst und andere besser zu verstehen.

Wilma Boevink nennt das *experiential expertise* – Erfahrungsexpertise [^boevink2017] [^boevink2012]. Dein Erfahrungswissen ist nicht weniger wertvoll als das Fachwissen von Therapeut:innen. Es ist anders. Und beides zusammen ist mehr als die Summe der Teile.

## Wenn du gerade noch zögerst

Vielleicht liest du das alles und denkst: schön gesagt, aber bei mir geht das nicht mehr. Vielleicht hast du dreissig Jahre Klinikerfahrung. Vielleicht hast du den Glauben verloren. Vielleicht hat dir noch nie jemand gesagt, dass dir diese Rolle überhaupt zusteht.

Drei Dinge:

1. **Es ist nie zu spät.** Recovery-Forschung kennt keine Altersgrenze und keine Schweregrad-Grenze. Selbst Menschen, die jahrzehntelang in stationärer Versorgung gelebt haben, beschreiben Verschiebungen – manchmal genau dann, wenn sie selbst nicht mehr damit gerechnet haben [^harding1987] [^lally2017].

2. **Du musst nicht alles auf einmal tun.** Eine einzige Frage am Morgen – „Was würde ich heute brauchen?" – ist schon eine Bewegung. Eine einzige Antwort an dich selbst am Abend – „Heute war es schwer, und ich war trotzdem da" – ist auch eine Bewegung.

3. **Du brauchst Verbündete.** Niemand schafft diese Verschiebung allein. Peers, eine Selbsthilfegruppe, eine Vertrauensperson, eine Fachperson, die das Konzept lebt, ein Recovery College. Wenn dein Behandlungsteam diesen Weg nicht mitgeht, ist das nicht dein Versagen – dann hat dieses Team gerade einen blinden Fleck.

:::quote{author="Patricia Deegan, 1996" source="deegan1996" lang="en"}
We are a conspiracy of hope and we are pressing back against the strong tide of oppression which for centuries has been the legacy of those of us who are labeled with mental illness.
:::

:::quote-translation{source="deegan1996" translator="eigene Übertragung"}
Wir sind eine Verschwörung der Hoffnung. Wir stemmen uns gegen die starke Strömung der Unterdrückung, die seit Jahrhunderten das Erbe jener ist, die als psychisch krank abgestempelt werden.
:::

:::reflection{id=10 title="Deine Position"}
- An welchen Stellen erlebst du dich noch in der klassischen Patientenrolle?
- Wo gibt es Momente, in denen du dich schon als Expert:in deiner eigenen Erfahrung erlebst – auch wenn sie kurz sind?
- Welcher Satz aus der linken Spalte der Tabelle ist dir vertraut – welcher aus der rechten möchte langsam Platz bekommen?
- Wer könnte deine Mitverschwörer:in für Hoffnung sein?
:::

:::easy{reading_time=3}
Vielleicht warst du lange in Behandlung. Dann hast du wahrscheinlich etwas Bestimmtes gelernt:

- Der Arzt weiss es besser.
- Ich muss tun, was man mir sagt.
- Ich bin krank, andere helfen mir.

Das ist eine Rolle. Sie heisst Patientenrolle.

Diese Rolle hilft manchmal. Aber sie kann auch schaden. Du wirst klein. Du wartest. Du machst dich abhängig.

Recovery sagt: Du darfst aus dieser Rolle heraus. Schritt für Schritt.

Du wirst nicht zum Arzt. Aber du wirst Expert:in für dein eigenes Leben. Du kennst dich am besten. Deine Erfahrung ist Wissen.

**Diese Veränderung ist die wichtigste Veränderung in Recovery. Ohne sie geht es nicht.**

Drei Dinge zum Schluss:

- Es ist nie zu spät. Auch nach vielen Jahren in Behandlung.
- Du musst es nicht auf einmal tun. Kleine Schritte zählen.
- Du brauchst Verbündete.

:::reflection{id=shift-easy title="Frag dich selbst"}
- An welcher Stelle erlebst du dich noch in der alten Rolle?
- Wo bist du schon Expert:in für dein Leben?
:::
:::

:::quiz{id=q-shift}
- q: "Was meint die 'Patientenrolle' hier?"
  type: multiple-choice
  options:
    - text: "Eine medizinische Diagnose."
      correct: false
    - text: "Eine erlernte Haltung: passiv warten, andere wissen es besser, ich werde gesund gemacht."
      correct: true
      explanation: "Eine Rolle, keine Diagnose – und sie ist veränderbar."

- q: "Was sagt Patricia Deegan über 'spirit breaking'?"
  type: multiple-choice
  options:
    - text: "Es beschreibt einen seltenen Ausnahmefall."
      correct: false
    - text: "Helfende Systeme können das Selbstgefühl, die Stimme und die Eigenmächtigkeit brechen – meist ohne böse Absicht."
      correct: true
      explanation: "Deegan 1990 – ein scharfer, aber präziser Begriff."

- q: "Was ist der Unterschied zwischen Recovery FROM und Recovery IN?"
  type: multiple-choice
  options:
    - text: "FROM = ältere Lesart, IN = neuere."
      correct: false
    - text: "FROM = Genesung VON Krankheit (medizinisch). IN = Genesung MIT Krankheit (persönlich)."
      correct: true
      explanation: "Davidson & Roe 2007."

- q: "Stimmt es, dass diese Verschiebung nur eine von vielen Empfehlungen ist?"
  type: true-false
  correct: false
  explanation: "Nein – sie ist die Voraussetzung dafür, dass Recovery überhaupt wirksam wird."

- q: "Ab welchem Alter / nach wie vielen Jahren Behandlung ist es zu spät für diese Verschiebung?"
  type: multiple-choice
  options:
    - text: "Nach 10 Jahren."
      correct: false
    - text: "Ab 60."
      correct: false
    - text: "Nie."
      correct: true
      explanation: "Recovery-Forschung kennt keine Altersgrenze. Auch nach Jahrzehnten möglich."
:::

:::flashcards{id=f-shift}
- front: "Spirit Breaking"
  back: "Patricia Deegan (1990): wie helfende Systeme das Selbstgefühl, die Stimme und die Eigenmächtigkeit brechen – meist nicht aus böser Absicht."
- front: "Recovery FROM"
  back: "Genesung VON einer Erkrankung – medizinische Lesart. Symptome zurück, Diagnose im besten Fall hinter dir."
- front: "Recovery IN"
  back: "Genesung MIT einer Erkrankung – persönliche Lesart. Ein erfülltes Leben, auch wenn Symptome bleiben."
- front: "Patientenrolle"
  back: "Eine erlernte Haltung: passiv, abwartend, fremdbestimmt. Hilft kurzfristig, schadet langfristig. Veränderbar."
- front: "Erfahrungsexpertise (Boevink)"
  back: "Dein gelebtes Wissen ist eigenständig und gleichwertig zum Fachwissen. Du kannst es nutzen – für dich und für andere."
- front: "Conspiracy of Hope"
  back: "Patricia Deegan 1996: 'Wir sind eine Verschwörung der Hoffnung.' – Recovery als kollektives Projekt gegen historische Entmündigung."
:::

:::standard{reading_time=3}
Wenn du lange in psychiatrischer Behandlung warst — Jahre vielleicht, Jahrzehnte — dann hat das etwas mit dir gemacht. Nicht nur die Krankheit. Auch **die Rolle**.

## Was die Rolle mit dir gemacht hat

Vielleicht hast du gelernt:

- Der Arzt weiss es besser. Mein Gespür zählt weniger.
- Ich muss warten. Auf den nächsten Termin, das nächste Medikament, die nächste Methode.
- Ich bin meine Diagnose: „Ich bin Borderlinerin." „Ich bin Bipolar."
- Genesung ist etwas, das mit mir gemacht wird — nicht etwas, das ich tue.

Das ist keine persönliche Schwäche. Das ist eine **erlernte Reaktion** auf Jahre in einem System, das wenig Kontrolle zulässt.

Patricia Deegan, eine prägende Stimme der Recovery-Bewegung, hat dafür einen scharfen Begriff geprägt: **„spirit breaking"**. Helfende Systeme können — meist ohne böse Absicht — das Selbstgefühl, die Stimme, die Eigenmächtigkeit eines Menschen brechen. Nicht weil die Mitarbeitenden böse sind. Sondern weil die Logik des Systems es so vorsieht.

## Recovery FROM vs. Recovery IN

Larry Davidson und David Roe unterscheiden zwei sehr verschiedene Lesarten von Recovery:

- **Recovery FROM** — Genesung **VON** einer Erkrankung. Die medizinische Lesart: Symptome zurück, Diagnose hinter dir. Du bist passive Empfänger:in einer Behandlung.
- **Recovery IN** — Genesung **MIT** einer Erkrankung. Die persönliche Lesart: ein erfülltes Leben führen, auch wenn Symptome bleiben. Du bist die handelnde Person.

Beide sind möglich. Beide sind wertvoll. Aber sie folgen ganz unterschiedlichen Logiken. **Recovery IN ist die Voraussetzung dafür, dass Recovery überhaupt für dich wirksam werden kann.** Denn Hoffnung, Ziele, Selbstwirksamkeit, Sinn — all das entsteht nur dort, wo du dich als jemand erlebst, der wählen darf.

## Du bleibst auf Hilfe angewiesen — und doch Subjekt

Diese Verschiebung ist kein Aufruf, Medikamente abzusetzen oder Behandlung zu beenden. Es ist kein Vorwurf an Fachpersonen. Es ist eine Einladung, deine eigene Stimme als Quelle zu nehmen — **neben** den Fachstimmen.

Drei Dinge zum Schluss:

- **Es ist nie zu spät.** Auch nach Jahrzehnten Behandlung sind solche Verschiebungen möglich.
- **Es geht in kleinen Schritten.** Eine Frage am Morgen: „Was würde ich heute brauchen?" reicht für den Anfang.
- **Du brauchst Verbündete.** Peers. Eine Vertrauensperson. Ein Recovery College. Niemand schafft das allein.
:::

:::standard-quiz{id=q-shift-std}
- q: "Was meint Patricia Deegan mit „spirit breaking“?"
  type: multiple-choice
  options:
    - text: "Einen seltenen Einzelfall, der kaum vorkommt."
      correct: false
    - text: "Wie helfende Systeme das Selbstgefühl, die Stimme und die Eigenmächtigkeit brechen können — meist ohne böse Absicht."
      correct: true
      explanation: "Ein scharfer, aber präziser Begriff (Deegan 1990)."

- q: "Was ist der Unterschied zwischen Recovery FROM und Recovery IN?"
  type: multiple-choice
  options:
    - text: "FROM ist veraltet, IN ist die neue Version."
      correct: false
    - text: "FROM = Genesung VON einer Krankheit (medizinisch). IN = Genesung MIT einer Krankheit (persönlich)."
      correct: true
      explanation: "Davidson & Roe 2007. Beide sind möglich, folgen aber unterschiedlichen Logiken."

- q: "Wer ist Expert:in für dein Leben?"
  type: multiple-choice
  options:
    - text: "Dein Behandlungsteam."
      correct: false
    - text: "Du selbst — neben dem Fachwissen der Behandelnden."
      correct: true

- q: "Ab welchem Punkt ist es zu spät für diese Verschiebung?"
  type: multiple-choice
  options:
    - text: "Nach 20 Jahren Behandlung."
      correct: false
    - text: "Ab 60."
      correct: false
    - text: "Nie. Auch nach Jahrzehnten sind Verschiebungen möglich."
      correct: true
:::

:::standard-flashcards{id=f-shift-std}
- front: "Spirit Breaking (Deegan)"
  back: "Wenn helfende Systeme — meist ohne böse Absicht — das Selbstgefühl, die Stimme und die Eigenmächtigkeit eines Menschen brechen."
- front: "Recovery FROM"
  back: "Genesung VON einer Krankheit. Die medizinische Lesart: Symptome weg, Diagnose hinter dir."
- front: "Recovery IN"
  back: "Genesung MIT einer Krankheit. Die persönliche Lesart: ein erfülltes Leben, auch wenn Symptome bleiben."
- front: "Expert:in deines Lebens"
  back: "Du kennst dich am besten. Deine Erfahrung ist Wissen — neben dem Fachwissen, nicht stattdessen."
- front: "Nie zu spät"
  back: "Recovery kennt keine Altersgrenze und keine Schweregrad-Grenze. Auch nach Jahrzehnten möglich."
:::


# 12. Peer-Support, Trialog und EX-IN
{#kap-12 reading_time=5}

## Was Peer-Support ist

Peer-Support meint die Begleitung durch Menschen, die selbst psychische Krisen erlebt und durchgearbeitet haben. Im deutschsprachigen Raum: Genesungsbegleiter:innen, Erfahrungsexpert:innen, Peers oder EX-IN-Mitarbeitende [^utschakowski2009] [^exin_de].

Die Wurzeln reichen weit zurück – in die Selbsthilfetradition, in Mary Ellen Copelands WRAP-Konzept [^copeland1997], in das deutsche Trialog-Modell [^bockpriebe2005] und in die EX-IN-Initiative ab 2005 [^utschakowski2009].

## Trialog – das deutschsprachige Erbe

Der Trialog – das gleichberechtigte Gespräch zwischen Betroffenen, Angehörigen und Fachpersonen – wurde 1989 in Hamburg von Thomas Bock und Mitstreiter:innen begründet [^bockpriebe2005]. Er ist ein deutschsprachiger Beitrag zur internationalen Recovery-Bewegung und hat die DACH-Versorgung nachhaltig verändert [^vonpeter2015].

## Was die Forschung zeigt

Die Evidenzbasis für Peer-Support ist heute beträchtlich. Eine multizentrische RCT mit über 600 Teilnehmenden in vier Ländern zeigte signifikante Effekte auf Empowerment und Lebensqualität [^slade2024peer]. Aktuelle Meta-Analysen finden konsistent positive Effekte auf Selbstwirksamkeit und kleinere Effekte auf Hoffnung und Empowerment [^white2024] [^lyons2021]. Eine deutsche RCT konnte ebenfalls positive Effekte nachweisen [^mahlke2017].

Wirksamkeitsfaktoren sind: gelebte Erfahrung als Glaubwürdigkeitsanker, Hoffnung als Modell, Beziehungsgestaltung auf Augenhöhe und nicht-stigmatisierende Kommunikation [^mead2001] [^davidson2012].

Wilma Boevink bringt dieses Prinzip auf einen einfachen Punkt: Das aus der Betroffenenbewegung stammende Erfahrungswissen ist dem professionellen Fachwissen gleichwertig – und bildet die Grundlage authentischen Recovery-Wissens [^boevink2012].

:::easy{reading_time=2}
Peer-Support heisst: Menschen begleiten andere Menschen mit ähnlicher Erfahrung.

Das tut gut. Forschung zeigt: Wenn jemand „durchgekommen" ist und vor dir steht, ist das ein starkes Zeichen. Es macht Hoffnung.

Im deutschsprachigen Raum gibt es Genesungsbegleiter:innen mit einer Ausbildung (EX-IN).

Es gibt auch den Trialog – Gespräche zwischen Betroffenen, Angehörigen und Fachleuten. Auf Augenhöhe. Ohne dass eine:r wichtiger ist.

Solche Gespräche gibt es in vielen Städten in der Schweiz, in Deutschland und in Österreich.
:::

:::quiz{id=q-12}
- q: "Was bedeutet EX-IN?"
  type: multiple-choice
  options:
    - text: "Eine Diagnose."
      correct: false
    - text: "Experienced Involvement – Ausbildung für Genesungsbegleiter:innen."
      correct: true
      explanation: "Seit 2005 in Bremen entwickelt."

- q: "Wer spricht im Trialog auf Augenhöhe?"
  type: multiple-choice
  options:
    - text: "Nur Fachpersonen."
      correct: false
    - text: "Betroffene, Angehörige und Fachpersonen gemeinsam."
      correct: true
      explanation: "1989 von Thomas Bock in Hamburg begründet."

- q: "Was zeigt die Peer-Support-Forschung (Slade et al. 2024)?"
  type: multiple-choice
  options:
    - text: "Keine messbaren Effekte."
      correct: false
    - text: "Signifikante Effekte auf Empowerment und Lebensqualität."
      correct: true
:::

:::flashcards{id=f-12}
- front: "EX-IN"
  back: "Experienced Involvement – Ausbildung für Menschen mit Psychiatrieerfahrung zu Genesungsbegleiter:innen (seit 2005, Bremen). Inspiriert von Dorothea Buck."
- front: "Trialog"
  back: "Gleichberechtigtes Gespräch zwischen Betroffenen, Angehörigen und Fachpersonen. 1989 von Thomas Bock in Hamburg begründet."
- front: "Peer-Support – Wirkfaktoren"
  back: "Gelebte Erfahrung als Glaubwürdigkeitsanker · Hoffnung als Modell · Beziehung auf Augenhöhe · nicht-stigmatisierende Kommunikation."
- front: "Mahlke et al. 2017"
  back: "Deutsche RCT zu One-to-one Peer Support – wies signifikante Effekte auf Empowerment und Selbstwirksamkeit nach."
:::

:::standard{reading_time=2}
Peer-Support heisst: Menschen, die selbst durch eine psychische Krise gegangen sind, begleiten andere — auf Augenhöhe, mit gelebter Erfahrung statt mit Fachtitel.

Im deutschsprachigen Raum nennen wir sie Genesungsbegleiter:innen, Erfahrungsexpert:innen oder EX-IN-Mitarbeitende. EX-IN steht für „Experienced Involvement" — eine 2005 in Bremen entstandene Ausbildung, die heute in vielen Kliniken, Beratungsstellen und Recovery Colleges verankert ist.

Drei Begriffe sind dabei wichtig:

- **Peer-Support:** Begleitung durch jemanden mit ähnlicher Erfahrung. Glaubwürdig, weil gelebt.
- **Trialog:** Das gleichberechtigte Gespräch zwischen Betroffenen, Angehörigen und Fachpersonen — 1989 in Hamburg von Thomas Bock begründet.
- **EX-IN:** Strukturierte Ausbildung zur Genesungsbegleitung, inspiriert von Dorothea Buck.

Was die Forschung dazu sagt: Eine grosse internationale Studie mit über 600 Teilnehmenden in vier Ländern zeigte signifikante Effekte auf Empowerment und Lebensqualität. Eine deutsche Studie bestätigte das. Was wirkt, ist nicht ein Trick — es ist die Begegnung mit jemandem, der sagen kann: „Ich war auch dort. Und es gibt einen Weg."

Vielleicht kennst du selbst jemanden, dessen Geschichte dich getragen hat. Vielleicht wirst du selbst eines Tages diese Person für jemand anderen.
:::

:::standard-quiz{id=q-12-std}
- q: "Was bedeutet EX-IN?"
  type: multiple-choice
  options:
    - text: "Eine neue Diagnose."
      correct: false
    - text: "Experienced Involvement — eine Ausbildung zur Genesungsbegleitung."
      correct: true
      explanation: "Seit 2005 in Bremen entwickelt, heute in vielen DACH-Einrichtungen verankert."
    - text: "Eine Medikamentenklasse."
      correct: false

- q: "Wer spricht im Trialog miteinander?"
  type: multiple-choice
  options:
    - text: "Nur Fachpersonen unter sich."
      correct: false
    - text: "Betroffene, Angehörige und Fachpersonen — auf Augenhöhe."
      correct: true
      explanation: "1989 in Hamburg von Thomas Bock begründet."
    - text: "Nur Betroffene allein."
      correct: false
- q: "Was haben Peer-Support, Trialog und EX-IN gemeinsam?"
  type: multiple-choice
  options:
    - text: "Sie sind alle Therapieformen."
      correct: false
    - text: "Sie machen gelebte Erfahrung zur Ressource — Augenhöhe statt Hierarchie."
      correct: true
      explanation: "Wer selbst betroffen war, kennt Wege, die in keinem Lehrbuch stehen."
    - text: "Sie ersetzen Behandlung vollständig."
      correct: false

:::

:::standard-flashcards{id=f-12-std}
- front: "Peer-Support"
  back: "Begleitung durch Menschen mit eigener Krisenerfahrung. Wirkt durch gelebte Erfahrung, Hoffnung und Augenhöhe."
- front: "Trialog"
  back: "Gleichberechtigtes Gespräch zwischen Betroffenen, Angehörigen und Fachpersonen. Seit 1989 (Bock, Hamburg)."
- front: "EX-IN"
  back: "Experienced Involvement — Ausbildung für Menschen mit Psychiatrieerfahrung, seit 2005."
:::


# 13. Recovery Colleges – Lernen statt Therapie
{#kap-13 reading_time=5}

Recovery Colleges sind ein britisches Modell, das ab 2009 entstanden ist [^perkins2012]. Sie sind keine Kliniken, sondern Bildungseinrichtungen. Sie sind kostenlos, allen offen – Betroffenen, Angehörigen, Fachpersonen und Interessierten – und nutzen die pädagogische Form der Erwachsenenbildung statt der therapeutischen Sitzung.

Zwei zentrale Prinzipien prägen Recovery Colleges [^perkins2012] [^meddings2015]:

- **Bildung statt Therapie.** Teilnehmende sind Studierende, nicht Patient:innen. Fokus auf Ressourcen und Lernen, nicht Defizit und Diagnose.
- **Koproduktion (Co-Production).** Jeder Kurs wird gemeinsam von einer Fachperson und einer Person mit gelebter Erfahrung entwickelt und durchgeführt – auf Augenhöhe.

## Was die Forschung zeigt

Hayes und Kolleg:innen zählen weltweit 221 Recovery Colleges in 28 Ländern auf fünf Kontinenten [^hayes2023].

Die RECOLLECT-Studie ist die bisher umfassendste wissenschaftliche Auseinandersetzung mit Recovery Colleges [^henderson2024recollect]. Eine retrospektive Kohortenstudie aus England mit 1.193 Recovery-College-Studierenden gegenüber 3.508 Kontrollpersonen über 6, 12 und 60 Monate zeigte: signifikante Reduktion psychiatrischer Hospitalisationen, stationärer Betttage und Notfallkonsultationen – bei zugleich verbessertem Wohlbefinden [^ronaldson2024].

Eine Literaturübersicht über zehn Jahre Recovery-College-Forschung [^theriault2020] bestätigt konsistente Effekte auf Hoffnung, Empowerment, Selbstwirksamkeit, soziale Inklusion, Zielerreichung und Wissen über psychische Gesundheit. Crowther und Kolleg:innen zeigen, dass auch Fachpersonen von der Mitarbeit in Recovery Colleges profitieren [^crowther2019].

:::info{type=evidence title="Evidenz im deutschsprachigen Raum"}
Empirisch validierte DACH-Daten zur Wirksamkeit recovery-orientierter Versorgung sind in den letzten Jahren entstanden.

Eine deutsche randomisierte kontrollierte Studie zur Peer-Begleitung bei Menschen mit schweren psychischen Erkrankungen [^mahlke2017] wies signifikante Effekte auf Empowerment und Selbstwirksamkeit nach.

Die DGPPN-S3-Leitlinie „Psychosoziale Therapien bei schweren psychischen Erkrankungen" (2. Auflage 2019) hat Recovery-Orientierung, Peer-Support und Shared Decision-Making als Empfehlungen aufgenommen [^dgppn2019].

Recovery-College-Forschung im deutschsprachigen Raum wächst – die Datenlage zu spezifischen DACH-Standorten ist im Aufbau.
:::

Im deutschsprachigen Raum bestehen Recovery Colleges u.a. in Bern [^rcbern], in der Ostschweiz, in Genf, in St.Gallen und in Zürich – sowie zunehmend in Deutschland und Österreich (u.a. Empowerment College Bremen).

:::easy{reading_time=2}
Recovery Colleges sind eine besondere Art von Schule. Aber keine Schule für Kinder.

Hier lernen Erwachsene über psychische Gesundheit. Alle dürfen kommen: Betroffene, Angehörige, Fachpersonen, Interessierte.

Die Kurse sind gratis. Du brauchst keine Diagnose.

Jeder Kurs wird zusammen geplant: von einer Fachperson und einer Person mit eigener Erfahrung. Beide sind gleich wichtig.

Es gibt heute über 220 Recovery Colleges in 28 Ländern. Auch in der Schweiz, in Deutschland und in Österreich.

Forschung zeigt: Wer ein Recovery College besucht, geht es danach besser.
:::

:::quiz{id=q-13}
- q: "Wer darf an einem Recovery College teilnehmen?"
  type: multiple-choice
  options:
    - text: "Nur Menschen mit Diagnose."
      correct: false
    - text: "Betroffene, Angehörige, Fachpersonen und Interessierte – alle."
      correct: true
      explanation: "Offen für alle. Keine Diagnose nötig. Gratis."

- q: "Was bedeutet 'Co-Production'?"
  type: multiple-choice
  options:
    - text: "Ein Kinotrick."
      correct: false
    - text: "Fachperson und Person mit gelebter Erfahrung planen Kurse gemeinsam – auf Augenhöhe."
      correct: true

- q: "Was zeigt die UK-Kohortenstudie Ronaldson et al. 2024?"
  type: multiple-choice
  options:
    - text: "Keine Effekte."
      correct: false
    - text: "Signifikante Reduktion psychiatrischer Hospitalisationen und Betttage."
      correct: true
:::

:::flashcards{id=f-13}
- front: "Recovery College"
  back: "Bildungseinrichtung – kein Behandlungsort. Lernen statt Therapie. Gratis. Offen für alle."
- front: "Co-Production"
  back: "Kurse werden gemeinsam von einer Fachperson und einer Person mit gelebter Erfahrung entwickelt und durchgeführt."
- front: "Wirksamkeit"
  back: "Hayes 2023: 221 Recovery Colleges in 28 Ländern. Ronaldson 2024: weniger Hospitalisationen, mehr Wohlbefinden."
:::

:::standard{reading_time=2}
Ein Recovery College ist keine Klinik. Es ist eine Schule für Erwachsene — offen für alle, die etwas über psychische Gesundheit lernen wollen: Betroffene, Angehörige, Fachpersonen, Interessierte. Die Kurse sind gratis, du brauchst keine Diagnose, keine Überweisung und keine Anmeldung beim Hausarzt.

Zwei Prinzipien tragen dieses Modell:

- **Bildung statt Therapie.** Du bist Studierende:r, nicht Patient:in. Im Mittelpunkt stehen Lernen, Ressourcen und Fragen — nicht Diagnose und Defizit.
- **Koproduktion (Co-Production).** Jeder Kurs wird gemeinsam von einer Fachperson und einer Person mit gelebter Erfahrung entwickelt und durchgeführt. Beide Wissensquellen sind gleichwertig.

Das erste Recovery College entstand 2009 in London. Heute gibt es weltweit über 220 in 28 Ländern — auch in der Schweiz (u.a. Bern, Ostschweiz, Genf, St.Gallen, Zürich), in Deutschland und in Österreich.

Die grösste Studie dazu, RECOLLECT aus England, verglich knapp 1.200 Recovery-College-Studierende mit über 3.500 Kontrollpersonen über fünf Jahre. Das Ergebnis: weniger psychiatrische Hospitalisationen, weniger Notfälle, mehr Wohlbefinden. Zehn Jahre Forschung bestätigen: Hoffnung, Empowerment, soziale Inklusion und Selbstwirksamkeit steigen messbar.

Vielleicht ist ein Recovery College in deiner Nähe ein erster Ort, an dem du dich nicht erklären musst — sondern lernen darfst.
:::

:::standard-quiz{id=q-13-std}
- q: "Wer darf ein Recovery College besuchen?"
  type: multiple-choice
  options:
    - text: "Nur Menschen mit psychiatrischer Diagnose."
      correct: false
    - text: "Alle — Betroffene, Angehörige, Fachpersonen, Interessierte. Ohne Diagnose."
      correct: true
      explanation: "Recovery Colleges sind offen, kostenlos und brauchen keine Überweisung."
    - text: "Nur Fachpersonen."
      correct: false

- q: "Was bedeutet Co-Production?"
  type: multiple-choice
  options:
    - text: "Mehrere Filme zusammen drehen."
      correct: false
    - text: "Kurse werden gemeinsam von Fachperson und Erfahrungsexpert:in geplant — auf Augenhöhe."
      correct: true
      explanation: "Das ist das Kernprinzip von Recovery Colleges."
    - text: "Ein Schulungsvideo zum Mitmachen."
      correct: false
- q: "Was ist ein Recovery College?"
  type: multiple-choice
  options:
    - text: "Eine Klinik mit anderem Namen."
      correct: false
    - text: "Ein Lernort — keine Behandlung — wo Betroffene, Fachpersonen und Angehörige gemeinsam lernen."
      correct: true
      explanation: "Bildung statt Therapie. Du bist Lernende:r, nicht Patient:in."
    - text: "Eine Forschungseinrichtung."
      correct: false

:::

:::standard-flashcards{id=f-13-std}
- front: "Recovery College"
  back: "Bildungsort statt Behandlungsort. Gratis, offen für alle. Lernen statt Therapie."
- front: "Co-Production"
  back: "Jeder Kurs wird gemeinsam von einer Fachperson und einer Person mit gelebter Erfahrung gestaltet."
- front: "Wirkung (RECOLLECT)"
  back: "Weniger Hospitalisationen, weniger Notfälle, mehr Wohlbefinden — über fünf Jahre nachgewiesen."
:::


# 14. Trauma-informierte Haltung
{#kap-14 reading_time=3}

:::info{type=warmth title="Bevor du weiterliest"}
Dieses Kapitel benennt Gewalt, Missbrauch, Vernachlässigung und Diskriminierung. Wenn du Schweres erlebt hast, kann das Lesen vieles berühren. Das ist normal. Lies in deinem Tempo. Mach Pausen. Spring zum nächsten Kapitel, wenn es heute zu viel ist. Wenn du sofort Unterstützung brauchst: Kapitel 20 (Notfall) ist nur wenige Tipper entfernt — oder ruf in der Schweiz **143**, in Deutschland **0800 111 0 111**, in Österreich **142** an.
:::

Viele Menschen, die in der Psychiatrie versorgt werden, haben in ihrer Geschichte traumatische Erfahrungen gemacht – Gewalt, Missbrauch, Vernachlässigung, Diskriminierung. Auch psychiatrische Aufenthalte selbst können retraumatisierend wirken [^felitti1998].

Eine trauma-informierte Haltung ist deshalb integraler Bestandteil recovery-orientierter Praxis. Die US-Behörde SAMHSA [^samhsa2014trauma] hat dafür sechs Leitprinzipien definiert:

- **Sicherheit** – physisch und emotional.
- **Vertrauen und Transparenz** – klare Information, verlässlicher Rahmen.
- **Peer-Support** – gelebte Erfahrung als Ressource.
- **Zusammenarbeit und Gegenseitigkeit** – Hierarchien abbauen.
- **Empowerment, Stimme und Wahl** – Entscheidung und Selbstbestimmung.
- **Kulturelle, historische und Gender-Sensibilität.**

Diese Prinzipien gelten auch in einem digitalen Workbook. Du entscheidest, was du wann liest, was du speicherst, was du löschst.

:::easy{reading_time=1}
Viele Menschen in der Psychiatrie haben Schweres erlebt. Gewalt. Missbrauch. Vernachlässigung.

Manchmal ist auch der Klinikaufenthalt selbst belastend.

Deshalb ist eine trauma-sensible Haltung wichtig. Das heisst:

- Sicherheit zuerst.
- Vertrauen schaffen.
- Ehrlich kommunizieren.
- Niemand entscheidet über deinen Kopf hinweg.

Diese Haltung gilt auch in dieser App. Du entscheidest, was du liest. Was du speicherst. Was du löschst.
:::

:::quiz{id=q-14}
- q: "Wie viele Prinzipien hat SAMHSA für trauma-informierte Versorgung definiert?"
  type: multiple-choice
  options:
    - text: "Drei"
      correct: false
    - text: "Sechs"
      correct: true
    - text: "Zehn"
      correct: false

- q: "Welches ist KEIN Prinzip trauma-informierter Praxis?"
  type: multiple-choice
  options:
    - text: "Sicherheit"
      correct: false
    - text: "Strenge"
      correct: true
      explanation: "Strenge gehört nicht zu den SAMHSA-Prinzipien."
    - text: "Peer-Support"
      correct: false
- q: "Welches Prinzip steht im Zentrum trauma-informierter Praxis?"
  type: multiple-choice
  options:
    - text: "Möglichst schnell alle traumatischen Erlebnisse besprechen."
      correct: false
    - text: "Sicherheit zuerst – physisch und emotional."
      correct: true
      explanation: "SAMHSA nennt Sicherheit als erstes von sechs Leitprinzipien."
    - text: "Trauma ignorieren, um nicht zu retraumatisieren."
      correct: false

:::

:::flashcards{id=f-14}
- front: "Sechs Prinzipien (SAMHSA 2014)"
  back: "Sicherheit · Vertrauen & Transparenz · Peer-Support · Zusammenarbeit · Empowerment · kulturelle/Gender-Sensibilität."
- front: "Retraumatisierung"
  back: "Wenn Hilfesysteme selbst zusätzlich traumatisierend wirken. Trauma-informierte Praxis will das aktiv verhindern."
- front: "ACE-Studie (Felitti 1998)"
  back: "Belegt: traumatische Kindheitserfahrungen sind weit verbreitet und wirken lebenslang auf Gesundheit."
:::

:::standard{reading_time=2}
Viele Menschen, die in der Psychiatrie versorgt werden, tragen schwere Erfahrungen mit sich — Gewalt, Missbrauch, Vernachlässigung, Diskriminierung, Verluste. Manchmal wirken auch psychiatrische Aufenthalte selbst belastend oder retraumatisierend. Eine trauma-informierte Haltung nimmt das ernst, ohne dich zu drängen, Wunden zu zeigen, die du nicht zeigen willst.

Die US-Gesundheitsbehörde SAMHSA hat sechs Leitprinzipien beschrieben, die eine trauma-sensible Begleitung tragen:

- **Sicherheit** — körperlich und emotional. Niemand soll in einem Raum sein, in dem er sich nicht sicher fühlt.
- **Vertrauen und Transparenz** — klare Information, verlässlicher Rahmen, keine Überraschungen über deinen Kopf hinweg.
- **Peer-Support** — gelebte Erfahrung als verlässliche Brücke.
- **Zusammenarbeit auf Augenhöhe** — Hierarchien abbauen, nicht vergrössern.
- **Empowerment, Stimme und Wahl** — du entscheidest mit. Immer.
- **Kulturelle, historische und Gender-Sensibilität** — deine Geschichte ist Teil dessen, wer du bist.

Diese Prinzipien gelten auch in einem digitalen Workbook. Du entscheidest, was du wann liest. Was du speicherst. Was du löschst. Wenn ein Kapitel zu viel ist, schliesse es. Komm wieder, wenn du bereit bist. Oder lass es ganz weg.

Trauma-informiert heisst nicht: erst Trauma bearbeiten, dann leben. Es heisst: alles, was hier geschieht, achtet darauf, was du schon getragen hast.
:::

:::standard-quiz{id=q-14-std}
- q: "Wie viele Leitprinzipien hat SAMHSA für trauma-informierte Praxis definiert?"
  type: multiple-choice
  options:
    - text: "Drei."
      correct: false
    - text: "Sechs."
      correct: true
      explanation: "Sicherheit, Vertrauen, Peer-Support, Zusammenarbeit, Empowerment, kulturelle Sensibilität."
    - text: "Zehn."
      correct: false

- q: "Wer entscheidet, was in dieser App gespeichert wird?"
  type: multiple-choice
  options:
    - text: "Die App."
      correct: false
    - text: "Du. Immer."
      correct: true
      explanation: "Selbstbestimmung über deine Daten ist Ausdruck trauma-sensibler Haltung."
- q: "Was ist das erste Prinzip trauma-informierter Praxis?"
  type: multiple-choice
  options:
    - text: "Möglichst schnell alles Schwere besprechen."
      correct: false
    - text: "Sicherheit — physisch und emotional. Erst dann alles andere."
      correct: true
      explanation: "Ohne Sicherheit kein Vertrauen, ohne Vertrauen keine Heilung (SAMHSA)."
    - text: "Strenge Disziplin."
      correct: false

:::

:::standard-flashcards{id=f-14-std}
- front: "Sechs Prinzipien (SAMHSA)"
  back: "Sicherheit · Vertrauen & Transparenz · Peer-Support · Zusammenarbeit · Empowerment · kulturelle & Gender-Sensibilität."
- front: "Sicherheit zuerst"
  back: "Niemand entscheidet über deinen Kopf hinweg. Du bestimmst Tempo, Tiefe und Stopp."
- front: "Retraumatisierung"
  back: "Wenn Hilfesysteme zusätzlich verletzen. Trauma-informierte Praxis will das aktiv verhindern."
:::


# 15. Recovery und Menschenrechte
{#kap-15 reading_time=4}

Recovery ist nicht nur eine fachliche, sondern auch eine menschenrechtliche Frage. Die UN-Behindertenrechtskonvention garantiert Menschen mit Behinderungen – inklusive psychischer Behinderungen – das Recht auf Selbstbestimmung, Inklusion und unterstützte Entscheidungsfindung [^uncrpd2006]. Deutschland hat die BRK 2009 ratifiziert, Österreich 2008, die Schweiz 2014.

Die WHO hat 2019 die QualityRights-Initiative gestartet [^who2019] und 2021 die Leitlinie „Guidance on Community Mental Health Services" veröffentlicht [^who2021]. Recovery wird darin als zentrales Prinzip moderner Versorgung benannt.

Konkret heisst das: Zwang reduzieren, Diagnose nie über die Person stellen, Unterstützung dort anbieten, wo Menschen sie brauchen – und Betroffene als gleichberechtigte Partner:innen in alle Versorgungsentscheidungen einbinden.

:::info{type=example title="Beispiel: Offener Dialog (Open Dialogue)"}
Im finnischen Westlappland hat Jaakko Seikkula in den 1980er-Jahren das Konzept des Offenen Dialogs entwickelt.

Bei akuten psychotischen Krisen werden binnen 24 Stunden alle wichtigen Bezugspersonen einbezogen. Alle Gespräche finden gemeinsam statt, alle Entscheidungen werden transparent verhandelt.

Langzeit-Outcomes sind aussergewöhnlich: In Westlappland kehrten über 80 % der Betroffenen mit Erst-Psychose innerhalb von zwei Jahren in Arbeit oder Ausbildung zurück. Eine 19-Jahres-Studie bestätigte die Langzeit-Stabilität der Ergebnisse [^seikkula2011] [^bergstroem2018].
:::

:::easy{reading_time=1}
Recovery ist auch ein Menschenrecht.

Die UNO hat 2006 ein Abkommen gemacht. Es heisst: Menschen mit Behinderungen haben das Recht, selbst zu bestimmen. Auch Menschen mit psychischen Krankheiten.

Die WHO sagt 2021: Psychiatrie soll diese Rechte achten. Nicht der Arzt soll allein entscheiden. Sondern alle gemeinsam.

In der Schweiz, in Deutschland und in Österreich gilt das auch.
:::

:::quiz{id=q-15}
- q: "Was ist die UN-BRK?"
  type: multiple-choice
  options:
    - text: "Eine Behandlungsmethode."
      correct: false
    - text: "Die UN-Behindertenrechtskonvention von 2006."
      correct: true
      explanation: "Die Schweiz hat sie 2014 ratifiziert, Deutschland 2009, Österreich 2008."

- q: "Was sagt die WHO 2021?"
  type: multiple-choice
  options:
    - text: "Recovery ist unwissenschaftlich."
      correct: false
    - text: "Versorgung soll person-zentriert und rechte-basiert sein."
      correct: true
- q: "Was bedeutet die UN-BRK für Recovery-Praxis?"
  type: multiple-choice
  options:
    - text: "Psychiatrische Versorgung wird grundsätzlich abgeschafft."
      correct: false
    - text: "Selbstbestimmung, Teilhabe und der Abbau von Zwang sind Menschenrechte – nicht nur fachliche Ideale."
      correct: true
      explanation: "Die UN-Behindertenrechtskonvention verankert das, was Recovery-Praxis ohnehin anstrebt."
    - text: "Diagnosen müssen weltweit vereinheitlicht werden."
      correct: false

:::

:::flashcards{id=f-15}
- front: "UN-BRK 2006"
  back: "UN-Behindertenrechtskonvention. Garantiert Selbstbestimmung – auch bei psychischen Behinderungen. CH ratifiziert 2014, DE 2009, AT 2008."
- front: "WHO QualityRights"
  back: "WHO-Initiative seit 2019. 2021 Leitlinie 'Guidance on Community Mental Health Services': person-zentriert, rechte-basiert, recovery-orientiert."
- front: "Open Dialogue (Seikkula)"
  back: "Westlappland seit 1980er. Über 80 % der Erst-Psychose-Betroffenen zurück in Arbeit/Ausbildung binnen 2 Jahren. Bestätigt im 19-Jahres-Follow-up."
:::

:::standard{reading_time=2}
Recovery ist nicht nur eine fachliche Frage — es ist auch eine Frage der Menschenrechte. Wer psychisch erkrankt ist, verliert nicht das Recht, gehört, einbezogen und ernst genommen zu werden.

Die **UN-Behindertenrechtskonvention** (UN-BRK) von 2006 garantiert allen Menschen mit Behinderungen — körperlich, geistig, psychisch — das Recht auf Selbstbestimmung, Inklusion und unterstützte Entscheidungsfindung. Die Schweiz hat sie 2014 ratifiziert, Deutschland 2009, Österreich 2008. Das ist geltendes Recht.

Die **Weltgesundheitsorganisation (WHO)** hat dem 2019 mit der QualityRights-Initiative Gewicht gegeben und 2021 die Leitlinie „Guidance on Community Mental Health Services" veröffentlicht. Recovery steht dort als zentrales Prinzip moderner Versorgung — neben Person-Zentrierung und Rechte-Basierung.

Was heisst das konkret?

- Zwang reduzieren — wo immer möglich.
- Diagnose nie über die Person stellen.
- Unterstützung dort anbieten, wo Menschen leben.
- Betroffene als gleichberechtigte Partner:innen in Versorgungsentscheidungen einbinden.

Ein Beispiel dafür ist der **Offene Dialog** aus Finnland. Bei akuten psychotischen Krisen werden binnen 24 Stunden alle wichtigen Bezugspersonen einbezogen. Über 80 % der Erstbetroffenen kehrten innerhalb von zwei Jahren in Arbeit oder Ausbildung zurück — Langzeit-Studien bestätigen die Stabilität dieser Ergebnisse.

Du musst diese Rahmenwerke nicht auswendig kennen. Aber es ist gut zu wissen: Wenn du sagst „Ich möchte mitentscheiden", stehst du auf solidem rechtlichen Boden.
:::

:::standard-quiz{id=q-15-std}
- q: "Was garantiert die UN-Behindertenrechtskonvention auch Menschen mit psychischen Erkrankungen?"
  type: multiple-choice
  options:
    - text: "Eine schnelle Heilung."
      correct: false
    - text: "Selbstbestimmung, Inklusion und unterstützte Entscheidungsfindung."
      correct: true
      explanation: "UN-BRK von 2006. Ratifiziert: CH 2014, DE 2009, AT 2008."
    - text: "Eine bestimmte Therapieform."
      correct: false

- q: "Was sagt die WHO-Leitlinie 2021 zur psychiatrischen Versorgung?"
  type: multiple-choice
  options:
    - text: "Sie soll person-zentriert und rechte-basiert sein."
      correct: true
      explanation: "Recovery wird darin als zentrales Prinzip benannt."
    - text: "Sie soll möglichst stationär und langfristig sein."
      correct: false
    - text: "Sie soll ohne Betroffenenbeteiligung erfolgen."
      correct: false
- q: "Was sagt die UN-Behindertenrechtskonvention zu psychischer Gesundheit?"
  type: multiple-choice
  options:
    - text: "Sie betrifft nur körperliche Behinderungen."
      correct: false
    - text: "Selbstbestimmung, Teilhabe und der Abbau von Zwang sind Menschenrechte — auch in der Psychiatrie."
      correct: true
      explanation: "Recovery-Ziele sind also nicht nur ‚gut gemeint‘, sondern völkerrechtlich verankert."
    - text: "Sie schreibt vor, welche Therapie wann angewendet werden muss."
      correct: false

:::

:::standard-flashcards{id=f-15-std}
- front: "UN-BRK 2006"
  back: "UN-Behindertenrechtskonvention. Garantiert Selbstbestimmung — auch bei psychischen Behinderungen. Ratifiziert: CH 2014, DE 2009, AT 2008."
- front: "WHO QualityRights"
  back: "WHO-Initiative seit 2019. Leitlinie 2021: person-zentriert, rechte-basiert, recovery-orientiert."
- front: "Open Dialogue"
  back: "Finnisches Modell. Über 80 % der Erst-Psychose-Betroffenen kehrten binnen 2 Jahren in Arbeit oder Ausbildung zurück."
:::


# 16. Krankheit oder Recovery: zwei Sichten
{#kap-16 reading_time=3}

Recovery ist mehr als eine neue Methode – es ist ein Perspektivwechsel [^knuf2026] [^slade2014] [^ameringschmolke2012].

:::table{name="Paradigmenvergleich"}
| Krankheitsorientierte Sicht | Recovery-orientierte Sicht |
|----------------------------|---------------------------|
| Diagnose im Zentrum | Mensch im Zentrum |
| Symptomfreiheit als Ziel | Sinnvolles Leben als Ziel |
| Expert:in = Fachperson | Doppel-Expertise: Fachwissen + Erfahrungswissen |
| Behandlungsplan | Recovery-Plan + Behandlungsplan |
| Compliance | Shared Decision-Making |
| Defizit-Blick (Pathogenese) | Ressourcen-Blick (Salutogenese) |
| Linearer Heilungsweg | Individueller, nicht-linearer Weg |
| Fachperson trägt Hoffnung allein | Hoffnung wird geteilt und geliehen |
| Patient:in / Klient:in | Mensch / Person mit Erfahrung / Studierende:r |
:::

Die rechte Spalte verdrängt die linke nicht. Beide Spalten haben ihren Platz – das recovery-orientierte Paradigma erweitert das medizinische, es ersetzt es nicht [^slade2014].

Amering und Schmolke betonen einen Punkt, der oft übersehen wird: Recovery-orientierte Praxis ist kein zusätzliches Modul oben drauf. Sie ist eine andere Art, Wissen zu produzieren – durch die Verbindung von beruflichem Fachwissen und gelebter Erfahrung als gleichwertige Quellen [^ameringschmolke2012].

:::easy{reading_time=2}
Es gibt zwei Sichtweisen auf psychische Krankheit:

**Alte Sicht:**
- Die Krankheit steht im Zentrum.
- Ziel: Symptome weg.
- Der Arzt weiss am besten.
- Du bist Patient:in.

**Recovery-Sicht:**
- Der Mensch steht im Zentrum.
- Ziel: ein gutes Leben.
- Du und die Fachperson entscheiden gemeinsam.
- Du bist Mensch mit Erfahrung.

Die alte Sicht ist nicht falsch. Sie hilft oft. Aber sie reicht nicht allein.

Die Recovery-Sicht erweitert die alte Sicht. Sie ersetzt sie nicht.
:::

:::quiz{id=q-16}
- q: "Ersetzt die Recovery-Sicht die medizinische Sicht?"
  type: true-false
  correct: false
  explanation: "Nein – sie erweitert sie. Beide haben ihren Platz."

- q: "Was steht in der Recovery-Sicht im Zentrum?"
  type: multiple-choice
  options:
    - text: "Die Diagnose"
      correct: false
    - text: "Der Mensch"
      correct: true
- q: "Welche zwei Sichten stellt das Kapitel gegenüber?"
  type: multiple-choice
  options:
    - text: "Naturheilkunde gegen Schulmedizin."
      correct: false
    - text: "Die Krankheitssicht und die Recovery-Sicht – beide haben ihre Wahrheit, aber unterschiedliche Fragen."
      correct: true
      explanation: "Beide Sichten dürfen nebeneinander stehen – aber Recovery fragt nicht zuerst nach Diagnose, sondern nach Sinn."
    - text: "Schwere und leichte psychische Erkrankungen."
      correct: false

:::

:::flashcards{id=f-16}
- front: "Paradigmenwechsel"
  back: "Vom Defizit-Blick (Pathogenese) zum Ressourcen-Blick (Salutogenese) – ohne die medizinische Sicht aufzugeben."
- front: "Compliance vs. Shared Decision-Making"
  back: "Compliance = du folgst. Shared Decision-Making = ihr entscheidet gemeinsam."
- front: "Wissens-Synthese"
  back: "Recovery-orientierte Praxis verbindet berufliches Fachwissen und gelebte Erfahrung als gleichwertige Quellen (Amering & Schmolke 2012)."
:::

:::standard{reading_time=2}
Recovery ist mehr als eine neue Methode. Es ist ein Perspektivwechsel — eine andere Art, auf psychische Krise und Genesung zu schauen.

Die **krankheitsorientierte Sicht** stellt die Diagnose ins Zentrum. Ziel ist Symptomfreiheit. Expert:in ist die Fachperson. Du folgst einem Behandlungsplan. Der Blick richtet sich auf das, was fehlt oder gestört ist — auf das Defizit.

Die **recovery-orientierte Sicht** stellt den Menschen ins Zentrum. Ziel ist ein sinnvolles Leben — mit oder trotz Symptomen. Expert:innen sind zwei: die Fachperson UND du selbst. Entscheidungen werden gemeinsam getroffen (Shared Decision-Making). Der Blick richtet sich auf Ressourcen, Hoffnung, Verbindung.

Ein paar Begriffspaare zeigen den Unterschied:

- Diagnose im Zentrum → Mensch im Zentrum
- Symptomfreiheit als Ziel → sinnvolles Leben als Ziel
- Compliance → Shared Decision-Making
- Defizit-Blick (Pathogenese) → Ressourcen-Blick (Salutogenese)
- Linearer Heilungsweg → individueller, nicht-linearer Weg
- Patient:in → Mensch / Person mit Erfahrung / Studierende:r

Wichtig: Die rechte Spalte verdrängt die linke nicht. Beide haben ihren Platz. Medikamente können helfen. Diagnosen können orientieren. Eine Klinik kann ein sicherer Ort sein. Aber das allein reicht nicht — Recovery erweitert das medizinische Bild um deine Stimme, deine Werte, deinen Sinn.

Amering und Schmolke bringen es auf den Punkt: Recovery-orientierte Praxis ist kein zusätzliches Modul oben drauf. Sie ist eine andere Art, Wissen zu produzieren — durch die Verbindung von Fachwissen und gelebter Erfahrung als gleichwertige Quellen.
:::

:::standard-quiz{id=q-16-std}
- q: "Ersetzt die Recovery-Sicht die medizinische Sicht?"
  type: multiple-choice
  options:
    - text: "Ja, sie ersetzt sie vollständig."
      correct: false
    - text: "Nein — sie erweitert sie. Beide haben ihren Platz."
      correct: true
      explanation: "Recovery ist ein Perspektivwechsel, kein Verzicht auf medizinisches Wissen."
    - text: "Nein, sie steht im Widerspruch dazu."
      correct: false

- q: "Was steht in der Recovery-Sicht im Zentrum?"
  type: multiple-choice
  options:
    - text: "Die Diagnose."
      correct: false
    - text: "Der Mensch — mit seiner Geschichte, seinen Werten, seinem Sinn."
      correct: true
      explanation: "Diagnose orientiert, definiert dich aber nicht."
    - text: "Die Klinik."
      correct: false
- q: "Müssen sich Krankheits- und Recovery-Sicht ausschliessen?"
  type: true-false
  correct: false
  explanation: "Nein. Beide Sichten dürfen nebeneinander stehen — sie stellen nur unterschiedliche Fragen."

:::

:::standard-flashcards{id=f-16-std}
- front: "Paradigmenwechsel"
  back: "Vom Defizit-Blick (Pathogenese) zum Ressourcen-Blick (Salutogenese) — ohne die medizinische Sicht aufzugeben."
- front: "Compliance vs. Shared Decision-Making"
  back: "Compliance = du folgst. Shared Decision-Making = ihr entscheidet gemeinsam."
- front: "Zwei Expertisen"
  back: "Fachwissen UND gelebte Erfahrung sind gleichwertige Wissensquellen."
:::


# 17. Drei Sätze für dich
{#kap-17 reading_time=3}

Du bist nicht deine Diagnose. Du bist ein Mensch mit einer Geschichte, mit Fähigkeiten, mit Werten, mit Beziehungen. Eine Diagnose kann eine Orientierung sein – sie ist nie die ganze Wahrheit über dich.

## Drei Sätze, die in der Recovery-Bewegung oft fallen

- Du bist Expertin oder Experte deines Lebens. Deine Erfahrung ist Wissen.
- Du musst nicht alles allein tragen. Suche dir Verbündete – Peers, Fachpersonen, Vertrauenspersonen.
- Du darfst Tempo und Richtung selbst bestimmen. Ein Rückschritt ist kein Versagen.

## Was die Forschung dir mitgeben kann

Hoffnung ist ein Prädiktor der Genesung [^schrank2012]. Peer-Support hat einen messbaren Effekt auf Selbstwirksamkeit [^slade2024peer] [^mahlke2017]. Recovery-Colleges-Teilnahme reduziert nachfolgende Versorgungskosten und steigert Wohlbefinden [^ronaldson2024]. Selbststigma lässt sich verändern [^yanos2015].

:::reflection{id=7 title="Dein erster Schritt"}
- Wen könntest du diese Woche ansprechen, der oder die dir zuhören würde, ohne zu beurteilen?
- Welche kleine, machbare Handlung wäre ein Hoffnungs-Anker für die nächsten sieben Tage?
- Welcher Bereich aus dem CHIME-Modell – oder aus der Trias Hoffnung-Macht-Sinn – soll diese Woche etwas mehr Aufmerksamkeit bekommen?
:::

:::easy{reading_time=1}
Du bist nicht deine Diagnose. Du bist ein Mensch.

Drei wichtige Sätze:

- Du kennst dein Leben am besten.
- Du musst nicht alles allein tragen.
- Du darfst dein Tempo bestimmen.

Rückschritte gehören dazu. Sie sind kein Versagen.
:::

:::quiz{id=q-17}
- q: "Was bedeutet 'in Recovery'?"
  type: multiple-choice
  options:
    - text: "Du bist geheilt."
      correct: false
    - text: "Du bist auf dem Weg – ein Prozess, kein Zustand."
      correct: true

- q: "Ist ein Rückschritt ein Versagen?"
  type: true-false
  correct: false
  explanation: "Nein – Rückschritte gehören zum nicht-linearen Verlauf von Recovery dazu."
- q: "Welche drei Sätze fasst dieses Kapitel als Kernbotschaft zusammen?"
  type: multiple-choice
  options:
    - text: "Du bist krank. Du musst dich anpassen. Du bist allein."
      correct: false
    - text: "Du bist nicht allein. Du bist mehr als deine Diagnose. Du darfst hoffen – auch klein."
      correct: true
      explanation: "Diese drei Sätze sollen tragen, wenn vieles wackelt."
    - text: "Iss, schlaf, beweg dich."
      correct: false

:::

:::flashcards{id=f-17}
- front: "Du bist Expert:in deines Lebens"
  back: "Niemand kennt deine Erfahrung so gut wie du. Deine Stimme zählt – gleichwertig zu Fachwissen."
- front: "Tempo & Richtung"
  back: "Du bestimmst beides. Recovery ist nicht messbar und nicht vergleichbar."
- front: "Drei Sätze für dich"
  back: "Du bist nicht allein. Du bist mehr als deine Diagnose. Du darfst hoffen – auch klein."
:::

:::standard{reading_time=2}
Du bist nicht deine Diagnose. Du bist ein Mensch mit einer Geschichte, mit Fähigkeiten, mit Werten, mit Beziehungen. Eine Diagnose kann eine Orientierung sein — sie ist nie die ganze Wahrheit über dich.

Drei Sätze, die in der Recovery-Bewegung immer wieder fallen — und die wir dir mitgeben möchten:

- **Du bist Expertin oder Experte deines Lebens.** Deine Erfahrung ist Wissen. Niemand kennt deinen Atem, deine Nächte, deine Hoffnungen so wie du. Diese Stimme zählt — gleichwertig zu jedem Fachwissen.
- **Du musst nicht alles allein tragen.** Such dir Verbündete. Peers, Fachpersonen, Vertrauenspersonen, Angehörige, eine Selbsthilfegruppe, ein Recovery College. Hoffnung darfst du dir leihen, bis du sie wieder selbst spürst.
- **Du darfst Tempo und Richtung selbst bestimmen.** Recovery ist nicht messbar und nicht vergleichbar. Ein Rückschritt ist kein Versagen — er gehört zum nicht-linearen Weg dazu. Manchmal ist Pause auch Fortschritt.

Was die Forschung dir mitgeben kann: Hoffnung ist ein Prädiktor der Genesung. Peer-Support stärkt messbar die Selbstwirksamkeit. Recovery Colleges senken Hospitalisationen und steigern Wohlbefinden. Selbststigma lässt sich verändern.

Diese drei Sätze sind kein Programm zum Abarbeiten. Sie sind eher wie drei Steine, die du in die Tasche steckst. Du holst sie heraus, wenn du sie brauchst.

Vielleicht heute. Vielleicht erst in einem halben Jahr.
:::

:::standard-quiz{id=q-17-std}
- q: "Was bedeutet 'in Recovery'?"
  type: multiple-choice
  options:
    - text: "Du bist vollständig geheilt."
      correct: false
    - text: "Du bist auf dem Weg — ein Prozess, kein Zustand."
      correct: true
      explanation: "Recovery ist ein anhaltender Weg, kein Zielpunkt."
    - text: "Du bist symptomfrei."
      correct: false

- q: "Ist ein Rückschritt ein Versagen?"
  type: multiple-choice
  options:
    - text: "Ja, dann ist der Weg gescheitert."
      correct: false
    - text: "Nein — er gehört zum nicht-linearen Recovery-Verlauf dazu."
      correct: true
      explanation: "Recovery verläuft selten linear. Pausen und Rückschritte sind Teil des Weges."
    - text: "Vielleicht — je nachdem, wie gross er ist."
      correct: false
- q: "Welche drei Sätze sollst du mitnehmen?"
  type: multiple-choice
  options:
    - text: "Sei stark. Sei dankbar. Sei still."
      correct: false
    - text: "Du bist nicht allein. Du bist mehr als deine Diagnose. Du darfst hoffen – auch klein."
      correct: true
      explanation: "Drei Sätze, die tragen, wenn vieles wackelt."
    - text: "Iss gesund. Schlaf genug. Beweg dich."
      correct: false

:::

:::standard-flashcards{id=f-17-std}
- front: "Drei Sätze"
  back: "1) Du bist Experte deines Lebens. 2) Du musst nicht allein tragen. 3) Du bestimmst Tempo und Richtung."
- front: "Rückschritt"
  back: "Kein Versagen. Er gehört zum nicht-linearen Weg dazu."
- front: "Hoffnung leihen"
  back: "Wenn du selbst keine Hoffnung spürst, darfst du sie dir von anderen leihen — bis du sie wieder selbst hast."
:::


# 18. Sprache und Haltung – warum Worte zählen
{#kap-18 reading_time=3}

Recovery-orientierte Sprache ist nicht Kosmetik. Sie verändert, wer in einem Raum als Subjekt anerkannt wird – und wer zum Objekt einer Behandlung wird [^ameringschmolke2012] [^knuf2026].

## Was wir vermeiden – und was wir stattdessen sagen

Im deutschsprachigen Recovery-Diskurs hat sich eine Reihe konkreter Sprachregeln etabliert [^ameringschmolke2012] [^knuf2026] [^slade2013]:

- „Der/die Schizophrene" → besser: „Mensch mit der Diagnose Schizophrenie" (Person-first-Language).
- „Patient:in" / „Klient:in" im Bildungskontext → besser: „Studierende", „Teilnehmende", „Mensch mit Krisenerfahrung".
- „Chronisch", „unheilbar" → vermeiden. Beide Begriffe sind empirisch fragwürdig und schaden nachweislich der Genesung.
- „Compliance" → besser: „Therapieadhärenz", besser noch: „gemeinsame Entscheidung".
- „Krankheitseinsicht" → besser: „eigenes Krankheitsverständnis".
- „Recovered" → im Deutschen: „in Recovery" (Prozessbegriff).
- „Defizit", „Symptomträger" → besser: „Ressourcen", „Lebenserfahrung", „seelische Erschütterung".

Sprache verändert auch dich selbst. Wer beginnt, „in Recovery" zu sagen, denkt schneller in Prozessen statt in fixierten Zuständen – und macht damit oft den ersten unmerklichen Schritt.

:::easy{reading_time=1}
Worte verändern Wirklichkeit. Ein paar Beispiele:

- Nicht: „chronisch krank" → besser: „lebt mit der Diagnose"
- Nicht: „Compliance" → besser: „gemeinsame Entscheidung"
- Nicht: „Schizophrener" → besser: „Mensch mit Schizophrenie"
- Nicht: „geheilt" → besser: „in Recovery"

Sprache ist nicht alles. Aber sie ändert oft den Anfang.
:::

:::quiz{id=q-18}
- q: "Welche Formulierung ist Person-first?"
  type: multiple-choice
  options:
    - text: "Der Borderliner"
      correct: false
    - text: "Mensch mit Borderline-Diagnose"
      correct: true

- q: "Welcher Begriff sollte vermieden werden?"
  type: multiple-choice
  options:
    - text: "Mensch mit Krisenerfahrung"
      correct: false
    - text: "Chronisch unheilbar"
      correct: true
      explanation: "Empirisch fragwürdig und nachweislich genesungshemmend."
- q: "Warum zählen Worte in der Psychiatrie besonders?"
  type: multiple-choice
  options:
    - text: "Weil Fachsprache klingt seriös."
      correct: false
    - text: "Weil Worte Haltung tragen – sie können stigmatisieren oder Würde schützen."
      correct: true
      explanation: "‚Der Schizophrene‘ macht aus einem Menschen einen Fall. ‚Mensch mit der Diagnose Schizophrenie‘ tut das nicht."
    - text: "Weil längere Wörter klüger wirken."
      correct: false

:::

:::flashcards{id=f-18}
- front: "Person-first-Sprache"
  back: "Diagnose nach dem Menschen, nicht vor ihm. 'Mensch mit Schizophrenie' statt 'Schizophrener'."
- front: "in Recovery"
  back: "Der Prozessbegriff im Deutschen. Statt 'geheilt' oder 'krank' – als anhaltender Weg."
- front: "Compliance vermeiden"
  back: "Statt 'Compliance' (du folgst Anweisungen) lieber 'gemeinsame Entscheidung' oder 'Therapieadhärenz'."
:::

:::standard{reading_time=2}
Worte sind nicht harmlos. Sie verändern, wer in einem Raum als Mensch anerkannt wird — und wer zum Objekt einer Behandlung wird. Recovery-orientierte Sprache ist deshalb keine Kosmetik. Sie ist Haltung.

Im deutschsprachigen Recovery-Diskurs haben sich konkrete Sprachregeln etabliert. Ein paar Beispiele:

- „Der Schizophrene" → besser: „Mensch mit der Diagnose Schizophrenie" (**Person-first-Language**).
- „Patient:in" / „Klient:in" im Bildungskontext → besser: „Studierende:r", „Teilnehmende:r", „Mensch mit Krisenerfahrung".
- „Chronisch", „unheilbar" → vermeiden. Beide Begriffe sind empirisch fragwürdig und schaden nachweislich der Genesung.
- „Compliance" → besser: „Therapieadhärenz" — besser noch: „gemeinsame Entscheidung".
- „Krankheitseinsicht" → besser: „eigenes Krankheitsverständnis".
- „Geheilt" / „recovered" → im Deutschen: „in Recovery" — als Prozess, nicht als Endzustand.
- „Defizit", „Symptomträger" → besser: „Ressource", „Lebenserfahrung", „seelische Erschütterung".

Diese Wechsel sind nicht reine Etikettenfrage. Wer beginnt, „in Recovery" zu sagen, denkt schneller in Prozessen statt in fixierten Zuständen. Wer „Mensch mit Diagnose" sagt, sieht den Menschen zuerst und die Diagnose danach. Das verändert oft genau jenen unmerklichen Schritt, mit dem etwas Neues beginnt.

Sprache verändert auch dich selbst. Wie du über dich sprichst, prägt, wie du über dich denkst. Du musst diese Begriffe nicht alle gleichzeitig lernen. Aber vielleicht hörst du in den nächsten Tagen mit anderen Ohren — auf das, was Ärzt:innen, Angehörige, Therapeut:innen, du selbst sagen.

Und wenn dir etwas wehtut: Du darfst es sagen.
:::

:::standard-quiz{id=q-18-std}
- q: "Welche Formulierung ist Person-first?"
  type: multiple-choice
  options:
    - text: "Der Borderliner."
      correct: false
    - text: "Mensch mit Borderline-Diagnose."
      correct: true
      explanation: "Der Mensch zuerst, die Diagnose danach. Das ist Person-first-Sprache."
    - text: "Die psychisch Kranke."
      correct: false

- q: "Welcher Begriff sollte vermieden werden?"
  type: multiple-choice
  options:
    - text: "Mensch mit Krisenerfahrung."
      correct: false
    - text: "Chronisch unheilbar."
      correct: true
      explanation: "Empirisch fragwürdig und nachweislich genesungshemmend."
    - text: "In Recovery."
      correct: false
- q: "Warum machen Worte einen Unterschied?"
  type: multiple-choice
  options:
    - text: "Weil sie nur Etikett sind."
      correct: false
    - text: "Weil sie Haltung tragen — sie können stigmatisieren oder Würde schützen."
      correct: true
      explanation: "‚Der Schizophrene‘ macht einen Menschen zum Fall. ‚Mensch mit der Diagnose Schizophrenie‘ tut das nicht."
    - text: "Weil Fachsprache klüger wirkt."
      correct: false

:::

:::standard-flashcards{id=f-18-std}
- front: "Person-first-Sprache"
  back: "Diagnose nach dem Menschen — nicht vor ihm. „Mensch mit Schizophrenie" statt „Schizophrener"."
- front: "In Recovery"
  back: "Der Prozessbegriff im Deutschen. Statt „geheilt" oder „chronisch" — als anhaltender Weg."
- front: "Compliance vermeiden"
  back: "Statt „Compliance" (du folgst) lieber „gemeinsame Entscheidung" oder „Therapieadhärenz"."
:::


# 19. So nutzt du dieses Workbook
{#kap-19 reading_time=2}

Dieses digitale Workbook ist kein Lehrbuch. Es ist ein Begleiter:

- Nimm dir Zeit. Eine Seite pro Tag ist genug.
- Sei ehrlich mit dir. Du entscheidest, was gespeichert oder geteilt wird.
- Springe. Folge dem, was dich anspricht.
- Wiederhole. Dieselbe Frage liest sich in drei Monaten anders.
- Teile, wenn du willst – mit einer Vertrauensperson, einer Peer-Begleitung, in einer Gruppe.

## Datenschutz und Selbstbestimmung

Alles, was du in dieser App einträgst, gehört dir. Du entscheidest, ob etwas synchronisiert, gespeichert oder gelöscht wird. Einträge sind verschlüsselt. Eine Selbstauslöschung der Daten ist jederzeit möglich. Diese Selbstbestimmungs-Architektur ist nicht ein technisches Detail, sondern Ausdruck der recovery-orientierten Haltung dieses Workbooks [^who2021] [^samhsa2014trauma] [^uncrpd2006].

:::easy{reading_time=1}
So nutzt du diese App:

- Nimm dir Zeit. Eine Seite pro Tag ist genug.
- Sei ehrlich mit dir.
- Spring von Kapitel zu Kapitel.
- Komm wieder. Dieselbe Frage liest sich später anders.
- Teile, wenn du willst.

Deine Daten gehören dir. Die App speichert nur, was du willst. Du darfst alles löschen. Jederzeit.
:::

:::quiz{id=q-19}
- q: "Müssen die Kapitel der Reihe nach gelesen werden?"
  type: true-false
  correct: false
  explanation: "Nein – springe, wie es für dich passt."

- q: "Wer entscheidet, was gespeichert wird?"
  type: multiple-choice
  options:
    - text: "Die App"
      correct: false
    - text: "Du"
      correct: true
- q: "Wie ist das Workbook gedacht?"
  type: multiple-choice
  options:
    - text: "Als Pflicht-Lehrgang, den man von vorn nach hinten durcharbeitet."
      correct: false
    - text: "Als Werkzeugkasten – nimm, was du brauchst; spring, wo du andocken kannst."
      correct: true
      explanation: "Du bist Expert:in deines Lebens – das Workbook unterstützt, es schreibt nicht vor."
    - text: "Als Diagnose-Tool, das Symptome misst."
      correct: false

:::

:::flashcards{id=f-19}
- front: "Datenschutz in dieser App"
  back: "Deine Daten gehören dir. Verschlüsselt. Du entscheidest, was synchronisiert, gespeichert oder gelöscht wird. Jederzeit löschbar."
- front: "Arbeitsweise"
  back: "Eine Seite pro Tag. Springen erlaubt. Wiederholen erwünscht. Teilen optional."
- front: "Werkzeugkasten statt Pflichtlehrgang"
  back: "Nimm, was du brauchst. Spring, wo du andocken kannst. Lies in deinem Tempo. Mach Pausen."
:::

:::standard{reading_time=2}
Dieses Workbook ist kein Lehrbuch. Es ist ein Begleiter — und du bestimmst, wie er dich begleitet.

Ein paar Hinweise, die sich bewährt haben:

- **Nimm dir Zeit.** Eine Seite pro Tag ist genug. Manchmal reicht ein Absatz. Es gibt kein Tempo, das du erreichen musst.
- **Sei ehrlich mit dir.** Du musst niemandem etwas beweisen — auch nicht der App. Deine Einträge sind für dich.
- **Springe.** Folge dem, was dich anspricht. Du musst nicht der Reihe nach lesen.
- **Wiederhole.** Dieselbe Reflexionsfrage liest sich in drei Monaten anders. Komm wieder.
- **Teile, wenn du willst.** Mit einer Vertrauensperson, einer Peer-Begleitung, einer Gruppe — oder mit niemandem. Beides ist richtig.

**Datenschutz und Selbstbestimmung.** Alles, was du in dieser App einträgst, gehört dir. Du entscheidest, ob etwas synchronisiert, gespeichert oder gelöscht wird. Einträge sind verschlüsselt. Eine vollständige Selbstauslöschung deiner Daten ist jederzeit möglich.

Das ist nicht nur ein technisches Detail. Es ist Ausdruck der Haltung dieses Workbooks: Du bist nicht Objekt einer Behandlung, sondern Subjekt deines Weges. Selbstbestimmung über die eigenen Daten ist ein konkretes Stück Recovery — und gleichzeitig ein Menschenrecht (UN-BRK, WHO 2021, SAMHSA).

Wenn ein Kapitel zu viel wird, schliesse es. Wenn etwas trifft, bleib dort. Es gibt keine falsche Reihenfolge. Es gibt nur deinen Weg — und dieses Workbook geht so weit mit, wie du es lässt.
:::

:::standard-quiz{id=q-19-std}
- q: "Musst du die Kapitel der Reihe nach lesen?"
  type: multiple-choice
  options:
    - text: "Ja, sonst geht es nicht."
      correct: false
    - text: "Nein — springe, wie es für dich passt."
      correct: true
      explanation: "Folge dem, was dich anspricht. Wiederholen ist erwünscht."
    - text: "Nur unter Anleitung einer Fachperson."
      correct: false

- q: "Wer entscheidet, was in der App gespeichert oder gelöscht wird?"
  type: multiple-choice
  options:
    - text: "Die App selbst."
      correct: false
    - text: "Du — jederzeit, vollständig löschbar."
      correct: true
      explanation: "Selbstbestimmung über deine Daten ist Ausdruck der recovery-orientierten Haltung."
    - text: "Deine Fachperson."
      correct: false
- q: "Wie sollst du dieses Workbook nutzen?"
  type: multiple-choice
  options:
    - text: "Vorne anfangen, hinten aufhören, alles lesen."
      correct: false
    - text: "Wie einen Werkzeugkasten — nimm, was du brauchst, spring, wo du andocken kannst."
      correct: true
      explanation: "Es gibt keinen ‚richtigen‘ Weg durch das Workbook."
    - text: "Nur unter Anleitung einer Fachperson."
      correct: false

:::

:::standard-flashcards{id=f-19-std}
- front: "Arbeitsweise"
  back: "Eine Seite pro Tag. Springen erlaubt. Wiederholen erwünscht. Teilen optional."
- front: "Datenschutz"
  back: "Deine Einträge sind verschlüsselt und gehören dir. Vollständige Löschung jederzeit möglich."
- front: "Haltung des Workbooks"
  back: "Begleiter, kein Lehrbuch. Du bestimmst Tempo, Tiefe und Reichweite — und darfst auch wegklicken."
:::


# 20. Krise und Sicherheit – Notrufe D–A–CH
{#kap-20 reading_time=2}

Wenn du gerade akut belastet bist – wenn du Gedanken hast, dir oder anderen etwas anzutun, oder wenn du das Gefühl hast, dass dich Inhalte hier zusätzlich destabilisieren – dann ist dies nicht der richtige Moment für Reflexionsfragen. Bitte such dir jetzt Unterstützung.

:::crisis
Die Notrufe sind in der Frontmatter unter `helplines:` strukturiert hinterlegt. Die App rendert sie als Land-für-Land-Karten mit Tap-to-Call und Tap-to-Open-URL.
:::

Diese Stellen sind anonym, kostenlos und urteilsfrei. Du musst keine „richtige Krise" haben, um anzurufen. Ein Anruf zu frühzeitiger Stunde ist immer besser als gar keiner.

:::info{type=warmth title="Vor dem Wegklicken: drei Sätze für schwere Stunden"}
- Du musst diesen Weg nicht allein gehen.
- Ein Gefühl ist eine Information, kein Auftrag – auch das schwerste Gefühl wird sich bewegen.
- Hilfe zu holen ist nie ein Zeichen von Schwäche. Es ist ein Zeichen, dass du dein Leben ernst nimmst.
:::

:::easy{reading_time=1}
Wenn es dir gerade ganz schlecht geht, lies hier nicht weiter. Hol dir Hilfe.

- **Schweiz**: Telefon 143 (Die Dargebotene Hand). Tag und Nacht.
- **Deutschland**: Telefon 0800 111 0 111.
- **Österreich**: Telefon 142.

Diese Stellen sind gratis und anonym. Du darfst anrufen, auch wenn du nicht weisst, ob es schlimm genug ist.

Ein Anruf ist nie zu früh.
:::

:::quiz{id=q-20}
- q: "Welche Nummer wählst du in der Schweiz für die Dargebotene Hand?"
  type: multiple-choice
  options:
    - text: "112"
      correct: false
    - text: "143"
      correct: true
    - text: "147"
      correct: false
      explanation: "147 ist Pro Juventute – für Kinder und Jugendliche."

- q: "Muss man eine 'richtige Krise' haben, um anzurufen?"
  type: true-false
  correct: false
  explanation: "Nein – ein früher Anruf ist immer besser als gar keiner."
- q: "Was ist die wichtigste Botschaft des Krisenkapitels?"
  type: multiple-choice
  options:
    - text: "In einer Krise musst du erst dieses Workbook fertig lesen."
      correct: false
    - text: "In einer akuten Krise: leg das Workbook weg, hol dir Hilfe – die Nummern stehen direkt im Kapitel."
      correct: true
      explanation: "Selbsthilfe-Material hat Grenzen. Hilfe holen ist nie zu früh."
    - text: "Krisen sind Zeichen von Schwäche."
      correct: false

:::

:::flashcards{id=f-20}
- front: "Krisennummer Schweiz"
  back: "143 – Die Dargebotene Hand. Tag und Nacht. Anonym. Gratis."
- front: "Krisennummer Deutschland"
  back: "0800 111 0 111 oder 0800 111 0 222. Telefonseelsorge. 24/7. Kostenlos."
- front: "Krisennummer Österreich"
  back: "142. Telefonseelsorge. 24/7."
- front: "Kinder & Jugendliche CH/AT"
  back: "147 – Pro Juventute (CH) bzw. Rat auf Draht (AT). 24/7."
:::

:::standard{reading_time=2}
Wenn du gerade akut belastet bist — wenn du Gedanken hast, dir oder anderen etwas anzutun, oder wenn dich Inhalte hier zusätzlich destabilisieren — dann ist dies nicht der Moment für Reflexionsfragen. Bitte hol dir jetzt Unterstützung.

**Die wichtigsten Nummern für deutschsprachige Länder:**

- **Schweiz:** **143** — Die Dargebotene Hand. 24/7. Anonym. Gratis.
- **Deutschland:** **0800 111 0 111** oder **0800 111 0 222** — Telefonseelsorge. 24/7. Kostenlos.
- **Österreich:** **142** — Telefonseelsorge. 24/7.

Bei Lebensgefahr: **112** (in der EU) oder **144** (Sanität CH/AT).

Für Kinder und Jugendliche: **147** (Pro Juventute CH / Rat auf Draht AT). 24/7.

Diese Stellen sind anonym, kostenlos und urteilsfrei. Du musst keine „richtige Krise" haben, um anzurufen. Du musst nicht erklären, ob es schlimm genug ist. Ein Anruf zu frühzeitiger Stunde ist immer besser als gar keiner.

**Drei Sätze für schwere Stunden — bevor du wegklickst:**

- Du musst diesen Weg nicht allein gehen.
- Ein Gefühl ist eine Information, kein Auftrag. Auch das schwerste Gefühl wird sich bewegen.
- Hilfe zu holen ist kein Zeichen von Schwäche. Es ist ein Zeichen, dass du dein Leben ernst nimmst.

Wenn du gerade niemanden anrufen kannst: Nimm Kontakt zu einer Person auf, der du vertraust. Schreib eine Nachricht. Geh in die nächste Notfallstation. Eine kleine Bewegung nach aussen ist genug.

Du bist nicht allein. Selbst wenn es sich gerade so anfühlt.
:::

:::standard-quiz{id=q-20-std}
- q: "Welche Nummer wählst du in der Schweiz bei akuter seelischer Belastung?"
  type: multiple-choice
  options:
    - text: "112"
      correct: false
    - text: "143 (Die Dargebotene Hand)"
      correct: true
      explanation: "143 ist die 24/7-Krisennummer für seelische Not in der Schweiz."
    - text: "144 — das ist nur für Lebensgefahr / Sanität."
      correct: false

- q: "Musst du eine 'richtige Krise' haben, um anzurufen?"
  type: multiple-choice
  options:
    - text: "Ja, sonst nimmt man dich nicht ernst."
      correct: false
    - text: "Nein — ein früher Anruf ist immer besser als gar keiner."
      correct: true
      explanation: "Du darfst anrufen, auch wenn du unsicher bist."
    - text: "Nur wenn du in Lebensgefahr bist."
      correct: false
- q: "Was tust du in einer akuten Krise?"
  type: multiple-choice
  options:
    - text: "Das Workbook bis zur passenden Stelle weiterlesen."
      correct: false
    - text: "Workbook weglegen — Hilfe holen. Die Nummern stehen direkt im Kapitel."
      correct: true
      explanation: "Selbsthilfe-Material hat Grenzen. Hilfe holen ist nie zu früh."
    - text: "Warten, bis es von alleine besser wird."
      correct: false

:::

:::standard-flashcards{id=f-20-std}
- front: "Notruf Schweiz"
  back: "143 — Die Dargebotene Hand. 24/7. Anonym. Gratis."
- front: "Notruf Deutschland"
  back: "0800 111 0 111 oder 0800 111 0 222 — Telefonseelsorge. 24/7. Kostenlos."
- front: "Notruf Österreich"
  back: "142 — Telefonseelsorge. 24/7."
- front: "Wann anrufen?"
  back: "Immer. Auch bei Unsicherheit. Ein Anruf ist nie zu früh."
:::


# 21. Ein kleines Versprechen zum Schluss
{#kap-21 reading_time=2}

Recovery bedeutet nicht, dass alles wieder so wird, wie es einmal war. Es bedeutet, dass etwas Neues entstehen darf – manchmal sogar etwas, das es ohne diese Erfahrung nie gegeben hätte.

Du wirst Tage haben, an denen das hier wie ein leeres Versprechen klingt. Und du wirst Tage haben, an denen du selbst merkst, dass sich etwas verschoben hat – eine winzige Hoffnung, eine kleine Verbindung, ein Gedanke, der früher nicht möglich war.

Was die Forschung dir mit auf den Weg geben kann: Du bist nicht allein. Es gibt einen Weg. Und Hoffnung darfst du leihen, bis du sie wieder spüren kannst.

:::quote{author="Patricia Deegan, 1996" source="deegan1996" lang="en"}
By accepting what we cannot do or be, we begin to discover what we can do and who we can become.
:::

:::quote-translation{source="deegan1996" translator="eigene Übertragung"}
Erst wenn wir annehmen, was uns nicht möglich ist, entdecken wir, wer wir sein und was wir tun können.
:::

:::quote{author="Antonio Machado"}
Wege entstehen, wenn man sie geht.
:::

:::pull
Auf deinem Weg.
:::

:::easy{reading_time=1}
Recovery heisst nicht: Alles wird wie früher.

Recovery heisst: Etwas Neues darf entstehen.

Du wirst schwere Tage haben. Du wirst auch leichtere Tage haben.

Drei Sätze zum Schluss:

- Du bist nicht allein.
- Es gibt einen Weg.
- Hoffnung darfst du leihen, bis du sie wieder selbst hast.

Auf deinem Weg.
:::

:::quiz{id=q-21}
- q: "Welches Bild beschreibt Recovery am besten?"
  type: multiple-choice
  options:
    - text: "Eine gerade Linie zum Ziel."
      correct: false
    - text: "Ein Weg, der entsteht, während man ihn geht (Machado)."
      correct: true

- q: "Wem gehört der Weg?"
  type: multiple-choice
  options:
    - text: "Dem Arzt."
      correct: false
    - text: "Dir – mit Verbündeten."
      correct: true
- q: "Was verspricht das Workbook im Schlusskapitel?"
  type: multiple-choice
  options:
    - text: "Heilung innerhalb von 30 Tagen."
      correct: false
    - text: "Begleitung – mit Respekt, ohne Anspruch auf eine einzige Wahrheit."
      correct: true
      explanation: "Ein kleines, ehrliches Versprechen: dabei sein, ohne zu bevormunden."
    - text: "Die richtige Diagnose."
      correct: false

:::

:::flashcards{id=f-21}
- front: "Auf deinem Weg"
  back: "Der Abschlusssatz der Einleitung. Recovery ist immer dein Weg – mit Verbündeten."
- front: "Drei Schluss-Sätze"
  back: "Du bist nicht allein. Es gibt einen Weg. Hoffnung darfst du leihen, bis du sie selbst hast."
- front: "Wege entstehen, wenn man sie geht"
  back: "Antonio Machado – das Motto vieler Recovery-Workbooks und auch dieser App."
:::

:::standard{reading_time=2}
Recovery bedeutet nicht, dass alles wieder so wird, wie es einmal war. Es bedeutet, dass etwas Neues entstehen darf — manchmal sogar etwas, das es ohne diese Erfahrung nie gegeben hätte. Eine andere Tiefe. Eine andere Aufmerksamkeit. Manchmal eine Sprache, die du vorher nicht hattest.

Du wirst Tage haben, an denen das hier wie ein leeres Versprechen klingt. Und du wirst Tage haben, an denen du selbst merkst, dass sich etwas verschoben hat — eine winzige Hoffnung, eine kleine Verbindung, ein Gedanke, der früher nicht möglich war.

Beides gehört dazu. Recovery ist kein gerader Weg. Er hat Pausen, Schleifen, Rückwege. Antonio Machado hat es so gesagt: „Wege entstehen, wenn man sie geht." Das gilt auch für deinen Weg.

Was die Forschung dir mit auf den Weg geben kann:

- **Du bist nicht allein.** Tausende Menschen sind durch ähnliche Zeiten gegangen — und haben ein gutes Leben gefunden.
- **Es gibt einen Weg.** Auch wenn er heute unsichtbar ist. Auch wenn er nicht so aussieht wie der Weg anderer.
- **Hoffnung darfst du leihen.** Wenn du gerade keine hast, halten andere sie für dich — eine Peer-Begleitung, eine Therapeutin, eine Freundin, ein Buch, eine Geschichte aus diesem Workbook.

Du darfst dieses Workbook wieder schliessen. Du darfst es Monate später wieder öffnen. Du darfst es teilen. Du darfst es vergessen. Du darfst auch sagen: heute nicht.

Was bleibt, ist dieses kleine Versprechen: Auf deinem Weg. Wir gehen ein Stück mit.
:::

:::standard-quiz{id=q-21-std}
- q: "Was, wenn du gerade keine Hoffnung spürst?"
  type: multiple-choice
  options:
    - text: "Dann ist Recovery vorbei."
      correct: false
    - text: "Dann darfst du Hoffnung von anderen leihen — bis du sie wieder selbst hast."
      correct: true
      explanation: "Hoffnung ist teilbar. Andere können sie für dich halten."
    - text: "Dann hast du etwas falsch gemacht."
      correct: false

- q: "Wie verläuft Recovery?"
  type: multiple-choice
  options:
    - text: "Als gerade Linie zum Ziel."
      correct: false
    - text: "Als individueller Weg — mit Pausen, Schleifen, Rückwegen. „Wege entstehen, wenn man sie geht." (Machado)"
      correct: true
      explanation: "Recovery ist nicht linear. Rückschritte gehören dazu."
    - text: "Genau gleich wie bei anderen."
      correct: false
- q: "Was verspricht das Workbook am Ende?"
  type: multiple-choice
  options:
    - text: "Heilung."
      correct: false
    - text: "Begleitung mit Respekt — keine einzige Wahrheit, keine Bevormundung."
      correct: true
      explanation: "Ein kleines, ehrliches Versprechen."
    - text: "Die richtige Diagnose."
      correct: false

:::

:::standard-flashcards{id=f-21-std}
- front: "Recovery"
  back: "Etwas Neues darf entstehen. Nicht: alles wird wieder wie früher."
- front: "Hoffnung leihen"
  back: "Wenn du selbst keine hast: andere halten sie für dich — bis du sie wieder spürst."
- front: "Drei Schluss-Sätze"
  back: "Du bist nicht allein. Es gibt einen Weg. Hoffnung darfst du leihen."
- front: "Auf deinem Weg"
  back: "„Wege entstehen, wenn man sie geht." (Antonio Machado) — Wir gehen ein Stück mit."
:::


# Methodische Hinweise (intern)
{#methodik}

Alle Aussagen sind gegen die in der Frontmatter aufgeführten Primärquellen geprüft. Wo Reviews und Meta-Analysen vorlagen, wurde diesen Vorrang vor Einzelstudien gegeben.

Wörtliche Zitate sind im Originalwortlaut wiedergegeben (Quote-Widget mit `source`-Referenz). Deutsche Wiedergaben sind als „eigene Übertragung" gekennzeichnet (Quote-Translation-Widget). Begriffe und Modelle (CHIME, CHIME-D, Hoffnung-Macht-Sinn, Personal Medicine, Trialog, EX-IN, Salutogenese, Open Dialogue) werden als wissenschaftliche Termini verwendet und sind im Quellenregister mit ihren Urheber:innen verknüpft.

