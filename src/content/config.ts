import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.literal("Roushou"),
    date: z.date(),
    draft: z.boolean(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  posts,
};
