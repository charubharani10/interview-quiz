import Link from "next/link";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

import Meta from "../components/Meta";

import styles from "../styles/Terms.module.css";
import { titlesMeta } from "../utils/titles";

const Terms = () => {
  return (
    <div className={styles.termsWrapper}>
      <Meta
        title={titlesMeta.terms.title}
        description={titlesMeta.terms.description}
        canonical="https://www.quizinterview.com/terms-of-service"
      />
      <Typography variant="h1" gutterBottom>
        Terms of Service
      </Typography>
      <Typography variant="h2" gutterBottom>
        Welcome to Quiz Interview!
      </Typography>
      <Typography variant="body1" gutterBottom>
        By using our website and services, you agree to the following terms and
        conditions. Please read them carefully.
      </Typography>
      <Typography variant="h2" gutterBottom>
        Acceptance of Terms
      </Typography>
      <Typography variant="body1" gutterBottom>
        By accessing or using Quiz Interview, you agree to comply with and be
        bound by these Terms of Service. If you do not agree with any part of
        these terms, please do not use our website.
      </Typography>
      <Typography variant="h2" gutterBottom>
        Use of Website
      </Typography>
      <Typography variant="body1" gutterBottom>
        You may use our website and services only for lawful purposes and in
        accordance with these Terms of Service. You agree not to use the site:
      </Typography>

      <Typography variant="h2">What We Offer</Typography>
      <List sx={{ listStyleType: "disc", paddingLeft: 2 }}>
        <ListItem sx={{ display: "list-item", padding: "0" }}>
          <ListItemText>For any illegal or unauthorized purpose.</ListItemText>
        </ListItem>
        <ListItem sx={{ display: "list-item", padding: "0" }}>
          <ListItemText>
            To transmit any content that is harmful, threatening, defamatory,
            obscene, or otherwise objectionable.
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: "list-item", padding: "0" }}>
          <ListItemText>
            To disrupt or interfere with the functioning of the website or the
            servers and networks connected to it.
          </ListItemText>
        </ListItem>
      </List>
      <Typography variant="h2" gutterBottom>
        Content and Intellectual Property
      </Typography>
      <Typography variant="body1" gutterBottom>
        All content on Quiz Interview, including but not limited to text,
        graphics, and quizzes, is the property of Quiz Interview or its
        licensors and is protected by copyright, trademark, and other
        intellectual property laws.
      </Typography>
      <Typography variant="body1" gutterBottom>
        You may not reproduce, distribute, or create derivative works from any
        content on our site without our express written permission.
      </Typography>

      <Typography variant="h2" gutterBottom>
        User-Generated Content
      </Typography>

      <Typography variant="body1" gutterBottom>
        If you submit or post content on our website, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, and display such content. You are solely responsible for the content you submit and must ensure it does not violate any third-party rights or applicable laws.
      </Typography>

      <Typography variant="h2" gutterBottom>
        Third-Party Links
      </Typography>

      <Typography variant="body1" gutterBottom>
        Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of these external sites. We encourage you to review the terms and policies of any third-party sites you visit.
      </Typography>

      <Typography variant="h2" gutterBottom>
        Limitation of Liability
      </Typography>
      <Typography variant="body1" gutterBottom>
        Quiz Interview is not liable for any direct, indirect, incidental,
        consequential, or punitive damages arising from your use of the website
        or any content therein. We make no guarantees about the accuracy or
        reliability of the content.
      </Typography>
      <Typography variant="h2" gutterBottom>
        Changes to Terms
      </Typography>
      <Typography variant="body1" gutterBottom>
        We reserve the right to update or modify these Terms of Service at any
        time. Your continued use of the website following any changes
        constitutes your acceptance of the new terms. We encourage you to review
        these terms periodically.
      </Typography>
      <Typography variant="h2" gutterBottom>
        Termination
      </Typography>
      <Typography variant="body1" gutterBottom>
        We may terminate or suspend your access to the website at our sole
        discretion, without notice, for any reason, including but not limited to
        a breach of these Terms of Service.
      </Typography>
      <Typography variant="h2" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" gutterBottom>
        If you have any questions about these Terms of Service, please contact
        us at{" "}
        <Link href="mailto:pixelxpr@gmail.com" target="_blank">
          pixelxpr
        </Link>
        .
      </Typography>
    </div>
  );
};

export default Terms;
