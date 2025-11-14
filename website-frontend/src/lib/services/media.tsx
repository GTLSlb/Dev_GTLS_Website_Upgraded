export function StrapiLink (url: string): string {
  if (!url) return "";
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "";
  return `${baseUrl}${url}`;
}