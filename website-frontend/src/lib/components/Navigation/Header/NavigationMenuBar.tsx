"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Search } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/lib/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/lib/ui/sheet";
import { navigationConfig } from "@/lib/data";
import { Button } from "@/lib/ui/button";
import TextWrapper from "../../Common/TextWrapper";

export function NavigationMenuBar() {
  const [open, setOpen] = React.useState(false);
  const { logo, links } = navigationConfig;

  return (
    <nav className="flex items-center justify-between w-full p-4 border-b">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src={logo.src}
          alt={logo.alt}
          width={logo.width ?? 100}
          height={logo.height ?? 50}
          priority
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList>
            {links.map((link) => (
              <NavigationMenuItem key={link.label}>
                {link.children ? (
                  <>
                    <NavigationMenuTrigger>{link.label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 w-[220px]">
                        {link.children.map((child) => (
                          <li key={child.label}>
                            <NavigationMenuLink asChild>
                              <Link href={child.href ?? "#"}>
                                {child.label}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href={link.href ?? "#"}>{link.label}</Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button>
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="p-4">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-4 mt-4">
              {links.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <p className="font-semibold">{link.label}</p>
                    <div className="ml-3 flex flex-col space-y-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href ?? "#"}
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href ?? "#"}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <Link href="/about" className="text-sm font-medium">
          <Button
            size="sm"
            variant="outline"
            className="border-gold text-gold hover:bg-gold hover:text-creamy hover:cursor-pointer rounded-full py-5 w-11"
          >
            <Search className="size-4" />
          </Button>
        </Link>
        <Link href="/contact" className="text-sm font-medium">
          <Button
            size="sm"
            variant="outline"
            className="border-gold text-gold hover:bg-gold hover:text-creamy hover:cursor-pointer rounded-full py-5 px-8"
          >
            <TextWrapper text="Login" fontFamily="dmSans" styleType="body" />
          </Button>
        </Link>
      </div>
    </nav>
  );
}

export default NavigationMenuBar;
