// SHALL BE THE SAME ENUM AS IN ASSETS-API
export enum ClientCategory {
  ELIGIBLE_COUNTER_PARTIES = 'ELIGIBLE_COUNTER_PARTIES',
  PROFESSIONAL_CLIENTS = 'PROFESSIONAL_CLIENTS',
  RETAIL_CUSTOMERS = 'RETAIL_CUSTOMERS',
}

// SHALL BE THE SAME ENUM AS IN ASSETS-API
export enum RiskProfile {
  CONSERVATIVE = 'CONSERVATIVE',
  MODERATE = 'MODERATE',
  BALANCED = 'BALANCED',
  DYNAMIC = 'DYNAMIC',
  AGGRESSIVE = 'AGGRESSIVE',
}

// SHALL BE THE SAME ENUM AS IN ASSETS-API
export enum ReviewStatus {
  NOT_SHARED = 'NOT_SHARED',
  SUBMITTED = 'SUBMITTED',
  IN_REVIEW = 'IN_REVIEW',
  VALIDATED = 'VALIDATED',
  REJECTED = 'REJECTED',
}

// SHALL BE THE SAME ENUM AS IN ASSETS-API
export enum ElementType {
  STRING = 'string',
  NUMBER = 'number',
  CHECK = 'check',
  RADIO = 'radio',
  DOCUMENT = 'document',
  MULTISTRING = 'multistring',
  DATE = 'date',
  TITLE = 'title',
}

// SHALL BE THE SAME ENUM AS IN ASSETS-API
export enum ElementStatus {
  MANDATORY = 'mandatory',
  OPTIONAL = 'optional',
  CONDITIONAL = 'conditional',
}

// SHALL BE THE SAME ENUM AS IN ASSETS-API
export enum KycGranularity {
  TEMPLATE_ONLY = 'TEMPLATE_ONLY',
  ELEMENT_ONLY = 'ELEMENT_ONLY',
  TEMPLATE_OR_ELEMENT = 'TEMPLATE_OR_ELEMENT',
  TEMPLATE_AND_ELEMENT = 'TEMPLATE_AND_ELEMENT',
}

// SHALL BE THE SAME ENUM AS IN ASSETS-API
export enum ReviewScope {
  TEMPLATE = 'TEMPLATE',
  SECTION = 'SECTION',
  ELEMENT_INSTANCE = 'ELEMENT_INSTANCE',
}

// SHALL BE THE SAME ENUM AS IN ASSETS-API
export enum EntityType {
  TOKEN = 'TOKEN',
  ASSET_CLASS = 'ASSET_CLASS',
  ISSUER = 'ISSUER',
  ADMIN = 'ADMIN',
  PROJECT = 'PROJECT',
  PLATFORM = 'PLATFORM',
}