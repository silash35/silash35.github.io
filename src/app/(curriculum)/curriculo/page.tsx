import { Metadata } from "next";

import Curriculum from "../_components";

export const metadata: Metadata = {
  title: "Currículo",
};

const Curriculo = () => <Curriculum locale="pt" />;

export default Curriculo;
