"use client";

import DOMPurify from "dompurify";

import { typography } from "@/lib/typography";

type FontFamilies = keyof typeof typography;
type StyleTypes =
  | keyof (typeof typography)["funnel"]["styles"]
  | keyof (typeof typography)["dmSans"]["styles"];

type WrapperProps = {
  content: string;
  fontFamily: FontFamilies;
  styleType: StyleTypes;
  className?: string;
};
export default function DomPurifyWrapper({
  content,
  fontFamily,
  styleType,
  className,
}: WrapperProps) {
  const sanitizedHTML = DOMPurify.sanitize(content);

  const fontCategory = typography[fontFamily];
  const style =
    fontCategory?.styles?.[styleType as keyof typeof fontCategory.styles];
  const combinedStyles: React.CSSProperties = {
    fontFamily: fontCategory.fontFamily,
    ...style,
  };

  return (
    <div
      className={className}
      style={combinedStyles}
      dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
    />
  );
}
