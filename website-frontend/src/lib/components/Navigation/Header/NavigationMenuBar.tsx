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
import { Tooltip, TooltipContent, TooltipTrigger } from "@/lib/ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "@/lib/ui/popover";

type NavigationMenuBarProps = {
  data: NavbarContent;
};

export function NavigationMenuBar({ data }: NavigationMenuBarProps) {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = React.useState(pathname);
  const [openSearchContainer, setOpenSearchContainer] = React.useState(false);
  const searchRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setOpenSearchContainer(false);
      }
    };

    if (openSearchContainer) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
          ref={searchRef}
          className={`z-10 shadow rounded bg-white w-full absolute mt-[6vh] ${
            openSearchContainer ? "block" : "hidden"
          }`}
        >
          <SearchContainer />
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
                    currentPath.startsWith(link.href ?? "") &&
                      "bg-accent !text-gold"
                  )}
                >
                  <Link href={link.href ?? "#"}>{link.label}</Link>
                </NavigationMenuLink>
                {/* )} */}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center space-x-4">
        {/* Search Tooltip */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setOpenSearchContainer(!openSearchContainer)}
              className="border-gold text-gold hover:bg-gold hover:text-creamy hover:cursor-pointer rounded-full py-5 lg:w-10.5"
            >
              <Search className="size-4" />
              <TextWrapper
                text="Search"
                fontFamily="dmSans"
                styleType="body"
                className="block lg:hidden"
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Search</p>
          </TooltipContent>
        </Tooltip>

        {/* Login Tooltip */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              size="sm"
              variant="outline"
              className="hidden lg:flex border-gold text-gold hover:bg-gold hover:text-creamy hover:cursor-pointer rounded-full py-5 lg:w-11"
            >
              <User className="size-4" />
            </Button>
          </PopoverTrigger>

          <PopoverContent align="end" className="w-48 p-2 space-y-1">
            <Link href="https://jaixwebapps.gtls.com.au/Portal/Account/Login.aspx">
              <Button
                variant="ghost"
                className="w-full justify-start hover:cursor-pointer"
              >
                Client Login
              </Button>
            </Link>

            <Link href="/login">
              <Button
                variant="ghost"
                className="w-full justify-start hover:cursor-pointer"
              >
                Staff Login
              </Button>
            </Link>
          </PopoverContent>
        </Popover>
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
                {
                  data?.NavItems.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href ?? "#"}
                      onClick={() => setOpen(false)}
                    >
                      <TextWrapper
                        text={link.label}
                        fontFamily="dmSans"
                        styleType="link"
                      />
                    </Link>
                  ))
                  // )
                }
              </div>
              <div className="flex flex-col gap-3 mt-6">
                <Link href="https://jaixwebapps.gtls.com.au/Portal/Account/Login.aspx">
                  <Button
                    variant="outline"
                    className="w-full border-gold text-gold hover:bg-gold hover:text-creamy hover:cursor-pointer rounded-xl py-5"
                    // onClick={() => setOpen(false)}
                  >
                    <TextWrapper
                      text="Client Login"
                      fontFamily="dmSans"
                      styleType="body"
                    />
                  </Button>
                </Link>
                <Link href="/login">
                  <Button
                    variant="outline"
                    className="w-full border-gold text-gold hover:bg-gold hover:text-creamy hover:cursor-pointer rounded-xl py-5"
                    // onClick={() => setOpen(false)}
                  >
                    <TextWrapper
                      text="Staff Login"
                      fontFamily="dmSans"
                      styleType="body"
                    />
                  </Button>
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
