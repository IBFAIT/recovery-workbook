---
schema_version: "1.2"
content_id: "recovery-einleitung"
content_version: "3.14"
title: "Recovery"
subtitle: "Sveobuhvatni uvod — Nada. Moć. Smisao."
language: "sr"
translation_status: "draft-machine-translated"
translation_date: "2026-06-20"
translator: "Claude subagent (draft — needs professional review of crisis content)"
region: "D-A-CH"
target_audience: "betroffene"
target_audience_label: "Za osobe s vlastitim iskustvom psihičkih poteškoća"
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
    status: "draft-machine-translated"
  - code: "tr"
    label: "Türkçe"
    status: "planned"
  - code: "cs"
    label: "Čeština"
    status: "planned"

reading_modes:
  full:  "Detaljno — s istraživanjem, citatima i izvorima"
  easy:  "Jednostavno — kratko i jednostavnim jezikom"
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
  - country: "RS"
    name: "Centar SRCE Beograd"
    number: "(011) 7777 000"
    coverage: "17–23h"
    target: "svi"
  - country: "RS"
    name: "Linija za decu i mlade (Pomoć deci)"
    number: "0800 010 010"
    coverage: "deca i mladi"
    target: "deca/mladi"
  - country: "HR"
    name: "Plavi telefon Zagreb"
    number: "(01) 4833 888"
    coverage: "savjetovanje"
    target: "svi"
  - country: "HR"
    name: "Centar za krizna stanja Rijeka"
    number: "(051) 332 010"
    coverage: "krizna stanja"
    target: "svi"
  - country: "BA"
    name: "Plavi telefon Sarajevo"
    number: "080 050 000"
    coverage: "savjetovanje"
    target: "svi"
---
# Važna napomena pre čitanja
{#disclaimer reading_time=2}

:::info{type=warmth title="Molim te, prvo pročitaj ovo"}
Ova aplikacija je **prototip**. Još je u razvoju i nije završena.

Služi isključivo za testiranje jednog mogućeg budućeg workbook-a u oblasti recovery.
:::

## Šta ovo jeste, a šta nije

Trenutno koristiš **testnu verziju** aplikacije koja je još u razvoju. Tekstovi i funkcije su prvi nacrt. Još nisu profesionalno provereni — ni stručno-klinički ni jezički.

**Ova aplikacija NIJE terapijsko sredstvo.** Ne zamenjuje lečenje, terapiju, lekarski savet niti kriznu intervenciju.

## Molim te, drži se sledećih pravila

- **Ne koristi je u kliničkom okruženju.** U sadašnjem obliku ova aplikacija ne sme da se koristi kao pomoćno sredstvo u klinikama, ordinacijama, savetovalištima ili drugim mestima zdravstvene zaštite.
- **Ne koristi je kao jedinu podršku u privatnom životu.** Ako si i sam/a pogođen/a, koristi ovu aplikaciju samo u okviru organizovane testne faze — ne kao jedinu pratnju u teškoj životnoj situaciji.
- **U slučaju sumnje: potraži stvarnu pomoć.** Ako ti je teško, obrati se osobi od poverenja, onima koji te leče ili kriznim brojevima koji su navedeni u 20. poglavlju ovog workbook-a.

## Bez garancije, bez odgovornosti

Sadržaji ove aplikacije stavljaju se na raspolaganje bez ikakve garancije. Ne preuzima se nikakva odgovornost za štete — materijalne ili nematerijalne — koje bi mogle nastati korišćenjem ili nekorišćenjem ove aplikacije.

Aplikacija je napravljena po najboljem znanju i na osnovu aktuelnih istraživanja o recovery. Uprkos tome može sadržati greške, netačnosti ili neprikladne formulacije. Ako primetiš nešto, raduje nas povratna informacija — upravo tome i služi ova testna faza.

## Ako se trenutno nalaziš u krizi

Ako ti je čitanje ove aplikacije teško ili te destabilizuje, ostavi je.

U akutnim krizama možeš dobiti pomoć 24 sata dnevno:
- **Švajcarska:** 143 (Die Dargebotene Hand)
- **Nemačka:** 0800 111 0 111 (Telefonseelsorge)
- **Austrija:** 142 (Telefonseelsorge)
- **U životnoj opasnosti:** 112 ili 144 (CH/AT) odnosno 112 (DE)

Potražiti pomoć nikada nije prerano.

:::standard{reading_time=2}
Trenutno koristiš **prototip**. Ova aplikacija još nije završena — treba da pokaže kako bi mogao da izgleda budući Recovery workbook. Tekstovi i funkcije su prvi nacrt i još nisu profesionalno pregledani.

**Ova aplikacija nije terapeutski alat.** Ne zamenjuje lečenje, terapiju, medicinski savet ni kriznu intervenciju.

**Molimo te poštuj sledeća pravila:**

- Ne koristi je u kliničkom okruženju — dakle ne kao pomoć u klinikama, ordinacijama ili savetovalištima.
- Ne koristi je kao jedinu podršku u teškoj životnoj situaciji.
- U slučaju sumnje: potraži pravu pomoć — osobu od poverenja, svoj tim za negu ili kriznu liniju.

**U akutnoj krizi** možeš zvati 24 sata dnevno: Centar Srce (Srbija) **0800 300 303**, Švajcarska **143**, Nemačka **0800 111 0 111**, Austrija **142**. U životnoj opasnosti: **112**.

Sadržaji se daju bez garancije. Ako primetiš nešto, biće nam drago da čujemo tvoju povratnu informaciju — upravo tome služi ova faza testiranja.

Nastavljanjem čitanja potvrđuješ da si razumeo/la ova upozorenja.
:::

:::pull
Time što nastavljaš da čitaš potvrđuješ da si ove napomene razumeo/razumela i da aplikaciju koristiš u okviru testne faze.
:::


# Uvod: Recovery počinje pričama
{#vorspann reading_time=4}

:::pull
Recovery — to su mnoge hiljade priča ljudi koji su uprkos svojim simptomima ili upravo zbog njih pronašli put do dobrog života.
:::

To su priče koje rijetko dospijevaju u novine, jer ne donose skandal. Ali priče koje se događaju svaki dan — u knjižarama, kraj klavira, u zborovima, u krugovima za razgovor, u dnevnim sobama, u čekaonicama, u kuhinjama.

Žena koja je dugo bila uvjerena da nikada više neće raditi, a danas vodi malu knjižaru. Otac koji nakon psihoze opet svira klavir — drukčije nego prije, s manje savršenstva, s više ljubavi. Mladić koji je nakon godina sa Borderline-dijagnozom postao pratilac oporavka, jer želi drugima pružiti ruku koja je njemu nedostajala. Majka koja je svoju kćer pratila kroz tešku poremećenost prehrane i kaže: u tom vremenu naučila sam više o ljubavi nego u cijelom životu prije toga.

Takvih priča nema na desetke. Ima ih na hiljade. Vjerojatno na stotine hiljada. Onoliko koliko ima ljudi koji su ikada prošli kroz teško psihičko vrijeme.

## Recovery je dokumentiran

Škotska Recovery-mreža je 2007. prikupila šezdeset četiri takve priče i sistematski ih analizirala [^brown2007]. Britanska inicijativa ImROC godinama prikuplja iskustva [^imroc]. Međunarodna zajednica Onih koji čuju glasove od 1990-ih prikuplja glasove koji nisu u udžbenicima [^hvn].

Na Sveučilištu Nottingham je Mike Slade s NEON-programom — Narrative Experiences Online — izgradio znanstvenu zbirku snimljenih Recovery-priča [^slade2021neon]. U randomiziranim kontroliranim studijama pokazano je da slušanje takvih priča mjerljivo poboljšava kvalitetu života — kod ljudi s iskustvom psihoze [^rennick2024neon] i kod bližnjih koji ih prate [^neonc2024].

Drugim riječima: Recovery nije samo doživljeno obećanje. Recovery je dokumentiran fenomen. I priče drugih ljudi su same po sebi oblik pomoći.

## Recovery je praktičan

Recovery se ne događa najprije u ordinaciji. Recovery su susreti. Recovery je vrt u kojem se nakon mjeseci ponovo sadi. Pas koji svako jutro nađe vrata. Zbor u kojem tvoj dah opet ima glas. Prijateljica koja sluša ne želeći popraviti. Trijaloški krug za razgovor u srijedu navečer. Šetnja u brda. Kruh od kiselog tijesta kojem treba dvanaest sati.

Recovery su priče o otpornosti — i o kreativnosti koja često nastaje upravo tamo gdje je nešto puklo. Recovery je vrlo često i: sreća.

Ne ona besprijekorna, uvijek blistava sreća iz sjajnih brošura. Već ona druga — tiha, zahvalna, ponekad iznenađena sreća. Sreća koju upoznaješ tek kad znaš koliko dug može biti jedan dan.

## A ti?

Ne moraš ništa od ovoga još osjećati da bi bio/la ovdje. Možda upravo nije trenutak za velike riječi poput sreće ili smisla. Možda je dovoljno da danas pročitaš ovu stranicu. To je dovoljno.

Ova radna knjiga napisana je za ljude koji idu takvim putem — ili ga prate, ili žele razumjeti. Ne želi biti lijepa teorija. Želi biti putokaz.

:::pull
Prije nego što krenemo — kratak putokaz.
:::

:::easy{reading_time=1}
Recovery je pokret. Mnogi ljudi su uspjeli: imali su teško vrijeme. Danas dobro žive. Unatoč bolesti. Ponekad i zbog bolesti.

Postoji hiljade takvih priča.

Recovery se ne događa samo kod liječnika. Recovery se događa u tvom životu. Kod kuhanja. U šetnji. U razgovoru s dobrim ljudima.

Ova radna knjiga želi ti pomoći. Nije knjiga za učenje. To je pratilac.
:::

:::quiz{id=q-vorspann}
- q: "Gdje se Recovery najviše događa?"
  type: multiple-choice
  options:
    - text: "Samo u klinici."
      correct: false
      explanation: "Ne. Recovery se događa prije svega u svakodnevici — u susretima, u malim koracima."
    - text: "U životu — u susretima, u svakodnevici."
      correct: true
      explanation: "Točno. Liječenje je alat, ne mjesto."
    - text: "Tek kad svi simptomi nestanu."
      correct: false
      explanation: "Recovery ne počinje tek nakon nestanka simptoma."

- q: "Koliko Recovery-priča postoji?"
  type: multiple-choice
  options:
    - text: "Šaka."
      correct: false
    - text: "Stotine."
      correct: false
    - text: "Hiljade, ako ne i stotine hiljada."
      correct: true
      explanation: "Onoliko koliko ima ljudi koji su ikada prošli kroz teško vrijeme."
:::

:::flashcards{id=f-vorspann}
- front: "Recovery počinje sa …"
  back: "… pričama. Hiljadama ljudi koji su unatoč ili zbog svojih simptoma pronašli put do dobrog života."
- front: "NEON-program"
  back: "Znanstvena zbirka snimljenih Recovery-priča (Sveučilište Nottingham). Studije pokazuju: slušanje takvih priča mjerljivo poboljšava kvalitetu života."
- front: "Recovery se događa …"
  back: "… ne najprije u ordinaciji. U vrtu, u zboru, u razgovoru, kod kuhanja, u susretima."
:::

:::standard{reading_time=2}
Recovery počinje pričama. Ne teorijom, ne dijagnozama — ljudima koji su pronašli put.

Žena koja je godinama mislila da nikada više neće raditi, a danas vodi malu knjižaru. Otac koji nakon psihoze opet svira klavir — drukčije nego prije, s manje savršenstva, s više ljubavi. Mladić koji nakon Borderline-dijagnoze danas prati druge, jer im želi pružiti ruku koja je njemu nedostajala.

Takvih priča nema na desetke. Ima ih na hiljade. Onoliko koliko ima ljudi koji su ikada prošli kroz teško psihičko vrijeme.

Recovery je više od doživljenog obećanja. Recovery je dokumentiran:

- Škotska Recovery-mreža sistematski je analizirala 64 životna puta.
- Sveučilište Nottingham znanstveno prikuplja Recovery-priče.
- Studije pokazuju: Slušanje takvih priča mjerljivo poboljšava kvalitetu života.

Recovery se i ne događa često najprije u ordinaciji. Recovery se događa u vrtu u kojem se nakon mjeseci ponovo sadi. U zboru u kojem tvoj dah opet ima glas. U prijateljici koja sluša ne želeći popraviti.

Ne moraš još ništa od toga osjećati da bi bio/la ovdje. Možda je danas dovoljno da pročitaš ovu stranicu. To je dovoljno.

Ova radna knjiga je putokaz. Ne lijepa teorija — već pratilac za tvoj put.
:::

:::standard-quiz{id=q-vorspann-std}
- q: "Gdje se Recovery prije svega događa?"
  type: multiple-choice
  options:
    - text: "Samo u klinici ili na terapiji."
      correct: false
      explanation: "Recovery se događa prije svega u svakodnevici — u susretima, u vrtu, u zboru, kod kuhanja."
    - text: "U životu — u susretima i u svakodnevici."
      correct: true
      explanation: "Točno. Liječenje je alat, ne mjesto."
    - text: "Tek kad svi simptomi nestanu."
      correct: false
      explanation: "Ne. Recovery počinje usred poteškoće."

- q: "Koliko Recovery-priča postoji?"
  type: multiple-choice
  options:
    - text: "Šaka."
      correct: false
    - text: "Hiljade, vjerojatno stotine hiljada."
      correct: true
      explanation: "Onoliko koliko ima ljudi koji su ikada prošli kroz teško vrijeme."
    - text: "Samo vrlo malo pojedinačnih slučajeva."
      correct: false
:::

:::standard-flashcards{id=f-vorspann-std}
- front: "Recovery počinje sa …"
  back: "… pričama. Hiljadama ljudi koji su unatoč ili zbog svojih simptoma pronašli put do dobrog života."
- front: "Gdje se Recovery događa?"
  back: "U svakodnevici. U vrtu, u zboru, u razgovoru, kod kuhanja. Liječenje je alat, ne mjesto."
- front: "Jesi li sam/a?"
  back: "Ne. Hiljade su prošle kroz slična vremena. Njihove priče pokazuju: postoji put."
:::


# Kratka napomena o jeziku
{#sprache reading_time=2}

Riječi stvaraju stvarnost. Tko se obraća kao „šizofreničar", čuje dijagnozu. Tko se obraća kao „osoba s dijagnozom šizofrenije", ostaje prije svega osoba. Ovaj uvod svjesno koristi jezik koji prvo stavlja osobu (Person-first): dijagnoza dolazi nakon osobe, a ne prije nje [^ameringschmolke2012] [^knuf2026].

Govorimo o ljudima s psihičkim krizama, kriznim iskustvima ili psihijatrijskim iskustvom – ne o „bolesnima". Govorimo o ljudima u Recovery-u – ne o „izliječenima". Koristimo „ti" jer je digitalna radna knjiga osoban prostor – ne zato što se postavljamo iznad tebe. Ako čitaš kao stručna osoba: tumači „ti" kao model za jezični stil koji stvara blizinu, bez naglašavanja hijerarhije.

Pristupačan prijevod riječi Recovery na srpski/hrvatski nije se ustalio – isto kao ni za usko povezan pojam Empowerment. Zato koristimo Recovery kao stručni pojam, a u idućem poglavlju mu dodajemo dopunjavajuće čitanje „Nada – Moć – Smisao" [^ameringschmolke2006].

:::easy{reading_time=1}
Riječi su važne.

Tko se zove „šizofreničar", svodi se na bolest. Tko se zove „osoba sa šizofrenijom", ostaje prije svega osoba.

Koristimo riječ Recovery. To je engleska riječ. Nema dobrog prijevoda. Recovery znači: ići putem prema dobrom životu.

U ovoj aplikaciji obraćamo ti se sa „ti". Ne zato što smo bolji. Već zato što je ovaj prostor tvoj prostor.
:::

:::quiz{id=q-sprache}
- q: "Koja formulacija je Person-first?"
  type: multiple-choice
  options:
    - text: "Šizofreničar"
      correct: false
    - text: "Osoba s dijagnozom šizofrenije"
      correct: true
      explanation: "Dijagnoza dolazi nakon osobe, ne prije nje."
    - text: "Šizo"
      correct: false
:::

:::flashcards{id=f-sprache}
- front: "Person-first jezik"
  back: "Dijagnoza dolazi nakon osobe, ne prije nje: 'osoba sa šizofrenijom' umjesto 'šizofreničar'."
- front: "Zašto Recovery kao pojam?"
  back: "Ne postoji elegantan prijevod. Recovery se dosljedno koristi kao ustaljen stručni pojam."
:::

:::standard{reading_time=2}
Riječi stvaraju stvarnost. Nisu bezopasne.

Tko se naziva „šizofreničarom", čuje dijagnozu prije nego što postaje osoba. Tko se naziva „osobom s dijagnozom šizofrenije", ostaje prije svega osoba — i nosi dijagnozu kao dio, ne kao cjelinu.

Ova radna knjiga svjesno koristi Person-first jezik: dijagnoza dolazi nakon osobe, ne prije nje.

Konkretno to znači:

- Govorimo o ljudima s psihičkim krizama, ne o „bolesnima".
- Govorimo o ljudima u Recovery-u, ne o „izliječenima".
- Govorimo o pratnji oporavka, ne o „radu s pacijentima".

Za samu riječ Recovery ne postoji pristupačan prijevod — kao ni za Empowerment. Zato dosljedno koristimo Recovery kao stručni pojam. U idućem poglavlju mu dodajemo srpsko/hrvatsko čitanje „Nada — Moć — Smisao".

Posebnost: obraćamo ti se sa „ti". Ne zato što se postavljamo iznad tebe — naprotiv. Digitalna radna knjiga je osoban prostor. „Ti" stvara blizinu bez naglašavanja hijerarhije. Ako čitaš kao stručna osoba: tumači „ti" kao model jezičnog stila koji izražava ravnopravnost.
:::

:::standard-quiz{id=q-sprache-std}
- q: "Koja formulacija je Person-first?"
  type: multiple-choice
  options:
    - text: "Šizofreničar"
      correct: false
      explanation: "Ovdje dijagnoza dolazi prva — to nije Person-first."
    - text: "Osoba s dijagnozom šizofrenije"
      correct: true
      explanation: "Točno. Dijagnoza nakon osobe — osoba ostaje prije svega vidljiva."
    - text: "Šizo"
      correct: false
      explanation: "Stigmatizirajuće i svodi osobu na dijagnozu."

- q: "Zašto radna knjiga koristi „ti"?"
  type: multiple-choice
  options:
    - text: "Jer se autori osjećaju superiorno."
      correct: false
    - text: "Jer je digitalna radna knjiga osoban prostor — blizina bez hijerarhije."
      correct: true
      explanation: "„Ti" stvara blizinu, ne distancu prema dolje."
:::

:::standard-flashcards{id=f-sprache-std}
- front: "Person-first jezik"
  back: "Dijagnoza dolazi nakon osobe, ne prije nje. „Osoba sa šizofrenijom" umjesto „šizofreničar"."
- front: "Zašto „Recovery" ostaje na engleskom?"
  back: "Nema pristupačnog prijevoda. Recovery se koristi kao ustaljen stručni pojam."
:::


# Dobrodošla, dobrodošao
{#willkommen reading_time=3}

Lijepo je što si ovdje.

Ova digitalna radna knjiga napisana je za tebe — ako upravo proživljavaš teško razdoblje, ako si dobila ili dobio dijagnozu ili već dugo živiš s psihičkom poteškoćom.

Možda si bila ili bio često u liječenju. Možda tek krećeš. Možda već imaš dug put iza sebe i tražiš novi jezik za ono što proživljavaš.

Ova radna knjiga je napisana tako da je možeš istraživati vlastitim tempom. Ne moraš čitati sve. Ne moraš ništa raditi određenim redom. Smiješ preskakati, vraćati se, ostaviti je sa strane.

:::info{type=metaphor title="Slika za put: Kintsugi"}
Kintsugi je tradicionalna japanska umjetnost popravka. Razbijena keramika spaja se zlatom. Mjesta loma se ne skrivaju, nego se čine vidljivima i oplemenjuju. Posuda zbog loma ne postaje manje vrijedna — nego, u očima mnogih, vrednija.

Putovi oporavka često slijede sličnu logiku: ne radi se o tome da se mjesta loma sakriju, nego da se integriraju u novu cjelinu.

Recovery ne znači postati onakav kakav si bila ili bio prije. Recovery znači da ono što je bilo smije postati dio nove cjeline.
:::

:::quote{author="U.S. Substance Abuse and Mental Health Services Administration (SAMHSA), 2012" source="samhsa2012"}
Recovery je putovanje ozdravljenja i preobrazbe koje osobi s psihičkom poteškoćom omogućuje da vodi smislen život u zajednici po vlastitom izboru — istovremeno težeći da ostvari svoj puni potencijal.
:::

:::easy{reading_time=1}
Lijepo je što si ovdje.

Ova radna knjiga je napisana za tebe — ako proživljavaš teška razdoblja.

Ne moraš čitati sve. Odaberi ono što ti odgovara. Vrati se kad poželiš.

Ti određuješ svoj tempo.
:::

:::quiz{id=q-willkommen}
- q: "Za koga je ova radna knjiga?"
  type: multiple-choice
  options:
    - text: "Za osobe s vlastitim iskustvom psihičkih poteškoća."
      correct: true
      explanation: "Napisana je za tebe — gdje god se trenutno nalaziš na svom putu."
    - text: "Samo za stručnjake."
      correct: false
    - text: "Samo za osobe s određenom dijagnozom."
      correct: false

- q: "Moraš li radnu knjigu čitati redom?"
  type: true-false
  correct: false
  explanation: "Ne. Smiješ preskakati, vraćati se, ostaviti je sa strane. Ti određuješ tempo i redoslijed."
:::

:::flashcards{id=f-willkommen}
- front: "Za koga je ova radna knjiga?"
  back: "Za tebe — ako imaš vlastito iskustvo psihičkih poteškoća."
- front: "Kintsugi"
  back: "Japanska umjetnost popravka: mjesta loma spojena zlatom, ne skrivena. Metafora za Recovery: ono što je razbijeno postaje dio nove cjeline."
- front: "Samoodređenje pri čitanju"
  back: "Ti biraš što čitaš. Ti biraš svoj tempo. Smiješ se posvuda vratiti i ponovo ući."
:::

:::standard{reading_time=2}
Lijepo je što si tu.

Ova radna knjiga napisana je za tebe — ako upravo proživljavaš teško vrijeme, ako si dobila ili dobio dijagnozu ili već dugo živiš s psihičkom poteškoćom.

Možda si na početku. Možda imaš već mnoge terapije iza sebe. Možda upravo tražiš nove riječi za ono što doživljavaš — ili jednostavno nekoga tko ne želi popravljati, već ići s tobom.

Ne moraš ništa donijeti sa sobom. Nikakvo predznanje, nikakav dobar dan, nikakvu gotovu priču. Pročitaj što ti govori. Preskoči što ti sada ne odgovara. Vrati se kad budeš htjela ili htio.

Slika koju rado koristimo je Kintsugi — japanska umjetnost popravka. Razbijena keramika spaja se zlatom. Mjesta loma ne skrivaju se, već se čine vidljivima. Posuda zbog loma ne gubi vrijednost — u očima mnogih postaje vrjednija.

Recovery slijedi sličnu logiku. Ne radi se o tome da se izbriše sve što je bilo. Radi se o tome da ono što je razbijeno smije postati dio nove cjeline.

Nekoliko napomena prije nego što kreneš:

- Ti određuješ tempo i redoslijed.
- Postoje različiti načini čitanja: jednostavan, standardni, opširan.
- Možeš svuda ući i izaći.
- Ako nešto postane previše: ostavi. To nije odustajanje — to je briga o sebi.

Nitko te ne tjera. Ovaj prostor pripada tebi.
:::

:::standard-quiz{id=q-willkommen-std}
- q: "Tko određuje tempo i redoslijed?"
  type: multiple-choice
  options:
    - text: "Aplikacija."
      correct: false
    - text: "Ti."
      correct: true
      explanation: "Smiješ preskakati, ostaviti, vraćati se."
    - text: "Redoslijed je čvrsto zadan."
      correct: false

- q: "Što Kintsugi znači kao slika za Recovery?"
  type: multiple-choice
  options:
    - text: "Mjesta loma čine se što nevidljivijima."
      correct: false
    - text: "Mjesta loma postaju vidljiva — i dio nove cjeline."
      correct: true
      explanation: "Recovery ne znači izbrisati sve. Ono što je bilo smije postati dio novog."
:::

:::standard-flashcards{id=f-willkommen-std}
- front: "Tvoj tempo"
  back: "Ti određuješ što čitaš i kada. Preskakati, ostaviti, vraćati se — sve je dopušteno."
- front: "Kintsugi"
  back: "Japanska umjetnost popravka: mjesta loma spojena zlatom. Metafora za Recovery — razbijeno postaje dio nove cjeline."
- front: "Ako nešto postane previše"
  back: "Ostavi. To nije odustajanje — to je briga o sebi."
:::



# 1. Što Recovery zapravo znači
{#kap-1 reading_time=5}

## Riječ i njezina povijest

Engleska riječ recovery doslovno znači oporavak, ponovno zadobivanje, oporavak snaga. U području mentalnog zdravlja se od 1980-ih godina ustalila kao zajednički pojam za novi pogled na duševnu patnju [^anthony1993] [^deegan1988].

Recovery pritom nije prvenstveno medicinski pojam. Potječe iz iskustava ljudi koji su i sami dobili psihijatrijske dijagnoze i koji su se odbijali na njih svesti [^chamberlin1978] [^deegan1988].

## Klasična definicija

Najčešće citirana definicija potječe od Williama Anthonyja, tadašnjeg direktora Center for Psychiatric Rehabilitation na Boston University.

:::quote{author="Anthony, 1993, str. 15" source="anthony1993" lang="en"}
Recovery is described as a deeply personal, unique process of changing one's attitudes, values, feelings, goals, skills, and/or roles. It is a way of living a satisfying, hopeful, and contributing life even with limitations caused by illness.
:::

:::quote-translation{source="anthony1993" translator="vlastiti prevod"}
Recovery je duboko osoban, jedinstven proces promjene — vlastitih stavova, vrijednosti, osjećaja, ciljeva, sposobnosti ili uloga. To je način života u kojem je moguće, i s ograničenjima koja donosi bolest, voditi ispunjen, ispunjen nadom i smislen život te dati svoj doprinos.
:::

Ova definicija već više od tri desetljeća predstavlja međunarodnu referentnu točku. Preuzeli su je između ostalih SAMHSA [^samhsa2012], obilježila ju je tradicija Sainsbury Centre for Mental Health i integrirana je u smjernice WHO-a [^who2021].

## Klinički i osobni oporavak

Istraživanje razlikuje dva pojma [^slade2009]:

- **Klinički oporavak** (clinical recovery): simptomi se smanjuju ili nestaju, dijagnoza gubi na značaju. Ovo razumijevanje dolazi iz medicine.
- **Osobni oporavak** (personal recovery): doživljavaš svoj život kao smislen, vrijedan življenja i samoodređen — neovisno o tome jesu li svi simptomi nestali ili ne.

Recovery u smislu ove radne knjige misli prije svega na osobni oporavak. On može ići uz klinički oporavak, ali ne mora.

## Definicije na njemačkom govornom području

:::quote{author="Stiftung Pro Mente Sana Švicarska, 2024" source="promentesana"}
Najkraći opis Recoveryja glasi: voditi što je moguće bolji život, i u suočenju s teškom psihičkom poteškoćom.
:::

Amering i Schmolke govore o „kraju neizlječivosti" [^ameringschmolke2012]. Oslanjaju se na longitudinalna istraživanja koja pokazuju: i nakon teških bolesti poput šizofrenije moguć je ispunjen život. Knuf razumije Recovery kao proces suočavanja sa samim sobom i s bolešću — s ciljem da se unatoč psihičkim problemima vodi život pun nade i aktivnosti [^knuf2026].

Njemačka S3-smjernica „Psihosocijalne terapije kod teških psihičkih bolesti" uvela je Recovery u glavni tok skrbi na njemačkom govornom području i imenovala Recovery-orijentaciju kao vodeći princip [^dgppn2019].

:::reflection{id=1 title="Što za tebe znači oporavak?"}
- Kad čuješ riječ oporavak — koja se slika prva pojavljuje?
- Koja te od gornjih definicija najviše dotiče? I zašto?
- Što bi za tebe bio „dobar život" — i onda kad nije sve „nestalo"?
:::

:::easy{reading_time=2}
Recovery znači: oporavak.

Ali Recovery ne znači: svi simptomi moraju nestati.

Recovery znači: živiš dobro. I onda kada još proživljavaš teško.

Postoje dvije vrste oporavka:

- Simptomi postaju manji. To je klinički oporavak.
- Doživljavaš svoj život kao dobar i smislen. To je osobni oporavak.

Oboje je moguće. Oboje smije postojati istovremeno.

Jedna švicarska zaklada kaže: Recovery znači voditi što je moguće bolji život. I onda kada je nešto teško prisutno.

:::reflection{id=1-easy title="Pitaj samu sebe, samog sebe"}
- Što za tebe znači dobar život?
- Što za to moraš imati? A što ne?
:::
:::

:::quiz{id=q-1}
- q: "Što znači Recovery?"
  type: multiple-choice
  options:
    - text: "Svi simptomi moraju nestati."
      correct: false
      explanation: "Ne. Osobni oporavak može funkcionirati i s trajnim simptomima."
    - text: "Voditi smislen, samoodređen život — i kad simptomi ostaju."
      correct: true
      explanation: "Točno. To je suština osobnog oporavka (Anthony 1993)."
    - text: "Određena terapijska metoda."
      correct: false

- q: "Koje dvije vrste oporavka razlikuje istraživanje?"
  type: multiple-choice
  options:
    - text: "Brzi i spori oporavak."
      correct: false
    - text: "Klinički i osobni oporavak."
      correct: true
      explanation: "Klinički = simptomi nestaju. Osobni = voditi život sa smislom."
    - text: "Terapijski i medikamentozni oporavak."
      correct: false
:::

:::flashcards{id=f-1}
- front: "Klinički oporavak"
  back: "Simptomi se smanjuju ili nestaju. Dijagnoza gubi na značaju. Medicinsko razumijevanje ozdravljenja."
- front: "Osobni oporavak"
  back: "Doživljavaš svoj život kao smislen, vrijedan življenja i samoodređen — neovisno o tome jesu li svi simptomi nestali."
- front: "Anthony 1993 — temeljna definicija"
  back: "Recovery je duboko osoban, jedinstven proces promjene stavova, vrijednosti, osjećaja, ciljeva i uloga — put da se vodi ispunjen život, i s ograničenjima."
- front: "Pro Mente Sana — najkraća definicija"
  back: "Voditi što je moguće bolji život — i u suočenju s teškom psihičkom poteškoćom."
:::

:::standard{reading_time=2}
Recovery je engleska riječ. Doslovno znači oporavak, ponovno zadobivanje, povratak snaga. U području psihičkog zdravlja od 1980-ih je zajednički pojam za novi pogled na duševnu patnju — i to onaj koji nisu izmislili liječnici, već sami ljudi s vlastitim iskustvom.

Klasičnu definiciju dao je William Anthony, istraživač iz Bostona: Recovery je duboko osoban proces promjene vlastitih stavova, vrijednosti, ciljeva i uloga — put k ispunjenom životu s nadom, čak i s ograničenjima neke bolesti.

Istraživanje razlikuje dva čitanja:

- **Klinički oporavak:** Simptomi se smanjuju ili nestaju. Dijagnoza gubi važnost. To je medicinski pogled.
- **Osobni oporavak:** Doživljavaš svoj život kao smislen, vrijedan i samoodređen — neovisno o tome jesu li simptomi još tu.

Recovery u smislu ove radne knjige prije svega znači osobni oporavak. Može ići zajedno s kliničkim oporavkom, ali ne mora. Oboje smije postojati istodobno. I oboje smije imati svoj tempo.

Švicarska zaklada Pro Mente Sana to sažima u jednoj rečenici: Recovery znači voditi što bolji život — i u susretu s teškom psihičkom poteškoćom.

Važno je: ti si više od svoje dijagnoze. Ti si prije svega osoba — sve ostalo dolazi nakon toga. I ne moraš ovaj put ići sam ili sama. Drugi te mogu pratiti.
:::

:::standard-quiz{id=q-1-std}
- q: "Što Recovery prije svega znači?"
  type: multiple-choice
  options:
    - text: "Biti izliječen. Više nema simptoma."
      correct: false
      explanation: "To bi bio klinički oporavak. Recovery znači više — prije svega osobni oporavak."
    - text: "Ispunjen život — i sa simptomima."
      correct: true
      explanation: "Upravo je to klasična Anthonyeva definicija (1993)."
    - text: "Određena terapijska metoda."
      correct: false

- q: "Koja dva oblika oporavka razlikuje istraživanje?"
  type: multiple-choice
  options:
    - text: "Brzi i spori oporavak."
      correct: false
    - text: "Klinički i osobni oporavak."
      correct: true
      explanation: "Klinički = simptomi nestaju. Osobni = voditi smislen život."

- q: "Tko je razvio Recovery kao koncept?"
  type: multiple-choice
  options:
    - text: "Prije svega liječnici i farmaceutske kompanije."
      correct: false
    - text: "Ljudi s vlastitim psihijatrijskim iskustvom — zajedno sa znanošću."
      correct: true
      explanation: "Pokret dolazi iz iskustava ljudi s vlastitim iskustvom."
:::

:::standard-flashcards{id=f-1-std}
- front: "Recovery (jezgrovita definicija)"
  back: "Voditi ispunjen život s nadom — i s ograničenjima bolesti (Anthony 1993)."
- front: "Klinički oporavak"
  back: "Simptomi se smanjuju ili nestaju. Dijagnoza gubi važnost."
- front: "Osobni oporavak"
  back: "Doživljavaš svoj život kao smislen, vrijedan i samoodređen — neovisno o tome ostaju li simptomi."
- front: "Pro Mente Sana — najkraća definicija"
  back: "Voditi što bolji život, i u susretu s teškom poteškoćom."
:::



# 2. „Nada — Moć — Smisao"
{#kap-2 reading_time=3}

2006. godine su Michaela Amering i Margit Schmolke u švicarskom stručnom časopisu Managed Care objavile članak pod naslovom „Nada — Moć — Smisao. Recovery-koncepti u psihijatriji" [^ameringschmolke2006]. Time su presudno obilježile čitanje Recoveryja na njemačkom govornom području.

Trijada „Nada — Moć — Smisao" sažima ono o čemu se kod Recoveryja iz DACH-perspektive radi — kao razumljivu, bliskoj svakodnevici prijenos centralnih engleskih pojmova.

| Hrvatski | Engleski | Značenje u kontekstu D-A-CH |
|----------|----------|-----------------------------|
| **Nada** | Hope | (Ponovno) pronaći osjećaj sebe i neovisno o bolesti — nada kao terapijski djelotvoran resurs. |
| **Moć** | Empowerment | Osnaživanje, sloboda izbora, vlastita odgovornost — „moć" u smislu povratka prostora za djelovanje [^knufseibert2004]. |
| **Smisao** | Meaning | Vrijednosti, ciljevi, doprinos, pripadnost — definirati život izvan uloge pacijenta. |

Nada u ovom razumijevanju je tijesno povezana s osjećajem sebe: samopoštovanjem koje traje neovisno o doživljaju bolesti, i identitetom koji obuhvaća više od uloge pacijenta [^ameringschmolke2006].

Ova tri pojma pristaju Anthonyjevoj definiciji Recoveryja [^anthony1993]. I centralno se podudaraju s modelom CHIME [^leamy2011]: Nada = Hope, Moć = Empowerment, Smisao = Meaning. Povezanost (Connectedness) i Identitet (Identity) tvore okolni okvir odnosa i sebstva.

:::easy{reading_time=1}
Dvije istraživačice pronašle su tri riječi za Recovery na njemačkom:

- **Nada** — Vjeruješ da može biti bolje.
- **Moć** — Smiješ odlučivati. Nisi samo pacijent/ica.
- **Smisao** — Tvoj život ima vrijednost. Ti pripadaš.

Ove tri riječi su njemačko čitanje engleskog modela CHIME. Povezanost s drugima i vlastiti identitet također pripadaju tome.
:::

:::quiz{id=q-2}
- q: "Što znači 'Moć' u ovom čitanju?"
  type: multiple-choice
  options:
    - text: "Vršiti moć nad drugim ljudima."
      correct: false
    - text: "Osnaživanje — pravo da suodlučuješ o vlastitom životu."
      correct: true
      explanation: "'Moć' ovdje znači Empowerment u pozitivnom smislu — nije moć nad drugima."
    - text: "Medicinske ovlasti."
      correct: false

- q: "Tko je uveo trijadu 'Nada — Moć — Smisao'?"
  type: multiple-choice
  options:
    - text: "Patricia Deegan"
      correct: false
    - text: "Amering & Schmolke (2006)"
      correct: true
      explanation: "U švicarskom stručnom časopisu Managed Care, 2006."
    - text: "WHO"
      correct: false
:::

:::flashcards{id=f-2}
- front: "Nada — Moć — Smisao"
  back: "Čitanje Recoveryja na njemačkom govornom području, uvedeno od Amering & Schmolke 2006. Odgovara Hope, Empowerment, Meaning u modelu CHIME."
- front: "Moć (u smislu Recoveryja)"
  back: "Osnaživanje — pravo da suodlučuješ o vlastitom životu. Nije moć nad drugima."
:::

:::standard{reading_time=2}
Recovery je engleska riječ koju je na srpski/hrvatski teško prevesti. Austrijske psihijatrice Michaela Amering i Margit Schmolke 2006. su u švicarskom stručnom časopisu Managed Care predložile tri riječi koje pogađaju srž — trijadu koja je danas u DACH-prostoru uobičajena:

- **Nada** — vjera da tvoj život može biti više od bolesti. Osjećaj sebe koji opstaje i neovisno o simptomima.
- **Moć** — osnaživanje. Ne moć nad drugima, nego moć nad vlastitim životom. Smjeti suodlučivati. Sloboda izbora. Vlastita odgovornost.
- **Smisao** — vrijednosti, ciljevi, pripadnost. Smjeti definirati život s onu stranu uloge pacijenta.

Ove tri riječi odgovaraju klasičnoj Recovery-definiciji. Odgovaraju i ključnim dijelovima međunarodno najvažnijeg Recovery-modela, CHIME-modela:

- Nada = Hope
- Moć = Empowerment
- Smisao = Meaning

Povezanost (Connectedness) i Identitet (Identity) tvore okvir oko toga — odnose i sliku o sebi kao tlo na kojem nada, moć i smisao mogu rasti.

Ne moraš sve troje osjećati istodobno. Ponekad je tu samo nada, ponekad samo smisao. Ponekad počinje s moći — s jednom jedinom odlukom koju sama ili sam doneseš. To je dovoljno. Recovery nije popis koji se kvačicama označava.
:::

:::standard-quiz{id=q-2-std}
- q: "Što „Moć" znači u ovom čitanju?"
  type: multiple-choice
  options:
    - text: "Imati moć nad drugima."
      correct: false
    - text: "Osnaživanje — pravo na suodlučivanje o vlastitom životu."
      correct: true
      explanation: "„Moć" ovdje znači Empowerment u pozitivnom smislu."
    - text: "Medicinske ovlasti."
      correct: false

- q: "Tko je uveo trijadu „Nada — Moć — Smisao"?"
  type: multiple-choice
  options:
    - text: "Patricia Deegan"
      correct: false
    - text: "Amering i Schmolke (2006)"
      correct: true
      explanation: "U švicarskom stručnom časopisu Managed Care."
    - text: "SZO"
      correct: false
:::

:::standard-flashcards{id=f-2-std}
- front: "Nada — Moć — Smisao"
  back: "Srpsko/hrvatsko čitanje Recoveryja (Amering i Schmolke 2006). Odgovara Hope, Empowerment, Meaning u CHIME-modelu."
- front: "Moć u Recovery-smislu"
  back: "Osnaživanje — pravo na suodlučivanje o vlastitom životu. Ne moć nad drugima."
- front: "Nada u Recovery-smislu"
  back: "Vjera da tvoj život može biti više od bolesti. Osjećaj sebe koji opstaje i bez nestanka simptoma."
:::



# 3. Što Recovery NIJE — šest mitova
{#kap-3 reading_time=5}

Recovery se u svakodnevici često pogrešno razumije.

## Mit 1: Recovery znači da svi simptomi moraju nestati

Pogrešno. I osobe s trajnim simptomima mogu doživjeti Recovery [^anthony1993] [^deegan1996] [^andresen2003]. Osobni oporavak može koegzistirati sa simptomima.

## Mit 2: Recovery znači jednostavno pozitivno razmišljati

Pogrešno. Recovery nije poziv na optimizam na pritisak gumba. Nada u istraživanju Recoveryja znači realističnu, često prkosnu uvjerenost da je promjena moguća [^slade2013] [^schrank2012].

## Mit 3: Recovery znači funkcionirati bez lijekova ili terapije

Pogrešno. Recovery nije anti-medicinski pokret. Znači da TI suodlučuješ što pomaže [^deegandrake2006] [^slade2017sdm]. Amering i Schmolke to izoštreno formuliraju: prihvaćanje lijekova ili određene dijagnoze ne bi trebalo biti jedini preduvjet za psihosocijalnu podršku [^ameringschmolke2006].

## Mit 4: Recovery je ravan, predvidljiv put

Pogrešno. Andresen, Oades i Caputi [^andresen2003] i mnogi drugi pokazuju: Recovery gotovo nikad ne teče linearno. Koraci unatrag pripadaju tome i nisu kraj, nego dio puta.

## Mit 5: Tko ne postane „zdrav" sam je kriv

Pogrešno. Recovery nije koncept učinka i nije moralna presuda. Put ovisi o mnogim čimbenicima — o odnosima, skrbi, socioekonomskim uvjetima, traumama, slučajnostima [^leboutillier2011].

## Mit 6: Psihička bolest je „neizlječiva" — „kronična"

Pogrešno i štetno. Longitudinalna istraživanja poput Vermontske studije [^harding1987] i novija sustavna razmatranja [^lally2017] pokazuju: oporavak — i od teških dijagnoza — redovito je moguć.

Amering i Schmolke izrijekom upozoravaju na ovakva trajna utvrđivanja [^ameringschmolke2012]: rečenice poput „Vi ste prebolesni za psihoterapiju" ili suprotno „Sve će biti opet kao prije" su iz njihove perspektive ne samo pogrešne, nego — doslovno — „izrazito opasne". Predviđanja ove vrste oduzimaju ljudima vlastiti prostor prije nego što ga uopće mogu iskoristiti.

Heinz Katschnig je za to pronašao snažnu sliku: beznađe — komunicirano izvana i često prihvaćeno iznutra — najpodmuklija je vrsta okova u psihijatriji. Tako je djelotvorno upravo zato što izvana nije vidljivo [^ameringschmolke2012].

:::reflection{id=2 title="Koji te mit dotaknuo?"}
- Koji je od ovih šest mitova za tebe dugo bio stvarnost?
- Tko ti je prenio ovaj mit — obitelj, škola, mediji, psihijatrijski sustav?
- Što bi bilo drugačije kad bi ovaj mit danas pustila ili pustio?
:::

:::easy{reading_time=2}
Postoji mnogo pogrešnih ideja o Recoveryju. Šest njih se često pojavljuje:

1. **Pogrešno:** Svi simptomi moraju nestati. → Recovery ide i sa simptomima.
2. **Pogrešno:** Moraš pozitivno razmišljati. → Nema obveze za dobro raspoloženje.
3. **Pogrešno:** Lijekovi nisu dozvoljeni. → Suodlučuješ što pomaže.
4. **Pogrešno:** Put je ravan. → Koraci unatrag pripadaju tome.
5. **Pogrešno:** Tko ne ozdravi sam je kriv. → Nitko nije kriv.
6. **Pogrešno:** Neki su „neizlječivi". → Oporavak je moguć i nakon teških bolesti.
:::

:::quiz{id=q-3}
- q: "Koja tvrdnja je točna?"
  type: multiple-choice
  options:
    - text: "Recovery znači da svi simptomi moraju nestati."
      correct: false
    - text: "Recovery može funkcionirati i s trajnim simptomima."
      correct: true
      explanation: "Središnja izjava Anthonyja 1993 i mnogih kasnijih studija."
    - text: "Recovery je moguć samo kod blagih bolesti."
      correct: false

- q: "Točno ili netočno: Recovery znači ne uzimati lijekove."
  type: true-false
  correct: false
  explanation: "Recovery nije anti-medicinski pokret. Zajedno sa stručnjacima odlučuješ što pomaže."

- q: "Što longitudinalne studije poput Harding (1987) i Lally (2017) govore o teškim dijagnozama?"
  type: multiple-choice
  options:
    - text: "One su neizlječive."
      correct: false
    - text: "Oporavak je i nakon teških tijekova redovito moguć."
      correct: true
      explanation: "To je osnova Ameringovog 'kraja neizlječivosti'."
:::

:::flashcards{id=f-3}
- front: "Najveći mit o Recoveryju"
  back: "Recovery ne znači: svi simptomi nestaju. Recovery znači: dobar život — i s poteškoćama."
- front: "Linearnost — pogrešno"
  back: "Recovery nije linearan. Koraci unatrag pripadaju tome i nisu neuspjeh."
- front: "'Neizlječivo' — pogrešno"
  back: "Longitudinalne studije (Harding 1987, Lally 2017) pokazuju: i nakon teških bolesti oporavak je redovito moguć."
- front: "'Izrazito opasno'"
  back: "Amering & Schmolke (2012) o prognozama poput 'prebolesni ste za razgovornu terapiju' — takva utvrđivanja oduzimaju prostor."
:::

:::standard{reading_time=2}
O Recoveryju kruže mnoge pogrešne slike. Šest ih se u svakodnevici osobito često susreće — i svih šest su pogrešne.

- **„Recovery znači da svi simptomi moraju nestati."** Nije točno. I ljudi s trajnim simptomima mogu voditi ispunjen život. Osobni oporavak može koegzistirati sa simptomima.
- **„Recovery znači uvijek misliti pozitivno."** Pogrešno. Recovery nije poziv na optimizam po komandi. Nada u Recovery-istraživanju je realističko, često prkosno uvjerenje — ne prisilno dobro raspoloženje.
- **„Recovery znači živjeti bez lijekova."** Pogrešno. Recovery nije anti-medicinski pokret. Znači da TI suodlučuješ što ti pomaže — a što ne.
- **„Recovery je ravan, predvidiv put."** Pogrešno. Recovery gotovo nikada nije linearan. Koraci unatrag pripadaju mu. Nisu poraz, već dio puta.
- **„Tko ne ozdravi, sam je kriv."** Pogrešno. Recovery nije koncept učinka i nije moralni sud. Put ovisi o mnogim faktorima: odnosima, sustavu skrbi, socioekonomskim uvjetima, traumi, slučaju.
- **„Teške psihičke bolesti su neizlječive."** Pogrešno — i opasno. Dugoročna istraživanja desetljećima pokazuju: oporavak je i nakon teških dijagnoza redovito moguć.

Amering i Schmolke rečenice poput „Vi ste prebolesni za razgovornu terapiju" ili „Bit će opet kao prije" čak nazivaju „opasnima poput zapaljenja". Takve nas prognoze lišavaju prostora prije nego što ga uopće možemo iskoristiti.

Bezizglednost koja dolazi izvana i preuzima se iznutra — to su najpodmuklije veze u psihijatriji. Upravo zato što su nevidljive.
:::

:::standard-quiz{id=q-3-std}
- q: "Koja je tvrdnja točna?"
  type: multiple-choice
  options:
    - text: "Recovery znači da svi simptomi moraju nestati."
      correct: false
    - text: "Recovery može funkcionirati i s trajnim simptomima."
      correct: true
      explanation: "To je središnja tvrdnja od Anthonya 1993. nadalje."
    - text: "Recovery je moguć samo kod lakih bolesti."
      correct: false

- q: "Tko je kriv ako Recovery ide teško?"
  type: multiple-choice
  options:
    - text: "Ti sam — ne trudiš se dovoljno."
      correct: false
    - text: "Nitko. Recovery nije natjecanje niti moralni sud."
      correct: true
      explanation: "Put ovisi o mnogim faktorima — ne samo o tvojoj snazi volje."

- q: "Što dugoročne studije kažu o „neizlječivim" dijagnozama?"
  type: multiple-choice
  options:
    - text: "Neizlječivo ostaje neizlječivo."
      correct: false
    - text: "Oporavak je i nakon teških tijekova redovito moguć."
      correct: true
      explanation: "Vermont-studija (Harding 1987), aktualne meta-analize (Lally 2017)."
:::

:::standard-flashcards{id=f-3-std}
- front: "Najveći mit o Recoveryju"
  back: "„Svi simptomi moraju nestati." — Nije točno. Recovery znači voditi dobar život, i s teškoćama."
- front: "Linearnost — pogrešno"
  back: "Recovery gotovo nikada nije linearan. Koraci unatrag pripadaju mu i nisu poraz."
- front: "„Neizlječivo" — pogrešno"
  back: "Dugoročne studije pokazuju: i nakon teških bolesti oporavak je redovito moguć."
- front: "„Opasne kao zapaljenje""
  back: "Amering i Schmolke o prognozama poput „Prebolesni ste za terapiju" — takvi sudovi oduzimaju prostor."
:::



# 4. Istorija pokreta Recovery
{#kap-4 reading_time=6}

## Glasovi osoba s vlastitim iskustvom — 1970-e i 1980-e

Recovery-pokret nije nastao u istraživačkom institutu. Započeo je 1970-ih godina u Sjevernoj Americi, u inicijativama bivših psihijatrijskih pacijentica i pacijenata — takozvanom Ex-Patient- ili Survivor-Movement [^chamberlin1978].

Jedan od centralnih glasova je Patricia Deegan. S 17 godina dobila je dijagnozu šizofrenije i čula od liječnika da nikad neće voditi normalan život. Danas je doktorica psihologije, istraživačica i međunarodno priznata pionirka Recoveryja [^deegan1988] [^deegan1996].

Patricia Deegan je formulirala dvije središnje misli koje od tada obilježavaju međunarodni Recovery-pokret [^deegan1996]:

- Recovery nije završna točka i nije samo stabilizacija, nego preobrazba — put na kojem priznaješ vlastite granice i istovremeno otkrivaš nove mogućnosti.
- Osobe s psihičkim poteškoćama nisu pasivni primatelji pomoći, nego subjekti sposobni za djelovanje koji kroz vlastito djelovanje mogu promijeniti svoju situaciju.

## Dorothea Buck, Trijalog i čujenje glasova

Na njemačkom govornom području Dorothea Buck je utabala usporediv put. Sama prisilno sterilizirana za vrijeme nacizma i više puta liječena u psihijatriji, cijeli se život borila za humanu psihijatriju [^buck1990].

1989. godine je u Hamburgu na inicijativu Thomasa Bocka nastao prvi trijaloški seminar o psihozi — format u kojem osobe s vlastitim iskustvom, članovi obitelji i stručnjaci razgovaraju ravnopravno [^bockpriebe2005]. 1992. osnovan je Savezni savez osoba s iskustvom psihijatrije (BPE). Međunarodna mreža Čujenja glasova (Hearing-Voices) djeluje od 1990-ih u Njemačkoj, Austriji i Švicarskoj [^hvn].

## Znanstveno utemeljenje — 1990-e i 2000-e

William Anthony je ključnim člankom iz 1993. dao znanstvenu definiciju [^anthony1993]. Andresen, Oades i Caputi su u Australiji razvili model pet faza psihološkog oporavka [^andresen2003].

## Od koncepta do sustava — od 2007. nadalje

2007. godine u Velikoj Britaniji je pokrenut program ImROC (Implementing Recovery through Organisational Change). Od tada je pratio stotine službi skrbi u preobrazbi prema Recovery-orijentiranoj praksi [^imroc] [^perkins2012].

U SAD-u je Recovery 2006. postao službena smjernica nacionalne zdravstvene agencije SAMHSA. UN-Konvencija o pravima osoba s invaliditetom usidrila je razumijevanje ljudskih prava usmjereno na samoodređenje [^uncrpd2006]. WHO je 2019. objavila inicijativu QualityRights [^who2019] i 2021. smjernicu „Guidance on Community Mental Health Services" [^who2021].

## Njemačko govorno područje

U Austriji su Amering i Schmolke 2006. člankom „Nada — Moć — Smisao" [^ameringschmolke2006] i 2012. knjigom „Recovery. Kraj neizlječivosti" [^ameringschmolke2012] označili prekretnicu. U Njemačkoj je Andreas Knuf zajedno s Ulrichom Seibertom već 2004. predstavio „Poticanje osnaživanja" [^knufseibert2004]; njegovo „Recovery i Empowerment" danas postoji u 2. izdanju [^knuf2026].

EX-IN (Experienced Involvement) razvijen je od 2005. u Bremenu — inspiriran Dorotheom Buck i EU-financiranim projektom Leonardo da Vinci [^utschakowski2009]. Od 2011. EX-IN koordinira udruga EX-IN Deutschland e.V. [^exin_de]. Njemačka RCT studija o vršnjačkoj podršci potvrdila je djelotvornost [^mahlke2017].

U Švicarskoj zaklada Pro Mente Sana unosi koncept Recoveryja u skrb [^promentesana]. Recovery Colleges danas postoje među ostalim u Bernu, istočnoj Švicarskoj, Ženevi, St. Gallenu i Zürichu [^rcbern]. Recovery-orijentacija u švicarskoj psihijatriji znanstveno je utemeljena između ostalih kroz Rösslera [^roessler2004].

:::easy{reading_time=2}
Recovery nije izmišljen u bolnici. Recovery su izmislile osobe s vlastitim iskustvom.

U Americi su pacijentice i pacijenti 1970-ih godina počeli pisati knjige. Govorili su: Mi smo više od svoje bolesti.

Jedan poznati glas je Patricia Deegan. S 17 je dobila dijagnozu šizofrenije. Danas je doktorica i pomaže drugima.

U Njemačkoj je bila važna Dorothea Buck. Borila se za bolju psihijatriju.

Danas je Recovery svjetski priznat — i od WHO-a.
:::

:::quiz{id=q-4}
- q: "Tko je obilježio Recovery-pokret na početku?"
  type: multiple-choice
  options:
    - text: "Farmaceutska industrija."
      correct: false
    - text: "Osobe s vlastitim iskustvom psihijatrije."
      correct: true
      explanation: "Pokret je nastao u SAD-u 1970-ih iz Survivor-Movementa."
    - text: "Bolničke uprave."
      correct: false

- q: "Tko je Patricia Deegan?"
  type: multiple-choice
  options:
    - text: "Liječnica bez vlastitog iskustva."
      correct: false
    - text: "Pionirka Recoveryja s vlastitom dijagnozom šizofrenije."
      correct: true
      explanation: "Dijagnosticirana s 17. Danas doktorica psihologije i međunarodno priznat glas."
    - text: "Švicarska istraživačica sestrinstva."
      correct: false
:::

:::flashcards{id=f-4}
- front: "Patricia Deegan"
  back: "S 17 dijagnoza šizofrenije, danas doktorica psihologije. Snažan glas međunarodnog Recovery-pokreta."
- front: "Dorothea Buck"
  back: "Njemačka pionirka, prisilno sterilizirana za vrijeme nacizma. Cijeli se život borila za humanu psihijatriju. Inspirirala EX-IN."
- front: "Survivor-Movement"
  back: "Pokret bivših psihijatrijskih pacijentica i pacijenata u SAD-u 1970-ih. Korijen Recovery-pokreta."
- front: "ImROC"
  back: "Implementing Recovery through Organisational Change. Britanski program od 2007. koji prati službe skrbi u preobrazbi prema Recovery-orijentiranoj praksi."
:::

:::standard{reading_time=2}
Recovery nije nastao u predavaonici niti u ordinaciji. Recovery je nastao na ulici — u inicijativama bivših pacijenata koji su odbili da ih se svede na njihovu dijagnozu.

Pokret je započeo 1970-ih godina u Sjevernoj Americi, u takozvanom Survivor-pokretu. Jedan od njegovih najvažnijih glasova je Patricia Deegan. S 17 godina dobila je dijagnozu šizofrenije. Liječnik joj je rekao da nikada neće voditi normalan život. Danas je doktorica psihologije i jedna od najutjecajnijih Recovery-pionirki na svijetu.

U njemačkom govornom području Dorothea Buck bila je usporedivi glas. Sama prisilno sterilizirana za vrijeme nacionalsocijalizma i u više navrata liječena u psihijatriji, cijeli je život borila se za humanu psihijatriju. 1989. u Hamburgu, na inicijativu Thomasa Bocka, nastao je prvi trijaloški seminar o psihozi — format u kojem osobe s iskustvom, bližnji i stručnjaci razgovaraju ravnopravno.

Važne postaje od tada:

- **1993** — William Anthony daje znanstvenu definiciju Recoveryja.
- **2003** — Australski istraživači opisuju pet faza oporavka.
- **2007** — U Velikoj Britaniji započinje program ImROC, koji službe skrbi prebacuje na Recovery-orijentaciju.
- **2011** — CHIME-model se objavljuje i postaje međunarodni standard.
- **2021** — SZO objavljuje smjernicu za skrb o psihičkom zdravlju utemeljenu na ljudskim pravima.

U Švicarskoj zaklada Pro Mente Sana širi Recovery-koncept u skrbi. Recovery Colleges danas postoje u Bernu, u Istočnoj Švicarskoj, u Ženevi, u St.Gallenu i u Zürichu. U Njemačkoj je EX-IN — Experienced Involvement — uspostavio pratnju oporavka kao zanimanje.

Recovery dakle odavno više nije ideja outsidera. To je živa praksa hiljada ljudi.
:::

:::standard-quiz{id=q-4-std}
- q: "Tko je u početku oblikovao Recovery-pokret?"
  type: multiple-choice
  options:
    - text: "Farmaceutska industrija."
      correct: false
    - text: "Ljudi s vlastitim psihijatrijskim iskustvom."
      correct: true
      explanation: "Pokret je nastao 1970-ih iz Survivor-pokreta."
    - text: "Uprave bolnica."
      correct: false

- q: "Tko je Patricia Deegan?"
  type: multiple-choice
  options:
    - text: "Liječnica bez vlastitog iskustva."
      correct: false
    - text: "Recovery-pionirka s vlastitom dijagnozom šizofrenije, danas doktorica psihologije."
      correct: true
      explanation: "S 17 dijagnosticirana, danas međunarodni glas Recovery-pokreta."

- q: "Što je EX-IN?"
  type: multiple-choice
  options:
    - text: "Skupina lijekova."
      correct: false
    - text: "Experienced Involvement — pratnja oporavka kao priznato zanimanje."
      correct: true
      explanation: "Razvijen u Bremenu od 2005., nadahnut Dorotheom Buck."
:::

:::standard-flashcards{id=f-4-std}
- front: "Gdje je nastao Recovery?"
  back: "Ne u predavaonici. U inicijativama bivših psihijatrijskih pacijenata — Survivor-pokret 1970-ih u Sjevernoj Americi."
- front: "Patricia Deegan"
  back: "S 17 dijagnoza šizofrenije, danas doktorica psihologije. Jedan od najutjecajnijih glasova Recovery-pokreta."
- front: "Trialog"
  back: "Format u kojem osobe s iskustvom, bližnji i stručnjaci razgovaraju ravnopravno. 1989. u Hamburgu (Thomas Bock)."
- front: "Recovery Colleges u Švicarskoj"
  back: "Bern, Istočna Švicarska, Ženeva, St.Gallen, Zürich. Mjesta učenja za Recovery — otvorena za sve."
:::



# 5. CHIME i CHIME-D
{#kap-5 reading_time=6}

2011. godine istraživački tim oko Mary Leamy i Mikea Sladea na King's College London sustavno je analizirao 97 znanstvenih članaka i 87 dodatnih izvještaja o tijekovima oporavka [^leamy2011]. Htjeli su znati: što ljudi iznova opisuju kad pričaju o svom putu kroz psihičku poteškoću?

Otkrili su pet procesa čija engleska početna slova daju riječ CHIME — engleska riječ za zvuk zvona.

:::table{name="CHIME"}
| Slovo | Proces | Što znači |
|-------|--------|-----------|
| **C** | Connectedness · Povezanost | Odnosi, kontakti s vršnjacima, obitelj, pripadnost, zajednica |
| **H** | Hope and Optimism · Nada | Vjera u promjenu, motivacija, povjerenje u proces, uzori |
| **I** | Identity · Identitet | Tko sam ja izvan dijagnoze? Pozitivna slika o sebi, samopoštovanje |
| **M** | Meaning and Purpose · Smisao | Smisao života, vrijednosti, uloge, ciljevi, eventualno duhovnost |
| **E** | Empowerment · Samodjelotvornost | Preuzeti odgovornost, odlučivati, koristiti snage |
:::

CHIME je danas svjetski najutjecajniji model Recoveryja. Bird i sur. potvrdili su u validacijskoj studiji primjenjivost ovog okvira [^bird2014]. Na njemu se zasniva britanska studija REFOCUS, klaster-randomizirano ispitivanje [^slade2015refocus].

CHIME nije stupnjeviti model i nije lista za odštikavanje. Opisuje pet tema koje se preklapaju. Ponekad je jedna u prvom planu, ponekad druga. Na njemačkom govornom području CHIME se dobro spaja s čitanjem „Nada — Moć — Smisao" [^ameringschmolke2006].

## CHIME-D — šesta dimenzija: Poteškoće

Važan razvoj modela je CHIME-D. Stuart, Tansey i Quayle utvrdili su u sustavnoj best-fit sintezi kvalitativne Recovery-literature da u izvornom CHIME-okviru nedostaje dimenzija koja se u izvještajima o iskustvu redovito pojavljuje: izričito priznavanje poteškoća (Difficulties) — traume, gubitka, stigmatizacije i posljedica bolesti [^stuart2017].

Stoga su model dopunili slovom D:

- **C** — Connectedness · Povezanost
- **H** — Hope · Nada
- **I** — Identity · Identitet
- **M** — Meaning · Smisao
- **E** — Empowerment · Samodjelotvornost
- **D** — Difficulties · Poteškoće: traumu, gubitak, stigmu i posljedice bolesti izričito priznati

Istraživanja pokazuju da u prosjeku oko 54 % sadržaja Recovery-priča otpada na proživljene poteškoće [^stuart2017]. CHIME-D zato opominje: Recovery-orijentacija ne smije skliznuti u toksični optimizam. Mora ostaviti prostor za bol, za tugu, za ono što je doista bilo i jest — i paralelno zadržati pogled na resurse i promjenu.

Aktualna istraživanja validiraju CHIME-D kao robustan referentni okvir Recovery-orijentirane skrbi [^vanweeghel2024] [^hancock2025].

:::info{type=note title="Zašto je CHIME-D važan za ovu radnu knjigu"}
Recovery-koncepte se ponekad kritizira jer mogu umanjivati patnju ili stvarati „obvezu nade".

CHIME-D ozbiljno uzima ovu kritiku: oporavak ne smije značiti da teško više nema mjesta.

U digitalnoj radnoj knjizi to znači: prostor za bol I za nadu. Za gubitke I za ciljeve. Za ono što je bilo I za ono što smije postati.
:::

:::reflection{id=3 title="Gdje stojiš u CHIME?"}
- Koje te slovo (C, H, I, M, E) trenutno najviše dotiče?
- Koje se trenutno čini najteže?
- Kad pomisliš na zadnja dva tjedna: gdje je bilo malog svjetla — i kojem bi ga slovu pridružila ili pridružio?
:::

:::easy{reading_time=2}
Istraživači su 2011. pronašli pet važnih tema u Recoveryju. Engleska početna slova daju riječ CHIME (engleska riječ za zvuk zvona):

- **C** — Connectedness · Povezanost
- **H** — Hope · Nada
- **I** — Identity · Identitet
- **M** — Meaning · Smisao
- **E** — Empowerment · Samodjelotvornost

Kasnije je dodano još jedno slovo:

- **D** — Difficulties · Poteškoće

D je važno. Recovery ne smije umanjivati teško. Bol i tuga smiju imati mjesto.
:::

:::quiz{id=q-5}
- q: "Što označava 'D' u CHIME-D?"
  type: multiple-choice
  options:
    - text: "Dijagnoza"
      correct: false
    - text: "Difficulties — Poteškoće (trauma, gubitak, stigma)"
      correct: true
      explanation: "Stuart, Tansey i Quayle (2017) su pokazali da je ova dimenzija nedostajala u izvornom CHIME-u."
    - text: "Depresija"
      correct: false

- q: "Koje slovo označava 'Povezanost'?"
  type: multiple-choice
  options:
    - text: "C — Connectedness"
      correct: true
    - text: "I — Identity"
      correct: false
    - text: "E — Empowerment"
      correct: false

- q: "Je li CHIME lista za odštikavanje?"
  type: true-false
  correct: false
  explanation: "Ne — CHIME opisuje pet tema koje se preklapaju. Ponekad je jedna u prvom planu, ponekad druga."
:::

:::flashcards{id=f-5}
- front: "CHIME"
  back: "Connectedness · Hope · Identity · Meaning · Empowerment. Pet Recovery-procesa (Leamy i sur. 2011)."
- front: "D u CHIME-D"
  back: "Difficulties — poteškoće, trauma, gubitak, stigma, posljedice bolesti. Recovery ne smije isključiti teško (Stuart i sur. 2017)."
- front: "Connectedness"
  back: "Povezanost. Odnosi, kontakti s vršnjacima, obitelj, pripadnost, zajednica."
- front: "Empowerment"
  back: "Samodjelotvornost. Preuzimati odgovornost, donositi odluke, koristiti snage."
:::

:::standard{reading_time=2}
2011. istraživački tim na King's College London analizirao je više od 180 studija i izvješća te postavio pitanje: što ljudi uvijek iznova opisuju kada pričaju o svom Recovery-putu? Izronilo je pet procesa — a njihova engleska početna slova daju riječ CHIME (engleski za zvon).

- **C — Connectedness · Povezanost:** Odnosi, obitelj, kontakti s peer-ima, pripadnost, zajednica.
- **H — Hope · Nada:** Vjera u promjenu. Uzori. Povjerenje u proces.
- **I — Identity · Identitet:** Tko sam ja s onu stranu dijagnoze? Pozitivna slika o sebi izvan uloge pacijenta.
- **M — Meaning · Smisao:** Vrijednosti, ciljevi, uloge, ponekad duhovnost.
- **E — Empowerment · Samodjelotvornost:** Preuzimati odgovornost. Donositi odluke. Koristiti snage.

CHIME je danas međunarodno najvažniji Recovery-model. Ali nije popis za kvačicama i nije stepenice. Opisuje pet tema koje se preklapaju. Ponekad jedna stoji u prvom planu, ponekad druga.

## D u CHIME-D

2017. istraživači su utvrdili: u CHIME-modelu nešto nedostaje. Nešto što se u Recovery-pričama uvijek pojavljuje — izričito priznanje teškoća. Zato su dodali slovo:

- **D — Difficulties · Teškoće:** Trauma, gubitak, stigma, posljedice bolesti.

Istraživanja pokazuju: oko 54 % sadržaja Recovery-pripovijesti odnosi se na proživljene teškoće. CHIME-D zato upozorava: Recovery ne smije skliznuti u nametnuti optimizam. Mora biti mjesta za bol, tugu i ono što je stvarno bilo — paralelno s pogledom na resurse.

Za tebe to znači: u radnoj knjizi teško ima mjesto. Jednako kao i nada.
:::

:::standard-quiz{id=q-5-std}
- q: "Za što stoji „D" u CHIME-D?"
  type: multiple-choice
  options:
    - text: "Dijagnoza"
      correct: false
    - text: "Difficulties — Teškoće (trauma, gubitak, stigma)"
      correct: true
      explanation: "Stuart, Tansey i Quayle pokazali su 2017. da je ova dimenzija nedostajala u izvornom CHIME-u."
    - text: "Depresija"
      correct: false

- q: "Koje slovo stoji za „Povezanost"?"
  type: multiple-choice
  options:
    - text: "C — Connectedness"
      correct: true
    - text: "I — Identity"
      correct: false
    - text: "E — Empowerment"
      correct: false

- q: "Je li CHIME popis za odznačavanje?"
  type: true-false
  correct: false
  explanation: "Ne — CHIME opisuje pet tema koje se preklapaju. Ponekad jedna stoji u prvom planu, ponekad druga."
:::

:::standard-flashcards{id=f-5-std}
- front: "CHIME"
  back: "Connectedness · Hope · Identity · Meaning · Empowerment. Pet Recovery-procesa (Leamy et al. 2011)."
- front: "D u CHIME-D"
  back: "Difficulties — teškoće, trauma, gubitak, stigma. Recovery ne smije zanemariti ono teško."
- front: "CHIME — popis ili ne?"
  back: "Nije popis za odznačavanje. Pet tema koje se preklapaju. Sad je u prvom planu jedna, sad druga."
- front: "Empowerment"
  back: "Samodjelotvornost. Preuzeti odgovornost, donositi odluke, koristiti snage."
:::



# 6. Pet faza oporavka
{#kap-6 reading_time=3}

Ako CHIME opisuje pet unutarnjih procesa, model Andresen, Oades i Caputi opisuje tipične faze puta [^andresen2003] [^andresen2006].

:::table{name="Faze-oporavka"}
| Faza | Hrvatski | Što se događa iznutra |
|------|----------|----------------------|
| **1. Moratorium** | Zastoj | Osjećaj gubitka, beznađa, povlačenja |
| **2. Awareness** | Buđenje | Prva nada, spoznaja: nije sve izgubljeno |
| **3. Preparation** | Priprema | Napraviti inventuru: što mogu, što trebam? |
| **4. Rebuilding** | Obnova | Aktivno graditi nove ciljeve, uloge, odnose |
| **5. Growth** | Rast | Ispunjen život — sa zaostalim simptomima ili bez njih |
:::

Faze nisu krute. Normalno je više puta proći kroz istu fazu. Normalno je i istovremeno se doživljavati u dvije faze — u jednom području života u rastu, u drugom opet u zastoju. Četiri središnja zadatka prolaze kroz sve faze [^andresen2003]: pronaći nadu, ponovno izgraditi identitet, pronaći smisao, preuzeti odgovornost.

:::easy{reading_time=1}
Recovery često ima faze. Troje istraživača iz Australije opisalo je pet faza:

1. **Zastoj** — Sve se čini teško i bezizlazno.
2. **Buđenje** — Primjećuješ: možda ipak ima nešto.
3. **Priprema** — Gledaš što možeš.
4. **Obnova** — Praviš nove planove.
5. **Rast** — Živiš svoj život. Sa simptomima ili bez njih.

Smiješ preskakati između faza. Nije kao stepenice. Više je kao spirala.
:::

:::quiz{id=q-6}
- q: "Koliko faza opisuju Andresen, Oades i Caputi?"
  type: multiple-choice
  options:
    - text: "Tri"
      correct: false
    - text: "Pet"
      correct: true
    - text: "Sedam"
      correct: false

- q: "Jesu li faze linearne?"
  type: true-false
  correct: false
  explanation: "Ne. Možeš preskakati, više puta proći kroz istu fazu ili istovremeno biti u dvije faze."
:::

:::flashcards{id=f-6}
- front: "Moratorium"
  back: "Prva faza: zastoj. Osjećaj gubitka, beznađa, povlačenja."
- front: "Awareness"
  back: "Faza buđenja. Prva nada. Spoznaja: nije sve izgubljeno."
- front: "Growth"
  back: "Rast — ispunjen život sa zaostalim simptomima ili bez njih."
- front: "Četiri zadatka svih faza"
  back: "Pronaći nadu · ponovno izgraditi identitet · pronaći smisao · preuzeti odgovornost."
:::

:::standard{reading_time=2}
Recovery rijetko teče u ravnoj liniji. Trojica australskih istraživača — Andresen, Oades i Caputi — iz mnogih su životnih priča izvukli pet tipičnih faza:

- **Moratorium (Zastoj)** — Sve djeluje teško. Osjećaš se izgubljeno, povlačiš se. Nada je daleko.
- **Awareness (Buđenje)** — Prva iskra: možda ipak nije sve gotovo.
- **Preparation (Priprema)** — Praviš inventuru. Što mogu? Što mi treba? Tko je tu?
- **Rebuilding (Ponovna izgradnja)** — Korak po korak gradiš nove uloge, ciljeve i odnose.
- **Growth (Rast)** — Živiš život koji se osjeća dobro — sa simptomima ili bez njih.

Važno znati: ove faze nisu stepenice. Normalno je više puta proći kroz istu fazu. Normalno je u jednom životnom području već biti u rastu, a u drugom opet u zastoju. Koraci unatrag pripadaju procesu. Ne znače da si zakazala ili zakazao.

Četiri zadatka protežu se kroz sve faze: pronaći nadu, ponovno izgraditi identitet, pronaći smisao, preuzeti odgovornost.

Pitaj se: u kojoj se fazi sada osjećaš — možda u više njih istodobno?
:::

:::standard-quiz{id=q-6-std}
- q: "Jesu li pet faza poput stepenica — jedna za drugom?"
  type: multiple-choice
  options:
    - text: "Da, moraš ih proći redom."
      correct: false
      explanation: "Ne — faze nisu krute. Koraci unatrag i skokovi su normalni."
    - text: "Ne. Možeš skakati, ponavljati ili biti istodobno u više njih."
      correct: true
      explanation: "Upravo tako. Recovery je više spirala nego stepenice."

- q: "Koja faza opisuje zastoj na početku?"
  type: multiple-choice
  options:
    - text: "Growth"
      correct: false
    - text: "Moratorium"
      correct: true
      explanation: "Moratorium = faza bezizglednosti i povlačenja."
    - text: "Awareness"
      correct: false
:::

:::standard-flashcards{id=f-6-std}
- front: "Pet faza"
  back: "Moratorium · Awareness · Preparation · Rebuilding · Growth. Nisu stepenice — skokovi i koraci unatrag su normalni."
- front: "Četiri zadatka u svim fazama"
  back: "Pronaći nadu · ponovno izgraditi identitet · pronaći smisao · preuzeti odgovornost."
- front: "Korak unatrag — što to znači?"
  back: "Nije poraz. Već normalan dio puta. Recovery je spirala, ne ravna linija."
:::



# 7. Tri razine oporavka
{#kap-7 reading_time=3}

U istraživanjima se razlikuju tri razine [^slade2009]:

- **Klinički oporavak**: simptomi postaju manji, dijagnoza gubi na značaju.
- **Funkcionalni oporavak**: ponovno možeš raditi stvari koje su ti važne: raditi, učiti, njegovati odnose, brinuti se o svojoj svakodnevici.
- **Osobni oporavak**: pronalaziš nov smisao, novu sliku o sebi, novu nadu. Doživljavaš se kao netko tko može dati smjer svom životu — i kad nije sve „nestalo".

Tri razine se mogu uzajamno jačati, ali se ne moraju događati ovim redom.

:::reflection{id=4 title="Koja ti je razina važna?"}
- Kad za godinu dana zamisliš život koji ti se čini dobrim: što bi bilo drugačije?
- Koja se od tri razine — klinička, funkcionalna, osobna — trenutno čini najvažnija za tebe?
- Postoji li nešto što si nekad rado radila ili radio, što želiš ponovno vratiti u život?
:::

:::easy{reading_time=1}
Postoje tri vrste oporavka:

- **Klinički:** Simptomi postaju manji.
- **Funkcionalni:** Možeš ponovno raditi stvari: raditi, učiti, njegovati odnose.
- **Osobni:** Doživljavaš smisao i nadu. Suodlučuješ o svom životu.

Najvažniji za Recovery je osobni oporavak.
:::

:::quiz{id=q-7}
- q: "Koja je razina suština značenja Recoveryja?"
  type: multiple-choice
  options:
    - text: "Klinički oporavak"
      correct: false
    - text: "Funkcionalni oporavak"
      correct: false
    - text: "Osobni oporavak"
      correct: true
      explanation: "To je središnje čitanje Recovery-pokreta."

- q: "Moraju li se tri razine događati u određenom redu?"
  type: true-false
  correct: false
  explanation: "Ne — mogu se uzajamno jačati, ali se ne moraju događati u fiksnom redu."
:::

:::flashcards{id=f-7}
- front: "Tri razine oporavka"
  back: "Klinički (simptomi) · funkcionalni (svakodnevica, posao, odnosi) · osobni (smisao, nada, samoodređenje)."
- front: "Osobni oporavak — najvažniji"
  back: "Srce Recovery-pokreta. Moguć i onda kad klinički simptomi ostaju."
:::

:::standard{reading_time=2}
U Recovery-istraživanju često se razlikuju tri razine oporavka — i isplati se držati ih odvojeno:

- **Klinički oporavak** — Simptomi se smanjuju ili nestaju. Dijagnoza gubi težinu. To je čitanje klasične medicine.
- **Funkcionalni oporavak** — Ponovno možeš raditi ono što ti je važno. Raditi ili učiti. Voditi kućanstvo. Njegovati prijateljstva. Oblikovati svakodnevicu.
- **Osobni oporavak** — Pronalaziš novi smisao. Gradiš identitet s onu stranu dijagnoze. Doživljavaš sebe kao nekoga tko smije svom životu davati smjer. Nada se vraća.

Tri razine mogu se uzajamno nositi. Ne moraju, međutim, događati se ovim redoslijedom. Neki ljudi doživljavaju osobni oporavak puno prije nego što simptomi postanu tiši. Drugi prvo grade funkciju — i tek tada primjećuju da se i iznutra nešto pomiče.

Recovery-pokret jasno stavlja težište na osobni oporavak. Jer on je moguć i tada kada klinički simptomi ostaju. Ne moraš biti „izliječena" ili „izliječen" da bi vodila ili vodio dobar život.

Pitaj se: koja od tri razine ti se sada čini najvažnijom?
:::

:::standard-quiz{id=q-7-std}
- q: "Koja razina stoji u središtu Recovery-pokreta?"
  type: multiple-choice
  options:
    - text: "Klinički oporavak — vrijedi tek kad nema simptoma."
      correct: false
    - text: "Osobni oporavak — smisao, nada, identitet s onu stranu dijagnoze."
      correct: true
      explanation: "Upravo tako. Osobni oporavak moguć je i kad simptomi ostaju."
    - text: "Funkcionalni oporavak — glavno da funkcioniraš."
      correct: false

- q: "Moraju li tri razine ići redom?"
  type: multiple-choice
  options:
    - text: "Da — prvo klinički, pa funkcionalni, pa osobni."
      correct: false
    - text: "Ne. Mogu se nositi međusobno, ali se ne moraju događati čvrstim redom."
      correct: true
:::

:::standard-flashcards{id=f-7-std}
- front: "Tri razine oporavka"
  back: "Klinički (simptomi) · funkcionalni (svakodnevica, posao, odnosi) · osobni (smisao, nada, identitet)."
- front: "Osobni oporavak"
  back: "Srce Recoveryja. Voditi dobar život — i kada simptomi ostaju."
- front: "Redoslijed?"
  back: "Nije čvrst. Neki ljudi doživljavaju unutarnji oporavak puno prije kliničkog smanjenja simptoma."
:::



# 8. Nada — srce
{#kap-8 reading_time=4}

Nada je u gotovo svim Recovery-modelima prvo što se spominje [^leamy2011] [^andresen2003] [^schrank2012]. Schrank i kolege dokazali su: nada predviđa osobni oporavak neovisno o simptomima [^schrank2012].

Nada u istraživanjima Recoveryja nije naivna sigurnost. Nije ni suprotnost realizmu. To je konkretna, često tiha uvjerenost da tvoj život može biti više od najgoreg dana u kojem se trenutno nalaziš [^slade2013].

Mike Slade ovaj nalaz sažima ovako: nada je ona energija koja proces oporavka uopće pokreće — bez nje ništa ne počinje [^slade2013].

## Nada kao posuđen resurs

Središnja ideja Recovery-pokreta glasi: nada ne mora dolaziti od tebe same ili samog. Drugi je mogu držati i posuditi ti je dok je ponovno ne osjetiš [^russinova1999] [^deegan1996] [^schrank2012]. Upravo to rade dobri vršnjaci, dobri stručnjaci, dobri članovi obitelji: „Kad ti trenutno ne možeš imati nadu, mi je držimo za tebe."

Za stručnjake nada zato nije svojstvo karaktera, nego profesionalna kompetencija — „hope-inspiring competence" prema Russinovoj [^russinova1999].

:::reflection{id=5 title="Izvori nade"}
- Što ti je nekad davalo nadu — osoba, mjesto, aktivnost, misao?
- Tko u tvojoj okolini trenutno drži nadu za tebe kad je ti sama ili sam ne osjećaš?
- Postoji li mali korak koji bi te danas mogao pomaknuti u smjeru nade?
:::

:::easy{reading_time=1}
Nada je srce Recoveryja.

Nada ne znači: uvijek si vesela ili veseo. Nada znači: vjeruješ da tvoj život može biti više od najgoreg dana.

Najvažnije: nadu ne moraš imati sama ili sam. Drugi je mogu držati za tebe. Dok je ponovno ne osjetiš.

Dobra rečenica: „Kad ti trenutno nemaš nadu, mi je držimo za tebe."
:::

:::quiz{id=q-8}
- q: "Što istraživanje (Schrank i sur. 2012) kaže o nadi?"
  type: multiple-choice
  options:
    - text: "Nada predviđa osobni oporavak neovisno o simptomima."
      correct: true
      explanation: "Nada je prediktor — i onda kad simptomi ostaju prisutni."
    - text: "Nada djeluje samo kod lakših bolesti."
      correct: false
    - text: "Nadu uvijek moraš sama ili sam stvoriti."
      correct: false

- q: "Što znači 'posuđena nada'?"
  type: multiple-choice
  options:
    - text: "Kupiti nadu od obitelji."
      correct: false
    - text: "Drugi drže nadu za tebe dok je sama ili sam ne osjetiš."
      correct: true
      explanation: "Središnja ideja Recovery-pokreta."
:::

:::flashcards{id=f-8}
- front: "Posuđena nada"
  back: "Kad ti ne možeš imati nadu, vršnjaci, stručnjaci ili članovi obitelji je drže za tebe — dok je ponovno ne osjetiš."
- front: "Nada u istraživanju Recoveryja"
  back: "Nije naivna sigurnost — nego tiha, često prkosna uvjerenost da tvoj život može biti više od najgoreg dana."
- front: "Hope-inspiring competence"
  back: "Russinova 1999: nadahnjivati nadu je profesionalna kompetencija, ne svojstvo karaktera."
:::

:::standard{reading_time=2}
Nada je u gotovo svim Recovery-modelima ono prvo što se imenuje. I to nije slučajno.

Mike Slade sažima istraživanje ovako: **„Nada je energija koja uopće pokreće proces oporavka — bez nje ništa ne počinje."**

Nada u Recovery-čitanju nije naivna pouzdanost. Nije ni suprotnost realizmu. Ona je tiho, ponekad prkosno uvjerenje: da tvoj život može biti više od najgoreg dana u kojem si sada.

## Nada se može posuditi

Jedna od najvažnijih ideja Recovery-pokreta glasi: **nada ne mora dolaziti od tebe same ili samog.** Drugi je mogu držati za tebe i posuditi, dok je opet ne uspiješ osjetiti.

Upravo to čine dobri peer-i, dobri stručnjaci, dobri bližnji. Govore — ponekad riječima, ponekad samo svojim prisustvom:

> „Kada ti sada ne možeš imati nadu, mi je držimo za tebe. Onoliko dugo koliko bude trebalo."

To nije terapeutska tehnika. To je stav. Za stručnjake nada zato nije pitanje vlastitog raspoloženja, već profesionalna kompetencija — *hope-inspiring competence* (Russinova).

Pitaj se:

- Tko u tvom životu sada drži nadu za tebe?
- Tko bi mogao, ako ga zamoliš?
- I za koga ti možda sama ili sam držiš nadu — a da to i ne primjećuješ?
:::

:::standard-quiz{id=q-8-std}
- q: "Što znači „posuđena nada"?"
  type: multiple-choice
  options:
    - text: "Moraš sama ili sam izboriti nadu."
      correct: false
    - text: "Drugi drže nadu za tebe, dok je opet ne počneš osjećati."
      correct: true
      explanation: "Jedna od jezgrovitih ideja Recovery-pokreta. Nada nije samo individualno postignuće."

- q: "Je li nada u Recovery-istraživanju isto što i naivni optimizam?"
  type: multiple-choice
  options:
    - text: "Da, jednostavno optimizam."
      correct: false
    - text: "Ne. Tiho, često prkosno uvjerenje da tvoj život može biti više od najgoreg dana."
      correct: true
:::

:::standard-flashcards{id=f-8-std}
- front: "Nada u Recoveryju"
  back: "Nije naivna pouzdanost — već tiho uvjerenje da tvoj život može biti više od najgoreg dana."
- front: "Posuđena nada"
  back: "Kad ti nemaš nadu, peer-i, stručnjaci ili bližnji drže je za tebe — dok je opet ne osjetiš."
- front: "Slade-citat"
  back: "„Nada je energija koja uopće pokreće proces oporavka — bez nje ništa ne počinje.""
:::



# 9. Osnaživanje i samoodređenje
{#kap-9 reading_time=4}

Riječ Empowerment usko je povezana s Recoveryjem. Dolazi iz pokreta za građanska prava i emancipaciju 20. stoljeća [^herriger2014] [^knufseibert2004] [^knuf2026].

1980-ih godina koncept je preuzet i u psihijatrijsku skrb. Empowerment znači: osnaživanje. Aktivno sudjelovanje. Preuzimanje odgovornosti tamo gdje je želiš i možeš nositi. Rogers i kolege razvili su prvu empirijski utemeljenu skalu Empowermenta [^rogers1997]. Na njemačkom govornom području „Poticanje osnaživanja" je standardno djelo [^knufseibert2004].

## Shared Decision-Making

Empowerment u praksi prije svega znači jedno: zajedničke odluke umjesto naloga. Stručnjaci odlučuju s tobom, ne o tebi [^charles1997] [^deegandrake2006]. Studije pokazuju: tko je uključen u odluke, zadovoljniji je i često postiže bolje ishode [^joosten2008] [^slade2017sdm].

## Personal Medicine

Pat Deegan je skovala pojam Personal Medicine: nemedikamentozne stvari koje osobi pomažu ostati zdrava — san, pas, određena šetnja, pjevanje u zboru, večernji poziv. Personal Medicine u Recovery-pokretu se razumije kao ravnopravna lijekovima i unosi se u sporazume o liječenju [^deegan2005].

## Unaprijed dane upute i Joint Crisis Plans

Konkretan instrument Empowermenta su sporazumi o liječenju ili Joint Crisis Plans — sporazumi u kojima u stabilnom stanju zapisuješ što se u slučaju krize treba dogoditi, a što ne. Henderson i kolege su u RCT studiji mogli pokazati da Joint Crisis Plans značajno smanjuju prisilne hospitalizacije [^henderson2004].

:::easy{reading_time=2}
Empowerment znači: smiješ odlučivati. Imaš moć nad vlastitim životom.

U psihijatriji to često znači: odlučujemo zajedno. Ne: liječnik odlučuje sam.

Smiješ postavljati pitanja. Smiješ reći ne. Smiješ tražiti drugo mišljenje.

Postoji i „Personal Medicine". To su stvari osim lijekova koje pomažu: pas, šetnja, zbor, dobar prijatelj. Te su stvari jednako važne kao lijekovi.
:::

:::quiz{id=q-9}
- q: "Što znači 'Shared Decision-Making'?"
  type: multiple-choice
  options:
    - text: "Liječnik odlučuje sam."
      correct: false
    - text: "Stručnjak i osoba s vlastitim iskustvom odlučuju zajedno."
      correct: true
      explanation: "Charles, Gafni & Whelan 1997 utemeljili su ovaj pojam."
    - text: "Obitelj odlučuje."
      correct: false

- q: "Što znači 'Personal Medicine' (Pat Deegan)?"
  type: multiple-choice
  options:
    - text: "Personalizirani lijekovi prema DNK profilu."
      correct: false
    - text: "Nemedikamentozne stvari koje osobi pomažu ostati zdrava."
      correct: true
      explanation: "Pas, šetnja, zbor, pjevanje — moguće integrirati u sporazume o liječenju."

- q: "Što pokazuje RCT studija o Joint Crisis Plans (Henderson 2004)?"
  type: multiple-choice
  options:
    - text: "Nemaju mjerljiv učinak."
      correct: false
    - text: "Značajno smanjuju prisilne hospitalizacije."
      correct: true
:::

:::flashcards{id=f-9}
- front: "Empowerment"
  back: "Osnaživanje. Aktivno sudjelovanje. Preuzimanje odgovornosti tamo gdje je želiš i možeš nositi."
- front: "Personal Medicine"
  back: "Pat Deegan: nemedikamentozne stvari koje te drže zdravom ili zdravim — san, kretanje, odnosi, hobiji. Ravnopravne lijekovima."
- front: "Joint Crisis Plan"
  back: "Sporazum u stabilnom stanju: što se u slučaju krize treba dogoditi, a što ne? RCT (Henderson 2004) pokazuje: smanjuje prisilne hospitalizacije."
- front: "Shared Decision-Making"
  back: "Stručnjak i osoba s vlastitim iskustvom odlučuju zajedno — nije nalog i compliance."
:::

:::standard{reading_time=2}
Empowerment znači osnaživanje. Smiješ odlučivati — o svom životu i o svojoj terapiji.

To zvuči samorazumljivo, ali u svakodnevici psihijatrije često nije. Dugo je vrijedilo: stručnjak odlučuje, pacijentica ili pacijent slijedi. Recovery taj kraj pomiče jasno — prema **zajedničkoj odgovornosti**.

## Tri konkretna alata

**Shared Decision-Making** — Odluke se donose zajedno. Pitaš što se preporuča. Kažeš što odgovara tebi i tvom životu. Studije pokazuju: tko je uključen, zadovoljniji je i postiže bolje rezultate.

**Personal Medicine** (Pat Deegan) — Ne pomažu samo lijekovi. I ono što tebe kao osobu drži zdravom: pas, jutarnja šetnja, zbor, večernji poziv, vrt, planinarenje. U Recovery-pokretu Personal Medicine je **ravnopravna** medicinskom liječenju — i pripada u svaki dogovor o liječenju.

**Joint Crisis Plan** — Dogovor koji u stabilnom stanju potpisuješ sa svojim timom: što treba učiniti u krizi? Što ne? Koga želiš da se obavijesti? Koje lijekove podnosiš, a koje ne? RCT (Henderson 2004) pokazuje: takvi planovi značajno smanjuju prisilne hospitalizacije.

## Što Empowerment ne znači

Empowerment ne znači: sve sama ili sam izboriti. Ne znači: biti protiv stručnjaka. Znači: tvoj glas se broji — uz stručni glas. Oboje zajedno je više.

Pitaj se: gdje već sada smiješ odlučivati? Gdje bi željela ili želio dobiti više glasa?
:::

:::standard-quiz{id=q-9-std}
- q: "Što znači Shared Decision-Making?"
  type: multiple-choice
  options:
    - text: "Sama odlučuješ, liječnik šuti."
      correct: false
    - text: "Stručnjak i ti odlučujete zajedno."
      correct: true
      explanation: "Upravo tako. Tvoj glas se broji uz stručni glas."

- q: "Što je „Personal Medicine" prema Pat Deegan?"
  type: multiple-choice
  options:
    - text: "Personalizirani lijekovi prema DNK-testu."
      correct: false
    - text: "Ne-medikamentozne stvari koje te drže zdravom — pas, šetnja, zbor, prijateljica."
      correct: true
      explanation: "Ravnopravna lijekovima i dio svakog dogovora o liječenju."

- q: "Što donosi Joint Crisis Plan?"
  type: multiple-choice
  options:
    - text: "Obavezna vježba koja jedva djeluje."
      correct: false
    - text: "Smanjuje prisilne hospitalizacije — dokazano RCT-om (Henderson 2004)."
      correct: true
:::

:::standard-flashcards{id=f-9-std}
- front: "Empowerment"
  back: "Osnaživanje. Smiješ odlučivati — o svom životu i o svojoj terapiji. Ne: sve sama ili sam izboriti."
- front: "Shared Decision-Making"
  back: "Stručnjak i ti odlučujete zajedno. Bolji ishodi, veće zadovoljstvo."
- front: "Personal Medicine"
  back: "Pat Deegan: ne-medikamentozne stvari koje te drže zdravom. Ravnopravna lijekovima."
- front: "Joint Crisis Plan"
  back: "Dogovor u stabilnom stanju: što u krizi, što ne? Smanjuje prisilne hospitalizacije."
:::



# 10. Salutogeneza — ostati zdrav
{#kap-10 reading_time=3}

Recovery-orijentirano razmišljanje tijesno je povezano s konceptom salutogeneze [^antonovsky1979] [^antonovsky1997]. Umjesto da pita „Što čini ljude bolesnima?" (patogeneza), salutogeneza pita „Što ljude drži zdravima?"

Antonovsky je identificirao osjećaj koherencije (Sense of Coherence) kao središnji zaštitni čimbenik — sposobnost doživljavanja vlastitog života kao razumljivog, upravljivog i smislenog. Tri komponente upadljivo se podudaraju s procesima CHIME i s trijadom „Nada — Moć — Smisao".

Na njemačkom govornom području Schmolke je salutogenetske koncepte učinila uporabljivima za osobe s dijagnozom šizofrenije [^schmolke2001]. Salutogeneza i Recovery se u DACH-literaturi redovito opisuju kao dvije strane istog stava — usmjerenog na resurse umjesto na deficite [^knuf2026] [^ameringschmolke2012].

:::info{type=note title="Antonovskyjeve tri komponente osjećaja koherencije"}
- **Razumljivost** (Comprehensibility): moj život ima smisla.
- **Upravljivost** (Manageability): mogu se nositi s onim što dolazi — sama ili sam, ili uz pomoć.
- **Smislenost** (Meaningfulness): isplati se angažirati.
:::

:::easy{reading_time=1}
Medicina često pita: što čini ljude bolesnima? To se zove patogeneza.

Salutogeneza pita drugačije: što ljude drži zdravima?

Istraživač Aaron Antonovsky pronašao je tri važne točke:

- Razumijem svoj život.
- Mogu se nositi s teškim stvarima — sama ili sam, ili uz pomoć.
- Moj život ima smisao.

Kad su ove tri točke prisutne, jača si protiv opterećenja.
:::

:::quiz{id=q-10}
- q: "Koja je razlika između patogeneze i salutogeneze?"
  type: multiple-choice
  options:
    - text: "Patogeneza je novija."
      correct: false
    - text: "Patogeneza pita o bolesti — salutogeneza o zdravlju."
      correct: true
    - text: "Patogeneza vrijedi samo za tjelesne bolesti."
      correct: false

- q: "Tko je razvio koncept salutogeneze?"
  type: multiple-choice
  options:
    - text: "Sigmund Freud"
      correct: false
    - text: "Aaron Antonovsky"
      correct: true
:::

:::flashcards{id=f-10}
- front: "Salutogeneza"
  back: "Što ljude drži zdravima? (Antonovsky 1979). Suprotnost patogenezi — pitanju 'Što čini bolesnim?'."
- front: "Osjećaj koherencije"
  back: "Razumljivost · upravljivost · smislenost. Zaštitni čimbenik prema Antonovskyju."
:::

:::standard{reading_time=2}
Klasična medicina pita: **„Što ljude čini bolesnima?"** Tome se kaže patogeneza. Traži uzroke, rizike, nedostatke.

Sociolog Aaron Antonovsky pitanje je okrenuo. Pitao je: **„Što ljude drži zdravima — i pod opterećenjem?"** Tome se kaže salutogeneza.

## Osjećaj koherencije

Antonovsky je primijetio: ljudi koji dobro prebrode teške životne krize često dijele određen unutarnji stav. Nazvao ga je **osjećaj koherencije** i opisao tri komponente:

- **Razumljivost** — Moj život ima smislenu cjelinu. Ono što mi se događa može se smjestiti.
- **Upravljivost** — Mogu se nositi s onim što dolazi. Sama ili uz pomoć.
- **Smislenost** — Isplati se uložiti se. Moj život ima smjer.

Ove tri komponente zvuče poznato. Stoje začuđujuće blizu petorima procesima CHIME i trijadi „Nada — Moć — Smisao".

## Zašto je to važno

Salutogeneza i Recovery dijele isti temeljni stav: usmjeren na resurse, a ne na nedostatke. Ne vide te kao snop simptoma, već kao osobu sa snagama, iskustvima, odnosima — i kada je mnogo toga teško.

U DACH-literaturi (Schmolke; Amering i Schmolke) salutogeneza i Recovery zato se često opisuju kao dvije strane iste medalje.

Pitaj se: što tebe drži zdravom — i danas, i sada?
:::

:::standard-quiz{id=q-10-std}
- q: "Što pita salutogeneza — za razliku od patogeneze?"
  type: multiple-choice
  options:
    - text: "Što ljude čini bolesnima?"
      correct: false
      explanation: "To je patogeneza. Salutogeneza pita obratno."
    - text: "Što ljude drži zdravima — i pod opterećenjem?"
      correct: true
      explanation: "Pitanje koje je postavio Antonovsky."

- q: "Koje tri komponente pripadaju osjećaju koherencije?"
  type: multiple-choice
  options:
    - text: "Razumljivost · upravljivost · smislenost"
      correct: true
      explanation: "Antonovskyev trozvuk. Iznenađujuće blizu „Nada — Moć — Smisao"."
    - text: "Nada · vjera · ljubav"
      correct: false
:::

:::standard-flashcards{id=f-10-std}
- front: "Salutogeneza"
  back: "Što ljude drži zdravima? (Antonovsky). Suprotnost patogenezi — pitanju „što čini bolesnim?"."
- front: "Osjećaj koherencije"
  back: "Razumljivost · upravljivost · smislenost. Zaštitni faktor pod opterećenjem."
- front: "Salutogeneza i Recovery"
  back: "Dvije strane istog stava: usmjereni na resurse, a ne na nedostatke. Ti si više od svojih simptoma."
:::



# 11. Stigma i samostigma
{#kap-11 reading_time=4}

Stigma je jedna od najvećih prepreka Recoveryju. Goffman je za društvene znanosti uveo ovaj pojam: stigma je obilježje koje osobu u očima drugih obezvređuje [^goffman1963].

## Tri razine stigme

Corrigan i Watson razlikuju tri razine [^corrigan2002]:

- **Javna stigma**: predrasude u društvu („psihički bolesni su opasni").
- **Strukturna stigma**: zakidanje u zakonima, na tržištu rada, u osiguranju.
- **Samostigma** (internalizirana stigma): negativne slike preuzimaš kao sliku o sebi.

## Samostigma — kad oluja udara unutra

Corrigan i kolege opisuju samostigmu kao regresivan proces u četiri koraka: primijetiti, prihvatiti, primijeniti, patiti — s posljedicama za samopoštovanje, samodjelotvornost i tijek bolesti [^corrigan2011].

Dobra vijest: samostigma je promjenjiva. Sustavna razmatranja pokazuju da psihosocijalne intervencije — posebno u grupama — mogu smanjiti internaliziranu stigmu [^yanos2015] [^buechter2023]. I anti-stigma programi s izravnim kontaktom s osobama s vlastitim iskustvom pokazuju u metaanalizama male do srednje učinke [^corrigan2012] [^thornicroft2016].

U izvještajima o iskustvu osoba koje prate u oporavku [^utschakowski2009] iznova se pojavljuje jedna misao: nije dijagnoza sama po sebi ono što doista ranjava. Ranjava ono što dijagnoza u očima drugih čini od osobe — i ono što osoba s vlastitim iskustvom potom počinje vjerovati o sebi. Samostigma nastaje točno na ovom šavu.

:::reflection{id=6 title="Unutarnji glasovi"}
- Koje rečenice si govoriš o svojoj bolesti ili o bolesti osobe koju pratiš?
- Koje od ovih rečenica zapravo nisu tvoj vlastiti glas, nego preuzete slike izvana?
- Koja bi rečenica bila prijaznija verzija iste istine?
:::

:::easy{reading_time=2}
Stigma znači: oblačivaju te zbog nečega. Na primjer: jer imaš dijagnozu.

Postoji stigma na tri područja:

- U društvu — predrasude, ružne riječi.
- U pravilima i zakonima — npr. poteškoće kod osiguranja.
- U tebi samoj ili samom — vjeruješ ružne stvari o sebi.

Posljednje se zove samostigma. Opasna je. Čini te malenom ili malenim prije nego što to drugi učine.

Dobra vijest: samostigma se može mijenjati. Razgovor pomaže. Susresti druge osobe koje proživljavaju isto također pomaže.
:::

:::quiz{id=q-11}
- q: "Što je samostigma?"
  type: multiple-choice
  options:
    - text: "Stigma koju mi rade drugi."
      correct: false
    - text: "Kad negativne slike preuzmem kao sliku o sebi."
      correct: true
      explanation: "Corrigan & Watson 2002 opisuju to kao regresivan proces."

- q: "Koja metoda najučinkovitije smanjuje stigmu?"
  type: multiple-choice
  options:
    - text: "Šutnja."
      correct: false
    - text: "Izravan kontakt s osobama s proživljenim iskustvom."
      correct: true
      explanation: "Thornicroft i sur. 2016 to pokazuju u metaanalizi."

- q: "Može li se samostigma promijeniti?"
  type: true-false
  correct: true
  explanation: "Da — psihosocijalne intervencije, posebno u grupama, smanjuju internaliziranu stigmu (Yanos 2015)."
:::

:::flashcards{id=f-11}
- front: "Tri razine stigme"
  back: "Javna stigma · strukturna stigma · samostigma (internalizirana stigma)."
- front: "Samostigma"
  back: "Kad negativne društvene slike preuzmeš kao sliku o sebi. Promjenjiva."
- front: "Najučinkovitija anti-stigma metoda"
  back: "Izravan osobni kontakt s osobama s proživljenim iskustvom (Corrigan i sur. 2012; Thornicroft i sur. 2016)."
:::

:::standard{reading_time=2}
Stigma je jedna od najvećih prepreka na Recovery-putu. Sociolog Erving Goffman opisao je stigmu kao obilježje koje osobu obezvređuje u očima drugih.

## Tri razine

Patrick Corrigan razlikuje tri razine na kojima stigma djeluje:

- **Javna stigma** — Predrasude u društvu. „Psihički bolesni su opasni." „Saberi se."
- **Strukturna stigma** — Diskriminacija u zakonima, na tržištu rada, kod osiguranja, kod uprava.
- **Samostigma** — Preuzimaš negativne slike izvana kao sliku o sebi.

## Kad se oluja okrene prema unutra

Samostigma je osobito podmukla. Čini te malom — prije nego što drugi to uopće pokušaju. Corrigan opisuje proces u četiri koraka: opaziti, pristati, primijeniti, patiti. Rezultat: manje samovrijednosti, manje samodjelotvornosti, često i teži tijek bolesti.

U iskustvenim izvještajima osoba koje prate oporavak često se pojavljuje jedna misao: **Nije sama dijagnoza ono što stvarno povređuje. Povređujuće je ono što dijagnoza u očima drugih čini od osobe — i ono što osoba potom o sebi počinje vjerovati.**

## Dobra vijest

Samostigma je promjenljiva. Istraživanje pokazuje: psihosocijalne intervencije — osobito u skupinama — smanjuju internaliziranu stigmu. Protiv javne stigme najučinkovitiji je **izravni kontakt** s ljudima s vlastitim iskustvom.

Ti nisi svoja dijagnoza. Ti si osoba s pričom, s vrijednostima, s odnosima, sa sposobnostima.

Pitaj se: koje rečenice sebi govoriš o svojoj bolesti — i koje su zapravo preuzeti glasovi izvana?
:::

:::standard-quiz{id=q-11-std}
- q: "Što je samostigma?"
  type: multiple-choice
  options:
    - text: "Stigma koju mi nameću drugi."
      correct: false
    - text: "Kada negativne društvene slike preuzmem kao sliku o sebi."
      correct: true
      explanation: "Corrigan i Watson 2002: regresivan proces u četiri koraka."

- q: "Što najbolje djeluje protiv javne stigme?"
  type: multiple-choice
  options:
    - text: "Šutnja i skrivanje."
      correct: false
    - text: "Izravan kontakt između opće populacije i ljudi s vlastitim iskustvom."
      correct: true
      explanation: "Thornicroft et al. 2016: susret mijenja slike."

- q: "Je li samostigma promjenljiva?"
  type: multiple-choice
  options:
    - text: "Ne — postavljena je jednom zauvijek."
      correct: false
    - text: "Da — osobito u skupinama i kroz psihosocijalne intervencije."
      correct: true
:::

:::standard-flashcards{id=f-11-std}
- front: "Tri razine stigme"
  back: "Javna stigma · strukturna stigma · samostigma (internalizirana)."
- front: "Samostigma"
  back: "Kada vjeruješ negativnim slikama izvana o sebi. Čini te malom prije nego što drugi to čine. Promjenljiva."
- front: "Što djeluje protiv stigme?"
  back: "Izravan kontakt s ljudima s vlastitim iskustvom. Razgovor. Skupine. Dijeljenje priča."
- front: "Ti nisi svoja dijagnoza"
  back: "Ti si osoba s pričom, s vrijednostima, s odnosima, sa sposobnostima."
:::



# Najvažniji pomak: od uloge pacijenta do stručnjaka za vlastito iskustvo
{#kap-shift reading_time=8}

Ako si bila ili bio dugo u psihijatrijskom liječenju — možda godine ili desetljeća — to je nešto učinilo s tobom. Ne samo bolest. I uloga.

U klasičnoj medicini postoji jasna podjela zadataka: stručnjak zna. Pacijentica ili pacijent slijedi. Dijagnoza objašnjava što se događa. Lijek ili terapija ponovno čine cijelim. Ova logika dobro funkcionira kod mnogih tjelesnih bolesti. Kod duševne patnje udara u granice koje su u posljednjih trideset godina postajale sve jasnije.

## Što ti je duga uloga mogla učiniti

Možda u nečemu od ovoga prepoznaješ sebe:

- Naučila ili naučio si opisivati sebe kroz dijagnozu. „Ja sam bipolar/bipolarac." „Ja sam borderlinerka." „Ja sam kroničan slučaj."
- Naučila ili naučio si da netko drugi bolje zna što je dobro za tebe — liječnica, terapeut, tim za liječenje.
- Naučila ili naučio si da se na tvoj vlastiti osjećaj gleda s nepovjerenjem — kao na „nedostatak uvida u bolest" ili „non-compliance".
- Naučila ili naučio si čekati — sljedeći termin, sljedeći lijek, sljedeću metodu koja bi konačno trebala djelovati.
- Naučila ili naučio si da je oporavak nešto što se s tobom radi. Ne nešto što ti radiš.

To nije osobna slabost. To je naučena reakcija. U istraživanjima se zove *naučena bespomoćnost* — i pojavljuje se posvuda gdje ljudi dugo žive u sustavima u kojima imaju malo kontrole [^seligman1975].

Patricia Deegan, jedan od najsnažnijih glasova Recovery-pokreta, za to je skovala vrlo oštar pojam: *spirit breaking* [^deegan1990]. Time opisuje kako sustavi koji pomažu ponekad rade suprotno onome što bi trebali — kako lome osjećaj sebe, vlastitu volju, glas ljudi, umjesto da ih jačaju. Ne iz zle namjere. Nego jer to logika sustava tako predviđa.

## Paradigma koja blokira ozdravljenje

Larry Davidson i David Roe znanstveno su uhvatili ovu razliku [^davidsonroe2007]. Govore o dva vrlo različita značenja Recoveryja:

- **Recovery FROM** — oporavak OD bolesti. To je medicinsko čitanje: simptomi se povlače, funkcija se vraća, dijagnoza je u najboljem slučaju iza tebe.
- **Recovery IN** — oporavak S bolešću. To je osobno čitanje: voditi život koji te ispunjava, i kad su simptomi još tu.

Oba su moguća. Oba su vrijedna. Ali slijede potpuno različite logike. *Recovery FROM* se događa u sobi za liječenje — ti si pasivna primateljica ili primatelj. *Recovery IN* se događa u tvom životu — ti si osoba koja djeluje.

Nizozemska istraživačica Recoveryja Wilma Boevink to izoštrava još više [^boevink2017]: za mnoge osobe s teškim psihičkim poteškoćama psihijatrijski sustav uopće nije prvenstveno sustav ozdravljenja. To je jedan od više alata na duljem putu. Tko to razumije — i počne psihijatriju koristiti kao sredstvo umjesto da se doživljava kao njezin objekt — pomiče nešto temeljno.

## Kako pomak izgleda u praksi

Pomak se događa malim koracima. Rijetko ima trenutak praska. Evo nekoliko primjera kako može izgledati:

:::table{name="Od-pacijenta-do-strucnjaka"}
| Iz uloge pacijenta … | … u stav stručnjakinje/stručnjaka |
|----------------------|----------------------------------|
| „Recite mi što da radim." | „Što preporučujete — i što za mene pristaje mom životu?" |
| „Nikad neće biti bolje." | „Danas je bilo teško. Da vidimo što donosi sljedeći tjedan." |
| „Moj liječnik zna što je dobro za mene." | „Odlučujemo zajedno — i smijem usput postavljati pitanja." |
| „Ja sam svoja dijagnoza." | „Imam dijagnozu. Ona nije sve što jesam." |
| „Zakazala sam, zakazao sam." | „Trenutno imam težak dan. To je informacija, ne presuda." |
| „Možda mi tim oduzme lijekove ako im to ispričam." | „Ova mi nuspojava smeta. Možemo li zajedno provjeriti alternative?" |
| „Moram biti hrabra, hrabar." | „Smijem prihvatiti pomoć — i smijem odlučiti koju." |
:::

Nijedan od ovih pomaka ne znači da ti više ne treba pomoć. Nijedan ne znači da moraš biti protiv stručnjaka. Ne radi se o ustanku, radi se o položaju.

## Zašto je ovaj pomak tako važan

Nije jedna preporuka od mnogih. On je preduvjet da Recovery uopće postane djelotvoran za tebe:

- **Nada** se može razviti samo u sebstvu koje se uopće doživljava kao subjekt.
- **Osobni ciljevi** mogu se slijediti samo onda kad se doživljavaš kao netko tko smije imati ciljeve.
- **Samodjelotvornost** se gradi samo tamo gdje stječeš iskustva da nešto sama ili sam pokrećeš — ne isključivo čekajući da se nešto s tobom dogodi.
- **Smisao** u životu nastaje izborom. Tko nema izbor, teško ima smisao.

Istraživanja to nedvosmisleno potvrđuju. Roe i Davidson [^roedavidson2005] opisuju Recovery kao „ponovno sakupljanje krhotina" i ponovno pisanje vlastite priče. Aktualne studije o rekonstrukciji narativnog identiteta pokazuju [^chiba2019narrative]: tko u fazi Recoveryja (re)konstruira identitet izvan uloge pacijenta, ide znatno dalje — i onda kad simptomi ostaju.

:::info{type=note title="Što ovdje nije mišljeno"}
Pomak od bivanja pacijentom prema stavu stručnjakinje ili stručnjaka nije poziv da prekineš lijekove, prekineš liječenje ili se snalaziš sama ili sam. Nije prigovor stručnjacima.

To je poziv da svoj vlastiti glas uzmeš kao izvor — uz glasove stručnjaka. I da otkriješ što je za tebe točno.

:::

## Iz onoga što je proživljeno postaje stručnjakinja, stručnjak iz iskustva

Na njemačkom govornom području za ovaj korak postoji lijepo ime: stručnjakinja iz iskustva, stručnjak iz iskustva. U EX-IN obrazovanju upravo se to sustavno razvija — od osoba s psihijatrijskim iskustvom kroz dvanaest modula nastaju pratiteljice i pratitelji koji svoje vlastito iskustvo čine resursom za druge [^utschakowski2009] [^exin_de].

Ne moraš postati osoba koja prati u oporavku da bi izvela ovaj pomak. Ali ideja je korisna i kad je primjenjuješ samo na sebe: tvoja priča nije nešto što ti se dogodilo i što te definira. To je nešto što poznaješ — i iz čega možeš crpiti znanje. Znanje koje ti pomaže bolje razumjeti sebe i druge.

Wilma Boevink to naziva *experiential expertise* — stručnost iz iskustva [^boevink2017] [^boevink2012]. Tvoje iskustveno znanje nije ništa manje vrijedno od stručnog znanja terapeuta. Drugačije je. I oboje zajedno više je od zbroja dijelova.

## Ako još oklijevaš

Možda sve ovo čitaš i misliš: lijepo rečeno, ali kod mene to više ne ide. Možda imaš trideset godina iskustva u klinici. Možda si izgubila ili izgubio vjeru. Možda ti nitko nikad nije rekao da ti ova uloga uopće pripada.

Tri stvari:

1. **Nikad nije prekasno.** Istraživanje Recoveryja ne poznaje dobnu granicu ni granicu težine. Čak i osobe koje su desetljećima živjele u stacionarnoj skrbi opisuju pomake — ponekad upravo onda kad više nisu računale na njih [^harding1987] [^lally2017].

2. **Ne moraš sve raditi odjednom.** Jedno jedino pitanje ujutro — „Što bi mi danas trebalo?" — već je pokret. Jedan jedini odgovor sebi navečer — „Danas je bilo teško, a ja sam ipak bila tu" — također je pokret.

3. **Trebaju ti saveznici.** Nitko ne uspijeva izvesti ovaj pomak sam. Vršnjaci, samopomoćna grupa, osoba od povjerenja, stručnjak koji koncept živi, Recovery College. Ako tvoj tim za liječenje ne ide ovim putem, to nije tvoj neuspjeh — onda taj tim trenutno ima slijepu točku.

:::quote{author="Patricia Deegan, 1996" source="deegan1996" lang="en"}
We are a conspiracy of hope and we are pressing back against the strong tide of oppression which for centuries has been the legacy of those of us who are labeled with mental illness.
:::

:::quote-translation{source="deegan1996" translator="vlastiti prevod"}
Mi smo zavjera nade. Suprotstavljamo se snažnoj struji ugnjetavanja koja je stoljećima bila nasljeđe onih od nas koji su etiketirani psihičkom dijagnozom.
:::

:::reflection{id=10 title="Tvoj položaj"}
- Na kojim se mjestima još doživljavaš u klasičnoj ulozi pacijenta?
- Gdje postoje trenuci u kojima se već doživljavaš kao stručnjakinja, stručnjak za vlastito iskustvo — pa i kratki?
- Koja ti je rečenica iz lijevog stupca tablice poznata — a koja iz desnog želi polako dobiti mjesto?
- Tko bi mogla biti tvoja suzavjerenica ili suzavjerenik za nadu?
:::

:::easy{reading_time=3}
Možda si bila ili bio dugo u liječenju. Onda si vjerojatno naučila ili naučio nešto određeno:

- Liječnik zna bolje.
- Moram raditi ono što mi se kaže.
- Ja sam bolesna ili bolestan, drugi mi pomažu.

To je uloga. Zove se uloga pacijenta.

Ova uloga ponekad pomaže. Ali može i naškoditi. Postaješ malena ili malen. Čekaš. Postaješ ovisna ili ovisan.

Recovery kaže: smiješ izaći iz ove uloge. Korak po korak.

Nećeš postati liječnik. Ali postaješ stručnjakinja ili stručnjak za vlastiti život. Sebe poznaješ najbolje. Tvoje iskustvo je znanje.

**Ova je promjena najvažnija promjena u Recoveryju. Bez nje ne ide.**

Tri stvari za kraj:

- Nikad nije prekasno. I nakon mnogo godina u liječenju.
- Ne moraš sve odjednom. Mali koraci se broje.
- Trebaju ti saveznici.

:::reflection{id=shift-easy title="Pitaj samu sebe, samog sebe"}
- Na kojem se mjestu još doživljavaš u staroj ulozi?
- Gdje si već stručnjakinja ili stručnjak za svoj život?
:::
:::

:::quiz{id=q-shift}
- q: "Što ovdje znači 'uloga pacijenta'?"
  type: multiple-choice
  options:
    - text: "Medicinska dijagnoza."
      correct: false
    - text: "Naučeni stav: pasivno čekati, drugi znaju bolje, mene se čini zdravom ili zdravim."
      correct: true
      explanation: "Uloga, ne dijagnoza — i promjenjiva je."

- q: "Što Patricia Deegan kaže o 'spirit breakingu'?"
  type: multiple-choice
  options:
    - text: "Opisuje rijedak izniman slučaj."
      correct: false
    - text: "Sustavi koji pomažu mogu slomiti osjećaj sebe, glas i vlastitu volju — uglavnom bez zle namjere."
      correct: true
      explanation: "Deegan 1990 — oštar, ali precizan pojam."

- q: "Koja je razlika između Recovery FROM i Recovery IN?"
  type: multiple-choice
  options:
    - text: "FROM = starije čitanje, IN = novije."
      correct: false
    - text: "FROM = oporavak OD bolesti (medicinski). IN = oporavak S bolešću (osobni)."
      correct: true
      explanation: "Davidson & Roe 2007."

- q: "Je li točno da je ovaj pomak samo jedna od mnogih preporuka?"
  type: true-false
  correct: false
  explanation: "Ne — on je preduvjet da Recovery uopće postane djelotvoran."

- q: "Od koje dobi / nakon koliko godina liječenja je prekasno za ovaj pomak?"
  type: multiple-choice
  options:
    - text: "Nakon 10 godina."
      correct: false
    - text: "Od 60."
      correct: false
    - text: "Nikad."
      correct: true
      explanation: "Istraživanje Recoveryja ne poznaje dobnu granicu. Moguće i nakon desetljeća."
:::

:::flashcards{id=f-shift}
- front: "Spirit Breaking"
  back: "Patricia Deegan (1990): kako sustavi koji pomažu lome osjećaj sebe, glas i vlastitu volju — uglavnom ne iz zle namjere."
- front: "Recovery FROM"
  back: "Oporavak OD bolesti — medicinsko čitanje. Simptomi se povlače, dijagnoza je u najboljem slučaju iza tebe."
- front: "Recovery IN"
  back: "Oporavak S bolešću — osobno čitanje. Ispunjen život, i kad simptomi ostaju."
- front: "Uloga pacijenta"
  back: "Naučeni stav: pasivno, čekajuće, određeno od drugih. Kratkoročno pomaže, dugoročno šteti. Promjenjiva."
- front: "Stručnost iz iskustva (Boevink)"
  back: "Tvoje proživljeno znanje samostalno je i ravnopravno stručnom znanju. Možeš ga koristiti — za sebe i za druge."
- front: "Conspiracy of Hope"
  back: "Patricia Deegan 1996: 'Mi smo zavjera nade.' — Recovery kao kolektivni projekt protiv povijesnog oduzimanja vlastite volje."
:::

:::standard{reading_time=3}
Ako si bila ili bio dugo u psihijatrijskom liječenju — godine možda, desetljeća — to je s tobom nešto učinilo. Ne samo bolest. I **uloga**.

## Što je uloga s tobom učinila

Možda si naučila ili naučio:

- Liječnik bolje zna. Moj osjećaj manje vrijedi.
- Moram čekati. Sljedeći termin, sljedeći lijek, sljedeću metodu.
- Ja sam svoja dijagnoza: „Ja sam Borderlinerka." „Ja sam bipolaran."
- Oporavak je nešto što se sa mnom radi — ne nešto što ja činim.

To nije osobna slabost. To je **naučena reakcija** na godine u sustavu koji dopušta malo kontrole.

Patricia Deegan, jedna od oblikovnih glasova Recovery-pokreta, smislila je oštar pojam za to: **„spirit breaking"**. Pomažući sustavi mogu — najčešće bez zle namjere — slomiti osjećaj sebe, glas, samostalnost osobe. Ne zato što su zaposleni zli. Već zato što logika sustava to tako predviđa.

## Recovery FROM nasuprot Recovery IN

Larry Davidson i David Roe razlikuju dva vrlo različita čitanja Recoveryja:

- **Recovery FROM** — Oporavak **OD** bolesti. Medicinsko čitanje: simptomi nestaju, dijagnoza iza tebe. Ti si pasivna primateljica ili pasivni primatelj terapije.
- **Recovery IN** — Oporavak **S** bolešću. Osobno čitanje: voditi ispunjen život, i kada simptomi ostaju. Ti si djelatna osoba.

Oba su moguća. Oba su vrijedna. Ali slijede sasvim različite logike. **Recovery IN je pretpostavka da Recovery uopće za tebe može početi djelovati.** Jer nada, ciljevi, samodjelotvornost, smisao — sve to nastaje samo tamo gdje sebe doživljavaš kao nekoga tko smije birati.

## Ostaješ ovisna ili ovisan o pomoći — i ipak subjekt

Ovaj pomak nije poziv na obustavljanje lijekova ili završetak liječenja. Nije prigovor stručnjacima. To je poziv da svoj glas uzmeš kao izvor — **uz** stručne glasove.

Tri stvari za kraj:

- **Nikada nije prekasno.** I nakon desetljeća liječenja takvi su pomaci mogući.
- **Ide u malim koracima.** Jedno pitanje ujutro: „Što bih danas trebala ili trebao?" dovoljno je za početak.
- **Trebaš saveznike.** Peer-ovi. Osoba od povjerenja. Recovery College. Nitko to ne uspijeva sam.
:::

:::standard-quiz{id=q-shift-std}
- q: "Što Patricia Deegan misli pod „spirit breaking"?"
  type: multiple-choice
  options:
    - text: "Rijetka pojedinačna slučaja koja se jedva događa."
      correct: false
    - text: "Kako pomažući sustavi mogu slomiti osjećaj sebe, glas i samostalnost — najčešće bez zle namjere."
      correct: true
      explanation: "Oštar, ali precizan pojam (Deegan 1990)."

- q: "Koja je razlika između Recovery FROM i Recovery IN?"
  type: multiple-choice
  options:
    - text: "FROM je zastario, IN je nova verzija."
      correct: false
    - text: "FROM = oporavak OD bolesti (medicinski). IN = oporavak S bolešću (osobni)."
      correct: true
      explanation: "Davidson i Roe 2007. Oba su moguća, ali slijede različite logike."

- q: "Tko je stručnjak za tvoj život?"
  type: multiple-choice
  options:
    - text: "Tvoj liječnički tim."
      correct: false
    - text: "Ti sama ili sam — uz stručno znanje onih koji te liječe."
      correct: true

- q: "Od koje točke je prekasno za ovaj pomak?"
  type: multiple-choice
  options:
    - text: "Nakon 20 godina liječenja."
      correct: false
    - text: "Od 60. godine."
      correct: false
    - text: "Nikada. I nakon desetljeća pomaci su mogući."
      correct: true
:::

:::standard-flashcards{id=f-shift-std}
- front: "Spirit Breaking (Deegan)"
  back: "Kad pomažući sustavi — najčešće bez zle namjere — slome osjećaj sebe, glas i samostalnost osobe."
- front: "Recovery FROM"
  back: "Oporavak OD bolesti. Medicinsko čitanje: simptomi nestaju, dijagnoza iza tebe."
- front: "Recovery IN"
  back: "Oporavak S bolešću. Osobno čitanje: ispunjen život, i kada simptomi ostaju."
- front: "Stručnjak za svoj život"
  back: "Ti se najbolje poznaješ. Tvoje iskustvo je znanje — uz stručno znanje, ne umjesto njega."
- front: "Nikada prekasno"
  back: "Recovery ne poznaje dobnu granicu ni granicu težine. Moguć i nakon desetljeća."
:::



# 12. Vršnjačka podrška, Trialog i EX-IN
{#kap-12 reading_time=5}

## Što je vršnjačka podrška

Vršnjačka podrška (Peer-Support) znači praćenje od strane ljudi koji su i sami doživjeli i proradili psihičke krize. Na njemačkom govornom području: osobe koje prate u oporavku, stručnjakinje i stručnjaci iz iskustva, vršnjaci ili EX-IN suradnice i suradnici [^utschakowski2009] [^exin_de].

Korijeni sežu daleko unatrag — u tradiciju samopomoći, u WRAP-koncept Mary Ellen Copeland [^copeland1997], u njemački model Trijaloga [^bockpriebe2005] i u EX-IN inicijativu od 2005. [^utschakowski2009].

## Trijalog — naslijeđe njemačkog govornog područja

Trijalog — ravnopravan razgovor između osoba s vlastitim iskustvom, članova obitelji i stručnjaka — utemeljili su 1989. u Hamburgu Thomas Bock i suborci, suborke [^bockpriebe2005]. To je doprinos njemačkog govornog područja međunarodnom Recovery-pokretu i trajno je promijenio DACH skrb [^vonpeter2015].

## Što pokazuju istraživanja

Baza dokaza za vršnjačku podršku danas je značajna. Multicentrična RCT studija s preko 600 sudionika u četiri zemlje pokazala je značajne učinke na Empowerment i kvalitetu života [^slade2024peer]. Aktualne metaanalize konzistentno nalaze pozitivne učinke na samodjelotvornost i manje učinke na nadu i Empowerment [^white2024] [^lyons2021]. Njemačka RCT studija također je mogla pokazati pozitivne učinke [^mahlke2017].

Čimbenici djelotvornosti su: proživljeno iskustvo kao sidro vjerodostojnosti, nada kao model, oblikovanje odnosa na ravnopravnoj razini i nestigmatizirajuća komunikacija [^mead2001] [^davidson2012].

Wilma Boevink ovaj princip sažima jednostavno: iskustveno znanje koje potječe iz pokreta osoba s vlastitim iskustvom ravnopravno je profesionalnom stručnom znanju — i čini temelj autentičnog Recovery-znanja [^boevink2012].

:::easy{reading_time=2}
Vršnjačka podrška znači: ljudi prate druge ljude sa sličnim iskustvom.

To čini dobro. Istraživanje pokazuje: kad netko tko je „prošao kroz to" stoji pred tobom, to je snažan znak. Daje nadu.

Na njemačkom govornom području postoje osobe koje prate u oporavku, s obrazovanjem (EX-IN).

Postoji i Trijalog — razgovori između osoba s vlastitim iskustvom, članova obitelji i stručnjaka. Na ravnopravnoj razini. Bez da je jedna ili jedan važniji.

Takvi razgovori postoje u mnogim gradovima u Švicarskoj, Njemačkoj i Austriji.
:::

:::quiz{id=q-12}
- q: "Što znači EX-IN?"
  type: multiple-choice
  options:
    - text: "Dijagnoza."
      correct: false
    - text: "Experienced Involvement — obrazovanje za osobe koje prate u oporavku."
      correct: true
      explanation: "Razvijano od 2005. u Bremenu."

- q: "Tko u Trijalogu razgovara na ravnopravnoj razini?"
  type: multiple-choice
  options:
    - text: "Samo stručnjaci."
      correct: false
    - text: "Osobe s vlastitim iskustvom, članovi obitelji i stručnjaci zajedno."
      correct: true
      explanation: "1989. utemeljio Thomas Bock u Hamburgu."

- q: "Što pokazuje istraživanje vršnjačke podrške (Slade i sur. 2024)?"
  type: multiple-choice
  options:
    - text: "Nema mjerljivih učinaka."
      correct: false
    - text: "Značajne učinke na Empowerment i kvalitetu života."
      correct: true
:::

:::flashcards{id=f-12}
- front: "EX-IN"
  back: "Experienced Involvement — obrazovanje za osobe s psihijatrijskim iskustvom da postanu pratiteljice i pratitelji u oporavku (od 2005., Bremen). Inspirirano Dorotheom Buck."
- front: "Trijalog"
  back: "Ravnopravan razgovor između osoba s vlastitim iskustvom, članova obitelji i stručnjaka. 1989. utemeljio Thomas Bock u Hamburgu."
- front: "Vršnjačka podrška — čimbenici djelotvornosti"
  back: "Proživljeno iskustvo kao sidro vjerodostojnosti · nada kao model · odnos na ravnopravnoj razini · nestigmatizirajuća komunikacija."
- front: "Mahlke i sur. 2017"
  back: "Njemačka RCT studija o vršnjačkoj podršci jedan na jedan — pokazala je značajne učinke na Empowerment i samodjelotvornost."
:::

:::standard{reading_time=2}
Vršnjačka podrška znači: ljudi koji su sami prošli kroz psihičku krizu prate druge — ravnopravno, s proživljenim iskustvom, a ne sa stručnim naslovom.

U njemačkom govornom području zovemo ih pratiteljice ili pratitelji oporavka, stručnjakinje ili stručnjaci za vlastito iskustvo ili EX-IN-suradnice ili suradnici. EX-IN stoji za „Experienced Involvement" — obrazovni program nastao 2005. u Bremenu, danas ukorijenjen u mnogim klinikama, savjetovalištima i Recovery Collegesima.

Tri su pojma pritom važna:

- **Vršnjačka podrška:** Pratnja od strane nekoga sa sličnim iskustvom. Vjerodostojna, jer je proživljena.
- **Trialog:** Ravnopravni razgovor između osoba s iskustvom, bližnjih i stručnjaka — utemeljen 1989. u Hamburgu od Thomasa Bocka.
- **EX-IN:** Strukturirana izobrazba za pratnju oporavka, nadahnuta Dorotheom Buck.

Što istraživanje kaže: velika međunarodna studija s više od 600 sudionika u četiri zemlje pokazala je značajne učinke na Empowerment i kvalitetu života. Njemačka studija to potvrđuje. Ono što djeluje nije trik — to je susret s nekim tko može reći: „I ja sam bila tamo. I postoji put."

Možda i sama ili sam poznaješ nekoga čija te priča nosila. Možda ćeš jednoga dana ti biti ta osoba za nekog drugog.
:::

:::standard-quiz{id=q-12-std}
- q: "Što znači EX-IN?"
  type: multiple-choice
  options:
    - text: "Nova dijagnoza."
      correct: false
    - text: "Experienced Involvement — izobrazba za pratnju oporavka."
      correct: true
      explanation: "Razvijena u Bremenu od 2005., danas ukorijenjena u mnogim DACH-ustanovama."
    - text: "Skupina lijekova."
      correct: false

- q: "Tko u Trialogu razgovara?"
  type: multiple-choice
  options:
    - text: "Samo stručnjaci međusobno."
      correct: false
    - text: "Osobe s iskustvom, bližnji i stručnjaci — ravnopravno."
      correct: true
      explanation: "1989. u Hamburgu utemeljen od Thomasa Bocka."
    - text: "Samo osobe s iskustvom."
      correct: false
:::

:::standard-flashcards{id=f-12-std}
- front: "Vršnjačka podrška"
  back: "Pratnja od ljudi s vlastitim kriznim iskustvom. Djeluje proživljenim iskustvom, nadom i ravnopravnošću."
- front: "Trialog"
  back: "Ravnopravan razgovor između osoba s iskustvom, bližnjih i stručnjaka. Od 1989. (Bock, Hamburg)."
- front: "EX-IN"
  back: "Experienced Involvement — izobrazba za ljude s psihijatrijskim iskustvom, od 2005."
:::



# 13. Recovery Colleges — učenje umjesto terapije
{#kap-13 reading_time=5}

Recovery Colleges su britanski model koji je nastao od 2009. [^perkins2012]. Nisu klinike, nego obrazovne ustanove. Besplatne su, otvorene svima — osobama s vlastitim iskustvom, članovima obitelji, stručnjacima i zainteresiranima — i koriste pedagoški oblik obrazovanja odraslih umjesto terapijske sesije.

Dva središnja principa obilježavaju Recovery Colleges [^perkins2012] [^meddings2015]:

- **Obrazovanje umjesto terapije.** Sudionice i sudionici su studenti, ne pacijenti. Fokus na resurse i učenje, ne na deficit i dijagnozu.
- **Koprodukcija (Co-Production).** Svaki tečaj zajedno razvijaju i provode stručnjak i osoba s proživljenim iskustvom — na ravnopravnoj razini.

## Što pokazuju istraživanja

Hayes i kolege diljem svijeta broje 221 Recovery College u 28 zemalja na pet kontinenata [^hayes2023].

Studija RECOLLECT je dosad najopsežnije znanstveno bavljenje Recovery Collegeima [^henderson2024recollect]. Retrospektivna kohortna studija iz Engleske s 1.193 polaznika Recovery Collegea u odnosu na 3.508 kontrolnih osoba kroz 6, 12 i 60 mjeseci pokazala je: značajno smanjenje psihijatrijskih hospitalizacija, stacionarnih dana boravka i hitnih konsultacija — uz istovremeno poboljšano blagostanje [^ronaldson2024].

Pregled literature o deset godina istraživanja Recovery Collegea [^theriault2020] potvrđuje konzistentne učinke na nadu, Empowerment, samodjelotvornost, socijalnu uključenost, postizanje ciljeva i znanje o mentalnom zdravlju. Crowther i kolege pokazuju da i stručnjaci profitiraju od suradnje u Recovery Collegeima [^crowther2019].

:::info{type=evidence title="Dokazi na njemačkom govornom području"}
Empirijski validirani DACH podaci o djelotvornosti Recovery-orijentirane skrbi nastali su u posljednjim godinama.

Njemačka randomizirana kontrolirana studija o vršnjačkoj pratnji kod osoba s teškim psihičkim bolestima [^mahlke2017] pokazala je značajne učinke na Empowerment i samodjelotvornost.

DGPPN-S3 smjernica „Psihosocijalne terapije kod teških psihičkih bolesti" (2. izdanje 2019.) preuzela je Recovery-orijentaciju, vršnjačku podršku i Shared Decision-Making kao preporuke [^dgppn2019].

Istraživanje Recovery Collegea na njemačkom govornom području raste — baza podataka o specifičnim DACH lokacijama je u izgradnji.
:::

Na njemačkom govornom području Recovery Colleges postoje među ostalim u Bernu [^rcbern], u istočnoj Švicarskoj, u Ženevi, u St. Gallenu i u Zürichu — kao i sve više u Njemačkoj i Austriji (među ostalim Empowerment College Bremen).

:::easy{reading_time=2}
Recovery Colleges su posebna vrsta škole. Ali ne škole za djecu.

Ovdje odrasli uče o mentalnom zdravlju. Svi smiju doći: osobe s vlastitim iskustvom, članovi obitelji, stručnjaci, zainteresirani.

Tečajevi su besplatni. Ne trebaš dijagnozu.

Svaki tečaj se planira zajedno: stručnjak i osoba s vlastitim iskustvom. Oboje su jednako važni.

Danas postoji preko 220 Recovery Collegea u 28 zemalja. I u Švicarskoj, Njemačkoj i Austriji.

Istraživanje pokazuje: tko posjeti Recovery College, nakon toga mu je bolje.
:::

:::quiz{id=q-13}
- q: "Tko smije sudjelovati u Recovery Collegeu?"
  type: multiple-choice
  options:
    - text: "Samo osobe s dijagnozom."
      correct: false
    - text: "Osobe s vlastitim iskustvom, članovi obitelji, stručnjaci i zainteresirani — svi."
      correct: true
      explanation: "Otvoreno za sve. Nije potrebna dijagnoza. Besplatno."

- q: "Što znači 'Co-Production'?"
  type: multiple-choice
  options:
    - text: "Filmski trik."
      correct: false
    - text: "Stručnjak i osoba s proživljenim iskustvom zajedno planiraju tečajeve — na ravnopravnoj razini."
      correct: true

- q: "Što pokazuje kohortna studija UK Ronaldson i sur. 2024?"
  type: multiple-choice
  options:
    - text: "Nema učinaka."
      correct: false
    - text: "Značajno smanjenje psihijatrijskih hospitalizacija i dana boravka."
      correct: true
:::

:::flashcards{id=f-13}
- front: "Recovery College"
  back: "Obrazovna ustanova — ne mjesto liječenja. Učenje umjesto terapije. Besplatno. Otvoreno za sve."
- front: "Co-Production"
  back: "Tečajeve zajedno razvijaju i provode stručnjak i osoba s proživljenim iskustvom."
- front: "Djelotvornost"
  back: "Hayes 2023: 221 Recovery Colleges u 28 zemalja. Ronaldson 2024: manje hospitalizacija, više blagostanja."
:::

:::standard{reading_time=2}
Recovery College nije klinika. To je škola za odrasle — otvorena za sve koji žele nešto naučiti o psihičkom zdravlju: osobe s iskustvom, bližnje, stručnjake, zainteresirane. Tečajevi su besplatni, ne treba ti dijagnoza, ne treba uputnica i ne treba prijava kod liječnika opće prakse.

Ovaj model nose dva načela:

- **Obrazovanje umjesto terapije.** Ti si studentica ili student, ne pacijentica ili pacijent. U središtu su učenje, resursi i pitanja — ne dijagnoza i nedostatak.
- **Koprodukcija (Co-Production).** Svaki tečaj zajedno razvijaju i provode stručnjak i osoba s vlastitim iskustvom. Oba su izvora znanja ravnopravna.

Prvi Recovery College nastao je 2009. u Londonu. Danas ih je u svijetu više od 220 u 28 zemalja — i u Švicarskoj (između ostalog Bern, Istočna Švicarska, Ženeva, St.Gallen, Zürich), u Njemačkoj i u Austriji.

Najveća studija o tome, RECOLLECT iz Engleske, uspoređivala je gotovo 1.200 Recovery-College-studenata s preko 3.500 kontrolnih osoba kroz pet godina. Rezultat: manje psihijatrijskih hospitalizacija, manje hitnih slučajeva, više dobrobiti. Deset godina istraživanja potvrđuje: nada, Empowerment, socijalna uključenost i samodjelotvornost mjerljivo rastu.

Možda je Recovery College u tvojoj blizini prvo mjesto na kojem se ne moraš objašnjavati — već smiješ učiti.
:::

:::standard-quiz{id=q-13-std}
- q: "Tko smije pohađati Recovery College?"
  type: multiple-choice
  options:
    - text: "Samo ljudi s psihijatrijskom dijagnozom."
      correct: false
    - text: "Svi — osobe s iskustvom, bližnji, stručnjaci, zainteresirani. Bez dijagnoze."
      correct: true
      explanation: "Recovery Colleges su otvoreni, besplatni i ne trebaju uputnicu."
    - text: "Samo stručnjaci."
      correct: false

- q: "Što znači Co-Production?"
  type: multiple-choice
  options:
    - text: "Zajedno snimati više filmova."
      correct: false
    - text: "Tečajevi se zajedno planiraju od stručnjaka i stručnjakinje za vlastito iskustvo — ravnopravno."
      correct: true
      explanation: "To je temeljno načelo Recovery Collegesa."
    - text: "Edukativni video za sudjelovanje."
      correct: false
:::

:::standard-flashcards{id=f-13-std}
- front: "Recovery College"
  back: "Mjesto obrazovanja umjesto liječenja. Besplatno, otvoreno za sve. Učenje umjesto terapije."
- front: "Co-Production"
  back: "Svaki tečaj zajedno oblikuju stručnjak i osoba s vlastitim iskustvom."
- front: "Učinak (RECOLLECT)"
  back: "Manje hospitalizacija, manje hitnih slučajeva, više dobrobiti — dokazano kroz pet godina."
:::



# 14. Trauma-informirani pristup
{#kap-14 reading_time=3}

:::info{type=warmth title="Pre nego što nastaviš da čitaš"}
Ovo poglavlje imenuje nasilje, zlostavljanje, zanemarivanje i diskriminaciju. Ako si proživeo/proživela teške stvari, čitanje može da pokrene mnogo toga. To je normalno. Čitaj svojim tempom. Pravi pauze. Preskoči na sledeće poglavlje ako je danas previše. Ako ti je potrebna podrška sada: Poglavlje 20 (Kriza) je samo nekoliko dodira daleko — ili pozovi u Švajcarskoj **143**, u Nemačkoj **0800 111 0 111**, u Austriji **142**, u Srbiji **Centar Srce 0800 300 303**.
:::

Mnoge osobe koje su u skrbi psihijatrije imale su u svojoj prošlosti traumatska iskustva — nasilje, zlostavljanje, zanemarivanje, diskriminaciju. I sami boravci u psihijatriji mogu djelovati retraumatizirajuće [^felitti1998].

Trauma-informirani stav stoga je integralni dio Recovery-orijentirane prakse. Američka agencija SAMHSA [^samhsa2014trauma] za to je definirala šest vodećih principa:

- **Sigurnost** — tjelesna i emocionalna.
- **Povjerenje i transparentnost** — jasna informacija, pouzdan okvir.
- **Vršnjačka podrška** — proživljeno iskustvo kao resurs.
- **Suradnja i uzajamnost** — smanjivanje hijerarhija.
- **Empowerment, glas i izbor** — odluka i samoodređenje.
- **Kulturna, povijesna i rodna osjetljivost.**

Ovi principi vrijede i u digitalnoj radnoj knjizi. Ti odlučuješ što ćeš kad čitati, što spremiti, što obrisati.

:::easy{reading_time=1}
Mnoge osobe u psihijatriji proživjele su teško. Nasilje. Zlostavljanje. Zanemarivanje.

Ponekad je i sam boravak u klinici opterećujuć.

Zato je trauma-osjetljiv stav važan. To znači:

- Prvo sigurnost.
- Stvoriti povjerenje.
- Iskreno komunicirati.
- Nitko ne odlučuje preko tvoje glave.

Ovaj stav vrijedi i u ovoj aplikaciji. Ti odlučuješ što čitaš. Što spremaš. Što brišeš.
:::

:::quiz{id=q-14}
- q: "Koliko je principa SAMHSA definirala za trauma-informiranu skrb?"
  type: multiple-choice
  options:
    - text: "Tri"
      correct: false
    - text: "Šest"
      correct: true
    - text: "Deset"
      correct: false

- q: "Što NIJE princip trauma-informirane prakse?"
  type: multiple-choice
  options:
    - text: "Sigurnost"
      correct: false
    - text: "Strogost"
      correct: true
      explanation: "Strogost ne pripada SAMHSA principima."
    - text: "Vršnjačka podrška"
      correct: false
:::

:::flashcards{id=f-14}
- front: "Šest principa (SAMHSA 2014)"
  back: "Sigurnost · povjerenje i transparentnost · vršnjačka podrška · suradnja · Empowerment · kulturna/rodna osjetljivost."
- front: "Retraumatizacija"
  back: "Kad sustavi pomoći i sami dodatno traumatiziraju. Trauma-informirana praksa to želi aktivno spriječiti."
- front: "ACE studija (Felitti 1998)"
  back: "Dokazuje: traumatska iskustva u djetinjstvu rasprostranjena su i cijeli život utječu na zdravlje."
:::

:::standard{reading_time=2}
Mnogi ljudi koji se liječe u psihijatriji nose teška iskustva — nasilje, zlostavljanje, zanemarivanje, diskriminaciju, gubitke. Ponekad i sami psihijatrijski boravci djeluju opterećujuće ili retraumatizirajuće. Trauma-informirani stav to ozbiljno uzima, a da te ne pritisne pokazivati rane koje ne želiš pokazati.

Američka zdravstvena agencija SAMHSA opisala je šest vodećih načela koja nose trauma-osjetljivu pratnju:

- **Sigurnost** — tjelesna i emocionalna. Nitko ne treba biti u prostoru u kojem se ne osjeća sigurnim.
- **Povjerenje i transparentnost** — jasna informacija, pouzdan okvir, bez iznenađenja preko tvoje glave.
- **Vršnjačka podrška** — proživljeno iskustvo kao pouzdan most.
- **Suradnja na ravnoj nozi** — smanjivati hijerarhije, ne ih povećavati.
- **Empowerment, glas i izbor** — ti suodlučuješ. Uvijek.
- **Kulturna, povijesna i rodna osjetljivost** — tvoja priča je dio onoga tko si.

Ova načela vrijede i u digitalnoj radnoj knjizi. Ti odlučuješ što i kada čitaš. Što spremaš. Što brišeš. Ako je neko poglavlje previše, zatvori ga. Vrati se kad budeš spremna ili spreman. Ili ga sasvim preskoči.

Trauma-informirano ne znači: prvo obraditi traumu, pa živjeti. Znači: sve što se ovdje događa pazi na ono što si već nosila ili nosio.
:::

:::standard-quiz{id=q-14-std}
- q: "Koliko vodećih načela SAMHSA je definirala za trauma-informiranu praksu?"
  type: multiple-choice
  options:
    - text: "Tri."
      correct: false
    - text: "Šest."
      correct: true
      explanation: "Sigurnost, povjerenje, vršnjačka podrška, suradnja, Empowerment, kulturna osjetljivost."
    - text: "Deset."
      correct: false

- q: "Tko odlučuje što će se u ovoj aplikaciji pohraniti?"
  type: multiple-choice
  options:
    - text: "Aplikacija."
      correct: false
    - text: "Ti. Uvijek."
      correct: true
      explanation: "Samoodređenje nad svojim podacima izraz je trauma-osjetljivog stava."
:::

:::standard-flashcards{id=f-14-std}
- front: "Šest načela (SAMHSA)"
  back: "Sigurnost · povjerenje i transparentnost · vršnjačka podrška · suradnja · Empowerment · kulturna i rodna osjetljivost."
- front: "Sigurnost prvo"
  back: "Nitko ne odlučuje preko tvoje glave. Ti određuješ tempo, dubinu i stop."
- front: "Retraumatizacija"
  back: "Kad pomažući sustavi dodatno povređuju. Trauma-informirana praksa to želi aktivno spriječiti."
:::



# 15. Recovery i ljudska prava
{#kap-15 reading_time=4}

Recovery nije samo stručno, nego i pitanje ljudskih prava. UN-Konvencija o pravima osoba s invaliditetom jamči osobama s invaliditetom — uključujući psihički invaliditet — pravo na samoodređenje, uključenost i podržano donošenje odluka [^uncrpd2006]. Njemačka je Konvenciju ratificirala 2009., Austrija 2008., Švicarska 2014.

WHO je 2019. pokrenula inicijativu QualityRights [^who2019] i 2021. objavila smjernicu „Guidance on Community Mental Health Services" [^who2021]. Recovery je u njoj imenovan kao središnji princip moderne skrbi.

Konkretno to znači: smanjiti prisilu, dijagnozu nikada ne staviti iznad osobe, ponuditi podršku tamo gdje je ljudima treba — i osobe s vlastitim iskustvom uključiti u sve odluke o skrbi kao ravnopravne partnere i partnerice.

:::info{type=example title="Primjer: Otvoreni dijalog (Open Dialogue)"}
U finskoj Zapadnoj Laponiji Jaakko Seikkula je 1980-ih godina razvio koncept Otvorenog dijaloga.

Kod akutnih psihotičnih kriza unutar 24 sata uključuju se sve važne bliske osobe. Svi se razgovori odvijaju zajedno, sve odluke pregovaraju se transparentno.

Dugoročni ishodi su izuzetni: u Zapadnoj Laponiji se preko 80 % osoba s prvom epizodom psihoze unutar dvije godine vratilo na posao ili u obrazovanje. Studija od 19 godina potvrdila je dugoročnu stabilnost rezultata [^seikkula2011] [^bergstroem2018].
:::

:::easy{reading_time=1}
Recovery je i ljudsko pravo.

UN je 2006. donio sporazum. Kaže: osobe s invaliditetom imaju pravo samoodređenja. I osobe s psihičkim bolestima.

WHO kaže 2021.: psihijatrija treba poštivati ova prava. Ne treba liječnik odlučivati sam. Nego svi zajedno.

To vrijedi i u Švicarskoj, Njemačkoj i Austriji.
:::

:::quiz{id=q-15}
- q: "Što je UN-Konvencija o pravima osoba s invaliditetom?"
  type: multiple-choice
  options:
    - text: "Metoda liječenja."
      correct: false
    - text: "UN-Konvencija o pravima osoba s invaliditetom iz 2006."
      correct: true
      explanation: "Švicarska ju je ratificirala 2014., Njemačka 2009., Austrija 2008."

- q: "Što WHO kaže 2021.?"
  type: multiple-choice
  options:
    - text: "Recovery je neznanstven."
      correct: false
    - text: "Skrb treba biti usmjerena na osobu i utemeljena na pravima."
      correct: true
:::

:::flashcards{id=f-15}
- front: "UN-Konvencija 2006"
  back: "UN-Konvencija o pravima osoba s invaliditetom. Jamči samoodređenje — i kod psihičkog invaliditeta. CH ratificirala 2014., DE 2009., AT 2008."
- front: "WHO QualityRights"
  back: "Inicijativa WHO-a od 2019. 2021. smjernica 'Guidance on Community Mental Health Services': usmjerena na osobu, utemeljena na pravima, Recovery-orijentirana."
- front: "Open Dialogue (Seikkula)"
  back: "Zapadna Laponija od 1980-ih. Preko 80 % osoba s prvom epizodom psihoze vratilo se na posao/u obrazovanje unutar 2 godine. Potvrđeno u 19-godišnjem praćenju."
:::

:::standard{reading_time=2}
Recovery nije samo stručno pitanje — to je i pitanje ljudskih prava. Tko je psihički obolio, ne gubi pravo da bude saslušan, uključen i ozbiljno shvaćen.

**Konvencija UN-a o pravima osoba s invaliditetom** (UN-BRK) iz 2006. jamči svim osobama s invaliditetom — tjelesnim, intelektualnim, psihičkim — pravo na samoodređenje, uključenost i potporu pri donošenju odluka. Švicarska ju je ratificirala 2014., Njemačka 2009., Austrija 2008. To je važeće pravo.

**Svjetska zdravstvena organizacija (SZO)** dala je tome 2019. težinu inicijativom QualityRights, a 2021. objavila smjernicu „Guidance on Community Mental Health Services". Recovery tu stoji kao središnje načelo moderne skrbi — uz Person-Zentrierung i utemeljenost u pravima.

Što to konkretno znači?

- Smanjivati prisilu — gdje god je to moguće.
- Nikada ne staviti dijagnozu iznad osobe.
- Nuditi podršku tamo gdje ljudi žive.
- Uključiti osobe s iskustvom kao ravnopravne partnere u odluke o skrbi.

Primjer za to je **Otvoreni Dijalog** iz Finske. Kod akutnih psihotičkih kriza unutar 24 sata uključuju se sve važne osobe iz bliskog kruga. Preko 80 % osoba s prvom psihozom vratilo se unutar dvije godine na posao ili u obrazovanje — dugoročne studije potvrđuju stabilnost tih rezultata.

Ne moraš ove okvirne dokumente znati napamet. Ali dobro je znati: kad kažeš „Želim suodlučivati", stojiš na čvrstom pravnom temelju.
:::

:::standard-quiz{id=q-15-std}
- q: "Što UN-Konvencija o pravima osoba s invaliditetom jamči i ljudima s psihičkim bolestima?"
  type: multiple-choice
  options:
    - text: "Brzo izlječenje."
      correct: false
    - text: "Samoodređenje, uključenost i potporu pri donošenju odluka."
      correct: true
      explanation: "UN-BRK iz 2006. Ratificirana: CH 2014., DE 2009., AT 2008."
    - text: "Određeni oblik terapije."
      correct: false

- q: "Što smjernica SZO-a iz 2021. kaže o psihijatrijskoj skrbi?"
  type: multiple-choice
  options:
    - text: "Treba biti usmjerena na osobu i utemeljena u pravima."
      correct: true
      explanation: "Recovery se u njoj imenuje kao središnje načelo."
    - text: "Treba biti što više stacionarna i dugoročna."
      correct: false
    - text: "Treba se odvijati bez sudjelovanja osoba s iskustvom."
      correct: false
:::

:::standard-flashcards{id=f-15-std}
- front: "UN-BRK 2006."
  back: "UN-Konvencija o pravima osoba s invaliditetom. Jamči samoodređenje — i kod psihičkog invaliditeta. Ratificirana: CH 2014., DE 2009., AT 2008."
- front: "WHO QualityRights"
  back: "Inicijativa SZO od 2019. Smjernica 2021.: usmjerena na osobu, utemeljena u pravima, Recovery-orijentirana."
- front: "Open Dialogue"
  back: "Finski model. Preko 80 % osoba s prvom psihozom vratilo se u 2 godine u rad ili obrazovanje."
:::



# 16. Bolest ili Recovery: dva pogleda
{#kap-16 reading_time=3}

Recovery je više od nove metode — to je promjena perspektive [^knuf2026] [^slade2014] [^ameringschmolke2012].

:::table{name="Usporedba-paradigmi"}
| Pogled usmjeren na bolest | Recovery-orijentiran pogled |
|---------------------------|----------------------------|
| Dijagnoza u središtu | Čovjek u središtu |
| Cilj: nestanak simptoma | Cilj: smislen život |
| Stručnjak = profesionalac | Dvostruka stručnost: stručno znanje + iskustveno znanje |
| Plan liječenja | Recovery-plan + plan liječenja |
| Compliance | Shared Decision-Making |
| Pogled na deficit (patogeneza) | Pogled na resurse (salutogeneza) |
| Linearan put ozdravljenja | Individualan, nelinearan put |
| Stručnjak sam nosi nadu | Nada se dijeli i posuđuje |
| Pacijent/ica / klijent/ica | Čovjek / osoba s iskustvom / student/ica |
:::

Desni stupac ne istiskuje lijevi. Oba stupca imaju svoje mjesto — Recovery-orijentirana paradigma proširuje medicinsku, ne zamjenjuje je [^slade2014].

Amering i Schmolke ističu točku koja se često previdi: Recovery-orijentirana praksa nije dodatan modul povrh. Drugačiji je način proizvodnje znanja — kroz povezivanje profesionalnog stručnog znanja i proživljenog iskustva kao ravnopravnih izvora [^ameringschmolke2012].

:::easy{reading_time=2}
Postoje dva pogleda na psihičku bolest:

**Stari pogled:**
- Bolest je u središtu.
- Cilj: simptomi nestaju.
- Liječnik zna najbolje.
- Ti si pacijent/ica.

**Recovery-pogled:**
- Čovjek je u središtu.
- Cilj: dobar život.
- Ti i stručnjak odlučujete zajedno.
- Ti si osoba s iskustvom.

Stari pogled nije pogrešan. Često pomaže. Ali ne dostaje sam.

Recovery-pogled proširuje stari pogled. Ne zamjenjuje ga.
:::

:::quiz{id=q-16}
- q: "Zamjenjuje li Recovery-pogled medicinski pogled?"
  type: true-false
  correct: false
  explanation: "Ne — proširuje ga. Oba imaju svoje mjesto."

- q: "Što je u središtu Recovery-pogleda?"
  type: multiple-choice
  options:
    - text: "Dijagnoza"
      correct: false
    - text: "Čovjek"
      correct: true
:::

:::flashcards{id=f-16}
- front: "Promjena paradigme"
  back: "Od pogleda na deficit (patogeneza) prema pogledu na resurse (salutogeneza) — bez odustajanja od medicinskog pogleda."
- front: "Compliance vs. Shared Decision-Making"
  back: "Compliance = ti slijediš. Shared Decision-Making = odlučujete zajedno."
- front: "Sinteza znanja"
  back: "Recovery-orijentirana praksa povezuje profesionalno stručno znanje i proživljeno iskustvo kao ravnopravne izvore (Amering & Schmolke 2012)."
:::

:::standard{reading_time=2}
Recovery je više od nove metode. To je promjena perspektive — drukčiji način gledanja na psihičku krizu i oporavak.

**Pogled usmjeren na bolest** stavlja dijagnozu u središte. Cilj je nestanak simptoma. Stručnjak je stručna osoba. Ti slijediš plan liječenja. Pogled je usmjeren na ono što nedostaje ili je poremećeno — na nedostatak.

**Pogled usmjeren na Recovery** stavlja čovjeka u središte. Cilj je smislen život — sa simptomima ili usprkos njima. Stručnjaka je dvoje: stručna osoba I ti sama ili sam. Odluke se donose zajedno (Shared Decision-Making). Pogled je usmjeren na resurse, nadu, povezanost.

Nekoliko parova pojmova pokazuje razliku:

- Dijagnoza u središtu → Čovjek u središtu
- Nestanak simptoma kao cilj → smislen život kao cilj
- Compliance → Shared Decision-Making
- Pogled na nedostatak (patogeneza) → pogled na resurse (salutogeneza)
- Linearan put k ozdravljenju → individualan, nelinearan put
- Pacijent → čovjek / osoba s iskustvom / studentica ili student

Važno: desni stupac ne potiskuje lijevi. Oba imaju svoje mjesto. Lijekovi mogu pomoći. Dijagnoze mogu pomoći u snalaženju. Klinika može biti sigurno mjesto. Ali to samo nije dovoljno — Recovery proširuje medicinsku sliku tvojim glasom, tvojim vrijednostima, tvojim smislom.

Amering i Schmolke to sažimaju: Recovery-orijentirana praksa nije dodatni modul nad ostalima. To je drukčiji način proizvodnje znanja — povezivanjem stručnog znanja i proživljenog iskustva kao ravnopravnih izvora.
:::

:::standard-quiz{id=q-16-std}
- q: "Zamjenjuje li Recovery-pogled medicinski pogled?"
  type: multiple-choice
  options:
    - text: "Da, potpuno ga zamjenjuje."
      correct: false
    - text: "Ne — proširuje ga. Oba imaju svoje mjesto."
      correct: true
      explanation: "Recovery je promjena perspektive, ne odricanje od medicinskog znanja."
    - text: "Ne, suprotstavlja mu se."
      correct: false

- q: "Što stoji u središtu Recovery-pogleda?"
  type: multiple-choice
  options:
    - text: "Dijagnoza."
      correct: false
    - text: "Čovjek — sa svojom pričom, svojim vrijednostima, svojim smislom."
      correct: true
      explanation: "Dijagnoza pomaže pri snalaženju, ali te ne definira."
    - text: "Klinika."
      correct: false
:::

:::standard-flashcards{id=f-16-std}
- front: "Promjena paradigme"
  back: "Od pogleda na nedostatak (patogeneza) na pogled na resurse (salutogeneza) — bez odustajanja od medicinskog pogleda."
- front: "Compliance vs. Shared Decision-Making"
  back: "Compliance = ti slijediš. Shared Decision-Making = odlučujete zajedno."
- front: "Dvije stručnosti"
  back: "Stručno znanje I proživljeno iskustvo ravnopravni su izvori znanja."
:::



# 17. Tri rečenice za tebe
{#kap-17 reading_time=3}

Ti nisi tvoja dijagnoza. Ti si čovjek s pričom, sa sposobnostima, s vrijednostima, s odnosima. Dijagnoza može biti orijentacija — ali nikad nije cijela istina o tebi.

## Tri rečenice koje se u Recovery-pokretu često čuju

- Ti si stručnjakinja ili stručnjak za svoj život. Tvoje iskustvo je znanje.
- Ne moraš sve nositi sama ili sam. Potraži saveznike — vršnjake, stručnjake, osobe od povjerenja.
- Smiješ sama ili sam odrediti tempo i smjer. Korak unatrag nije neuspjeh.

## Što ti istraživanje može dati na put

Nada je prediktor oporavka [^schrank2012]. Vršnjačka podrška ima mjerljiv učinak na samodjelotvornost [^slade2024peer] [^mahlke2017]. Sudjelovanje u Recovery Collegeu smanjuje kasnije troškove skrbi i povećava blagostanje [^ronaldson2024]. Samostigma se može mijenjati [^yanos2015].

:::reflection{id=7 title="Tvoj prvi korak"}
- Koga bi ovaj tjedan mogla ili mogao zamoliti da te sasluša bez prosuđivanja?
- Koja bi mala, izvediva radnja bila sidro nade za sljedećih sedam dana?
- Koje područje iz modela CHIME — ili iz trijade Nada-Moć-Smisao — treba ovaj tjedan dobiti malo više pažnje?
:::

:::easy{reading_time=1}
Ti nisi tvoja dijagnoza. Ti si čovjek.

Tri važne rečenice:

- Svoj život poznaješ najbolje.
- Ne moraš sve nositi sama ili sam.
- Smiješ sama ili sam odrediti tempo.

Koraci unatrag pripadaju tome. Nisu neuspjeh.
:::

:::quiz{id=q-17}
- q: "Što znači 'in Recovery'?"
  type: multiple-choice
  options:
    - text: "Izliječena si, izliječen si."
      correct: false
    - text: "Na putu si — proces, ne stanje."
      correct: true

- q: "Je li korak unatrag neuspjeh?"
  type: true-false
  correct: false
  explanation: "Ne — koraci unatrag pripadaju nelinearnom tijeku Recoveryja."
:::

:::flashcards{id=f-17}
- front: "Ti si stručnjakinja, stručnjak za svoj život"
  back: "Nitko ne poznaje tvoje iskustvo kao ti. Tvoj glas se broji — ravnopravan stručnom znanju."
- front: "Tempo i smjer"
  back: "Ti određuješ oboje. Recovery se ne mjeri i ne uspoređuje."
:::

:::standard{reading_time=2}
Ti nisi svoja dijagnoza. Ti si osoba s pričom, sa sposobnostima, s vrijednostima, s odnosima. Dijagnoza može biti orijentacija — nikada nije cijela istina o tebi.

Tri rečenice koje se u Recovery-pokretu uvijek iznova pojavljuju — i koje ti želimo dati:

- **Ti si stručnjakinja ili stručnjak svog života.** Tvoje iskustvo je znanje. Nitko ne poznaje tvoj dah, tvoje noći, tvoje nade kao ti. Taj glas se broji — ravnopravno svakom stručnom znanju.
- **Ne moraš sve nositi sama ili sam.** Pronađi saveznike. Peer-ove, stručnjake, osobe od povjerenja, bližnje, skupinu samopomoći, Recovery College. Nadu smiješ posuditi, dok je opet sama ili sam ne osjetiš.
- **Smiješ određivati tempo i smjer.** Recovery nije mjerljiv niti usporediv. Korak unatrag nije poraz — pripada nelinearnom putu. Ponekad je i pauza napredak.

Što ti istraživanje može dati: nada je prediktor oporavka. Vršnjačka podrška mjerljivo jača samodjelotvornost. Recovery Colleges smanjuju hospitalizacije i povećavaju dobrobit. Samostigma se može mijenjati.

Ove tri rečenice nisu program za odraditi. One su više kao tri kamena koja staviš u džep. Vadiš ih kad ti zatrebaju.

Možda danas. Možda tek za pola godine.
:::

:::standard-quiz{id=q-17-std}
- q: "Što znači „u Recoveryju"?"
  type: multiple-choice
  options:
    - text: "Potpuno si izliječena ili izliječen."
      correct: false
    - text: "Na putu si — proces, ne stanje."
      correct: true
      explanation: "Recovery je trajan put, ne ciljna točka."
    - text: "Nemaš simptome."
      correct: false

- q: "Je li korak unatrag poraz?"
  type: multiple-choice
  options:
    - text: "Da, tada je put propao."
      correct: false
    - text: "Ne — pripada nelinearnom tijeku Recoveryja."
      correct: true
      explanation: "Recovery rijetko teče linearno. Pauze i koraci unatrag dio su puta."
    - text: "Možda — ovisno o tome koliko je velik."
      correct: false
:::

:::standard-flashcards{id=f-17-std}
- front: "Tri rečenice"
  back: "1) Ti si stručnjak svog života. 2) Ne moraš sve nositi sam. 3) Ti određuješ tempo i smjer."
- front: "Korak unatrag"
  back: "Nije poraz. Pripada nelinearnom putu."
- front: "Posuditi nadu"
  back: "Kad sama ili sam ne osjećaš nadu, smiješ je posuditi od drugih — dok je opet ne imaš."
:::



# 18. Jezik i stav — zašto su riječi važne
{#kap-18 reading_time=3}

Recovery-orijentiran jezik nije kozmetika. Mijenja tko se u prostoru priznaje kao subjekt — a tko postaje objekt liječenja [^ameringschmolke2012] [^knuf2026].

## Što izbjegavamo — i što umjesto toga kažemo

U Recovery-diskursu na njemačkom govornom području ustalio se niz konkretnih jezičnih pravila [^ameringschmolke2012] [^knuf2026] [^slade2013]:

- „Šizofreničar/ka" → bolje: „osoba s dijagnozom šizofrenije" (Person-first jezik).
- „Pacijent/ica" / „klijent/ica" u obrazovnom kontekstu → bolje: „studenti", „sudionici", „osoba s iskustvom krize".
- „Kronično", „neizlječivo" → izbjegavati. Oba su pojma empirijski upitna i dokazano štete oporavku.
- „Compliance" → bolje: „terapijska adherencija", još bolje: „zajednička odluka".
- „Uvid u bolest" → bolje: „vlastito razumijevanje bolesti".
- „Recovered" → na hrvatskom: „u procesu Recoveryja" (procesni pojam).
- „Deficit", „nositelj simptoma" → bolje: „resursi", „životno iskustvo", „duševna potresenost".

Jezik mijenja i tebe samu, samog. Tko počne govoriti „u procesu Recoveryja" brže misli u procesima umjesto u fiksiranim stanjima — i time često čini prvi neprimjetan korak.

:::easy{reading_time=1}
Riječi mijenjaju stvarnost. Nekoliko primjera:

- Ne: „kronično bolesno" → bolje: „živi s dijagnozom"
- Ne: „Compliance" → bolje: „zajednička odluka"
- Ne: „šizofreničar" → bolje: „osoba sa šizofrenijom"
- Ne: „izliječen" → bolje: „u procesu Recoveryja"

Jezik nije sve. Ali često mijenja početak.
:::

:::quiz{id=q-18}
- q: "Koji izraz je Person-first?"
  type: multiple-choice
  options:
    - text: "Borderlinerica"
      correct: false
    - text: "Osoba s dijagnozom Borderline"
      correct: true

- q: "Koji bi pojam trebalo izbjegavati?"
  type: multiple-choice
  options:
    - text: "Osoba s iskustvom krize"
      correct: false
    - text: "Kronično neizlječivo"
      correct: true
      explanation: "Empirijski upitno i dokazano sprječava oporavak."
:::

:::flashcards{id=f-18}
- front: "Person-first jezik"
  back: "Dijagnoza nakon osobe, ne prije nje. 'Osoba sa šizofrenijom' umjesto 'šizofreničar'."
- front: "u procesu Recoveryja"
  back: "Procesni pojam. Umjesto 'izliječen' ili 'bolestan' — kao trajan put."
- front: "Izbjegavati Compliance"
  back: "Umjesto 'Compliance' (slijediš naloge) radije 'zajednička odluka' ili 'terapijska adherencija'."
:::

:::standard{reading_time=2}
Riječi nisu bezopasne. Mijenjaju tko se u prostoru priznaje kao čovjek — a tko postaje predmet liječenja. Recovery-orijentiran jezik zato nije kozmetika. To je stav.

U njemačkom Recovery-diskursu razvila su se konkretna jezična pravila. Nekoliko primjera:

- „Šizofreničar" → bolje: „osoba s dijagnozom šizofrenije" (**Person-first jezik**).
- „Pacijent" / „klijent" u obrazovnom kontekstu → bolje: „studentica ili student", „sudionica ili sudionik", „osoba s kriznim iskustvom".
- „Kroničan", „neizlječiv" → izbjegavati. Oba su pojma empirijski upitna i dokazano štete oporavku.
- „Compliance" → bolje: „terapijska adherencija" — još bolje: „zajednička odluka".
- „Uvid u bolest" → bolje: „vlastito razumijevanje bolesti".
- „Izliječen" / „recovered" → na srpskom/hrvatskom: „u Recoveryju" — kao proces, ne kao konačno stanje.
- „Nedostatak", „nositelj simptoma" → bolje: „resurs", „životno iskustvo", „duševna potresenost".

Ove izmjene nisu samo pitanje etikete. Tko počne govoriti „u Recoveryju", brže razmišlja u procesima umjesto u utvrđenim stanjima. Tko kaže „čovjek s dijagnozom", prvo vidi čovjeka, a tek potom dijagnozu. To često mijenja upravo onaj nezamjetan korak kojim nešto novo počinje.

Jezik mijenja i tebe sama ili sama. Kako govoriš o sebi, oblikuje kako misliš o sebi. Ne moraš sve ove pojmove naučiti istodobno. Ali možda u idućim danima slušaš drugim uhom — ono što govore liječnice ili liječnici, bližnji, terapeutkinje ili terapeuti, ti sama ili sam.

A ako te nešto boli: smiješ to reći.
:::

:::standard-quiz{id=q-18-std}
- q: "Koja je formulacija Person-first?"
  type: multiple-choice
  options:
    - text: "Borderlinerka."
      correct: false
    - text: "Osoba s Borderline-dijagnozom."
      correct: true
      explanation: "Prvo čovjek, potom dijagnoza. To je Person-first jezik."
    - text: "Psihički bolesna."
      correct: false

- q: "Koji pojam treba izbjegavati?"
  type: multiple-choice
  options:
    - text: "Osoba s kriznim iskustvom."
      correct: false
    - text: "Kronično neizlječivo."
      correct: true
      explanation: "Empirijski upitno i dokazano koči oporavak."
    - text: "U Recoveryju."
      correct: false
:::

:::standard-flashcards{id=f-18-std}
- front: "Person-first jezik"
  back: "Dijagnoza dolazi nakon osobe, ne prije nje. „Osoba sa šizofrenijom" umjesto „šizofreničar"."
- front: "U Recoveryju"
  back: "Procesualni pojam. Umjesto „izliječen" ili „kroničan" — kao trajan put."
- front: "Izbjegavati „compliance""
  back: "Umjesto „compliance" (ti slijediš) radije „zajednička odluka" ili „terapijska adherencija"."
:::



# 19. Kako koristiti ovaj priručnik
{#kap-19 reading_time=2}

Ova digitalna radna knjiga nije udžbenik. To je pratitelj:

- Uzmi si vrijeme. Jedna stranica dnevno je dovoljno.
- Budi iskrena ili iskren prema sebi. Ti odlučuješ što se sprema ili dijeli.
- Preskaći. Slijedi ono što te dotiče.
- Ponavljaj. Isto pitanje za tri mjeseca čita se drugačije.
- Podijeli ako želiš — s osobom od povjerenja, s vršnjačkom pratnjom, u grupi.

## Zaštita podataka i samoodređenje

Sve što unosiš u ovu aplikaciju pripada tebi. Ti odlučuješ hoće li se nešto sinkronizirati, spremiti ili obrisati. Unosi su šifrirani. Samobrisanje podataka moguće je u svakom trenutku. Ova arhitektura samoodređenja nije tehnički detalj, nego izraz Recovery-orijentiranog stava ove radne knjige [^who2021] [^samhsa2014trauma] [^uncrpd2006].

:::easy{reading_time=1}
Ovako koristiš ovu aplikaciju:

- Uzmi si vrijeme. Jedna stranica dnevno je dovoljno.
- Budi iskrena ili iskren prema sebi.
- Skači od poglavlja do poglavlja.
- Vrati se. Isto pitanje se kasnije čita drugačije.
- Podijeli ako želiš.

Tvoji podaci pripadaju tebi. Aplikacija sprema samo ono što ti želiš. Smiješ sve obrisati. U svakom trenutku.
:::

:::quiz{id=q-19}
- q: "Moraju li se poglavlja čitati redom?"
  type: true-false
  correct: false
  explanation: "Ne — preskaći kako ti odgovara."

- q: "Tko odlučuje što se sprema?"
  type: multiple-choice
  options:
    - text: "Aplikacija"
      correct: false
    - text: "Ti"
      correct: true
:::

:::flashcards{id=f-19}
- front: "Zaštita podataka u ovoj aplikaciji"
  back: "Tvoji podaci pripadaju tebi. Šifrirani. Ti odlučuješ što se sinkronizira, sprema ili briše. Moguće obrisati u svakom trenutku."
- front: "Način rada"
  back: "Jedna stranica dnevno. Preskakanje dozvoljeno. Ponavljanje poželjno. Dijeljenje opcionalno."
:::

:::standard{reading_time=2}
Ova radna knjiga nije udžbenik. To je pratilac — i ti određuješ kako te prati.

Nekoliko savjeta koji su se pokazali kao korisni:

- **Daj si vremena.** Jedna stranica dnevno je dovoljno. Ponekad je dovoljan jedan odlomak. Ne postoji tempo koji moraš postići.
- **Budi iskrena ili iskren sa sobom.** Ne moraš nikome ništa dokazivati — ni aplikaciji. Tvoje zapise su za tebe.
- **Skači.** Slijedi ono što ti govori. Ne moraš čitati redom.
- **Ponavljaj.** Isto pitanje za promišljanje za tri mjeseca čita se drukčije. Vraćaj se.
- **Dijeli, ako želiš.** S osobom od povjerenja, pratnjom oporavka, skupinom — ili ni s kim. Oboje je ispravno.

**Zaštita podataka i samoodređenje.** Sve što u ovu aplikaciju upišeš pripada tebi. Ti odlučuješ hoće li se nešto sinkronizirati, pohraniti ili obrisati. Zapisi su šifrirani. Potpuno samouništenje tvojih podataka moguće je u svakom trenutku.

To nije samo tehnički detalj. To je izraz stava ove radne knjige: ti nisi objekt liječenja, već subjekt svog puta. Samoodređenje nad svojim podacima konkretan je dio Recoveryja — i istodobno ljudsko pravo (UN-BRK, SZO 2021, SAMHSA).

Ako poglavlje postane previše, zatvori ga. Ako te nešto pogodi, ostani tamo. Nema pogrešnog redoslijeda. Postoji samo tvoj put — i ova radna knjiga ide s tobom onoliko koliko joj dopustiš.
:::

:::standard-quiz{id=q-19-std}
- q: "Moraš li poglavlja čitati redom?"
  type: multiple-choice
  options:
    - text: "Da, inače ne ide."
      correct: false
    - text: "Ne — skači, kako ti odgovara."
      correct: true
      explanation: "Slijedi ono što ti govori. Ponavljanje je dobrodošlo."
    - text: "Samo pod vodstvom stručne osobe."
      correct: false

- q: "Tko odlučuje što će se u aplikaciji pohraniti ili izbrisati?"
  type: multiple-choice
  options:
    - text: "Sama aplikacija."
      correct: false
    - text: "Ti — u svakom trenutku, potpuno brisivo."
      correct: true
      explanation: "Samoodređenje nad podacima izraz je Recovery-orijentiranog stava."
    - text: "Tvoja stručna osoba."
      correct: false
:::

:::standard-flashcards{id=f-19-std}
- front: "Način rada"
  back: "Jedna stranica dnevno. Preskakati dopušteno. Ponavljati poželjno. Dijeliti opcionalno."
- front: "Zaštita podataka"
  back: "Tvoji zapisi su šifrirani i pripadaju tebi. Potpuno brisanje moguće u svakom trenutku."
- front: "Stav radne knjige"
  back: "Pratilac, ne udžbenik. Ti određuješ tempo, dubinu i doseg — i smiješ je i sklopiti."
:::



# 20. Kriza i sigurnost — krizne linije D-A-CH
{#kap-20 reading_time=2}

Ako si trenutno akutno opterećena ili opterećen — ako imaš misli da naškodiš sebi ili drugima, ili ako imaš osjećaj da te sadržaji ovdje dodatno destabiliziraju — onda ovo nije pravi trenutak za pitanja za refleksiju. Molim te, potraži sada podršku.

:::crisis
Brojevi za hitne slučajeve strukturirano su pohranjeni u frontmatteru pod `helplines:`. Aplikacija ih prikazuje kao karte za svaku zemlju s mogućnošću Tap-to-Call i Tap-to-Open-URL.
:::

Ova mjesta su anonimna, besplatna i bez prosuđivanja. Ne moraš imati „pravu krizu" da bi nazvala ili nazvao. Rani poziv uvijek je bolji od nikakvog.

:::info{type=warmth title="Prije nego što odeš: tri rečenice za teške sate"}
- Ne moraš ovaj put ići sama ili sam.
- Osjećaj je informacija, ne nalog — i najteži osjećaj će se pomaknuti.
- Tražiti pomoć nikad nije znak slabosti. To je znak da ozbiljno shvaćaš svoj život.
:::

:::easy{reading_time=1}
Ako ti je trenutno jako loše, ne čitaj ovdje dalje. Potraži pomoć.

- **Švicarska**: telefon 143 (Pružena ruka). Dan i noć.
- **Njemačka**: telefon 0800 111 0 111.
- **Austrija**: telefon 142.

Ova mjesta su besplatna i anonimna. Smiješ nazvati i ako ne znaš je li dovoljno teško.

Poziv nikad nije prerano.
:::

:::quiz{id=q-20}
- q: "Koji broj biraš u Švicarskoj za Pruženu ruku?"
  type: multiple-choice
  options:
    - text: "112"
      correct: false
    - text: "143"
      correct: true
    - text: "147"
      correct: false
      explanation: "147 je Pro Juventute — za djecu i mlade."

- q: "Moraš li imati 'pravu krizu' da bi nazvala ili nazvao?"
  type: true-false
  correct: false
  explanation: "Ne — rani poziv uvijek je bolji od nikakvog."
:::

:::flashcards{id=f-20}
- front: "Krizni broj Švicarska"
  back: "143 — Pružena ruka. Dan i noć. Anonimno. Besplatno."
- front: "Krizni broj Njemačka"
  back: "0800 111 0 111 ili 0800 111 0 222. Telefonska duhovna pomoć. 24/7. Besplatno."
- front: "Krizni broj Austrija"
  back: "142. Telefonska duhovna pomoć. 24/7."
- front: "Djeca i mladi CH/AT"
  back: "147 — Pro Juventute (CH) odnosno Rat auf Draht (AT). 24/7."
:::

:::standard{reading_time=2}
Ako si upravo akutno opterećena ili opterećen — ako imaš misli da ćeš sebi ili drugima nešto učiniti, ili ako te ovdašnji sadržaji dodatno destabiliziraju — onda ovo nije trenutak za pitanja za promišljanje. Molim te, potraži sada podršku.

**Najvažniji brojevi za zemlje njemačkog govornog područja:**

- **Švicarska:** **143** — Pružena ruka (Die Dargebotene Hand). 24/7. Anonimno. Besplatno.
- **Njemačka:** **0800 111 0 111** ili **0800 111 0 222** — Duševna pastira (Telefonseelsorge). 24/7. Besplatno.
- **Austrija:** **142** — Duševna pastira (Telefonseelsorge). 24/7.

U životnoj opasnosti: **112** (u EU) ili **144** (sanitet CH/AT).

Za djecu i mlade: **147** (Pro Juventute CH / Rat auf Draht AT). 24/7.

Ove su službe anonimne, besplatne i bez osuđivanja. Ne moraš imati „pravu krizu" da bi nazvala ili nazvao. Ne moraš objašnjavati je li dovoljno teško. Rani poziv uvijek je bolji nego nikakav.

**Tri rečenice za teške trenutke — prije nego što odeš s ovog mjesta:**

- Ne moraš ovaj put ići sama ili sam.
- Osjećaj je informacija, ne nalog. I najteži osjećaj će se pomaknuti.
- Tražiti pomoć nije znak slabosti. To je znak da ozbiljno shvaćaš svoj život.

Ako sada ne možeš nikoga nazvati: stupi u kontakt s osobom kojoj vjeruješ. Pošalji poruku. Idi do najbliže hitne službe. Mali pokret prema van dovoljan je.

Nisi sama ili sam. Čak i kad se sada tako osjeća.
:::

:::standard-quiz{id=q-20-std}
- q: "Koji broj biraš u Švicarskoj kod akutnog duševnog opterećenja?"
  type: multiple-choice
  options:
    - text: "112"
      correct: false
    - text: "143 (Die Dargebotene Hand)"
      correct: true
      explanation: "143 je 24/7 krizna linija za duševnu nevolju u Švicarskoj."
    - text: "144 — to je samo za životnu opasnost / sanitet."
      correct: false

- q: "Moraš li imati „pravu krizu" da bi nazvala ili nazvao?"
  type: multiple-choice
  options:
    - text: "Da, inače te ne uzimaju ozbiljno."
      correct: false
    - text: "Ne — rani poziv uvijek je bolji nego nikakav."
      correct: true
      explanation: "Smiješ nazvati i kad si nesigurna ili nesiguran."
    - text: "Samo ako si u životnoj opasnosti."
      correct: false
:::

:::standard-flashcards{id=f-20-std}
- front: "Hitni broj Švicarska"
  back: "143 — Die Dargebotene Hand. 24/7. Anonimno. Besplatno."
- front: "Hitni broj Njemačka"
  back: "0800 111 0 111 ili 0800 111 0 222 — Telefonseelsorge. 24/7. Besplatno."
- front: "Hitni broj Austrija"
  back: "142 — Telefonseelsorge. 24/7."
- front: "Kada nazvati?"
  back: "Uvijek. I u nesigurnosti. Poziv nikada nije prerano."
:::



# 21. Malo obećanje na kraju
{#kap-21 reading_time=2}

Recovery ne znači da će sve ponovno biti onako kako je nekoć bilo. Znači da nešto novo smije nastati — ponekad čak nešto što bez ovog iskustva nikada ne bi postojalo.

Imat ćeš dane kada će ovo zvučati kao prazno obećanje. I imat ćeš dane kada ćeš i sama ili sam primijetiti da se nešto pomaknulo — sitna nada, mala povezanost, misao koja prije nije bila moguća.

Što ti istraživanje može dati na put: nisi sama, nisi sam. Postoji put. I nadu smiješ posuditi, dok je ponovno ne osjetiš.

:::quote{author="Patricia Deegan, 1996" source="deegan1996" lang="en"}
By accepting what we cannot do or be, we begin to discover what we can do and who we can become.
:::

:::quote-translation{source="deegan1996" translator="vlastiti prevod"}
Prihvaćajući ono što ne možemo biti ili činiti, počinjemo otkrivati tko možemo biti i što možemo činiti.
:::

:::quote{author="Antonio Machado"}
Putovi nastaju dok njima koračaš.
:::

:::pull
Na tvome putu.
:::

:::easy{reading_time=1}
Recovery ne znači: sve će biti kao prije.

Recovery znači: nešto novo smije nastati.

Imat ćeš teške dane. Imat ćeš i lakše dane.

Tri rečenice za kraj:

- Nisi sama, nisi sam.
- Postoji put.
- Nadu smiješ posuditi dok je ponovno sama, sam ne osjetiš.

Na tvome putu.
:::

:::quiz{id=q-21}
- q: "Koja slika najbolje opisuje Recovery?"
  type: multiple-choice
  options:
    - text: "Ravna linija do cilja."
      correct: false
    - text: "Put koji nastaje dok njime koračaš (Machado)."
      correct: true

- q: "Kome pripada put?"
  type: multiple-choice
  options:
    - text: "Liječniku."
      correct: false
    - text: "Tebi — sa saveznicima."
      correct: true
:::

:::flashcards{id=f-21}
- front: "Na tvome putu"
  back: "Završna rečenica uvoda. Recovery je uvijek tvoj put — sa saveznicima."
- front: "Tri završne rečenice"
  back: "Nisi sama, nisi sam. Postoji put. Nadu smiješ posuditi dok je sama, sam ne dobiješ natrag."
- front: "Putovi nastaju dok njima koračaš"
  back: "Antonio Machado — moto mnogih Recovery-radnih knjiga i ove aplikacije."
:::

:::standard{reading_time=2}
Recovery ne znači da će sve opet biti kao što je bilo. Znači da nešto novo smije nastati — ponekad čak i nešto što bez ovog iskustva nikada ne bi postojalo. Druga dubina. Druga pažnja. Ponekad jezik koji prije nisi imala ili imao.

Imat ćeš dane u kojima ovo zvuči kao prazno obećanje. I imat ćeš dane u kojima i sama ili sam primjećuješ da se nešto pomaklo — sitna nada, mala povezanost, misao koja prije nije bila moguća.

Oboje pripada putu. Recovery nije ravan put. Ima pauze, petlje, povratke. Antonio Machado to je rekao ovako: „Putevi nastaju dok ih hodaš." To vrijedi i za tvoj put.

Što ti istraživanje može dati za put:

- **Nisi sama ili sam.** Hiljade ljudi prošlo je kroz slična vremena — i pronašli su dobar život.
- **Postoji put.** I kada je danas nevidljiv. I kada ne izgleda kao put drugih.
- **Nadu smiješ posuditi.** Kad je sada nemaš, drugi je drže za tebe — pratnja oporavka, terapeutkinja, prijateljica, knjiga, priča iz ove radne knjige.

Smiješ ovu radnu knjigu opet zatvoriti. Smiješ je mjesecima poslije opet otvoriti. Smiješ je podijeliti. Smiješ je zaboraviti. Smiješ i reći: danas ne.

Ono što ostaje jest ovo malo obećanje: Na tvom putu. Idemo s tobom dio puta.
:::

:::standard-quiz{id=q-21-std}
- q: "Što ako sada ne osjećaš nadu?"
  type: multiple-choice
  options:
    - text: "Onda je Recovery gotov."
      correct: false
    - text: "Onda smiješ posuditi nadu od drugih — dok je opet nemaš sama ili sam."
      correct: true
      explanation: "Nada se može dijeliti. Drugi je mogu držati za tebe."
    - text: "Onda si nešto pogriješila ili pogriješio."
      correct: false

- q: "Kako teče Recovery?"
  type: multiple-choice
  options:
    - text: "Kao ravna linija prema cilju."
      correct: false
    - text: "Kao individualan put — s pauzama, petljama, povratcima. „Putevi nastaju dok ih hodaš." (Machado)"
      correct: true
      explanation: "Recovery nije linearan. Koraci unatrag pripadaju mu."
    - text: "Potpuno isto kao kod drugih."
      correct: false
:::

:::standard-flashcards{id=f-21-std}
- front: "Recovery"
  back: "Nešto novo smije nastati. Ne: sve će opet biti kao prije."
- front: "Posuditi nadu"
  back: "Kad je sama ili sam nemaš: drugi je drže za tebe — dok je opet ne osjetiš."
- front: "Tri zaključne rečenice"
  back: "Nisi sama ili sam. Postoji put. Nadu smiješ posuditi."
- front: "Na tvom putu"
  back: "„Putevi nastaju dok ih hodaš." (Antonio Machado) — Idemo s tobom dio puta."
:::



# Metodološke napomene (interne)
{#methodik}

Sve tvrdnje provjerene su prema primarnim izvorima navedenima u frontmatteru. Tamo gdje su postojali pregledi i metaanalize, dana im je prednost u odnosu na pojedinačne studije.

Doslovni citati prikazani su u izvornom tekstu (Quote-widget s `source`-referencom). Prijevodi na hrvatski označeni su kao „vlastiti prevod" (Quote-Translation-widget). Pojmovi i modeli (CHIME, CHIME-D, Nada-Moć-Smisao, Personal Medicine, Trijalog, EX-IN, Salutogeneza, Open Dialogue) koriste se kao znanstveni termini i u registru izvora povezani su sa svojim autorima i autoricama.

Prije komercijalnog širenja aplikacije preporučuje se završna autorskopravna provjera.
