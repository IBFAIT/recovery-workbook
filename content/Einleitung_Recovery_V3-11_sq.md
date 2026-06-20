---
schema_version: "1.2"
content_id: "recovery-einleitung"
content_version: "3.14"
title: "Recovery"
subtitle: "Një hyrje gjithëpërfshirëse — Shpresë. Fuqi. Kuptim."
language: "sq"
translation_status: "draft-machine-translated"
translation_date: "2026-06-20"
translator: "Claude subagent (draft — needs professional review of crisis content)"
region: "D-A-CH"
target_audience: "betroffene"
target_audience_label: "Për njerëzit me përvojë të vetën të vështirësive psikike"
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
    status: "draft-machine-translated"
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
  full:  "I hollësishëm — me kërkime, citate dhe burime"
  easy:  "I thjeshtë — i shkurtër dhe me gjuhë të lehtë"
  standard: "Standard — gjatësi mesatare, e qartë dhe personale"
default_reading_mode: "standard"
# - full: rendert alles ausser :::easy und :::standard
# - easy: rendert NUR :::easy-Blöcke aller Kapitel
# - standard: rendert NUR :::standard-Blöcke (alle Kapitel haben einen)
#/low bleibt als Empfehlungs-Metadatum für die App

widget_types:
  reflection:    "Pyetje interaktive për reflektim — të ruajtura lokalisht"
  quote:         "Citat fjalë për fjalë me burim"
  quote_translation: "Përkthim i lirë me referencë të burimit"
  info:          "Kuti me sfond"
  metaphor:      "Shpjegim figurativ"
  crisis:        "Tregues për ndihmë në krizë"
  source_chip:   "Burim inline si etiketë e klikueshme"
  pull:          "Fjali kyçe e theksuar"
  table:         "Tabelë e strukturuar"
  easy:          "Variant i shkurtër dhe i thjeshtë i kapitullit — shfaqet vetëm në modalitetin 'easy'"
  quiz:          "Mini-kuiz për kapitull (Multiple-Choice/True-False) — kontrollon kuptimin"
  flashcards:    "Karta për mësim për kapitull (Para/Mbrapa) — përdoruesi mund t'i ruajë"
  standard:      "Variant standard me gjatësi mesatare — i pranishëm në çdo kapitull"
  standard-quiz: "Mini-kuiz për kapitull në modalitetin standard (2–3 pyetje)"
  standard-flashcards: "Karta për mësim për kapitull në modalitetin standard (2–4 karta)"

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
    note: "Përkufizimi klasik i Personal Recovery."

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
    primary_concept: "Spirit breaking nga sistemet ndihmëse"

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
    primary_concept: "Rindërtimi narrativ i identitetit"

  - id: boevink2017
    authors: "Boevink, W."
    year: 2017
    title: "Planting a Tree: On recovery, empowerment and experiential expertise in psychiatry"
    publisher: "Trimbos / Universität Maastricht (PhD-Dissertation)"
    type: book
    primary_concept: "Ekspertiza e përvojës si dije e pavarur"

  - id: seligman1975
    authors: "Seligman, M. E. P."
    year: 1975
    title: "Helplessness: On Depression, Development, and Death"
    publisher: "Freeman, San Francisco"
    type: book
    primary_concept: "Pafuqia e mësuar"

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
    primary_concept: "Modeli CHIME"

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
    primary_concept: "CHIME-D (zgjerim me Difficulties)"

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
    primary_concept: "Lexim DACH: Shpresë-Fuqi-Kuptim"

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

# === CRISIS HELPLINES (D-A-CH + Albanian-speaking regions) ===
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
  - country: "AL"
    name: "ALO 116 111 — Linja e Këshillimit për Fëmijë"
    number: "116 111"
    coverage: "24/7, falas"
    target: "fëmijë/të rinj"
  - country: "AL"
    name: "Tirana Crisis Centre"
    number: "0800 1010"
    coverage: "8–20h"
    target: "të gjithë"
  - country: "XK"
    name: "Linja e ndihmës për fëmijë"
    number: "080 011 112"
    coverage: "Kosovë"
    target: "fëmijë/të rinj"
  - country: "XK"
    name: "Linja kundër vetëvrasjes — Ministria e Shëndetësisë"
    number: "080 080 800"
    coverage: "Kosovë"
    target: "të gjithë"
  - country: "EU"
    name: "European Emergency Number / Numri i emergjencës"
    number: "112"
    coverage: "BE, rrezik për jetën"
    target: "të gjithë"
---
# Shënim i rëndësishëm para se të lexosh
{#disclaimer reading_time=2}

:::info{type=warmth title="Të lutem, lexo këtë fillimisht"}
Ky aplikacion është një **prototip**. Është ende në zhvillim e sipër dhe nuk është i përfunduar.

Shërben vetëm për të provuar një workbook të mundshëm të ardhshëm në fushën e recovery.
:::

## Çfarë është ky aplikacion dhe çfarë nuk është

Po përdor një **version provë** të një aplikacioni që ende është në zhvillim. Tekstet dhe funksionet janë një draft i parë. Ende nuk janë kontrolluar profesionalisht — as nga ana klinike, as nga ajo gjuhësore.

**Ky aplikacion NUK është një mjet terapeutik.** Nuk zëvendëson asnjë trajtim, terapi, këshillim mjekësor apo ndërhyrje në krizë.

## Të lutem, mbaji parasysh këto rregulla

- **Mos e përdor në mjedis klinik.** Në formën aktuale ky aplikacion nuk lejohet të përdoret si mjet ndihmës në klinika, ordinanca, qendra këshillimi ose mjedise të tjera kujdesi.
- **Mos e përdor si mbështetje të vetme në sferën private.** Nëse je vetë i/e prekur, përdor këtë aplikacion vetëm brenda një faze prove të organizuar — jo si shoqërim të vetëm në një situatë të vështirë jete.
- **Në rast dyshimi: kërko ndihmë të vërtetë.** Nëse nuk je mirë, drejtohu te një person i besuar, te ata që të trajtojnë ose te numrat e krizës që janë listuar në kapitullin 20 të këtij workbook-u.

## Pa garanci, pa përgjegjësi

Përmbajtjet e këtij aplikacioni vihen në dispozicion pa asnjë garanci. Nuk merret asnjë përgjegjësi për dëme — materiale ose jomateriale — që mund të lindin nga përdorimi ose mospërdorimi i këtij aplikacioni.

Aplikacioni është hartuar me dijen tonë më të mirë dhe mbi bazën e kërkimit aktual mbi recovery. Megjithatë mund të përmbajë gabime, pasaktësi ose formulime jo të përshtatshme. Nëse vëren diçka, përshtypjet e tua janë të mirëpritura — pikërisht këtë qëllim ka kjo fazë prove.

## Nëse ndodhesh tani në një krizë

Nëse leximi i këtij aplikacioni të bëhet i rëndë ose të destabilizon, lëre mënjanë.

Në kriza akute mund t'i kontaktosh 24 orë në ditë:
- **Zvicër:** 143 (Die Dargebotene Hand)
- **Gjermani:** 0800 111 0 111 (Telefonseelsorge)
- **Austri:** 142 (Telefonseelsorge)
- **Në rrezik për jetën:** 112 ose 144 (CH/AT) përkatësisht 112 (DE)

Të kërkosh ndihmë nuk është kurrë shumë herët.

:::standard{reading_time=2}
Po përdor një **prototip**. Ky aplikacion nuk është ende i përfunduar — synon të tregojë si mund të dukej një workbook i ardhshëm për Recovery. Tekstet dhe funksionet janë një draft i parë dhe ende nuk janë rishikuar profesionalisht.

**Ky aplikacion nuk është një mjet terapeutik.** Nuk zëvendëson trajtimin, terapinë, këshillën mjekësore apo ndërhyrjen në krizë.

**Të lutem ndiq këto rregulla:**

- Mos e përdor në mjedise klinike — pra jo si ndihmë në klinika, kabinete ose qendra këshillimi.
- Mos e përdor si mbështetje të vetme në një situatë të vështirë jete.
- Në rast dyshimi: kërko ndihmë të vërtetë — një person besimi, ekipin tënd të kujdesit ose një linjë krize.

**Në krizë akute** mund të telefonosh 24 orë: Zvicër **143**, Gjermani **0800 111 0 111**, Austri **142**, Kosovë **0800 11 112**. Në rrezik për jetën: **112**.

Përmbajtjet ofrohen pa garanci. Nëse vëren diçka, ne mirëpresim reagimin tënd — pikërisht për këtë shërben kjo fazë testimi.

Duke vazhduar leximin, konfirmon që i ke kuptuar këto njoftime.
:::

:::pull
Duke vazhduar leximin, ti konfirmon se i ke kuptuar këto udhëzime dhe se po e përdor aplikacionin në kuadër të një faze prove.
:::


# Hyrje: Recovery fillon me histori
{#vorspann reading_time=4}

:::pull
Recovery janë mijëra histori të njerëzve që, pavarësisht ose pikërisht për shkak të simptomave të tyre, kanë gjetur një rrugë drejt një jete të mirë.
:::

Janë histori që rrallë shfaqen në gazeta, sepse nuk sjellin skandal. Por janë histori që ndodhin çdo ditë — në librari, te pianoja, në kore, në rrethe bisede, në dhoma ndenjeje, në sallat e pritjes, në kuzhina.

Një grua që për një kohë të gjatë ishte e bindur se nuk do të punonte më kurrë, dhe që sot drejton një librari të vogël. Një baba që pas një psikoze luan përsëri piano — ndryshe nga më parë, me më pak përsosmëri dhe me më shumë dashuri. Një djalë i ri që, pas vitesh me diagnozën borderline, është bërë shoqërues i shërimit, sepse dëshiron t'u zgjasë dorën të tjerëve atë dorë që i ka munguar atij vetë. Një nënë që ka shoqëruar vajzën e saj nëpër një çrregullim të rëndë të të ngrënit dhe thotë: gjatë asaj kohe mësova më shumë për dashurinë sesa në gjithë jetën time më parë.

Histori të tilla nuk janë me dhjetëra. Janë me mijëra. Ndoshta me qindra mijëra. Aq sa janë njerëzit që kanë kaluar ndonjëherë nëpër një kohë të rëndë psikike.

## Recovery është e dokumentuar

Rrjeti Skocez i Recovery-t mblodhi në vitin 2007 gjashtëdhjetë e katër histori të tilla dhe i analizoi sistematikisht [^brown2007]. Iniciativa britanike ImROC mbledh rrëfime nga përvoja prej vitesh [^imroc]. Bashkësia ndërkombëtare e dëgjuesve të zërave mbledh prej viteve 1990 zëra që nuk gjenden në tekstet shkollore [^hvn].

Në Universitetin e Nottingham-it, Mike Slade ndërtoi me programin NEON — Narrative Experiences Online — një koleksion shkencor të historive të regjistruara të Recovery-t [^slade2021neon]. Në studime të rastësishme të kontrolluara u tregua se dëgjimi i historive të tilla përmirëson në mënyrë të matshme cilësinë e jetës — si për njerëzit me përvojë psikoze [^rennick2024neon] ashtu edhe për të afërmit që i shoqërojnë ata [^neonc2024].

Me fjalë të tjera: Recovery nuk është vetëm një premtim i ndier. Recovery është një fenomen i dokumentuar. Dhe historitë e të tjerëve janë vetë një formë ndihme.

## Recovery është praktike

Recovery nuk ndodh në radhë të parë në dhomën e trajtimit. Recovery janë takime. Recovery është kopshti ku, pas muajsh, mbillet sërish. Qeni që çdo mëngjes gjen derën. Kori ku frymëmarrja jote ka sërish një zë. Shoqja që dëgjon pa dashur të riparojë. Rrethi trialogjik i bisedës të mërkurën në mbrëmje. Shëtitja drejt kodrave. Buka që në brumin e thartë do dymbëdhjetë orë kohë.

Recovery janë histori të rezistencës — dhe të krijimtarisë që shpesh lind pikërisht aty ku diçka është thyer. Recovery shpesh është gjithashtu: lumturi.

Jo lumturia e patëmetë, gjithmonë e shkëlqyer, e broshurave të shndritshme. Por tjetra — lumturia e qetë, mirënjohëse, ndonjëherë e habitur. Lumturia që e njeh vetëm kur e di se sa i gjatë mund të jetë një ditë.

## Po ti?

Nuk është e nevojshme të ndiesh asgjë nga këto për të qenë këtu. Ndoshta tani nuk është momenti për fjalë të mëdha si lumturi apo kuptim. Ndoshta sot mjafton që ti lexon këtë faqe. Kjo është e mjaftueshme.

Ky workbook është shkruar për njerëz që ecin në një rrugë të tillë — ose që shoqërojnë, ose që duan të kuptojnë. Nuk dëshiron të jetë një teori e bukur. Dëshiron të jetë shenja rrugore.

:::pull
Para se të nisemi — një udhërrëfyes i shkurtër.
:::

:::easy{reading_time=1}
Recovery është një lëvizje. Shumë njerëz ia kanë dalë: kanë pasur një kohë të rëndë. Sot jetojnë mirë. Pavarësisht sëmundjes. Ndonjëherë madje për shkak të saj.

Ka mijëra histori të tilla.

Recovery nuk ndodh vetëm tek mjeku. Recovery ndodh në jetën tënde. Kur gatuan. Kur shëtit. Kur flet me njerëz të mirë.

Ky workbook do të të ndihmojë. Nuk është një libër për të mësuar. Është një shoqërues.
:::

:::quiz{id=q-vorspann}
- q: "Ku ndodh më shumë Recovery?"
  type: multiple-choice
  options:
    - text: "Vetëm në klinikë."
      correct: false
      explanation: "Jo. Recovery ndodh para së gjithash në jetën e përditshme — në takime, në hapa të vegjël."
    - text: "Në jetë — në takime, në përditshmëri."
      correct: true
      explanation: "Pikërisht. Trajtimi është një mjet, jo një vend."
    - text: "Vetëm kur të gjitha simptomat janë larguar."
      correct: false
      explanation: "Recovery nuk fillon vetëm pas mungesës së simptomave."

- q: "Sa histori të Recovery-t ekzistojnë?"
  type: multiple-choice
  options:
    - text: "Disa pak."
      correct: false
    - text: "Qindra."
      correct: false
    - text: "Mijëra, ndoshta qindra mijëra."
      correct: true
      explanation: "Aq sa janë njerëzit që kanë kaluar ndonjëherë nëpër një kohë të rëndë."
:::

:::flashcards{id=f-vorspann}
- front: "Recovery fillon me …"
  back: "… histori. Mijëra njerëz që, pavarësisht ose për shkak të simptomave, kanë gjetur një rrugë drejt një jete të mirë."
- front: "Programi NEON"
  back: "Koleksion shkencor i historive të regjistruara të Recovery-t (Univ. e Nottingham). Studimet tregojnë: dëgjimi i tyre përmirëson në mënyrë të matshme cilësinë e jetës."
- front: "Recovery ndodh …"
  back: "… jo në radhë të parë në dhomën e trajtimit. Në kopsht, në kor, në bisedë, gjatë gatimit, në takime."
:::

:::standard{reading_time=2}
Recovery fillon me histori. Jo me teori, jo me diagnoza — me njerëz që kanë gjetur një rrugë.

Një grua që për vite mendoi se nuk do të punonte më kurrë, dhe që sot drejton një librari të vogël. Një baba që pas një psikoze luan përsëri piano — ndryshe nga më parë, me më pak përsosmëri dhe me më shumë dashuri. Një djalë i ri që pas një diagnoze borderline sot shoqëron të tjerët, sepse dëshiron t'u japë dorën që i ka munguar atij.

Histori të tilla nuk janë me dhjetëra. Janë me mijëra. Aq sa janë njerëzit që kanë kaluar ndonjëherë nëpër një kohë të rëndë psikike.

Recovery është më shumë sesa një premtim i ndier. Recovery është e dokumentuar:

- Rrjeti Skocez i Recovery-t ka analizuar sistematikisht 64 rrugë jetësore.
- Universiteti i Nottingham-it mbledh shkencërisht rrëfime të Recovery-t.
- Studimet tregojnë: dëgjimi i këtyre historive përmirëson në mënyrë të matshme cilësinë e jetës.

Recovery rrallë ndodh në radhë të parë në dhomën e trajtimit. Recovery ndodh në kopshtin ku pas muajsh mbillet sërish. Në korin ku fryma jote ka përsëri një zë. Te shoqja që dëgjon pa dashur të riparojë.

Nuk është e nevojshme që ta ndiesh ende asnjë nga këto për të qenë këtu. Ndoshta sot mjafton që ti lexon këtë faqe. Kjo është e mjaftueshme.

Ky workbook është një shenjë rrugore. Jo një teori e bukur — por një shoqërues për rrugën tënde.
:::

:::standard-quiz{id=q-vorspann-std}
- q: "Ku ndodh kryesisht Recovery?"
  type: multiple-choice
  options:
    - text: "Vetëm në klinikë ose terapi."
      correct: false
      explanation: "Recovery ndodh kryesisht në përditshmëri — në takime, në kopsht, në kor, gjatë gatimit."
    - text: "Në jetë — në takime dhe në përditshmëri."
      correct: true
      explanation: "Pikërisht. Trajtimi është një mjet, jo një vend."
    - text: "Vetëm kur të gjitha simptomat janë zhdukur."
      correct: false
      explanation: "Jo. Recovery fillon në mes të vështirësisë."

- q: "Sa histori të Recovery-t ekzistojnë?"
  type: multiple-choice
  options:
    - text: "Disa pak."
      correct: false
    - text: "Mijëra, ndoshta qindra mijëra."
      correct: true
      explanation: "Aq sa janë njerëzit që kanë kaluar ndonjëherë nëpër një kohë të rëndë."
    - text: "Vetëm raste shumë të rralla."
      correct: false
:::

:::standard-flashcards{id=f-vorspann-std}
- front: "Recovery fillon me …"
  back: "… histori. Mijëra njerëz që, pavarësisht ose për shkak të simptomave, kanë gjetur një rrugë drejt një jete të mirë."
- front: "Ku ndodh Recovery?"
  back: "Në përditshmëri. Në kopsht, në kor, në bisedë, gjatë gatimit. Trajtimi është një mjet, jo një vend."
- front: "A je vetëm?"
  back: "Jo. Mijëra njerëz kanë kaluar nëpër kohë të ngjashme. Historitë e tyre tregojnë: ka një rrugë."
:::


# Një shënim i shkurtër mbi gjuhën
{#sprache reading_time=2}

Fjalët krijojnë realitet. Kush flitet si „skizofren" dëgjon një diagnozë. Kush flitet si „njeri me diagnozën skizofreni" mbetet së pari njeri. Kjo hyrje përdor me vetëdije gjuhën person-first: diagnoza pas njeriut, jo para tij [^ameringschmolke2012] [^knuf2026].

Flasim për njerëz me kriza psikike, me përvoja krizash ose me përvojë psikiatrike — jo për „të sëmurë". Flasim për njerëz në Recovery — jo për „të shëruar". Përdorim „ti", sepse workbook-u dixhital është një hapësirë personale — jo se ne vendosemi mbi ty. Nëse e lexon si profesionist: lexoje „ti"-në si model të një stili gjuhe që krijon afërsi, pa theksuar hierarki.

Një përkthim i përpiktë i fjalës Recovery në shqip nuk është vendosur — njësoj si për termin e afërt Empowerment. Prandaj e përdorim Recovery vazhdimisht si term teknik dhe i vendosim përbri tij në kapitullin tjetër leximin shqip plotësues „Shpresë — Fuqi — Kuptim" [^ameringschmolke2006].

:::easy{reading_time=1}
Fjalët janë të rëndësishme.

Kush quhet „skizofren" është vetëm i sëmurë. Kush quhet „njeri me skizofreni" mbetet së pari njeri.

Ne përdorim fjalën Recovery. Është anglisht. Nuk ka një fjalë të mirë shqip për të. Recovery do të thotë: të ecësh në një rrugë drejt një jete të mirë.

Në këtë aplikacion të flasim me „ti". Jo se jemi më mirë. Por se kjo hapësirë është hapësira jote.
:::

:::quiz{id=q-sprache}
- q: "Cili formulim është person-first?"
  type: multiple-choice
  options:
    - text: "Skizofreni"
      correct: false
    - text: "Njeri me diagnozën skizofreni"
      correct: true
      explanation: "Diagnoza pas njeriut, jo para tij."
    - text: "Një skizo"
      correct: false
:::

:::flashcards{id=f-sprache}
- front: "Gjuha person-first"
  back: "Diagnoza pas njeriut, jo para tij: „njeri me skizofreni" në vend të „skizofren"."
- front: "Pse Recovery si term?"
  back: "Nuk ka një përkthim elegant shqip. Recovery përdoret vazhdimisht si term i konsoliduar teknik."
:::

:::standard{reading_time=2}
Fjalët krijojnë realitet. Ato nuk janë të padëmshme.

Kush flitet si „skizofren" dëgjon një diagnozë, përpara se të jetë njeri. Kush flitet si „njeri me diagnozën skizofreni" mbetet së pari njeri — dhe e mban diagnozën si një pjesë, jo si tërësinë.

Ky workbook përdor me vetëdije gjuhën person-first: diagnoza vjen pas njeriut, jo para tij.

Konkretisht kjo do të thotë:

- Flasim për njerëz me kriza psikike, jo për „të sëmurë".
- Flasim për njerëz në Recovery, jo për „të shëruar".
- Flasim për shoqërim shërimi, jo për „punë me të internuar".

Për vetë fjalën Recovery nuk ka një përkthim të përpiktë në shqip — njësoj si për Empowerment. Prandaj e përdorim Recovery vazhdimisht si term teknik. Në kapitullin tjetër i vendosim përbri leximin shqip „Shpresë — Fuqi — Kuptim".

Një veçori: të flasim vazhdimisht me „ti". Jo se vendosemi mbi ty — përkundrazi. Workbook-u dixhital është një hapësirë personale. „Ti" krijon afërsi pa theksuar hierarki. Nëse e lexon si profesionist: lexoje „ti"-në si model të një stili gjuhe që shpreh barazi.
:::

:::standard-quiz{id=q-sprache-std}
- q: "Cili formulim është person-first?"
  type: multiple-choice
  options:
    - text: "Skizofreni"
      correct: false
      explanation: "Këtu diagnoza vjen e para — kjo nuk është person-first."
    - text: "Njeri me diagnozën skizofreni"
      correct: true
      explanation: "Pikërisht. Diagnoza pas njeriut — njeriu mbetet i pari i dukshëm."
    - text: "Një skizo"
      correct: false
      explanation: "Stigmatizuese dhe e redukton personin në diagnozë."

- q: "Pse workbook-u përdor „ti"?"
  type: multiple-choice
  options:
    - text: "Sepse autorët ndihen më të lartë."
      correct: false
    - text: "Sepse workbook-u dixhital është një hapësirë personale — afërsi pa hierarki."
      correct: true
      explanation: "„Ti" krijon afërsi, jo distancë nga lart-poshtë."
:::

:::standard-flashcards{id=f-sprache-std}
- front: "Gjuha person-first"
  back: "Diagnoza pas njeriut, jo para tij. „Njeri me skizofreni" në vend të „skizofren"."
- front: "Pse „Recovery" mbetet anglisht?"
  back: "Nuk ka një përkthim të përpiktë shqip. Recovery përdoret si term teknik i konsoliduar."
:::


# Mirë se erdhe
{#willkommen reading_time=3}

Sa mirë që je këtu.

Ky workbook dixhital është shkruar për ty — nëse ti vetë po kalon një kohë të rëndë, ke marrë një diagnozë, ose ke kohë që jeton me një sëmundje psikike.

Ndoshta ke qenë shpesh në trajtim. Ndoshta je në fillim. Ndoshta ke pas vetes një rrugë të gjatë dhe kërkon një gjuhë të re për atë që po përjeton.

Ky workbook është shkruar në mënyrë që ti ta zbulosh me ritmin tënd. Nuk duhet të lexosh gjithçka. Nuk duhet ta bësh asgjë në një renditje të caktuar. Mund të kapërcesh, të kthehesh, ta lësh mënjanë.

:::info{type=metaphor title="Një figurë për rrugën: Kintsugi"}
Kintsugi është një art tradicional japonez i riparimit. Qeramika e thyer ngjitet me ar. Vendet e thyer nuk fshihen, por bëhen të dukshme dhe nderohen. Ena nuk bëhet më pak e vlefshme pas thyerjes — për shumë sy, ajo bëhet më e vlefshme.

Rrugët e shërimit shpesh ndjekin një logjikë të ngjashme: nuk bëhet fjalë për të fshirë gjurmët e thyerjes, por për t'i integruar ato në një tërësi të re.

Recovery nuk do të thotë të bëhesh ai/ajo që ishe më parë. Recovery do të thotë se ajo që ishte mund të bëhet pjesë e një tërësie të re.
:::

:::quote{author="U.S. Substance Abuse and Mental Health Services Administration (SAMHSA), 2012" source="samhsa2012"}
Recovery është një udhëtim shërimi dhe transformimi, që e bën të mundur që një njeri me një sëmundje psikike të jetojë një jetë me kuptim në një bashkësi sipas zgjedhjes së vet — duke u përpjekur njëkohësisht të zhvillojë potencialin e plotë.
:::

:::easy{reading_time=1}
Sa mirë që je këtu.

Ky workbook është shkruar për ty — nëse ti vetë po përjeton kohë të rënda.

Nuk duhet të lexosh gjithçka. Zgjidh atë që të përshtatet. Kthehu kur të duash.

Ti vendos ritmin tënd.
:::

:::quiz{id=q-willkommen}
- q: "Për kë është ky workbook?"
  type: multiple-choice
  options:
    - text: "Për njerëz me përvojë të vetën të vështirësive psikike."
      correct: true
      explanation: "Është shkruar për ty — pavarësisht ku ndodhesh në rrugën tënde."
    - text: "Vetëm për profesionistë."
      correct: false
    - text: "Vetëm për njerëz me një diagnozë të caktuar."
      correct: false

- q: "A duhet ta lexosh workbook-un me radhë?"
  type: true-false
  correct: false
  explanation: "Jo. Mund të kapërcesh, të kthehesh, ta lësh mënjanë. Ti vendos ritmin dhe renditjen."
:::

:::flashcards{id=f-willkommen}
- front: "Për kë është ky workbook?"
  back: "Për ty — nëse ke përvojë të vetën me vështirësi psikike."
- front: "Kintsugi"
  back: "Art japonez i riparimit: vendet e thyer ngjiten me ar, jo fshihen. Metaforë për Recovery: e thyera bëhet pjesë e një tërësie të re."
- front: "Vetëvendosja gjatë leximit"
  back: "Ti zgjedh çfarë lexon. Ti zgjedh ritmin tënd. Mund të hysh sërish kudo."
:::

:::standard{reading_time=2}
Sa mirë që je këtu.

Ky workbook është shkruar për ty — nëse ti vetë po kalon një kohë të rëndë, ke marrë një diagnozë, ose ke kohë që jeton me një sëmundje psikike.

Ndoshta je në fillim. Ndoshta ke pas vetes shumë terapi. Ndoshta po kërkon një gjuhë të re për atë që po përjeton — ose thjesht dikë që nuk dëshiron të riparojë, por të ecë me ty.

Nuk duhet të sjellësh asgjë. Pa njohuri paraprake, pa një ditë të mirë, pa një histori të mbaruar. Lexo atë që të flet. Lëre atë që tani nuk të përshtatet. Kthehu kur të duash.

Një figurë që ne përdorim me kënaqësi është Kintsugi — arti japonez i riparimit. Qeramika e thyer ngjitet me ar. Vendet e thyer nuk fshihen, por bëhen të dukshme. Ena nuk bëhet më pak e vlefshme pas thyerjes — për shumë sy ajo bëhet më e vlefshme.

Recovery ndjek një logjikë të ngjashme. Nuk bëhet fjalë për të fshirë gjithçka që ishte. Bëhet fjalë që e thyera mund të bëhet pjesë e një tërësie të re.

Disa vërejtje para se të nisesh:

- Ti vendos ritmin dhe renditjen.
- Ka modalitete të ndryshme leximi: i thjeshtë, standard, i hollësishëm.
- Mund të hysh dhe të dalësh kudo.
- Nëse diçka bëhet shumë: lëre. Kjo nuk është dorëzim — është kujdes për veten.

Askush nuk të shtyn. Kjo hapësirë të takon ty.
:::

:::standard-quiz{id=q-willkommen-std}
- q: "Kush vendos ritmin dhe renditjen?"
  type: multiple-choice
  options:
    - text: "Aplikacioni."
      correct: false
    - text: "Ti."
      correct: true
      explanation: "Mund të kapërcesh, ta lësh mënjanë, të kthehesh."
    - text: "Renditja është e caktuar."
      correct: false

- q: "Çfarë do të thotë Kintsugi si figurë për Recovery?"
  type: multiple-choice
  options:
    - text: "Vendet e thyer bëhen sa më të padukshme."
      correct: false
    - text: "Vendet e thyer bëhen të dukshme — dhe pjesë e një tërësie të re."
      correct: true
      explanation: "Recovery nuk do të thotë të fshish gjithçka. Ajo që ishte mund të bëhet pjesë e së resë."
:::

:::standard-flashcards{id=f-willkommen-std}
- front: "Ritmi yt"
  back: "Ti vendos çfarë lexon dhe kur. Të kapërcesh, ta lësh mënjanë, të kthehesh — gjithçka është e lejuar."
- front: "Kintsugi"
  back: "Art japonez i riparimit: vendet e thyer ngjiten me ar. Metaforë për Recovery — e thyera bëhet pjesë e një tërësie të re."
- front: "Kur diçka bëhet shumë"
  back: "Lëre. Kjo nuk është dorëzim — është kujdes për veten."
:::


# 1. Çfarë do të thotë me të vërtetë Recovery
{#kap-1 reading_time=5}

## Fjala dhe historia e saj

Fjala angleze recovery do të thotë fjalë për fjalë shërim, rifitim, ripërtëritje. Në shëndetin mendor është konsoliduar që nga vitet 1980 si term përmbledhës për një këndvështrim të ri ndaj vuajtjes psikike [^anthony1993] [^deegan1988].

Recovery në thelb nuk është një term mjekësor. Ai vjen nga përvojat e njerëzve që kishin marrë vetë diagnoza psikiatrike dhe që nuk pranonin të reduktoheshin në to [^chamberlin1978] [^deegan1988].

## Përkufizimi klasik

Përkufizimi më i cituar vjen nga William Anthony, atëherë drejtor i Center for Psychiatric Rehabilitation në Boston University.

:::quote{author="Anthony, 1993, f. 15" source="anthony1993" lang="en"}
Recovery is described as a deeply personal, unique process of changing one's attitudes, values, feelings, goals, skills, and/or roles. It is a way of living a satisfying, hopeful, and contributing life even with limitations caused by illness.
:::

:::quote-translation{source="anthony1993" translator="përkthim i lirë"}
Recovery është një proces thellësisht personal dhe i veçantë ndryshimi — i qëndrimeve, vlerave, ndjenjave, qëllimeve, aftësive ose roleve të vetës. Është një mënyrë jetese në të cilën edhe me kufizimet që sjell një sëmundje mund të jetosh një jetë të mbushur, plot shpresë dhe të kontribuosh.
:::

Ky përkufizim është prej më shumë se tre dekadash pika ndërkombëtare e referencës. Ai është pranuar ndër të tjera nga SAMHSA [^samhsa2012], është modeluar nga tradita e Sainsbury Centre for Mental Health dhe është integruar në udhëzimet e OBSH-së [^who2021].

## Shërimi klinik dhe personal

Kërkimi dallon dy koncepte [^slade2009]:

- **Shërimi klinik** (clinical recovery): simptomat zvogëlohen ose zhduken, diagnoza humbet rëndësinë e saj. Ky kuptim vjen nga mjekësia.
- **Shërimi personal** (personal recovery): ti e përjeton jetën tënde si me kuptim, të vlefshme dhe me vetëvendosje — pavarësisht nëse të gjitha simptomat janë larguar ose jo.

Recovery në kuptimin e këtij workbook-u nënkupton para së gjithash shërimin personal. Ai mund të shoqërohet me shërimin klinik, por nuk është e detyrueshme.

## Përkufizime në hapësirën gjermanofolëse

:::quote{author="Stiftung Pro Mente Sana Schweiz, 2024" source="promentesana"}
Përshkrimi më i shkurtër i Recovery-t është: të bësh një jetë sa më të mirë, edhe në përballje me një vështirësi të rëndë psikike.
:::

Amering dhe Schmolke flasin për „fundin e pashërueshmërisë" [^ameringschmolke2012]. Ato mbështeten te kërkimet gjatësore që tregojnë: edhe pas sëmundjeve të rënda si skizofrenia, është e mundur një jetë e mbushur. Knuf e kupton Recovery-n si proces përballjeje me veten dhe me sëmundjen — me qëllim të jetuarit të një jete plot shpresë dhe aktive, pavarësisht problemeve psikike [^knuf2026].

Udhëzimi gjerman S3 „Terapitë psikosociale për sëmundjet e rënda psikike" e ka çuar Recovery-n në qendrën e ofrimit gjermanishtfolës dhe ka emërtuar orientimin ndaj Recovery-t si parim udhëheqës [^dgppn2019].

:::reflection{id=1 title="Çfarë do të thotë shërim për ty?"}
- Kur dëgjon fjalën shërim — cila figurë të shfaqet e para?
- Cili nga përkufizimet më lart të prek më shumë? Dhe pse?
- Çfarë do të ishte për ty një „jetë e mirë" — edhe atëherë kur jo gjithçka „ka ikur"?
:::

:::easy{reading_time=2}
Recovery do të thotë: shërim.

Por Recovery nuk do të thotë: të gjitha simptomat duhet të ikin.

Recovery do të thotë: ti jeton mirë. Edhe nëse përjeton ende gjëra të rënda.

Ka dy lloje shërimi:

- Simptomat bëhen më të pakta. Ky është shërimi klinik.
- Ti e përjeton jetën si të mirë dhe me kuptim. Ky është shërimi personal.

Të dyja janë të mundura. Të dyja mund të jenë në të njëjtën kohë.

Një fondacion zviceran thotë: Recovery do të thotë të bësh një jetë sa më të mirë. Edhe kur diçka e rëndë është aty.

:::reflection{id=1-easy title="Pyet veten"}
- Çfarë do të thotë një jetë e mirë për ty?
- Çfarë duhet të kesh për të? Çfarë jo?
:::
:::

:::quiz{id=q-1}
- q: "Çfarë do të thotë Recovery?"
  type: multiple-choice
  options:
    - text: "Të gjitha simptomat duhet të zhduken."
      correct: false
      explanation: "Jo. Shërimi personal mund të funksionojë edhe me simptoma të vazhdueshme."
    - text: "Të bësh një jetë me kuptim dhe me vetëvendosje — edhe nëse simptomat mbeten."
      correct: true
      explanation: "Pikërisht. Ky është thelbi i shërimit personal (Anthony 1993)."
    - text: "Një metodë e caktuar terapie."
      correct: false

- q: "Cilat dy lloje shërimi dallon kërkimi?"
  type: multiple-choice
  options:
    - text: "Shërim i shpejtë dhe i ngadalshëm."
      correct: false
    - text: "Shërim klinik dhe shërim personal."
      correct: true
      explanation: "Klinik = simptomat ikën. Personal = të bësh një jetë me kuptim."
    - text: "Shërim terapeutik dhe me medikamente."
      correct: false
:::

:::flashcards{id=f-1}
- front: "Shërimi klinik"
  back: "Simptomat zvogëlohen ose zhduken. Diagnoza humbet rëndësinë. Kuptimi mjekësor i shërimit."
- front: "Shërimi personal"
  back: "Ti e përjeton jetën si me kuptim, të vlefshme dhe me vetëvendosje — pavarësisht nëse të gjitha simptomat janë larguar."
- front: "Anthony 1993 — përkufizimi bazë"
  back: "Recovery është një proces thellësisht personal dhe i veçantë ndryshimi i qëndrimeve, vlerave, ndjenjave, qëllimeve dhe roleve — një rrugë drejt një jete të mbushur, edhe me kufizime."
- front: "Pro Mente Sana — përkufizimi më i shkurtër"
  back: "Të bësh një jetë sa më të mirë — edhe në përballje me një vështirësi të rëndë psikike."
:::

:::standard{reading_time=2}
Recovery është një fjalë angleze. Fjalë për fjalë do të thotë shërim, rifitim, ripërtëritje. Në shëndetin mendor është që nga vitet 1980 termi përmbledhës për një këndvështrim të ri ndaj vuajtjes psikike — dhe pikërisht një këndvështrim që nuk u shpik nga mjekët, por nga vetë të prekurit.

Përkufizimi klasik vjen nga William Anthony, një studiues nga Bostoni: Recovery është një proces thellësisht personal ndryshimi i qëndrimeve, vlerave, qëllimeve dhe roleve të vetes — një rrugë drejt një jete të mbushur, plot shpresë, edhe me kufizimet e një sëmundjeje.

Kërkimi dallon dy lexime:

- **Shërimi klinik:** simptomat zvogëlohen ose zhduken. Diagnoza humbet rëndësinë. Ky është këndvështrimi mjekësor.
- **Shërimi personal:** ti e përjeton jetën si me kuptim, të vlefshme dhe me vetëvendosje — pavarësisht nëse simptomat janë ende aty.

Recovery në kuptimin e këtij workbook-u nënkupton kryesisht shërimin personal. Ai mund të shoqërohet me shërimin klinik, por nuk është e detyrueshme. Të dyja mund të jenë në të njëjtën kohë. Dhe secila mund të ketë ritmin e vet.

Fondacioni zviceran Pro Mente Sana e përmbledh në një fjali: Recovery do të thotë të bësh një jetë sa më të mirë — edhe në përballje me një vështirësi të rëndë psikike.

E rëndësishme është: ti je më shumë se diagnoza jote. Ti je së pari njeri — çdo gjë tjetër vjen më pas. Dhe nuk është e nevojshme ta bësh këtë rrugë i/e vetëm. Të tjerë mund të të shoqërojnë.
:::

:::standard-quiz{id=q-1-std}
- q: "Çfarë do të thotë Recovery para së gjithash?"
  type: multiple-choice
  options:
    - text: "Të jesh i shëruar. Pa simptoma."
      correct: false
      explanation: "Ky do të ishte shërimi klinik. Recovery do të thotë më shumë — sidomos shërim personal."
    - text: "Një jetë e mbushur — edhe me simptoma."
      correct: true
      explanation: "Pikërisht ky është përkufizimi klasik i Anthony-it (1993)."
    - text: "Një metodë e caktuar terapie."
      correct: false

- q: "Cilat dy lloje shërimi dallon kërkimi?"
  type: multiple-choice
  options:
    - text: "Shërim i shpejtë dhe i ngadalshëm."
      correct: false
    - text: "Shërim klinik dhe shërim personal."
      correct: true
      explanation: "Klinik = simptomat ikën. Personal = të bësh një jetë me kuptim."

- q: "Kush e zhvilloi Recovery-n si koncept?"
  type: multiple-choice
  options:
    - text: "Kryesisht mjekët dhe industria farmaceutike."
      correct: false
    - text: "Njerëzit me përvojë të vetën psikiatrike — së bashku me kërkimin."
      correct: true
      explanation: "Lëvizja vjen nga përvojat e të prekurve."
:::

:::standard-flashcards{id=f-1-std}
- front: "Recovery (përkufizim bazë)"
  back: "Të bësh një jetë të mbushur, plot shpresë — edhe me kufizimet e një sëmundjeje (Anthony 1993)."
- front: "Shërimi klinik"
  back: "Simptomat zvogëlohen ose zhduken. Diagnoza humbet rëndësinë."
- front: "Shërimi personal"
  back: "Ti e përjeton jetën si me kuptim, të vlefshme dhe me vetëvendosje — pavarësisht nëse simptomat mbeten."
- front: "Pro Mente Sana — përkufizimi më i shkurtër"
  back: "Të bësh një jetë sa më të mirë, edhe në përballje me një vështirësi të rëndë."
:::


# 2. Shpresë — Fuqi — Kuptim
{#kap-2 reading_time=3}

Në vitin 2006, Michaela Amering dhe Margit Schmolke botuan në revistën zvicerane Managed Care një artikull me titullin „Hoffnung – Macht – Sinn. Recovery-Konzepte in der Psychiatrie" [^ameringschmolke2006]. Me këtë ato modeluan vendimtarisht leximin gjermanishtfolës të Recovery-t.

Treshja „Shpresë — Fuqi — Kuptim" përmbledh atë për të cilën bën fjalë Recovery nga perspektiva DACH — si një përshqiptim alegjik dhe i afërt me përditshmërinë të termave qendrore anglisht.

| Shqip | Anglisht | Kuptimi në kontekstin D-A-CH |
|---------|----------|-----------------------------|
| **Shpresa** | Hope | Të (ri)gjesh një ndjenjë të vetes edhe të pavarur nga sëmundja — shpresa si burim terapeutik veprues. |
| **Fuqia** | Empowerment | Aftësimi i vetes, liria e zgjedhjes, përgjegjësia personale — „fuqi" në kuptimin e rifitimit të hapësirës së veprimit [^knufseibert2004]. |
| **Kuptimi** | Meaning | Vlera, qëllime, kontribut, përkatësi — të përkufizosh jetën jashtë rolit të pacientit/es. |

Shpresa në këtë kuptim është e lidhur ngushtë me ndjenjën e vetes: një vlerë e vetes që qëndron e pavarur nga përjetimi i sëmundjes dhe një identitet që përfshin më shumë se rolin e pacientit/es [^ameringschmolke2006].

Të tre termat përshtaten me përkufizimin e Anthony-it për Recovery-n [^anthony1993]. Dhe ato korrespondojnë qendrore me modelin CHIME [^leamy2011]: Shpresa = Hope, Fuqia = Empowerment, Kuptimi = Meaning. Lidhshmëria (Connectedness) dhe Identiteti (Identity) formojnë kornizën rrethuese të marrëdhënieve dhe të vetes.

:::easy{reading_time=1}
Dy studiuese kanë gjetur tre fjalë për Recovery në gjermanisht:

- **Shpresa** — Ti beson se mund të bëhet më mirë.
- **Fuqia** — Ti ke të drejtën të vendosësh. Nuk je vetëm pacient/e.
- **Kuptimi** — Jeta jote ka vlerë. Ti i përket asaj.

Këto tre fjalë janë leximi gjermanisht i modelit anglez CHIME. Lidhshmëria me të tjerët dhe një identitet i vetës bëjnë gjithashtu pjesë në të.
:::

:::quiz{id=q-2}
- q: "Çfarë do të thotë „Fuqi" në këtë lexim gjermanisht?"
  type: multiple-choice
  options:
    - text: "Të ushtrosh fuqi mbi njerëzit e tjerë."
      correct: false
    - text: "Aftësimi i vetes — e drejta për të bashkëvendosur për jetën tënde."
      correct: true
      explanation: "„Fuqia" këtu do të thotë Empowerment në kuptimin pozitiv — jo fuqi mbi të tjerët."
    - text: "Kompetenca mjekësore."
      correct: false

- q: "Kush e prezantoi treshen „Shpresë — Fuqi — Kuptim"?"
  type: multiple-choice
  options:
    - text: "Patricia Deegan"
      correct: false
    - text: "Amering & Schmolke (2006)"
      correct: true
      explanation: "Në revistën zvicerane Managed Care, 2006."
    - text: "OBSH-ja"
      correct: false
:::

:::flashcards{id=f-2}
- front: "Shpresë — Fuqi — Kuptim"
  back: "Leximi gjermanishtfolës i Recovery-t, prezantuar nga Amering & Schmolke 2006. Korrespondon me Hope, Empowerment, Meaning në modelin CHIME."
- front: "Fuqia (në kuptimin e Recovery-t)"
  back: "Aftësimi i vetes — e drejta për të bashkëvendosur për jetën tënde. Jo fuqi mbi të tjerët."
:::

:::standard{reading_time=2}
Recovery është një fjalë angleze që përkthehet me vështirësi në gjermanisht. Psikiatret austriake Michaela Amering dhe Margit Schmolke propozuan në 2006, në revistën zvicerane Managed Care, tre terma gjermanishtfolëse që prekin thelbin — një treshe që sot është e zakonshme në hapësirën DACH:

- **Shpresa** — besimi se jeta jote mund të jetë më shumë se sëmundja. Një ndjenjë e vetes që qëndron edhe pavarësisht nga simptomat.
- **Fuqia** — aftësimi i vetes. Jo fuqi mbi të tjerët, por fuqi mbi jetën tënde. Të bashkëvendosësh. Liri zgjedhjeje. Përgjegjësi personale.
- **Kuptimi** — vlera, qëllime, përkatësi. Të kesh të drejtë ta përkufizosh jetën jashtë rolit të pacientit/es.

Këto tre fjalë përshtaten me përkufizimin klasik të Recovery-t. Ato korrespondojnë gjithashtu me pjesë qendrore të modelit më të rëndësishëm ndërkombëtar të Recovery-t, modelit CHIME:

- Shpresa = Hope
- Fuqia = Empowerment
- Kuptimi = Meaning

Lidhshmëria (Connectedness) dhe Identiteti (Identity) formojnë kornizën rrethuese — marrëdhëniet dhe imazhin e vetes si tokë në të cilën mund të rriten shpresa, fuqia dhe kuptimi.

Nuk është e nevojshme t'i ndiesh të tria njëkohësisht. Ndonjëherë është aty vetëm shpresa, ndonjëherë vetëm kuptimi. Ndonjëherë fillon me fuqinë — me një vendim të vetëm që merr ti. Kjo është e mjaftueshme. Recovery nuk është një listë për t'u shënuar.
:::

:::standard-quiz{id=q-2-std}
- q: "Çfarë nënkupton „Fuqia" në këtë lexim?"
  type: multiple-choice
  options:
    - text: "Të ushtrosh fuqi mbi të tjerët."
      correct: false
    - text: "Aftësimi i vetes — e drejta për të bashkëvendosur për jetën tënde."
      correct: true
      explanation: "„Fuqia" këtu do të thotë Empowerment në kuptimin pozitiv."
    - text: "Kompetenca mjekësore."
      correct: false

- q: "Kush e prezantoi treshen „Shpresë — Fuqi — Kuptim"?"
  type: multiple-choice
  options:
    - text: "Patricia Deegan"
      correct: false
    - text: "Amering dhe Schmolke (2006)"
      correct: true
      explanation: "Në revistën zvicerane Managed Care."
    - text: "OBSH-ja"
      correct: false
:::

:::standard-flashcards{id=f-2-std}
- front: "Shpresë — Fuqi — Kuptim"
  back: "Leximi gjermanishtfolës i Recovery-t (Amering dhe Schmolke 2006). Korrespondon me Hope, Empowerment, Meaning në modelin CHIME."
- front: "Fuqia në kuptimin e Recovery-t"
  back: "Aftësimi i vetes — e drejta për të bashkëvendosur për jetën tënde. Jo fuqi mbi të tjerët."
- front: "Shpresa në kuptimin e Recovery-t"
  back: "Besimi se jeta jote mund të jetë më shumë se sëmundja. Një ndjenjë e vetes që qëndron edhe pa mungesë të simptomave."
:::


# 3. Çfarë NUK është Recovery — gjashtë mite
{#kap-3 reading_time=5}

Recovery shpesh keqkuptohet në përditshmëri.

## Miti 1: Recovery do të thotë që të gjitha simptomat duhet të kenë ikur

Gabim. Edhe njerëz me simptoma të vazhdueshme mund të përjetojnë Recovery [^anthony1993] [^deegan1996] [^andresen2003]. Shërimi personal mund të bashkëjetojë me simptomat.

## Miti 2: Recovery do të thotë thjesht të mendosh pozitivisht

Gabim. Recovery nuk është një thirrje për optimizëm me shtypje butoni. Shpresa në kërkimin e Recovery-t nënkupton një bindje realiste, shpesh kokëfortë, se ndryshimi është i mundur [^slade2013] [^schrank2012].

## Miti 3: Recovery do të thotë të dalësh pa medikamente ose terapi

Gabim. Recovery nuk është një lëvizje kundër-mjekësore. Do të thotë që TI bashkëvendos se çfarë të ndihmon [^deegandrake2006] [^slade2017sdm]. Amering dhe Schmolke e theksojnë kështu: pranimi i medikamenteve ose i një diagnoze të caktuar nuk duhet të jetë kushti i vetëm për mbështetjen psikosociale [^ameringschmolke2006].

## Miti 4: Recovery është një rrugë e drejtë dhe e parashikueshme

Gabim. Andresen, Oades dhe Caputi [^andresen2003] dhe shumë të tjerë tregojnë: Recovery pothuajse asnjëherë nuk është lineare. Kthimet mbrapsht janë pjesë e rrugës dhe nuk janë fundi, por pjesë e saj.

## Miti 5: Kush nuk „bëhet i shëndoshë" është vetë fajtor

Gabim. Recovery nuk është një koncept performance dhe as një gjykim moral. Rruga varet nga shumë faktorë — nga marrëdhëniet, nga ofrimi i shërbimeve, nga kushtet socio-ekonomike, nga traumat, nga rastësitë [^leboutillier2011].

## Miti 6: Një sëmundje psikike është „e pashërueshme" — „kronike"

Gabim dhe e dëmshme. Studimet gjatësore si studimi Vermont [^harding1987] dhe rishikime më të reja [^lally2017] tregojnë: shërimi — edhe nga diagnoza të rënda — është rregullisht i mundur.

Amering dhe Schmolke paralajmërojnë shprehimisht ndaj fiksimeve të tilla [^ameringschmolke2012]: fjali si „Ju jeni shumë i/e sëmurë për një terapi bisedimi" ose e kundërta „Gjithçka do të bëhet sërish si më parë" janë, sipas tyre — fjalë për fjalë — „rrezikshëm si zjarri". Parashikime të tilla u heqin njerëzve hapësirën e veprimit përpara se ata të kenë mundësi ta përdorin atë.

Heinz Katschnig ka gjetur për këtë një figurë depërtuese: pashpresa — e komunikuar nga jashtë dhe shpesh e marrë përbrenda — është forma më tinëzare e zinxhirëve në psikiatri. Ajo është aq efektive pikërisht sepse nuk është e dukshme nga jashtë [^ameringschmolke2012].

:::reflection{id=2 title="Cili mit të preku?"}
- Cili nga këto gjashtë mite ishte për ty vetë për një kohë të gjatë realitet?
- Kush ta përcolli këtë mit — familja, shkolla, mediat, sistemi psikiatrik?
- Çfarë do të ndryshonte nëse e lëshon këtë mit sot?
:::

:::easy{reading_time=2}
Ka shumë ide të gabuara për Recovery. Gjashtë prej tyre takohen shpesh:

1. **Gabim:** Të gjitha simptomat duhet të ikin. → Recovery ndodh edhe me simptoma.
2. **Gabim:** Duhet të mendosh pozitivisht. → Nuk ka detyrim për humor të mirë.
3. **Gabim:** Pa medikamente. → Ti bashkëvendos se çfarë të ndihmon.
4. **Gabim:** Rruga është e drejtë. → Kthimet mbrapsht janë pjesë e saj.
5. **Gabim:** Kush nuk shërohet është fajtor. → Askush nuk është fajtor.
6. **Gabim:** Disa janë „të pashërueshëm". → Shërimi është i mundur edhe pas sëmundjeve të rënda.
:::

:::quiz{id=q-3}
- q: "Cila pohim është i saktë?"
  type: multiple-choice
  options:
    - text: "Recovery do të thotë që të gjitha simptomat duhet të zhduken."
      correct: false
    - text: "Recovery mund të funksionojë edhe me simptoma të vazhdueshme."
      correct: true
      explanation: "Pohimi qendror i Anthony 1993 dhe shumë studimeve pasuese."
    - text: "Recovery është e mundur vetëm te sëmundjet e lehta."
      correct: false

- q: "E vërtetë apo e gabuar: Recovery do të thotë të mos marrësh medikamente."
  type: true-false
  correct: false
  explanation: "Recovery nuk është një lëvizje kundër-mjekësore. Ti vendos së bashku me profesionistët se çfarë të ndihmon."

- q: "Çfarë thonë studimet gjatësore si Harding (1987) dhe Lally (2017) për diagnozat e rënda?"
  type: multiple-choice
  options:
    - text: "Janë të pashërueshme."
      correct: false
    - text: "Shërimi është rregullisht i mundur edhe pas rrjedhash të rënda."
      correct: true
      explanation: "Kjo është baza për „fundin e pashërueshmërisë" të Amering-ut."
:::

:::flashcards{id=f-3}
- front: "Miti më i madh i Recovery-t"
  back: "Recovery nuk do të thotë: të gjitha simptomat të kenë ikur. Recovery do të thotë: një jetë e mirë — edhe me vështirësi."
- front: "Lineariteti — gabim"
  back: "Recovery nuk është lineare. Kthimet mbrapsht janë pjesë e saj dhe nuk janë dështim."
- front: "„I pashërueshëm" — gabim"
  back: "Studimet gjatësore (Harding 1987, Lally 2017) tregojnë: edhe pas sëmundjeve të rënda shërimi është rregullisht i mundur."
- front: "„Rrezikshëm si zjarri""
  back: "Amering & Schmolke (2012) për parashikime si „Ju jeni shumë i sëmurë për terapi bisedimi" — fiksime të tilla heqin hapësirën e veprimit."
:::

:::standard{reading_time=2}
Rreth Recovery-t qarkullojnë shumë figura të gabuara. Gjashtë prej tyre takohen veçanërisht shpesh në përditshmëri — dhe të gjashtë janë të gabuara.

- **„Recovery do të thotë që të gjitha simptomat duhet të kenë ikur."** Nuk është e vërtetë. Edhe njerëz me simptoma të vazhdueshme mund të bëjnë një jetë të mbushur. Shërimi personal mund të bashkëjetojë me simptomat.
- **„Recovery do të thotë të mendosh gjithmonë pozitivisht."** Gabim. Recovery nuk është thirrje për optimizëm me shtypje butoni. Shpresa në kërkimin e Recovery-t është një bindje realiste, shpesh kokëfortë — jo humor i mirë i imponuar.
- **„Recovery do të thotë të dalësh pa medikamente."** Gabim. Recovery nuk është një lëvizje kundër-mjekësore. Do të thotë që TI bashkëvendos se çfarë të ndihmon — dhe çfarë jo.
- **„Recovery është një rrugë e drejtë dhe e parashikueshme."** Gabim. Recovery pothuajse asnjëherë nuk është lineare. Kthimet mbrapsht janë pjesë e saj. Ato nuk janë dështim, por pjesë e rrugës.
- **„Kush nuk shërohet është vetë fajtor."** Gabim. Recovery nuk është një koncept performance dhe as një gjykim moral. Rruga varet nga shumë faktorë: marrëdhëniet, ofrimi i shërbimeve, kushtet socio-ekonomike, trauma, rastësia.
- **„Sëmundjet e rënda psikike janë të pashërueshme."** Gabim — dhe e rrezikshme. Studimet gjatësore tregojnë prej dekadash: shërimi është rregullisht i mundur edhe pas diagnozave të rënda.

Amering dhe Schmolke i quajnë fjalitë si „Ju jeni shumë i/e sëmurë për një terapi bisedimi" ose „Do të bëhet sërish si më parë" madje „rrezikshëm si zjarri". Parashikime të tilla të heqin hapësirën e veprimit përpara se të kesh mundësi ta përdorësh.

Pashpresa, që komunikohet nga jashtë dhe merret përbrenda — këto janë zinxhirët më tinëzarë në psikiatri. Pikërisht sepse janë të padukshëm.
:::

:::standard-quiz{id=q-3-std}
- q: "Cila pohim është i saktë?"
  type: multiple-choice
  options:
    - text: "Recovery do të thotë që të gjitha simptomat duhet të zhduken."
      correct: false
    - text: "Recovery mund të funksionojë edhe me simptoma të vazhdueshme."
      correct: true
      explanation: "Ky është pohimi qendror që nga Anthony 1993."
    - text: "Recovery është e mundur vetëm te sëmundjet e lehta."
      correct: false

- q: "Kush është fajtor kur Recovery është e vështirë?"
  type: multiple-choice
  options:
    - text: "Ti vetë — nuk po përpiqesh mjaftueshëm."
      correct: false
    - text: "Askush. Recovery nuk është një konkurs dhe as një gjykim moral."
      correct: true
      explanation: "Rruga varet nga shumë faktorë — jo vetëm nga vullneti yt."

- q: "Çfarë thonë studimet gjatësore për diagnozat „të pashërueshme"?"
  type: multiple-choice
  options:
    - text: "I pashërueshëm mbetet i pashërueshëm."
      correct: false
    - text: "Shërimi është rregullisht i mundur edhe pas rrjedhash të rënda."
      correct: true
      explanation: "Studimi Vermont (Harding 1987), meta-analiza aktuale (Lally 2017)."
:::

:::standard-flashcards{id=f-3-std}
- front: "Miti më i madh i Recovery-t"
  back: "„Të gjitha simptomat duhet të kenë ikur." — Nuk është e vërtetë. Recovery do të thotë të bësh një jetë të mirë, edhe me vështirësi."
- front: "Lineariteti — gabim"
  back: "Recovery pothuajse asnjëherë nuk është lineare. Kthimet mbrapsht janë pjesë e saj dhe nuk janë dështim."
- front: "„I pashërueshëm" — gabim"
  back: "Studimet gjatësore tregojnë: edhe pas sëmundjeve të rënda shërimi është rregullisht i mundur."
- front: "„Rrezikshëm si zjarri""
  back: "Amering dhe Schmolke për parashikime si „Ju jeni shumë i sëmurë për terapi" — fiksime të tilla heqin hapësirën e veprimit."
:::


# 4. Historia e lëvizjes Recovery
{#kap-4 reading_time=6}

## Zërat e të prekurve — vitet 1970 dhe 1980

Lëvizja Recovery nuk lindi në një institut kërkimor. Ajo filloi në vitet 1970 në Amerikën e Veriut, në iniciativat e ish-pacientëve psikiatrikë — i ashtuquajturi Ex-Patient ose Survivor-Movement [^chamberlin1978].

Një nga zërat qendrore është Patricia Deegan. Në moshën 17-vjeçare mori diagnozën skizofreni dhe dëgjoi nga një mjek se nuk do të bënte kurrë një jetë normale. Sot është psikologe me doktoraturë, studiuese dhe pioniere e njohur ndërkombëtarisht e Recovery-t [^deegan1988] [^deegan1996].

Patricia Deegan ka formuluar dy mendime kyçe që që atëherë kanë modeluar lëvizjen ndërkombëtare të Recovery-t [^deegan1996]:

- Recovery nuk është një pikë mbarimi dhe as një stabilizim i thjeshtë, por një transformim — një rrugë në të cilën pranon kufijtë e tu dhe njëkohësisht zbulon mundësi të reja.
- Njerëzit me sëmundje psikike nuk janë marrës pasivë të ndihmës, por subjekte të afta për veprim që mund ta ndryshojnë situatën e tyre përmes vetë veprimit.

## Dorothea Buck, Trialogu dhe Dëgjuesit e Zërave

Në hapësirën gjermanishtfolëse, Dorothea Buck ka hapur një rrugë të krahasueshme. E sterilizuar me forcë nga regjimi nazist dhe e trajtuar disa herë në psikiatri, ajo ka luftuar gjithë jetën për një psikiatri njerëzore [^buck1990].

Në vitin 1989 lindi në Hamburg me iniciativën e Thomas Bock-ut seminari i parë trialogjik për psikozën — një format ku të prekurit, të afërmit dhe profesionistët flasin si të barabartë [^bockpriebe2005]. Në 1992 u themelua Bundesverband Psychiatrie-Erfahrener (BPE). Rrjeti ndërkombëtar i Dëgjuesve të Zërave (Hearing Voices) është aktiv prej viteve 1990 në Gjermani, Austri dhe Zvicër [^hvn].

## Shkencëzimi — vitet 1990 dhe 2000

William Anthony dha me artikullin kyç të vitit 1993 përkufizimin shkencor [^anthony1993]. Andresen, Oades dhe Caputi zhvilluan në Australi modelin me pesë faza të shërimit psikologjik [^andresen2003].

## Nga koncepti te sistemi — nga viti 2007

Në vitin 2007 nisi në Mbretërinë e Bashkuar programi ImROC (Implementing Recovery through Organisational Change). Që atëherë ai ka shoqëruar qindra shërbime ofruese në transformimin drejt praktikës së orientuar nga Recovery [^imroc] [^perkins2012].

Në SHBA, Recovery u bë në vitin 2006 udhëzim zyrtar i autoritetit kombëtar të shëndetit SAMHSA. Konventa e OKB-së për të Drejtat e Personave me Aftësi të Kufizuara ankoroi një kuptim të të drejtave të njeriut të orientuar nga vetëvendosja [^uncrpd2006]. OBSH-ja publikoi në vitin 2019 iniciativën QualityRights [^who2019] dhe në vitin 2021 udhëzimin „Guidance on Community Mental Health Services" [^who2021].

## Hapësira gjermanishtfolëse

Në Austri, Amering dhe Schmolke me artikullin „Shpresë — Fuqi — Kuptim" të vitit 2006 [^ameringschmolke2006] dhe me librin „Recovery. Fundi i pashërueshmërisë" të vitit 2012 [^ameringschmolke2012] kanë shënuar një pikë kthese. Në Gjermani, Andreas Knuf së bashku me Ulrich Seibert paraqitën tashmë në vitin 2004 librin „Selbstbefähigung fördern" [^knufseibert2004]; libri i tij „Recovery dhe Empowerment" tani është në botimin e dytë [^knuf2026].

EX-IN (Experienced Involvement) u zhvillua duke filluar nga viti 2005 në Bremen — i frymëzuar nga Dorothea Buck dhe nga një projekt Leonardo-da-Vinci i mbështetur nga BE-ja [^utschakowski2009]. Që nga viti 2011, EX-IN koordinohet nga shoqata EX-IN Deutschland e.V. [^exin_de]. Një RCT gjerman për Peer-Support vërtetoi efektivitetin [^mahlke2017].

Në Zvicër, fondacioni Pro Mente Sana sjell konceptin e Recovery-t në ofrimin e shërbimeve [^promentesana]. Recovery Colleges sot ekzistojnë ndër të tjera në Bernë, në Zvicrën Lindore, në Gjenevë, në St.Gallen dhe në Cyrih [^rcbern]. Orientimi i Recovery-t u ankorua shkencërisht në psikiatrinë zvicerane ndër të tjera nga Rössler [^roessler2004].

:::easy{reading_time=2}
Recovery nuk u shpik në spital. Recovery u shpik nga vetë të prekurit.

Në Amerikë, në vitet 1970, pacientët filluan të shkruanin libra. Ata thanë: ne jemi më shumë se sëmundja jonë.

Një zë i njohur është Patricia Deegan. Ajo mori në moshën 17-vjeçare diagnozën skizofreni. Sot është doktore dhe ndihmon të tjerët.

Në Gjermani, Dorothea Buck ishte e rëndësishme. Ajo luftoi për një psikiatri më të mirë.

Sot Recovery është i njohur në mbarë botën — edhe nga OBSH-ja.
:::

:::quiz{id=q-4}
- q: "Kush e modeloi lëvizjen Recovery në fillim?"
  type: multiple-choice
  options:
    - text: "Industria farmaceutike."
      correct: false
    - text: "Njerëzit me përvojë të vetën psikiatrike."
      correct: true
      explanation: "Lëvizja lindi në SHBA në vitet 1970 nga Survivor-Movement."
    - text: "Administratat e spitaleve."
      correct: false

- q: "Kush është Patricia Deegan?"
  type: multiple-choice
  options:
    - text: "Një mjeke pa përvojë të vetën."
      correct: false
    - text: "Një pioniere e Recovery-t me diagnozë të vetën skizofrenie."
      correct: true
      explanation: "Diagnostikuar në 17 vjeç. Sot psikologe me doktoraturë dhe zë i njohur ndërkombëtarisht."
    - text: "Një studiuese zvicerane e kujdesit."
      correct: false
:::

:::flashcards{id=f-4}
- front: "Patricia Deegan"
  back: "Në 17 vjeç diagnozë skizofreni, sot psikologe me doktoraturë. Zë modelues i lëvizjes ndërkombëtare të Recovery-t."
- front: "Dorothea Buck"
  back: "Pioniere gjermane, e sterilizuar me forcë nga nazistët. Luftoi gjithë jetën për një psikiatri njerëzore. Frymëzoi EX-IN."
- front: "Survivor-Movement"
  back: "Lëvizja e ish-pacientëve psikiatrikë në SHBA të viteve 1970. Rrënja e lëvizjes Recovery."
- front: "ImROC"
  back: "Implementing Recovery through Organisational Change. Program britanik që nga 2007 që shoqëron shërbimet ofruese në transformimin drejt praktikës së orientuar nga Recovery."
:::

:::standard{reading_time=2}
Recovery nuk lindi në sallën e leksioneve dhe as në dhomën e trajtimit. Recovery lindi në rrugë — në iniciativat e ish-pacientëve që refuzuan të reduktoheshin në diagnozën e tyre.

Lëvizja filloi në vitet 1970 në Amerikën e Veriut, në të ashtuquajturin Survivor-Movement. Një nga zërat më të rëndësishëm të saj është Patricia Deegan. Në moshën 17-vjeçare mori diagnozën skizofreni. Një mjek i tha se nuk do të bënte kurrë një jetë normale. Sot është psikologe me doktoraturë dhe një nga pionieret më ndikuese të Recovery-t në botë.

Në hapësirën gjermanishtfolëse, Dorothea Buck ishte një zë i krahasueshëm. E sterilizuar me forcë gjatë nacionalsocializmit dhe e trajtuar disa herë në psikiatri, ajo luftoi gjithë jetën për një psikiatri njerëzore. Në vitin 1989, me iniciativën e Thomas Bock-ut, lindi në Hamburg seminari i parë trialogjik për psikozën — një format ku të prekurit, të afërmit dhe profesionistët flasin si të barabartë.

Stacione të rëndësishme që atëherë:

- **1993** — William Anthony jep përkufizimin shkencor të Recovery-t.
- **2003** — Studiuesit australianë përshkruajnë pesë faza të shërimit.
- **2007** — Në Mbretërinë e Bashkuar fillon programi ImROC, që orienton shërbimet ofruese drejt Recovery-t.
- **2011** — Modeli CHIME publikohet dhe bëhet standard ndërkombëtar.
- **2021** — OBSH-ja publikon udhëzimin për kujdesin shëndetësor mendor me bazë të të drejtave të njeriut.

Në Zvicër, fondacioni Pro Mente Sana sjell konceptin e Recovery-t në ofrimin e shërbimeve. Recovery Colleges sot ekzistojnë në Bernë, në Zvicrën Lindore, në Gjenevë, në St.Gallen dhe në Cyrih. Në Gjermani, EX-IN — Experienced Involvement — ka konsoliduar shoqërimin e shërimit si profesion.

Pra Recovery nuk është më prej kohësh një ide e jashtme. Është një praktikë e jetuar nga mijëra njerëz.
:::

:::standard-quiz{id=q-4-std}
- q: "Kush e modeloi lëvizjen Recovery në fillim?"
  type: multiple-choice
  options:
    - text: "Industria farmaceutike."
      correct: false
    - text: "Njerëz me përvojë të vetën psikiatrike."
      correct: true
      explanation: "Lëvizja lindi në vitet 1970 nga Survivor-Movement."
    - text: "Administratat e spitaleve."
      correct: false

- q: "Kush është Patricia Deegan?"
  type: multiple-choice
  options:
    - text: "Një mjeke pa përvojë të vetën."
      correct: false
    - text: "Një pioniere e Recovery-t me diagnozë të vetën skizofrenie, sot psikologe me doktoraturë."
      correct: true
      explanation: "Diagnostikuar në 17 vjeç, sot zë ndërkombëtar i lëvizjes Recovery."

- q: "Çfarë është EX-IN?"
  type: multiple-choice
  options:
    - text: "Një grup medikamentesh."
      correct: false
    - text: "Experienced Involvement — shoqërimi i shërimit si profesion i njohur."
      correct: true
      explanation: "Zhvilluar nga viti 2005 në Bremen, frymëzuar nga Dorothea Buck."
:::

:::standard-flashcards{id=f-4-std}
- front: "Ku lindi Recovery?"
  back: "Jo në sallën e leksioneve. Në iniciativat e ish-pacientëve psikiatrikë — Survivor-Movement i viteve 1970 në Amerikën e Veriut."
- front: "Patricia Deegan"
  back: "Në 17 vjeç diagnozë skizofreni, sot psikologe me doktoraturë. Një nga zërat më ndikues të lëvizjes Recovery."
- front: "Trialogu"
  back: "Format ku të prekurit, të afërmit dhe profesionistët flasin si të barabartë. Lindi në 1989 në Hamburg (Thomas Bock)."
- front: "Recovery Colleges në Zvicër"
  back: "Bernë, Zvicra Lindore, Gjenevë, St.Gallen, Cyrih. Vende mësimi për Recovery — të hapura për të gjithë."
:::


# 5. CHIME dhe CHIME-D
{#kap-5 reading_time=6}

Në vitin 2011, një ekip kërkimor nën drejtimin e Mary Leamy dhe Mike Slade në King's College London analizoi sistematikisht 97 artikuj shkencorë dhe 87 raporte të tjera për rrjedhat e shërimit [^leamy2011]. Ata donin të dinin: çfarë përshkruajnë njerëzit përsëri dhe përsëri kur tregojnë rrugën e tyre nëpër një sëmundje psikike?

Dolën pesë procese, shkronjat fillestare angleze të të cilave formojnë fjalën CHIME — fjala angleze për tingullin e këmbanës.

:::table{name="CHIME"}
| Shkronja | Procesi | Çfarë do të thotë |
|-----------|---------|-----------------|
| **C** | Connectedness · Lidhshmëri | Marrëdhënie, kontakte peer, familje, përkatësi, bashkësi |
| **H** | Hope and Optimism · Shpresë | Besim në ndryshim, motivim, besim në proces, modele |
| **I** | Identity · Identitet | Kush jam unë jashtë diagnozës? Imazh pozitiv i vetes, vlerë e vetes |
| **M** | Meaning and Purpose · Kuptim | Kuptim jete, vlera, role, qëllime, ndoshta spiritualitet |
| **E** | Empowerment · Vetëefikasitet | Të marrësh përgjegjësi, të vendosësh, të përdorësh forcat |
:::

CHIME është sot modeli më ndikues i Recovery-t në botë. Bird et al. konfirmuan në një studim validimi zbatueshmërinë e kuadrit [^bird2014]. Ai qëndron në themel të studimit britanik REFOCUS, një studim cluster-randomized [^slade2015refocus].

CHIME nuk është një model fazash dhe as një listë kontrolli. Ai përshkruan pesë tema që mbivendosen. Ndonjëherë njëra qëndron në plan të parë, ndonjëherë një tjetër. Në hapësirën gjermanishtfolëse, CHIME lidhet mirë me leximin „Shpresë — Fuqi — Kuptim" [^ameringschmolke2006].

## CHIME-D — dimensioni i gjashtë: Vështirësitë

Një zhvillim i rëndësishëm i modelit është CHIME-D. Stuart, Tansey dhe Quayle kanë konstatuar në një sintezë sistematike best-fit të literaturës cilësore të Recovery-t se në kuadrin origjinal CHIME mungon një dimension që shfaqet rregullisht në rrëfimet e përvojës: njohja e shprehur e vështirësive (Difficulties) — trauma, humbja, stigmatizimi dhe pasojat e sëmundjes [^stuart2017].

Prandaj ato e plotësuan modelin me shkronjën D:

- **C** – Connectedness · Lidhshmëri
- **H** – Hope · Shpresë
- **I** – Identity · Identitet
- **M** – Meaning · Kuptim
- **E** – Empowerment · Vetëefikasitet
- **D** – Difficulties · Vështirësi: të njohësh shprehimisht traumat, humbjet, stigmën dhe pasojat e sëmundjes

Hulumtimet tregojnë se mesatarisht rreth 54 % e përmbajtjes së rrëfimeve të Recovery-t bie mbi vështirësitë e përjetuara [^stuart2017]. Prandaj CHIME-D paralajmëron: orientimi i Recovery-t nuk duhet të kalojë në një optimizëm toksik. Ai duhet të lërë hapësirë për dhimbjen, për pikëllimin, për atë që ka qenë vërtet dhe është — dhe paralelisht ta mbajë vështrimin mbi burimet dhe ndryshimin.

Kërkimi aktual e validon CHIME-D si kornizë të qëndrueshme referimi për shërbimet e orientuara nga Recovery [^vanweeghel2024] [^hancock2025].

:::info{type=note title="Pse CHIME-D është i rëndësishëm për këtë workbook"}
Konceptet e Recovery-t kritikohen herë pas here sepse mund të minimizojnë vuajtjen ose të krijojnë një „detyrim ndaj shpresës".

CHIME-D e merr seriozisht këtë kritikë: shërimi nuk duhet të nënkuptojë që e rënda nuk ka më vend.

Në workbook-un dixhital kjo do të thotë: hapësirë për dhimbjen DHE për shpresën. Për humbjet DHE për qëllimet. Për atë që ishte DHE për atë që mund të bëhet.
:::

:::reflection{id=3 title="Ku qëndron ti në CHIME?"}
- Cila shkronjë (C, H, I, M, E) të flet më shumë tani?
- Cila ndihet më e rëndë tani?
- Kur mendon për dy javët e fundit: ku pati një shkëndijë të vogël drite — dhe cilës shkronje do t'ia caktoje atë?
:::

:::easy{reading_time=2}
Studiuesit gjetën në vitin 2011 pesë tema të rëndësishme në Recovery. Shkronjat fillestare angleze formojnë fjalën CHIME (anglisht për tingullin e këmbanës):

- **C** – Connectedness · Lidhshmëri
- **H** – Hope · Shpresë
- **I** – Identity · Identitet
- **M** – Meaning · Kuptim
- **E** – Empowerment · Vetëefikasitet

Më vonë u shtua një shkronjë tjetër:

- **D** – Difficulties · Vështirësi

D-ja është e rëndësishme. Recovery nuk duhet ta zvogëlojë të rëndën. Dhimbja dhe pikëllimi mund të kenë vend.
:::

:::quiz{id=q-5}
- q: "Për çfarë qëndron „D" në CHIME-D?"
  type: multiple-choice
  options:
    - text: "Diagnozë"
      correct: false
    - text: "Difficulties — Vështirësi (traumë, humbje, stigmë)"
      correct: true
      explanation: "Stuart, Tansey & Quayle (2017) treguan se ky dimension mungonte në CHIME-n origjinal."
    - text: "Depresion"
      correct: false

- q: "Cila shkronjë qëndron për „Lidhshmëri"?"
  type: multiple-choice
  options:
    - text: "C – Connectedness"
      correct: true
    - text: "I – Identity"
      correct: false
    - text: "E – Empowerment"
      correct: false

- q: "A është CHIME një listë për t'u shënuar?"
  type: true-false
  correct: false
  explanation: "Jo — CHIME përshkruan pesë tema që mbivendosen. Ndonjëherë njëra qëndron në plan të parë, ndonjëherë një tjetër."
:::

:::flashcards{id=f-5}
- front: "CHIME"
  back: "Connectedness · Hope · Identity · Meaning · Empowerment. Pesë procese të Recovery-t (Leamy et al. 2011)."
- front: "D-ja në CHIME-D"
  back: "Difficulties — vështirësi, traumë, humbje, stigmë, pasojat e sëmundjes. Recovery nuk duhet ta fshehë të rëndën (Stuart et al. 2017)."
- front: "Connectedness"
  back: "Lidhshmëri. Marrëdhënie, kontakte peer, familje, përkatësi, bashkësi."
- front: "Empowerment"
  back: "Vetëefikasitet. Të marrësh përgjegjësi, të marrësh vendime, të përdorësh forcat."
:::

:::standard{reading_time=2}
Në vitin 2011, një ekip kërkimor në King's College London analizoi mbi 180 studime dhe raporte dhe pyeti: çfarë përshkruajnë njerëzit përsëri dhe përsëri kur tregojnë rrugën e tyre të Recovery-t? Dolën pesë procese — dhe shkronjat e tyre fillestare angleze formojnë fjalën CHIME (anglisht për tingullin e këmbanës).

- **C — Connectedness · Lidhshmëri:** marrëdhënie, familje, kontakte peer, përkatësi, bashkësi.
- **H — Hope · Shpresë:** besimi në ndryshim. Modele. Besim në proces.
- **I — Identity · Identitet:** kush jam unë jashtë diagnozës? Një imazh pozitiv i vetes jashtë rolit të pacientit/es.
- **M — Meaning · Kuptim:** vlera, qëllime, role, ndonjëherë spiritualitet.
- **E — Empowerment · Vetëefikasitet:** të marrësh përgjegjësi. Të marrësh vendime. Të përdorësh forcat.

CHIME është sot modeli më i rëndësishëm ndërkombëtar i Recovery-t. Por nuk është një listë kontrolli dhe as një shkallë. Ai përshkruan pesë tema që mbivendosen. Ndonjëherë njëra qëndron në plan të parë, ndonjëherë një tjetër.

## D-ja në CHIME-D

Në vitin 2017, studiuesit konstatuan: në modelin CHIME mungon diçka. Diçka që shfaqet vazhdimisht në rrëfimet e Recovery-t — njohja e shprehur e vështirësive. Prandaj ato shtuan një shkronjë:

- **D — Difficulties · Vështirësi:** traumë, humbje, stigmë, pasojat e sëmundjes.

Hulumtimet tregojnë: rreth 54 % e përmbajtjes së rrëfimeve të Recovery-t flet për vështirësi të përjetuara. Prandaj CHIME-D paralajmëron: Recovery nuk duhet të kalojë në një optimizëm të imponuar. Duhet të ketë hapësirë për dhimbjen, pikëllimin dhe atë që ishte vërtet — paralelisht me vështrimin mbi burimet.

Për ty kjo do të thotë: në workbook e rënda ka vend. Po ashtu si shpresa.
:::

:::standard-quiz{id=q-5-std}
- q: "Për çfarë qëndron „D" në CHIME-D?"
  type: multiple-choice
  options:
    - text: "Diagnozë"
      correct: false
    - text: "Difficulties — Vështirësi (traumë, humbje, stigmë)"
      correct: true
      explanation: "Stuart, Tansey dhe Quayle treguan në 2017 se ky dimension mungonte në CHIME-n origjinal."
    - text: "Depresion"
      correct: false

- q: "Cila shkronjë qëndron për „Lidhshmëri"?"
  type: multiple-choice
  options:
    - text: "C — Connectedness"
      correct: true
    - text: "I — Identity"
      correct: false
    - text: "E — Empowerment"
      correct: false

- q: "A është CHIME një listë për t'u shënuar?"
  type: true-false
  correct: false
  explanation: "Jo — CHIME përshkruan pesë tema që mbivendosen. Ndonjëherë njëra qëndron në plan të parë, ndonjëherë një tjetër."
:::

:::standard-flashcards{id=f-5-std}
- front: "CHIME"
  back: "Connectedness · Hope · Identity · Meaning · Empowerment. Pesë procese të Recovery-t (Leamy et al. 2011)."
- front: "D-ja në CHIME-D"
  back: "Difficulties — vështirësi, traumë, humbje, stigmë. Recovery nuk duhet ta fshehë të rëndën."
- front: "CHIME — listë apo jo?"
  back: "Nuk është listë për t'u shënuar. Pesë tema që mbivendosen. Herë qëndron njëra në plan të parë, herë një tjetër."
- front: "Empowerment"
  back: "Vetëefikasitet. Të marrësh përgjegjësi, të marrësh vendime, të përdorësh forcat."
:::


# 6. Pesë faza të shërimit
{#kap-6 reading_time=3}

Nëse CHIME përshkruan pesë proceset e brendshme, atëherë modeli i Andresen, Oades dhe Caputi përshkruan fazat tipike të rrugës [^andresen2003] [^andresen2006].

:::table{name="Phasen-der-Genesung"}
| Faza | Shqip | Çfarë ndodh brenda |
|-------|---------|------------------------|
| **1. Moratorium** | Ngecje | Ndjenjë humbjeje, pashprese, tërheqjeje |
| **2. Awareness** | Zgjim | Shpresë e parë, të kuptosh: jo gjithçka është humbur |
| **3. Preparation** | Përgatitje | Të bësh inventar: çfarë mundem, çfarë më duhet? |
| **4. Rebuilding** | Rindërtim | Të ndërtosh në mënyrë aktive qëllime, role, marrëdhënie të reja |
| **5. Growth** | Rritje | Një jetë e mbushur — me ose pa simptoma të mbetura |
:::

Fazat nuk janë të ngurta. Është normale të kalosh disa herë nëpër të njëjtën fazë. Është gjithashtu normale të përjetosh veten njëkohësisht në dy faza — në një fushë të jetës në rritje, në një tjetër sërish në ngecje. Katër detyra qendrore përshkojnë të gjitha fazat [^andresen2003]: të gjesh shpresë, të rindërtosh identitetin, të gjesh kuptim, të marrësh përgjegjësi.

:::easy{reading_time=1}
Recovery shpesh ka faza. Tre studiues nga Australia kanë përshkruar pesë faza:

1. **Ngecje** — Gjithçka ndihet e rëndë dhe pa shpresë.
2. **Zgjim** — Vëren: ndoshta diçka është ende e mundur.
3. **Përgatitje** — Shikon se çfarë mund të bësh.
4. **Rindërtim** — Bën plane të reja.
5. **Rritje** — Jeton jetën tënde. Me simptoma ose pa to.

Ti mund të kërcesh midis fazave. Nuk është si një shkallë. Më shumë si një spirale.
:::

:::quiz{id=q-6}
- q: "Sa faza përshkruajnë Andresen, Oades dhe Caputi?"
  type: multiple-choice
  options:
    - text: "Tre"
      correct: false
    - text: "Pesë"
      correct: true
    - text: "Shtatë"
      correct: false

- q: "A janë fazat lineare?"
  type: true-false
  correct: false
  explanation: "Jo. Mund të kërcesh, të kalosh disa herë nëpër të njëjtën fazë ose të jesh njëkohësisht në dy faza."
:::

:::flashcards{id=f-6}
- front: "Moratorium"
  back: "Faza e parë: ngecje. Ndjenjë humbjeje, pashprese, tërheqjeje."
- front: "Awareness"
  back: "Faza e zgjimit. Shpresë e parë. Të kuptosh: jo gjithçka është humbur."
- front: "Growth"
  back: "Rritje — një jetë e mbushur me ose pa simptoma të mbetura."
- front: "Katër detyra në të gjitha fazat"
  back: "Të gjesh shpresë · të rindërtosh identitetin · të gjesh kuptim · të marrësh përgjegjësi."
:::

:::standard{reading_time=2}
Recovery rrallë rrjedh në vijë të drejtë. Tre studiues australianë — Andresen, Oades dhe Caputi — kanë nxjerrë nga shumë histori jetësore pesë faza tipike:

- **Moratorium (Ngecje)** — Gjithçka duket e rëndë. Ndihesh i/e humbur, tërhiqesh. Shpresa është larg.
- **Awareness (Zgjim)** — Një shkëndijë e parë: ndoshta jo gjithçka ka mbaruar.
- **Preparation (Përgatitje)** — Bën inventar. Çfarë mundem? Çfarë më duhet? Kush është aty?
- **Rebuilding (Rindërtim)** — Ndërton hap pas hapi role, qëllime dhe marrëdhënie të reja.
- **Growth (Rritje)** — Jeton një jetë që të bën të ndihesh mirë — me ose pa simptoma të mbetura.

E rëndësishme të dish: këto faza nuk janë shkallë. Është normale të kalosh disa herë nëpër të njëjtën fazë. Është normale të jesh në një fushë të jetës tashmë në rritje dhe në një tjetër sërish në ngecje. Kthimet mbrapsht janë pjesë e saj. Ato nuk do të thonë që ke dështuar.

Katër detyra përshkojnë të gjitha fazat: të gjesh shpresë, të rindërtosh identitetin, të gjesh kuptim, të marrësh përgjegjësi.

Pyet veten: në cilën fazë po ndihesh tani — ndoshta në disa njëkohësisht?
:::

:::standard-quiz{id=q-6-std}
- q: "A janë pesë fazat si një shkallë — njëra pas tjetrës?"
  type: multiple-choice
  options:
    - text: "Po, duhet t'i kalosh me radhë."
      correct: false
      explanation: "Jo — fazat nuk janë të ngurta. Kthimet mbrapsht dhe kërcimet janë normale."
    - text: "Jo. Mund të kërcesh, të përsërisësh ose të jesh njëkohësisht në disa."
      correct: true
      explanation: "Pikërisht. Recovery është më shumë një spirale sesa një shkallë."

- q: "Cila fazë përshkruan ngecjen në fillim?"
  type: multiple-choice
  options:
    - text: "Growth"
      correct: false
    - text: "Moratorium"
      correct: true
      explanation: "Moratorium = faza e pashpresës dhe e tërheqjes."
    - text: "Awareness"
      correct: false
:::

:::standard-flashcards{id=f-6-std}
- front: "Pesë faza"
  back: "Moratorium · Awareness · Preparation · Rebuilding · Growth. Nuk janë shkallë — kërcimet dhe kthimet mbrapsht janë normale."
- front: "Katër detyra në të gjitha fazat"
  back: "Të gjesh shpresë · të rindërtosh identitetin · të gjesh kuptim · të marrësh përgjegjësi."
- front: "Kthim mbrapsht — çfarë do të thotë kjo?"
  back: "Nuk është dështim. Por pjesë normale e rrugës. Recovery është një spirale, jo një vijë e drejtë."
:::


# 7. Tre nivele shërimi
{#kap-7 reading_time=3}

Në kërkim dallohen tre nivele [^slade2009]:

- **Shërimi klinik**: simptomat zvogëlohen, një diagnozë humbet rëndësinë.
- **Shërimi funksional**: ti mund të bësh sërish gjëra që janë të rëndësishme për ty: të punosh, të mësosh, të kujdesesh për marrëdhëniet, të menaxhosh përditshmërinë.
- **Shërimi personal**: gjen kuptim të ri, një imazh të ri të vetes, shpresë të re. E përjeton veten si dikush që mund t'i japë drejtim jetës — edhe kur jo gjithçka „ka ikur".

Tre nivelet mund të forcojnë njëri-tjetrin, por nuk duhet të ndodhin në këtë renditje.

:::reflection{id=4 title="Cili nivel është i rëndësishëm për ty?"}
- Kur imagjinon në një vit një jetë që ndihet mirë: çfarë do të ishte ndryshe?
- Cili nga tre nivelet — klinik, funksional, personal — ndihet më i rëndësishëm për ty tani?
- A ka diçka që e ke bërë me kënaqësi më parë dhe që dëshiron ta kthesh në jetë?
:::

:::easy{reading_time=1}
Ka tre lloje shërimi:

- **Klinik:** simptomat bëhen më të pakta.
- **Funksional:** mund të bësh sërish gjëra: të punosh, të mësosh, të kujdesesh për marrëdhëniet.
- **Personal:** përjeton kuptim dhe shpresë. Bashkëvendos për jetën tënde.

Më i rëndësishmi për Recovery është shërimi personal.
:::

:::quiz{id=q-7}
- q: "Cili nivel është kuptimi qendror i Recovery-t?"
  type: multiple-choice
  options:
    - text: "Shërimi klinik"
      correct: false
    - text: "Shërimi funksional"
      correct: false
    - text: "Shërimi personal"
      correct: true
      explanation: "Ky është leximi qendror i lëvizjes Recovery."

- q: "A duhet që tre nivelet të ndodhin në një renditje të caktuar?"
  type: true-false
  correct: false
  explanation: "Jo — mund të forcojnë njëri-tjetrin, por nuk duhet të ndodhin në renditje të caktuar."
:::

:::flashcards{id=f-7}
- front: "Tre nivele shërimi"
  back: "Klinik (simptoma) · funksional (përditshmëri, punë, marrëdhënie) · personal (kuptim, shpresë, vetëvendosje)."
- front: "Shërimi personal — më i rëndësishmi"
  back: "Zemra e lëvizjes Recovery. I mundur edhe kur simptomat klinike mbeten."
:::

:::standard{reading_time=2}
Në kërkimin e Recovery-t shpesh dallohet midis tre niveleve të shërimit — dhe ia vlen t'i dallosh:

- **Shërimi klinik** — simptomat bëhen më të pakta ose zhduken. Diagnoza humbet peshë. Ky është leximi i mjekësisë klasike.
- **Shërimi funksional** — mund të bësh sërish gjëra që janë të rëndësishme për ty. Të punosh ose të mësosh. Të menaxhosh një shtëpi. Të kujdesesh për miqësitë. Të strukturosh përditshmërinë.
- **Shërimi personal** — gjen kuptim të ri. Ndërton një identitet jashtë diagnozës. Përjeton veten si dikush që ka të drejtë t'i japë drejtim jetës. Shpresa kthehet.

Tre nivelet mund të mbështesin njëri-tjetrin. Por nuk duhet të ndodhin në këtë renditje. Disa njerëz përjetojnë shërim personal për një kohë të gjatë para se simptomat të zbuten. Të tjerë ndërtojnë së pari funksionin — dhe vërejnë vetëm më pas që edhe brenda po lëviz diçka.

Lëvizja Recovery vendos theksin qartë te shërimi personal. Sepse ai është i mundur edhe kur simptomat klinike mbeten. Nuk është e nevojshme të jesh „i shëruar" për të bërë një jetë të mirë.

Pyet veten: cili nga tre nivelet ndihet tani më i rëndësishëm për ty?
:::

:::standard-quiz{id=q-7-std}
- q: "Cili nivel qëndron në qendër të lëvizjes Recovery?"
  type: multiple-choice
  options:
    - text: "Shërimi klinik — vlen vetëm kur simptomat ikën."
      correct: false
    - text: "Shërimi personal — kuptim, shpresë, identitet jashtë diagnozës."
      correct: true
      explanation: "Pikërisht. Shërimi personal është i mundur edhe kur simptomat mbeten."
    - text: "Shërimi funksional — gjëja kryesore është që funksionon."
      correct: false

- q: "A duhet që tre nivelet të vijnë me radhë?"
  type: multiple-choice
  options:
    - text: "Po — së pari klinik, pastaj funksional, pastaj personal."
      correct: false
    - text: "Jo. Mund të mbështesin njëri-tjetrin, por nuk duhet të ndodhin në renditje të caktuar."
      correct: true
:::

:::standard-flashcards{id=f-7-std}
- front: "Tre nivele shërimi"
  back: "Klinik (simptoma) · funksional (përditshmëri, punë, marrëdhënie) · personal (kuptim, shpresë, identitet)."
- front: "Shërimi personal"
  back: "Zemra e Recovery-t. Të bësh një jetë të mirë — edhe kur simptomat mbeten."
- front: "Renditja?"
  back: "Nuk ka të caktuar. Disa njerëz përjetojnë shërim të brendshëm shumë kohë para se simptomat klinike të reduktohen."
:::


# 8. Shpresa — zemra
{#kap-8 reading_time=4}

Shpresa në pothuajse të gjitha modelet e Recovery-t është gjëja e parë që përmendet [^leamy2011] [^andresen2003] [^schrank2012]. Schrank dhe kolegët kanë dëshmuar: shpresa parashikon shërimin personal pavarësisht nga simptomat [^schrank2012].

Shpresa në kërkimin e Recovery-t nuk është optimizëm naiv. Nuk është as e kundërta e realizmit. Është një bindje konkrete, shpesh e qetë, se jeta jote mund të jetë më shumë se dita më e rëndë në të cilën je tani [^slade2013].

Mike Slade e përmbledh këtë gjetje kështu: shpresa është energjia që në fillim e vë në lëvizje vetë procesin e shërimit — pa të nuk fillon asgjë [^slade2013].

## Shpresa si burim i huazuar

Një ide qendrore e lëvizjes Recovery thotë: shpresa nuk duhet të vijë nga vetja jote. Ajo mund të mbahet dhe të huazohet nga të tjerët, derisa ta ndiesh sërish [^russinova1999] [^deegan1996] [^schrank2012]. Pikërisht këtë bëjnë peer-at e mirë, profesionistët e mirë, të afërmit e mirë: „Kur ti nuk mund të kesh shpresë tani, ne e mbajmë për ty."

Për profesionistët, shpresa nuk është një tipar karakteri, por një kompetencë profesionale — „hope-inspiring competence" sipas Russinova-s [^russinova1999].

:::reflection{id=5 title="Burimet e shpresës"}
- Çfarë të ka dhënë shpresë më parë — një njeri, një vend, një aktivitet, një mendim?
- Kush në rrethin tënd po mban tani shpresën për ty kur ti nuk e ndien?
- A ka një hap të vogël që mund të të zhvendosë sot drejt shpresës?
:::

:::easy{reading_time=1}
Shpresa është zemra e Recovery-t.

Shpresa nuk do të thotë: je gjithmonë i gëzuar. Shpresa do të thotë: ti beson se jeta jote mund të jetë më shumë se dita më e rëndë.

Më e rëndësishmja: nuk është e nevojshme të kesh shpresën i/e vetëm. Të tjerë mund ta mbajnë për ty. Derisa ta ndiesh sërish.

Një fjali e mirë: „Kur ti nuk ke shpresë tani, ne e mbajmë për ty."
:::

:::quiz{id=q-8}
- q: "Çfarë thotë kërkimi (Schrank et al. 2012) për shpresën?"
  type: multiple-choice
  options:
    - text: "Shpresa parashikon shërimin personal pavarësisht nga simptomat."
      correct: true
      explanation: "Shpresa është një parashikues — edhe kur simptomat mbeten."
    - text: "Shpresa vepron vetëm te sëmundjet e lehta."
      correct: false
    - text: "Shpresën duhet ta sjellësh gjithmonë vetë."
      correct: false

- q: "Çfarë do të thotë „shpresë e huazuar"?"
  type: multiple-choice
  options:
    - text: "Të blesh shpresë nga familja."
      correct: false
    - text: "Të tjerët e mbajnë shpresën për ty, derisa ta ndiesh vetë."
      correct: true
      explanation: "Një ide qendrore e lëvizjes Recovery."
:::

:::flashcards{id=f-8}
- front: "Shpresa e huazuar"
  back: "Kur ti nuk mund të kesh shpresë, peer-at, profesionistët ose të afërmit e mbajnë për ty — derisa ta ndiesh sërish."
- front: "Shpresa në kërkimin e Recovery-t"
  back: "Jo optimizëm naiv — por bindje e qetë, shpesh kokëfortë, se jeta jote mund të jetë më shumë se dita më e rëndë."
- front: "Hope-inspiring competence"
  back: "Russinova 1999: të frymëzosh shpresë është një kompetencë profesionale, jo tipar karakteri."
:::

:::standard{reading_time=2}
Shpresa në pothuajse të gjitha modelet e Recovery-t është gjëja e parë që përmendet. Dhe kjo nuk është rastësi.

Mike Slade e përmbledh kërkimin kështu: **„Shpresa është energjia që e vë në lëvizje vetë procesin e shërimit — pa të nuk fillon asgjë."**

Shpresa në leximin e Recovery-t nuk është optimizëm naiv. As e kundërta e realizmit. Është një bindje e qetë, ndonjëherë kokëfortë: se jeta jote mund të jetë më shumë se dita më e rëndë në të cilën je tani.

## Shpresa mund të huazohet

Një nga idetë më të rëndësishme të lëvizjes Recovery thotë: **shpresa nuk duhet të vijë nga vetja jote.** Ajo mund të mbahet dhe të huazohet nga të tjerët, derisa ta ndiesh sërish.

Pikërisht këtë bëjnë peer-at e mirë, profesionistët e mirë, të afërmit e mirë. Ata thonë — ndonjëherë me fjalë, ndonjëherë vetëm me praninë e tyre:

> „Kur ti nuk mund të kesh shpresë tani, ne e mbajmë për ty. Sa kohë që duhet."

Kjo nuk është një teknikë terapie. Është qëndrim. Për profesionistët, shpresa nuk është një çështje e gjendjes së tyre shpirtërore, por një kompetencë profesionale — *hope-inspiring competence* (Russinova).

Pyet veten:

- Kush në jetën tënde po mban tani shpresën për ty?
- Kush mund ta bënte, nëse pyet?
- Dhe për kë po mban ti vetë ndoshta shpresën — pa e vënë re?
:::

:::standard-quiz{id=q-8-std}
- q: "Çfarë do të thotë „shpresë e huazuar"?"
  type: multiple-choice
  options:
    - text: "Duhet ta fitosh shpresën vetë."
      correct: false
    - text: "Të tjerët e mbajnë shpresën për ty, derisa ta ndiesh sërish vetë."
      correct: true
      explanation: "Një ide qendrore e lëvizjes Recovery. Shpresa nuk është vetëm një arritje individuale."

- q: "A është shpresa në kërkimin e Recovery-t e njëjta gjë me optimizmin naiv?"
  type: multiple-choice
  options:
    - text: "Po, thjesht optimizëm."
      correct: false
    - text: "Jo. Një bindje e qetë, shpesh kokëfortë, se jeta jote mund të jetë më shumë se dita më e rëndë."
      correct: true
:::

:::standard-flashcards{id=f-8-std}
- front: "Shpresa në Recovery"
  back: "Jo optimizëm naiv — por bindja e qetë se jeta jote mund të jetë më shumë se dita më e rëndë."
- front: "Shpresa e huazuar"
  back: "Kur ti nuk mund të kesh shpresë, peer-at, profesionistët ose të afërmit e mbajnë për ty — derisa ta ndiesh sërish."
- front: "Citati i Slade-it"
  back: "„Shpresa është energjia që e vë në lëvizje vetë procesin e shërimit — pa të nuk fillon asgjë."
:::


# 9. Empowerment dhe vetëvendosje
{#kap-9 reading_time=4}

Fjala Empowerment është e lidhur ngushtë me Recovery-n. Ajo vjen nga lëvizjet e të drejtave qytetare dhe emancipuese të shekullit të 20-të [^herriger2014] [^knufseibert2004] [^knuf2026].

Në vitet 1980 koncepti u përfshi edhe në shërbimet psikiatrike. Empowerment do të thotë: aftësimi i vetes. Pjesëmarrje aktive. Të marrësh përgjegjësi atje ku dëshiron dhe mund ta mbash. Rogers dhe kolegët zhvilluan për këtë një shkallë të parë Empowerment-i të mbështetur empirikisht [^rogers1997]. Në hapësirën gjermanishtfolëse, „Selbstbefähigung fördern" është vepra standarde [^knufseibert2004].

## Shared Decision-Making

Empowerment në praktikë do të thotë mbi të gjitha një gjë: vendime të përbashkëta në vend të udhëzimeve. Profesionistët vendosin së bashku me ty, jo për ty [^charles1997] [^deegandrake2006]. Studimet tregojnë: kush përfshihet në vendime është më i kënaqur dhe arrin shpesh rezultate më të mira [^joosten2008] [^slade2017sdm].

## Personal Medicine

Pat Deegan ka krijuar termin Personal Medicine: gjërat jo-medikamentoze që e ndihmojnë një person të qëndrojë i shëndoshë — gjumi, një qen, një shëtitje e caktuar, të kënduarit në kor, një telefonatë në mbrëmje. Personal Medicine kuptohet në lëvizjen Recovery si i barabartë me medikamentet dhe përfshihet në marrëveshjet e trajtimit [^deegan2005].

## Direktivat paraprake dhe Joint Crisis Plans

Një instrument konkret Empowerment-i janë marrëveshjet e trajtimit ose Joint Crisis Plans — marrëveshje në të cilat, në një gjendje të qëndrueshme, mbahet shënim se çfarë duhet të ndodhë në krizë dhe çfarë jo. Henderson dhe kolegët treguan në një RCT se Joint Crisis Plans i reduktojnë ndjeshëm shtrimet me detyrim [^henderson2004].

:::easy{reading_time=2}
Empowerment do të thotë: ti ke të drejtën të vendosësh. Ke fuqi mbi jetën tënde.

Në psikiatri shpesh kjo do të thotë: vendosim së bashku. Jo: mjeku vendos i vetëm.

Ti ke të drejtën të bësh pyetje. Ke të drejtën të thuash jo. Ke të drejtën të kërkosh një mendim të dytë.

Ka edhe „Personal Medicine". Janë gjëra përveç medikamenteve që ndihmojnë: një qen, një shëtitje, një kor, një mik i mirë. Këto gjëra janë po aq të rëndësishme sa medikamentet.
:::

:::quiz{id=q-9}
- q: "Çfarë do të thotë „Shared Decision-Making"?"
  type: multiple-choice
  options:
    - text: "Mjeku vendos i vetëm."
      correct: false
    - text: "Profesionisti dhe i preku vendosin së bashku."
      correct: true
      explanation: "Charles, Gafni & Whelan 1997 e kanë konsoliduar termin."
    - text: "Familja vendos."
      correct: false

- q: "Çfarë do të thotë „Personal Medicine" (Pat Deegan)?"
  type: multiple-choice
  options:
    - text: "Medikamente të personalizuara sipas profilit të ADN-së."
      correct: false
    - text: "Gjëra jo-medikamentoze që e ndihmojnë një person të qëndrojë i shëndoshë."
      correct: true
      explanation: "Qen, shëtitje, kor, këndim — të integrueshme në marrëveshjet e trajtimit."

- q: "Çfarë tregon RCT-ja për Joint Crisis Plans (Henderson 2004)?"
  type: multiple-choice
  options:
    - text: "Nuk kanë efekt të matshëm."
      correct: false
    - text: "Reduktojnë ndjeshëm shtrimet me detyrim."
      correct: true
:::

:::flashcards{id=f-9}
- front: "Empowerment"
  back: "Aftësimi i vetes. Pjesëmarrje aktive. Të marrësh përgjegjësi atje ku dëshiron dhe mund ta mbash."
- front: "Personal Medicine"
  back: "Pat Deegan: gjëra jo-medikamentoze që të mbajnë të shëndoshë — gjumi, lëvizja, marrëdhëniet, hobi. Të barabarta me medikamentet."
- front: "Joint Crisis Plan"
  back: "Marrëveshje në gjendje të qëndrueshme: çfarë duhet të ndodhë në krizë, çfarë jo? RCT (Henderson 2004): redukton shtrimet me detyrim."
- front: "Shared Decision-Making"
  back: "Profesionisti dhe i preku vendosin së bashku — jo udhëzim dhe bindje."
:::

:::standard{reading_time=2}
Empowerment do të thotë aftësimi i vetes. Ti ke të drejtën të vendosësh — për jetën tënde dhe trajtimin tënd.

Kjo tingëllon e vetëkuptueshme, por në përditshmërinë e psikiatrisë shpesh nuk është. Për një kohë të gjatë vlente: profesionisti vendos, pacienti zbaton. Recovery e zhvendos qartë këtë pikë — drejt **përgjegjësisë së përbashkët**.

## Tre mjete konkrete

**Shared Decision-Making** — vendimet merren së bashku. Ti pyet se çfarë rekomandohet. Ti thua se çfarë i përshtatet ty dhe jetës sate. Studimet tregojnë: kush përfshihet është më i kënaqur dhe arrin rezultate më të mira.

**Personal Medicine** (Pat Deegan) — jo vetëm medikamentet ndihmojnë. Edhe ajo që të mban si person të shëndoshë: një qen, një shëtitje në mëngjes, një kor, një telefonatë në mbrëmje, kopshti, shëtitja malore. Në lëvizjen Recovery, Personal Medicine është **e barabartë** me trajtimin mjekësor — dhe i përket çdo marrëveshjeje trajtimi.

**Joint Crisis Plan** — një marrëveshje që mban shënim me ekipin tënd në gjendje të qëndrueshme: çfarë duhet të ndodhë në krizë? Çfarë jo? Kë dua të informoj? Cilat medikamente i toleroj, cilat jo? Një RCT (Henderson 2004) tregon: plane të tilla reduktojnë ndjeshëm shtrimet me detyrim.

## Çfarë nuk do të thotë Empowerment

Empowerment nuk do të thotë: t'ia dalësh çdo gjëje i/e vetëm. Nuk do të thotë: të jesh kundër profesionistëve. Do të thotë: zëri yt ka rëndësi — krah zërit profesional. Të dyja së bashku janë më shumë.

Pyet veten: ku ke të drejtë tashmë të vendosësh? Ku dëshiron të kesh më shumë zë?
:::

:::standard-quiz{id=q-9-std}
- q: "Çfarë do të thotë Shared Decision-Making?"
  type: multiple-choice
  options:
    - text: "Ti vendos i vetëm, mjeku hesht."
      correct: false
    - text: "Profesionisti dhe ti vendosni së bashku."
      correct: true
      explanation: "Pikërisht. Zëri yt ka rëndësi krah zërit profesional."

- q: "Çfarë është „Personal Medicine" sipas Pat Deegan?"
  type: multiple-choice
  options:
    - text: "Medikamente të personalizuara pas testit të ADN-së."
      correct: false
    - text: "Gjërat jo-medikamentoze që të mbajnë të shëndoshë — qen, shëtitje, kor, mik/e."
      correct: true
      explanation: "Të barabarta me medikamentet dhe pjesë e çdo marrëveshjeje trajtimi."

- q: "Çfarë sjell një Joint Crisis Plan?"
  type: multiple-choice
  options:
    - text: "Është një detyrim që pothuajse nuk ndikon."
      correct: false
    - text: "Redukton shtrimet me detyrim — i dëshmuar nga një RCT (Henderson 2004)."
      correct: true
:::

:::standard-flashcards{id=f-9-std}
- front: "Empowerment"
  back: "Aftësimi i vetes. Ti ke të drejtën të vendosësh — për jetën tënde dhe trajtimin tënd. Jo: t'ia dalësh çdo gjëje i vetëm."
- front: "Shared Decision-Making"
  back: "Profesionisti dhe ti vendosni së bashku. Rezultate më të mira, kënaqësi më e madhe."
- front: "Personal Medicine"
  back: "Pat Deegan: gjërat jo-medikamentoze që të mbajnë të shëndoshë. Të barabarta me medikamentet."
- front: "Joint Crisis Plan"
  back: "Marrëveshje në gjendje të qëndrueshme: çfarë duhet të ndodhë në krizë, çfarë jo? Redukton shtrimet me detyrim."
:::


# 10. Salutogjeneza — të qëndrosh i shëndoshë
{#kap-10 reading_time=3}

Mendimi i orientuar nga Recovery qëndron afër konceptit të salutogjenezës [^antonovsky1979] [^antonovsky1997]. Në vend që të pyesë „Çfarë i bën njerëzit të sëmurë?" (patogjeneza), salutogjeneza pyet „Çfarë i mban njerëzit të shëndoshë?"

Antonovsky identifikoi ndjenjën e koherencës (Sense of Coherence) si faktor qendror mbrojtës — aftësinë për ta përjetuar jetën e vet si të kuptueshme, të menaxhueshme dhe me kuptim. Tre përbërësit korrespondojnë në mënyrë të dukshme me proceset CHIME dhe me treshen „Shpresë — Fuqi — Kuptim".

Në hapësirën gjermanishtfolëse, Schmolke i ka bërë konceptet salutogjenetike të dobishme për njerëzit me diagnozë skizofrenie [^schmolke2001]. Salutogjeneza dhe Recovery përshkruhen rregullisht në literaturën DACH si dy anët e të njëjtit qëndrim — të orientuar nga burimet dhe jo nga deficitet [^knuf2026] [^ameringschmolke2012].

:::info{type=note title="Tre përbërësit e ndjenjës së koherencës sipas Antonovsky"}
- **Kuptueshmëria** (Comprehensibility): jeta ime ka lidhje dhe kuptim.
- **Menaxhueshmëria** (Manageability): mund të përballem me atë që vjen — vetë ose me ndihmë.
- **Domethënia** (Meaningfulness): ia vlen të angazhohem.
:::

:::easy{reading_time=1}
Mjekësia shpesh pyet: çfarë i bën njerëzit të sëmurë? Kjo quhet patogjenezë.

Salutogjeneza pyet ndryshe: çfarë i mban njerëzit të shëndoshë?

Studiuesi Aaron Antonovsky gjeti tre pika të rëndësishme:

- E kuptoj jetën time.
- Mund të përballem me gjëra të vështira — vetë ose me ndihmë.
- Jeta ime ka kuptim.

Kur këto tre pika janë aty, je më i fortë ndaj ngarkesave.
:::

:::quiz{id=q-10}
- q: "Cili është ndryshimi midis patogjenezës dhe salutogjenezës?"
  type: multiple-choice
  options:
    - text: "Patogjeneza është më e re."
      correct: false
    - text: "Patogjeneza pyet për sëmundjen — salutogjeneza për shëndetin."
      correct: true
    - text: "Patogjeneza vlen vetëm për sëmundjet trupore."
      correct: false

- q: "Kush e zhvilloi konceptin e salutogjenezës?"
  type: multiple-choice
  options:
    - text: "Sigmund Freud"
      correct: false
    - text: "Aaron Antonovsky"
      correct: true
:::

:::flashcards{id=f-10}
- front: "Salutogjeneza"
  back: "Çfarë i mban njerëzit të shëndoshë? (Antonovsky 1979). E kundërta e patogjenezës — pyetjes „Çfarë e bën sëmundjen?"."
- front: "Ndjenja e koherencës"
  back: "Kuptueshmëri · Menaxhueshmëri · Domethënie. Faktor mbrojtës sipas Antonovsky-t."
:::

:::standard{reading_time=2}
Mjekësia klasike pyet: **„Çfarë i bën njerëzit të sëmurë?"** Kjo quhet patogjenezë. Ajo kërkon shkaqe, rreziqe, deficite.

Sociologu Aaron Antonovsky e ktheu pyetjen përmbys. Ai pyeti: **„Çfarë i mban njerëzit të shëndoshë — edhe nën ngarkesë?"** Kjo quhet salutogjenezë.

## Ndjenja e koherencës

Antonovsky vërejti: njerëzit që i mbijetojnë mirë krizave të rënda të jetës ndajnë shpesh një qëndrim të caktuar të brendshëm. Ai e quajti atë **ndjenja e koherencës** dhe përshkroi tre përbërës:

- **Kuptueshmëria** — jeta ime ka lidhje. Ajo që më ndodh mund të vendoset diku.
- **Menaxhueshmëria** — mund të përballem me atë që vjen. Vetë ose me ndihmë.
- **Domethënia** — ia vlen të angazhohem. Jeta ime ka drejtim.

Këta tre përbërës tingëllojnë familjar. Janë çuditërisht afër pesë proceseve të CHIME-s dhe treshes „Shpresë — Fuqi — Kuptim".

## Pse kjo është e rëndësishme

Salutogjeneza dhe Recovery ndajnë të njëjtin qëndrim bazë: të orientuar nga burimet, jo nga deficitet. Ti nuk shihesh si një paketë simptomash, por si njeri me forca, përvoja, marrëdhënie — edhe atëherë kur shumë gjëra janë të rënda.

Në literaturën DACH (Schmolke; Amering & Schmolke) salutogjeneza dhe Recovery përshkruhen prandaj shpesh si dy anët e të njëjtës medalje.

Pyet veten: çfarë të mban të shëndoshë — edhe sot, edhe tani?
:::

:::standard-quiz{id=q-10-std}
- q: "Çfarë pyet salutogjeneza — në kundërshtim me patogjenezën?"
  type: multiple-choice
  options:
    - text: "Çfarë i bën njerëzit të sëmurë?"
      correct: false
      explanation: "Kjo është patogjeneza. Salutogjeneza pyet të kundërtën."
    - text: "Çfarë i mban njerëzit të shëndoshë — edhe nën ngarkesë?"
      correct: true
      explanation: "Pyetja që bëri Antonovsky."

- q: "Cilët tre përbërës i përkasin ndjenjës së koherencës?"
  type: multiple-choice
  options:
    - text: "Kuptueshmëri · Menaxhueshmëri · Domethënie"
      correct: true
      explanation: "Treshja e Antonovsky-t. Çuditërisht afër „Shpresë — Fuqi — Kuptim"."
    - text: "Shpresa · besimi · dashuria"
      correct: false
:::

:::standard-flashcards{id=f-10-std}
- front: "Salutogjeneza"
  back: "Çfarë i mban njerëzit të shëndoshë? (Antonovsky). E kundërta e patogjenezës — pyetjes „Çfarë e bën sëmundjen?"."
- front: "Ndjenja e koherencës"
  back: "Kuptueshmëri · Menaxhueshmëri · Domethënie. Faktor mbrojtës nën ngarkesë."
- front: "Salutogjeneza dhe Recovery"
  back: "Dy anët e të njëjtit qëndrim: të orientuar nga burimet, jo nga deficitet. Ti je më shumë se simptomat e tua."
:::


# 11. Stigma dhe vetëstigma
{#kap-11 reading_time=4}

Stigma është një nga pengesat më të mëdha të Recovery-t. Goffman e ka konsoliduar termin për shkencat shoqërore: stigma është një tipar që e zhvlerëson një person në sytë e të tjerëve [^goffman1963].

## Tre nivele të stigmës

Corrigan dhe Watson dallojnë tre nivele [^corrigan2002]:

- **Stigma publike**: paragjykime në shoqëri („të sëmurët psikikë janë të rrezikshëm").
- **Stigma strukturore**: diskriminim në ligje, treg pune, sigurime.
- **Vetëstigma** (stigma e brendësuar): ti i merr figurat negative si imazh të vetes.

## Vetëstigma — kur stuhia kthehet nga brenda

Corrigan dhe kolegët e përshkruajnë vetëstigmën si një proces regresiv në katër hapa: të perceptosh, të pajtohesh, të aplikosh, të vuash — me pasoja për vlerën e vetes, vetëefikasitetin dhe rrjedhën e sëmundjes [^corrigan2011].

Lajmi i mirë: vetëstigma është e ndryshueshme. Rishikimet sistematike tregojnë se ndërhyrjet psikosociale — sidomos në grupe — mund ta reduktojnë stigmën e brendësuar [^yanos2015] [^buechter2023]. Edhe programet anti-stigma me kontakt të drejtpërdrejtë me njerëz me përvojë jetësore tregojnë në meta-analiza efekte të vogla deri mesatare [^corrigan2012] [^thornicroft2016].

Në rrëfimet e përvojës së shoqëruesve të shërimit [^utschakowski2009] del vazhdimisht një mendim: nuk është vetë diagnoza ajo që dëmton më shumë. Është ajo që diagnoza bën nga një njeri në sytë e të tjerëve — dhe ajo që personi i prekur fillon të besojë pastaj për veten. Vetëstigma lind pikërisht në këtë vijë qepëse.

:::reflection{id=6 title="Zëra të brendshëm"}
- Cilat fjali i thua vetes për sëmundjen tënde ose për sëmundjen e personit që shoqëron?
- Cilat nga këto fjali nuk janë zë i yti, por figura të marra nga jashtë?
- Cila do të ishte një version më miqësor i së njëjtës të vërtetë?
:::

:::easy{reading_time=2}
Stigma do të thotë: të bëhesh i keq për diçka. Për shembull: sepse ke një diagnozë.

Ka stigmë në tre fusha:

- Në shoqëri — paragjykime, fjalë të këqija.
- Në rregulla dhe ligje — p.sh. vështirësi me sigurime.
- Brenda vetes — beson gjëra të këqija për veten.

E fundit quhet vetëstigma. Është e rrezikshme. Të bën të vogël para se ta bëjnë të tjerët.

Lajmi i mirë: vetëstigma mund të ndryshojë. Të folurit ndihmon. Të takosh të tjerë që përjetojnë të njëjtën gjë gjithashtu ndihmon.
:::

:::quiz{id=q-11}
- q: "Çfarë është vetëstigma?"
  type: multiple-choice
  options:
    - text: "Stigma që më bëjnë të tjerët."
      correct: false
    - text: "Kur i marr figurat negative si imazh të vetes."
      correct: true
      explanation: "Corrigan & Watson 2002 e përshkruajnë këtë si proces regresiv."

- q: "Cila metodë e redukton stigmën më efektshëm?"
  type: multiple-choice
  options:
    - text: "Heshtja."
      correct: false
    - text: "Kontakti i drejtpërdrejtë me njerëz me përvojë të jetuar."
      correct: true
      explanation: "Thornicroft et al. 2016 e tregojnë këtë në një meta-analizë."

- q: "A është vetëstigma e ndryshueshme?"
  type: true-false
  correct: true
  explanation: "Po — ndërhyrjet psikosociale, sidomos në grupe, reduktojnë stigmën e brendësuar (Yanos 2015)."
:::

:::flashcards{id=f-11}
- front: "Tre nivelet e stigmës"
  back: "Stigma publike · stigma strukturore · vetëstigma (stigma e brendësuar)."
- front: "Vetëstigma"
  back: "Kur i merr figurat negative shoqërore si imazh të vetes. E ndryshueshme."
- front: "Metoda më efektive anti-stigma"
  back: "Kontakti personal i drejtpërdrejtë me njerëz me përvojë të jetuar (Corrigan et al. 2012; Thornicroft et al. 2016)."
:::

:::standard{reading_time=2}
Stigma është një nga pengesat më të mëdha në rrugën e Recovery-t. Sociologu Erving Goffman e përshkroi stigmën si një tipar që e zhvlerëson një person në sytë e të tjerëve.

## Tre nivele

Patrick Corrigan dallon tre nivele në të cilat vepron stigma:

- **Stigma publike** — paragjykime në shoqëri. „Të sëmurët psikikë janë të rrezikshëm." „Mblidhu."
- **Stigma strukturore** — diskriminim në ligje, treg pune, sigurime, autoritete.
- **Vetëstigma** — i merr figurat negative nga jashtë si imazh të vetes.

## Kur stuhia kthehet nga brenda

Vetëstigma është veçanërisht tinëzare. Të bën të vogël — para se të tjerët të përpiqen. Corrigan përshkruan një proces në katër hapa: të perceptosh, të pajtohesh, të aplikosh, të vuash. Rezultati: më pak vlerë e vetes, më pak vetëefikasitet, shpesh edhe një rrjedhë e sëmundjes më e vështirë.

Në rrëfimet e përvojës së shoqëruesve të shërimit del vazhdimisht një mendim: **nuk është vetë diagnoza ajo që dëmton më shumë. Dëmtuese është ajo që diagnoza bën nga një njeri në sytë e të tjerëve — dhe ajo që personi fillon të besojë pastaj për veten.**

## Lajmi i mirë

Vetëstigma është e ndryshueshme. Kërkimet tregojnë: ndërhyrjet psikosociale — sidomos në grupe — reduktojnë stigmën e brendësuar. Më efektivi kundër stigmës publike është **kontakti i drejtpërdrejtë** me njerëz me përvojë të jetuar.

Ti nuk je diagnoza jote. Ti je një njeri me një histori, me vlera, me marrëdhënie, me aftësi.

Pyet veten: cilat fjali i thua vetes për sëmundjen tënde — dhe cilat prej tyre janë në fakt zëra të marrë nga jashtë?
:::

:::standard-quiz{id=q-11-std}
- q: "Çfarë është vetëstigma?"
  type: multiple-choice
  options:
    - text: "Stigma që më bëjnë të tjerët."
      correct: false
    - text: "Kur i marr figurat negative shoqërore si imazh të vetes."
      correct: true
      explanation: "Corrigan & Watson 2002: një proces regresiv në katër hapa."

- q: "Çfarë vepron më mirë kundër stigmës publike?"
  type: multiple-choice
  options:
    - text: "Të heshtësh dhe të fshihesh."
      correct: false
    - text: "Kontakti i drejtpërdrejtë midis popullsisë së përgjithshme dhe njerëzve me përvojë të jetuar."
      correct: true
      explanation: "Thornicroft et al. 2016: takimi ndryshon figurat."

- q: "A është vetëstigma e ndryshueshme?"
  type: multiple-choice
  options:
    - text: "Jo — është një herë e përgjithmonë e fiksuar."
      correct: false
    - text: "Po — sidomos në grupe dhe përmes ndërhyrjeve psikosociale."
      correct: true
:::

:::standard-flashcards{id=f-11-std}
- front: "Tre nivelet e stigmës"
  back: "Stigma publike · stigma strukturore · vetëstigma (e brendësuar)."
- front: "Vetëstigma"
  back: "Kur beson për veten figurat negative nga jashtë. Të bën të vogël para se të tjerët ta bëjnë. E ndryshueshme."
- front: "Çfarë vepron kundër stigmës?"
  back: "Kontakti i drejtpërdrejtë me njerëz me përvojë të jetuar. Të folurit. Grupet. Të ndarit e historive."
- front: "Ti nuk je diagnoza jote"
  back: "Ti je një njeri me një histori, me vlera, me marrëdhënie, me aftësi."
:::


# Nga pacienti tek eksperti i jetës sate
{#kap-shift reading_time=8}

Nëse ke qenë gjatë në trajtim psikiatrik — ndoshta vite, ose dekada — atëherë kjo ka bërë diçka me ty. Jo vetëm sëmundja. Edhe roli.

Në mjekësinë klasike ka një ndarje të qartë detyrash: profesionisti di. Pacienti/ja zbaton. Diagnoza shpjegon çfarë po ndodh. Medikamenti ose terapia e bën sërish të mirë. Kjo logjikë funksionon mirë te shumë sëmundje trupore. Te vuajtja shpirtërore arrin në kufij që në tridhjetë vitet e fundit janë bërë gjithnjë e më të dukshëm.

## Çfarë mund të ketë bërë roli i gjatë me ty

Ndoshta njeh një ose disa nga këto:

- Ke mësuar të përshkruash veten përmes një diagnoze. „Unë jam bipolar." „Unë jam borderlinerke." „Unë jam një rast kronik."
- Ke mësuar se dikush tjetër di më mirë çfarë është e mirë për ty — mjekia, terapisti, ekipi i trajtimit.
- Ke mësuar se ndjesia jote shihet me dyshim — si „mungesë njohjeje të sëmundjes" ose „mosbindje".
- Ke mësuar të presësh — për takimin e ardhshëm, medikamentin e ardhshëm, metodën e ardhshme që do të veprojë më në fund.
- Ke mësuar se shërimi është diçka që i bëhet ty. Jo diçka që e bën ti.

Kjo nuk është dobësi personale. Kjo është një reagim i mësuar. Në kërkim quhet *pafuqia e mësuar* — dhe shfaqet kudo ku njerëzit jetojnë për kohë të gjatë në sisteme në të cilat kanë pak kontroll [^seligman1975].

Patricia Deegan, një nga zërat më modelues të lëvizjes Recovery, ka krijuar për këtë një term shumë të mprehtë: *spirit breaking* [^deegan1990]. Ajo përshkruan kështu se si sistemet ndihmëse ndonjëherë bëjnë të kundërtën e asaj që duhet të bëjnë — se si thyejnë ndjenjën e vetes, vetë-pushtetin, zërin e njerëzve, në vend që t'i forcojnë. Jo nga qëllimi i keq. Por sepse e parashikon kështu logjika e sistemit.

## Paradigma që bllokon shërimin

Larry Davidson dhe David Roe e kanë formuluar shkencërisht këtë dallim [^davidsonroe2007]. Ata flasin për dy kuptime shumë të ndryshme të Recovery-t:

- **Recovery FROM** — Shërim NGA një sëmundje. Ky është leximi mjekësor: simptomat kthehen, funksioni kthehet, diagnoza në rastin më të mirë mbetet pas teje.
- **Recovery IN** — Shërim ME një sëmundje. Ky është leximi personal: të bësh një jetë që të mbush, edhe nëse simptomat janë ende aty.

Të dyja janë të mundura. Të dyja janë të vlefshme. Por ndjekin logjika krejt të ndryshme. *Recovery FROM* ndodh në dhomën e trajtimit — ti je marrëse pasive. *Recovery IN* ndodh në jetën tënde — ti je personi që vepron.

Studiuesja holandeze e Recovery-t Wilma Boevink e thotë edhe më drejtpërdrejt [^boevink2017]: për shumë njerëz me sëmundje të rënda psikike, sistemi psikiatrik nuk është para së gjithash një sistem shërimi. Është një nga disa mjete në një rrugë më të gjatë. Kush e kupton këtë — dhe fillon ta përdorë psikiatrinë si mjet në vend që ta përjetojë veten si objekt të saj — zhvendos diçka themelore.

## Si duket zhvendosja në praktikë

Zhvendosja ndodh në hapa të vegjël. Rrallë ka një moment të bujshëm. Ja disa shembuj se si mund të duket:

:::table{name="Vom-Patient-zum-Experten"}
| Nga roli i pacientit/es … | … te qëndrimi i ekspertit/es |
|-----------------------|--------------------------|
| „Më thoni çfarë të bëj." | „Çfarë rekomandoni — dhe çfarë i përshtatet jetës time?" |
| „Nuk do të bëhet kurrë më mirë." | „Sot ishte e rëndë. Të shohim çfarë sjell java tjetër." |
| „Mjeku im e di çfarë është e mirë për mua." | „Vendosim së bashku — dhe unë kam të drejtën të bëj pyetje në mes." |
| „Unë jam diagnoza ime." | „Kam një diagnozë. Ajo nuk është gjithçka që jam." |
| „Kam dështuar." | „Kam tani një ditë të rëndë. Kjo është informacion, jo gjykim." |
| „Ndoshta ekipi do të m'i heqë medikamentet nëse i tregoj për këtë." | „Ky efekt anësor më rëndon. A mund të shqyrtojmë alternativat së bashku?" |
| „Duhet të jem trim/e." | „Kam të drejtë të pranoj ndihmë — dhe kam të drejtë të vendos cilën." |
:::

Asnjëra nga këto zhvendosje nuk do të thotë se nuk ke më nevojë për ndihmë. Asnjëra nuk do të thotë se duhet të jesh kundër profesionistëve. Nuk bëhet fjalë për kryengritje, bëhet fjalë për pozicion.

## Pse kjo zhvendosje është kaq e rëndësishme

Ajo nuk është një rekomandim nga shumë të tjera. Është parakushti që Recovery të bëhet fare efektiv për ty:

- **Shpresën** mund ta zhvillosh vetëm në një vete që përjeton vetveten si subjekt.
- **Qëllimet personale** mund t'i ndjekësh vetëm kur përjeton veten si dikush që ka të drejtë të ketë qëllime.
- **Vetëefikasiteti** ndërtohet vetëm aty ku bën përvoja të arritjes me forcat e tua — dhe jo vetëm duke pritur që diçka të ndodhë me ty.
- **Kuptimi** në jetë lind përmes zgjedhjes. Kush nuk ka zgjedhje, e ka të vështirë të gjejë kuptim.

Kërkimi e konfirmon këtë qartë. Roe dhe Davidson [^roedavidson2005] e përshkruajnë Recovery-n si „mbledhje sërish të copave" dhe një rishkrim të historisë së vet. Studimet aktuale për rindërtimin narrativ të identitetit tregojnë [^chiba2019narrative]: kush në fazën e Recovery-t (ri)ndërton një identitet jashtë rolit të pacientit/es shkon ndjeshëm më tej — edhe atëherë kur simptomat mbeten.

:::info{type=note title="Çfarë nuk nënkuptohet këtu"}
Zhvendosja nga të qenit pacient/e te qëndrimi i ekspertit/es nuk është një thirrje për të ndërprerë medikamentet, për të ndërprerë trajtimet ose për t'ia dalë i/e vetëm. Nuk është një qortim ndaj profesionistëve.

Është një ftesë për ta marrë zërin tënd si burim — krah zërave të profesionistëve. Dhe për të zbuluar se çfarë është e vërtetë për ty.
:::

## Nga i përjetuari/a bëhet eksperti/ja i/e përvojës

Në hapësirën gjermanishtfolëse për këtë hap ka një emër të bukur: eksperte/ekspert i përvojës. Në kursin EX-IN pikërisht kjo zhvillohet sistematikisht — nga njerëzit me përvojë psikiatrike bëhen përmes dymbëdhjetë moduleve shoqërues/e që e bëjnë përvojën e tyre të vetën burim të dobishëm për të tjerët [^utschakowski2009] [^exin_de].

Nuk është e nevojshme të bëhesh shoqërues shërimi për ta bërë këtë zhvendosje. Por ideja është e dobishme edhe nëse e zbaton vetëm te vetja: historia jote nuk është diçka që të ndodhi dhe që të përkufizon. Është diçka që njeh — dhe nga e cila mund të nxjerrësh dije. Dije që të ndihmon të kuptosh më mirë veten dhe të tjerët.

Wilma Boevink e quan këtë *experiential expertise* — ekspertizë e përvojës [^boevink2017] [^boevink2012]. Dija jote e përvojës nuk është më pak e vlefshme se dija profesionale e terapistëve. Është ndryshe. Dhe të dyja së bashku janë më shumë se shuma e pjesëve.

## Nëse ende ngurron

Ndoshta po e lexon gjithë këtë dhe mendon: bukur thënë, por për mua nuk shkon më. Ndoshta ke tridhjetë vjet përvojë klinike. Ndoshta ke humbur besimin. Ndoshta askush nuk të ka thënë ndonjëherë se ky rol të takon.

Tre gjëra:

1. **Asnjëherë nuk është vonë.** Kërkimi i Recovery-t nuk njeh kufi moshe dhe as kufi shkalle të rëndë. Edhe njerëzit që kanë jetuar për dekada në kujdes stacionar përshkruajnë zhvendosje — ndonjëherë pikërisht atëherë kur vetë nuk e prisnin më [^harding1987] [^lally2017].

2. **Nuk duhet ta bësh të gjithën menjëherë.** Një pyetje e vetme në mëngjes — „Çfarë do të më duhej sot?" — është tashmë një lëvizje. Një përgjigje e vetme për veten në mbrëmje — „Sot ishte e rëndë, dhe unë megjithatë isha aty" — është gjithashtu një lëvizje.

3. **Të duhen aleatë.** Askush nuk ia del të bëjë vetëm këtë zhvendosje. Peer-a, një grup vetëndihme, një person besimi, një profesionist që e jeton konceptin, një Recovery College. Nëse ekipi yt i trajtimit nuk ecën në këtë rrugë, kjo nuk është dështimi yt — atëherë ai ekip ka tani një pikë të verbër.

:::quote{author="Patricia Deegan, 1996" source="deegan1996" lang="en"}
We are a conspiracy of hope and we are pressing back against the strong tide of oppression which for centuries has been the legacy of those of us who are labeled with mental illness.
:::

:::quote-translation{source="deegan1996" translator="përkthim i lirë"}
Ne jemi një konspiracion shprese. Ne i kundërvihemi rrymës së fortë të shtypjes, që prej shekujsh është trashëgimia e atyre prej nesh që etiketohen me një diagnozë psikike.
:::

:::reflection{id=10 title="Pozicioni yt"}
- Në cilat vende e përjeton ende veten në rolin klasik të pacientit/es?
- Ku ka momente në të cilat e përjeton veten tashmë si ekspert/e të përvojës sate — edhe nëse janë të shkurtra?
- Cila fjali nga kolona e majtë e tabelës të është e njohur — dhe cila nga e djathta dëshiron ngadalë të marrë vend?
- Kush mund të jetë bashkë-konspiratori/ja jote për shpresën?
:::

:::easy{reading_time=3}
Ndoshta ke qenë gjatë në trajtim. Atëherë ke mësuar ndoshta diçka të caktuar:

- Mjeku e di më mirë.
- Duhet të bëj atë që më thonë.
- Jam i/e sëmurë, të tjerët më ndihmojnë.

Ky është një rol. Quhet roli i pacientit/es.

Ky rol ndonjëherë ndihmon. Por mund edhe të dëmtojë. Bëhesh i/e vogël. Pret. E bën veten të varur.

Recovery thotë: ke të drejtë të dalësh nga ky rol. Hap pas hapi.

Nuk bëhesh mjek/e. Por bëhesh ekspert/e e jetës sate. Ti e njeh veten më mirë. Përvoja jote është dije.

**Ky ndryshim është ndryshimi më i rëndësishëm në Recovery. Pa të nuk shkon.**

Tre gjëra për fund:

- Asnjëherë nuk është vonë. Edhe pas shumë vitesh në trajtim.
- Nuk duhet ta bësh menjëherë. Hapat e vegjël kanë rëndësi.
- Të duhen aleatë.

:::reflection{id=shift-easy title="Pyet veten"}
- Ku e përjeton ende veten në rolin e vjetër?
- Ku je tashmë ekspert/e për jetën tënde?
:::
:::

:::quiz{id=q-shift}
- q: "Çfarë do të thotë „roli i pacientit/es" këtu?"
  type: multiple-choice
  options:
    - text: "Një diagnozë mjekësore."
      correct: false
    - text: "Një qëndrim i mësuar: të presësh pasivisht, të tjerët e dinë më mirë, unë bëhem i shëndoshë."
      correct: true
      explanation: "Një rol, jo një diagnozë — dhe është i ndryshueshëm."

- q: "Çfarë thotë Patricia Deegan për „spirit breaking"?"
  type: multiple-choice
  options:
    - text: "Përshkruan një rast përjashtimi të rrallë."
      correct: false
    - text: "Sistemet ndihmëse mund të thyejnë ndjenjën e vetes, zërin dhe vetë-pushtetin — zakonisht pa qëllim të keq."
      correct: true
      explanation: "Deegan 1990 — një term i mprehtë por i saktë."

- q: "Cili është ndryshimi midis Recovery FROM dhe Recovery IN?"
  type: multiple-choice
  options:
    - text: "FROM = leximi i vjetër, IN = i ri."
      correct: false
    - text: "FROM = shërim NGA sëmundja (mjekësor). IN = shërim ME sëmundjen (personal)."
      correct: true
      explanation: "Davidson & Roe 2007."

- q: "A është e vërtetë se kjo zhvendosje është vetëm një rekomandim nga shumë?"
  type: true-false
  correct: false
  explanation: "Jo — është parakushti që Recovery të bëhet efektiv."

- q: "Nga cila moshë / pas sa vitesh trajtimi është vonë për këtë zhvendosje?"
  type: multiple-choice
  options:
    - text: "Pas 10 vjetësh."
      correct: false
    - text: "Pas 60."
      correct: false
    - text: "Asnjëherë."
      correct: true
      explanation: "Kërkimi i Recovery-t nuk njeh kufi moshe. E mundur edhe pas dekadash."
:::

:::flashcards{id=f-shift}
- front: "Spirit Breaking"
  back: "Patricia Deegan (1990): si sistemet ndihmëse thyejnë ndjenjën e vetes, zërin dhe vetë-pushtetin — zakonisht pa qëllim të keq."
- front: "Recovery FROM"
  back: "Shërim NGA një sëmundje — leximi mjekësor. Simptomat kthehen, diagnoza në rastin më të mirë mbetet pas teje."
- front: "Recovery IN"
  back: "Shërim ME një sëmundje — leximi personal. Një jetë e mbushur, edhe nëse simptomat mbeten."
- front: "Roli i pacientit/es"
  back: "Qëndrim i mësuar: pasiv, në pritje, i drejtuar nga jashtë. Ndihmon afatshkurt, dëmton afatgjatë. I ndryshueshëm."
- front: "Ekspertiza e përvojës (Boevink)"
  back: "Dija jote e jetuar është e pavarur dhe e barabartë me dijen profesionale. Mund ta përdorësh — për veten dhe për të tjerët."
- front: "Conspiracy of Hope"
  back: "Patricia Deegan 1996: „Ne jemi një konspiracion shprese." — Recovery si projekt kolektiv kundër heqjes historike të zërit."
:::

:::standard{reading_time=3}
Nëse ke qenë gjatë në trajtim psikiatrik — ndoshta vite, dekada — atëherë kjo ka bërë diçka me ty. Jo vetëm sëmundja. Edhe **roli**.

## Çfarë ka bërë roli me ty

Ndoshta ke mësuar:

- Mjeku e di më mirë. Ndjesia ime vlen më pak.
- Duhet të pres. Për takimin e ardhshëm, medikamentin e ardhshëm, metodën e ardhshme.
- Unë jam diagnoza ime: „Unë jam borderlinerke." „Unë jam bipolar."
- Shërimi është diçka që më bëhet — jo diçka që e bëj unë.

Kjo nuk është dobësi personale. Kjo është një **reagim i mësuar** pas vitesh në një sistem që lejon pak kontroll.

Patricia Deegan, një zë modelues i lëvizjes Recovery, ka krijuar për këtë një term të mprehtë: **„spirit breaking"**. Sistemet ndihmëse mund — zakonisht pa qëllim të keq — të thyejnë ndjenjën e vetes, zërin, vetë-pushtetin e një njeriu. Jo sepse punonjësit janë të këqij. Por sepse e parashikon kështu logjika e sistemit.

## Recovery FROM vs. Recovery IN

Larry Davidson dhe David Roe dallojnë dy lexime shumë të ndryshme të Recovery-t:

- **Recovery FROM** — Shërim **NGA** një sëmundje. Leximi mjekësor: simptomat kthehen, diagnoza pas teje. Ti je marrëse pasive e një trajtimi.
- **Recovery IN** — Shërim **ME** një sëmundje. Leximi personal: të bësh një jetë të mbushur, edhe nëse simptomat mbeten. Ti je personi që vepron.

Të dyja janë të mundura. Të dyja janë të vlefshme. Por ndjekin logjika krejt të ndryshme. **Recovery IN është parakushti që Recovery të bëhet fare efektiv për ty.** Sepse shpresa, qëllimet, vetëefikasiteti, kuptimi — gjithçka lind vetëm aty ku përjeton veten si dikush që ka të drejtë të zgjedhë.

## Mbetesh i varur nga ndihma — dhe megjithatë subjekt

Kjo zhvendosje nuk është thirrje për të ndërprerë medikamentet ose për ta përfunduar trajtimin. Nuk është qortim ndaj profesionistëve. Është ftesë për ta marrë zërin tënd si burim — **krah** zërave profesionalë.

Tre gjëra për fund:

- **Asnjëherë nuk është vonë.** Edhe pas dekadash trajtimi zhvendosje të tilla janë të mundura.
- **Ecet me hapa të vegjël.** Një pyetje në mëngjes: „Çfarë do të më duhej sot?" mjafton për fillimin.
- **Të duhen aleatë.** Peer-a. Një person besimi. Një Recovery College. Askush nuk ia del vetëm.
:::

:::standard-quiz{id=q-shift-std}
- q: "Çfarë do të thotë Patricia Deegan me „spirit breaking"?"
  type: multiple-choice
  options:
    - text: "Një rast i veçuar i rrallë që pothuajse nuk ndodh."
      correct: false
    - text: "Si sistemet ndihmëse mund të thyejnë ndjenjën e vetes, zërin dhe vetë-pushtetin — zakonisht pa qëllim të keq."
      correct: true
      explanation: "Një term i mprehtë por i saktë (Deegan 1990)."

- q: "Cili është ndryshimi midis Recovery FROM dhe Recovery IN?"
  type: multiple-choice
  options:
    - text: "FROM është i vjetëruar, IN është versioni i ri."
      correct: false
    - text: "FROM = shërim NGA një sëmundje (mjekësor). IN = shërim ME një sëmundje (personal)."
      correct: true
      explanation: "Davidson & Roe 2007. Të dyja janë të mundura, por ndjekin logjika të ndryshme."

- q: "Kush është ekspert/e për jetën tënde?"
  type: multiple-choice
  options:
    - text: "Ekipi yt i trajtimit."
      correct: false
    - text: "Ti vetë — krah dijes profesionale të trajtuesve."
      correct: true

- q: "Nga cila pikë është vonë për këtë zhvendosje?"
  type: multiple-choice
  options:
    - text: "Pas 20 vjet trajtimi."
      correct: false
    - text: "Pas 60."
      correct: false
    - text: "Asnjëherë. Edhe pas dekadash zhvendosjet janë të mundura."
      correct: true
:::

:::standard-flashcards{id=f-shift-std}
- front: "Spirit Breaking (Deegan)"
  back: "Kur sistemet ndihmëse — zakonisht pa qëllim të keq — thyejnë ndjenjën e vetes, zërin dhe vetë-pushtetin e një njeriu."
- front: "Recovery FROM"
  back: "Shërim NGA një sëmundje. Leximi mjekësor: simptomat ikën, diagnoza pas teje."
- front: "Recovery IN"
  back: "Shërim ME një sëmundje. Leximi personal: një jetë e mbushur, edhe nëse simptomat mbeten."
- front: "Ekspert/e i/e jetës sate"
  back: "Ti e njeh veten më mirë. Përvoja jote është dije — krah dijes profesionale, jo në vend të saj."
- front: "Asnjëherë vonë"
  back: "Recovery nuk njeh kufi moshe dhe as kufi shkalle të rëndë. E mundur edhe pas dekadash."
:::


# 12. Peer-Support, Trialog dhe EX-IN
{#kap-12 reading_time=5}

## Çfarë është Peer-Support

Peer-Support nënkupton shoqërimin nga njerëz që kanë përjetuar vetë kriza psikike dhe që i kanë përpunuar ato. Në hapësirën gjermanishtfolëse: shoqërues/e shërimi, ekspertë/e të përvojës, peer-a ose punonjës EX-IN [^utschakowski2009] [^exin_de].

Rrënjët shtrihen larg — në traditën e vetëndihmës, në konceptin WRAP të Mary Ellen Copeland-it [^copeland1997], në modelin gjerman të Trialogut [^bockpriebe2005] dhe në iniciativën EX-IN që nga viti 2005 [^utschakowski2009].

## Trialogu — trashëgimia gjermanishtfolëse

Trialogu — biseda e barabartë midis të prekurve, të afërmve dhe profesionistëve — u themelua në vitin 1989 në Hamburg nga Thomas Bock dhe bashkëpunëtorët [^bockpriebe2005]. Është një kontribut gjermanishtfolës ndaj lëvizjes ndërkombëtare të Recovery-t dhe e ka ndryshuar në mënyrë të qëndrueshme ofrimin DACH [^vonpeter2015].

## Çfarë tregon kërkimi

Baza e provave për Peer-Support sot është e konsiderueshme. Një RCT shumëqendrore me mbi 600 pjesëmarrës në katër vende tregoi efekte të ndjeshme në Empowerment dhe cilësinë e jetës [^slade2024peer]. Meta-analiza aktuale gjejnë efekte pozitive të qëndrueshme në vetëefikasitet dhe efekte më të vogla në shpresë dhe Empowerment [^white2024] [^lyons2021]. Një RCT gjerman dëshmoi gjithashtu efekte pozitive [^mahlke2017].

Faktorë efektiviteti janë: përvoja e jetuar si ankor besueshmërie, shpresa si model, ndërtimi i marrëdhënieve në lartësi të barabartë dhe komunikimi jo-stigmatizues [^mead2001] [^davidson2012].

Wilma Boevink e sjell këtë parim në një pikë të thjeshtë: dija e përvojës që vjen nga lëvizja e të prekurve është e barabartë me dijen profesionale — dhe formon themelin e dijes autentike të Recovery-t [^boevink2012].

:::easy{reading_time=2}
Peer-Support do të thotë: njerëzit shoqërojnë njerëz të tjerë me përvojë të ngjashme.

Kjo bën mirë. Kërkimet tregojnë: kur dikush që „ka kaluar" qëndron para teje, është një shenjë e fortë. Të jep shpresë.

Në hapësirën gjermanishtfolëse ka shoqërues/e shërimi me një formim (EX-IN).

Ka gjithashtu Trialogun — biseda midis të prekurve, të afërmve dhe profesionistëve. Në lartësi të barabartë. Pa qenë njëri më i rëndësishëm.

Biseda të tilla ka në shumë qytete në Zvicër, në Gjermani dhe në Austri.
:::

:::quiz{id=q-12}
- q: "Çfarë do të thotë EX-IN?"
  type: multiple-choice
  options:
    - text: "Një diagnozë."
      correct: false
    - text: "Experienced Involvement — formim për shoqërues/e shërimi."
      correct: true
      explanation: "Zhvilluar nga viti 2005 në Bremen."

- q: "Kush flet në Trialog në lartësi të barabartë?"
  type: multiple-choice
  options:
    - text: "Vetëm profesionistët."
      correct: false
    - text: "Të prekurit, të afërmit dhe profesionistët së bashku."
      correct: true
      explanation: "Themeluar në 1989 nga Thomas Bock në Hamburg."

- q: "Çfarë tregon kërkimi i Peer-Support (Slade et al. 2024)?"
  type: multiple-choice
  options:
    - text: "Pa efekte të matshme."
      correct: false
    - text: "Efekte të ndjeshme në Empowerment dhe cilësinë e jetës."
      correct: true
:::

:::flashcards{id=f-12}
- front: "EX-IN"
  back: "Experienced Involvement — formim për njerëz me përvojë psikiatrike si shoqërues/e shërimi (që nga 2005, Bremen). I frymëzuar nga Dorothea Buck."
- front: "Trialog"
  back: "Bisedë e barabartë midis të prekurve, të afërmve dhe profesionistëve. Themeluar në 1989 nga Thomas Bock në Hamburg."
- front: "Peer-Support — faktorë efektiviteti"
  back: "Përvoja e jetuar si ankor besueshmërie · shpresa si model · marrëdhënie në lartësi të barabartë · komunikim jo-stigmatizues."
- front: "Mahlke et al. 2017"
  back: "RCT gjerman për Peer Support one-to-one — dëshmoi efekte të ndjeshme në Empowerment dhe vetëefikasitet."
:::

:::standard{reading_time=2}
Peer-Support do të thotë: njerëzit që vetë kanë kaluar nëpër një krizë psikike shoqërojnë të tjerët — në lartësi të barabartë, me përvojë të jetuar në vend të titullit profesional.

Në hapësirën gjermanishtfolëse i quajmë shoqërues/e shërimi, ekspertë/e të përvojës ose punonjës EX-IN. EX-IN qëndron për „Experienced Involvement" — një formim që lindi në vitin 2005 në Bremen dhe që sot është i ankoruar në shumë klinika, shërbime këshillimi dhe Recovery Colleges.

Tre terma janë të rëndësishme:

- **Peer-Support:** shoqërim nga dikush me përvojë të ngjashme. I besueshëm sepse i jetuar.
- **Trialog:** biseda e barabartë midis të prekurve, të afërmve dhe profesionistëve — themeluar në 1989 në Hamburg nga Thomas Bock.
- **EX-IN:** formim i strukturuar për shoqërimin e shërimit, frymëzuar nga Dorothea Buck.

Çfarë thotë kërkimi: një studim i madh ndërkombëtar me mbi 600 pjesëmarrës në katër vende tregoi efekte të ndjeshme në Empowerment dhe cilësinë e jetës. Një studim gjerman e konfirmoi këtë. Ajo që vepron nuk është një truk — është takimi me dikë që mund të thotë: „Edhe unë kam qenë atje. Dhe ka një rrugë."

Ndoshta njeh edhe ti dikë, historia e të cilit/cilës të ka mbajtur. Ndoshta një ditë do të jesh vetë ky person për dikë tjetër.
:::

:::standard-quiz{id=q-12-std}
- q: "Çfarë do të thotë EX-IN?"
  type: multiple-choice
  options:
    - text: "Një diagnozë e re."
      correct: false
    - text: "Experienced Involvement — një formim për shoqërimin e shërimit."
      correct: true
      explanation: "Zhvilluar nga viti 2005 në Bremen, sot i ankoruar në shumë institucione DACH."
    - text: "Një klasë medikamentesh."
      correct: false

- q: "Kush flet me njëri-tjetrin në Trialog?"
  type: multiple-choice
  options:
    - text: "Vetëm profesionistët midis tyre."
      correct: false
    - text: "Të prekurit, të afërmit dhe profesionistët — në lartësi të barabartë."
      correct: true
      explanation: "Themeluar në 1989 në Hamburg nga Thomas Bock."
    - text: "Vetëm të prekurit."
      correct: false
:::

:::standard-flashcards{id=f-12-std}
- front: "Peer-Support"
  back: "Shoqërim nga njerëz me përvojë të vetën krizë. Vepron përmes përvojës së jetuar, shpresës dhe lartësisë së barabartë."
- front: "Trialog"
  back: "Bisedë e barabartë midis të prekurve, të afërmve dhe profesionistëve. Që nga 1989 (Bock, Hamburg)."
- front: "EX-IN"
  back: "Experienced Involvement — formim për njerëz me përvojë psikiatrike, që nga 2005."
:::


# 13. Recovery Colleges — të mësosh në vend të terapisë
{#kap-13 reading_time=5}

Recovery Colleges janë një model britanik që ka filluar nga viti 2009 [^perkins2012]. Nuk janë klinika, por institucione edukative. Janë falas, të hapura për të gjithë — të prekur, të afërm, profesionistë dhe të interesuar — dhe përdorin formën pedagogjike të edukimit të të rriturve në vend të sesionit terapeutik.

Dy parime qendrore karakterizojnë Recovery Colleges [^perkins2012] [^meddings2015]:

- **Edukim në vend të terapisë.** Pjesëmarrësit janë studentë, jo pacientë. Fokusi te burimet dhe mësimi, jo te deficiti dhe diagnoza.
- **Koprodhimi (Co-Production).** Çdo kurs zhvillohet dhe zbatohet së bashku nga një profesionist dhe një person me përvojë të jetuar — në lartësi të barabartë.

## Çfarë tregon kërkimi

Hayes dhe kolegët numërojnë në mbarë botën 221 Recovery Colleges në 28 vende në pesë kontinente [^hayes2023].

Studimi RECOLLECT është deri tani angazhimi më gjithëpërfshirës shkencor me Recovery Colleges [^henderson2024recollect]. Një studim retrospektiv kohorte nga Anglia me 1.193 studentë të Recovery College krahasuar me 3.508 persona kontrolli mbi 6, 12 dhe 60 muaj tregoi: reduktim të ndjeshëm të hospitalizimeve psikiatrike, ditëve stacionare të shtratit dhe konsultave urgjente — me përmirësim të njëkohshëm të mirëqenies [^ronaldson2024].

Një rishikim literature mbi dhjetë vjet kërkimi për Recovery Colleges [^theriault2020] konfirmon efekte të qëndrueshme në shpresë, Empowerment, vetëefikasitet, përfshirje sociale, arritjen e qëllimeve dhe dijen për shëndetin mendor. Crowther dhe kolegët tregojnë se edhe profesionistët përfitojnë nga bashkëpunimi në Recovery Colleges [^crowther2019].

:::info{type=evidence title="Evidenca në hapësirën gjermanishtfolëse"}
Të dhëna DACH të validuara empirikisht për efektivitetin e shërbimeve të orientuara nga Recovery janë krijuar në vitet e fundit.

Një studim gjerman i rastësishëm i kontrolluar për shoqërimin peer te njerëzit me sëmundje të rënda psikike [^mahlke2017] dëshmoi efekte të ndjeshme në Empowerment dhe vetëefikasitet.

Udhëzimi DGPPN-S3 „Terapitë psikosociale për sëmundjet e rënda psikike" (botimi i 2-të 2019) e ka përfshirë orientimin e Recovery-t, Peer-Support dhe Shared Decision-Making si rekomandime [^dgppn2019].

Kërkimi për Recovery Colleges në hapësirën gjermanishtfolëse po rritet — gjendja e të dhënave për vende specifike DACH është në ndërtim.
:::

Në hapësirën gjermanishtfolëse ekzistojnë Recovery Colleges ndër të tjera në Bernë [^rcbern], në Zvicrën Lindore, në Gjenevë, në St.Gallen dhe në Cyrih — si dhe gjithnjë e më shumë në Gjermani dhe Austri (ndër të tjera Empowerment College Bremen).

:::easy{reading_time=2}
Recovery Colleges janë një lloj i veçantë shkolle. Por jo shkollë për fëmijë.

Këtu mësojnë të rritur për shëndetin mendor. Të gjithë mund të vijnë: të prekur, të afërm, profesionistë, të interesuar.

Kurset janë falas. Nuk të duhet diagnozë.

Çdo kurs planifikohet së bashku: nga një profesionist dhe një person me përvojë të vetën. Të dy janë po aq të rëndësishëm.

Sot ka mbi 220 Recovery Colleges në 28 vende. Edhe në Zvicër, në Gjermani dhe në Austri.

Kërkimet tregojnë: kush viziton një Recovery College, është më mirë pas tij.
:::

:::quiz{id=q-13}
- q: "Kush mund të marrë pjesë në një Recovery College?"
  type: multiple-choice
  options:
    - text: "Vetëm njerëzit me diagnozë."
      correct: false
    - text: "Të prekur, të afërm, profesionistë dhe të interesuar — të gjithë."
      correct: true
      explanation: "I hapur për të gjithë. Pa diagnozë të nevojshme. Falas."

- q: "Çfarë do të thotë „Co-Production"?"
  type: multiple-choice
  options:
    - text: "Një truk kinemaje."
      correct: false
    - text: "Profesionisti dhe personi me përvojë të jetuar planifikojnë kurset së bashku — në lartësi të barabartë."
      correct: true

- q: "Çfarë tregon studimi UK i kohortës Ronaldson et al. 2024?"
  type: multiple-choice
  options:
    - text: "Asnjë efekt."
      correct: false
    - text: "Reduktim të ndjeshëm të hospitalizimeve psikiatrike dhe ditëve të shtratit."
      correct: true
:::

:::flashcards{id=f-13}
- front: "Recovery College"
  back: "Institucion edukativ — jo vend trajtimi. Të mësosh në vend të terapisë. Falas. I hapur për të gjithë."
- front: "Co-Production"
  back: "Kurset zhvillohen dhe zbatohen së bashku nga një profesionist dhe një person me përvojë të jetuar."
- front: "Efektiviteti"
  back: "Hayes 2023: 221 Recovery Colleges në 28 vende. Ronaldson 2024: më pak hospitalizime, më shumë mirëqenie."
:::

:::standard{reading_time=2}
Një Recovery College nuk është klinikë. Është një shkollë për të rritur — e hapur për të gjithë ata që duan të mësojnë diçka për shëndetin mendor: të prekur, të afërm, profesionistë, të interesuar. Kurset janë falas, nuk të duhet diagnozë, nuk të duhet rekomandim dhe nuk të duhet regjistrim te mjeku i familjes.

Dy parime mbajnë këtë model:

- **Edukim në vend të terapisë.** Ti je student/e, jo pacient/e. Në qendër qëndrojnë mësimi, burimet dhe pyetjet — jo diagnoza dhe deficiti.
- **Koprodhimi (Co-Production).** Çdo kurs zhvillohet dhe zbatohet së bashku nga një profesionist dhe një person me përvojë të jetuar. Të dy burimet e dijes janë të barabarta.

Recovery College i parë lindi në vitin 2009 në Londër. Sot ka në mbarë botën mbi 220 në 28 vende — edhe në Zvicër (ndër të tjera Bernë, Zvicra Lindore, Gjenevë, St.Gallen, Cyrih), në Gjermani dhe në Austri.

Studimi më i madh për këtë, RECOLLECT nga Anglia, krahasoi rreth 1.200 studentë të Recovery College me mbi 3.500 persona kontrolli mbi pesë vite. Rezultati: më pak hospitalizime psikiatrike, më pak raste urgjente, më shumë mirëqenie. Dhjetë vjet kërkimi konfirmojnë: shpresa, Empowerment-i, përfshirja sociale dhe vetëefikasiteti rriten në mënyrë të matshme.

Ndoshta një Recovery College afër teje është një vend i parë në të cilin nuk të duhet të shpjegohesh — por ke të drejtë të mësosh.
:::

:::standard-quiz{id=q-13-std}
- q: "Kush mund të vizitojë një Recovery College?"
  type: multiple-choice
  options:
    - text: "Vetëm njerëzit me diagnozë psikiatrike."
      correct: false
    - text: "Të gjithë — të prekur, të afërm, profesionistë, të interesuar. Pa diagnozë."
      correct: true
      explanation: "Recovery Colleges janë të hapura, falas dhe nuk kërkojnë rekomandim."
    - text: "Vetëm profesionistët."
      correct: false

- q: "Çfarë do të thotë Co-Production?"
  type: multiple-choice
  options:
    - text: "Të xhirosh disa filma së bashku."
      correct: false
    - text: "Kurset planifikohen së bashku nga profesionisti dhe eksperti/ja i/e përvojës — në lartësi të barabartë."
      correct: true
      explanation: "Ky është parimi qendror i Recovery Colleges."
    - text: "Një video trajnimi për t'u përfshirë."
      correct: false
:::

:::standard-flashcards{id=f-13-std}
- front: "Recovery College"
  back: "Vend edukimi në vend të vendit të trajtimit. Falas, i hapur për të gjithë. Të mësosh në vend të terapisë."
- front: "Co-Production"
  back: "Çdo kurs formohet së bashku nga një profesionist dhe një person me përvojë të jetuar."
- front: "Efekti (RECOLLECT)"
  back: "Më pak hospitalizime, më pak raste urgjente, më shumë mirëqenie — i dëshmuar mbi pesë vite."
:::


# 14. Qëndrimi i informuar nga trauma
{#kap-14 reading_time=3}

:::info{type=warmth title="Para se të lexosh më tej"}
Ky kapitull emërton dhunën, abuzimin, neglizhimin dhe diskriminimin. Nëse ke kaluar gjëra të rënda, leximi mund të ngrejë shumë. Kjo është normale. Lexo me ritmin tënd. Bëj pauza. Kalo në kapitullin tjetër nëse sot është shumë. Nëse ke nevojë për mbështetje tani: Kapitulli 20 (Krizë) është vetëm pak prekje larg — ose telefono në Zvicër **143**, në Gjermani **0800 111 0 111**, në Austri **142**, në Kosovë **0800 11 112**.
:::

Shumë njerëz që trajtohen në psikiatri kanë në historinë e tyre përjetime traumatike — dhunë, abuzim, neglizhencë, diskriminim. Edhe qëndrimet psikiatrike vetë mund të veprojnë retraumatizuese [^felitti1998].

Një qëndrim i informuar nga trauma është prandaj pjesë integrale e praktikës së orientuar nga Recovery. Autoriteti amerikan SAMHSA [^samhsa2014trauma] ka përkufizuar për këtë gjashtë parime udhëheqëse:

- **Siguri** — fizike dhe emocionale.
- **Besim dhe transparencë** — informacion i qartë, kornizë e besueshme.
- **Peer-Support** — përvoja e jetuar si burim.
- **Bashkëpunim dhe reciprocitet** — të zvogëlosh hierarkitë.
- **Empowerment, zë dhe zgjedhje** — vendim dhe vetëvendosje.
- **Ndjeshmëri kulturore, historike dhe gjinore.**

Këto parime vlejnë edhe në një workbook dixhital. Ti vendos çfarë lexon dhe kur, çfarë ruan, çfarë fshin.

:::easy{reading_time=1}
Shumë njerëz në psikiatri kanë përjetuar gjëra të rënda. Dhunë. Abuzim. Neglizhencë.

Ndonjëherë edhe qëndrimi në klinikë vetë është rëndues.

Prandaj është i rëndësishëm një qëndrim i ndjeshëm ndaj traumës. Kjo do të thotë:

- Siguria së pari.
- Të krijosh besim.
- Të komunikosh ndershmërisht.
- Askush nuk vendos mbi kokën tënde.

Ky qëndrim vlen edhe në këtë aplikacion. Ti vendos çfarë lexon. Çfarë ruan. Çfarë fshin.
:::

:::quiz{id=q-14}
- q: "Sa parime ka përkufizuar SAMHSA për shërbimet e informuara nga trauma?"
  type: multiple-choice
  options:
    - text: "Tre"
      correct: false
    - text: "Gjashtë"
      correct: true
    - text: "Dhjetë"
      correct: false

- q: "Cili NUK është parim i praktikës së informuar nga trauma?"
  type: multiple-choice
  options:
    - text: "Siguri"
      correct: false
    - text: "Ashpërsi"
      correct: true
      explanation: "Ashpërsia nuk bën pjesë në parimet e SAMHSA-s."
    - text: "Peer-Support"
      correct: false
:::

:::flashcards{id=f-14}
- front: "Gjashtë parime (SAMHSA 2014)"
  back: "Siguri · Besim & Transparencë · Peer-Support · Bashkëpunim · Empowerment · ndjeshmëri kulturore/gjinore."
- front: "Retraumatizimi"
  back: "Kur sistemet e ndihmës veprojnë vetë në mënyrë shtesë traumatizuese. Praktika e informuar nga trauma dëshiron ta parandalojë këtë në mënyrë aktive."
- front: "Studimi ACE (Felitti 1998)"
  back: "Dëshmon: përvojat traumatike të fëmijërisë janë të përhapura dhe veprojnë gjatë gjithë jetës mbi shëndetin."
:::

:::standard{reading_time=2}
Shumë njerëz që trajtohen në psikiatri mbajnë me vete përvoja të rënda — dhunë, abuzim, neglizhencë, diskriminim, humbje. Ndonjëherë edhe qëndrimet psikiatrike vetë veprojnë rënduese ose retraumatizuese. Një qëndrim i informuar nga trauma e merr seriozisht këtë, pa të shtyrë të tregosh plagë që nuk dëshiron t'i tregosh.

Autoriteti shëndetësor amerikan SAMHSA ka përshkruar gjashtë parime udhëheqëse që mbajnë një shoqërim të ndjeshëm ndaj traumës:

- **Siguria** — trupore dhe emocionale. Askush të mos jetë në një hapësirë në të cilën nuk ndihet i/e sigurt.
- **Besimi dhe transparenca** — informacion i qartë, kornizë e besueshme, asnjë surprizë mbi kokën tënde.
- **Peer-Support** — përvoja e jetuar si urë e besueshme.
- **Bashkëpunimi në lartësi të barabartë** — të zvogëlosh hierarkitë, jo t'i zmadhosh.
- **Empowerment, zëri dhe zgjedhja** — ti bashkëvendos. Gjithmonë.
- **Ndjeshmëria kulturore, historike dhe gjinore** — historia jote është pjesë e asaj që je.

Këto parime vlejnë edhe në një workbook dixhital. Ti vendos çfarë lexon dhe kur. Çfarë ruan. Çfarë fshin. Nëse një kapitull është shumë, mbylle. Kthehu kur je gati. Ose lëre fare.

I informuar nga trauma nuk do të thotë: së pari të përpunosh traumën, pastaj të jetosh. Do të thotë: gjithçka që ndodh këtu, kujdeset për atë që ke mbajtur tashmë.
:::

:::standard-quiz{id=q-14-std}
- q: "Sa parime udhëheqëse ka përkufizuar SAMHSA për praktikën e informuar nga trauma?"
  type: multiple-choice
  options:
    - text: "Tre."
      correct: false
    - text: "Gjashtë."
      correct: true
      explanation: "Siguri, besim, Peer-Support, bashkëpunim, Empowerment, ndjeshmëri kulturore."
    - text: "Dhjetë."
      correct: false

- q: "Kush vendos çfarë ruhet në këtë aplikacion?"
  type: multiple-choice
  options:
    - text: "Aplikacioni."
      correct: false
    - text: "Ti. Gjithmonë."
      correct: true
      explanation: "Vetëvendosja mbi të dhënat tua është shprehje e qëndrimit të ndjeshëm ndaj traumës."
:::

:::standard-flashcards{id=f-14-std}
- front: "Gjashtë parime (SAMHSA)"
  back: "Siguri · Besim & Transparencë · Peer-Support · Bashkëpunim · Empowerment · ndjeshmëri kulturore dhe gjinore."
- front: "Siguria së pari"
  back: "Askush nuk vendos mbi kokën tënde. Ti vendos ritmin, thellësinë dhe ndalimin."
- front: "Retraumatizimi"
  back: "Kur sistemet e ndihmës dëmtojnë shtesë. Praktika e informuar nga trauma dëshiron ta parandalojë këtë në mënyrë aktive."
:::


# 15. Recovery dhe të drejtat e njeriut
{#kap-15 reading_time=4}

Recovery nuk është vetëm një çështje profesionale, por edhe një çështje e të drejtave të njeriut. Konventa e OKB-së për të Drejtat e Personave me Aftësi të Kufizuara u garanton njerëzve me aftësi të kufizuara — duke përfshirë aftësitë e kufizuara psikike — të drejtën për vetëvendosje, përfshirje dhe vendimmarrje të mbështetur [^uncrpd2006]. Gjermania e ka ratifikuar Konventën në 2009, Austria në 2008, Zvicra në 2014.

OBSH-ja nisi në vitin 2019 iniciativën QualityRights [^who2019] dhe në vitin 2021 publikoi udhëzimin „Guidance on Community Mental Health Services" [^who2021]. Recovery përmendet aty si parim qendror i shërbimeve moderne.

Konkretisht kjo do të thotë: të reduktosh detyrimin, të mos vendosësh kurrë diagnozën mbi personin, të ofrosh mbështetje aty ku njerëzit kanë nevojë — dhe të përfshish të prekurit si partnerë të barabartë në të gjitha vendimet e shërbimeve.

:::info{type=example title="Shembull: Open Dialogue"}
Në Laponinë Perëndimore finlandeze, Jaakko Seikkula zhvilloi në vitet 1980 konceptin e Open Dialogue.

Në krizat akute psikotike, brenda 24 orëve përfshihen të gjitha personat e rëndësishëm të referencës. Të gjitha bisedat zhvillohen së bashku, të gjitha vendimet negociohen në mënyrë transparente.

Rezultatet afatgjata janë të jashtëzakonshme: në Laponinë Perëndimore mbi 80 % e të prekurve me psikozë të parë u kthyen brenda dy vitesh në punë ose në formim. Një studim 19-vjeçar konfirmoi qëndrueshmërinë afatgjatë të rezultateve [^seikkula2011] [^bergstroem2018].
:::

:::easy{reading_time=1}
Recovery është edhe një e drejtë e njeriut.

OKB-ja bëri në vitin 2006 një konventë. Ajo thotë: njerëzit me aftësi të kufizuara kanë të drejtë të vendosin vetë. Edhe njerëzit me sëmundje psikike.

OBSH-ja thotë në 2021: psikiatria duhet t'i nderojë këto të drejta. Jo vetëm mjeku duhet të vendosë. Por të gjithë së bashku.

Në Zvicër, në Gjermani dhe në Austri kjo vlen gjithashtu.
:::

:::quiz{id=q-15}
- q: "Çfarë është KKDPAK-ja (UN-BRK)?"
  type: multiple-choice
  options:
    - text: "Një metodë trajtimi."
      correct: false
    - text: "Konventa e OKB-së për të Drejtat e Personave me Aftësi të Kufizuara e vitit 2006."
      correct: true
      explanation: "Zvicra e ka ratifikuar në 2014, Gjermania në 2009, Austria në 2008."

- q: "Çfarë thotë OBSH-ja në 2021?"
  type: multiple-choice
  options:
    - text: "Recovery është joshkencore."
      correct: false
    - text: "Shërbimet duhet të jenë të përqendruara te personi dhe me bazë të drejtash."
      correct: true
:::

:::flashcards{id=f-15}
- front: "KKDPAK 2006"
  back: "Konventa e OKB-së për të Drejtat e Personave me Aftësi të Kufizuara. Garanton vetëvendosjen — edhe te aftësitë e kufizuara psikike. CH ratifikuar 2014, DE 2009, AT 2008."
- front: "WHO QualityRights"
  back: "Iniciativë e OBSH-së që nga 2019. Udhëzim 2021 'Guidance on Community Mental Health Services': i përqendruar te personi, me bazë të drejtash, i orientuar nga Recovery."
- front: "Open Dialogue (Seikkula)"
  back: "Laponia Perëndimore që nga vitet 1980. Mbi 80 % e të prekurve me psikozë të parë u kthyen në punë/formim brenda 2 vitesh. I konfirmuar në ndjekjen 19-vjeçare."
:::

:::standard{reading_time=2}
Recovery nuk është vetëm një çështje profesionale — është edhe një çështje e të drejtave të njeriut. Kush sëmuret psikikisht, nuk e humb të drejtën të dëgjohet, të përfshihet dhe të merret seriozisht.

**Konventa e OKB-së për të Drejtat e Personave me Aftësi të Kufizuara** (KKDPAK) e vitit 2006 u garanton të gjithë njerëzve me aftësi të kufizuara — trupore, mendore, psikike — të drejtën për vetëvendosje, përfshirje dhe vendimmarrje të mbështetur. Zvicra e ka ratifikuar në 2014, Gjermania në 2009, Austria në 2008. Kjo është e drejtë në fuqi.

**Organizata Botërore e Shëndetit (OBSH)** i dha këtij peshë në vitin 2019 me iniciativën QualityRights dhe në vitin 2021 publikoi udhëzimin „Guidance on Community Mental Health Services". Recovery qëndron aty si parim qendror i shërbimeve moderne — krahas përqendrimit te personi dhe bazës së të drejtave.

Çfarë do të thotë kjo konkretisht?

- Të reduktosh detyrimin — sa herë që është e mundur.
- Të mos vendosësh kurrë diagnozën mbi personin.
- Të ofrosh mbështetje aty ku njerëzit jetojnë.
- Të përfshish të prekurit si partnerë të barabartë në vendimet e shërbimeve.

Një shembull për këtë është **Open Dialogue** nga Finlanda. Në krizat akute psikotike brenda 24 orëve përfshihen të gjitha personat e rëndësishëm të referencës. Mbi 80 % e të prekurve me krizë të parë u kthyen brenda dy vitesh në punë ose në formim — studimet afatgjata konfirmojnë qëndrueshmërinë e këtyre rezultateve.

Nuk është e nevojshme t'i mësosh përmendsh këto kornizat. Por është mirë të dish: kur thua „Dua të bashkëvendos", qëndron mbi një tokë të fortë juridike.
:::

:::standard-quiz{id=q-15-std}
- q: "Çfarë u garanton Konventa e OKB-së për të Drejtat e Personave me Aftësi të Kufizuara edhe njerëzve me sëmundje psikike?"
  type: multiple-choice
  options:
    - text: "Një shërim të shpejtë."
      correct: false
    - text: "Vetëvendosje, përfshirje dhe vendimmarrje të mbështetur."
      correct: true
      explanation: "KKDPAK e vitit 2006. Ratifikuar: CH 2014, DE 2009, AT 2008."
    - text: "Një formë të caktuar terapie."
      correct: false

- q: "Çfarë thotë udhëzimi i OBSH-së i vitit 2021 për shërbimet psikiatrike?"
  type: multiple-choice
  options:
    - text: "Duhet të jenë të përqendruara te personi dhe me bazë të drejtash."
      correct: true
      explanation: "Recovery përmendet aty si parim qendror."
    - text: "Duhet të jenë sa më stacionare dhe afatgjata."
      correct: false
    - text: "Duhet të ndodhin pa pjesëmarrjen e të prekurve."
      correct: false
:::

:::standard-flashcards{id=f-15-std}
- front: "KKDPAK 2006"
  back: "Konventa e OKB-së për të Drejtat e Personave me Aftësi të Kufizuara. Garanton vetëvendosjen — edhe te aftësitë e kufizuara psikike. Ratifikuar: CH 2014, DE 2009, AT 2008."
- front: "WHO QualityRights"
  back: "Iniciativë e OBSH-së që nga 2019. Udhëzim 2021: i përqendruar te personi, me bazë të drejtash, i orientuar nga Recovery."
- front: "Open Dialogue"
  back: "Model finlandez. Mbi 80 % e të prekurve me psikozë të parë u kthyen brenda 2 vitesh në punë ose në formim."
:::


# 16. Sëmundje ose Recovery: dy këndvështrime
{#kap-16 reading_time=3}

Recovery është më shumë se një metodë e re — është një ndryshim perspektive [^knuf2026] [^slade2014] [^ameringschmolke2012].

:::table{name="Paradigmenvergleich"}
| Këndvështrimi i orientuar nga sëmundja | Këndvështrimi i orientuar nga Recovery |
|----------------------------|---------------------------|
| Diagnoza në qendër | Njeriu në qendër |
| Mungesa e simptomave si qëllim | Jeta me kuptim si qëllim |
| Eksperti = profesionisti | Ekspertizë e dyfishtë: dije profesionale + dije e përvojës |
| Plan trajtimi | Plan Recovery + plan trajtimi |
| Bindje (Compliance) | Shared Decision-Making |
| Vështrim deficiti (patogjenezë) | Vështrim burimesh (salutogjenezë) |
| Rrugë lineare shërimi | Rrugë individuale, jo-lineare |
| Profesionisti mban shpresën i/e vetëm | Shpresa ndahet dhe huazohet |
| Pacient/e / Klient/e | Njeri / Person me përvojë / Student/e |
:::

Kolona e djathtë nuk e zëvendëson të majtën. Të dyja kolonat kanë vendin e tyre — paradigma e orientuar nga Recovery e zgjeron atë mjekësore, nuk e zëvendëson [^slade2014].

Amering dhe Schmolke theksojnë një pikë që shpesh shpërfillet: praktika e orientuar nga Recovery nuk është një modul shtesë mbi të. Ajo është një mënyrë tjetër prodhimi dijeje — përmes lidhjes së dijes profesionale me përvojën e jetuar si burime të barabarta [^ameringschmolke2012].

:::easy{reading_time=2}
Ka dy këndvështrime për sëmundjen psikike:

**Këndvështrimi i vjetër:**
- Sëmundja qëndron në qendër.
- Qëllimi: simptomat të ikin.
- Mjeku di më mirë.
- Ti je pacient/e.

**Këndvështrimi i Recovery-t:**
- Njeriu qëndron në qendër.
- Qëllimi: një jetë e mirë.
- Ti dhe profesionisti vendosni së bashku.
- Ti je njeri me përvojë.

Këndvështrimi i vjetër nuk është i gabuar. Shpesh ndihmon. Por nuk mjafton i vetëm.

Këndvështrimi i Recovery-t e zgjeron këndvështrimin e vjetër. Nuk e zëvendëson.
:::

:::quiz{id=q-16}
- q: "A e zëvendëson këndvështrimi i Recovery-t këndvështrimin mjekësor?"
  type: true-false
  correct: false
  explanation: "Jo — e zgjeron atë. Të dyja kanë vendin e tyre."

- q: "Çfarë qëndron në qendër në këndvështrimin e Recovery-t?"
  type: multiple-choice
  options:
    - text: "Diagnoza"
      correct: false
    - text: "Njeriu"
      correct: true
:::

:::flashcards{id=f-16}
- front: "Ndryshim paradigme"
  back: "Nga vështrimi i deficitit (patogjenezë) te vështrimi i burimeve (salutogjenezë) — pa hequr dorë nga këndvështrimi mjekësor."
- front: "Compliance vs. Shared Decision-Making"
  back: "Compliance = ti bindesh. Shared Decision-Making = ju vendosni së bashku."
- front: "Sinteza e dijes"
  back: "Praktika e orientuar nga Recovery lidh dijen profesionale me përvojën e jetuar si burime të barabarta (Amering & Schmolke 2012)."
:::

:::standard{reading_time=2}
Recovery është më shumë se një metodë e re. Është një ndryshim perspektive — një mënyrë tjetër për të parë krizën psikike dhe shërimin.

**Këndvështrimi i orientuar nga sëmundja** vendos diagnozën në qendër. Qëllimi është mungesa e simptomave. Eksperti është profesionisti. Ti ndjek një plan trajtimi. Vështrimi drejtohet drejt asaj që mungon ose është prishur — drejt deficitit.

**Këndvështrimi i orientuar nga Recovery** vendos njeriun në qendër. Qëllimi është një jetë me kuptim — me ose pavarësisht simptomave. Ekspertë janë dy: profesionisti DHE ti vetë. Vendimet merren së bashku (Shared Decision-Making). Vështrimi drejtohet drejt burimeve, shpresës, lidhjes.

Disa çifte termash tregojnë ndryshimin:

- Diagnoza në qendër → Njeriu në qendër
- Mungesa e simptomave si qëllim → Jeta me kuptim si qëllim
- Compliance → Shared Decision-Making
- Vështrim deficiti (patogjenezë) → Vështrim burimesh (salutogjenezë)
- Rrugë lineare shërimi → Rrugë individuale, jo-lineare
- Pacient/e → Njeri / Person me përvojë / Student/e

E rëndësishme: kolona e djathtë nuk e zëvendëson të majtën. Të dyja kanë vendin e tyre. Medikamentet mund të ndihmojnë. Diagnozat mund të orientojnë. Një klinikë mund të jetë një vend i sigurt. Por kjo vetëm nuk mjafton — Recovery e zgjeron pamjen mjekësore me zërin tënd, vlerat tua, kuptimin tënd.

Amering dhe Schmolke e thonë me pak fjalë: praktika e orientuar nga Recovery nuk është një modul shtesë mbi të. Ajo është një mënyrë tjetër prodhimi dijeje — përmes lidhjes së dijes profesionale me përvojën e jetuar si burime të barabarta.
:::

:::standard-quiz{id=q-16-std}
- q: "A e zëvendëson këndvështrimi i Recovery-t këndvështrimin mjekësor?"
  type: multiple-choice
  options:
    - text: "Po, e zëvendëson plotësisht."
      correct: false
    - text: "Jo — e zgjeron atë. Të dyja kanë vendin e tyre."
      correct: true
      explanation: "Recovery është një ndryshim perspektive, jo një heqje dorë nga dija mjekësore."
    - text: "Jo, është në kundërshtim me të."
      correct: false

- q: "Çfarë qëndron në qendër në këndvështrimin e Recovery-t?"
  type: multiple-choice
  options:
    - text: "Diagnoza."
      correct: false
    - text: "Njeriu — me historinë e tij, vlerat e tij, kuptimin e tij."
      correct: true
      explanation: "Diagnoza orienton, por nuk të përkufizon."
    - text: "Klinika."
      correct: false
:::

:::standard-flashcards{id=f-16-std}
- front: "Ndryshim paradigme"
  back: "Nga vështrimi i deficitit (patogjenezë) te vështrimi i burimeve (salutogjenezë) — pa hequr dorë nga këndvështrimi mjekësor."
- front: "Compliance vs. Shared Decision-Making"
  back: "Compliance = ti bindesh. Shared Decision-Making = ju vendosni së bashku."
- front: "Dy ekspertiza"
  back: "Dija profesionale DHE përvoja e jetuar janë burime të barabarta dijeje."
:::


# 17. Tre fjali për ty
{#kap-17 reading_time=3}

Ti nuk je diagnoza jote. Ti je një njeri me një histori, me aftësi, me vlera, me marrëdhënie. Një diagnozë mund të jetë një orientim — ajo nuk është kurrë e gjithë e vërteta për ty.

## Tre fjali që dëgjohen shpesh në lëvizjen Recovery

- Ti je eksperte ose ekspert i jetës sate. Përvoja jote është dije.
- Nuk duhet t'i mbash të gjitha vetëm. Kërko aleatë — peer-a, profesionistë, persona besimi.
- Ke të drejtën të vendosësh vetë ritmin dhe drejtimin. Një kthim mbrapsht nuk është dështim.

## Çfarë mund të të japë kërkimi

Shpresa është një parashikues i shërimit [^schrank2012]. Peer-Support ka një efekt të matshëm në vetëefikasitet [^slade2024peer] [^mahlke2017]. Pjesëmarrja në Recovery College redukton kostot pasuese të shërbimeve dhe rrit mirëqenien [^ronaldson2024]. Vetëstigma mund të ndryshohet [^yanos2015].

:::reflection{id=7 title="Hapi yt i parë"}
- Kë mund të kontaktosh këtë javë, që do të të dëgjonte pa gjykuar?
- Cili veprim i vogël dhe i realizueshëm do të ishte një ankor shprese për shtatë ditët e ardhshme?
- Cila fushë nga modeli CHIME — ose nga treshja Shpresë-Fuqi-Kuptim — duhet të marrë këtë javë pak më shumë vëmendje?
:::

:::easy{reading_time=1}
Ti nuk je diagnoza jote. Ti je një njeri.

Tre fjali të rëndësishme:

- Ti e njeh jetën tënde më mirë.
- Nuk duhet t'i mbash të gjitha vetëm.
- Ke të drejtën të vendosësh ritmin tënd.

Kthimet mbrapsht janë pjesë e saj. Nuk janë dështim.
:::

:::quiz{id=q-17}
- q: "Çfarë do të thotë „në Recovery"?"
  type: multiple-choice
  options:
    - text: "Je i shëruar."
      correct: false
    - text: "Je në rrugë — një proces, jo një gjendje."
      correct: true

- q: "A është një kthim mbrapsht dështim?"
  type: true-false
  correct: false
  explanation: "Jo — kthimet mbrapsht janë pjesë e rrjedhës jo-lineare të Recovery-t."
:::

:::flashcards{id=f-17}
- front: "Ti je ekspert/e i/e jetës sate"
  back: "Askush nuk e njeh përvojën tënde sa ti. Zëri yt ka rëndësi — i barabartë me dijen profesionale."
- front: "Ritmi & drejtimi"
  back: "Ti vendos të dyja. Recovery nuk është e matshme dhe nuk është e krahasueshme."
:::

:::standard{reading_time=2}
Ti nuk je diagnoza jote. Ti je një njeri me një histori, me aftësi, me vlera, me marrëdhënie. Një diagnozë mund të jetë një orientim — ajo nuk është kurrë e gjithë e vërteta për ty.

Tre fjali që dëgjohen përsëri dhe përsëri në lëvizjen Recovery — dhe që duam të të japim me vete:

- **Ti je eksperte ose ekspert i jetës sate.** Përvoja jote është dije. Askush nuk e njeh frymëmarrjen tënde, netët e tua, shpresat e tua si ti. Ky zë ka rëndësi — i barabartë me çdo dije profesionale.
- **Nuk duhet t'i mbash të gjitha vetëm.** Kërko aleatë. Peer-a, profesionistë, persona besimi, të afërm, një grup vetëndihme, një Recovery College. Shpresën ke të drejtën ta huazosh, derisa ta ndiesh sërish vetë.
- **Ke të drejtën të vendosësh vetë ritmin dhe drejtimin.** Recovery nuk është e matshme dhe nuk është e krahasueshme. Një kthim mbrapsht nuk është dështim — bën pjesë në rrugën jo-lineare. Ndonjëherë pushimi është gjithashtu përparim.

Çfarë mund të të japë kërkimi: shpresa është një parashikues i shërimit. Peer-Support e forcon në mënyrë të matshme vetëefikasitetin. Recovery Colleges ulin hospitalizimet dhe rrisin mirëqenien. Vetëstigma mund të ndryshohet.

Këto tre fjali nuk janë një program për t'u shkarkuar. Janë më shumë si tre gurë që i fut në xhep. I nxjerr kur të duhen.

Ndoshta sot. Ndoshta vetëm pas gjashtë muajsh.
:::

:::standard-quiz{id=q-17-std}
- q: "Çfarë do të thotë „në Recovery"?"
  type: multiple-choice
  options:
    - text: "Je plotësisht i shëruar."
      correct: false
    - text: "Je në rrugë — një proces, jo një gjendje."
      correct: true
      explanation: "Recovery është një rrugë e vazhdueshme, jo një pikë mbarimi."
    - text: "Je pa simptoma."
      correct: false

- q: "A është një kthim mbrapsht dështim?"
  type: multiple-choice
  options:
    - text: "Po, atëherë rruga ka dështuar."
      correct: false
    - text: "Jo — bën pjesë në rrjedhën jo-lineare të Recovery-t."
      correct: true
      explanation: "Recovery rrallë rrjedh linearisht. Pushimet dhe kthimet mbrapsht janë pjesë e rrugës."
    - text: "Ndoshta — varet sa i madh është."
      correct: false
:::

:::standard-flashcards{id=f-17-std}
- front: "Tre fjali"
  back: "1) Ti je ekspert i jetës sate. 2) Nuk duhet t'i mbash vetëm. 3) Ti vendos ritmin dhe drejtimin."
- front: "Kthim mbrapsht"
  back: "Nuk është dështim. Bën pjesë në rrugën jo-lineare."
- front: "Të huazosh shpresën"
  back: "Kur nuk e ndien vetë shpresën, ke të drejtën ta huazosh nga të tjerët — derisa ta kesh sërish vetë."
:::


# 18. Gjuha dhe qëndrimi — pse fjalët kanë rëndësi
{#kap-18 reading_time=3}

Gjuha e orientuar nga Recovery nuk është kozmetikë. Ajo ndryshon se kush në një hapësirë njihet si subjekt — dhe kush bëhet objekt i një trajtimi [^ameringschmolke2012] [^knuf2026].

## Çfarë shmangim — dhe çfarë themi në vend të tyre

Në diskursin gjermanishtfolës të Recovery-t janë konsoliduar një seri rregullash konkrete gjuhe [^ameringschmolke2012] [^knuf2026] [^slade2013]:

- „Skizofreni/ja" → më mirë: „njeri me diagnozën skizofreni" (gjuha person-first).
- „Pacient/e" / „Klient/e" në kontekstin edukativ → më mirë: „student/e", „pjesëmarrës/e", „njeri me përvojë krize".
- „Kronik", „i pashërueshëm" → të shmangen. Të dy termat janë empirikisht të dyshueshëm dhe i dëmtojnë në mënyrë të dëshmuar shërimin.
- „Compliance" → më mirë: „adhezion ndaj terapisë", më mirë akoma: „vendim i përbashkët".
- „Njohja e sëmundjes" → më mirë: „kuptimi i vetë sëmundjes".
- „Recovered" → në shqip: „në Recovery" (term procesi).
- „Deficit", „bartës simptomash" → më mirë: „burim", „përvojë jetësore", „tronditje shpirtërore".

Gjuha ndryshon edhe ty vetë. Kush fillon të thotë „në Recovery" mendon më shpejt në procese se në gjendje të ngurta — dhe bën kështu shpesh hapin e parë të padukshëm.

:::easy{reading_time=1}
Fjalët ndryshojnë realitetin. Disa shembuj:

- Jo: „kronikisht i sëmurë" → më mirë: „jeton me diagnozën"
- Jo: „Compliance" → më mirë: „vendim i përbashkët"
- Jo: „Skizofren" → më mirë: „njeri me skizofreni"
- Jo: „i shëruar" → më mirë: „në Recovery"

Gjuha nuk është gjithçka. Por shpesh e ndryshon fillimin.
:::

:::quiz{id=q-18}
- q: "Cili formulim është person-first?"
  type: multiple-choice
  options:
    - text: "Borderlineri"
      correct: false
    - text: "Njeri me diagnozën borderline"
      correct: true

- q: "Cili term duhet të shmanget?"
  type: multiple-choice
  options:
    - text: "Njeri me përvojë krize"
      correct: false
    - text: "Kronikisht i pashërueshëm"
      correct: true
      explanation: "Empirikisht i dyshueshëm dhe në mënyrë të dëshmuar pengues i shërimit."
:::

:::flashcards{id=f-18}
- front: "Gjuha person-first"
  back: "Diagnoza pas njeriut, jo para tij. „Njeri me skizofreni" në vend të „skizofren"."
- front: "në Recovery"
  back: "Termi i procesit në shqip. Në vend të „i shëruar" ose „i sëmurë" — si rrugë e vazhdueshme."
- front: "Të shmangësh Compliance"
  back: "Në vend të „Compliance" (ti zbaton udhëzimet) më mirë „vendim i përbashkët" ose „adhezion ndaj terapisë"."
:::

:::standard{reading_time=2}
Fjalët nuk janë të padëmshme. Ato ndryshojnë se kush në një hapësirë njihet si njeri — dhe kush bëhet objekt i një trajtimi. Gjuha e orientuar nga Recovery prandaj nuk është kozmetikë. Është qëndrim.

Në diskursin gjermanishtfolës të Recovery-t janë konsoliduar rregulla konkrete gjuhe. Disa shembuj:

- „Skizofreni" → më mirë: „njeri me diagnozën skizofreni" (**gjuha person-first**).
- „Pacient/e" / „Klient/e" në kontekstin edukativ → më mirë: „student/e", „pjesëmarrës/e", „njeri me përvojë krize".
- „Kronik", „i pashërueshëm" → të shmangen. Të dy termat janë empirikisht të dyshueshëm dhe i dëmtojnë në mënyrë të dëshmuar shërimin.
- „Compliance" → më mirë: „adhezion ndaj terapisë" — më mirë akoma: „vendim i përbashkët".
- „Njohja e sëmundjes" → më mirë: „kuptimi i vetë sëmundjes".
- „I shëruar" / „recovered" → në shqip: „në Recovery" — si proces, jo si gjendje përfundimtare.
- „Deficit", „bartës simptomash" → më mirë: „burim", „përvojë jetësore", „tronditje shpirtërore".

Këto ndryshime nuk janë vetëm çështje etiketash. Kush fillon të thotë „në Recovery" mendon më shpejt në procese se në gjendje të ngurta. Kush thotë „njeri me diagnozë" e sheh së pari njeriun dhe diagnozën më pas. Kjo ndryshon shpesh pikërisht atë hap të padukshëm me të cilin fillon diçka e re.

Gjuha ndryshon edhe ty vetë. Mënyra si flet për veten formëson mënyrën si mendon për veten. Nuk është e nevojshme t'i mësosh të gjithë këta terma njëkohësisht. Por ndoshta në ditët e ardhshme do të dëgjosh me veshë të tjerë — atë që thonë mjekët, të afërmit, terapistët, ti vetë.

Dhe nëse diçka të lëndon: ke të drejtë ta thuash.
:::

:::standard-quiz{id=q-18-std}
- q: "Cili formulim është person-first?"
  type: multiple-choice
  options:
    - text: "Borderlineri."
      correct: false
    - text: "Njeri me diagnozën borderline."
      correct: true
      explanation: "Njeriu së pari, diagnoza më pas. Kjo është gjuha person-first."
    - text: "E sëmura psikike."
      correct: false

- q: "Cili term duhet të shmanget?"
  type: multiple-choice
  options:
    - text: "Njeri me përvojë krize."
      correct: false
    - text: "Kronikisht i pashërueshëm."
      correct: true
      explanation: "Empirikisht i dyshueshëm dhe në mënyrë të dëshmuar pengues i shërimit."
    - text: "Në Recovery."
      correct: false
:::

:::standard-flashcards{id=f-18-std}
- front: "Gjuha person-first"
  back: "Diagnoza pas njeriut — jo para tij. „Njeri me skizofreni" në vend të „skizofren"."
- front: "Në Recovery"
  back: "Termi i procesit në shqip. Në vend të „i shëruar" ose „kronik" — si rrugë e vazhdueshme."
- front: "Të shmangësh Compliance"
  back: "Në vend të „Compliance" (ti zbaton) më mirë „vendim i përbashkët" ose „adhezion ndaj terapisë"."
:::


# 19. Si ta përdorësh këtë workbook
{#kap-19 reading_time=2}

Ky workbook dixhital nuk është një tekst mësimor. Është një shoqërues:

- Merr kohë. Një faqe në ditë mjafton.
- Ji i/e ndershme me veten. Ti vendos çfarë ruhet ose ndahet.
- Kërce. Ndiq atë që të flet.
- Përsërit. E njëjta pyetje lexohet ndryshe pas tre muajsh.
- Ndaje, nëse dëshiron — me një person besimi, me një shoqërim peer, në një grup.

## Mbrojtja e të dhënave dhe vetëvendosja

Gjithçka që fut në këtë aplikacion të takon ty. Ti vendos nëse diçka sinkronizohet, ruhet ose fshihet. Hyrjet janë të enkriptuara. Një vetë-fshirje e të dhënave është gjithmonë e mundur. Kjo arkitekturë e vetëvendosjes nuk është një detaj teknik, por shprehje e qëndrimit të orientuar nga Recovery të këtij workbook-u [^who2021] [^samhsa2014trauma] [^uncrpd2006].

:::easy{reading_time=1}
Kështu e përdor këtë aplikacion:

- Merr kohë. Një faqe në ditë mjafton.
- Ji i/e ndershme me veten.
- Kërce nga një kapitull në tjetrin.
- Kthehu. E njëjta pyetje lexohet ndryshe më vonë.
- Ndaje, nëse dëshiron.

Të dhënat tua të takojnë ty. Aplikacioni ruan vetëm atë që ti do. Ke të drejtën të fshish gjithçka. Në çdo kohë.
:::

:::quiz{id=q-19}
- q: "A duhet të lexohen kapitujt me radhë?"
  type: true-false
  correct: false
  explanation: "Jo — kërce siç të përshtatet."

- q: "Kush vendos çfarë ruhet?"
  type: multiple-choice
  options:
    - text: "Aplikacioni"
      correct: false
    - text: "Ti"
      correct: true
:::

:::flashcards{id=f-19}
- front: "Mbrojtja e të dhënave në këtë aplikacion"
  back: "Të dhënat tua të takojnë ty. Të enkriptuara. Ti vendos çfarë sinkronizohet, ruhet ose fshihet. Të fshira në çdo kohë."
- front: "Mënyra e punës"
  back: "Një faqe në ditë. Kërcimet të lejuara. Përsëritjet të mirëpritura. Ndarja opsionale."
:::

:::standard{reading_time=2}
Ky workbook nuk është tekst mësimor. Është një shoqërues — dhe ti vendos si të shoqëron.

Disa vërejtje që kanë rezultuar të vlefshme:

- **Merr kohë.** Një faqe në ditë mjafton. Ndonjëherë mjafton një paragraf. Nuk ka një ritëm që duhet të arrish.
- **Ji i/e ndershme me veten.** Nuk duhet t'i provosh asgjë askujt — as aplikacionit. Hyrjet tua janë për ty.
- **Kërce.** Ndiq atë që të flet. Nuk duhet të lexosh me radhë.
- **Përsërit.** E njëjta pyetje reflektimi lexohet ndryshe pas tre muajsh. Kthehu.
- **Ndaje, nëse dëshiron.** Me një person besimi, një shoqërim peer, një grup — ose me askënd. Të dyja janë të drejta.

**Mbrojtja e të dhënave dhe vetëvendosja.** Gjithçka që fut në këtë aplikacion të takon ty. Ti vendos nëse diçka sinkronizohet, ruhet ose fshihet. Hyrjet janë të enkriptuara. Një vetë-fshirje e plotë e të dhënave tua është gjithmonë e mundur.

Kjo nuk është vetëm një detaj teknik. Është shprehje e qëndrimit të këtij workbook-u: ti nuk je objekt i një trajtimi, por subjekt i rrugës sate. Vetëvendosja mbi të dhënat e tua është një pjesë konkrete e Recovery-t — dhe njëkohësisht një e drejtë e njeriut (KKDPAK, OBSH 2021, SAMHSA).

Nëse një kapitull bëhet shumë, mbylle. Nëse diçka të prek, qëndro aty. Nuk ka renditje të gabuar. Ka vetëm rrugën tënde — dhe ky workbook ecën aq sa e lejon ti.
:::

:::standard-quiz{id=q-19-std}
- q: "A duhet t'i lexosh kapitujt me radhë?"
  type: multiple-choice
  options:
    - text: "Po, përndryshe nuk shkon."
      correct: false
    - text: "Jo — kërce siç të përshtatet."
      correct: true
      explanation: "Ndiq atë që të flet. Përsëritja është e mirëpritur."
    - text: "Vetëm nën udhëzimin e një profesionisti."
      correct: false

- q: "Kush vendos çfarë ruhet ose fshihet në aplikacion?"
  type: multiple-choice
  options:
    - text: "Vetë aplikacioni."
      correct: false
    - text: "Ti — në çdo kohë, plotësisht e fshirshme."
      correct: true
      explanation: "Vetëvendosja mbi të dhënat tua është shprehje e qëndrimit të orientuar nga Recovery."
    - text: "Profesionisti yt."
      correct: false
:::

:::standard-flashcards{id=f-19-std}
- front: "Mënyra e punës"
  back: "Një faqe në ditë. Kërcimet të lejuara. Përsëritjet të mirëpritura. Ndarja opsionale."
- front: "Mbrojtja e të dhënave"
  back: "Hyrjet tua janë të enkriptuara dhe të takojnë ty. Fshirja e plotë e mundur në çdo kohë."
- front: "Qëndrimi i workbook-ut"
  back: "Shoqërues, jo tekst mësimor. Ti vendos ritmin, thellësinë dhe gjerësinë — dhe ke të drejtën edhe të klikosh larg."
:::


# 20. Krizë dhe siguri — numra urgjence D–A–CH dhe rajonet shqipfolëse
{#kap-20 reading_time=2}

Nëse je tani akut nën ngarkesë — nëse ke mendime t'i bësh keq vetes ose të tjerëve, ose nëse ke ndjenjën se përmbajtjet këtu po të destabilizojnë shtesë — atëherë ky nuk është momenti i duhur për pyetje reflektimi. Të lutemi kërko tani mbështetje.

:::crisis
Numrat e urgjencës janë të ruajtur në mënyrë të strukturuar në frontmatter nën `helplines:`. Aplikacioni i shfaq si karta vend pas vendi me Tap-to-Call dhe Tap-to-Open-URL.
:::

Këto vende janë anonime, falas dhe pa gjykime. Nuk është e nevojshme të kesh një „krizë të vërtetë" për të telefonuar. Një telefonatë në një orë të hershme është gjithmonë më mirë se asnjë.

:::info{type=warmth title="Para se të klikosh larg: tre fjali për orë të rënda"}
- Nuk duhet ta bësh këtë rrugë i/e vetëm.
- Një ndjenjë është një informacion, jo një urdhër — edhe ndjenja më e rëndë do të lëvizë.
- Të kërkosh ndihmë nuk është kurrë shenjë dobësie. Është shenjë që e merr seriozisht jetën tënde.
:::

:::easy{reading_time=1}
Nëse tani je shumë keq, mos lexo më këtu. Kërko ndihmë.

- **Zvicra**: Telefon 143 (Die Dargebotene Hand). Ditë e natë.
- **Gjermania**: Telefon 0800 111 0 111.
- **Austria**: Telefon 142.
- **Shqipëria**: ALO 116 111 (Linja e Këshillimit për Fëmijë, 24h, falas).
- **Kosova**: 080 080 800 (Vetëvrasja — Ministria e Shëndetësisë).
- **Numri i emergjencës**: 112.

Këto vende janë falas dhe anonime. Mund të telefonosh, edhe nëse nuk e di nëse është mjaftueshëm e rëndë.

Një telefonatë nuk është kurrë shumë herët.
:::

:::quiz{id=q-20}
- q: "Cilin numër zgjedh në Zvicër për Die Dargebotene Hand?"
  type: multiple-choice
  options:
    - text: "112"
      correct: false
    - text: "143"
      correct: true
    - text: "147"
      correct: false
      explanation: "147 është Pro Juventute — për fëmijët dhe të rinjtë."

- q: "A duhet të kesh një „krizë të vërtetë" për të telefonuar?"
  type: true-false
  correct: false
  explanation: "Jo — një telefonatë e hershme është gjithmonë më mirë se asnjë."
:::

:::flashcards{id=f-20}
- front: "Numri i krizës në Zvicër"
  back: "143 — Die Dargebotene Hand. Ditë e natë. Anonim. Falas."
- front: "Numri i krizës në Gjermani"
  back: "0800 111 0 111 ose 0800 111 0 222. Telefonseelsorge. 24/7. Pa pagesë."
- front: "Numri i krizës në Austri"
  back: "142. Telefonseelsorge. 24/7."
- front: "Fëmijë & të rinj CH/AT"
  back: "147 — Pro Juventute (CH) ose Rat auf Draht (AT). 24/7."
- front: "Numrat e krizës në Shqipëri"
  back: "ALO 116 111 (Linja e Këshillimit për Fëmijë, 24h, falas) · Tirana Crisis Centre 0800 1010 (8–20h)."
- front: "Numrat e krizës në Kosovë"
  back: "Linja e ndihmës për fëmijë 080 011 112 · Linja kundër vetëvrasjes 080 080 800 (Ministria e Shëndetësisë)."
:::

:::standard{reading_time=2}
Nëse je tani akut nën ngarkesë — nëse ke mendime t'i bësh keq vetes ose të tjerëve, ose nëse përmbajtjet këtu po të destabilizojnë shtesë — atëherë ky nuk është momenti për pyetje reflektimi. Të lutemi merr tani mbështetje.

**Numrat më të rëndësishëm për vendet gjermanishtfolëse:**

- **Zvicra:** **143** — Die Dargebotene Hand. 24/7. Anonim. Falas.
- **Gjermania:** **0800 111 0 111** ose **0800 111 0 222** — Telefonseelsorge. 24/7. Pa pagesë.
- **Austria:** **142** — Telefonseelsorge. 24/7.

**Për Shqipërinë, Kosovën dhe rajonet shqipfolëse:**

- **Shqipëria:** **ALO 116 111** — Linja e Këshillimit për Fëmijë, 24h, falas.
- **Shqipëria:** **0800 1010** — Tirana Crisis Centre (8–20h).
- **Kosova:** **080 011 112** — Linja e ndihmës për fëmijë.
- **Kosova:** **080 080 800** — Linja kundër vetëvrasjes (Ministria e Shëndetësisë).

Në rrezik për jetën: **112** (në BE / numri i emergjencës) ose **144** (Sanität CH/AT).

Për fëmijët dhe të rinjtë në CH/AT: **147** (Pro Juventute CH / Rat auf Draht AT). 24/7.

Këto vende janë anonime, falas dhe pa gjykime. Nuk është e nevojshme të kesh një „krizë të vërtetë" për të telefonuar. Nuk duhet të shpjegosh nëse është mjaftueshëm e rëndë. Një telefonatë në një orë të hershme është gjithmonë më mirë se asnjë.

**Tre fjali për orë të rënda — para se të klikosh larg:**

- Nuk duhet ta bësh këtë rrugë i/e vetëm.
- Një ndjenjë është një informacion, jo një urdhër. Edhe ndjenja më e rëndë do të lëvizë.
- Të kërkosh ndihmë nuk është shenjë dobësie. Është shenjë që e merr seriozisht jetën tënde.

Nëse tani nuk mund t'i telefonosh askujt: kontakto një person që ke besim. Shkruaj një mesazh. Shko në stacionin më të afërt të urgjencës. Një lëvizje e vogël drejt jashtë mjafton.

Ti nuk je i/e vetëm. Edhe nëse tani ndihet ashtu.
:::

:::standard-quiz{id=q-20-std}
- q: "Cilin numër zgjedh në Zvicër në një ngarkesë akute psikike?"
  type: multiple-choice
  options:
    - text: "112"
      correct: false
    - text: "143 (Die Dargebotene Hand)"
      correct: true
      explanation: "143 është numri i krizës 24/7 për ngarkesa psikike në Zvicër."
    - text: "144 — ky është vetëm për rrezik për jetën / Sanität."
      correct: false

- q: "A duhet të kesh një „krizë të vërtetë" për të telefonuar?"
  type: multiple-choice
  options:
    - text: "Po, përndryshe nuk të marrin seriozisht."
      correct: false
    - text: "Jo — një telefonatë e hershme është gjithmonë më mirë se asnjë."
      correct: true
      explanation: "Mund të telefonosh edhe kur je i/e pasigurt."
    - text: "Vetëm kur je në rrezik për jetën."
      correct: false
:::

:::standard-flashcards{id=f-20-std}
- front: "Urgjenca Zvicër"
  back: "143 — Die Dargebotene Hand. 24/7. Anonim. Falas."
- front: "Urgjenca Gjermani"
  back: "0800 111 0 111 ose 0800 111 0 222 — Telefonseelsorge. 24/7. Pa pagesë."
- front: "Urgjenca Austri"
  back: "142 — Telefonseelsorge. 24/7."
- front: "Urgjenca Shqipëri / Kosovë"
  back: "AL: ALO 116 111 / 0800 1010 (Tirana). XK: 080 011 112 / 080 080 800. Numri i emergjencës: 112."
- front: "Kur të telefonosh?"
  back: "Gjithmonë. Edhe në pasiguri. Një telefonatë nuk është kurrë shumë herët."
:::


# 21. Një premtim i vogël në fund
{#kap-21 reading_time=2}

Recovery nuk do të thotë që gjithçka bëhet sërish ashtu siç ishte dikur. Do të thotë se diçka e re mund të lindë — ndonjëherë madje diçka që pa këtë përvojë nuk do të kishte ekzistuar kurrë.

Do të kesh ditë në të cilat kjo do të tingëllojë si një premtim i zbrazët. Dhe do të kesh ditë në të cilat do të vëresh vetë se diçka është zhvendosur — një shpresë e vockël, një lidhje e vogël, një mendim që më parë nuk ishte i mundur.

Çfarë mund të të japë kërkimi me vete: ti nuk je i/e vetëm. Ka një rrugë. Dhe shpresën ke të drejtën ta huazosh, derisa ta ndiesh sërish.

:::quote{author="Patricia Deegan, 1996" source="deegan1996" lang="en"}
By accepting what we cannot do or be, we begin to discover what we can do and who we can become.
:::

:::quote-translation{source="deegan1996" translator="përkthim i lirë"}
Duke pranuar atë që nuk mund të jemi ose të bëjmë, fillojmë të zbulojmë kush mund të jemi dhe çfarë mund të bëjmë.
:::

:::quote{author="Antonio Machado"}
Rrugët krijohen kur ecen mbi to.
:::

:::pull
Në rrugën tënde.
:::

:::easy{reading_time=1}
Recovery nuk do të thotë: gjithçka bëhet si më parë.

Recovery do të thotë: diçka e re mund të lindë.

Do të kesh ditë të rënda. Do të kesh edhe ditë më të lehta.

Tre fjali për fund:

- Ti nuk je i/e vetëm.
- Ka një rrugë.
- Shpresën ke të drejtën ta huazosh, derisa ta kesh sërish vetë.

Në rrugën tënde.
:::

:::quiz{id=q-21}
- q: "Cila figurë e përshkruan Recovery-n më mirë?"
  type: multiple-choice
  options:
    - text: "Një vijë e drejtë drejt qëllimit."
      correct: false
    - text: "Një rrugë që krijohet ndërsa ecet mbi të (Machado)."
      correct: true

- q: "Kujt i takon rruga?"
  type: multiple-choice
  options:
    - text: "Mjekut."
      correct: false
    - text: "Ty — me aleatët."
      correct: true
:::

:::flashcards{id=f-21}
- front: "Në rrugën tënde"
  back: "Fjalia mbyllëse e hyrjes. Recovery është gjithmonë rruga jote — me aleatët."
- front: "Tre fjali mbyllëse"
  back: "Ti nuk je i/e vetëm. Ka një rrugë. Shpresën ke të drejtën ta huazosh, derisa ta kesh vetë."
- front: "Rrugët krijohen kur ecen mbi to"
  back: "Antonio Machado — moto e shumë workbook-ëve të Recovery-t dhe e këtij aplikacioni."
:::

:::standard{reading_time=2}
Recovery nuk do të thotë që gjithçka bëhet sërish ashtu siç ishte dikur. Do të thotë se diçka e re mund të lindë — ndonjëherë madje diçka që pa këtë përvojë nuk do të kishte ekzistuar kurrë. Një thellësi tjetër. Një vëmendje tjetër. Ndonjëherë një gjuhë që më parë nuk e kishe.

Do të kesh ditë në të cilat kjo do të tingëllojë si një premtim i zbrazët. Dhe do të kesh ditë në të cilat do të vëresh vetë se diçka është zhvendosur — një shpresë e vockël, një lidhje e vogël, një mendim që më parë nuk ishte i mundur.

Të dyja janë pjesë e saj. Recovery nuk është një rrugë e drejtë. Ka pushime, kthesa, rrugë kthimi. Antonio Machado e ka thënë kështu: „Rrugët krijohen kur ecen mbi to." Kjo vlen edhe për rrugën tënde.

Çfarë mund të të japë kërkimi me vete:

- **Ti nuk je i/e vetëm.** Mijëra njerëz kanë kaluar nëpër kohë të ngjashme — dhe kanë gjetur një jetë të mirë.
- **Ka një rrugë.** Edhe nëse sot është e padukshme. Edhe nëse nuk duket si rruga e të tjerëve.
- **Shpresën ke të drejtën ta huazosh.** Kur tani nuk e ke vetë, të tjerët e mbajnë për ty — një shoqërim peer, një terapiste, një shoqe, një libër, një histori nga ky workbook.

Ke të drejtën ta mbyllësh sërish këtë workbook. Ke të drejtën ta hapësh sërish pas muajsh. Ke të drejtën ta ndash. Ke të drejtën ta harrosh. Ke të drejtën gjithashtu të thuash: sot jo.

Ajo që mbetet është ky premtim i vogël: Në rrugën tënde. Ne ecim një copë rrugë bashkë.
:::

:::standard-quiz{id=q-21-std}
- q: "Çfarë nëse tani nuk ndien shpresë?"
  type: multiple-choice
  options:
    - text: "Atëherë Recovery ka mbaruar."
      correct: false
    - text: "Atëherë ke të drejtën të huazosh shpresë nga të tjerët — derisa ta kesh sërish vetë."
      correct: true
      explanation: "Shpresa është e ndashme. Të tjerët mund ta mbajnë për ty."
    - text: "Atëherë ke bërë diçka gabim."
      correct: false

- q: "Si rrjedh Recovery?"
  type: multiple-choice
  options:
    - text: "Si vijë e drejtë drejt qëllimit."
      correct: false
    - text: "Si rrugë individuale — me pushime, kthesa, rrugë kthimi. „Rrugët krijohen kur ecen mbi to." (Machado)"
      correct: true
      explanation: "Recovery nuk është lineare. Kthimet mbrapsht janë pjesë e saj."
    - text: "Saktësisht njësoj si te të tjerët."
      correct: false
:::

:::standard-flashcards{id=f-21-std}
- front: "Recovery"
  back: "Diçka e re mund të lindë. Jo: gjithçka bëhet sërish si më parë."
- front: "Të huazosh shpresë"
  back: "Kur nuk e ke vetë: të tjerët e mbajnë për ty — derisa ta ndiesh sërish."
- front: "Tre fjali mbyllëse"
  back: "Ti nuk je i/e vetëm. Ka një rrugë. Shpresën ke të drejtën ta huazosh."
- front: "Në rrugën tënde"
  back: "„Rrugët krijohen kur ecen mbi to." (Antonio Machado) — Ne ecim një copë rrugë bashkë."
:::


# Vërejtje metodologjike (e brendshme)
{#methodik}

Të gjitha pohimet janë kontrolluar kundër burimeve parësore të paraqitura në frontmatter. Aty ku ishin të disponueshme rishikime dhe meta-analiza, atyre iu dha përparësi mbi studimet individuale.

Citatet fjalë për fjalë janë riprodhuar në formulimin origjinal (Quote-Widget me referencën `source`). Përshtatjet shqip janë shënuar si „përkthim i lirë" (Quote-Translation-Widget). Termat dhe modelet (CHIME, CHIME-D, Shpresë-Fuqi-Kuptim, Personal Medicine, Trialog, EX-IN, Salutogjeneza, Open Dialogue) përdoren si terma shkencorë dhe janë të lidhura në regjistrin e burimeve me autorët e tyre.

Para një shpërndarjeje komerciale të aplikacionit rekomandohet një rishikim përfundimtar i të drejtave të autorit.

Përkthimi shqip i versionit 3.8 (qershor 2026) është një draft i përkthyer me makinë nga Claude (subagent). Përmbajtjet që lidhen me krizat (Kapitulli 20, numrat e urgjencës) kërkojnë rishikim profesional nga një folës amtare i shqipes me njohuri në fushën e shëndetit mendor para botimit. Lista e numrave të urgjencës është zgjeruar për Shqipërinë dhe Kosovën; numrat duhet të verifikohen para botimit publik.
