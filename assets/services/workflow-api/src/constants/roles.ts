export enum UserType {
  SUPERADMIN = 'SUPERADMIN',
  ADMIN = 'ADMIN',
  ISSUER = 'ISSUER',
  UNDERWRITER = 'UNDERWRITER',
  BROKER = 'BROKER',
  AGENT = 'AGENT',
  INVESTOR = 'INVESTOR',
  VEHICLE = 'VEHICLE',
  NOTARY = 'NOTARY',
  VERIFIER = 'VERIFIER',
  NAV_MANAGER = 'NAV_MANAGER',
}

export const ALL_ROLES = [
  UserType.SUPERADMIN,
  UserType.ADMIN,
  UserType.ISSUER,
  UserType.UNDERWRITER,
  UserType.BROKER,
  UserType.AGENT,
  UserType.INVESTOR,
  UserType.VEHICLE,
  UserType.NOTARY,
  UserType.VERIFIER,
  UserType.NAV_MANAGER,
]