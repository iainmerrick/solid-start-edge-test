const env = {
  SOLID_ENV_TEST: process.env.SOLID_ENV_TEST,
};

export function GET(): Response {
  return Response.json(env);
}
