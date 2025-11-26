import * as LucideIcons from "lucide-react";
import { StrapiMediaFile } from "./media";

export type SafetyComplianceSection = {
  icon: keyof typeof LucideIcons;
  title: string;
  content: string[];
};

export type SafetyComplianceIntro = {
  description: string;
};

export type SafetyComplianceData = {
  title: string;
  intro: SafetyComplianceIntro;
  sections: SafetyComplianceSection[];
};

export type BTripleSection = {
  icon: StrapiMediaFile;
  title: string;
  description: string;
};

export type BTriplesDataType = {
  title: string;
  CoreValueItem: BTripleSection[];
};
