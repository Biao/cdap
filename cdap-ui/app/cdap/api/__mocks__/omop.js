export const OMOP_SCHEMA = {
  $schema: 'http://json-schema.org/draft-06/schema#',
  $id: 'https://github.com/OHDSI/CommonDataModel/tree/v6.0.0',
  description:
    'see https://github.com/OHDSI/CommonDataModel/blob/v6.0.0/OMOP_CDM_v6_0.pdf for information about the OMOP Schemas',
  metadata: {
    standard: {
      name: 'omop',
      version: '6.0.0',
    },
    version: '1.0.0',
  },
  discriminator: {
    propertyName: 'table.id',
    mapping: {
      CARE_SITE: '#/definitions/CARE_SITE',
      CDM_SOURCE: '#/definitions/CDM_SOURCE',
      COHORT: '#/definitions/COHORT',
      COHORT_DEFINITION: '#/definitions/COHORT_DEFINITION',
      CONCEPT: '#/definitions/CONCEPT',
      CONCEPT_ANCESTOR: '#/definitions/CONCEPT_ANCESTOR',
      CONCEPT_CLASS: '#/definitions/CONCEPT_CLASS',
      CONCEPT_RELATIONSHIP: '#/definitions/CONCEPT_RELATIONSHIP',
      CONCEPT_SYNONYM: '#/definitions/CONCEPT_SYNONYM',
      CONDITION_ERA: '#/definitions/CONDITION_ERA',
      CONDITION_OCCURRENCE: '#/definitions/CONDITION_OCCURRENCE',
      COST: '#/definitions/COST',
      DEATH: '#/definitions/DEATH',
      DEVICE_EXPOSURE: '#/definitions/DEVICE_EXPOSURE',
      DOMAIN: '#/definitions/DOMAIN',
      DOSE_ERA: '#/definitions/DOSE_ERA',
      DRUG_ERA: '#/definitions/DRUG_ERA',
      DRUG_EXPOSURE: '#/definitions/DRUG_EXPOSURE',
      DRUG_STRENGTH: '#/definitions/DRUG_STRENGTH',
      FACT_RELATIONSHIP: '#/definitions/FACT_RELATIONSHIP',
      LOCATION: '#/definitions/LOCATION',
      LOCATION_HISTORY: '#/definitions/LOCATION_HISTORY',
      MEASUREMENT: '#/definitions/MEASUREMENT',
      METADATA: '#/definitions/METADATA',
      NOTE: '#/definitions/NOTE',
      NOTE_NLP: '#/definitions/NOTE_NLP',
      OBSERVATION: '#/definitions/OBSERVATION',
      OBSERVATION_PERIOD: '#/definitions/OBSERVATION_PERIOD',
      PAYER_PLAN_PERIOD: '#/definitions/PAYER_PLAN_PERIOD',
      PERSON: '#/definitions/PERSON',
      PROCEDURE_OCCURRENCE: '#/definitions/PROCEDURE_OCCURRENCE',
      PROVIDER: '#/definitions/PROVIDER',
      RELATIONSHIP: '#/definitions/RELATIONSHIP',
      SOURCE_TO_CONCEPT_MAP: '#/definitions/SOURCE_TO_CONCEPT_MAP',
      SPECIMEN: '#/definitions/SPECIMEN',
      SURVEY_CONDUCT: '#/definitions/SURVEY_CONDUCT',
      VISIT_DETAIL: '#/definitions/VISIT_DETAIL',
      VISIT_OCCURRENCE: '#/definitions/VISIT_OCCURRENCE',
      VOCABULARY: '#/definitions/VOCABULARY',
    },
  },
  oneOf: [
    {
      $ref: '#/definitions/CARE_SITE',
    },
    {
      $ref: '#/definitions/CDM_SOURCE',
    },
    {
      $ref: '#/definitions/COHORT',
    },
    {
      $ref: '#/definitions/COHORT_DEFINITION',
    },
    {
      $ref: '#/definitions/CONCEPT',
    },
    {
      $ref: '#/definitions/CONCEPT_ANCESTOR',
    },
    {
      $ref: '#/definitions/CONCEPT_CLASS',
    },
    {
      $ref: '#/definitions/CONCEPT_RELATIONSHIP',
    },
    {
      $ref: '#/definitions/CONCEPT_SYNONYM',
    },
    {
      $ref: '#/definitions/CONDITION_ERA',
    },
    {
      $ref: '#/definitions/CONDITION_OCCURRENCE',
    },
    {
      $ref: '#/definitions/COST',
    },
    {
      $ref: '#/definitions/DEATH',
    },
    {
      $ref: '#/definitions/DEVICE_EXPOSURE',
    },
    {
      $ref: '#/definitions/DOMAIN',
    },
    {
      $ref: '#/definitions/DOSE_ERA',
    },
    {
      $ref: '#/definitions/DRUG_ERA',
    },
    {
      $ref: '#/definitions/DRUG_EXPOSURE',
    },
    {
      $ref: '#/definitions/DRUG_STRENGTH',
    },
    {
      $ref: '#/definitions/FACT_RELATIONSHIP',
    },
    {
      $ref: '#/definitions/LOCATION',
    },
    {
      $ref: '#/definitions/LOCATION_HISTORY',
    },
    {
      $ref: '#/definitions/MEASUREMENT',
    },
    {
      $ref: '#/definitions/METADATA',
    },
    {
      $ref: '#/definitions/NOTE',
    },
    {
      $ref: '#/definitions/NOTE_NLP',
    },
    {
      $ref: '#/definitions/OBSERVATION',
    },
    {
      $ref: '#/definitions/OBSERVATION_PERIOD',
    },
    {
      $ref: '#/definitions/PAYER_PLAN_PERIOD',
    },
    {
      $ref: '#/definitions/PERSON',
    },
    {
      $ref: '#/definitions/PROCEDURE_OCCURRENCE',
    },
    {
      $ref: '#/definitions/PROVIDER',
    },
    {
      $ref: '#/definitions/RELATIONSHIP',
    },
    {
      $ref: '#/definitions/SOURCE_TO_CONCEPT_MAP',
    },
    {
      $ref: '#/definitions/SPECIMEN',
    },
    {
      $ref: '#/definitions/SURVEY_CONDUCT',
    },
    {
      $ref: '#/definitions/VISIT_DETAIL',
    },
    {
      $ref: '#/definitions/VISIT_OCCURRENCE',
    },
    {
      $ref: '#/definitions/VOCABULARY',
    },
  ],
  definitions: {
    date: {
      pattern:
        '^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?)?$',
      type: 'string',
      description:
        'A date or partial date (e.g. just year or year + month). There is no time zone. The format is a union of the schema types gYear, gYearMonth and date.  Dates SHALL be valid dates.',
    },
    datetime: {
      type: 'string',
      description: 'A date, date-time or partial date (e.g. just year oryear + month).',
      pattern:
        '^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?$',
    },
    CARE_SITE: {
      type: 'object',
      description:
        'The CARE_SITE table contains a list of uniquely identified institutional (physical or organizational) units where healthcare delivery is practiced (offices, wards, hospitals, clinics, etc.).',
      properties: {
        care_site_id: {
          description: 'A unique identifier for each Care Site.',
          type: 'number',
        },
        care_site_name: {
          description: 'The verbatim description or name of the Care Site as in data source',
          type: 'string',
        },
        place_of_service_concept_id: {
          description:
            'A foreign key that refers to a Place of Service Concept ID in the Standardized Vocabularies.',
          type: 'number',
        },
        location_id: {
          description:
            'A foreign key to the geographic Location in the LOCATION table, where the detailed address information is stored.',
          type: 'number',
        },
        care_site_source_value: {
          description:
            'The identifier for the Care Site in the source data, stored here for reference.',
          type: 'string',
        },
        place_of_service_source_value: {
          description:
            'The source code for the Place of Service as it appears in the source data, stored here for reference.',
          type: 'string',
        },
      },
      required: ['care_site_id', 'place_of_service_concept_id'],
    },
    CDM_SOURCE: {
      type: 'object',
      description:
        'The CDM_SOURCE table contains detail about the source database and the process used to transform the data into the OMOP Common Data Model.',
      properties: {
        cdm_source_name: {
          description: 'The full name of the source',
          type: 'string',
        },
        cdm_source_abbreviation: {
          description: 'An abbreviation of the name',
          type: 'string',
        },
        cdm_holder: {
          description:
            'The name of the organization responsible for the development of the CDM instance',
          type: 'string',
        },
        source_description: {
          description:
            'A description of the source data origin and purpose for collection. The description may contain a summary of the period of time that is expected to be covered by this dataset.',
        },
        source_documentation_reference: {
          description: 'URL or other external reference to location of source documentation',
          type: 'string',
        },
        cdm_etl_reference: {
          description:
            'URL or other external reference to location of ETL specification documentation and ETL source code',
          type: 'string',
        },
        source_release_date: {
          description:
            'The date for which the source data are most current, such as the last day of data capture',
          $ref: '#/definitions/date',
        },
        cdm_release_date: {
          description: 'The date when the CDM was instantiated',
          $ref: '#/definitions/date',
        },
        cdm_version: {
          description: 'The version of CDM used',
          type: 'string',
        },
        vocabulary_version: {
          description: 'The version of the vocabulary used',
          type: 'string',
        },
      },
      required: ['cdm_source_name'],
    },
    COHORT: {
      type: 'object',
      description:
        'The COHORT table contains records of subjects that satisfy a given set of criteria for a duration of time. The definition of the cohort is contained within the COHORT_DEFINITION table. Cohorts can be constructed of patients (Persons), Providers or Visits.',
      properties: {
        cohort_definition_id: {
          description:
            'A foreign key to a record in the COHORT_DEFINITION table containing relevant Cohort Definition information.',
          type: 'number',
        },
        subject_id: {
          description:
            'A foreign key to the subject in the cohort. These could be referring to records in the PERSON, PROVIDER, VISIT_OCCURRENCE table.',
          type: 'number',
        },
        cohort_start_date: {
          description:
            'The date when the Cohort Definition criteria for the Person, Provider or Visit first match.',
          $ref: '#/definitions/date',
        },
        cohort_end_date: {
          description:
            'The date when the Cohort Definition criteria for the Person, Provider or Visit no longer match or the Cohort membership was terminated.',
          $ref: '#/definitions/date',
        },
      },
      required: ['cohort_definition_id', 'subject_id', 'cohort_start_date', 'cohort_end_date'],
    },
    COHORT_DEFINITION: {
      type: 'object',
      description:
        'The COHORT_DEFINITION table contains records defining a Cohort derived from the data through the associated description and syntax and upon instantiation (execution of the algorithm) placed into the COHORT table. Cohorts are a set of subjects that satisfy a given combination of inclusion criteria for a duration of time. The COHORT_DEFINITION table provides a standardized structure for maintaining the rules governing the inclusion of a subject into a cohort, and can store operational programming code to instantiate the cohort within the OMOP Common Data Model.',
      properties: {
        cohort_definition_id: {
          description: 'A unique identifier for each Cohort.',
          type: 'number',
        },
        cohort_definition_name: {
          description: 'A short description of the Cohort.',
          type: 'string',
        },
        cohort_definition_description: {
          description: 'A complete description of the Cohort definition',
          type: 'string',
        },
        definition_type_concept_id: {
          description:
            'Type defining what kind of Cohort Definition the record represents and how the syntax may be executed',
          type: 'number',
        },
        cohort_definition_syntax: {
          description: 'Syntax or code to operationalize the Cohort definition',
          type: 'string',
        },
        subject_concept_id: {
          description:
            'A foreign key to the Concept to which defines the domain of subjects that are members of the cohort (e.g., Person, Provider, Visit).',
          type: 'number',
        },
        cohort_initiation_date: {
          description: 'A date to indicate when the Cohort was initiated in the COHORT table',
          $ref: '#/definitions/date',
        },
      },
      required: [
        'cohort_definition_id',
        'cohort_definition_name',
        'definition_type_concept_id',
        'subject_concept_id',
      ],
    },
    CONCEPT: {
      type: 'object',
      description:
        'The Standardized Vocabularies contains records, or Concepts, that uniquely identify each fundamental unit of meaning used to express clinical information in all domain tables of the CDM. Concepts are derived from vocabularies, which represent clinical information across a domain (e.g. conditions, drugs, procedures) through the use of codes and associated descriptions. Some Concepts are designated Standard Concepts, meaning these Concepts can be used as normative expressions of a clinical entity within the OMOP Common Data Model and within standardized analytics. Each Standard Concept belongs to one domain, which defines the location where the Concept would be expected to occur within data tables of the CDM.',
      properties: {
        concept_id: {
          description: 'A unique identifier for each Concept across all domains.',
          type: 'number',
        },
        concept_name: {
          description: 'An unambiguous, meaningful and descriptive name for the Concept.',
          type: 'string',
        },
        domain_id: {
          description: 'A foreign key to the DOMAIN table the Concept belongs to.',
          type: 'string',
        },
        vocabulary_id: {
          description:
            'A foreign key to the VOCABULARY table indicating from which source the Concept has been adapted.',
          type: 'string',
        },
        concept_class_id: {
          description:
            "The attribute or concept class of the Concept. Examples are 'Clinical Drug', 'Ingredient', 'Clinical Finding' etc.",
          type: 'string',
        },
        standard_concept: {
          description:
            "This flag determines where a Concept is a Standard Concept, i.e. is used in the data, a Classification Concept, or a non-standard Source Concept. The allowables values are 'S' (Standard Concept) and 'C' (Classification Concept), otherwise the content is NULL.",
          type: 'string',
        },
        concept_code: {
          description:
            'The concept code represents the identifier of the Concept in the source vocabulary, such as SNOMED-CT concept IDs, RxNorm RXCUIs etc. Note that concept codes are not unique across vocabularies.',
          type: 'string',
        },
        valid_start_date: {
          description:
            'The date when the Concept was first recorded. The default value is 1-Jan-1970, meaning, the Concept has no (known) date of inception.',
          $ref: '#/definitions/date',
        },
        valid_end_date: {
          description:
            'The date when the Concept became invalid because it was deleted or superseded (updated) by a new concept. The default value is 31-Dec-2099, meaning, the Concept is valid until it becomes deprecated.',
          $ref: '#/definitions/date',
        },
        invalid_reason: {
          description:
            'Reason the Concept was invalidated. Possible values are D (deleted), U (replaced with an update) or NULL when valid_end_date has the default value.',
          type: 'string',
        },
      },
      required: [
        'concept_id',
        'concept_name',
        'domain_id',
        'vocabulary_id',
        'concept_class_id',
        'concept_code',
        'valid_start_date',
        'valid_end_date',
      ],
    },
    CONCEPT_ANCESTOR: {
      type: 'object',
      description:
        'The CONCEPT_ANCESTOR table is designed to simplify observational analysis by providing the complete hierarchical relationships between Concepts. Only direct parent-child relationships between Concepts are stored in the CONCEPT_RELATIONSHIP table. To determine higher level ancestry connections, all individual direct relationships would have to be navigated at analysis time. The  CONCEPT_ANCESTOR table includes records for all parent-child relationships, as well as grandparent-grandchild relationships and those of any other level of lineage. Using the CONCEPT_ANCESTOR table allows for querying for all descendants of a hierarchical concept. For example, drug ingredients and drug products are all descendants of a drug class ancestor.',
      properties: {
        ancestor_concept_id: {
          description:
            'A foreign key to the concept in the concept table for the higher-level concept that forms the ancestor in the relationship.',
          type: 'number',
        },
        descendant_concept_id: {
          description:
            'A foreign key to the concept in the concept table for the lower-level concept that forms the descendant in the relationship.',
          type: 'number',
        },
        min_levels_of_separation: {
          description:
            'The minimum separation in number of levels of hierarchy between ancestor and descendant concepts. This is an attribute that is used to simplify hierarchic analysis.',
          type: 'number',
        },
        max_levels_of_separation: {
          description:
            'The maximum separation in number of levels of hierarchy between ancestor and descendant concepts. This is an attribute that is used to simplify hierarchic analysis.',
          type: 'number',
        },
      },
      required: [
        'ancestor_concept_id',
        'descendant_concept_id',
        'min_levels_of_separation',
        'max_levels_of_separation',
      ],
    },
    CONCEPT_CLASS: {
      type: 'object',
      description:
        'The CONCEPT_CLASS table is a reference table, which includes a list of the classifications used to differentiate Concepts within a given Vocabulary. This reference table is populated with a single record for each Concept Class:',
      properties: {
        concept_class_id: {
          description: 'A unique key for each class.',
          type: 'string',
        },
        concept_class_name: {
          description:
            'The name describing the Concept Class, e.g. "Clinical Finding", "Ingredient", etc.',
          type: 'string',
        },
        concept_class_concept_id: {
          description:
            'A foreign key that refers to an identifier in the CONCEPT table for the unique Concept Class the record belongs to.',
          type: 'number',
        },
      },
      required: ['concept_class_id', 'concept_class_name', 'concept_class_concept_id'],
    },
    CONCEPT_RELATIONSHIP: {
      type: 'object',
      description:
        'The CONCEPT_RELATIONSHIP table contains records that define direct relationships between any two Concepts and the nature or type of the relationship. Each type of a relationship is defined in the RELATIONSHIP table.',
      properties: {
        concept_id_1: {
          description:
            'A foreign key to a Concept in the CONCEPT table associated with the relationship. Relationships are directional, and this field represents the source concept designation.',
          type: 'number',
        },
        concept_id_2: {
          description:
            'A foreign key to a Concept in the CONCEPT table associated with the relationship. Relationships are directional, and this field represents the destination concept designation.',
          type: 'number',
        },
        relationship_id: {
          description:
            'A unique identifier to the type or nature of the Relationship as defined in the RELATIONSHIP table.',
          type: 'string',
        },
        valid_start_date: {
          description: 'The date when the instance of the Concept Relationship is first recorded.',
          $ref: '#/definitions/date',
        },
        valid_end_date: {
          description:
            'The date when the Concept Relationship became invalid because it was deleted or superseded (updated) by a new relationship. Default value is 31-Dec-2099.',
          $ref: '#/definitions/date',
        },
        invalid_reason: {
          description:
            "Reason the relationship was invalidated. Possible values are 'D' (deleted), 'U' (replaced with an update) or NULL when valid_end_date has the default value.",
          type: 'string',
        },
      },
      required: [
        'concept_id_1',
        'concept_id_2',
        'relationship_id',
        'valid_start_date',
        'valid_end_date',
      ],
    },
    CONCEPT_SYNONYM: {
      type: 'object',
      description:
        'The CONCEPT_SYNONYM table is used to store alternate names and descriptions for Concepts.',
      properties: {
        concept_id: {
          description: 'A foreign key to the Concept in the CONCEPT table.',
          type: 'number',
        },
        concept_synonym_name: {
          description: 'The alternative name for the Concept.',
          type: 'string',
        },
        language_concept_id: {
          description: 'A foreign key to a Concept representing the language.',
          type: 'number',
        },
      },
      required: ['concept_id', 'concept_synonym_name', 'language_concept_id'],
    },
    CONDITION_ERA: {
      type: 'object',
      description:
        'A Condition Era is defined as a span of time when the Person is assumed to have a given condition.\nSimilar to Drug Eras, Condition Eras are chronological periods of Condition Occurrence. Combining individual Condition Occurrences into a single Condition Era serves two purposes:',
      properties: {
        condition_era_id: {
          description: 'A unique identifier for each Condition Era.',
          type: 'number',
        },
        person_id: {
          description:
            'A foreign key identifier to the Person who is experiencing the Condition during the Condition Era. The demographic details of that Person are stored in the PERSON table.',
          type: 'number',
        },
        condition_concept_id: {
          description:
            'A foreign key that refers to a standard Condition Concept identifier in the Standardized Vocabularies.',
          type: 'number',
        },
        condition_era_start_datetime: {
          description:
            'The start date for the Condition Era constructed from the individual instances of Condition Occurrences. It is the start date of the very first chronologically recorded instance of the condition.',
          $ref: '#/definitions/datetime',
        },
        condition_era_end_datetime: {
          description:
            'The end date for the Condition Era constructed from the individual instances of Condition Occurrences. It is the end date of the final continuously recorded instance of the Condition.',
          $ref: '#/definitions/datetime',
        },
        condition_occurrence_count: {
          description:
            'The number of individual Condition Occurrences used to construct the condition era.',
          type: 'number',
        },
      },
      required: [
        'condition_era_id',
        'person_id',
        'condition_concept_id',
        'condition_era_start_datetime',
        'condition_era_end_datetime',
      ],
    },
    CONDITION_OCCURRENCE: {
      type: 'object',
      description:
        'Conditions are records of a Person suggesting the presence of a disease or medical condition stated as a diagnosis, a sign, or a symptom, which is either observed by a Provider or reported by the patient. Conditions are recorded in different sources and levels of standardization, for example:',
      properties: {
        condition_occurrence_id: {
          description: 'A unique identifier for each Condition Occurrence event.',
        },
        person_id: {
          description:
            'A foreign key identifier to the Person who is experiencing the condition. The demographic details of that Person are stored in the PERSON table.',
        },
        condition_concept_id: {
          description:
            "A foreign key that refers to a Standard Concept identifier in the Standardized Vocabularies belonging to the 'Condition' domain.",
          type: 'number',
        },
        condition_start_date: {
          description: 'The date when the instance of the Condition is recorded.',
          $ref: '#/definitions/date',
        },
        condition_start_datetime: {
          description: 'The date and time when the instance of the Condition is recorded.',
          $ref: '#/definitions/datetime',
        },
        condition_end_date: {
          description: 'The date when the instance of the Condition is considered to have ended.',
          $ref: '#/definitions/date',
        },
        condition_end_datetime: {
          description: 'The date when the instance of the Condition is considered to have ended.',
          $ref: '#/definitions/datetime',
        },
        condition_type_concept_id: {
          description:
            "A foreign key to the predefined Concept identifier in the Standardized Vocabularies reflecting the source data from which the Condition was recorded, the level of standardization, and the type of occurrence. These belong to the 'Condition Type' vocabulary",
          type: 'number',
        },
        condition_status_concept_id: {
          description:
            'A foreign key that refers to a Standard Concept identifier in the Standardized Vocabularies reflecting the point of care at which the Condition was diagnosed.',
          type: 'number',
        },
        stop_reason: {
          description:
            'The reason that the Condition was no longer present, as indicated in the source data.',
          type: 'string',
        },
        provider_id: {
          description:
            'A foreign key to the Provider in the PROVIDER table who was responsible for capturing (diagnosing) the Condition.',
          type: 'number',
        },
        visit_occurrence_id: {
          description:
            'A foreign key to the visit in the VISIT_OCCURRENCE table during which the Condition was determined (diagnosed).',
          type: 'number',
        },
        visit_detail_id: {
          description:
            'A foreign key to the visit in the VISIT_DETAIL table during which the Condition was determined (diagnosed).',
          type: 'number',
        },
        condition_source_value: {
          description:
            'The source code for the Condition as it appears in the source data. This code is mapped to a Standard Condition Concept in the Standardized Vocabularies and the original code is stored here for reference.',
          type: 'string',
        },
        condition_source_concept_id: {
          description:
            'A foreign key to a Condition Concept that refers to the code used in the source.',
          type: 'number',
        },
        condition_status_source_value: {
          description:
            'The source code for the condition status as it appears in the source data.  This code is mapped to a Standard Concept in the Standardized Vocabularies and the original code is stored here for reference.',
          type: 'string',
        },
      },
      required: [
        'condition_occurrence_id',
        'person_id',
        'condition_concept_id',
        'condition_start_datetime',
        'condition_type_concept_id',
        'condition_status_concept_id',
        'condition_source_concept_id',
      ],
    },
    COST: {
      type: 'object',
      description:
        'The COST table captures records containing the cost of any medical event recorded in one of the OMOP clinical event tables such as DRUG_EXPOSURE, PROCEDURE_OCCURRENCE, VISIT_OCCURRENCE, VISIT_DETAIL, DEVICE_OCCURRENCE, OBSERVATION or MEASUREMENT.',
      properties: {
        cost_id: {
          description: 'A unique identifier for each COST record.',
          type: 'number',
        },
        person_id: {
          description: 'A unique identifier for each PERSON.',
          type: 'number',
        },
        cost_event_id: {
          description:
            'A foreign key identifier to the event (e.g. Measurement, Procedure, Visit, Drug Exposure, etc) record for which cost data are recorded.',
          type: 'number',
        },
        cost_event_field_concept_id: {
          description:
            'A foreign key identifier to a concept in the CONCEPT table representing the identity of the field represented by COST_EVENT_ID',
          type: 'number',
        },
        cost_concept_id: {
          description:
            "A foreign key that refers to a Standard Cost Concept identifier in the Standardized Vocabularies belonging to the 'Cost' vocabulary.",
          type: 'number',
        },
        cost_type_concept_id: {
          description:
            "A foreign key identifier to a concept in the CONCEPT table for the provenance or the source of the COST data and belonging to the 'Cost Type' vocabulary",
          type: 'number',
        },
        cost_source_concept_id: {
          description:
            'A foreign key to a Cost Concept that refers to the code used in the source.',
          type: 'number',
        },
        cost_source_value: {
          description: 'The source value for the cost as it appears in the source data',
          type: 'string',
        },
        currency_concept_id: {
          description:
            "A foreign key identifier to the concept representing the 3-letter code used to delineate international currencies, such as USD for US Dollar. These belong to the 'Currency' vocabulary",
          type: 'number',
        },
        cost: {
          description: 'The actual financial cost amount',
          type: 'number',
        },
        incurred_date: {
          description:
            'The first date of service of the clinical event corresponding to the cost as in table capturing the information (e.g. date of visit, date of procedure, date of condition, date of drug etc).',
          $ref: '#/definitions/date',
        },
        billed_date: {
          description: 'The date a bill was generated for a service or encounter',
          $ref: '#/definitions/date',
        },
        paid_date: {
          description: 'The date payment was received for a service or encounter',
          $ref: '#/definitions/date',
        },
        revenue_code_concept_id: {
          description:
            "A foreign key referring to a Standard Concept ID in the Standardized Vocabularies for Revenue codes belonging to the 'Revenue Code' vocabulary.",
          type: 'number',
        },
        drg_concept_id: {
          description:
            "A foreign key referring to a Standard Concept ID in the Standardized Vocabularies for DRG codes belonging to the 'DRG' vocabulary.",
          type: 'number',
        },
        revenue_code_source_value: {
          description:
            'The source value for the Revenue code as it appears in the source data, stored here for reference.',
          type: 'string',
        },
        drg_source_value: {
          description:
            'The source value for the 3-digit DRG source code as it appears in the source data, stored here for reference.',
          type: 'string',
        },
        payer_plan_period_id: {
          description:
            'A foreign key to the PAYER_PLAN_PERIOD table, where the details of the Payer, Plan and Family are stored. Record the payer_plan_id that relates to the payer who contributed to the paid_by_payer field.',
          type: 'number',
        },
      },
      required: [
        'cost_id',
        'person_id',
        'cost_event_id',
        'cost_event_field_concept_id',
        'cost_concept_id',
        'cost_type_concept_id',
        'cost_source_concept_id',
        'currency_concept_id',
        'cost',
        'incurred_date',
        'revenue_code_concept_id',
        'drg_concept_id',
      ],
    },
    DEVICE_EXPOSURE: {
      type: 'object',
      description:
        "The 'Device' domain captures information about a person's exposure to a foreign physical object or instrument which is used for diagnostic or therapeutic purposes through a mechanism beyond chemical action. Devices include implantable objects (e.g. pacemakers, stents, artificial joints), medical equipment and supplies (e.g. bandages, crutches, syringes), other instruments used in medical procedures (e.g. sutures, defibrillators) and material used in clinical care (e.g. adhesives, body material, dental material, surgical material).",
      properties: {
        device_exposure_id: {
          description: 'A system-generated unique identifier for each Device Exposure.',
        },
        person_id: {
          description:
            'A foreign key identifier to the Person who is subjected to the Device. The demographic details of that Person are stored in the PERSON table.',
        },
        device_concept_id: {
          description:
            "A foreign key that refers to a Standard Concept identifier in the Standardized Vocabularies belonging to the 'Device' domain.",
          type: 'number',
        },
        device_exposure_start_date: {
          description: 'The date the Device or supply was applied or used.',
          $ref: '#/definitions/date',
        },
        device_exposure_start_datetime: {
          description: 'The date and time the Device or supply was applied or used.',
          $ref: '#/definitions/datetime',
        },
        device_exposure_end_date: {
          description: 'The date use of the Device or supply was ceased.',
          $ref: '#/definitions/date',
        },
        device_exposure_end_datetime: {
          description: 'The date and time use of the Device or supply was ceased.',
          $ref: '#/definitions/datetime',
        },
        device_type_concept_id: {
          description:
            "A foreign key to the predefined Concept identifier in the Standardized Vocabularies reflecting the type of Device Exposure recorded. It indicates how the Device Exposure was represented in the source data and belongs to the 'Device Type' domain.",
          type: 'number',
        },
        unique_device_id: {
          description:
            'A UDI or equivalent identifying the instance of the Device used in the Person.',
          type: 'string',
        },
        quantity: {
          description: 'The number of individual Devices used in the exposure.',
          type: 'number',
        },
        provider_id: {
          description:
            'A foreign key to the provider in the PROVIDER table who initiated or administered the Device.',
          type: 'number',
        },
        visit_occurrence_id: {
          description:
            'A foreign key to the visit in the VISIT_OCCURRENCE table during which the Device was used.',
          type: 'number',
        },
        visit_detail_id: {
          description:
            'A foreign key to the visit detail record in the VISIT_DETAIL table during which the Device was used.',
          type: 'number',
        },
        device_source_value: {
          description:
            'The source code for the Device as it appears in the source data. This code is mapped to a Standard Device Concept in the Standardized Vocabularies and the original code is stored here for reference.',
          type: 'string',
        },
        device_source_concept_id: {
          description:
            'A foreign key to a Device Concept that refers to the code used in the source.',
          type: 'number',
        },
      },
      required: [
        'device_exposure_id',
        'person_id',
        'device_concept_id',
        'device_exposure_start_datetime',
        'device_type_concept_id',
        'device_source_concept_id',
      ],
    },
    DOMAIN: {
      type: 'object',
      description:
        'The DOMAIN table includes a list of OMOP-defined Domains the Concepts of the Standardized Vocabularies can belong to. A Domain defines the set of allowable Concepts for the standardized fields in the CDM tables. For example, the "Condition" Domain contains Concepts that describe a condition of a patient, and these Concepts can only be stored in the condition_concept_id field of the CONDITION_OCCURRENCE and CONDITION_ERA tables. This reference table is populated with a single record for each Domain and includes a descriptive name for the Domain.',
      properties: {
        domain_id: {
          description: 'A unique key for each domain.',
          type: 'string',
        },
        domain_name: {
          description:
            'The name describing the Domain, e.g. "Condition", "Procedure", "Measurement" etc.',
          type: 'string',
        },
        domain_concept_id: {
          description:
            'A foreign key that refers to an identifier in the CONCEPT table for the unique Domain Concept the Domain record belongs to.',
          type: 'number',
        },
      },
      required: ['domain_id', 'domain_name', 'domain_concept_id'],
    },
    DOSE_ERA: {
      type: 'object',
      description:
        'A Dose Era is defined as a span of time when the Person is assumed to be exposed to a constant dose of a specific active ingredient.',
      properties: {
        dose_era_id: {
          description: 'A unique identifier for each Dose Era.',
          type: 'number',
        },
        person_id: {
          description:
            'A foreign key identifier to the Person who is subjected to the drug during the drug era. The demographic details of that Person are stored in the PERSON table.',
          type: 'number',
        },
        drug_concept_id: {
          description:
            'A foreign key that refers to a Standard Concept identifier in the Standardized Vocabularies for the active Ingredient Concept.',
          type: 'number',
        },
        unit_concept_id: {
          description:
            'A foreign key that refers to a Standard Concept identifier in the Standardized Vocabularies for the unit concept.',
          type: 'number',
        },
        dose_value: {
          description: 'The numeric value of the dose.',
          type: 'number',
        },
        dose_era_start_datetime: {
          description:
            'The start date for the drug era constructed from the individual instances of drug exposures. It is the start date of the very first chronologically recorded instance of utilization of a drug.',
          $ref: '#/definitions/datetime',
        },
        dose_era_end_datetime: {
          description:
            'The end date for the drug era constructed from the individual instance of drug exposures. It is the end date of the final continuously recorded instance of utilization of a drug.',
          $ref: '#/definitions/datetime',
        },
      },
      required: [
        'dose_era_id',
        'person_id',
        'drug_concept_id',
        'unit_concept_id',
        'dose_value',
        'dose_era_start_datetime',
        'dose_era_end_datetime',
      ],
    },
    DRUG_ERA: {
      type: 'object',
      description:
        'A Drug Era is defined as a span of time when the Person is assumed to be exposed to a particular active ingredient. A Drug Era is not the same as a Drug Exposure: Exposures are individual records corresponding to the source when Drug was delivered to the Person, while successive periods of Drug Exposures are combined under certain rules to produce continuous Drug Eras.',
      properties: {
        drug_era_id: {
          description: 'A unique identifier for each Drug Era.',
          type: 'number',
        },
        person_id: {
          description:
            'A foreign key identifier to the Person who is subjected to the Drug during the fDrug Era. The demographic details of that Person are stored in the PERSON table.',
          type: 'number',
        },
        drug_concept_id: {
          description:
            'A foreign key that refers to a Standard Concept identifier in the Standardized Vocabularies for the Ingredient Concept.',
          type: 'number',
        },
        drug_era_start_datetime: {
          description:
            'The start date for the Drug Era constructed from the individual instances of Drug Exposures. It is the start date of the very first chronologically recorded instance of conutilization of a Drug.',
          $ref: '#/definitions/datetime',
        },
        drug_era_end_datetime: {
          description:
            'The end date for the drug era constructed from the individual instance of drug exposures. It is the end date of the final continuously recorded instance of utilization of a drug.',
          $ref: '#/definitions/datetime',
        },
        drug_exposure_count: {
          description:
            'The number of individual Drug Exposure occurrences used to construct the Drug Era.',
          type: 'number',
        },
        gap_days: {
          description:
            'The number of days that are not covered by DRUG_EXPOSURE records that were used to make up the era record.',
          type: 'number',
        },
      },
      required: [
        'drug_era_id',
        'person_id',
        'drug_concept_id',
        'drug_era_start_datetime',
        'drug_era_end_datetime',
      ],
    },
    DRUG_EXPOSURE: {
      type: 'object',
      description:
        "The 'Drug' domain captures records about the utilization of a Drug when ingested or otherwise introduced into the body. A Drug is a biochemical substance formulated in such a way that when administered to a Person it will exert a certain physiological effect. Drugs include prescription and over-the-counter medicines, vaccines, and large-molecule biologic therapies. Radiological devices ingested or applied locally do not count as Drugs.",
      properties: {
        drug_exposure_id: {
          description: 'A system-generated unique identifier for each Drug utilization event.',
        },
        person_id: {
          description:
            'A foreign key identifier to the Person who is subjected to the Drug. The demographic details of that Person are stored in the PERSON table.',
        },
        drug_concept_id: {
          description:
            "A foreign key that refers to a Standard Concept identifier in the Standardized Vocabularies belonging to the 'Drug' domain.",
          type: 'number',
        },
        drug_exposure_start_date: {
          description:
            'The start date for the current instance of Drug utilization. Valid entries include a start date of a prescription, the date a prescription was filled, or the date on which a Drug administration procedure was recorded.',
          $ref: '#/definitions/date',
        },
        drug_exposure_start_datetime: {
          description:
            'The start date and time for the current instance of Drug utilization. Valid entries include a start datetime of a prescription, the date and time a prescription was filled, or the date and time on which a Drug administration procedure was recorded.',
          $ref: '#/definitions/datetime',
        },
        drug_exposure_end_date: {
          description:
            'The end date for the current instance of Drug utilization. Depending on different sources, it could be a known or an inferred date and denotes the last day at which the patient was still exposed to Drug.',
          $ref: '#/definitions/date',
        },
        drug_exposure_end_datetime: {
          description:
            'The end date and time for the current instance of Drug utilization. Depending on different sources, it could be a known or an inferred date and time and denotes the last day at which the patient was still exposed to Drug.',
          $ref: '#/definitions/datetime',
        },
        verbatim_end_date: {
          description: 'The known end date of a drug_exposure as provided by the source.',
          $ref: '#/definitions/date',
        },
        drug_type_concept_id: {
          description:
            "A foreign key to the predefined Concept identifier in the Standardized Vocabularies reflecting the type of Drug Exposure recorded. It indicates how the Drug Exposure was represented in the source data and belongs to the 'Drug Type' vocabulary.",
          type: 'number',
        },
        stop_reason: {
          description:
            'The reason the Drug was stopped. Reasons include regimen completed, changed, removed, etc.',
          type: 'string',
        },
        refills: {
          description:
            'The number of refills after the initial prescription. The initial prescription is not counted, values start with null.',
          type: 'number',
        },
        quantity: {
          description:
            'The quantity of drug as recorded in the original prescription or dispensing record.',
          type: 'number',
        },
        days_supply: {
          description:
            'The number of days of supply of the medication as prescribed. This reflects the intention of the provider for the length of exposure.',
          type: 'number',
        },
        sig: {
          description:
            "The directions ('signetur') on the Drug prescription as recorded in the original prescription (and printed on the container) or dispensing record.",
          type: 'string',
        },
        route_concept_id: {
          description:
            "A foreign key that refers to a Standard Concept identifier in the Standardized Vocabularies reflecting the route of administration and belonging to the 'Route' domain.",
          type: 'number',
        },
        lot_number: {
          description:
            'An identifier assigned to a particular quantity or lot of Drug product from the manufacturer.',
          type: 'string',
        },
        provider_id: {
          description:
            'A foreign key to the provider in the PROVIDER table who initiated (prescribed or administered) the Drug Exposure.',
          type: 'number',
        },
        visit_occurrence_id: {
          description:
            'A foreign key to the Visit in the VISIT_OCCURRENCE table during which the Drug Exposure was initiated.',
          type: 'number',
        },
        visit_detail_id: {
          description:
            'A foreign key to the Visit Detail in the VISIT_DETAIL table during which the Drug Exposure was initiated.',
          type: 'number',
        },
        drug_source_value: {
          description:
            'The source code for the Drug as it appears in the source data. This code is mapped to a Standard Drug concept in the Standardized Vocabularies and the original code is, stored here for reference.',
          type: 'string',
        },
        drug_source_concept_id: {
          description:
            'A foreign key to a Drug Concept that refers to the code used in the source.',
          type: 'number',
        },
        route_source_value: {
          description:
            'The information about the route of administration as detailed in the source.',
          type: 'string',
        },
        dose_unit_source_value: {
          description: 'The information about the dose unit as detailed in the source.',
          type: 'string',
        },
      },
      required: [
        'drug_exposure_id',
        'person_id',
        'drug_concept_id',
        'drug_exposure_start_datetime',
        'drug_exposure_end_datetime',
        'drug_type_concept_id',
        'route_concept_id',
        'drug_source_concept_id',
      ],
    },
    DRUG_STRENGTH: {
      type: 'object',
      description:
        'The DRUG_STRENGTH table contains structured content about the amount or concentration and associated units of a specific ingredient contained within a particular drug product. This table is supplemental information to support standardized analysis of drug utilization.',
      properties: {
        drug_concept_id: {
          description:
            'A foreign key to the Concept in the CONCEPT table representing the identifier for Branded Drug or Clinical Drug Concept.',
          type: 'number',
        },
        ingredient_concept_id: {
          description:
            'A foreign key to the Concept in the CONCEPT table, representing the identifier for drug Ingredient Concept contained within the drug product.',
          type: 'number',
        },
        amount_value: {
          description:
            'The numeric value associated with the amount of active ingredient contained within the product.',
          type: 'number',
        },
        amount_unit_concept_id: {
          description:
            'A foreign key to the Concept in the CONCEPT table representing the identifier for the Unit for the absolute amount of active ingredient.',
          type: 'number',
        },
        numerator_value: {
          description:
            'The numeric value associated with the concentration of the active ingredient contained in the product',
          type: 'number',
        },
        numerator_unit_concept_id: {
          description:
            'A foreign key to the Concept in the CONCEPT table representing the identifier for the numerator Unit for the concentration of active ingredient.',
          type: 'number',
        },
        denominator_value: {
          description:
            'The amount of total liquid (or other divisible product, such as ointment, gel, spray, etc.).',
          type: 'number',
        },
        denominator_unit_concept_id: {
          description:
            'A foreign key to the Concept in the CONCEPT table representing the identifier for the denominator Unit for the concentration of active ingredient.',
          type: 'number',
        },
        box_size: {
          description:
            'The number of units of Clinical of Branded Drug, or Quantified Clinical or Branded Drug contained in a box as dispensed to the patient',
          type: 'number',
        },
        valid_start_date: {
          description:
            'The date when the Concept was first recorded. The default value is 1-Jan-1970.',
          $ref: '#/definitions/date',
        },
        valid_end_date: {
          description:
            'The date when the concept became invalid because it was deleted or superseded (updated) by a new Concept. The default value is 31-Dec-2099.',
          $ref: '#/definitions/date',
        },
        invalid_reason: {
          description:
            "Reason the concept was invalidated. Possible values are 'D' (deleted), 'U' (replaced with an update) or NULL when valid_end_date has the default value.",
          type: 'string',
        },
      },
      required: ['drug_concept_id', 'ingredient_concept_id', 'valid_start_date', 'valid_end_date'],
    },
    FACT_RELATIONSHIP: {
      type: 'object',
      description:
        'The FACT_RELATIONSHIP table contains records about the relationships between facts stored as records in any table of the CDM. Relationships can be defined between facts from the same domain, or different domains. Examples of Fact Relationships include: Person relationships (parent-child), care site relationships (hierarchical organizational structure of facilities within a health system), indication relationship (between drug exposures and associated conditions), usage relationships (of devices during the course of an associated procedure), or facts derived from one another (measurements derived from an associated specimen).',
      properties: {
        domain_concept_id_1: {
          description:
            'The concept representing the domain of fact one, from which the corresponding table can be inferred.',
          type: 'number',
        },
        fact_id_1: {
          description:
            'The unique identifier in the table corresponding to the domain of fact one.',
          type: 'number',
        },
        domain_concept_id_2: {
          description:
            'The concept representing the domain of fact two, from which the corresponding table can be inferred.',
          type: 'number',
        },
        fact_id_2: {
          description:
            'The unique identifier in the table corresponding to the domain of fact two.',
          type: 'number',
        },
        relationship_concept_id: {
          description:
            'A foreign key to a Standard Concept ID of relationship in the Standardized Vocabularies.',
          type: 'number',
        },
      },
      required: [
        'domain_concept_id_1',
        'fact_id_1',
        'domain_concept_id_2',
        'fact_id_2',
        'relationship_concept_id',
      ],
    },
    LOCATION: {
      type: 'object',
      description:
        'The LOCATION table represents a generic way to capture physical location or address information of Persons and Care Sites.',
      properties: {
        location_id: {
          description: 'A unique identifier for each geographic location.',
          type: 'number',
        },
        address_1: {
          description:
            'The address field 1, typically used for the street address, as it appears in the source data.',
          type: 'string',
        },
        address_2: {
          description:
            'The address field 2, typically used for additional detail such as buildings, suites, floors, as it appears in the source data.',
          type: 'string',
        },
        city: {
          description: 'The city field as it appears in the source data.',
          type: 'string',
        },
        state: {
          description: 'The state field as it appears in the source data.',
          type: 'string',
        },
        zip: {
          description: 'The zip or postal code.',
          type: 'string',
        },
        county: {
          description: 'The county.',
          type: 'string',
        },
        country: {
          description: 'The country',
          type: 'string',
        },
        location_source_value: {
          description:
            'The verbatim information that is used to uniquely identify the location as it appears in the source data.',
          type: 'string',
        },
        latitude: {
          description: 'The geocoded latitude',
          type: 'number',
        },
        longitude: {
          description: 'The geocoded longitude',
          type: 'number',
        },
      },
      required: ['location_id'],
    },
    LOCATION_HISTORY: {
      type: 'object',
      description:
        'The LOCATION HISTORY table stores relationships between Persons or Care Sites and geographic locations over time.',
      properties: {
        location_id: {
          description: 'A foreign key to the location table.',
          type: 'number',
        },
        relationship_type_concept_id: {
          description: 'The type of relationship between location and entity.',
          type: 'string',
        },
        domain_id: {
          description:
            'The domain of the entity that is related to the location. Either PERSON, PROVIDER, or CARE_SITE.',
          type: 'string',
        },
        entity_id: {
          description:
            'The unique identifier for the entity. References either person_id, provider_id, or care_site_id, depending on domain_id.',
          type: 'number',
        },
        start_date: {
          description: 'The date the relationship started.',
          $ref: '#/definitions/date',
        },
        end_date: {
          description: 'The date the relationship ended.',
          $ref: '#/definitions/date',
        },
      },
      required: [
        'location_id',
        'relationship_type_concept_id',
        'domain_id',
        'entity_id',
        'start_date',
      ],
    },
    MEASUREMENT: {
      type: 'object',
      description:
        "The MEASUREMENT table contains records of Measurement, i.e. structured values (numerical or categorical) obtained through systematic and standardized examination or testing of a Person or Person's sample. The MEASUREMENT table contains both orders and results of such Measurements as laboratory tests, vital signs, quantitative findings from pathology reports, etc.",
      properties: {
        measurement_id: {
          description: 'A unique identifier for each Measurement.',
          type: 'number',
        },
        person_id: {
          description:
            'A foreign key identifier to the Person about whom the measurement was recorded. The demographic details of that Person are stored in the PERSON table.',
          type: 'number',
        },
        measurement_concept_id: {
          description:
            "A foreign key to the standard measurement concept identifier in the Standardized Vocabularies. These belong to the 'Measurement' domain, but could overlap with the 'Observation' domain (see #3 below).",
          type: 'number',
        },
        measurement_date: {
          description: 'The date of the Measurement.',
          $ref: '#/definitions/date',
        },
        measurement_datetime: {
          description:
            "The date and time of the Measurement. Some database systems don't have a datatype of time. To accommodate all temporal analyses, datatype datetime can be used (combining measurement_date and measurement_time forum discussion)",
          $ref: '#/definitions/datetime',
        },
        measurement_time: {
          description:
            'The time of the Measurement. This is present for backwards compatibility and will be deprecated in an upcoming version',
          type: 'string',
        },
        measurement_type_concept_id: {
          description:
            "A foreign key to the predefined Concept in the Standardized Vocabularies reflecting the provenance from where the Measurement record was recorded. These belong to the 'Meas Type' vocabulary",
          type: 'number',
        },
        operator_concept_id: {
          description:
            "A foreign key identifier to the predefined Concept in the Standardized Vocabularies reflecting the mathematical operator that is applied to the value_as_number. Operators are <, <=, =, >=, > and these concepts belong to the 'Meas Value Operator' domain.",
          type: 'number',
        },
        value_as_number: {
          description: 'A Measurement result where the result is expressed as a numeric value.',
          type: 'number',
        },
        value_as_concept_id: {
          description:
            "A foreign key to a Measurement result represented as a Concept from the Standardized Vocabularies (e.g., positive/negative, present/absent, low/high, etc.). These belong to the 'Meas Value' domain",
          type: 'number',
        },
        unit_concept_id: {
          description:
            "A foreign key to a Standard Concept ID of Measurement Units in the Standardized Vocabularies that belong to the 'Unit' domain.",
          type: 'number',
        },
        range_low: {
          description:
            'The lower limit of the normal range of the Measurement result. The lower range is assumed to be of the same unit of measure as the Measurement value.',
          type: 'number',
        },
        range_high: {
          description:
            'The upper limit of the normal range of the Measurement. The upper range is assumed to be of the same unit of measure as the Measurement value.',
          type: 'number',
        },
        provider_id: {
          description:
            'A foreign key to the provider in the PROVIDER table who was responsible for initiating or obtaining the measurement.',
          type: 'number',
        },
        visit_occurrence_id: {
          description:
            'A foreign key to the Visit in the VISIT_OCCURRENCE table during which the Measurement was recorded.',
          type: 'number',
        },
        visit_detail_id: {
          description:
            'A foreign key to the Visit Detail in the VISIT_DETAIL table during which the Measurement was recorded.',
          type: 'number',
        },
        measurement_source_value: {
          description:
            'The Measurement name as it appears in the source data. This code is mapped to a Standard Concept in the Standardized Vocabularies and the original code is stored here for reference.',
          type: 'string',
        },
        measurement_source_concept_id: {
          description:
            'A foreign key to a Concept in the Standard Vocabularies that refers to the code used in the source.',
          type: 'number',
        },
        unit_source_value: {
          description:
            'The source code for the unit as it appears in the source data. This code is mapped to a standard unit concept in the Standardized Vocabularies and the original code is stored here for reference.',
          type: 'string',
        },
        value_source_value: {
          description:
            'The source value associated with the content of the value_as_number or value_as_concept_id as stored in the source data.',
          type: 'string',
        },
      },
      required: [
        'measurement_id',
        'person_id',
        'measurement_concept_id',
        'measurement_datetime',
        'measurement_type_concept_id',
        'measurement_source_concept_id',
      ],
    },
    METADATA: {
      type: 'object',
      description:
        'The METADATA table contains metadata information about a dataset that has been transformed to the OMOP Common Data Model.',
      properties: {
        metadata_concept_id: {
          description:
            'A foreign key that refers to a Standard Metadata Concept identifier in the Standardized Vocabularies.',
          type: 'number',
        },
        metadata_type_concept_id: {
          description:
            'A foreign key that refers to a Standard Type Concept identifier in the Standardized Vocabularies.',
          type: 'number',
        },
        name: {
          description:
            'The name of the Concept stored in metadata_concept_id or a description of the data being stored.',
          type: 'string',
        },
        value_as_string: {
          description: 'The metadata value stored as a string.',
        },
        value_as_concept_id: {
          description: 'A foreign key to a metadata value stored as a Concept ID.',
          type: 'number',
        },
        'metadata date': {
          description: 'The date associated with the metadata',
          $ref: '#/definitions/date',
        },
        metadata_datetime: {
          description: 'The date and time associated with the metadata',
          $ref: '#/definitions/datetime',
        },
      },
      required: ['metadata_concept_id', 'metadata_type_concept_id', 'name'],
    },
    NOTE: {
      type: 'object',
      description:
        'The NOTE table captures unstructured information that was recorded by a provider about a patient in free text notes on a given date.',
      properties: {
        note_id: {
          description: 'A unique identifier for each note.',
          type: 'number',
        },
        person_id: {
          description:
            'A foreign key identifier to the Person about whom the Note was recorded. The demographic details of that Person are stored in the PERSON table.',
          type: 'number',
        },
        note_event_id: {
          description:
            'A foreign key identifier to the event (e.g. Measurement, Procedure, Visit, Drug Exposure, etc) record during which the note was recorded.',
          type: 'number',
        },
        note_event_field_concept_id: {
          description:
            'A foreign key to the predefined Concept in the Standardized Vocabularies reflecting the field to which the note_event_id is referring.',
          type: 'number',
        },
        note_date: {
          description: 'The date the note was recorded.',
          $ref: '#/definitions/date',
        },
        note_datetime: {
          description: 'The date and time the note was recorded.',
          $ref: '#/definitions/datetime',
        },
        note_type_concept_id: {
          description:
            "A foreign key to the predefined Concept in the Standardized Vocabularies reflecting the type, origin or provenance of the Note. These belong to the 'Note Type' vocabulary",
          type: 'number',
        },
        note_class_concept_id: {
          description:
            'A foreign key to the predefined Concept in the Standardized Vocabularies reflecting the HL7 LOINC Document Type Vocabulary classification of the note.',
          type: 'number',
        },
        note_title: {
          description: 'The title of the Note as it appears in the source.',
          type: 'string',
        },
        note_text: {
          description: 'The content of the Note.',
          type: 'string',
        },
        encoding_concept_id: {
          description:
            'A foreign key to the predefined Concept in the Standardized Vocabularies reflecting the note character encoding type',
          type: 'number',
        },
        language_concept_id: {
          description:
            'A foreign key to the predefined Concept in the Standardized Vocabularies reflecting the language of the note',
          type: 'number',
        },
        provider_id: {
          description: 'A foreign key to the Provider in the PROVIDER table who took the Note.',
          type: 'number',
        },
        visit_occurrence_id: {
          description:
            'A foreign key to the Visit in the VISIT_OCCURRENCE table when the Note was taken.',
          type: 'number',
        },
        visit_detail_id: {
          description:
            'A foreign key to the Visit in the VISIT_DETAIL table when the Note was taken.',
          type: 'number',
        },
        note_source_value: {
          description: 'The source value associated with the origin of the Note',
          type: 'string',
        },
      },
      required: [
        'note_id',
        'person_id',
        'note_datetime',
        'note_type_concept_id',
        'note_class_concept_id',
        'note_text',
        'encoding_concept_id',
        'language_concept_id',
      ],
    },
    NOTE_NLP: {
      type: 'object',
      description:
        'The NOTE_NLP table will encode all output of NLP on clinical notes. Each row represents a single extracted term from a note.',
      properties: {
        note_nlp_id: {
          description: 'A unique identifier for each term extracted from a note.',
          type: 'number',
        },
        note_id: {
          description: 'A foreign key to the Note table note the term was',
          type: 'number',
        },
        section_concept_id: {
          description:
            'A foreign key to the predefined Concept in the Standardized Vocabularies representing the section of the extracted term.',
          type: 'number',
        },
        snippet: {
          description: 'A small window of text surrounding the term.',
          type: 'string',
        },
        offset: {
          description: 'Character offset of the extracted term in the input note.',
          type: 'string',
        },
        lexical_variant: {
          description: 'Raw text extracted from the NLP tool.',
          type: 'string',
        },
        note_nlp_concept_id: {
          description:
            'A foreign key to the predefined Concept in the Standardized Vocabularies reflecting the normalized concept for the extracted term. Domain of the term is represented as part of the Concept table.',
          type: 'number',
        },
        note_nlp_source_concept_id: {
          description:
            'A foreign key to a Concept that refers to the code in the source vocabulary used by the NLP system',
          type: 'number',
        },
        nlp_system: {
          description:
            'Name and version of the NLP system that extracted the term.Useful for data provenance.',
          type: 'string',
        },
        nlp_date: {
          description: 'The date of the note processing.Useful for data provenance.',
          $ref: '#/definitions/date',
        },
        nlp_datetime: {
          description: 'The date and time of the note processing. Useful for data provenance.',
          $ref: '#/definitions/datetime',
        },
        term_exists: {
          description:
            'A summary modifier that signifies presence or absence of the term for a given patient. Useful for quick querying.',
          type: 'string',
        },
        term_temporal: {
          description:
            'An optional time modifier associated with the extracted term. (for now \u201cpast\u201d or \u201cpresent\u201d only). Standardize it later.',
          type: 'string',
        },
        term_modifiers: {
          description:
            'A compact description of all the modifiers of the specific term extracted by the NLP system. (e.g. \u201cson has rash\u201d ? \u201cnegated=no,subject=family, certainty=undef,conditional=false,general=false\u201d).',
          type: 'string',
        },
      },
      required: [
        'note_nlp_id',
        'note_id',
        'section_concept_id',
        'lexical_variant',
        'note_nlp_concept_id',
        'note_nlp_source_concept_id',
        'nlp_date',
      ],
    },
    OBSERVATION: {
      type: 'object',
      description:
        'The OBSERVATION table captures clinical facts about a Person obtained in the context of examination, questioning or a procedure. Any data that cannot be represented by any other domains, such as social and lifestyle facts, medical history, family history, etc. are recorded here.',
      properties: {
        observation_id: {
          description: 'A unique identifier for each observation.',
          type: 'number',
        },
        person_id: {
          description:
            'A foreign key identifier to the Person about whom the observation was recorded. The demographic details of that Person are stored in the PERSON table.',
          type: 'number',
        },
        observation_concept_id: {
          description:
            'A foreign key to the standard observation concept identifier in the Standardized Vocabularies.',
          type: 'number',
        },
        observation_date: {
          description: 'The date of the observation.',
          $ref: '#/definitions/date',
        },
        observation_datetime: {
          description: 'The date and time of the observation.',
          $ref: '#/definitions/datetime',
        },
        observation_type_concept_id: {
          description:
            'A foreign key to the predefined concept identifier in the Standardized Vocabularies reflecting the type of the observation.',
          type: 'number',
        },
        value_as_number: {
          description:
            'The observation result stored as a number. This is applicable to observations where the result is expressed as a numeric value.',
          type: 'number',
        },
        value_as_string: {
          description:
            'The observation result stored as a string. This is applicable to observations where the result is expressed as verbatim text.',
          type: 'string',
        },
        value_as_concept_id: {
          description:
            'A foreign key to an observation result stored as a Concept ID. This is applicable to observations where the result can be expressed as a Standard Concept from the Standardized Vocabularies (e.g., positive/negative, present/absent, low/high, etc.).',
          type: 'number',
        },
        qualifier_concept_id: {
          description:
            'A foreign key to a Standard Concept ID for a qualifier (e.g., severity of drug-drug interaction alert)',
          type: 'number',
        },
        unit_concept_id: {
          description:
            'A foreign key to a Standard Concept ID of measurement units in the Standardized Vocabularies.',
          type: 'number',
        },
        provider_id: {
          description:
            'A foreign key to the provider in the PROVIDER table who was responsible for making the observation.',
          type: 'number',
        },
        visit_occurrence_id: {
          description:
            'A foreign key to the visit in the VISIT_OCCURRENCE table during which the observation was recorded.',
          type: 'number',
        },
        visit_detail_id: {
          description:
            'A foreign key to the visit in the VISIT_DETAIL table during which the observation was recorded.',
          type: 'number',
        },
        observation_source_value: {
          description:
            'The observation code as it appears in the source data. This code is mapped to a Standard Concept in the Standardized Vocabularies and the original code is, stored here for reference.',
          type: 'string',
        },
        observation_source_concept_id: {
          description: 'A foreign key to a Concept that refers to the code used in the source.',
          type: 'number',
        },
        unit_source_value: {
          description:
            'The source code for the unit as it appears in the source data. This code is mapped to a standard unit concept in the Standardized Vocabularies and the original code is, stored here for reference.',
          type: 'string',
        },
        qualifier_source_value: {
          description:
            'The source value associated with a qualifier to characterize the observation',
          type: 'string',
        },
        observation_event_id: {
          description: 'A foreign key to an event table (e.g., PROCEDURE_OCCURRENCE_ID).',
          type: 'number',
        },
        obs_event_field_concept_id: {
          description:
            'A foreign key that refers to a Standard Concept identifier in the Standardized Vocabularies referring to the field represented in the OBSERVATION_EVENT_ID.',
          type: 'number',
        },
        value_as_datetime: {
          description:
            'The observation result stored as a datetime value. This is applicable to observations where the result is expressed as a point in time.',
          type: 'number',
        },
      },
      required: [
        'observation_id',
        'person_id',
        'observation_concept_id',
        'observation_datetime',
        'observation_type_concept_id',
        'observation_source_concept_id',
        'obs_event_field_concept_id',
      ],
    },
    OBSERVATION_PERIOD: {
      type: 'object',
      description:
        'The OBSERVATION_PERIOD table contains records which uniquely define the spans of time for which a Person is at-risk to have clinical events recorded within the source systems, even if no events in fact are recorded (healthy patient with no healthcare interactions).',
      properties: {
        observation_period_id: {
          description: 'A unique identifier for each observation period.',
          type: 'number',
        },
        person_id: {
          description:
            'A foreign key identifier to the person for whom the observation period is defined. The demographic details of that person are stored in the person table.',
          type: 'number',
        },
        observation_period_start_date: {
          description:
            'The start date of the observation period for which data are available from the data source.',
          $ref: '#/definitions/date',
        },
        observation_period_end_date: {
          description:
            'The end date of the observation period for which data are available from the data source.',
          $ref: '#/definitions/date',
        },
        period_type_concept_id: {
          description:
            "A foreign key identifier to the predefined concept in the Standardized Vocabularies reflecting the source of the observation period information, belonging to the 'Obs Period Type' vocabulary",
          type: 'number',
        },
      },
      required: [
        'observation_period_id',
        'person_id',
        'observation_period_start_date',
        'observation_period_end_date',
        'period_type_concept_id',
      ],
    },
    PAYER_PLAN_PERIOD: {
      type: 'object',
      description:
        'The PAYER_PLAN_PERIOD table captures details of the period of time that a Person is continuously enrolled under a specific health Plan benefit structure from a given Payer. Each Person receiving healthcare is typically covered by a health benefit plan, which pays for (fully or partially), or directly provides, the care. These benefit plans are provided by payers, such as health insurances or state or government agencies. In each plan the details of the health benefits are defined for the Person or her family, and the health benefit Plan might change over time typically with increasing utilization (reaching certain cost thresholds such as deductibles), plan availability and purchasing choices of the Person. The unique combinations of Payer organizations, health benefit Plans and time periods in which they are valid for a Person are recorded in this table.',
      properties: {
        payer_plan_period_id: {
          description:
            'A identifier for each unique combination of payer, plan, family code and time span.',
          type: 'number',
        },
        person_id: {
          description:
            'A foreign key identifier to the Person covered by the payer. The demographic details of that Person are stored in the PERSON table.',
          type: 'number',
        },
        contract_person_id: {
          description:
            'A foreign key identifier to the person_id in person table, for the person who is the primary subscriber/contract owner for the record in the payer_plan_period table. Maybe the same person or different person, depending on who is the primary subscriber/contract owner.',
          type: 'number',
        },
        payer_plan_period_start_date: {
          description: 'The start date of the payer plan period.',
          $ref: '#/definitions/date',
        },
        payer_plan_period_end_date: {
          description: 'The end date of the payer plan period.',
          $ref: '#/definitions/date',
        },
        payer_concept_id: {
          description:
            'A foreign key that refers to a standard Payer concept identifier in the Standarized Vocabularies',
          type: 'number',
        },
        payer_source_value: {
          description: 'The source code for the payer as it appears in the source data.',
          type: 'string',
        },
        payer_source_concept_id: {
          description:
            'A foreign key to a payer concept that refers to the code used in the source.',
          type: 'number',
        },
        plan_concept_id: {
          description:
            'A foreign key that refers to a standard plan concept identifier that represents the health benefit plan in the Standardized Vocabularies.',
          type: 'number',
        },
        plan_source_value: {
          description:
            "The source code for the Person's health benefit plan as it appears in the source data.",
          type: 'string',
        },
        plan_source_concept_id: {
          description:
            'A foreign key to a plan concept that refers to the plan code used in the source data.',
          type: 'number',
        },
        contract_concept_id: {
          description:
            'A foreign key to a standard concept representing the reason justifying the contract between person_id and contract_person_id.',
          type: 'number',
        },
        contract_source_value: {
          description:
            'The source code representing the reason justifying the contract. Usually it is family relationship like a spouse, domestic partner, child etc.',
          type: 'number',
        },
        contract_source_concept_id: {
          description:
            'A foreign key to a concept that refers to the code used in the source as the reason justifying the contract.',
          type: 'number',
        },
        sponsor_concept_id: {
          description:
            'A foreign key that refers to a concept identifier that represents the sponsor in the Standardized Vocabularies.',
          type: 'number',
        },
        sponsor_source_value: {
          description:
            "The source code for the Person's sponsor of the health plan as it appears in the source data.",
          type: 'string',
        },
        sponsor_source_concept_id: {
          description:
            'A foreign key to a sponsor concept that refers to the sponsor code used in the source data.',
          type: 'number',
        },
        family_source_value: {
          description: "The source code for the Person's family as it appears in the source data.",
          type: 'string',
        },
        stop_reason_concept_id: {
          description:
            'A foreign key that refers to a standard termination reason that represents the reason for the termination in the Standardized Vocabularies.',
          type: 'number',
        },
        stop_reason_source_value: {
          description: 'The reason for stop-coverage as it appears in the source data.',
          type: 'string',
        },
        stop_reason_source_concept_id: {
          description:
            'A foreign key to a stop-coverage concept that refers to the code used in the source.',
          type: 'number',
        },
      },
      required: [
        'payer_plan_period_id',
        'person_id',
        'payer_plan_period_start_date',
        'payer_plan_period_end_date',
        'payer_concept_id',
        'payer_source_concept_id',
        'plan_concept_id',
        'plan_source_concept_id',
        'contract_concept_id',
        'contract_source_concept_id',
        'sponsor_concept_id',
        'sponsor_source_concept_id',
        'stop_reason_concept_id',
        'stop_reason_source_concept_id',
      ],
    },
    PERSON: {
      type: 'object',
      description:
        'The Person Domain contains records that uniquely identify each patient in the source data who is time at-risk to have clinical observations recorded within the source systems.',
      properties: {
        person_id: {
          description: 'A unique identifier for each person.',
          type: 'number',
        },
        gender_concept_id: {
          description:
            'A foreign key that refers to an identifier in the CONCEPT table for the unique gender of the person.',
          type: 'number',
        },
        year_of_birth: {
          description:
            'The year of birth of the person. For data sources with date of birth, the year is extracted. For data sources where the year of birth is not available, the approximate year of birth is derived based on any age group categorization available.',
          type: 'number',
        },
        month_of_birth: {
          description:
            'The month of birth of the person. For data sources that provide the precise date of birth, the month is extracted and stored in this field.',
          type: 'number',
        },
        day_of_birth: {
          description:
            'The day of the month of birth of the person. For data sources that provide the precise date of birth, the day is extracted and stored in this field.',
          type: 'number',
        },
        birth_datetime: {
          description: 'The date and time of birth of the person.',
          $ref: '#/definitions/datetime',
        },
        death_datetime: {
          description: 'The date and time of death of the person.',
          $ref: '#/definitions/datetime',
        },
        race_concept_id: {
          description:
            "A foreign key that refers to an identifier in the CONCEPT table for the unique race of the person, belonging to the 'Race' vocabulary.",
          type: 'number',
        },
        ethnicity_concept_id: {
          description:
            "A foreign key that refers to the standard concept identifier in the Standardized Vocabularies for the ethnicity of the person, belonging to the 'Ethnicity' vocabulary.",
          type: 'number',
        },
        location_id: {
          description:
            'A foreign key to the place of residency for the person in the location table, where the detailed address information is stored.',
          type: 'number',
        },
        provider_id: {
          description:
            'A foreign key to the primary care provider the person is seeing in the provider table.',
          type: 'number',
        },
        care_site_id: {
          description:
            'A foreign key to the site of primary care in the care_site table, where the details of the care site are stored.',
          type: 'number',
        },
        person_source_value: {
          description:
            'An (encrypted) key derived from the person identifier in the source data. This is necessary when a use case requires a link back to the person data at the source dataset.',
          type: 'string',
        },
        gender_source_value: {
          description:
            'The source code for the gender of the person as it appears in the source data. The person\u2019s gender is mapped to a standard gender concept in the Standardized Vocabularies; the original value is stored here for reference.',
          type: 'string',
        },
        gender_source_concept_id: {
          description:
            'A foreign key to the gender concept that refers to the code used in the source.',
          type: 'number',
        },
        race_source_value: {
          description:
            'The source code for the race of the person as it appears in the source data. The person race is mapped to a standard race concept in the Standardized Vocabularies and the original value is stored here for reference.',
          type: 'string',
        },
        race_source_concept_id: {
          description:
            'A foreign key to the race concept that refers to the code used in the source.',
          type: 'number',
        },
        ethnicity_source_value: {
          description:
            'The source code for the ethnicity of the person as it appears in the source data. The person ethnicity is mapped to a standard ethnicity concept in the Standardized Vocabularies and the original code is, stored here for reference.',
          type: 'string',
        },
        ethnicity_source_concept_id: {
          description:
            'A foreign key to the ethnicity concept that refers to the code used in the source.',
          type: 'number',
        },
      },
      required: [
        'person_id',
        'gender_concept_id',
        'year_of_birth',
        'race_concept_id',
        'ethnicity_concept_id',
        'gender_source_concept_id',
        'race_source_concept_id',
        'ethnicity_source_concept_id',
      ],
    },
    PROCEDURE_OCCURRENCE: {
      type: 'object',
      description:
        'The PROCEDURE_OCCURRENCE table contains records of activities or processes ordered by, or carried out by, a healthcare provider on the patient to have a diagnostic or therapeutic purpose. Procedures are present in various data sources in different forms with varying levels of standardization. For example:',
      properties: {
        procedure_occurrence_id: {
          description: 'A system-generated unique identifier for each Procedure Occurrence.',
          type: 'number',
        },
        person_id: {
          description:
            'A foreign key identifier to the Person who is subjected to the Procedure. The demographic details of that Person are stored in the PERSON table.',
          type: 'number',
        },
        procedure_concept_id: {
          description:
            'A foreign key that refers to a standard procedure Concept identifier in the Standardized Vocabularies.',
          type: 'number',
        },
        procedure_date: {
          description: 'The date on which the Procedure was performed.',
          $ref: '#/definitions/date',
        },
        procedure_datetime: {
          description: 'The date and time on which the Procedure was performed.',
          $ref: '#/definitions/datetime',
        },
        procedure_type_concept_id: {
          description:
            "A foreign key to the predefined Concept identifier in the Standardized Vocabularies reflecting the type of source data from which the procedure record is derived, belonging to the 'Procedure Type' vocabulary.",
          type: 'number',
        },
        modifier_concept_id: {
          description:
            "A foreign key to a Standard Concept identifier for a modifier to the Procedure (e.g. bilateral). These concepts are typically distinguished by 'Modifier' concept classes (e.g., 'CPT4 Modifier' as part of the 'CPT4' vocabulary).",
          type: 'number',
        },
        quantity: {
          description: 'The quantity of procedures ordered or administered.',
          type: 'number',
        },
        provider_id: {
          description:
            'A foreign key to the provider in the PROVIDER table who was responsible for carrying out the procedure.',
          type: 'number',
        },
        visit_occurrence_id: {
          description:
            'A foreign key to the Visit in the VISIT_OCCURRENCE table during which the Procedure was carried out.',
          type: 'number',
        },
        visit_detail_id: {
          description:
            'A foreign key to the Visit Detail in the VISIT_DETAIL table during which the Procedure was carried out.',
          type: 'number',
        },
        procedure_source_value: {
          description:
            'The source code for the Procedure as it appears in the source data. This code is mapped to a standard procedure Concept in the Standardized Vocabularies and the original code is, stored here for reference. Procedure source codes are typically ICD-9-Proc, CPT-4, HCPCS or OPCS-4 codes.',
          type: 'string',
        },
        procedure_source_concept_id: {
          description:
            'A foreign key to a Procedure Concept that refers to the code used in the source.',
          type: 'number',
        },
        modifier_source_value: {
          description: 'The source code for the qualifier as it appears in the source data.',
          type: 'string',
        },
      },
      required: [
        'procedure_occurrence_id',
        'person_id',
        'procedure_concept_id',
        'procedure_datetime',
        'procedure_type_concept_id',
        'modifier_concept_id',
        'procedure_source_concept_id',
      ],
    },
    PROVIDER: {
      type: 'object',
      description:
        'The PROVIDER table contains a list of uniquely identified healthcare providers. These are individuals providing hands-on healthcare to patients, such as physicians, nurses, midwives, physical therapists etc.',
      properties: {
        provider_id: {
          description: 'A unique identifier for each Provider.',
          type: 'number',
        },
        provider_name: {
          description: 'A description of the Provider.',
          type: 'string',
        },
        npi: {
          description: 'The National Provider Identifier (NPI) of the provider.',
          type: 'string',
        },
        dea: {
          description: 'The Drug Enforcement Administration (DEA) number of the provider.',
          type: 'string',
        },
        specialty_concept_id: {
          description:
            'A foreign key to a Standard Specialty Concept ID in the Standardized Vocabularies.',
          type: 'number',
        },
        care_site_id: {
          description: 'A foreign key to the main Care Site where the provider is practicing.',
          type: 'number',
        },
        year_of_birth: {
          description: 'The year of birth of the Provider.',
          type: 'number',
        },
        gender_concept_id: {
          description: 'The gender of the Provider.',
          type: 'number',
        },
        provider_source_value: {
          description:
            'The identifier used for the Provider in the source data, stored here for reference.',
          type: 'string',
        },
        specialty_source_value: {
          description:
            'The source code for the Provider specialty as it appears in the source data, stored here for reference.',
          type: 'string',
        },
        specialty_source_concept_id: {
          description: 'A foreign key to a Concept that refers to the code used in the source.',
          type: 'number',
        },
        gender_source_value: {
          description:
            'The gender code for the Provider as it appears in the source data, stored here for reference.',
          type: 'string',
        },
        gender_source_concept_id: {
          description: 'A foreign key to a Concept that refers to the code used in the source.',
          type: 'number',
        },
      },
      required: [
        'provider_id',
        'specialty_concept_id',
        'gender_concept_id',
        'specialty_source_concept_id',
        'gender_source_concept_id',
      ],
    },
    RELATIONSHIP: {
      type: 'object',
      description:
        'The RELATIONSHIP table provides a reference list of all types of relationships that can be used to associate any two concepts in the CONCEPT_RELATIONSHP table.',
      properties: {
        relationship_id: {
          description: 'The type of relationship captured by the relationship record.',
          type: 'string',
        },
        relationship_name: {
          description: 'The text that describes the relationship type.',
          type: 'string',
        },
        is_hierarchical: {
          description:
            'Defines whether a relationship defines concepts into classes or hierarchies. Values are 1 for hierarchical relationship or 0 if not.',
          type: 'string',
        },
        defines_ancestry: {
          description:
            'Defines whether a hierarchical relationship contributes to the concept_ancestor table. These are subsets of the hierarchical relationships. Valid values are 1 or 0.',
          type: 'string',
        },
        reverse_relationship_id: {
          description:
            'The identifier for the relationship used to define the reverse relationship between two concepts.',
          type: 'string',
        },
        relationship_concept_id: {
          description:
            'A foreign key that refers to an identifier in the CONCEPT table for the unique relationship concept.',
          type: 'number',
        },
      },
      required: [
        'relationship_id',
        'relationship_name',
        'is_hierarchical',
        'defines_ancestry',
        'reverse_relationship_id',
        'relationship_concept_id',
      ],
    },
    SOURCE_TO_CONCEPT_MAP: {
      type: 'object',
      description:
        'The source to concept map table is a legacy data structure within the OMOP Common Data Model, recommended for use in ETL processes to maintain local source codes which are not available as Concepts in the Standardized Vocabularies, and to establish mappings for each source code into a Standard Concept as target_concept_ids that can be used to populate the Common Data Model tables. The SOURCE_TO_CONCEPT_MAP table is no longer populated with content within the Standardized Vocabularies published to the OMOP community.',
      properties: {
        source_code: {
          description: 'The source code being translated into a Standard Concept.',
          type: 'string',
        },
        source_concept_id: {
          description:
            'A foreign key to the Source Concept that is being translated into a Standard Concept.',
          type: 'number',
        },
        source_vocabulary_id: {
          description:
            'A foreign key to the VOCABULARY table defining the vocabulary of the source code that is being translated to a Standard Concept.',
          type: 'string',
        },
        source_code_description: {
          description:
            'An optional description for the source code. This is included as a convenience to compare the description of the source code to the name of the concept.',
          type: 'string',
        },
        target_concept_id: {
          description:
            'A foreign key to the target Concept to which the source code is being mapped.',
          type: 'number',
        },
        target_vocabulary_id: {
          description:
            'A foreign key to the VOCABULARY table defining the vocabulary of the target Concept.',
          type: 'string',
        },
        valid_start_date: {
          description: 'The date when the mapping instance was first recorded.',
          $ref: '#/definitions/date',
        },
        valid_end_date: {
          description:
            'The date when the mapping instance became invalid because it was deleted or superseded (updated) by a new relationship. Default value is 31-Dec-2099.',
          $ref: '#/definitions/date',
        },
        invalid_reason: {
          description:
            'Reason the mapping instance was invalidated. Possible values are D (deleted), U (replaced with an update) or NULL when valid_end_date has the default value.',
          type: 'string',
        },
      },
      required: [
        'source_code',
        'source_concept_id',
        'source_vocabulary_id',
        'target_concept_id',
        'target_vocabulary_id',
        'valid_start_date',
        'valid_end_date',
      ],
    },
    SPECIMEN: {
      type: 'object',
      description:
        'The specimen domain contains the records identifying biological samples from a person.',
      properties: {
        specimen_id: {
          description: 'A unique identifier for each specimen.',
          type: 'number',
        },
        person_id: {
          description: 'A foreign key identifier to the Person for whom the Specimen is recorded.',
          type: 'number',
        },
        specimen_concept_id: {
          description:
            'A foreign key referring to a Standard Concept identifier in the Standardized Vocabularies for the Specimen.',
          type: 'number',
        },
        specimen_type_concept_id: {
          description:
            'A foreign key referring to the Concept identifier in the Standardized Vocabularies reflecting the system of record from which the Specimen was represented in the source data.',
          type: 'number',
        },
        specimen_date: {
          description: 'The date the specimen was obtained from the Person.',
          $ref: '#/definitions/date',
        },
        specimen_datetime: {
          description:
            'The date and time on the date when the Specimen was obtained from the person.',
          $ref: '#/definitions/datetime',
        },
        quantity: {
          description:
            'The amount of specimen collection from the person during the sampling procedure.',
          type: 'number',
        },
        unit_concept_id: {
          description:
            'A foreign key to a Standard Concept identifier for the Unit associated with the numeric quantity of the Specimen collection.',
          type: 'number',
        },
        anatomic_site_concept_id: {
          description:
            'A foreign key to a Standard Concept identifier for the anatomic location of specimen collection.',
          type: 'number',
        },
        disease_status_concept_id: {
          description:
            'A foreign key to a Standard Concept identifier for the Disease Status of specimen collection.',
          type: 'number',
        },
        specimen_source_id: {
          description: 'The Specimen identifier as it appears in the source data.',
          type: 'string',
        },
        specimen_source_value: {
          description:
            'The Specimen value as it appears in the source data. This value is mapped to a Standard Concept in the Standardized Vocabularies and the original code is, stored here for reference.',
          type: 'string',
        },
        unit_source_value: {
          description: 'The information about the Unit as detailed in the source.',
          type: 'string',
        },
        anatomic_site_source_value: {
          description: 'The information about the anatomic site as detailed in the source.',
          type: 'string',
        },
        disease_status_source_value: {
          description: 'The information about the disease status as detailed in the source.',
          type: 'string',
        },
      },
      required: [
        'specimen_id',
        'person_id',
        'specimen_concept_id',
        'specimen_type_concept_id',
        'specimen_datetime',
        'anatomic_site_concept_id',
        'disease_status_concept_id',
      ],
    },
    SURVEY_CONDUCT: {
      type: 'object',
      description:
        "The SURVEY_CONDUCT table is used to store an instance of a completed survey or questionnaire. It captures details of the individual questionnaire such as who completed it, when it was completed and to which patient treatment or visit it relates to (if any). Each SURVEY has a SURVEY_CONCEPT_ID, a concept in the CONCEPT table identifying the questionnaire e.g. EQ5D, VR12, SF12. Each questionnaire should exist in the CONCEPT table. Each SURVEY can be optionally related to a specific patient visit in order to link it both to the visit during which it was completed and any subsequent visit where treatment was assigned based on the patient's responses.",
      properties: {
        survey_conduct_id: {
          description: 'Unique identifier for each completed survey.',
          type: 'number',
        },
        person_id: {
          description:
            'A foreign key identifier to the Person in the PERSON table about whom the survey was completed.',
          type: 'number',
        },
        survey_concept_id: {
          description:
            'A foreign key to the predefined Concept identifier in the Standardized Vocabularies reflecting the name and identity of the survey.',
          type: 'number',
        },
        survey_start_date: {
          description: 'Date on which the survey was started.',
          $ref: '#/definitions/date',
        },
        survey_start_datetime: {
          description: 'Date and time the survey was started.',
          $ref: '#/definitions/datetime',
        },
        survey_end_date: {
          description: 'Date on which the survey was completed.',
          $ref: '#/definitions/date',
        },
        survey_end_datetime: {
          description: 'Date and time the survey was completed.',
          $ref: '#/definitions/datetime',
        },
        provider_id: {
          description:
            'A foreign key to the provider in the provider table who was associated with the survey completion.',
        },
        assisted_concept_id: {
          description:
            'A foreign key to the predefined Concept identifier in the Standardized Vocabularies indicating whether the survey was completed with assistance.',
          type: 'number',
        },
        respondent_type_concept_id: {
          description:
            'A foreign key to the predefined Concept identifier in the Standardized Vocabularies reflecting the respondent type. Example: Research Associate, Patient.',
          type: 'number',
        },
        timing_concept_id: {
          description:
            'A foreign key to the predefined Concept identifier in the Standardized Vocabularies that refers to a certain timing. Example: 3 month follow-up, 6 month follow-up.',
          type: 'number',
        },
        collection_method_concept_id: {
          description:
            'A foreign key to the predefined Concept identifier in the Standardized Vocabularies reflecting the data collection method (e.g. Paper, Telephone, Electronic Questionnaire).',
          type: 'number',
        },
        assisted_source_value: {
          description:
            'Source value representing whether patient required assistance to complete the survey. Example: \u201cCompleted without assistance\u201d, \u201dCompleted with assistance\u201d.',
          type: 'string',
        },
        respondent_type_source_value: {
          description: 'Source code representing role of person who completed the survey.',
          type: 'string',
        },
        timing_source_value: {
          description:
            'Text string representing the timing of the survey. Example: Baseline, 6-month follow-up.',
          type: 'string',
        },
        collection_method_source_value: {
          description: 'The collection method as it appears in the source data.',
          type: 'string',
        },
        survey_source_value: {
          description: 'The survey name/title as it appears in the source data.',
          type: 'string',
        },
        survey_source_concept_id: {
          description:
            'A foreign key to a predefined Concept that refers to the code for the survey name/title used in the source.',
          type: 'number',
        },
        survey_source_identifier: {
          description: 'Unique identifier for each completed survey in source system.',
          type: 'string',
        },
        validated_survey_concept_id: {
          description:
            'A foreign key to the predefined Concept identifier in the Standardized Vocabularies reflecting the validation status of the survey.',
          type: 'number',
        },
        validated_survey_source_value: {
          description: 'Source value representing the validation status of the survey.',
          type: 'number',
        },
        survey_version_number: {
          description: 'Version number of the questionnaire or survey used.',
          type: 'string',
        },
        visit_occurrence_id: {
          description:
            'A foreign key to the VISIT_OCCURRENCE table during which the\u00a0survey was completed',
          type: 'number',
        },
        response_visit_occurrence_id: {
          description:
            'A foreign key to the visit in the VISIT_OCCURRENCE table during which treatment was carried out that relates to this survey.',
        },
      },
      required: [
        'survey_conduct_id',
        'person_id',
        'survey_concept_id',
        'survey_end_datetime',
        'assisted_concept_id',
        'respondent_type_concept_id',
        'timing_concept_id',
        'collection_method_concept_id',
        'survey_source_concept_id',
        'validated_survey_concept_id',
      ],
    },
    VISIT_DETAIL: {
      type: 'object',
      description:
        'The VISIT_DETAIL table is an optional table used to represents details of each record in the parent visit_occurrence table. For every record in visit_occurrence table there may be 0 or more records in the visit_detail table with a 1:n relationship where n may be 0. The visit_detail table is structurally very similar to visit_occurrence table and belongs to the similar domain as the visit.',
      properties: {
        visit_detail_id: {
          description:
            "A unique identifier for each Person's visit or encounter at a healthcare provider.",
          type: 'number',
        },
        person_id: {
          description:
            'A foreign key identifier to the Person for whom the visit is recorded. The demographic details of that Person are stored in the PERSON table.',
          type: 'number',
        },
        visit_detail_concept_id: {
          description:
            "A foreign key that refers to a visit Concept identifier in the Standardized Vocabularies belonging to the 'Visit' Vocabulary.",
          type: 'number',
        },
        visit_detail_start_date: {
          description: 'The start date of the visit.',
          $ref: '#/definitions/date',
        },
        visit_detail_start_datetime: {
          description: 'The date and time of the visit started.',
          $ref: '#/definitions/datetime',
        },
        visit_detail_end_date: {
          description:
            'The end date of the visit. If this is a one-day visit the end date should match the start date.',
          $ref: '#/definitions/date',
        },
        visit_detail_end_datetime: {
          description: 'The date and time of the visit end.',
          $ref: '#/definitions/datetime',
        },
        visit_detail_type_concept_id: {
          description:
            "A foreign key to the predefined Concept identifier in the Standardized Vocabularies reflecting the type of source data from which the visit record is derived belonging to the 'Visit Type' vocabulary.",
          type: 'number',
        },
        provider_id: {
          description:
            'A foreign key to the provider in the provider table who was associated with the visit.',
          type: 'number',
        },
        care_site_id: {
          description: 'A foreign key to the care site in the care site table that was visited.',
          type: 'number',
        },
        visit_detail_source_value: {
          description: 'The source code for the visit as it appears in the source data.',
        },
        visit_detail_source_concept_id: {
          description: 'A foreign key to a Concept that refers to the code used in the source.',
          type: 'number',
        },
        admitted_from_source_value: {
          description: 'The source code for the admitting source as it appears in the source data.',
          type: 'string',
        },
        admitted_from_concept_id: {
          description:
            "A foreign key to the predefined concept in the 'Place of Service' Vocabulary reflecting the admitting source for a visit.",
          type: 'number',
        },
        discharge_to_source_value: {
          description:
            'The source code for the discharge disposition as it appears in the source data.',
          type: 'string',
        },
        discharge_to_concept_id: {
          description:
            "A foreign key to the predefined concept in the 'Place of Service' Vocabulary reflecting the discharge disposition for a visit.",
          type: 'number',
        },
        preceding_visit_detail_id: {
          description:
            'A foreign key to the VISIT_DETAIL table of the visit immediately preceding this visit',
          type: 'number',
        },
        visit_detail_parent_id: {
          description:
            'A foreign key to the VISIT_OCCURRENCE table record to represent the parent Visit this Visit Detail belongs to.',
          type: 'number',
        },
        visit_occurrence_id: {
          description:
            'A foreign key that refers to the record in the VISIT_OCCURRENCE table. This is a required field, because for every visit_detail is a child of visit_occurrence and cannot exist without a corresponding parent record in visit_occurrence.',
          type: 'number',
        },
      },
      required: [
        'visit_detail_id',
        'person_id',
        'visit_detail_concept_id',
        'visit_detail_start_datetime',
        'visit_detail_end_datetime',
        'visit_detail_type_concept_id',
        'visit_detail_source_concept_id',
        'admitted_from_concept_id',
        'discharge_to_concept_id',
        'visit_occurrence_id',
      ],
    },
    VISIT_OCCURRENCE: {
      type: 'object',
      description:
        'The VISIT_OCCURRENCE table contains the spans of time a Person continuously receives medical services from one or more providers at a Care Site in a given setting within the health care system. Visits are classified into 4 settings: outpatient care, inpatient confinement, emergency room, and long-term care. Persons may transition between these settings over the course of an episode of care (for example, treatment of a disease onset).',
      properties: {
        visit_occurrence_id: {
          description:
            "A unique identifier for each Person's visit or encounter at a healthcare provider.",
          type: 'number',
        },
        person_id: {
          description:
            'A foreign key identifier to the Person for whom the visit is recorded. The demographic details of that Person are stored in the PERSON table.',
          type: 'number',
        },
        visit_concept_id: {
          description:
            "A foreign key that refers to a Concept identifier in the Standardized Vocabularies belonging to the 'Visit' Domain.",
          type: 'number',
        },
        visit_start_date: {
          description: 'The start date of the visit.',
          $ref: '#/definitions/date',
        },
        visit_start_datetime: {
          description: 'The date and time when the visit started.',
          $ref: '#/definitions/datetime',
        },
        visit_end_date: {
          description:
            'The end date of the visit. If this is a one-day visit the end date should match the start date.',
          $ref: '#/definitions/date',
        },
        visit_end_datetime: {
          description: 'The date and time when the visit ended.',
          $ref: '#/definitions/datetime',
        },
        visit_type_concept_id: {
          description:
            "A foreign key to the predefined Concept identifier in the Standardized Vocabularies reflecting the type of source data from which the visit record is derived from belonging to the 'Visit Type' vocabulary.",
          type: 'number',
        },
        provider_id: {
          description:
            'A foreign key to the provider in the provider table who was associated with the visit.',
          type: 'number',
        },
        care_site_id: {
          description: 'A foreign key to the care site in the care site table that was visited.',
          type: 'number',
        },
        visit_source_value: {
          description: 'The source code for the visit as it appears in the source data.',
          type: 'string',
        },
        visit_source_concept_id: {
          description: 'A foreign key to a Concept that refers to the code used in the source.',
          type: 'number',
        },
        admitted_from_concept_id: {
          description:
            'A foreign key to the predefined concept in the Visit Domain reflecting where the patient was admitted from.',
          type: 'number',
        },
        admitted_from_source_value: {
          description:
            'The source code for where the patient was admitted from as it appears in the source data.',
          type: 'string',
        },
        discharge_to_concept_id: {
          description:
            'A foreign key to the predefined Concept in the Visit Domain reflecting where the patient was discharged to (discharge disposition).',
          type: 'number',
        },
        discharge_to_source_value: {
          description:
            'The source code for the discharge disposition as it appears in the source data.',
          type: 'string',
        },
        preceding_visit_occurrence_id: {
          description:
            'A foreign key to the VISIT_OCCURRENCE table of the visit immediately preceding this visit',
          type: 'number',
        },
      },
      required: [
        'visit_occurrence_id',
        'person_id',
        'visit_concept_id',
        'visit_start_datetime',
        'visit_end_datetime',
        'visit_type_concept_id',
        'visit_source_concept_id',
        'admitted_from_concept_id',
        'discharge_to_concept_id',
      ],
    },
    VOCABULARY: {
      type: 'object',
      description:
        'The VOCABULARY table includes a list of the Vocabularies collected from various sources or created de novo by the OMOP community. This reference table is populated with a single record for each Vocabulary source and includes a descriptive name and other associated attributes for the Vocabulary.',
      properties: {
        vocabulary_id: {
          description: 'A unique identifier for each Vocabulary, such as ICD9CM, SNOMED, Visit.',
          type: 'string',
        },
        vocabulary_name: {
          description:
            'The name describing the vocabulary, for example "International Classification of Diseases, Ninth Revision, Clinical Modification, Volume 1 and 2 (NCHS)" etc.',
          type: 'string',
        },
        vocabulary_reference: {
          description:
            'External reference to documentation or available download of the about the vocabulary.',
          type: 'string',
        },
        vocabulary_version: {
          description: 'Version of the Vocabulary as indicated in the source.',
          type: 'string',
        },
        vocabulary_concept_id: {
          description:
            'A foreign key that refers to a standard concept identifier in the CONCEPT table for the Vocabulary the VOCABULARY record belongs to.',
          type: 'number',
        },
      },
      required: [
        'vocabulary_id',
        'vocabulary_name',
        'vocabulary_reference',
        'vocabulary_concept_id',
      ],
    },
  },
};
