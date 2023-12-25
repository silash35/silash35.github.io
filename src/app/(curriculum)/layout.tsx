import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/curriculum",
    languages: { "pt-BR": "/curriculo", "x-default": "/curriculum" },
  },
};

const CurriculumLayout = ({ children }: { children: React.ReactNode }) => children;

export default CurriculumLayout;
