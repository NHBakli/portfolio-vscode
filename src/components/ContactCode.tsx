import styles from "../style/ContactCode.module.css";

const contactItems = [
  {
    social: "website",
    link: "nhbakli.me",
    href: "https://nhbakli.me",
  },
  {
    social: "email",
    link: "clementhamimi@gmail.com",
    href: "mailto:clementhamimi@gmail.com",
  },
  {
    social: "github",
    link: "nhbakli",
    href: "https://github.com/nhbakli",
  },
  {
    social: "linkedin",
    link: "Clément Hamimi",
    href: "https://www.linkedin.com/in/Clément-Hamimi/",
  },
  {
    social: "twitter",
    link: "NHBakli",
    href: "https://www.twitter.com/nhbakli",
  },
  {
    social: "instagram",
    link: "NHBakli",
    href: "https://www.instagram.com/nhbakli",
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
