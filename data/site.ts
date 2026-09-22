// Set NEXT_PUBLIC_SITE_URL to your custom domain before building for another host.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://zapped-varchasv.github.io/varchasvgupta.github.io";

// Next Link handles this automatically; plain anchors and images need it too.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export function withBasePath(path: string): string {
  if (!basePath || !path.startsWith("/") || path.startsWith("//") ||
      path === basePath || path.startsWith(basePath + "/")) return path;
  return basePath + path;
}
