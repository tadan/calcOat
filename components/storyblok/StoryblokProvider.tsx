"use client";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { storyblokConfig } from "@/lib/storyblok/config";
import { storyblokComponents } from "@/lib/storyblok/components";

storyblokInit({
  accessToken: storyblokConfig.accessToken,
  use: [apiPlugin],
  components: storyblokComponents,
  apiOptions: {
    region: "us",
  },
});

export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
