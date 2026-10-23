import { createFileRoute } from "@tanstack/react-router";
import { AppointmentsPage } from "@/components/appointments-page";
import { pageMeta } from "@/lib/page-meta";
export const Route = createFileRoute("/appointment")({
  head: () =>
    pageMeta(
      "Appointments",
      "View your MyPatientHUB appointment calendar, visits, and treatment summaries.",
    ),
  component: AppointmentsPage,
});
