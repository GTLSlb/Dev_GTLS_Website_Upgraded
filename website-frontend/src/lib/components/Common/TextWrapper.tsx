import React from "react";
import { typography } from "@/lib/typography";

type FontFamilies = keyof typeof typography;
type StyleTypes =
  | keyof (typeof typography)["funnel"]["styles"]
  | keyof (typeof typography)["dmSans"]["styles"];

interface TextWrapperProps {
  text: string;
  fontFamily: FontFamilies;
  styleType: StyleTypes;
  className?: string;
  html?: boolean; // 👈 NEW — if true, text is rendered as HTML
}

const TextWrapper: React.FC<TextWrapperProps> = ({
  text,
  fontFamily,
  styleType,
  className,
  html = false,
}) => {
  const fontCategory = typography[fontFamily];
  const style =
    fontCategory?.styles?.[styleType as keyof typeof fontCategory.styles];

  if (!fontCategory || !style) {
    console.error(
      `Invalid font family or styleType: ${fontFamily} - ${styleType}`
    );
    return <span className={className}>{text}</span>;
  }

  const combinedStyles: React.CSSProperties = {
    fontFamily: fontCategory.fontFamily,
    ...style,
  };

  // 🔥 If HTML mode is on, use dangerouslySetInnerHTML
  if (html) {
    const htmlText = text
      .replace(/\\n/g, "<br />") // handle escaped \n (from Strapi)
      .replace(/\n/g, "<br />");
    return (
      <span
        className={className}
        style={combinedStyles}
        dangerouslySetInnerHTML={{ __html: htmlText }}
      />
    );
  }

  // Default: render as plain text
  return (
    <span className={className} style={combinedStyles}>
      {text}
    </span>
  );
};

export default TextWrapper;
