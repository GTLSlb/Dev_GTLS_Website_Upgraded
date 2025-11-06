import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import * as LucideIcons from "lucide-react";

 interface GridCardProps {
  id: number;
  title: string;
  icon: string; // Made optional in case some cards don't have an icon
  description: string;
  content: string;
  footer: string;
}

 interface CenterTitleProps {
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

 interface MenuItem {
  label: string;
  link: string;
}

 interface MenuSection {
  title: string;
  items: MenuItem[];
}

 interface Location {
  city: string;
  street: string;
  suburb: string;
  state: string;
  postalCode: string;
}

 interface WhyGtlsItem {
  title: string;
  picture: string;
}

 interface UnevenGridProps {
  items: WhyGtlsItem[];
}

 interface IconListItem {
  icon: React.ReactNode; // can be any JSX element
  description: string;
}

 interface IconListProps {
  items: IconListItem[];
}

 interface CustomerHubCardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  list?: IconListItem[]; // optional array for IconList
  iconColor?: string; // arrow icon color
  children?: React.ReactNode; // optional additional content
}

 interface NewsCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

 interface ProfileCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

interface NewsItem {
  title: string;
  description: string;
  imageSrc: string;
}

 interface ProfileItem {
  title: string;
  description: string;
  imageSrc: string;
}

 interface SliderItem {
  date: string;
  title: string;
  description: string;
}

 interface NewsSliderProps {
  news: NewsItem[];
}
 interface ProfileSliderProps {
  items: ProfileItem[];
}

 interface SliderProps {
  items: SliderItem[];
}

 interface FloatingBannerProps {
  iconSrc: string; // Path to the icon (e.g. "/svgs/distribution.svg")
  text: string; // The text you want to show
  className?: string; // Optional additional classes for customization
}

 interface HeroProps {
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

 interface BannerPropsItem {
  title: string;
  subtitle: string;
}

 interface BannerProps {
  title: string;
  description: string;
  items: BannerPropsItem[];
  imageSrc: string;
  imageAlt?: string;
}
 interface ContentListNumber {
  label: string;
  value: string;
}

 interface ContentListItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

 interface ContentListType {
  title: string;
  subtitle: string;
  description: string;
  numbers?: ContentListNumber[];
  list: ContentListItem[];
}

 interface HorizontalCardProps {
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

 interface BranchesProps {
  data: Branch[];
}

 interface IntegratedSolutionsItem {
  title: string;
  description: string;
  picture: string;
}

 interface IntegratedSolutionsProps {
  items: IntegratedSolutionsItem[];
}

 interface RecentNewsCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
  href: string;
}

 interface RecentNewsProps {
  items: RecentNewsCardProps[];
}

 interface RecentPostsCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
  href: string;
}

 interface RecentPostsProps {
  items: RecentPostsCardProps[];
}

 interface BorderedGridItemProps {
  title: string;
  description: string;
}

 interface BorderedGridProps {
  data: BorderedGridItemProps[];
}

 interface CoreValue {
  icon: React.ReactNode; // Placeholder for the icon name (e.g., 'Heart', 'Users', 'Leaf')
  title: string;
  description: string;
}

 interface Expansion {
  heading: string;
  description: string;
}

 interface NavLink {
  label: string;
  href?: string;
  children?: NavLink[];
};

 interface NavigationConfig {
  logo: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  links: NavLink[];
};

 interface FacilitiesItem {
  title: string;
  description: string;
  picture: string;
}

 interface FacilitiesProps {
  title: string;
  description: string;
  buttonText?: string;
  items: FacilitiesItem[];
}

 interface ServiceListItem {
  icon: ReactNode;
  title: string;
}

 interface ServiceData {
  title: string;
  subtitle?: string;
  description?: string;
  listItems: ServiceListItem[];
  buttonText: string;
  image?: string;
}

 interface InfoListItem {
  icon?: ReactNode;
  title: string;
}

 interface InfoItem {
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
  listItems: InfoListItem[];
}

 interface InfoSection {
  title: string;
  description: string;
  items: InfoItem[];
}

 interface MessageBannerData {
  title: string;
  titleColor?: string;
  quote: string;
  directorName: string;
  directorPosition: string;
  directorImage: string;
}

// Props for the component
 interface MessageBannerProps {
  data: MessageBannerData;
}

 interface SafetyComplianceSection {
  /** The name of the icon (to map to an icon component) */
  icon: keyof typeof LucideIcons; 
  /** The title for the section */
  title: string;
  /** Paragraphs or bullet points for the section */
  content: string[];
}

 interface SafetyComplianceIntro {
  /** Short introductory description text */
  description: string;
}

 interface SafetyComplianceData {
  /** Main title for the page or section */
  title: string;
  /** Introductory section */
  intro: SafetyComplianceIntro;
  /** Array of safety/compliance topics */
  sections: SafetyComplianceSection[];
}

 interface BTripleSection {
  icon: keyof typeof LucideIcons;
  title: string;
  description: string;
}

 interface BTriplesDataType {
  title: string;
  sections: BTripleSection[];
}