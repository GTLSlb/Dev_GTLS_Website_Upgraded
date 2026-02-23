"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapIcon, Menu, Search, User } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/lib/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/lib/ui/sheet";
import { Button } from "@/lib/ui/button";
import TextWrapper from "../../Common/TextWrapper";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NavbarContent } from "@/lib/types/navigation";
import { StrapiLink } from "@/lib/services/media";
import { Separator } from "@/lib/ui/separator";
import SearchContainer from "@/lib/components/WebsiteSearch/Container";
import { Popover, PopoverContent, PopoverTrigger } from "@/lib/ui/popover";
import { SearchResult } from "@/lib/types/searchResults";
import { removeQuery } from "@/lib/utils/search.utils";
import { URLs } from "@/lib/utils/constants";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/lib/ui/tooltip";

type NavigationMenuBarProps = {
  data: NavbarContent;
};

export function NavigationMenuBar({ data }: NavigationMenuBarProps) {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = React.useState(pathname);
  const [openSearchContainer, setOpenSearchContainer] = React.useState(false);

  //  SEARCH UTILITIES
  const [query, setQuery] = React.useState("");
  const [searchResults, setSearchResults] = React.useState<SearchResult>({
    query: "",
    total_hits: 0,
    results: [],
  });

  React.useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  // Remove query and close the search container
  // when the user scrolls
  // or clicks outside
  React.useEffect(() => {
    if (openSearchContainer) {
      const handleScroll = () => {
        removeQuery(setQuery, setOpenSearchContainer, setSearchResults);
      };

      const handleClickOutside = (event: MouseEvent) => {
        if (!(event.target as Element).closest("#Search-Container")) {
          removeQuery(setQuery, setOpenSearchContainer, setSearchResults);
        }
      };

      window.addEventListener("scroll", handleScroll);
      document.addEventListener("click", handleClickOutside);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [openSearchContainer]);

  return (
    <nav className="flex items-center justify-between gap-6 w-full p-4 border-b">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src={StrapiLink(data.Logo.url)}
          alt={data.Logo.alternativeText}
          placeholder="blur"
          blurDataURL="/Logos/logo-transparent.svg"
          width={100}
          height={50}
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden xl:flex relative">
        <div
          style={{
            position: "absolute",
            top: "6vh",
            opacity: openSearchContainer ? 1 : 0,
            transform: openSearchContainer
              ? "translateY(0)"
              : "translateY(100%)",
            transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
            pointerEvents: openSearchContainer ? "auto" : "none",
            zIndex: 99999,
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "4px",
            width: "100%",
            backgroundColor: "white",
          }}
        >
          <SearchContainer
            setOpenSearchContainer={setOpenSearchContainer}
            query={query}
            setQuery={setQuery}
            searchResults={searchResults}
            setSearchResults={setSearchResults}
          />
        </div>
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            {data?.NavItems?.map((link) => (
              <NavigationMenuItem key={link.label}>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    "group inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors bg-background text-foreground hover:bg-creamy hover:text-gold",
                    "data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
                    currentPath.includes(link.href ?? "") &&
                      "bg-accent !text-gold",
                    currentPath.includes(URLs.bTriple) &&
                      link.href == URLs.bTriple &&
                      "bg-accent !text-gold",
                    currentPath.includes(URLs.allnews) &&
                      link.href == URLs.news &&
                      "bg-accent !text-gold",
                  )}
                >
                  <Link href={link.href ?? "#"}>{link.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center space-x-2">
        {/* MAP BUTTON */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="https://map.gtls.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View National Road Alerts Map" // A11y fix
              className="flex items-center justify-center size-10 text-gold hover:bg-gold hover:text-creamy transition-colors rounded-full border border-transparent hover:border-gold"
            >
              <MapIcon className="size-4" />
            </Link>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>National Road Alerts</p>
          </TooltipContent>
        </Tooltip>

        {/* SEARCH BUTTON */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="sm"
              variant="ghost"
              aria-label="Open Search" // A11y fix
              onClick={() => setOpenSearchContainer(!openSearchContainer)}
              className="border-gold text-gold hover:bg-gold hover:text-creamy rounded-full py-5 !px-3"
            >
              <Search className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Search</p>
          </TooltipContent>
        </Tooltip>

        {/* LOGIN BUTTON */}
        <Tooltip>
          <Popover>
            <TooltipTrigger asChild>
              <PopoverTrigger asChild>
                <Button
                  size="sm"
                  variant="ghost"
                  aria-label="Login Options" // A11y fix
                  className="border-gold text-gold hover:bg-gold hover:text-creamy rounded-full py-5 !px-3"
                >
                  <User className="size-4" />
                </Button>
              </PopoverTrigger>
            </TooltipTrigger>
            <PopoverContent align="end" side="bottom" className="w-48 p-2">
              <div className="flex flex-col gap-1">
                <Link
                  href="/login"
                  className="flex w-full items-center px-3 py-2 text-sm hover:bg-accent rounded-md transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="https://jaixwebapps.gtls.com.au/Portal/Account/Login.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center px-3 py-2 text-sm hover:bg-accent rounded-md transition-colors"
                >
                  Portal Login
                </Link>
              </div>
            </PopoverContent>
            <TooltipContent side="bottom">
              <p>Login</p>
            </TooltipContent>
          </Popover>
        </Tooltip>
      </div>
      {/* Mobile Menu */}
      <div className="lg:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button>
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="p-4 py-2">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <Separator />
            <div className="flex flex-col gap-4 p-4 justify-between h-full">
              <div className="flex flex-col space-y-4 mt-0">
                {data?.NavItems.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href ?? "#"}
                    onClick={() => setOpen(false)}
                  >
                    <TextWrapper
                      text={link.label}
                      fontFamily="dmSans"
                      styleType="body"
                    />
                  </Link>
                ))}
                <Link href={URLs.contact} onClick={() => setOpen(false)}>
                  <TextWrapper
                    text={"Contact Us"}
                    fontFamily="dmSans"
                    styleType="body"
                  />
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default NavigationMenuBar;
