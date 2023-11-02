export function GET(): Response {
  return Response.json({
    SOLID_ENV_TEST: process.env.SOLID_ENV_TEST,
  });
}
