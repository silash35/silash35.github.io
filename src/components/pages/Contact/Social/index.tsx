import styles from "./social.module.scss";

const Social = () => (
  <div className={styles.social}>
    <h2>My social networks</h2>
    <ul>
      <li>
        <img alt="email Icon" src="/images/icons/white/email.svg" />
        <a href="mailto:silash35@gmail.com" title="Silas Henrique's e-mail address">
          silash35@gmail.com
        </a>
      </li>
      <li>
        <img alt="Whatsapp Icon" src="/images/icons/white/whatsapp.svg" />
        <a href="tel:+5571987529296" title="Phone number of Silas Henrique">
          +55 71 98752-9296
        </a>
      </li>
      <li>
        <img alt="twitter Icon" src="/images/icons/white/twitter.svg" />
        <a
          href="https://twitter.com/silash35"
          rel="noopener noreferrer"
          target="_blank"
          title="twitter of Silas Henrique"
        >
          @silash35
        </a>
      </li>
      <li>
        <img alt="github Icon" src="/images/icons/white/github.svg" />
        <a
          href="https://github.com/silash35"
          rel="noopener noreferrer"
          target="_blank"
          title="GitHub of Silas Henrique"
        >
          @silash35
        </a>
      </li>
      <li>
        <img alt="instagram Icon" src="/images/icons/white/instagram.svg" />
        <a
          href="https://www.instagram.com/silash35a/"
          rel="noopener noreferrer"
          target="_blank"
          title="Instagram of Silas Henrique"
        >
          @silash35a
        </a>
      </li>
    </ul>
  </div>
);

export default Social;
