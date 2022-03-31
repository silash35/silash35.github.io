import Card from "@/components/portfolio/card";
import IconLink from "@/components/portfolio/iconLink";

import styles from "./portfolioCards.module.scss";

const PortfolioCards = () => {
  return (
    <section className={styles.cards}>
      <Card>
        <Card.Image
          src="/images/projects/qpdftools.webp"
          alt="Picture of the Qpdf Tools program home screen"
        />
        <Card.Content>
          <h2>Qpdf Tools</h2>
          <p>
            Qpdf Tools is an easy-to-use Qt interface for Ghostscript and Stapler, which makes it
            possible for normal users to manage their PDFs.
          </p>
        </Card.Content>
        <Card.Actions>
          <IconLink
            linkProps={{
              href: "https://github.com/silash35/qpdftools/wiki",
              title: "access the Qpdf Tools documentation on github",
            }}
            imgProps={{
              src: "/images/icons/white/description.svg",
              alt: "documentation icon",
            }}
          />

          <IconLink
            linkProps={{
              href: "https://github.com/silash35/qpdftools",
              title: "access the Qpdf Tools project on github",
            }}
            imgProps={{
              src: "/images/icons/white/github.svg",
              alt: "GitHub icon",
            }}
          />
        </Card.Actions>
      </Card>

      <Card>
        <Card.Image src="/images/projects/qtotem.webp" alt="Screenshot of a QTotem question" />
        <Card.Content>
          <h2>QTotem</h2>
          <p>
            An interface written in Python and Qml for an automated screening totem for hospitals.
            In order to speed up patient care.
          </p>
        </Card.Content>
        <Card.Actions>
          <IconLink
            linkProps={{
              href: "https://github.com/silash35/labrob/blob/master/qTotem/README.md",
              title: "access the QTotem documentation on github",
            }}
            imgProps={{
              src: "/images/icons/white/description.svg",
              alt: "documentation icon",
            }}
          />

          <IconLink
            linkProps={{
              href: "https://github.com/silash35/labrob/tree/master/qTotem",
              title: "access the QTotem project on github",
            }}
            imgProps={{
              src: "/images/icons/white/github.svg",
              alt: "GitHub icon",
            }}
          />
        </Card.Actions>
      </Card>

      <Card>
        <Card.Image src="/images/projects/alis.webp" alt="Screen shot of a QTotem question" />
        <Card.Content>
          <h2>ALIS</h2>
          <p>
            An aggregator of accessible places for the deaf. For example, stores with attendants who
            speak ASL (American Sign Language).
          </p>
        </Card.Content>
        <Card.Actions>
          <IconLink
            linkProps={{
              href: "https://alis.vercel.app/",
              title: "access the ALIS page",
            }}
            imgProps={{
              src: "/images/icons/white/link.svg",
              alt: "link icon",
            }}
          />

          <IconLink
            linkProps={{
              href: "https://github.com/silash35/ALIS",
              title: "access the ALIS project on github",
            }}
            imgProps={{
              src: "/images/icons/white/github.svg",
              alt: "GitHub icon",
            }}
          />
        </Card.Actions>
      </Card>
    </section>
  );
};

export default PortfolioCards;
