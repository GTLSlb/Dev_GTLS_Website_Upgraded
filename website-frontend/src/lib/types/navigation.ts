export type NavLink = {
  label: string;
  href?: string;
  children?: NavLink[];
};

export type NavigationConfig = {
  logo: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  links: NavLink[];
};

export type MenuItem = {
  label: string;
  link: string;
};

export type MenuSection = {
  title: string;
  items: MenuItem[];
};
