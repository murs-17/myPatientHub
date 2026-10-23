import { createFileRoute, redirect } from "@tanstack/react-router";
import { pageMeta } from "@/lib/page-meta";
export const Route = createFileRoute("/")({
  head: () => pageMeta("MyPatientHUB", "Your patient appointments and healthy diet marketplace."),
  beforeLoad: () => {
    throw redirect({ to: "/appointment" });
  },
});
