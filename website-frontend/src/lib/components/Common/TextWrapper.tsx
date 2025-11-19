import React from 'react';
import { typography } from '@/lib/typography';


// Define the typography systems' font families and style types for type safety.
type FontFamilies = keyof typeof typography;
type StyleTypes = keyof typeof typography['funnel']['styles'] | keyof typeof typography['dmSans']['styles'];

interface TextWrapperProps {
  text: string;
  fontFamily: FontFamilies;
  styleType: StyleTypes;
  className?: string; // Make the className optional
}

const TextWrapper: React.FC<TextWrapperProps> = ({ text, fontFamily, styleType, className }) => {
  const fontCategory = typography[fontFamily];

  // Safely look up the style from the typography object.
  const style = fontCategory?.styles?.[styleType as keyof typeof fontCategory.styles];

  if (!fontCategory || !style) {
    console.error(`Invalid font family or styleType: ${fontFamily} - ${styleType}`);
    // Provide a basic fallback style to prevent a crash.
    return <span className={className}>{text}</span>;
  }
  
  const combinedStyles: React.CSSProperties = {
    fontFamily: fontCategory.fontFamily,
    ...style,
  };

  return (
    // Use `clsx` to merge the provided className with the internal font styles.
    <span className={className} style={combinedStyles}>
      {text}
    </span>
  );
};

export default TextWrapper;
