---
schema_version: "1.2"
content_id: "recovery-einleitung"
content_version: "3.14"
title: "Recovery"
subtitle: "Komplexní úvod — Naděje. Moc. Smysl."
language: "cs"
translation_status: "draft-machine-translated"
translation_date: "2026-06-19"
translator: "Claude (draft — needs professional review, especially crisis content). Updated 2026-06-20 with Standard mode blocks."
region: "D-A-CH"
target_audience: "vlastni-zkusenost"
target_audience_label: "Pro lidi s vlastní zkušeností s psychickou zátěží"
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
    status: "draft-machine-translated"

reading_modes:
  full:  "Podrobně — s výzkumem, citacemi a zdroji"
  easy:  "Jednoduše — krátce a v lehkém jazyce"
  standard: "Standard — středně dlouhý, jasný a osobní"
default_reading_mode: "standard"
# - full: vykresluje vše kromě :::easy a :::standard
# - easy: vykresluje POUZE :::easy-bloky všech kapitol
# - standard: vykresluje POUZE :::standard-bloky (každá kapitola jeden má)
#/low zůstává jako doporučovací metadatum pro aplikaci

widget_types:
  reflection:    "Interaktivní reflexivní otázka(y) – ukládá se lokálně"
  quote:         "Doslovný citát se zdrojem"
  quote_translation: "Volně tlumočená verze s odkazem na zdroj"
  info:          "Informační rámeček"
  metaphor:      "Obrazné vysvětlení"
  crisis:        "Krizový/tísňový kontakt"
  source_chip:   "Inline zdroj jako klikatelný chip"
  pull:          "Zvýrazněná klíčová věta"
  table:         "Strukturovaná tabulka"
  easy:          "Krátká, jednoduchá varianta kapitoly – vykresluje se pouze v režimu čtení 'easy'"
  quiz:          "Mini-kvíz ke kapitole (Multiple-Choice/True-False) – ověřuje porozumění"
  flashcards:    "Učební karty ke kapitole (přední/zadní strana) – uživatel si může uložit do vlastní sbírky"
  standard:      "Středně dlouhá standardní varianta kapitoly – v každé kapitole je k dispozici"
  standard-quiz: "Mini-kvíz ke kapitole ve standardním režimu (2–3 otázky)"
  standard-flashcards: "Učební karty ke kapitole ve standardním režimu (2–4 karty)"

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
  # === Tschechische Linien (für Tschechisch-Sprecher:innen, auch in CZ lebend) ===
  - country: "CZ"
    name: "Linka první psychické pomoci"
    number: "116 123"
    coverage: "24/7, anonymní, zdarma"
    target: "dospělí"
    url: "https://www.linkapsychickepomoci.cz"
  - country: "CZ"
    name: "Linka bezpečí (děti a mládež)"
    number: "116 111"
    coverage: "24/7"
    target: "děti a mládež"
    url: "https://www.linkabezpeci.cz"
  - country: "CZ"
    name: "Linka pro rodinu a školu"
    number: "116 000"
    coverage: "24/7"
    target: "rodiny"
  - country: "CZ"
    name: "Centrum krizové intervence (Praha-Bohnice)"
    number: "284 016 666"
    coverage: "24/7"
    target: "dospělí v krizi"
  - country: "CZ"
    name: "Tísňová linka IZS"
    number: "112"
    coverage: "ohrožení života"
    target: "všichni"
---
# Důležité upozornění před čtením
{#disclaimer reading_time=2}

:::info{type=warmth title="Přečti si prosím nejdřív tohle"}
Tato aplikace je **prototyp**. Stále se vyvíjí a není dokončená.

Slouží výhradně k tomu, aby otestovala možný budoucí workbook v oblasti recovery.
:::

## Co tohle je a co není

Používáš právě **testovací verzi** aplikace, která je stále ve vývoji. Texty a funkce jsou prvním návrhem. Ještě nebyly profesionálně zkontrolovány — ani odborně-klinicky, ani jazykově.

**Tato aplikace NENÍ terapeutický nástroj.** Nenahrazuje léčbu, terapii, lékařskou konzultaci ani krizovou intervenci.

## Dodržuj prosím tato pravidla

- **Nepoužívej ji v klinickém prostředí.** V současné podobě se tato aplikace nesmí používat jako pomůcka v nemocnicích, ordinacích, poradnách ani jiných prostředích péče.
- **Nepoužívej ji jako jedinou oporu v soukromí.** Pokud sám/sama něčím procházíš, používej tuto aplikaci prosím jen v rámci organizované testovací fáze — ne jako jediný doprovod v těžké životní situaci.
- **Když máš pochybnosti: vyhledej skutečnou pomoc.** Když se ti vede špatně, obrať se na blízkou osobu, na své ošetřující nebo na krizové linky uvedené v kapitole 20 tohoto workbooku.

## Bez záruky, bez odpovědnosti

Obsahy této aplikace jsou poskytovány bez jakékoli záruky. Nepřebírá se žádná odpovědnost za škody — materiální ani nemateriální — které by mohly vzniknout používáním nebo nepoužíváním této aplikace.

Aplikace vznikla podle nejlepšího vědomí a na základě aktuálního výzkumu recovery. Přesto může obsahovat chyby, nepřesnosti nebo nevhodné formulace. Pokud si něčeho všimneš, budeme rádi za zpětnou vazbu — přesně k tomu tato testovací fáze slouží.

## Pokud se právě nacházíš v krizi

Jestli ti čtení této aplikace dělá těžkosti nebo tě destabilizuje, odlož ji.

V akutních krizích můžeš nepřetržitě kontaktovat:
- **Švýcarsko:** 143 (Die Dargebotene Hand)
- **Německo:** 0800 111 0 111 (Telefonseelsorge)
- **Rakousko:** 142 (Telefonseelsorge)
- **Při ohrožení života:** 112 nebo 144 (CH/AT) případně 112 (DE)

Říct si o pomoc není nikdy příliš brzy.

:::standard{reading_time=2}
Právě používáš **prototyp**. Tato aplikace ještě není hotová — má ukázat, jak by mohl vypadat budoucí workbook na téma Recovery. Texty a funkce jsou prvním návrhem a ještě nebyly profesionálně ověřeny.

**Tato aplikace není terapeutický nástroj.** Nenahrazuje léčbu, terapii, lékařskou pomoc ani krizovou intervenci.

**Dodržuj prosím tato pravidla:**

- Nepoužívej v klinickém prostředí — tedy v nemocnicích, ordinacích nebo poradnách jako pomůcku.
- Nepoužívej jako jedinou podporu v náročných životních situacích.
- V případě pochybností: vyhledej skutečnou pomoc — důvěryhodnou osobu, svého lékaře/terapeuta nebo krizovou linku.

**V akutní krizi** voláš nepřetržitě: ČR **Linka první psychické pomoci 116 123**, Švýcarsko **143**, Německo **0800 111 0 111**, Rakousko **142**. V ohrožení života: **112**.

Obsah je poskytován bez záruky. Pokud si něčeho všimneš, budeme rádi za zpětnou vazbu — přesně k tomu testovací fáze slouží.

Pokračováním ve čtení potvrzuješ, že jsi těmto upozorněním porozuměl/a.
:::

:::pull
Tím, že čteš dál, potvrzuješ, že jsi těmto upozorněním porozuměl/a a že aplikaci používáš v rámci testovací fáze.
:::


# Vorspann: Recovery beginnt mit Geschichten
{#vorspann reading_time=4}

:::pull
Recovery, to jsou mnoho tisíc příběhů lidí, kteří navzdory nebo díky svým symptomům našli cestu k dobrému životu.
:::

Jsou to příběhy, které se málokdy objeví v novinách, protože nepřinášejí skandály. Příběhy, které se ale dějí každý den – v knihkupectvích, u klavírů, v pěveckých sborech, v podpůrných skupinách, v obývácích, v čekárnách, v kuchyních.

Žena, která byla dlouho přesvědčená, že už nikdy nebude pracovat, a dnes vede malé knihkupectví. Otec, který po psychóze znovu hraje na klavír – jinak než dřív, s menší dokonalostí, ale s větší láskou. Mladý muž, který se po letech s diagnózou hraniční poruchy osobnosti stal průvodcem zotavením, protože chce podat ruku, kterou sám postrádal. Matka, která provázela svou dceru těžkou poruchou příjmu potravy, a říká: v tomto období jsem se o lásce naučila víc než za celý život předtím.

Takových příběhů nejsou desítky. Jsou jich tisíce. Pravděpodobně statisíce. Tolik, kolik je lidí, kteří kdy prošli těžkým psychickým obdobím.

## Recovery je doloženo

Skotská Recovery síť v roce 2007 sebrala a systematicky vyhodnotila šedesát čtyři takových příběhů [^brown2007]. Britská iniciativa ImROC sbírá svědectví z vlastní zkušenosti už řadu let [^imroc]. Mezinárodní komunita lidí slyšících hlasy shromažďuje od 90. let hlasy, které v učebnicích nenajdete [^hvn].

Mike Slade na univerzitě v Nottinghamu vybudoval s programem NEON – Narrative Experiences Online – vědeckou sbírku nahraných příběhů zotavení [^slade2021neon]. V randomizovaných kontrolovaných studiích se prokázalo, že poslech takových příběhů měřitelně zlepšuje kvalitu života – u lidí s vlastní zkušeností s psychózou [^rennick2024neon] i u blízkých, kteří je doprovázejí [^neonc2024].

Jinými slovy: Recovery není jen pocítěný slib. Recovery je doložený jev. A příběhy druhých lidí jsou samy o sobě formou pomoci.

## Recovery je praktické

Recovery se neodehrává především v ordinaci. Recovery jsou setkání. Recovery je zahrada, ve které se po měsících znovu sází. Pes, který každé ráno najde dveře. Sbor, ve kterém vlastní dech opět nachází hlas. Kamarádka, která naslouchá, aniž by chtěla opravovat. Trialogická skupina ve středeční večer. Procházka do kopců. Chleba, který v kvásku potřebuje dvanáct hodin času.

Recovery jsou příběhy o odolnosti – a o kreativitě, která často vzniká právě tam, kde se něco rozbilo. A velmi často je Recovery také: štěstí.

Ne to dokonalé, vždy zářivé štěstí z reklamních brožur. Ale to jiné – tiché, vděčné, někdy překvapené štěstí. To štěstí, které člověk pozná teprve, když ví, jak dlouhý může být den.

## A ty?

Nemusíš nic z toho ještě cítit, abys mohl/a být zde. Možná právě teď není čas na velká slova jako štěstí nebo smysl. Možná dnes stačí, že čteš tuto stránku. To je dost.

Tento workbook je psán pro lidi, kteří takovou cestu jdou – nebo ji chtějí pochopit. Nechce být hezkou teorií. Chce být ukazatelem cesty.

:::pull
Než začneme – krátký rozcestník.
:::

:::easy{reading_time=1}
Recovery je hnutí. Mnoho lidí to dokázalo: prošli těžkým obdobím. Dnes žijí dobře. I s nemocí. Někdy dokonce díky nemoci.

Takových příběhů jsou tisíce.

Recovery se neděje jen u lékaře. Recovery se děje ve tvém životě. Při vaření. Na procházce. Při rozhovoru s dobrými lidmi.

Tento workbook ti chce pomoci. Není to kniha k učení. Je to průvodce.
:::

:::quiz{id=q-vorspann}
- q: "Kde se Recovery děje nejvíce?"
  type: multiple-choice
  options:
    - text: "Jen na klinice."
      correct: false
      explanation: "Ne. Recovery se děje především v každodenním životě – v setkáních, v malých krocích."
    - text: "V životě – v setkáních, ve všedním dni."
      correct: true
      explanation: "Přesně tak. Léčba je nástroj, ne místo."
    - text: "Až když všechny příznaky zmizí."
      correct: false
      explanation: "Recovery nezačíná až po vymizení příznaků."

- q: "Kolik je příběhů Recovery?"
  type: multiple-choice
  options:
    - text: "Hrstka."
      correct: false
    - text: "Stovky."
      correct: false
    - text: "Tisíce, ne-li statisíce."
      correct: true
      explanation: "Tolik, kolik je lidí, kteří kdy prošli těžkým obdobím."
:::

:::flashcards{id=f-vorspann}
- front: "Recovery začíná …"
  back: "… příběhy. Tisíci lidí, kteří navzdory nebo díky svým symptomům našli cestu k dobrému životu."
- front: "Program NEON"
  back: "Vědecká sbírka nahraných příběhů Recovery (Univerzita Nottingham). Studie ukazují: poslech takových příběhů měřitelně zlepšuje kvalitu života."
- front: "Recovery se odehrává …"
  back: "… ne především v ordinaci. V zahradě, ve sboru, v rozhovoru, při vaření, v setkáních."
:::

:::standard{reading_time=2}
Recovery začíná příběhy. Ne teorií, ne diagnózami — lidmi, kteří našli cestu.

Žena, která si léta myslela, že už nikdy nebude pracovat, a dnes vede malé knihkupectví. Otec, který po psychóze opět hraje na klavír — jinak než dřív, s menší dokonalostí, ale s větší láskou. Mladý muž, který po diagnóze hraniční poruchy osobnosti dnes provází druhé, protože jim chce podat ruku, kterou sám postrádal.

Takových příběhů nejsou desítky. Jsou jich tisíce. Tolik, kolik je lidí, kteří kdy prošli těžkým psychickým obdobím.

Recovery je víc než jen pocítěný slib. Recovery je doložené:

- Skotská Recovery síť systematicky vyhodnotila 64 životních cest.
- Univerzita v Nottinghamu vědecky sbírá vyprávění o zotavení.
- Studie ukazují: poslech takových příběhů měřitelně zlepšuje kvalitu života.

Recovery se také málokdy odehrává nejprve v ordinaci. Recovery se děje na zahradě, kde se po měsících opět sází. Ve sboru, ve kterém tvůj dech opět nachází hlas. V kamarádce, která naslouchá, aniž by chtěla opravovat.

Nemusíš ještě nic z toho cítit, abys tu mohl/a být. Možná dnes stačí, že čteš tuto stránku. To je dost.

Tento workbook je ukazatelem cesty. Není to hezká teorie — je to průvodce pro tvou cestu.
:::

:::standard-quiz{id=q-vorspann-std}
- q: "Kde se Recovery odehrává především?"
  type: multiple-choice
  options:
    - text: "Jen na klinice nebo v terapii."
      correct: false
      explanation: "Recovery se odehrává především v každodenním životě — v setkáních, na zahradě, ve sboru, při vaření."
    - text: "V životě — v setkáních a ve všedním dni."
      correct: true
      explanation: "Přesně tak. Léčba je nástroj, ne místo."
    - text: "Až když všechny symptomy zmizí."
      correct: false
      explanation: "Ne. Recovery začíná uprostřed obtíží."

- q: "Kolik je příběhů Recovery?"
  type: multiple-choice
  options:
    - text: "Hrstka."
      correct: false
    - text: "Tisíce, pravděpodobně statisíce."
      correct: true
      explanation: "Tolik, kolik je lidí, kteří kdy prošli těžkým obdobím."
    - text: "Jen několik ojedinělých případů."
      correct: false
:::

:::standard-flashcards{id=f-vorspann-std}
- front: "Recovery začíná …"
  back: "… příběhy. Tisíci lidí, kteří navzdory nebo díky svým symptomům našli cestu k dobrému životu."
- front: "Kde se Recovery odehrává?"
  back: "Ve všedním dni. Na zahradě, ve sboru, v rozhovoru, při vaření. Léčba je nástroj, ne místo."
- front: "Jsi sám/sama?"
  back: "Ne. Tisíce lidí prošly podobnými obdobími. Jejich příběhy ukazují: cesta existuje."
:::


# Krátká poznámka k jazyku
{#sprache reading_time=2}

Slova vytvářejí realitu. Kdo je oslovován jako „schizofrenik", slyší diagnózu. Kdo je oslovován jako „člověk s diagnózou schizofrenie", zůstává nejprve člověkem. Tento úvod záměrně používá jazyk, který staví osobu před diagnózu (person-first): diagnóza až za člověkem, ne před ním [^ameringschmolke2012] [^knuf2026].

Hovoříme o lidech s psychickými krizemi, krizovými zkušenostmi nebo zkušeností z psychiatrie – ne o „nemocných". Hovoříme o lidech v Recovery – ne o „vyléčených". Používáme „ty", protože digitální workbook je osobní prostor – ne proto, že bychom se nad tebe povyšovali.

Žádný úsporný český překlad slova Recovery se neustálil – stejně jako u úzce souvisejícího pojmu empowerment. Slovo Recovery proto používáme jako odborný termín důsledně a v následující kapitole mu po bok stavíme doplňující německojazyčné čtení „Naděje – Moc – Smysl" [^ameringschmolke2006].

:::easy{reading_time=1}
Slova jsou důležitá.

Kdo je nazýván „schizofrenikem", je jen nemocný. Kdo se jmenuje „člověk se schizofrenií", zůstává nejprve člověkem.

Používáme slovo Recovery. Je anglické. V češtině pro něj není dobrý ekvivalent. Recovery znamená: jít cestou k dobrému životu.

V této aplikaci tě oslovujeme „ty". Ne proto, že bychom byli lepší. Ale proto, že tento prostor je tvůj prostor.
:::

:::quiz{id=q-sprache}
- q: "Která formulace je person-first?"
  type: multiple-choice
  options:
    - text: "Schizofrenik"
      correct: false
    - text: "Člověk s diagnózou schizofrenie"
      correct: true
      explanation: "Diagnóza za člověkem, ne před ním."
    - text: "Cvok"
      correct: false
:::

:::flashcards{id=f-sprache}
- front: "Person-first jazyk"
  back: "Diagnóza za člověkem, ne před ním: ‚člověk se schizofrenií' místo ‚schizofrenik'."
- front: "Proč Recovery jako pojem?"
  back: "Elegantní český překlad neexistuje. Recovery se důsledně používá jako ustálený odborný termín."
:::

:::standard{reading_time=2}
Slova vytvářejí realitu. Nejsou neškodná.

Kdo je oslovován jako „schizofrenik", slyší diagnózu dřív, než je člověkem. Kdo je oslovován jako „člověk s diagnózou schizofrenie", zůstává nejprve člověkem — a nese diagnózu jako součást, ne jako celek.

Tento workbook záměrně používá person-first jazyk: diagnóza stojí za člověkem, ne před ním.

Konkrétně to znamená:

- Hovoříme o lidech s psychickými krizemi, ne o „nemocných".
- Hovoříme o lidech v Recovery, ne o „vyléčených".
- Hovoříme o průvodcovství zotavením, ne o „práci s pacienty".

Pro samotné slovo Recovery neexistuje úsporný český překlad — stejně jako pro slovo empowerment. Recovery proto používáme důsledně jako odborný termín. V další kapitole mu po bok stavíme německé čtení „Naděje — Moc — Smysl".

Jedna zvláštnost: po celou dobu ti tykáme. Ne proto, že bychom se nad tebe povyšovali — naopak. Digitální workbook je osobní prostor. Tykání vytváří blízkost, aniž by zdůrazňovalo hierarchii. Pokud jsi odborník/odbornice a čteš to: ber tykání jako vzor jazykového stylu, který vyjadřuje rovnocennost.
:::

:::standard-quiz{id=q-sprache-std}
- q: "Která formulace je person-first?"
  type: multiple-choice
  options:
    - text: "Schizofrenik"
      correct: false
      explanation: "Tady přichází diagnóza jako první — to není person-first."
    - text: "Člověk s diagnózou schizofrenie"
      correct: true
      explanation: "Přesně. Diagnóza až za člověkem — člověk zůstává v popředí."
    - text: "Cvok"
      correct: false
      explanation: "Stigmatizující a redukuje osobu na diagnózu."

- q: "Proč workbook používá „ty"?"
  type: multiple-choice
  options:
    - text: "Protože se autoři cítí nadřazení."
      correct: false
    - text: "Protože digitální workbook je osobní prostor — blízkost bez hierarchie."
      correct: true
      explanation: "Tykání vytváří blízkost, ne distanci shora dolů."
:::

:::standard-flashcards{id=f-sprache-std}
- front: "Person-first jazyk"
  back: "Diagnóza za člověkem, ne před ním. „Člověk se schizofrenií" místo „schizofrenik"."
- front: "Proč zůstává „Recovery" anglicky?"
  back: "Neexistuje úsporný český překlad. Recovery se používá jako ustálený odborný termín."
:::


# Vítej
{#willkommen reading_time=3}

Jsme rádi, že jsi tady.

Tento digitální workbook je psán pro tebe – pokud sám/sama právě procházíš těžkým obdobím, dostal/a jsi diagnózu nebo už dlouho žiješ s psychickým onemocněním.

Možná jsi byl/a často v léčbě. Možná stojíš na začátku. Možná máš za sebou už dlouhou cestu a hledáš nový jazyk pro to, co prožíváš.

Workbook je napsán tak, abys ho mohl/a procházet vlastním tempem. Nemusíš číst všechno. Nemusíš nic dělat v určitém pořadí. Smíš přeskakovat, vracet se, odložit.

:::info{type=metaphor title="Obraz pro cestu: Kintsugi"}
Kintsugi je tradiční japonské umění oprav. Rozbitá keramika se spojuje zlatem. Místa zlomu se neskrývají, ale zviditelňují a zušlechťují. Nádoba není kvůli rozbití méně cenná – v očích mnohých je naopak cennější.

Cesty k zotavení často sledují podobnou logiku: nejde o to zamaskovat místa zlomu, ale začlenit je do nového celku.

Recovery neznamená stát se znovu tím, kým jsi byl/a dřív. Recovery znamená, že to, co bylo, smí být součástí nového celku.
:::

:::quote{author="U.S. Substance Abuse and Mental Health Services Administration (SAMHSA), 2012" source="samhsa2012"}
Recovery je cesta uzdravování a proměny, která umožňuje člověku s duševním onemocněním vést smysluplný život v komunitě podle vlastní volby – a zároveň usilovat o naplnění svého plného potenciálu.
:::

:::easy{reading_time=1}
Jsme rádi, že jsi tady.

Tento workbook je psán pro tebe – pokud sám/sama prožíváš těžké chvíle.

Nemusíš číst všechno. Vyber si, co ti sedí. Vrať se, kdy chceš.

Ty určuješ tempo.
:::

:::quiz{id=q-willkommen}
- q: "Pro koho je tento workbook?"
  type: multiple-choice
  options:
    - text: "Pro lidi s vlastní zkušeností s psychickou zátěží."
      correct: true
      explanation: "Je psán pro tebe – ať jsi na své cestě kdekoli."
    - text: "Jen pro odborníky."
      correct: false
    - text: "Jen pro lidi s určitou diagnózou."
      correct: false

- q: "Musíš workbook číst popořadě?"
  type: true-false
  correct: false
  explanation: "Ne. Smíš přeskakovat, vracet se, odložit. Ty určuješ tempo i pořadí."
:::

:::flashcards{id=f-willkommen}
- front: "Pro koho je tento workbook?"
  back: "Pro tebe – pokud sám/sama máš zkušenost s psychickou zátěží."
- front: "Kintsugi"
  back: "Japonské umění oprav: místa zlomu jsou spojena zlatem, ne skryta. Metafora Recovery: rozbité se stává součástí nového celku."
- front: "Sebeurčení při čtení"
  back: "Ty si vybíráš, co čteš. Ty volíš tempo. Smíš kdykoli vstoupit znovu."
:::

:::standard{reading_time=2}
Jsme rádi, že jsi tady.

Tento workbook je psán pro tebe — pokud právě procházíš těžkým obdobím, dostal/a jsi diagnózu nebo už dlouho žiješ s psychickým onemocněním.

Možná stojíš na začátku. Možná máš za sebou už mnoho terapií. Možná hledáš nový jazyk pro to, co prožíváš — nebo prostě někoho, kdo nechce opravovat, ale jít kus cesty s tebou.

Nemusíš nic přinést. Žádné předchozí znalosti, žádný dobrý den, žádný hotový příběh. Čti, co tě osloví. Vynech, co se právě nehodí. Vrať se, kdy chceš.

Obraz, který rádi používáme, je Kintsugi — japonské umění oprav. Rozbitá keramika se spojuje zlatem. Místa zlomu se neskrývají, ale zviditelňují. Nádoba není kvůli rozbití méně cenná — v očích mnohých je naopak cennější.

Recovery sleduje podobnou logiku. Nejde o to zamaskovat všechno, co bylo. Jde o to, aby rozbité smělo být součástí nového celku.

Pár pokynů, než začneš:

- Ty určuješ tempo a pořadí.
- Existují různé režimy čtení: jednoduchý, standardní, podrobný.
- Můžeš kdekoli vstoupit i vystoupit.
- Když je toho příliš: odlož to. To není rezignace — to je péče o sebe.

Nikdo na tebe netlačí. Tento prostor patří tobě.
:::

:::standard-quiz{id=q-willkommen-std}
- q: "Kdo určuje tempo a pořadí?"
  type: multiple-choice
  options:
    - text: "Aplikace."
      correct: false
    - text: "Ty."
      correct: true
      explanation: "Smíš přeskakovat, odložit, vracet se."
    - text: "Pořadí je pevně dané."
      correct: false

- q: "Co znamená Kintsugi jako obraz pro Recovery?"
  type: multiple-choice
  options:
    - text: "Místa zlomu se mají co nejvíce skrýt."
      correct: false
    - text: "Místa zlomu jsou viditelná — a stávají se součástí nového celku."
      correct: true
      explanation: "Recovery neznamená zamaskovat všechno. To, co bylo, smí být součástí nového."
:::

:::standard-flashcards{id=f-willkommen-std}
- front: "Tvé tempo"
  back: "Ty určuješ, co čteš a kdy. Přeskakovat, odložit, vracet se — vše je dovoleno."
- front: "Kintsugi"
  back: "Japonské umění oprav: místa zlomu spojená zlatem. Metafora Recovery — rozbité se stává součástí nového celku."
- front: "Když je toho příliš"
  back: "Odlož to. To není rezignace — to je péče o sebe."
:::


# 1. Co Recovery doopravdy znamená
{#kap-1 reading_time=5}

## Slovo a jeho historie

Anglické slovo recovery doslova znamená uzdravení, znovuzískání, zotavení. V oblasti duševního zdraví se od 80. let 20. století etablovalo jako souhrnný pojem pro nový pohled na duševní utrpení [^anthony1993] [^deegan1988].

Recovery přitom není v první řadě medicínským termínem. Pochází ze zkušeností lidí, kteří sami obdrželi psychiatrické diagnózy a odmítli se jimi nechat redukovat [^chamberlin1978] [^deegan1988].

## Klasická definice

Nejcitovanější definice pochází od Williama Anthonyho, tehdejšího ředitele Center for Psychiatric Rehabilitation na Bostonské univerzitě.

:::quote{author="Anthony, 1993, S. 15" source="anthony1993" lang="en"}
Recovery is described as a deeply personal, unique process of changing one's attitudes, values, feelings, goals, skills, and/or roles. It is a way of living a satisfying, hopeful, and contributing life even with limitations caused by illness.
:::

:::quote-translation{source="anthony1993" translator="vlastní převod"}
Recovery je hluboce osobní, jedinečný proces proměny – vlastních postojů, hodnot, pocitů, cílů, dovedností nebo rolí. Je to způsob života, ve kterém člověk i s omezeními danou nemocí může vést naplněný, nadějný život a něčím přispívat.
:::

Tato definice je už přes třicet let mezinárodním referenčním bodem. Mimo jiné ji převzala SAMHSA [^samhsa2012], formovala ji tradice Sainsbury Centre for Mental Health a byla integrována do směrnic WHO [^who2021].

## Klinické a osobní zotavení

Výzkum rozlišuje dva pojmy [^slade2009]:

- **Klinické zotavení** (clinical recovery): Příznaky ustupují nebo mizí, diagnóza ztrácí na významu. Toto chápání pochází z medicíny.
- **Osobní zotavení** (personal recovery): Prožíváš svůj život jako smysluplný, hodný žití a sebeurčený – nezávisle na tom, zda všechny příznaky zmizely.

Recovery v duchu tohoto workbooku znamená především osobní zotavení. To může jít ruku v ruce s klinickým zotavením, ale nemusí.

## Definice z německojazyčného prostoru

:::quote{author="Nadace Pro Mente Sana Švýcarsko, 2024" source="promentesana"}
Nejkratším popisem Recovery je: vést co nejlepší život, i v konfrontaci se závažným psychickým postižením.
:::

Amering a Schmolke mluví o „konci nevyléčitelnosti" [^ameringschmolke2012]. Opírají se o longitudinální výzkum, který ukazuje: I po těžkých onemocněních, jako je schizofrenie, je možný naplněný život. Knuf chápe Recovery jako proces vyrovnávání se sebou samým a s onemocněním – s cílem vést navzdory psychickým potížím nadějný a aktivní život [^knuf2026].

Německá S3-směrnice „Psychosociální terapie u závažných duševních onemocnění" vynesla Recovery do hlavního proudu péče v německojazyčném prostoru a označila Recovery-orientaci za vůdčí princip [^dgppn2019].

:::reflection{id=1 title="Co pro tebe znamená zotavení?"}
- Když slyšíš slovo zotavení – jaký obraz se ti vybaví jako první?
- Která z výše uvedených definic tě nejvíc oslovuje? A proč?
- Co by pro tebe znamenal „dobrý život" – i kdyby nebylo všechno „pryč"?
:::

:::easy{reading_time=2}
Recovery znamená: zotavení.

Ale Recovery neznamená: všechny příznaky musí zmizet.

Recovery znamená: žiješ dobře. I když ještě prožíváš těžké věci.

Jsou dva druhy zotavení:

- Příznaky ustoupí. To je klinické zotavení.
- Prožíváš svůj život jako dobrý a smysluplný. To je osobní zotavení.

Obojí je možné. Obojí může být zároveň.

Švýcarská nadace říká: Recovery znamená vést co nejlepší život. I když je tu něco těžkého.

:::reflection{id=1-easy title="Zeptej se sám sebe"}
- Co pro tebe znamená dobrý život?
- Co k němu potřebuješ? A co ne?
:::
:::

:::quiz{id=q-1}
- q: "Co znamená Recovery?"
  type: multiple-choice
  options:
    - text: "Všechny příznaky musí zmizet."
      correct: false
      explanation: "Ne. Osobní zotavení může fungovat i při přetrvávajících příznacích."
    - text: "Vést smysluplný, sebeurčený život – i když příznaky zůstávají."
      correct: true
      explanation: "Přesně tak. To je jádro osobního zotavení (Anthony 1993)."
    - text: "Určitá terapeutická metoda."
      correct: false

- q: "Které dva druhy zotavení výzkum rozlišuje?"
  type: multiple-choice
  options:
    - text: "Rychlé a pomalé zotavení."
      correct: false
    - text: "Klinické a osobní zotavení."
      correct: true
      explanation: "Klinické = příznaky pryč. Osobní = život se smyslem."
    - text: "Terapeutické a medikamentózní zotavení."
      correct: false
:::

:::flashcards{id=f-1}
- front: "Klinické zotavení"
  back: "Příznaky ustupují nebo mizí. Diagnóza ztrácí na významu. Medicínské pojetí uzdravení."
- front: "Osobní zotavení"
  back: "Prožíváš svůj život jako smysluplný, hodný žití a sebeurčený – nezávisle na tom, zda všechny příznaky zmizely."
- front: "Anthony 1993 – jádro definice"
  back: "Recovery je hluboce osobní, jedinečný proces proměny postojů, hodnot, pocitů, cílů a rolí – cesta k naplněnému životu i s omezeními."
- front: "Pro Mente Sana – nejkratší definice"
  back: "Vést co nejlepší život – i v konfrontaci s těžkým psychickým postižením."
:::

:::standard{reading_time=2}
Recovery je anglické slovo. Doslova znamená zotavení, znovuzískání, uzdravení. V oblasti duševního zdraví je od 80. let 20. století souhrnným pojmem pro nový pohled na duševní utrpení — a to takový, který nevymysleli lékaři, ale samotní lidé s vlastní zkušeností.

Klasická definice pochází od Williama Anthonyho, výzkumníka z Bostonu: Recovery je hluboce osobní proces proměny vlastních postojů, hodnot, cílů a rolí — cesta k naplněnému, nadějnému životu i s omezeními způsobenými nemocí.

Výzkum rozlišuje dvě čtení:

- **Klinické zotavení:** Příznaky ustupují nebo mizí. Diagnóza ztrácí na významu. To je medicínský pohled.
- **Osobní zotavení:** Prožíváš svůj život jako smysluplný, hodný žití a sebeurčený — nezávisle na tom, zda jsou tu ještě příznaky.

Recovery ve smyslu tohoto workbooku míří především k osobnímu zotavení. Může jít ruku v ruce s klinickým zotavením, ale nemusí. Obojí smí být současně. A obojí smí mít vlastní tempo.

Švýcarská nadace Pro Mente Sana to shrnuje jednou větou: Recovery znamená vést co nejlepší život — i v konfrontaci s těžkým psychickým postižením.

Důležité je: jsi víc než tvá diagnóza. Jsi nejprve člověk — všechno ostatní přichází potom. A tuto cestu nemusíš jít sám/sama. Druzí tě mohou doprovázet.
:::

:::standard-quiz{id=q-1-std}
- q: "Co Recovery především znamená?"
  type: multiple-choice
  options:
    - text: "Být vyléčen/a. Žádné příznaky."
      correct: false
      explanation: "To by bylo klinické zotavení. Recovery znamená víc — především osobní zotavení."
    - text: "Naplněný život — i s příznaky."
      correct: true
      explanation: "Přesně to je Anthonyho klasická definice (1993)."
    - text: "Určitou metodu terapie."
      correct: false

- q: "Které dvě druhy zotavení rozlišuje výzkum?"
  type: multiple-choice
  options:
    - text: "Rychlé a pomalé zotavení."
      correct: false
    - text: "Klinické a osobní zotavení."
      correct: true
      explanation: "Klinické = příznaky zmizely. Osobní = vést smysluplný život."

- q: "Kdo vyvinul Recovery jako koncept?"
  type: multiple-choice
  options:
    - text: "Především lékaři a farmaceutické firmy."
      correct: false
    - text: "Lidé s vlastní zkušeností z psychiatrie — společně s výzkumem."
      correct: true
      explanation: "Hnutí vychází ze zkušeností lidí s vlastní zkušeností."
:::

:::standard-flashcards{id=f-1-std}
- front: "Recovery (jádro definice)"
  back: "Vést naplněný, nadějný život — i s omezeními způsobenými nemocí (Anthony 1993)."
- front: "Klinické zotavení"
  back: "Příznaky ustupují nebo mizí. Diagnóza ztrácí na významu."
- front: "Osobní zotavení"
  back: "Prožíváš svůj život jako smysluplný, hodný žití a sebeurčený — nezávisle na tom, zda zůstávají příznaky."
- front: "Pro Mente Sana — nejkratší definice"
  back: "Vést co nejlepší život, i v konfrontaci s těžkým postižením."
:::


# 2. „Naděje — Moc — Smysl"
{#kap-2 reading_time=3}

V roce 2006 zveřejnily Michaela Amering a Margit Schmolke ve švýcarském odborném časopise Managed Care článek s názvem „Naděje – Moc – Smysl. Koncepty Recovery v psychiatrii" [^ameringschmolke2006]. Tím zásadně formovaly německojazyčné čtení Recovery.

Triáda „Naděje – Moc – Smysl" shrnuje, oč v Recovery z perspektivy DACH jde – jako úsporný, srozumitelný převod ústředních anglických pojmů.

| Česky | Anglicky | Význam v kontextu D-A-CH |
|-------|----------|--------------------------|
| **Naděje** | Hope | (Znovu)najít pocit sebe sama i nezávisle na nemoci – naděje jako léčebný zdroj. |
| **Moc** | Empowerment | Sebezmocnění, svoboda volby, vlastní odpovědnost – „moc" ve smyslu znovuzískání prostoru k jednání [^knufseibert2004]. |
| **Smysl** | Meaning | Hodnoty, cíle, přínos, sounáležitost – definovat život za hranicí role pacient/ky. |

Naděje v tomto pojetí je úzce spjata s pocitem sebe sama: se sebehodnotou, která má základ nezávisle na prožívání nemoci, a s identitou, jež zahrnuje víc než roli pacient/ky [^ameringschmolke2006].

Ty tři pojmy zapadají do Anthonyho definice Recovery [^anthony1993]. A zásadně korespondují s modelem CHIME [^leamy2011]: Naděje = Hope, Moc = Empowerment, Smysl = Meaning. Sounáležitost (Connectedness) a Identita (Identity) tvoří okolní rámec vztahů a vlastního já.

:::easy{reading_time=1}
Dvě badatelky našly v němčině tři slova pro Recovery:

- **Naděje** – Věříš, že to může být lepší.
- **Moc** – Smíš rozhodovat. Nejsi jen pacient/ka.
- **Smysl** – Tvůj život má hodnotu. Patříš sem.

Tato tři slova jsou německé čtení anglického modelu CHIME. K němu patří i sounáležitost s druhými a vlastní identita.
:::

:::quiz{id=q-2}
- q: "Co znamená ‚Moc' v tomto německém čtení?"
  type: multiple-choice
  options:
    - text: "Vykonávat moc nad jinými lidmi."
      correct: false
    - text: "Sebezmocnění – právo spolurozhodovat o vlastním životě."
      correct: true
      explanation: "‚Moc' tu znamená empowerment v pozitivním smyslu – ne moc nad druhými."
    - text: "Lékařské pravomoci."
      correct: false

- q: "Kdo zavedl triádu ‚Naděje – Moc – Smysl'?"
  type: multiple-choice
  options:
    - text: "Patricia Deegan"
      correct: false
    - text: "Amering & Schmolke (2006)"
      correct: true
      explanation: "Ve švýcarském odborném časopise Managed Care, 2006."
    - text: "WHO"
      correct: false
:::

:::flashcards{id=f-2}
- front: "Naděje – Moc – Smysl"
  back: "Německojazyčné čtení Recovery, zavedené Amering & Schmolke 2006. Odpovídá Hope, Empowerment, Meaning v modelu CHIME."
- front: "Moc (ve smyslu Recovery)"
  back: "Sebezmocnění – právo spolurozhodovat o vlastním životě. Ne moc nad druhými."
:::

:::standard{reading_time=2}
Recovery je anglické slovo, které se těžko převádí. Rakouské psychiatrične Michaela Amering a Margit Schmolke navrhly v roce 2006 ve švýcarském časopise Managed Care tři německé pojmy, které vystihují jádro — triádu, která je dnes v německojazyčném prostoru ustálená a kterou v češtině přejímáme jako „Naděje — Moc — Smysl":

- **Naděje** — víra, že tvůj život může být víc než nemoc. Pocit sebe sama, který má bytí i nezávisle na příznacích.
- **Moc** — sebezmocnění. Ne moc nad druhými, ale moc nad vlastním životem. Smět spolurozhodovat. Svoboda volby. Vlastní odpovědnost.
- **Smysl** — hodnoty, cíle, sounáležitost. Smět si definovat život i mimo roli pacienta/pacientky.

Tato tři slova odpovídají klasické definici Recovery. Odpovídají také ústředním částem mezinárodně nejvýznamnějšího Recovery-modelu CHIME:

- Naděje = Hope
- Moc = Empowerment
- Smysl = Meaning

Sounáležitost (Connectedness) a Identita (Identity) tvoří kolem toho rámec — vztahy a sebepojetí jako půda, na které mohou Naděje, Moc a Smysl růst.

Nemusíš všechny tři cítit současně. Někdy je tu jen naděje, někdy jen smysl. Někdy to začne mocí — jediným rozhodnutím, které sám/sama uděláš. To stačí. Recovery není seznam k odškrtání.
:::

:::standard-quiz{id=q-2-std}
- q: "Co znamená „Moc" v tomto čtení?"
  type: multiple-choice
  options:
    - text: "Vykonávat moc nad druhými."
      correct: false
    - text: "Sebezmocnění — právo spolurozhodovat o vlastním životě."
      correct: true
      explanation: "„Moc" tu znamená Empowerment v pozitivním smyslu."
    - text: "Medicínské pravomoci."
      correct: false

- q: "Kdo zavedl triádu „Naděje — Moc — Smysl"?"
  type: multiple-choice
  options:
    - text: "Patricia Deegan"
      correct: false
    - text: "Amering a Schmolke (2006)"
      correct: true
      explanation: "Ve švýcarském časopise Managed Care."
    - text: "WHO"
      correct: false
:::

:::standard-flashcards{id=f-2-std}
- front: "Naděje — Moc — Smysl"
  back: "Německojazyčné čtení Recovery (Amering & Schmolke 2006). Odpovídá Hope, Empowerment, Meaning v modelu CHIME."
- front: "Moc ve smyslu Recovery"
  back: "Sebezmocnění — právo spolurozhodovat o vlastním životě. Ne moc nad druhými."
- front: "Naděje ve smyslu Recovery"
  back: "Víra, že tvůj život může být víc než nemoc. Pocit sebe sama, který má bytí i bez plné absence příznaků."
:::


# 3. Co Recovery NENÍ — šest mýtů
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

:::reflection{id=2 title="Který mýtus se tě dotkl?"}
- Který z těchto šesti mýtů byl pro tebe dlouho realitou?
- Kdo ti tento mýtus předal – rodina, škola, média, psychiatrický systém?
- Co by bylo jinak, kdybys tento mýtus dnes pustil/a?
:::

:::easy{reading_time=2}
Existuje mnoho mylných představ o Recovery. Šest se opakuje nejčastěji:

1. **Mýtus:** Všechny příznaky musí zmizet. → Recovery jde i s příznaky.
2. **Mýtus:** Musíš pozitivně myslet. → Není žádná povinnost dobré nálady.
3. **Mýtus:** Žádné léky nejsou povoleny. → Ty spolurozhoduješ, co pomáhá.
4. **Mýtus:** Cesta je rovná. → Krok zpět k ní patří.
5. **Mýtus:** Kdo se neuzdraví, může za to. → Nikdo za to nemůže.
6. **Mýtus:** Někteří jsou „nevyléčitelní". → Zotavení je možné i po těžkých onemocněních.
:::

:::quiz{id=q-3}
- q: "Které tvrzení je správné?"
  type: multiple-choice
  options:
    - text: "Recovery znamená, že všechny příznaky musí zmizet."
      correct: false
    - text: "Recovery může fungovat i s přetrvávajícími příznaky."
      correct: true
      explanation: "Ústřední teze Anthonyho (1993) a mnoha následných studií."
    - text: "Recovery je možné jen u lehkých nemocí."
      correct: false

- q: "Pravda nebo nepravda: Recovery znamená neužívat léky."
  type: true-false
  correct: false
  explanation: "Recovery není hnutí proti medicíně. Ty rozhoduješ společně s odborníky, co pomáhá."

- q: "Co říkají longitudinální studie jako Harding (1987) a Lally (2017) o závažných diagnózách?"
  type: multiple-choice
  options:
    - text: "Jsou nevyléčitelné."
      correct: false
    - text: "Zotavení je pravidelně možné i po těžkých průbězích."
      correct: true
      explanation: "To je základ Ameringova ‚Konce nevyléčitelnosti'."
:::

:::flashcards{id=f-3}
- front: "Největší mýtus o Recovery"
  back: "Recovery neznamená: všechny příznaky pryč. Recovery znamená: dobrý život – i s těžkostmi."
- front: "Linearita – mýtus"
  back: "Recovery není lineární. Kroky zpět k ní patří a nejsou selháním."
- front: "‚Nevyléčitelný' – mýtus"
  back: "Longitudinální studie (Harding 1987, Lally 2017) ukazují: i po těžkých onemocněních je zotavení pravidelně možné."
- front: "‚Krajně nebezpečné'"
  back: "Amering & Schmolke (2012) o prognózách jako ‚Jste příliš nemocný/á na rozhovorovou terapii' – taková dogmata berou prostor k jednání."
:::

:::standard{reading_time=2}
O Recovery koluje mnoho mylných obrazů. Šest z nich potkáváš ve všedním dni obzvlášť často — a všech šest je nesprávných.

- **„Recovery znamená, že musí zmizet všechny příznaky."** Není to pravda. I lidé s přetrvávajícími příznaky mohou vést naplněný život. Osobní zotavení může s příznaky koexistovat.
- **„Recovery znamená myslet pořád pozitivně."** Špatně. Recovery není výzva k optimismu na povel. Naděje ve výzkumu Recovery je realistické, často vzdorné přesvědčení — ne vynucená dobrá nálada.
- **„Recovery znamená obejít se bez léků."** Špatně. Recovery není antimedicínské hnutí. Znamená, že TY spolurozhoduješ, co pomáhá — a co ne.
- **„Recovery je rovná, předvídatelná cesta."** Špatně. Recovery jen málokdy probíhá lineárně. Kroky zpět k tomu patří. Nejsou selháním, ale součástí cesty.
- **„Kdo se neuzdraví, může za to sám."** Špatně. Recovery není výkonový koncept ani morální soud. Cesta závisí na mnoha faktorech: vztazích, péči, socioekonomických podmínkách, traumatu, náhodě.
- **„Těžká duševní onemocnění jsou nevyléčitelná."** Špatně — a nebezpečné. Longitudinální studie už desítky let ukazují: zotavení je pravidelně možné i po těžkých diagnózách.

Amering a Schmolke nazývají věty jako „Jste příliš nemocný/á na rozhovorovou terapii" nebo „Vše bude zase jako dřív" dokonce „krajně nebezpečnými". Takové předpovědi ti berou prostor k jednání dřív, než ho vůbec můžeš využít.

Beznaděj, která je sdělována zvenčí a přejímána dovnitř — to jsou nejzákeřnější řetězy v psychiatrii. Právě proto, že jsou neviditelné.
:::

:::standard-quiz{id=q-3-std}
- q: "Která výrok je správný?"
  type: multiple-choice
  options:
    - text: "Recovery znamená, že musí zmizet všechny příznaky."
      correct: false
    - text: "Recovery může fungovat i s přetrvávajícími příznaky."
      correct: true
      explanation: "To je ústřední tvrzení od Anthonyho 1993."
    - text: "Recovery je možné jen u lehkých nemocí."
      correct: false

- q: "Kdo je vinen, když Recovery jde ztěžka?"
  type: multiple-choice
  options:
    - text: "Ty sám/sama — málo se snažíš."
      correct: false
    - text: "Nikdo. Recovery není soutěž ani morální soud."
      correct: true
      explanation: "Cesta závisí na mnoha faktorech — ne jen na tvé vůli."

- q: "Co říkají longitudinální studie o „nevyléčitelných" diagnózách?"
  type: multiple-choice
  options:
    - text: "Nevyléčitelné zůstávají nevyléčitelnými."
      correct: false
    - text: "Zotavení je pravidelně možné i po těžkých průbězích."
      correct: true
      explanation: "Vermontská studie (Harding 1987), aktuální meta-analýzy (Lally 2017)."
:::

:::standard-flashcards{id=f-3-std}
- front: "Největší mýtus o Recovery"
  back: "„Musí zmizet všechny příznaky." — Není to pravda. Recovery znamená vést dobrý život i s těžkostmi."
- front: "Linearita — mýtus"
  back: "Recovery jen málokdy probíhá lineárně. Kroky zpět k tomu patří a nejsou selháním."
- front: "„Nevyléčitelný" — mýtus"
  back: "Longitudinální studie ukazují: zotavení je pravidelně možné i po těžkých onemocněních."
- front: "„Krajně nebezpečné""
  back: "Amering a Schmolke o prognózách typu „Jste příliš nemocný/á na terapii" — taková dogmata berou prostor."
:::


# 4. Historie hnutí Recovery
{#kap-4 reading_time=6}

## Hlasy postižených – 70. a 80. léta

Hnutí Recovery nevzniklo ve výzkumném ústavu. Začalo v 70. letech v Severní Americe, v iniciativách bývalých psychiatrických pacientů a pacientek – v takzvaném Ex-Patient nebo Survivor Movement [^chamberlin1978].

Jedním z ústředních hlasů je Patricia Deegan. V 17 letech dostala diagnózu schizofrenie a od lékaře slyšela, že nikdy nepovede normální život. Dnes je promovanou psycholožkou, badatelkou a mezinárodně uznávanou průkopnicí Recovery [^deegan1988] [^deegan1996].

Patricia Deegan zformulovala dvě ústřední myšlenky, které od té doby formují mezinárodní hnutí Recovery [^deegan1996]:

- Recovery není koncovým bodem ani pouhou stabilizací, ale proměnou – cestou, na níž člověk uznává vlastní hranice a zároveň objevuje nové možnosti.
- Lidé s duševními onemocněními nejsou pasivními příjemci pomoci, ale jsou jednajícími subjekty, kteří mohou vlastním konáním měnit svou situaci.

## Dorothea Buck, Trialog a Hearing Voices

V německojazyčném prostoru otevřela srovnatelnou cestu Dorothea Buck. Sama nacistickými zákony sterilizovaná a opakovaně léčená v psychiatrii, celý život bojovala za humánní psychiatrii [^buck1990].

V roce 1989 vzniklo v Hamburku z iniciativy Thomase Bocka první trialogické psychotické seminář – formát, ve kterém spolu mluví postižení, blízcí a odborníci na úrovni očí [^bockpriebe2005]. V roce 1992 vznikl Bundesverband Psychiatrie-Erfahrener (BPE). Mezinárodní síť Hearing Voices je v Německu, Rakousku a Švýcarsku aktivní od 90. let [^hvn].

## Zvědečtění – 90. a 2000. léta

William Anthony dodal klíčovým článkem z roku 1993 vědeckou definici [^anthony1993]. Andresen, Oades a Caputi vyvinuli v Austrálii pětifázový model psychologického zotavení [^andresen2003].

## Od konceptu k systému – od roku 2007

V roce 2007 ve Velké Británii odstartoval program ImROC (Implementing Recovery through Organisational Change). Od té doby doprovází stovky služeb v jejich přerodu k recovery-orientované praxi [^imroc] [^perkins2012].

V USA se Recovery v roce 2006 stalo oficiální směrnicí národní zdravotnické agentury SAMHSA. UN-Úmluva o právech osob se zdravotním postižením zakotvila pojetí lidských práv orientované na sebeurčení [^uncrpd2006]. WHO zveřejnila v roce 2019 iniciativu QualityRights [^who2019] a v roce 2021 směrnici „Guidance on Community Mental Health Services" [^who2021].

## Německojazyčný prostor

V Rakousku stanovily Amering a Schmolke obratový bod článkem „Naděje – Moc – Smysl" z roku 2006 [^ameringschmolke2006] a knihou „Recovery. Konec nevyléčitelnosti" z roku 2012 [^ameringschmolke2012]. V Německu Andreas Knuf společně s Ulrichem Seibertem už v roce 2004 vydali „Podporovat sebezmocnění" [^knufseibert2004]; jeho „Recovery a Empowerment" vychází dnes ve 2. vydání [^knuf2026].

EX-IN (Experienced Involvement) vznikl od roku 2005 v Brémách – inspirován Dorotheou Buck a evropským projektem Leonardo-da-Vinci [^utschakowski2009]. Od roku 2011 EX-IN koordinuje spolek EX-IN Deutschland e.V. [^exin_de]. Německá randomizovaná kontrolovaná studie peer-support prokázala jeho účinnost [^mahlke2017].

Ve Švýcarsku nese koncept Recovery do péče nadace Pro Mente Sana [^promentesana]. Recovery Colleges dnes existují mimo jiné v Bernu, ve Východním Švýcarsku, v Ženevě, ve sv. Galenu a v Curychu [^rcbern]. Vědecky byla Recovery-orientace ve švýcarské psychiatrii ukotvena mimo jiné díky Rösslerovi [^roessler2004].

:::easy{reading_time=2}
Recovery nevzniklo v nemocnici. Recovery vymysleli sami postižení.

V Americe začali pacienti a pacientky v 70. letech psát knihy. Říkali: Jsme víc než naše nemoc.

Jedním známým hlasem je Patricia Deegan. V 17 letech dostala diagnózu schizofrenie. Dnes je doktorka a pomáhá druhým.

V Německu byla důležitá Dorothea Buck. Bojovala za lepší psychiatrii.

Dnes je Recovery uznávané po celém světě – i WHO.
:::

:::quiz{id=q-4}
- q: "Kdo formoval hnutí Recovery na začátku?"
  type: multiple-choice
  options:
    - text: "Farmaceutický průmysl."
      correct: false
    - text: "Lidé s vlastní zkušeností z psychiatrie."
      correct: true
      explanation: "Hnutí vzniklo v USA v 70. letech ze Survivor Movement."
    - text: "Vedení nemocnic."
      correct: false

- q: "Kdo je Patricia Deegan?"
  type: multiple-choice
  options:
    - text: "Lékařka bez vlastní zkušenosti."
      correct: false
    - text: "Průkopnice Recovery s vlastní diagnózou schizofrenie."
      correct: true
      explanation: "Diagnostikována v 17. Dnes promovaná psycholožka a mezinárodně uznávaný hlas."
    - text: "Švýcarská badatelka v ošetřovatelství."
      correct: false
:::

:::flashcards{id=f-4}
- front: "Patricia Deegan"
  back: "V 17 letech diagnóza schizofrenie, dnes promovaná psycholožka. Klíčový hlas mezinárodního hnutí Recovery."
- front: "Dorothea Buck"
  back: "Německá průkopnice, sterilizovaná za nacismu. Celý život bojovala za humánní psychiatrii. Inspirovala EX-IN."
- front: "Survivor Movement"
  back: "Hnutí bývalých psychiatrických pacientů a pacientek v USA 70. let. Kořen hnutí Recovery."
- front: "ImROC"
  back: "Implementing Recovery through Organisational Change. Britský program od roku 2007, doprovázející služby v přerodu k recovery-orientované praxi."
:::

:::standard{reading_time=2}
Recovery nevzniklo v posluchárně, ani v ordinaci. Recovery vzniklo na ulici — v iniciativách bývalých pacientů a pacientek, kteří odmítli nechat se redukovat na svou diagnózu.

Hnutí začalo v 70. letech v Severní Americe, v takzvaném Survivor Movement. Jedním z jeho nejdůležitějších hlasů je Patricia Deegan. V 17 letech dostala diagnózu schizofrenie. Lékař jí řekl, že nikdy nepovede normální život. Dnes je promovanou psycholožkou a jednou z nejvlivnějších průkopnic Recovery na světě.

V německojazyčném prostoru byla obdobně významným hlasem Dorothea Buck. Sama během nacismu sterilizovaná a opakovaně léčená v psychiatrii, celý život bojovala za humánní psychiatrii. V roce 1989 vzniklo v Hamburku z iniciativy Thomase Bocka první trialogické psychotické seminář — formát, ve kterém spolu na úrovni očí mluví postižení, blízcí a odborníci.

Důležité milníky od té doby:

- **1993** — William Anthony dodává vědeckou definici Recovery.
- **2003** — Australští výzkumníci popisují pět fází zotavení.
- **2007** — Ve Velké Británii startuje program ImROC, který přestavuje služby na recovery-orientovanou péči.
- **2011** — Je publikován model CHIME a stává se mezinárodním standardem.
- **2021** — WHO zveřejňuje směrnice pro péči o duševní zdraví založenou na lidských právech.

Ve Švýcarsku nese koncept Recovery do péče nadace Pro Mente Sana. Recovery Colleges dnes existují v Bernu, ve východním Švýcarsku, v Ženevě, v St. Gallenu a v Curychu. V Německu EX-IN — Experienced Involvement — etabloval průvodcovství zotavením jako povolání.

Recovery tedy dávno není okrajovou myšlenkou. Je to žitá praxe tisíců lidí.
:::

:::standard-quiz{id=q-4-std}
- q: "Kdo formoval hnutí Recovery na začátku?"
  type: multiple-choice
  options:
    - text: "Farmaceutický průmysl."
      correct: false
    - text: "Lidé s vlastní zkušeností z psychiatrie."
      correct: true
      explanation: "Hnutí vzniklo v 70. letech ze Survivor Movement."
    - text: "Vedení nemocnic."
      correct: false

- q: "Kdo je Patricia Deegan?"
  type: multiple-choice
  options:
    - text: "Lékařka bez vlastní zkušenosti."
      correct: false
    - text: "Průkopnice Recovery s vlastní diagnózou schizofrenie, dnes promovaná psycholožka."
      correct: true
      explanation: "Diagnostikována v 17 letech, dnes mezinárodní hlas hnutí Recovery."

- q: "Co je EX-IN?"
  type: multiple-choice
  options:
    - text: "Skupina léků."
      correct: false
    - text: "Experienced Involvement — průvodcovství zotavením jako uznané povolání."
      correct: true
      explanation: "Vyvinuto od roku 2005 v Brémách, inspirováno Dorotheou Buck."
:::

:::standard-flashcards{id=f-4-std}
- front: "Kde vzniklo Recovery?"
  back: "Ne v posluchárně. V iniciativách bývalých psychiatrických pacientů — v Survivor Movement 70. let v Severní Americe."
- front: "Patricia Deegan"
  back: "V 17 letech diagnóza schizofrenie, dnes promovaná psycholožka. Jedna z nejvlivnějších hlasů hnutí Recovery."
- front: "Trialog"
  back: "Formát, ve kterém spolu na úrovni očí mluví postižení, blízcí a odborníci. Vznikl 1989 v Hamburku (Thomas Bock)."
- front: "Recovery Colleges ve Švýcarsku"
  back: "Bern, Východní Švýcarsko, Ženeva, St. Gallen, Curych. Vzdělávací místa pro Recovery — otevřená všem."
:::


# 5. CHIME a CHIME-D
{#kap-5 reading_time=6}

V roce 2011 vyhodnotil výzkumný tým kolem Mary Leamy a Mikea Sladea na King's College London systematicky 97 vědeckých článků a dalších 87 zpráv o průbězích zotavení [^leamy2011]. Chtěli vědět: co lidé opakovaně popisují, když líčí svou cestu duševním onemocněním?

Vyšlo z toho pět procesů, jejichž anglické počáteční písmena tvoří slovo CHIME – anglické slovo pro zvonkohru.

:::table{name="CHIME"}
| Písmeno | Proces | Co znamená |
|---------|--------|------------|
| **C** | Connectedness · Sounáležitost | Vztahy, peer kontakty, rodina, sounáležitost, společenství |
| **H** | Hope and Optimism · Naděje | Víra v možnost změny, motivace, důvěra v proces, vzory |
| **I** | Identity · Identita | Kdo jsem mimo diagnózu? Pozitivní sebeobraz, sebehodnota |
| **M** | Meaning and Purpose · Smysl | Smysl života, hodnoty, role, cíle, případně spiritualita |
| **E** | Empowerment · Sebeúčinnost | Převzít odpovědnost, rozhodovat, využívat silné stránky |
:::

CHIME je dnes nejvlivnějším modelem Recovery na světě. Bird et al. potvrdili validitu rámce ve validizační studii [^bird2014]. Tvoří základ britské studie REFOCUS, klastrově randomizovaného trialu [^slade2015refocus].

CHIME není stupňovým modelem ani seznamem k odškrtání. Popisuje pět témat, která se překrývají. Někdy je v popředí jedno, jindy jiné. V německojazyčném prostoru lze CHIME dobře propojit se čtením „Naděje – Moc – Smysl" [^ameringschmolke2006].

## CHIME-D – šestá dimenze: Obtíže

Důležitým rozvinutím modelu je CHIME-D. Stuart, Tansey a Quayle ve své systematické best-fit syntéze kvalitativní literatury o Recovery zjistili, že v původním CHIME chybí dimenze, která se ve svědectvích pravidelně objevuje: výslovné uznání obtíží (Difficulties) – traumatu, ztráty, stigmatizace a důsledků nemoci [^stuart2017].

Doplnili tak model o písmeno D:

- **C** – Connectedness · Sounáležitost
- **H** – Hope · Naděje
- **I** – Identity · Identita
- **M** – Meaning · Smysl
- **E** – Empowerment · Sebeúčinnost
- **D** – Difficulties · Obtíže: výslovné uznání traumatu, ztráty, stigmatu a důsledků nemoci

Výzkum ukazuje, že v průměru zhruba 54 % obsahu vyprávění o Recovery připadá na prožité obtíže [^stuart2017]. CHIME-D proto varuje: orientace na Recovery se nesmí překlopit do toxického optimismu. Musí ponechat prostor pro bolest, pro smutek, pro to, co opravdu bylo a je – a paralelně udržet pohled na zdroje a změnu.

Aktuální výzkum validuje CHIME-D jako robustní rámec recovery-orientované péče [^vanweeghel2024] [^hancock2025].

:::info{type=note title="Proč je CHIME-D důležité pro tento workbook"}
Koncepty Recovery jsou občas kritizovány za to, že zlehčují utrpení nebo vytvářejí „povinnost mít naději".

CHIME-D bere tuto kritiku vážně: uzdravování nesmí znamenat, že to těžké už nemá místo.

V digitálním workbooku to znamená: prostor pro bolest A pro naději. Pro ztráty A pro cíle. Pro to, co bylo, A pro to, co smí vznikat.
:::

:::reflection{id=3 title="Kde stojíš v CHIME?"}
- Které písmeno (C, H, I, M, E) tě teď nejvíc oslovuje?
- Které se právě cítí nejtíživěji?
- Když si vzpomeneš na poslední dva týdny: kde nastal malý záblesk – a kterému písmeni bys ho přiřadil/a?
:::

:::easy{reading_time=2}
Výzkumníci v roce 2011 našli pět důležitých témat v Recovery. Anglické počáteční písmena tvoří slovo CHIME (anglicky zvonkohra):

- **C** – Connectedness · Sounáležitost
- **H** – Hope · Naděje
- **I** – Identity · Identita
- **M** – Meaning · Smysl
- **E** – Empowerment · Sebezmocnění

Později přibylo ještě jedno písmeno:

- **D** – Difficulties · Obtíže

To D je důležité. Recovery nemá zmenšovat to těžké. Bolest a smutek mají mít prostor.
:::

:::quiz{id=q-5}
- q: "Co znamená ‚D' v CHIME-D?"
  type: multiple-choice
  options:
    - text: "Diagnóza"
      correct: false
    - text: "Difficulties – Obtíže (trauma, ztráta, stigma)"
      correct: true
      explanation: "Stuart, Tansey & Quayle (2017) ukázali, že tato dimenze v původním CHIME chyběla."
    - text: "Deprese"
      correct: false

- q: "Které písmeno značí ‚Sounáležitost'?"
  type: multiple-choice
  options:
    - text: "C – Connectedness"
      correct: true
    - text: "I – Identity"
      correct: false
    - text: "E – Empowerment"
      correct: false

- q: "Je CHIME seznamem k odškrtání?"
  type: true-false
  correct: false
  explanation: "Ne – CHIME popisuje pět témat, která se překrývají. Někdy je v popředí jedno, jindy jiné."
:::

:::flashcards{id=f-5}
- front: "CHIME"
  back: "Connectedness · Hope · Identity · Meaning · Empowerment. Pět procesů Recovery (Leamy et al. 2011)."
- front: "D v CHIME-D"
  back: "Difficulties – obtíže, trauma, ztráta, stigma, následky nemoci. Recovery nesmí to těžké zamlčovat (Stuart et al. 2017)."
- front: "Connectedness"
  back: "Sounáležitost. Vztahy, peer kontakty, rodina, sounáležitost, společenství."
- front: "Empowerment"
  back: "Sebezmocnění. Převzít odpovědnost, rozhodovat, využívat své silné stránky."
:::

:::standard{reading_time=2}
V roce 2011 vyhodnotil výzkumný tým na King's College London přes 180 studií a zpráv a ptal se: co lidé opakovaně popisují, když vyprávějí svou cestu Recovery? Vyšlo z toho pět procesů — a jejich anglické počáteční písmena tvoří slovo CHIME (anglicky zvonkohra).

- **C — Connectedness · Sounáležitost:** Vztahy, rodina, peer kontakty, sounáležitost, společenství.
- **H — Hope · Naděje:** Víra v možnost změny. Vzory. Důvěra v proces.
- **I — Identity · Identita:** Kdo jsem mimo svou diagnózu? Pozitivní sebepojetí mimo roli pacienta/pacientky.
- **M — Meaning · Smysl:** Hodnoty, cíle, role, někdy spiritualita.
- **E — Empowerment · Sebeúčinnost:** Převzít odpovědnost. Rozhodovat. Využívat své silné stránky.

CHIME je dnes mezinárodně nejvýznamnějším modelem Recovery. Ale není to seznam k odškrtání ani schody. Popisuje pět témat, která se překrývají. Někdy je v popředí jedno, jindy jiné.

## D v CHIME-D

V roce 2017 výzkumníci zjistili: v modelu CHIME něco chybí. Něco, co se v příbězích Recovery opakovaně objevuje — výslovné uznání obtíží. Proto přidali další písmeno:

- **D — Difficulties · Obtíže:** Trauma, ztráta, stigma, následky nemoci.

Studie ukazují: zhruba 54 % obsahu vyprávění o Recovery se týká prožitých obtíží. CHIME-D proto upozorňuje: Recovery nesmí sklouznout k vynucenému optimismu. Musí dát prostor bolesti, smutku a tomu, co skutečně bylo — souběžně s pohledem na zdroje.

Pro tebe to znamená: ve workbooku má těžké své místo. Stejně jako naděje.
:::

:::standard-quiz{id=q-5-std}
- q: "Co znamená „D" v CHIME-D?"
  type: multiple-choice
  options:
    - text: "Diagnóza"
      correct: false
    - text: "Difficulties — Obtíže (trauma, ztráta, stigma)"
      correct: true
      explanation: "Stuart, Tansey a Quayle v roce 2017 ukázali, že tato dimenze v původním CHIME chyběla."
    - text: "Deprese"
      correct: false

- q: "Které písmeno značí „Sounáležitost"?"
  type: multiple-choice
  options:
    - text: "C — Connectedness"
      correct: true
    - text: "I — Identity"
      correct: false
    - text: "E — Empowerment"
      correct: false

- q: "Je CHIME seznamem k odškrtání?"
  type: true-false
  correct: false
  explanation: "Ne — CHIME popisuje pět témat, která se překrývají. Někdy je v popředí jedno, jindy jiné."
:::

:::standard-flashcards{id=f-5-std}
- front: "CHIME"
  back: "Connectedness · Hope · Identity · Meaning · Empowerment. Pět procesů Recovery (Leamy et al. 2011)."
- front: "D v CHIME-D"
  back: "Difficulties — obtíže, trauma, ztráta, stigma. Recovery nesmí to těžké vytěsnit."
- front: "CHIME — seznam, nebo ne?"
  back: "Žádný seznam k odškrtání. Pět témat, která se překrývají. Někdy je v popředí jedno, jindy jiné."
- front: "Empowerment"
  back: "Sebeúčinnost. Převzít odpovědnost, rozhodovat, využívat své silné stránky."
:::


# 6. Pět fází zotavení
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
Recovery má často své fáze. Tři výzkumníci z Austrálie popsali pět fází:

1. **Zastavení** – Vše je těžké a beznadějné.
2. **Probuzení** – Cítíš: snad ještě něco půjde.
3. **Příprava** – Díváš se, co umíš.
4. **Znovuvybudování** – Plánuješ něco nového.
5. **Růst** – Žiješ svůj život. S příznaky nebo bez nich.

Smíš mezi fázemi přeskakovat. Není to schodiště. Je to spíš spirála.
:::

:::quiz{id=q-6}
- q: "Kolik fází popisují Andresen, Oades a Caputi?"
  type: multiple-choice
  options:
    - text: "Tři"
      correct: false
    - text: "Pět"
      correct: true
    - text: "Sedm"
      correct: false

- q: "Jsou fáze lineární?"
  type: true-false
  correct: false
  explanation: "Ne. Můžeš přeskakovat, projít stejnou fází vícekrát nebo být současně ve dvou fázích."
:::

:::flashcards{id=f-6}
- front: "Moratorium"
  back: "První fáze: zastavení. Pocit ztráty, beznaděje, stažení."
- front: "Awareness"
  back: "Fáze probuzení. První naděje. Poznání: ne všechno je ztraceno."
- front: "Growth"
  back: "Růst – naplněný život s reziduálními příznaky nebo bez nich."
- front: "Čtyři úkoly všech fází"
  back: "Najít naději · znovu budovat identitu · najít smysl · převzít odpovědnost."
:::

:::standard{reading_time=2}
Recovery málokdy probíhá po přímce. Tři australští badatelé — Andresen, Oades a Caputi — vypracovali z mnoha životních příběhů pět typických fází:

- **Moratorium (Zastavení)** — Všechno působí těžce. Cítíš se ztracený/á, stahuješ se. Naděje je daleko.
- **Awareness (Probuzení)** — První jiskra: možná přece jen není všechno pryč.
- **Preparation (Příprava)** — Děláš inventuru. Co umím? Co potřebuji? Kdo tu je?
- **Rebuilding (Znovuvybudování)** — Krok za krokem buduješ nové role, cíle a vztahy.
- **Growth (Růst)** — Žiješ život, který se cítí dobře — s reziduálními příznaky nebo bez nich.

Důležité je vědět: tyto fáze nejsou schody. Je normální projít stejnou fází několikrát. Je normální být v jedné životní oblasti už v růstu a v jiné opět v zastavení. Kroky zpět k tomu patří. Neznamenají, že jsi selhal/a.

Čtyřmi úkoly se prostupují všechny fáze: najít naději, znovu budovat identitu, najít smysl, převzít odpovědnost.

Zeptej se sám/sama sebe: v jaké fázi se právě cítíš — možná v několika současně?
:::

:::standard-quiz{id=q-6-std}
- q: "Jsou tyto pět fází jako schody — jedna po druhé?"
  type: multiple-choice
  options:
    - text: "Ano, musíš jimi projít po pořadí."
      correct: false
      explanation: "Ne — fáze nejsou rigidní. Kroky zpět a skoky jsou normální."
    - text: "Ne. Můžeš přeskakovat, opakovat nebo být současně v několika."
      correct: true
      explanation: "Přesně. Recovery je spíš spirála než schody."

- q: "Která fáze popisuje zastavení na začátku?"
  type: multiple-choice
  options:
    - text: "Growth"
      correct: false
    - text: "Moratorium"
      correct: true
      explanation: "Moratorium = fáze beznaděje a stažení."
    - text: "Awareness"
      correct: false
:::

:::standard-flashcards{id=f-6-std}
- front: "Pět fází"
  back: "Moratorium · Awareness · Preparation · Rebuilding · Growth. Nejsou to schody — skoky a kroky zpět jsou normální."
- front: "Čtyři úkoly ve všech fázích"
  back: "Najít naději · znovu budovat identitu · najít smysl · převzít odpovědnost."
- front: "Krok zpět — co to znamená?"
  back: "Ne selhání. Ale běžnou součást cesty. Recovery je spirála, ne přímka."
:::


# 7. Tři úrovně zotavení
{#kap-7 reading_time=3}

Výzkum rozlišuje tři roviny [^slade2009]:

- **Klinické zotavení**: Příznaky se zmírňují, diagnóza ztrácí na významu.
- **Funkční zotavení**: Můžeš znovu dělat věci, které jsou pro tebe důležité: pracovat, učit se, pečovat o vztahy, starat se o svůj každodenní život.
- **Osobní zotavení**: Nacházíš nový smysl, nový obraz sebe sama, novou naději. Zažíváš se jako někdo, kdo svému životu může dávat směr – i když ne všechno je „pryč".

Tyto tři roviny se mohou vzájemně posilovat, ale nemusí probíhat v tomto pořadí.

:::reflection{id=4 title="Která rovina je pro tebe důležitá?"}
- Když si představíš za rok život, který se cítí dobře: co by bylo jinak?
- Která z tří rovin – klinická, funkční, osobní – ti právě připadá nejdůležitější?
- Je něco, co jsi dřív rád/a dělal/a a chtěl/a bys to znovu vrátit do svého života?
:::

:::easy{reading_time=1}
Existují tři druhy zotavení:

- **Klinické:** Příznaky ustupují.
- **Funkční:** Znovu zvládáš věci: pracovat, učit se, pečovat o vztahy.
- **Osobní:** Cítíš smysl a naději. Spolurozhoduješ o svém životě.

Nejdůležitějším pro Recovery je osobní zotavení.
:::

:::quiz{id=q-7}
- q: "Která rovina je jádrem Recovery?"
  type: multiple-choice
  options:
    - text: "Klinické zotavení"
      correct: false
    - text: "Funkční zotavení"
      correct: false
    - text: "Osobní zotavení"
      correct: true
      explanation: "To je ústřední čtení hnutí Recovery."

- q: "Musí tři roviny probíhat v určitém pořadí?"
  type: true-false
  correct: false
  explanation: "Ne – mohou se vzájemně posilovat, ale nemusí v pevném pořadí."
:::

:::flashcards{id=f-7}
- front: "Tři roviny zotavení"
  back: "Klinická (příznaky) · funkční (každodennost, práce, vztahy) · osobní (smysl, naděje, sebeurčení)."
- front: "Osobní zotavení – nejdůležitější"
  back: "Srdce hnutí Recovery. Možné i tehdy, když klinické příznaky přetrvávají."
:::

:::standard{reading_time=2}
Ve výzkumu Recovery se často rozlišují tři roviny zotavení — a stojí za to je odlišovat:

- **Klinické zotavení** — Příznaky ustupují nebo mizí. Diagnóza ztrácí na váze. To je čtení klasické medicíny.
- **Funkční zotavení** — Dokážeš znovu dělat věci, které jsou pro tebe důležité. Pracovat nebo se učit. Vést domácnost. Pěstovat přátelství. Utvářet svůj všední den.
- **Osobní zotavení** — Nacházíš nový smysl. Budeš si identitu mimo diagnózu. Prožíváš se jako někdo, kdo smí dávat svému životu směr. Vrací se naděje.

Tyto tři roviny se mohou vzájemně nést. Nemusí ale jít v tomto pořadí. Někteří lidé prožívají osobní zotavení dlouho předtím, než příznaky utichnou. Jiní nejprve budují funkci — a teprve potom si všimnou, že se i uvnitř něco posouvá.

Hnutí Recovery klade jasný důraz na osobní zotavení. Protože je možné i tehdy, když klinické příznaky přetrvávají. Nemusíš být „vyléčen/a", abys vedl/a dobrý život.

Zeptej se sám/sama sebe: která ze tří rovin se ti právě teď zdá nejdůležitější?
:::

:::standard-quiz{id=q-7-std}
- q: "Která rovina stojí v centru hnutí Recovery?"
  type: multiple-choice
  options:
    - text: "Klinické zotavení — platí jen, když jsou pryč příznaky."
      correct: false
    - text: "Osobní zotavení — smysl, naděje, identita mimo diagnózu."
      correct: true
      explanation: "Přesně. Osobní zotavení je možné i tehdy, když příznaky zůstávají."
    - text: "Funkční zotavení — hlavně že fungujete."
      correct: false

- q: "Musí jít tři roviny po pořadí?"
  type: multiple-choice
  options:
    - text: "Ano — nejprve klinická, pak funkční, pak osobní."
      correct: false
    - text: "Ne. Mohou se nést, ale nemusí jít v pevném pořadí."
      correct: true
:::

:::standard-flashcards{id=f-7-std}
- front: "Tři roviny zotavení"
  back: "Klinická (příznaky) · funkční (každodennost, práce, vztahy) · osobní (smysl, naděje, identita)."
- front: "Osobní zotavení"
  back: "Srdce Recovery. Vést dobrý život — i když zůstávají příznaky."
- front: "Pořadí?"
  back: "Žádné pevné. Někteří lidé prožívají vnitřní zotavení dlouho před klinickou redukcí příznaků."
:::


# 8. Naděje — srdce
{#kap-8 reading_time=4}

Naděje je téměř ve všech modelech Recovery to první, co je zmíněno [^leamy2011] [^andresen2003] [^schrank2012]. Schrank a kolegové prokázali: naděje předpovídá osobní zotavení nezávisle na příznacích [^schrank2012].

Naděje ve výzkumu Recovery není naivní optimismus. Není ani opakem realismu. Je to konkrétní, často tichá víra, že tvůj život může být víc než nejhorší den, ve kterém právě jsi [^slade2013].

Mike Slade tento poznatek shrnuje takto: naděje je ta energie, která uvádí proces zotavení vůbec do pohybu – bez ní nic nezačne [^slade2013].

## Naděje jako vypůjčený zdroj

Jedna z ústředních myšlenek hnutí Recovery zní: naděje nemusí pocházet od tebe samé/ho. Druzí ji mohou držet a půjčit ti ji, dokud ji znovu nemůžeš cítit [^russinova1999] [^deegan1996] [^schrank2012]. Přesně to dělají dobří peers, dobří odborníci, dobří blízcí: „Když ty právě teď nemůžeš mít naději, podržíme ji za tebe."

Pro odborníky proto naděje není povahový rys, ale profesní kompetence – „hope-inspiring competence" podle Russinové [^russinova1999].

:::reflection{id=5 title="Zdroje naděje"}
- Co ti dřív dávalo naději – člověk, místo, činnost, myšlenka?
- Kdo ve tvém okolí teď drží naději za tebe, když ji sám/sama necítíš?
- Existuje malý krok, který by tě dnes mohl posunout směrem k naději?
:::

:::easy{reading_time=1}
Naděje je srdcem Recovery.

Naděje neznamená: jsi vždy veselý/á. Naděje znamená: věříš, že tvůj život může být víc než nejhorší den.

To nejdůležitější: nemusíš mít naději sám/sama. Mohou ji za tebe podržet druzí. Dokud ji znovu nepocítíš.

Dobrá věta: „Když právě teď nemáš naději, podržíme ji za tebe."
:::

:::quiz{id=q-8}
- q: "Co říká výzkum (Schrank et al. 2012) o naději?"
  type: multiple-choice
  options:
    - text: "Naděje předpovídá osobní zotavení nezávisle na příznacích."
      correct: true
      explanation: "Naděje je prediktor – i tehdy, když příznaky přetrvávají."
    - text: "Naděje funguje jen u lehkých onemocnění."
      correct: false
    - text: "Naději si musí člověk vždy vzbudit sám."
      correct: false

- q: "Co znamená ‚vypůjčená naděje'?"
  type: multiple-choice
  options:
    - text: "Koupit si naději od rodiny."
      correct: false
    - text: "Druzí drží naději za tebe, dokud ji sám/sama neucítíš."
      correct: true
      explanation: "Jádro hnutí Recovery."
:::

:::flashcards{id=f-8}
- front: "Vypůjčená naděje"
  back: "Když nemůžeš mít naději, peers, odborníci nebo blízcí ji drží za tebe – dokud ji znovu nepocítíš."
- front: "Naděje ve výzkumu Recovery"
  back: "Ne naivní optimismus – ale tichá, často vzdorovitá víra, že tvůj život může být víc než nejhorší den."
- front: "Hope-inspiring competence"
  back: "Russinova 1999: inspirovat naději je profesní kompetence, ne povahový rys."
:::

:::standard{reading_time=2}
Naděje je téměř ve všech modelech Recovery to první, co se zmiňuje. A není to náhoda.

Mike Slade shrnuje výzkum takto: **„Naděje je energie, která vůbec rozjíždí proces zotavení — bez ní nezačne nic."**

Naděje ve čtení Recovery není naivní optimismus. Ani opak realismu. Je to tichá, někdy vzdorovitá víra: že tvůj život může být víc než nejhorší den, ve kterém právě jsi.

## Naděje se dá vypůjčit

Jedna z nejdůležitějších myšlenek hnutí Recovery zní: **naděje nemusí pocházet od tebe samotného/é.** Mohou ji za tebe držet druzí, dokud ji znovu nezačneš cítit.

Přesně to dělají dobří peers, dobří odborníci, dobří blízcí. Říkají — někdy slovy, někdy jen svou přítomností:

> „Když ty teď nemůžeš mít naději, držíme ji za tebe. Tak dlouho, jak bude třeba."

To není terapeutická technika. To je postoj. Pro odborníky proto naděje není věc vlastní nálady, ale profesní kompetence — *hope-inspiring competence* (Russinova).

Zeptej se sám/sama sebe:

- Kdo v tvém životě za tebe drží naději právě teď?
- Kdo by mohl, kdybys o to požádal/a?
- A komu možná držíš naději ty — aniž si toho všímáš?
:::

:::standard-quiz{id=q-8-std}
- q: "Co znamená „vypůjčená naděje"?"
  type: multiple-choice
  options:
    - text: "Musíš si naději vydobýt sám/sama."
      correct: false
    - text: "Druzí za tebe drží naději, dokud ji znovu sám/sama necítíš."
      correct: true
      explanation: "Jádro hnutí Recovery. Naděje není jen individuální výkon."

- q: "Je naděje ve výzkumu Recovery totéž co naivní optimismus?"
  type: multiple-choice
  options:
    - text: "Ano, prostě optimismus."
      correct: false
    - text: "Ne. Tichá, často vzdorovitá víra, že tvůj život může být víc než nejhorší den."
      correct: true
:::

:::standard-flashcards{id=f-8-std}
- front: "Naděje v Recovery"
  back: "Ne naivní optimismus — tichá víra, že tvůj život může být víc než nejhorší den."
- front: "Vypůjčená naděje"
  back: "Když ji nemůžeš mít, peers, odborníci nebo blízcí ji drží za tebe — dokud ji znovu nepocítíš."
- front: "Slade-citát"
  back: "„Naděje je energie, která vůbec rozjíždí proces zotavení — bez ní nezačne nic.""
:::


# 9. Empowerment a sebeurčení
{#kap-9 reading_time=4}

Slovo empowerment je úzce spjato s Recovery. Pochází z hnutí za občanská práva a emancipaci 20. století [^herriger2014] [^knufseibert2004] [^knuf2026].

V 80. letech byl koncept převzat i v psychiatrické péči. Empowerment znamená: sebezmocnění. Aktivní účast. Převzít odpovědnost tam, kde ji chceš a můžeš nést. Rogers a kolegové vyvinuli první empiricky doloženou empowerment škálu [^rogers1997]. V německojazyčném prostoru je standardním dílem „Podporovat sebezmocnění" [^knufseibert2004].

## Shared Decision-Making

Empowerment znamená v praxi především jedno: společná rozhodnutí místo příkazů. Odborníci rozhodují s tebou, ne o tobě [^charles1997] [^deegandrake2006]. Studie ukazují: kdo je do rozhodování zapojen, je spokojenější a dosahuje často lepších výsledků [^joosten2008] [^slade2017sdm].

## Personal Medicine

Pat Deegan zavedla pojem Personal Medicine: nelékové věci, které člověku pomáhají zůstat zdravý – spánek, pes, určitá procházka, zpěv ve sboru, večerní telefonát. Personal Medicine je v hnutí Recovery chápána jako rovnocenná lékům a začleňuje se do dohod o léčbě [^deegan2005].

## Předem vyjádřená přání a Joint Crisis Plans

Konkrétním nástrojem empowermentu jsou dohody o léčbě nebo Joint Crisis Plans – dohody, ve kterých ve stabilním stavu zaznamenáš, co se má v krizi dít a co ne. Henderson a kolegové v RCT ukázali, že Joint Crisis Plans významně snižují počet nedobrovolných hospitalizací [^henderson2004].

:::easy{reading_time=2}
Empowerment znamená: smíš rozhodovat. Máš moc nad svým vlastním životem.

V psychiatrii se tomu často říká: rozhodujeme spolu. Ne: rozhoduje sám lékař.

Smíš se ptát. Smíš říct ne. Smíš si vyžádat druhý názor.

Existuje také „Personal Medicine". To jsou věci jiné než léky, které pomáhají: pes, procházka, sbor, dobrý přítel. Tyto věci jsou stejně důležité jako léky.
:::

:::quiz{id=q-9}
- q: "Co znamená ‚Shared Decision-Making'?"
  type: multiple-choice
  options:
    - text: "Lékař rozhoduje sám."
      correct: false
    - text: "Odborník a postižená osoba rozhodují společně."
      correct: true
      explanation: "Charles, Gafni & Whelan 1997 tento pojem etablovali."
    - text: "Rozhoduje rodina."
      correct: false

- q: "Co znamená ‚Personal Medicine' (Pat Deegan)?"
  type: multiple-choice
  options:
    - text: "Personalizované léky podle DNA profilu."
      correct: false
    - text: "Nelékové věci, které člověku pomáhají zůstat zdravý."
      correct: true
      explanation: "Pes, procházka, sbor, zpěv – lze začlenit do dohod o léčbě."

- q: "Co ukazuje RCT k Joint Crisis Plans (Henderson 2004)?"
  type: multiple-choice
  options:
    - text: "Nemají měřitelný efekt."
      correct: false
    - text: "Významně snižují počet nedobrovolných hospitalizací."
      correct: true
:::

:::flashcards{id=f-9}
- front: "Empowerment"
  back: "Sebezmocnění. Aktivní účast. Převzít odpovědnost tam, kde ji chceš a můžeš nést."
- front: "Personal Medicine"
  back: "Pat Deegan: nelékové věci, které tě udržují zdravým – spánek, pohyb, vztahy, koníčky. Rovnocenné lékům."
- front: "Joint Crisis Plan"
  back: "Dohoda ve stabilním stavu: co se má v krizi stát a co ne. RCT (Henderson 2004) ukazuje: snižuje počet nedobrovolných hospitalizací."
- front: "Shared Decision-Making"
  back: "Odborník a postižený rozhodují společně – ne instrukce a compliance."
:::

:::standard{reading_time=2}
Empowerment znamená sebezmocnění. Smíš rozhodovat — o svém životě a o své léčbě.

Zní to samozřejmě, ale v každodennosti psychiatrie to často samozřejmé není. Dlouho platilo: odborník rozhoduje, pacient/ka poslouchá. Recovery tento bod posouvá výrazně — směrem ke **sdílené odpovědnosti**.

## Tři konkrétní nástroje

**Shared Decision-Making** — Rozhodnutí se dělají společně. Ptáš se, co se doporučuje. Říkáš, co sedí tobě a tvému životu. Studie ukazují: kdo je zapojen, je spokojenější a dosahuje lepších výsledků.

**Personal Medicine** (Pat Deegan) — Nepomáhají jen léky. Pomáhá také to, co tě jako osobu udržuje zdravým: pes, ranní procházka, sbor, večerní telefonát, zahrada, výlet. V hnutí Recovery je Personal Medicine **rovnocenná** medicínské léčbě — a patří do každé léčebné dohody.

**Joint Crisis Plan** — Dohoda, kterou ve stabilním stavu uzavíráš se svým týmem: Co se má v krizi dít? Co ne? Kdo má být informován? Které léky snáším, které ne? RCT (Henderson 2004) ukazuje: takové plány významně snižují počet nedobrovolných hospitalizací.

## Co empowerment neznamená

Empowerment neznamená: zvládnout všechno sám/sama. Neznamená: postavit se proti odborníkům. Znamená: tvůj hlas se počítá — vedle odborného hlasu. Obojí dohromady je víc.

Zeptej se sám/sama sebe: kde už teď smíš rozhodovat? Kde bys chtěl/a mít víc hlasu?
:::

:::standard-quiz{id=q-9-std}
- q: "Co znamená Shared Decision-Making?"
  type: multiple-choice
  options:
    - text: "Rozhoduješ sám/sama, lékař mlčí."
      correct: false
    - text: "Odborník a ty rozhodujete společně."
      correct: true
      explanation: "Přesně. Tvůj hlas se počítá vedle odborného."

- q: "Co je „Personal Medicine" podle Pat Deegan?"
  type: multiple-choice
  options:
    - text: "Personalizované léky podle DNA testu."
      correct: false
    - text: "Nelékové věci, které tě udržují zdravým — pes, procházka, sbor, přítel."
      correct: true
      explanation: "Rovnocenné lékům a součást každé léčebné dohody."

- q: "Co přináší Joint Crisis Plan?"
  type: multiple-choice
  options:
    - text: "Je to povinné cvičení, které jen málo funguje."
      correct: false
    - text: "Snižuje počet nedobrovolných hospitalizací — doloženo RCT (Henderson 2004)."
      correct: true
:::

:::standard-flashcards{id=f-9-std}
- front: "Empowerment"
  back: "Sebezmocnění. Smíš rozhodovat — o svém životě a o své léčbě. Ne: zvládnout všechno sám/sama."
- front: "Shared Decision-Making"
  back: "Odborník a ty rozhodujete společně. Lepší výsledky, vyšší spokojenost."
- front: "Personal Medicine"
  back: "Pat Deegan: nelékové věci, které tě udržují zdravým. Rovnocenné lékům."
- front: "Joint Crisis Plan"
  back: "Dohoda ve stabilním stavu: co se má v krizi stát a co ne. Snižuje nedobrovolné hospitalizace."
:::


# 10. Salutogeneze — zůstat zdravý
{#kap-10 reading_time=3}

Recovery-orientované myšlení úzce souvisí s konceptem salutogeneze [^antonovsky1979] [^antonovsky1997]. Místo otázky „Co lidi dělá nemocnými?" (patogeneze) se salutogeneze ptá „Co lidi udržuje zdravými?".

Antonovsky identifikoval Pocit koherence (Sense of Coherence) jako klíčový ochranný faktor – schopnost prožívat vlastní život jako srozumitelný, zvladatelný a smysluplný. Tři složky pozoruhodně korespondují s procesy CHIME a s triádou „Naděje – Moc – Smysl".

V německojazyčném prostoru zpřístupnila Schmolke salutogenetické koncepty pro lidi s diagnózou schizofrenie [^schmolke2001]. Salutogeneze a Recovery jsou v literatuře DACH pravidelně popisovány jako dvě strany téhož postoje – orientovaného na zdroje, ne na deficity [^knuf2026] [^ameringschmolke2012].

:::info{type=note title="Antonovského tři složky pocitu koherence"}
- **Srozumitelnost** (Comprehensibility): Můj život dává souvislost.
- **Zvladatelnost** (Manageability): Dokážu si poradit s tím, co přijde – sám/sama nebo s pomocí.
- **Smysluplnost** (Meaningfulness): Stojí za to se angažovat.
:::

:::easy{reading_time=1}
Medicína se často ptá: Co lidi dělá nemocnými? Tomu se říká patogeneze.

Salutogeneze se ptá jinak: Co lidi udržuje zdravými?

Badatel Aaron Antonovsky našel tři důležité body:

- Rozumím svému životu.
- Dokážu zvládat těžké věci – sám/sama nebo s pomocí.
- Můj život má smysl.

Když jsou tyto tři body přítomné, jsi odolnější vůči zátěži.
:::

:::quiz{id=q-10}
- q: "Jaký je rozdíl mezi patogenezí a salutogenezí?"
  type: multiple-choice
  options:
    - text: "Patogeneze je novější."
      correct: false
    - text: "Patogeneze se ptá po nemoci – salutogeneze po zdraví."
      correct: true
    - text: "Patogeneze platí jen pro tělesné nemoci."
      correct: false

- q: "Kdo vyvinul koncept salutogeneze?"
  type: multiple-choice
  options:
    - text: "Sigmund Freud"
      correct: false
    - text: "Aaron Antonovsky"
      correct: true
:::

:::flashcards{id=f-10}
- front: "Salutogeneze"
  back: "Co lidi udržuje zdravými? (Antonovsky 1979). Protějšek patogeneze – otázky ‚Co dělá nemocným?'."
- front: "Pocit koherence"
  back: "Srozumitelnost · zvladatelnost · smysluplnost. Ochranný faktor podle Antonovského."
:::

:::standard{reading_time=2}
Klasická medicína se ptá: **„Co dělá lidi nemocnými?"** Tomu se říká patogeneze. Hledá příčiny, rizika, deficity.

Sociolog Aaron Antonovsky otázku obrátil. Ptal se: **„Co lidi udržuje zdravými — i pod zátěží?"** Tomu se říká salutogeneze.

## Pocit koherence

Antonovsky pozoroval: lidé, kteří dobře přečkají těžké životní krize, sdílejí často určitý vnitřní postoj. Nazval ho **pocit koherence** a popsal jeho tři složky:

- **Srozumitelnost** — Můj život dává smysl. To, co se mi děje, se dá zařadit.
- **Zvladatelnost** — Dokážu se vypořádat s tím, co přijde. Sám/sama nebo s pomocí.
- **Smysluplnost** — Stojí za to angažovat se. Můj život má směr.

Tyto tři složky znějí povědomě. Stojí překvapivě blízko pěti procesům CHIME a triády „Naděje — Moc — Smysl".

## Proč je to důležité

Salutogeneze a Recovery sdílejí stejný základní postoj: orientace na zdroje místo na deficity. Nejsi viděn/a jako svazek příznaků, ale jako člověk se silnými stránkami, zkušenostmi, vztahy — i tehdy, když je mnohé těžké.

V německojazyčné literatuře (Schmolke; Amering a Schmolke) jsou proto salutogeneze a Recovery často popisovány jako dvě strany téže mince.

Zeptej se sám/sama sebe: co tě udržuje zdravým — i dnes, i teď?
:::

:::standard-quiz{id=q-10-std}
- q: "Na co se salutogeneze ptá — na rozdíl od patogeneze?"
  type: multiple-choice
  options:
    - text: "Co dělá lidi nemocnými?"
      correct: false
      explanation: "To je patogeneze. Salutogeneze se ptá opačně."
    - text: "Co lidi udržuje zdravými — i pod zátěží?"
      correct: true
      explanation: "Otázka, kterou si položil Antonovsky."

- q: "Které tři složky tvoří pocit koherence?"
  type: multiple-choice
  options:
    - text: "Srozumitelnost · zvladatelnost · smysluplnost"
      correct: true
      explanation: "Antonovského trojice. Překvapivě blízko „Naděje – Moc – Smysl"."
    - text: "Naděje · víra · láska"
      correct: false
:::

:::standard-flashcards{id=f-10-std}
- front: "Salutogeneze"
  back: "Co lidi udržuje zdravými? (Antonovsky). Protějšek patogeneze — otázky „Co dělá nemocným?"."
- front: "Pocit koherence"
  back: "Srozumitelnost · zvladatelnost · smysluplnost. Ochranný faktor pod zátěží."
- front: "Salutogeneze a Recovery"
  back: "Dvě strany téhož postoje: orientace na zdroje místo na deficity. Jsi víc než tvé příznaky."
:::


# 11. Stigma a sebe-stigma
{#kap-11 reading_time=4}

Stigma je jednou z největších bariér Recovery. Goffman vtělil tento pojem do společenských věd: stigma je vlastnost, která člověka v očích druhých znehodnocuje [^goffman1963].

## Tři roviny stigmatu

Corrigan a Watson rozlišují tři roviny [^corrigan2002]:

- **Veřejné stigma**: předsudky ve společnosti („duševně nemocní jsou nebezpeční").
- **Strukturální stigma**: znevýhodnění v zákonech, na trhu práce, v pojišťovnictví.
- **Sebestigma** (internalizované stigma): negativní obrazy přijmeš jako obraz o sobě.

## Sebestigma – když bouře udeří dovnitř

Corrigan a kolegové popisují sebestigma jako regresivní proces ve čtyřech krocích: vnímat, souhlasit, vztáhnout na sebe, trpět – s důsledky pro sebehodnotu, sebeúčinnost a průběh nemoci [^corrigan2011].

Dobrá zpráva: sebestigma je proměnitelné. Systematické přehledy ukazují, že psychosociální intervence – zejména skupinové – mohou snížit internalizované stigma [^yanos2015] [^buechter2023]. Také programy proti stigmatu s přímým kontaktem s lidmi se zkušeností vykazují v meta-analýzách malé až střední efekty [^corrigan2012] [^thornicroft2016].

Ve svědectvích průvodců zotavením [^utschakowski2009] se opakovaně objevuje jedna myšlenka: ne diagnóza sama je tím, co skutečně zraňuje. Je to to, co z člověka udělá diagnóza v očích druhých – a co o sobě začne věřit sám/sama. Sebestigma vzniká přesně na tomto švu.

:::reflection{id=6 title="Vnitřní hlasy"}
- Které věty si říkáš sám/sama o své nemoci nebo o nemoci osoby, kterou doprovázíš?
- Které z těchto vět vlastně nejsou tvůj vlastní hlas, ale převzaté obrazy z okolí?
- Která věta by byla laskavější verzí téže pravdy?
:::

:::easy{reading_time=2}
Stigma znamená: jsi kvůli něčemu shazován/a. Třeba: protože máš diagnózu.

Stigma má tři oblasti:

- Ve společnosti – předsudky, špatná slova.
- V pravidlech a zákonech – např. potíže u pojišťoven.
- V tobě samém/samé – uvěříš špatným věcem o sobě.

To poslední se jmenuje sebestigma. Je nebezpečné. Stahuje tě, ještě než to udělají druzí.

Dobrá zpráva: sebestigma se může změnit. Mluvit pomáhá. Setkat se s lidmi, kteří prožívají totéž, také pomáhá.
:::

:::quiz{id=q-11}
- q: "Co je sebestigma?"
  type: multiple-choice
  options:
    - text: "Stigma, které mi způsobují druzí."
      correct: false
    - text: "Když negativní obrazy přijmu jako obraz o sobě."
      correct: true
      explanation: "Corrigan & Watson 2002 to popisují jako regresivní proces."

- q: "Která metoda nejúčinněji snižuje stigma?"
  type: multiple-choice
  options:
    - text: "Mlčení."
      correct: false
    - text: "Přímý kontakt s lidmi se žitou zkušeností."
      correct: true
      explanation: "Thornicroft et al. 2016 to ukazují v meta-analýze."

- q: "Je sebestigma proměnitelné?"
  type: true-false
  correct: true
  explanation: "Ano – psychosociální intervence, zejména skupinové, snižují internalizované stigma (Yanos 2015)."
:::

:::flashcards{id=f-11}
- front: "Tři roviny stigmatu"
  back: "Veřejné stigma · strukturální stigma · sebestigma (internalizované stigma)."
- front: "Sebestigma"
  back: "Když si negativní společenské obrazy přijmeš jako obraz o sobě. Proměnitelné."
- front: "Nejúčinnější metoda proti stigmatu"
  back: "Přímý osobní kontakt s lidmi se žitou zkušeností (Corrigan et al. 2012; Thornicroft et al. 2016)."
:::

:::standard{reading_time=2}
Stigma je jednou z největších bariér na cestě Recovery. Sociolog Erving Goffman popsal stigma jako znak, který osobu v očích druhých znehodnocuje.

## Tři roviny

Patrick Corrigan rozlišuje tři roviny, na nichž stigma působí:

- **Veřejné stigma** — Předsudky ve společnosti. „Psychicky nemocní jsou nebezpeční." „Vzchop se."
- **Strukturální stigma** — Znevýhodnění v zákonech, na trhu práce, u pojišťoven, na úřadech.
- **Sebestigma** — Negativní obrazy zvenčí přijmeš jako obraz o sobě samém/é.

## Když bouře udeří dovnitř

Sebestigma je obzvlášť zákeřné. Dělá tě malým/malou — dřív, než to vůbec zkusí druzí. Corrigan popisuje proces ve čtyřech krocích: vnímat, souhlasit, aplikovat, trpět. Výsledek: menší sebehodnota, menší sebeúčinnost, často i složitější průběh nemoci.

V příbězích průvodců zotavením se opakuje jedna myšlenka: **Není to diagnóza sama, co skutečně zraňuje. Zraňující je to, co diagnóza udělá z člověka v očích druhých — a co potom začne ten člověk věřit o sobě samém/é.**

## Dobrá zpráva

Sebestigma je proměnitelné. Výzkum ukazuje: psychosociální intervence — zvlášť ve skupinách — internalizované stigma snižují. Proti veřejnému stigmatu je nejúčinnější **přímý kontakt** s lidmi se žitou zkušeností.

Nejsi svá diagnóza. Jsi člověk s příběhem, s hodnotami, se vztahy, se schopnostmi.

Zeptej se sám/sama sebe: jaké věty si o své nemoci říkáš — a které z nich jsou vlastně přejatými hlasy zvenčí?
:::

:::standard-quiz{id=q-11-std}
- q: "Co je sebestigma?"
  type: multiple-choice
  options:
    - text: "Stigma, které mi dělají druzí."
      correct: false
    - text: "Když si negativní společenské obrazy přijmu jako obraz o sobě."
      correct: true
      explanation: "Corrigan & Watson 2002: regresivní proces ve čtyřech krocích."

- q: "Co funguje nejlépe proti veřejnému stigmatu?"
  type: multiple-choice
  options:
    - text: "Mlčet a skrývat se."
      correct: false
    - text: "Přímý kontakt mezi širokou veřejností a lidmi se žitou zkušeností."
      correct: true
      explanation: "Thornicroft et al. 2016: setkávání mění obrazy."

- q: "Je sebestigma proměnitelné?"
  type: multiple-choice
  options:
    - text: "Ne — je jednou provždy dáno."
      correct: false
    - text: "Ano — zvlášť ve skupinách a psychosociálními intervencemi."
      correct: true
:::

:::standard-flashcards{id=f-11-std}
- front: "Tři roviny stigmatu"
  back: "Veřejné stigma · strukturální stigma · sebestigma (internalizované)."
- front: "Sebestigma"
  back: "Když věříš negativním obrazům zvenčí o sobě. Dělá tě malým dřív, než to zkusí druzí. Proměnitelné."
- front: "Co funguje proti stigmatu?"
  back: "Přímý kontakt s lidmi se žitou zkušeností. Mluvit. Skupiny. Sdílet příběhy."
- front: "Nejsi svá diagnóza"
  back: "Jsi člověk s příběhem, hodnotami, vztahy, schopnostmi."
:::


# Z pacienta na experta svého života
{#kap-shift reading_time=8}

Pokud jsi byl/a dlouho v psychiatrické léčbě – snad roky, nebo i desetiletí – pak to s tebou něco udělalo. Nejen nemoc. Také ta role.

V klasické medicíně je jasné rozdělení úkolů: odborník ví. Pacient nebo pacientka poslouchá. Diagnóza vysvětluje, co se děje. Lék nebo terapie zase uzdraví. Tato logika funguje dobře u mnoha tělesných onemocnění. U duševního utrpení naráží na hranice, které jsou v posledních třiceti letech stále zřetelnější.

## Co s tebou ta dlouhá role mohla udělat

Možná v některém z následujícího sám/sama sebe poznáš:

- Naučil/a ses popisovat sám/sama sebe diagnózou. „Jsem bipolární." „Jsem hraniční." „Jsem chronický případ."
- Naučil/a ses, že někdo jiný ví lépe, co je pro tebe dobré – lékařka, terapeut, ošetřující tým.
- Naučil/a ses, že tvůj vlastní pocit se přijímá s podezřením – jako „nedostatek náhledu na nemoc" nebo „non-compliance".
- Naučil/a ses čekat – na příští termín, příští lék, příští metodu, která má konečně zabrat.
- Naučil/a ses, že zotavení je něco, co se s tebou děje. Ne něco, co děláš ty.

To není osobní slabost. To je naučená reakce. Ve výzkumu se nazývá *naučená bezmocnost* – a objevuje se všude tam, kde lidé dlouhodobě žijí v systémech, ve kterých mají malou kontrolu [^seligman1975].

Patricia Deegan, jedna z nejvlivnějších hlasů hnutí Recovery, pro to zavedla velmi ostrý pojem: *spirit breaking* [^deegan1990]. Popisuje jím, jak pomáhající systémy někdy dělají pravý opak toho, co by měly – jak lámou pocit sebe sama, vlastní iniciativu, hlas lidí, místo aby je posilovaly. Ne ze zlé vůle. Ale protože to logika systému tak nastavuje.

## Paradigma, které blokuje uzdravení

Larry Davidson a David Roe ten rozdíl vědecky zachytili [^davidsonroe2007]. Mluví o dvou velmi rozdílných významech Recovery:

- **Recovery FROM** – uzdravení Z nemoci. To je medicínské čtení: příznaky pryč, funkce zpět, diagnóza v nejlepším případě za tebou.
- **Recovery IN** – uzdravování V nemoci. To je osobní čtení: vést život, který tě naplňuje, i když příznaky stále jsou.

Obě jsou možná. Obě jsou cenná. Ale řídí se zcela odlišnými logikami. *Recovery FROM* se odehrává v ordinaci – jsi pasivní příjemce/kyně. *Recovery IN* se odehrává ve tvém životě – ty jsi jednající osoba.

Nizozemská badatelka Recovery Wilma Boevink to říká ještě ostřeji [^boevink2017]: Pro mnoho lidí s těžkými duševními onemocněními není psychiatrický systém primárně systémem uzdravujícím. Je to jeden z mnoha nástrojů na delší cestě. Kdo to pochopí – a začne používat psychiatrii jako prostředek místo aby se cítil/a jejím objektem – posouvá něco zásadního.

## Jak ten posun vypadá v praxi

Posun se děje v malých krocích. Málokdy má moment „výbuchu". Tady několik příkladů, jak může vypadat:

:::table{name="Z-pacienta-na-experta"}
| Z role pacienta/ky … | … do postoje experta/ky |
|-----------------------|--------------------------|
| „Řekněte mi, co mám dělat." | „Co doporučujete – a co se ke mně a mému životu hodí?" |
| „Lépe už nebude." | „Dnes to bylo těžké. Uvidíme, co přinese příští týden." |
| „Můj lékař ví, co je pro mě dobré." | „Rozhodujeme spolu – a já se smím průběžně ptát." |
| „Jsem moje diagnóza." | „Mám diagnózu. Ale není vším, čím jsem." |
| „Selhal/a jsem." | „Mám teď těžký den. To je informace, ne rozsudek." |
| „Možná mi tým sebere léky, když o tom budu mluvit." | „Tato nežádoucí účinek mě tíží. Můžeme zvážit alternativy?" |
| „Musím být statečný/á." | „Smím přijmout pomoc – a smím rozhodovat, kterou." |
:::

Žádný z těchto posunů neznamená, že už nepotřebuješ pomoc. Žádný neznamená, že musíš být proti odborníkům. Nejde o vzpouru, jde o pozici.

## Proč je tento posun tak důležitý

Není to jedno z mnoha doporučení. Je to předpoklad toho, aby Recovery vůbec mohlo pro tebe fungovat:

- **Naději** lze rozvíjet jen v takovém já, které se vůbec prožívá jako subjekt.
- **Osobní cíle** lze sledovat jen tehdy, pokud se prožíváš jako někdo, kdo cíle mít smí.
- **Sebeúčinnost** se buduje jen tam, kde získáváš zkušenosti, že něčeho sám/sama dosáhneš – ne pouze čekáš, že se s tebou něco stane.
- **Smysl** v životě vzniká skrze volbu. Kdo nemá volbu, těžko hledá smysl.

Výzkum to jednoznačně potvrzuje. Roe a Davidson [^roedavidson2005] popisují Recovery jako „sbírání střepů" a přepisování vlastního příběhu. Aktuální studie o rekonstrukci narativní identity ukazují [^chiba2019narrative]: kdo ve fázi Recovery (znovu)konstruuje identitu mimo roli pacienta/ky, postupuje výrazně dál – i tehdy, když příznaky přetrvávají.

:::info{type=note title="Co tu není myšleno"}
Posun z role pacienta/ky do postoje experta/ky není výzva k vysazení léků, ukončení léčby nebo k tomu, aby ses zvládal/a sám/sama. Není to výtka odborníkům.

Je to pozvání vzít vlastní hlas jako zdroj – vedle hlasů odborníků. A zjistit, co je pravdivé pro tebe.
:::

## Z někoho, kdo má zkušenost, se stává zkušený expert/ka

V němčině existuje pro tento krok krásný název: Erfahrungsexpertin, Erfahrungsexperte – expert/ka z vlastní zkušenosti. Vzdělávání EX-IN přesně to systematicky rozvíjí – z lidí se zkušeností z psychiatrie se přes dvanáct modulů stávají průvodci, kteří svou vlastní zkušenost přetváří ve zdroj užitečný pro druhé [^utschakowski2009] [^exin_de].

Nemusíš se stát průvodcem zotavením, abys tento posun udělal/a. Ale ta myšlenka je užitečná i tehdy, když ji aplikuješ jen na sebe: Tvůj příběh není něco, co se ti přihodilo a definuje tě. Je to něco, co znáš – a z čeho můžeš čerpat vědění. Vědění, které ti pomáhá lépe rozumět sám/sama sobě i druhým.

Wilma Boevink to nazývá *experiential expertise* – znalecká odbornost ze zkušenosti [^boevink2017] [^boevink2012]. Tvá znalost ze zkušenosti není méně cenná než odborné znalosti terapeutů. Je jiná. A obojí dohromady je víc než součet částí.

## Pokud ještě váháš

Možná to celé čteš a říkáš si: pěkně řečeno, ale u mě už to nepůjde. Možná máš za sebou třicet let zkušeností z nemocnice. Možná jsi ztratil/a víru. Možná ti nikdo nikdy neřekl, že tato role ti vůbec přísluší.

Tři věci:

1. **Nikdy není pozdě.** Výzkum Recovery nezná věkovou hranici ani hranici závažnosti. I lidé, kteří desetiletí žili v ústavní péči, popisují posuny – někdy právě tehdy, když už s tím sami nepočítají [^harding1987] [^lally2017].

2. **Nemusíš všechno najednou.** Jediná otázka ráno – „Co bych dnes potřeboval/a?" – už je pohyb. Jediná odpověď sám/sama sobě večer – „Dnes to bylo těžké, a já jsem tu přesto byl/a" – je také pohyb.

3. **Potřebuješ spojence.** Nikdo tento posun nezvládne sám. Peers, svépomocná skupina, důvěryhodná osoba, odborník, který tento koncept žije, Recovery College. Pokud tvůj léčebný tým tuto cestu nesdílí, není to tvoje selhání – tým má v tu chvíli slepé místo.

:::quote{author="Patricia Deegan, 1996" source="deegan1996" lang="en"}
We are a conspiracy of hope and we are pressing back against the strong tide of oppression which for centuries has been the legacy of those of us who are labeled with mental illness.
:::

:::quote-translation{source="deegan1996" translator="vlastní převod"}
Jsme spiknutí naděje. Vzpíráme se silnému proudu útlaku, který je po staletí dědictvím těch, kteří jsou označeni psychiatrickou diagnózou.
:::

:::reflection{id=10 title="Tvá pozice"}
- V kterých místech se ještě prožíváš v klasické roli pacienta/ky?
- Kdy přicházejí momenty, kdy se prožíváš jako expert/ka vlastní zkušenosti – i když jsou krátké?
- Která věta z levého sloupce tabulky je ti důvěrně známá – která z pravého by chtěla pomalu získávat místo?
- Kdo by mohl být tvým spoluspiklencem v naději?
:::

:::easy{reading_time=3}
Možná jsi byl/a dlouho v léčbě. Pak ses pravděpodobně naučil/a něco konkrétního:

- Lékař to ví lépe.
- Musím dělat, co mi řeknou.
- Jsem nemocný/á, druzí mi pomáhají.

Je to role. Říká se jí role pacienta/ky.

Tato role někdy pomáhá. Ale může i škodit. Stáváš se malým/malou. Čekáš. Stáváš se závislým/závislou.

Recovery říká: smíš z této role ven. Krok za krokem.

Nestaneš se lékařem. Ale staneš se expertem/expertkou svého vlastního života. Znáš se nejlépe. Tvá zkušenost je vědění.

**Tato proměna je nejdůležitější proměnou v Recovery. Bez ní to nejde.**

Tři věci na závěr:

- Nikdy není pozdě. Ani po mnoha letech v léčbě.
- Nemusíš to udělat najednou. Malé kroky se počítají.
- Potřebuješ spojence.

:::reflection{id=shift-easy title="Zeptej se sám/sama sebe"}
- V čem se ještě prožíváš ve staré roli?
- Kde už jsi expert/ka svého života?
:::
:::

:::quiz{id=q-shift}
- q: "Co se tu míní ‚rolí pacienta/ky'?"
  type: multiple-choice
  options:
    - text: "Lékařskou diagnózu."
      correct: false
    - text: "Naučený postoj: pasivně čekat, druzí to vědí lépe, mě uzdraví."
      correct: true
      explanation: "Role, ne diagnóza – a je proměnitelná."

- q: "Co říká Patricia Deegan o ‚spirit breaking'?"
  type: multiple-choice
  options:
    - text: "Popisuje to vzácnou výjimku."
      correct: false
    - text: "Pomáhající systémy mohou zlomit pocit sebe sama, hlas a vlastní iniciativu – obvykle ne ze zlé vůle."
      correct: true
      explanation: "Deegan 1990 – ostrý, ale přesný pojem."

- q: "Jaký je rozdíl mezi Recovery FROM a Recovery IN?"
  type: multiple-choice
  options:
    - text: "FROM = starší čtení, IN = novější."
      correct: false
    - text: "FROM = uzdravení Z nemoci (medicínské). IN = uzdravování V nemoci (osobní)."
      correct: true
      explanation: "Davidson & Roe 2007."

- q: "Je pravda, že tento posun je jen jedním z mnoha doporučení?"
  type: true-false
  correct: false
  explanation: "Ne – je předpokladem toho, aby Recovery vůbec mohlo fungovat."

- q: "Od jakého věku / po kolika letech léčby je na tento posun pozdě?"
  type: multiple-choice
  options:
    - text: "Po 10 letech."
      correct: false
    - text: "Od 60 let."
      correct: false
    - text: "Nikdy."
      correct: true
      explanation: "Výzkum Recovery nezná věkovou hranici. Možné i po desetiletích."
:::

:::flashcards{id=f-shift}
- front: "Spirit Breaking"
  back: "Patricia Deegan (1990): jak pomáhající systémy lámou pocit sebe sama, hlas a vlastní iniciativu – obvykle ne ze zlé vůle."
- front: "Recovery FROM"
  back: "Uzdravení Z nemoci – medicínské čtení. Příznaky pryč, diagnóza v nejlepším případě za tebou."
- front: "Recovery IN"
  back: "Uzdravování V nemoci – osobní čtení. Naplněný život, i když příznaky zůstávají."
- front: "Role pacienta/ky"
  back: "Naučený postoj: pasivní, vyčkávající, ovládaný zvenčí. Krátkodobě pomáhá, dlouhodobě škodí. Proměnitelná."
- front: "Erfahrungsexpertise (Boevink)"
  back: "Tvé žité vědění je samostatné a rovnocenné odbornému vědění. Můžeš ho využít – pro sebe i pro druhé."
- front: "Conspiracy of Hope"
  back: "Patricia Deegan 1996: ‚Jsme spiknutí naděje.' – Recovery jako kolektivní projekt proti historickému zbavování pravomoci."
:::

:::standard{reading_time=3}
Pokud jsi byl/a dlouho v psychiatrické léčbě — léta, možná desítky let — pak to s tebou něco udělalo. Nejen nemoc. Také **role**.

## Co s tebou role udělala

Možná ses naučil/a:

- Lékař to ví líp. Můj instinkt platí míň.
- Musím čekat. Na další termín, další lék, další metodu.
- Jsem svá diagnóza: „Jsem borderlinerka." „Jsem bipolární."
- Zotavení je něco, co se se mnou děje — ne něco, co dělám.

To není osobní slabost. Je to **naučená reakce** na roky v systému, který dává málo kontroly.

Patricia Deegan, formující hlas hnutí Recovery, pro to razila ostrý pojem: **„spirit breaking"** — lámání ducha. Pomáhající systémy mohou — obvykle ne ze zlé vůle — zlomit pocit sebe sama, hlas, vlastní iniciativu člověka. Ne proto, že jsou zaměstnanci zlí. Ale protože to logika systému takto nastavuje.

## Recovery FROM vs. Recovery IN

Larry Davidson a David Roe rozlišují dvě velmi odlišná čtení Recovery:

- **Recovery FROM** — Uzdravení **Z** nemoci. Medicínské čtení: příznaky pryč, diagnóza za tebou. Jsi pasivní příjemce/příjemkyně léčby.
- **Recovery IN** — Uzdravování **V** nemoci. Osobní čtení: vést naplněný život, i když příznaky zůstávají. Jsi jednající osobou.

Obě jsou možné. Obě jsou cenné. Ale řídí se zcela odlišnými logikami. **Recovery IN je předpokladem toho, aby pro tebe Recovery vůbec mohlo fungovat.** Protože naděje, cíle, sebeúčinnost, smysl — to vše vzniká jen tam, kde se prožíváš jako někdo, kdo smí volit.

## Zůstáváš odkázán/a na pomoc — a přesto subjektem

Tento posun není výzvou vysazovat léky nebo ukončit léčbu. Není to výtka odborníkům. Je to pozvání, abys vzal/a vlastní hlas jako zdroj — **vedle** odborných hlasů.

Tři věci na závěr:

- **Nikdy není pozdě.** I po desetiletích léčby jsou takové posuny možné.
- **Děje se to v malých krocích.** Ranní otázka „Co bych dnes potřeboval/a?" stačí pro začátek.
- **Potřebuješ spojence.** Peers. Důvěrnou osobu. Recovery College. Nikdo to nezvládne sám/sama.
:::

:::standard-quiz{id=q-shift-std}
- q: "Co Patricia Deegan myslí pojmem „spirit breaking"?"
  type: multiple-choice
  options:
    - text: "Vzácný ojedinělý případ, který se téměř nestává."
      correct: false
    - text: "Jak pomáhající systémy mohou zlomit pocit sebe sama, hlas a vlastní iniciativu — obvykle ne ze zlé vůle."
      correct: true
      explanation: "Ostrý, ale přesný pojem (Deegan 1990)."

- q: "Jaký je rozdíl mezi Recovery FROM a Recovery IN?"
  type: multiple-choice
  options:
    - text: "FROM je zastaralé, IN je nová verze."
      correct: false
    - text: "FROM = uzdravení Z nemoci (medicínské). IN = uzdravování V nemoci (osobní)."
      correct: true
      explanation: "Davidson & Roe 2007. Obě jsou možné, řídí se ale odlišnými logikami."

- q: "Kdo je expert/ka pro tvůj život?"
  type: multiple-choice
  options:
    - text: "Tvůj léčebný tým."
      correct: false
    - text: "Ty sám/sama — vedle odborného vědění léčících."
      correct: true

- q: "Od jakého bodu je na tento posun pozdě?"
  type: multiple-choice
  options:
    - text: "Po 20 letech léčby."
      correct: false
    - text: "Po 60. roce."
      correct: false
    - text: "Nikdy. I po desetiletích jsou posuny možné."
      correct: true
:::

:::standard-flashcards{id=f-shift-std}
- front: "Spirit Breaking (Deegan)"
  back: "Když pomáhající systémy — obvykle ne ze zlé vůle — zlomí pocit sebe sama, hlas a vlastní iniciativu člověka."
- front: "Recovery FROM"
  back: "Uzdravení Z nemoci. Medicínské čtení: příznaky pryč, diagnóza za tebou."
- front: "Recovery IN"
  back: "Uzdravování V nemoci. Osobní čtení: naplněný život, i když příznaky zůstávají."
- front: "Expert/ka tvého života"
  back: "Ty se znáš nejlépe. Tvá zkušenost je vědění — vedle odborného vědění, ne místo něj."
- front: "Nikdy není pozdě"
  back: "Recovery nezná věkovou hranici ani hranici závažnosti. Možné i po desetiletích."
:::


# 12. Peer-podpora, Trialog a EX-IN
{#kap-12 reading_time=5}

## Was Peer-Support ist

Peer-Support meint die Begleitung durch Menschen, die selbst psychische Krisen erlebt und durchgearbeitet haben. Im deutschsprachigen Raum: Genesungsbegleiter:innen, Erfahrungsexpert:innen, Peers oder EX-IN-Mitarbeitende [^utschakowski2009] [^exin_de].

Kořeny sahají daleko zpět – do tradice svépomoci, do konceptu WRAP Mary Ellen Copelandové [^copeland1997], do německého modelu Trialog [^bockpriebe2005] a do iniciativy EX-IN od roku 2005 [^utschakowski2009].

## Trialog – německojazyčné dědictví

Trialog – rovnocenný rozhovor mezi postiženými, blízkými a odborníky – byl založen v roce 1989 v Hamburku Thomasem Bockem a jeho spolupracovníky [^bockpriebe2005]. Je to německojazyčný příspěvek k mezinárodnímu hnutí Recovery a trvale proměnil péči v DACH [^vonpeter2015].

## Co ukazuje výzkum

Důkazová základna pro peer-support je dnes značná. Multicentrická RCT s více než 600 účastníky ve čtyřech zemích ukázala významné účinky na empowerment a kvalitu života [^slade2024peer]. Aktuální meta-analýzy konzistentně nacházejí pozitivní efekty na sebeúčinnost a menší efekty na naději a empowerment [^white2024] [^lyons2021]. Německá RCT také prokázala pozitivní účinky [^mahlke2017].

Faktory účinnosti jsou: žitá zkušenost jako kotva důvěryhodnosti, naděje jako model, vztah na úrovni očí a destigmatizující komunikace [^mead2001] [^davidson2012].

Wilma Boevink shrnuje tento princip jednoduše: znalost ze zkušenosti pocházející z hnutí postižených je rovnocenná odborné znalosti – a tvoří základ autentického poznání Recovery [^boevink2012].

:::easy{reading_time=2}
Peer-support znamená: lidé doprovázejí jiné lidi s podobnou zkušeností.

To dělá dobře. Výzkum ukazuje: když někdo „prošel" a stojí před tebou, je to silný signál. Vytváří to naději.

V německojazyčném prostoru existují průvodci zotavením s odborným vzděláním (EX-IN).

Existuje také Trialog – rozhovory mezi postiženými, blízkými a odborníky. Na úrovni očí. Bez toho, že by byl někdo důležitější.

Takové rozhovory probíhají v mnoha městech ve Švýcarsku, Německu a Rakousku.
:::

:::quiz{id=q-12}
- q: "Co znamená EX-IN?"
  type: multiple-choice
  options:
    - text: "Diagnózu."
      correct: false
    - text: "Experienced Involvement – vzdělávání průvodců zotavením."
      correct: true
      explanation: "Vyvíjeno od roku 2005 v Brémách."

- q: "Kdo mluví v Trialogu na úrovni očí?"
  type: multiple-choice
  options:
    - text: "Jen odborníci."
      correct: false
    - text: "Postižení, blízcí a odborníci společně."
      correct: true
      explanation: "Založeno 1989 Thomasem Bockem v Hamburku."

- q: "Co ukazuje výzkum peer-supportu (Slade et al. 2024)?"
  type: multiple-choice
  options:
    - text: "Žádné měřitelné efekty."
      correct: false
    - text: "Významné účinky na empowerment a kvalitu života."
      correct: true
:::

:::flashcards{id=f-12}
- front: "EX-IN"
  back: "Experienced Involvement – vzdělávání lidí se zkušeností z psychiatrie na průvodce zotavením (od 2005, Brémy). Inspirováno Dorotheou Buck."
- front: "Trialog"
  back: "Rovnocenný rozhovor mezi postiženými, blízkými a odborníky. Založen 1989 Thomasem Bockem v Hamburku."
- front: "Peer-support – faktory účinnosti"
  back: "Žitá zkušenost jako kotva důvěryhodnosti · naděje jako model · vztah na úrovni očí · destigmatizující komunikace."
- front: "Mahlke et al. 2017"
  back: "Německá RCT k One-to-one peer-supportu – prokázala významné efekty na empowerment a sebeúčinnost."
:::

:::standard{reading_time=2}
Peer-support znamená: lidé, kteří sami prošli psychickou krizí, doprovázejí druhé — na úrovni očí, s žitou zkušeností místo s odborným titulem.

V německojazyčném prostoru jim říkáme průvodci zotavením, experti ze zkušenosti nebo pracovníci EX-IN. EX-IN znamená „Experienced Involvement" — vzdělávání vzniklé v roce 2005 v Brémách, dnes ukotvené v mnoha klinikách, poradnách a Recovery Colleges.

Tři pojmy jsou tu důležité:

- **Peer-support:** Doprovod někým s podobnou zkušeností. Důvěryhodný, protože žitý.
- **Trialog:** Rovnoprávný rozhovor mezi postiženými, blízkými a odborníky — založený 1989 v Hamburku Thomasem Bockem.
- **EX-IN:** Strukturované vzdělávání pro průvodcovství zotavením, inspirované Dorotheou Buck.

Co k tomu říká výzkum: Velká mezinárodní studie s více než 600 účastníky ve čtyřech zemích ukázala významné účinky na empowerment a kvalitu života. Německá studie to potvrdila. Co funguje, není trik — je to setkání s někým, kdo umí říct: „Byl/a jsem také tam. A cesta existuje."

Možná sám/sama znáš někoho, jehož příběh tě nesl. Možná se ty sám/sama jednoho dne staneš tou osobou pro někoho jiného.
:::

:::standard-quiz{id=q-12-std}
- q: "Co znamená EX-IN?"
  type: multiple-choice
  options:
    - text: "Nová diagnóza."
      correct: false
    - text: "Experienced Involvement — vzdělávání pro průvodcovství zotavením."
      correct: true
      explanation: "Vyvinuto od roku 2005 v Brémách, dnes ukotvené v mnoha zařízeních DACH."
    - text: "Skupina léků."
      correct: false

- q: "Kdo spolu mluví v Trialogu?"
  type: multiple-choice
  options:
    - text: "Jen odborníci mezi sebou."
      correct: false
    - text: "Postižení, blízcí a odborníci — na úrovni očí."
      correct: true
      explanation: "Založeno 1989 v Hamburku Thomasem Bockem."
    - text: "Jen postižení sami."
      correct: false
:::

:::standard-flashcards{id=f-12-std}
- front: "Peer-support"
  back: "Doprovod lidmi s vlastní zkušeností krize. Funguje díky žité zkušenosti, naději a úrovni očí."
- front: "Trialog"
  back: "Rovnoprávný rozhovor mezi postiženými, blízkými a odborníky. Od 1989 (Bock, Hamburk)."
- front: "EX-IN"
  back: "Experienced Involvement — vzdělávání pro lidi se zkušeností z psychiatrie, od roku 2005."
:::


# 13. Recovery Colleges — učit se místo léčit
{#kap-13 reading_time=5}

Recovery Colleges jsou britský model, který vznikl od roku 2009 [^perkins2012]. Nejsou to kliniky, ale vzdělávací instituce. Jsou bezplatné, otevřené všem – postiženým, blízkým, odborníkům i zájemcům – a využívají pedagogickou formu vzdělávání dospělých namísto terapeutického sezení.

Recovery Colleges utvářejí dva ústřední principy [^perkins2012] [^meddings2015]:

- **Vzdělávání místo terapie.** Účastníci jsou studující, ne pacienti. Důraz na zdroje a učení, ne na deficit a diagnózu.
- **Koprodukce (Co-Production).** Každý kurz je společně vyvíjen a veden odborníkem a osobou s žitou zkušeností – na úrovni očí.

## Co ukazuje výzkum

Hayes a kolegové napočítali ve světě 221 Recovery Colleges ve 28 zemích na pěti kontinentech [^hayes2023].

Studie RECOLLECT je dosud nejkomplexnější vědeckou analýzou Recovery Colleges [^henderson2024recollect]. Retrospektivní kohortová studie z Anglie se 1 193 studujícími v Recovery Colleges oproti 3 508 kontrolním osobám po 6, 12 a 60 měsících ukázala: významnou redukci psychiatrických hospitalizací, lůžkodnů a urgentních konzultací – při současně zlepšeném pocitu pohody [^ronaldson2024].

Literární přehled deseti let výzkumu Recovery Colleges [^theriault2020] potvrzuje konzistentní efekty na naději, empowerment, sebeúčinnost, sociální inkluzi, dosahování cílů a znalosti o duševním zdraví. Crowther a kolegové ukazují, že z práce v Recovery Colleges profitují i odborníci [^crowther2019].

:::info{type=evidence title="Důkazy z německojazyčného prostoru"}
Empiricky validovaná data DACH o účinnosti recovery-orientované péče v posledních letech přibývají.

Německá randomizovaná kontrolovaná studie peer-doprovázení u lidí s těžkými duševními onemocněními [^mahlke2017] prokázala významné efekty na empowerment a sebeúčinnost.

Německá S3-směrnice „Psychosociální terapie u závažných duševních onemocnění" (2. vydání 2019) zahrnula Recovery-orientaci, peer-support a Shared Decision-Making mezi doporučení [^dgppn2019].

Výzkum Recovery Colleges v německojazyčném prostoru roste – data o konkrétních DACH lokalitách se teprve budují.
:::

V německojazyčném prostoru existují Recovery Colleges mimo jiné v Bernu [^rcbern], ve Východním Švýcarsku, v Ženevě, ve sv. Galenu a v Curychu – a stále více v Německu a Rakousku (mj. Empowerment College Brémy).

:::easy{reading_time=2}
Recovery Colleges jsou zvláštní druh školy. Ale ne školy pro děti.

Tady se dospělí učí o duševním zdraví. Smí přijít všichni: postižení, blízcí, odborníci, zájemci.

Kurzy jsou zdarma. Diagnózu nepotřebuješ.

Každý kurz je plánován společně: odborníkem a osobou s vlastní zkušeností. Oba jsou stejně důležití.

Dnes je více než 220 Recovery Colleges ve 28 zemích. Také ve Švýcarsku, v Německu a v Rakousku.

Výzkum ukazuje: kdo navštěvuje Recovery College, je mu pak lépe.
:::

:::quiz{id=q-13}
- q: "Kdo smí přijít do Recovery College?"
  type: multiple-choice
  options:
    - text: "Jen lidé s diagnózou."
      correct: false
    - text: "Postižení, blízcí, odborníci i zájemci – všichni."
      correct: true
      explanation: "Otevřeno pro všechny. Diagnóza není nutná. Zdarma."

- q: "Co znamená ‚Co-Production'?"
  type: multiple-choice
  options:
    - text: "Filmový trik."
      correct: false
    - text: "Odborník a osoba s žitou zkušeností plánují kurzy společně – na úrovni očí."
      correct: true

- q: "Co ukazuje britská kohortová studie Ronaldson et al. 2024?"
  type: multiple-choice
  options:
    - text: "Žádné efekty."
      correct: false
    - text: "Významnou redukci psychiatrických hospitalizací a lůžkodnů."
      correct: true
:::

:::flashcards{id=f-13}
- front: "Recovery College"
  back: "Vzdělávací instituce – ne místo léčby. Učení místo terapie. Zdarma. Otevřené všem."
- front: "Co-Production"
  back: "Kurzy jsou společně vyvíjeny a vedeny odborníkem a osobou s žitou zkušeností."
- front: "Účinnost"
  back: "Hayes 2023: 221 Recovery Colleges ve 28 zemích. Ronaldson 2024: méně hospitalizací, více pocitu pohody."
:::

:::standard{reading_time=2}
Recovery College není klinika. Je to škola pro dospělé — otevřená všem, kdo se chtějí dozvědět něco o duševním zdraví: postiženým, blízkým, odborníkům, zájemcům. Kurzy jsou zdarma, nepotřebuješ diagnózu, doporučení ani objednávku u praktického lékaře.

Dva principy nesou tento model:

- **Vzdělávání místo terapie.** Jsi studující, ne pacient/ka. V centru stojí učení, zdroje a otázky — ne diagnóza a deficit.
- **Koprodukce (Co-Production).** Každý kurz je společně vyvíjen a veden odborníkem a osobou se žitou zkušeností. Obě zdrojové oblasti vědění jsou rovnocenné.

První Recovery College vzniklo v roce 2009 v Londýně. Dnes je jich na světě více než 220 ve 28 zemích — i ve Švýcarsku (mj. Bern, Východní Švýcarsko, Ženeva, St. Gallen, Curych), v Německu a Rakousku.

Největší studie k tomu, RECOLLECT z Anglie, srovnávala téměř 1 200 studujících Recovery College s více než 3 500 kontrolními osobami po dobu pěti let. Výsledek: méně psychiatrických hospitalizací, méně pohotovostních zákroků, více pocitu pohody. Deset let výzkumu potvrzuje: naděje, empowerment, sociální inkluze a sebeúčinnost měřitelně rostou.

Možná je Recovery College v tvém okolí prvním místem, kde se nemusíš vysvětlovat — ale smíš se učit.
:::

:::standard-quiz{id=q-13-std}
- q: "Kdo smí navštívit Recovery College?"
  type: multiple-choice
  options:
    - text: "Jen lidé s psychiatrickou diagnózou."
      correct: false
    - text: "Všichni — postižení, blízcí, odborníci, zájemci. Bez diagnózy."
      correct: true
      explanation: "Recovery Colleges jsou otevřená, zdarma a nepotřebují doporučení."
    - text: "Jen odborníci."
      correct: false

- q: "Co znamená Co-Production?"
  type: multiple-choice
  options:
    - text: "Natáčet více filmů dohromady."
      correct: false
    - text: "Kurzy plánují společně odborník a expert/ka ze zkušenosti — na úrovni očí."
      correct: true
      explanation: "To je jádro principu Recovery Colleges."
    - text: "Školicí video na zapojení."
      correct: false
:::

:::standard-flashcards{id=f-13-std}
- front: "Recovery College"
  back: "Vzdělávací místo místo léčebného. Zdarma, otevřené všem. Učení místo terapie."
- front: "Co-Production"
  back: "Každý kurz je společně tvořen odborníkem a osobou se žitou zkušeností."
- front: "Účinnost (RECOLLECT)"
  back: "Méně hospitalizací, méně pohotovostí, více pocitu pohody — prokázáno za pět let."
:::


# 14. Trauma-informovaný přístup
{#kap-14 reading_time=3}

:::info{type=warmth title="Než budeš číst dál"}
Tato kapitola pojmenovává násilí, zneužívání, zanedbávání a diskriminaci. Pokud jsi sám/sama prošel/prošla něčím těžkým, čtení může mnohé vyvolat. To je normální. Čti svým tempem. Dělej přestávky. Přeskoč na další kapitolu, pokud je toho dnes moc. Pokud potřebuješ podporu hned: Kapitola 20 (Krize) je jen pár ťuknutí daleko — nebo zavolej **Linka první psychické pomoci 116 123** (ČR), ve Švýcarsku **143**, v Německu **0800 111 0 111**, v Rakousku **142**.
:::

Mnoho lidí, kteří jsou v péči psychiatrie, prožili ve své historii traumatické zkušenosti – násilí, zneužívání, zanedbávání, diskriminaci. Také samotné psychiatrické pobyty mohou působit re-traumatizačně [^felitti1998].

Trauma-informovaný přístup je proto nedílnou součástí recovery-orientované praxe. Americký úřad SAMHSA [^samhsa2014trauma] pro něj definoval šest vůdčích principů:

- **Bezpečí** – fyzické i emoční.
- **Důvěra a transparentnost** – jasná informace, spolehlivý rámec.
- **Peer-support** – žitá zkušenost jako zdroj.
- **Spolupráce a vzájemnost** – odbourat hierarchie.
- **Empowerment, hlas a volba** – rozhodování a sebeurčení.
- **Kulturní, historická a genderová citlivost.**

Diese Prinzipien gelten auch in einem digitalen Workbook. Du entscheidest, was du wann liest, was du speicherst, was du löschst.

:::easy{reading_time=1}
Mnoho lidí v psychiatrii prožilo těžké věci. Násilí. Zneužívání. Zanedbávání.

Někdy je zatěžující i samotný pobyt v nemocnici.

Proto je trauma-citlivý postoj důležitý. Znamená:

- Bezpečí jako první.
- Vytvořit důvěru.
- Mluvit upřímně.
- Nikdo nerozhoduje přes tvou hlavu.

Tento postoj platí i v této aplikaci. Ty rozhoduješ, co čteš. Co uložíš. Co smažeš.
:::

:::quiz{id=q-14}
- q: "Kolik principů definovala SAMHSA pro trauma-informovanou péči?"
  type: multiple-choice
  options:
    - text: "Tři"
      correct: false
    - text: "Šest"
      correct: true
    - text: "Deset"
      correct: false

- q: "Který princip NEPATŘÍ k trauma-informované praxi?"
  type: multiple-choice
  options:
    - text: "Bezpečí"
      correct: false
    - text: "Tvrdost"
      correct: true
      explanation: "Tvrdost nepatří mezi SAMHSA principy."
    - text: "Peer-support"
      correct: false
:::

:::flashcards{id=f-14}
- front: "Šest principů (SAMHSA 2014)"
  back: "Bezpečí · důvěra & transparentnost · peer-support · spolupráce · empowerment · kulturní/genderová citlivost."
- front: "Re-traumatizace"
  back: "Když pomáhající systémy samy působí dodatečně traumatizačně. Trauma-informovaná praxe tomu aktivně zabraňuje."
- front: "ACE studie (Felitti 1998)"
  back: "Prokazuje: traumatické zkušenosti z dětství jsou rozšířené a celoživotně působí na zdraví."
:::

:::standard{reading_time=2}
Mnoho lidí, kteří jsou v péči psychiatrie, nese se sebou těžké zkušenosti — násilí, zneužívání, zanedbávání, diskriminaci, ztráty. Někdy působí zatěžujícím nebo retraumatizujícím způsobem i samotné psychiatrické pobyty. Trauma-informovaný přístup bere to vážně, aniž by tě nutil ukazovat rány, které ukazovat nechceš.

Americký úřad SAMHSA popsal šest vůdčích principů, které nesou trauma-citlivý doprovod:

- **Bezpečí** — tělesné i emocionální. Nikdo nemá být v prostoru, kde se necítí bezpečně.
- **Důvěra a transparentnost** — jasná informace, spolehlivý rámec, žádná překvapení mimo tvou hlavu.
- **Peer-support** — žitá zkušenost jako spolehlivý most.
- **Spolupráce na úrovni očí** — odbourat hierarchie, ne je zvětšovat.
- **Empowerment, hlas a volba** — spolurozhoduješ. Vždy.
- **Kulturní, historická a genderová citlivost** — tvůj příběh je součástí toho, kým jsi.

Tyto principy platí i v digitálním workbooku. Ty rozhoduješ, co a kdy čteš. Co ukládáš. Co mažeš. Když je kapitola příliš, zavři ji. Vrať se, až budeš připraven/a. Nebo ji nech úplně být.

Trauma-informovaný neznamená: nejprve zpracovat trauma, pak žít. Znamená: vše, co se tu děje, bere ohled na to, co už jsi unesl/a.
:::

:::standard-quiz{id=q-14-std}
- q: "Kolik vůdčích principů definovala SAMHSA pro trauma-informovanou praxi?"
  type: multiple-choice
  options:
    - text: "Tři."
      correct: false
    - text: "Šest."
      correct: true
      explanation: "Bezpečí, důvěra, peer-support, spolupráce, empowerment, kulturní citlivost."
    - text: "Deset."
      correct: false

- q: "Kdo rozhoduje, co se v této aplikaci ukládá?"
  type: multiple-choice
  options:
    - text: "Aplikace."
      correct: false
    - text: "Ty. Vždy."
      correct: true
      explanation: "Sebeurčení nad vlastními daty je výrazem trauma-citlivého postoje."
:::

:::standard-flashcards{id=f-14-std}
- front: "Šest principů (SAMHSA)"
  back: "Bezpečí · důvěra & transparentnost · peer-support · spolupráce · empowerment · kulturní & genderová citlivost."
- front: "Bezpečí na prvním místě"
  back: "Nikdo nerozhoduje mimo tvou hlavu. Ty určuješ tempo, hloubku, kdy zastavit."
- front: "Re-traumatizace"
  back: "Když pomáhající systémy dodatečně zraňují. Trauma-informovaná praxe tomu aktivně zabraňuje."
:::


# 15. Recovery a lidská práva
{#kap-15 reading_time=4}

Recovery není jen otázkou odbornou, ale i lidskoprávní. Úmluva OSN o právech osob se zdravotním postižením zaručuje lidem s postiženími – včetně duševních – právo na sebeurčení, inkluzi a podporované rozhodování [^uncrpd2006]. Německo Úmluvu ratifikovalo v roce 2009, Rakousko 2008, Švýcarsko 2014. Česká republika ratifikovala Úmluvu v roce 2009.

WHO v roce 2019 zahájila iniciativu QualityRights [^who2019] a v roce 2021 zveřejnila směrnici „Guidance on Community Mental Health Services" [^who2021]. Recovery je v ní označeno jako ústřední princip moderní péče.

Konkrétně to znamená: redukovat nátlak, nikdy nestavět diagnózu nad člověka, nabízet podporu tam, kde ji lidé potřebují – a zapojit postižené jako rovnocenné partnery do všech rozhodnutí o péči.

:::info{type=example title="Příklad: Open Dialogue (Otevřený dialog)"}
Ve finském Západním Laponsku vyvinul Jaakko Seikkula v 80. letech koncept Otevřeného dialogu.

Při akutních psychotických krizích jsou do 24 hodin přizvány všechny důležité blízké osoby. Všechny rozhovory probíhají společně, všechna rozhodnutí jsou transparentně dojednávána.

Dlouhodobé výsledky jsou výjimečné: v Západním Laponsku se více než 80 % osob s první psychózou vrátilo do dvou let do práce nebo vzdělávání. 19letá studie potvrdila dlouhodobou stabilitu výsledků [^seikkula2011] [^bergstroem2018].
:::

:::easy{reading_time=1}
Recovery je i lidským právem.

OSN v roce 2006 uzavřela úmluvu. Říká: lidé s postižením mají právo rozhodovat sami. I lidé s duševními onemocněními.

WHO v roce 2021 říká: psychiatrie má tato práva respektovat. Nemá rozhodovat sám lékař. Ale všichni společně.

V Česku, ve Švýcarsku, v Německu a v Rakousku to platí také.
:::

:::quiz{id=q-15}
- q: "Co je UN-CRPD (Úmluva OSN o právech osob se zdravotním postižením)?"
  type: multiple-choice
  options:
    - text: "Léčebná metoda."
      correct: false
    - text: "Úmluva OSN o právech osob se zdravotním postižením z roku 2006."
      correct: true
      explanation: "Česko ji ratifikovalo 2009, Švýcarsko 2014, Německo 2009, Rakousko 2008."

- q: "Co říká WHO v roce 2021?"
  type: multiple-choice
  options:
    - text: "Recovery je nevědecké."
      correct: false
    - text: "Péče má být zaměřená na osobu a založená na právech."
      correct: true
:::

:::flashcards{id=f-15}
- front: "UN-CRPD 2006"
  back: "Úmluva OSN o právech osob se zdravotním postižením. Zaručuje sebeurčení – i u duševních postižení. ČR ratifikovala 2009, CH 2014, DE 2009, AT 2008."
- front: "WHO QualityRights"
  back: "Iniciativa WHO od 2019. Směrnice z roku 2021 ‚Guidance on Community Mental Health Services': zaměření na osobu, založené na právech, orientované na Recovery."
- front: "Open Dialogue (Seikkula)"
  back: "Západní Laponsko od 80. let. Přes 80 % osob s první psychózou zpět do práce/vzdělávání během 2 let. Potvrzeno 19letým sledováním."
:::

:::standard{reading_time=2}
Recovery není jen odbornou otázkou — je to také otázka lidských práv. Kdo psychicky onemocněl, neztrácí právo být slyšen, zapojen a brán vážně.

**Úmluva OSN o právech osob se zdravotním postižením** (UN-CRPD) z roku 2006 zaručuje všem lidem se zdravotním postižením — tělesným, mentálním, duševním — právo na sebeurčení, inkluzi a podporované rozhodování. Česká republika ji ratifikovala v roce 2009, Švýcarsko 2014, Německo 2009, Rakousko 2008. Je to platné právo.

**Světová zdravotnická organizace (WHO)** to v roce 2019 podtrhla iniciativou QualityRights a v roce 2021 zveřejnila směrnice „Guidance on Community Mental Health Services". Recovery v nich stojí jako ústřední princip moderní péče — vedle zaměření na osobu a založení na právech.

Co to znamená konkrétně?

- Omezit donucení — kdekoli je to možné.
- Diagnózu nikdy nestavět nad osobu.
- Nabídnout podporu tam, kde lidé žijí.
- Zapojit postižené jako rovnoprávné partnery do rozhodování o péči.

Příkladem je **Otevřený dialog** z Finska. Při akutních psychotických krizích jsou do 24 hodin přizvány všechny důležité blízké osoby. Přes 80 % osob s první psychózou se do dvou let vrátilo do práce nebo vzdělávání — dlouhodobé studie potvrzují stabilitu těchto výsledků.

Tyto rámce nemusíš znát zpaměti. Ale je dobré vědět: když řekneš „chci spolurozhodovat", stojíš na pevné právní půdě.
:::

:::standard-quiz{id=q-15-std}
- q: "Co Úmluva OSN o právech osob se zdravotním postižením zaručuje i lidem s duševními onemocněními?"
  type: multiple-choice
  options:
    - text: "Rychlé uzdravení."
      correct: false
    - text: "Sebeurčení, inkluzi a podporované rozhodování."
      correct: true
      explanation: "UN-CRPD z roku 2006. Ratifikovaly: ČR 2009, CH 2014, DE 2009, AT 2008."
    - text: "Určitou formu terapie."
      correct: false

- q: "Co říká směrnice WHO z roku 2021 k psychiatrické péči?"
  type: multiple-choice
  options:
    - text: "Má být zaměřená na osobu a založená na právech."
      correct: true
      explanation: "Recovery je v ní označeno jako ústřední princip."
    - text: "Má být co nejvíce lůžková a dlouhodobá."
      correct: false
    - text: "Má probíhat bez účasti postižených."
      correct: false
:::

:::standard-flashcards{id=f-15-std}
- front: "UN-CRPD 2006"
  back: "Úmluva OSN o právech osob se zdravotním postižením. Zaručuje sebeurčení — i u duševních postižení. Ratifikovaly: ČR 2009, CH 2014, DE 2009, AT 2008."
- front: "WHO QualityRights"
  back: "Iniciativa WHO od 2019. Směrnice 2021: zaměření na osobu, založené na právech, orientované na Recovery."
- front: "Open Dialogue"
  back: "Finský model. Přes 80 % osob s první psychózou se do 2 let vrátilo do práce nebo vzdělávání."
:::


# 16. Nemoc nebo Recovery: dva pohledy
{#kap-16 reading_time=3}

Recovery je víc než nová metoda – je to změna perspektivy [^knuf2026] [^slade2014] [^ameringschmolke2012].

:::table{name="Srovnani-paradigmat"}
| Pohled orientovaný na nemoc | Pohled orientovaný na Recovery |
|-----------------------------|--------------------------------|
| Diagnóza v centru | Člověk v centru |
| Cílem je absence příznaků | Cílem je smysluplný život |
| Expert = odborník | Dvojí expertíza: odborné znalosti + znalost ze zkušenosti |
| Plán léčby | Recovery plán + plán léčby |
| Compliance | Shared Decision-Making |
| Pohled na deficit (patogeneze) | Pohled na zdroje (salutogeneze) |
| Lineární cesta uzdravení | Individuální, nelineární cesta |
| Naději nese odborník sám | Naděje se sdílí a půjčuje |
| Pacient/ka / klient/ka | Člověk / osoba se zkušeností / studující |
:::

Pravý sloupec nevytlačuje levý. Oba sloupce mají své místo – recovery-orientované paradigma rozšiřuje medicínské, nenahrazuje ho [^slade2014].

Amering a Schmolke zdůrazňují bod, který bývá přehlížen: recovery-orientovaná praxe není doplňkovým modulem navrch. Je to jiný způsob, jak vytvářet vědění – propojením odborných znalostí a žité zkušenosti jako rovnocenných zdrojů [^ameringschmolke2012].

:::easy{reading_time=2}
Existují dva pohledy na duševní nemoc:

**Starý pohled:**
- V centru je nemoc.
- Cíl: příznaky pryč.
- Lékař ví nejlépe.
- Jsi pacient/ka.

**Pohled Recovery:**
- V centru je člověk.
- Cíl: dobrý život.
- Ty a odborník rozhodujete společně.
- Jsi člověk se zkušeností.

Starý pohled není špatný. Často pomáhá. Ale sám nestačí.

Pohled Recovery starý pohled rozšiřuje. Nenahrazuje ho.
:::

:::quiz{id=q-16}
- q: "Nahrazuje pohled Recovery medicínský pohled?"
  type: true-false
  correct: false
  explanation: "Ne – rozšiřuje ho. Oba mají své místo."

- q: "Co je v centru pohledu Recovery?"
  type: multiple-choice
  options:
    - text: "Diagnóza"
      correct: false
    - text: "Člověk"
      correct: true
:::

:::flashcards{id=f-16}
- front: "Změna paradigmatu"
  back: "Od pohledu na deficit (patogeneze) k pohledu na zdroje (salutogeneze) – bez opuštění medicínského pohledu."
- front: "Compliance vs. Shared Decision-Making"
  back: "Compliance = posloucháš. Shared Decision-Making = rozhodujete společně."
- front: "Syntéza vědění"
  back: "Recovery-orientovaná praxe propojuje odborné znalosti a žitou zkušenost jako rovnocenné zdroje (Amering & Schmolke 2012)."
:::

:::standard{reading_time=2}
Recovery je víc než nová metoda. Je to změna perspektivy — jiný způsob pohledu na psychickou krizi a zotavení.

**Pohled zaměřený na nemoc** staví do centra diagnózu. Cílem je vymizení příznaků. Expertem/expertkou je odborník. Sleduješ léčebný plán. Pohled míří na to, co chybí nebo je porouchané — na deficit.

**Pohled orientovaný na Recovery** staví do centra člověka. Cílem je smysluplný život — s příznaky nebo navzdory jim. Experti jsou dva: odborník A ty sám/sama. Rozhodnutí se dělají společně (Shared Decision-Making). Pohled míří na zdroje, naději, spojení.

Několik dvojic pojmů ukazuje rozdíl:

- Diagnóza v centru → Člověk v centru
- Vymizení příznaků jako cíl → Smysluplný život jako cíl
- Compliance → Shared Decision-Making
- Pohled na deficit (patogeneze) → Pohled na zdroje (salutogeneze)
- Lineární cesta uzdravení → Individuální, nelineární cesta
- Pacient/ka → Člověk / osoba se zkušeností / studující

Důležité: pravý sloupec nevytlačuje levý. Oba mají své místo. Léky mohou pomoci. Diagnózy mohou orientovat. Klinika může být bezpečným místem. Ale samo o sobě to nestačí — Recovery rozšiřuje medicínský obraz o tvůj hlas, tvé hodnoty, tvůj smysl.

Amering a Schmolke to vystihují: recovery-orientovaná praxe není dodatkovým modulem navrch. Je to jiný způsob produkce vědění — spojením odborné znalosti a žité zkušenosti jako rovnocenných zdrojů.
:::

:::standard-quiz{id=q-16-std}
- q: "Nahrazuje pohled Recovery medicínský pohled?"
  type: multiple-choice
  options:
    - text: "Ano, nahrazuje ho zcela."
      correct: false
    - text: "Ne — rozšiřuje ho. Oba mají své místo."
      correct: true
      explanation: "Recovery je změna perspektivy, ne odmítnutí medicínského vědění."
    - text: "Ne, stojí v rozporu k němu."
      correct: false

- q: "Co stojí v centru pohledu Recovery?"
  type: multiple-choice
  options:
    - text: "Diagnóza."
      correct: false
    - text: "Člověk — se svým příběhem, hodnotami, smyslem."
      correct: true
      explanation: "Diagnóza orientuje, ale nedefinuje tě."
    - text: "Klinika."
      correct: false
:::

:::standard-flashcards{id=f-16-std}
- front: "Změna paradigmatu"
  back: "Od pohledu na deficit (patogeneze) k pohledu na zdroje (salutogeneze) — bez opuštění medicínského pohledu."
- front: "Compliance vs. Shared Decision-Making"
  back: "Compliance = posloucháš. Shared Decision-Making = rozhodujete společně."
- front: "Dvě expertízy"
  back: "Odborné znalosti A žitá zkušenost jsou rovnocennými zdroji vědění."
:::


# 17. Tři věty pro tebe
{#kap-17 reading_time=3}

Nejsi svou diagnózou. Jsi člověk s příběhem, se schopnostmi, s hodnotami, se vztahy. Diagnóza může být orientačním bodem – nikdy není celou pravdou o tobě.

## Tři věty, které v hnutí Recovery často zaznívají

- Jsi expertkou nebo expertem svého života. Tvá zkušenost je vědění.
- Nemusíš nést všechno sám/sama. Hledej spojence – peers, odborníky, důvěryhodné lidi.
- Smíš sám/sama určovat tempo a směr. Krok zpět není selháním.

## Co ti výzkum může dát na cestu

Naděje je prediktor zotavení [^schrank2012]. Peer-support má měřitelný efekt na sebeúčinnost [^slade2024peer] [^mahlke2017]. Účast v Recovery Colleges snižuje následné náklady na péči a zvyšuje pocit pohody [^ronaldson2024]. Sebestigma lze měnit [^yanos2015].

:::reflection{id=7 title="Tvůj první krok"}
- Koho bys mohl/a tento týden oslovit, kdo by ti naslouchal bez odsudku?
- Jaké malé, proveditelné jednání by mohlo být kotvou naděje pro příštích sedm dní?
- Která oblast CHIME modelu – nebo triády Naděje-Moc-Smysl – si tento týden zaslouží trochu více pozornosti?
:::

:::easy{reading_time=1}
Nejsi svou diagnózou. Jsi člověk.

Tři důležité věty:

- Znáš svůj život nejlépe.
- Nemusíš nést všechno sám/sama.
- Smíš si určovat své tempo.

Kroky zpět k tomu patří. Nejsou selháním.
:::

:::quiz{id=q-17}
- q: "Co znamená ‚in Recovery'?"
  type: multiple-choice
  options:
    - text: "Jsi vyléčený/á."
      correct: false
    - text: "Jsi na cestě – proces, ne stav."
      correct: true

- q: "Je krok zpět selhání?"
  type: true-false
  correct: false
  explanation: "Ne – kroky zpět patří k nelineárnímu průběhu Recovery."
:::

:::flashcards{id=f-17}
- front: "Jsi expertem/expertkou svého života"
  back: "Nikdo nezná tvou zkušenost tak dobře jako ty. Tvůj hlas se počítá – rovnocenně s odborným věděním."
- front: "Tempo & směr"
  back: "Obojí určuješ ty. Recovery není měřitelné ani srovnatelné."
:::

:::standard{reading_time=2}
Nejsi svá diagnóza. Jsi člověk s příběhem, se schopnostmi, s hodnotami, se vztahy. Diagnóza může být orientačním bodem — nikdy není celou pravdou o tobě.

Tři věty, které v hnutí Recovery opakovaně zaznívají — a které ti chceme dát na cestu:

- **Jsi expertkou nebo expertem svého života.** Tvá zkušenost je vědění. Nikdo nezná tvůj dech, tvé noci, tvé naděje tak jako ty. Tento hlas se počítá — rovnocenně s každým odborným věděním.
- **Nemusíš nést všechno sám/sama.** Hledej spojence. Peers, odborníky, důvěryhodné lidi, blízké, svépomocnou skupinu, Recovery College. Naději si smíš vypůjčit, dokud ji znovu sám/sama necítíš.
- **Smíš sám/sama určovat tempo a směr.** Recovery není měřitelné ani srovnatelné. Krok zpět není selháním — patří k nelineární cestě. Někdy je i pauza pokrokem.

Co ti výzkum může dát na cestu: Naděje je prediktorem zotavení. Peer-support měřitelně posiluje sebeúčinnost. Recovery Colleges snižují hospitalizace a zvyšují pocit pohody. Sebestigma lze měnit.

Tyto tři věty nejsou programem k odpracování. Spíš jsou jako tři kameny, které si vložíš do kapsy. Vytáhneš je, když je budeš potřebovat.

Možná dnes. Možná až za půl roku.
:::

:::standard-quiz{id=q-17-std}
- q: "Co znamená „v Recovery"?"
  type: multiple-choice
  options:
    - text: "Jsi zcela vyléčen/a."
      correct: false
    - text: "Jsi na cestě — proces, ne stav."
      correct: true
      explanation: "Recovery je trvající cesta, ne cílový bod."
    - text: "Jsi bez příznaků."
      correct: false

- q: "Je krok zpět selháním?"
  type: multiple-choice
  options:
    - text: "Ano, pak cesta ztroskotala."
      correct: false
    - text: "Ne — patří k nelineárnímu průběhu Recovery."
      correct: true
      explanation: "Recovery málokdy probíhá lineárně. Pauzy a kroky zpět jsou součástí cesty."
    - text: "Možná — podle toho, jak je velký."
      correct: false
:::

:::standard-flashcards{id=f-17-std}
- front: "Tři věty"
  back: "1) Jsi expertem/expertkou svého života. 2) Nemusíš nést všechno sám/sama. 3) Sám/sama určuješ tempo a směr."
- front: "Krok zpět"
  back: "Ne selhání. Patří k nelineární cestě."
- front: "Vypůjčit si naději"
  back: "Když ji sám/sama necítíš, smíš si ji vypůjčit od druhých — dokud ji znovu nebudeš mít sám/sama."
:::


# 18. Jazyk a postoj — proč na slovech záleží
{#kap-18 reading_time=3}

Recovery-orientovaný jazyk není kosmetika. Mění to, kdo je v daném prostoru uznán jako subjekt – a kdo se stává objektem léčby [^ameringschmolke2012] [^knuf2026].

## Čeho se vyhýbáme – a co říkáme místo toho

V německojazyčném diskursu o Recovery se ustálila řada konkrétních jazykových pravidel [^ameringschmolke2012] [^knuf2026] [^slade2013]:

- „Schizofrenik/čka" → lépe: „člověk s diagnózou schizofrenie" (jazyk stavějící osobu před diagnózu).
- „Pacient/ka" / „klient/ka" ve vzdělávacím kontextu → lépe: „studující", „účastník/ce", „člověk s krizovou zkušeností".
- „Chronický", „nevyléčitelný" → vyhýbat se. Oba pojmy jsou empiricky pochybné a prokazatelně škodí zotavení.
- „Compliance" → lépe: „adherence k terapii", ještě lépe: „společné rozhodnutí".
- „Náhled na nemoc" → lépe: „vlastní porozumění nemoci".
- „Recovered" → v češtině: „v Recovery" (procesní pojem).
- „Deficit", „nositel/ka symptomů" → lépe: „zdroje", „životní zkušenost", „duševní otřes".

Jazyk mění i tebe samého/samu. Kdo začne říkat „v Recovery", myslí rychleji v procesech místo ve fixovaných stavech – a často tím udělá první nepostřehnutelný krok.

:::easy{reading_time=1}
Slova mění skutečnost. Pár příkladů:

- Ne: „chronicky nemocný" → lépe: „žije s diagnózou"
- Ne: „Compliance" → lépe: „společné rozhodnutí"
- Ne: „Schizofrenik" → lépe: „člověk se schizofrenií"
- Ne: „vyléčený" → lépe: „v Recovery"

Jazyk není všechno. Ale často mění začátek.
:::

:::quiz{id=q-18}
- q: "Která formulace je person-first?"
  type: multiple-choice
  options:
    - text: "Hraničář/ka"
      correct: false
    - text: "Člověk s hraniční diagnózou"
      correct: true

- q: "Kterému pojmu se vyhnout?"
  type: multiple-choice
  options:
    - text: "Člověk s krizovou zkušeností"
      correct: false
    - text: "Chronicky nevyléčitelný"
      correct: true
      explanation: "Empiricky pochybné a prokazatelně bránící zotavení."
:::

:::flashcards{id=f-18}
- front: "Person-first jazyk"
  back: "Diagnóza za člověkem, ne před ním. ‚Člověk se schizofrenií' místo ‚schizofrenik'."
- front: "v Recovery"
  back: "Procesní pojem v češtině. Místo ‚vyléčený' nebo ‚nemocný' – jako trvající cesta."
- front: "Vyhnout se compliance"
  back: "Místo ‚compliance' (posloucháš instrukce) raději ‚společné rozhodnutí' nebo ‚adherence k terapii'."
:::

:::standard{reading_time=2}
Slova nejsou neškodná. Mění to, kdo je v daném prostoru uznán jako člověk — a kdo se stává objektem léčby. Recovery-orientovaný jazyk proto není kosmetika. Je to postoj.

V německojazyčném diskursu Recovery se ustálila konkrétní jazyková pravidla. Několik příkladů (přizpůsobeno češtině):

- „Schizofrenik" → lépe: „člověk s diagnózou schizofrenie" (**Person-first jazyk**).
- „Pacient/ka" / „klient/ka" ve vzdělávacím kontextu → lépe: „studující", „účastník/ce", „člověk s krizovou zkušeností".
- „Chronický", „nevyléčitelný" → vyhýbat se. Oba pojmy jsou empiricky pochybné a prokazatelně bránící zotavení.
- „Compliance" → lépe: „adherence k terapii" — ještě lépe: „společné rozhodnutí".
- „Náhled na nemoc" → lépe: „vlastní porozumění nemoci".
- „Vyléčený" / „recovered" → v češtině: „v Recovery" — jako proces, ne jako koncový stav.
- „Deficit", „nositel symptomů" → lépe: „zdroj", „životní zkušenost", „duševní otřes".

Tyto výměny nejsou jen otázkou nálepek. Kdo začne říkat „v Recovery", myslí rychleji v procesech místo ve fixovaných stavech. Kdo říká „člověk s diagnózou", vidí nejprve člověka a pak diagnózu. To často mění právě onen nepostřehnutelný krok, kterým něco nového začíná.

Jazyk mění i tebe samého/samu. Jak o sobě mluvíš, určuje, jak o sobě myslíš. Nemusíš se všechny tyto pojmy učit najednou. Ale možná v příštích dnech budeš poslouchat jinýma ušima — co říkají lékaři, blízcí, terapeuti, ty sám/sama.

A když tě něco bolí: smíš to říct.
:::

:::standard-quiz{id=q-18-std}
- q: "Která formulace je person-first?"
  type: multiple-choice
  options:
    - text: "Borderlinerka."
      correct: false
    - text: "Člověk s diagnózou hraniční poruchy osobnosti."
      correct: true
      explanation: "Nejprve člověk, pak diagnóza. To je person-first jazyk."
    - text: "Psychicky nemocná."
      correct: false

- q: "Kterému pojmu se vyhýbat?"
  type: multiple-choice
  options:
    - text: "Člověk s krizovou zkušeností."
      correct: false
    - text: "Chronicky nevyléčitelný."
      correct: true
      explanation: "Empiricky pochybné a prokazatelně bránící zotavení."
    - text: "V Recovery."
      correct: false
:::

:::standard-flashcards{id=f-18-std}
- front: "Person-first jazyk"
  back: "Diagnóza za člověkem — ne před ním. „Člověk se schizofrenií" místo „schizofrenik"."
- front: "V Recovery"
  back: "Procesní pojem. Místo „vyléčený" nebo „chronický" — jako trvající cesta."
- front: "Vyhnout se compliance"
  back: "Místo „compliance" (posloucháš) raději „společné rozhodnutí" nebo „adherence k terapii"."
:::


# 19. Jak používat tento workbook
{#kap-19 reading_time=2}

Tento digitální workbook není učebnice. Je to průvodce:

- Nespěchej. Jedna stránka denně stačí.
- Buď k sobě upřímný/á. Ty rozhoduješ, co se uloží nebo sdílí.
- Přeskakuj. Jdi po tom, co tě oslovuje.
- Vracej se. Stejná otázka zní za tři měsíce jinak.
- Sdílej, pokud chceš – s důvěryhodnou osobou, peer-průvodcem, ve skupině.

## Ochrana dat a sebeurčení

Vše, co do této aplikace zapíšeš, patří tobě. Ty rozhoduješ, zda se něco synchronizuje, ukládá nebo maže. Záznamy jsou šifrované. Smazání všech dat je kdykoli možné. Tato architektura sebeurčení není technickým detailem, ale výrazem recovery-orientovaného postoje tohoto workbooku [^who2021] [^samhsa2014trauma] [^uncrpd2006].

:::easy{reading_time=1}
Takhle používáš tuto aplikaci:

- Nespěchej. Jedna stránka denně stačí.
- Buď k sobě upřímný/á.
- Přeskakuj z kapitoly do kapitoly.
- Vracej se. Stejná otázka zní později jinak.
- Sdílej, pokud chceš.

Tvá data patří tobě. Aplikace uloží jen to, co chceš. Smíš všechno smazat. Kdykoli.
:::

:::quiz{id=q-19}
- q: "Musí se kapitoly číst popořadě?"
  type: true-false
  correct: false
  explanation: "Ne – přeskakuj, jak ti to vyhovuje."

- q: "Kdo rozhoduje, co se uloží?"
  type: multiple-choice
  options:
    - text: "Aplikace"
      correct: false
    - text: "Ty"
      correct: true
:::

:::flashcards{id=f-19}
- front: "Ochrana dat v této aplikaci"
  back: "Tvá data patří tobě. Šifrovaná. Ty rozhoduješ, co se synchronizuje, ukládá nebo maže. Kdykoli smazatelná."
- front: "Způsob práce"
  back: "Jedna stránka denně. Přeskakování povoleno. Opakování vítáno. Sdílení volitelné."
:::

:::standard{reading_time=2}
Tento workbook není učebnice. Je to průvodce — a ty určuješ, jak tě doprovází.

Pár pokynů, které se osvědčily:

- **Nespěchej.** Jedna stránka denně stačí. Někdy stačí odstavec. Žádné tempo, kterého bys musel/a dosáhnout, neexistuje.
- **Buď k sobě upřímný/á.** Nikomu nemusíš nic dokazovat — ani aplikaci. Tvé záznamy jsou pro tebe.
- **Přeskakuj.** Jdi po tom, co tě oslovuje. Nemusíš číst po pořadí.
- **Opakuj.** Stejná reflexivní otázka zní za tři měsíce jinak. Vrať se.
- **Sdílej, pokud chceš.** S důvěrnou osobou, peer-průvodcem, ve skupině — nebo s nikým. Obojí je správné.

**Ochrana dat a sebeurčení.** Vše, co do této aplikace zapíšeš, patří tobě. Ty rozhoduješ, jestli se něco synchronizuje, ukládá nebo maže. Záznamy jsou šifrované. Úplné smazání tvých dat je kdykoli možné.

To není jen technický detail. Je to výraz postoje tohoto workbooku: nejsi objektem léčby, ale subjektem své cesty. Sebeurčení nad vlastními daty je konkrétní kus Recovery — a zároveň lidské právo (UN-CRPD, WHO 2021, SAMHSA).

Když je kapitola příliš, zavři ji. Když tě něco zasáhne, zůstaň tam. Není žádné špatné pořadí. Existuje jen tvá cesta — a tento workbook jde s tebou tak daleko, jak ho necháš.
:::

:::standard-quiz{id=q-19-std}
- q: "Musíš kapitoly číst po pořadí?"
  type: multiple-choice
  options:
    - text: "Ano, jinak to nefunguje."
      correct: false
    - text: "Ne — přeskakuj, jak ti to vyhovuje."
      correct: true
      explanation: "Jdi po tom, co tě oslovuje. Opakování je vítáno."
    - text: "Jen pod vedením odborníka."
      correct: false

- q: "Kdo rozhoduje, co se v aplikaci ukládá nebo maže?"
  type: multiple-choice
  options:
    - text: "Aplikace sama."
      correct: false
    - text: "Ty — kdykoli, plně smazatelné."
      correct: true
      explanation: "Sebeurčení nad daty je výrazem recovery-orientovaného postoje."
    - text: "Tvůj odborník."
      correct: false
:::

:::standard-flashcards{id=f-19-std}
- front: "Způsob práce"
  back: "Jedna stránka denně. Přeskakování povoleno. Opakování vítáno. Sdílení volitelné."
- front: "Ochrana dat"
  back: "Tvé záznamy jsou šifrované a patří tobě. Úplné smazání kdykoli možné."
- front: "Postoj workbooku"
  back: "Průvodce, ne učebnice. Ty určuješ tempo, hloubku i dosah — a smíš i odkliknout pryč."
:::


# 20. Krize a bezpečí — krizové linky D-A-CH
{#kap-20 reading_time=2}

Pokud jsi právě teď akutně zatížen/a – pokud máš myšlenky ublížit sobě nebo druhým, nebo pokud cítíš, že tě obsah tady navíc destabilizuje – pak teď není správná chvíle na reflexní otázky. Prosím, hledej hned podporu.

:::crisis
Krizové linky jsou strukturovaně uloženy ve frontmatteru pod `helplines:`. Aplikace je vykreslí jako karty země-po-zemi s Tap-to-Call a Tap-to-Open-URL.
:::

Tato místa jsou anonymní, bezplatná a bez odsudků. Nemusíš mít „skutečnou krizi", abys zavolal/a. Časný hovor je vždy lepší než žádný.

:::info{type=warmth title="Než zavřeš aplikaci: tři věty pro těžké hodiny"}
- Tuto cestu nemusíš jít sám/sama.
- Pocit je informace, ne příkaz – i nejtěžší pocit se pohne.
- Hledat pomoc nikdy není projevem slabosti. Je to znamení, že svůj život bereš vážně.
:::

:::easy{reading_time=1}
Pokud je ti právě teď opravdu zle, dál tady nečti. Sežeň si pomoc.

- **Česko**: Linka první psychické pomoci, 116 123. Ve dne i v noci.
- **Švýcarsko**: Telefon 143 (Die Dargebotene Hand). Ve dne i v noci.
- **Německo**: Telefon 0800 111 0 111.
- **Rakousko**: Telefon 142.

Tato místa jsou zdarma a anonymní. Smíš zavolat, i když nevíš, jestli je to dost zlé.

Hovor nikdy není příliš brzký.
:::

:::quiz{id=q-20}
- q: "Které číslo voláš v Česku na Linku první psychické pomoci?"
  type: multiple-choice
  options:
    - text: "112"
      correct: false
    - text: "116 123"
      correct: true
    - text: "116 111"
      correct: false
      explanation: "116 111 je Linka bezpečí – pro děti a mladé."

- q: "Musíš mít ‚skutečnou krizi', abys zavolal/a?"
  type: true-false
  correct: false
  explanation: "Ne – časný hovor je vždy lepší než žádný."
:::

:::flashcards{id=f-20}
- front: "Krizová linka Česko"
  back: "116 123 – Linka první psychické pomoci. 24/7. Anonymní. Zdarma."
- front: "Krizová linka Švýcarsko"
  back: "143 – Die Dargebotene Hand. 24/7. Anonymní. Zdarma."
- front: "Krizová linka Německo"
  back: "0800 111 0 111 nebo 0800 111 0 222. Telefonseelsorge. 24/7. Zdarma."
- front: "Krizová linka Rakousko"
  back: "142. Telefonseelsorge. 24/7."
- front: "Děti a mládež Česko"
  back: "116 111 – Linka bezpečí. 24/7. Zdarma."
:::

:::standard{reading_time=2}
Pokud jsi právě akutně zatížen/a — pokud máš myšlenky ublížit si nebo druhým, nebo pokud tě obsahy zde dodatečně destabilizují — pak teď není čas na reflexivní otázky. Prosím, najdi si teď podporu.

**Nejdůležitější čísla pro česky a německy mluvící země:**

- **Česko:** **116 123** — Linka první psychické pomoci. 24/7. Anonymní. Zdarma.
- **Česko (děti a mládež):** **116 111** — Linka bezpečí. 24/7. Zdarma.
- **Švýcarsko:** **143** — Die Dargebotene Hand. 24/7. Anonymní. Zdarma.
- **Německo:** **0800 111 0 111** nebo **0800 111 0 222** — Telefonseelsorge. 24/7. Zdarma.
- **Rakousko:** **142** — Telefonseelsorge. 24/7.

Při ohrožení života: **112** (v EU) nebo **155** (zdravotní záchranná služba ČR) / **144** (CH/AT).

Tyto linky jsou anonymní, zdarma a bez odsuzování. Nemusíš mít „opravdovou krizi", abys mohl/a zavolat. Nemusíš vysvětlovat, jestli je to dost vážné. Časný hovor je vždy lepší než žádný.

**Tři věty pro těžké hodiny — než zavřeš aplikaci:**

- Tuto cestu nemusíš jít sám/sama.
- Pocit je informace, ne příkaz. I nejtěžší pocit se posune.
- Hledat pomoc není známka slabosti. Je to znamení, že bereš svůj život vážně.

Pokud teď nemůžeš zavolat: spoj se s někým, komu důvěřuješ. Napiš zprávu. Jdi na nejbližší pohotovost. Malý krok ven stačí.

Nejsi sám/sama. I když to teď tak působí.
:::

:::standard-quiz{id=q-20-std}
- q: "Které číslo voláš v Česku při akutní duševní zátěži?"
  type: multiple-choice
  options:
    - text: "112"
      correct: false
      explanation: "112 je obecná tísňová linka — pro krize duševního zdraví je k dispozici 116 123."
    - text: "116 123 (Linka první psychické pomoci)"
      correct: true
      explanation: "Specializovaná krizová linka 24/7 pro duševní nouzi v ČR."
    - text: "155 — to je jen zdravotní záchranka."
      correct: false

- q: "Musíš mít „opravdovou krizi", abys mohl/a zavolat?"
  type: multiple-choice
  options:
    - text: "Ano, jinak tě neberou vážně."
      correct: false
    - text: "Ne — časný hovor je vždy lepší než žádný."
      correct: true
      explanation: "Smíš zavolat, i když si nejsi jistý/á."
    - text: "Jen v ohrožení života."
      correct: false
:::

:::standard-flashcards{id=f-20-std}
- front: "Krizová linka Česko"
  back: "116 123 — Linka první psychické pomoci. 24/7. Anonymní. Zdarma."
- front: "Krizová linka Švýcarsko"
  back: "143 — Die Dargebotene Hand. 24/7. Anonymní. Zdarma."
- front: "Krizová linka Německo"
  back: "0800 111 0 111 nebo 0800 111 0 222 — Telefonseelsorge. 24/7. Zdarma."
- front: "Kdy zavolat?"
  back: "Vždy. I při nejistotě. Hovor není nikdy příliš brzy."
:::


# 21. Malý slib na závěr
{#kap-21 reading_time=2}

Recovery neznamená, že se všechno vrátí k tomu, jaké to kdysi bylo. Znamená, že může vzniknout něco nového – občas i něco, co by bez této zkušenosti vůbec neexistovalo.

Budou dny, kdy ti bude tohle všechno znít jako prázdný slib. A budou dny, kdy sám/sama všimneš, že se něco posunulo – malá naděje, malé spojení, myšlenka, která dřív nebyla možná.

Co ti výzkum může dát na cestu: nejsi sám/sama. Cesta existuje. A naději si smíš vypůjčit, dokud ji nebudeš moci znovu cítit.

:::quote{author="Patricia Deegan, 1996" source="deegan1996" lang="en"}
By accepting what we cannot do or be, we begin to discover what we can do and who we can become.
:::

:::quote-translation{source="deegan1996" translator="vlastní převod"}
Tím, že přijímáme to, čím nemůžeme být ani co nemůžeme dělat, začínáme objevovat, kým můžeme být a co dělat.
:::

:::quote{author="Antonio Machado"}
Cesty vznikají, když se po nich jde.
:::

:::pull
Na tvé cestě.
:::

:::easy{reading_time=1}
Recovery neznamená: všechno bude jako dřív.

Recovery znamená: něco nového smí vzniknout.

Budeš mít těžké dny. Budeš mít i lehčí dny.

Tři věty na závěr:

- Nejsi sám/sama.
- Cesta existuje.
- Naději si smíš vypůjčit, dokud ji nebudeš mít znovu sám/sama.

Na tvé cestě.
:::

:::quiz{id=q-21}
- q: "Který obraz Recovery nejlépe popisuje?"
  type: multiple-choice
  options:
    - text: "Přímá čára k cíli."
      correct: false
    - text: "Cesta, která vzniká během toho, jak se po ní jde (Machado)."
      correct: true

- q: "Komu cesta patří?"
  type: multiple-choice
  options:
    - text: "Lékaři."
      correct: false
    - text: "Tobě – se spojenci."
      correct: true
:::

:::flashcards{id=f-21}
- front: "Na tvé cestě"
  back: "Závěrečná věta tohoto úvodu. Recovery je vždy tvou cestou – se spojenci."
- front: "Tři závěrečné věty"
  back: "Nejsi sám/sama. Cesta existuje. Naději si smíš vypůjčit, dokud ji nebudeš mít znovu sám/sama."
- front: "Cesty vznikají, když se po nich jde"
  back: "Antonio Machado – motto mnoha Recovery workbooků a také této aplikace."
:::

:::standard{reading_time=2}
Recovery neznamená, že se všechno vrátí k tomu, jaké to kdysi bylo. Znamená, že může vzniknout něco nového — občas i něco, co by bez této zkušenosti vůbec neexistovalo. Jiná hloubka. Jiná pozornost. Někdy jazyk, který jsi dřív neměl/a.

Budou dny, kdy ti tohle bude znít jako prázdný slib. A budou dny, kdy sám/sama všimneš, že se něco posunulo — drobná naděje, malé spojení, myšlenka, která dřív nebyla možná.

Obojí k tomu patří. Recovery není rovná cesta. Má pauzy, smyčky, návraty. Antonio Machado to vyjádřil takto: „Cesty vznikají, když se po nich jde." Platí to i pro tvou cestu.

Co ti výzkum může dát na cestu:

- **Nejsi sám/sama.** Tisíce lidí prošly podobnými obdobími — a našly dobrý život.
- **Cesta existuje.** I když je dnes neviditelná. I když nevypadá jako cesta druhých.
- **Naději si smíš vypůjčit.** Když ji teď nemáš, drží ji za tebe druzí — peer-doprovod, terapeutka, kamarádka, kniha, příběh z tohoto workbooku.

Tento workbook smíš zase zavřít. Smíš ho měsíce poté znovu otevřít. Smíš ho sdílet. Smíš na něj zapomenout. Smíš taky říct: dnes ne.

Co zůstává, je tento malý slib: Na tvé cestě. Jdeme s tebou kus.
:::

:::standard-quiz{id=q-21-std}
- q: "Co když právě teď necítíš žádnou naději?"
  type: multiple-choice
  options:
    - text: "Pak je Recovery u konce."
      correct: false
    - text: "Pak si smíš vypůjčit naději od druhých — dokud ji znovu sám/sama nepocítíš."
      correct: true
      explanation: "Naděje je sdílitelná. Druzí ji za tebe mohou držet."
    - text: "Pak jsi něco udělal/a špatně."
      correct: false

- q: "Jak probíhá Recovery?"
  type: multiple-choice
  options:
    - text: "Jako přímka k cíli."
      correct: false
    - text: "Jako individuální cesta — s pauzami, smyčkami, návraty. „Cesty vznikají, když se po nich jde." (Machado)"
      correct: true
      explanation: "Recovery není lineární. Kroky zpět k tomu patří."
    - text: "Přesně stejně jako u druhých."
      correct: false
:::

:::standard-flashcards{id=f-21-std}
- front: "Recovery"
  back: "Smí vzniknout něco nového. Ne: všechno se vrátí k tomu, jaké to bylo."
- front: "Vypůjčit si naději"
  back: "Když ji sám/sama nemáš: druzí ji za tebe drží — dokud ji znovu nepocítíš."
- front: "Tři závěrečné věty"
  back: "Nejsi sám/sama. Cesta existuje. Naději si smíš vypůjčit."
- front: "Na tvé cestě"
  back: "„Cesty vznikají, když se po nich jde." (Antonio Machado) — Jdeme s tebou kus."
:::


# Metodické poznámky (interní)
{#methodik}

Všechna tvrzení jsou prověřena vůči primárním zdrojům uvedeným ve frontmatteru. Pokud byly k dispozici přehledové studie a meta-analýzy, dostávaly přednost před jednotlivými studiemi.

Doslovné citáty jsou uvedeny v původním znění (widget quote s referencí `source`). Převody do češtiny jsou označeny jako „vlastní převod" (widget quote-translation). Pojmy a modely (CHIME, CHIME-D, Naděje-Moc-Smysl, Personal Medicine, Trialog, EX-IN, Salutogeneze, Open Dialogue) jsou používány jako vědecké termíny a v registru zdrojů jsou propojeny se svými autorkami a autory.


---

**Tato česká verze je strojový draft.** Pro klinické nebo veřejné nasazení – zvláště u krizových pasáží (kapitola 20) – je nutná profesionální revize překladatelem/kou se zkušeností v oblasti duševního zdraví. Stav: viz `translation_status` ve frontmatteru.
