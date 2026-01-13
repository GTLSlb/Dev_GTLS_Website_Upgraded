"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/lib/ui/button";

type Props = {
  url?: string | null;
};

export function BackButton({ url }: Props) {
  const router = useRouter();

  return (
    <Button
      variant="default"
      onClick={() => {
        if (url) {
          router.push(url);
        } else {
          router.back();
        }
      }}
      className="flex items-center bg-gray-900 text-white hover:bg-gray-600 text-xs gap-2"
    >
      <ArrowLeft className="h-3 w-3" />
      Back
    </Button>
  );
}
