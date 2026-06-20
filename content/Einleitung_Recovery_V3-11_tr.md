---
schema_version: "1.2"
content_id: "recovery-einleitung"
content_version: "3.14"
title: "Recovery"
subtitle: "Kapsamlı bir giriş — Umut. Güç. Anlam."
language: "tr"
translation_status: "draft-machine-translated"
translation_date: "2026-06-20"
translator: "Claude subagent (draft — needs professional review of crisis content)"
region: "D-A-CH"
target_audience: "betroffene"
target_audience_label: "Ruh sağlığı zorlukları yaşamış kişiler için"
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
    status: "draft-machine-translated"
  - code: "cs"
    label: "Čeština"
    status: "planned"

reading_modes:
  full:  "Ayrıntılı — araştırma, alıntılar ve kaynaklarla"
  easy:  "Sade — kısa ve basit dille"
  standard: "Standart — orta uzunlukta, açık ve kişisel"
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

# === CRISIS HELPLINES (D-A-CH + Türkiye) ===
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
  - country: "TR"
    name: "İntihari Önleme Derneği"
    number: "444 5 588"
    coverage: "intihar önleme"
    target: "herkes"
  - country: "TR"
    name: "ALO 182 – Sağlık Bakanlığı"
    number: "182"
    coverage: "24/7"
    target: "herkes"
  - country: "TR"
    name: "ALO 183 – Sosyal Destek Hattı"
    number: "183"
    coverage: "24/7"
    target: "kadın/çocuk/aile"
  - country: "TR"
    name: "AÇEV Bilgi Hattı"
    number: "444 2228"
    coverage: "çocuk gelişim danışmanlığı"
    target: "ebeveynler"
  - country: "TR"
    name: "Acil tıbbi yardım"
    number: "112"
    coverage: "hayati tehlike"
    target: "herkes"
---
# Okumadan önce önemli uyarı
{#disclaimer reading_time=2}

:::info{type=warmth title="Lütfen önce bunu oku"}
Bu uygulama bir **prototiptir**. Hâlâ geliştirilmektedir ve henüz tamamlanmamıştır.

Yalnızca recovery alanında olası bir gelecekteki workbook'u test etmek için kullanılır.
:::

## Bu uygulama nedir, ne değildir

Şu anda hâlâ geliştirilmekte olan bir uygulamanın **test sürümünü** kullanıyorsun. Metinler ve özellikler ilk taslaktır. Henüz profesyonel olarak — ne klinik açıdan ne de dilsel açıdan — gözden geçirilmemiştir.

**Bu uygulama bir terapi aracı DEĞİLDİR.** Hiçbir tedaviyi, terapiyi, tıbbi danışmanlığı veya kriz müdahalesini yerine geçmez.

## Lütfen şu kurallara uy

- **Klinik ortamlarda kullanma.** Bu uygulama mevcut hâliyle klinik, muayenehane, danışmanlık merkezi veya başka bakım ortamlarında bir araç olarak kullanılamaz.
- **Özel hayatta tek başına dayanak olarak kullanma.** Eğer sen kendin etkilenen biriysen, lütfen bu uygulamayı yalnızca organize bir test aşaması çerçevesinde kullan — zor bir yaşam durumunda tek başına bir refakatçi olarak değil.
- **Tereddüt varsa: gerçek destek al.** Eğer kendini iyi hissetmiyorsan, güvendiğin bir kişiye, seni takip edenlere veya bu workbook'un 20. bölümünde yer alan kriz hatlarına başvur.

## Garanti yok, sorumluluk yok

Bu uygulamanın içerikleri hiçbir garanti verilmeksizin sunulmaktadır. Bu uygulamanın kullanılması veya kullanılmaması nedeniyle ortaya çıkabilecek maddi ya da manevi zararlar için hiçbir sorumluluk üstlenilmez.

Uygulama, en iyi bilgimize ve güncel recovery araştırmalarına dayanarak hazırlanmıştır. Yine de hata, eksiklik veya uygun olmayan ifadeler içerebilir. Bir şey fark edersen geri bildirimine seviniriz — bu test aşamasının amacı tam olarak budur.

## Şu anda bir kriz içindeysen

Bu uygulamayı okumak sana ağır geliyorsa veya seni dengeden çıkarıyorsa, bir kenara bırak.

Akut krizlerde günün her saatinde ulaşabilirsin:
- **İsviçre:** 143 (Die Dargebotene Hand)
- **Almanya:** 0800 111 0 111 (Telefonseelsorge)
- **Avusturya:** 142 (Telefonseelsorge)
- **Hayati tehlike durumunda:** 112 veya 144 (CH/AT) ya da 112 (DE)

Yardım istemek için asla erken değildir.

:::standard{reading_time=2}
Şu anda bir **prototip** kullanıyorsun. Bu uygulama henüz tamamlanmamıştır — gelecekteki bir Recovery çalışma kitabının nasıl olabileceğini göstermeyi amaçlar. Metinler ve işlevler ilk taslaktır ve henüz profesyonelce gözden geçirilmemiştir.

**Bu uygulama terapötik bir araç değildir.** Tedavinin, terapinin, tıbbi tavsiyenin veya kriz müdahalesinin yerine geçmez.

**Lütfen şu kurallara uy:**

- Klinik ortamlarda kullanma — yani kliniklerde, muayenehanelerde veya danışmanlık merkezlerinde yardım aracı olarak kullanma.
- Zor bir yaşam durumunda tek destek olarak kullanma.
- Şüphe duyarsan: gerçek yardım al — güvendiğin bir kişi, bakım ekibin veya bir kriz hattı.

**Akut krizde** 7/24 arayabilirsin: Yeşilay Danışmanlık (Türkiye) **115**, İsviçre **143**, Almanya **0800 111 0 111**, Avusturya **142**. Hayati tehlikede: **112**.

İçerikler garantisiz sunulur. Bir şey dikkatini çekerse geri bildirimin için müteşekkir oluruz — bu test aşamasının amacı tam olarak budur.

Okumaya devam ederek bu bilgilendirmeyi anladığını teyit edersin.
:::

:::pull
Okumaya devam ederek bu uyarıları anladığını ve uygulamayı bir test aşaması çerçevesinde kullandığını onaylamış olursun.
:::


# Önsöz: Recovery hikâyelerle başlar
{#vorspann reading_time=4}

:::pull
Recovery, semptomlarına rağmen ya da semptomları sayesinde iyi bir yaşama giden yolu bulmuş binlerce insanın hikâyesidir.
:::

Bu hikâyeler nadiren gazetelerde yer alır, çünkü skandal sunmazlar. Ama bu hikâyeler her gün yaşanır — kitapçılarda, piyanoların başında, korolarda, sohbet gruplarında, oturma odalarında, bekleme odalarında, mutfaklarda.

Uzun süre bir daha hiçbir meslek yapamayacağına inanan ve bugün küçük bir kitapçı işleten bir kadın. Bir psikoz döneminden sonra yeniden piyano çalan bir baba — eskisi gibi değil, daha az mükemmellikle, daha çok sevgiyle. Yıllar boyu Borderline tanısıyla yaşadıktan sonra iyileşme rehberi olan ve kendisine uzatılmamış eli başkalarına uzatmak isteyen genç bir adam. Kızına ağır bir yeme bozukluğu sürecinde eşlik etmiş ve şöyle diyen bir anne: bu süreçte sevgi hakkında daha önceki tüm hayatımdan daha fazlasını öğrendim.

Bu tür hikâyeler düzinelerce değil, binlerce var. Muhtemelen yüz binlerce. Ağır bir ruhsal dönemden geçmiş insan sayısı kadar.

## Recovery belgelenmiştir

İskoç Recovery Ağı, 2007'de altmış dört böyle hikâyeyi bir araya getirip sistematik olarak değerlendirdi [^brown2007]. Britanya'daki ImROC girişimi yıllardır deneyim raporları topluyor [^imroc]. Uluslararası Ses Duyanlar Topluluğu, 1990'lardan beri ders kitaplarında yer almayan sesleri bir araya getiriyor [^hvn].

Nottingham Üniversitesi'nde Mike Slade, NEON programıyla — Narrative Experiences Online — kayda alınmış recovery hikâyelerinden oluşan bilimsel bir koleksiyon oluşturdu [^slade2021neon]. Randomize kontrollü çalışmalar gösterdi ki bu tür hikâyeleri dinlemek yaşam kalitesini ölçülebilir şekilde iyileştiriyor — psikoz deneyimi olan kişilerde [^rennick2024neon] ve onlara eşlik eden yakınlarda [^neonc2024].

Başka bir deyişle: Recovery sadece hissedilen bir vaat değildir. Recovery belgelenmiş bir olgudur. Ve diğer insanların hikâyeleri başlı başına bir yardım biçimidir.

## Recovery pratiktir

Recovery önce muayene odasında yaşanmaz. Recovery karşılaşmalardır. Recovery, aylar sonra yeniden ekim yapılan bahçedir. Her sabah kapıyı bulan köpektir. Kendi nefesinin yeniden bir sese kavuştuğu korodur. Tamir etmeye çalışmadan dinleyen arkadaştır. Çarşamba akşamı trialog sohbet grubudur. Tepelere yapılan yürüyüştür. On iki saat mayalanmaya ihtiyaç duyan ekşi maya ekmektir.

Recovery dayanıklılığın hikâyeleridir — ve genellikle tam da bir şeyin kırıldığı yerde doğan yaratıcılığın. Recovery çok sık aynı zamanda şudur: mutluluk.

Parlak broşürlerin kusursuz, hep ışıldayan mutluluğu değil. Ötekisi — sessiz, minnettar, bazen şaşkın mutluluk. Bir günün ne kadar uzun olabileceğini bilen birinin tanıdığı türden mutluluk.

## Peki ya sen?

Burada olmak için bunların hiçbirini şimdiden hissetmek zorunda değilsin. Belki şu an mutluluk ya da anlam gibi büyük kelimeler için doğru an değildir. Belki bugün bu sayfayı okuman yeterlidir. Bu yeterli.

Bu çalışma kitabı böyle bir yolda yürüyen — ya da eşlik etmek, ya da anlamak isteyen — insanlar için yazılmıştır. Güzel bir teori olmak istemiyor. Yol işareti olmak istiyor.

:::pull
Başlamadan önce — kısa bir yol göstericisi.
:::

:::easy{reading_time=1}
Recovery bir harekettir. Pek çok insan bunu başardı: Zor bir dönemleri vardı. Bugün iyi yaşıyorlar. Hastalığa rağmen. Bazen hatta hastalık sayesinde.

Bu tür binlerce hikâye var.

Recovery sadece doktorda olmaz. Recovery senin hayatında olur. Yemek yaparken. Yürürken. İyi insanlarla konuşurken.

Bu çalışma kitabı sana yardım etmek istiyor. Öğrenmek için bir kitap değil. Bir yol arkadaşıdır.
:::

:::quiz{id=q-vorspann}
- q: "Recovery en çok nerede gerçekleşir?"
  type: multiple-choice
  options:
    - text: "Sadece klinikte."
      correct: false
      explanation: "Hayır. Recovery her şeyden önce günlük yaşamda olur — karşılaşmalarda, küçük adımlarda."
    - text: "Yaşamda — karşılaşmalarda, günlük hayatta."
      correct: true
      explanation: "Aynen. Tedavi bir araçtır, bir yer değil."
    - text: "Ancak tüm semptomlar kaybolduğunda."
      correct: false
      explanation: "Recovery, semptomların yok olmasıyla başlamaz."

- q: "Kaç recovery hikâyesi vardır?"
  type: multiple-choice
  options:
    - text: "Bir avuç."
      correct: false
    - text: "Yüzlerce."
      correct: false
    - text: "Binlerce, hatta yüz binlerce."
      correct: true
      explanation: "Ağır bir dönemden geçmiş insan sayısı kadar."
:::

:::flashcards{id=f-vorspann}
- front: "Recovery şunlarla başlar …"
  back: "… hikâyelerle. Semptomlarına rağmen ya da sayesinde iyi bir yaşama giden yolu bulmuş binlerce insanın hikâyeleriyle."
- front: "NEON Programı"
  back: "Kayda alınmış recovery hikâyelerinden oluşan bilimsel koleksiyon (Nottingham Üniversitesi). Çalışmalar gösteriyor: bu hikâyeleri dinlemek yaşam kalitesini ölçülebilir şekilde iyileştirir."
- front: "Recovery nerede gerçekleşir …"
  back: "… önce muayene odasında değil. Bahçede, koroda, sohbette, yemek yaparken, karşılaşmalarda."
:::

:::standard{reading_time=2}
Recovery hikâyelerle başlar. Teoriyle değil, tanılarla değil — bir yol bulmuş insanlarla.

Yıllarca bir daha asla mesleğini yapamayacağını düşünen ve bugün küçük bir kitapçı işleten bir kadın. Bir psikoz döneminden sonra yeniden piyano çalan bir baba — eskisi gibi değil, daha az mükemmellikle, daha çok sevgiyle. Bir Borderline tanısından sonra bugün başkalarına eşlik eden ve onlara kendisine uzatılmamış eli uzatmak isteyen genç bir adam.

Bu tür hikâyeler düzinelerce değil, binlercedir. Ağır bir ruhsal dönemden geçmiş insan sayısı kadar.

Recovery, hissedilen bir vaatten fazlasıdır. Recovery belgelenmiştir:

- İskoç Recovery Ağı 64 yaşam yolunu sistematik olarak değerlendirdi.
- Nottingham Üniversitesi recovery anlatılarını bilimsel olarak topluyor.
- Çalışmalar gösteriyor: Bu hikâyeleri dinlemek yaşam kalitesini ölçülebilir şekilde iyileştirir.

Recovery ayrıca nadiren önce muayene odasında gerçekleşir. Recovery, aylar sonra yeniden ekim yapılan bahçede olur. Senin nefesinin yeniden bir sese kavuştuğu koroda. Tamir etmeye çalışmadan dinleyen arkadaşta.

Burada olmak için bunların hiçbirini henüz hissetmek zorunda değilsin. Belki bugün bu sayfayı okuman yeterli. Bu yeterli.

Bu çalışma kitabı bir yol işaretidir. Güzel bir teori değil — senin yolun için bir yol arkadaşı.
:::

:::standard-quiz{id=q-vorspann-std}
- q: "Recovery her şeyden önce nerede gerçekleşir?"
  type: multiple-choice
  options:
    - text: "Sadece klinikte ya da terapide."
      correct: false
      explanation: "Recovery her şeyden önce günlük yaşamda gerçekleşir — karşılaşmalarda, bahçede, koroda, yemek yaparken."
    - text: "Yaşamda — karşılaşmalarda ve günlük hayatta."
      correct: true
      explanation: "Aynen. Tedavi bir araçtır, bir yer değil."
    - text: "Ancak tüm semptomlar yok olduğunda."
      correct: false
      explanation: "Hayır. Recovery zorluğun tam ortasında başlar."

- q: "Kaç recovery hikâyesi vardır?"
  type: multiple-choice
  options:
    - text: "Bir avuç."
      correct: false
    - text: "Binlerce, muhtemelen yüz binlerce."
      correct: true
      explanation: "Ağır bir dönemden geçmiş insan sayısı kadar."
    - text: "Sadece çok az münferit vaka."
      correct: false
:::

:::standard-flashcards{id=f-vorspann-std}
- front: "Recovery şunlarla başlar …"
  back: "… hikâyelerle. Semptomlarına rağmen ya da sayesinde iyi bir yaşama giden yolu bulmuş binlerce insanın hikâyeleriyle."
- front: "Recovery nerede gerçekleşir?"
  back: "Günlük yaşamda. Bahçede, koroda, sohbette, yemek yaparken. Tedavi bir araçtır, bir yer değil."
- front: "Yalnız mısın?"
  back: "Hayır. Binlerce kişi benzer dönemlerden geçti. Onların hikâyeleri gösteriyor: Bir yol vardır."
:::


# Dil hakkında kısa bir not
{#sprache reading_time=2}

Kelimeler gerçeklik yaratır. "Şizofren" diye hitap edilen kişi, bir tanı duyar. "Şizofreni tanısı almış kişi" diye hitap edilen kişi ise önce bir insan olarak kalır. Bu giriş bilinçli olarak person-first dil kullanır: tanı kişiden sonra, kişiden önce değil [^ameringschmolke2012] [^knuf2026].

Biz ruhsal krizleri olan, kriz deneyimi olan ya da psikiyatri deneyimi olan kişilerden söz ederiz — "hastalardan" değil. Recovery'de olan kişilerden söz ederiz — "iyileşmişlerden" değil. "Sen" diye hitap ederiz, çünkü dijital çalışma kitabı kişisel bir alandır — kendimizi senden üstün gördüğümüz için değil. Eğer uzman olarak okuyorsan: "sen"i, hiyerarşiyi vurgulamadan yakınlık yaratan bir dil tarzı modeli olarak oku.

Recovery için akılda kalıcı bir Türkçe çeviri yerleşmedi — yakından ilişkili Empowerment kavramı için olduğu gibi. Bu nedenle Recovery'yi sürekli olarak bir terim olarak kullanırız ve sonraki bölümde ona tamamlayıcı Türkçe okumayı "Umut — Güç — Anlam" [^ameringschmolke2006] olarak eşlik ettiririz.

:::easy{reading_time=1}
Kelimeler önemlidir.

"Şizofren" diye adlandırılan kişi, artık sadece hastadır. "Şizofreni olan kişi" denen biri ise önce bir insan olarak kalır.

Recovery kelimesini kullanıyoruz. İngilizce. Bunun için iyi bir Türkçe karşılık yok. Recovery şu anlama gelir: iyi bir yaşama doğru bir yol yürümek.

Bu uygulamada sana "sen" diye hitap ediyoruz. Daha iyi olduğumuz için değil. Bu alan senin alanın olduğu için.
:::

:::quiz{id=q-sprache}
- q: "Hangi ifade person-first'tür?"
  type: multiple-choice
  options:
    - text: "Şizofren"
      correct: false
    - text: "Şizofreni tanısı almış kişi"
      correct: true
      explanation: "Tanı kişiden sonra, kişiden önce değil."
    - text: "Bir şizo"
      correct: false
:::

:::flashcards{id=f-sprache}
- front: "Person-first dil"
  back: "Tanı kişiden sonra, kişiden önce değil: 'Şizofreni olan kişi' yerine 'şizofren' değil."
- front: "Neden Recovery bir terim olarak?"
  back: "Şık bir Türkçe çeviri yok. Recovery yerleşmiş bir terim olarak sürekli kullanılır."
:::

:::standard{reading_time=2}
Kelimeler gerçeklik yaratır. Zararsız değiller.

"Şizofren" diye hitap edilen kişi, bir insan olmadan önce bir tanı duyar. "Şizofreni tanısı almış kişi" diye hitap edilen kişi ise önce bir insan olarak kalır — ve tanıyı bir parça olarak taşır, bütün olarak değil.

Bu çalışma kitabı bilinçli olarak person-first dil kullanır: tanı kişiden sonra durur, kişiden önce değil.

Somut olarak şu anlama gelir:

- Ruhsal krizleri olan insanlardan söz ederiz, "hastalardan" değil.
- Recovery'de olan insanlardan söz ederiz, "iyileşmişlerden" değil.
- İyileşme rehberliğinden söz ederiz, "tutuklu çalışmasından" değil.

Recovery kelimesi için akılda kalıcı bir Türkçe çeviri yok — Empowerment için de olmadığı gibi. Bu nedenle Recovery'yi sürekli olarak bir terim olarak kullanırız. Sonraki bölümde ona Türkçe okumayı "Umut — Güç — Anlam" olarak eşlik ettiririz.

Bir özellik: Sana sürekli "sen" diye hitap edilecek. Kendimizi senden üstün gördüğümüzden değil — aksine. Dijital çalışma kitabı kişisel bir alandır. "Sen", hiyerarşiyi vurgulamadan yakınlık yaratır. Eğer uzman olarak okuyorsan: "Sen"i, eşitliği ifade eden bir dil tarzı modeli olarak oku.
:::

:::standard-quiz{id=q-sprache-std}
- q: "Hangi ifade person-first'tür?"
  type: multiple-choice
  options:
    - text: "Şizofren"
      correct: false
      explanation: "Burada tanı önce gelir — bu person-first değildir."
    - text: "Şizofreni tanısı almış kişi"
      correct: true
      explanation: "Aynen. Tanı insandan sonra — insan önce görünür kalır."
    - text: "Bir şizo"
      correct: false
      explanation: "Damgalayıcı ve kişiyi tanıya indirger."

- q: "Çalışma kitabı neden „sen" kullanıyor?"
  type: multiple-choice
  options:
    - text: "Yazarlar kendilerini üstün hissettiği için."
      correct: false
    - text: "Dijital çalışma kitabı kişisel bir alan olduğu için — hiyerarşi olmadan yakınlık."
      correct: true
      explanation: "„Sen", aşağıya doğru mesafe değil, yakınlık yaratır."
:::

:::standard-flashcards{id=f-sprache-std}
- front: "Person-first dil"
  back: "Tanı insandan sonra, ondan önce değil. „Şizofren" yerine „şizofreni tanısı almış kişi"."
- front: "Neden „Recovery" İngilizce kalıyor?"
  back: "Akılda kalıcı bir Türkçe çeviri yok. Recovery yerleşmiş bir terim olarak kullanılır."
:::


# Hoş geldin
{#willkommen reading_time=3}

Burada olduğun için sevindik.

Bu dijital çalışma kitabı senin için yazıldı — eğer şu an zor bir dönem yaşıyorsan, bir tanı aldıysan ya da uzun süredir bir ruhsal hastalıkla yaşıyorsan.

Belki sık sık tedavi gördün. Belki başlangıçtasın. Belki arkanda uzun bir yol var ve yaşadıkların için yeni bir dil arıyorsun.

Bu çalışma kitabı, kendi tempoyla keşfedebileceğin şekilde yazıldı. Her şeyi okumak zorunda değilsin. Belirli bir sırayla bir şey yapmak zorunda değilsin. Atlayabilir, geri dönebilir, bir kenara koyabilirsin.

:::info{type=metaphor title="Yol için bir görüntü: Kintsugi"}
Kintsugi, geleneksel bir Japon onarım sanatıdır. Kırılmış seramikler altınla birleştirilir. Kırık yerler gizlenmez, görünür kılınır ve değerli hale getirilir. Kap, kırılma nedeniyle değerini kaybetmez — aksine, pek çok kişinin gözünde, daha değerli olur.

İyileşme yolları çoğu zaman benzer bir mantığı takip eder: Kırık yerleri rötuşlamak değil, onları yeni bir bütüne entegre etmektir mesele.

Recovery, eskiden olduğun gibi olmak demek değildir. Recovery, olmuş olanın yeni bir bütünün parçası olmasına izin vermektir.
:::

:::quote{author="U.S. Substance Abuse and Mental Health Services Administration (SAMHSA), 2012" source="samhsa2012"}
Recovery, ruhsal bir hastalığı olan kişinin kendi seçtiği bir toplulukta anlamlı bir yaşam sürdürebilmesini sağlayan — aynı zamanda tam potansiyelini gerçekleştirmeye çabaladığı — bir iyileşme ve dönüşüm yolculuğudur.
:::

:::easy{reading_time=1}
Burada olduğun için sevindik.

Bu çalışma kitabı senin için yazıldı — eğer zor dönemler yaşıyorsan.

Her şeyi okumak zorunda değilsin. Sana uyanı seç. İstediğinde geri dön.

Tempoyu sen belirlersin.
:::

:::quiz{id=q-willkommen}
- q: "Bu çalışma kitabı kimin için?"
  type: multiple-choice
  options:
    - text: "Ruhsal yük yaşama deneyimi olan kişiler için."
      correct: true
      explanation: "Senin için yazıldı — yolunun neresinde olursan ol."
    - text: "Sadece uzmanlar için."
      correct: false
    - text: "Sadece belirli bir tanısı olan kişiler için."
      correct: false

- q: "Çalışma kitabını sırasıyla okumak zorunda mısın?"
  type: true-false
  correct: false
  explanation: "Hayır. Atlayabilir, geri dönebilir, bir kenara koyabilirsin. Tempo ve sırayı sen belirlersin."
:::

:::flashcards{id=f-willkommen}
- front: "Bu çalışma kitabı kimin için?"
  back: "Senin için — eğer ruhsal yükle ilgili kendi deneyimin varsa."
- front: "Kintsugi"
  back: "Japon onarım sanatı: Kırık yerler altınla birleştirilir, gizlenmez. Recovery için metafor: Kırık olan yeni bir bütünün parçası olur."
- front: "Okurken kendi kararını verme"
  back: "Ne okuyacağını sen seçersin. Tempoyu sen seçersin. Her zaman yeniden başlayabilirsin."
:::

:::standard{reading_time=2}
Burada olduğun için sevindik.

Bu çalışma kitabı senin için yazıldı — eğer şu an zor bir dönem yaşıyorsan, bir tanı aldıysan ya da uzun süredir bir ruhsal hastalıkla yaşıyorsan.

Belki başlangıçtasın. Belki arkanda pek çok terapi var. Belki yaşadıkların için yeni bir dil arıyorsun — ya da sadece tamir etmek istemeyen, sadece sana eşlik eden birini.

Yanında bir şey getirmek zorunda değilsin. Ön bilgi yok, iyi bir gün yok, hazır bir hikâye yok. Sana hitap edeni oku. Şu an uygun olmayanı bırak. İstediğinde geri dön.

Sevdiğimiz bir görüntü Kintsugi'dir — Japon onarım sanatı. Kırık seramikler altınla birleştirilir. Kırık yerler gizlenmez, görünür kılınır. Kap, kırılma nedeniyle değerini kaybetmez — pek çok kişinin gözünde daha değerli olur.

Recovery benzer bir mantığı takip eder. Olmuş olan her şeyi rötuşlamak değildir mesele. Mesele, kırık olanın yeni bir bütünün parçası olmasına izin vermektir.

Başlamadan önce birkaç not:

- Tempo ve sırayı sen belirlersin.
- Farklı okuma modları vardır: kolay, standart, ayrıntılı.
- Her yerden girip çıkabilirsin.
- Bir şey çok fazla geldiğinde: bir kenara koy. Bu pes etmek değil — bu öz bakımdır.

Kimse seni zorlamıyor. Bu alan sana ait.
:::

:::standard-quiz{id=q-willkommen-std}
- q: "Tempoyu ve sırayı kim belirler?"
  type: multiple-choice
  options:
    - text: "Uygulama."
      correct: false
    - text: "Sen."
      correct: true
      explanation: "Atlayabilir, bırakabilir, geri dönebilirsin."
    - text: "Sıra kesin olarak belirlenmiştir."
      correct: false

- q: "Kintsugi recovery için bir görüntü olarak ne anlama gelir?"
  type: multiple-choice
  options:
    - text: "Kırık yerler mümkün olduğunca görünmez kılınır."
      correct: false
    - text: "Kırık yerler görünür kılınır — ve yeni bir bütünün parçası olur."
      correct: true
      explanation: "Recovery, her şeyi rötuşlamak değildir. Olmuş olan, yeni olanın parçası olabilir."
:::

:::standard-flashcards{id=f-willkommen-std}
- front: "Senin tempon"
  back: "Ne okuyacağını ve ne zaman okuyacağını sen belirlersin. Atlamak, bırakmak, geri dönmek — hepsi serbest."
- front: "Kintsugi"
  back: "Japon onarım sanatı: Kırık yerler altınla birleştirilir. Recovery için metafor — kırık olan yeni bir bütünün parçası olur."
- front: "Bir şey çok fazla geldiğinde"
  back: "Bir kenara koy. Bu pes etmek değil — bu öz bakımdır."
:::


# 1. Recovery aslında ne demek
{#kap-1 reading_time=5}

## Kelime ve tarihi

İngilizce recovery kelimesi tam olarak iyileşme, yeniden kazanma, dinlenme anlamına gelir. Ruh sağlığında 1980'lerden bu yana ruhsal acıya yeni bir bakış için kapsayıcı bir terim olarak yerleşmiştir [^anthony1993] [^deegan1988].

Recovery, öncelikle tıbbi bir terim değildir. Kendisi psikiyatrik tanı almış ve kendini buna indirgetmeyi reddeden insanların deneyimlerinden doğmuştur [^chamberlin1978] [^deegan1988].

## Klasik tanım

En çok alıntılanan tanım, o dönemde Boston Üniversitesi Psikiyatrik Rehabilitasyon Merkezi'nin direktörü olan William Anthony'den gelir.

:::quote{author="Anthony, 1993, S. 15" source="anthony1993" lang="en"}
Recovery is described as a deeply personal, unique process of changing one's attitudes, values, feelings, goals, skills, and/or roles. It is a way of living a satisfying, hopeful, and contributing life even with limitations caused by illness.
:::

:::quote-translation{source="anthony1993" translator="kendi çevirimiz"}
Recovery, son derece kişisel, eşsiz bir değişim sürecidir — kişinin kendi tutumlarının, değerlerinin, duygularının, hedeflerinin, becerilerinin veya rollerinin değişimi. Bir hastalığın kısıtlamalarıyla bile tatmin edici, umut dolu bir yaşam sürebileceğin ve katkıda bulunabileceğin bir yaşam biçimidir.
:::

Bu tanım, otuz yılı aşkın süredir uluslararası referans noktasıdır. Diğerleri arasında SAMHSA tarafından benimsenmiştir [^samhsa2012], Sainsbury Centre for Mental Health geleneği tarafından şekillendirilmiş ve WHO rehberlerine entegre edilmiştir [^who2021].

## Klinik ve kişisel iyileşme

Araştırma iki kavramı ayırır [^slade2009]:

- **Klinik iyileşme** (clinical recovery): Semptomlar azalır ya da kaybolur, tanı önemini yitirir. Bu anlayış tıptan gelir.
- **Kişisel iyileşme** (personal recovery): Yaşamını anlamlı, yaşanmaya değer ve kendi kararını verebileceğin bir yaşam olarak deneyimlersin — tüm semptomların kaybolup kaybolmadığına bakılmaksızın.

Bu çalışma kitabında Recovery, her şeyden önce kişisel iyileşmeyi ifade eder. Klinik iyileşme ile birlikte gidebilir, ama zorunlu değildir.

## Türkçe-Almanca dünyasındaki tanımlar

:::quote{author="Stiftung Pro Mente Sana Schweiz, 2024" source="promentesana"}
Recovery'nin en kısa tanımı şudur: ağır bir ruhsal kısıtlamayla karşı karşıya olsan bile mümkün olan en iyi yaşamı sürmek.
:::

Amering ve Schmolke "İyileşmezliğin Sonu"ndan söz eder [^ameringschmolke2012]. Boylamsal araştırmalara dayanırlar; bunlar şunu gösterir: Şizofreni gibi ağır hastalıklardan sonra bile doyurucu bir yaşam mümkündür. Knuf, Recovery'yi kişinin kendisi ve hastalığıyla bir yüzleşme süreci olarak anlar — ruhsal sorunlara rağmen umut dolu ve aktif bir yaşam sürme hedefiyle [^knuf2026].

Almanca S3-kılavuzu "Ağır Ruhsal Hastalıklarda Psikososyal Terapiler", Recovery'yi Almanca konuşulan bakım anaakımına taşıdı ve Recovery yönelimini bir kılavuz ilke olarak adlandırdı [^dgppn2019].

:::reflection{id=1 title="İyileşme senin için ne anlama geliyor?"}
- İyileşme kelimesini duyduğunda — ilk olarak hangi imge yükseliyor?
- Yukarıdaki tanımlardan hangisi sana en çok hitap ediyor? Ve neden?
- Senin için „iyi bir yaşam" ne olurdu — her şey „yok olmasa" bile?
:::

:::easy{reading_time=2}
Recovery şu anlama gelir: iyileşme.

Ama Recovery şu anlama gelmez: Tüm semptomlar kaybolmalı.

Recovery şu anlama gelir: İyi yaşıyorsun. Hâlâ ağır şeyler yaşıyor olsan bile.

İki tür iyileşme vardır:

- Semptomlar azalır. Bu klinik iyileşmedir.
- Yaşamını iyi ve anlamlı olarak deneyimlersin. Bu kişisel iyileşmedir.

Her ikisi de mümkündür. Her ikisi de aynı anda olabilir.

Bir İsviçre vakfı şöyle der: Recovery şu anlama gelir, mümkün olan en iyi yaşamı sürmek. Ağır bir şey orada olsa bile.

:::reflection{id=1-easy title="Kendine sor"}
- Senin için iyi bir yaşam ne anlama gelir?
- Bunun için neye sahip olman gerek? Neye değil?
:::
:::

:::quiz{id=q-1}
- q: "Recovery ne anlama gelir?"
  type: multiple-choice
  options:
    - text: "Tüm semptomların kaybolması gerekir."
      correct: false
      explanation: "Hayır. Kişisel iyileşme süren semptomlarla da işleyebilir."
    - text: "Anlamlı, kendi kararını verebildiğin bir yaşam sürmek — semptomlar kalsa bile."
      correct: true
      explanation: "Aynen. Kişisel iyileşmenin özü budur (Anthony 1993)."
    - text: "Belirli bir terapi yöntemi."
      correct: false

- q: "Araştırma hangi iki tür iyileşmeyi ayırt eder?"
  type: multiple-choice
  options:
    - text: "Hızlı ve yavaş iyileşme."
      correct: false
    - text: "Klinik ve kişisel iyileşme."
      correct: true
      explanation: "Klinik = semptomlar yok. Kişisel = anlamlı bir yaşam sürmek."
    - text: "Terapötik ve ilaçla iyileşme."
      correct: false
:::

:::flashcards{id=f-1}
- front: "Klinik iyileşme"
  back: "Semptomlar azalır ya da kaybolur. Tanı önemini yitirir. Tıbbi iyileşme anlayışı."
- front: "Kişisel iyileşme"
  back: "Yaşamını anlamlı, yaşanmaya değer ve kendi kararını verebileceğin bir yaşam olarak deneyimlersin — tüm semptomların kaybolup kaybolmadığına bakılmaksızın."
- front: "Anthony 1993 — temel tanım"
  back: "Recovery, tutumların, değerlerin, duyguların, hedeflerin ve rollerin son derece kişisel, eşsiz bir değişim sürecidir — kısıtlamalarla bile doyurucu bir yaşam sürmenin yolu."
- front: "Pro Mente Sana — en kısa tanım"
  back: "Mümkün olan en iyi yaşamı sürmek — ağır bir ruhsal kısıtlamayla karşı karşıya olsan bile."
:::

:::standard{reading_time=2}
Recovery bir İngilizce kelimedir. Tam olarak iyileşme, yeniden kazanma, dinlenme anlamına gelir. Ruh sağlığında 1980'lerden bu yana ruhsal acıya yeni bir bakış için kapsayıcı bir terimdir — ve bu bakış doktorlar tarafından değil, deneyim sahibi kişilerin kendileri tarafından icat edilmiştir.

Klasik tanım Boston'lu bir araştırmacı olan William Anthony'den gelir: Recovery, kişinin kendi tutumlarının, değerlerinin, hedeflerinin ve rollerinin son derece kişisel bir değişim sürecidir — bir hastalığın kısıtlamalarıyla bile doyurucu, umut dolu bir yaşam sürmenin yoludur.

Araştırma iki okuma ayırt eder:

- **Klinik iyileşme:** Semptomlar azalır ya da kaybolur. Tanı önemini yitirir. Bu tıbbi bakıştır.
- **Kişisel iyileşme:** Yaşamını anlamlı, yaşanmaya değer ve kendi kararını verebileceğin bir yaşam olarak deneyimlersin — hâlâ semptomlar olup olmamasına bakılmaksızın.

Bu çalışma kitabında Recovery, her şeyden önce kişisel iyileşmeyi ifade eder. Klinik iyileşmeyle birlikte gidebilir, ama zorunlu değildir. Her ikisi aynı anda olabilir. Ve her birinin kendi temposu olabilir.

İsviçre vakfı Pro Mente Sana bunu tek bir cümlede özetler: Recovery şu anlama gelir, mümkün olan en iyi yaşamı sürmek — ağır bir ruhsal kısıtlamayla karşı karşıya olsan bile.

Önemli olan şu: Tanından daha fazlasısın. Önce insansın — geri kalan her şey sonra gelir. Ve bu yolu yalnız yürümek zorunda değilsin. Başkaları sana eşlik edebilir.
:::

:::standard-quiz{id=q-1-std}
- q: "Recovery her şeyden önce ne anlama gelir?"
  type: multiple-choice
  options:
    - text: "İyileşmiş olmak. Artık semptom yok."
      correct: false
      explanation: "Bu klinik iyileşme olurdu. Recovery daha fazlasını ifade eder — her şeyden önce kişisel iyileşmeyi."
    - text: "Doyurucu bir yaşam — semptomlarla bile."
      correct: true
      explanation: "Tam olarak bu, Anthony'nin klasik tanımıdır (1993)."
    - text: "Belirli bir terapi yöntemi."
      correct: false

- q: "Araştırma hangi iki tür iyileşmeyi ayırt eder?"
  type: multiple-choice
  options:
    - text: "Hızlı ve yavaş iyileşme."
      correct: false
    - text: "Klinik ve kişisel iyileşme."
      correct: true
      explanation: "Klinik = semptomlar yok. Kişisel = anlamlı bir yaşam sürmek."

- q: "Recovery'yi bir kavram olarak kim geliştirdi?"
  type: multiple-choice
  options:
    - text: "Her şeyden önce doktorlar ve ilaç firmaları."
      correct: false
    - text: "Kendi psikiyatri deneyimi olan kişiler — araştırmayla birlikte."
      correct: true
      explanation: "Hareket, etkilenen kişilerin deneyimlerinden gelir."
:::

:::standard-flashcards{id=f-1-std}
- front: "Recovery (temel tanım)"
  back: "Doyurucu, umut dolu bir yaşam sürmek — bir hastalığın kısıtlamalarıyla bile (Anthony 1993)."
- front: "Klinik iyileşme"
  back: "Semptomlar azalır ya da kaybolur. Tanı önemini yitirir."
- front: "Kişisel iyileşme"
  back: "Yaşamını anlamlı, yaşanmaya değer ve kendi kararını verebileceğin bir yaşam olarak deneyimlersin — semptomlar kalsa bile."
- front: "Pro Mente Sana — en kısa tanım"
  back: "Mümkün olan en iyi yaşamı sürmek — ağır bir kısıtlamayla karşı karşıya olsan bile."
:::


# 2. Umut — Güç — Anlam
{#kap-2 reading_time=3}

2006 yılında Michaela Amering ve Margit Schmolke İsviçre uzman dergisi Managed Care'de "Hoffnung – Macht – Sinn. Recovery-Konzepte in der Psychiatrie" başlıklı bir makale yayımladılar [^ameringschmolke2006]. Böylece Almanca konuşulan Recovery okumasını belirleyici biçimde şekillendirdiler.

"Umut — Güç — Anlam" üçlüsü, DACH perspektifinden Recovery'nin neyle ilgili olduğunu özetler — temel İngilizce kavramların akılda kalıcı, günlük yaşama yakın bir Almancaya çevirisi olarak.

| Türkçe | İngilizce | D-A-CH bağlamındaki anlam |
|---------|----------|-----------------------------|
| **Umut** | Hope | Hastalıktan bağımsız olarak da bir öz duyguyu (yeniden) bulmak — terapötik bir etki kaynağı olarak umut. |
| **Güç** | Empowerment | Kendini yetkilendirme, seçme özgürlüğü, kendi sorumluluğun — eylem alanını yeniden sahiplenme anlamında "güç" [^knufseibert2004]. |
| **Anlam** | Meaning | Değerler, hedefler, katkı, aidiyet — yaşamı hasta rolünün ötesinde tanımlamak. |

Bu anlayışta umut, öz duyguyla sıkı sıkıya bağlıdır: hastalık deneyiminden bağımsız olarak var olan bir öz değerle ve hasta rolünden daha fazlasını kapsayan bir kimlikle [^ameringschmolke2006].

Üç kavram Anthony'nin Recovery tanımıyla [^anthony1993] uyumludur. Ve merkezi olarak CHIME modeliyle [^leamy2011] örtüşür: Umut = Hope, Güç = Empowerment, Anlam = Meaning. Bağlılık (Connectedness) ve Kimlik (Identity), çevresindeki ilişki ve öz çerçevesini oluşturur.

:::easy{reading_time=1}
İki araştırmacı, Recovery için Türkçede üç kelime buldu:

- **Umut** — Daha iyi olabileceğine inanırsın.
- **Güç** — Karar verebilirsin. Sadece hasta değilsin.
- **Anlam** — Yaşamının değeri var. Bir yere aitsin.

Bu üç kelime İngilizce CHIME modelinin Türkçe okumasıdır. Başkalarıyla bağlılık ve kendi kimliğin de buna aittir.
:::

:::quiz{id=q-2}
- q: "Bu Türkçe okumada 'Güç' ne anlama gelir?"
  type: multiple-choice
  options:
    - text: "Diğer insanlar üzerinde güç uygulamak."
      correct: false
    - text: "Kendini yetkilendirme — kendi yaşamı hakkında birlikte karar verme hakkı."
      correct: true
      explanation: "'Güç' burada olumlu anlamda Empowerment'ı ifade eder — başkaları üzerinde güç değil."
    - text: "Tıbbi yetkiler."
      correct: false

- q: "'Umut – Güç – Anlam' üçlüsünü kim getirdi?"
  type: multiple-choice
  options:
    - text: "Patricia Deegan"
      correct: false
    - text: "Amering & Schmolke (2006)"
      correct: true
      explanation: "İsviçre uzman dergisi Managed Care'de, 2006."
    - text: "WHO"
      correct: false
:::

:::flashcards{id=f-2}
- front: "Umut – Güç – Anlam"
  back: "Recovery'nin Türkçe okuması, Amering & Schmolke tarafından 2006'da getirildi. CHIME modelinde Hope, Empowerment, Meaning'e karşılık gelir."
- front: "Güç (Recovery anlamında)"
  back: "Kendini yetkilendirme — kendi yaşamı hakkında birlikte karar verme hakkı. Başkaları üzerinde güç değil."
:::

:::standard{reading_time=2}
Recovery, Türkçeye çevirisi zor bir İngilizce kelimedir. Avusturyalı psikiyatristler Michaela Amering ve Margit Schmolke 2006'da İsviçre uzman dergisi Managed Care'de özü yakalayan üç Almanca terim önerdiler — bugün DACH bölgesinde yaygın olan bir üçlü:

- **Umut** — yaşamının hastalıktan daha fazlası olabileceğine olan inanç. Semptomlardan bağımsız olarak da var olan bir öz duygu.
- **Güç** — kendini yetkilendirme. Başkaları üzerinde güç değil, kendi yaşamın üzerinde güç. Birlikte karar verebilme. Seçme özgürlüğü. Kendi sorumluluğun.
- **Anlam** — değerler, hedefler, aidiyet. Yaşamı hasta rolünün ötesinde tanımlayabilme.

Bu üç kelime klasik Recovery tanımıyla uyumludur. Aynı zamanda uluslararası en önemli Recovery modeli olan CHIME modelinin merkezi bölümlerine karşılık gelir:

- Umut = Hope
- Güç = Empowerment
- Anlam = Meaning

Bağlılık (Connectedness) ve Kimlik (Identity) çevresindeki çerçeveyi oluşturur — Umut, Güç ve Anlam'ın üzerinde büyüyebileceği zemin olarak ilişkiler ve öz imge.

Üçünü aynı anda hissetmek zorunda değilsin. Bazen sadece umut vardır, bazen sadece anlam. Bazen güçle başlar — kendin verdiğin tek bir kararla. Bu yeterlidir. Recovery, üstünü çizmek için bir liste değildir.
:::

:::standard-quiz{id=q-2-std}
- q: "Bu okumada 'Güç' ne anlama gelir?"
  type: multiple-choice
  options:
    - text: "Başkaları üzerinde güç uygulamak."
      correct: false
    - text: "Kendini yetkilendirme — kendi yaşamı hakkında birlikte karar verme hakkı."
      correct: true
      explanation: "'Güç' burada olumlu anlamda Empowerment'ı ifade eder."
    - text: "Tıbbi yetkiler."
      correct: false

- q: "'Umut — Güç — Anlam' üçlüsünü kim getirdi?"
  type: multiple-choice
  options:
    - text: "Patricia Deegan"
      correct: false
    - text: "Amering ve Schmolke (2006)"
      correct: true
      explanation: "İsviçre uzman dergisi Managed Care'de."
    - text: "WHO"
      correct: false
:::

:::standard-flashcards{id=f-2-std}
- front: "Umut — Güç — Anlam"
  back: "Recovery'nin Türkçe okuması (Amering ve Schmolke 2006). CHIME modelinde Hope, Empowerment, Meaning'e karşılık gelir."
- front: "Recovery anlamında Güç"
  back: "Kendini yetkilendirme — kendi yaşamı hakkında birlikte karar verme hakkı. Başkaları üzerinde güç değil."
- front: "Recovery anlamında Umut"
  back: "Yaşamının hastalıktan daha fazlası olabileceğine olan inanç. Semptomsuzluk olmadan da var olan bir öz duygu."
:::


# 3. Recovery NE değildir — altı yanlış inanış
{#kap-3 reading_time=5}

Recovery, günlük yaşamda sık sık yanlış anlaşılır.

## Yanlış inanış 1: Recovery, tüm semptomların kaybolması gerektiği anlamına gelir

Yanlış. Süren semptomları olan insanlar da Recovery deneyimleyebilir [^anthony1993] [^deegan1996] [^andresen2003]. Kişisel iyileşme semptomlarla birlikte var olabilir.

## Yanlış inanış 2: Recovery, sadece olumlu düşünmek demektir

Yanlış. Recovery, düğmeye basıldığında iyimserlik çağrısı değildir. Recovery araştırmasında umut, değişimin mümkün olduğuna dair gerçekçi, çoğu zaman inatçı bir inancı ifade eder [^slade2013] [^schrank2012].

## Yanlış inanış 3: Recovery, ilaç ya da terapi olmadan idare etmek demektir

Yanlış. Recovery bir anti-tıp hareketi değildir. SEN'in neyin yardımcı olduğuna birlikte karar verdiğin anlamına gelir [^deegandrake2006] [^slade2017sdm]. Amering ve Schmolke bunu şöyle keskinleştirir: İlaçların ya da belirli bir tanının kabulü, psikososyal desteğin tek koşulu olmamalıdır [^ameringschmolke2006].

## Yanlış inanış 4: Recovery, düz, öngörülebilir bir yoldur

Yanlış. Andresen, Oades ve Caputi [^andresen2003] ve daha pek çok kişi gösterir ki: Recovery neredeyse hiç doğrusal ilerlemez. Geriye düşüşler buna aittir ve son değil, yolun bir parçasıdır.

## Yanlış inanış 5: "Sağlıklı" olmayan kişi kendi suçundadır

Yanlış. Recovery bir performans kavramı değildir ve ahlaki bir yargı değildir. Yol pek çok faktöre bağlıdır — ilişkilere, bakıma, sosyoekonomik koşullara, travmalara, tesadüflere [^leboutillier2011].

## Yanlış inanış 6: Bir ruhsal hastalık "iyileşmez" — "kroniktir"

Yanlış ve zararlı. Vermont çalışması [^harding1987] gibi boylamsal çalışmalar ve daha yeni derlemeler [^lally2017] gösterir ki: İyileşme — ağır tanılardan da — düzenli olarak mümkündür.

Amering ve Schmolke bu tür kesinleştirmelere karşı açıkça uyarır [^ameringschmolke2012]: "Konuşma terapisi için fazla hastasınız" ya da tersi "Her şey yine eskisi gibi olacak" gibi cümleler, onların bakışına göre sadece yanlış değil — kelime anlamıyla — "yangın derecesinde tehlikelidir". Bu tür öngörüler insanlardan, henüz kullanma fırsatını bulamadan kendi eylem alanlarını alır.

Heinz Katschnig bunun için etkileyici bir görüntü bulmuştur: Umutsuzluk — dışarıdan iletilen ve çoğu zaman içselleştirilen — psikiyatrideki zincirlerin en sinsi biçimidir. Bu kadar etkili olmasının nedeni, dışarıdan görünmemesidir [^ameringschmolke2012].

:::reflection{id=2 title="Hangi yanlış inanış sana dokundu?"}
- Bu altı yanlış inanıştan hangisi senin için uzun süre gerçeklikti?
- Bu yanlış inanışı sana kim aktardı — aile, okul, medya, psikiyatri sistemi?
- Bu yanlış inanışı bugün bıraksaydın ne farklı olurdu?
:::

:::easy{reading_time=2}
Recovery hakkında pek çok yanlış fikir vardır. Bunlardan altısı sık sık karşılaşılır:

1. **Yanlış:** Tüm semptomların kaybolması gerekir. → Recovery semptomlarla da olur.
2. **Yanlış:** Olumlu düşünmek zorundasın. → İyi ruh halinde olma zorunluluğu yok.
3. **Yanlış:** İlaca izin yok. → Neyin yardımcı olduğuna birlikte karar verirsin.
4. **Yanlış:** Yol düzdür. → Geriye düşüşler buna aittir.
5. **Yanlış:** Sağlıklı olmayan suçludur. → Kimse suçlu değil.
6. **Yanlış:** Bazıları "iyileşmezdir". → Ağır hastalıklardan sonra da iyileşme mümkündür.
:::

:::quiz{id=q-3}
- q: "Hangi ifade doğrudur?"
  type: multiple-choice
  options:
    - text: "Recovery, tüm semptomların kaybolması gerektiği anlamına gelir."
      correct: false
    - text: "Recovery süren semptomlarla da işleyebilir."
      correct: true
      explanation: "Anthony 1993 ve pek çok takip çalışmasının temel ifadesi."
    - text: "Recovery sadece hafif hastalıklarda mümkündür."
      correct: false

- q: "Doğru mu yanlış mı: Recovery, ilaç almamak demektir."
  type: true-false
  correct: false
  explanation: "Recovery bir anti-tıp hareketi değildir. Uzmanlarla birlikte neyin yardımcı olduğuna karar verirsin."

- q: "Harding (1987) ve Lally (2017) gibi boylamsal çalışmalar ağır tanılar hakkında ne söylüyor?"
  type: multiple-choice
  options:
    - text: "İyileşmezler."
      correct: false
    - text: "İyileşme ağır seyirler sonrasında da düzenli olarak mümkündür."
      correct: true
      explanation: "Bu, Amering'in 'İyileşmezliğin Sonu' kavramının temelidir."
:::

:::flashcards{id=f-3}
- front: "En büyük Recovery yanlış inanışı"
  back: "Recovery şu anlama gelmez: tüm semptomlar yok. Recovery şu anlama gelir: iyi bir yaşam — zorluklarla bile."
- front: "Doğrusallık — yanlış"
  back: "Recovery doğrusal değildir. Geriye düşüşler buna aittir ve başarısızlık değildir."
- front: "'İyileşmez' — yanlış"
  back: "Boylamsal çalışmalar (Harding 1987, Lally 2017) gösterir: ağır hastalıklardan sonra da iyileşme düzenli olarak mümkündür."
- front: "'Yangın derecesinde tehlikeli'"
  back: "Amering & Schmolke (2012), 'Konuşma terapisi için fazla hastasınız' gibi prognozlar hakkında — bu tür kesinleştirmeler eylem alanını çalar."
:::

:::standard{reading_time=2}
Recovery hakkında pek çok yanlış imge dolaşır. Bunlardan altısı günlük yaşamda özellikle sık karşımıza çıkar — ve altısı da yanlıştır.

- **"Recovery, tüm semptomların kaybolması gerektiği anlamına gelir."** Doğru değil. Süren semptomları olan insanlar da doyurucu bir yaşam sürebilir. Kişisel iyileşme semptomlarla birlikte var olabilir.
- **"Recovery, her zaman olumlu düşünmek demektir."** Yanlış. Recovery, düğmeye basıldığında iyimserlik çağrısı değildir. Recovery araştırmasında umut, gerçekçi, çoğu zaman inatçı bir inançtır — zorla iyi ruh hali değil.
- **"Recovery, ilaçsız idare etmek demektir."** Yanlış. Recovery bir anti-tıp hareketi değildir. SEN'in neyin yardımcı olduğuna ve neyin olmadığına birlikte karar verdiğin anlamına gelir.
- **"Recovery düz, öngörülebilir bir yoldur."** Yanlış. Recovery neredeyse hiç doğrusal ilerlemez. Geriye düşüşler buna aittir. Başarısızlık değil, yolun bir parçasıdır.
- **"Sağlıklı olmayan kişi kendi suçundadır."** Yanlış. Recovery bir performans kavramı değildir ve ahlaki bir yargı değildir. Yol pek çok faktöre bağlıdır: ilişkilere, bakıma, sosyoekonomik koşullara, travmaya, tesadüfe.
- **"Ağır ruhsal hastalıklar iyileşmezdir."** Yanlış — ve tehlikeli. Boylamsal çalışmalar onlarca yıldır gösterir: İyileşme ağır tanılardan sonra da düzenli olarak mümkündür.

Amering ve Schmolke, "Konuşma terapisi için fazla hastasınız" ya da "Yine eskisi gibi olacak" gibi cümleleri "yangın derecesinde tehlikeli" olarak adlandırır. Bu tür öngörüler henüz kullanma fırsatını bulamadan eylem alanını senden çalar.

Dışarıdan iletilen ve içselleştirilen umutsuzluk — bunlar psikiyatrideki en sinsi zincirlerdir. Tam da görünmez olduğu için.
:::

:::standard-quiz{id=q-3-std}
- q: "Hangi ifade doğrudur?"
  type: multiple-choice
  options:
    - text: "Recovery, tüm semptomların kaybolması gerektiği anlamına gelir."
      correct: false
    - text: "Recovery süren semptomlarla da işleyebilir."
      correct: true
      explanation: "Bu, Anthony 1993'ten bu yana merkezi ifadedir."
    - text: "Recovery sadece hafif hastalıklarda mümkündür."
      correct: false

- q: "Recovery zor olduğunda kim suçludur?"
  type: multiple-choice
  options:
    - text: "Sen — yeterince çaba göstermiyorsun."
      correct: false
    - text: "Kimse. Recovery bir yarışma değildir ve ahlaki bir yargı değildir."
      correct: true
      explanation: "Yol pek çok faktöre bağlıdır — sadece senin irade gücüne değil."

- q: "Boylamsal çalışmalar „iyileşmez" tanılar hakkında ne söyler?"
  type: multiple-choice
  options:
    - text: "İyileşmez iyileşmez kalır."
      correct: false
    - text: "İyileşme ağır seyirler sonrasında da düzenli olarak mümkündür."
      correct: true
      explanation: "Vermont çalışması (Harding 1987), güncel meta-analizler (Lally 2017)."
:::

:::standard-flashcards{id=f-3-std}
- front: "En büyük Recovery yanlış inanışı"
  back: "„Tüm semptomların kaybolması gerekir." — Doğru değil. Recovery şu anlama gelir: zorluklarla bile iyi bir yaşam sürmek."
- front: "Doğrusallık — yanlış"
  back: "Recovery neredeyse hiç doğrusal ilerlemez. Geriye düşüşler buna aittir ve başarısızlık değildir."
- front: "„İyileşmez" — yanlış"
  back: "Boylamsal çalışmalar gösterir: Ağır hastalıklardan sonra da iyileşme düzenli olarak mümkündür."
- front: "„Yangın derecesinde tehlikeli""
  back: "Amering ve Schmolke, „Terapi için fazla hastasınız" gibi prognozlar hakkında — bu tür kesinleştirmeler eylem alanını çalar."
:::


# 4. Recovery hareketinin tarihi
{#kap-4 reading_time=6}

## Etkilenenlerin sesleri — 1970'ler ve 1980'ler

Recovery hareketi bir araştırma enstitüsünde doğmadı. 1970'lerde Kuzey Amerika'da, eski psikiyatri hastalarının girişimlerinde — sözde Ex-Patient ya da Survivor-Movement'ta — başladı [^chamberlin1978].

Merkezi seslerden biri Patricia Deegan'dır. 17 yaşında şizofreni tanısı aldı ve bir doktordan asla normal bir yaşam süremeyeceğini duydu. Bugün doktorası olan bir psikolog, araştırmacı ve uluslararası kabul gören bir Recovery öncüsüdür [^deegan1988] [^deegan1996].

Patricia Deegan, o günden beri uluslararası Recovery hareketini şekillendiren iki temel düşünce formüle etti [^deegan1996]:

- Recovery bir son nokta ve basit bir stabilizasyon değil, bir dönüşümdür — kendi sınırlarını kabul edip aynı zamanda yeni olanaklar keşfettiğin bir yoldur.
- Ruhsal hastalıkları olan insanlar yardımın pasif alıcıları değil, kendi eylemleriyle durumlarını değiştirebilen eylem yeteneğine sahip öznelerdir.

## Dorothea Buck, Trialog ve Ses Duyanlar

Almanca konuşulan bölgede Dorothea Buck benzer bir yol açtı. Kendisi NS-zorla kısırlaştırılmış ve defalarca psikiyatride tedavi görmüştü; bir yaşam boyu insancıl bir psikiyatri için mücadele etti [^buck1990].

1989'da Hamburg'da Thomas Bock'un girişimiyle ilk trialog psikoz semineri doğdu — etkilenenlerin, yakınların ve uzmanların eşit düzeyde konuştuğu bir format [^bockpriebe2005]. 1992'de Bundesverband Psychiatrie-Erfahrener (BPE) kuruldu. Uluslararası Hearing-Voices birliği, 1990'lardan bu yana Almanya, Avusturya ve İsviçre'de aktiftir [^hvn].

## Bilimselleşme — 1990'lar ve 2000'ler

William Anthony 1993'teki anahtar makalesiyle bilimsel tanımı sundu [^anthony1993]. Andresen, Oades ve Caputi Avustralya'da psikolojik iyileşmenin Beş Aşama Modelini geliştirdi [^andresen2003].

## Kavramdan sisteme — 2007'den itibaren

2007'de Büyük Britanya'da ImROC (Implementing Recovery through Organisational Change) programı başladı. O zamandan beri yüzlerce bakım hizmetine Recovery yönelimli pratiğe dönüşümlerinde eşlik etti [^imroc] [^perkins2012].

ABD'de Recovery 2006'da ulusal sağlık otoritesi SAMHSA'nın resmi kılavuzu haline geldi. BM Engelli Hakları Sözleşmesi, kendi kararını verme yönelimli bir insan hakları anlayışını sabitledi [^uncrpd2006]. WHO 2019'da QualityRights girişimini yayımladı [^who2019] ve 2021'de "Guidance on Community Mental Health Services" kılavuzunu [^who2021].

## Almanca konuşulan bölge

Avusturya'da Amering ve Schmolke 2006'da "Hoffnung – Macht – Sinn" makalesiyle [^ameringschmolke2006] ve 2012'de "Recovery. Das Ende der Unheilbarkeit" kitabıyla [^ameringschmolke2012] bir dönüm noktası işaretlediler. Almanya'da Andreas Knuf, Ulrich Seibert ile birlikte 2004'te "Selbstbefähigung fördern"i sundu [^knufseibert2004]; "Recovery und Empowerment" kitabı bugün 2. baskıda mevcuttur [^knuf2026].

EX-IN (Experienced Involvement) 2005'ten itibaren Bremen'de geliştirildi — Dorothea Buck ve AB destekli bir Leonardo-da-Vinci projesi tarafından ilham alındı [^utschakowski2009]. 2011'den bu yana EX-IN, EX-IN Deutschland e.V. derneği tarafından koordine edilmektedir [^exin_de]. Peer-Support üzerine bir Alman RKÇ etkinliği kanıtladı [^mahlke2017].

İsviçre'de Pro Mente Sana Vakfı Recovery kavramını bakıma taşır [^promentesana]. Recovery Colleges bugün diğer yerler arasında Bern, Doğu İsviçre, Cenevre, St. Gallen ve Zürih'te mevcuttur [^rcbern]. Recovery yöneliminin İsviçre psikiyatrisinde bilimsel olarak yerleşmesi diğerleri arasında Rössler tarafından gerçekleştirildi [^roessler2004].

:::easy{reading_time=2}
Recovery hastanede icat edilmedi. Recovery, etkilenen kişiler tarafından icat edildi.

Amerika'da 1970'lerde hasta kadınlar ve erkekler kitap yazmaya başladı. Şöyle dediler: Hastalığımızdan daha fazlasıyız.

Bilinen bir ses Patricia Deegan'dır. 17 yaşında şizofreni tanısı aldı. Bugün doktor ve başkalarına yardım ediyor.

Almanya'da Dorothea Buck önemliydi. Daha iyi bir psikiyatri için mücadele etti.

Bugün Recovery dünya çapında — WHO tarafından da — kabul görmektedir.
:::

:::quiz{id=q-4}
- q: "Başlangıçta Recovery hareketini kim şekillendirdi?"
  type: multiple-choice
  options:
    - text: "İlaç endüstrisi."
      correct: false
    - text: "Kendi psikiyatri deneyimi olan insanlar."
      correct: true
      explanation: "Hareket 1970'lerde ABD'de Survivor-Movement'tan doğdu."
    - text: "Hastane yönetimleri."
      correct: false

- q: "Patricia Deegan kimdir?"
  type: multiple-choice
  options:
    - text: "Kendi deneyimi olmayan bir doktor."
      correct: false
    - text: "Kendi şizofreni tanısı olan bir Recovery öncüsü."
      correct: true
      explanation: "17 yaşında tanı aldı. Bugün doktorası olan psikolog ve uluslararası kabul gören bir ses."
    - text: "Bir İsviçreli hemşirelik araştırmacısı."
      correct: false
:::

:::flashcards{id=f-4}
- front: "Patricia Deegan"
  back: "17 yaşında şizofreni tanısı, bugün doktorası olan psikolog. Uluslararası Recovery hareketinin şekillendirici sesi."
- front: "Dorothea Buck"
  back: "Alman öncü, NS-zorla kısırlaştırılmış. Bir yaşam boyu insancıl bir psikiyatri için mücadele etti. EX-IN'e ilham verdi."
- front: "Survivor-Movement"
  back: "1970'lerde ABD'deki eski psikiyatri hastalarının hareketi. Recovery hareketinin kökü."
- front: "ImROC"
  back: "Implementing Recovery through Organisational Change. 2007'den bu yana, bakım hizmetlerine Recovery yönelimli pratiğe dönüşümlerinde eşlik eden Britanya programı."
:::

:::standard{reading_time=2}
Recovery, derslikte doğmadı ve muayene odasında doğmadı. Recovery sokakta doğdu — kendilerini tanılarına indirgetmeyi reddeden eski hastaların girişimlerinde.

Hareket 1970'lerde Kuzey Amerika'da, sözde Survivor-Movement'ta başladı. En önemli seslerinden biri Patricia Deegan'dır. 17 yaşında şizofreni tanısı aldı. Bir doktor ona asla normal bir yaşam süremeyeceğini söyledi. Bugün doktorası olan bir psikologdur ve dünya çapında en etkili Recovery öncülerinden biridir.

Almanca konuşulan bölgede Dorothea Buck benzer bir sesti. Kendisi Nasyonal Sosyalizm döneminde zorla kısırlaştırılmış ve defalarca psikiyatride tedavi görmüştü; bir yaşam boyu insancıl bir psikiyatri için mücadele etti. 1989'da Hamburg'da Thomas Bock'un girişimiyle ilk trialog psikoz semineri doğdu — etkilenenlerin, yakınların ve uzmanların eşit düzeyde konuştuğu bir format.

O zamandan beri önemli kilometre taşları:

- **1993** — William Anthony Recovery'nin bilimsel tanımını sunar.
- **2003** — Avustralyalı araştırmacılar iyileşmenin beş aşamasını tanımlar.
- **2007** — Büyük Britanya'da bakım hizmetlerini Recovery yönelimine çeviren ImROC programı başlar.
- **2011** — CHIME modeli yayımlanır ve uluslararası standart olur.
- **2021** — WHO insan hakları temelli ruh sağlığı bakımı için kılavuzunu yayımlar.

İsviçre'de Pro Mente Sana Vakfı Recovery kavramını bakıma taşır. Recovery Colleges bugün Bern, Doğu İsviçre, Cenevre, St. Gallen ve Zürih'te bulunur. Almanya'da EX-IN — Experienced Involvement — iyileşme rehberliğini bir meslek olarak yerleştirdi.

Yani Recovery artık bir azınlık fikri değildir. Binlerce kişinin yaşanmış pratiğidir.
:::

:::standard-quiz{id=q-4-std}
- q: "Başlangıçta Recovery hareketini kim şekillendirdi?"
  type: multiple-choice
  options:
    - text: "İlaç endüstrisi."
      correct: false
    - text: "Kendi psikiyatri deneyimi olan insanlar."
      correct: true
      explanation: "Hareket 1970'lerde Survivor-Movement'tan doğdu."
    - text: "Hastane yönetimleri."
      correct: false

- q: "Patricia Deegan kimdir?"
  type: multiple-choice
  options:
    - text: "Kendi deneyimi olmayan bir doktor."
      correct: false
    - text: "Kendi şizofreni tanısı olan bir Recovery öncüsü, bugün doktorası olan psikolog."
      correct: true
      explanation: "17 yaşında tanı aldı, bugün Recovery hareketinin uluslararası bir sesi."

- q: "EX-IN nedir?"
  type: multiple-choice
  options:
    - text: "Bir ilaç grubu."
      correct: false
    - text: "Experienced Involvement — tanınan bir meslek olarak iyileşme rehberliği."
      correct: true
      explanation: "2005'ten itibaren Bremen'de geliştirildi, Dorothea Buck'tan ilham aldı."
:::

:::standard-flashcards{id=f-4-std}
- front: "Recovery nerede doğdu?"
  back: "Derslikte değil. Eski psikiyatri hastalarının girişimlerinde — 1970'lerde Kuzey Amerika'daki Survivor-Movement'ta."
- front: "Patricia Deegan"
  back: "17 yaşında şizofreni tanısı, bugün doktorası olan psikolog. Recovery hareketinin en etkili seslerinden biri."
- front: "Trialog"
  back: "Etkilenenlerin, yakınların ve uzmanların eşit düzeyde konuştuğu format. 1989'da Hamburg'da doğdu (Thomas Bock)."
- front: "İsviçre'de Recovery Colleges"
  back: "Bern, Doğu İsviçre, Cenevre, St. Gallen, Zürih. Recovery için öğrenme yerleri — herkese açık."
:::


# 5. CHIME ve CHIME-D
{#kap-5 reading_time=6}

2011 yılında Mary Leamy ve Mike Slade öncülüğündeki bir araştırma ekibi King's College London'da iyileşme seyirleri hakkında 97 bilimsel makale ve 87 başka raporu sistematik olarak değerlendirdi [^leamy2011]. Şunu bilmek istediler: Bir ruhsal hastalıktan geçtikleri yolu anlatırken insanlar her seferinde neyi anlatıyor?

Beş süreç ortaya çıktı; İngilizce baş harfleri CHIME kelimesini oluşturuyordu — çan sesi anlamına gelen İngilizce kelime.

:::table{name="CHIME"}
| Harf | Süreç | Ne anlama gelir |
|-----------|---------|-----------------|
| **C** | Connectedness · Bağlılık | İlişkiler, akran teması, aile, aidiyet, topluluk |
| **H** | Hope and Optimism · Umut | Değişime inanç, motivasyon, sürece güven, rol modeller |
| **I** | Identity · Kimlik | Tanının ötesinde ben kimim? Olumlu öz imge, öz değer |
| **M** | Meaning and Purpose · Anlam | Yaşam anlamı, değerler, roller, hedefler, gerektiğinde maneviyat |
| **E** | Empowerment · Öz yetkinlik | Sorumluluk almak, karar vermek, güçleri kullanmak |
:::

CHIME bugün dünya çapında en etkili Recovery modelidir. Bird ve diğerleri bir doğrulama çalışmasında çerçevenin uygulanabilirliğini onayladı [^bird2014]. Britanya REFOCUS çalışmasının, küme rasgele atanmış bir deneyin temelinde yatar [^slade2015refocus].

CHIME bir aşama modeli ve bir kontrol listesi değildir. Üst üste binen beş temayı tanımlar. Bazen biri ön planda, bazen başka biri. Almanca konuşulan bölgede CHIME, "Umut – Güç – Anlam" okumasıyla [^ameringschmolke2006] iyi bağlanabilir.

## CHIME-D — altıncı boyut: Zorluklar

Modelin önemli bir geliştirilmesi CHIME-D'dir. Stuart, Tansey ve Quayle, niteliksel Recovery literatürünün sistematik best-fit sentezinde tespit etmişlerdir ki orijinal CHIME çerçevesinde deneyim raporlarında düzenli olarak ortaya çıkan bir boyut eksiktir: Zorlukların (Difficulties) açıkça kabul edilmesi — travma, kayıp, damgalama ve hastalık sonuçları [^stuart2017].

Bu nedenle modele D harfini eklediler:

- **C** — Connectedness · Bağlılık
- **H** — Hope · Umut
- **I** — Identity · Kimlik
- **M** — Meaning · Anlam
- **E** — Empowerment · Öz yetkinlik
- **D** — Difficulties · Zorluklar: Travma, kayıp, damgalama ve hastalık sonuçlarının açıkça kabulü

Araştırmalar gösterir ki ortalama olarak Recovery anlatılarının yaklaşık %54'ü yaşanan zorluklar üzerinedir [^stuart2017]. CHIME-D bu nedenle uyarır: Recovery yönelimi toksik iyimserliğe dönüşmemelidir. Acıya, yasa, gerçekten olmuş ve olan şeylere yer bırakmalı — ve paralel olarak kaynaklara ve değişime bakışı korumalıdır.

Güncel araştırma CHIME-D'yi Recovery yönelimli bakımın sağlam bir referans çerçevesi olarak doğrular [^vanweeghel2024] [^hancock2025].

:::info{type=note title="CHIME-D bu çalışma kitabı için neden önemli"}
Recovery kavramları zaman zaman acıyı küçültebildikleri ya da bir „umut etme yükümlülüğü" yaratabildikleri için eleştirilir.

CHIME-D bu eleştiriyi ciddiye alır: İyileşme, ağır olan şeyin artık yer almaması anlamına gelmemelidir.

Dijital çalışma kitabında bu şu anlama gelir: Acı VE umut için yer. Kayıplar VE hedefler için. Olmuş olan VE olmasına izin verilen için.
:::

:::reflection{id=3 title="CHIME'da neredesin?"}
- Hangi harf (C, H, I, M, E) şu an sana en çok hitap ediyor?
- Hangisi şu an en ağır geliyor?
- Son iki haftayı düşündüğünde: Küçük bir aydınlık nerede vardı — ve onu hangi harfe yerleştirirdin?
:::

:::easy{reading_time=2}
Araştırmacılar 2011'de Recovery için beş önemli tema buldular. İngilizce baş harfleri CHIME kelimesini oluşturur (İngilizce için çan sesi):

- **C** — Connectedness · Bağlılık
- **H** — Hope · Umut
- **I** — Identity · Kimlik
- **M** — Meaning · Anlam
- **E** — Empowerment · Öz yetkinlik

Sonra bir harf daha eklendi:

- **D** — Difficulties · Zorluklar

D önemlidir. Recovery ağır olan şeyleri küçültmemelidir. Acı ve yas yer alabilir.
:::

:::quiz{id=q-5}
- q: "CHIME-D'deki 'D' neyi temsil eder?"
  type: multiple-choice
  options:
    - text: "Tanı (Diagnosis)"
      correct: false
    - text: "Difficulties — Zorluklar (travma, kayıp, damgalama)"
      correct: true
      explanation: "Stuart, Tansey & Quayle (2017) bu boyutun orijinal CHIME'da eksik olduğunu gösterdi."
    - text: "Depression"
      correct: false

- q: "Hangi harf 'Bağlılık' anlamına gelir?"
  type: multiple-choice
  options:
    - text: "C – Connectedness"
      correct: true
    - text: "I – Identity"
      correct: false
    - text: "E – Empowerment"
      correct: false

- q: "CHIME üstünü çizmek için bir liste midir?"
  type: true-false
  correct: false
  explanation: "Hayır — CHIME üst üste binen beş temayı tanımlar. Bazen biri ön planda, bazen başka biri."
:::

:::flashcards{id=f-5}
- front: "CHIME"
  back: "Connectedness · Hope · Identity · Meaning · Empowerment. Beş Recovery süreci (Leamy ve diğerleri 2011)."
- front: "CHIME-D'deki D"
  back: "Difficulties — Zorluklar, travma, kayıp, damgalama, hastalık sonuçları. Recovery ağır olan şeyi yok saymamalı (Stuart ve diğerleri 2017)."
- front: "Connectedness"
  back: "Bağlılık. İlişkiler, akran teması, aile, aidiyet, topluluk."
- front: "Empowerment"
  back: "Öz yetkinlik. Sorumluluk almak, karar vermek, güçleri kullanmak."
:::

:::standard{reading_time=2}
2011'de King's College London'daki bir araştırma ekibi 180'den fazla çalışma ve raporu değerlendirdi ve şunu sordu: Recovery yolunu anlatırken insanlar her seferinde neyi tanımlıyor? Beş süreç ortaya çıktı — ve onların İngilizce baş harfleri CHIME kelimesini oluşturuyor (İngilizce için çan sesi).

- **C — Connectedness · Bağlılık:** İlişkiler, aile, akran teması, aidiyet, topluluk.
- **H — Hope · Umut:** Değişime inanç. Rol modeller. Sürece güven.
- **I — Identity · Kimlik:** Tanının ötesinde ben kimim? Hasta rolünün ötesinde olumlu bir öz imge.
- **M — Meaning · Anlam:** Değerler, hedefler, roller, bazen maneviyat.
- **E — Empowerment · Öz yetkinlik:** Sorumluluk almak. Karar vermek. Güçleri kullanmak.

CHIME bugün uluslararası en önemli Recovery modelidir. Ama bir kontrol listesi ve bir merdiven değildir. Üst üste binen beş temayı tanımlar. Bazen biri ön planda, bazen başka biri.

## CHIME-D'deki D

2017'de araştırmacılar tespit ettiler: CHIME modelinde bir şey eksik. Recovery anlatılarında her seferinde ortaya çıkan bir şey — zorlukların açıkça kabul edilmesi. Bu nedenle bir harf eklediler:

- **D — Difficulties · Zorluklar:** Travma, kayıp, damgalama, hastalık sonuçları.

Araştırmalar gösteriyor: Recovery anlatılarının yaklaşık %54'ü yaşanan zorluklara değinir. CHIME-D bu nedenle uyarır: Recovery zorla iyimserliğe dönüşmemelidir. Acı, yas ve gerçekten olmuş olan şey için yer olmalıdır — kaynaklara bakışla paralel olarak.

Senin için bu şu anlama gelir: Çalışma kitabında ağır olanın yeri vardır. Umut kadar.
:::

:::standard-quiz{id=q-5-std}
- q: "CHIME-D'deki „D" neyi temsil eder?"
  type: multiple-choice
  options:
    - text: "Tanı"
      correct: false
    - text: "Difficulties — Zorluklar (travma, kayıp, damgalama)"
      correct: true
      explanation: "Stuart, Tansey ve Quayle 2017'de bu boyutun orijinal CHIME'da eksik olduğunu gösterdi."
    - text: "Depression"
      correct: false

- q: "Hangi harf „Bağlılık" anlamına gelir?"
  type: multiple-choice
  options:
    - text: "C — Connectedness"
      correct: true
    - text: "I — Identity"
      correct: false
    - text: "E — Empowerment"
      correct: false

- q: "CHIME üstünü çizmek için bir liste midir?"
  type: true-false
  correct: false
  explanation: "Hayır — CHIME üst üste binen beş temayı tanımlar. Bazen biri ön planda, bazen başka biri."
:::

:::standard-flashcards{id=f-5-std}
- front: "CHIME"
  back: "Connectedness · Hope · Identity · Meaning · Empowerment. Beş Recovery süreci (Leamy ve diğerleri 2011)."
- front: "CHIME-D'deki D"
  back: "Difficulties — Zorluklar, travma, kayıp, damgalama. Recovery ağır olan şeyi yok saymamalı."
- front: "CHIME — liste mi değil mi?"
  back: "Üstünü çizmek için bir liste değil. Üst üste binen beş tema. Bazen biri ön planda, bazen başka biri."
- front: "Empowerment"
  back: "Öz yetkinlik. Sorumluluk almak, karar vermek, güçleri kullanmak."
:::


# 6. İyileşmenin beş aşaması
{#kap-6 reading_time=3}

CHIME beş iç süreci tanımlarsa, Andresen, Oades ve Caputi modeli yolun tipik aşamalarını tanımlar [^andresen2003] [^andresen2006].

:::table{name="Phasen-der-Genesung"}
| Aşama | Türkçe | İçeride ne olur |
|-------|---------|------------------------|
| **1. Moratorium** | Durgunluk | Kayıp duygusu, umutsuzluk, geri çekilme |
| **2. Awareness** | Uyanış | İlk umut, fark etme: her şey kaybedilmedi |
| **3. Preparation** | Hazırlık | Envanter yapmak: neyi yapabilirim, neye ihtiyacım var? |
| **4. Rebuilding** | Yeniden inşa | Aktif olarak yeni hedefler, roller, ilişkiler inşa etmek |
| **5. Growth** | Büyüme | Doyurucu bir yaşam — kalıntı semptomlarla ya da onlarsız |
:::

Aşamalar katı değildir. Aynı aşamadan birkaç kez geçmek normaldir. Aynı zamanda iki aşamada bulunmak da normaldir — bir yaşam alanında büyümede, başka bir alanda yine durgunlukta. Dört temel görev tüm aşamalardan geçer [^andresen2003]: Umut bulmak, kimliği yeniden inşa etmek, anlam bulmak, sorumluluk almak.

:::easy{reading_time=1}
Recovery'nin sık sık aşamaları vardır. Avustralya'dan üç araştırmacı beş aşama tanımladı:

1. **Durgunluk** — Her şey ağır ve umutsuz hissettirir.
2. **Uyanış** — Fark edersin: Belki bir şeyler hâlâ olabilir.
3. **Hazırlık** — Neyi yapabildiğine bakarsın.
4. **Yeniden inşa** — Yeni planlar yaparsın.
5. **Büyüme** — Yaşamını yaşarsın. Semptomlarla ya da onlarsız.

Aşamalar arasında atlayabilirsin. Bir merdiven gibi değildir. Daha çok bir spiral gibidir.
:::

:::quiz{id=q-6}
- q: "Andresen, Oades ve Caputi kaç aşama tanımlıyor?"
  type: multiple-choice
  options:
    - text: "Üç"
      correct: false
    - text: "Beş"
      correct: true
    - text: "Yedi"
      correct: false

- q: "Aşamalar doğrusal mı?"
  type: true-false
  correct: false
  explanation: "Hayır. Atlayabilir, aynı aşamadan birkaç kez geçebilir ya da aynı anda iki aşamada olabilirsin."
:::

:::flashcards{id=f-6}
- front: "Moratorium"
  back: "İlk aşama: Durgunluk. Kayıp duygusu, umutsuzluk, geri çekilme."
- front: "Awareness"
  back: "Uyanış aşaması. İlk umut. Fark etme: her şey kaybedilmedi."
- front: "Growth"
  back: "Büyüme — kalıntı semptomlarla ya da onlarsız doyurucu bir yaşam."
- front: "Tüm aşamaların dört görevi"
  back: "Umut bulmak · Kimliği yeniden inşa etmek · Anlam bulmak · Sorumluluk almak."
:::

:::standard{reading_time=2}
Recovery nadiren düz bir çizgide ilerler. Üç Avustralyalı araştırmacı — Andresen, Oades ve Caputi — pek çok yaşam hikâyesinden beş tipik aşama çıkardılar:

- **Moratorium (Durgunluk)** — Her şey ağır görünür. Kaybolmuş hissedersin, geri çekilirsin. Umut uzaktır.
- **Awareness (Uyanış)** — İlk bir kıvılcım: belki yine de her şey bitmemiştir.
- **Preparation (Hazırlık)** — Envanter yaparsın. Neyi yapabilirim? Neye ihtiyacım var? Kim burada?
- **Rebuilding (Yeniden inşa)** — Adım adım yeni roller, hedefler ve ilişkiler inşa edersin.
- **Growth (Büyüme)** — İyi hisseden bir yaşam sürersin — kalıntı semptomlarla ya da onlarsız.

Bilinmesi önemli: Bu aşamalar bir merdiven değildir. Aynı aşamadan birkaç kez geçmek normaldir. Bir yaşam alanında zaten büyümede olmak ve başka birinde yine durgunlukta olmak normaldir. Geriye düşüşler buna aittir. Başarısız olduğun anlamına gelmezler.

Dört görev tüm aşamalardan geçer: Umut bulmak, kimliği yeniden inşa etmek, anlam bulmak, sorumluluk almak.

Kendine sor: Şu an hangi aşamadasın — belki aynı anda birkaç aşamada?
:::

:::standard-quiz{id=q-6-std}
- q: "Beş aşama bir merdiven gibi midir — biri diğerinin ardından?"
  type: multiple-choice
  options:
    - text: "Evet, onları sırayla geçmen gerekir."
      correct: false
      explanation: "Hayır — aşamalar katı değildir. Geriye düşüşler ve atlamalar normaldir."
    - text: "Hayır. Atlayabilir, tekrarlayabilir ya da aynı anda birkaçında olabilirsin."
      correct: true
      explanation: "Aynen. Recovery bir merdivenden çok bir spiraldir."

- q: "Hangi aşama başlangıçtaki durgunluğu tanımlar?"
  type: multiple-choice
  options:
    - text: "Growth"
      correct: false
    - text: "Moratorium"
      correct: true
      explanation: "Moratorium = umutsuzluk ve geri çekilme aşaması."
    - text: "Awareness"
      correct: false
:::

:::standard-flashcards{id=f-6-std}
- front: "Beş aşama"
  back: "Moratorium · Awareness · Preparation · Rebuilding · Growth. Bir merdiven değildirler — atlamalar ve geriye düşüşler normaldir."
- front: "Tüm aşamalarda dört görev"
  back: "Umut bulmak · Kimliği yeniden inşa etmek · Anlam bulmak · Sorumluluk almak."
- front: "Geriye düşüş — ne anlama gelir?"
  back: "Başarısızlık değil. Yolun normal bir parçası. Recovery bir spiraldir, düz bir çizgi değil."
:::


# 7. İyileşmenin üç düzeyi
{#kap-7 reading_time=3}

Araştırmada üç düzey ayırt edilir [^slade2009]:

- **Klinik iyileşme**: Semptomlar azalır, bir tanı önemini yitirir.
- **İşlevsel iyileşme**: Senin için önemli olan şeyleri yine yapabilirsin: çalışmak, öğrenmek, ilişkileri sürdürmek, günlük yaşamına bakmak.
- **Kişisel iyileşme**: Yeni anlam, yeni öz imge, yeni umut bulursun. Kendini, her şey „yok olmasa" bile yaşamına yön verebilen biri olarak deneyimlersin.

Üç düzey birbirini güçlendirebilir, ama bu sırada gerçekleşmek zorunda değildir.

:::reflection{id=4 title="Hangi düzey senin için önemli?"}
- Bir yıl sonra iyi hisseden bir yaşam hayal ettiğinde: Ne farklı olurdu?
- Üç düzeyden — klinik, işlevsel, kişisel — hangisi şu an senin için en önemli hissettiriyor?
- Daha önce yapmayı sevdiğin ve yaşamına geri getirmek istediğin bir şey var mı?
:::

:::easy{reading_time=1}
Üç tür iyileşme vardır:

- **Klinik:** Semptomlar azalır.
- **İşlevsel:** Yine bir şeyler yapabilirsin: çalışmak, öğrenmek, ilişkileri sürdürmek.
- **Kişisel:** Anlam ve umut deneyimlersin. Yaşamın hakkında birlikte karar verirsin.

Recovery için en önemlisi kişisel iyileşmedir.
:::

:::quiz{id=q-7}
- q: "Hangi düzey Recovery'nin temel anlamıdır?"
  type: multiple-choice
  options:
    - text: "Klinik iyileşme"
      correct: false
    - text: "İşlevsel iyileşme"
      correct: false
    - text: "Kişisel iyileşme"
      correct: true
      explanation: "Bu, Recovery hareketinin merkezi okumasıdır."

- q: "Üç düzey belirli bir sırada gerçekleşmek zorunda mı?"
  type: true-false
  correct: false
  explanation: "Hayır — birbirini güçlendirebilirler, ama sabit bir sırada gerçekleşmek zorunda değildirler."
:::

:::flashcards{id=f-7}
- front: "İyileşmenin üç düzeyi"
  back: "Klinik (semptomlar) · işlevsel (günlük yaşam, iş, ilişkiler) · kişisel (anlam, umut, kendi kararını verme)."
- front: "Kişisel iyileşme — en önemlisi"
  back: "Recovery hareketinin kalbi. Klinik semptomlar kalsa bile mümkündür."
:::

:::standard{reading_time=2}
Recovery araştırmasında sık sık üç iyileşme düzeyi arasında ayrım yapılır — ve onları ayrı tutmaya değer:

- **Klinik iyileşme** — Semptomlar azalır ya da kaybolur. Tanı ağırlığını kaybeder. Bu, klasik tıbbın okumasıdır.
- **İşlevsel iyileşme** — Senin için önemli olan şeyleri yine yapabilirsin. Çalışmak ya da öğrenmek. Bir ev geçindirmek. Arkadaşlıkları sürdürmek. Günlük yaşamını şekillendirmek.
- **Kişisel iyileşme** — Yeni anlam bulursun. Tanının ötesinde bir kimlik inşa edersin. Kendini, yaşamına yön verme hakkı olan biri olarak deneyimlersin. Umut geri döner.

Üç düzey birbirini taşıyabilir. Ama bu sırada gerçekleşmek zorunda değildirler. Bazı insanlar semptomlar sessizleşmeden çok önce kişisel iyileşme deneyimler. Diğerleri önce işlevi inşa eder — ve ancak o zaman içeride de bir şeyin kaydığını fark eder.

Recovery hareketi vurguyu açıkça kişisel iyileşmeye koyar. Çünkü klinik semptomlar kalsa bile mümkündür. İyi bir yaşam sürmek için „iyileşmiş" olmak zorunda değilsin.

Kendine sor: Üç düzeyden hangisi şu an senin için en önemli hissettiriyor?
:::

:::standard-quiz{id=q-7-std}
- q: "Hangi düzey Recovery hareketinin merkezindedir?"
  type: multiple-choice
  options:
    - text: "Klinik iyileşme — sadece semptomlar yokken geçerli."
      correct: false
    - text: "Kişisel iyileşme — tanının ötesinde anlam, umut, kimlik."
      correct: true
      explanation: "Aynen. Kişisel iyileşme semptomlar kalsa bile mümkündür."
    - text: "İşlevsel iyileşme — yeter ki işlevsel olasın."
      correct: false

- q: "Üç düzey sırayla mı gelir?"
  type: multiple-choice
  options:
    - text: "Evet — önce klinik, sonra işlevsel, sonra kişisel."
      correct: false
    - text: "Hayır. Birbirini taşıyabilirler, ama sabit bir sırada gerçekleşmek zorunda değildirler."
      correct: true
:::

:::standard-flashcards{id=f-7-std}
- front: "İyileşmenin üç düzeyi"
  back: "Klinik (semptomlar) · işlevsel (günlük yaşam, iş, ilişkiler) · kişisel (anlam, umut, kimlik)."
- front: "Kişisel iyileşme"
  back: "Recovery'nin kalbi. Semptomlar kalsa bile iyi bir yaşam sürmek."
- front: "Sıra?"
  back: "Sabit bir sıra yok. Bazı insanlar klinik semptom azalmasından çok önce iç iyileşme deneyimler."
:::


# 8. Umut — kalp
{#kap-8 reading_time=4}

Umut neredeyse tüm Recovery modellerinde ilk söylenen şeydir [^leamy2011] [^andresen2003] [^schrank2012]. Schrank ve meslektaşları kanıtladılar: Umut semptomlardan bağımsız olarak kişisel iyileşmeyi öngörür [^schrank2012].

Recovery araştırmasında umut naif bir güven değildir. Gerçekçiliğin karşıtı da değildir. Yaşamının, içinde bulunduğun en kötü günden daha fazlası olabileceğine dair somut, çoğu zaman sessiz bir inançtır [^slade2013].

Mike Slade bu bulguyu şöyle özetler: Umut, bir iyileşme sürecini ilk başta harekete geçiren enerjidir — onsuz hiçbir şey başlamaz [^slade2013].

## Ödünç alınan bir kaynak olarak umut

Recovery hareketinin merkezi bir fikri şudur: Umut senin kendinden gelmek zorunda değildir. Yeniden hissedinceye kadar başkaları tarafından tutulabilir ve ödünç alınabilir [^russinova1999] [^deegan1996] [^schrank2012]. İyi akranların, iyi uzmanların, iyi yakınların yaptığı tam olarak budur: "Şu an umudun olamazsa, biz onu senin için tutarız."

Uzmanlar için umut bu nedenle bir karakter özelliği değildir, profesyonel bir yetkinliktir — Russinova'ya göre "hope-inspiring competence" [^russinova1999].

:::reflection{id=5 title="Umut kaynakları"}
- Sana daha önce umut veren neydi — bir insan, bir yer, bir etkinlik, bir düşünce?
- Çevrende şu an kendin hissedemediğinde umudu senin için tutan kim?
- Bugün seni umuda doğru hareket ettirebilecek küçük bir adım var mı?
:::

:::easy{reading_time=1}
Umut, Recovery'nin kalbidir.

Umut şu anlama gelmez: Her zaman neşelisin. Umut şu anlama gelir: Yaşamının en kötü günden daha fazlası olabileceğine inanırsın.

En önemlisi: Umuda tek başına sahip olmak zorunda değilsin. Başkaları onu senin için tutabilir. Onu yeniden hissedinceye kadar.

İyi bir cümle: "Şu an umudun yoksa, biz onu senin için tutarız."
:::

:::quiz{id=q-8}
- q: "Araştırma (Schrank ve diğerleri 2012) umut hakkında ne söylüyor?"
  type: multiple-choice
  options:
    - text: "Umut semptomlardan bağımsız olarak kişisel iyileşmeyi öngörür."
      correct: true
      explanation: "Umut bir öngörücüdür — semptomlar devam etse bile."
    - text: "Umut yalnızca hafif hastalıklarda etkilidir."
      correct: false
    - text: "Umudu her zaman kendin getirmelisin."
      correct: false

- q: "'Ödünç alınmış umut' ne anlama gelir?"
  type: multiple-choice
  options:
    - text: "Aileden umut satın almak."
      correct: false
    - text: "Başkaları sen kendin hissedinceye kadar umudu senin için tutar."
      correct: true
      explanation: "Recovery hareketinin temel bir fikri."
:::

:::flashcards{id=f-8}
- front: "Ödünç alınmış umut"
  back: "Umudun olamadığında, akranlar, uzmanlar ya da yakınlar onu senin için tutar — yeniden hissedinceye kadar."
- front: "Recovery araştırmasında umut"
  back: "Naif güven değil — yaşamının en kötü günden daha fazlası olabileceğine dair sessiz, çoğu zaman inatçı bir inanç."
- front: "Hope-inspiring competence"
  back: "Russinova 1999: Umudu esinlemek bir karakter özelliği değil, profesyonel bir yetkinliktir."
:::

:::standard{reading_time=2}
Umut neredeyse tüm Recovery modellerinde ilk söylenen şeydir. Ve bu tesadüf değil.

Mike Slade araştırmayı şöyle özetler: **„Umut, iyileşme sürecini ilk başta harekete geçiren enerjidir — onsuz hiçbir şey başlamaz."**

Recovery okumasında umut, naif bir güven değildir. Gerçekçiliğin karşıtı da değildir. Sessiz, bazen inatçı bir inançtır: Yaşamının, içinde bulunduğun en kötü günden daha fazlası olabileceğine.

## Umut ödünç alınabilir

Recovery hareketinin en önemli fikirlerinden biri şudur: **Umut senin kendinden gelmek zorunda değildir.** Yeniden hissedinceye kadar başkaları tarafından tutulabilir ve ödünç alınabilir.

İyi akranların, iyi uzmanların, iyi yakınların yaptığı tam olarak budur. Bazen kelimelerle, bazen sadece varlıklarıyla şunu söylerler:

> „Şu an umudun olamazsa, biz onu senin için tutarız. Ne kadar zaman alırsa o kadar."

Bu bir terapi tekniği değildir. Bu bir tutumdur. Uzmanlar için umut bu nedenle kendi ruh haliyle ilgili bir mesele değil, profesyonel bir yetkinliktir — *hope-inspiring competence* (Russinova).

Kendine sor:

- Yaşamında şu an umudu senin için kim tutuyor?
- Sorsan kim tutabilir?
- Ve kim için sen kendin umudu tutuyorsun — belki farkında olmadan?
:::

:::standard-quiz{id=q-8-std}
- q: "„Ödünç alınmış umut" ne anlama gelir?"
  type: multiple-choice
  options:
    - text: "Umudu kendin kazanmak zorundasın."
      correct: false
    - text: "Başkaları sen kendin yeniden hissedinceye kadar umudu senin için tutar."
      correct: true
      explanation: "Recovery hareketinin temel bir fikri. Umut sadece bireysel bir performans değildir."

- q: "Recovery araştırmasında umut naif güvenle aynı şey midir?"
  type: multiple-choice
  options:
    - text: "Evet, sadece iyimserlik."
      correct: false
    - text: "Hayır. Sessiz, çoğu zaman inatçı bir inanç: yaşamının en kötü günden daha fazlası olabileceğine."
      correct: true
:::

:::standard-flashcards{id=f-8-std}
- front: "Recovery'de umut"
  back: "Naif güven değil — yaşamının en kötü günden daha fazlası olabileceğine dair sessiz inanç."
- front: "Ödünç alınmış umut"
  back: "Umudun olamadığında, akranlar, uzmanlar ya da yakınlar onu senin için tutar — yeniden hissedinceye kadar."
- front: "Slade alıntısı"
  back: "„Umut, iyileşme sürecini ilk başta harekete geçiren enerjidir — onsuz hiçbir şey başlamaz.""
:::


# 9. Güçlenme ve kendi kararını verme
{#kap-9 reading_time=4}

Empowerment kelimesi Recovery ile sıkı sıkıya bağlıdır. 20. yüzyılın insan hakları ve özgürleşme hareketlerinden gelir [^herriger2014] [^knufseibert2004] [^knuf2026].

1980'lerde kavram psikiyatrik bakımda da ele alındı. Empowerment şu anlama gelir: Kendini yetkilendirme. Aktif katılım. Taşımak istediğin ve taşıyabileceğin yerlerde sorumluluk almak. Rogers ve meslektaşları buna yönelik ilk ampirik olarak kanıtlanmış Empowerment ölçeğini geliştirdi [^rogers1997]. Almanca konuşulan bölgede „Selbstbefähigung fördern" standart bir eserdir [^knufseibert2004].

## Shared Decision-Making

Empowerment pratikte her şeyden önce şu anlama gelir: Talimatlar yerine ortak kararlar. Uzmanlar seninle birlikte karar verir, senin hakkında değil [^charles1997] [^deegandrake2006]. Çalışmalar gösterir: Kararlara dahil edilen kişi daha memnundur ve genellikle daha iyi sonuçlar elde eder [^joosten2008] [^slade2017sdm].

## Personal Medicine

Pat Deegan, Personal Medicine kavramını ortaya çıkardı: Bir insanın sağlıklı kalmasına yardımcı olan ilaç olmayan şeyler — uyku, bir köpek, belirli bir yürüyüş, koroda şarkı söylemek, akşam telefon görüşmesi. Personal Medicine, Recovery hareketinde ilaçlarla eşdeğer olarak anlaşılır ve tedavi sözleşmelerine alınır [^deegan2005].

## Önceden bildirimler ve Joint Crisis Plans

Somut bir Empowerment aracı tedavi sözleşmeleri ya da Joint Crisis Plans'tır — stabil durumda kriz halinde ne olması ve ne olmaması gerektiğini belirlediğin sözleşmeler. Henderson ve meslektaşları bir RKÇ'de Joint Crisis Plans'ın zorla yatırmaları önemli ölçüde azalttığını gösterebildi [^henderson2004].

:::easy{reading_time=2}
Empowerment şu anlama gelir: Karar verebilirsin. Kendi yaşamın üzerinde gücün vardır.

Psikiyatride bu çoğu zaman şu anlama gelir: Birlikte karar veriyoruz. Doktor tek başına karar vermez.

Sorular sorabilirsin. Hayır diyebilirsin. İkinci bir görüş alabilirsin.

„Personal Medicine" de vardır. Bunlar ilaç dışında yardımcı olan şeylerdir: bir köpek, bir yürüyüş, bir koro, iyi bir arkadaş. Bu şeyler ilaçlar kadar önemlidir.
:::

:::quiz{id=q-9}
- q: "'Shared Decision-Making' ne anlama gelir?"
  type: multiple-choice
  options:
    - text: "Doktor tek başına karar verir."
      correct: false
    - text: "Uzman ve etkilenen kişi birlikte karar verir."
      correct: true
      explanation: "Charles, Gafni & Whelan 1997 kavramı yerleştirdi."
    - text: "Aile karar verir."
      correct: false

- q: "'Personal Medicine' (Pat Deegan) ne anlama gelir?"
  type: multiple-choice
  options:
    - text: "DNA profiline göre kişiselleştirilmiş ilaçlar."
      correct: false
    - text: "Bir insanın sağlıklı kalmasına yardımcı olan ilaç olmayan şeyler."
      correct: true
      explanation: "Köpek, yürüyüş, koro, şarkı söylemek — tedavi sözleşmelerine entegre edilebilir."

- q: "Joint Crisis Plans'a yönelik RKÇ (Henderson 2004) ne gösteriyor?"
  type: multiple-choice
  options:
    - text: "Ölçülebilir bir etkileri yok."
      correct: false
    - text: "Zorla yatırmaları önemli ölçüde azaltırlar."
      correct: true
:::

:::flashcards{id=f-9}
- front: "Empowerment"
  back: "Kendini yetkilendirme. Aktif katılım. Taşımak istediğin ve taşıyabileceğin yerlerde sorumluluk almak."
- front: "Personal Medicine"
  back: "Pat Deegan: seni sağlıklı tutan ilaç olmayan şeyler — uyku, hareket, ilişkiler, hobiler. İlaçlarla eşdeğer."
- front: "Joint Crisis Plan"
  back: "Stabil durumda sözleşme: kriz halinde ne olmalı, ne olmamalı? RKÇ (Henderson 2004) gösterir: zorla yatırmaları azaltır."
- front: "Shared Decision-Making"
  back: "Uzman ve etkilenen kişi birlikte karar verir — talimat ve uyum değil."
:::

:::standard{reading_time=2}
Empowerment kendini yetkilendirme anlamına gelir. Karar verebilirsin — yaşamın ve tedavin üzerine.

Bu kendiliğinden anlaşılır gibi gelir, ama psikiyatrinin günlük yaşamında çoğu zaman değildir. Uzun süre şu geçerliydi: Uzman karar verir, hasta uyar. Recovery bu noktayı belirgin biçimde kaydırır — **ortak sorumluluğa** doğru.

## Üç somut araç

**Shared Decision-Making** — Kararlar birlikte alınır. Neyin önerildiğini sorarsın. Sana ve yaşamına neyin uyduğunu söylersin. Çalışmalar gösterir: Dahil edilen kişi daha memnundur ve daha iyi sonuçlar elde eder.

**Personal Medicine** (Pat Deegan) — Sadece ilaçlar yardımcı olmaz. Aynı zamanda seni bir kişi olarak sağlıklı tutan şey: bir köpek, sabah bir yürüyüş, bir koro, akşam telefon görüşmesi, bahçe, yürüyüş. Recovery hareketinde Personal Medicine tıbbi tedaviyle **eşdeğerdir** — ve her tedavi sözleşmesine girer.

**Joint Crisis Plan** — Stabil durumda ekibinle belirlediğin bir sözleşme: Kriz halinde ne olmalı? Ne olmamalı? Kimin bilgilendirilmesini istiyorum? Hangi ilaçları tolere ediyorum, hangilerini etmiyorum? Bir RKÇ (Henderson 2004) gösterir: Bu tür planlar zorla yatırmaları önemli ölçüde azaltır.

## Empowerment'in ne anlama gelmediği

Empowerment şu anlama gelmez: her şeyi tek başına başarmak. Uzmanlara karşı olmak anlamına gelmez. Şu anlama gelir: senin sesin sayılır — uzman sesinin yanında. Her ikisi birlikte daha fazladır.

Kendine sor: Şu an nerede karar verebiliyorsun? Nerede daha fazla ses sahibi olmak istersin?
:::

:::standard-quiz{id=q-9-std}
- q: "Shared Decision-Making ne anlama gelir?"
  type: multiple-choice
  options:
    - text: "Sen tek başına karar verirsin, doktor susar."
      correct: false
    - text: "Uzman ve sen birlikte karar verirsiniz."
      correct: true
      explanation: "Aynen. Senin sesin uzman sesinin yanında sayılır."

- q: "Pat Deegan'a göre „Personal Medicine" nedir?"
  type: multiple-choice
  options:
    - text: "DNA testine göre kişiselleştirilmiş ilaçlar."
      correct: false
    - text: "Seni sağlıklı tutan ilaç olmayan şeyler — köpek, yürüyüş, koro, arkadaş."
      correct: true
      explanation: "İlaçlarla eşdeğer ve her tedavi sözleşmesinin parçası."

- q: "Bir Joint Crisis Plan ne sağlar?"
  type: multiple-choice
  options:
    - text: "Pek etki etmeyen zorunlu bir alıştırmadır."
      correct: false
    - text: "Zorla yatırmaları azaltır — bir RKÇ ile kanıtlanmış (Henderson 2004)."
      correct: true
:::

:::standard-flashcards{id=f-9-std}
- front: "Empowerment"
  back: "Kendini yetkilendirme. Karar verebilirsin — yaşamın ve tedavin üzerine. Değil: her şeyi tek başına başarmak."
- front: "Shared Decision-Making"
  back: "Uzman ve sen birlikte karar verirsiniz. Daha iyi sonuçlar, daha yüksek memnuniyet."
- front: "Personal Medicine"
  back: "Pat Deegan: seni sağlıklı tutan ilaç olmayan şeyler. İlaçlarla eşdeğer."
- front: "Joint Crisis Plan"
  back: "Stabil durumda sözleşme: kriz halinde ne olmalı, ne olmamalı? Zorla yatırmaları azaltır."
:::


# 10. Salutogenez — sağlıklı kalmak
{#kap-10 reading_time=3}

Recovery yönelimli düşünce, salutogenez kavramıyla sıkı sıkıya bağlıdır [^antonovsky1979] [^antonovsky1997]. „İnsanları ne hasta yapar?" (Patogenez) diye sormak yerine salutogenez „İnsanları ne sağlıklı tutar?" diye sorar.

Antonovsky koherans duygusunu (Sense of Coherence) merkezi bir koruyucu faktör olarak tanımladı — yaşamını anlaşılır, yönetilebilir ve anlamlı olarak deneyimleme yetisi. Üç bileşen, CHIME süreçleri ve „Umut – Güç – Anlam" üçlüsüyle dikkat çekici biçimde örtüşür.

Almanca konuşulan bölgede Schmolke salutogenetik kavramları şizofreni tanısı olan insanlar için kullanılabilir hale getirdi [^schmolke2001]. Salutogenez ve Recovery, DACH literatüründe düzenli olarak aynı tutumun iki yüzü olarak tanımlanır — kaynak yerine eksiklik yönelimli olmadığını [^knuf2026] [^ameringschmolke2012].

:::info{type=note title="Antonovsky'nin koherans duygusunun üç bileşeni"}
- **Anlaşılabilirlik** (Comprehensibility): Yaşamım bir bağlam oluşturuyor.
- **Yönetilebilirlik** (Manageability): Gelenle baş edebilirim — tek başıma ya da yardımla.
- **Anlamlılık** (Meaningfulness): Çaba göstermeye değer.
:::

:::easy{reading_time=1}
Tıp sık sık şunu sorar: İnsanları ne hasta yapar? Buna patogenez denir.

Salutogenez farklı bir şey sorar: İnsanları ne sağlıklı tutar?

Araştırmacı Aaron Antonovsky üç önemli nokta buldu:

- Yaşamımı anlıyorum.
- Ağır şeylerle baş edebilirim — tek başıma ya da yardımla.
- Yaşamımın bir anlamı var.

Bu üç nokta varsa, yüke karşı daha güçlüsündür.
:::

:::quiz{id=q-10}
- q: "Patogenez ile salutogenez arasındaki fark nedir?"
  type: multiple-choice
  options:
    - text: "Patogenez daha yenidir."
      correct: false
    - text: "Patogenez hastalığı sorar — salutogenez sağlığı."
      correct: true
    - text: "Patogenez sadece bedensel hastalıklar için geçerlidir."
      correct: false

- q: "Salutogenez kavramını kim geliştirdi?"
  type: multiple-choice
  options:
    - text: "Sigmund Freud"
      correct: false
    - text: "Aaron Antonovsky"
      correct: true
:::

:::flashcards{id=f-10}
- front: "Salutogenez"
  back: "İnsanları ne sağlıklı tutar? (Antonovsky 1979). Patogenezin karşıt parçası — „Ne hasta yapar?" sorusu."
- front: "Koherans duygusu"
  back: "Anlaşılabilirlik · Yönetilebilirlik · Anlamlılık. Antonovsky'ye göre koruyucu faktör."
:::

:::standard{reading_time=2}
Klasik tıp sorar: **„İnsanları ne hasta yapar?"** Buna patogenez denir. Nedenler, riskler, eksiklikler arar.

Sosyolog Aaron Antonovsky soruyu tersine çevirdi. Şunu sordu: **„İnsanları ne sağlıklı tutar — yük altında bile?"** Buna salutogenez denir.

## Koherans duygusu

Antonovsky gözlemledi: Ağır yaşam krizlerinden iyi çıkan insanlar çoğu zaman belirli bir iç tutumu paylaşır. Buna **koherans duygusu** dedi ve üç bileşen tanımladı:

- **Anlaşılabilirlik** — Yaşamım bir bağlam oluşturur. Bana olan şeyler bir yere oturtulabilir.
- **Yönetilebilirlik** — Gelenle baş edebilirim. Tek başıma ya da yardımla.
- **Anlamlılık** — Çaba göstermeye değer. Yaşamımın bir yönü vardır.

Bu üç bileşen tanıdık geliyor. Beş CHIME süreciyle ve „Umut — Güç — Anlam" üçlüsüyle şaşırtıcı biçimde yakındırlar.

## Bu neden önemli

Salutogenez ve Recovery aynı temel tutumu paylaşırlar: kaynak yerine eksiklik yönelimli değil. Semptomların bir demeti olarak değil, güçleri, deneyimleri, ilişkileri olan bir insan olarak görülürsün — pek çok şey ağır olsa bile.

DACH literatüründe (Schmolke; Amering ve Schmolke) salutogenez ve Recovery bu nedenle çoğu zaman aynı madalyonun iki yüzü olarak tanımlanır.

Kendine sor: Seni ne sağlıklı tutar — bugün de, şu an da?
:::

:::standard-quiz{id=q-10-std}
- q: "Patogenezin tersine salutogenez neyi sorar?"
  type: multiple-choice
  options:
    - text: "İnsanları ne hasta yapar?"
      correct: false
      explanation: "Bu patogenezdir. Salutogenez tersini sorar."
    - text: "İnsanları ne sağlıklı tutar — yük altında bile?"
      correct: true
      explanation: "Antonovsky'nin sorduğu soru."

- q: "Koherans duygusuna hangi üç bileşen aittir?"
  type: multiple-choice
  options:
    - text: "Anlaşılabilirlik · Yönetilebilirlik · Anlamlılık"
      correct: true
      explanation: "Antonovsky'nin üçlü sesi. „Umut – Güç – Anlam"a şaşırtıcı biçimde yakın."
    - text: "Umut · İnanç · Sevgi"
      correct: false
:::

:::standard-flashcards{id=f-10-std}
- front: "Salutogenez"
  back: "İnsanları ne sağlıklı tutar? (Antonovsky). Patogenezin karşıt parçası — „Ne hasta yapar?" sorusu."
- front: "Koherans duygusu"
  back: "Anlaşılabilirlik · Yönetilebilirlik · Anlamlılık. Yük altında koruyucu faktör."
- front: "Salutogenez ve Recovery"
  back: "Aynı tutumun iki yüzü: kaynak yerine eksiklik yönelimli değil. Semptomlarından daha fazlasısın."
:::


# 11. Damgalama ve kendine yönelik damgalama
{#kap-11 reading_time=4}

Damgalama, en büyük Recovery engellerinden biridir. Goffman bu kavramı sosyal bilimler için yarattı: Damgalama, bir kişiyi başkalarının gözünde değersizleştiren bir özelliktir [^goffman1963].

## Damgalamanın üç düzeyi

Corrigan ve Watson üç düzey ayırt eder [^corrigan2002]:

- **Kamusal damgalama**: Toplumdaki önyargılar („ruhsal hastalar tehlikelidir").
- **Yapısal damgalama**: Yasalarda, işgücü piyasasında, sigorta sisteminde dezavantajlar.
- **Kendine yönelik damgalama** (içselleştirilmiş damgalama): Olumsuz imgeleri kendin hakkında bir imge olarak benimsersin.

## Kendine yönelik damgalama — fırtına içe vurduğunda

Corrigan ve meslektaşları kendine yönelik damgalamayı dört adımda gerileyen bir süreç olarak tanımlar: algılamak, kabul etmek, uygulamak, acı çekmek — öz değer, öz yetkinlik ve hastalık seyri üzerinde sonuçlarla [^corrigan2011].

İyi haber: Kendine yönelik damgalama değiştirilebilir. Sistematik derlemeler gösterir ki psikososyal müdahaleler — özellikle gruplarda — içselleştirilmiş damgalamayı azaltabilir [^yanos2015] [^buechter2023]. Yaşam deneyimi olan insanlarla doğrudan teması olan damga karşıtı programlar da meta-analizlerde küçük ila orta etkiler gösterir [^corrigan2012] [^thornicroft2016].

İyileşme rehberlerinin deneyim raporlarında [^utschakowski2009] bir düşünce defalarca ortaya çıkar: Asıl yaralayıcı olan tanının kendisi değildir. Tanının başkalarının gözünde bir insandan ne yaptığıdır — ve etkilenen kişinin kendisi hakkında inanmaya başladığı şeydir. Kendine yönelik damgalama tam da bu dikişte oluşur.

:::reflection{id=6 title="İç sesler"}
- Kendi hastalığın ya da eşlik ettiğin kişinin hastalığı hakkında kendine hangi cümleleri söylüyorsun?
- Bu cümlelerden hangileri aslında kendi sesin değil, dışarıdan benimsenmiş imgeler?
- Aynı gerçeğin daha dostça bir versiyonu hangi cümle olurdu?
:::

:::easy{reading_time=2}
Damgalama şu anlama gelir: Bir şey yüzünden kötülenirsin. Örneğin: bir tanın olduğu için.

Üç alanda damgalama vardır:

- Toplumda — önyargılar, kötü sözler.
- Kurallarda ve yasalarda — örneğin sigortalarda zorluklar.
- Kendinde — kendin hakkındaki kötü şeylere inanırsın.

Sonuncusu kendine yönelik damgalamadır. Tehlikelidir. Başkaları yapmadan önce seni küçültür.

İyi haber: Kendine yönelik damgalama değişebilir. Konuşmak yardımcı olur. Aynı şeyi yaşayan başka insanlarla buluşmak da yardımcı olur.
:::

:::quiz{id=q-11}
- q: "Kendine yönelik damgalama nedir?"
  type: multiple-choice
  options:
    - text: "Başkalarının bana yaptığı damgalama."
      correct: false
    - text: "Olumsuz imgeleri kendim hakkında bir imge olarak benimsediğimde."
      correct: true
      explanation: "Corrigan & Watson 2002 bunu gerileyen bir süreç olarak tanımlar."

- q: "Hangi yöntem damgalamayı en etkili şekilde azaltır?"
  type: multiple-choice
  options:
    - text: "Susmak."
      correct: false
    - text: "Yaşanmış deneyimi olan insanlarla doğrudan temas."
      correct: true
      explanation: "Thornicroft ve diğerleri 2016 bunu bir meta-analizde gösterir."

- q: "Kendine yönelik damgalama değiştirilebilir mi?"
  type: true-false
  correct: true
  explanation: "Evet — psikososyal müdahaleler, özellikle gruplarda, içselleştirilmiş damgalamayı azaltır (Yanos 2015)."
:::

:::flashcards{id=f-11}
- front: "Damgalamanın üç düzeyi"
  back: "Kamusal damgalama · yapısal damgalama · kendine yönelik damgalama (içselleştirilmiş damgalama)."
- front: "Kendine yönelik damgalama"
  back: "Olumsuz toplumsal imgeleri kendin hakkında bir imge olarak benimsediğinde. Değiştirilebilir."
- front: "En etkili damga karşıtı yöntem"
  back: "Yaşanmış deneyimi olan insanlarla doğrudan kişisel temas (Corrigan ve diğerleri 2012; Thornicroft ve diğerleri 2016)."
:::

:::standard{reading_time=2}
Damgalama, Recovery yolundaki en büyük engellerden biridir. Sosyolog Erving Goffman damgalamayı bir kişiyi başkalarının gözünde değersizleştiren bir özellik olarak tanımladı.

## Üç düzey

Patrick Corrigan damgalamanın etki ettiği üç düzey ayırt eder:

- **Kamusal damgalama** — Toplumdaki önyargılar. „Ruhsal hastalar tehlikelidir." „Kendini topla."
- **Yapısal damgalama** — Yasalarda, işgücü piyasasında, sigortalarda, kurumlarda dezavantajlar.
- **Kendine yönelik damgalama** — Dışarıdan gelen olumsuz imgeleri kendin hakkında bir imge olarak benimsersin.

## Fırtına içe vurduğunda

Kendine yönelik damgalama özellikle sinsidir. Seni küçültür — başkaları denemeden önce. Corrigan dört adımda bir süreç tanımlar: algılamak, kabul etmek, uygulamak, acı çekmek. Sonuç: daha az öz değer, daha az öz yetkinlik, çoğu zaman daha zor bir hastalık seyri.

İyileşme rehberlerinin deneyim raporlarında bir düşünce defalarca ortaya çıkar: **Asıl yaralayıcı olan tanının kendisi değildir. Yaralayıcı olan, tanının başkalarının gözünde bir insandan ne yaptığıdır — ve kişinin kendisi hakkında inanmaya başladığı şeydir.**

## İyi haber

Kendine yönelik damgalama değiştirilebilir. Araştırma gösterir: psikososyal müdahaleler — özellikle gruplarda — içselleştirilmiş damgalamayı azaltır. Kamusal damgalamaya karşı en etkili olan, yaşanmış deneyimi olan insanlarla **doğrudan temastır**.

Sen tanın değilsin. Bir hikâyesi, değerleri, ilişkileri, becerileri olan bir insansın.

Kendine sor: Hastalığın hakkında kendine hangi cümleleri söylüyorsun — ve bunlardan hangileri aslında dışarıdan benimsenmiş sesler?
:::

:::standard-quiz{id=q-11-std}
- q: "Kendine yönelik damgalama nedir?"
  type: multiple-choice
  options:
    - text: "Başkalarının bana yaptığı damgalama."
      correct: false
    - text: "Olumsuz toplumsal imgeleri kendim hakkında bir imge olarak benimsediğimde."
      correct: true
      explanation: "Corrigan & Watson 2002: dört adımlık gerileyen bir süreç."

- q: "Kamusal damgalamaya karşı en iyi ne işe yarar?"
  type: multiple-choice
  options:
    - text: "Susmak ve gizlemek."
      correct: false
    - text: "Genel nüfus ile yaşanmış deneyimi olan insanlar arasında doğrudan temas."
      correct: true
      explanation: "Thornicroft ve diğerleri 2016: Karşılaşma imgeleri değiştirir."

- q: "Kendine yönelik damgalama değiştirilebilir mi?"
  type: multiple-choice
  options:
    - text: "Hayır — sonsuza kadar sabittir."
      correct: false
    - text: "Evet — özellikle gruplarda ve psikososyal müdahalelerle."
      correct: true
:::

:::standard-flashcards{id=f-11-std}
- front: "Damgalamanın üç düzeyi"
  back: "Kamusal damgalama · yapısal damgalama · kendine yönelik damgalama (içselleştirilmiş)."
- front: "Kendine yönelik damgalama"
  back: "Dışarıdan gelen olumsuz imgelere kendin hakkında inandığında. Başkaları yapmadan önce seni küçültür. Değiştirilebilir."
- front: "Damgalamaya karşı ne işe yarar?"
  back: "Yaşanmış deneyimi olan insanlarla doğrudan temas. Konuşmak. Gruplar. Hikâye paylaşmak."
- front: "Sen tanın değilsin"
  back: "Bir hikâyesi, değerleri, ilişkileri, becerileri olan bir insansın."
:::


# En önemli değişim: hastalıktan, kendi deneyiminin uzmanı olmaya
{#kap-shift reading_time=8}

Uzun süre psikiyatrik tedavi gördüysen — belki yıllar, belki on yıllar — o zaman bu seninle bir şeyler yapmıştır. Sadece hastalık değil. Rol de.

Klasik tıpta net bir görev paylaşımı vardır: Uzman bilir. Hasta uyar. Tanı neyin olduğunu açıklar. İlaç ya da terapi yeniden iyileştirir. Bu mantık pek çok bedensel hastalıkta iyi işler. Ruhsal acıda son otuz yılda giderek daha açık hale gelen sınırlara çarpar.

## Uzun rolün seninle yapmış olabileceği şeyler

Belki bunlardan birini ya da birkaçını tanıyabilirsin:

- Kendini bir tanı aracılığıyla tanımlamayı öğrendin. „Ben Bipolarım." „Ben Borderline'ım." „Ben kronik bir vakayım."
- Senin için neyin iyi olduğunu başka birinin daha iyi bildiğini öğrendin — doktor, terapist, tedavi ekibi.
- Kendi sezgine kuşkuyla bakıldığını öğrendin — „yetersiz hastalık içgörüsü" ya da „Non-Compliance" olarak.
- Beklemeyi öğrendin — bir sonraki randevu, bir sonraki ilaç, sonunda etki edecek bir sonraki yöntem için.
- İyileşmenin seninle yapılan bir şey olduğunu öğrendin. Senin yaptığın bir şey değil.

Bu kişisel bir zayıflık değildir. Öğrenilmiş bir tepkidir. Araştırmada buna *öğrenilmiş çaresizlik* denir — ve insanların uzun süre az kontrole sahip oldukları sistemlerde yaşadıkları her yerde ortaya çıkar [^seligman1975].

Recovery hareketinin en şekillendirici seslerinden biri olan Patricia Deegan bunun için çok keskin bir terim oluşturdu: *spirit breaking* [^deegan1990]. Bununla yardım eden sistemlerin bazen yapmaları gerekenin tersini nasıl yaptıklarını tanımlar — insanların öz duygusunu, eylem güçlerini, seslerini güçlendirmek yerine nasıl kırdıklarını. Kötü niyetten değil. Sistemin mantığı böyle öngördüğü için.

## İyileşmeyi engelleyen paradigma

Larry Davidson ve David Roe farkı bilimsel olarak yakaladılar [^davidsonroe2007]. Recovery'nin iki çok farklı anlamından söz ediyorlar:

- **Recovery FROM** — Bir hastalıktan iyileşme. Bu, tıbbi okumadır: semptomlar geri çekildi, işlev geri döndü, en iyi durumda tanı arkanda.
- **Recovery IN** — Bir hastalıkla iyileşme. Bu, kişisel okumadır: semptomlar hâlâ orada olsa bile seni doyuran bir yaşam sürmek.

Her ikisi de mümkündür. Her ikisi de değerlidir. Ama tamamen farklı mantıkları takip ederler. *Recovery FROM* muayene odasında gerçekleşir — sen pasif alıcısın. *Recovery IN* senin yaşamında gerçekleşir — sen eyleyen kişisin.

Hollandalı Recovery araştırmacısı Wilma Boevink bunu daha da keskinleştirir [^boevink2017]: Ağır ruhsal hastalıkları olan pek çok insan için psikiyatri sistemi öncelikle bir iyileşme sistemi değildir. Daha uzun bir yoldaki birkaç araçtan biridir. Bunu anlayan — ve kendisini onun nesnesi olarak deneyimlemek yerine psikiyatriyi bir araç olarak kullanmaya başlayan — temel bir şeyi kaydırır.

## Değişimin pratikte nasıl göründüğü

Değişim küçük adımlarla olur. Nadiren bir patlama anı vardır. İşte nasıl görünebileceğine dair birkaç örnek:

:::table{name="Vom-Patient-zum-Experten"}
| Hasta rolünden … | … uzman tutumuna |
|-----------------------|--------------------------|
| „Bana ne yapacağımı söyleyin." | „Ne öneriyorsunuz — ve hayatıma ne uyar?" |
| „Asla daha iyi olmayacak." | „Bugün zordu. Bakalım gelecek hafta ne getirecek." |
| „Doktorum benim için neyin iyi olduğunu bilir." | „Birlikte karar veriyoruz — ve aramda sorular sorabilirim." |
| „Ben tanımım." | „Bir tanım var. O ben olan her şey değildir." |
| „Başarısız oldum." | „Şu an zor bir gün geçiriyorum. Bu bir bilgidir, bir yargı değil." |
| „Bundan bahsedersem ekip belki ilaçlarımı alır." | „Bu yan etki beni yoruyor. Alternatifleri birlikte inceleyebilir miyiz?" |
| „Cesur olmalıyım." | „Yardım kabul edebilirim — ve hangisini istediğime karar verebilirim." |
:::

Bu kaymaların hiçbiri artık yardıma ihtiyacın olmadığı anlamına gelmez. Hiçbiri uzmanlara karşı olman gerektiği anlamına gelmez. Bu isyan meselesi değil, pozisyon meselesidir.

## Bu değişim neden bu kadar önemli

Pek çok tavsiyeden biri değildir. Recovery'nin senin için etkili olmasının ön koşuludur:

- **Umut** ancak kendisini öznesel olarak deneyimleyen bir benlikte gelişebilir.
- **Kişisel hedefler** ancak kendisini hedef sahibi olabilen biri olarak deneyimleyen biri tarafından takip edilebilir.
- **Öz yetkinlik** ancak kişinin bir şeye kendisinin neden olduğunu deneyimlediği yerde inşa edilir — yalnızca kendisine bir şey olmasını beklemeyerek değil.
- **Yaşamdaki anlam** seçim yoluyla doğar. Seçeneği olmayanın anlam bulması zordur.

Araştırma bunu açıkça doğrular. Roe ve Davidson [^roedavidson2005] Recovery'yi „kırıkları yeniden toplama" ve kendi hikâyeyi yeniden yazma olarak tanımlar. Anlatısal kimlik yeniden inşası üzerine güncel çalışmalar gösteriyor [^chiba2019narrative]: Recovery aşamasında hasta rolünün ötesinde bir kimliği (yeniden) inşa eden kişi belirgin biçimde daha ileri gider — semptomlar kalsa bile.

:::info{type=note title="Burada kastedilmeyen şey"}
Hasta olmaktan uzman tutumuna geçiş, ilaçları kesmek, tedavileri sonlandırmak ya da tek başına idare etmek için bir çağrı değildir. Uzmanlara yönelik bir suçlama değildir.

Kendi sesini bir kaynak olarak alma davetidir — uzmanların seslerinin yanında. Ve senin için neyin doğru olduğunu bulma davetidir.
:::

## Deneyimi olan, deneyimli olur

Almanca konuşulan bölgede bu adım için güzel bir isim vardır: deneyim uzmanı (kadın ya da erkek). EX-IN eğitiminde tam olarak bu sistematik biçimde geliştirilir — psikiyatri deneyimi olan insanlardan, on iki modül üzerinde kendi deneyimlerini başkaları için bir kaynak olarak kullanılabilir hale getiren rehberler ortaya çıkar [^utschakowski2009] [^exin_de].

Bu değişimi gerçekleştirmek için iyileşme rehberi olmak zorunda değilsin. Ama fikir, yalnızca kendine uygulasan bile yararlıdır: Hikâyen sana olmuş ve seni tanımlayan bir şey değildir. Bildiğin bir şeydir — ve ondan bilgi çıkarabilirsin. Kendini ve başkalarını daha iyi anlamana yardımcı olan bilgi.

Wilma Boevink buna *experiential expertise* — deneyim uzmanlığı — der [^boevink2017] [^boevink2012]. Senin deneyim bilgin, terapistlerin uzman bilgisinden daha az değerli değildir. Farklıdır. Ve her ikisi bir arada parçaların toplamından daha fazlasıdır.

## Hâlâ tereddüt ediyorsan

Belki tüm bunları okuyor ve şöyle düşünüyorsun: güzel söylendi, ama bende artık olmuyor. Belki otuz yıl klinik deneyimin var. Belki inancını kaybettin. Belki sana hiç kimse bu rolün hatta sana ait olduğunu söylemedi.

Üç şey:

1. **Asla geç değildir.** Recovery araştırması yaş sınırı ve ağırlık sınırı tanımaz. On yıllarca yatılı bakımda yaşamış insanlar bile kaymalar tanımlar — bazen tam da artık bunu beklemedikleri zaman [^harding1987] [^lally2017].

2. **Her şeyi bir anda yapmak zorunda değilsin.** Sabah tek bir soru — „Bugün neye ihtiyacım olurdu?" — zaten bir harekettir. Akşam kendine tek bir cevap — „Bugün zordu, ve yine de oradaydım" — de bir harekettir.

3. **Müttefiklere ihtiyacın var.** Bu değişimi kimse tek başına başaramaz. Akranlar, bir kendine yardım grubu, bir güven kişisi, kavramı yaşayan bir uzman, bir Recovery College. Eğer tedavi ekibin bu yolda seninle gitmiyorsa, bu senin başarısızlığın değil — o ekibin şu anda kör bir noktası var.

:::quote{author="Patricia Deegan, 1996" source="deegan1996" lang="en"}
We are a conspiracy of hope and we are pressing back against the strong tide of oppression which for centuries has been the legacy of those of us who are labeled with mental illness.
:::

:::quote-translation{source="deegan1996" translator="kendi çevirimiz"}
Biz bir umut suikastiyiz. Yüzyıllardır bir ruhsal tanıyla etiketlenenlerin mirası olan baskının güçlü akıntısına karşı koyuyoruz.
:::

:::reflection{id=10 title="Senin pozisyonun"}
- Kendini hâlâ hangi noktalarda klasik hasta rolünde deneyimliyorsun?
- Kendi deneyimin uzmanı olarak kendini deneyimlediğin anlar var mı — kısa olsalar bile?
- Tablonun sol sütunundaki hangi cümle sana tanıdık — sağ sütundakilerden hangisi yavaş yavaş yer almak istiyor?
- Umut için suç ortağın kim olabilir?
:::

:::easy{reading_time=3}
Belki uzun süre tedavi gördün. O zaman muhtemelen belirli bir şey öğrendin:

- Doktor daha iyi bilir.
- Bana söyleneni yapmalıyım.
- Hastayım, başkaları bana yardım eder.

Bu bir roldür. Adı hasta rolüdür.

Bu rol bazen yardımcı olur. Ama zarar da verebilir. Küçülürsün. Beklersin. Bağımlı olursun.

Recovery şöyle der: Bu rolden çıkabilirsin. Adım adım.

Doktor olmayacaksın. Ama kendi yaşamının uzmanı olacaksın. Kendini en iyi sen tanırsın. Deneyimin bilgidir.

**Bu değişim, Recovery'deki en önemli değişimdir. Onsuz olmaz.**

Sonuç olarak üç şey:

- Asla geç değildir. Pek çok yıl tedaviden sonra bile.
- Bunu bir anda yapmak zorunda değilsin. Küçük adımlar sayılır.
- Müttefiklere ihtiyacın var.

:::reflection{id=shift-easy title="Kendine sor"}
- Kendini hangi noktada hâlâ eski rolde deneyimliyorsun?
- Yaşamın için zaten uzman olduğun yer neresi?
:::
:::

:::quiz{id=q-shift}
- q: "Burada 'hasta rolü' ile ne kastediliyor?"
  type: multiple-choice
  options:
    - text: "Tıbbi bir tanı."
      correct: false
    - text: "Öğrenilmiş bir tutum: pasif beklemek, başkaları daha iyi bilir, sağlıklı kılınırım."
      correct: true
      explanation: "Bir rol, bir tanı değil — ve değiştirilebilir."

- q: "Patricia Deegan 'spirit breaking' hakkında ne söyler?"
  type: multiple-choice
  options:
    - text: "Nadir bir istisna vakasını tanımlar."
      correct: false
    - text: "Yardım eden sistemler öz duyguyu, sesi ve eylem gücünü kırabilir — çoğu zaman kötü niyet olmadan."
      correct: true
      explanation: "Deegan 1990 — keskin ama kesin bir terim."

- q: "Recovery FROM ve Recovery IN arasındaki fark nedir?"
  type: multiple-choice
  options:
    - text: "FROM = eski okuma, IN = yeni okuma."
      correct: false
    - text: "FROM = hastalıktan iyileşme (tıbbi). IN = hastalıkla iyileşme (kişisel)."
      correct: true
      explanation: "Davidson & Roe 2007."

- q: "Bu değişimin pek çok tavsiyeden sadece biri olduğu doğru mu?"
  type: true-false
  correct: false
  explanation: "Hayır — Recovery'nin etkili olmasının ön koşuludur."

- q: "Hangi yaştan / kaç yıl tedaviden sonra bu değişim için çok geç olur?"
  type: multiple-choice
  options:
    - text: "10 yıldan sonra."
      correct: false
    - text: "60'tan itibaren."
      correct: false
    - text: "Asla."
      correct: true
      explanation: "Recovery araştırması yaş sınırı tanımaz. On yıllar sonra da mümkün."
:::

:::flashcards{id=f-shift}
- front: "Spirit Breaking"
  back: "Patricia Deegan (1990): yardım eden sistemler öz duyguyu, sesi ve eylem gücünü nasıl kırar — çoğu zaman kötü niyetten değil."
- front: "Recovery FROM"
  back: "Bir hastalıktan iyileşme — tıbbi okuma. Semptomlar geri çekildi, en iyi durumda tanı arkanda."
- front: "Recovery IN"
  back: "Bir hastalıkla iyileşme — kişisel okuma. Semptomlar kalsa bile doyurucu bir yaşam."
- front: "Hasta rolü"
  back: "Öğrenilmiş bir tutum: pasif, bekleyen, dışarıdan belirlenen. Kısa vadede yardım eder, uzun vadede zarar verir. Değiştirilebilir."
- front: "Deneyim uzmanlığı (Boevink)"
  back: "Yaşanmış bilgin bağımsızdır ve uzman bilgisiyle eşdeğerdir. Onu kullanabilirsin — kendin ve başkaları için."
- front: "Conspiracy of Hope"
  back: "Patricia Deegan 1996: 'Biz bir umut suikastiyiz.' — Tarihsel yetkisizleştirmeye karşı kolektif proje olarak Recovery."
:::

:::standard{reading_time=3}
Uzun süre psikiyatrik tedavi gördüysen — belki yıllar, on yıllar — o zaman bu seninle bir şeyler yapmıştır. Sadece hastalık değil. **Rol** de.

## Rolün seninle yaptığı şeyler

Belki şunları öğrendin:

- Doktor daha iyi bilir. Benim sezgim daha az sayılır.
- Beklemeliyim. Bir sonraki randevu, bir sonraki ilaç, bir sonraki yöntem için.
- Ben tanımım: „Ben Borderline'ım." „Ben Bipolarım."
- İyileşme benimle yapılan bir şey — yaptığım bir şey değil.

Bu kişisel bir zayıflık değildir. Bu, az kontrol izin veren bir sistemde yıllarca kalmanın **öğrenilmiş bir tepkisidir**.

Recovery hareketinin şekillendirici bir sesi olan Patricia Deegan bunun için keskin bir terim oluşturdu: **„spirit breaking"**. Yardım eden sistemler — çoğu zaman kötü niyet olmadan — bir insanın öz duygusunu, sesini, eylem gücünü kırabilir. Çalışanlar kötü olduğu için değil. Sistemin mantığı böyle öngördüğü için.

## Recovery FROM ve Recovery IN

Larry Davidson ve David Roe, Recovery'nin iki çok farklı okumasını ayırt eder:

- **Recovery FROM** — Bir hastalıktan **iyileşme**. Tıbbi okuma: semptomlar geri çekildi, tanı arkanda. Bir tedavinin pasif alıcısısın.
- **Recovery IN** — Bir hastalıkla **iyileşme**. Kişisel okuma: semptomlar kalsa bile doyurucu bir yaşam sürmek. Eyleyen kişi sensin.

Her ikisi de mümkündür. Her ikisi de değerlidir. Ama tamamen farklı mantıkları takip ederler. **Recovery IN, Recovery'nin senin için etkili olabilmesinin ön koşuludur.** Çünkü umut, hedefler, öz yetkinlik, anlam — tüm bunlar ancak kendini seçim hakkı olan biri olarak deneyimlediğin yerde doğar.

## Yardıma muhtaç kalırsın — yine de özne

Bu değişim, ilaçları kesmek ya da tedaviyi sonlandırmak için bir çağrı değildir. Uzmanlara yönelik bir suçlama değildir. Kendi sesini bir kaynak olarak alma davetidir — uzman seslerin **yanında**.

Sonuç olarak üç şey:

- **Asla geç değildir.** On yıllarca tedaviden sonra bile bu tür kaymalar mümkündür.
- **Küçük adımlarla olur.** Sabah bir soru: „Bugün neye ihtiyacım olurdu?" başlangıç için yeterlidir.
- **Müttefiklere ihtiyacın var.** Akranlar. Bir güven kişisi. Bir Recovery College. Kimse bunu tek başına başaramaz.
:::

:::standard-quiz{id=q-shift-std}
- q: "Patricia Deegan „spirit breaking" ile ne kastediyor?"
  type: multiple-choice
  options:
    - text: "Pek karşılaşılmayan nadir tek bir vaka."
      correct: false
    - text: "Yardım eden sistemler öz duyguyu, sesi ve eylem gücünü nasıl kırabilir — çoğu zaman kötü niyet olmadan."
      correct: true
      explanation: "Keskin ama kesin bir terim (Deegan 1990)."

- q: "Recovery FROM ve Recovery IN arasındaki fark nedir?"
  type: multiple-choice
  options:
    - text: "FROM eski, IN yeni versiyon."
      correct: false
    - text: "FROM = bir hastalıktan iyileşme (tıbbi). IN = bir hastalıkla iyileşme (kişisel)."
      correct: true
      explanation: "Davidson & Roe 2007. Her ikisi de mümkündür, ama farklı mantıkları takip eder."

- q: "Yaşamının uzmanı kim?"
  type: multiple-choice
  options:
    - text: "Tedavi ekibin."
      correct: false
    - text: "Sen kendin — tedavi edenlerin uzman bilgisinin yanında."
      correct: true

- q: "Hangi noktadan itibaren bu değişim için çok geçtir?"
  type: multiple-choice
  options:
    - text: "20 yıl tedaviden sonra."
      correct: false
    - text: "60'tan itibaren."
      correct: false
    - text: "Asla. On yıllar sonra da kaymalar mümkündür."
      correct: true
:::

:::standard-flashcards{id=f-shift-std}
- front: "Spirit Breaking (Deegan)"
  back: "Yardım eden sistemler — çoğu zaman kötü niyet olmadan — bir insanın öz duygusunu, sesini ve eylem gücünü kırdığında."
- front: "Recovery FROM"
  back: "Bir hastalıktan iyileşme. Tıbbi okuma: semptomlar yok, tanı arkanda."
- front: "Recovery IN"
  back: "Bir hastalıkla iyileşme. Kişisel okuma: semptomlar kalsa bile doyurucu bir yaşam."
- front: "Yaşamının uzmanı"
  back: "Kendini en iyi sen tanırsın. Deneyimin bilgidir — uzman bilgisinin yanında, yerine değil."
- front: "Asla geç değil"
  back: "Recovery yaş sınırı ve ağırlık sınırı tanımaz. On yıllar sonra da mümkün."
:::


# 12. Akran desteği, Trialog ve EX-IN
{#kap-12 reading_time=5}

## Akran desteği nedir

Akran desteği, kendisi de ruhsal krizleri deneyimlemiş ve çalışmış kişilerin eşliği anlamına gelir. Almanca konuşulan bölgede: iyileşme rehberleri, deneyim uzmanları, akranlar ya da EX-IN çalışanları [^utschakowski2009] [^exin_de].

Kökler çok uzaklara dayanır — kendine yardım geleneğine, Mary Ellen Copeland'ın WRAP kavramına [^copeland1997], Almanca Trialog modeline [^bockpriebe2005] ve 2005'ten itibaren EX-IN girişimine [^utschakowski2009].

## Trialog — Almanca konuşulan bölgenin mirası

Trialog — etkilenenler, yakınlar ve uzmanlar arasındaki eşit haklı sohbet — 1989'da Hamburg'da Thomas Bock ve mücadele arkadaşları tarafından kuruldu [^bockpriebe2005]. Uluslararası Recovery hareketine Almanca konuşulan bir katkıdır ve DACH bakımını kalıcı olarak değiştirmiştir [^vonpeter2015].

## Araştırmanın gösterdiği

Akran desteği için kanıt tabanı bugün önemlidir. Dört ülkede 600'den fazla katılımcılı çok merkezli bir RKÇ, Empowerment ve yaşam kalitesi üzerinde önemli etkiler gösterdi [^slade2024peer]. Güncel meta-analizler öz yetkinlik üzerinde tutarlı olumlu etkiler ve umut ve Empowerment üzerinde daha küçük etkiler buluyor [^white2024] [^lyons2021]. Bir Alman RKÇ'si de olumlu etkiler kanıtladı [^mahlke2017].

Etki faktörleri şunlardır: bir güvenilirlik çıpası olarak yaşanmış deneyim, bir model olarak umut, eşit düzeyde ilişki kurma ve damgalayıcı olmayan iletişim [^mead2001] [^davidson2012].

Wilma Boevink bu ilkeyi basit bir noktaya getiriyor: Etkilenenler hareketinden gelen deneyim bilgisi profesyonel uzman bilgisiyle eşdeğerdir — ve özgün Recovery bilgisinin temelini oluşturur [^boevink2012].

:::easy{reading_time=2}
Akran desteği şu anlama gelir: İnsanlar benzer deneyimi olan başka insanlara eşlik eder.

Bu iyi gelir. Araştırma gösteriyor: Eğer biri „atlattıysa" ve karşında duruyorsa, bu güçlü bir işarettir. Umut verir.

Almanca konuşulan bölgede eğitimi olan iyileşme rehberleri vardır (EX-IN).

Trialog da vardır — etkilenenler, yakınlar ve uzmanlar arasında sohbetler. Eşit düzeyde. Hiç kimsenin daha önemli olmadığı.

Bu tür sohbetler İsviçre, Almanya ve Avusturya'da pek çok şehirde vardır.
:::

:::quiz{id=q-12}
- q: "EX-IN ne anlama gelir?"
  type: multiple-choice
  options:
    - text: "Bir tanı."
      correct: false
    - text: "Experienced Involvement — iyileşme rehberleri için bir eğitim."
      correct: true
      explanation: "2005'ten itibaren Bremen'de geliştirildi."

- q: "Trialog'ta kim eşit düzeyde konuşur?"
  type: multiple-choice
  options:
    - text: "Sadece uzmanlar."
      correct: false
    - text: "Etkilenenler, yakınlar ve uzmanlar birlikte."
      correct: true
      explanation: "1989'da Hamburg'da Thomas Bock tarafından kuruldu."

- q: "Akran desteği araştırması (Slade ve diğerleri 2024) ne gösteriyor?"
  type: multiple-choice
  options:
    - text: "Ölçülebilir etki yok."
      correct: false
    - text: "Empowerment ve yaşam kalitesi üzerinde önemli etkiler."
      correct: true
:::

:::flashcards{id=f-12}
- front: "EX-IN"
  back: "Experienced Involvement — psikiyatri deneyimi olan insanlar için iyileşme rehberi eğitimi (2005'ten itibaren, Bremen). Dorothea Buck'tan ilham aldı."
- front: "Trialog"
  back: "Etkilenenler, yakınlar ve uzmanlar arasında eşit haklı sohbet. 1989'da Hamburg'da Thomas Bock tarafından kuruldu."
- front: "Akran desteği — etki faktörleri"
  back: "Güvenilirlik çıpası olarak yaşanmış deneyim · model olarak umut · eşit düzeyde ilişki · damgalayıcı olmayan iletişim."
- front: "Mahlke ve diğerleri 2017"
  back: "Bire-bir akran desteği üzerine Alman RKÇ'si — Empowerment ve öz yetkinlik üzerinde önemli etkiler kanıtladı."
:::

:::standard{reading_time=2}
Akran desteği şu anlama gelir: Kendisi de bir ruhsal krizden geçmiş insanlar başkalarına eşlik eder — eşit düzeyde, uzmanlık unvanı yerine yaşanmış deneyimle.

Almanca konuşulan bölgede onlara iyileşme rehberleri, deneyim uzmanları ya da EX-IN çalışanları diyoruz. EX-IN „Experienced Involvement" anlamına gelir — 2005'te Bremen'de ortaya çıkan ve bugün pek çok klinik, danışma merkezi ve Recovery College'da yerleşmiş bir eğitim.

Bu konuda üç kavram önemlidir:

- **Akran desteği:** Benzer deneyimi olan biri tarafından eşlik. Yaşanmış olduğu için güvenilir.
- **Trialog:** Etkilenenler, yakınlar ve uzmanlar arasında eşit haklı sohbet — 1989'da Hamburg'da Thomas Bock tarafından kuruldu.
- **EX-IN:** İyileşme rehberliği için yapılandırılmış eğitim, Dorothea Buck'tan ilham aldı.

Araştırmanın bu konuda söyledikleri: Dört ülkede 600'den fazla katılımcılı büyük uluslararası bir çalışma, Empowerment ve yaşam kalitesi üzerinde önemli etkiler gösterdi. Bir Alman çalışması bunu doğruladı. Etkili olan şey bir numara değildir — şunu söyleyebilen biriyle karşılaşmaktır: „Ben de oradaydım. Ve bir yol vardır."

Belki sen de hikâyesi seni taşıyan birini tanıyorsun. Belki bir gün başkası için sen kendin bu kişi olacaksın.
:::

:::standard-quiz{id=q-12-std}
- q: "EX-IN ne anlama gelir?"
  type: multiple-choice
  options:
    - text: "Yeni bir tanı."
      correct: false
    - text: "Experienced Involvement — iyileşme rehberliğine yönelik bir eğitim."
      correct: true
      explanation: "2005'te Bremen'de geliştirildi, bugün pek çok DACH kurumunda yerleşik."
    - text: "Bir ilaç sınıfı."
      correct: false

- q: "Trialog'ta kim birlikte konuşur?"
  type: multiple-choice
  options:
    - text: "Sadece kendi aralarında uzmanlar."
      correct: false
    - text: "Etkilenenler, yakınlar ve uzmanlar — eşit düzeyde."
      correct: true
      explanation: "1989'da Hamburg'da Thomas Bock tarafından kuruldu."
    - text: "Sadece etkilenenler kendi başlarına."
      correct: false
:::

:::standard-flashcards{id=f-12-std}
- front: "Akran desteği"
  back: "Kendi kriz deneyimi olan insanlar tarafından eşlik. Yaşanmış deneyim, umut ve eşit düzey aracılığıyla etki eder."
- front: "Trialog"
  back: "Etkilenenler, yakınlar ve uzmanlar arasında eşit haklı sohbet. 1989'dan beri (Bock, Hamburg)."
- front: "EX-IN"
  back: "Experienced Involvement — psikiyatri deneyimi olan insanlar için eğitim, 2005'ten itibaren."
:::


# 13. Recovery Colleges — terapi yerine öğrenme
{#kap-13 reading_time=5}

Recovery Colleges, 2009'dan itibaren ortaya çıkan bir Britanya modelidir [^perkins2012]. Klinikler değil, eğitim kurumlarıdır. Ücretsizdirler, herkese — etkilenenlere, yakınlara, uzmanlara ve ilgilenenlere — açıktırlar ve terapötik seans yerine yetişkin eğitiminin pedagojik formunu kullanırlar.

Recovery Colleges'ı iki merkezi ilke şekillendirir [^perkins2012] [^meddings2015]:

- **Terapi yerine eğitim.** Katılımcılar hasta değil, öğrencidir. Eksiklik ve tanıya değil, kaynaklara ve öğrenmeye odaklanma.
- **Koprodüksiyon (Co-Production).** Her kurs, bir uzman ve yaşanmış deneyimi olan bir kişi tarafından birlikte geliştirilir ve yürütülür — eşit düzeyde.

## Araştırmanın gösterdiği

Hayes ve meslektaşları dünya çapında beş kıtada 28 ülkede 221 Recovery College sayıyorlar [^hayes2023].

RECOLLECT çalışması, Recovery Colleges ile bugüne kadarki en kapsamlı bilimsel çalışmadır [^henderson2024recollect]. 1.193 Recovery College öğrencisinin 3.508 kontrol kişisine karşı 6, 12 ve 60 ay üzerinden incelenen İngiltere'den retrospektif bir kohort çalışması şunu gösterdi: psikiyatrik hastane yatışlarında, yatılı yatak günlerinde ve acil danışmalarda önemli azalma — aynı zamanda iyileşmiş esenlikle [^ronaldson2024].

On yıllık Recovery College araştırmasının bir literatür değerlendirmesi [^theriault2020] umut, Empowerment, öz yetkinlik, sosyal içerme, hedeflere ulaşma ve ruh sağlığı bilgisi üzerinde tutarlı etkileri doğruluyor. Crowther ve meslektaşları, uzmanların da Recovery Colleges'ta çalışmaktan yararlandığını gösteriyor [^crowther2019].

:::info{type=evidence title="Almanca konuşulan bölgede kanıt"}
Recovery yönelimli bakımın etkinliği konusunda ampirik olarak doğrulanmış DACH verileri son yıllarda ortaya çıktı.

Ağır ruhsal hastalıkları olan insanlarda akran eşliği üzerine bir Alman rasgele kontrollü çalışma [^mahlke2017] Empowerment ve öz yetkinlik üzerinde önemli etkiler kanıtladı.

DGPPN-S3 kılavuzu „Ağır ruhsal hastalıklarda psikososyal terapiler" (2. baskı 2019) Recovery yönelimi, akran desteği ve Shared Decision-Making'i öneriler olarak aldı [^dgppn2019].

Almanca konuşulan bölgede Recovery College araştırması büyüyor — belirli DACH konumlarındaki veri durumu yapım aşamasındadır.
:::

Almanca konuşulan bölgede Recovery Colleges diğer yerler arasında Bern'de [^rcbern], Doğu İsviçre'de, Cenevre'de, St. Gallen'de ve Zürih'te — ve giderek Almanya ve Avusturya'da (diğerleri arasında Empowerment College Bremen) bulunmaktadır.

:::easy{reading_time=2}
Recovery Colleges özel bir okul türüdür. Ama çocuklar için bir okul değil.

Burada yetişkinler ruh sağlığı hakkında öğrenir. Herkes gelebilir: etkilenenler, yakınlar, uzmanlar, ilgilenenler.

Kurslar ücretsizdir. Tanıya ihtiyacın yok.

Her kurs birlikte planlanır: bir uzman ve kendi deneyimi olan bir kişi tarafından. Her ikisi de eşit derecede önemlidir.

Bugün 28 ülkede 220'den fazla Recovery College vardır. İsviçre'de, Almanya'da ve Avusturya'da da.

Araştırma gösteriyor: Bir Recovery College'a giden kişi, sonrasında daha iyi hisseder.
:::

:::quiz{id=q-13}
- q: "Bir Recovery College'a kim katılabilir?"
  type: multiple-choice
  options:
    - text: "Sadece tanısı olanlar."
      correct: false
    - text: "Etkilenenler, yakınlar, uzmanlar ve ilgilenenler — herkes."
      correct: true
      explanation: "Herkese açık. Tanı gerekli değil. Ücretsiz."

- q: "'Co-Production' ne anlama gelir?"
  type: multiple-choice
  options:
    - text: "Sinema numarası."
      correct: false
    - text: "Uzman ve yaşanmış deneyimi olan kişi kursları birlikte planlar — eşit düzeyde."
      correct: true

- q: "İngiltere kohort çalışması Ronaldson ve diğerleri 2024 ne gösteriyor?"
  type: multiple-choice
  options:
    - text: "Etki yok."
      correct: false
    - text: "Psikiyatrik hastane yatışlarında ve yatak günlerinde önemli azalma."
      correct: true
:::

:::flashcards{id=f-13}
- front: "Recovery College"
  back: "Eğitim kurumu — tedavi yeri değil. Terapi yerine öğrenme. Ücretsiz. Herkese açık."
- front: "Co-Production"
  back: "Kurslar bir uzman ve yaşanmış deneyimi olan bir kişi tarafından birlikte geliştirilir ve yürütülür."
- front: "Etkinlik"
  back: "Hayes 2023: 28 ülkede 221 Recovery College. Ronaldson 2024: daha az hastane yatışı, daha çok esenlik."
:::

:::standard{reading_time=2}
Bir Recovery College bir klinik değildir. Yetişkinler için bir okuldur — ruh sağlığı hakkında bir şeyler öğrenmek isteyen herkese açık: etkilenenler, yakınlar, uzmanlar, ilgilenenler. Kurslar ücretsizdir, tanıya ihtiyacın yoktur, sevk gerekmez ve aile hekimine kayıt yaptırman gerekmez.

Bu modeli iki ilke taşır:

- **Terapi yerine eğitim.** Hasta değil, öğrencisin. Merkezde öğrenme, kaynaklar ve sorular var — tanı ve eksiklik değil.
- **Koprodüksiyon (Co-Production).** Her kurs bir uzman ve yaşanmış deneyimi olan bir kişi tarafından birlikte geliştirilir ve yürütülür. Her iki bilgi kaynağı eşdeğerdir.

İlk Recovery College 2009'da Londra'da doğdu. Bugün dünya çapında 28 ülkede 220'den fazla bulunuyor — İsviçre'de (diğerleri arasında Bern, Doğu İsviçre, Cenevre, St. Gallen, Zürih), Almanya'da ve Avusturya'da.

Bu konudaki en büyük çalışma olan İngiltere'den RECOLLECT, beş yıl boyunca yaklaşık 1.200 Recovery College öğrencisini 3.500'den fazla kontrol kişisiyle karşılaştırdı. Sonuç: daha az psikiyatrik hastane yatışı, daha az acil durum, daha çok esenlik. On yıl araştırma doğruluyor: Umut, Empowerment, sosyal içerme ve öz yetkinlik ölçülebilir şekilde yükseliyor.

Belki yakınındaki bir Recovery College, kendini açıklamak zorunda olmadığın — sadece öğrenmene izin verilen — ilk yer olabilir.
:::

:::standard-quiz{id=q-13-std}
- q: "Recovery College'a kim katılabilir?"
  type: multiple-choice
  options:
    - text: "Sadece psikiyatrik tanısı olan insanlar."
      correct: false
    - text: "Herkes — etkilenenler, yakınlar, uzmanlar, ilgilenenler. Tanı olmadan."
      correct: true
      explanation: "Recovery Colleges açıktır, ücretsizdir ve sevk gerekmez."
    - text: "Sadece uzmanlar."
      correct: false

- q: "Co-Production ne anlama gelir?"
  type: multiple-choice
  options:
    - text: "Birden fazla filmi birlikte çekmek."
      correct: false
    - text: "Kurslar bir uzman ve bir deneyim uzmanı tarafından birlikte planlanır — eşit düzeyde."
      correct: true
      explanation: "Bu, Recovery Colleges'ın temel ilkesidir."
    - text: "Katılımlı bir eğitim videosu."
      correct: false
:::

:::standard-flashcards{id=f-13-std}
- front: "Recovery College"
  back: "Tedavi yeri yerine eğitim yeri. Ücretsiz, herkese açık. Terapi yerine öğrenme."
- front: "Co-Production"
  back: "Her kurs bir uzman ve yaşanmış deneyimi olan bir kişi tarafından birlikte tasarlanır."
- front: "Etki (RECOLLECT)"
  back: "Daha az hastane yatışı, daha az acil durum, daha çok esenlik — beş yıl boyunca kanıtlandı."
:::


# 14. Travmaya duyarlı yaklaşım
{#kap-14 reading_time=3}

:::info{type=warmth title="Devam etmeden önce"}
Bu bölüm şiddeti, istismarı, ihmali ve ayrımcılığı isimlendiriyor. Zorlu şeyler yaşadıysan okumak çok şeyi harekete geçirebilir. Bu normaldir. Kendi temponda oku. Mola ver. Bugün çok geliyorsa bir sonraki bölüme atla. Şu an desteğe ihtiyacın varsa: Bölüm 20 (Kriz) sadece birkaç dokunuş uzaklıkta — ya da İsviçre'de **143**, Almanya'da **0800 111 0 111**, Avusturya'da **142**, Türkiye'de **Yeşilay Danışmanlık 115** ara.
:::

Psikiyatride bakılan pek çok insan, geçmişinde travmatik deneyimler yaşamıştır — şiddet, istismar, ihmal, ayrımcılık. Psikiyatrik yatışlar da yeniden travmatize edici etki gösterebilir [^felitti1998].

Travmaya duyarlı bir yaklaşım bu nedenle Recovery yönelimli pratiğin ayrılmaz bir parçasıdır. ABD makamı SAMHSA [^samhsa2014trauma] bunun için altı yönlendirici ilke tanımlamıştır:

- **Güvenlik** — fiziksel ve duygusal.
- **Güven ve şeffaflık** — net bilgi, güvenilir çerçeve.
- **Akran desteği** — bir kaynak olarak yaşanmış deneyim.
- **İşbirliği ve karşılıklılık** — hiyerarşileri azaltmak.
- **Empowerment, ses ve seçim** — karar ve kendi kararını verme.
- **Kültürel, tarihsel ve cinsiyet duyarlılığı.**

Bu ilkeler dijital bir çalışma kitabında da geçerlidir. Ne zaman ne okuyacağına, ne kaydedeceğine, neyi sileceğine sen karar verirsin.

:::easy{reading_time=1}
Psikiyatrideki pek çok insan ağır şeyler yaşamıştır. Şiddet. İstismar. İhmal.

Bazen klinikte kalma da yük olur.

Bu nedenle travmaya duyarlı bir yaklaşım önemlidir. Bu şu anlama gelir:

- Önce güvenlik.
- Güven oluşturmak.
- Dürüst iletişim kurmak.
- Kimse senin kafanın üstünde karar vermez.

Bu yaklaşım bu uygulamada da geçerlidir. Neyi okuyacağına sen karar verirsin. Neyi kaydedeceğine. Neyi sileceğine.
:::

:::quiz{id=q-14}
- q: "SAMHSA travmaya duyarlı bakım için kaç ilke tanımladı?"
  type: multiple-choice
  options:
    - text: "Üç"
      correct: false
    - text: "Altı"
      correct: true
    - text: "On"
      correct: false

- q: "Hangisi travmaya duyarlı pratiğin bir ilkesi DEĞİLDİR?"
  type: multiple-choice
  options:
    - text: "Güvenlik"
      correct: false
    - text: "Sertlik"
      correct: true
      explanation: "Sertlik SAMHSA ilkelerine ait değildir."
    - text: "Akran desteği"
      correct: false
:::

:::flashcards{id=f-14}
- front: "Altı ilke (SAMHSA 2014)"
  back: "Güvenlik · güven ve şeffaflık · akran desteği · işbirliği · Empowerment · kültürel/cinsiyet duyarlılığı."
- front: "Yeniden travmatizasyon"
  back: "Yardım sistemlerinin kendisinin ek olarak travmatize edici etki etmesi. Travmaya duyarlı pratik bunu aktif olarak önlemek ister."
- front: "ACE çalışması (Felitti 1998)"
  back: "Kanıtlar: travmatik çocukluk deneyimleri yaygındır ve sağlığı yaşam boyu etkiler."
:::

:::standard{reading_time=2}
Psikiyatride bakılan pek çok insan, ağır deneyimler taşır — şiddet, istismar, ihmal, ayrımcılık, kayıplar. Bazen psikiyatrik yatışlar da yük verici ya da yeniden travmatize edici etki yapar. Travmaya duyarlı bir yaklaşım bunu ciddiye alır, seni göstermek istemediğin yaraları göstermeye zorlamadan.

ABD sağlık makamı SAMHSA, travmaya duyarlı eşliği taşıyan altı yönlendirici ilke tanımladı:

- **Güvenlik** — bedensel ve duygusal. Kimse kendini güvende hissetmediği bir odada olmamalı.
- **Güven ve şeffaflık** — net bilgi, güvenilir çerçeve, kafanın üstünde sürprizler yok.
- **Akran desteği** — güvenilir bir köprü olarak yaşanmış deneyim.
- **Eşit düzeyde işbirliği** — hiyerarşileri azaltmak, büyütmek değil.
- **Empowerment, ses ve seçim** — birlikte karar verirsin. Her zaman.
- **Kültürel, tarihsel ve cinsiyet duyarlılığı** — hikâyen, kim olduğunun bir parçasıdır.

Bu ilkeler dijital bir çalışma kitabında da geçerlidir. Ne zaman ne okuyacağına sen karar verirsin. Neyi kaydedeceğine. Neyi sileceğine. Bir bölüm çok fazla geldiğinde, onu kapat. Hazır olduğunda geri dön. Ya da tamamen bırak.

Travmaya duyarlı şu anlama gelmez: önce travmayı işle, sonra yaşa. Şu anlama gelir: burada olan her şey, zaten taşıdıklarına dikkat eder.
:::

:::standard-quiz{id=q-14-std}
- q: "SAMHSA travmaya duyarlı pratik için kaç yönlendirici ilke tanımladı?"
  type: multiple-choice
  options:
    - text: "Üç."
      correct: false
    - text: "Altı."
      correct: true
      explanation: "Güvenlik, güven, akran desteği, işbirliği, Empowerment, kültürel duyarlılık."
    - text: "On."
      correct: false

- q: "Bu uygulamada neyin kaydedileceğine kim karar verir?"
  type: multiple-choice
  options:
    - text: "Uygulama."
      correct: false
    - text: "Sen. Her zaman."
      correct: true
      explanation: "Verilerin üzerinde kendi kararını verme, travmaya duyarlı bir tutumun ifadesidir."
:::

:::standard-flashcards{id=f-14-std}
- front: "Altı ilke (SAMHSA)"
  back: "Güvenlik · güven ve şeffaflık · akran desteği · işbirliği · Empowerment · kültürel ve cinsiyet duyarlılığı."
- front: "Önce güvenlik"
  back: "Kimse senin kafanın üstünde karar vermez. Tempoyu, derinliği ve durmayı sen belirlersin."
- front: "Yeniden travmatizasyon"
  back: "Yardım sistemleri ek olarak yaraladığında. Travmaya duyarlı pratik bunu aktif olarak önlemek ister."
:::


# 15. Recovery ve insan hakları
{#kap-15 reading_time=4}

Recovery sadece bir uzmanlık değil, aynı zamanda bir insan hakları sorusudur. BM Engelli Hakları Sözleşmesi, engelli insanlara — ruhsal engelliler dahil — kendi kararını verme, içerme ve desteklenmiş karar alma hakkını garanti eder [^uncrpd2006]. Almanya BRK'yı 2009'da, Avusturya 2008'de, İsviçre 2014'te onayladı.

WHO 2019'da QualityRights girişimini başlattı [^who2019] ve 2021'de „Guidance on Community Mental Health Services" kılavuzunu yayımladı [^who2021]. Recovery bunlarda modern bakımın merkezi ilkesi olarak adlandırılmıştır.

Somut olarak şu anlama gelir: Zorlamayı azaltmak, tanıyı asla kişinin önüne koymamak, desteği insanların ihtiyaç duyduğu yerde sunmak — ve etkilenenleri tüm bakım kararlarına eşit haklı ortaklar olarak dahil etmek.

:::info{type=example title="Örnek: Açık Diyalog (Open Dialogue)"}
Finlandiya'nın Batı Laponya bölgesinde Jaakko Seikkula 1980'lerde Açık Diyalog kavramını geliştirdi.

Akut psikotik krizlerde 24 saat içinde tüm önemli yakınlar dahil edilir. Tüm sohbetler birlikte gerçekleşir, tüm kararlar şeffaf biçimde müzakere edilir.

Uzun vadeli sonuçlar olağanüstüdür: Batı Laponya'da ilk psikoz yaşayan etkilenenlerin %80'inden fazlası iki yıl içinde işe ya da eğitime geri döndü. 19 yıllık bir çalışma sonuçların uzun vadeli stabilitesini doğruladı [^seikkula2011] [^bergstroem2018].
:::

:::easy{reading_time=1}
Recovery aynı zamanda bir insan hakkıdır.

BM 2006'da bir sözleşme yaptı. Şöyle der: Engelli insanların kendileri karar verme hakkı vardır. Ruhsal hastalıkları olan insanlar da.

WHO 2021'de der: Psikiyatri bu hakları gözetmelidir. Doktor tek başına karar vermez. Herkes birlikte.

İsviçre'de, Almanya'da ve Avusturya'da da bu geçerlidir.
:::

:::quiz{id=q-15}
- q: "BM-BRK nedir?"
  type: multiple-choice
  options:
    - text: "Bir tedavi yöntemi."
      correct: false
    - text: "2006'dan BM Engelli Hakları Sözleşmesi."
      correct: true
      explanation: "İsviçre onu 2014'te, Almanya 2009'da, Avusturya 2008'de onayladı."

- q: "WHO 2021'de ne söylüyor?"
  type: multiple-choice
  options:
    - text: "Recovery bilimsel değildir."
      correct: false
    - text: "Bakım kişi merkezli ve haklara dayalı olmalıdır."
      correct: true
:::

:::flashcards{id=f-15}
- front: "BM-BRK 2006"
  back: "BM Engelli Hakları Sözleşmesi. Kendi kararını vermeyi garanti eder — ruhsal engellerde de. CH 2014, DE 2009, AT 2008'de onayladı."
- front: "WHO QualityRights"
  back: "2019'dan beri WHO girişimi. 2021 kılavuzu 'Guidance on Community Mental Health Services': kişi merkezli, haklara dayalı, Recovery yönelimli."
- front: "Open Dialogue (Seikkula)"
  back: "1980'lerden beri Batı Laponya. İlk psikoz etkilenenlerin %80'inden fazlası 2 yıl içinde işe/eğitime geri döndü. 19 yıllık takiple doğrulandı."
:::

:::standard{reading_time=2}
Recovery sadece bir uzmanlık sorusu değildir — aynı zamanda bir insan hakları sorusudur. Ruhsal olarak hasta olan kişi, duyulma, dahil edilme ve ciddiye alınma hakkını kaybetmez.

2006'dan **BM Engelli Hakları Sözleşmesi** (BM-BRK) tüm engelli insanlara — bedensel, zihinsel, ruhsal — kendi kararını verme, içerme ve desteklenmiş karar alma hakkını garanti eder. İsviçre onu 2014'te, Almanya 2009'da, Avusturya 2008'de onayladı. Bu geçerli hukuktur.

**Dünya Sağlık Örgütü (WHO)** 2019'da QualityRights girişimiyle buna ağırlık verdi ve 2021'de „Guidance on Community Mental Health Services" kılavuzunu yayımladı. Recovery orada modern bakımın merkezi ilkesi olarak yer alır — Kişi Merkezliliği ve Haklara Dayalılık'ın yanında.

Bu somut olarak ne anlama gelir?

- Mümkün olduğunca zorlamayı azalt.
- Tanıyı asla kişinin önüne koyma.
- Desteği insanların yaşadığı yerde sun.
- Etkilenenleri bakım kararlarına eşit haklı ortaklar olarak dahil et.

Bunun bir örneği Finlandiya'dan **Açık Diyalog**'dur. Akut psikotik krizlerde 24 saat içinde tüm önemli yakınlar dahil edilir. İlk etkilenenlerin %80'inden fazlası iki yıl içinde işe ya da eğitime geri döndü — uzun vadeli çalışmalar bu sonuçların stabilitesini doğruluyor.

Bu çerçeveleri ezbere bilmek zorunda değilsin. Ama bilmek iyidir: „Birlikte karar vermek istiyorum" dediğinde, sağlam bir hukuki zeminde durursun.
:::

:::standard-quiz{id=q-15-std}
- q: "BM Engelli Hakları Sözleşmesi ruhsal hastalığı olan insanlara da neyi garanti eder?"
  type: multiple-choice
  options:
    - text: "Hızlı iyileşme."
      correct: false
    - text: "Kendi kararını verme, içerme ve desteklenmiş karar alma."
      correct: true
      explanation: "2006'dan BM-BRK. Onaylandı: CH 2014, DE 2009, AT 2008."
    - text: "Belirli bir terapi formu."
      correct: false

- q: "2021 WHO kılavuzu psikiyatrik bakım hakkında ne söyler?"
  type: multiple-choice
  options:
    - text: "Kişi merkezli ve haklara dayalı olmalıdır."
      correct: true
      explanation: "Recovery orada merkezi ilke olarak adlandırılır."
    - text: "Mümkün olduğunca yatılı ve uzun vadeli olmalıdır."
      correct: false
    - text: "Etkilenenlerin katılımı olmadan gerçekleşmelidir."
      correct: false
:::

:::standard-flashcards{id=f-15-std}
- front: "BM-BRK 2006"
  back: "BM Engelli Hakları Sözleşmesi. Kendi kararını vermeyi garanti eder — ruhsal engellerde de. Onaylandı: CH 2014, DE 2009, AT 2008."
- front: "WHO QualityRights"
  back: "2019'dan beri WHO girişimi. 2021 kılavuzu: kişi merkezli, haklara dayalı, Recovery yönelimli."
- front: "Open Dialogue"
  back: "Fin modeli. İlk psikoz etkilenenlerin %80'inden fazlası 2 yıl içinde işe ya da eğitime geri döndü."
:::


# 16. Hastalık mı Recovery mi: iki bakış
{#kap-16 reading_time=3}

Recovery yeni bir yöntemden fazlasıdır — bir bakış açısı değişimidir [^knuf2026] [^slade2014] [^ameringschmolke2012].

:::table{name="Paradigmenvergleich"}
| Hastalık yönelimli bakış | Recovery yönelimli bakış |
|----------------------------|---------------------------|
| Tanı merkezde | İnsan merkezde |
| Semptomsuzluk hedef | Anlamlı yaşam hedef |
| Uzman = uzman | Çifte uzmanlık: uzman bilgisi + deneyim bilgisi |
| Tedavi planı | Recovery planı + tedavi planı |
| Compliance | Shared Decision-Making |
| Eksiklik bakışı (patogenez) | Kaynak bakışı (salutogenez) |
| Doğrusal iyileşme yolu | Bireysel, doğrusal olmayan yol |
| Uzman umudu tek başına taşır | Umut paylaşılır ve ödünç alınır |
| Hasta / müşteri | İnsan / deneyim sahibi kişi / öğrenci |
:::

Sağ sütun sol sütunu yerinden etmez. Her iki sütunun da yeri vardır — Recovery yönelimli paradigma tıbbi paradigmayı genişletir, onun yerini almaz [^slade2014].

Amering ve Schmolke sık sık göz ardı edilen bir noktayı vurgular: Recovery yönelimli pratik üstüne eklenen ek bir modül değildir. Bilgiyi üretmenin farklı bir yoludur — mesleki uzman bilgisi ile yaşanmış deneyimin eşdeğer kaynaklar olarak birleştirilmesi yoluyla [^ameringschmolke2012].

:::easy{reading_time=2}
Ruhsal hastalığa iki bakış açısı vardır:

**Eski bakış:**
- Hastalık merkezdedir.
- Hedef: semptomlar yok.
- Doktor en iyisini bilir.
- Sen hastasın.

**Recovery bakışı:**
- İnsan merkezdedir.
- Hedef: iyi bir yaşam.
- Sen ve uzman birlikte karar verirsiniz.
- Sen deneyim sahibi bir insansın.

Eski bakış yanlış değildir. Sık sık yardım eder. Ama tek başına yetmez.

Recovery bakışı eski bakışı genişletir. Onun yerini almaz.
:::

:::quiz{id=q-16}
- q: "Recovery bakışı tıbbi bakışın yerini alır mı?"
  type: true-false
  correct: false
  explanation: "Hayır — onu genişletir. Her ikisinin de yeri vardır."

- q: "Recovery bakışında merkezde ne durur?"
  type: multiple-choice
  options:
    - text: "Tanı"
      correct: false
    - text: "İnsan"
      correct: true
:::

:::flashcards{id=f-16}
- front: "Paradigma değişimi"
  back: "Eksiklik bakışından (patogenez) kaynak bakışına (salutogenez) — tıbbi bakışı bırakmadan."
- front: "Compliance ve Shared Decision-Making"
  back: "Compliance = sen uyarsın. Shared Decision-Making = birlikte karar verirsiniz."
- front: "Bilgi sentezi"
  back: "Recovery yönelimli pratik mesleki uzman bilgisi ile yaşanmış deneyimi eşdeğer kaynaklar olarak birleştirir (Amering & Schmolke 2012)."
:::

:::standard{reading_time=2}
Recovery yeni bir yöntemden fazlasıdır. Bir bakış açısı değişimidir — ruhsal krize ve iyileşmeye bakmanın farklı bir yolu.

**Hastalık yönelimli bakış** tanıyı merkeze koyar. Hedef semptomsuzluktur. Uzman bilgisi olan uzmandır. Bir tedavi planını takip edersin. Bakış eksik ya da bozulmuş olana yönelir — eksikliğe.

**Recovery yönelimli bakış** insanı merkeze koyar. Hedef anlamlı bir yaşamdır — semptomlarla ya da onlara rağmen. İki uzman vardır: uzman VE sen kendin. Kararlar birlikte alınır (Shared Decision-Making). Bakış kaynaklara, umuda, bağa yönelir.

Birkaç kavram çifti farkı gösterir:

- Tanı merkezde → İnsan merkezde
- Semptomsuzluk hedef → Anlamlı yaşam hedef
- Compliance → Shared Decision-Making
- Eksiklik bakışı (patogenez) → Kaynak bakışı (salutogenez)
- Doğrusal iyileşme yolu → Bireysel, doğrusal olmayan yol
- Hasta → İnsan / deneyim sahibi kişi / öğrenci

Önemli: Sağ sütun sol sütunu yerinden etmez. Her ikisinin de yeri vardır. İlaçlar yardımcı olabilir. Tanılar yön verebilir. Bir klinik güvenli bir yer olabilir. Ama bu tek başına yetmez — Recovery tıbbi tabloyu senin sesinle, değerlerinle, anlamınla genişletir.

Amering ve Schmolke bunu noktaya getirir: Recovery yönelimli pratik üstüne eklenen ek bir modül değildir. Bilgiyi üretmenin farklı bir yoludur — uzman bilgisi ile yaşanmış deneyimin eşdeğer kaynaklar olarak birleştirilmesi yoluyla.
:::

:::standard-quiz{id=q-16-std}
- q: "Recovery bakışı tıbbi bakışın yerini alır mı?"
  type: multiple-choice
  options:
    - text: "Evet, onu tamamen yerinden eder."
      correct: false
    - text: "Hayır — onu genişletir. Her ikisinin de yeri vardır."
      correct: true
      explanation: "Recovery bir bakış açısı değişimidir, tıbbi bilgiden vazgeçme değil."
    - text: "Hayır, ona ters düşer."
      correct: false

- q: "Recovery bakışında merkezde ne durur?"
  type: multiple-choice
  options:
    - text: "Tanı."
      correct: false
    - text: "İnsan — hikâyesi, değerleri, anlamıyla."
      correct: true
      explanation: "Tanı yön verir, ama seni tanımlamaz."
    - text: "Klinik."
      correct: false
:::

:::standard-flashcards{id=f-16-std}
- front: "Paradigma değişimi"
  back: "Eksiklik bakışından (patogenez) kaynak bakışına (salutogenez) — tıbbi bakışı bırakmadan."
- front: "Compliance ve Shared Decision-Making"
  back: "Compliance = sen uyarsın. Shared Decision-Making = birlikte karar verirsiniz."
- front: "İki uzmanlık"
  back: "Uzman bilgisi VE yaşanmış deneyim eşdeğer bilgi kaynaklarıdır."
:::


# 17. Sana üç cümle
{#kap-17 reading_time=3}

Sen tanın değilsin. Bir hikâyesi, becerileri, değerleri, ilişkileri olan bir insansın. Bir tanı bir yön gösterici olabilir — asla senin hakkındaki tüm gerçek değildir.

## Recovery hareketinde sık sık duyulan üç cümle

- Sen yaşamının uzmanısın. Deneyimin bilgidir.
- Her şeyi tek başına taşımak zorunda değilsin. Müttefikler ara — akranlar, uzmanlar, güven kişileri.
- Tempo ve yönü sen belirlersin. Bir geriye düşüş başarısızlık değildir.

## Araştırmanın sana verebileceği

Umut iyileşmenin bir öngörücüsüdür [^schrank2012]. Akran desteği öz yetkinlik üzerinde ölçülebilir bir etkiye sahiptir [^slade2024peer] [^mahlke2017]. Recovery College katılımı sonraki bakım maliyetlerini azaltır ve esenliği artırır [^ronaldson2024]. Kendine yönelik damgalama değiştirilebilir [^yanos2015].

:::reflection{id=7 title="İlk adımın"}
- Bu hafta yargılamadan seni dinleyecek kim olabilir, konuşabileceğin?
- Önümüzdeki yedi gün için bir umut çıpası olacak küçük, yapılabilir bir eylem ne olurdu?
- CHIME modelinden — ya da Umut-Güç-Anlam üçlüsünden — hangi alan bu hafta biraz daha fazla dikkat almalı?
:::

:::easy{reading_time=1}
Sen tanın değilsin. Sen bir insansın.

Üç önemli cümle:

- Yaşamını en iyi sen tanırsın.
- Her şeyi tek başına taşımak zorunda değilsin.
- Tempoyu sen belirlersin.

Geriye düşüşler buna aittir. Başarısızlık değildirler.
:::

:::quiz{id=q-17}
- q: "'In Recovery' ne anlama gelir?"
  type: multiple-choice
  options:
    - text: "İyileşmişsin."
      correct: false
    - text: "Yoldasın — bir süreç, bir durum değil."
      correct: true

- q: "Bir geriye düşüş başarısızlık mıdır?"
  type: true-false
  correct: false
  explanation: "Hayır — geriye düşüşler Recovery'nin doğrusal olmayan seyrine aittir."
:::

:::flashcards{id=f-17}
- front: "Sen yaşamının uzmanısın"
  back: "Kimse deneyimini senin kadar iyi tanımıyor. Senin sesin sayılır — uzman bilgisiyle eşdeğer."
- front: "Tempo ve yön"
  back: "İkisini de sen belirlersin. Recovery ölçülebilir ve karşılaştırılabilir değildir."
:::

:::standard{reading_time=2}
Sen tanın değilsin. Bir hikâyesi, becerileri, değerleri, ilişkileri olan bir insansın. Bir tanı bir yön gösterici olabilir — asla senin hakkındaki tüm gerçek değildir.

Recovery hareketinde defalarca söylenen üç cümle — ve sana vermek istediğimiz:

- **Sen yaşamının uzmanısın.** Deneyimin bilgidir. Kimse senin nefesini, gecelerini, umutlarını senin kadar iyi tanımıyor. Bu ses sayılır — her uzman bilgisiyle eşdeğer.
- **Her şeyi tek başına taşımak zorunda değilsin.** Müttefikler ara. Akranlar, uzmanlar, güven kişileri, yakınlar, bir kendine yardım grubu, bir Recovery College. Umudu yeniden kendin hissedinceye kadar ödünç alabilirsin.
- **Tempo ve yönü sen belirlersin.** Recovery ölçülebilir ve karşılaştırılabilir değildir. Bir geriye düşüş başarısızlık değildir — doğrusal olmayan yola aittir. Bazen mola da ilerlemedir.

Araştırmanın sana verebileceği şey: Umut iyileşmenin bir öngörücüsüdür. Akran desteği öz yetkinliği ölçülebilir biçimde güçlendirir. Recovery Colleges hastane yatışlarını azaltır ve esenliği artırır. Kendine yönelik damgalama değiştirilebilir.

Bu üç cümle üzerinden geçilecek bir program değildir. Daha çok cebine koyduğun üç taş gibidirler. İhtiyacın olduğunda onları çıkarırsın.

Belki bugün. Belki ancak altı ay sonra.
:::

:::standard-quiz{id=q-17-std}
- q: "'in Recovery' ne anlama gelir?"
  type: multiple-choice
  options:
    - text: "Tamamen iyileşmişsin."
      correct: false
    - text: "Yoldasın — bir süreç, bir durum değil."
      correct: true
      explanation: "Recovery süren bir yoldur, bir hedef noktası değil."
    - text: "Semptomsuzsun."
      correct: false

- q: "Bir geriye düşüş başarısızlık mıdır?"
  type: multiple-choice
  options:
    - text: "Evet, o zaman yol başarısız olmuştur."
      correct: false
    - text: "Hayır — doğrusal olmayan Recovery seyrine aittir."
      correct: true
      explanation: "Recovery nadiren doğrusaldır. Molalar ve geriye düşüşler yolun parçasıdır."
    - text: "Belki — büyüklüğüne göre."
      correct: false
:::

:::standard-flashcards{id=f-17-std}
- front: "Üç cümle"
  back: "1) Sen yaşamının uzmanısın. 2) Tek başına taşımak zorunda değilsin. 3) Tempo ve yönü sen belirlersin."
- front: "Geriye düşüş"
  back: "Başarısızlık değil. Doğrusal olmayan yola aittir."
- front: "Umudu ödünç almak"
  back: "Kendin umudu hissetmiyorsan, onu başkalarından ödünç alabilirsin — yeniden kendin sahip olana kadar."
:::


# 18. Dil ve tutum — kelimeler neden önemli
{#kap-18 reading_time=3}

Recovery yönelimli dil kozmetik değildir. Bir odada kimin özne olarak tanındığını — ve kimin bir tedavinin nesnesi haline geldiğini değiştirir [^ameringschmolke2012] [^knuf2026].

## Neyden kaçınıyoruz — ve yerine ne söylüyoruz

Almanca konuşulan Recovery söyleminde bir dizi somut dil kuralı yerleşmiştir [^ameringschmolke2012] [^knuf2026] [^slade2013]:

- „Şizofren" → daha iyi: „şizofreni tanısı almış kişi" (Person-first dil).
- Eğitim bağlamında „hasta" / „müşteri" → daha iyi: „öğrenci", „katılımcı", „kriz deneyimi olan kişi".
- „Kronik", „iyileşmez" → kaçın. Her iki terim de ampirik olarak şüphelidir ve kanıtlanmış şekilde iyileşmeye zarar verir.
- „Compliance" → daha iyi: „terapi adheransı", daha da iyi: „ortak karar".
- „Hastalık içgörüsü" → daha iyi: „kendi hastalık anlayışı".
- „Recovered" → Türkçede: „in Recovery" (süreç terimi).
- „Eksiklik", „semptom taşıyıcısı" → daha iyi: „kaynak", „yaşam deneyimi", „ruhsal sarsıntı".

Dil seni de değiştirir. „in Recovery" demeye başlayan kişi, sabit durumlar yerine süreçler içinde daha hızlı düşünür — ve böylece çoğu zaman fark edilmeyen ilk adımı atar.

:::easy{reading_time=1}
Kelimeler gerçekliği değiştirir. Birkaç örnek:

- Değil: „kronik hasta" → daha iyi: „tanıyla yaşıyor"
- Değil: „Compliance" → daha iyi: „ortak karar"
- Değil: „Şizofren" → daha iyi: „şizofreni olan kişi"
- Değil: „iyileşmiş" → daha iyi: „in Recovery"

Dil her şey değildir. Ama çoğu zaman başlangıcı değiştirir.
:::

:::quiz{id=q-18}
- q: "Hangi ifade person-first'tür?"
  type: multiple-choice
  options:
    - text: "Borderliner"
      correct: false
    - text: "Borderline tanısı olan kişi"
      correct: true

- q: "Hangi terim kaçınılmalıdır?"
  type: multiple-choice
  options:
    - text: "Kriz deneyimi olan kişi"
      correct: false
    - text: "Kronik iyileşmez"
      correct: true
      explanation: "Ampirik olarak şüpheli ve kanıtlanmış şekilde iyileşme engelleyici."
:::

:::flashcards{id=f-18}
- front: "Person-first dil"
  back: "Tanı kişiden sonra, ondan önce değil. 'Şizofren' yerine 'şizofreni olan kişi'."
- front: "in Recovery"
  back: "Türkçedeki süreç terimi. 'İyileşmiş' ya da 'hasta' yerine — süren bir yol olarak."
- front: "Compliance'ten kaçın"
  back: "'Compliance' (talimatları takip edersin) yerine daha çok 'ortak karar' ya da 'terapi adheransı'."
:::

:::standard{reading_time=2}
Kelimeler zararsız değildir. Bir odada kimin insan olarak tanındığını — ve kimin bir tedavinin nesnesi haline geldiğini değiştirirler. Recovery yönelimli dil bu nedenle kozmetik değildir. Tutumdur.

Almanca konuşulan Recovery söyleminde somut dil kuralları yerleşmiştir. Birkaç örnek:

- „Şizofren" → daha iyi: „şizofreni tanısı almış kişi" (**Person-first dil**).
- Eğitim bağlamında „hasta" / „müşteri" → daha iyi: „öğrenci", „katılımcı", „kriz deneyimi olan kişi".
- „Kronik", „iyileşmez" → kaçın. Her iki terim de ampirik olarak şüphelidir ve kanıtlanmış şekilde iyileşmeye zarar verir.
- „Compliance" → daha iyi: „terapi adheransı" — daha da iyi: „ortak karar".
- „Hastalık içgörüsü" → daha iyi: „kendi hastalık anlayışı".
- „İyileşmiş" / „recovered" → Türkçede: „in Recovery" — bir süreç olarak, bir son durum olarak değil.
- „Eksiklik", „semptom taşıyıcısı" → daha iyi: „kaynak", „yaşam deneyimi", „ruhsal sarsıntı".

Bu değişimler salt bir etiket meselesi değildir. „in Recovery" demeye başlayan kişi, sabit durumlar yerine süreçler içinde daha hızlı düşünür. „Tanısı olan kişi" diyen kişi, önce insanı sonra tanıyı görür. Bu çoğu zaman yeni bir şeyin başladığı, fark edilmeyen o adımı değiştirir.

Dil seni de değiştirir. Kendin hakkında nasıl konuştuğun, kendin hakkında nasıl düşündüğünü şekillendirir. Bu terimleri hepsini aynı anda öğrenmek zorunda değilsin. Ama belki önümüzdeki günlerde başka kulaklarla dinlersin — doktorların, yakınların, terapistlerin, kendinin söylediği şeyleri.

Ve bir şey seni incitirse: söyleyebilirsin.
:::

:::standard-quiz{id=q-18-std}
- q: "Hangi ifade person-first'tür?"
  type: multiple-choice
  options:
    - text: "Borderliner."
      correct: false
    - text: "Borderline tanısı olan kişi."
      correct: true
      explanation: "Önce insan, sonra tanı. Bu, person-first dildir."
    - text: "Ruhsal hasta kadın."
      correct: false

- q: "Hangi terim kaçınılmalıdır?"
  type: multiple-choice
  options:
    - text: "Kriz deneyimi olan kişi."
      correct: false
    - text: "Kronik iyileşmez."
      correct: true
      explanation: "Ampirik olarak şüpheli ve kanıtlanmış şekilde iyileşme engelleyici."
    - text: "In Recovery."
      correct: false
:::

:::standard-flashcards{id=f-18-std}
- front: "Person-first dil"
  back: "Tanı insandan sonra — ondan önce değil. „Şizofren" yerine „şizofreni olan kişi"."
- front: "In Recovery"
  back: "Türkçedeki süreç terimi. „İyileşmiş" ya da „kronik" yerine — süren bir yol olarak."
- front: "Compliance'ten kaçın"
  back: "„Compliance" (sen uyarsın) yerine daha çok „ortak karar" ya da „terapi adheransı"."
:::


# 19. Bu çalışma kitabını nasıl kullanırsın
{#kap-19 reading_time=2}

Bu dijital çalışma kitabı bir ders kitabı değildir. Bir yol arkadaşıdır:

- Kendine zaman ayır. Günde bir sayfa yeterlidir.
- Kendinle dürüst ol. Neyin kaydedileceğine ya da paylaşılacağına sen karar verirsin.
- Atla. Sana hitap edeni takip et.
- Tekrarla. Aynı soru üç ay sonra başka türlü okunur.
- İstersen paylaş — bir güven kişisiyle, bir akran eşliğiyle, bir grupta.

## Veri koruması ve kendi kararını verme

Bu uygulamaya girdiğin her şey sana aittir. Bir şeyin senkronize edilip edilmeyeceğine, kaydedilip kaydedilmeyeceğine ya da silinip silinmeyeceğine sen karar verirsin. Girişler şifrelidir. Verilerinin kendi silinmesi her zaman mümkündür. Bu kendi kararını verme mimarisi teknik bir ayrıntı değil, bu çalışma kitabının Recovery yönelimli tutumunun ifadesidir [^who2021] [^samhsa2014trauma] [^uncrpd2006].

:::easy{reading_time=1}
Bu uygulamayı şöyle kullanırsın:

- Kendine zaman ayır. Günde bir sayfa yeterlidir.
- Kendinle dürüst ol.
- Bölümden bölüme atla.
- Geri dön. Aynı soru daha sonra başka türlü okunur.
- İstersen paylaş.

Verilerin sana aittir. Uygulama sadece istediğin şeyi kaydeder. Her şeyi silebilirsin. Her zaman.
:::

:::quiz{id=q-19}
- q: "Bölümler sırasıyla okunmak zorunda mı?"
  type: true-false
  correct: false
  explanation: "Hayır — sana uygun şekilde atla."

- q: "Neyin kaydedileceğine kim karar verir?"
  type: multiple-choice
  options:
    - text: "Uygulama"
      correct: false
    - text: "Sen"
      correct: true
:::

:::flashcards{id=f-19}
- front: "Bu uygulamada veri koruması"
  back: "Verilerin sana aittir. Şifreli. Neyin senkronize edileceğine, kaydedileceğine ya da silineceğine sen karar verirsin. Her zaman silinebilir."
- front: "Çalışma şekli"
  back: "Günde bir sayfa. Atlamak serbest. Tekrarlamak istenir. Paylaşmak isteğe bağlı."
:::

:::standard{reading_time=2}
Bu çalışma kitabı bir ders kitabı değildir. Bir yol arkadaşıdır — ve sana nasıl eşlik edeceğini sen belirlersin.

İşe yarayan birkaç not:

- **Kendine zaman ayır.** Günde bir sayfa yeterlidir. Bazen bir paragraf yeterlidir. Ulaşman gereken bir tempo yoktur.
- **Kendinle dürüst ol.** Kimseye bir şey kanıtlamak zorunda değilsin — uygulamaya da değil. Girdilerin senin için.
- **Atla.** Sana hitap edeni takip et. Sırayla okumak zorunda değilsin.
- **Tekrarla.** Aynı yansıma sorusu üç ay sonra başka türlü okunur. Geri dön.
- **İstersen paylaş.** Bir güven kişisiyle, bir akran eşliğiyle, bir grupla — ya da hiç kimseyle. İkisi de doğrudur.

**Veri koruması ve kendi kararını verme.** Bu uygulamaya girdiğin her şey sana aittir. Bir şeyin senkronize edilip edilmeyeceğine, kaydedilip kaydedilmeyeceğine ya da silinip silinmeyeceğine sen karar verirsin. Girişler şifrelidir. Verilerinin tam olarak kendi silinmesi her zaman mümkündür.

Bu yalnızca teknik bir ayrıntı değildir. Bu çalışma kitabının tutumunun ifadesidir: Sen bir tedavinin nesnesi değil, yolunun öznesin. Kendi verilerin üzerinde kendi kararını verme, somut bir Recovery parçasıdır — ve aynı zamanda bir insan hakkıdır (BM-BRK, WHO 2021, SAMHSA).

Bir bölüm çok fazla geldiğinde, onu kapat. Bir şey vurursa, orada kal. Yanlış sıra yoktur. Sadece senin yolun vardır — ve bu çalışma kitabı izin verdiğin kadar seninle gider.
:::

:::standard-quiz{id=q-19-std}
- q: "Bölümleri sırasıyla okumak zorunda mısın?"
  type: multiple-choice
  options:
    - text: "Evet, yoksa olmaz."
      correct: false
    - text: "Hayır — sana uygun şekilde atla."
      correct: true
      explanation: "Sana hitap edeni takip et. Tekrarlamak istenir."
    - text: "Sadece bir uzmanın rehberliğinde."
      correct: false

- q: "Uygulamada neyin kaydedileceğine ya da silineceğine kim karar verir?"
  type: multiple-choice
  options:
    - text: "Uygulamanın kendisi."
      correct: false
    - text: "Sen — her zaman, tamamen silinebilir."
      correct: true
      explanation: "Verilerin üzerinde kendi kararını verme, Recovery yönelimli tutumun ifadesidir."
    - text: "Uzmanın."
      correct: false
:::

:::standard-flashcards{id=f-19-std}
- front: "Çalışma şekli"
  back: "Günde bir sayfa. Atlamak serbest. Tekrarlamak istenir. Paylaşmak isteğe bağlı."
- front: "Veri koruması"
  back: "Girdilerin şifrelidir ve sana aittir. Tam silme her zaman mümkün."
- front: "Çalışma kitabının tutumu"
  back: "Yol arkadaşı, ders kitabı değil. Tempoyu, derinliği ve genişliği sen belirlersin — ve istediğinde tıklayıp çıkabilirsin."
:::


# 20. Kriz ve güvenlik — D-A-CH ve Türkiye acil hatları
{#kap-20 reading_time=2}

Şu an akut yük altındaysan — eğer kendine ya da başkalarına zarar verme düşüncelerin varsa, ya da burada içeriklerin seni ek olarak dengesizleştirdiğini hissediyorsan — bu yansıma soruları için doğru an değildir. Lütfen şimdi destek ara.

:::crisis
Acil hatlar ön bilgi blokunda `helplines:` altında yapılandırılmış olarak yer alır. Uygulama bunları ülke ülke kartlarla Tap-to-Call ve Tap-to-Open-URL ile gösterir.
:::

Bu yerler anonim, ücretsiz ve yargısızdır. Aramak için bir „gerçek krizin" olmak zorunda değilsin. Erken bir saatte yapılan bir arama, hiç aramamaktan her zaman daha iyidir.

:::info{type=warmth title="Kapatmadan önce: zor saatler için üç cümle"}
- Bu yolu tek başına yürümek zorunda değilsin.
- Bir duygu bir bilgidir, bir emir değil — en ağır duygu bile hareket edecektir.
- Yardım istemek asla bir zayıflık işareti değildir. Yaşamını ciddiye aldığının işaretidir.
:::

:::easy{reading_time=1}
Şu an çok kötüysen, burada okumaya devam etme. Yardım al.

- **İsviçre**: Telefon 143 (Die Dargebotene Hand). Gece gündüz.
- **Almanya**: Telefon 0800 111 0 111.
- **Avusturya**: Telefon 142.
- **Türkiye**: İntihari Önleme Derneği — 444 5 588. Sağlık Bakanlığı ALO 182. Sosyal Destek ALO 183. Acil tıbbi yardım 112.

Bu yerler ücretsiz ve anonimdir. Yeterince kötü olup olmadığını bilmiyorsan bile arayabilirsin.

Bir arama asla çok erken değildir.
:::

:::quiz{id=q-20}
- q: "İsviçre'de Die Dargebotene Hand için hangi numarayı çevirirsin?"
  type: multiple-choice
  options:
    - text: "112"
      correct: false
    - text: "143"
      correct: true
    - text: "147"
      correct: false
      explanation: "147 Pro Juventute'dir — çocuk ve gençler için."

- q: "Aramak için 'gerçek bir krizin' olmak zorunda mı?"
  type: true-false
  correct: false
  explanation: "Hayır — erken bir arama hiç aramamaktan her zaman daha iyidir."
:::

:::flashcards{id=f-20}
- front: "Kriz numarası İsviçre"
  back: "143 — Die Dargebotene Hand. Gece gündüz. Anonim. Ücretsiz."
- front: "Kriz numarası Almanya"
  back: "0800 111 0 111 ya da 0800 111 0 222. Telefonseelsorge. 24/7. Ücretsiz."
- front: "Kriz numarası Avusturya"
  back: "142. Telefonseelsorge. 24/7."
- front: "Kriz numarası Türkiye"
  back: "İntihari Önleme Derneği 444 5 588 · ALO 182 (Sağlık) · ALO 183 (Sosyal Destek) · 112 acil tıbbi yardım."
- front: "Çocuk ve gençler CH/AT"
  back: "147 — Pro Juventute (CH) ya da Rat auf Draht (AT). 24/7."
:::

:::standard{reading_time=2}
Şu an akut yük altındaysan — eğer kendine ya da başkalarına zarar verme düşüncelerin varsa, ya da burada içerikler seni ek olarak dengesizleştirdiyse — bu yansıma soruları için doğru an değildir. Lütfen şimdi destek al.

**Almanca konuşulan ülkeler için en önemli numaralar:**

- **İsviçre:** **143** — Die Dargebotene Hand. 24/7. Anonim. Ücretsiz.
- **Almanya:** **0800 111 0 111** ya da **0800 111 0 222** — Telefonseelsorge. 24/7. Ücretsiz.
- **Avusturya:** **142** — Telefonseelsorge. 24/7.

**Türkiye için en önemli numaralar:**

- **İntihari Önleme Derneği:** **444 5 588**
- **ALO 182** — Sağlık Bakanlığı. 24/7.
- **ALO 183** — Sosyal Destek Hattı (kadın/çocuk/aile). 24/7.
- **AÇEV Bilgi Hattı:** **444 2228** — çocuk gelişim danışmanlığı.

Hayati tehlikede: **112** (AB'de ve Türkiye'de) ya da **144** (Sanitäter CH/AT).

Çocuklar ve gençler için: **147** (Pro Juventute CH / Rat auf Draht AT). 24/7.

Bu yerler anonim, ücretsiz ve yargısızdır. Aramak için bir „gerçek krizin" olmak zorunda değilsin. Yeterince kötü olup olmadığını açıklamak zorunda değilsin. Erken bir saatte yapılan bir arama, hiç aramamaktan her zaman daha iyidir.

**Zor saatler için üç cümle — kapatmadan önce:**

- Bu yolu tek başına yürümek zorunda değilsin.
- Bir duygu bir bilgidir, bir emir değil. En ağır duygu bile hareket edecektir.
- Yardım istemek bir zayıflık işareti değildir. Yaşamını ciddiye aldığının işaretidir.

Şu an kimseyi arayamıyorsan: Güvendiğin bir kişiyle temas kur. Bir mesaj yaz. En yakın acil servise git. Dışarıya doğru küçük bir hareket yeterlidir.

Yalnız değilsin. Şu an öyle hissetse bile.
:::

:::standard-quiz{id=q-20-std}
- q: "İsviçre'de akut ruhsal yükte hangi numarayı çevirirsin?"
  type: multiple-choice
  options:
    - text: "112"
      correct: false
    - text: "143 (Die Dargebotene Hand)"
      correct: true
      explanation: "143, İsviçre'de ruhsal sıkıntı için 24/7 kriz numarasıdır."
    - text: "144 — bu sadece hayati tehlike / Sanität içindir."
      correct: false

- q: "Aramak için 'gerçek bir krizin' olmak zorunda mısın?"
  type: multiple-choice
  options:
    - text: "Evet, yoksa seni ciddiye almazlar."
      correct: false
    - text: "Hayır — erken bir arama hiç aramamaktan her zaman daha iyidir."
      correct: true
      explanation: "Emin olmasan bile arayabilirsin."
    - text: "Sadece hayati tehlikedeysen."
      correct: false
:::

:::standard-flashcards{id=f-20-std}
- front: "Acil numara İsviçre"
  back: "143 — Die Dargebotene Hand. 24/7. Anonim. Ücretsiz."
- front: "Acil numara Almanya"
  back: "0800 111 0 111 ya da 0800 111 0 222 — Telefonseelsorge. 24/7. Ücretsiz."
- front: "Acil numara Avusturya"
  back: "142 — Telefonseelsorge. 24/7."
- front: "Acil numara Türkiye"
  back: "İntihari Önleme Derneği 444 5 588 · ALO 182 · ALO 183 · 112 acil tıbbi yardım."
- front: "Ne zaman aramalı?"
  back: "Her zaman. Tereddütte bile. Bir arama asla çok erken değildir."
:::


# 21. Sonda küçük bir söz
{#kap-21 reading_time=2}

Recovery, her şeyin yeniden eskisi gibi olacağı anlamına gelmez. Yeni bir şeyin doğmasına izin verileceği anlamına gelir — bazen hatta bu deneyim olmadan asla var olmayacak bir şeyin.

Burada söylenenin boş bir vaat gibi geleceği günlerin olacak. Ve bir şeyin kaydığını sen kendin fark edeceğin günlerin olacak — minik bir umut, küçük bir bağ, daha önce mümkün olmayan bir düşünce.

Araştırmanın sana yolda verebileceği şey: Yalnız değilsin. Bir yol vardır. Ve umudu yeniden hissedinceye kadar ödünç alabilirsin.

:::quote{author="Patricia Deegan, 1996" source="deegan1996" lang="en"}
By accepting what we cannot do or be, we begin to discover what we can do and who we can become.
:::

:::quote-translation{source="deegan1996" translator="kendi çevirimiz"}
Olamayacağımız ya da yapamayacağımız şeyi kabul ederek, kim olabileceğimizi ve ne yapabileceğimizi keşfetmeye başlarız.
:::

:::quote{author="Antonio Machado"}
Yollar, yürünürken oluşur.
:::

:::pull
Senin yolunda.
:::

:::easy{reading_time=1}
Recovery şu anlama gelmez: Her şey eskisi gibi olur.

Recovery şu anlama gelir: Yeni bir şeyin doğmasına izin verilir.

Zor günlerin olacak. Daha hafif günlerin de olacak.

Sonda üç cümle:

- Yalnız değilsin.
- Bir yol vardır.
- Yeniden kendin sahip olana kadar umudu ödünç alabilirsin.

Senin yolunda.
:::

:::quiz{id=q-21}
- q: "Hangi imge Recovery'yi en iyi tanımlar?"
  type: multiple-choice
  options:
    - text: "Hedefe giden düz bir çizgi."
      correct: false
    - text: "Yürünürken oluşan bir yol (Machado)."
      correct: true

- q: "Yol kime aittir?"
  type: multiple-choice
  options:
    - text: "Doktora."
      correct: false
    - text: "Sana — müttefiklerinle."
      correct: true
:::

:::flashcards{id=f-21}
- front: "Senin yolunda"
  back: "Girişin son cümlesi. Recovery her zaman senin yolundur — müttefiklerinle."
- front: "Üç son cümle"
  back: "Yalnız değilsin. Bir yol vardır. Yeniden kendin sahip olana kadar umudu ödünç alabilirsin."
- front: "Yollar, yürünürken oluşur"
  back: "Antonio Machado — pek çok Recovery çalışma kitabının ve bu uygulamanın da mottosu."
:::

:::standard{reading_time=2}
Recovery, her şeyin yeniden eskisi gibi olacağı anlamına gelmez. Yeni bir şeyin doğmasına izin verileceği anlamına gelir — bazen hatta bu deneyim olmadan asla var olmayacak bir şeyin. Farklı bir derinlik. Farklı bir dikkat. Bazen daha önce sahip olmadığın bir dil.

Burada söylenenin boş bir vaat gibi geleceği günlerin olacak. Ve bir şeyin kaydığını sen kendin fark edeceğin günlerin olacak — minik bir umut, küçük bir bağ, daha önce mümkün olmayan bir düşünce.

İkisi de buna aittir. Recovery düz bir yol değildir. Molaları, ilmekleri, geri yolları vardır. Antonio Machado şöyle dedi: „Yollar, yürünürken oluşur." Bu senin yolun için de geçerlidir.

Araştırmanın sana yolda verebileceği şey:

- **Yalnız değilsin.** Binlerce insan benzer dönemlerden geçti — ve iyi bir yaşam buldu.
- **Bir yol vardır.** Bugün görünmez olsa bile. Başkalarının yoluna benzemese bile.
- **Umudu ödünç alabilirsin.** Şu an sahip değilsen, başkaları onu senin için tutar — bir akran eşliği, bir terapist, bir arkadaş, bir kitap, bu çalışma kitabından bir hikâye.

Bu çalışma kitabını yeniden kapatabilirsin. Aylar sonra yeniden açabilirsin. Paylaşabilirsin. Unutabilirsin. Şunu da diyebilirsin: bugün değil.

Geriye kalan bu küçük sözdür: Senin yolunda. Bir parça seninle gidiyoruz.
:::

:::standard-quiz{id=q-21-std}
- q: "Şu an umut hissetmiyorsan ne olur?"
  type: multiple-choice
  options:
    - text: "O zaman Recovery bitmiştir."
      correct: false
    - text: "O zaman başkalarından umut ödünç alabilirsin — yeniden kendin sahip olana kadar."
      correct: true
      explanation: "Umut paylaşılabilir. Başkaları onu senin için tutabilir."
    - text: "O zaman bir şey yanlış yapmışsındır."
      correct: false

- q: "Recovery nasıl ilerler?"
  type: multiple-choice
  options:
    - text: "Hedefe giden düz bir çizgi olarak."
      correct: false
    - text: "Bireysel bir yol olarak — molalar, ilmekler, geri yollarla. „Yollar, yürünürken oluşur." (Machado)"
      correct: true
      explanation: "Recovery doğrusal değildir. Geriye düşüşler buna aittir."
    - text: "Diğerleriyle aynı şekilde."
      correct: false
:::

:::standard-flashcards{id=f-21-std}
- front: "Recovery"
  back: "Yeni bir şeyin doğmasına izin verilir. Değil: her şey eskisi gibi olur."
- front: "Umudu ödünç almak"
  back: "Kendin sahip değilsen: başkaları onu senin için tutar — yeniden hissedinceye kadar."
- front: "Üç son cümle"
  back: "Yalnız değilsin. Bir yol vardır. Umudu ödünç alabilirsin."
- front: "Senin yolunda"
  back: "„Yollar, yürünürken oluşur." (Antonio Machado) — Bir parça seninle gidiyoruz."
:::


# Yöntemsel notlar (dahili)
{#methodik}

Tüm ifadeler ön bilgi blokunda listelenen birincil kaynaklara karşı kontrol edilmiştir. Derlemeler ve meta-analizler mevcut olduğunda, bunlara tek tek çalışmalardan öncelik verilmiştir.

Birebir alıntılar orijinal sözcüklerle aktarılmıştır (`source`-referansıyla Quote-Widget). Türkçe çeviriler „kendi çevirimiz" olarak işaretlenmiştir (Quote-Translation-Widget). Kavramlar ve modeller (CHIME, CHIME-D, Umut-Güç-Anlam, Personal Medicine, Trialog, EX-IN, Salutogenez, Open Dialogue) bilimsel terimler olarak kullanılır ve kaynak kayıtlarında yazarlarıyla bağlantılıdır.


Çeviri notu: Bu Türkçe sürüm makine destekli bir taslak çeviridir (2026-06-20). Kriz içerikleri ve kültürel açıdan hassas pasajlar için profesyonel uzman incelemesi önerilir.
