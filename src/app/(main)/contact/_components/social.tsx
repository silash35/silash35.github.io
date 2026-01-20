import Button from "@/components/Button";
import EmailIcon from "@/components/icons/Email";
import GitHubIcon from "@/components/icons/GitHub";
import InstagramIcon from "@/components/icons/Instagram";
import WhatsappIcon from "@/components/icons/Whatsapp";
import Link from "@/components/Link";

import styles from "./social.module.scss";

const Social = () => (
  <section className={styles.social}>
    <ul>
      <li>
        <Button variant="outlined" asChild>
          <Link href="mailto:silash35@gmail.com" title="Silas Henrique's e-mail address">
            <EmailIcon />
            silash35@gmail.com
          </Link>
        </Button>
      </li>
      <li>
        <Button variant="outlined" asChild>
          <Link href="tel:+5571987529296" title="Phone number of Silas Henrique">
            <WhatsappIcon />
            +55 71 98752-9296
          </Link>
        </Button>
      </li>
      <li>
        <Button variant="outlined" asChild>
          <Link href="https://github.com/silash35" title="GitHub of Silas Henrique">
            <GitHubIcon />
            @silash35
          </Link>
        </Button>
      </li>
      <li>
        <Button variant="outlined" asChild>
          <Link href="https://www.instagram.com/silash35a/" title="Instagram of Silas Henrique">
            <InstagramIcon />
            @silash35a
          </Link>
        </Button>
      </li>
    </ul>
  </section>
);

export default Social;
