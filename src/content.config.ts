import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Long-form guides live in src/content/guides/*.md.
// `draft: true` keeps a guide off the live site until it has been reviewed.
const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updated: z.coerce.date(),
    draft: z.boolean().default(true),
    // Card and banner image (file name in public/images, without extension).
    image: z.string().optional(),
  }),
});

// Spanish translations. `en` is the id of the English guide it translates.
const guidesEs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides-es' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updated: z.coerce.date(),
    draft: z.boolean().default(true),
    en: z.string(),
  }),
});

export const collections = { guides, guidesEs };
