// lib/types/strapi.ts (or media.ts)

/**
 * Defines the format for smaller, processed versions of the image.
 */
export type StrapiImageFormat = {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: string | null;
    size: number; // in KB
    width: number;
    height: number;
    sizeInBytes: number;
}

/**
 * Defines the main structure for a single file/image object returned by Strapi's Media Library.
 */
export type StrapiMediaFile = {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    // The 'formats' object contains responsive versions (small, thumbnail, etc.)
    formats: {
        small?: StrapiImageFormat;
        thumbnail?: StrapiImageFormat;
        medium?: StrapiImageFormat;
        large?: StrapiImageFormat;
        // Add other custom formats if defined in your Strapi settings
    };
    hash: string;
    ext: string;
    mime: string;
    size: number; // in KB
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any | null; // Use `any` or a specific type if known
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

/**
 * A common helper type for populated relations where the data is nested under 'data'.
 * If the image field is non-repeatable, it follows this structure.
 */
export interface StrapiImageResponse {
    data: {
        id: number;
        attributes: StrapiMediaFile;
    } | null;
}