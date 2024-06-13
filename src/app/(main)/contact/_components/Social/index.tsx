import EmailIcon from "@/components/icons/Email";
import GitHubIcon from "@/components/icons/GitHub";
import InstagramIcon from "@/components/icons/Instagram";
import TwitterIcon from "@/components/icons/Twitter";
import WhatsappIcon from "@/components/icons/Whatsapp";
import Link from "@/components/Link";

import styles from "./social.module.scss";

const Social = () => (
  <div className={styles.social}>
    <h2>My social networks</h2>
    <ul>
      <li>
        <EmailIcon />
        <Link href="mailto:silash35@gmail.com" title="Silas Henrique's e-mail address">
          silash35@gmail.com
        </Link>
      </li>
      <li>
        <WhatsappIcon />
        <Link href="tel:+5571987529296" title="Phone number of Silas Henrique">
          +55 71 98752-9296
        </Link>
      </li>
      <li>
        <TwitterIcon />
        <Link href="https://twitter.com/silash35" title="twitter of Silas Henrique">
          @silash35
        </Link>
      </li>
      <li>
        <GitHubIcon />
        <Link href="https://github.com/silash35" title="GitHub of Silas Henrique">
          @silash35
        </Link>
      </li>
      <li>
        <InstagramIcon />
        <Link href="https://www.instagram.com/silash35a/" title="Instagram of Silas Henrique">
          @silash35a
        </Link>
      </li>
    </ul>
  </div>
);

export default Social;
