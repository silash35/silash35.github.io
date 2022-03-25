import styles from "./social.module.scss";

const Social = () => {
  return (
    <section className={styles.links}>
      <h2>My social networks</h2>
      <ul>
        <li>
          <img src="/images/icons/white/email.svg" alt="email Icon" />
          <a href="mailto:silash35@gmail.com" title="Silas Henrique's e-mail address">
            silash35@gmail.com
          </a>
        </li>
        <li>
          <img src="/images/icons/white/whatsapp.svg" alt="Whatsapp Icon" />
          <a href="tel:+5571987529296" title="Phone number of Silas Henrique">
            +55 71 98752-9296
          </a>
        </li>
        <li>
          <img src="/images/icons/white/twitter.svg" alt="twitter Icon" />
          <a
            href="https://twitter.com/silash35"
            title="twitter of Silas Henrique"
            target="_blank"
            rel="noopener noreferrer"
          >
            @silash35
          </a>
        </li>
        <li>
          <img src="/images/icons/white/github.svg" alt="github Icon" />
          <a
            href="https://github.com/silash35"
            title="GitHub of Silas Henrique"
            target="_blank"
            rel="noopener noreferrer"
          >
            @silash35
          </a>
        </li>
        <li>
          <img src="/images/icons/white/instagram.svg" alt="instagram Icon" />
          <a
            href="https://www.instagram.com/silash35a/"
            title="Instagram of Silas Henrique"
            target="_blank"
            rel="noopener noreferrer"
          >
            @silash35a
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Social;
