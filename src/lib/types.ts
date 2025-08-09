
export type Media = { type: "image"|"video"; url: string; poster?: string; alt?: string };
export type Experience = { id: string; title: string; summary: string; tags: string[]; price?: string; media: Media };
export type CategorySlug = "spiritual"|"healing"|"sexual"|"psychedelic";
export type Category = { slug: CategorySlug; name: string; hero: Media; experiences: Experience[] };
