"use client";

import AppsBar from "@/lib/layout/AppsBar";
import Navbar from "@/lib/layout/Navbar";
import React, { useContext, useState } from "react";
import CollapseSidebar from "@/lib/layout/CollapseSidebar";
import { Button } from "@/lib/ui/button";
import { ChevronRight } from "lucide-react";
import { AssetContext } from "../context/asset_context";

type Props = {
  children: React.ReactNode;
};

const LayoutDesign: React.FC<Props> = ({ children }) => {
  const [broken, setBroken] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toggled, setToggled] = useState(false);
  const { scrollContainerRef  } = useContext(AssetContext);

  return (
    <div className="flex h-screen">
      {/* Sidebar Left */}
      <aside className="flex-shrink-0 xl:w-20">
        <AppsBar
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </aside>

      {/* Right side container */}
      <div className="flex flex-col flex-1 min-w-0 flex-shrink-0">
        {/* Navbar */}
        <Navbar
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />

        {/* Content area */}
        <div className="flex flex-1 overflow-hidden">
          {/* Optional secondary sidebar */}
          <CollapseSidebar
            toggled={toggled}
            setToggled={setToggled}
            setBroken={setBroken}
          />

          {/* Main scrollable content */}
          <main className="flex-1 p-6 bg-gray-50 overflow-y-auto min-w-0 min-h-full" ref={scrollContainerRef}>
            {broken && (
              <div className="fixed left-0 top-20 z-10 mb-4">
                <Button
                  aria-label="chevron right icon"
                  className="rounded-none rounded-r bg-black hover:bg-gray-800 opacity-80"
                  onClick={() => setToggled(!toggled)}
                >
                  <ChevronRight className="w-5 text-white h-5" />
                </Button>
              </div>
            )}
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default LayoutDesign;