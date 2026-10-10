import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/data/site";

// The freelance site lives on its own domain; keep old /freelance links working.
export const Route = createFileRoute("/freelance")({
  server: {
    handlers: {
      GET: () => new Response(null, { status: 301, headers: { Location: site.freelanceUrl } }),
    },
  },
});
