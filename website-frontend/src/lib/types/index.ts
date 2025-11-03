import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import * as LucideIcons from "lucide-react";

export interface GridCardProps {
  id: number;
  title: string;
  icon: string; // Made optional in case some cards don't have an icon
  description: string;
  content: string;
  footer: string;
}

export interface CenterTitleProps {
  title: string;
  className?: string;
  subtitle?: string;
  description?: string; // The `?` makes this property optional
  button?: React.ReactNode; // `React.ReactNode` is a great type for optional elements like a button
  dark?: boolean; // Optional prop to switch to dark mode styles
  buttonText?: string;
  titleColor?: string;
  onButtonClick?: () => void;
  buttonType?: "button" | "submit" | "reset";
  placement?: "left" | "center" | "right"; // new prop
  buttonVariant?:
    | "outline"
    | "link"
    | "default"
    | "destructive"
    | "secondary"
    | "ghost"
    | null
    | undefined; // new prop
  listItems?: { icon?: React.ReactNode; title: string }[];
}

export interface MenuItem {
  label: string;
  link: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export interface Location {
  city: string;
  street: string;
  suburb: string;
  state: string;
  postalCode: string;
}

export interface WhyGtlsItem {
  title: string;
  picture: string;
}

export interface UnevenGridProps {
  items: WhyGtlsItem[];
}

export interface IconListItem {
  icon: React.ReactNode; // can be any JSX element
  description: string;
}

export interface IconListProps {
  items: IconListItem[];
}

export interface CustomerHubCardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  list?: IconListItem[]; // optional array for IconList
  iconColor?: string; // arrow icon color
  children?: React.ReactNode; // optional additional content
}

export interface NewsCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

export interface ProfileCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

interface NewsItem {
  title: string;
  description: string;
  imageSrc: string;
}

export interface ProfileItem {
  title: string;
  description: string;
  imageSrc: string;
}

export interface SliderItem {
  date: string;
  title: string;
  description: string;
}

export interface NewsSliderProps {
  news: NewsItem[];
}
export interface ProfileSliderProps {
  items: ProfileItem[];
}

export interface SliderProps {
  items: SliderItem[];
}

export interface FloatingBannerProps {
  iconSrc: string; // Path to the icon (e.g. "/svgs/distribution.svg")
  text: string; // The text you want to show
  className?: string; // Optional additional classes for customization
}

export interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  imageSrc?: string;
  className?: string;
  cornerText?: string;
  contain?: boolean;
  link?: string;
  color?: "gold" | "green";
}

export interface BannerPropsItem {
  title: string;
  subtitle: string;
}

export interface BannerProps {
  title: string;
  description: string;
  items: BannerPropsItem[];
  imageSrc: string;
  imageAlt?: string;
}
export interface ContentListNumber {
  label: string;
  value: string;
}

export interface ContentListItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ContentListType {
  title: string;
  subtitle: string;
  description: string;
  numbers?: ContentListNumber[];
  list: ContentListItem[];
}

export interface HorizontalCardProps {
  imgSrc: string;
  title: string;
  subtitle: string;
  description: string;
  color?: string;
}

type Branch = {
  name: string;
  phone: string;
  address: string;
  mail: string;
};

export interface BranchesProps {
  data: Branch[];
}

export interface IntegratedSolutionsItem {
  title: string;
  description: string;
  picture: string;
}

export interface IntegratedSolutionsProps {
  items: IntegratedSolutionsItem[];
}

export interface RecentNewsCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
  href: string;
}

export interface RecentNewsProps {
  items: RecentNewsCardProps[];
}

export interface RecentPostsCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
  href: string;
}

export interface RecentPostsProps {
  items: RecentPostsCardProps[];
}

export interface BorderedGridItemProps {
  title: string;
  description: string;
}

export interface BorderedGridProps {
  data: BorderedGridItemProps[];
}

export interface CoreValue {
  icon: React.ReactNode; // Placeholder for the icon name (e.g., 'Heart', 'Users', 'Leaf')
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href?: string;
  children?: NavLink[];
};

export interface NavigationConfig {
  logo: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  links: NavLink[];
};

export interface FacilitiesItem {
  title: string;
  description: string;
  picture: string;
}

export interface FacilitiesProps {
  title: string;
  description: string;
  buttonText?: string;
  items: FacilitiesItem[];
}

export interface ServiceListItem {
  icon: ReactNode;
  title: string;
}

export interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  listItems: ServiceListItem[];
  buttonText: string;
  image?: string;
}

export interface InfoListItem {
  icon?: ReactNode;
  title: string;
}

export interface InfoItem {
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
  listItems: InfoListItem[];
}

export interface InfoSection {
  title: string;
  description: string;
  items: InfoItem[];
}

export interface MessageBannerData {
  title: string;
  titleColor?: string;
  quote: string;
  directorName: string;
  directorPosition: string;
  directorImage: string;
}

// Props for the component
export interface MessageBannerProps {
  data: MessageBannerData;
}

export interface SafetyComplianceSection {
  /** The name of the icon (to map to an icon component) */
  icon: keyof typeof LucideIcons; 
  /** The title for the section */
  title: string;
  /** Paragraphs or bullet points for the section */
  content: string[];
}

export interface SafetyComplianceIntro {
  /** Short introductory description text */
  description: string;
}

export interface SafetyComplianceData {
  /** Main title for the page or section */
  title: string;
  /** Introductory section */
  intro: SafetyComplianceIntro;
  /** Array of safety/compliance topics */
  sections: SafetyComplianceSection[];
}

export interface BTripleSection {
  icon: keyof typeof LucideIcons;
  title: string;
  description: string;
}

export interface BTriplesDataType {
  title: string;
  sections: BTripleSection[];
}