import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";
import type { PageStoryblok } from "@/types/storyblok";

export interface PageProps {
  blok: PageStoryblok;
}

export default function Page({ blok }: PageProps) {
  return (
    <div {...storyblokEditable(blok)}>
      {blok.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
}
