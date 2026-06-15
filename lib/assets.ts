const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const BUCKET = process.env.NEXT_PUBLIC_ASSETS_BUCKET ?? "landing-page";

/** Build a public Supabase Storage URL from a bucket-relative path. */
export function assetUrl(path: string): string {
  const normalized = path.replace(/^\/+/, "");
  if (!SUPABASE_URL) {
    return `/${normalized}`;
  }
  return `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${normalized}`;
}

/** Logical asset keys → bucket paths. */
export const assetPaths = {
  images: {
    hero: "images/hero-img.png",
    breadRolls: "images/golden-bread-rolls.png",
    mushrooms: "images/mushrooms.png",
    mapEmbed: "images/map-embed.png",
  },
  illustrations: {
    backgroundPattern: "illustrations/background-pattern.png",
    catWithWine: "illustrations/cat-with-wine.png",
    handWithFork: "illustrations/hand-with-fork.png",
    logo: "illustrations/logo.png",
    wineInGlass: "illustrations/wine-in-glass.png",
  },
  videos: {
    heroPlaceholder: "videos/hero-placeholder.mp4",
  },
} as const;

export const assets = {
  images: Object.fromEntries(
    Object.entries(assetPaths.images).map(([key, path]) => [key, assetUrl(path)]),
  ) as { [K in keyof typeof assetPaths.images]: string },
  illustrations: Object.fromEntries(
    Object.entries(assetPaths.illustrations).map(([key, path]) => [key, assetUrl(path)]),
  ) as { [K in keyof typeof assetPaths.illustrations]: string },
  videos: Object.fromEntries(
    Object.entries(assetPaths.videos).map(([key, path]) => [key, assetUrl(path)]),
  ) as { [K in keyof typeof assetPaths.videos]: string },
};
