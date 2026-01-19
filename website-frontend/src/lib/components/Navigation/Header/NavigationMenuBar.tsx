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
import { URLs } from "@/lib/utils/constants";

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
                    currentPath.includes(link.href ?? "") &&
                      "bg-accent !text-gold",
                    currentPath.includes(URLs.bTriple) &&
                      link.href == URLs.bTriple &&
                      "bg-accent !text-gold",
                    currentPath.includes(URLs.allnews) &&
                      link.href == URLs.news &&
                      "bg-accent !text-gold"
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
        <Link href="https://map.gtls.com.au/" className="text-sm font-medium">
          <Button
            size="sm"
            variant="ghost"
            className="text-gold hover:bg-gold hover:text-creamy hover:cursor-pointer rounded-full py-5 !px-3"
          >
            <MapIcon className="size-4" />
          </Button>
        </Link>

        {/* SEARCH BUTTON */}
        <Button
          size="sm"
          variant="ghost"
          onClick={() => {
            setOpenSearchContainer(!openSearchContainer);
          }}
          className="border-gold text-gold hover:bg-gold hover:text-creamy hover:cursor-pointer rounded-full py-5 !px-3"
        >
          <Search className="size-4" />
        </Button>

        {/* LOGIN BUTTON */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              size="sm"
              variant="ghost"
              className="border-gold text-gold hover:bg-gold hover:text-creamy rounded-full py-5 !px-3 hover:cursor-pointer"
            >
              <User className="size-4" />
            </Button>
          </PopoverTrigger>

          <PopoverContent align="end" side="bottom" className="w-48 p-2">
            <div className="flex flex-col gap-1">
              <Link href="/login">
                <Button
                  variant="ghost"
                  className="w-full justify-start hover:cursor-pointer"
                >
                  Login
                </Button>
              </Link>

              <Link href="https://jaixwebapps.gtls.com.au/Portal/Account/Login.aspx">
                <Button
                  variant="ghost"
                  className="w-full justify-start hover:cursor-pointer"
                >
                  Portal Login
                </Button>
              </Link>
            </div>
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
