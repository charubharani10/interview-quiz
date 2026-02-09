import { Typography, Container, Grid, Card, CardContent, Button, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faQuestionCircle, faVideo, faHeadset } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import Meta from "../components/Meta";
import styles from "../styles/Help.module.css";
import { titlesMeta } from "../utils/titles";

const Help = () => {
  const helpResources = [
    {
      title: "Documentation",
      description: "Detailed guides and documentation to help you get started with Quiz Interview.",
      icon: faBook,
      link: "/docs",
    },
    {
      title: "FAQ",
      description: "Find answers to frequently asked questions about our platform.",
      icon: faQuestionCircle,
      link: "/faq",
    },
    {
      title: "Video Tutorials",
      description: "Watch video tutorials to learn how to make the most of Quiz Interview.",
      icon: faVideo,
      link: "/tutorials",
    },
    {
      title: "Contact Support",
      description: "Need more help? Our support team is here to assist you.",
      icon: faHeadset,
      link: "/contact",
    },
  ];

  return (
    <Container maxWidth="lg" className={styles.helpWrapper}>
      <Meta
        title={titlesMeta.help?.title || "Help & Support - Quiz Interview"}
        description={titlesMeta.help?.description || "Get help and support for Quiz Interview. Find documentation, FAQs, tutorials, and contact information."}
        canonical="https://www.quizinterview.com/help"
      />

      <Typography variant="h1" gutterBottom>
        Help & Support
      </Typography>

      <Typography variant="body1" className={styles.intro} gutterBottom>
        Welcome to the Quiz Interview Help Center. Here you'll find resources to help you get the most out of our platform.
      </Typography>

      <Grid container spacing={4} className={styles.resourcesGrid}>
        {helpResources.map((resource, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card className={styles.resourceCard}>
              <CardContent>
                <Box className={styles.iconWrapper}>
                  <FontAwesomeIcon icon={resource.icon} className={styles.icon} />
                </Box>
                <Typography variant="h3" gutterBottom>
                  {resource.title}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {resource.description}
                </Typography>
                <Button
                  component={Link}
                  href={resource.link}
                  variant="contained"
                  color="primary"
                  className={styles.resourceButton}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box className={styles.contactSection}>
        <Typography variant="h2" gutterBottom>
          Still Need Help?
        </Typography>
        <Typography variant="body1" gutterBottom>
          If you couldn't find what you're looking for, our support team is ready to help you.
        </Typography>
        <Button
          component={Link}
          href="/contact"
          variant="contained"
          color="primary"
          size="large"
          className={styles.contactButton}
        >
          Contact Support
        </Button>
      </Box>
    </Container>
  );
};

export default Help; 