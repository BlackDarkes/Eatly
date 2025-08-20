// auth/types/jwt-payload.interface.ts
export interface JwtPayload {
  email: string;
  sub: string;
  iat?: number;
  exp?: number;
}