import { redirect } from "solid-start";

export function GET(): Response {
  return redirect("favicon.ico");
}
