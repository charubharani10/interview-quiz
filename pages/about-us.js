import Link from "next/link";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

import Meta from "../components/Meta";

import styles from "../styles/Aboutus.module.css";
import { titlesMeta } from "../utils/titles";

const Aboutus = () => {
  return (
    <div className={styles.aboutusWrapper}>
      <Meta
        title={titlesMeta.aboutus.title}
        description={titlesMeta.aboutus.description}
        canonical="https://www.quizinterview.com/about-us"
      />
      <Typography variant="h1" gutterBottom>
        About Us
      </Typography>
      <Typography variant="h2" gutterBottom>
        Welcome to Quiz Interview!
      </Typography>

      <Typography variant="body1" gutterBottom>
        At Quiz Interview, our mission is to provide an engaging and accessible
        platform for individuals looking to enhance their skills and knowledge
        through quizzes and tests. Whether you're preparing for an interview,
        brushing up on technical skills, or simply love learning, our website
        offers a comprehensive range of quizzes across various topics to suit
        your needs.
      </Typography>

      <Typography variant="h2" gutterBottom>
        Our Purpose
      </Typography>

      <Typography variant="body1" gutterBottom>
        We created Quiz Interview to help users excel in their learning journey
        with a user-friendly, free-to-use platform. Our quizzes cover a broad
        spectrum of subjects, including HTML, CSS, JavaScript, React, Python,
        and more, tailored to different levels of expertise—from beginner to
        advanced.
      </Typography>

      <Typography variant="h2">What We Offer</Typography>
      <List sx={{ listStyleType: "disc", paddingLeft: 2 }}>
        <ListItem sx={{ display: "list-item", padding: "0" }}>
          <ListItemText>
            <strong>Diverse Quiz Categories:</strong> From fundamental concepts
            to advanced topics, our quizzes are designed to challenge and expand
            your knowledge.
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: "list-item", padding: "0" }}>
          <ListItemText>
            <strong>User-Friendly Experience:</strong> Navigate through our
            quizzes with ease and enjoy a seamless experience.
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: "list-item", padding: "0" }}>
          <ListItemText>
            <strong>Free Access:</strong> Access all our quizzes and resources
            at no cost. We believe in providing valuable content without any
            financial barriers.
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: "list-item", padding: "0" }}>
          <ListItemText>
            <strong>Analytics for Improvement:</strong> We use analytics to
            understand how visitors interact with our site, enabling us to
            continually enhance our content and user experience.
          </ListItemText>
        </ListItem>
      </List>

      <Typography variant="h2" gutterBottom>
        Our Commitment
      </Typography>

      <Typography variant="body1" gutterBottom>
        We are committed to providing high-quality, relevant content to support
        your learning goals. Our team is dedicated to updating and expanding our
        quiz offerings, ensuring you have access to the latest information and
        best practices in your field of interest.
      </Typography>

      <Typography variant="h2" gutterBottom>
        Our Team
      </Typography>

      <Typography variant="body1" gutterBottom>
        Quiz Interview was founded by a team of passionate educators and developers with over 10 years of experience in online learning. Our diverse team brings together expertise in education, technology, and content creation to deliver a seamless and enriching learning experience for our users.
      </Typography>

      <Typography variant="h2" gutterBottom>
        Get In Touch
      </Typography>

      <Typography variant="body1" gutterBottom>
        We value your feedback and are here to help. If you have any questions,
        suggestions, or need assistance, please feel free to reach out to us at{" "}
        <Link href="mailto:pixelxpr@gmail.com" target="_blank">
          pixelxpr
        </Link>
        .
      </Typography>

      <Typography variant="body1" gutterBottom>
        Thank you for visiting Quiz Interview. We're excited to be a part of
        your learning journey!
      </Typography>
    </div>
  );
};

export default Aboutus;
