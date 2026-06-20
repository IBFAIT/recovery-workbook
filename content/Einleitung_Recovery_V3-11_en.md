---
schema_version: "1.2"
content_id: "recovery-einleitung"
content_version: "3.14"
title: "Recovery"
subtitle: "A comprehensive introduction — Hope. Power. Meaning."
language: "en"
translation_status: "draft-machine-translated"
translation_date: "2026-06-20"
translator: "Claude subagent (draft — needs professional review of crisis content). Updated 2026-06-20 with Standard mode blocks"
region: "D-A-CH"
target_audience: "betroffene"
target_audience_label: "For people with lived experience of mental health challenges"
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
    status: "draft-machine-translated"
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
  full:     "Detailed — with research, quotes and sources"
  standard: "Standard — medium length, clear and personal"
  easy:     "Plain — short and in simple language"
default_reading_mode: "standard"
# - full: renders everything except :::easy and :::standard
# - standard: renders ONLY :::standard blocks (every chapter has one)
# - easy: renders ONLY :::easy blocks of every chapter
#/low remains as a recommendation metadatum for the app

widget_types:
  reflection:    "Interactive reflection question(s) — stored locally"
  quote:         "Verbatim quote with source"
  quote_translation: "Free rendering with source reference"
  info:          "Background box"
  metaphor:      "Visual explanation"
  crisis:        "Crisis / helpline notice"
  source_chip:   "Inline source as a clickable chip"
  pull:          "Highlighted key sentence"
  table:         "Structured table"
  easy:          "Short, plain-language variant of the chapter — rendered only in reading mode 'easy'"
  quiz:          "Mini-quiz per chapter (multiple-choice/true-false) — checks understanding"
  flashcards:    "Flashcards per chapter (front/back) — user can save to personal collection"
  standard:      "Medium-length standard variant of the chapter — present in every chapter"
  standard-quiz: "Mini-quiz per chapter in standard mode (2–3 questions)"
  standard-flashcards: "Flashcards per chapter in standard mode (2–4 cards)"

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
  - country: "UK"
    name: "Samaritans"
    number: "116 123"
    coverage: "24/7, free, anonymous"
    target: "alle"
    url: "https://www.samaritans.org"
  - country: "US/CA"
    name: "988 Suicide & Crisis Lifeline"
    number: "988"
    coverage: "24/7"
    target: "alle"
    url: "https://988lifeline.org"
  - country: "AU"
    name: "Lifeline Australia"
    number: "13 11 14"
    coverage: "24/7"
    target: "alle"
    url: "https://www.lifeline.org.au"
---
# Important note before reading
{#disclaimer reading_time=2}

:::info{type=warmth title="Please read this first"}
This app is a **prototype**. It is still being developed and is not finished.

It exists solely to test a possible future workbook in the field of recovery.
:::

## What this is and what it isn't

You are using a **test version** of an app that is still in development. The texts and features are a first draft. They have not yet been professionally reviewed — neither clinically nor linguistically.

**This app is NOT a therapeutic tool.** It does not replace treatment, therapy, medical advice or crisis intervention.

## Please stick to the following rules

- **Do not use it in clinical settings.** In its current form, this app must not be used as a tool in clinics, practices, counselling centres or other care settings.
- **Do not rely on it as your only support in private life.** If you are personally affected, please only use this app as part of an organised test phase — not as your sole companion in a difficult life situation.
- **When in doubt: get real help.** If you are not doing well, turn to someone you trust, to the people treating you, or to the crisis numbers listed in chapter 20 of this workbook.

## No warranty, no liability

The contents of this app are provided without any warranty. No liability is accepted for any damages — material or immaterial — that could arise from the use or non-use of this app.

The app has been created to the best of our knowledge and on the basis of current recovery research. Even so, it may contain mistakes, inaccuracies or unfitting wording. If you notice something, we welcome your feedback — that is exactly what this test phase is for.

## If you are currently in a crisis

If reading this app is difficult for you or destabilises you, put it aside.

In acute crises you can reach these lines around the clock:
- **Switzerland:** 143 (Die Dargebotene Hand)
- **Germany:** 0800 111 0 111 (Telefonseelsorge)
- **Austria:** 142 (Telefonseelsorge)
- **In life-threatening situations:** 112 or 144 (CH/AT) or 112 (DE)

Reaching out for help is never too early.

:::standard{reading_time=2}
You are using a **prototype**. This app is not finished yet — it is meant to show what a future Recovery workbook could look like. The texts and features are a first draft and have not yet been professionally reviewed.

**This app is not a therapeutic tool.** It does not replace treatment, therapy, medical advice, or crisis intervention.

**Please follow these rules:**

- Do not use it in clinical settings — that is, not as an aid in clinics, practices, or counselling services.
- Do not use it as your only support during a difficult time.
- When in doubt: get real help — a trusted person, your care team, or a crisis line.

**In an acute crisis**, you can reach support 24/7: Samaritans (UK/IE) **116 123**, Switzerland **143**, Germany **0800 111 0 111**, Austria **142**. In a life-threatening situation: **112** (Europe) or your local emergency number.

The content is provided without warranty. If something stands out to you, we welcome your feedback — that is exactly what this testing phase is for.

By continuing to read, you confirm that you have understood this notice.
:::

:::pull
By reading on, you confirm that you have understood these notes and that you are using the app as part of a test phase.
:::


# Prologue: Recovery begins with stories
{#vorspann reading_time=4}

:::pull
Recovery is many thousands of stories of people who, despite or because of their symptoms, have found a way into a good life.
:::

These are stories that rarely make the newspapers, because they don't deliver scandal. But they happen every day — in bookstores, at pianos, in choirs, in discussion circles, in living rooms, in waiting rooms, in kitchens.

A woman who was long convinced she would never work in a profession again, and who today runs a small bookstore. A father who plays the piano again after a psychosis — differently than before, with less perfection, with more love. A young man who, after years with a borderline diagnosis, has become a peer support worker, because he wants to extend to others the hand that was missing for him. A mother who accompanied her daughter through a severe eating disorder and says: during that time I learned more about love than in all my life before.

Such stories don't come in dozens. They come in thousands. Probably in hundreds of thousands. As many as there are people who have ever gone through a difficult time mentally.

## Recovery is documented

In 2007, the Scottish Recovery Network gathered sixty-four such stories and analysed them systematically [^brown2007]. The British initiative ImROC has been collecting personal accounts for years [^imroc]. The international Hearing Voices community has, since the 1990s, been gathering voices that do not appear in textbooks [^hvn].

At the University of Nottingham, Mike Slade has built a scientific collection of recorded Recovery stories with the NEON programme — Narrative Experiences Online [^slade2021neon]. Randomised controlled trials have shown that listening to such stories measurably improves quality of life — for people with experience of psychosis [^rennick2024neon] and for the relatives who walk alongside them [^neonc2024].

Put differently: Recovery is not just a felt promise. Recovery is a documented phenomenon. And other people's stories are themselves a form of help.

## Recovery is practical

Recovery does not first take place in the treatment room. Recovery is encounters. Recovery is the garden where, after months, something is planted again. The dog who finds the door every morning. The choir in which your own breath has a voice again. The friend who listens without wanting to fix. The trialogue discussion circle on Wednesday evening. The hike into the hills. The bread that needs twelve hours in the sourdough.

Recovery is stories of resilience — and of creativity that often arises precisely where something has broken. Recovery is, very often, also: happiness.

Not the flawless, ever-radiant happiness of glossy brochures. But the other kind — the quiet, grateful, sometimes surprised happiness. The happiness you only know once you know how long a day can be.

## And you?

You don't have to feel any of this yet to be here. Perhaps this isn't the moment for big words like happiness or meaning. Perhaps it's enough today that you are reading this page. That is enough.

This workbook is written for people who are walking such a path — or accompanying someone, or trying to understand. It does not want to be a pretty theory. It wants to be a waymarker.

:::pull
Before we begin — a brief signpost.
:::

:::easy{reading_time=1}
Recovery is a movement. Many people have managed it: they had a hard time. Today they live well. Despite illness. Sometimes even because of the illness.

There are thousands of such stories.

Recovery doesn't only happen at the doctor's. Recovery happens in your life. While cooking. While walking. While talking with good people.

This workbook wants to help you. It is not a book to study. It is a companion.
:::

:::quiz{id=q-vorspann}
- q: "Where does Recovery happen most?"
  type: multiple-choice
  options:
    - text: "Only in the clinic."
      correct: false
      explanation: "No. Recovery happens above all in everyday life — in encounters, in small steps."
    - text: "In life — in encounters, in everyday moments."
      correct: true
      explanation: "Exactly. Treatment is a tool, not a place."
    - text: "Only once all symptoms are gone."
      correct: false
      explanation: "Recovery does not start only after symptoms have disappeared."

- q: "How many Recovery stories are there?"
  type: multiple-choice
  options:
    - text: "A handful."
      correct: false
    - text: "Hundreds."
      correct: false
    - text: "Thousands, if not hundreds of thousands."
      correct: true
      explanation: "As many as there are people who have ever gone through a hard time."
:::

:::flashcards{id=f-vorspann}
- front: "Recovery begins with …"
  back: "… stories. Thousands of people who, despite or because of their symptoms, have found a way into a good life."
- front: "NEON programme"
  back: "A scientific collection of recorded Recovery stories (University of Nottingham). Studies show: listening to such stories measurably improves quality of life."
- front: "Recovery takes place …"
  back: "… not first in the treatment room. In the garden, in the choir, in conversation, while cooking, in encounters."
:::

:::standard{reading_time=2}
Recovery begins with stories. Not with theory, not with diagnoses — with people who have found a way.

A woman who for years was sure she would never work in a profession again, and who today runs a small bookstore. A father who plays the piano again after a psychosis — differently than before, with less perfection, with more love. A young man who, after a borderline diagnosis, today walks alongside others because he wants to offer them the hand that was missing for him.

There aren't dozens of such stories. There are thousands. As many as there are people who have ever gone through a hard time mentally.

Recovery is more than a felt promise. Recovery is documented:

- The Scottish Recovery Network systematically analysed 64 life paths.
- The University of Nottingham scientifically collects Recovery stories.
- Studies show: listening to such stories measurably improves quality of life.

And Recovery rarely happens first in the treatment room. Recovery happens in the garden, where after months something is planted again. In the choir, in which your breath has a voice again. In the friend who listens without wanting to fix.

You don't have to feel any of this yet to be here. Perhaps today it's enough that you are reading this page. That is enough.

This workbook is a waymarker. Not a pretty theory — but a companion for your path.
:::

:::standard-quiz{id=q-vorspann-std}
- q: "Where does Recovery happen above all?"
  type: multiple-choice
  options:
    - text: "Only in the clinic or in therapy."
      correct: false
      explanation: "Recovery happens above all in everyday life — in encounters, in the garden, in the choir, while cooking."
    - text: "In life — in encounters and in everyday moments."
      correct: true
      explanation: "Exactly. Treatment is a tool, not a place."
    - text: "Only once all symptoms have disappeared."
      correct: false
      explanation: "No. Recovery begins in the middle of difficulty."

- q: "How many Recovery stories are there?"
  type: multiple-choice
  options:
    - text: "A handful."
      correct: false
    - text: "Thousands, probably hundreds of thousands."
      correct: true
      explanation: "As many as there are people who have ever gone through a hard time."
    - text: "Only very few isolated cases."
      correct: false
:::

:::standard-flashcards{id=f-vorspann-std}
- front: "Recovery begins with …"
  back: "… stories. Thousands of people who, despite or because of their symptoms, have found a way into a good life."
- front: "Where does Recovery happen?"
  back: "In everyday life. In the garden, in the choir, in conversation, while cooking. Treatment is a tool, not a place."
- front: "Are you alone?"
  back: "No. Thousands have gone through similar times. Their stories show: there is a way."
:::


# A brief note on language
{#sprache reading_time=2}

Words create reality. Someone addressed as "a schizophrenic" hears a diagnosis. Someone addressed as "a person with the diagnosis of schizophrenia" remains first of all a person. This introduction deliberately uses person-first language: the diagnosis comes after the person, not before [^ameringschmolke2012] [^knuf2026].

We speak of people with mental health crises, with crisis experience or with experience of psychiatric care — not of "the ill". We speak of people in Recovery — not of "the cured". We use "you" because the digital workbook is a personal space — not because we place ourselves above you. If you are reading as a professional: read the "you" as a model for a way of speaking that creates closeness without emphasising hierarchy.

A catchy German translation of Recovery has never become established — just as none has for the closely related term Empowerment. We therefore use Recovery throughout as a technical term and, in the next chapter, place alongside it the complementary German reading "Hope — Power — Meaning" [^ameringschmolke2006].

:::easy{reading_time=1}
Words matter.

Someone called "a schizophrenic" is only ill. Someone called "a person with schizophrenia" remains a person first.

We use the word Recovery. It is English. There is no good German word for it. Recovery means: walking a path towards a good life.

In this app we address you as "you". Not because we are better. But because this space is your space.
:::

:::quiz{id=q-sprache}
- q: "Which phrasing is person-first?"
  type: multiple-choice
  options:
    - text: "The schizophrenic"
      correct: false
    - text: "Person with the diagnosis of schizophrenia"
      correct: true
      explanation: "The diagnosis comes after the person, not before."
    - text: "A schizo"
      correct: false
:::

:::flashcards{id=f-sprache}
- front: "Person-first language"
  back: "The diagnosis after the person, not before: 'person with schizophrenia' instead of 'a schizophrenic'."
- front: "Why Recovery as a term?"
  back: "There is no elegant German translation. Recovery is used throughout as an established technical term."
:::

:::standard{reading_time=2}
Words create reality. They are not harmless.

Someone addressed as "a schizophrenic" hears a diagnosis before they are a person. Someone addressed as "a person with the diagnosis of schizophrenia" remains first of all a person — and carries the diagnosis as one part, not as the whole.

This workbook deliberately uses person-first language: the diagnosis stands after the person, not before.

Concretely, this means:

- We speak of people with mental health crises, not of "the ill".
- We speak of people in Recovery, not of "the cured".
- We speak of peer support workers, not of "inmate work".

For the word Recovery itself there is no catchy German translation — just as there is none for Empowerment. We therefore use Recovery throughout as a technical term. In the next chapter we place alongside it the German reading "Hope — Power — Meaning".

One particularity: you will be addressed with "you" throughout. Not because we place ourselves above you — on the contrary. The digital workbook is a personal space. The "you" creates closeness without emphasising hierarchy. If you are reading as a professional: read the "you" as a model for a way of speaking that expresses meeting at eye level.
:::

:::standard-quiz{id=q-sprache-std}
- q: "Which phrasing is person-first?"
  type: multiple-choice
  options:
    - text: "The schizophrenic"
      correct: false
      explanation: "Here the diagnosis comes first — that is not person-first."
    - text: "Person with the diagnosis of schizophrenia"
      correct: true
      explanation: "Exactly. Diagnosis after the person — the person stays visible first."
    - text: "A schizo"
      correct: false
      explanation: "Stigmatising and reduces the person to the diagnosis."

- q: "Why does the workbook use 'you'?"
  type: multiple-choice
  options:
    - text: "Because the authors feel superior."
      correct: false
    - text: "Because the digital workbook is a personal space — closeness without hierarchy."
      correct: true
      explanation: "The 'you' creates closeness, not distance from above."
:::

:::standard-flashcards{id=f-sprache-std}
- front: "Person-first language"
  back: "The diagnosis after the person, not before. 'Person with schizophrenia' instead of 'a schizophrenic'."
- front: "Why does 'Recovery' stay English?"
  back: "There is no catchy German translation. Recovery is used as an established technical term."
:::


# Welcome
{#willkommen reading_time=3}

It's good that you are here.

This digital workbook is written for you — if you are going through a hard time yourself, have received a diagnosis, or have lived with a mental illness for a long time.

Perhaps you have often been in treatment. Perhaps you are at the very beginning. Perhaps you have already come a long way and are looking for a new language for what you are experiencing.

This workbook is written so that you can explore it at your own pace. You don't have to read everything. You don't have to do anything in a particular order. You may skip, come back, put it down.

:::info{type=metaphor title="An image for the path: Kintsugi"}
Kintsugi is a traditional Japanese repair art. Broken ceramic is mended with gold. The breaks are not hidden, but made visible and given dignity. The vessel does not become less valuable through the break — but, in many people's eyes, more.

Recovery paths often follow a similar logic: it is not about retouching the breaks away, but about integrating them into a new whole.

Recovery does not mean becoming who you were before. Recovery means that what was is allowed to become part of a new whole.
:::

:::quote{author="U.S. Substance Abuse and Mental Health Services Administration (SAMHSA), 2012" source="samhsa2012"}
Recovery is a journey of healing and transformation enabling a person with a mental health problem to live a meaningful life in a community of his or her choice while striving to achieve his or her full potential.
:::

:::easy{reading_time=1}
It's good that you are here.

This workbook is written for you — if you are going through hard times yourself.

You don't have to read everything. Choose what fits you. Come back when you want.

You set your own pace.
:::

:::quiz{id=q-willkommen}
- q: "Who is this workbook for?"
  type: multiple-choice
  options:
    - text: "For people with their own experience of mental distress."
      correct: true
      explanation: "It is written for you — no matter where you are on your path right now."
    - text: "Only for professionals."
      correct: false
    - text: "Only for people with a particular diagnosis."
      correct: false

- q: "Do you have to read the workbook in order?"
  type: true-false
  correct: false
  explanation: "No. You may skip, come back, put it down. You set the pace and the order."
:::

:::flashcards{id=f-willkommen}
- front: "Who is this workbook for?"
  back: "For you — if you have your own experience of mental distress."
- front: "Kintsugi"
  back: "Japanese repair art: breaks mended with gold, not hidden. A metaphor for Recovery: what was broken becomes part of a new whole."
- front: "Self-determination in reading"
  back: "You choose what you read. You choose your pace. You may re-enter anywhere."
:::

:::standard{reading_time=2}
It's good that you are here.

This workbook is written for you — if you are going through a hard time yourself, have received a diagnosis, or have lived with a mental illness for a long time.

Perhaps you are at the very beginning. Perhaps you already have many therapies behind you. Perhaps you are looking for a new language for what you are experiencing — or simply for someone who doesn't want to fix anything, but walks alongside you.

You don't have to bring anything with you. No prior knowledge, no good day, no finished story. Read what speaks to you. Leave aside what doesn't fit right now. Come back when you want.

One image we like to use is Kintsugi — the Japanese repair art. Broken ceramic is mended with gold. The breaks are not hidden, but made visible. The vessel does not become less valuable through the break — in many people's eyes it becomes more.

Recovery follows a similar logic. It is not about retouching away everything that was. It is about what was broken being allowed to become part of a new whole.

A few notes before you start:

- You set the pace and the order.
- There are different reading modes: plain, standard, detailed.
- You can enter and leave anywhere.
- If something becomes too much: put it down. That is not giving up — that is self-care.

No one is pushing you. This space belongs to you.
:::

:::standard-quiz{id=q-willkommen-std}
- q: "Who sets the pace and the order?"
  type: multiple-choice
  options:
    - text: "The app."
      correct: false
    - text: "You."
      correct: true
      explanation: "You may skip, put it down, come back."
    - text: "The order is fixed."
      correct: false

- q: "What does Kintsugi mean as an image for Recovery?"
  type: multiple-choice
  options:
    - text: "Breaks are made as invisible as possible."
      correct: false
    - text: "Breaks are made visible — and become part of a new whole."
      correct: true
      explanation: "Recovery does not mean retouching everything away. What was is allowed to become part of the new."
:::

:::standard-flashcards{id=f-willkommen-std}
- front: "Your pace"
  back: "You decide what you read and when. Skipping, putting down, coming back — all allowed."
- front: "Kintsugi"
  back: "Japanese repair art: breaks mended with gold. A metaphor for Recovery — what was broken becomes part of a new whole."
- front: "When something becomes too much"
  back: "Put it down. That is not giving up — that is self-care."
:::


# 1. What Recovery really means
{#kap-1 reading_time=5}

## The word and its history

The English word recovery literally means restoration, regaining, recuperation. In mental health it has been established since the 1980s as an umbrella term for a new view of mental suffering [^anthony1993] [^deegan1988].

Recovery is not primarily a medical concept. It comes from the experiences of people who had themselves received psychiatric diagnoses and refused to be reduced to them [^chamberlin1978] [^deegan1988].

## The classical definition

The most-cited definition comes from William Anthony, then director of the Center for Psychiatric Rehabilitation at Boston University.

:::quote{author="Anthony, 1993, S. 15" source="anthony1993" lang="en"}
Recovery is described as a deeply personal, unique process of changing one's attitudes, values, feelings, goals, skills, and/or roles. It is a way of living a satisfying, hopeful, and contributing life even with limitations caused by illness.
:::

:::quote-translation{source="anthony1993" translator="own rendering"}
Recovery is a deeply personal, unique process of change — of one's own attitudes, values, feelings, goals, skills or roles. It is a way of living in which, even with the limitations of an illness, one can lead a fulfilled, hopeful life and make a contribution.
:::

This definition has been the international reference point for over three decades. It has been adopted by SAMHSA [^samhsa2012], shaped by the Sainsbury Centre for Mental Health tradition, and integrated into WHO guidelines [^who2021].

## Clinical and personal recovery

Research distinguishes between two concepts [^slade2009]:

- **Clinical recovery**: Symptoms become less severe or disappear, the diagnosis loses its meaning. This understanding comes from medicine.
- **Personal recovery**: You experience your life as meaningful, worth living and self-determined — independent of whether all symptoms have disappeared.

Recovery in the sense of this workbook means above all personal recovery. It can go together with clinical recovery, but it does not have to.

## German-speaking definitions

:::quote{author="Stiftung Pro Mente Sana Schweiz, 2024" source="promentesana"}
The shortest description of Recovery is: to lead as good a life as possible, even in confrontation with a severe mental impairment.
:::

Amering and Schmolke speak of the "end of incurability" [^ameringschmolke2012]. They draw on longitudinal research showing that a fulfilled life is possible even after serious illnesses such as schizophrenia. Knuf understands Recovery as a process of engaging with oneself and with the illness — with the goal of leading a hopeful and active life despite mental health problems [^knuf2026].

The German S3 guideline "Psychosocial Therapies for Severe Mental Illness" has brought Recovery into the German-speaking mainstream of care and named Recovery orientation as a guiding principle [^dgppn2019].

:::reflection{id=1 title="What does recovery mean to you?"}
- When you hear the word recovery — which image rises first?
- Which of the definitions above speaks to you most? And why?
- What would a "good life" look like for you — even if not everything is "gone"?
:::

:::easy{reading_time=2}
Recovery means: recovery.

But Recovery does not mean: all symptoms must be gone.

Recovery means: you live well. Even if you still go through hard things.

There are two kinds of recovery:

- The symptoms get less. That is clinical recovery.
- You experience your life as good and meaningful. That is personal recovery.

Both are possible. Both may exist at the same time.

A Swiss foundation says: Recovery means leading as good a life as possible. Even when something hard is there.

:::reflection{id=1-easy title="Ask yourself"}
- What does a good life mean for you?
- What do you need for it? What not?
:::
:::

:::quiz{id=q-1}
- q: "What does Recovery mean?"
  type: multiple-choice
  options:
    - text: "All symptoms must disappear."
      correct: false
      explanation: "No. Personal recovery can also work with persisting symptoms."
    - text: "Leading a meaningful, self-determined life — even if symptoms remain."
      correct: true
      explanation: "Exactly. That is the core of personal recovery (Anthony 1993)."
    - text: "A particular method of therapy."
      correct: false

- q: "Which two kinds of recovery does research distinguish?"
  type: multiple-choice
  options:
    - text: "Fast and slow recovery."
      correct: false
    - text: "Clinical and personal recovery."
      correct: true
      explanation: "Clinical = symptoms gone. Personal = leading a life with meaning."
    - text: "Therapeutic and medical recovery."
      correct: false
:::

:::flashcards{id=f-1}
- front: "Clinical recovery"
  back: "Symptoms become less or disappear. The diagnosis loses its meaning. The medical understanding of healing."
- front: "Personal recovery"
  back: "You experience your life as meaningful, worth living and self-determined — independent of whether all symptoms have disappeared."
- front: "Anthony 1993 — the core definition"
  back: "Recovery is a deeply personal, unique process of changing attitudes, values, feelings, goals and roles — a way of leading a fulfilled life, even with limitations."
- front: "Pro Mente Sana — the shortest definition"
  back: "Leading as good a life as possible — even in confrontation with a severe mental impairment."
:::

:::standard{reading_time=2}
Recovery is an English word. Literally it means recovery, regaining, recuperation. In mental health it has been, since the 1980s, the umbrella term for a new view of mental suffering — one that was not invented by doctors, but by people with lived experience themselves.

The classical definition comes from William Anthony, a researcher from Boston: Recovery is a deeply personal process of changing one's own attitudes, values, goals and roles — a way of leading a fulfilled, hopeful life, even with the limitations of an illness.

Research distinguishes two readings:

- **Clinical recovery:** Symptoms become less or disappear. The diagnosis loses its meaning. This is the medical view.
- **Personal recovery:** You experience your life as meaningful, worth living and self-determined — independent of whether symptoms are still there.

Recovery in the sense of this workbook means above all personal recovery. It can go together with clinical recovery, but it does not have to. Both may exist at the same time. And both may have their own pace.

The Swiss foundation Pro Mente Sana sums it up in one sentence: Recovery means leading as good a life as possible — even in confrontation with a severe mental impairment.

What matters is this: you are more than your diagnosis. You are a person first — everything else comes after. And you don't have to walk this path alone. Others can walk alongside you.
:::

:::standard-quiz{id=q-1-std}
- q: "What does Recovery mean above all?"
  type: multiple-choice
  options:
    - text: "Being cured. No more symptoms."
      correct: false
      explanation: "That would be clinical recovery. Recovery means more — above all personal recovery."
    - text: "A fulfilled life — even with symptoms."
      correct: true
      explanation: "Exactly that is Anthony's classical definition (1993)."
    - text: "A particular method of therapy."
      correct: false

- q: "Which two kinds of recovery does research distinguish?"
  type: multiple-choice
  options:
    - text: "Fast and slow recovery."
      correct: false
    - text: "Clinical and personal recovery."
      correct: true
      explanation: "Clinical = symptoms gone. Personal = leading a life with meaning."

- q: "Who developed Recovery as a concept?"
  type: multiple-choice
  options:
    - text: "Above all doctors and pharmaceutical companies."
      correct: false
    - text: "People with their own experience of psychiatry — together with research."
      correct: true
      explanation: "The movement comes from the experiences of those affected."
:::

:::standard-flashcards{id=f-1-std}
- front: "Recovery (core definition)"
  back: "Leading a fulfilled, hopeful life — even with the limitations of an illness (Anthony 1993)."
- front: "Clinical recovery"
  back: "Symptoms become less or disappear. The diagnosis loses its meaning."
- front: "Personal recovery"
  back: "You experience your life as meaningful, worth living and self-determined — independent of whether symptoms remain."
- front: "Pro Mente Sana — the shortest definition"
  back: "Leading as good a life as possible, even in confrontation with a severe impairment."
:::


# 2. "Hope — Power — Meaning"
{#kap-2 reading_time=3}

In 2006, Michaela Amering and Margit Schmolke published an article in the Swiss journal Managed Care entitled "Hoffnung – Macht – Sinn. Recovery-Konzepte in der Psychiatrie" ("Hope — Power — Meaning. Recovery concepts in psychiatry") [^ameringschmolke2006]. With it they decisively shaped the German-language reading of Recovery.

The triad "Hope — Power — Meaning" summarises what Recovery is about from a D-A-CH perspective — as a catchy, everyday German rendering of the central English-language terms.

| German | English | Meaning in the D-A-CH context |
|--------|---------|-------------------------------|
| **Hoffnung** | Hope | (Re)finding a sense of self that holds independent of the illness — hope as a therapeutic resource. |
| **Macht** | Empowerment | Self-enablement, freedom of choice, self-responsibility — "power" in the sense of reclaiming room for agency [^knufseibert2004]. |
| **Sinn** | Meaning | Values, goals, contribution, belonging — defining life beyond the patient role. |

Hope in this understanding is closely tied to a sense of self: a self-worth that holds independent of the experience of illness, and an identity that encompasses more than the patient role [^ameringschmolke2006].

The three terms fit with Anthony's Recovery definition [^anthony1993]. And they correspond centrally to the CHIME model [^leamy2011]: Hoffnung = Hope, Macht = Empowerment, Sinn = Meaning. Connectedness and Identity form the surrounding relational and self-frame.

:::easy{reading_time=1}
Two researchers found three German words for Recovery:

- **Hoffnung (Hope)** — You believe that it can get better.
- **Macht (Power)** — You are allowed to decide. You are not only a patient.
- **Sinn (Meaning)** — Your life has value. You belong.

These three words are the German reading of the English CHIME model. Connectedness with others and your own identity also belong to it.
:::

:::quiz{id=q-2}
- q: "What does 'Power' mean in this German reading?"
  type: multiple-choice
  options:
    - text: "Exercising power over other people."
      correct: false
    - text: "Self-enablement — the right to help decide about your own life."
      correct: true
      explanation: "'Power' here means Empowerment in the positive sense — not power over others."
    - text: "Medical authority."
      correct: false

- q: "Who introduced the triad 'Hope — Power — Meaning'?"
  type: multiple-choice
  options:
    - text: "Patricia Deegan"
      correct: false
    - text: "Amering & Schmolke (2006)"
      correct: true
      explanation: "In the Swiss journal Managed Care, 2006."
    - text: "The WHO"
      correct: false
:::

:::flashcards{id=f-2}
- front: "Hope — Power — Meaning"
  back: "The German-language reading of Recovery, introduced by Amering & Schmolke 2006. Corresponds to Hope, Empowerment, Meaning in the CHIME model."
- front: "Power (in the Recovery sense)"
  back: "Self-enablement — the right to help decide about your own life. Not power over others."
:::

:::standard{reading_time=2}
Recovery is an English word that is hard to translate into German. In 2006, the Austrian psychiatrists Michaela Amering and Margit Schmolke proposed, in the Swiss journal Managed Care, three German terms that capture its core — a triad that is now familiar across the D-A-CH region:

- **Hope** — the belief that your life can be more than the illness. A sense of self that holds independent of symptoms.
- **Power** — self-enablement. Not power over others, but power over your own life. Being allowed to help decide. Freedom of choice. Self-responsibility.
- **Meaning** — values, goals, belonging. Being allowed to define life beyond the patient role.

These three words fit with the classical Recovery definition. They also correspond to central parts of the most important international Recovery model, the CHIME model:

- Hope = Hope
- Power = Empowerment
- Meaning = Meaning

Connectedness and Identity form the surrounding frame — relationships and self-image as the ground on which hope, power and meaning can grow.

You don't have to feel all three at once. Sometimes only hope is there, sometimes only meaning. Sometimes it begins with power — with one single decision you make yourself. That is enough. Recovery is not a checklist to tick off.
:::

:::standard-quiz{id=q-2-std}
- q: "What does 'Power' mean in this reading?"
  type: multiple-choice
  options:
    - text: "Exercising power over others."
      correct: false
    - text: "Self-enablement — the right to help decide about your own life."
      correct: true
      explanation: "'Power' here means Empowerment in the positive sense."
    - text: "Medical authority."
      correct: false

- q: "Who introduced the triad 'Hope — Power — Meaning'?"
  type: multiple-choice
  options:
    - text: "Patricia Deegan"
      correct: false
    - text: "Amering and Schmolke (2006)"
      correct: true
      explanation: "In the Swiss journal Managed Care."
    - text: "The WHO"
      correct: false
:::

:::standard-flashcards{id=f-2-std}
- front: "Hope — Power — Meaning"
  back: "The German reading of Recovery (Amering and Schmolke 2006). Corresponds to Hope, Empowerment, Meaning in the CHIME model."
- front: "Power in the Recovery sense"
  back: "Self-enablement — the right to help decide about your own life. Not power over others."
- front: "Hope in the Recovery sense"
  back: "The belief that your life can be more than the illness. A sense of self that holds even without freedom from symptoms."
:::


# 3. What Recovery is NOT — six myths
{#kap-3 reading_time=5}

Recovery is often misunderstood in everyday life.

## Myth 1: Recovery means all symptoms must be gone

Wrong. People with persisting symptoms can also experience Recovery [^anthony1993] [^deegan1996] [^andresen2003]. Personal recovery can coexist with symptoms.

## Myth 2: Recovery means simply thinking positively

Wrong. Recovery is not a call to optimism on demand. Hope in Recovery research means a realistic, often defiant conviction that change is possible [^slade2013] [^schrank2012].

## Myth 3: Recovery means managing without medication or therapy

Wrong. Recovery is not an anti-medicine movement. It means that YOU help decide what helps [^deegandrake2006] [^slade2017sdm]. Amering and Schmolke put it this way: the acceptance of medication or of a particular diagnosis should not be the sole precondition for psychosocial support [^ameringschmolke2006].

## Myth 4: Recovery is a straight, predictable path

Wrong. Andresen, Oades and Caputi [^andresen2003] and many others show: Recovery is almost never linear. Setbacks are part of it and are not the end, but part of the path.

## Myth 5: Whoever doesn't get "well" has only themselves to blame

Wrong. Recovery is not a performance metric and not a moral judgement. The path depends on many factors — on relationships, care, socioeconomic conditions, trauma, chance [^leboutillier2011].

## Myth 6: A mental illness is "incurable" — "chronic"

Wrong and harmful. Longitudinal studies such as the Vermont study [^harding1987] and more recent reviews [^lally2017] show: recovery — even from severe diagnoses — is regularly possible.

Amering and Schmolke explicitly warn against such definitive pronouncements [^ameringschmolke2012]: sentences like "You are too ill for talking therapy" or the opposite "Everything will be as it was before" are, in their view, not only wrong but — literally — "highly dangerous". Predictions of this kind strip people of their own room for action before they can even use it.

Heinz Katschnig has found a vivid image for this: hopelessness — communicated from outside and often taken on inside — is the most insidious form of chains in psychiatry. It is so effective precisely because it is not visible from outside [^ameringschmolke2012].

:::reflection{id=2 title="Which myth touched you?"}
- Which of these six myths was long a reality for you?
- Who passed this myth on to you — family, school, the media, the psychiatric system?
- What would be different if you let go of this myth today?
:::

:::easy{reading_time=2}
There are many false ideas about Recovery. Six of them come up often:

1. **Wrong:** All symptoms must be gone. → Recovery also works with symptoms.
2. **Wrong:** You have to think positively. → No duty to be cheerful.
3. **Wrong:** No medication allowed. → You help decide what helps.
4. **Wrong:** The path is straight. → Setbacks are part of it.
5. **Wrong:** Whoever doesn't get well is to blame. → No one is to blame.
6. **Wrong:** Some people are "incurable". → Recovery is possible even after severe illness.
:::

:::quiz{id=q-3}
- q: "Which statement is correct?"
  type: multiple-choice
  options:
    - text: "Recovery means all symptoms must disappear."
      correct: false
    - text: "Recovery can also work with persisting symptoms."
      correct: true
      explanation: "The central message of Anthony 1993 and many follow-up studies."
    - text: "Recovery is only possible for mild illnesses."
      correct: false

- q: "True or false: Recovery means taking no medication."
  type: true-false
  correct: false
  explanation: "Recovery is not an anti-medicine movement. You decide together with professionals what helps."

- q: "What do longitudinal studies like Harding (1987) and Lally (2017) say about severe diagnoses?"
  type: multiple-choice
  options:
    - text: "They are incurable."
      correct: false
    - text: "Recovery is regularly possible, even after severe courses."
      correct: true
      explanation: "This is the basis for Amering's 'end of incurability'."
:::

:::flashcards{id=f-3}
- front: "The biggest Recovery myth"
  back: "Recovery does not mean: all symptoms gone. Recovery means: a good life — even with difficulties."
- front: "Linearity — wrong"
  back: "Recovery is not linear. Setbacks are part of it and are not failure."
- front: "'Incurable' — wrong"
  back: "Longitudinal studies (Harding 1987, Lally 2017) show: recovery is regularly possible, even after severe illness."
- front: "'Highly dangerous'"
  back: "Amering & Schmolke (2012) on prognoses like 'You are too ill for talking therapy' — such definitive judgements rob people of room to act."
:::

:::standard{reading_time=2}
There are many false images of Recovery in circulation. Six of them come up especially often in everyday life — and all six are wrong.

- **"Recovery means all symptoms have to be gone."** Not true. People with ongoing symptoms can also lead a fulfilling life. Personal recovery can coexist with symptoms.
- **"Recovery means always thinking positively."** Wrong. Recovery is not a call for optimism on demand. Hope in Recovery research is a realistic, often defiant conviction — not forced cheerfulness.
- **"Recovery means going without medication."** Wrong. Recovery is not an anti-medicine movement. It means that YOU help decide what helps — and what doesn't.
- **"Recovery is a straight, predictable path."** Wrong. Recovery is almost never linear. Setbacks are part of it. They are not failure, but part of the journey.
- **"If you don't get well, it's your own fault."** Wrong. Recovery is not a performance concept and not a moral judgement. The path depends on many factors: relationships, care, socioeconomic conditions, trauma, chance.
- **"Severe mental illnesses are incurable."** Wrong — and dangerous. Longitudinal studies have shown for decades: recovery is regularly possible, even after severe diagnoses.

Amering and Schmolke even call sentences like "You are too ill for talking therapy" or "It will be like before again" "highly dangerous". Such predictions rob you of your room to act before you can even use it.

Hopelessness, communicated from outside and taken on inside — those are the most insidious chains in psychiatry. Precisely because they are invisible.
:::

:::standard-quiz{id=q-3-std}
- q: "Which statement is correct?"
  type: multiple-choice
  options:
    - text: "Recovery means all symptoms have to disappear."
      correct: false
    - text: "Recovery can also work with ongoing symptoms."
      correct: true
      explanation: "That is the central message since Anthony 1993."
    - text: "Recovery is only possible with mild illnesses."
      correct: false

- q: "Whose fault is it when recovery is hard?"
  type: multiple-choice
  options:
    - text: "Your own — you're not trying hard enough."
      correct: false
    - text: "No one's. Recovery is not a competition and not a moral judgement."
      correct: true
      explanation: "The path depends on many factors — not on your willpower alone."

- q: "What do longitudinal studies say about 'incurable' diagnoses?"
  type: multiple-choice
  options:
    - text: "Incurable stays incurable."
      correct: false
    - text: "Recovery is regularly possible, even after severe courses of illness."
      correct: true
      explanation: "Vermont study (Harding 1987), recent meta-analyses (Lally 2017)."
:::

:::standard-flashcards{id=f-3-std}
- front: "The biggest Recovery myth"
  back: "'All symptoms must be gone.' — Not true. Recovery means leading a good life, even with difficulties."
- front: "Linearity — wrong"
  back: "Recovery is almost never linear. Setbacks are part of it and are not failure."
- front: "'Incurable' — wrong"
  back: "Longitudinal studies show: recovery is regularly possible, even after severe illness."
- front: "'Highly dangerous'"
  back: "Amering and Schmolke on prognoses like 'You are too ill for therapy' — such definitive judgements rob you of room to act."
:::


# 4. A history of the Recovery movement
{#kap-4 reading_time=6}

## The voices of those affected — 1970s and 1980s

The Recovery movement did not arise in a research institute. It began in the 1970s in North America, in the initiatives of former psychiatric patients — the so-called Ex-Patient or Survivor movement [^chamberlin1978].

One of the central voices is Patricia Deegan. At 17 she received the diagnosis of schizophrenia and was told by a doctor that she would never lead a normal life. Today she is a PhD psychologist, researcher and internationally recognised Recovery pioneer [^deegan1988] [^deegan1996].

Patricia Deegan formulated two core ideas that have since shaped the international Recovery movement [^deegan1996]:

- Recovery is not an end point and not mere stabilisation, but a transformation — a path on which one acknowledges one's own limits and at the same time discovers new possibilities.
- People with mental illness are not passive recipients of help, but agentic subjects who can change their situation through their own action.

## Dorothea Buck, Trialogue and Hearing Voices

In the German-speaking region, Dorothea Buck paved a comparable path. Herself a victim of Nazi forced sterilisation and treated repeatedly in psychiatry, she fought a lifetime for a humane psychiatry [^buck1990].

In 1989, on the initiative of Thomas Bock, the first trialogue psychosis seminar arose in Hamburg — a format in which people with lived experience, relatives and professionals speak as equals [^bockpriebe2005]. In 1992 the Bundesverband Psychiatrie-Erfahrener (BPE — federal association of people with experience of psychiatry) was founded. The international Hearing Voices network has been active in Germany, Austria and Switzerland since the 1990s [^hvn].

## The scientific consolidation — 1990s and 2000s

William Anthony provided the scientific definition with a key article in 1993 [^anthony1993]. Andresen, Oades and Caputi developed the five-stage model of psychological recovery in Australia [^andresen2003].

## From concept to system — from 2007

In 2007 the ImROC programme (Implementing Recovery through Organisational Change) started in Great Britain. Since then it has accompanied hundreds of care services in their transformation to recovery-oriented practice [^imroc] [^perkins2012].

In the USA, Recovery became the official guideline of the national health agency SAMHSA in 2006. The UN Convention on the Rights of Persons with Disabilities anchored a self-determination-oriented human rights understanding [^uncrpd2006]. The WHO published the QualityRights Initiative in 2019 [^who2019] and in 2021 the guideline "Guidance on Community Mental Health Services" [^who2021].

## The German-speaking region

In Austria, Amering and Schmolke marked a turning point in 2006 with the article "Hoffnung – Macht – Sinn" [^ameringschmolke2006] and in 2012 with the book "Recovery. Das Ende der Unheilbarkeit" ("Recovery. The end of incurability") [^ameringschmolke2012]. In Germany, Andreas Knuf, together with Ulrich Seibert, already published "Selbstbefähigung fördern" (Fostering self-enablement) in 2004 [^knufseibert2004]; his "Recovery und Empowerment" is now in its 2nd edition [^knuf2026].

EX-IN (Experienced Involvement) was developed from 2005 in Bremen — inspired by Dorothea Buck and an EU-funded Leonardo da Vinci project [^utschakowski2009]. Since 2011 EX-IN has been coordinated by the EX-IN Deutschland e.V. association [^exin_de]. A German RCT on peer support demonstrated its effectiveness [^mahlke2017].

In Switzerland, the Stiftung Pro Mente Sana brings the Recovery concept into care [^promentesana]. Recovery Colleges exist today in Bern, Eastern Switzerland, Geneva, St. Gallen and Zurich, among other places [^rcbern]. Recovery orientation has been scientifically anchored in Swiss psychiatry, among others, by Rössler [^roessler2004].

:::easy{reading_time=2}
Recovery was not invented in the hospital. Recovery was invented by people with lived experience.

In America, patients began to write books in the 1970s. They said: we are more than our illness.

One well-known voice is Patricia Deegan. At 17 she received the diagnosis of schizophrenia. Today she has a doctorate and helps others.

In Germany, Dorothea Buck was important. She fought for a better psychiatry.

Today Recovery is recognised worldwide — also by the WHO.
:::

:::quiz{id=q-4}
- q: "Who shaped the Recovery movement at the beginning?"
  type: multiple-choice
  options:
    - text: "The pharmaceutical industry."
      correct: false
    - text: "People with their own experience of psychiatric care."
      correct: true
      explanation: "The movement arose in the USA in the 1970s out of the Survivor movement."
    - text: "Hospital administrators."
      correct: false

- q: "Who is Patricia Deegan?"
  type: multiple-choice
  options:
    - text: "A doctor without lived experience."
      correct: false
    - text: "A Recovery pioneer with her own diagnosis of schizophrenia."
      correct: true
      explanation: "Diagnosed at 17. Today a PhD psychologist and internationally recognised voice."
    - text: "A Swiss nursing researcher."
      correct: false
:::

:::flashcards{id=f-4}
- front: "Patricia Deegan"
  back: "Diagnosed with schizophrenia at 17, today a PhD psychologist. A defining voice of the international Recovery movement."
- front: "Dorothea Buck"
  back: "German pioneer, victim of Nazi forced sterilisation. Fought a lifetime for a humane psychiatry. Inspired EX-IN."
- front: "Survivor Movement"
  back: "Movement of former psychiatric patients in the USA in the 1970s. The root of the Recovery movement."
- front: "ImROC"
  back: "Implementing Recovery through Organisational Change. British programme since 2007 that accompanies care services in their transformation to recovery-oriented practice."
:::

:::standard{reading_time=2}
Recovery was not born in a lecture hall and not in a treatment room. Recovery was born on the street — in the initiatives of former patients who refused to be reduced to their diagnosis.

The movement began in the 1970s in North America, in what became known as the Survivor Movement. One of its most important voices is Patricia Deegan. At 17 she received the diagnosis of schizophrenia. A doctor told her she would never lead a normal life. Today she is a PhD psychologist and one of the most influential Recovery pioneers worldwide.

In the German-speaking world, Dorothea Buck was a comparable voice. Forcibly sterilised during the Nazi era and treated in psychiatric settings several times, she fought all her life for a humane psychiatry. In 1989, on Thomas Bock's initiative, the first trialogue Psychosis Seminar took place in Hamburg — a format in which people with lived experience, family members and professionals speak at eye level.

Important milestones since then:

- **1993** — William Anthony delivers the scientific definition of Recovery.
- **2003** — Australian researchers describe five stages of recovery.
- **2007** — In Great Britain, the ImROC programme starts, shifting care services toward Recovery orientation.
- **2011** — The CHIME model is published and becomes the international standard.
- **2021** — The WHO publishes its guideline for human rights-based mental health care.

In Switzerland, the Stiftung Pro Mente Sana brings the Recovery concept into care. Recovery Colleges exist today in Bern, Eastern Switzerland, Geneva, St. Gallen and Zurich. In Germany, EX-IN — Experienced Involvement — has established peer support as a recognised profession.

So Recovery is no longer an outsider idea. It is lived practice for thousands.
:::

:::standard-quiz{id=q-4-std}
- q: "Who shaped the Recovery movement at the beginning?"
  type: multiple-choice
  options:
    - text: "The pharmaceutical industry."
      correct: false
    - text: "People with their own psychiatric experience."
      correct: true
      explanation: "The movement arose in the 1970s out of the Survivor Movement."
    - text: "Hospital administrations."
      correct: false

- q: "Who is Patricia Deegan?"
  type: multiple-choice
  options:
    - text: "A doctor without lived experience."
      correct: false
    - text: "A Recovery pioneer with her own diagnosis of schizophrenia, today a PhD psychologist."
      correct: true
      explanation: "Diagnosed at 17, today an international voice of the Recovery movement."

- q: "What is EX-IN?"
  type: multiple-choice
  options:
    - text: "A group of medications."
      correct: false
    - text: "Experienced Involvement — peer support as a recognised profession."
      correct: true
      explanation: "Developed from 2005 in Bremen, inspired by Dorothea Buck."
:::

:::standard-flashcards{id=f-4-std}
- front: "Where did Recovery begin?"
  back: "Not in the lecture hall. In the initiatives of former psychiatric patients — the Survivor Movement of the 1970s in North America."
- front: "Patricia Deegan"
  back: "Diagnosed with schizophrenia at 17, today a PhD psychologist. One of the most influential voices of the Recovery movement."
- front: "Trialogue"
  back: "A format in which people with lived experience, family members and professionals speak at eye level. Started in Hamburg in 1989 (Thomas Bock)."
- front: "Recovery Colleges in Switzerland"
  back: "Bern, Eastern Switzerland, Geneva, St. Gallen, Zurich. Places of learning for Recovery — open to everyone."
:::


# 5. CHIME and CHIME-D
{#kap-5 reading_time=6}

In 2011, a research team led by Mary Leamy and Mike Slade at King's College London systematically reviewed 97 scientific articles and 87 further reports on recovery journeys [^leamy2011]. They wanted to know: what do people describe again and again when they recount their path through mental illness?

Five processes emerged, whose English initial letters form the word CHIME — the English word for the sound of bells.

:::table{name="CHIME"}
| Letter | Process | What it means |
|--------|---------|---------------|
| **C** | Connectedness | Relationships, peer contacts, family, belonging, community |
| **H** | Hope and Optimism | Belief in change, motivation, trust in the process, role models |
| **I** | Identity | Who am I beyond the diagnosis? A positive self-image, self-worth |
| **M** | Meaning and Purpose | Meaning in life, values, roles, goals, possibly spirituality |
| **E** | Empowerment | Taking responsibility, deciding, using one's strengths |
:::

CHIME is today the most influential Recovery model worldwide. Bird et al. confirmed the applicability of the framework in a validation study [^bird2014]. It underpins the British REFOCUS study, a cluster-randomised trial [^slade2015refocus].

CHIME is not a stage model and not a checklist. It describes five themes that overlap. Sometimes one is in the foreground, sometimes another. In the German-speaking region, CHIME can be linked well with the reading "Hope — Power — Meaning" [^ameringschmolke2006].

## CHIME-D — the sixth dimension: Difficulties

An important further development of the model is CHIME-D. Stuart, Tansey and Quayle, in a systematic best-fit synthesis of qualitative Recovery literature, found that the original CHIME framework lacks a dimension that appears regularly in personal accounts: the explicit acknowledgement of difficulties — trauma, loss, stigma and the consequences of illness [^stuart2017].

They therefore added the letter D to the model:

- **C** — Connectedness
- **H** — Hope
- **I** — Identity
- **M** — Meaning
- **E** — Empowerment
- **D** — Difficulties: explicitly acknowledging trauma, loss, stigma and the consequences of illness

Research shows that on average around 54% of the content of Recovery narratives is about the difficulties experienced [^stuart2017]. CHIME-D therefore warns: Recovery orientation must not tip into toxic optimism. It must leave room for pain, for grief, for what really was and is — and at the same time hold the view toward resources and change.

Current research validates CHIME-D as a robust frame of reference for recovery-oriented care [^vanweeghel2024] [^hancock2025].

:::info{type=note title="Why CHIME-D matters for this workbook"}
Recovery concepts are sometimes criticised because they can make light of suffering or create a "duty to hope".

CHIME-D takes this criticism seriously: recovery must not mean that the heavy things have no place anymore.

In the digital workbook this means: room for pain AND for hope. For losses AND for goals. For what was, AND for what is allowed to become.
:::

:::reflection{id=3 title="Where do you stand in CHIME?"}
- Which letter (C, H, I, M, E) speaks to you most right now?
- Which feels heaviest at the moment?
- When you think of the last two weeks: where was there a small bright spot — and which letter would you assign it to?
:::

:::easy{reading_time=2}
In 2011, researchers found five important themes in Recovery. The English initial letters spell the word CHIME (English for the sound of bells):

- **C** — Connectedness
- **H** — Hope
- **I** — Identity
- **M** — Meaning
- **E** — Empowerment

Later, one more letter was added:

- **D** — Difficulties

The D is important. Recovery is not meant to make hard things small. Pain and grief are allowed to have a place.
:::

:::quiz{id=q-5}
- q: "What does the 'D' in CHIME-D stand for?"
  type: multiple-choice
  options:
    - text: "Diagnosis"
      correct: false
    - text: "Difficulties (trauma, loss, stigma)"
      correct: true
      explanation: "Stuart, Tansey & Quayle (2017) showed that this dimension was missing in the original CHIME."
    - text: "Depression"
      correct: false

- q: "Which letter stands for 'Connectedness'?"
  type: multiple-choice
  options:
    - text: "C — Connectedness"
      correct: true
    - text: "I — Identity"
      correct: false
    - text: "E — Empowerment"
      correct: false

- q: "Is CHIME a checklist to tick off?"
  type: true-false
  correct: false
  explanation: "No — CHIME describes five themes that overlap. Sometimes one is in the foreground, sometimes another."
:::

:::flashcards{id=f-5}
- front: "CHIME"
  back: "Connectedness · Hope · Identity · Meaning · Empowerment. Five Recovery processes (Leamy et al. 2011)."
- front: "The D in CHIME-D"
  back: "Difficulties — trauma, loss, stigma, consequences of illness. Recovery must not hide what is hard (Stuart et al. 2017)."
- front: "Connectedness"
  back: "Relationships, peer contacts, family, belonging, community."
- front: "Empowerment"
  back: "Taking responsibility, making decisions, using one's strengths."
:::

:::standard{reading_time=2}
In 2011, a research team at King's College London analysed more than 180 studies and reports and asked: what do people describe again and again when they tell their Recovery story? Five processes emerged — and their English initial letters spell the word CHIME (English for the sound of bells).

- **C — Connectedness:** Relationships, family, peer contacts, belonging, community.
- **H — Hope:** Belief in change. Role models. Trust in the process.
- **I — Identity:** Who am I beyond the diagnosis? A positive sense of self beyond the patient role.
- **M — Meaning:** Values, goals, roles, sometimes spirituality.
- **E — Empowerment:** Taking responsibility. Making decisions. Using your strengths.

CHIME is today the most important Recovery model internationally. But it is not a checklist and not a staircase. It describes five themes that overlap. Sometimes one is in the foreground, sometimes another.

## The D in CHIME-D

In 2017, researchers found that something was missing from the CHIME model. Something that comes up again and again in Recovery stories — the explicit acknowledgement of difficulties. They therefore added a letter:

- **D — Difficulties:** Trauma, loss, stigma, consequences of illness.

Research shows: around 54% of the content of Recovery narratives is about difficulties experienced. CHIME-D therefore warns: Recovery must not tip into forced optimism. It must leave room for pain, grief and what really was — alongside the view toward resources.

For you that means: in this workbook, the heavy things have a place. Just like hope.
:::

:::standard-quiz{id=q-5-std}
- q: "What does the 'D' in CHIME-D stand for?"
  type: multiple-choice
  options:
    - text: "Diagnosis"
      correct: false
    - text: "Difficulties — trauma, loss, stigma"
      correct: true
      explanation: "Stuart, Tansey and Quayle showed in 2017 that this dimension was missing in the original CHIME."
    - text: "Depression"
      correct: false

- q: "Which letter stands for 'connectedness'?"
  type: multiple-choice
  options:
    - text: "C — Connectedness"
      correct: true
    - text: "I — Identity"
      correct: false
    - text: "E — Empowerment"
      correct: false

- q: "Is CHIME a checklist to tick off?"
  type: true-false
  correct: false
  explanation: "No — CHIME describes five themes that overlap. Sometimes one is in the foreground, sometimes another."
:::

:::standard-flashcards{id=f-5-std}
- front: "CHIME"
  back: "Connectedness · Hope · Identity · Meaning · Empowerment. Five Recovery processes (Leamy et al. 2011)."
- front: "The D in CHIME-D"
  back: "Difficulties — trauma, loss, stigma. Recovery must not hide what is hard."
- front: "CHIME — checklist or not?"
  back: "Not a checklist to tick off. Five themes that overlap. Sometimes one is in the foreground, sometimes another."
- front: "Empowerment"
  back: "Self-efficacy. Taking responsibility, making decisions, using your strengths."
:::


# 6. Five stages of recovery
{#kap-6 reading_time=3}

If CHIME describes the five inner processes, then the model by Andresen, Oades and Caputi describes the typical stages of the journey [^andresen2003] [^andresen2006].

:::table{name="Phasen-der-Genesung"}
| Stage | Plain meaning | What happens inside |
|-------|---------------|---------------------|
| **1. Moratorium** | Standstill | A sense of loss, hopelessness, withdrawal |
| **2. Awareness** | Awakening | First hope, recognising: not everything is lost |
| **3. Preparation** | Preparing | Taking stock: what can I do, what do I need? |
| **4. Rebuilding** | Rebuilding | Actively building new goals, roles, relationships |
| **5. Growth** | Growth | A fulfilling life — with or without remaining symptoms |
:::

The stages are not rigid. It is normal to move through the same stage several times. It is also normal to experience yourself in two stages at once — growing in one area of life, back in moratorium in another. Four central tasks run through all the stages [^andresen2003]: finding hope, rebuilding identity, finding meaning, taking responsibility.

:::easy{reading_time=1}
Recovery often has stages. Three researchers from Australia described five stages:

1. **Standstill** – Everything feels heavy and hopeless.
2. **Awakening** – You notice: maybe something is still possible.
3. **Preparing** – You look at what you can do.
4. **Rebuilding** – You make new plans.
5. **Growth** – You live your life. With symptoms or without.

You are allowed to jump between the stages. It is not like a staircase. It is more like a spiral.
:::

:::quiz{id=q-6}
- q: "How many stages do Andresen, Oades and Caputi describe?"
  type: multiple-choice
  options:
    - text: "Three"
      correct: false
    - text: "Five"
      correct: true
    - text: "Seven"
      correct: false

- q: "Are the stages linear?"
  type: true-false
  correct: false
  explanation: "No. You can jump, move through the same stage several times, or be in two stages at once."
:::

:::flashcards{id=f-6}
- front: "Moratorium"
  back: "First stage: standstill. A sense of loss, hopelessness, withdrawal."
- front: "Awareness"
  back: "Stage of awakening. First hope. Recognising: not everything is lost."
- front: "Growth"
  back: "Growth — a fulfilling life with or without remaining symptoms."
- front: "Four tasks across all stages"
  back: "Find hope · rebuild identity · find meaning · take responsibility."
:::

:::standard{reading_time=2}
Recovery rarely runs in a straight line. Three Australian researchers — Andresen, Oades and Caputi — drew out five typical stages from many life stories:

- **Moratorium (standstill)** — Everything feels heavy. You feel lost, you withdraw. Hope is far away.
- **Awareness (awakening)** — A first spark: maybe it's not all over after all.
- **Preparation** — You take stock. What can I do? What do I need? Who is there for me?
- **Rebuilding** — Step by step, you build up new roles, goals and relationships.
- **Growth** — You live a life that feels good — with or without remaining symptoms.

Important to know: these stages are not a staircase. It is normal to go through the same stage several times. It is normal to already be in growth in one area of life and back in standstill in another. Setbacks are part of the path. They do not mean you have failed.

Four tasks run through all the stages: finding hope, rebuilding identity, finding meaning, taking responsibility.

Ask yourself: which stage are you in right now — perhaps in several at the same time?
:::

:::standard-quiz{id=q-6-std}
- q: "Are the five stages like a staircase — one after the other?"
  type: multiple-choice
  options:
    - text: "Yes, you have to go through them in order."
      correct: false
      explanation: "No — the stages are not rigid. Setbacks and jumps are normal."
    - text: "No. You can skip, repeat, or be in several at the same time."
      correct: true
      explanation: "Exactly. Recovery is more of a spiral than a staircase."

- q: "Which stage describes the standstill at the beginning?"
  type: multiple-choice
  options:
    - text: "Growth"
      correct: false
    - text: "Moratorium"
      correct: true
      explanation: "Moratorium = stage of hopelessness and withdrawal."
    - text: "Awareness"
      correct: false
:::

:::standard-flashcards{id=f-6-std}
- front: "Five stages"
  back: "Moratorium · Awareness · Preparation · Rebuilding · Growth. They are not a staircase — jumps and setbacks are normal."
- front: "Four tasks across all stages"
  back: "Find hope · rebuild identity · find meaning · take responsibility."
- front: "Setback — what does it mean?"
  back: "Not failure. A normal part of the journey. Recovery is a spiral, not a straight line."
:::


# 7. Three levels of recovery
{#kap-7 reading_time=3}

Research distinguishes three levels [^slade2009]:

- **Clinical recovery**: Symptoms become smaller, a diagnosis loses its weight.
- **Functional recovery**: You can do things again that matter to you: working, learning, keeping up relationships, taking care of your daily life.
- **Personal recovery**: You find new meaning, a new self-image, new hope. You experience yourself as someone who can give your life direction — even when not everything has "gone away".

The three levels can strengthen each other, but they do not have to happen in this order.

:::reflection{id=4 title="Which level matters most to you?"}
- If you picture a life in a year that feels good: what would be different?
- Which of the three levels — clinical, functional, personal — feels most important to you right now?
- Is there something you used to enjoy that you want to bring back into your life?
:::

:::easy{reading_time=1}
There are three kinds of recovery:

- **Clinical:** The symptoms become less.
- **Functional:** You can do things again: work, learn, keep up relationships.
- **Personal:** You experience meaning and hope. You help shape your life.

The most important one for Recovery is personal recovery.
:::

:::quiz{id=q-7}
- q: "Which level is the core meaning of Recovery?"
  type: multiple-choice
  options:
    - text: "Clinical recovery"
      correct: false
    - text: "Functional recovery"
      correct: false
    - text: "Personal recovery"
      correct: true
      explanation: "This is the central reading of the Recovery movement."

- q: "Do the three levels have to happen in a particular order?"
  type: true-false
  correct: false
  explanation: "No — they can strengthen each other, but they do not have to happen in a fixed order."
:::

:::flashcards{id=f-7}
- front: "Three levels of recovery"
  back: "Clinical (symptoms) · functional (daily life, work, relationships) · personal (meaning, hope, self-determination)."
- front: "Personal recovery — the most important"
  back: "The heart of the Recovery movement. Possible even when clinical symptoms remain."
:::

:::standard{reading_time=2}
In Recovery research, three levels of recovery are often distinguished — and it is worth keeping them apart:

- **Clinical recovery** — Symptoms become smaller or disappear. The diagnosis loses its weight. This is how classical medicine reads it.
- **Functional recovery** — You can do things again that matter to you. Working or learning. Running a household. Keeping up friendships. Shaping your daily life.
- **Personal recovery** — You find new meaning. You build an identity beyond the diagnosis. You experience yourself as someone allowed to give direction to your life. Hope returns.

The three levels can carry each other. But they do not have to happen in this order. Some people experience personal recovery long before symptoms grow quieter. Others build function first — and only then notice that something also shifts on the inside.

The Recovery movement clearly puts the emphasis on personal recovery. Because it is possible even when clinical symptoms remain. You don't have to be "cured" to lead a good life.

Ask yourself: which of the three levels feels most important to you right now?
:::

:::standard-quiz{id=q-7-std}
- q: "Which level is at the centre of the Recovery movement?"
  type: multiple-choice
  options:
    - text: "Clinical recovery — only when the symptoms are gone does it count."
      correct: false
    - text: "Personal recovery — meaning, hope, identity beyond the diagnosis."
      correct: true
      explanation: "Exactly. Personal recovery is also possible when symptoms remain."
    - text: "Functional recovery — the main thing is that you function."
      correct: false

- q: "Do the three levels have to come in order?"
  type: multiple-choice
  options:
    - text: "Yes — first clinical, then functional, then personal."
      correct: false
    - text: "No. They can carry each other, but they don't have to happen in a fixed order."
      correct: true
:::

:::standard-flashcards{id=f-7-std}
- front: "Three levels of recovery"
  back: "Clinical (symptoms) · functional (daily life, work, relationships) · personal (meaning, hope, identity)."
- front: "Personal recovery"
  back: "The heart of Recovery. Leading a good life — even when symptoms remain."
- front: "Order?"
  back: "No fixed order. Some people experience inner recovery long before clinical symptom reduction."
:::


# 8. Hope — the heart
{#kap-8 reading_time=4}

Hope is the first thing named in almost every Recovery model [^leamy2011] [^andresen2003] [^schrank2012]. Schrank and colleagues have shown: hope predicts personal recovery independently of symptoms [^schrank2012].

Hope in Recovery research is not naive optimism. It is also not the opposite of realism. It is a concrete, often quiet conviction that your life can be more than the worst day you are currently in [^slade2013].

Mike Slade sums this finding up like this: hope is the energy that gets a recovery process moving in the first place — without it, nothing begins [^slade2013].

## Hope as a borrowed resource

A central idea of the Recovery movement is this: hope does not have to come from you. It can be held by others and borrowed, until you can feel it again [^russinova1999] [^deegan1996] [^schrank2012]. That is exactly what good peers, good professionals, good family members do: "When you cannot have hope right now, we will hold it for you."

For professionals, hope is therefore not a personality trait but a professional skill — the "hope-inspiring competence" described by Russinova [^russinova1999].

:::reflection{id=5 title="Sources of hope"}
- What has given you hope in the past — a person, a place, an activity, a thought?
- Who in your circle is holding hope for you right now, when you cannot feel it yourself?
- Is there a small step that could move you towards hope today?
:::

:::easy{reading_time=1}
Hope is the heart of Recovery.

Hope does not mean: you are always happy. Hope means: you believe your life can be more than the worst day.

The most important thing: you do not have to have hope alone. Others can hold it for you. Until you can feel it again.

A good sentence: "When you have no hope right now, we will hold it for you."
:::

:::quiz{id=q-8}
- q: "What does the research (Schrank et al. 2012) say about hope?"
  type: multiple-choice
  options:
    - text: "Hope predicts personal recovery independently of symptoms."
      correct: true
      explanation: "Hope is a predictor — even when symptoms remain."
    - text: "Hope only works for mild illnesses."
      correct: false
    - text: "You always have to raise hope by yourself."
      correct: false

- q: "What does 'borrowed hope' mean?"
  type: multiple-choice
  options:
    - text: "Buying hope from your family."
      correct: false
    - text: "Others hold hope for you until you can feel it yourself."
      correct: true
      explanation: "A core idea of the Recovery movement."
:::

:::flashcards{id=f-8}
- front: "Borrowed hope"
  back: "When you cannot have hope, peers, professionals or family members hold it for you — until you can feel it again."
- front: "Hope in Recovery research"
  back: "Not naive optimism — but a quiet, often stubborn conviction that your life can be more than the worst day."
- front: "Hope-inspiring competence"
  back: "Russinova 1999: inspiring hope is a professional skill, not a personality trait."
:::

:::standard{reading_time=2}
Hope is the first thing mentioned in almost every Recovery model. That is no accident.

Mike Slade sums up the research like this: **"Hope is the energy that sets the recovery process going in the first place — without it, nothing begins."**

Hope in the Recovery sense is not naive optimism. It is also not the opposite of realism. It is a quiet, sometimes stubborn conviction: that your life can be more than the worst day you happen to be in right now.

## Hope can be borrowed

One of the most important ideas in the Recovery movement is this: **hope does not have to come from you alone.** It can be held out and lent to you by others, until you can feel it again.

That is exactly what good peers, good professionals, good family members do. They say — sometimes in words, sometimes only through their presence:

> "When you cannot have hope right now, we will hold it for you. For as long as it takes."

This is not a therapy technique. It is a stance. For professionals, hope is therefore not a matter of personal mood, but a professional competence — the *hope-inspiring competence* (Russinova).

Ask yourself:

- Who in your life is currently holding hope for you?
- Who could do it, if you asked?
- And for whom might you be holding hope yourself — without noticing?
:::

:::standard-quiz{id=q-8-std}
- q: "What does 'borrowed hope' mean?"
  type: multiple-choice
  options:
    - text: "You have to work up hope all by yourself."
      correct: false
    - text: "Others hold hope for you until you can feel it again yourself."
      correct: true
      explanation: "A core idea of the Recovery movement. Hope is not just an individual achievement."

- q: "Is hope in Recovery research the same as naive optimism?"
  type: multiple-choice
  options:
    - text: "Yes, simply optimism."
      correct: false
    - text: "No. A quiet, often stubborn conviction that your life can be more than the worst day."
      correct: true
:::

:::standard-flashcards{id=f-8-std}
- front: "Hope in Recovery"
  back: "Not naive optimism — but the quiet conviction that your life can be more than the worst day."
- front: "Borrowed hope"
  back: "When you cannot have hope, peers, professionals or family members hold it for you — until you can feel it again."
- front: "Slade quote"
  back: "\"Hope is the energy that sets the recovery process going in the first place — without it, nothing begins.\""
:::



# 9. Empowerment and self-determination
{#kap-9 reading_time=4}

The word Empowerment is closely tied to Recovery. It comes from the civil rights and emancipation movements of the 20th century [^herriger2014] [^knufseibert2004] [^knuf2026].

In the 1980s, the concept was taken up in psychiatric care as well. Empowerment means: enabling yourself. Active participation. Taking responsibility where you want to and can carry it. Rogers and colleagues developed a first empirically validated empowerment scale [^rogers1997]. In German-speaking countries, "Selbstbefähigung fördern" is the standard reference [^knufseibert2004].

## Shared Decision-Making

In practice, Empowerment above all means one thing: shared decisions instead of instructions. Professionals decide with you, not about you [^charles1997] [^deegandrake2006]. Studies show: people who are involved in decisions are more satisfied and often achieve better outcomes [^joosten2008] [^slade2017sdm].

## Personal Medicine

Pat Deegan coined the term Personal Medicine: the non-medication things that help a person stay well — sleep, a dog, a particular walk, singing in a choir, an evening phone call. In the Recovery movement, Personal Medicine is understood as equivalent to medication and written into treatment agreements [^deegan2005].

## Advance directives and Joint Crisis Plans

One concrete empowerment tool is a treatment agreement or Joint Crisis Plan — an agreement in which, while you are well, you record what should and should not happen in a crisis. Henderson and colleagues showed in an RCT that Joint Crisis Plans significantly reduce involuntary admissions [^henderson2004].

:::easy{reading_time=2}
Empowerment means: you are allowed to decide. You have power over your own life.

In psychiatry this often means: we decide together. Not: the doctor decides alone.

You may ask questions. You may say no. You may get a second opinion.

There is also "Personal Medicine". These are things besides medication that help: a dog, a walk, a choir, a good friend. These things are just as important as medication.
:::

:::quiz{id=q-9}
- q: "What does 'Shared Decision-Making' mean?"
  type: multiple-choice
  options:
    - text: "The doctor decides alone."
      correct: false
    - text: "Professional and the person decide together."
      correct: true
      explanation: "Charles, Gafni & Whelan 1997 established the term."
    - text: "The family decides."
      correct: false

- q: "What does 'Personal Medicine' (Pat Deegan) mean?"
  type: multiple-choice
  options:
    - text: "Personalised medication based on a DNA profile."
      correct: false
    - text: "Non-medication things that help a person stay well."
      correct: true
      explanation: "Dog, walk, choir, singing — can be written into a treatment agreement."

- q: "What does the RCT on Joint Crisis Plans (Henderson 2004) show?"
  type: multiple-choice
  options:
    - text: "They have no measurable effect."
      correct: false
    - text: "They significantly reduce involuntary admissions."
      correct: true
:::

:::flashcards{id=f-9}
- front: "Empowerment"
  back: "Enabling yourself. Active participation. Taking responsibility where you want to and can carry it."
- front: "Personal Medicine"
  back: "Pat Deegan: non-medication things that keep you well — sleep, movement, relationships, hobbies. Equivalent to medication."
- front: "Joint Crisis Plan"
  back: "Agreement made while you are well: what should happen in a crisis, what should not? RCT (Henderson 2004) shows: reduces involuntary admissions."
- front: "Shared Decision-Making"
  back: "Professional and person decide together — not instruction and compliance."
:::

:::standard{reading_time=2}
Empowerment means enabling yourself. You get to decide — about your life and your treatment.

That sounds obvious, but in everyday psychiatric care it often is not. For a long time, the rule was: the professional decides, the patient complies. Recovery shifts this point clearly — toward **shared responsibility**.

## Three concrete tools

**Shared Decision-Making** — Decisions are made together. You ask what is recommended. You say what fits you and your life. Studies show: people who are involved are more satisfied and achieve better outcomes.

**Personal Medicine** (Pat Deegan) — Medication is not the only thing that helps. What also keeps you well as a person matters: a dog, a morning walk, a choir, an evening phone call, the garden, a hike. In the Recovery movement, Personal Medicine is **equivalent** to medical treatment — and belongs in every treatment agreement.

**Joint Crisis Plan** — An agreement that you write down with your team while you are stable: What should happen in a crisis? What should not? Who do I want informed? Which medications agree with me, which do not? A RCT (Henderson 2004) shows: such plans significantly reduce involuntary admissions.

## What empowerment does not mean

Empowerment does not mean: doing everything alone. It does not mean: being against the professionals. It means: your voice counts — alongside the professional voice. Both together are more.

Ask yourself: Where do you already get to decide? Where would you like to have more of a voice?
:::

:::standard-quiz{id=q-9-std}
- q: "What does Shared Decision-Making mean?"
  type: multiple-choice
  options:
    - text: "You decide alone, the doctor stays silent."
      correct: false
    - text: "Professional and you decide together."
      correct: true
      explanation: "Exactly. Your voice counts alongside the professional voice."

- q: "What is 'Personal Medicine' according to Pat Deegan?"
  type: multiple-choice
  options:
    - text: "Personalised medication based on a DNA test."
      correct: false
    - text: "The non-medication things that keep you well — a dog, a walk, a choir, a friend."
      correct: true
      explanation: "Equivalent to medication and part of every treatment agreement."

- q: "What does a Joint Crisis Plan achieve?"
  type: multiple-choice
  options:
    - text: "It is a compulsory exercise that hardly works."
      correct: false
    - text: "It reduces involuntary admissions — shown by a RCT (Henderson 2004)."
      correct: true
:::

:::standard-flashcards{id=f-9-std}
- front: "Empowerment"
  back: "Enabling yourself. You get to decide — about your life and your treatment. Not: doing everything alone."
- front: "Shared Decision-Making"
  back: "Professional and you decide together. Better outcomes, higher satisfaction."
- front: "Personal Medicine"
  back: "Pat Deegan: the non-medication things that keep you well. Equivalent to medication."
- front: "Joint Crisis Plan"
  back: "Agreement made while stable: what should happen in a crisis, what should not? Reduces involuntary admissions."
:::



# 10. Salutogenesis — staying well
{#kap-10 reading_time=3}

Recovery-oriented thinking is closely linked to the concept of salutogenesis [^antonovsky1979] [^antonovsky1997]. Instead of asking "What makes people ill?" (pathogenesis), salutogenesis asks "What keeps people well?"

Antonovsky identified the sense of coherence as a central protective factor — the ability to experience your own life as understandable, manageable and meaningful. The three components correspond strikingly with the CHIME processes and with the triad "Hope — Power — Meaning".

In German-speaking countries, Schmolke made salutogenetic concepts usable for people with a schizophrenia diagnosis [^schmolke2001]. Salutogenesis and Recovery are regularly described in the D-A-CH literature as two sides of the same stance — resource-oriented rather than deficit-oriented [^knuf2026] [^ameringschmolke2012].

:::info{type=note title="Antonovsky's three components of the sense of coherence"}
- **Comprehensibility**: My life makes sense as a whole.
- **Manageability**: I can deal with what comes — alone or with help.
- **Meaningfulness**: It is worth engaging with my life.
:::

:::easy{reading_time=1}
Medicine often asks: What makes people ill? This is called pathogenesis.

Salutogenesis asks differently: What keeps people well?

The researcher Aaron Antonovsky found three important points:

- I understand my life.
- I can cope with hard things — alone or with help.
- My life has meaning.

When these three points are there, you are stronger against stress.
:::

:::quiz{id=q-10}
- q: "What is the difference between pathogenesis and salutogenesis?"
  type: multiple-choice
  options:
    - text: "Pathogenesis is newer."
      correct: false
    - text: "Pathogenesis asks about illness — salutogenesis about health."
      correct: true
    - text: "Pathogenesis only applies to physical illness."
      correct: false

- q: "Who developed the concept of salutogenesis?"
  type: multiple-choice
  options:
    - text: "Sigmund Freud"
      correct: false
    - text: "Aaron Antonovsky"
      correct: true
:::

:::flashcards{id=f-10}
- front: "Salutogenesis"
  back: "What keeps people well? (Antonovsky 1979). Counterpart to pathogenesis — the question 'What makes us ill?'."
- front: "Sense of coherence"
  back: "Comprehensibility · manageability · meaningfulness. Protective factor according to Antonovsky."
:::

:::standard{reading_time=2}
Classical medicine asks: **"What makes people ill?"** That is called pathogenesis. It looks for causes, risks, deficits.

The sociologist Aaron Antonovsky turned the question around. He asked: **"What keeps people well — even under stress?"** That is called salutogenesis.

## The sense of coherence

Antonovsky observed: people who come through severe life crises well often share a particular inner stance. He called it the **sense of coherence** and described three components:

- **Comprehensibility** — My life makes sense as a whole. What happens to me can be placed in context.
- **Manageability** — I can deal with what comes. Alone or with help.
- **Meaningfulness** — It is worth engaging myself. My life has a direction.

These three components sound familiar. They stand strikingly close to the five CHIME processes and to the triad "Hope — Power — Meaning".

## Why this matters

Salutogenesis and Recovery share the same basic stance: resource-oriented rather than deficit-oriented. You are not seen as a bundle of symptoms, but as a person with strengths, experiences, relationships — even when much of life is hard.

In the D-A-CH literature (Schmolke; Amering & Schmolke) salutogenesis and Recovery are therefore often described as two sides of the same coin.

Ask yourself: What keeps you well — also today, also now?
:::

:::standard-quiz{id=q-10-std}
- q: "What does salutogenesis ask — in contrast to pathogenesis?"
  type: multiple-choice
  options:
    - text: "What makes people ill?"
      correct: false
      explanation: "That is pathogenesis. Salutogenesis asks the opposite."
    - text: "What keeps people well — even under stress?"
      correct: true
      explanation: "The question Antonovsky posed."

- q: "Which three components make up the sense of coherence?"
  type: multiple-choice
  options:
    - text: "Comprehensibility · manageability · meaningfulness"
      correct: true
      explanation: "Antonovsky's triad. Strikingly close to 'Hope – Power – Meaning'."
    - text: "Hope · faith · love"
      correct: false
:::

:::standard-flashcards{id=f-10-std}
- front: "Salutogenesis"
  back: "What keeps people well? (Antonovsky). Counterpart to pathogenesis — the question 'What makes us ill?'."
- front: "Sense of coherence"
  back: "Comprehensibility · manageability · meaningfulness. Protective factor under stress."
- front: "Salutogenesis and Recovery"
  back: "Two sides of the same stance: resource-oriented rather than deficit-oriented. You are more than your symptoms."
:::



# 11. Stigma and self-stigma
{#kap-11 reading_time=4}

Stigma is one of the biggest Recovery barriers. Goffman coined the term for the social sciences: stigma is an attribute that devalues a person in the eyes of others [^goffman1963].

## Three levels of stigma

Corrigan and Watson distinguish three levels [^corrigan2002]:

- **Public stigma**: Prejudices in society ("people with mental illness are dangerous").
- **Structural stigma**: Disadvantage in laws, the job market, insurance.
- **Self-stigma** (internalised stigma): You take on the negative images as a picture of yourself.

## Self-stigma — when the storm turns inward

Corrigan and colleagues describe self-stigma as a regressive process in four steps: noticing, agreeing, applying, suffering — with consequences for self-worth, self-efficacy and the course of the illness [^corrigan2011].

The good news: self-stigma is changeable. Systematic reviews show that psychosocial interventions — especially in groups — can reduce internalised stigma [^yanos2015] [^buechter2023]. Anti-stigma programmes with direct contact to people with lived experience also show small to medium effects in meta-analyses [^corrigan2012] [^thornicroft2016].

In the accounts of peer support workers [^utschakowski2009], one thought keeps coming up: it is not the diagnosis itself that really wounds. It is what the diagnosis turns a person into in the eyes of others — and what the person then begins to believe about themselves. Self-stigma forms exactly at this seam.

:::reflection{id=6 title="Inner voices"}
- What sentences do you say to yourself about your illness — or about the illness of the person you accompany?
- Which of these sentences are not really your own voice, but pictures taken on from outside?
- Which sentence would be a kinder version of the same truth?
:::

:::easy{reading_time=2}
Stigma means: you are put down because of something. For example: because you have a diagnosis.

Stigma exists in three areas:

- In society — prejudices, bad words.
- In rules and laws — for example, problems with insurance.
- Inside yourself — you believe the bad things about yourself.

The last one is called self-stigma. It is dangerous. It makes you small before others do.

The good news: self-stigma can change. Talking helps. Meeting other people who experience the same thing also helps.
:::

:::quiz{id=q-11}
- q: "What is self-stigma?"
  type: multiple-choice
  options:
    - text: "The stigma others put on me."
      correct: false
    - text: "When I take on the negative images as a picture of myself."
      correct: true
      explanation: "Corrigan & Watson 2002 describe this as a regressive process."

- q: "Which method reduces stigma most effectively?"
  type: multiple-choice
  options:
    - text: "Silence."
      correct: false
    - text: "Direct contact with people who have lived experience."
      correct: true
      explanation: "Thornicroft et al. 2016 show this in a meta-analysis."

- q: "Is self-stigma changeable?"
  type: true-false
  correct: true
  explanation: "Yes — psychosocial interventions, especially in groups, reduce internalised stigma (Yanos 2015)."
:::

:::flashcards{id=f-11}
- front: "Three levels of stigma"
  back: "Public stigma · structural stigma · self-stigma (internalised stigma)."
- front: "Self-stigma"
  back: "When you take on the negative social images as a picture of yourself. Changeable."
- front: "Most effective anti-stigma method"
  back: "Direct personal contact with people who have lived experience (Corrigan et al. 2012; Thornicroft et al. 2016)."
:::

:::standard{reading_time=2}
Stigma is one of the biggest barriers on the Recovery path. The sociologist Erving Goffman described stigma as an attribute that devalues a person in the eyes of others.

## Three levels

Patrick Corrigan distinguishes three levels on which stigma works:

- **Public stigma** — Prejudices in society. "People with mental illness are dangerous." "Pull yourself together."
- **Structural stigma** — Disadvantage in laws, in the job market, in insurance, in dealings with authorities.
- **Self-stigma** — You take on the negative images from outside as a picture of yourself.

## When the storm turns inward

Self-stigma is especially insidious. It makes you small — before others even try. Corrigan describes a process in four steps: noticing, agreeing, applying, suffering. The result: less self-worth, less self-efficacy, often a more difficult course of the illness.

In reports by peer support workers, one thought keeps coming up: **It is not the diagnosis itself that is really hurtful. What is hurtful is what the diagnosis makes of a person in the eyes of others — and what the person then begins to believe about themselves.**

## The good news

Self-stigma is changeable. Research shows: psychosocial interventions — especially in groups — reduce internalised stigma. The most effective approach against public stigma is **direct contact** with people with lived experience.

You are not your diagnosis. You are a person with a story, with values, with relationships, with abilities.

Ask yourself: Which sentences do you tell yourself about your illness — and which of them are really borrowed voices from outside?
:::

:::standard-quiz{id=q-11-std}
- q: "What is self-stigma?"
  type: multiple-choice
  options:
    - text: "The stigma others impose on me."
      correct: false
    - text: "When I take on the negative social images as a picture of myself."
      correct: true
      explanation: "Corrigan & Watson 2002: a regressive process in four steps."

- q: "What works best against public stigma?"
  type: multiple-choice
  options:
    - text: "Staying silent and hiding."
      correct: false
    - text: "Direct contact between the general population and people with lived experience."
      correct: true
      explanation: "Thornicroft et al. 2016: encounter changes images."

- q: "Is self-stigma changeable?"
  type: multiple-choice
  options:
    - text: "No — it is fixed once and for all."
      correct: false
    - text: "Yes — especially in groups and through psychosocial interventions."
      correct: true
:::

:::standard-flashcards{id=f-11-std}
- front: "Three levels of stigma"
  back: "Public stigma · structural stigma · self-stigma (internalised)."
- front: "Self-stigma"
  back: "When you believe the negative images from outside about yourself. Makes you small before others do. Changeable."
- front: "What works against stigma?"
  back: "Direct contact with people with lived experience. Talking. Groups. Sharing stories."
- front: "You are not your diagnosis"
  back: "You are a person with a story, with values, with relationships, with abilities."
:::



# From patient to expert of your life
{#kap-shift reading_time=8}

If you've been in psychiatric treatment for a long time — years perhaps, or decades — then it's done something to you. Not only the illness. The role too.

Classical medicine has a clear division of tasks: the professional knows. The patient follows. The diagnosis explains what's going on. The medication or therapy makes you whole again. This logic works well for many physical illnesses. With mental suffering it runs into limits that have become more and more visible over the last thirty years.

## What the long role may have done to you

You may recognise one or more of these in yourself:

- You learned to describe yourself through a diagnosis. "I am bipolar." "I am a borderline." "I am a chronic case."
- You learned that someone else knows better what's good for you — the doctor, the therapist, the treatment team.
- You learned that your own sense of things is viewed with suspicion — as "lack of insight" or "non-compliance".
- You learned to wait — for the next appointment, the next medication, the next method that is finally supposed to work.
- You learned that recovery is something that is done to you. Not something you do.

This is not a personal weakness. It's a learned response. In research it's called *learned helplessness* — and it appears everywhere people live for long periods in systems where they have little control [^seligman1975].

Patricia Deegan, one of the most influential voices of the Recovery movement, coined a very sharp term for this: *spirit breaking* [^deegan1990]. She uses it to describe how helping systems sometimes do the opposite of what they should — how they break a person's sense of self, agency, and voice instead of strengthening them. Not out of bad intent. But because the logic of the system sets it up that way.

## The paradigm that blocks healing

Larry Davidson and David Roe captured the difference scientifically [^davidsonroe2007]. They speak of two very different meanings of Recovery:

- **Recovery FROM** — recovering FROM an illness. This is the medical reading: symptoms gone, function restored, diagnosis ideally behind you.
- **Recovery IN** — recovering IN an illness. This is the personal reading: leading a life that fulfils you, even if the symptoms are still there.

Both are possible. Both are valuable. But they follow very different logics. *Recovery FROM* happens in the treatment room — you are a passive recipient. *Recovery IN* happens in your life — you are the person doing.

The Dutch Recovery researcher Wilma Boevink puts it even more pointedly [^boevink2017]: for many people with severe mental illness, the psychiatric system is not primarily a system of healing. It is one of several tools on a longer path. Anyone who understands this — and starts using psychiatry as a means rather than experiencing themselves as its object — shifts something fundamental.

## What the shift looks like in practice

The shift happens in small steps. It rarely has a bang-moment. Here are a few examples of what it might look like:

:::table{name="From-patient-to-expert"}
| Out of the patient role … | … into the expert stance |
|-----------------------|--------------------------|
| "Tell me what to do." | "What do you recommend — and what fits my life?" |
| "It will never get better." | "Today was hard. Let's see what next week brings." |
| "My doctor knows what's good for me." | "We decide together — and I'm allowed to ask questions along the way." |
| "I am my diagnosis." | "I have a diagnosis. It is not all of who I am." |
| "I have failed." | "I'm having a hard day right now. That's information, not a verdict." |
| "Maybe the team will take my medication away if I tell them." | "This side effect is hard on me. Can we look at alternatives together?" |
| "I have to be brave." | "I'm allowed to accept help — and I'm allowed to choose which kind." |
:::

None of these shifts means you no longer need help. None of them means you have to be against professionals. This is not about rebellion, it's about position.

## Why this shift matters so much

It isn't one recommendation among many. It is the precondition for Recovery to become effective for you at all:

- **Hope** can only grow in a self that experiences itself as a subject in the first place.
- **Personal goals** can only be pursued when you experience yourself as someone who is allowed to have goals.
- **Self-efficacy** only builds where you have experiences of making something happen yourself — not solely waiting for something to happen to you.
- **Meaning** in life arises through choice. Anyone without choice has a hard time finding meaning.

The research confirms this clearly. Roe and Davidson [^roedavidson2005] describe Recovery as "picking up the pieces" and rewriting your own story. Current studies on narrative identity reconstruction show [^chiba2019narrative]: anyone who (re)constructs an identity beyond the patient role during the Recovery phase gets substantially further — even when symptoms remain.

:::info{type=note title="What this does not mean"}
The shift from being a patient to taking the expert stance is not a call to stop medication, end treatment, or cope alone. It is not a reproach to professionals.

It is an invitation to take your own voice as a source — alongside the voices of professionals. And to find out what is true for you.
:::

## From someone who has experience to an experienced expert

In German-speaking countries there is a fine name for this step: Erfahrungsexpertin, Erfahrungsexperte — expert by experience. EX-IN training develops exactly this in a systematic way — over twelve modules, people with psychiatric experience become peer support workers who make their own experience usable as a resource for others [^utschakowski2009] [^exin_de].

You don't have to become a peer support worker to make this shift. But the idea is helpful even if you only apply it to yourself: your story is not something that happened to you and defines you. It is something you know — and something you can draw knowledge from. Knowledge that helps you understand yourself and others better.

Wilma Boevink calls this *experiential expertise* — Erfahrungsexpertise [^boevink2017] [^boevink2012]. Your experiential knowledge is no less valuable than the professional knowledge of therapists. It is different. And together they are more than the sum of their parts.

## If you're still hesitating

Maybe you read all of this and think: nicely said, but it's not possible for me anymore. Maybe you have thirty years of hospital experience. Maybe you have lost faith. Maybe no one has ever told you that this role is even yours to take.

Three things:

1. **It is never too late.** Recovery research knows no age limit and no severity limit. Even people who have lived for decades in inpatient care describe shifts — sometimes precisely when they themselves had stopped expecting them [^harding1987] [^lally2017].

2. **You don't have to do everything at once.** A single question in the morning — "What would I need today?" — is already a movement. A single answer to yourself in the evening — "Today was hard, and I was still here" — is also a movement.

3. **You need allies.** No one makes this shift alone. Peers, a self-help group, a trusted person, a professional who lives the concept, a Recovery College. If your treatment team doesn't go along with this path, that is not your failure — it means this team has a blind spot right now.

:::quote{author="Patricia Deegan, 1996" source="deegan1996" lang="en"}
We are a conspiracy of hope and we are pressing back against the strong tide of oppression which for centuries has been the legacy of those of us who are labeled with mental illness.
:::

:::quote-translation{source="deegan1996" translator="own translation"}
We are a conspiracy of hope. We push back against the strong tide of oppression that has for centuries been the legacy of those labelled with a psychiatric diagnosis.
:::

:::reflection{id=10 title="Your position"}
- Where do you still experience yourself in the classical patient role?
- Are there moments when you already experience yourself as an expert of your own experience — even if they are brief?
- Which sentence from the left column of the table is familiar to you — and which one from the right would like to slowly find some room?
- Who could be your fellow conspirator of hope?
:::

:::easy{reading_time=3}
Maybe you have been in treatment for a long time. Then you have probably learned something:

- The doctor knows best.
- I have to do what I am told.
- I am sick, others help me.

That is a role. It is called the patient role.

This role sometimes helps. But it can also hurt. You become small. You wait. You become dependent.

Recovery says: you are allowed to step out of this role. Step by step.

You don't become a doctor. But you become an expert of your own life. You know yourself best. Your experience is knowledge.

**This change is the most important change in Recovery. Without it, nothing else works.**

Three things at the end:

- It is never too late. Even after many years in treatment.
- You don't have to do it all at once. Small steps count.
- You need allies.

:::reflection{id=shift-easy title="Ask yourself"}
- Where do you still experience yourself in the old role?
- Where are you already an expert of your life?
:::
:::

:::quiz{id=q-shift}
- q: "What does the 'patient role' mean here?"
  type: multiple-choice
  options:
    - text: "A medical diagnosis."
      correct: false
    - text: "A learned stance: waiting passively, others know better, I am made well."
      correct: true
      explanation: "A role, not a diagnosis — and it can change."

- q: "What does Patricia Deegan say about 'spirit breaking'?"
  type: multiple-choice
  options:
    - text: "It describes a rare exception."
      correct: false
    - text: "Helping systems can break a person's sense of self, voice, and agency — usually without bad intent."
      correct: true
      explanation: "Deegan 1990 — a sharp but precise term."

- q: "What is the difference between Recovery FROM and Recovery IN?"
  type: multiple-choice
  options:
    - text: "FROM = older reading, IN = newer."
      correct: false
    - text: "FROM = recovery FROM illness (medical). IN = recovery IN illness (personal)."
      correct: true
      explanation: "Davidson & Roe 2007."

- q: "Is it true that this shift is only one of many recommendations?"
  type: true-false
  correct: false
  explanation: "No — it is the precondition for Recovery to become effective at all."

- q: "At what age / after how many years of treatment is it too late for this shift?"
  type: multiple-choice
  options:
    - text: "After 10 years."
      correct: false
    - text: "From age 60."
      correct: false
    - text: "Never."
      correct: true
      explanation: "Recovery research knows no age limit. Possible even after decades."
:::

:::flashcards{id=f-shift}
- front: "Spirit Breaking"
  back: "Patricia Deegan (1990): how helping systems break a person's sense of self, voice, and agency — usually not out of bad intent."
- front: "Recovery FROM"
  back: "Recovering FROM an illness — the medical reading. Symptoms gone, diagnosis ideally behind you."
- front: "Recovery IN"
  back: "Recovering IN an illness — the personal reading. A fulfilled life, even if symptoms remain."
- front: "Patient role"
  back: "A learned stance: passive, waiting, externally directed. Helps short term, harms long term. Changeable."
- front: "Experiential expertise (Boevink)"
  back: "Your lived knowledge stands on its own and is equal to professional knowledge. You can use it — for yourself and for others."
- front: "Conspiracy of Hope"
  back: "Patricia Deegan 1996: 'We are a conspiracy of hope.' — Recovery as a collective project against historical disempowerment."
:::

:::standard{reading_time=3}
If you have been in psychiatric treatment for a long time — years perhaps, decades — then it has done something to you. Not only the illness. **The role too.**

## What the role has done to you

You may have learned:

- The doctor knows better. My sense of things counts less.
- I have to wait. For the next appointment, the next medication, the next method.
- I am my diagnosis: "I am a borderline." "I am bipolar."
- Recovery is something done to me — not something I do.

This is not a personal weakness. It is a **learned response** to years in a system that allows little control.

Patricia Deegan, a defining voice of the Recovery movement, coined a sharp term for it: **"spirit breaking"**. Helping systems can — usually without bad intent — break a person's sense of self, voice, and agency. Not because the staff are bad. But because the logic of the system provides for it.

## Recovery FROM vs. Recovery IN

Larry Davidson and David Roe distinguish two very different readings of Recovery:

- **Recovery FROM** — Recovering **FROM** an illness. The medical reading: symptoms gone, diagnosis behind you. You are the passive recipient of treatment.
- **Recovery IN** — Recovering **WITH** an illness. The personal reading: leading a fulfilled life, even if symptoms remain. You are the acting person.

Both are possible. Both are valuable. But they follow very different logics. **Recovery IN is the precondition for Recovery to become effective for you at all.** Because hope, goals, self-efficacy, meaning — all of this only arises where you experience yourself as someone who is allowed to choose.

## You remain dependent on help — and still a subject

This shift is not a call to stop medication or end treatment. It is not a reproach to professionals. It is an invitation to take your own voice as a source — **alongside** the professional voices.

Three things in closing:

- **It is never too late.** Even after decades of treatment such shifts are possible.
- **It happens in small steps.** One question in the morning: "What would I need today?" is enough for a start.
- **You need allies.** Peers. A person of trust. A Recovery College. Nobody does this alone.
:::

:::standard-quiz{id=q-shift-std}
- q: "What does Patricia Deegan mean by 'spirit breaking'?"
  type: multiple-choice
  options:
    - text: "A rare individual case that hardly ever happens."
      correct: false
    - text: "How helping systems can break a person's sense of self, voice, and agency — usually without bad intent."
      correct: true
      explanation: "A sharp but precise term (Deegan 1990)."

- q: "What is the difference between Recovery FROM and Recovery IN?"
  type: multiple-choice
  options:
    - text: "FROM is outdated, IN is the new version."
      correct: false
    - text: "FROM = recovering FROM an illness (medical). IN = recovering WITH an illness (personal)."
      correct: true
      explanation: "Davidson & Roe 2007. Both are possible, but follow different logics."

- q: "Who is the expert on your life?"
  type: multiple-choice
  options:
    - text: "Your treatment team."
      correct: false
    - text: "You yourself — alongside the expertise of those treating you."
      correct: true

- q: "From which point is it too late for this shift?"
  type: multiple-choice
  options:
    - text: "After 20 years of treatment."
      correct: false
    - text: "From age 60."
      correct: false
    - text: "Never. Even after decades, shifts are possible."
      correct: true
:::

:::standard-flashcards{id=f-shift-std}
- front: "Spirit Breaking (Deegan)"
  back: "When helping systems — usually without bad intent — break a person's sense of self, voice, and agency."
- front: "Recovery FROM"
  back: "Recovering FROM an illness. The medical reading: symptoms gone, diagnosis behind you."
- front: "Recovery IN"
  back: "Recovering WITH an illness. The personal reading: a fulfilled life, even if symptoms remain."
- front: "Expert of your life"
  back: "You know yourself best. Your experience is knowledge — alongside expert knowledge, not instead of it."
- front: "Never too late"
  back: "Recovery knows no age limit and no severity limit. Possible even after decades."
:::



# 12. Peer support, Trialogue, and EX-IN
{#kap-12 reading_time=5}

## What peer support is

Peer support means being accompanied by people who have themselves experienced and worked through mental crises. In German-speaking countries: peer support workers (Genesungsbegleiter:innen), experts by experience, peers, or EX-IN staff [^utschakowski2009] [^exin_de].

The roots go far back — into the self-help tradition, into Mary Ellen Copeland's WRAP concept [^copeland1997], into the German Trialogue model [^bockpriebe2005], and into the EX-IN initiative from 2005 onward [^utschakowski2009].

## Trialogue — the German-speaking legacy

The Trialogue — the equal-footing conversation between people with lived experience, family members, and professionals — was founded in 1989 in Hamburg by Thomas Bock and colleagues [^bockpriebe2005]. It is a German-speaking contribution to the international Recovery movement and has lastingly transformed D-A-CH care [^vonpeter2015].

## What the research shows

The evidence base for peer support is now substantial. A multicentre RCT with over 600 participants in four countries showed significant effects on Empowerment and quality of life [^slade2024peer]. Current meta-analyses consistently find positive effects on self-efficacy and smaller effects on hope and Empowerment [^white2024] [^lyons2021]. A German RCT also demonstrated positive effects [^mahlke2017].

Effective factors are: lived experience as an anchor of credibility, hope as a model, equal-footing relationships, and non-stigmatising communication [^mead2001] [^davidson2012].

Wilma Boevink puts this principle in simple terms: the experiential knowledge that arose from the service-user movement is equal to professional expertise — and forms the foundation of authentic Recovery knowledge [^boevink2012].

:::easy{reading_time=2}
Peer support means: people accompany other people with similar experience.

That feels good. Research shows: when someone has "come through" and stands in front of you, it is a strong sign. It gives hope.

In German-speaking countries there are peer support workers with a training (EX-IN).

There is also the Trialogue — conversations between people with lived experience, family members, and professionals. On equal footing. With no one more important than the other.

Such conversations happen in many cities in Switzerland, Germany, and Austria.
:::

:::quiz{id=q-12}
- q: "What does EX-IN mean?"
  type: multiple-choice
  options:
    - text: "A diagnosis."
      correct: false
    - text: "Experienced Involvement — training for peer support workers."
      correct: true
      explanation: "Developed in Bremen since 2005."

- q: "Who speaks in the Trialogue on equal footing?"
  type: multiple-choice
  options:
    - text: "Only professionals."
      correct: false
    - text: "People with lived experience, family members, and professionals together."
      correct: true
      explanation: "Founded in 1989 in Hamburg by Thomas Bock."

- q: "What does peer support research (Slade et al. 2024) show?"
  type: multiple-choice
  options:
    - text: "No measurable effects."
      correct: false
    - text: "Significant effects on Empowerment and quality of life."
      correct: true
:::

:::flashcards{id=f-12}
- front: "EX-IN"
  back: "Experienced Involvement — training for people with psychiatric experience to become peer support workers (since 2005, Bremen). Inspired by Dorothea Buck."
- front: "Trialogue"
  back: "Equal-footing conversation between people with lived experience, family members, and professionals. Founded in 1989 in Hamburg by Thomas Bock."
- front: "Peer support — effective factors"
  back: "Lived experience as anchor of credibility · hope as model · equal-footing relationship · non-stigmatising communication."
- front: "Mahlke et al. 2017"
  back: "German RCT on one-to-one peer support — demonstrated significant effects on Empowerment and self-efficacy."
:::

:::standard{reading_time=2}
Peer support means: people who have themselves been through a mental health crisis walk alongside others — on equal footing, with lived experience rather than a professional title.

In German-speaking countries, they are called Genesungsbegleiter:innen, experience experts, or EX-IN workers. EX-IN stands for "Experienced Involvement" — a training that emerged in Bremen in 2005 and is today established in many clinics, counselling services, and Recovery Colleges.

Three terms matter here:

- **Peer support:** being accompanied by someone with similar experience. Credible because it is lived.
- **Trialogue:** the equal-footing conversation between people with lived experience, family members, and professionals — founded in Hamburg in 1989 by Thomas Bock.
- **EX-IN:** a structured training to become a peer support worker, inspired by Dorothea Buck.

What does the research say? A large international study with over 600 participants in four countries showed significant effects on Empowerment and quality of life. A German study confirmed this. What works is not a trick — it is the encounter with someone who can say: "I was there too. And there is a way forward."

Maybe you yourself know someone whose story carried you. Maybe one day you will be that person for someone else.
:::

:::standard-quiz{id=q-12-std}
- q: "What does EX-IN stand for?"
  type: multiple-choice
  options:
    - text: "A new diagnosis."
      correct: false
    - text: "Experienced Involvement — a training to become a peer support worker."
      correct: true
      explanation: "Developed in Bremen in 2005, today established across many DACH institutions."
    - text: "A class of medication."
      correct: false

- q: "Who speaks with each other in the Trialogue?"
  type: multiple-choice
  options:
    - text: "Only professionals among themselves."
      correct: false
    - text: "People with lived experience, family members, and professionals — on equal footing."
      correct: true
      explanation: "Founded in Hamburg in 1989 by Thomas Bock."
    - text: "Only people with lived experience, by themselves."
      correct: false
:::

:::standard-flashcards{id=f-12-std}
- front: "Peer support"
  back: "Being accompanied by people with their own crisis experience. Works through lived experience, hope, and equal footing."
- front: "Trialogue"
  back: "Equal-footing conversation between people with lived experience, family members, and professionals. Since 1989 (Bock, Hamburg)."
- front: "EX-IN"
  back: "Experienced Involvement — training for people with psychiatric experience, since 2005."
:::


# 13. Recovery Colleges — learning instead of therapy
{#kap-13 reading_time=5}

Recovery Colleges are a British model that emerged from 2009 onward [^perkins2012]. They are not clinics, but educational institutions. They are free of charge, open to all — people with lived experience, family members, professionals, and anyone interested — and use the pedagogical form of adult education instead of the therapeutic session.

Two central principles shape Recovery Colleges [^perkins2012] [^meddings2015]:

- **Education instead of therapy.** Participants are students, not patients. The focus is on resources and learning, not on deficit and diagnosis.
- **Co-production.** Every course is developed and delivered together by a professional and a person with lived experience — on equal footing.

## What the research shows

Hayes and colleagues count 221 Recovery Colleges worldwide in 28 countries on five continents [^hayes2023].

The RECOLLECT study is the most comprehensive scientific examination of Recovery Colleges to date [^henderson2024recollect]. A retrospective cohort study from England with 1,193 Recovery College students compared to 3,508 control persons over 6, 12, and 60 months showed: a significant reduction in psychiatric hospitalisations, inpatient bed-days, and emergency consultations — together with improved wellbeing [^ronaldson2024].

A literature review of ten years of Recovery College research [^theriault2020] confirms consistent effects on hope, Empowerment, self-efficacy, social inclusion, goal attainment, and mental health knowledge. Crowther and colleagues show that professionals also benefit from working in Recovery Colleges [^crowther2019].

:::info{type=evidence title="Evidence in German-speaking countries"}
Empirically validated D-A-CH data on the effectiveness of recovery-oriented care have emerged in recent years.

A German randomised controlled trial on peer support for people with severe mental illness [^mahlke2017] demonstrated significant effects on Empowerment and self-efficacy.

The DGPPN S3 guideline "Psychosocial therapies for severe mental illness" (2nd edition 2019) has included recovery orientation, peer support, and Shared Decision-Making as recommendations [^dgppn2019].

Recovery College research in German-speaking countries is growing — the evidence base for specific D-A-CH sites is being built up.
:::

In German-speaking countries, Recovery Colleges exist in Bern [^rcbern], in Eastern Switzerland, in Geneva, in St. Gallen, and in Zurich — and increasingly in Germany and Austria (among others, Empowerment College Bremen).

:::easy{reading_time=2}
Recovery Colleges are a special kind of school. But not a school for children.

Here adults learn about mental health. Everyone may come: people with lived experience, family members, professionals, anyone interested.

The courses are free. You don't need a diagnosis.

Every course is planned together: by a professional and a person with their own experience. Both are equally important.

There are over 220 Recovery Colleges today in 28 countries. Also in Switzerland, Germany, and Austria.

Research shows: people who attend a Recovery College feel better afterwards.
:::

:::quiz{id=q-13}
- q: "Who may take part in a Recovery College?"
  type: multiple-choice
  options:
    - text: "Only people with a diagnosis."
      correct: false
    - text: "People with lived experience, family members, professionals, and anyone interested — everyone."
      correct: true
      explanation: "Open to all. No diagnosis needed. Free."

- q: "What does 'co-production' mean?"
  type: multiple-choice
  options:
    - text: "A film trick."
      correct: false
    - text: "A professional and a person with lived experience plan courses together — on equal footing."
      correct: true

- q: "What does the UK cohort study by Ronaldson et al. 2024 show?"
  type: multiple-choice
  options:
    - text: "No effects."
      correct: false
    - text: "Significant reduction in psychiatric hospitalisations and bed-days."
      correct: true
:::

:::flashcards{id=f-13}
- front: "Recovery College"
  back: "Educational institution — not a treatment site. Learning instead of therapy. Free. Open to all."
- front: "Co-production"
  back: "Courses are developed and delivered together by a professional and a person with lived experience."
- front: "Effectiveness"
  back: "Hayes 2023: 221 Recovery Colleges in 28 countries. Ronaldson 2024: fewer hospitalisations, more wellbeing."
:::

:::standard{reading_time=2}
A Recovery College is not a clinic. It is a school for adults — open to anyone who wants to learn something about mental health: people with lived experience, family members, professionals, anyone interested. The courses are free, you do not need a diagnosis, you do not need a referral, and you do not need to register with your GP.

Two principles carry this model:

- **Education instead of therapy.** You are a student, not a patient. What stands at the centre is learning, resources, and questions — not diagnosis and deficit.
- **Co-production.** Every course is developed and delivered together by a professional and a person with lived experience. Both sources of knowledge are equally valid.

The first Recovery College emerged in London in 2009. Today, there are over 220 worldwide in 28 countries — also in Switzerland (including Bern, Eastern Switzerland, Geneva, St.Gallen, Zurich), in Germany, and in Austria.

The largest study on this, RECOLLECT from England, compared nearly 1,200 Recovery College students with over 3,500 controls over five years. The result: fewer psychiatric hospitalisations, fewer emergency visits, more wellbeing. Ten years of research confirms it: hope, Empowerment, social inclusion, and self-efficacy all rise measurably.

Perhaps a Recovery College near you can become a first place where you do not have to explain yourself — where you are simply allowed to learn.
:::

:::standard-quiz{id=q-13-std}
- q: "Who is allowed to attend a Recovery College?"
  type: multiple-choice
  options:
    - text: "Only people with a psychiatric diagnosis."
      correct: false
    - text: "Everyone — people with lived experience, family members, professionals, anyone interested. Without a diagnosis."
      correct: true
      explanation: "Recovery Colleges are open, free of charge, and do not require a referral."
    - text: "Only professionals."
      correct: false

- q: "What does Co-production mean?"
  type: multiple-choice
  options:
    - text: "Filming several movies together."
      correct: false
    - text: "Courses are planned together by a professional and a person with lived experience — on equal footing."
      correct: true
      explanation: "This is the core principle of Recovery Colleges."
    - text: "A training video to follow along with."
      correct: false
:::

:::standard-flashcards{id=f-13-std}
- front: "Recovery College"
  back: "An educational place rather than a treatment place. Free, open to all. Learning instead of therapy."
- front: "Co-production"
  back: "Every course is shaped together by a professional and a person with lived experience."
- front: "Effects (RECOLLECT)"
  back: "Fewer hospitalisations, fewer emergencies, more wellbeing — demonstrated over five years."
:::


# 14. Trauma-informed practice
{#kap-14 reading_time=3}

:::info{type=warmth title="Before you read on"}
This chapter names violence, abuse, neglect, and discrimination. If you have lived through hard things, reading may bring much up. That is normal. Read at your pace. Take breaks. Skip to the next chapter if today is too much. If you need support right now: Chapter 20 (Crisis) is only a few taps away — or call the **Samaritans** (UK/IE) on **116 123**, in Switzerland **143**, in Germany **0800 111 0 111**, in Austria **142**.
:::

Many people who receive psychiatric care carry traumatic experiences in their history — violence, abuse, neglect, discrimination. Psychiatric stays themselves can also act in retraumatising ways [^felitti1998].

A trauma-informed stance is therefore an integral part of recovery-oriented practice. The US agency SAMHSA [^samhsa2014trauma] has defined six guiding principles for this:

- **Safety** — physical and emotional.
- **Trust and transparency** — clear information, a reliable frame.
- **Peer support** — lived experience as a resource.
- **Collaboration and mutuality** — flattening hierarchies.
- **Empowerment, voice, and choice** — decision-making and self-determination.
- **Cultural, historical, and gender sensitivity.**

These principles also apply in a digital workbook. You decide what you read and when, what you save, what you delete.

:::easy{reading_time=1}
Many people in psychiatry have lived through hard things. Violence. Abuse. Neglect.

Sometimes a hospital stay itself is also a burden.

That's why a trauma-sensitive stance matters. It means:

- Safety first.
- Build trust.
- Communicate honestly.
- No one decides over your head.

This stance also applies in this app. You decide what you read. What you save. What you delete.
:::

:::quiz{id=q-14}
- q: "How many principles has SAMHSA defined for trauma-informed care?"
  type: multiple-choice
  options:
    - text: "Three"
      correct: false
    - text: "Six"
      correct: true
    - text: "Ten"
      correct: false

- q: "Which is NOT a principle of trauma-informed practice?"
  type: multiple-choice
  options:
    - text: "Safety"
      correct: false
    - text: "Strictness"
      correct: true
      explanation: "Strictness is not one of the SAMHSA principles."
    - text: "Peer support"
      correct: false
:::

:::flashcards{id=f-14}
- front: "Six principles (SAMHSA 2014)"
  back: "Safety · trust & transparency · peer support · collaboration · Empowerment · cultural/gender sensitivity."
- front: "Retraumatisation"
  back: "When helping systems themselves act in additionally traumatising ways. Trauma-informed practice aims to actively prevent this."
- front: "ACE study (Felitti 1998)"
  back: "Shows: traumatic childhood experiences are widespread and have lifelong effects on health."
:::

:::standard{reading_time=2}
Many people who receive psychiatric care carry heavy experiences with them — violence, abuse, neglect, discrimination, losses. Sometimes psychiatric stays themselves can feel burdensome or retraumatising. A trauma-informed stance takes this seriously, without pushing you to show wounds that you do not want to show.

The US health agency SAMHSA has described six guiding principles that carry trauma-sensitive support:

- **Safety** — physical and emotional. No one should be in a room where they do not feel safe.
- **Trust and transparency** — clear information, a reliable frame, no surprises behind your back.
- **Peer support** — lived experience as a reliable bridge.
- **Collaboration on equal footing** — flattening hierarchies, not amplifying them.
- **Empowerment, voice, and choice** — you co-decide. Always.
- **Cultural, historical, and gender sensitivity** — your story is part of who you are.

These principles also apply in a digital workbook. You decide what you read and when. What you save. What you delete. If a chapter is too much, close it. Come back when you are ready. Or leave it out entirely.

Trauma-informed does not mean: first work through trauma, then live. It means: everything that happens here pays attention to what you have already carried.
:::

:::standard-quiz{id=q-14-std}
- q: "How many guiding principles has SAMHSA defined for trauma-informed practice?"
  type: multiple-choice
  options:
    - text: "Three."
      correct: false
    - text: "Six."
      correct: true
      explanation: "Safety, trust, peer support, collaboration, Empowerment, cultural sensitivity."
    - text: "Ten."
      correct: false

- q: "Who decides what is saved in this app?"
  type: multiple-choice
  options:
    - text: "The app."
      correct: false
    - text: "You. Always."
      correct: true
      explanation: "Self-determination over your data is an expression of a trauma-sensitive stance."
:::

:::standard-flashcards{id=f-14-std}
- front: "Six principles (SAMHSA)"
  back: "Safety · trust & transparency · peer support · collaboration · Empowerment · cultural & gender sensitivity."
- front: "Safety first"
  back: "No one decides over your head. You set the pace, the depth, and when to stop."
- front: "Retraumatisation"
  back: "When helping systems cause additional harm. Trauma-informed practice aims to actively prevent this."
:::


# 15. Recovery and human rights
{#kap-15 reading_time=4}

Recovery is not only a professional question but also a human rights question. The UN Convention on the Rights of Persons with Disabilities guarantees people with disabilities — including psychosocial disabilities — the right to self-determination, inclusion, and supported decision-making [^uncrpd2006]. Germany ratified the CRPD in 2009, Austria in 2008, Switzerland in 2014.

In 2019 the WHO launched the QualityRights initiative [^who2019] and in 2021 published the guideline "Guidance on Community Mental Health Services" [^who2021]. Recovery is named there as a central principle of modern care.

In concrete terms this means: reduce coercion, never place the diagnosis above the person, offer support where people need it — and involve people with lived experience as equal partners in all care decisions.

:::info{type=example title="Example: Open Dialogue"}
In Finnish Western Lapland, Jaakko Seikkula developed the Open Dialogue concept in the 1980s.

For acute psychotic crises, all important attachment figures are involved within 24 hours. All conversations happen together, all decisions are negotiated transparently.

Long-term outcomes are exceptional: in Western Lapland, over 80% of people with first-episode psychosis returned to work or education within two years. A 19-year study confirmed the long-term stability of the results [^seikkula2011] [^bergstroem2018].
:::

:::easy{reading_time=1}
Recovery is also a human right.

In 2006 the UN made a treaty. It says: people with disabilities have the right to decide for themselves. Also people with mental illness.

The WHO says in 2021: psychiatry should respect these rights. The doctor should not decide alone. Everyone decides together.

In Switzerland, Germany, and Austria this also applies.
:::

:::quiz{id=q-15}
- q: "What is the UN CRPD?"
  type: multiple-choice
  options:
    - text: "A treatment method."
      correct: false
    - text: "The UN Convention on the Rights of Persons with Disabilities of 2006."
      correct: true
      explanation: "Switzerland ratified it in 2014, Germany in 2009, Austria in 2008."

- q: "What does the WHO say in 2021?"
  type: multiple-choice
  options:
    - text: "Recovery is unscientific."
      correct: false
    - text: "Care should be person-centred and rights-based."
      correct: true
:::

:::flashcards{id=f-15}
- front: "UN CRPD 2006"
  back: "UN Convention on the Rights of Persons with Disabilities. Guarantees self-determination — including for psychosocial disabilities. CH ratified 2014, DE 2009, AT 2008."
- front: "WHO QualityRights"
  back: "WHO initiative since 2019. 2021 guideline 'Guidance on Community Mental Health Services': person-centred, rights-based, recovery-oriented."
- front: "Open Dialogue (Seikkula)"
  back: "Western Lapland since the 1980s. Over 80% of people with first-episode psychosis back in work/education within 2 years. Confirmed in 19-year follow-up."
:::

:::standard{reading_time=2}
Recovery is not only a professional question — it is also a question of human rights. Someone who is mentally ill does not lose the right to be heard, included, and taken seriously.

The **UN Convention on the Rights of Persons with Disabilities** (CRPD) of 2006 guarantees all people with disabilities — physical, intellectual, psychosocial — the right to self-determination, inclusion, and supported decision-making. Switzerland ratified it in 2014, Germany in 2009, Austria in 2008. This is binding law.

The **World Health Organization (WHO)** gave this weight in 2019 with the QualityRights initiative and published the guideline "Guidance on Community Mental Health Services" in 2021. Recovery stands there as a central principle of modern care — alongside person-centredness and a rights-based approach.

What does this mean in concrete terms?

- Reduce coercion — wherever possible.
- Never place a diagnosis above the person.
- Offer support where people live.
- Include people with lived experience as equal partners in decisions about their care.

One example of this is the **Open Dialogue** approach from Finland. In acute psychotic crises, all important people in the person's life are brought in within 24 hours. Over 80% of those affected for the first time returned to work or education within two years — long-term studies confirm the stability of these results.

You do not have to know these frameworks by heart. But it is good to know: when you say "I want to take part in the decision", you are standing on solid legal ground.
:::

:::standard-quiz{id=q-15-std}
- q: "What does the UN Convention on the Rights of Persons with Disabilities also guarantee people with mental illness?"
  type: multiple-choice
  options:
    - text: "A quick cure."
      correct: false
    - text: "Self-determination, inclusion, and supported decision-making."
      correct: true
      explanation: "UN CRPD of 2006. Ratified: CH 2014, DE 2009, AT 2008."
    - text: "A specific form of therapy."
      correct: false

- q: "What does the 2021 WHO guideline say about psychiatric care?"
  type: multiple-choice
  options:
    - text: "It should be person-centred and rights-based."
      correct: true
      explanation: "Recovery is named there as a central principle."
    - text: "It should be as inpatient and as long-term as possible."
      correct: false
    - text: "It should happen without involving people with lived experience."
      correct: false
:::

:::standard-flashcards{id=f-15-std}
- front: "UN CRPD 2006"
  back: "UN Convention on the Rights of Persons with Disabilities. Guarantees self-determination — also for psychosocial disabilities. Ratified: CH 2014, DE 2009, AT 2008."
- front: "WHO QualityRights"
  back: "WHO initiative since 2019. 2021 guideline: person-centred, rights-based, recovery-oriented."
- front: "Open Dialogue"
  back: "Finnish model. Over 80% of people with first-episode psychosis returned to work or education within 2 years."
:::


# 16. Illness or Recovery: two views
{#kap-16 reading_time=3}

Recovery is more than a new method — it is a change of perspective [^knuf2026] [^slade2014] [^ameringschmolke2012].

:::table{name="Paradigm-comparison"}
| Illness-oriented view | Recovery-oriented view |
|----------------------------|---------------------------|
| Diagnosis at the centre | Person at the centre |
| Absence of symptoms as the goal | A meaningful life as the goal |
| Expert = professional | Dual expertise: professional knowledge + experiential knowledge |
| Treatment plan | Recovery plan + treatment plan |
| Compliance | Shared Decision-Making |
| Deficit lens (pathogenesis) | Resource lens (salutogenesis) |
| Linear path of healing | Individual, non-linear path |
| Professional carries hope alone | Hope is shared and borrowed |
| Patient / client | Person / person with experience / student |
:::

The right column does not displace the left. Both columns have their place — the recovery-oriented paradigm expands the medical one, it does not replace it [^slade2014].

Amering and Schmolke stress a point that is often overlooked: recovery-oriented practice is not an additional module bolted on top. It is a different way of producing knowledge — through the linking of professional expertise and lived experience as equal sources [^ameringschmolke2012].

:::easy{reading_time=2}
There are two ways of looking at mental illness:

**Old view:**
- The illness is at the centre.
- Goal: symptoms gone.
- The doctor knows best.
- You are a patient.

**Recovery view:**
- The person is at the centre.
- Goal: a good life.
- You and the professional decide together.
- You are a person with experience.

The old view is not wrong. It often helps. But it isn't enough on its own.

The Recovery view expands the old view. It does not replace it.
:::

:::quiz{id=q-16}
- q: "Does the Recovery view replace the medical view?"
  type: true-false
  correct: false
  explanation: "No — it expands it. Both have their place."

- q: "What is at the centre of the Recovery view?"
  type: multiple-choice
  options:
    - text: "The diagnosis"
      correct: false
    - text: "The person"
      correct: true
:::

:::flashcards{id=f-16}
- front: "Paradigm shift"
  back: "From the deficit lens (pathogenesis) to the resource lens (salutogenesis) — without giving up the medical view."
- front: "Compliance vs. Shared Decision-Making"
  back: "Compliance = you follow. Shared Decision-Making = you decide together."
- front: "Knowledge synthesis"
  back: "Recovery-oriented practice links professional expertise and lived experience as equal sources (Amering & Schmolke 2012)."
:::

:::standard{reading_time=2}
Recovery is more than a new method. It is a change of perspective — a different way of looking at psychological crisis and recovery.

The **illness-oriented view** places the diagnosis at the centre. The goal is freedom from symptoms. The expert is the professional. You follow a treatment plan. The gaze is directed at what is missing or disturbed — at the deficit.

The **recovery-oriented view** places the person at the centre. The goal is a meaningful life — with or in spite of symptoms. There are two experts: the professional AND you. Decisions are made together (Shared Decision-Making). The gaze is directed at resources, hope, and connection.

A few word-pairs show the difference:

- Diagnosis at the centre → person at the centre
- Freedom from symptoms as the goal → a meaningful life as the goal
- Compliance → Shared Decision-Making
- Deficit lens (pathogenesis) → resource lens (salutogenesis)
- Linear path to healing → individual, non-linear path
- Patient → person / person with experience / student

Important: the right-hand column does not push out the left one. Both have their place. Medication can help. Diagnoses can give orientation. A clinic can be a safe place. But that alone is not enough — Recovery expands the medical picture by adding your voice, your values, your sense of meaning.

Amering and Schmolke put it precisely: recovery-oriented practice is not an extra module on top. It is a different way of producing knowledge — by joining professional expertise and lived experience as equally valid sources.
:::

:::standard-quiz{id=q-16-std}
- q: "Does the Recovery view replace the medical view?"
  type: multiple-choice
  options:
    - text: "Yes, it replaces it completely."
      correct: false
    - text: "No — it expands it. Both have their place."
      correct: true
      explanation: "Recovery is a change of perspective, not a rejection of medical knowledge."
    - text: "No, it stands in contradiction to it."
      correct: false

- q: "What stands at the centre of the Recovery view?"
  type: multiple-choice
  options:
    - text: "The diagnosis."
      correct: false
    - text: "The person — with their story, their values, their sense of meaning."
      correct: true
      explanation: "A diagnosis gives orientation, but it does not define you."
    - text: "The clinic."
      correct: false
:::

:::standard-flashcards{id=f-16-std}
- front: "Paradigm shift"
  back: "From the deficit lens (pathogenesis) to the resource lens (salutogenesis) — without giving up the medical view."
- front: "Compliance vs. Shared Decision-Making"
  back: "Compliance = you follow. Shared Decision-Making = you decide together."
- front: "Two expertises"
  back: "Professional expertise AND lived experience are equally valid sources of knowledge."
:::


# 17. Three sentences for you
{#kap-17 reading_time=3}

You are not your diagnosis. You are a person with a story, with skills, with values, with relationships. A diagnosis can be a point of orientation — it is never the whole truth about you.

## Three sentences often heard in the Recovery movement

- You are the expert of your life. Your experience is knowledge.
- You don't have to carry everything alone. Find allies — peers, professionals, trusted people.
- You may set your own pace and direction. A step back is not a failure.

## What the research can give you for the way

Hope is a predictor of recovery [^schrank2012]. Peer support has a measurable effect on self-efficacy [^slade2024peer] [^mahlke2017]. Participation in Recovery Colleges reduces subsequent care costs and improves wellbeing [^ronaldson2024]. Self-stigma can change [^yanos2015].

:::reflection{id=7 title="Your first step"}
- Whom could you approach this week, someone who would listen to you without judging?
- What small, doable action could be a hope anchor for the next seven days?
- Which area of the CHIME model — or of the triad Hope-Power-Meaning — should get a little more attention this week?
:::

:::easy{reading_time=1}
You are not your diagnosis. You are a person.

Three important sentences:

- You know your life best.
- You don't have to carry everything alone.
- You may set your own pace.

Steps back are part of it. They are not failures.
:::

:::quiz{id=q-17}
- q: "What does 'in Recovery' mean?"
  type: multiple-choice
  options:
    - text: "You are cured."
      correct: false
    - text: "You are on the way — a process, not a state."
      correct: true

- q: "Is a step back a failure?"
  type: true-false
  correct: false
  explanation: "No — steps back are part of the non-linear course of Recovery."
:::

:::flashcards{id=f-17}
- front: "You are the expert of your life"
  back: "No one knows your experience as well as you do. Your voice counts — equal to professional expertise."
- front: "Pace & direction"
  back: "You set both. Recovery is not measurable and not comparable."
:::

:::standard{reading_time=2}
You are not your diagnosis. You are a person with a story, with skills, with values, with relationships. A diagnosis can be an orientation — it is never the whole truth about you.

Three sentences that come up again and again in the Recovery movement — and that we want to pass on to you:

- **You are the expert of your own life.** Your experience is knowledge. No one knows your breath, your nights, your hopes the way you do. This voice counts — equal to any professional expertise.
- **You do not have to carry everything alone.** Look for allies. Peers, professionals, people you trust, family, a self-help group, a Recovery College. You may borrow hope until you can feel it yourself again.
- **You may set the pace and the direction yourself.** Recovery is not measurable and not comparable. A step back is not a failure — it is part of the non-linear path. Sometimes a pause is also progress.

What research can offer you: hope is a predictor of recovery. Peer support measurably strengthens self-efficacy. Recovery Colleges reduce hospitalisations and increase well-being. Self-stigma can change.

These three sentences are not a programme to work through. They are more like three stones you put in your pocket. You take them out when you need them.

Maybe today. Maybe only in six months.
:::

:::standard-quiz{id=q-17-std}
- q: "What does 'in Recovery' mean?"
  type: multiple-choice
  options:
    - text: "You are completely cured."
      correct: false
    - text: "You are on the way — a process, not a state."
      correct: true
      explanation: "Recovery is an ongoing path, not a finishing line."
    - text: "You are symptom-free."
      correct: false

- q: "Is a step back a failure?"
  type: multiple-choice
  options:
    - text: "Yes, then the path has failed."
      correct: false
    - text: "No — it is part of the non-linear course of Recovery."
      correct: true
      explanation: "Recovery is rarely linear. Pauses and steps back are part of the path."
    - text: "Maybe — depending on how big it is."
      correct: false
:::

:::standard-flashcards{id=f-17-std}
- front: "Three sentences"
  back: "1) You are the expert of your life. 2) You do not have to carry it alone. 3) You set the pace and direction."
- front: "Step back"
  back: "Not a failure. It is part of the non-linear path."
- front: "Borrowing hope"
  back: "When you cannot feel hope yourself, you may borrow it from others — until you can feel it again yourself."
:::


# 18. Language and stance — why words matter
{#kap-18 reading_time=3}

Recovery-oriented language is not cosmetics. It changes who is recognised in a room as a subject — and who becomes the object of a treatment [^ameringschmolke2012] [^knuf2026].

## What we avoid — and what we say instead

In the German-speaking Recovery discourse, a number of concrete language rules have become established [^ameringschmolke2012] [^knuf2026] [^slade2013]:

- "The schizophrenic" → better: "person with a diagnosis of schizophrenia" (person-first language).
- "Patient" / "client" in educational contexts → better: "student", "participant", "person with lived experience of crisis".
- "Chronic", "incurable" → avoid. Both terms are empirically questionable and demonstrably harm recovery.
- "Compliance" → better: "treatment adherence", better still: "shared decision".
- "Insight into one's illness" → better: "one's own understanding of the illness".
- "Recovered" → in German: "in Recovery" (a process term).
- "Deficit", "symptom carrier" → better: "resources", "life experience", "emotional upheaval".

Language also changes you. People who start to say "in Recovery" begin to think in processes rather than fixed states more quickly — and often take the first imperceptible step in doing so.

:::easy{reading_time=1}
Words change reality. A few examples:

- Not: "chronically ill" → better: "lives with the diagnosis"
- Not: "compliance" → better: "shared decision"
- Not: "a schizophrenic" → better: "person with schizophrenia"
- Not: "cured" → better: "in Recovery"

Language is not everything. But it often changes the beginning.
:::

:::quiz{id=q-18}
- q: "Which phrase is person-first?"
  type: multiple-choice
  options:
    - text: "The borderliner"
      correct: false
    - text: "Person with a borderline diagnosis"
      correct: true

- q: "Which term should be avoided?"
  type: multiple-choice
  options:
    - text: "Person with lived experience of crisis"
      correct: false
    - text: "Chronically incurable"
      correct: true
      explanation: "Empirically questionable and demonstrably inhibits recovery."
:::

:::flashcards{id=f-18}
- front: "Person-first language"
  back: "Diagnosis after the person, not in front of them. 'Person with schizophrenia' instead of 'a schizophrenic'."
- front: "in Recovery"
  back: "The process term. Instead of 'cured' or 'ill' — as an ongoing path."
- front: "Avoid 'compliance'"
  back: "Instead of 'compliance' (you follow instructions), use 'shared decision' or 'treatment adherence'."
:::

:::standard{reading_time=2}
Words are not harmless. They change who is recognised as a person in a room — and who becomes the object of a treatment. Recovery-oriented language is therefore not cosmetics. It is a stance.

In the German-speaking Recovery discourse, a number of concrete language rules have become established. A few examples:

- "The schizophrenic" → better: "person with a diagnosis of schizophrenia" (**person-first language**).
- "Patient" / "client" in educational contexts → better: "student", "participant", "person with lived experience of crisis".
- "Chronic", "incurable" → avoid. Both terms are empirically questionable and demonstrably harm recovery.
- "Compliance" → better: "treatment adherence" — better still: "shared decision".
- "Insight into one's illness" → better: "one's own understanding of the illness".
- "Cured" / "recovered" → in German: "in Recovery" — as a process, not as an end state.
- "Deficit", "symptom carrier" → better: "resource", "life experience", "emotional upheaval".

These shifts are not a pure labelling question. People who start to say "in Recovery" begin to think in processes rather than in fixed states. People who say "person with a diagnosis" see the person first and the diagnosis afterwards. That often changes exactly the imperceptible step with which something new begins.

Language also changes you. The way you speak about yourself shapes the way you think about yourself. You do not have to learn all of these terms at the same time. But perhaps in the next few days you will listen with different ears — to what doctors, family, therapists, you yourself say.

And if something hurts you: you may say so.
:::

:::standard-quiz{id=q-18-std}
- q: "Which phrase is person-first?"
  type: multiple-choice
  options:
    - text: "The borderliner."
      correct: false
    - text: "Person with a borderline diagnosis."
      correct: true
      explanation: "The person first, the diagnosis afterwards. That is person-first language."
    - text: "The mentally ill woman."
      correct: false

- q: "Which term should be avoided?"
  type: multiple-choice
  options:
    - text: "Person with lived experience of crisis."
      correct: false
    - text: "Chronically incurable."
      correct: true
      explanation: "Empirically questionable and demonstrably inhibits recovery."
    - text: "In Recovery."
      correct: false
:::

:::standard-flashcards{id=f-18-std}
- front: "Person-first language"
  back: "Diagnosis after the person — not in front of them. 'Person with schizophrenia' instead of 'a schizophrenic'."
- front: "In Recovery"
  back: "The process term. Instead of 'cured' or 'chronic' — as an ongoing path."
- front: "Avoid 'compliance'"
  back: "Instead of 'compliance' (you follow), use 'shared decision' or 'treatment adherence'."
:::


# 19. How to use this workbook
{#kap-19 reading_time=2}

This digital workbook is not a textbook. It is a companion:

- Take your time. One page a day is enough.
- Be honest with yourself. You decide what is saved or shared.
- Jump around. Follow whatever speaks to you.
- Come back. The same question reads differently in three months.
- Share, if you want to — with a person you trust, a peer support worker, in a group.

## Privacy and self-determination

Everything you enter in this app belongs to you. You decide whether something is synchronised, saved or deleted. Entries are encrypted. You can erase your data yourself at any time. This self-determination architecture is not a technical detail — it is an expression of the recovery-oriented stance of this workbook [^who2021] [^samhsa2014trauma] [^uncrpd2006].

:::easy{reading_time=1}
How to use this app:

- Take your time. One page a day is enough.
- Be honest with yourself.
- Jump from chapter to chapter.
- Come back. The same question reads differently later on.
- Share, if you want to.

Your data belongs to you. The app only saves what you want. You can delete everything. At any time.
:::

:::quiz{id=q-19}
- q: "Do the chapters have to be read in order?"
  type: true-false
  correct: false
  explanation: "No — jump around as fits you."

- q: "Who decides what is saved?"
  type: multiple-choice
  options:
    - text: "The app"
      correct: false
    - text: "You"
      correct: true
:::

:::flashcards{id=f-19}
- front: "Privacy in this app"
  back: "Your data belongs to you. Encrypted. You decide what is synchronised, saved or deleted. Deletable at any time."
- front: "How to work with it"
  back: "One page a day. Jumping allowed. Repeating encouraged. Sharing optional."
:::

:::standard{reading_time=2}
This workbook is not a textbook. It is a companion — and you decide how it accompanies you.

A few pointers that have proven useful:

- **Take your time.** One page a day is enough. Sometimes a single paragraph is enough. There is no pace you have to reach.
- **Be honest with yourself.** You do not have to prove anything to anyone — not even to the app. Your entries are for you.
- **Jump around.** Follow whatever speaks to you. You do not have to read in order.
- **Come back.** The same reflection question reads differently in three months. Come back.
- **Share, if you want to.** With a person you trust, with a peer support worker, in a group — or with no one. Both are right.

**Privacy and self-determination.** Everything you enter in this app belongs to you. You decide whether something is synchronised, saved or deleted. Entries are encrypted. Complete self-erasure of your data is possible at any time.

This is not just a technical detail. It is an expression of the stance of this workbook: you are not the object of a treatment, you are the subject of your path. Self-determination over your own data is a concrete piece of Recovery — and at the same time a human right (UN-CRPD, WHO 2021, SAMHSA).

If a chapter becomes too much, close it. If something resonates, stay with it. There is no wrong order. There is only your path — and this workbook walks alongside you as far as you let it.
:::

:::standard-quiz{id=q-19-std}
- q: "Do you have to read the chapters in order?"
  type: multiple-choice
  options:
    - text: "Yes, otherwise it does not work."
      correct: false
    - text: "No — jump around as fits you."
      correct: true
      explanation: "Follow whatever speaks to you. Repeating is encouraged."
    - text: "Only under the guidance of a professional."
      correct: false

- q: "Who decides what is saved or deleted in the app?"
  type: multiple-choice
  options:
    - text: "The app itself."
      correct: false
    - text: "You — at any time, completely deletable."
      correct: true
      explanation: "Self-determination over your data is an expression of the recovery-oriented stance."
    - text: "Your professional."
      correct: false
:::

:::standard-flashcards{id=f-19-std}
- front: "How to work with it"
  back: "One page a day. Jumping allowed. Repeating encouraged. Sharing optional."
- front: "Privacy"
  back: "Your entries are encrypted and belong to you. Complete deletion possible at any time."
- front: "Stance of the workbook"
  back: "Companion, not textbook. You decide pace, depth, and reach — and may also click away."
:::


# 20. Crisis and safety — D-A-CH helplines
{#kap-20 reading_time=2}

If you are acutely struggling right now — if you are having thoughts of harming yourself or others, or if you feel that the content here is destabilising you further — then this is not the right moment for reflection questions. Please reach out for support now.

:::crisis
The helplines are stored in a structured form in the frontmatter under `helplines:`. The app renders them as country-by-country cards with tap-to-call and tap-to-open-URL.
:::

These services are anonymous, free of charge and non-judgmental. You do not need to have a "real crisis" in order to call. An early call is always better than no call at all.

:::info{type=warmth title="Before you click away: three sentences for difficult hours"}
- You do not have to walk this path alone.
- A feeling is information, not an instruction — even the heaviest feeling will shift.
- Asking for help is never a sign of weakness. It is a sign that you take your life seriously.
:::

:::easy{reading_time=1}
If you feel really bad right now, don't read on here. Get help.

- **Switzerland**: Phone 143 (Die Dargebotene Hand). Day and night.
- **Germany**: Phone 0800 111 0 111.
- **Austria**: Phone 142.

These services are free and anonymous. You may call even if you don't know whether it's bad enough.

A call is never too early.
:::

:::quiz{id=q-20}
- q: "Which number do you dial in Switzerland for Die Dargebotene Hand?"
  type: multiple-choice
  options:
    - text: "112"
      correct: false
    - text: "143"
      correct: true
    - text: "147"
      correct: false
      explanation: "147 is Pro Juventute — for children and young people."

- q: "Do you need to have a 'real crisis' to call?"
  type: true-false
  correct: false
  explanation: "No — an early call is always better than no call at all."
:::

:::flashcards{id=f-20}
- front: "Crisis line Switzerland"
  back: "143 — Die Dargebotene Hand. Day and night. Anonymous. Free."
- front: "Crisis line Germany"
  back: "0800 111 0 111 or 0800 111 0 222. Telefonseelsorge. 24/7. Free."
- front: "Crisis line Austria"
  back: "142. Telefonseelsorge. 24/7."
- front: "Children & young people CH/AT"
  back: "147 — Pro Juventute (CH) or Rat auf Draht (AT). 24/7."
:::

:::standard{reading_time=2}
If you are acutely struggling right now — if you are having thoughts of harming yourself or others, or if the content here is destabilising you further — then this is not the moment for reflection questions. Please reach out for support now.

**The most important numbers for German-speaking countries:**

- **Switzerland:** **143** — Die Dargebotene Hand. 24/7. Anonymous. Free.
- **Germany:** **0800 111 0 111** or **0800 111 0 222** — Telefonseelsorge. 24/7. Free.
- **Austria:** **142** — Telefonseelsorge. 24/7.

If life is in danger: **112** (in the EU) or **144** (medical emergency CH/AT).

For children and young people: **147** (Pro Juventute CH / Rat auf Draht AT). 24/7.

These services are anonymous, free of charge and non-judgmental. You do not need to have a "real crisis" in order to call. You do not have to explain whether it is bad enough. An early call is always better than no call at all.

**Three sentences for difficult hours — before you click away:**

- You do not have to walk this path alone.
- A feeling is information, not an instruction. Even the heaviest feeling will shift.
- Asking for help is not a sign of weakness. It is a sign that you take your life seriously.

If you cannot call anyone right now: reach out to a person you trust. Write a message. Go to the nearest emergency department. A small movement outward is enough.

You are not alone. Even if it feels that way right now.
:::

:::standard-quiz{id=q-20-std}
- q: "Which number do you dial in Switzerland in case of acute emotional distress?"
  type: multiple-choice
  options:
    - text: "112"
      correct: false
    - text: "143 (Die Dargebotene Hand)"
      correct: true
      explanation: "143 is the 24/7 crisis line for emotional distress in Switzerland."
    - text: "144 — that is only for life-threatening situations / medical emergency."
      correct: false

- q: "Do you need to have a 'real crisis' to call?"
  type: multiple-choice
  options:
    - text: "Yes, otherwise you will not be taken seriously."
      correct: false
    - text: "No — an early call is always better than no call at all."
      correct: true
      explanation: "You may call even when you are unsure."
    - text: "Only if you are in life-threatening danger."
      correct: false
:::

:::standard-flashcards{id=f-20-std}
- front: "Crisis line Switzerland"
  back: "143 — Die Dargebotene Hand. 24/7. Anonymous. Free."
- front: "Crisis line Germany"
  back: "0800 111 0 111 or 0800 111 0 222 — Telefonseelsorge. 24/7. Free."
- front: "Crisis line Austria"
  back: "142 — Telefonseelsorge. 24/7."
- front: "When to call?"
  back: "Always. Even when unsure. A call is never too early."
:::


# 21. A small promise at the end
{#kap-21 reading_time=2}

Recovery does not mean that everything will become the way it once was. It means that something new is allowed to emerge — sometimes even something that would never have existed without this experience.

You will have days when this sounds like an empty promise. And you will have days when you notice yourself that something has shifted — a tiny hope, a small connection, a thought that was not possible before.

What research can give you for the path: You are not alone. There is a way. And you may borrow hope until you can feel it again yourself.

:::quote{author="Patricia Deegan, 1996" source="deegan1996" lang="en"}
By accepting what we cannot do or be, we begin to discover what we can do and who we can become.
:::

:::quote-translation{source="deegan1996" translator="own translation"}
By accepting what we cannot do or be, we begin to discover what we can do and who we can become.
:::

:::quote{author="Antonio Machado"}
Paths emerge as you walk them.
:::

:::pull
On your path.
:::

:::easy{reading_time=1}
Recovery does not mean: everything will be like before.

Recovery means: something new is allowed to emerge.

You will have hard days. You will also have lighter days.

Three sentences at the end:

- You are not alone.
- There is a way.
- You may borrow hope until you have it yourself again.

On your path.
:::

:::quiz{id=q-21}
- q: "Which image best describes Recovery?"
  type: multiple-choice
  options:
    - text: "A straight line to the goal."
      correct: false
    - text: "A path that emerges as you walk it (Machado)."
      correct: true

- q: "Whose path is it?"
  type: multiple-choice
  options:
    - text: "The doctor's."
      correct: false
    - text: "Yours — with allies."
      correct: true
:::

:::flashcards{id=f-21}
- front: "On your path"
  back: "The closing sentence of the introduction. Recovery is always your path — with allies."
- front: "Three closing sentences"
  back: "You are not alone. There is a way. You may borrow hope until you have it yourself."
- front: "Paths emerge as you walk them"
  back: "Antonio Machado — the motto of many Recovery workbooks, and of this app too."
:::

:::standard{reading_time=2}
Recovery does not mean that everything will become the way it once was. It means that something new is allowed to emerge — sometimes even something that would never have existed without this experience. A different depth. A different attention. Sometimes a language you did not have before.

You will have days when this sounds like an empty promise. And you will have days when you notice yourself that something has shifted — a tiny hope, a small connection, a thought that was not possible before.

Both belong to it. Recovery is not a straight path. It has pauses, loops, ways back. Antonio Machado put it this way: "Paths emerge as you walk them." That is also true for your path.

What research can give you for the way:

- **You are not alone.** Thousands of people have walked through similar times — and have found a good life.
- **There is a way.** Even when it is invisible today. Even when it does not look like the path of others.
- **You may borrow hope.** When you have none yourself right now, others hold it for you — a peer support worker, a therapist, a friend, a book, a story from this workbook.

You may close this workbook again. You may open it again months later. You may share it. You may forget it. You may also say: not today.

What remains is this small promise: On your path. We walk a stretch with you.
:::

:::standard-quiz{id=q-21-std}
- q: "What if you cannot feel any hope right now?"
  type: multiple-choice
  options:
    - text: "Then Recovery is over."
      correct: false
    - text: "Then you may borrow hope from others — until you can feel it yourself again."
      correct: true
      explanation: "Hope can be shared. Others can hold it for you."
    - text: "Then you have done something wrong."
      correct: false

- q: "How does Recovery unfold?"
  type: multiple-choice
  options:
    - text: "As a straight line to the goal."
      correct: false
    - text: "As an individual path — with pauses, loops, ways back. "Paths emerge as you walk them." (Machado)"
      correct: true
      explanation: "Recovery is not linear. Steps back are part of it."
    - text: "Exactly the same as for others."
      correct: false
:::

:::standard-flashcards{id=f-21-std}
- front: "Recovery"
  back: "Something new is allowed to emerge. Not: everything will be like before."
- front: "Borrowing hope"
  back: "When you have none yourself: others hold it for you — until you can feel it again."
- front: "Three closing sentences"
  back: "You are not alone. There is a way. You may borrow hope."
- front: "On your path"
  back: ""Paths emerge as you walk them." (Antonio Machado) — We walk a stretch with you."
:::


# Methodological notes (internal)
{#methodik}

All statements have been checked against the primary sources listed in the frontmatter. Where reviews and meta-analyses were available, they were given priority over individual studies.

Direct quotations are reproduced in their original wording (quote widget with `source` reference). English renderings of German originals are marked as "own translation" (quote-translation widget). Terms and models (CHIME, CHIME-D, Hope-Power-Meaning, Personal Medicine, Trialogue, EX-IN, Salutogenesis, Open Dialogue) are used as scientific terms and are linked in the source register to their authors.

