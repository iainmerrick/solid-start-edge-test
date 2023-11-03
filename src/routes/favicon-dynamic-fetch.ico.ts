import { APIEvent } from "solid-start";

export function GET(event: APIEvent): Promise<Response> {
  return event.fetch("/favicon-static-fetch.ico", {});
}
