const httpErrorMap: Record<string, number> = {
  SUCCESS: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHENTICATED: 401,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INVALID_VALUE: 422,
};

export default function httpMap(code: string): number {
  return httpErrorMap[code] ?? 500;
}