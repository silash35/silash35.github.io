import DocumentIcon from "@/components/icons/Description";
import GitHubIcon from "@/components/icons/GitHub";
import LinkIcon from "@/components/icons/Link";
import alis from "@/images/projects/alis.png";
import opensom from "@/images/projects/opensom.png";
import optimusjr from "@/images/projects/optimusjr.png";
import qpdftools from "@/images/projects/qpdftools.png";

import Item from "./Item";
import styles from "./portfolio.module.scss";

const PortfolioCards = () => (
  <section className={styles.itensWrapper}>
    <Item
      imageProps={{
        alt: "Screenshot the ALIS Website",
        src: optimusjr,
      }}
    >
      <h2>OPTIMUS Jr.</h2>
      <p>
        The new website for the OPTIMUS Jr. company. The redesign offers a more visually appealing
        interface with exciting animations, providing an enhanced user experience.
      </p>

      <Item.actions>
        <Item.action href="https://optimusjr.com.br/" title="The OPTIMUS Jr. Website">
          <LinkIcon />
          <span>Visit Website</span>
        </Item.action>
        <Item.action
          href="https://github.com/optimusjr/website"
          title="The OPTIMUS Jr. website project on github"
        >
          <GitHubIcon />
          <span>See project GitHub</span>
        </Item.action>
      </Item.actions>
    </Item>

    <Item
      imageProps={{
        alt: "Screenshot the OpenSOM demo instance",
        src: opensom,
      }}
    >
      <h2>OpenSOM</h2>
      <p>
        A self-hosted, open source service order manager. With it you can register customers, create
        budgets, send emails and much more.
      </p>

      <Item.actions>
        <Item.action href="https://opensom-frontend.silas.eng.br" title="The OpenSOM demo instance">
          <LinkIcon />
          <span>Visit Website</span>
        </Item.action>
        <Item.action
          href="https://github.com/silash35/opensom"
          title="The OpenSOM project on github"
        >
          <GitHubIcon />
          <span>See project GitHub</span>
        </Item.action>
      </Item.actions>
    </Item>

    <Item
      imageProps={{
        alt: "Picture of the Qpdf Tools program home screen",
        src: qpdftools,
      }}
    >
      <h2>Qpdf Tools</h2>
      <p>
        Qpdf Tools is an easy-to-use Qt interface for Ghostscript and QPDF, which makes it possible
        for normal users to manage their PDFs.
      </p>

      <Item.actions>
        <Item.action
          href="https://github.com/silash35/qpdftools/wiki"
          title="The Qpdf Tools documentation on github"
        >
          <DocumentIcon />
          <span>Learn More</span>
        </Item.action>
        <Item.action
          href="https://github.com/silash35/qpdftools"
          title="The Qpdf Tools project on github"
        >
          <GitHubIcon />
          <span>See project GitHub</span>
        </Item.action>
      </Item.actions>
    </Item>

    <Item
      imageProps={{
        alt: "Screenshot the ALIS Website",
        src: alis,
      }}
    >
      <h2>ALIS</h2>
      <p>
        An aggregator of accessible places for the deaf, such as stores with attendants who can
        speak ASL (American Sign Language).
      </p>

      <Item.actions>
        <Item.action href="https://alis.vercel.app/" title="The ALIS page">
          <LinkIcon />
          <span>Visit Website</span>
        </Item.action>
        <Item.action href="https://github.com/silash35/ALIS" title="The ALIS project on github">
          <GitHubIcon />
          <span>See project GitHub</span>
        </Item.action>
      </Item.actions>
    </Item>
  </section>
);

export default PortfolioCards;
