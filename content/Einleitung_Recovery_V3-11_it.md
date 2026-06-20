---
schema_version: "1.2"
content_id: "recovery-einleitung"
content_version: "3.14"
title: "Recovery"
subtitle: "Un’introduzione completa — Speranza. Potere. Significato."
language: "it"
translation_status: "draft-machine-translated"
translation_date: "2026-06-20"
translator: "Claude subagent (draft — needs professional review of crisis content). Updated 2026-06-20 with Standard mode blocks"
region: "D-A-CH"
target_audience: "betroffene"
target_audience_label: "Per persone con esperienza vissuta di sofferenza psichica"
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
    status: "draft-machine-translated"
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
  full:  "Dettagliato — con ricerca, citazioni e fonti"
  easy:  "Semplice — breve e in linguaggio facile"
  standard: "Standard — lunghezza media, chiaro e personale"
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
  # === Linee italiane (per persone italofone, anche in Italia o nel Ticino) ===
  - country: "IT"
    name: "Telefono Amico Italia"
    number: "02 2327 2327"
    coverage: "Tutti i giorni 10:00–24:00"
    target: "adulti"
    url: "https://www.telefonoamico.it"
  - country: "IT"
    name: "Samaritans Onlus"
    number: "800 86 00 22"
    coverage: "lun–ven 13:00–22:00"
    target: "adulti"
    url: "https://www.samaritansonlus.org"
  - country: "IT"
    name: "Servizio di Telefono Amico per la Prevenzione del Suicidio"
    number: "800 011 110"
    coverage: "gratuito, anonimo"
    target: "adulti in crisi"
  - country: "IT"
    name: "Telefono Azzurro"
    number: "19696"
    coverage: "24/7"
    target: "bambini e ragazzi"
    url: "https://www.azzurro.it"
  - country: "IT"
    name: "Numero unico di emergenza"
    number: "112"
    coverage: "pericolo di vita"
    target: "tutti"
---
# Avviso importante prima di leggere
{#disclaimer reading_time=2}

:::info{type=warmth title="Da leggere per primo"}
Questa app è un **prototipo**. È in fase di sviluppo e non è ancora finita.

Serve esclusivamente a testare un possibile futuro workbook nell'ambito del recovery.
:::

## Che cos'è e che cosa non è

Stai usando una **versione di prova** di un'app ancora in sviluppo. I testi e le funzioni sono una prima bozza. Non sono ancora stati controllati in modo professionale — né dal punto di vista clinico né da quello linguistico.

**Questa app NON è uno strumento terapeutico.** Non sostituisce un trattamento, una terapia, una consulenza medica o un intervento di crisi.

## Per favore, rispetta queste regole

- **Non utilizzarla in setting clinici.** Nella forma attuale, questa app non può essere usata come strumento in cliniche, studi, centri di consulenza o altri setting di cura.
- **Non utilizzarla come unico supporto in ambito privato.** Se sei tu stesso/a una persona coinvolta, usa questa app solo all'interno di una fase di test organizzata — non come unico accompagnamento in un momento difficile.
- **Nel dubbio: cerca aiuto reale.** Se stai male, rivolgiti a una persona di fiducia, alle persone che ti curano o ai numeri di crisi indicati nel capitolo 20 di questo workbook.

## Nessuna garanzia, nessuna responsabilità

I contenuti di questa app sono messi a disposizione senza alcuna garanzia. Non si assume alcuna responsabilità per danni — materiali o immateriali — che potrebbero derivare dall'uso o dal mancato uso di questa app.

L'app è stata realizzata al meglio delle nostre conoscenze e sulla base della ricerca attuale sul recovery. Nonostante questo, può contenere errori, imprecisioni o formulazioni poco appropriate. Se noti qualcosa, il tuo riscontro è benvenuto — è proprio questo lo scopo della fase di test.

## Se ti trovi attualmente in una crisi

Se leggere questa app ti pesa o ti destabilizza, mettila da parte.

In caso di crisi acuta puoi raggiungere 24 ore su 24:
- **Svizzera:** 143 (Telefono Amico — Die Dargebotene Hand)
- **Germania:** 0800 111 0 111 (Telefonseelsorge)
- **Austria:** 142 (Telefonseelsorge)
- **In pericolo di vita:** 112 oppure 144 (CH/AT) o 112 (DE)

Chiedere aiuto non è mai troppo presto.

:::standard{reading_time=2}
Stai usando un **prototipo**. Questa app non è ancora finita — vuole mostrare come potrebbe essere un futuro workbook sul Recovery. I testi e le funzioni sono una prima bozza e non sono ancora stati revisionati professionalmente.

**Questa app non è uno strumento terapeutico.** Non sostituisce trattamenti, terapia, consigli medici o interventi di crisi.

**Rispetta queste regole:**

- Non usarla in contesti clinici — cioè non come ausilio in cliniche, ambulatori o centri di consulenza.
- Non usarla come unico sostegno in una situazione difficile.
- Nel dubbio: cerca un aiuto vero — una persona di fiducia, il tuo team di cura o una linea di crisi.

**In caso di crisi acuta** puoi chiamare 24 ore su 24: Telefono Amico Italia **02 2327 2327**, Svizzera **143**, Germania **0800 111 0 111**, Austria **142**. In pericolo di vita: **112**.

I contenuti sono forniti senza garanzia. Se noti qualcosa, ci farebbe piacere ricevere il tuo riscontro — è esattamente questo lo scopo della fase di test.

Continuando a leggere, confermi di aver compreso questi avvertimenti.
:::

:::pull
Continuando a leggere confermi di aver compreso queste indicazioni e di usare l'app nell'ambito di una fase di test.
:::


# Premessa: Recovery comincia con delle storie
{#vorspann reading_time=4}

:::pull
Recovery sono molte migliaia di storie di persone che, nonostante o grazie ai loro sintomi, hanno trovato una via verso una buona vita.
:::

Sono storie che raramente finiscono sui giornali, perché non offrono scandali. Storie che però accadono ogni giorno — in libreria, davanti a un pianoforte, nei cori, nei gruppi di parola, nei salotti, nelle sale d'attesa, in cucina.

Una donna a lungo convinta che non avrebbe più esercitato una professione, e che oggi gestisce una piccola libreria. Un padre che dopo una psicosi suona di nuovo il pianoforte — in modo diverso da prima, con meno perfezione, con più amore. Un giovane uomo che, dopo anni con una diagnosi borderline, è diventato facilitatore di Recovery, perché vuole tendere ad altri la mano che a lui è mancata. Una madre che ha accompagnato sua figlia attraverso un grave disturbo alimentare e dice: in quel periodo ho imparato sull'amore più che in tutta la mia vita precedente.

Storie così non sono qualche decina. Sono migliaia. Probabilmente centinaia di migliaia. Tante quante sono le persone che hanno mai attraversato un periodo psichico difficile.

## Recovery è documentato

La Scottish Recovery Network ha raccolto e analizzato sistematicamente sessantaquattro di queste storie nel 2007 [^brown2007]. L'iniziativa britannica ImROC raccoglie testimonianze esperienziali da anni [^imroc]. La comunità internazionale degli uditori di voci raccoglie dal 1990 voci che non trovi nei manuali [^hvn].

All'Università di Nottingham, Mike Slade con il programma NEON — Narrative Experiences Online — ha costruito una raccolta scientifica di storie di Recovery registrate [^slade2021neon]. Studi randomizzati controllati hanno dimostrato che ascoltare queste storie migliora in modo misurabile la qualità della vita — sia per persone con esperienza di psicosi [^rennick2024neon], sia per i familiari che le accompagnano [^neonc2024].

In altre parole: Recovery non è solo una promessa sentita. Recovery è un fenomeno documentato. E le storie delle altre persone sono di per sé una forma di aiuto.

## Recovery è pratico

Recovery non avviene prima di tutto nello studio del terapeuta. Recovery sono incontri. Recovery è il giardino in cui, dopo mesi, si torna a piantare. È il cane che ogni mattina trova la porta. È il coro in cui il proprio respiro ritrova una voce. È l'amica che ascolta senza voler riparare. È il gruppo trialogico del mercoledì sera. È la camminata in collina. È il pane che nel lievito madre ha bisogno di dodici ore.

Recovery sono storie di resilienza — e di creatività, che spesso nasce proprio lì dove qualcosa si è rotto. E molto spesso Recovery è anche: felicità.

Non la felicità impeccabile e sempre splendente delle brochure patinate. Ma quell'altra — la felicità silenziosa, grata, a volte sorpresa. Quella felicità che si conosce solo quando si sa quanto può essere lungo un giorno.

## E tu?

Non devi già sentire nulla di tutto questo per essere qui. Forse non è il momento per parole grandi come felicità o significato. Forse oggi basta che tu legga questa pagina. È abbastanza.

Questo workbook è scritto per persone che percorrono una via così — o che la accompagnano, o che vogliono capirla. Non vuole essere una bella teoria. Vuole essere un segnavia.

:::pull
Prima di iniziare — una breve guida.
:::

:::easy{reading_time=1}
Recovery è un movimento. Tante persone ce l'hanno fatta: hanno avuto un periodo difficile. Oggi vivono bene. Nonostante la malattia. A volte anche grazie alla malattia.

Ci sono migliaia di queste storie.

Recovery non avviene solo dal medico. Recovery avviene nella tua vita. Mentre cucini. Quando passeggi. Quando parli con persone buone.

Questo workbook vuole aiutarti. Non è un libro da studiare. È un compagno di viaggio.
:::

:::quiz{id=q-vorspann}
- q: "Dove avviene Recovery di più?"
  type: multiple-choice
  options:
    - text: "Solo in clinica."
      correct: false
      explanation: "No. Recovery avviene soprattutto nella vita quotidiana — negli incontri, nei piccoli passi."
    - text: "Nella vita — negli incontri, nel quotidiano."
      correct: true
      explanation: "Esatto. Il trattamento è uno strumento, non un luogo."
    - text: "Solo quando tutti i sintomi sono spariti."
      correct: false
      explanation: "Recovery non comincia solo dopo la scomparsa dei sintomi."

- q: "Quante storie di Recovery esistono?"
  type: multiple-choice
  options:
    - text: "Una manciata."
      correct: false
    - text: "Centinaia."
      correct: false
    - text: "Migliaia, se non centinaia di migliaia."
      correct: true
      explanation: "Tante quante sono le persone che hanno mai attraversato un periodo difficile."
:::

:::flashcards{id=f-vorspann}
- front: "Recovery comincia con …"
  back: "… delle storie. Migliaia di persone che, nonostante o grazie ai loro sintomi, hanno trovato una via verso una buona vita."
- front: "Programma NEON"
  back: "Raccolta scientifica di storie di Recovery registrate (Uni Nottingham). Gli studi mostrano: ascoltare queste storie migliora in modo misurabile la qualità della vita."
- front: "Recovery avviene …"
  back: "… non prima di tutto nello studio del terapeuta. In giardino, nel coro, nei dialoghi, mentre si cucina, negli incontri."
:::

:::standard{reading_time=2}
Recovery comincia con delle storie. Non con la teoria, non con le diagnosi — con persone che hanno trovato una via.

Una donna che per anni ha pensato di non poter più esercitare una professione e che oggi gestisce una piccola libreria. Un padre che, dopo una psicosi, suona di nuovo il pianoforte — in modo diverso da prima, con meno perfezione, con più amore. Un giovane uomo che, dopo una diagnosi borderline, oggi accompagna altre persone perché vuole tendere loro la mano che a lui è mancata.

Storie come queste non si contano a decine. Si contano a migliaia. Tante quante sono le persone che hanno attraversato un periodo psichico difficile.

Recovery è più di una promessa sentita. Recovery è documentato:

- La rete scozzese di Recovery ha analizzato sistematicamente 64 percorsi di vita.
- L'Università di Nottingham raccoglie scientificamente narrazioni di Recovery.
- Gli studi mostrano: ascoltare queste storie migliora in modo misurabile la qualità della vita.

Recovery accade anche raramente prima nello studio del terapeuta. Recovery accade nel giardino in cui, dopo mesi, si torna a piantare. Nel coro, dove il tuo respiro torna ad avere una voce. Nell'amica che ascolta senza voler aggiustare.

Non devi sentire nulla di tutto questo per essere qui. Forse oggi basta che tu legga questa pagina. È abbastanza.

Questo workbook è un segnale di cammino. Non una bella teoria — ma un compagno per la tua via.
:::

:::standard-quiz{id=q-vorspann-std}
- q: "Dove accade Recovery soprattutto?"
  type: multiple-choice
  options:
    - text: "Solo in clinica o in terapia."
      correct: false
      explanation: "Recovery accade soprattutto nel quotidiano — negli incontri, in giardino, nel coro, mentre si cucina."
    - text: "Nella vita — negli incontri e nel quotidiano."
      correct: true
      explanation: "Esatto. Il trattamento è uno strumento, non un luogo."
    - text: "Solo quando tutti i sintomi sono scomparsi."
      correct: false
      explanation: "No. Recovery comincia in mezzo alla difficoltà."

- q: "Quante sono le storie di Recovery?"
  type: multiple-choice
  options:
    - text: "Una manciata."
      correct: false
    - text: "Migliaia, probabilmente centinaia di migliaia."
      correct: true
      explanation: "Tante quante sono le persone che hanno attraversato un periodo difficile."
    - text: "Solo pochissimi casi isolati."
      correct: false
:::

:::standard-flashcards{id=f-vorspann-std}
- front: "Recovery comincia con …"
  back: "… storie. Migliaia di persone che, nonostante o grazie ai loro sintomi, hanno trovato una via verso una buona vita."
- front: "Dove avviene Recovery?"
  back: "Nel quotidiano. In giardino, nel coro, nel dialogo, mentre si cucina. Il trattamento è uno strumento, non un luogo."
- front: "Sei sola, sei solo?"
  back: "No. Migliaia di persone hanno attraversato periodi simili. Le loro storie mostrano: una via esiste."
:::


# Una breve nota sul linguaggio
{#sprache reading_time=2}

Le parole creano realtà. Chi viene chiamato «schizofrenico» sente una diagnosi. Chi viene chiamato «persona con diagnosi di schizofrenia» resta prima di tutto una persona. Questa introduzione usa volutamente il linguaggio person-first: la diagnosi dopo la persona, non prima [^ameringschmolke2012] [^knuf2026].

Parliamo di persone con crisi psichiche, esperienze di crisi o esperienza con la psichiatria — non di «malati». Parliamo di persone in Recovery — non di «guariti». Usiamo il «tu», perché il workbook digitale è uno spazio personale — non perché ci poniamo sopra di te. Se leggi come professionista: leggi quel «tu» come modello di uno stile linguistico che crea vicinanza senza marcare la gerarchia.

Non si è affermata una traduzione italiana naturale di Recovery — così come non esiste per il concetto strettamente affine di Empowerment. Per questo usiamo Recovery in modo coerente come termine tecnico e nel capitolo successivo lo affianchiamo alla lettura tedesca complementare «Speranza — Potere — Significato» [^ameringschmolke2006].

:::easy{reading_time=1}
Le parole sono importanti.

Chi viene chiamato «schizofrenico» è solo malato. Chi viene chiamato «persona con schizofrenia» resta prima di tutto una persona.

Usiamo la parola Recovery. È inglese. Non c'è una buona parola italiana per dirla. Recovery significa: percorrere una via verso una buona vita.

In questa app ti diamo del «tu». Non perché siamo migliori. Ma perché questo spazio è il tuo spazio.
:::

:::quiz{id=q-sprache}
- q: "Quale formulazione è person-first?"
  type: multiple-choice
  options:
    - text: "Lo schizofrenico"
      correct: false
    - text: "Persona con diagnosi di schizofrenia"
      correct: true
      explanation: "Diagnosi dopo la persona, non prima."
    - text: "Uno schizo"
      correct: false
:::

:::flashcards{id=f-sprache}
- front: "Linguaggio person-first"
  back: "Diagnosi dopo la persona, non prima: 'persona con schizofrenia' invece di 'schizofrenico'."
- front: "Perché Recovery come termine?"
  back: "Non esiste una traduzione italiana elegante. Recovery viene usato in modo coerente come termine tecnico consolidato."
:::

:::standard{reading_time=2}
Le parole creano realtà. Non sono innocue.

Chi viene chiamato «schizofrenico» sente una diagnosi prima ancora di essere una persona. Chi viene chiamato «persona con diagnosi di schizofrenia» resta prima di tutto una persona — e porta la diagnosi come una parte, non come il tutto.

Questo workbook usa volutamente il linguaggio person-first: la diagnosi viene dopo la persona, non prima di lei.

In concreto significa:

- Parliamo di persone con crisi psichiche, non di «malati».
- Parliamo di persone in Recovery, non di «guariti».
- Parliamo di facilitazione di Recovery, non di «lavoro con gli internati».

Per la parola Recovery stessa non esiste una traduzione italiana naturale — così come non esiste per Empowerment. Per questo usiamo Recovery in modo coerente come termine tecnico. Nel prossimo capitolo lo affianchiamo alla lettura tedesca «Speranza — Potere — Significato».

Una particolarità: ti diamo costantemente del «tu». Non perché ci poniamo sopra di te — al contrario. Il workbook digitale è uno spazio personale. Il «tu» crea vicinanza, senza marcare la gerarchia. Se leggi come professionista: leggi quel «tu» come modello di uno stile linguistico che esprime parità.
:::

:::standard-quiz{id=q-sprache-std}
- q: "Quale formulazione è person-first?"
  type: multiple-choice
  options:
    - text: "Lo schizofrenico"
      correct: false
      explanation: "Qui la diagnosi viene prima — non è person-first."
    - text: "Persona con diagnosi di schizofrenia"
      correct: true
      explanation: "Esatto. La diagnosi dopo la persona — la persona resta in primo piano."
    - text: "Uno schizo"
      correct: false
      explanation: "Stigmatizzante e riduce la persona alla diagnosi."

- q: "Perché il workbook usa il «tu»?"
  type: multiple-choice
  options:
    - text: "Perché chi scrive si sente superiore."
      correct: false
    - text: "Perché il workbook digitale è uno spazio personale — vicinanza senza gerarchia."
      correct: true
      explanation: "Il «tu» crea vicinanza, non distanza verso il basso."
:::

:::standard-flashcards{id=f-sprache-std}
- front: "Linguaggio person-first"
  back: "Diagnosi dopo la persona, non prima. «Persona con schizofrenia» invece di «schizofrenico»."
- front: "Perché «Recovery» resta in inglese?"
  back: "Non esiste una traduzione italiana naturale. Recovery viene usato come termine tecnico consolidato."
:::


# Benvenuto, benvenuta
{#willkommen reading_time=3}

Bello che tu sia qui.

Questo workbook digitale è scritto per te — se in questo momento stai vivendo un periodo difficile, se hai ricevuto una diagnosi o se vivi da tempo con un disturbo psichico.

Forse sei stato in cura tante volte. Forse sei all'inizio. Forse hai già percorso una lunga via e cerchi un linguaggio nuovo per ciò che vivi.

Questo workbook è scritto perché tu possa esplorarlo al tuo ritmo. Non devi leggere tutto. Non devi fare nulla in un ordine prestabilito. Puoi saltare, tornare, mettere via.

:::info{type=metaphor title="Un'immagine per il cammino: Kintsugi"}
Kintsugi è un'arte tradizionale giapponese della riparazione. Le ceramiche rotte vengono ricomposte con l'oro. Le linee di frattura non vengono nascoste, ma rese visibili e nobilitate. Il vaso non vale meno per la rottura — agli occhi di molti, vale di più.

Le vie di Recovery seguono spesso una logica simile: non si tratta di cancellare le rotture, ma di integrarle in un nuovo insieme.

Recovery non significa tornare a essere chi eri prima. Recovery significa che ciò che è stato può diventare parte di un nuovo insieme.
:::

:::quote{author="U.S. Substance Abuse and Mental Health Services Administration (SAMHSA), 2012" source="samhsa2012"}
Recovery è un viaggio di guarigione e trasformazione che permette a una persona con un disturbo psichico di condurre una vita significativa in una comunità di propria scelta — e contemporaneamente di tendere a realizzare il proprio pieno potenziale.
:::

:::easy{reading_time=1}
Bello che tu sia qui.

Questo workbook è scritto per te — se stai vivendo momenti difficili.

Non devi leggere tutto. Scegli ciò che fa per te. Torna quando vuoi.

Sei tu a decidere il tuo ritmo.
:::

:::quiz{id=q-willkommen}
- q: "Per chi è questo workbook?"
  type: multiple-choice
  options:
    - text: "Per persone con esperienza vissuta di sofferenza psichica."
      correct: true
      explanation: "È scritto per te — ovunque tu sia nel tuo cammino."
    - text: "Solo per professionisti."
      correct: false
    - text: "Solo per persone con una diagnosi specifica."
      correct: false

- q: "Devi leggere il workbook in ordine?"
  type: true-false
  correct: false
  explanation: "No. Puoi saltare, tornare, mettere via. Sei tu a decidere ritmo e ordine."
:::

:::flashcards{id=f-willkommen}
- front: "Per chi è questo workbook?"
  back: "Per te — se hai esperienza vissuta di sofferenza psichica."
- front: "Kintsugi"
  back: "Arte giapponese della riparazione: linee di frattura ricomposte con l'oro, non nascoste. Metafora di Recovery: ciò che si è rotto diventa parte di un nuovo insieme."
- front: "Autodeterminazione nella lettura"
  back: "Tu scegli cosa leggi. Tu scegli il tuo ritmo. Puoi rientrare ovunque."
:::

:::standard{reading_time=2}
Bello che tu sia qui.

Questo workbook è scritto per te — se in questo momento stai vivendo un periodo difficile, se hai ricevuto una diagnosi o se vivi da tempo con un disturbo psichico.

Forse sei all'inizio. Forse hai già alle spalle molte terapie. Forse stai cercando un linguaggio nuovo per ciò che vivi — o semplicemente qualcuno che non voglia aggiustare, ma che ti cammini accanto.

Non devi portare nulla con te. Nessuna conoscenza preliminare, nessuna giornata buona, nessuna storia già finita. Leggi ciò che ti parla. Lascia ciò che ora non fa per te. Torna quando vuoi.

Un'immagine che ci piace usare è Kintsugi — l'arte giapponese della riparazione. Le ceramiche rotte vengono ricomposte con l'oro. Le linee di frattura non vengono nascoste, ma rese visibili. Il vaso non vale meno per la rottura — agli occhi di molti, vale di più.

Recovery segue una logica simile. Non si tratta di cancellare ciò che è stato. Si tratta di permettere a ciò che si è rotto di diventare parte di un nuovo insieme.

Qualche indicazione prima di cominciare:

- Sei tu a decidere ritmo e ordine.
- Ci sono diverse modalità di lettura: facile, standard, approfondita.
- Puoi entrare e uscire ovunque.
- Se qualcosa diventa troppo: mettilo via. Non è arrendersi — è prendersi cura di sé.

Nessuno ti spinge. Questo spazio è il tuo.
:::

:::standard-quiz{id=q-willkommen-std}
- q: "Chi decide ritmo e ordine?"
  type: multiple-choice
  options:
    - text: "L'app."
      correct: false
    - text: "Tu."
      correct: true
      explanation: "Puoi saltare, mettere via, tornare."
    - text: "L'ordine è prestabilito."
      correct: false

- q: "Cosa significa Kintsugi come immagine per Recovery?"
  type: multiple-choice
  options:
    - text: "Le linee di frattura vanno rese il più invisibili possibile."
      correct: false
    - text: "Le linee di frattura diventano visibili — e parte di un nuovo insieme."
      correct: true
      explanation: "Recovery non significa cancellare tutto. Ciò che è stato può diventare parte del nuovo."
:::

:::standard-flashcards{id=f-willkommen-std}
- front: "Il tuo ritmo"
  back: "Decidi tu cosa leggi e quando. Saltare, mettere via, tornare — tutto è permesso."
- front: "Kintsugi"
  back: "Arte giapponese della riparazione: linee di frattura ricomposte con l'oro. Metafora di Recovery — ciò che si è rotto diventa parte di un nuovo insieme."
- front: "Quando qualcosa diventa troppo"
  back: "Mettilo via. Non è arrendersi — è prendersi cura di sé."
:::


# 1. Cosa significa davvero Recovery
{#kap-1 reading_time=5}

## La parola e la sua storia

La parola inglese recovery significa letteralmente guarigione, riacquisizione, ripresa. Nella salute mentale si è affermata dagli anni '80 come termine ombrello per un nuovo sguardo sulla sofferenza psichica [^anthony1993] [^deegan1988].

Recovery non è in primo luogo un termine medico. Nasce dalle esperienze di persone che avevano ricevuto diagnosi psichiatriche e che si sono rifiutate di lasciarsi ridurre a esse [^chamberlin1978] [^deegan1988].

## La definizione classica

La definizione più citata è di William Anthony, all'epoca direttore del Center for Psychiatric Rehabilitation della Boston University.

:::quote{author="Anthony, 1993, p. 15" source="anthony1993" lang="en"}
Recovery is described as a deeply personal, unique process of changing one's attitudes, values, feelings, goals, skills, and/or roles. It is a way of living a satisfying, hopeful, and contributing life even with limitations caused by illness.
:::

:::quote-translation{source="anthony1993" translator="traduzione propria"}
Recovery è un processo di cambiamento profondamente personale e unico — dei propri atteggiamenti, valori, sentimenti, obiettivi, capacità o ruoli. È un modo di vivere in cui, anche con le limitazioni dovute alla malattia, si può condurre una vita appagante, ricca di speranza, e dare un contributo.
:::

Questa definizione è da oltre tre decenni il punto di riferimento internazionale. È stata adottata, tra gli altri, da SAMHSA [^samhsa2012], plasmata dalla tradizione del Sainsbury Centre for Mental Health e integrata nelle linee guida dell'OMS [^who2021].

## Guarigione clinica e guarigione personale

La ricerca distingue due concetti [^slade2009]:

- **Guarigione clinica** (clinical recovery): i sintomi diminuiscono o spariscono, la diagnosi perde rilevanza. È la comprensione che viene dalla medicina.
- **Guarigione personale** (personal recovery): vivi la tua vita come ricca di senso, degna di essere vissuta e autodeterminata — indipendentemente dal fatto che tutti i sintomi siano scomparsi.

Recovery in questo workbook si riferisce soprattutto alla guarigione personale. Può accompagnarsi alla guarigione clinica, ma non deve farlo per forza.

## Definizioni dall'area di lingua tedesca

:::quote{author="Fondazione Pro Mente Sana Svizzera, 2024" source="promentesana"}
La descrizione più breve di Recovery è: condurre la migliore vita possibile, anche di fronte a una grave sofferenza psichica.
:::

Amering e Schmolke parlano della «fine dell'inguaribilità» [^ameringschmolke2012]. Si appoggiano alla ricerca longitudinale che mostra: anche dopo malattie gravi come la schizofrenia, una vita piena è possibile. Knuf intende Recovery come processo di confronto con sé e con la malattia — con l'obiettivo di condurre, nonostante i problemi psichici, una vita speranzosa e attiva [^knuf2026].

La linea guida tedesca S3 «Terapie psicosociali nei disturbi psichici gravi» ha portato Recovery nel mainstream dell'assistenza in area germanofona, definendo l'orientamento Recovery come principio guida [^dgppn2019].

:::reflection{id=1 title="Cosa significa guarigione per te?"}
- Quando senti la parola guarigione — quale immagine sale per prima?
- Quale delle definizioni qui sopra ti parla di più? E perché?
- Cosa sarebbe per te una «buona vita» — anche se non tutto fosse «sparito»?
:::

:::easy{reading_time=2}
Recovery significa: guarigione.

Ma Recovery non significa: tutti i sintomi devono sparire.

Recovery significa: vivi bene. Anche se vivi ancora cose difficili.

Esistono due tipi di guarigione:

- I sintomi diminuiscono. Questa è la guarigione clinica.
- Vivi la tua vita come buona e ricca di senso. Questa è la guarigione personale.

Entrambe sono possibili. Possono esserci insieme.

Una fondazione svizzera dice: Recovery significa condurre la migliore vita possibile. Anche se c'è qualcosa di difficile.

:::reflection{id=1-easy title="Chiediti"}
- Cosa significa una buona vita per te?
- Cosa ti serve per averla? E cosa no?
:::
:::

:::quiz{id=q-1}
- q: "Cosa significa Recovery?"
  type: multiple-choice
  options:
    - text: "Tutti i sintomi devono sparire."
      correct: false
      explanation: "No. La guarigione personale può funzionare anche con sintomi persistenti."
    - text: "Condurre una vita ricca di senso e autodeterminata — anche se restano dei sintomi."
      correct: true
      explanation: "Esatto. È il cuore della guarigione personale (Anthony 1993)."
    - text: "Un metodo terapeutico specifico."
      correct: false

- q: "Quali due tipi di guarigione distingue la ricerca?"
  type: multiple-choice
  options:
    - text: "Guarigione rapida e lenta."
      correct: false
    - text: "Guarigione clinica e personale."
      correct: true
      explanation: "Clinica = sintomi via. Personale = vita con senso."
    - text: "Guarigione terapeutica e farmacologica."
      correct: false
:::

:::flashcards{id=f-1}
- front: "Guarigione clinica"
  back: "I sintomi diminuiscono o spariscono. La diagnosi perde rilevanza. Comprensione medica della guarigione."
- front: "Guarigione personale"
  back: "Vivi la tua vita come ricca di senso, degna di essere vissuta e autodeterminata — indipendentemente dal fatto che tutti i sintomi siano scomparsi."
- front: "Anthony 1993 — il cuore della definizione"
  back: "Recovery è un processo profondamente personale e unico di cambiamento di atteggiamenti, valori, sentimenti, obiettivi e ruoli — una via verso una vita piena, anche con limitazioni."
- front: "Pro Mente Sana — la definizione più breve"
  back: "Condurre la migliore vita possibile — anche di fronte a una grave sofferenza psichica."
:::

:::standard{reading_time=2}
Recovery è una parola inglese. Letteralmente significa guarigione, riacquisizione, ripresa. Nella salute mentale, dagli anni '80, è il termine ombrello per un nuovo sguardo sulla sofferenza psichica — uno sguardo che non è stato inventato dai medici, ma dalle persone con esperienza diretta.

La definizione classica viene da William Anthony, ricercatore di Boston: Recovery è un processo profondamente personale di cambiamento dei propri atteggiamenti, valori, obiettivi e ruoli — un modo di condurre una vita piena, ricca di speranza, anche con le limitazioni di una malattia.

La ricerca distingue due letture:

- **Guarigione clinica:** i sintomi diminuiscono o scompaiono. La diagnosi perde il suo peso. È la prospettiva medica.
- **Guarigione personale:** vivi la tua vita come ricca di senso, degna di essere vissuta e autodeterminata — indipendentemente dal fatto che ci siano ancora sintomi.

Recovery, nel senso di questo workbook, si riferisce soprattutto alla guarigione personale. Può accompagnarsi alla guarigione clinica, ma non è obbligatorio. Entrambe possono coesistere. Ed entrambe possono avere il proprio ritmo.

La fondazione svizzera Pro Mente Sana lo riassume in una frase: Recovery significa condurre la migliore vita possibile — anche di fronte a una grave sofferenza psichica.

L'importante è: sei più della tua diagnosi. Sei prima di tutto persona — il resto viene dopo. E non devi percorrere questa via da solo, da sola. Altri possono accompagnarti.
:::

:::standard-quiz{id=q-1-std}
- q: "Cosa significa Recovery soprattutto?"
  type: multiple-choice
  options:
    - text: "Essere guariti. Niente più sintomi."
      correct: false
      explanation: "Sarebbe la guarigione clinica. Recovery significa di più — soprattutto guarigione personale."
    - text: "Una vita piena — anche con i sintomi."
      correct: true
      explanation: "Esattamente la definizione classica di Anthony (1993)."
    - text: "Un metodo terapeutico specifico."
      correct: false

- q: "Quali due tipi di guarigione distingue la ricerca?"
  type: multiple-choice
  options:
    - text: "Guarigione rapida e lenta."
      correct: false
    - text: "Guarigione clinica e personale."
      correct: true
      explanation: "Clinica = sintomi via. Personale = condurre una vita ricca di senso."

- q: "Chi ha sviluppato Recovery come concetto?"
  type: multiple-choice
  options:
    - text: "Soprattutto medici e aziende farmaceutiche."
      correct: false
    - text: "Persone con propria esperienza di psichiatria — insieme alla ricerca."
      correct: true
      explanation: "Il movimento nasce dalle esperienze delle persone con vissuto diretto."
:::

:::standard-flashcards{id=f-1-std}
- front: "Recovery (definizione centrale)"
  back: "Condurre una vita piena, ricca di speranza — anche con le limitazioni di una malattia (Anthony 1993)."
- front: "Guarigione clinica"
  back: "I sintomi diminuiscono o scompaiono. La diagnosi perde il suo peso."
- front: "Guarigione personale"
  back: "Vivi la tua vita come ricca di senso, degna e autodeterminata — indipendentemente dal fatto che i sintomi restino."
- front: "Pro Mente Sana — la definizione più breve"
  back: "Condurre la migliore vita possibile, anche di fronte a una grave sofferenza psichica."
:::


# 2. «Speranza — Potere — Significato»
{#kap-2 reading_time=3}

Nel 2006 Michaela Amering e Margit Schmolke pubblicarono sulla rivista svizzera Managed Care un articolo intitolato «Speranza — Potere — Significato. Concetti di Recovery in psichiatria» [^ameringschmolke2006]. Con questo hanno plasmato in modo decisivo la lettura germanofona di Recovery.

La triade «Speranza — Potere — Significato» riassume, dalla prospettiva D-A-CH, di cosa parla Recovery — come traduzione efficace e vicina al quotidiano dei concetti chiave inglesi.

| Italiano | Inglese | Significato nel contesto D-A-CH |
|----------|---------|---------------------------------|
| **Speranza** | Hope | Ritrovare un senso di sé anche indipendente dalla malattia — la speranza come risorsa terapeutica. |
| **Potere** | Empowerment | Capacitazione, libertà di scelta, responsabilità propria — «potere» nel senso di riappropriazione del proprio spazio d'azione [^knufseibert2004]. |
| **Significato** | Meaning | Valori, obiettivi, contributo, appartenenza — definire la vita oltre il ruolo di paziente. |

La speranza, in questa accezione, è strettamente legata al senso di sé: a un'autostima che resiste al di là dell'esperienza di malattia, e a un'identità che è più del ruolo di paziente [^ameringschmolke2006].

I tre termini si armonizzano con la definizione di Recovery di Anthony [^anthony1993]. E corrispondono al cuore del modello CHIME [^leamy2011]: Speranza = Hope, Potere = Empowerment, Significato = Meaning. La connessione (Connectedness) e l'identità (Identity) costituiscono la cornice relazionale e di sé.

:::easy{reading_time=1}
Due ricercatrici hanno trovato tre parole per dire Recovery:

- **Speranza** — Credi che possa migliorare.
- **Potere** — Puoi decidere. Non sei solo paziente.
- **Significato** — La tua vita ha valore. Ne fai parte.

Queste tre parole sono la lettura tedesca del modello inglese CHIME. Anche la connessione con altri e una propria identità ne fanno parte.
:::

:::quiz{id=q-2}
- q: "Cosa significa 'Potere' in questa lettura?"
  type: multiple-choice
  options:
    - text: "Esercitare potere sugli altri."
      correct: false
    - text: "Capacitazione — il diritto di co-decidere sulla propria vita."
      correct: true
      explanation: "'Potere' significa qui Empowerment nel senso positivo — non potere sugli altri."
    - text: "Poteri medici."
      correct: false

- q: "Chi ha introdotto la triade 'Speranza — Potere — Significato'?"
  type: multiple-choice
  options:
    - text: "Patricia Deegan"
      correct: false
    - text: "Amering & Schmolke (2006)"
      correct: true
      explanation: "Nella rivista svizzera Managed Care, 2006."
    - text: "L'OMS"
      correct: false
:::

:::flashcards{id=f-2}
- front: "Speranza — Potere — Significato"
  back: "La lettura germanofona di Recovery, introdotta da Amering & Schmolke nel 2006. Corrisponde a Hope, Empowerment, Meaning nel modello CHIME."
- front: "Potere (nel senso Recovery)"
  back: "Capacitazione — il diritto di co-decidere sulla propria vita. Non potere sugli altri."
:::

:::standard{reading_time=2}
Recovery è una parola inglese che si traduce con difficoltà in altre lingue. Le psichiatre austriache Michaela Amering e Margit Schmolke hanno proposto nel 2006, sulla rivista svizzera Managed Care, tre parole tedesche che colgono il cuore — una triade oggi diffusa nell'area D-A-CH:

- **Speranza** — la fede che la tua vita possa essere più della malattia. Un senso di sé che resta anche indipendente dai sintomi.
- **Potere** — capacitazione. Non potere sugli altri, ma potere sulla propria vita. Poter co-decidere. Libertà di scelta. Responsabilità propria.
- **Significato** — valori, obiettivi, appartenenza. Poter definire la vita oltre il ruolo di paziente.

Queste tre parole si armonizzano con la definizione classica di Recovery. Corrispondono anche a parti centrali del modello di Recovery più influente a livello internazionale, il modello CHIME:

- Speranza = Hope
- Potere = Empowerment
- Significato = Meaning

Connessione (Connectedness) e Identità (Identity) costituiscono la cornice circostante — relazioni e immagine di sé come terreno su cui Speranza, Potere e Significato possono crescere.

Non devi sentire tutti e tre contemporaneamente. A volte c'è solo speranza, a volte solo significato. A volte comincia con il potere — con una singola decisione che prendi tu. È abbastanza. Recovery non è una lista da spuntare.
:::

:::standard-quiz{id=q-2-std}
- q: "Cosa significa 'Potere' in questa lettura?"
  type: multiple-choice
  options:
    - text: "Esercitare potere sugli altri."
      correct: false
    - text: "Capacitazione — il diritto di co-decidere sulla propria vita."
      correct: true
      explanation: "'Potere' significa qui Empowerment nel senso positivo."
    - text: "Poteri medici."
      correct: false

- q: "Chi ha introdotto la triade «Speranza — Potere — Significato»?"
  type: multiple-choice
  options:
    - text: "Patricia Deegan"
      correct: false
    - text: "Amering e Schmolke (2006)"
      correct: true
      explanation: "Nella rivista svizzera Managed Care."
    - text: "L'OMS"
      correct: false
:::

:::standard-flashcards{id=f-2-std}
- front: "Speranza — Potere — Significato"
  back: "La lettura tedesca di Recovery (Amering e Schmolke 2006). Corrisponde a Hope, Empowerment, Meaning nel modello CHIME."
- front: "Potere nel senso Recovery"
  back: "Capacitazione — il diritto di co-decidere sulla propria vita. Non potere sugli altri."
- front: "Speranza nel senso Recovery"
  back: "La fede che la tua vita possa essere più della malattia. Un senso di sé che resta anche senza assenza di sintomi."
:::


# 3. Cosa NON è Recovery — sei miti
{#kap-3 reading_time=5}

Recovery viene spesso frainteso nel quotidiano.

## Mito 1: Recovery significa che tutti i sintomi devono sparire

Falso. Anche persone con sintomi persistenti possono vivere Recovery [^anthony1993] [^deegan1996] [^andresen2003]. La guarigione personale può coesistere con i sintomi.

## Mito 2: Recovery significa semplicemente pensare positivo

Falso. Recovery non è un appello all'ottimismo a comando. La speranza nella ricerca sul Recovery indica una convinzione realistica, spesso anche caparbia, che il cambiamento sia possibile [^slade2013] [^schrank2012].

## Mito 3: Recovery significa farne a meno di farmaci o terapia

Falso. Recovery non è un movimento antimedico. Significa che TU partecipi alle decisioni su ciò che aiuta [^deegandrake2006] [^slade2017sdm]. Amering e Schmolke lo dicono così: l'accettazione dei farmaci o di una diagnosi specifica non dovrebbe essere l'unico presupposto per il sostegno psicosociale [^ameringschmolke2006].

## Mito 4: Recovery è una via dritta e prevedibile

Falso. Andresen, Oades e Caputi [^andresen2003] e molti altri mostrano: Recovery quasi mai procede in modo lineare. Le ricadute fanno parte del cammino — non sono la fine, sono parte del viaggio.

## Mito 5: Chi non «guarisce» è colpa sua

Falso. Recovery non è un concetto di prestazione e non è un giudizio morale. La via dipende da molti fattori — relazioni, cure, condizioni socio-economiche, traumi, casualità [^leboutillier2011].

## Mito 6: Un disturbo psichico è «inguaribile» — «cronico»

Falso e dannoso. Studi longitudinali come il Vermont study [^harding1987] e review più recenti [^lally2017] mostrano: la guarigione — anche da diagnosi gravi — è possibile regolarmente.

Amering e Schmolke mettono in guardia con forza da queste etichette [^ameringschmolke2012]: frasi come «Lei è troppo malato per la psicoterapia» o, all'opposto, «Tutto tornerà come prima» sono — a loro avviso — non solo false, ma letteralmente «pericolosissime». Previsioni di questo tipo tolgono alle persone lo spazio d'azione prima ancora che possano usarlo.

Heinz Katschnig ha trovato un'immagine forte: la disperazione — comunicata dall'esterno e spesso interiorizzata — sarebbe la forma più insidiosa di catene in psichiatria. È così efficace proprio perché dall'esterno non si vede [^ameringschmolke2012].

:::reflection{id=2 title="Quale mito ti ha toccato?"}
- Quale di questi sei miti è stato a lungo realtà per te?
- Chi te lo ha trasmesso — la famiglia, la scuola, i media, il sistema psichiatrico?
- Cosa cambierebbe se lasciassi andare questo mito oggi?
:::

:::easy{reading_time=2}
Ci sono molte idee sbagliate su Recovery. Sei sono molto comuni:

1. **Falso:** Tutti i sintomi devono sparire. → Recovery va anche con i sintomi.
2. **Falso:** Devi pensare positivo. → Nessun obbligo di buon umore.
3. **Falso:** Niente farmaci. → Decidi tu cosa ti aiuta.
4. **Falso:** La via è dritta. → Le ricadute fanno parte del cammino.
5. **Falso:** Chi non guarisce è colpa sua. → Nessuno ha colpa.
6. **Falso:** Alcuni sono «inguaribili». → La guarigione è possibile anche dopo malattie gravi.
:::

:::quiz{id=q-3}
- q: "Quale affermazione è giusta?"
  type: multiple-choice
  options:
    - text: "Recovery significa che tutti i sintomi devono sparire."
      correct: false
    - text: "Recovery può funzionare anche con sintomi persistenti."
      correct: true
      explanation: "Affermazione centrale di Anthony 1993 e di molti studi successivi."
    - text: "Recovery è possibile solo per malattie lievi."
      correct: false

- q: "Vero o falso: Recovery significa non prendere farmaci."
  type: true-false
  correct: false
  explanation: "Recovery non è un movimento antimedico. Decidi insieme ai professionisti cosa aiuta."

- q: "Cosa dicono studi longitudinali come Harding (1987) e Lally (2017) sulle diagnosi gravi?"
  type: multiple-choice
  options:
    - text: "Sono inguaribili."
      correct: false
    - text: "La guarigione è regolarmente possibile anche dopo decorsi gravi."
      correct: true
      explanation: "È la base della 'fine dell'inguaribilità' di Amering."
:::

:::flashcards{id=f-3}
- front: "Il più grande mito di Recovery"
  back: "Recovery non significa: tutti i sintomi via. Recovery significa: una buona vita — anche con le difficoltà."
- front: "Linearità — falso"
  back: "Recovery non è lineare. Le ricadute fanno parte del cammino e non sono un fallimento."
- front: "'Inguaribile' — falso"
  back: "Gli studi longitudinali (Harding 1987, Lally 2017) mostrano: anche dopo malattie gravi, la guarigione è regolarmente possibile."
- front: "'Pericolosissimo'"
  back: "Amering & Schmolke (2012) sulle prognosi tipo 'Lei è troppo malato per la psicoterapia' — queste etichette rubano spazio d'azione."
:::

:::standard{reading_time=2}
Su Recovery circolano molte immagini false. Sei di queste si incontrano nel quotidiano in modo particolarmente frequente — e tutte e sei sono sbagliate.

- **«Recovery significa che tutti i sintomi devono sparire.»** Non è vero. Anche persone con sintomi persistenti possono condurre una vita piena. La guarigione personale può coesistere con i sintomi.
- **«Recovery significa pensare sempre positivo.»** Falso. Recovery non è un appello all'ottimismo a comando. La speranza nella ricerca sul Recovery è una convinzione realistica, spesso caparbia — non un buon umore forzato.
- **«Recovery significa farne a meno dei farmaci.»** Falso. Recovery non è un movimento antimedico. Significa che SEI TU a co-decidere cosa aiuta — e cosa no.
- **«Recovery è una via dritta, prevedibile.»** Falso. Recovery quasi mai procede in modo lineare. Le ricadute fanno parte del cammino. Non sono un fallimento, ma parte del viaggio.
- **«Chi non guarisce è colpa sua.»** Falso. Recovery non è un concetto di prestazione e non è un giudizio morale. La via dipende da molti fattori: relazioni, cure, condizioni socio-economiche, trauma, casualità.
- **«I disturbi psichici gravi sono inguaribili.»** Falso — e pericoloso. Gli studi longitudinali mostrano da decenni: la guarigione è regolarmente possibile anche dopo diagnosi gravi.

Amering e Schmolke definiscono frasi come «Lei è troppo malato per la psicoterapia» o «Tornerà come prima» persino «pericolosissime». Previsioni di questo tipo ti rubano lo spazio d'azione prima ancora che tu possa usarlo.

La disperazione, comunicata dall'esterno e interiorizzata — sono le catene più insidiose della psichiatria. Proprio perché invisibili.
:::

:::standard-quiz{id=q-3-std}
- q: "Quale affermazione è giusta?"
  type: multiple-choice
  options:
    - text: "Recovery significa che tutti i sintomi devono sparire."
      correct: false
    - text: "Recovery può funzionare anche con sintomi persistenti."
      correct: true
      explanation: "Affermazione centrale dai tempi di Anthony 1993."
    - text: "Recovery è possibile solo per malattie lievi."
      correct: false

- q: "Di chi è la colpa se Recovery è difficile?"
  type: multiple-choice
  options:
    - text: "Tua — non ti stai impegnando abbastanza."
      correct: false
    - text: "Di nessuno. Recovery non è una gara né un giudizio morale."
      correct: true
      explanation: "La via dipende da molti fattori — non dalla sola forza di volontà."

- q: "Cosa dicono gli studi longitudinali sulle diagnosi «inguaribili»?"
  type: multiple-choice
  options:
    - text: "Inguaribile resta inguaribile."
      correct: false
    - text: "La guarigione è regolarmente possibile anche dopo decorsi gravi."
      correct: true
      explanation: "Vermont Study (Harding 1987), meta-analisi attuali (Lally 2017)."
:::

:::standard-flashcards{id=f-3-std}
- front: "Il più grande mito di Recovery"
  back: "«Tutti i sintomi devono sparire.» — Non è vero. Recovery significa condurre una buona vita, anche con difficoltà."
- front: "Linearità — falso"
  back: "Recovery quasi mai procede in modo lineare. Le ricadute fanno parte del cammino e non sono un fallimento."
- front: "«Inguaribile» — falso"
  back: "Gli studi longitudinali mostrano: anche dopo malattie gravi, la guarigione è regolarmente possibile."
- front: "«Pericolosissimo»"
  back: "Amering e Schmolke sulle prognosi come «Lei è troppo malato per la terapia» — queste etichette rubano spazio d'azione."
:::


# 4. Storia del movimento Recovery
{#kap-4 reading_time=6}

## Le voci delle persone con esperienza diretta — anni '70 e '80

Il movimento Recovery non è nato in un istituto di ricerca. È nato negli anni '70 in Nord America, dalle iniziative di ex-pazienti psichiatrici — il cosiddetto Ex-Patient o Survivor-Movement [^chamberlin1978].

Una delle voci centrali è Patricia Deegan. A 17 anni ricevette la diagnosi di schizofrenia e sentì da un medico che non avrebbe mai condotto una vita normale. Oggi è psicologa con dottorato, ricercatrice e pioniera del Recovery riconosciuta a livello internazionale [^deegan1988] [^deegan1996].

Patricia Deegan ha formulato due idee centrali che da allora segnano il movimento Recovery internazionale [^deegan1996]:

- Recovery non è un punto d'arrivo né una semplice stabilizzazione, ma una trasformazione — un cammino in cui si riconoscono i propri limiti e contemporaneamente si scoprono nuove possibilità.
- Le persone con disturbi psichici non sono ricevitori passivi di aiuto, ma soggetti capaci di agire, che attraverso il proprio fare possono cambiare la loro situazione.

## Dorothea Buck, Trialog e uditori di voci

Nell'area germanofona, Dorothea Buck ha spianato un cammino analogo. Lei stessa sterilizzata coattivamente dal regime nazista e ricoverata più volte in psichiatria, ha lottato per tutta la vita per una psichiatria umana [^buck1990].

Nel 1989 ad Amburgo, su iniziativa di Thomas Bock, è nato il primo seminario trialogico sulla psicosi — un formato in cui persone con esperienza diretta, familiari e professionisti parlano alla pari [^bockpriebe2005]. Nel 1992 si è costituita l'associazione federale tedesca delle persone con esperienza di psichiatria (BPE). La rete internazionale Hearing Voices è attiva dagli anni '90 in Germania, Austria e Svizzera [^hvn].

## La validazione scientifica — anni '90 e 2000

William Anthony con un articolo chiave del 1993 fornì la definizione scientifica [^anthony1993]. Andresen, Oades e Caputi svilupparono in Australia il modello a cinque fasi della guarigione psicologica [^andresen2003].

## Dal concetto al sistema — dal 2007

Nel 2007 in Gran Bretagna è partito il programma ImROC (Implementing Recovery through Organisational Change). Da allora ha accompagnato centinaia di servizi nella trasformazione verso una pratica orientata al Recovery [^imroc] [^perkins2012].

Negli USA, Recovery è diventato nel 2006 linea guida ufficiale dell'autorità nazionale SAMHSA. La Convenzione ONU sui diritti delle persone con disabilità ha ancorato una concezione dei diritti umani orientata all'autodeterminazione [^uncrpd2006]. L'OMS ha pubblicato nel 2019 l'iniziativa QualityRights [^who2019] e nel 2021 la linea guida «Guidance on Community Mental Health Services» [^who2021].

## L'area di lingua tedesca

In Austria, Amering e Schmolke hanno segnato uno spartiacque con l'articolo «Speranza — Potere — Significato» del 2006 [^ameringschmolke2006] e con il libro «Recovery. La fine dell'inguaribilità» del 2012 [^ameringschmolke2012]. In Germania, Andreas Knuf ha pubblicato con Ulrich Seibert già nel 2004 «Promuovere la capacitazione» [^knufseibert2004]; il suo «Recovery ed Empowerment» è oggi alla 2ª edizione [^knuf2026].

EX-IN (Experienced Involvement) è stato sviluppato a partire dal 2005 a Brema — ispirato da Dorothea Buck e da un progetto Leonardo da Vinci finanziato dall'UE [^utschakowski2009]. Dal 2011 EX-IN è coordinato dall'associazione EX-IN Deutschland e.V. [^exin_de]. Un RCT tedesco sul peer support ne ha dimostrato l'efficacia [^mahlke2017].

In Svizzera, la fondazione Pro Mente Sana porta il concetto Recovery nell'assistenza [^promentesana]. Oggi esistono Recovery Colleges, tra gli altri, a Berna, nella Svizzera orientale, a Ginevra, a San Gallo e a Zurigo [^rcbern]. L'orientamento Recovery nella psichiatria svizzera è stato ancorato scientificamente, tra gli altri, da Rössler [^roessler2004].

:::easy{reading_time=2}
Recovery non è stato inventato in ospedale. Recovery è stato inventato dalle persone con esperienza diretta.

In America, negli anni '70, alcune pazienti e alcuni pazienti hanno iniziato a scrivere libri. Dicevano: siamo più della nostra malattia.

Una voce famosa è Patricia Deegan. A 17 anni le diagnosticarono schizofrenia. Oggi è dottoressa e aiuta altri.

In Germania, Dorothea Buck è stata importante. Ha lottato per una psichiatria migliore.

Oggi Recovery è riconosciuto in tutto il mondo — anche dall'OMS.
:::

:::quiz{id=q-4}
- q: "Chi ha plasmato il movimento Recovery agli inizi?"
  type: multiple-choice
  options:
    - text: "L'industria farmaceutica."
      correct: false
    - text: "Persone con esperienza diretta di psichiatria."
      correct: true
      explanation: "Il movimento è nato negli USA degli anni '70 dal Survivor-Movement."
    - text: "Le amministrazioni ospedaliere."
      correct: false

- q: "Chi è Patricia Deegan?"
  type: multiple-choice
  options:
    - text: "Una medica senza esperienza diretta."
      correct: false
    - text: "Una pioniera del Recovery con propria diagnosi di schizofrenia."
      correct: true
      explanation: "Diagnosticata a 17 anni. Oggi psicologa con dottorato e voce internazionalmente riconosciuta."
    - text: "Una ricercatrice infermieristica svizzera."
      correct: false
:::

:::flashcards{id=f-4}
- front: "Patricia Deegan"
  back: "A 17 anni diagnosi di schizofrenia, oggi psicologa con dottorato. Voce di riferimento del movimento Recovery internazionale."
- front: "Dorothea Buck"
  back: "Pioniera tedesca, sterilizzata coattivamente dai nazisti. Ha lottato tutta la vita per una psichiatria umana. Ha ispirato EX-IN."
- front: "Survivor-Movement"
  back: "Movimento di ex-pazienti psichiatrici negli USA degli anni '70. Radice del movimento Recovery."
- front: "ImROC"
  back: "Implementing Recovery through Organisational Change. Programma britannico dal 2007, accompagna servizi nella trasformazione verso una pratica orientata al Recovery."
:::

:::standard{reading_time=2}
Recovery non è nato nell'aula universitaria e non è nato nello studio del clinico. Recovery è nato nella strada — nelle iniziative di ex-pazienti che si sono rifiutati di lasciarsi ridurre alla loro diagnosi.

Il movimento è cominciato negli anni '70 in Nord America, nel cosiddetto Survivor-Movement. Una delle sue voci più importanti è Patricia Deegan. A 17 anni ricevette la diagnosi di schizofrenia. Un medico le disse che non avrebbe mai condotto una vita normale. Oggi è psicologa con dottorato e una delle pioniere di Recovery più influenti al mondo.

Nell'area germanofona, Dorothea Buck è stata una voce simile. Lei stessa sterilizzata coattivamente durante il nazismo e ricoverata più volte in psichiatria, ha lottato per tutta la vita per una psichiatria umana. Nel 1989 ad Amburgo, su iniziativa di Thomas Bock, è nato il primo seminario trialogico sulla psicosi — un formato in cui persone con esperienza diretta, familiari e professionisti parlano alla pari.

Tappe importanti da allora:

- **1993** — William Anthony fornisce la definizione scientifica di Recovery.
- **2003** — Ricercatori australiani descrivono cinque fasi della guarigione.
- **2007** — In Gran Bretagna parte il programma ImROC, che orienta i servizi al Recovery.
- **2011** — Viene pubblicato il modello CHIME, che diventa standard internazionale.
- **2021** — L'OMS pubblica la sua linea guida per un'assistenza alla salute mentale basata sui diritti umani.

In Svizzera, la fondazione Pro Mente Sana porta il concetto Recovery nei servizi. Recovery Colleges esistono oggi a Berna, nella Svizzera orientale, a Ginevra, a San Gallo e a Zurigo. In Germania, EX-IN — Experienced Involvement — ha consolidato come professione la facilitazione di Recovery.

Recovery non è dunque da tempo più un'idea marginale. È pratica vissuta da migliaia di persone.
:::

:::standard-quiz{id=q-4-std}
- q: "Chi ha plasmato il movimento Recovery agli inizi?"
  type: multiple-choice
  options:
    - text: "L'industria farmaceutica."
      correct: false
    - text: "Persone con propria esperienza di psichiatria."
      correct: true
      explanation: "Il movimento è nato negli anni '70 dal Survivor-Movement."
    - text: "Le amministrazioni ospedaliere."
      correct: false

- q: "Chi è Patricia Deegan?"
  type: multiple-choice
  options:
    - text: "Una medica senza esperienza diretta."
      correct: false
    - text: "Una pioniera del Recovery con propria diagnosi di schizofrenia, oggi psicologa con dottorato."
      correct: true
      explanation: "Diagnosticata a 17 anni, oggi voce internazionale del movimento Recovery."

- q: "Cos'è EX-IN?"
  type: multiple-choice
  options:
    - text: "Una classe di farmaci."
      correct: false
    - text: "Experienced Involvement — la facilitazione di Recovery come professione riconosciuta."
      correct: true
      explanation: "Sviluppata a partire dal 2005 a Brema, ispirata da Dorothea Buck."
:::

:::standard-flashcards{id=f-4-std}
- front: "Dove è nato Recovery?"
  back: "Non nell'aula universitaria. Nelle iniziative di ex-pazienti psichiatrici — il Survivor-Movement degli anni '70 in Nord America."
- front: "Patricia Deegan"
  back: "A 17 anni diagnosi di schizofrenia, oggi psicologa con dottorato. Una delle voci più influenti del movimento Recovery."
- front: "Trialog"
  back: "Formato in cui persone con esperienza diretta, familiari e professionisti parlano alla pari. Nato nel 1989 ad Amburgo (Thomas Bock)."
- front: "Recovery Colleges in Svizzera"
  back: "Berna, Svizzera orientale, Ginevra, San Gallo, Zurigo. Luoghi di apprendimento su Recovery — aperti a tutti."
:::


# 5. CHIME e CHIME-D
{#kap-5 reading_time=6}

Nel 2011 un gruppo di ricerca attorno a Mary Leamy e Mike Slade al King's College London ha analizzato sistematicamente 97 articoli scientifici e 87 ulteriori resoconti su percorsi di guarigione [^leamy2011]. Volevano sapere: cosa descrivono le persone, sempre di nuovo, quando raccontano il loro cammino attraverso un disturbo psichico?

Sono emersi cinque processi le cui iniziali inglesi formano la parola CHIME — la parola inglese per «scampanio».

:::table{name="CHIME"}
| Lettera | Processo | Cosa significa |
|---------|----------|---------------|
| **C** | Connectedness · Connessione | Relazioni, contatti tra pari, famiglia, appartenenza, comunità |
| **H** | Hope and Optimism · Speranza | Credere nel cambiamento, motivazione, fiducia nel processo, modelli |
| **I** | Identity · Identità | Chi sono al di là della diagnosi? Immagine positiva di sé, autostima |
| **M** | Meaning and Purpose · Significato | Senso della vita, valori, ruoli, obiettivi, eventualmente spiritualità |
| **E** | Empowerment · Autoefficacia | Assumersi responsabilità, decidere, usare le proprie forze |
:::

CHIME è oggi il modello di Recovery più influente al mondo. Bird et al. ne hanno confermato l'applicabilità in uno studio di validazione [^bird2014]. È alla base del trial britannico REFOCUS, uno studio cluster-randomizzato [^slade2015refocus].

CHIME non è un modello a tappe e non è una lista di controllo. Descrive cinque temi che si sovrappongono. A volte uno è in primo piano, a volte un altro. In area germanofona, CHIME si lascia ben collegare alla lettura «Speranza — Potere — Significato» [^ameringschmolke2006].

## CHIME-D — la sesta dimensione: Difficoltà

Un importante sviluppo del modello è CHIME-D. Stuart, Tansey e Quayle, in una sintesi sistematica best-fit della letteratura qualitativa sul Recovery, hanno constatato che nel framework originario CHIME mancava una dimensione che invece compare regolarmente nei resoconti esperienziali: il riconoscimento esplicito delle Difficoltà (Difficulties) — trauma, perdite, stigmatizzazione e conseguenze della malattia [^stuart2017].

Hanno quindi integrato il modello con la lettera D:

- **C** — Connectedness · Connessione
- **H** — Hope · Speranza
- **I** — Identity · Identità
- **M** — Meaning · Significato
- **E** — Empowerment · Autoefficacia
- **D** — Difficulties · Difficoltà: riconoscere esplicitamente trauma, perdite, stigma e conseguenze della malattia

Le analisi mostrano che, in media, circa il 54 % del contenuto dei racconti di Recovery riguarda difficoltà vissute [^stuart2017]. Per questo CHIME-D ammonisce: l'orientamento Recovery non deve scivolare in un ottimismo tossico. Deve lasciare spazio al dolore, al lutto, a ciò che davvero c'è stato ed è — e parallelamente tenere lo sguardo sulle risorse e sul cambiamento.

La ricerca attuale valida CHIME-D come cornice di riferimento solida per un'assistenza orientata al Recovery [^vanweeghel2024] [^hancock2025].

:::info{type=note title="Perché CHIME-D è importante per questo workbook"}
I concetti di Recovery vengono talvolta criticati perché potrebbero minimizzare la sofferenza o generare un «dovere di sperare».

CHIME-D prende sul serio questa critica: guarire non deve significare che la fatica non abbia più posto.

Nel workbook digitale questo significa: spazio per il dolore E per la speranza. Per le perdite E per gli obiettivi. Per ciò che è stato E per ciò che può diventare.
:::

:::reflection{id=3 title="Dove stai dentro CHIME?"}
- Quale lettera (C, H, I, M, E) ti parla di più in questo momento?
- Quale ti sembra più difficile in questo momento?
- Se pensi alle ultime due settimane: dov'è stato un piccolo bagliore — e a quale lettera lo assoceresti?
:::

:::easy{reading_time=2}
Nel 2011 alcuni ricercatori hanno trovato cinque temi importanti del Recovery. Le iniziali inglesi formano la parola CHIME (in inglese: scampanio):

- **C** — Connectedness · Connessione
- **H** — Hope · Speranza
- **I** — Identity · Identità
- **M** — Meaning · Significato
- **E** — Empowerment · Autoefficacia

Più tardi si è aggiunta un'altra lettera:

- **D** — Difficulties · Difficoltà

La D è importante. Recovery non deve minimizzare la fatica. Il dolore e il lutto possono avere posto.
:::

:::quiz{id=q-5}
- q: "Cosa significa la 'D' in CHIME-D?"
  type: multiple-choice
  options:
    - text: "Diagnosi"
      correct: false
    - text: "Difficulties — Difficoltà (trauma, perdite, stigma)"
      correct: true
      explanation: "Stuart, Tansey & Quayle (2017) hanno mostrato che questa dimensione mancava nel CHIME originario."
    - text: "Depressione"
      correct: false

- q: "Quale lettera sta per 'Connessione'?"
  type: multiple-choice
  options:
    - text: "C — Connectedness"
      correct: true
    - text: "I — Identity"
      correct: false
    - text: "E — Empowerment"
      correct: false

- q: "CHIME è una lista da spuntare?"
  type: true-false
  correct: false
  explanation: "No — CHIME descrive cinque temi che si sovrappongono. A volte uno è in primo piano, a volte un altro."
:::

:::flashcards{id=f-5}
- front: "CHIME"
  back: "Connectedness · Hope · Identity · Meaning · Empowerment. Cinque processi del Recovery (Leamy et al. 2011)."
- front: "La D in CHIME-D"
  back: "Difficulties — difficoltà, trauma, perdite, stigma, conseguenze della malattia. Recovery non deve oscurare la fatica (Stuart et al. 2017)."
- front: "Connectedness"
  back: "Connessione. Relazioni, contatti tra pari, famiglia, appartenenza, comunità."
- front: "Empowerment"
  back: "Autoefficacia. Assumersi responsabilità, prendere decisioni, usare le proprie forze."
:::

:::standard{reading_time=2}
Nel 2011 un gruppo di ricerca al King's College London ha analizzato oltre 180 studi e resoconti e ha chiesto: cosa descrivono le persone, sempre di nuovo, quando raccontano il loro cammino di Recovery? Sono emersi cinque processi — e le loro iniziali inglesi formano la parola CHIME (in inglese: scampanio).

- **C — Connectedness · Connessione:** relazioni, famiglia, contatti tra pari, appartenenza, comunità.
- **H — Hope · Speranza:** credere nel cambiamento. Modelli. Fiducia nel processo.
- **I — Identity · Identità:** chi sono al di là della diagnosi? Un'immagine positiva di sé oltre il ruolo di paziente.
- **M — Meaning · Significato:** valori, obiettivi, ruoli, a volte spiritualità.
- **E — Empowerment · Autoefficacia:** assumere responsabilità. Prendere decisioni. Usare le proprie forze.

CHIME è oggi il modello di Recovery più importante a livello internazionale. Ma non è una lista di controllo e non è una scala. Descrive cinque temi che si sovrappongono. A volte uno è in primo piano, a volte un altro.

## La D in CHIME-D

Nel 2017 alcuni ricercatori hanno constatato: nel modello CHIME manca qualcosa. Qualcosa che compare di continuo nei racconti di Recovery — il riconoscimento esplicito delle difficoltà. Hanno quindi aggiunto una lettera:

- **D — Difficulties · Difficoltà:** trauma, perdite, stigma, conseguenze della malattia.

Le analisi mostrano: circa il 54 % del contenuto dei racconti di Recovery riguarda difficoltà vissute. Per questo CHIME-D ammonisce: Recovery non deve scivolare in un ottimismo forzato. Deve dare spazio al dolore, al lutto e a ciò che davvero è stato — parallelamente allo sguardo sulle risorse.

Per te significa: nel workbook c'è posto per la fatica. Tanto quanto per la speranza.
:::

:::standard-quiz{id=q-5-std}
- q: "Cosa significa la «D» in CHIME-D?"
  type: multiple-choice
  options:
    - text: "Diagnosi"
      correct: false
    - text: "Difficulties — Difficoltà (trauma, perdite, stigma)"
      correct: true
      explanation: "Stuart, Tansey e Quayle hanno mostrato nel 2017 che questa dimensione mancava nel CHIME originario."
    - text: "Depressione"
      correct: false

- q: "Quale lettera sta per «Connessione»?"
  type: multiple-choice
  options:
    - text: "C — Connectedness"
      correct: true
    - text: "I — Identity"
      correct: false
    - text: "E — Empowerment"
      correct: false

- q: "CHIME è una lista da spuntare?"
  type: true-false
  correct: false
  explanation: "No — CHIME descrive cinque temi che si sovrappongono. A volte uno è in primo piano, a volte un altro."
:::

:::standard-flashcards{id=f-5-std}
- front: "CHIME"
  back: "Connectedness · Hope · Identity · Meaning · Empowerment. Cinque processi del Recovery (Leamy et al. 2011)."
- front: "La D in CHIME-D"
  back: "Difficulties — difficoltà, trauma, perdite, stigma. Recovery non deve oscurare la fatica."
- front: "CHIME — lista o no?"
  back: "Non una lista da spuntare. Cinque temi che si sovrappongono. A volte uno è in primo piano, a volte un altro."
- front: "Empowerment"
  back: "Autoefficacia. Assumere responsabilità, prendere decisioni, usare le proprie forze."
:::


# 6. Cinque fasi della guarigione
{#kap-6 reading_time=3}

Se CHIME descrive i cinque processi interni, il modello di Andresen, Oades e Caputi descrive le fasi tipiche del cammino [^andresen2003] [^andresen2006].

:::table{name="Fasi-della-guarigione"}
| Fase | Italiano | Cosa succede dentro |
|------|----------|--------------------|
| **1. Moratorium** | Stallo | Senso di perdita, disperazione, ritiro |
| **2. Awareness** | Risveglio | Prima speranza, riconoscere: non è tutto perduto |
| **3. Preparation** | Preparazione | Fare il punto: cosa so fare, cosa mi serve? |
| **4. Rebuilding** | Ricostruzione | Costruire attivamente nuovi obiettivi, ruoli, relazioni |
| **5. Growth** | Crescita | Una vita piena — con o senza sintomi residui |
:::

Le fasi non sono rigide. È normale attraversare più volte la stessa fase. È anche normale stare in due fasi insieme — crescere in un'area della vita ed essere in stallo in un'altra. Quattro compiti centrali attraversano tutte le fasi [^andresen2003]: trovare speranza, ricostruire identità, trovare significato, assumere responsabilità.

:::easy{reading_time=1}
Recovery ha spesso delle fasi. Tre ricercatori australiani ne hanno descritte cinque:

1. **Stallo** — Tutto sembra pesante e senza speranza.
2. **Risveglio** — Ti accorgi: forse qualcosa si può ancora.
3. **Preparazione** — Guardi cosa sai fare.
4. **Ricostruzione** — Fai nuovi piani.
5. **Crescita** — Vivi la tua vita. Con o senza sintomi.

Puoi saltare tra le fasi. Non è una scala. È più una spirale.
:::

:::quiz{id=q-6}
- q: "Quante fasi descrivono Andresen, Oades e Caputi?"
  type: multiple-choice
  options:
    - text: "Tre"
      correct: false
    - text: "Cinque"
      correct: true
    - text: "Sette"
      correct: false

- q: "Le fasi sono lineari?"
  type: true-false
  correct: false
  explanation: "No. Puoi saltare, attraversare più volte la stessa fase o stare in due fasi insieme."
:::

:::flashcards{id=f-6}
- front: "Moratorium"
  back: "Prima fase: stallo. Senso di perdita, disperazione, ritiro."
- front: "Awareness"
  back: "Fase del risveglio. Prima speranza. Riconoscere: non è tutto perduto."
- front: "Growth"
  back: "Crescita — una vita piena con o senza sintomi residui."
- front: "Quattro compiti di tutte le fasi"
  back: "Trovare speranza · Ricostruire identità · Trovare significato · Assumere responsabilità."
:::

:::standard{reading_time=2}
Recovery procede raramente in linea retta. Tre ricercatori australiani — Andresen, Oades e Caputi — hanno enucleato da molte storie di vita cinque fasi tipiche:

- **Moratorium (Stallo)** — Tutto sembra pesante. Ti senti perso, ti ritiri. La speranza è lontana.
- **Awareness (Risveglio)** — Una prima scintilla: forse non è tutto finito.
- **Preparation (Preparazione)** — Fai il punto. Cosa so fare? Cosa mi serve? Chi c'è?
- **Rebuilding (Ricostruzione)** — Costruisci passo dopo passo nuovi ruoli, obiettivi e relazioni.
- **Growth (Crescita)** — Vivi una vita che senti buona — con o senza sintomi residui.

Importante da sapere: queste fasi non sono una scala. È normale attraversare più volte la stessa fase. È normale essere già in crescita in un'area della vita ed essere di nuovo in stallo in un'altra. Le ricadute fanno parte del cammino. Non significano che hai fallito.

Quattro compiti attraversano tutte le fasi: trovare speranza, ricostruire l'identità, trovare significato, assumere responsabilità.

Chiediti: in quale fase ti senti adesso — forse in più di una contemporaneamente?
:::

:::standard-quiz{id=q-6-std}
- q: "Le cinque fasi sono come una scala — una dopo l'altra?"
  type: multiple-choice
  options:
    - text: "Sì, devi attraversarle nell'ordine."
      correct: false
      explanation: "No — le fasi non sono rigide. Ricadute e salti sono normali."
    - text: "No. Puoi saltare, ripetere o stare in più fasi insieme."
      correct: true
      explanation: "Esatto. Recovery è più una spirale che una scala."

- q: "Quale fase descrive lo stallo all'inizio?"
  type: multiple-choice
  options:
    - text: "Growth"
      correct: false
    - text: "Moratorium"
      correct: true
      explanation: "Moratorium = fase della disperazione e del ritiro."
    - text: "Awareness"
      correct: false
:::

:::standard-flashcards{id=f-6-std}
- front: "Cinque fasi"
  back: "Moratorium · Awareness · Preparation · Rebuilding · Growth. Non sono una scala — salti e ricadute sono normali."
- front: "Quattro compiti in tutte le fasi"
  back: "Trovare speranza · Ricostruire identità · Trovare significato · Assumere responsabilità."
- front: "Ricaduta — cosa significa?"
  back: "Nessun fallimento. È una parte normale del cammino. Recovery è una spirale, non una linea retta."
:::


# 7. Tre livelli di guarigione
{#kap-7 reading_time=3}

Nella ricerca si distinguono tre livelli [^slade2009]:

- **Guarigione clinica**: i sintomi diminuiscono, una diagnosi perde rilevanza.
- **Guarigione funzionale**: torni a poter fare cose che ti sono importanti — lavorare, studiare, coltivare relazioni, occuparti del tuo quotidiano.
- **Guarigione personale**: trovi nuovo significato, una nuova immagine di te, nuova speranza. Ti vivi come qualcuno che può dare direzione alla propria vita — anche se non tutto è «sparito».

I tre livelli possono rafforzarsi a vicenda, ma non devono per forza seguire questo ordine.

:::reflection{id=4 title="Quale livello ti è importante?"}
- Se ti immagini tra un anno una vita che senti buona: cosa sarebbe diverso?
- Quale dei tre livelli — clinico, funzionale, personale — ti sembra ora il più importante?
- C'è qualcosa che facevi volentieri in passato e che vorresti riportare nella vita?
:::

:::easy{reading_time=1}
Ci sono tre tipi di guarigione:

- **Clinico:** I sintomi diminuiscono.
- **Funzionale:** Torni a fare cose: lavorare, studiare, coltivare relazioni.
- **Personale:** Vivi significato e speranza. Co-decidi la tua vita.

Il più importante per Recovery è la guarigione personale.
:::

:::quiz{id=q-7}
- q: "Quale livello è il significato centrale di Recovery?"
  type: multiple-choice
  options:
    - text: "Guarigione clinica"
      correct: false
    - text: "Guarigione funzionale"
      correct: false
    - text: "Guarigione personale"
      correct: true
      explanation: "È la lettura centrale del movimento Recovery."

- q: "I tre livelli devono seguire un ordine preciso?"
  type: true-false
  correct: false
  explanation: "No — possono rafforzarsi a vicenda, ma non devono seguire un ordine fisso."
:::

:::flashcards{id=f-7}
- front: "Tre livelli di guarigione"
  back: "Clinico (sintomi) · funzionale (quotidiano, lavoro, relazioni) · personale (significato, speranza, autodeterminazione)."
- front: "Guarigione personale — la più importante"
  back: "Il cuore del movimento Recovery. Possibile anche quando i sintomi clinici restano."
:::

:::standard{reading_time=2}
Nella ricerca sul Recovery si distingue spesso tra tre livelli di guarigione — e vale la pena tenerli separati:

- **Guarigione clinica** — i sintomi diminuiscono o scompaiono. La diagnosi perde peso. È la lettura della medicina classica.
- **Guarigione funzionale** — torni a poter fare cose che ti sono importanti. Lavorare o studiare. Tenere una casa. Coltivare amicizie. Modellare il tuo quotidiano.
- **Guarigione personale** — trovi nuovo significato. Costruisci un'identità al di là della diagnosi. Ti vivi come qualcuno che può dare direzione alla propria vita. La speranza torna.

I tre livelli possono sostenersi a vicenda. Ma non devono per forza seguire questo ordine. Alcune persone vivono la guarigione personale molto prima che i sintomi si attenuino. Altre costruiscono prima la funzione — e solo allora si accorgono che anche dentro si sta spostando qualcosa.

Il movimento Recovery mette chiaramente l'accento sulla guarigione personale. Perché è possibile anche quando i sintomi clinici restano. Non devi essere «guarito/a» per condurre una buona vita.

Chiediti: quale dei tre livelli ti sembra ora più importante per te?
:::

:::standard-quiz{id=q-7-std}
- q: "Quale livello sta al centro del movimento Recovery?"
  type: multiple-choice
  options:
    - text: "Guarigione clinica — vale solo se i sintomi sono via."
      correct: false
    - text: "Guarigione personale — significato, speranza, identità al di là della diagnosi."
      correct: true
      explanation: "Esatto. La guarigione personale è possibile anche quando i sintomi restano."
    - text: "Guarigione funzionale — l'importante è funzionare."
      correct: false

- q: "I tre livelli devono arrivare nell'ordine?"
  type: multiple-choice
  options:
    - text: "Sì — prima clinico, poi funzionale, poi personale."
      correct: false
    - text: "No. Possono sostenersi, ma non devono seguire un ordine fisso."
      correct: true
:::

:::standard-flashcards{id=f-7-std}
- front: "Tre livelli di guarigione"
  back: "Clinico (sintomi) · funzionale (quotidiano, lavoro, relazioni) · personale (significato, speranza, identità)."
- front: "Guarigione personale"
  back: "Il cuore di Recovery. Condurre una buona vita — anche se i sintomi restano."
- front: "Ordine?"
  back: "Nessun ordine fisso. Alcune persone vivono la guarigione interiore molto prima della riduzione clinica dei sintomi."
:::


# 8. La speranza — il cuore
{#kap-8 reading_time=4}

La speranza è in quasi tutti i modelli di Recovery la prima cosa nominata [^leamy2011] [^andresen2003] [^schrank2012]. Schrank e colleghi hanno dimostrato: la speranza predice la guarigione personale indipendentemente dai sintomi [^schrank2012].

La speranza nella ricerca sul Recovery non è ingenuo ottimismo. Non è nemmeno il contrario del realismo. È una convinzione concreta, spesso silenziosa, che la tua vita possa essere più del peggior giorno in cui ti trovi ora [^slade2013].

Mike Slade riassume così: la speranza è quell'energia che mette in moto, in primo luogo, un processo di guarigione — senza di essa, nulla comincia [^slade2013].

## La speranza come risorsa in prestito

Un'idea centrale del movimento Recovery: la speranza non deve venire da te. Può essere tenuta in custodia da altri e prestata, finché tu non riesci di nuovo a sentirla [^russinova1999] [^deegan1996] [^schrank2012]. È esattamente ciò che fanno buoni peer, buoni professionisti, buoni familiari: «Se in questo momento non riesci ad avere speranza, la teniamo noi per te.»

Per i professionisti la speranza non è quindi un tratto caratteriale, ma una competenza professionale — la «hope-inspiring competence» secondo Russinova [^russinova1999].

:::reflection{id=5 title="Fonti di speranza"}
- Cosa ti dava speranza in passato — una persona, un luogo, un'attività, un pensiero?
- Chi nel tuo entourage tiene ora la speranza per te, quando tu non la senti?
- C'è un piccolo passo che oggi potrebbe muoverti verso la speranza?
:::

:::easy{reading_time=1}
La speranza è il cuore di Recovery.

Speranza non significa: sei sempre allegro. Speranza significa: credi che la tua vita possa essere più del peggior giorno.

L'importante: non devi avere la speranza da solo. Altri possono tenerla per te. Finché tu non la senti di nuovo.

Una frase buona: «Se ora non hai speranza, la teniamo noi per te.»
:::

:::quiz{id=q-8}
- q: "Cosa dice la ricerca (Schrank et al. 2012) sulla speranza?"
  type: multiple-choice
  options:
    - text: "La speranza predice la guarigione personale indipendentemente dai sintomi."
      correct: true
      explanation: "La speranza è un predittore — anche quando i sintomi restano."
    - text: "La speranza funziona solo per malattie lievi."
      correct: false
    - text: "La speranza la si deve sempre tirar fuori da soli."
      correct: false

- q: "Cosa significa 'speranza in prestito'?"
  type: multiple-choice
  options:
    - text: "Comprare la speranza dalla famiglia."
      correct: false
    - text: "Altri tengono la speranza per te, finché tu non la senti."
      correct: true
      explanation: "Un'idea cardine del movimento Recovery."
:::

:::flashcards{id=f-8}
- front: "Speranza in prestito"
  back: "Quando non riesci ad avere speranza, peer, professionisti o familiari la tengono per te — finché non torni a sentirla."
- front: "Speranza nella ricerca su Recovery"
  back: "Non ottimismo ingenuo — ma convinzione silenziosa, spesso caparbia, che la tua vita possa essere più del peggior giorno."
- front: "Hope-inspiring competence"
  back: "Russinova 1999: ispirare speranza è una competenza professionale, non un tratto caratteriale."
:::

:::standard{reading_time=2}
La speranza è in quasi tutti i modelli di Recovery la prima cosa nominata. E non è un caso.

Mike Slade riassume così la ricerca: **«La speranza è l'energia che mette in moto, per prima cosa, il processo di guarigione — senza di essa, nulla comincia.»**

La speranza nella lettura Recovery non è ingenuo ottimismo. Non è nemmeno il contrario del realismo. È una convinzione silenziosa, a volte caparbia: che la tua vita possa essere più del peggior giorno in cui ti trovi ora.

## La speranza si può prendere in prestito

Una delle idee più importanti del movimento Recovery suona così: **la speranza non deve venire da te.** Può essere tenuta in custodia da altri e prestata, finché tu non riesci di nuovo a sentirla.

È esattamente ciò che fanno buoni peer, buoni professionisti, buoni familiari. Dicono — a volte in parole, a volte solo con la loro presenza:

> «Se in questo momento non riesci ad avere speranza, la teniamo noi per te. Per tutto il tempo che serve.»

Non è una tecnica terapeutica. È una postura. Per i professionisti, la speranza non è quindi una questione del proprio umore, ma una competenza professionale — la *hope-inspiring competence* (Russinova).

Chiediti:

- Chi nella tua vita tiene ora la speranza per te?
- Chi potrebbe farlo, se glielo chiedessi?
- E per chi forse stai tu tenendo la speranza — senza accorgertene?
:::

:::standard-quiz{id=q-8-std}
- q: "Cosa significa «speranza in prestito»?"
  type: multiple-choice
  options:
    - text: "Devi conquistarti la speranza da solo/a."
      correct: false
    - text: "Altri tengono la speranza per te, finché non torni a sentirla."
      correct: true
      explanation: "Un'idea cardine del movimento Recovery. La speranza non è solo una prestazione individuale."

- q: "La speranza nella ricerca sul Recovery è la stessa cosa di un ingenuo ottimismo?"
  type: multiple-choice
  options:
    - text: "Sì, semplicemente ottimismo."
      correct: false
    - text: "No. Una convinzione silenziosa, spesso caparbia, che la tua vita possa essere più del peggior giorno."
      correct: true
:::

:::standard-flashcards{id=f-8-std}
- front: "Speranza in Recovery"
  back: "Non ingenuo ottimismo — ma la convinzione silenziosa che la tua vita possa essere più del peggior giorno."
- front: "Speranza in prestito"
  back: "Quando non riesci ad avere speranza, peer, professionisti o familiari la tengono per te — finché non torni a sentirla."
- front: "Citazione di Slade"
  back: "«La speranza è l'energia che mette in moto, per prima cosa, il processo di guarigione — senza di essa, nulla comincia.»"
:::


# 9. Empowerment e autodeterminazione
{#kap-9 reading_time=4}

La parola Empowerment è strettamente legata a Recovery. Viene dai movimenti per i diritti civili e di emancipazione del XX secolo [^herriger2014] [^knufseibert2004] [^knuf2026].

Negli anni '80 il concetto è stato ripreso anche nell'assistenza psichiatrica. Empowerment significa: capacitazione. Partecipazione attiva. Assumere responsabilità là dove vuoi e puoi portarla. Rogers e colleghi hanno sviluppato una prima scala di Empowerment validata empiricamente [^rogers1997]. Nell'area germanofona, «Promuovere la capacitazione» è l'opera di riferimento [^knufseibert2004].

## Shared Decision-Making (decisione condivisa)

Empowerment significa nella pratica soprattutto una cosa: decisioni condivise invece di prescrizioni. I professionisti decidono con te, non su di te [^charles1997] [^deegandrake2006]. Gli studi mostrano: chi è coinvolto nelle decisioni è più soddisfatto e raggiunge spesso esiti migliori [^joosten2008] [^slade2017sdm].

## Personal Medicine

Pat Deegan ha coniato il concetto di Personal Medicine: le cose non farmacologiche che aiutano una persona a restare in salute — sonno, un cane, una certa passeggiata, cantare in un coro, una telefonata serale. La Personal Medicine, nel movimento Recovery, è considerata equivalente ai farmaci e integrata negli accordi di trattamento [^deegan2005].

## Direttive anticipate e Joint Crisis Plans

Uno strumento concreto di empowerment sono gli accordi di trattamento o Joint Crisis Plans — accordi in cui fissi, in condizione stabile, cosa debba accadere in caso di crisi e cosa no. Henderson e colleghi hanno dimostrato in un RCT che i Joint Crisis Plans riducono significativamente i ricoveri coatti [^henderson2004].

:::easy{reading_time=2}
Empowerment significa: puoi decidere. Hai potere sulla tua vita.

In psichiatria spesso vuol dire: decidiamo insieme. Non: decide il medico da solo.

Puoi fare domande. Puoi dire no. Puoi chiedere un secondo parere.

Esiste anche la «Personal Medicine». Sono cose, oltre ai farmaci, che aiutano: un cane, una passeggiata, un coro, un buon amico. Queste cose sono importanti come i farmaci.
:::

:::quiz{id=q-9}
- q: "Cosa significa 'Shared Decision-Making'?"
  type: multiple-choice
  options:
    - text: "Il medico decide da solo."
      correct: false
    - text: "Professionista e persona interessata decidono insieme."
      correct: true
      explanation: "Charles, Gafni & Whelan 1997 hanno consolidato il concetto."
    - text: "Decide la famiglia."
      correct: false

- q: "Cosa significa 'Personal Medicine' (Pat Deegan)?"
  type: multiple-choice
  options:
    - text: "Farmaci personalizzati in base al profilo del DNA."
      correct: false
    - text: "Cose non farmacologiche che aiutano una persona a restare in salute."
      correct: true
      explanation: "Cane, passeggiata, coro, canto — integrabili negli accordi di trattamento."

- q: "Cosa mostra l'RCT sui Joint Crisis Plans (Henderson 2004)?"
  type: multiple-choice
  options:
    - text: "Non hanno alcun effetto misurabile."
      correct: false
    - text: "Riducono significativamente i ricoveri coatti."
      correct: true
:::

:::flashcards{id=f-9}
- front: "Empowerment"
  back: "Capacitazione. Partecipazione attiva. Assumere responsabilità là dove vuoi e puoi portarla."
- front: "Personal Medicine"
  back: "Pat Deegan: cose non farmacologiche che ti tengono in salute — sonno, movimento, relazioni, hobby. Equivalenti ai farmaci."
- front: "Joint Crisis Plan"
  back: "Accordo in fase stabile: cosa fare in crisi, cosa no? L'RCT (Henderson 2004) mostra: riduce i ricoveri coatti."
- front: "Shared Decision-Making"
  back: "Professionista e persona interessata decidono insieme — non prescrizione e compliance."
:::

:::standard{reading_time=2}
Empowerment significa capacitazione. Puoi decidere — sulla tua vita e sulla tua cura.

Sembra ovvio, ma nel quotidiano della psichiatria spesso non lo è. Per molto tempo è valso: il professionista decide, il paziente o la paziente esegue. Recovery sposta nettamente questo punto — verso una **responsabilità condivisa**.

## Tre strumenti concreti

**Shared Decision-Making** — Le decisioni vengono prese insieme. Tu chiedi cosa viene consigliato. Tu dici cosa si adatta a te e alla tua vita. Gli studi mostrano: chi è coinvolto è più soddisfatto e ottiene risultati migliori.

**Personal Medicine** (Pat Deegan) — Non aiutano solo i farmaci. Aiuta anche ciò che ti tiene in salute come persona: un cane, una passeggiata al mattino, un coro, una telefonata serale, il giardino, l'escursione. Nel movimento Recovery, la Personal Medicine è **equivalente** al trattamento medico — e va inclusa in ogni accordo di trattamento.

**Joint Crisis Plan** — Un accordo che fissi, in fase stabile, con la tua équipe: cosa deve accadere in caso di crisi? Cosa no? Chi voglio sia informato? Quali farmaci tollero, quali no? Un RCT (Henderson 2004) mostra: questi piani riducono significativamente i ricoveri coatti.

## Cosa empowerment non significa

Empowerment non significa: farcela da soli. Non significa: essere contro i professionisti. Significa: la tua voce conta — accanto alla voce tecnica. Entrambe insieme sono di più.

Chiediti: dove puoi già decidere? Dove vorresti ottenere più voce in capitolo?
:::

:::standard-quiz{id=q-9-std}
- q: "Cosa significa Shared Decision-Making?"
  type: multiple-choice
  options:
    - text: "Decidi tu da solo/a, il medico tace."
      correct: false
    - text: "Professionista e tu decidete insieme."
      correct: true
      explanation: "Esatto. La tua voce conta accanto a quella tecnica."

- q: "Cos'è la «Personal Medicine» secondo Pat Deegan?"
  type: multiple-choice
  options:
    - text: "Farmaci personalizzati in base al test del DNA."
      correct: false
    - text: "Le cose non farmacologiche che ti tengono in salute — un cane, una passeggiata, un coro, un'amica."
      correct: true
      explanation: "Equivalente ai farmaci e parte di ogni accordo di trattamento."

- q: "Cosa porta un Joint Crisis Plan?"
  type: multiple-choice
  options:
    - text: "È un esercizio obbligatorio che funziona poco."
      correct: false
    - text: "Riduce i ricoveri coatti — dimostrato da un RCT (Henderson 2004)."
      correct: true
:::

:::standard-flashcards{id=f-9-std}
- front: "Empowerment"
  back: "Capacitazione. Puoi decidere — sulla tua vita e sulla tua cura. Non: farcela da solo/a."
- front: "Shared Decision-Making"
  back: "Professionista e tu decidete insieme. Migliori esiti, maggiore soddisfazione."
- front: "Personal Medicine"
  back: "Pat Deegan: le cose non farmacologiche che ti tengono in salute. Equivalenti ai farmaci."
- front: "Joint Crisis Plan"
  back: "Accordo in fase stabile: cosa deve accadere in crisi, cosa no? Riduce i ricoveri coatti."
:::


# 10. Salutogenesi — restare in salute
{#kap-10 reading_time=3}

Il pensiero orientato a Recovery è strettamente legato al concetto di salutogenesi [^antonovsky1979] [^antonovsky1997]. Invece di chiedersi «Cosa fa ammalare le persone?» (patogenesi), la salutogenesi chiede «Cosa tiene in salute le persone?»

Antonovsky ha identificato il senso di coerenza (Sense of Coherence) come fattore protettivo centrale — la capacità di vivere la propria vita come comprensibile, gestibile e significativa. Le tre componenti corrispondono in modo sorprendente ai processi CHIME e alla triade «Speranza — Potere — Significato».

Nell'area germanofona, Schmolke ha reso utilizzabili i concetti salutogenetici per persone con diagnosi di schizofrenia [^schmolke2001]. Salutogenesi e Recovery, nella letteratura D-A-CH, sono spesso descritte come due facce della stessa postura — orientata alle risorse invece che ai deficit [^knuf2026] [^ameringschmolke2012].

:::info{type=note title="Le tre componenti del senso di coerenza di Antonovsky"}
- **Comprensibilità** (Comprehensibility): la mia vita ha un senso, un nesso.
- **Gestibilità** (Manageability): posso affrontare ciò che arriva — da sola, da solo, o con aiuto.
- **Significatività** (Meaningfulness): vale la pena impegnarsi.
:::

:::easy{reading_time=1}
La medicina spesso chiede: cosa fa ammalare le persone? Si chiama patogenesi.

La salutogenesi chiede diversamente: cosa tiene in salute le persone?

Il ricercatore Aaron Antonovsky ha trovato tre punti importanti:

- Capisco la mia vita.
- Posso affrontare le cose difficili — da sola, da sola, o con aiuto.
- La mia vita ha un senso.

Se questi tre punti ci sono, sei più forte di fronte alle difficoltà.
:::

:::quiz{id=q-10}
- q: "Qual è la differenza tra patogenesi e salutogenesi?"
  type: multiple-choice
  options:
    - text: "La patogenesi è più recente."
      correct: false
    - text: "La patogenesi chiede della malattia — la salutogenesi della salute."
      correct: true
    - text: "La patogenesi vale solo per malattie fisiche."
      correct: false

- q: "Chi ha sviluppato il concetto di salutogenesi?"
  type: multiple-choice
  options:
    - text: "Sigmund Freud"
      correct: false
    - text: "Aaron Antonovsky"
      correct: true
:::

:::flashcards{id=f-10}
- front: "Salutogenesi"
  back: "Cosa tiene in salute le persone? (Antonovsky 1979). Controparte della patogenesi — la domanda 'cosa fa ammalare?'."
- front: "Senso di coerenza"
  back: "Comprensibilità · Gestibilità · Significatività. Fattore protettivo secondo Antonovsky."
:::

:::standard{reading_time=2}
La medicina classica chiede: **«Cosa fa ammalare le persone?»** Si chiama patogenesi. Cerca cause, rischi, deficit.

Il sociologo Aaron Antonovsky ha capovolto la domanda. Ha chiesto: **«Cosa tiene in salute le persone — anche sotto pressione?»** Si chiama salutogenesi.

## Il senso di coerenza

Antonovsky osservò: le persone che superano bene gravi crisi di vita condividono spesso una particolare postura interiore. La chiamò **senso di coerenza** e ne descrisse tre componenti:

- **Comprensibilità** — La mia vita ha un nesso. Ciò che mi accade si lascia inquadrare.
- **Gestibilità** — Posso affrontare ciò che arriva. Da sola, da solo, o con aiuto.
- **Significatività** — Vale la pena impegnarmi. La mia vita ha una direzione.

Queste tre componenti suonano familiari. Stanno sorprendentemente vicine ai cinque processi CHIME e alla triade «Speranza — Potere — Significato».

## Perché è importante

Salutogenesi e Recovery condividono la stessa postura di base: orientata alle risorse invece che ai deficit. Non vieni visto come un fascio di sintomi, ma come persona con forze, esperienze, relazioni — anche quando molto è difficile.

Nella letteratura D-A-CH (Schmolke; Amering e Schmolke), salutogenesi e Recovery vengono spesso descritte come due facce della stessa medaglia.

Chiediti: cosa ti tiene in salute — anche oggi, anche ora?
:::

:::standard-quiz{id=q-10-std}
- q: "Cosa chiede la salutogenesi — al contrario della patogenesi?"
  type: multiple-choice
  options:
    - text: "Cosa fa ammalare le persone?"
      correct: false
      explanation: "Quella è la patogenesi. La salutogenesi chiede l'opposto."
    - text: "Cosa tiene in salute le persone — anche sotto pressione?"
      correct: true
      explanation: "La domanda posta da Antonovsky."

- q: "Quali tre componenti compongono il senso di coerenza?"
  type: multiple-choice
  options:
    - text: "Comprensibilità · Gestibilità · Significatività"
      correct: true
      explanation: "La triade di Antonovsky. Sorprendentemente vicina a «Speranza — Potere — Significato»."
    - text: "Speranza · Fede · Carità"
      correct: false
:::

:::standard-flashcards{id=f-10-std}
- front: "Salutogenesi"
  back: "Cosa tiene in salute le persone? (Antonovsky). Controparte della patogenesi — la domanda «cosa fa ammalare?»."
- front: "Senso di coerenza"
  back: "Comprensibilità · Gestibilità · Significatività. Fattore protettivo sotto pressione."
- front: "Salutogenesi e Recovery"
  back: "Due facce della stessa postura: orientata alle risorse invece che ai deficit. Sei più dei tuoi sintomi."
:::


# 11. Stigma e auto-stigma
{#kap-11 reading_time=4}

Lo stigma è una delle più grandi barriere al Recovery. Goffman ha coniato il termine per le scienze sociali: lo stigma è un tratto che svaluta una persona agli occhi degli altri [^goffman1963].

## Tre livelli di stigma

Corrigan e Watson distinguono tre livelli [^corrigan2002]:

- **Stigma pubblico**: pregiudizi nella società («i malati di mente sono pericolosi»).
- **Stigma strutturale**: svantaggi nelle leggi, nel mercato del lavoro, nelle assicurazioni.
- **Auto-stigma** (stigma interiorizzato): assumi tu stesso le immagini negative come immagine di te.

## Auto-stigma — quando la tempesta colpisce dentro

Corrigan e colleghi descrivono l'auto-stigma come processo regressivo in quattro tappe: percepire, condividere, applicare a sé, soffrire — con conseguenze su autostima, autoefficacia e decorso della malattia [^corrigan2011].

La buona notizia: l'auto-stigma è modificabile. Revisioni sistematiche mostrano che interventi psicosociali — soprattutto in gruppo — possono ridurre lo stigma interiorizzato [^yanos2015] [^buechter2023]. Anche i programmi anti-stigma con contatto diretto con persone con esperienza vissuta mostrano in meta-analisi effetti da piccoli a medi [^corrigan2012] [^thornicroft2016].

Nelle testimonianze dei facilitatori di Recovery [^utschakowski2009] torna un pensiero: non è la diagnosi in sé a ferire davvero. È ciò che la diagnosi fa di una persona agli occhi degli altri — e ciò che la persona interessata comincia a credere su di sé. L'auto-stigma nasce esattamente in questa sutura.

:::reflection{id=6 title="Voci interne"}
- Quali frasi ti dici su te stessa, su te stesso, sulla tua malattia o sulla malattia della persona che accompagni?
- Quali di queste frasi non sono la tua voce, ma immagini assorbite dall'esterno?
- Quale sarebbe una versione più amichevole della stessa verità?
:::

:::easy{reading_time=2}
Stigma significa: ti svalutano per qualcosa. Per esempio: perché hai una diagnosi.

Lo stigma c'è in tre ambiti:

- Nella società — pregiudizi, parole brutte.
- Nelle regole e nelle leggi — per es. difficoltà con le assicurazioni.
- In te stessa, in te stesso — credi le cose brutte su di te.

L'ultimo si chiama auto-stigma. È pericoloso. Ti rende piccolo prima che lo facciano gli altri.

La buona notizia: l'auto-stigma può cambiare. Parlare aiuta. Incontrare altre persone che vivono lo stesso aiuta anche.
:::

:::quiz{id=q-11}
- q: "Cos'è l'auto-stigma?"
  type: multiple-choice
  options:
    - text: "Lo stigma che gli altri mi fanno."
      correct: false
    - text: "Quando assumo io stesso le immagini negative come immagine di me."
      correct: true
      explanation: "Corrigan & Watson 2002 lo descrivono come processo regressivo."

- q: "Quale metodo riduce lo stigma in modo più efficace?"
  type: multiple-choice
  options:
    - text: "Il silenzio."
      correct: false
    - text: "Contatto diretto con persone con esperienza vissuta."
      correct: true
      explanation: "Thornicroft et al. 2016 lo mostrano in una meta-analisi."

- q: "L'auto-stigma è modificabile?"
  type: true-false
  correct: true
  explanation: "Sì — gli interventi psicosociali, soprattutto in gruppo, riducono lo stigma interiorizzato (Yanos 2015)."
:::

:::flashcards{id=f-11}
- front: "Tre livelli di stigma"
  back: "Stigma pubblico · stigma strutturale · auto-stigma (stigma interiorizzato)."
- front: "Auto-stigma"
  back: "Quando assumi le immagini sociali negative come immagine di te. Modificabile."
- front: "Metodo anti-stigma più efficace"
  back: "Contatto personale diretto con persone con esperienza vissuta (Corrigan et al. 2012; Thornicroft et al. 2016)."
:::

:::standard{reading_time=2}
Lo stigma è una delle più grandi barriere sul cammino di Recovery. Il sociologo Erving Goffman descrisse lo stigma come un tratto che svaluta una persona agli occhi degli altri.

## Tre livelli

Patrick Corrigan distingue tre livelli su cui lo stigma agisce:

- **Stigma pubblico** — pregiudizi nella società. «I malati di mente sono pericolosi.» «Datti una calmata.»
- **Stigma strutturale** — svantaggi nelle leggi, nel mercato del lavoro, nelle assicurazioni, presso le autorità.
- **Auto-stigma** — assumi tu stesso/a le immagini negative dall'esterno come immagine di te.

## Quando la tempesta colpisce dentro

L'auto-stigma è particolarmente insidioso. Ti rende piccolo/a — prima che gli altri ci provino. Corrigan descrive un processo in quattro tappe: percepire, accettare, applicare, soffrire. Il risultato: meno autostima, meno autoefficacia, spesso anche un decorso più difficile della malattia.

Nei resoconti esperienziali dei facilitatori di Recovery torna sempre un pensiero: **non è la diagnosi in sé a essere davvero ferita. Ferita è ciò che la diagnosi rende della persona agli occhi degli altri — e ciò che la persona comincia poi a credere su se stessa.**

## La buona notizia

L'auto-stigma è modificabile. La ricerca mostra: gli interventi psicosociali — in particolare in gruppo — riducono lo stigma interiorizzato. Contro lo stigma pubblico, il più efficace è il **contatto diretto** con persone con esperienza vissuta.

Non sei la tua diagnosi. Sei una persona con una storia, con valori, con relazioni, con capacità.

Chiediti: quali frasi ti dici sulla tua malattia — e quali tra queste sono in realtà voci interiorizzate dall'esterno?
:::

:::standard-quiz{id=q-11-std}
- q: "Cos'è l'auto-stigma?"
  type: multiple-choice
  options:
    - text: "Lo stigma che mi attribuiscono gli altri."
      correct: false
    - text: "Quando assumo le immagini sociali negative come immagine di me."
      correct: true
      explanation: "Corrigan & Watson 2002: un processo regressivo in quattro tappe."

- q: "Cosa funziona meglio contro lo stigma pubblico?"
  type: multiple-choice
  options:
    - text: "Tacere e nascondersi."
      correct: false
    - text: "Contatto diretto tra la popolazione generale e persone con esperienza vissuta."
      correct: true
      explanation: "Thornicroft et al. 2016: l'incontro cambia le immagini."

- q: "L'auto-stigma è modificabile?"
  type: multiple-choice
  options:
    - text: "No — è fissato una volta per tutte."
      correct: false
    - text: "Sì — in particolare in gruppo e attraverso interventi psicosociali."
      correct: true
:::

:::standard-flashcards{id=f-11-std}
- front: "Tre livelli di stigma"
  back: "Stigma pubblico · stigma strutturale · auto-stigma (interiorizzato)."
- front: "Auto-stigma"
  back: "Quando credi le immagini negative dall'esterno su di te. Ti rende piccolo/a prima che lo facciano gli altri. Modificabile."
- front: "Cosa agisce contro lo stigma?"
  back: "Contatto diretto con persone con esperienza vissuta. Parlare. Gruppi. Condividere storie."
- front: "Non sei la tua diagnosi"
  back: "Sei una persona con una storia, con valori, con relazioni, con capacità."
:::


# Dal paziente all’esperto/a di te
{#kap-shift reading_time=8}

Se sei stato a lungo in cura psichiatrica — anni forse, o decenni — qualcosa in te è cambiato. Non solo la malattia. Anche il ruolo.

Nella medicina classica c'è una divisione chiara dei compiti: il professionista sa. La paziente o il paziente segue. La diagnosi spiega cosa succede. Il farmaco o la terapia rimettono in salute. Questa logica funziona bene per molte malattie fisiche. Nella sofferenza psichica raggiunge limiti che negli ultimi trent'anni sono diventati sempre più evidenti.

## Cosa può averti fatto, a lungo andare, questo ruolo

Forse riconosci una o più di queste cose:

- Hai imparato a descriverti attraverso una diagnosi. «Sono bipolare.» «Sono borderline.» «Sono un caso cronico.»
- Hai imparato che qualcun altro sa meglio cosa va bene per te — la dottoressa, il terapeuta, l'équipe.
- Hai imparato che il tuo stesso sentire viene guardato con sospetto — come «mancanza di consapevolezza di malattia» o «non-compliance».
- Hai imparato ad aspettare — il prossimo appuntamento, il prossimo farmaco, il prossimo metodo che finalmente debba funzionare.
- Hai imparato che la guarigione è qualcosa che ti viene fatto. Non qualcosa che fai.

Non è una debolezza personale. È una reazione appresa. Nella ricerca si chiama *impotenza appresa* — e compare ovunque le persone vivano a lungo dentro sistemi in cui hanno poco controllo [^seligman1975].

Patricia Deegan, una delle voci più formative del movimento Recovery, ha coniato per questo un termine molto tagliente: *spirit breaking* [^deegan1990]. Descrive così come i sistemi d'aiuto facciano talvolta l'opposto di ciò che dovrebbero — come spezzino il senso di sé, l'autodeterminazione, la voce delle persone, invece di rafforzarle. Non per cattiva intenzione. Ma perché la logica del sistema lo prevede.

## Il paradigma che blocca la guarigione

Larry Davidson e David Roe hanno colto scientificamente la differenza [^davidsonroe2007]. Parlano di due significati molto diversi di Recovery:

- **Recovery FROM** — guarigione DA una malattia. È la lettura medica: sintomi via, funzione ripristinata, diagnosi nel migliore dei casi alle spalle.
- **Recovery IN** — guarigione CON una malattia. È la lettura personale: condurre una vita che ti riempie, anche se i sintomi sono ancora lì.

Entrambe sono possibili. Entrambe hanno valore. Ma seguono logiche molto diverse. *Recovery FROM* avviene nello studio del clinico — sei ricevente passivo. *Recovery IN* avviene nella tua vita — tu sei la persona che agisce.

La ricercatrice olandese Wilma Boevink lo dice ancora più nettamente [^boevink2017]: per molte persone con disturbi psichici gravi, il sistema psichiatrico non è primariamente un sistema di guarigione. È uno dei tanti strumenti su un cammino più lungo. Chi lo capisce — e comincia a usare la psichiatria come mezzo invece di viversi come suo oggetto — sposta qualcosa di fondamentale.

## Come appare il cambiamento nella pratica

Il cambiamento avviene a piccoli passi. Raramente ha un momento di rottura. Ecco qualche esempio di come può apparire:

:::table{name="Dal-paziente-all-esperto"}
| Dal ruolo di paziente … | … alla postura di esperto/a |
|------------------------|-----------------------------|
| «Mi dica cosa devo fare.» | «Cosa consiglia — e cosa si adatta alla mia vita?» |
| «Non migliorerà mai.» | «Oggi è stato difficile. Vediamo cosa porta la prossima settimana.» |
| «Il mio medico sa cosa è bene per me.» | «Decidiamo insieme — e io posso fare domande lungo la strada.» |
| «Io sono la mia diagnosi.» | «Ho una diagnosi. Non è tutto ciò che sono.» |
| «Ho fallito.» | «Ho una giornata difficile. È un'informazione, non un giudizio.» |
| «Se ne parlo, forse l'équipe mi toglierà i farmaci.» | «Questo effetto collaterale mi pesa. Possiamo valutare insieme delle alternative?» |
| «Devo essere coraggioso.» | «Posso accettare aiuto — e posso decidere quale.» |
:::

Nessuno di questi spostamenti significa che tu non abbia più bisogno di aiuto. Nessuno significa che tu debba essere contro i professionisti. Non è una rivolta, è una posizione.

## Perché questo cambiamento è così importante

Non è una raccomandazione tra le altre. È il presupposto perché Recovery diventi davvero efficace per te:

- **La speranza** si può sviluppare solo in un sé che si vive come soggetto.
- **Gli obiettivi personali** si possono perseguire solo quando ci si vive come qualcuno che può avere obiettivi.
- **L'autoefficacia** si costruisce solo dove si fanno esperienze di causare qualcosa — non dove si aspetta soltanto che qualcosa accada.
- **Il significato** della vita nasce dalla scelta. Senza scelta, è difficile dare significato.

La ricerca lo conferma con chiarezza. Roe e Davidson [^roedavidson2005] descrivono Recovery come un «raccogliere insieme i cocci» e un riscrivere la propria storia. Studi attuali sulla ricostruzione narrativa dell'identità mostrano [^chiba2019narrative]: chi nella fase di Recovery (ri)costruisce un'identità al di là del ruolo di paziente, avanza molto di più — anche se i sintomi restano.

:::info{type=note title="Cosa non si intende qui"}
Lo spostamento dall'essere paziente alla postura di esperto/a non è un invito a sospendere farmaci, interrompere cure o cavartela da solo. Non è un'accusa ai professionisti.

È un invito a prendere la tua voce come fonte — accanto alle voci dei professionisti. E a scoprire cosa è vero per te.
:::

## Da chi ha esperienza a esperto/a per esperienza

Nel mondo germanofono c'è un nome bello per questo passo: «Erfahrungsexpert*in» (esperto/a per esperienza). Nella formazione EX-IN è proprio questo che viene sviluppato sistematicamente — persone con esperienza di psichiatria diventano, attraverso dodici moduli, facilitatori che rendono utilizzabile la propria esperienza come risorsa per altri [^utschakowski2009] [^exin_de].

Non devi diventare facilitatore di Recovery per compiere questo spostamento. Ma l'idea aiuta anche se la applichi solo a te: la tua storia non è qualcosa che ti è capitato e ti definisce. È qualcosa che conosci — e da cui puoi trarre sapere. Sapere che ti aiuta a capire meglio te stesso e gli altri.

Wilma Boevink chiama questo *experiential expertise* — competenza esperienziale [^boevink2017] [^boevink2012]. Il tuo sapere esperienziale non vale meno del sapere tecnico dei terapeuti. È diverso. E insieme sono più della somma delle parti.

## Se ancora esiti

Forse leggi tutto questo e pensi: bello detto, ma per me non vale più. Forse hai trent'anni di esperienza ospedaliera. Forse hai perso la fede. Forse non ti ha mai detto nessuno che questo ruolo ti compete.

Tre cose:

1. **Non è mai troppo tardi.** La ricerca su Recovery non conosce limiti di età né soglie di gravità. Anche persone che hanno vissuto per decenni in assistenza residenziale descrivono spostamenti — a volte proprio quando non se l'aspettavano più [^harding1987] [^lally2017].

2. **Non devi fare tutto in una volta.** Una sola domanda al mattino — «Di cosa avrei bisogno oggi?» — è già un movimento. Una sola risposta a te stesso/a la sera — «Oggi è stato difficile, e io c'ero comunque» — è anch'essa un movimento.

3. **Hai bisogno di alleati.** Nessuno compie questo spostamento da solo. Pari, un gruppo di auto-aiuto, una persona di fiducia, un professionista che vive davvero il concetto, un Recovery College. Se la tua équipe non ti accompagna su questa via, non è il tuo fallimento — quell'équipe ha solo un punto cieco.

:::quote{author="Patricia Deegan, 1996" source="deegan1996" lang="en"}
We are a conspiracy of hope and we are pressing back against the strong tide of oppression which for centuries has been the legacy of those of us who are labeled with mental illness.
:::

:::quote-translation{source="deegan1996" translator="traduzione propria"}
Siamo una cospirazione di speranza. Spingiamo contro la forte corrente di oppressione che da secoli è l'eredità di noi che siamo etichettati con una malattia mentale.
:::

:::reflection{id=10 title="La tua posizione"}
- In quali punti ti vivi ancora nel classico ruolo di paziente?
- Dove ci sono momenti in cui ti vivi già come esperto/a della tua esperienza — anche se brevi?
- Quale frase della colonna sinistra della tabella ti è familiare — quale della destra vuole, lentamente, prendere posto?
- Chi potrebbe essere il tuo, la tua co-cospiratrice di speranza?
:::

:::easy{reading_time=3}
Forse sei stato a lungo in cura. Allora probabilmente hai imparato qualcosa di preciso:

- Il medico sa meglio.
- Devo fare quello che mi dicono.
- Io sono malato, gli altri mi aiutano.

È un ruolo. Si chiama ruolo di paziente.

Questo ruolo a volte aiuta. Ma può anche far male. Diventi piccolo. Aspetti. Ti rendi dipendente.

Recovery dice: puoi uscire da questo ruolo. Passo dopo passo.

Non diventi medico. Ma diventi esperto/a della tua vita. Tu ti conosci meglio. La tua esperienza è sapere.

**Questo cambiamento è il più importante in Recovery. Senza di esso non si va avanti.**

Tre cose per chiudere:

- Non è mai troppo tardi. Anche dopo molti anni in cura.
- Non devi farlo tutto in una volta. I piccoli passi contano.
- Hai bisogno di alleati.

:::reflection{id=shift-easy title="Chiediti"}
- In quale punto ti vivi ancora nel vecchio ruolo?
- Dove sei già esperto/a della tua vita?
:::
:::

:::quiz{id=q-shift}
- q: "Cosa significa qui 'ruolo di paziente'?"
  type: multiple-choice
  options:
    - text: "Una diagnosi medica."
      correct: false
    - text: "Una postura appresa: aspettare passivamente, gli altri sanno meglio, vengo guarito."
      correct: true
      explanation: "Un ruolo, non una diagnosi — ed è modificabile."

- q: "Cosa dice Patricia Deegan sullo 'spirit breaking'?"
  type: multiple-choice
  options:
    - text: "Descrive un caso eccezionale raro."
      correct: false
    - text: "I sistemi d'aiuto possono spezzare il senso di sé, la voce e l'autodeterminazione — di solito senza cattiva intenzione."
      correct: true
      explanation: "Deegan 1990 — un termine duro ma preciso."

- q: "Qual è la differenza tra Recovery FROM e Recovery IN?"
  type: multiple-choice
  options:
    - text: "FROM = lettura più vecchia, IN = più recente."
      correct: false
    - text: "FROM = guarigione DA malattia (medica). IN = guarigione CON malattia (personale)."
      correct: true
      explanation: "Davidson & Roe 2007."

- q: "È vero che questo cambiamento è solo una raccomandazione tra tante?"
  type: true-false
  correct: false
  explanation: "No — è il presupposto perché Recovery diventi davvero efficace."

- q: "A che età / dopo quanti anni di cura è troppo tardi per questo cambiamento?"
  type: multiple-choice
  options:
    - text: "Dopo 10 anni."
      correct: false
    - text: "Dopo i 60."
      correct: false
    - text: "Mai."
      correct: true
      explanation: "La ricerca su Recovery non conosce limiti di età. Possibile anche dopo decenni."
:::

:::flashcards{id=f-shift}
- front: "Spirit Breaking"
  back: "Patricia Deegan (1990): come i sistemi d'aiuto spezzino il senso di sé, la voce e l'autodeterminazione — di solito senza cattiva intenzione."
- front: "Recovery FROM"
  back: "Guarigione DA una malattia — lettura medica. Sintomi via, diagnosi nel migliore dei casi alle spalle."
- front: "Recovery IN"
  back: "Guarigione CON una malattia — lettura personale. Una vita piena, anche se i sintomi restano."
- front: "Ruolo di paziente"
  back: "Una postura appresa: passiva, in attesa, eterodiretta. Aiuta a breve, danneggia a lungo. Modificabile."
- front: "Competenza esperienziale (Boevink)"
  back: "Il tuo sapere vissuto è autonomo e di pari valore al sapere tecnico. Puoi usarlo — per te e per altri."
- front: "Conspiracy of Hope"
  back: "Patricia Deegan 1996: «Siamo una cospirazione di speranza.» — Recovery come progetto collettivo contro la storica privazione di parola."
:::

:::standard{reading_time=3}
Se sei stato a lungo in cura psichiatrica — anni forse, decenni — qualcosa in te è cambiato. Non solo la malattia. Anche **il ruolo**.

## Cosa ti ha fatto il ruolo

Forse hai imparato:

- Il medico sa meglio. Il mio sentire conta meno.
- Devo aspettare. Il prossimo appuntamento, il prossimo farmaco, il prossimo metodo.
- Sono la mia diagnosi: «Sono borderline.» «Sono bipolare.»
- La guarigione è qualcosa che mi viene fatto — non qualcosa che faccio.

Non è una debolezza personale. È una **reazione appresa** ad anni dentro un sistema che concede poco controllo.

Patricia Deegan, una voce formativa del movimento Recovery, ha coniato per questo un termine tagliente: **«spirit breaking»**. I sistemi d'aiuto possono — di solito senza cattiva intenzione — spezzare il senso di sé, la voce, l'autodeterminazione di una persona. Non perché i collaboratori siano cattivi. Ma perché la logica del sistema lo prevede.

## Recovery FROM vs. Recovery IN

Larry Davidson e David Roe distinguono due letture molto diverse di Recovery:

- **Recovery FROM** — guarigione **DA** una malattia. La lettura medica: sintomi via, diagnosi alle spalle. Sei ricevente passivo/a di un trattamento.
- **Recovery IN** — guarigione **CON** una malattia. La lettura personale: condurre una vita piena, anche se i sintomi restano. Sei la persona che agisce.

Entrambe sono possibili. Entrambe hanno valore. Ma seguono logiche del tutto diverse. **Recovery IN è il presupposto perché Recovery possa diventare davvero efficace per te.** Perché speranza, obiettivi, autoefficacia, significato — tutto questo nasce solo dove ti vivi come qualcuno che può scegliere.

## Resti dipendente dall'aiuto — e tuttavia soggetto

Questo spostamento non è un invito a sospendere farmaci o a interrompere il trattamento. Non è un'accusa ai professionisti. È un invito a prendere la tua voce come fonte — **accanto** alle voci tecniche.

Tre cose per concludere:

- **Non è mai troppo tardi.** Anche dopo decenni di trattamento, questi spostamenti sono possibili.
- **Avviene a piccoli passi.** Una domanda al mattino: «Di cosa avrei bisogno oggi?» è già un inizio.
- **Hai bisogno di alleati.** Peer. Una persona di fiducia. Un Recovery College. Nessuno ce la fa da solo.
:::

:::standard-quiz{id=q-shift-std}
- q: "Cosa intende Patricia Deegan con «spirit breaking»?"
  type: multiple-choice
  options:
    - text: "Un caso eccezionale raro che quasi non compare."
      correct: false
    - text: "Come i sistemi d'aiuto possano spezzare il senso di sé, la voce e l'autodeterminazione — di solito senza cattiva intenzione."
      correct: true
      explanation: "Un termine tagliente ma preciso (Deegan 1990)."

- q: "Qual è la differenza tra Recovery FROM e Recovery IN?"
  type: multiple-choice
  options:
    - text: "FROM è sorpassato, IN è la nuova versione."
      correct: false
    - text: "FROM = guarigione DA una malattia (medica). IN = guarigione CON una malattia (personale)."
      correct: true
      explanation: "Davidson & Roe 2007. Entrambe sono possibili, ma seguono logiche diverse."

- q: "Chi è esperto/a della tua vita?"
  type: multiple-choice
  options:
    - text: "La tua équipe di trattamento."
      correct: false
    - text: "Tu stesso/a — accanto al sapere tecnico delle persone che ti curano."
      correct: true

- q: "Da quale punto è troppo tardi per questo spostamento?"
  type: multiple-choice
  options:
    - text: "Dopo 20 anni di cura."
      correct: false
    - text: "Dai 60 in poi."
      correct: false
    - text: "Mai. Anche dopo decenni gli spostamenti sono possibili."
      correct: true
:::

:::standard-flashcards{id=f-shift-std}
- front: "Spirit Breaking (Deegan)"
  back: "Quando i sistemi d'aiuto — di solito senza cattiva intenzione — spezzano il senso di sé, la voce e l'autodeterminazione di una persona."
- front: "Recovery FROM"
  back: "Guarigione DA una malattia. La lettura medica: sintomi via, diagnosi alle spalle."
- front: "Recovery IN"
  back: "Guarigione CON una malattia. La lettura personale: una vita piena, anche se i sintomi restano."
- front: "Esperto/a della tua vita"
  back: "Ti conosci meglio. La tua esperienza è sapere — accanto al sapere tecnico, non al suo posto."
- front: "Mai troppo tardi"
  back: "Recovery non conosce limiti di età né soglie di gravità. Possibile anche dopo decenni."
:::


# 12. Sostegno tra pari, Trialogo ed EX-IN
{#kap-12 reading_time=5}

## Cos'è il peer support

Il peer support è l'accompagnamento da parte di persone che hanno vissuto e attraversato crisi psichiche. Nell'area germanofona si parla di Genesungsbegleiter*innen (facilitatori di Recovery), Erfahrungsexpert*innen (esperti per esperienza), peer o collaboratori EX-IN [^utschakowski2009] [^exin_de].

Le radici sono lontane — nella tradizione dell'auto-aiuto, nel concetto WRAP di Mary Ellen Copeland [^copeland1997], nel modello tedesco del Trialog [^bockpriebe2005] e nell'iniziativa EX-IN dal 2005 [^utschakowski2009].

## Trialog — l'eredità germanofona

Il Trialog — il dialogo paritetico tra persone con esperienza diretta, familiari e professionisti — è stato fondato ad Amburgo nel 1989 da Thomas Bock e collaboratori [^bockpriebe2005]. È un contributo germanofono al movimento Recovery internazionale e ha trasformato durevolmente l'assistenza nell'area D-A-CH [^vonpeter2015].

## Cosa mostra la ricerca

La base di evidenze sul peer support è oggi consistente. Un RCT multicentrico con oltre 600 partecipanti in quattro paesi ha mostrato effetti significativi su empowerment e qualità della vita [^slade2024peer]. Meta-analisi attuali trovano effetti coerentemente positivi sull'autoefficacia ed effetti più piccoli su speranza ed empowerment [^white2024] [^lyons2021]. Anche un RCT tedesco ha dimostrato effetti positivi [^mahlke2017].

I fattori di efficacia sono: esperienza vissuta come ancora di credibilità, speranza come modello, relazioni alla pari e comunicazione non-stigmatizzante [^mead2001] [^davidson2012].

Wilma Boevink lo riassume in un punto semplice: il sapere esperienziale che viene dal movimento delle persone con esperienza diretta è equivalente al sapere tecnico professionale — e costituisce la base di un sapere autentico sul Recovery [^boevink2012].

:::easy{reading_time=2}
Peer support significa: persone accompagnano altre persone con esperienza simile.

Fa bene. La ricerca mostra: se qualcuno «ce l'ha fatta» e ti sta davanti, è un segnale forte. Dà speranza.

Nell'area germanofona ci sono facilitatori di Recovery con una formazione (EX-IN).

C'è anche il Trialog — dialoghi tra persone con esperienza diretta, familiari e professionisti. Alla pari. Senza che nessuno sia più importante.

Dialoghi così si trovano in molte città in Svizzera, in Germania e in Austria.
:::

:::quiz{id=q-12}
- q: "Cosa significa EX-IN?"
  type: multiple-choice
  options:
    - text: "Una diagnosi."
      correct: false
    - text: "Experienced Involvement — formazione per facilitatori di Recovery."
      correct: true
      explanation: "Sviluppato dal 2005 a Brema."

- q: "Chi parla alla pari nel Trialog?"
  type: multiple-choice
  options:
    - text: "Solo i professionisti."
      correct: false
    - text: "Persone con esperienza diretta, familiari e professionisti insieme."
      correct: true
      explanation: "Fondato ad Amburgo nel 1989 da Thomas Bock."

- q: "Cosa mostra la ricerca sul peer support (Slade et al. 2024)?"
  type: multiple-choice
  options:
    - text: "Nessun effetto misurabile."
      correct: false
    - text: "Effetti significativi su empowerment e qualità della vita."
      correct: true
:::

:::flashcards{id=f-12}
- front: "EX-IN"
  back: "Experienced Involvement — formazione per persone con esperienza di psichiatria come facilitatori di Recovery (dal 2005, Brema). Ispirato da Dorothea Buck."
- front: "Trialog"
  back: "Dialogo paritetico tra persone con esperienza diretta, familiari e professionisti. Fondato ad Amburgo nel 1989 da Thomas Bock."
- front: "Peer support — fattori di efficacia"
  back: "Esperienza vissuta come ancora di credibilità · speranza come modello · relazione alla pari · comunicazione non-stigmatizzante."
- front: "Mahlke et al. 2017"
  back: "RCT tedesco sul peer support 1:1 — ha mostrato effetti significativi su empowerment e autoefficacia."
:::

:::standard{reading_time=2}
Peer support significa: persone che hanno attraversato una crisi psichica accompagnano altre — alla pari, con esperienza vissuta invece che con un titolo professionale.

Nell'area germanofona li chiamiamo facilitatori di Recovery, esperti per esperienza o collaboratori EX-IN. EX-IN sta per «Experienced Involvement» — una formazione nata a Brema nel 2005 che oggi è ancorata in molte cliniche, centri di consulenza e Recovery Colleges.

Tre concetti sono qui importanti:

- **Peer support:** accompagnamento da parte di qualcuno con esperienza simile. Credibile perché vissuto.
- **Trialog:** il dialogo paritetico tra persone con esperienza diretta, familiari e professionisti — fondato ad Amburgo nel 1989 da Thomas Bock.
- **EX-IN:** formazione strutturata alla facilitazione di Recovery, ispirata da Dorothea Buck.

Cosa dice la ricerca: un grande studio internazionale con oltre 600 partecipanti in quattro paesi ha mostrato effetti significativi su empowerment e qualità della vita. Uno studio tedesco lo ha confermato. Ciò che agisce non è un trucco — è l'incontro con qualcuno che può dire: «Ci sono stato/a anch'io. E una via esiste.»

Forse conosci tu stesso/a qualcuno la cui storia ti ha sostenuto. Forse un giorno sarai tu quella persona per qualcun altro.
:::

:::standard-quiz{id=q-12-std}
- q: "Cosa significa EX-IN?"
  type: multiple-choice
  options:
    - text: "Una nuova diagnosi."
      correct: false
    - text: "Experienced Involvement — una formazione alla facilitazione di Recovery."
      correct: true
      explanation: "Sviluppata a partire dal 2005 a Brema, oggi ancorata in molti servizi D-A-CH."
    - text: "Una classe di farmaci."
      correct: false

- q: "Chi dialoga nel Trialog?"
  type: multiple-choice
  options:
    - text: "Solo i professionisti tra loro."
      correct: false
    - text: "Persone con esperienza diretta, familiari e professionisti — alla pari."
      correct: true
      explanation: "Fondato nel 1989 ad Amburgo da Thomas Bock."
    - text: "Solo le persone con esperienza diretta da sole."
      correct: false
:::

:::standard-flashcards{id=f-12-std}
- front: "Peer support"
  back: "Accompagnamento da parte di persone con esperienza propria di crisi. Agisce attraverso l'esperienza vissuta, la speranza e la parità."
- front: "Trialog"
  back: "Dialogo paritetico tra persone con esperienza diretta, familiari e professionisti. Dal 1989 (Bock, Amburgo)."
- front: "EX-IN"
  back: "Experienced Involvement — formazione per persone con esperienza di psichiatria, dal 2005."
:::


# 13. Recovery Colleges — imparare invece di essere trattati
{#kap-13 reading_time=5}

I Recovery Colleges sono un modello britannico nato dal 2009 [^perkins2012]. Non sono cliniche, ma luoghi di formazione. Sono gratuiti, aperti a tutti — persone con esperienza diretta, familiari, professionisti e persone interessate — e usano la forma pedagogica della formazione per adulti invece della seduta terapeutica.

Due principi centrali contraddistinguono i Recovery Colleges [^perkins2012] [^meddings2015]:

- **Formazione invece di terapia.** I partecipanti sono studenti, non pazienti. Focus su risorse e apprendimento, non su deficit e diagnosi.
- **Co-produzione (Co-Production).** Ogni corso viene sviluppato e tenuto insieme da un professionista e da una persona con esperienza vissuta — alla pari.

## Cosa mostra la ricerca

Hayes e colleghi contano nel mondo 221 Recovery Colleges in 28 paesi su cinque continenti [^hayes2023].

Lo studio RECOLLECT è finora la più ampia analisi scientifica sui Recovery Colleges [^henderson2024recollect]. Uno studio di coorte retrospettivo in Inghilterra, con 1.193 studenti di Recovery College confrontati con 3.508 persone di controllo a 6, 12 e 60 mesi, ha mostrato: riduzione significativa dei ricoveri psichiatrici, delle giornate di degenza e delle visite d'emergenza — con contemporaneo miglioramento del benessere [^ronaldson2024].

Una rassegna della letteratura su dieci anni di ricerca sui Recovery Colleges [^theriault2020] conferma effetti coerenti su speranza, empowerment, autoefficacia, inclusione sociale, raggiungimento di obiettivi e conoscenza della salute mentale. Crowther e colleghi mostrano che anche i professionisti traggono beneficio dalla collaborazione nei Recovery Colleges [^crowther2019].

:::info{type=evidence title="Evidenze nell'area germanofona"}
Negli ultimi anni sono emersi dati D-A-CH empiricamente validati sull'efficacia dell'assistenza orientata al Recovery.

Uno studio randomizzato controllato tedesco sul peer support per persone con disturbi psichici gravi [^mahlke2017] ha dimostrato effetti significativi su empowerment e autoefficacia.

La linea guida tedesca S3 della DGPPN «Terapie psicosociali nei disturbi psichici gravi» (2ª edizione 2019) ha incluso come raccomandazioni l'orientamento Recovery, il peer support e lo Shared Decision-Making [^dgppn2019].

La ricerca sui Recovery Colleges nell'area germanofona cresce — i dati su sedi specifiche D-A-CH sono in fase di costruzione.
:::

Nell'area germanofona esistono Recovery Colleges, tra gli altri, a Berna [^rcbern], nella Svizzera orientale, a Ginevra, a San Gallo e a Zurigo — e sempre più in Germania e Austria (tra cui l'Empowerment College Bremen).

:::easy{reading_time=2}
I Recovery Colleges sono un tipo speciale di scuola. Ma non una scuola per bambini.

Qui gli adulti imparano sulla salute mentale. Tutti possono venire: persone con esperienza diretta, familiari, professionisti, persone interessate.

I corsi sono gratuiti. Non ti serve una diagnosi.

Ogni corso è progettato insieme: da un professionista e da una persona con esperienza diretta. Entrambi sono ugualmente importanti.

Oggi ci sono oltre 220 Recovery Colleges in 28 paesi. Anche in Svizzera, in Germania e in Austria.

La ricerca mostra: chi frequenta un Recovery College sta meglio dopo.
:::

:::quiz{id=q-13}
- q: "Chi può partecipare a un Recovery College?"
  type: multiple-choice
  options:
    - text: "Solo persone con diagnosi."
      correct: false
    - text: "Persone con esperienza, familiari, professionisti e interessati — tutti."
      correct: true
      explanation: "Aperto a tutti. Nessuna diagnosi necessaria. Gratuito."

- q: "Cosa significa 'Co-Production'?"
  type: multiple-choice
  options:
    - text: "Un trucco cinematografico."
      correct: false
    - text: "Professionista e persona con esperienza vissuta progettano i corsi insieme — alla pari."
      correct: true

- q: "Cosa mostra lo studio di coorte UK Ronaldson et al. 2024?"
  type: multiple-choice
  options:
    - text: "Nessun effetto."
      correct: false
    - text: "Riduzione significativa dei ricoveri psichiatrici e delle giornate di degenza."
      correct: true
:::

:::flashcards{id=f-13}
- front: "Recovery College"
  back: "Luogo di formazione — non luogo di trattamento. Imparare invece di terapia. Gratuito. Aperto a tutti."
- front: "Co-Production"
  back: "I corsi vengono sviluppati e tenuti insieme da un professionista e da una persona con esperienza vissuta."
- front: "Efficacia"
  back: "Hayes 2023: 221 Recovery Colleges in 28 paesi. Ronaldson 2024: meno ricoveri, più benessere."
:::

:::standard{reading_time=2}
Un Recovery College non è una clinica. È una scuola per adulti — aperta a tutti coloro che vogliono imparare qualcosa sulla salute mentale: persone con esperienza diretta, familiari, professionisti, persone interessate. I corsi sono gratuiti, non ti serve una diagnosi, non ti serve un'impegnativa né un'iscrizione tramite il medico di base.

Due principi sostengono questo modello:

- **Formazione invece di terapia.** Sei studente, non paziente. Al centro stanno l'apprendimento, le risorse e le domande — non la diagnosi e il deficit.
- **Co-produzione (Co-Production).** Ogni corso viene sviluppato e tenuto insieme da un professionista e da una persona con esperienza vissuta. Entrambe le fonti di sapere sono di pari valore.

Il primo Recovery College è nato a Londra nel 2009. Oggi nel mondo ne esistono oltre 220 in 28 paesi — anche in Svizzera (tra cui Berna, Svizzera orientale, Ginevra, San Gallo, Zurigo), in Germania e in Austria.

Lo studio più ampio in proposito, RECOLLECT dall'Inghilterra, ha confrontato quasi 1.200 studenti di Recovery College con oltre 3.500 persone di controllo per cinque anni. Il risultato: meno ricoveri psichiatrici, meno emergenze, più benessere. Dieci anni di ricerca confermano: speranza, empowerment, inclusione sociale e autoefficacia aumentano in modo misurabile.

Forse un Recovery College vicino a te è un primo luogo in cui non devi spiegarti — ma in cui puoi imparare.
:::

:::standard-quiz{id=q-13-std}
- q: "Chi può frequentare un Recovery College?"
  type: multiple-choice
  options:
    - text: "Solo persone con diagnosi psichiatrica."
      correct: false
    - text: "Tutti — persone con esperienza diretta, familiari, professionisti, interessati. Senza diagnosi."
      correct: true
      explanation: "I Recovery Colleges sono aperti, gratuiti e non richiedono impegnative."
    - text: "Solo professionisti."
      correct: false

- q: "Cosa significa Co-Production?"
  type: multiple-choice
  options:
    - text: "Girare più film insieme."
      correct: false
    - text: "I corsi vengono progettati insieme da un professionista e da una persona con esperienza vissuta — alla pari."
      correct: true
      explanation: "È il principio cardine dei Recovery Colleges."
    - text: "Un video formativo interattivo."
      correct: false
:::

:::standard-flashcards{id=f-13-std}
- front: "Recovery College"
  back: "Luogo di formazione invece che di cura. Gratuito, aperto a tutti. Imparare invece di terapia."
- front: "Co-Production"
  back: "Ogni corso viene progettato insieme da un professionista e da una persona con esperienza vissuta."
- front: "Efficacia (RECOLLECT)"
  back: "Meno ricoveri, meno emergenze, più benessere — dimostrato su cinque anni."
:::


# 14. Approccio informato dal trauma
{#kap-14 reading_time=3}

:::info{type=warmth title="Prima di proseguire la lettura"}
Questo capitolo nomina violenza, abuso, trascuratezza e discriminazione. Se hai vissuto cose difficili, la lettura potrebbe smuovere molto. È normale. Leggi con il tuo ritmo. Fai delle pause. Salta al capitolo successivo se oggi è troppo. Se hai bisogno di sostegno adesso: il Capitolo 20 (Crisi) è a pochi tocchi — oppure chiama **Telefono Amico Italia 02 2327 2327**, in Svizzera **143**, in Germania **0800 111 0 111**, in Austria **142**.
:::

Molte persone seguite in psichiatria hanno nella loro storia esperienze traumatiche — violenza, abusi, trascuratezza, discriminazione. Anche i ricoveri psichiatrici stessi possono avere un effetto ritraumatizzante [^felitti1998].

Un approccio informato dal trauma è quindi parte integrante della pratica orientata al Recovery. L'autorità statunitense SAMHSA [^samhsa2014trauma] ne ha definito sei principi guida:

- **Sicurezza** — fisica ed emotiva.
- **Fiducia e trasparenza** — informazione chiara, cornice affidabile.
- **Peer support** — esperienza vissuta come risorsa.
- **Collaborazione e reciprocità** — ridurre le gerarchie.
- **Empowerment, voce e scelta** — decisione e autodeterminazione.
- **Sensibilità culturale, storica e di genere.**

Questi principi valgono anche in un workbook digitale. Tu decidi cosa leggi e quando, cosa salvi, cosa cancelli.

:::easy{reading_time=1}
Molte persone in psichiatria hanno vissuto cose difficili. Violenza. Abusi. Trascuratezza.

A volte anche il ricovero stesso pesa.

Per questo è importante un approccio sensibile al trauma. Significa:

- Prima la sicurezza.
- Creare fiducia.
- Comunicare con onestà.
- Nessuno decide sopra la tua testa.

Questo vale anche in quest'app. Tu decidi cosa leggi. Cosa salvi. Cosa cancelli.
:::

:::quiz{id=q-14}
- q: "Quanti principi ha definito SAMHSA per l'assistenza informata dal trauma?"
  type: multiple-choice
  options:
    - text: "Tre"
      correct: false
    - text: "Sei"
      correct: true
    - text: "Dieci"
      correct: false

- q: "Quale NON è un principio della pratica informata dal trauma?"
  type: multiple-choice
  options:
    - text: "Sicurezza"
      correct: false
    - text: "Severità"
      correct: true
      explanation: "La severità non rientra tra i principi SAMHSA."
    - text: "Peer support"
      correct: false
:::

:::flashcards{id=f-14}
- front: "Sei principi (SAMHSA 2014)"
  back: "Sicurezza · Fiducia & trasparenza · Peer support · Collaborazione · Empowerment · Sensibilità culturale/di genere."
- front: "Ritraumatizzazione"
  back: "Quando i sistemi d'aiuto traumatizzano ulteriormente. La pratica informata dal trauma vuole prevenirlo attivamente."
- front: "Studio ACE (Felitti 1998)"
  back: "Dimostra: le esperienze traumatiche infantili sono molto diffuse e incidono per tutta la vita sulla salute."
:::

:::standard{reading_time=2}
Molte persone seguite in psichiatria portano con sé esperienze pesanti — violenza, abusi, trascuratezza, discriminazione, perdite. A volte anche i ricoveri psichiatrici stessi risultano gravosi o ritraumatizzanti. Un approccio informato dal trauma prende sul serio tutto questo, senza spingerti a mostrare ferite che non vuoi mostrare.

L'autorità sanitaria statunitense SAMHSA ha descritto sei principi guida che sostengono un accompagnamento sensibile al trauma:

- **Sicurezza** — fisica ed emotiva. Nessuno deve trovarsi in uno spazio in cui non si sente al sicuro.
- **Fiducia e trasparenza** — informazione chiara, cornice affidabile, nessuna sorpresa sopra la tua testa.
- **Peer support** — esperienza vissuta come ponte affidabile.
- **Collaborazione alla pari** — ridurre le gerarchie, non aumentarle.
- **Empowerment, voce e scelta** — co-decidi. Sempre.
- **Sensibilità culturale, storica e di genere** — la tua storia è parte di chi sei.

Questi principi valgono anche in un workbook digitale. Tu decidi cosa leggi e quando. Cosa salvi. Cosa cancelli. Se un capitolo è troppo, chiudilo. Torna quando sei pronto/a. Oppure lascialo del tutto.

Informato dal trauma non significa: prima elaborare il trauma, poi vivere. Significa: tutto ciò che qui accade tiene conto di ciò che hai già portato.
:::

:::standard-quiz{id=q-14-std}
- q: "Quanti principi guida ha definito SAMHSA per la pratica informata dal trauma?"
  type: multiple-choice
  options:
    - text: "Tre."
      correct: false
    - text: "Sei."
      correct: true
      explanation: "Sicurezza, fiducia, peer support, collaborazione, empowerment, sensibilità culturale."
    - text: "Dieci."
      correct: false

- q: "Chi decide cosa viene salvato in quest'app?"
  type: multiple-choice
  options:
    - text: "L'app."
      correct: false
    - text: "Tu. Sempre."
      correct: true
      explanation: "L'autodeterminazione sui tuoi dati è espressione di una postura sensibile al trauma."
:::

:::standard-flashcards{id=f-14-std}
- front: "Sei principi (SAMHSA)"
  back: "Sicurezza · Fiducia & trasparenza · Peer support · Collaborazione · Empowerment · sensibilità culturale & di genere."
- front: "Prima la sicurezza"
  back: "Nessuno decide sopra la tua testa. Sei tu a determinare ritmo, profondità e stop."
- front: "Ritraumatizzazione"
  back: "Quando i sistemi d'aiuto feriscono ulteriormente. La pratica informata dal trauma vuole prevenirlo attivamente."
:::


# 15. Recovery e diritti umani
{#kap-15 reading_time=4}

Recovery non è solo una questione tecnica, ma anche di diritti umani. La Convenzione ONU sui diritti delle persone con disabilità garantisce alle persone con disabilità — inclusa la disabilità psichica — il diritto all'autodeterminazione, all'inclusione e a un sostegno nelle decisioni [^uncrpd2006]. La Germania l'ha ratificata nel 2009, l'Austria nel 2008, la Svizzera nel 2014. L'Italia l'ha ratificata nel 2009.

L'OMS ha avviato nel 2019 l'iniziativa QualityRights [^who2019] e nel 2021 ha pubblicato la linea guida «Guidance on Community Mental Health Services» [^who2021]. Recovery è indicato come principio centrale dell'assistenza moderna.

Concretamente significa: ridurre la coercizione, non mettere mai la diagnosi al di sopra della persona, offrire sostegno dove le persone ne hanno bisogno — e coinvolgere le persone interessate come partner alla pari in tutte le decisioni sulla cura.

:::info{type=example title="Esempio: Dialogo Aperto (Open Dialogue)"}
Nella Lapponia occidentale finlandese, Jaakko Seikkula ha sviluppato negli anni '80 il concetto di Dialogo Aperto.

Nelle crisi psicotiche acute, entro 24 ore vengono coinvolte tutte le persone di riferimento importanti. Tutti i colloqui avvengono insieme, tutte le decisioni vengono negoziate in modo trasparente.

Gli esiti a lungo termine sono straordinari: nella Lapponia occidentale, oltre l'80 % delle persone con prima psicosi è tornato a lavoro o formazione entro due anni. Uno studio di 19 anni ha confermato la stabilità a lungo termine dei risultati [^seikkula2011] [^bergstroem2018].
:::

:::easy{reading_time=1}
Recovery è anche un diritto umano.

L'ONU nel 2006 ha fatto una convenzione. Dice: le persone con disabilità hanno il diritto di decidere da sole. Anche le persone con malattia psichica.

L'OMS dice nel 2021: la psichiatria deve rispettare questi diritti. Non deve decidere il medico da solo. Ma tutti insieme.

In Svizzera, in Germania, in Austria e in Italia vale lo stesso.
:::

:::quiz{id=q-15}
- q: "Cos'è la Convenzione ONU sui diritti delle persone con disabilità?"
  type: multiple-choice
  options:
    - text: "Un metodo di trattamento."
      correct: false
    - text: "Il trattato ONU del 2006 sui diritti delle persone con disabilità."
      correct: true
      explanation: "La Svizzera l'ha ratificata nel 2014, Germania 2009, Austria 2008, Italia 2009."

- q: "Cosa dice l'OMS nel 2021?"
  type: multiple-choice
  options:
    - text: "Recovery non è scientifico."
      correct: false
    - text: "L'assistenza deve essere centrata sulla persona e basata sui diritti."
      correct: true
:::

:::flashcards{id=f-15}
- front: "Convenzione ONU disabilità 2006"
  back: "Garantisce autodeterminazione — anche per disabilità psichica. CH ratifica 2014, DE 2009, AT 2008, IT 2009."
- front: "WHO QualityRights"
  back: "Iniziativa OMS dal 2019. Nel 2021 linea guida 'Guidance on Community Mental Health Services': centrata sulla persona, basata sui diritti, orientata al Recovery."
- front: "Open Dialogue (Seikkula)"
  back: "Lapponia occidentale dagli anni '80. Oltre l'80 % delle persone con prima psicosi torna a lavoro/formazione entro 2 anni. Confermato nel follow-up a 19 anni."
:::

:::standard{reading_time=2}
Recovery non è solo una questione tecnica — è anche una questione di diritti umani. Chi si ammala psichicamente non perde il diritto di essere ascoltato, coinvolto e preso sul serio.

La **Convenzione ONU sui diritti delle persone con disabilità** (UN-CRPD) del 2006 garantisce a tutte le persone con disabilità — fisiche, intellettive, psichiche — il diritto all'autodeterminazione, all'inclusione e a un sostegno nelle decisioni. La Svizzera l'ha ratificata nel 2014, la Germania nel 2009, l'Austria nel 2008, l'Italia nel 2009. È diritto in vigore.

L'**Organizzazione Mondiale della Sanità (OMS)** ha dato peso a tutto questo nel 2019 con l'iniziativa QualityRights e nel 2021 ha pubblicato la linea guida «Guidance on Community Mental Health Services». Recovery è indicato come principio centrale di un'assistenza moderna — accanto alla centratura sulla persona e all'orientamento ai diritti.

Cosa significa in concreto?

- Ridurre la coercizione — ovunque sia possibile.
- Non mettere mai la diagnosi al di sopra della persona.
- Offrire sostegno dove le persone vivono.
- Coinvolgere le persone interessate come partner alla pari nelle decisioni sulla cura.

Un esempio è il **Dialogo Aperto** dalla Finlandia. Nelle crisi psicotiche acute, entro 24 ore vengono coinvolte tutte le persone di riferimento importanti. Oltre l'80 % delle persone alla prima crisi è tornato a lavoro o formazione entro due anni — studi a lungo termine confermano la stabilità di questi risultati.

Non devi conoscere a memoria queste cornici. Ma è bene sapere: quando dici «Voglio co-decidere», stai su un terreno giuridico solido.
:::

:::standard-quiz{id=q-15-std}
- q: "Cosa garantisce la Convenzione ONU sui diritti delle persone con disabilità anche alle persone con disturbi psichici?"
  type: multiple-choice
  options:
    - text: "Una guarigione rapida."
      correct: false
    - text: "Autodeterminazione, inclusione e sostegno nelle decisioni."
      correct: true
      explanation: "UN-CRPD del 2006. Ratificata: CH 2014, DE 2009, AT 2008, IT 2009."
    - text: "Una forma terapeutica specifica."
      correct: false

- q: "Cosa dice la linea guida OMS 2021 sull'assistenza psichiatrica?"
  type: multiple-choice
  options:
    - text: "Dovrebbe essere centrata sulla persona e basata sui diritti."
      correct: true
      explanation: "Recovery viene indicato come principio centrale."
    - text: "Dovrebbe essere il più possibile residenziale e a lungo termine."
      correct: false
    - text: "Dovrebbe avvenire senza coinvolgimento delle persone interessate."
      correct: false
:::

:::standard-flashcards{id=f-15-std}
- front: "UN-CRPD 2006"
  back: "Convenzione ONU sui diritti delle persone con disabilità. Garantisce autodeterminazione — anche per disabilità psichica. Ratifica: CH 2014, DE 2009, AT 2008, IT 2009."
- front: "WHO QualityRights"
  back: "Iniziativa OMS dal 2019. Linea guida 2021: centrata sulla persona, basata sui diritti, orientata al Recovery."
- front: "Open Dialogue"
  back: "Modello finlandese. Oltre l'80 % delle persone alla prima psicosi torna a lavoro o formazione entro 2 anni."
:::


# 16. Malattia o Recovery: due viste
{#kap-16 reading_time=3}

Recovery è più di un nuovo metodo — è un cambio di prospettiva [^knuf2026] [^slade2014] [^ameringschmolke2012].

:::table{name="Confronto-paradigmi"}
| Vista orientata alla malattia | Vista orientata al Recovery |
|------------------------------|-----------------------------|
| Diagnosi al centro | Persona al centro |
| Assenza di sintomi come obiettivo | Vita ricca di senso come obiettivo |
| Esperto = professionista | Doppia expertise: sapere tecnico + sapere esperienziale |
| Piano di trattamento | Piano di Recovery + piano di trattamento |
| Compliance | Shared Decision-Making |
| Sguardo sul deficit (patogenesi) | Sguardo sulle risorse (salutogenesi) |
| Cammino lineare di guarigione | Cammino individuale, non-lineare |
| Il professionista porta la speranza da solo | La speranza si condivide e si presta |
| Paziente / cliente | Persona / persona con esperienza / studente |
:::

La colonna di destra non scaccia quella di sinistra. Entrambe hanno il loro posto — il paradigma orientato al Recovery amplia quello medico, non lo sostituisce [^slade2014].

Amering e Schmolke sottolineano un punto spesso trascurato: la pratica orientata al Recovery non è un modulo aggiuntivo posto sopra. È un altro modo di produrre sapere — attraverso la connessione tra sapere tecnico professionale e esperienza vissuta come fonti di pari valore [^ameringschmolke2012].

:::easy{reading_time=2}
Ci sono due viste sulla malattia psichica:

**Vista vecchia:**
- La malattia è al centro.
- Obiettivo: sintomi via.
- Il medico sa meglio.
- Sei paziente.

**Vista Recovery:**
- La persona è al centro.
- Obiettivo: una buona vita.
- Tu e il professionista decidete insieme.
- Sei una persona con esperienza.

La vista vecchia non è sbagliata. Spesso aiuta. Ma non basta da sola.

La vista Recovery amplia la vecchia. Non la sostituisce.
:::

:::quiz{id=q-16}
- q: "La vista Recovery sostituisce la vista medica?"
  type: true-false
  correct: false
  explanation: "No — la amplia. Entrambe hanno il loro posto."

- q: "Cosa sta al centro nella vista Recovery?"
  type: multiple-choice
  options:
    - text: "La diagnosi"
      correct: false
    - text: "La persona"
      correct: true
:::

:::flashcards{id=f-16}
- front: "Cambio di paradigma"
  back: "Dallo sguardo sul deficit (patogenesi) allo sguardo sulle risorse (salutogenesi) — senza abbandonare la vista medica."
- front: "Compliance vs. Shared Decision-Making"
  back: "Compliance = segui. Shared Decision-Making = decidete insieme."
- front: "Sintesi di sapere"
  back: "La pratica orientata al Recovery unisce sapere tecnico professionale ed esperienza vissuta come fonti di pari valore (Amering & Schmolke 2012)."
:::

:::standard{reading_time=2}
Recovery è più di un nuovo metodo. È un cambio di prospettiva — un altro modo di guardare alla crisi psichica e alla guarigione.

La **vista orientata alla malattia** mette al centro la diagnosi. L'obiettivo è l'assenza di sintomi. L'esperto è il professionista. Tu segui un piano di trattamento. Lo sguardo si rivolge a ciò che manca o non funziona — al deficit.

La **vista orientata al Recovery** mette al centro la persona. L'obiettivo è una vita ricca di senso — con o nonostante i sintomi. Gli esperti sono due: il professionista E tu stesso/a. Le decisioni vengono prese insieme (Shared Decision-Making). Lo sguardo si rivolge a risorse, speranza, connessione.

Qualche coppia di concetti mostra la differenza:

- Diagnosi al centro → Persona al centro
- Assenza di sintomi come obiettivo → Vita ricca di senso come obiettivo
- Compliance → Shared Decision-Making
- Sguardo sul deficit (patogenesi) → Sguardo sulle risorse (salutogenesi)
- Cammino lineare di guarigione → Cammino individuale, non-lineare
- Paziente → Persona / persona con esperienza / studente

Importante: la colonna di destra non scaccia quella di sinistra. Entrambe hanno il loro posto. I farmaci possono aiutare. Le diagnosi possono orientare. Una clinica può essere un luogo sicuro. Ma da sola non basta — Recovery amplia l'immagine medica con la tua voce, i tuoi valori, il tuo significato.

Amering e Schmolke lo dicono in modo netto: la pratica orientata al Recovery non è un modulo aggiuntivo posto sopra. È un altro modo di produrre sapere — attraverso la connessione tra sapere tecnico ed esperienza vissuta come fonti di pari valore.
:::

:::standard-quiz{id=q-16-std}
- q: "La vista Recovery sostituisce la vista medica?"
  type: multiple-choice
  options:
    - text: "Sì, la sostituisce completamente."
      correct: false
    - text: "No — la amplia. Entrambe hanno il loro posto."
      correct: true
      explanation: "Recovery è un cambio di prospettiva, non una rinuncia al sapere medico."
    - text: "No, è in contraddizione con essa."
      correct: false

- q: "Cosa sta al centro nella vista Recovery?"
  type: multiple-choice
  options:
    - text: "La diagnosi."
      correct: false
    - text: "La persona — con la sua storia, i suoi valori, il suo significato."
      correct: true
      explanation: "La diagnosi orienta, ma non ti definisce."
    - text: "La clinica."
      correct: false
:::

:::standard-flashcards{id=f-16-std}
- front: "Cambio di paradigma"
  back: "Dallo sguardo sul deficit (patogenesi) allo sguardo sulle risorse (salutogenesi) — senza abbandonare la vista medica."
- front: "Compliance vs. Shared Decision-Making"
  back: "Compliance = segui. Shared Decision-Making = decidete insieme."
- front: "Due expertise"
  back: "Sapere tecnico ED esperienza vissuta sono fonti di sapere di pari valore."
:::


# 17. Tre frasi per te
{#kap-17 reading_time=3}

Non sei la tua diagnosi. Sei una persona con una storia, con capacità, con valori, con relazioni. Una diagnosi può essere un orientamento — non è mai tutta la verità su di te.

## Tre frasi che ricorrono spesso nel movimento Recovery

- Sei esperta o esperto della tua vita. La tua esperienza è sapere.
- Non devi portare tutto da sola, da solo. Cercati alleati — pari, professionisti, persone di fiducia.
- Puoi decidere tu ritmo e direzione. Un passo indietro non è un fallimento.

## Cosa la ricerca può consegnarti

La speranza è un predittore della guarigione [^schrank2012]. Il peer support ha un effetto misurabile sull'autoefficacia [^slade2024peer] [^mahlke2017]. La frequenza dei Recovery Colleges riduce i successivi costi di assistenza e aumenta il benessere [^ronaldson2024]. L'auto-stigma può cambiare [^yanos2015].

:::reflection{id=7 title="Il tuo primo passo"}
- A chi potresti rivolgerti questa settimana, qualcuno che ti ascolterebbe senza giudicare?
- Quale piccola azione fattibile sarebbe un'ancora di speranza per i prossimi sette giorni?
- Quale area del modello CHIME — o della triade Speranza-Potere-Significato — dovrebbe ricevere un po' più attenzione questa settimana?
:::

:::easy{reading_time=1}
Non sei la tua diagnosi. Sei una persona.

Tre frasi importanti:

- Tu conosci meglio la tua vita.
- Non devi portare tutto da sola, da solo.
- Puoi decidere il tuo ritmo.

I passi indietro fanno parte. Non sono un fallimento.
:::

:::quiz{id=q-17}
- q: "Cosa significa 'in Recovery'?"
  type: multiple-choice
  options:
    - text: "Sei guarito."
      correct: false
    - text: "Sei in cammino — un processo, non uno stato."
      correct: true

- q: "Un passo indietro è un fallimento?"
  type: true-false
  correct: false
  explanation: "No — i passi indietro fanno parte del decorso non-lineare del Recovery."
:::

:::flashcards{id=f-17}
- front: "Sei esperto/a della tua vita"
  back: "Nessuno conosce la tua esperienza come te. La tua voce conta — alla pari del sapere tecnico."
- front: "Ritmo & direzione"
  back: "Decidi tu entrambi. Recovery non è misurabile né paragonabile."
:::

:::standard{reading_time=2}
Non sei la tua diagnosi. Sei una persona con una storia, con capacità, con valori, con relazioni. Una diagnosi può essere un orientamento — non è mai tutta la verità su di te.

Tre frasi che ricorrono nel movimento Recovery — e che vorremmo consegnarti:

- **Sei esperta o esperto della tua vita.** La tua esperienza è sapere. Nessuno conosce il tuo respiro, le tue notti, le tue speranze come te. Questa voce conta — alla pari di ogni sapere tecnico.
- **Non devi portare tutto da sola, da solo.** Cercati alleati. Peer, professionisti, persone di fiducia, familiari, un gruppo di auto-aiuto, un Recovery College. La speranza puoi prenderla in prestito, finché non torni a sentirla.
- **Puoi decidere tu ritmo e direzione.** Recovery non è misurabile né paragonabile. Un passo indietro non è un fallimento — fa parte del cammino non-lineare. A volte anche una pausa è un progresso.

Cosa la ricerca può consegnarti: la speranza è un predittore della guarigione. Il peer support rafforza in modo misurabile l'autoefficacia. I Recovery Colleges riducono i ricoveri e aumentano il benessere. L'auto-stigma può cambiare.

Queste tre frasi non sono un programma da eseguire. Sono piuttosto come tre pietre che metti in tasca. Le tiri fuori quando ti servono.

Forse oggi. Forse solo tra mezzo anno.
:::

:::standard-quiz{id=q-17-std}
- q: "Cosa significa «in Recovery»?"
  type: multiple-choice
  options:
    - text: "Sei completamente guarito/a."
      correct: false
    - text: "Sei in cammino — un processo, non uno stato."
      correct: true
      explanation: "Recovery è una via continua, non un punto d'arrivo."
    - text: "Sei senza sintomi."
      correct: false

- q: "Un passo indietro è un fallimento?"
  type: multiple-choice
  options:
    - text: "Sì, allora il cammino è fallito."
      correct: false
    - text: "No — fa parte del decorso non-lineare di Recovery."
      correct: true
      explanation: "Recovery raramente procede in modo lineare. Pause e ricadute fanno parte del cammino."
    - text: "Forse — dipende da quanto è grande."
      correct: false
:::

:::standard-flashcards{id=f-17-std}
- front: "Tre frasi"
  back: "1) Sei esperto/a della tua vita. 2) Non devi portare tutto da solo/a. 3) Decidi tu ritmo e direzione."
- front: "Passo indietro"
  back: "Non è un fallimento. Fa parte del cammino non-lineare."
- front: "Speranza in prestito"
  back: "Se non senti speranza, puoi prenderla in prestito dagli altri — finché non torni a sentirla."
:::


# 18. Linguaggio e atteggiamento — perché le parole contano
{#kap-18 reading_time=3}

Il linguaggio orientato al Recovery non è cosmetica. Cambia chi viene riconosciuto, in uno spazio, come soggetto — e chi diventa oggetto di un trattamento [^ameringschmolke2012] [^knuf2026].

## Cosa evitiamo — e cosa diciamo invece

Nel discorso germanofono sul Recovery si è consolidata una serie di regole concrete di linguaggio [^ameringschmolke2012] [^knuf2026] [^slade2013]:

- «Lo schizofrenico / la schizofrenica» → meglio: «persona con diagnosi di schizofrenia» (linguaggio person-first).
- «Paziente» / «cliente» nel contesto formativo → meglio: «studente», «partecipante», «persona con esperienza di crisi».
- «Cronico», «inguaribile» → evitare. Entrambi i termini sono empiricamente discutibili e ostacolano la guarigione.
- «Compliance» → meglio: «aderenza terapeutica», meglio ancora: «decisione condivisa».
- «Consapevolezza di malattia» → meglio: «propria comprensione della malattia».
- «Recovered» / «guarito» → in italiano: «in Recovery» (concetto di processo).
- «Deficit», «portatore di sintomi» → meglio: «risorse», «esperienza di vita», «scossone psichico».

Il linguaggio cambia anche te. Chi comincia a dire «in Recovery» pensa più rapidamente in processi invece che in stati fissi — e fa così, spesso, il primo passo impercettibile.

:::easy{reading_time=1}
Le parole cambiano la realtà. Qualche esempio:

- Non: «malato cronico» → meglio: «vive con la diagnosi»
- Non: «Compliance» → meglio: «decisione condivisa»
- Non: «schizofrenico» → meglio: «persona con schizofrenia»
- Non: «guarito» → meglio: «in Recovery»

Il linguaggio non è tutto. Ma spesso cambia l'inizio.
:::

:::quiz{id=q-18}
- q: "Quale formulazione è person-first?"
  type: multiple-choice
  options:
    - text: "Il borderline"
      correct: false
    - text: "Persona con diagnosi borderline"
      correct: true

- q: "Quale termine andrebbe evitato?"
  type: multiple-choice
  options:
    - text: "Persona con esperienza di crisi"
      correct: false
    - text: "Cronicamente inguaribile"
      correct: true
      explanation: "Empiricamente discutibile e dimostrato come ostacolo alla guarigione."
:::

:::flashcards{id=f-18}
- front: "Linguaggio person-first"
  back: "Diagnosi dopo la persona, non prima. 'Persona con schizofrenia' invece di 'schizofrenico'."
- front: "in Recovery"
  back: "Il concetto di processo. Invece di 'guarito' o 'malato' — come cammino in corso."
- front: "Evitare 'Compliance'"
  back: "Invece di 'Compliance' (segui istruzioni), meglio 'decisione condivisa' o 'aderenza terapeutica'."
:::

:::standard{reading_time=2}
Le parole non sono innocue. Cambiano chi viene riconosciuto, in uno spazio, come persona — e chi diventa oggetto di un trattamento. Il linguaggio orientato al Recovery non è quindi cosmetica. È postura.

Nel discorso germanofono su Recovery si sono consolidate regole linguistiche concrete. Alcuni esempi:

- «Lo schizofrenico» → meglio: «persona con diagnosi di schizofrenia» (**linguaggio person-first**).
- «Paziente» / «cliente» nel contesto formativo → meglio: «studente», «partecipante», «persona con esperienza di crisi».
- «Cronico», «inguaribile» → evitare. Entrambi i termini sono empiricamente discutibili e ostacolano in modo dimostrato la guarigione.
- «Compliance» → meglio: «aderenza terapeutica» — meglio ancora: «decisione condivisa».
- «Consapevolezza di malattia» → meglio: «propria comprensione della malattia».
- «Guarito» / «recovered» → in italiano: «in Recovery» — come processo, non come stato finale.
- «Deficit», «portatore di sintomi» → meglio: «risorsa», «esperienza di vita», «scossone psichico».

Questi cambi non sono pura questione di etichette. Chi comincia a dire «in Recovery» pensa più rapidamente in processi invece che in stati fissi. Chi dice «persona con diagnosi» vede prima la persona e poi la diagnosi. Spesso cambia proprio quel passo impercettibile con cui qualcosa di nuovo comincia.

Il linguaggio cambia anche te. Il modo in cui parli di te stesso/a plasma il modo in cui pensi di te. Non devi imparare tutti questi termini contemporaneamente. Ma forse nei prossimi giorni ascolterai con altre orecchie — ciò che dicono medici, familiari, terapeuti, tu stesso/a.

E se qualcosa ti ferisce: puoi dirlo.
:::

:::standard-quiz{id=q-18-std}
- q: "Quale formulazione è person-first?"
  type: multiple-choice
  options:
    - text: "Il borderline."
      correct: false
    - text: "Persona con diagnosi borderline."
      correct: true
      explanation: "Prima la persona, poi la diagnosi. È linguaggio person-first."
    - text: "La malata di mente."
      correct: false

- q: "Quale termine andrebbe evitato?"
  type: multiple-choice
  options:
    - text: "Persona con esperienza di crisi."
      correct: false
    - text: "Cronicamente inguaribile."
      correct: true
      explanation: "Empiricamente discutibile e dimostrato come ostacolo alla guarigione."
    - text: "In Recovery."
      correct: false
:::

:::standard-flashcards{id=f-18-std}
- front: "Linguaggio person-first"
  back: "Diagnosi dopo la persona — non prima. «Persona con schizofrenia» invece di «schizofrenico»."
- front: "In Recovery"
  back: "Il concetto di processo in italiano. Invece di «guarito» o «cronico» — come cammino in corso."
- front: "Evitare «Compliance»"
  back: "Invece di «Compliance» (segui) meglio «decisione condivisa» o «aderenza terapeutica»."
:::


# 19. Come usare questo workbook
{#kap-19 reading_time=2}

Questo workbook digitale non è un manuale. È un compagno di viaggio:

- Prenditi tempo. Una pagina al giorno è abbastanza.
- Sii onesto/a con te. Decidi tu cosa viene salvato o condiviso.
- Salta. Segui ciò che ti parla.
- Ripeti. La stessa domanda si legge diversamente fra tre mesi.
- Condividi, se vuoi — con una persona di fiducia, con un peer, in un gruppo.

## Protezione dei dati e autodeterminazione

Tutto ciò che inserisci in questa app ti appartiene. Decidi tu se qualcosa viene sincronizzato, salvato o cancellato. Le voci sono cifrate. La cancellazione autonoma dei dati è sempre possibile. Questa architettura dell'autodeterminazione non è un dettaglio tecnico, ma l'espressione della postura orientata al Recovery di questo workbook [^who2021] [^samhsa2014trauma] [^uncrpd2006].

:::easy{reading_time=1}
Come usare quest'app:

- Prenditi tempo. Una pagina al giorno basta.
- Sii onesto/a con te.
- Salta da un capitolo all'altro.
- Torna. La stessa domanda si legge diversa più tardi.
- Condividi, se vuoi.

I tuoi dati ti appartengono. L'app salva solo ciò che vuoi. Puoi cancellare tutto. In ogni momento.
:::

:::quiz{id=q-19}
- q: "I capitoli vanno letti in ordine?"
  type: true-false
  correct: false
  explanation: "No — salta, come ti pare meglio."

- q: "Chi decide cosa viene salvato?"
  type: multiple-choice
  options:
    - text: "L'app"
      correct: false
    - text: "Tu"
      correct: true
:::

:::flashcards{id=f-19}
- front: "Protezione dei dati in quest'app"
  back: "I tuoi dati ti appartengono. Cifrati. Decidi tu cosa viene sincronizzato, salvato o cancellato. Cancellabili in ogni momento."
- front: "Modo di lavoro"
  back: "Una pagina al giorno. Saltare consentito. Ripetere benvenuto. Condividere opzionale."
:::

:::standard{reading_time=2}
Questo workbook non è un manuale. È un compagno di viaggio — e sei tu a decidere come ti accompagna.

Qualche indicazione che si è dimostrata utile:

- **Prenditi tempo.** Una pagina al giorno è abbastanza. A volte basta un paragrafo. Non c'è un ritmo che devi raggiungere.
- **Sii onesto/a con te.** Non devi dimostrare nulla a nessuno — nemmeno all'app. Le tue voci sono per te.
- **Salta.** Segui ciò che ti parla. Non devi leggere in ordine.
- **Ripeti.** La stessa domanda di riflessione si legge diversamente fra tre mesi. Torna.
- **Condividi, se vuoi.** Con una persona di fiducia, con un accompagnamento peer, con un gruppo — o con nessuno. Entrambe le opzioni sono giuste.

**Protezione dei dati e autodeterminazione.** Tutto ciò che inserisci in questa app ti appartiene. Decidi tu se qualcosa viene sincronizzato, salvato o cancellato. Le voci sono cifrate. La cancellazione completa autonoma dei tuoi dati è sempre possibile.

Non è solo un dettaglio tecnico. È espressione della postura di questo workbook: non sei oggetto di un trattamento, sei soggetto del tuo cammino. L'autodeterminazione sui propri dati è un pezzo concreto di Recovery — e allo stesso tempo un diritto umano (UN-CRPD, OMS 2021, SAMHSA).

Se un capitolo diventa troppo, chiudilo. Se qualcosa ti tocca, resta lì. Non esiste un ordine sbagliato. Esiste solo il tuo cammino — e questo workbook va avanti finché glielo lasci fare.
:::

:::standard-quiz{id=q-19-std}
- q: "Devi leggere i capitoli in ordine?"
  type: multiple-choice
  options:
    - text: "Sì, altrimenti non funziona."
      correct: false
    - text: "No — salta come ti pare meglio."
      correct: true
      explanation: "Segui ciò che ti parla. Ripetere è benvenuto."
    - text: "Solo sotto la guida di un professionista."
      correct: false

- q: "Chi decide cosa viene salvato o cancellato nell'app?"
  type: multiple-choice
  options:
    - text: "L'app stessa."
      correct: false
    - text: "Tu — in ogni momento, in modo completamente cancellabile."
      correct: true
      explanation: "L'autodeterminazione sui tuoi dati è espressione della postura orientata al Recovery."
    - text: "Il tuo professionista."
      correct: false
:::

:::standard-flashcards{id=f-19-std}
- front: "Modo di lavoro"
  back: "Una pagina al giorno. Saltare permesso. Ripetere benvenuto. Condividere opzionale."
- front: "Protezione dei dati"
  back: "Le tue voci sono cifrate e ti appartengono. Cancellazione completa possibile in ogni momento."
- front: "Postura del workbook"
  back: "Compagno di viaggio, non manuale. Decidi tu ritmo, profondità e portata — e puoi anche chiudere."
:::


# 20. Crisi e sicurezza — numeri d’emergenza D-A-CH e Italia
{#kap-20 reading_time=2}

Se sei in una sofferenza acuta — se hai pensieri di farti del male o farlo ad altri, o se senti che i contenuti di questa app ti destabilizzano ulteriormente — questo non è il momento giusto per domande di riflessione. Per favore, cerca sostegno adesso.

:::crisis
I numeri d'emergenza sono strutturati nella frontmatter sotto `helplines:`. L'app li mostra come card paese per paese con Tap-to-Call e Tap-to-Open-URL.
:::

Questi numeri sono anonimi, gratuiti e senza giudizio. Non devi avere una «crisi vera e propria» per chiamare. Una chiamata fatta presto è sempre meglio di nessuna chiamata.

:::info{type=warmth title="Prima di chiudere: tre frasi per le ore difficili"}
- Non devi percorrere questa via da sola, da solo.
- Un sentimento è un'informazione, non un mandato — anche il sentimento più pesante si muoverà.
- Chiedere aiuto non è mai un segno di debolezza. È un segno che prendi sul serio la tua vita.
:::

:::easy{reading_time=1}
Se in questo momento stai molto male, non leggere oltre. Cerca aiuto.

- **Svizzera**: Telefono 143 (La Mano Tesa / Die Dargebotene Hand). Giorno e notte.
- **Italia**: Telefono Amico 02 2327 2327 (10:00–24:00). Samaritans 800 86 00 22 (lun–ven 13–22).
- **Germania**: Telefono 0800 111 0 111.
- **Austria**: Telefono 142.

Questi numeri sono gratuiti e anonimi. Puoi chiamare anche se non sai se è abbastanza grave.

Una chiamata non è mai troppo presto.
:::

:::quiz{id=q-20}
- q: "Quale numero chiami in Svizzera per La Mano Tesa?"
  type: multiple-choice
  options:
    - text: "112"
      correct: false
    - text: "143"
      correct: true
    - text: "147"
      correct: false
      explanation: "147 è Pro Juventute — per bambini e ragazzi."

- q: "Bisogna avere una «crisi vera» per chiamare?"
  type: true-false
  correct: false
  explanation: "No — una chiamata fatta presto è sempre meglio di nessuna chiamata."
:::

:::flashcards{id=f-20}
- front: "Numero di crisi Svizzera"
  back: "143 — La Mano Tesa / Die Dargebotene Hand. Giorno e notte. Anonimo. Gratuito."
- front: "Numero di crisi Italia"
  back: "Telefono Amico 02 2327 2327 (10–24). Samaritans 800 86 00 22 (lun–ven 13–22). Servizio Prevenzione Suicidio 800 011 110."
- front: "Numero di crisi Germania"
  back: "0800 111 0 111 o 0800 111 0 222. Telefonseelsorge. 24/7. Gratuito."
- front: "Numero di crisi Austria"
  back: "142. Telefonseelsorge. 24/7."
- front: "Bambini & ragazzi"
  back: "CH/AT: 147 (Pro Juventute / Rat auf Draht). Italia: Telefono Azzurro 19696. 24/7."
:::

:::standard{reading_time=2}
Se in questo momento sei in una sofferenza acuta — se hai pensieri di farti del male o di farlo ad altri, o se contenuti di questa app ti destabilizzano ulteriormente — questo non è il momento per domande di riflessione. Per favore, cerca sostegno adesso.

**I numeri più importanti per i paesi di lingua tedesca e per l'Italia:**

- **Svizzera:** **143** — La Mano Tesa / Die Dargebotene Hand. 24/7. Anonimo. Gratuito.
- **Italia:** **02 2327 2327** — Telefono Amico (10:00–24:00). **800 86 00 22** — Samaritans (lun–ven 13–22). **800 011 110** — Servizio Prevenzione Suicidio.
- **Germania:** **0800 111 0 111** o **0800 111 0 222** — Telefonseelsorge. 24/7. Gratuito.
- **Austria:** **142** — Telefonseelsorge. 24/7.

In pericolo di vita: **112** (in UE) o **144** (servizio sanitario CH/AT).

Per bambini e ragazzi: **147** (Pro Juventute CH / Rat auf Draht AT) o **19696** (Telefono Azzurro Italia). 24/7.

Questi numeri sono anonimi, gratuiti e senza giudizio. Non devi avere una «crisi vera e propria» per chiamare. Non devi spiegare se è abbastanza grave. Una chiamata fatta presto è sempre meglio di nessuna chiamata.

**Tre frasi per le ore difficili — prima di chiudere:**

- Non devi percorrere questa via da sola, da solo.
- Un sentimento è un'informazione, non un mandato. Anche il sentimento più pesante si muoverà.
- Chiedere aiuto non è un segno di debolezza. È un segno che prendi sul serio la tua vita.

Se in questo momento non riesci a chiamare nessuno: contatta una persona di cui ti fidi. Manda un messaggio. Vai al pronto soccorso più vicino. Un piccolo movimento verso l'esterno è abbastanza.

Non sei sola, non sei solo. Anche se ora si sente così.
:::

:::standard-quiz{id=q-20-std}
- q: "Quale numero chiami in Svizzera in caso di sofferenza psichica acuta?"
  type: multiple-choice
  options:
    - text: "112"
      correct: false
    - text: "143 (La Mano Tesa)"
      correct: true
      explanation: "143 è il numero di crisi 24/7 per la sofferenza psichica in Svizzera."
    - text: "144 — è solo per pericolo di vita / servizio sanitario."
      correct: false

- q: "Devi avere una «crisi vera» per chiamare?"
  type: multiple-choice
  options:
    - text: "Sì, altrimenti non ti prendono sul serio."
      correct: false
    - text: "No — una chiamata fatta presto è sempre meglio di nessuna."
      correct: true
      explanation: "Puoi chiamare anche se sei insicura, insicuro."
    - text: "Solo se sei in pericolo di vita."
      correct: false
:::

:::standard-flashcards{id=f-20-std}
- front: "Emergenza Svizzera"
  back: "143 — La Mano Tesa. 24/7. Anonimo. Gratuito."
- front: "Emergenza Italia"
  back: "Telefono Amico 02 2327 2327 (10–24). Samaritans 800 86 00 22 (lun–ven 13–22)."
- front: "Emergenza Germania"
  back: "0800 111 0 111 o 0800 111 0 222 — Telefonseelsorge. 24/7. Gratuito."
- front: "Emergenza Austria"
  back: "142 — Telefonseelsorge. 24/7."
- front: "Quando chiamare?"
  back: "Sempre. Anche se sei insicura, insicuro. Una chiamata non è mai troppo presto."
:::


# 21. Una piccola promessa alla fine
{#kap-21 reading_time=2}

Recovery non significa che tutto torna come era. Significa che qualcosa di nuovo può nascere — a volte persino qualcosa che senza questa esperienza non sarebbe mai esistito.

Avrai giorni in cui tutto questo suonerà come una promessa vuota. E avrai giorni in cui tu stesso/a ti accorgerai che qualcosa si è spostato — una speranza minuscola, una piccola connessione, un pensiero che prima non era possibile.

Cosa la ricerca può consegnarti per il cammino: non sei sola, non sei solo. Una via esiste. E la speranza puoi prenderla in prestito, finché non torni a sentirla.

:::quote{author="Patricia Deegan, 1996" source="deegan1996" lang="en"}
By accepting what we cannot do or be, we begin to discover what we can do and who we can become.
:::

:::quote-translation{source="deegan1996" translator="traduzione propria"}
Accettando ciò che non possiamo fare o essere, cominciamo a scoprire chi possiamo essere e cosa possiamo fare.
:::

:::quote{author="Antonio Machado"}
Caminante, no hay camino, se hace camino al andar. (Viandante, non c'è cammino, il cammino si fa camminando.)
:::

:::pull
Sul tuo cammino.
:::

:::easy{reading_time=1}
Recovery non significa: tutto come prima.

Recovery significa: qualcosa di nuovo può nascere.

Avrai giorni difficili. Avrai anche giorni più leggeri.

Tre frasi finali:

- Non sei sola, non sei solo.
- Una via esiste.
- La speranza puoi prenderla in prestito, finché non la senti di nuovo.

Sul tuo cammino.
:::

:::quiz{id=q-21}
- q: "Quale immagine descrive meglio Recovery?"
  type: multiple-choice
  options:
    - text: "Una linea dritta verso la meta."
      correct: false
    - text: "Un cammino che si fa camminando (Machado)."
      correct: true

- q: "A chi appartiene il cammino?"
  type: multiple-choice
  options:
    - text: "Al medico."
      correct: false
    - text: "A te — con alleati."
      correct: true
:::

:::flashcards{id=f-21}
- front: "Sul tuo cammino"
  back: "La frase di chiusura dell'introduzione. Recovery è sempre il tuo cammino — con alleati."
- front: "Tre frasi finali"
  back: "Non sei sola, non sei solo. Una via esiste. La speranza puoi prenderla in prestito, finché non la senti di nuovo."
- front: "Il cammino si fa camminando"
  back: "Antonio Machado — il motto di molti workbook Recovery e anche di quest'app."
:::

:::standard{reading_time=2}
Recovery non significa che tutto torna come era. Significa che qualcosa di nuovo può nascere — a volte persino qualcosa che senza questa esperienza non sarebbe mai esistito. Un'altra profondità. Un'altra attenzione. A volte un linguaggio che prima non avevi.

Avrai giorni in cui tutto questo suonerà come una promessa vuota. E avrai giorni in cui tu stesso/a ti accorgerai che qualcosa si è spostato — una speranza minuscola, una piccola connessione, un pensiero che prima non era possibile.

Entrambi fanno parte. Recovery non è un cammino dritto. Ha pause, anse, ritorni. Antonio Machado lo ha detto così: «Il cammino si fa camminando.» Vale anche per il tuo cammino.

Cosa la ricerca può consegnarti per il viaggio:

- **Non sei sola, non sei solo.** Migliaia di persone hanno attraversato periodi simili — e hanno trovato una buona vita.
- **Una via esiste.** Anche se oggi è invisibile. Anche se non somiglia alla via di altri.
- **La speranza puoi prenderla in prestito.** Se in questo momento non ne hai, altri la tengono per te — un accompagnamento peer, una terapeuta, un'amica, un libro, una storia da questo workbook.

Puoi chiudere di nuovo questo workbook. Puoi riaprirlo mesi dopo. Puoi condividerlo. Puoi dimenticarlo. Puoi anche dire: oggi no.

Ciò che resta è questa piccola promessa: sul tuo cammino. Camminiamo un pezzo con te.
:::

:::standard-quiz{id=q-21-std}
- q: "Cosa fare se in questo momento non senti speranza?"
  type: multiple-choice
  options:
    - text: "Allora Recovery è finito."
      correct: false
    - text: "Puoi prendere in prestito la speranza dagli altri — finché non torni a sentirla."
      correct: true
      explanation: "La speranza si condivide. Altri possono tenerla per te."
    - text: "Allora hai fatto qualcosa di sbagliato."
      correct: false

- q: "Come procede Recovery?"
  type: multiple-choice
  options:
    - text: "Come una linea dritta verso la meta."
      correct: false
    - text: "Come un cammino individuale — con pause, anse, ritorni. «Il cammino si fa camminando.» (Machado)"
      correct: true
      explanation: "Recovery non è lineare. Le ricadute fanno parte del cammino."
    - text: "Esattamente come per gli altri."
      correct: false
:::

:::standard-flashcards{id=f-21-std}
- front: "Recovery"
  back: "Qualcosa di nuovo può nascere. Non: tutto torna come prima."
- front: "Speranza in prestito"
  back: "Se non ne hai: altri la tengono per te — finché non torni a sentirla."
- front: "Tre frasi finali"
  back: "Non sei sola, non sei solo. Una via esiste. La speranza puoi prenderla in prestito."
- front: "Sul tuo cammino"
  back: "«Il cammino si fa camminando.» (Antonio Machado) — Camminiamo un pezzo con te."
:::


# Note metodiche (interne)
{#methodik}

Tutte le affermazioni sono verificate rispetto alle fonti primarie elencate nella frontmatter. Dove erano disponibili review e meta-analisi, queste sono state preferite ai singoli studi.

Le citazioni testuali sono riportate nella loro formulazione originale (widget Quote con riferimento `source`). Le rese in italiano sono segnalate come «traduzione propria» (widget Quote-Translation). Concetti e modelli (CHIME, CHIME-D, Speranza-Potere-Significato, Personal Medicine, Trialog, EX-IN, Salutogenesi, Open Dialogue) sono usati come termini scientifici e collegati nel registro delle fonti ai loro autori.


**Nota sulla traduzione italiana (giugno 2026):** Questa versione è una traduzione bozza prodotta da un'IA, basata sulla fonte tedesca primaria. Lo stile è il «tu» caloroso e personale; i termini tecnici Recovery, Empowerment, CHIME, EX-IN, Trialog restano non tradotti come consolidato nella letteratura. I contenuti sulla crisi e sulla sicurezza necessitano di una revisione professionale prima di un uso clinico o di una diffusione ufficiale. I numeri d'emergenza italiani sono stati aggiunti per persone italofone in Italia o nel Ticino svizzero.
