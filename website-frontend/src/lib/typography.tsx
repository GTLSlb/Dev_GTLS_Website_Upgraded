/**
 * Defines the structure for a single font style.
 * The `lineHeight` is optional, as some styles might not have a specific value.
 */
interface FontStyle {
  fontSize: string;
  fontWeight: string | number;
  lineHeight?: string | number; // Optional property
}

/**
 * Defines the structure for a font category.
 */
interface FontCategory {
  fontFamily: string;
  styles: Record<string, FontStyle>;
}

/**
 * Defines the overall structure of the typography system.
 */
export type TypographySystem = Record<string, FontCategory>;

/**
 * A centralized object for typography styles based on your design system.
 * It's typed to provide strong type safety and autocompletion.
 */
export const typography: TypographySystem = {
  funnel: {
    fontFamily: "'Funnel Display', sans-serif",
    styles: {
      largeTitle1: {
        fontSize: '72px',
        fontWeight: 'bold',
        lineHeight: '72px',
      },
      largeTitle2: {
        fontSize: '64px',
        fontWeight: 'bold',
        lineHeight: '72px',
      },
      largeTitle3: {
        fontSize: '48px',
        fontWeight: 'bold',
        lineHeight: '56px',
      },
      title1: {
        fontSize: '40px',
        fontWeight: 'bold',
        lineHeight: '48px',
      },
      title2: {
        fontSize: '32px',
        fontWeight: 'bold',
        lineHeight: '40px',
      },
      title3: {
        fontSize: '24px',
        fontWeight: 'bold',
        lineHeight: '32px',
      },
      title4: {
        fontSize: '20px',
        fontWeight: 'bold',
        lineHeight: '24px',
      },
    },
  },
  dmSans: {
    fontFamily: "'DM Sans', sans-serif",
    styles: {
      title2: {
        fontSize: '32px',
        fontWeight: 'bold',
        lineHeight: 'auto',
      },
      title2Reg: {
        fontSize: '32px',
        fontWeight: 'normal',
        lineHeight: 'auto',
      },
      title3: {
        fontSize: '24px',
        fontWeight: 'bold',
        lineHeight: 'auto',
      },
      title3Reg: {
        fontSize: '24px',
        fontWeight: 'normal',
        lineHeight: 'auto',
      },
      title4: {
        fontSize: '20px',
        fontWeight: 'bold',
        lineHeight: 'auto',
      },
      title4Reg: {
        fontSize: '20px',
        fontWeight: 'normal',
        lineHeight: 'auto',
      },
      subtitle: {
        fontSize: '16px',
        fontWeight: 'bold',
        lineHeight: 'auto',
      },
      body: {
        fontSize: '16px',
        fontWeight: 'normal',
        lineHeight: '24px',
      },
      link: {
        fontSize: '16px',
        fontWeight: 'bold',
        lineHeight: 'auto',
      },
      subtitleSmall: {
        fontSize: '14px',
        fontWeight: 'bold',
        lineHeight: 'auto',
      },
      bodySmall: {
        fontSize: '14px',
        fontWeight: 'normal',
        lineHeight: 'auto',
      },
      linkSmall: {
        fontSize: '14px',
        fontWeight: 'bold',
        lineHeight: 'auto',
      },
    },
  },
};
