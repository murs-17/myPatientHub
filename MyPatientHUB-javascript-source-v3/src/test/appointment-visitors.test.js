import { describe, expect, it } from "vitest";
import { appointmentVisitors } from "@/lib/appointment-visitors";
describe("Shared procedures and treatments visitor counts", () => {
  it.each([
    ["April", 50],
    ["May", 45],
    ["June", 60],
    ["July", 60],
    ["August", 80],
    ["September", 65],
    ["October", 90],
    ["November", 80],
    ["December", 100],
  ])("%s has %s visitors", (month, visitors) => {
    expect(appointmentVisitors.find((row) => row.fullMonth === month)?.visitors).toBe(visitors);
  });
});
