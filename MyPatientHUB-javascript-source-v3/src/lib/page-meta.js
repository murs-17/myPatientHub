export function pageMeta(title, description) {
  return {
    meta: [
      { title: `${title} | MyPatientHUB` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | MyPatientHUB` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
