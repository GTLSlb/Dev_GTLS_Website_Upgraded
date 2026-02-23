// Make a custom print hook
// lib/hooks/use-print.ts
import { useEffect } from "react";

export function usePrint() {
  useEffect(() => {
    const beforePrint = () => {
      const meta = document.querySelector('meta[name="viewport"]');
      if (meta) {
        meta.setAttribute("data-original", meta.getAttribute("content") || "");
        meta.setAttribute("content", "width=1280");
      }
    };

    const afterPrint = () => {
      const meta = document.querySelector('meta[name="viewport"]');
      if (meta) {
        const original = meta.getAttribute("data-original");
        if (original) meta.setAttribute("content", original);
      }
    };

    window.addEventListener("beforeprint", beforePrint);
    window.addEventListener("afterprint", afterPrint);

    return () => {
      window.removeEventListener("beforeprint", beforePrint);
      window.removeEventListener("afterprint", afterPrint);
    };
  }, []);
}