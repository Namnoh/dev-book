import { defineCollection, z } from "astro:content";

const books = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        author: z.string(),
        img: z.string(),
        genre: z.string(),
        description: z.string(),
        buy: z.object({
            spain: z.string(),
            usa: z.string()
        })
    })
});

export const collections = { books:books };