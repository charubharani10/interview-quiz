import { useState } from "react";
import { Typography, Container, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Meta from "../components/Meta";
import styles from "../styles/FAQ.module.css";
import { titlesMeta } from "../utils/titles";

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      question: "What is Quiz Interview?",
      answer: "Quiz Interview is a comprehensive platform designed to help you prepare for job interviews through interactive quizzes and tests. We cover various topics including technical interviews, behavioral questions, aptitude tests, and more."
    },
    {
      question: "Is Quiz Interview free to use?",
      answer: "Yes, Quiz Interview is completely free to use. We believe in providing accessible learning resources to everyone."
    },
    {
      question: "What types of quizzes are available?",
      answer: "We offer a wide range of quizzes including: Technical Interviews (Programming, Data Structures), Behavioral Interviews, Situational Interviews, Aptitude Tests, and Reasoning Quizzes."
    },
    {
      question: "How do I track my progress?",
      answer: "Currently, we provide immediate feedback after each quiz. We're working on adding a progress tracking system in the future."
    },
    {
      question: "Can I use Quiz Interview on mobile devices?",
      answer: "Yes, Quiz Interview is fully responsive and works on all devices including smartphones and tablets."
    },
    {
      question: "How often are the quizzes updated?",
      answer: "We regularly update our quiz content to ensure it remains relevant and aligned with current industry standards and interview practices."
    },
    {
      question: "Do I need to create an account?",
      answer: "No, you can access all quizzes without creating an account. However, creating an account will allow you to track your progress in the future."
    },
    {
      question: "How can I report an issue or suggest improvements?",
      answer: "You can report issues or suggest improvements through our Contact page. We value user feedback and continuously work to improve our platform."
    }
  ];

  return (
    <Container maxWidth="lg" className={styles.faqWrapper}>
      <Meta
        title={titlesMeta.faq?.title || "Frequently Asked Questions - Quiz Interview"}
        description={titlesMeta.faq?.description || "Find answers to common questions about Quiz Interview. Learn about our features, how to use the platform, and more."}
        canonical="https://www.quizinterview.com/faq"
      />

      <Typography variant="h1" gutterBottom>
        Frequently Asked Questions
      </Typography>

      <Typography variant="body1" className={styles.intro} gutterBottom>
        Find answers to the most common questions about Quiz Interview. If you don't find what you're looking for, feel free to contact us.
      </Typography>

      <div className={styles.accordionContainer}>
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            className={styles.accordion}
          >
            <AccordionSummary
              expandIcon={<FontAwesomeIcon icon={faChevronDown} />}
              className={styles.accordionSummary}
            >
              <Typography variant="h6">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </Container>
  );
};

export default FAQ; 