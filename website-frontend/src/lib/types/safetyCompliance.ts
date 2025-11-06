import * as LucideIcons from "lucide-react";

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
  icon: keyof typeof LucideIcons;
  title: string;
  description: string;
};

export type BTriplesDataType = {
  title: string;
  sections: BTripleSection[];
};
