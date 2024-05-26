import Card from "./Card";
import IconLink from "./IconLink";
import styles from "./portfolio.module.scss";

const PortfolioCards = () => (
  <section className={styles.cards}>
    <Card>
      <Card.image alt="Screenshot the OpenSOM demo instance" src="/images/projects/opensom.webp" />
      <Card.content>
        <h2>OpenSOM</h2>
        <p>
          A self-hosted, open source service order manager. With it you can register customers,
          create budgets, send emails and much more.
        </p>
      </Card.content>
      <Card.actions>
        <IconLink
          imgProps={{
            src: "/images/icons/white/link.svg",
            alt: "link icon",
          }}
          linkProps={{
            href: "https://opensom-frontend.silas.eng.br/",
            title: "access the OpenSOM demo instance",
          }}
        />

        <IconLink
          imgProps={{
            src: "/images/icons/white/github.svg",
            alt: "GitHub icon",
          }}
          linkProps={{
            href: "https://github.com/silash35/opensom",
            title: "access the OpenSOM project on github",
          }}
        />
      </Card.actions>
    </Card>
    <Card>
      <Card.image
        alt="Picture of the Qpdf Tools program home screen"
        src="/images/projects/qpdftools.webp"
      />
      <Card.content>
        <h2>Qpdf Tools</h2>
        <p>
          Qpdf Tools is an easy-to-use Qt interface for Ghostscript and QPDF, which makes it
          possible for normal users to manage their PDFs.
        </p>
      </Card.content>
      <Card.actions>
        <IconLink
          imgProps={{
            src: "/images/icons/white/description.svg",
            alt: "documentation icon",
          }}
          linkProps={{
            href: "https://github.com/silash35/qpdftools/wiki",
            title: "access the Qpdf Tools documentation on github",
          }}
        />

        <IconLink
          imgProps={{
            src: "/images/icons/white/github.svg",
            alt: "GitHub icon",
          }}
          linkProps={{
            href: "https://github.com/silash35/qpdftools",
            title: "access the Qpdf Tools project on github",
          }}
        />
      </Card.actions>
    </Card>

    <Card>
      <Card.image alt="Screen shot of a QTotem question" src="/images/projects/alis.webp" />
      <Card.content>
        <h2>ALIS</h2>
        <p>
          An aggregator of accessible places for the deaf, such as stores with attendants who can
          speak ASL (American Sign Language).
        </p>
      </Card.content>
      <Card.actions>
        <IconLink
          imgProps={{
            src: "/images/icons/white/link.svg",
            alt: "link icon",
          }}
          linkProps={{
            href: "https://alis.vercel.app/",
            title: "access the ALIS page",
          }}
        />

        <IconLink
          imgProps={{
            src: "/images/icons/white/github.svg",
            alt: "GitHub icon",
          }}
          linkProps={{
            href: "https://github.com/silash35/ALIS",
            title: "access the ALIS project on github",
          }}
        />
      </Card.actions>
    </Card>
  </section>
);

export default PortfolioCards;
