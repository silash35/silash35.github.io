import { Metadata } from "next";

import Curriculum from "@/components/pages/Curriculum";

export const metadata: Metadata = {
  title: "Currículo",
};

const Curriculo = () => <Curriculum locale="pt" />;

export default Curriculo;
