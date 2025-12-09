/**
 * Storyblok configuration
 */

if (!process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN) {
  throw new Error("NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN is not set");
}

export const storyblokConfig = {
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  version: (process.env.NODE_ENV === "production" ? "published" : "draft") as
    | "draft"
    | "published",
  cache: {
    clear: "auto",
    type: "memory",
  },
  use: [],
};
