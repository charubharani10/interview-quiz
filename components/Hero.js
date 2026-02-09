import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

import styles from "../styles/OurServices.module.css";
// import heroImage from "../public/images/hero.svg";

const questions = [
  {
    question: "Which number completes the sequence? 2, 4, 6, 8, ____?",
    options: ["10", "12", "14", "16"],
    redirectTo: "/test/logical-reasoning/beginner",
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Transfer Markup Language",
    ],
    redirectTo: "/test/html/beginner",
  },
  {
    question: "If a square has four sides, how many sides does a hexagon have?",
    options: ["Four", "Five", "Six", "Eight"],
    redirectTo: "/test/abstract-reasoning/beginner",
  },
  {
    question: "What is the result of 5 + '5' in JavaScript?",
    options: ['"55"', "10", "NaN", "5"],
    redirectTo: "/test/javascript/beginner",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
    ],
    redirectTo: "/test/css/beginner",
  },
  {
    question: "How do you use props in a React component?",
    options: [
      "By accessing this.props in class components",
      "By accessing props directly in functional components",
      "By passing props as arguments to the component",
      "All of the above",
    ],
    redirectTo: "/test/reactjs/beginner",
  },
];

const Hero = () => {
  const refs = useRef([]);
  const questionRef = useRef(null);
  const router = useRouter();
  const [currQuestion, setCurrentQuestion] = useState(questions[0]);
  //   const [quesTransition, setQuesTransition] = useState(false)

  const handleRedirect = (url) => {
    router.push(url); // replace '/target-page' with your destination route
  };

  useEffect(() => {
    let timer = null;
    let qTimer = null;
    let qIndex = 1;

    /** This is radio button animation START */
    if (refs.current?.length) {
      const radios = refs.current;
      let index = 0;

      function startAnimation() {
        // Clear any previous ripple animation
        radios.forEach((radio) => {
          radio.querySelector(".MuiTouchRipple-root").style.animation = "none";
        });

        // Trigger ripple animation for the current radio button
        const currentRadio = radios[index].querySelector(
          ".MuiTouchRipple-root"
        );
        currentRadio.style.animation =
          "ripple-animation 0.75s ease-in-out forwards";

        // Move to the next radio button after 1 second
        index = (index + 1) % radios.length; // Loop back to the first radio button
      }

      //   Start the animation sequence with 1-second intervals
      timer = setInterval(startAnimation, 1000);
    }
    /** This is radio button animation END */

    if (questionRef.current) {
      /** This is fade animation next question START, also setting the new question */
      function nextQestionAnimation() {
        if (questions.length - 1 === qIndex) {
          qIndex = 0;
        }

        //questionRef.current.classList.add(styles.visible);

        questionRef.current.style.animation =
          "next-question-animation 0.75s ease-in-out forwards";
        const qAnimationTimer = setTimeout(() => {
          if (questionRef?.current) {
            questionRef.current.style.animation = "none";
          }
          clearTimeout(qAnimationTimer);
        }, 1000);
        setCurrentQuestion(questions[qIndex++]);
      }

      qTimer = setInterval(nextQestionAnimation, 5000);
      /** This is fade animation next question END */
    }

    return () => {
      clearInterval(timer);
      clearInterval(qTimer);
    };
  }, [refs]);

  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroleft}>
          <Typography variant="h1" gutterBottom>
            Ace Your Job Interview with Free Interactive Quizzes
          </Typography>
          <Typography variant="body1" gutterBottom>
            Master the art of job interviews with our comprehensive, free
            quizzes.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Practice common and technical interview questions, and receive
            instant feedback.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ marginBottom: "1rem" }}
          >
            Walk into your interview with confidence!
          </Typography>
          {/* <img
            src={heroImage?.src}
            alt="Ace Your Job Interview"
            title="Ace Your Job Interview"
            className={styles.heroImage}
          /> */}
        </div>
        <div className={styles.heroright} ref={questionRef}>
          <Typography
            variant="body1"
            gutterBottom
            textAlign="left"
            // fontSize="1.5rem"
            fontWeight="600"
            className={styles.heroQuestion}
          >
            {currQuestion?.question}
          </Typography>
          <RadioGroup
            aria-label="quiz"
            name="quiz"
            value="quiz"
            onClick={() => handleRedirect(`${currQuestion?.redirectTo}`)}
          >
            <FormControlLabel
              control={
                <Radio
                  ref={(el) => (refs.current[0] = el)}
                  className={`${styles.options} ${styles.option1}`}
                />
              }
              label={currQuestion?.options[0]}
            />
            <FormControlLabel
              control={
                <Radio
                  ref={(el) => (refs.current[1] = el)}
                  className={`${styles.options} ${styles.option2}`}
                />
              }
              label={currQuestion?.options[1]}
            />
            <FormControlLabel
              control={
                <Radio
                  ref={(el) => (refs.current[2] = el)}
                  className={`${styles.options} ${styles.option3}`}
                />
              }
              label={currQuestion?.options[2]}
            />
            <FormControlLabel
              control={
                <Radio
                  ref={(el) => (refs.current[3] = el)}
                  className={`${styles.options} ${styles.option4}`}
                />
              }
              label={currQuestion?.options[3]}
            />
          </RadioGroup>
        </div>

        <Button
          variant="contained"
          color="secondary"
          type="light"
          onClick={() => handleRedirect(`${currQuestion?.redirectTo}`)}
        >
          Start Practicing Now
        </Button>
      </div>
    </>
  );
};

export default Hero;
