import { MetadataRoute } from "next";

import variables from "@/styles/variables.module.scss";

type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type IconObject = Concrete<MetadataRoute.Manifest>["icons"][0];

export default function manifest(): MetadataRoute.Manifest {
  const createIconEntry = (size: string, maskable?: boolean): IconObject => ({
    src: `${process.env.SITE_URL}/icons/${
      maskable ? "maskable/maskable_icon_" : "android-chrome-"
    }${size}.png`,
    sizes: size,
    type: "image/png",
    purpose: maskable ? "maskable" : undefined,
  });

  const normalIcons = ["192x192", "512x512"];
  const maskableIcons = [
    "48x48",
    "72x72",
    "96x96",
    "128x128",
    "192x192",
    "384x384",
    "512x512",
    "1024x1024",
  ];

  return {
    name: "Silas Henrique",
    short_name: "Silas Henrique",
    description:
      "My personal website. Here you will find my resume, contact information and some of my projects",
    start_url: "/",
    display: "standalone",
    background_color: variables.black,
    theme_color: variables.black,
    icons: [
      ...normalIcons.map((size) => createIconEntry(size)),
      ...maskableIcons.map((size) => createIconEntry(size, true)),
    ],
  };
}

export const dynamic = "force-static";
