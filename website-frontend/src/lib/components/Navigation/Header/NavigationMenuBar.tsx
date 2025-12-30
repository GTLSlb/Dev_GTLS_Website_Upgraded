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

type NavigationMenuBarProps = {
  data: NavbarContent;
};

export function NavigationMenuBar({ data }: NavigationMenuBarProps) {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = React.useState(pathname);
  const [openSearchContainer, setOpenSearchContainer] = React.useState(false);

  React.useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  React.useEffect(() => {
    if (openSearchContainer) {
      const handleScroll = () => {
        setOpenSearchContainer(false);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
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
          <SearchContainer setOpenSearchContainer={setOpenSearchContainer} />
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
        {/* <Button
          size="sm"
          variant="outline"
          onClick={() => {
            setOpenSearchContainer(!openSearchContainer);
          }}
          className="border-gold text-gold hover:bg-gold hover:text-creamy hover:cursor-pointer rounded-full py-5 lg:w-11 "
        >
          <Search className="size-4" />
          <TextWrapper
            text="Search"
            fontFamily="dmSans"
            styleType="body"
            className="block lg:hidden"
          />
        </Button> */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="https://map.gtls.com.au/"
              className="text-sm font-medium"
            >
              <Button
                size="sm"
                variant="outline"
                className="border-gold text-gold hover:bg-gold hover:text-creamy hover:cursor-pointer rounded-full py-5 lg:w-11"
              >
                <MapIcon className="size-4" />
              </Button>
            </Link>
          </TooltipTrigger>

          <TooltipContent side="bottom">
            <p>Open Map</p>
          </TooltipContent>
        </Tooltip>

        {/* SEARCH BUTTON */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                setOpenSearchContainer(!openSearchContainer);
              }}
              className="border-gold text-gold hover:bg-gold hover:text-creamy hover:cursor-pointer rounded-full py-5 lg:w-11"
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

          <TooltipContent side="bottom">
            <p>Search</p>
          </TooltipContent>
        </Tooltip>

        {/* LOGIN BUTTON */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/login" className="text-sm hidden lg:block font-medium">
              <Button
                size="sm"
                variant="outline"
                className="border-gold text-gold hover:bg-gold hover:text-creamy hover:cursor-pointer rounded-full py-5 lg:w-11 px-8"
              >
                <User className="size-4" />
              </Button>
            </Link>
          </TooltipTrigger>

          <TooltipContent side="bottom">
            <p>Login</p>
          </TooltipContent>
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
              <Button
                variant="outline"
                className="w-full mt-6 border-gold text-gold hover:bg-gold hover:text-creamy hover:cursor-pointer rounded-xl py-5"
                // onClick={() => setOpen(false)}
              >
                <TextWrapper
                  text="Login"
                  fontFamily="dmSans"
                  styleType="body"
                />
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default NavigationMenuBar;
