"use client";
import CenterTitle from "@/lib/components/Common/CenterTitle";
import SectionContainer from "@/lib/components/Containers/sectionContainer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/lib/ui/tabs";
import { useEffect, useState } from "react";

const HubspotForms = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadHubspotScript = () => {
      const scriptId = "hubspot-embed-script";
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.src = "https://js-ap1.hsforms.net/forms/embed/441740132.js";
        script.charset = "utf-8";
        script.type = "text/javascript";
        script.async = true;
        script.id = scriptId;
        script.onload = () => {
          console.log("HubSpot embed script loaded!");
          setLoading(false);
        };
        script.onerror = (e) => {
          console.error("Failed to load HubSpot embed script:", e);
          setLoading(false);
        };

        document.body.appendChild(script);
      } else {
        setLoading(false);
      }
    };

    loadHubspotScript();
    return () => {};
  }, []);
  if (loading) {
    return (
      <div className="text-white flex lg:flex-row gap-4 lg:max-w-7xl mx-auto mt-10 min-h-[500px] items-center justify-center">
        <p>Loading contact forms...</p>
      </div>
    );
  }
  return (
    <SectionContainer>
        <CenterTitle
        title={"Contact Us"}
        placement="left"
        titleColor="text-gold"
        className="!mt-0"
      />
      <Tabs defaultValue="sales" className="w-full">
        <TabsList>
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="general">General</TabsTrigger>
        </TabsList>
        <TabsContent value="sales">
          <div
            className="hs-form-frame w-full"
            data-region="ap1"
            data-portal-id="441740132"
            data-form-id="825dd6df-6a62-4da6-be38-f15be454bb17"
          ></div>
        </TabsContent>
        <TabsContent value="general">
          <div
            className="hs-form-frame w-full bg-white"
            data-region="ap1"
            data-portal-id="441740132"
            data-form-id="b1c96eb3-3310-4a1b-8a1b-680a2e82207c"
          ></div>
        </TabsContent>
      </Tabs>
    </SectionContainer>
  );
};

export default HubspotForms;