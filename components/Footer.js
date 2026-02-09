import { Typography, Container, Grid } from "@mui/material";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About
            </Typography>
            <div className={styles.footerLinks}>
              <Link href="/about-us" className={styles.footerLink}>
                About Us
              </Link>
              <Link href="/contact" className={styles.footerLink}>
                Contact
              </Link>
              <Link href="/blog" className={styles.footerLink}>
                Blog
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Resources
            </Typography>
            <div className={styles.footerLinks}>
              <Link href="/faq" className={styles.footerLink}>
                FAQ
              </Link>
              <Link href="/contact" className={styles.footerLink}>
                Contact
              </Link>
              <Link href="/help" className={styles.footerLink}>
                Help Center
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Legal
            </Typography>
            <div className={styles.footerLinks}>
              <Link href="/privacy-policy" className={styles.footerLink}>
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className={styles.footerLink}>
                Terms of Service
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Connect With Us
            </Typography>
            <div className={styles.socialLinks}>
              <a href="https://facebook.com" target="_blank" rel="noopener" className={styles.socialLink}>
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener" className={styles.socialLink}>
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener" className={styles.socialLink}>
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener" className={styles.socialLink}>
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </div>
          </Grid>
        </Grid>
        <div className={styles.copyright}>
          <Typography variant="body2" color="textSecondary">
            © {new Date().getFullYear()} Quiz Interview. All rights reserved.
          </Typography>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
