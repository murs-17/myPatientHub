import { createFileRoute } from "@tanstack/react-router";
import { MarketplacePage } from "@/components/marketplace-page";
import { pageMeta } from "@/lib/page-meta";
export const Route = createFileRoute("/marketplace")({
  head: () =>
    pageMeta(
      "Find Marketplace",
      "Find healthy diet offers and compare marketplace providers with MyPatientHUB.",
    ),
  component: MarketplacePage,
});
