export type LinkRole = "subject" | "object" | "describes" | "complement" | "same";

export type SentenceLink = {
  role: LinkRole;
  from: string;
  to?: string;
  judgment: "obvious" | "unsure";
  why?: string;
  note?: string;
};

const ROLES = new Set<LinkRole>(["subject", "object", "describes", "complement", "same"]);

export function parseLinkNote(markdown: string): SentenceLink[] {
  const links: SentenceLink[] = [];
  for (const section of markdown.split(/\n## /).slice(1)) {
    const [heading, ...rest] = section.split("\n");
    const role = heading.trim() as LinkRole;
    if (!ROLES.has(role)) continue;
    const data: Record<string, string> = {};
    for (const line of rest) {
      const trimmed = line.trim();
      const splitAt = trimmed.indexOf(":");
      if (splitAt === -1) continue;
      data[trimmed.slice(0, splitAt).trim()] = trimmed.slice(splitAt + 1).trim();
    }
    if (!data.from) continue;
    links.push({
      role,
      from: data.from,
      to: data.to || undefined,
      judgment: data.judgment === "unsure" ? "unsure" : "obvious",
      why: data.why || undefined,
      note: data.note || undefined,
    });
  }
  return links;
}
