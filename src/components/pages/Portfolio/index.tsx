import Card from "./Card";
import IconLink from "./IconLink";
import styles from "./portfolioCards.module.scss";

const PortfolioCards = () => {
  return (
    <section className={styles.cards}>
      <Card>
        <Card.Image
          src="/images/projects/opensom.webp"
          alt="Screenshot the OpenSOM demo instance"
        />
        <Card.Content>
          <h2>OpenSOM</h2>
          <p>
            A self-hosted, open source service order manager. With it you can register customers,
            create budgets, send emails and much more.
          </p>
        </Card.Content>
        <Card.Actions>
          <IconLink
            linkProps={{
              href: "https://opensom.vercel.app/",
              title: "access the OpenSOM demo instance",
            }}
            imgProps={{
              src: "/images/icons/white/link.svg",
              alt: "link icon",
            }}
          />

          <IconLink
            linkProps={{
              href: "https://github.com/silash35/opensom",
              title: "access the OpenSOM project on github",
            }}
            imgProps={{
              src: "/images/icons/white/github.svg",
              alt: "GitHub icon",
            }}
          />
        </Card.Actions>
      </Card>
      <Card>
        <Card.Image
          src="/images/projects/qpdftools.webp"
          alt="Picture of the Qpdf Tools program home screen"
        />
        <Card.Content>
          <h2>Qpdf Tools</h2>
          <p>
            Qpdf Tools is an easy-to-use Qt interface for Ghostscript and QPDF, which makes it
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
        <Card.Image src="/images/projects/alis.webp" alt="Screen shot of a QTotem question" />
        <Card.Content>
          <h2>ALIS</h2>
          <p>
            An aggregator of accessible places for the deaf, such as stores with attendants who can
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
