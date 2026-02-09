import { useRef } from "react";
import { useRouter } from "next/router";
import { Button, List, ListItem, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faCogs,
  faFingerprint,
  faGavel,
  faGraduationCap,
  faPuzzlePiece,
  faSearch,
  faStar,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

import OurServicesItem from "./OurServicesItem";
import Hero from "./Hero";
import LinkList from "./StyledLink";

import useOnScreen from "../utils/useOnScreen";
import { linksList } from "../utils/links";

import styles from "../styles/OurServices.module.css";

const OurServices = () => {
  const router = useRouter();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  // Use the custom hook with an array of refs
  const isIntersecting = useOnScreen([ref1, ref2, ref3, ref4, ref5]);

  const handleRedirect = (url) => {
    router.push(url); // replace '/target-page' with your destination route
  };
  return (
    <div className={styles.services_wrapper} id="our-services">
      <Hero />
      <Typography variant="h2" gutterBottom sx={{ marginTop: "2rem" }}>
        <FontAwesomeIcon icon={faStar} className={styles.icons} /> Our Top Job
        Interview Quizzes
      </Typography>
      <div className={styles.services_wrapper_section}>
        <OurServicesItem
          title="Technical Interviews"
          body="Get ready for coding challenges, algorithms, and system design questions with our technical interview quizzes. Ideal for software developers, engineers, and IT professionals."
          icon={<FontAwesomeIcon icon={faCode} className={styles.icons} />}
          links={<LinkList linksList={linksList.programming} />}
        />
        <OurServicesItem
          title="Behavioral Interviews"
          body="Practice your responses to behavioral interview questions. Learn how to articulate your past experiences and demonstrate how you handle various situations."
          icon={
            <FontAwesomeIcon icon={faFingerprint} className={styles.icons} />
          }
          links={<LinkList linksList={linksList.eq.slice(0, 6)} />}
        />

        <OurServicesItem
          title="Situational Interviews"
          body="Prepare for situational interview questions that test your problem-solving and decision-making skills. Practice with real-world scenarios to refine your approach."
          icon={<FontAwesomeIcon icon={faGavel} className={styles.icons} />}
          links={<LinkList linksList={linksList.eq.slice(6, 12)} />}
        />
        <OurServicesItem
          title="Aptitude Tests"
          body="Sharpen your logical reasoning, numerical skills, and verbal aptitude with our comprehensive aptitude tests. Perfect for positions that require sharp analytical skills."
          icon={<FontAwesomeIcon icon={faTrophy} className={styles.icons} />}
          links={<LinkList linksList={linksList.aptitude} />}
        />
        <OurServicesItem
          title="Reasoning Quiz"
          body="Challenge your mind with our comprehensive Reasoning quiz, designed to enhance your analytical thinking and logical problem-solving skills. Perfect for those looking to excel in abstract, verbal, and numerical reasoning tests. Prepare yourself for interviews, competitive exams, and real-world problem-solving scenarios."
          icon={
            <FontAwesomeIcon icon={faPuzzlePiece} className={styles.icons} />
          }
          links={<LinkList linksList={linksList.reasoning} />}
        />
        <OurServicesItem
          title="Data Structures"
          body="Explore the fundamental building blocks of programming with our comprehensive guide on data structures. Learn the theory, implementation, and application of arrays, linked lists, stacks, queues, trees, graphs, and more. Master advanced topics like segment trees, disjoint sets, and suffix arrays to optimize your problem-solving skills."
          icon={<FontAwesomeIcon icon={faCogs} className={styles.icons} />}
          links={<LinkList linksList={linksList.ds} />}
        />
      </div>
      <Typography variant="body1" gutterBottom>
        Each of our quizzes is designed by industry experts to mimic real
        interview conditions. You'll get instant feedback on your performance,
        including tips on how to improve. Whether you're preparing for a
        technical interview or brushing up on your situational judgment, our
        quizzes will help you succeed.
      </Typography>
      {/* <!-- Detailed Quizzes Explanation Section --> */}
      <Typography variant="h2" gutterBottom sx={{ marginTop: "2rem" }}>
        <FontAwesomeIcon icon={faSearch} className={styles.icons} /> In-Depth
        Overview of Our Quizzes
      </Typography>
      <article className={styles.quizDetails}>
        <div>
          <Typography variant="h3" gutterBottom>
            Technical Interviews:
          </Typography>
          <Typography variant="h4" gutterBottom>
            Master Your Coding Skills
          </Typography>

          <Typography variant="body1" gutterBottom>
            Technical interviews can be daunting, but with the right
            preparation, you can excel. Our quizzes focus on core programming
            concepts, algorithms, data structures, and system design questions
            that are commonly asked in tech interviews. Each quiz is timed and
            simulates the pressure of a real technical interview, helping you to
            stay calm under pressure.
          </Typography>
        </div>
        <div>
          <List
            sx={{ listStyleType: "disc", paddingLeft: 2 }}
            ref={ref1}
            className={
              isIntersecting[0] ? styles.intersecting : styles.noIntersecting
            }
          >
            <ListItem
              sx={{
                display: "list-item",
                padding: "0",
                margin: "0.5rem",
              }}
            >
              <Typography variant="body1">
                <strong>Programming Languages:</strong> Python, Java, JavaScript,
                C++, and more
              </Typography>
            </ListItem>
            <ListItem
              sx={{
                display: "list-item",
                padding: "0",
                margin: "0.5rem",
              }}
            >
              <Typography variant="body1">
                <strong>Data Structures:</strong> Arrays, Linked Lists, Trees,
                Graphs, and more
              </Typography>
            </ListItem>
            <ListItem
              sx={{
                display: "list-item",
                padding: "0",
                margin: "0.5rem",
              }}
            >
              <Typography variant="body1">
                <strong>Algorithms:</strong> Sorting, Searching, Dynamic
                Programming, and more
              </Typography>
            </ListItem>
          </List>
        </div>
      </article>

      <article className={styles.quizDetails}>
        <div>
          <Typography variant="h3" gutterBottom>
            Behavioral Interviews:
          </Typography>
          <Typography variant="h4" gutterBottom>
            Tell Your Story Effectively
          </Typography>
          <Typography variant="body1" gutterBottom>
            Behavioral interviews are all about demonstrating how your past
            experiences have prepared you for the role you're applying for. Our
            quizzes cover a wide range of behavioral questions, helping you
            craft responses that highlight your strengths, showcase your
            problem-solving skills, and align with the company's values.
          </Typography>
        </div>
        <div>
          <List
            sx={{ listStyleType: "disc", paddingLeft: 2 }}
            ref={ref2}
            className={
              isIntersecting[1] ? styles.intersecting : styles.noIntersecting
            }
          >
            <ListItem
              sx={{
                display: "list-item",
                padding: "0",
                margin: "0.5rem",
              }}
            >
              <Typography variant="body1">
                <strong>Common Questions:</strong> STAR Method, Leadership
                Examples, Conflict Resolution
              </Typography>
            </ListItem>
            <ListItem
              sx={{
                display: "list-item",
                padding: "0",
                margin: "0.5rem",
              }}
            >
              <Typography variant="body1">
                <strong>Scenario Practice:</strong> Teamwork, Adaptability,
                Leadership
              </Typography>
            </ListItem>
            <ListItem
              sx={{
                display: "list-item",
                padding: "0",
                margin: "0.5rem",
              }}
            >
              <Typography variant="body1">
                <strong>Feedback:</strong> Detailed Analysis on How to Improve
                Your Responses
              </Typography>
            </ListItem>
          </List>
          <Typography variant="body1" gutterBottom>
            With our quizzes, you'll learn how to tell your story in a way that
            resonates with interviewers.
          </Typography>
        </div>
      </article>
    </div>
  );
};

export default OurServices;
