import Link from "next/link";
import { Typography } from "@mui/material";

import Meta from "../components/Meta";

import styles from "../styles/Privacy.module.css";
import { titlesMeta } from "../utils/titles";

const Privacy = () => {
  return (
    <div className={styles.privacyWrapper}>
      <Meta
        title={titlesMeta.privacy.title}
        description={titlesMeta.privacy.description}
        canonical="https://www.quizinterview.com/privacy-policy"
      />
      <Typography variant="h1" gutterBottom>
        Privacy Policy
      </Typography>

      <Typography variant="h2" gutterBottom>
        Welcome to Quiz Interview!
      </Typography>

      <Typography variant="body1" gutterBottom>
        We are committed to protecting your privacy. This Privacy Policy
        explains how we handle any information related to your use of our
        website.
      </Typography>

      <Typography variant="h2" gutterBottom>
        Information We Do Not Collect
      </Typography>

      <Typography variant="body1" gutterBottom>
        At Quiz Interview, we do not collect, store, or process any personal
        information from our users. Your privacy is important to us, and we
        ensure that no personal data is gathered during your use of our website.
      </Typography>

      <Typography variant="h2" gutterBottom>
        Analytics
      </Typography>

      <Typography variant="body1" gutterBottom>
        We use analytics tools to monitor and analyze website behavior to
        improve our services and user experience. These tools help us understand
        how visitors interact with our site, including metrics like page views,
        visit duration, and user engagement. However, this data is collected in
        a manner that does not identify individual users and is used solely for
        enhancing our website's performance.
      </Typography>

      <Typography variant="h2" gutterBottom>
        Cookies and Third-Party Services
      </Typography>

      <Typography variant="body1" gutterBottom>
        Our website may use cookies to enhance your browsing experience. Cookies are small text files stored on your device that help us remember your preferences and improve site functionality. We may also use third-party services (such as analytics providers) that use cookies to collect anonymous data. You can control cookie settings through your browser preferences. By using our site, you consent to the use of cookies as described in this policy.
      </Typography>

      <Typography variant="h2" gutterBottom>
        Free to Use
      </Typography>

      <Typography variant="body1" gutterBottom>
        Our website is entirely free to use. We do not charge any fees or
        require any subscriptions to access our content. You can enjoy all the
        features and resources without any cost.
      </Typography>

      <Typography variant="h2" gutterBottom>
        No Personal Tracking
      </Typography>

      <Typography variant="body1" gutterBottom>
        While we use analytics to monitor website behavior, we do not engage in
        tracking personal data. We do not use technologies that collect
        identifiable information or target specific users.
      </Typography>

      <Typography variant="h2" gutterBottom>
        Changes to This Policy
      </Typography>

      <Typography variant="body1" gutterBottom>
        We may update this Privacy Policy from time to time to reflect changes
        in our practices. Any updates will be posted on this page, and we
        encourage you to review it periodically.
      </Typography>

      <Typography variant="h2" gutterBottom>
        Contact Us
      </Typography>

      <Typography variant="body1" gutterBottom>
        If you have any questions or concerns about our Privacy Policy, please
        contact us at{" "}
        <Link href="mailto:pixelxpr@gmail.com" target="_blank">
          pixelxpr
        </Link>
        .
      </Typography>

      <Typography variant="body1" gutterBottom>
        Thank you for using Quiz Interview.
      </Typography>
    </div>
  );
};

export default Privacy;
