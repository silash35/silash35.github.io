import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/curriculum",
    languages: { "pt-BR": "/curriculo" },
  },
};

const CurriculumLayout = ({ children }: { children: React.ReactNode }) => children;

export default CurriculumLayout;
