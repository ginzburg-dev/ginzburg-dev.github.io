import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

const status = z.enum([
  "production",
  "released",
  "research",
  "development",
  "archived",
]);

const area = z.enum([
  "Graphics & GPU Engineering",
  "Machine Learning & Inference",
  "Production Software & Backend",
]);

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.mdx" }),
  schema: z.object({
    title: z.string(),
    /** One sentence: what it is and what it does. */
    summary: z.string(),
    description: z.string(),
    role: z.string(),
    years: z.string().optional(),
    status,
    areas: z.array(area).nonempty(),
    stack: z.array(z.string()),
    /** Omitted while a repository is not public. */
    repo: z.string().url().optional(),
    video: z.string().url().optional(),
    /** Featured on the home page under its first area. */
    featured: z.boolean().default(false),
    order: z.number().default(100),
  }),
});

export const collections = { projects };
