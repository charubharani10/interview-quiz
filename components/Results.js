import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  LinearProgress,
  Divider,
} from "@mui/material";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowDown,
  faArrowUp,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Result.module.css";
import theme from "./theme";

const Results = ({ answers, questions }) => {
  const router = useRouter();
  const { skill, level: urlLevel } = router.query;

  const [reviewMode, setReviewMode] = useState(false);
  const [animatedProgress, setAnimatedProgress] = useState(0); // For animation

  const incorrectAnswers = Object.keys(answers).filter(
    (questionIndex) =>
      answers[questionIndex] !== questions[questionIndex]?.correctAnswer
  );

  const handleGoHome = () => {
    router.push("/");
  };

  const handleAttemptLevel = (level) => {
    router.push(`/test/${skill}/${level}`);
  };

  const handleShare = (platform) => {
    const url = encodeURIComponent("https://www.quizinterview.com");
    const text = encodeURIComponent(
      `I scored ${questions.length - incorrectAnswers.length} out of ${
        questions.length
      } in ${skill}!`
    );
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };
    window.open(shareUrls[platform], "_blank");
  };

  const levels = ["beginner", "intermediate", "advanced"];
  const availableLevels = levels.filter((level) => level !== urlLevel);

  const correctAnswersCount = questions.length - incorrectAnswers.length;
  const progress = (correctAnswersCount / questions.length) * 100;

  const getProgressBarColor = () => {
    if (progress <= 50) return theme.palette.error.main;
    if (progress <= 90) return theme.palette.warning.main;
    return theme.palette.success.main;
  };

  const arrowPosition = `${progress}%`;

  // Animate the progress bar on mount
  useEffect(() => {
    setTimeout(() => {
      setAnimatedProgress(progress);
    }, 100); // Small delay for smoother animation
  }, [progress]);

  return (
    <div className={styles.resultWrapper}>
      <Typography variant="h2" gutterBottom className={styles.resultTitle}>
        Result: {correctAnswersCount} of {questions.length} are correct answers!
      </Typography>

      {/* Animated Progress Bar */}
      <Box sx={{ position: "relative", width: "100%", mb: 3 }}>
        <LinearProgress
          variant="determinate"
          value={animatedProgress}
          sx={{
            height: 8,
            backgroundColor: theme.palette.grey[300],
            transition: "width 1s ease-in-out", // Animating the progress bar
            "& .MuiLinearProgress-bar": {
              backgroundColor: getProgressBarColor(),
              transition: "transform 1s ease-in-out",
            },
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "8px",
            left: arrowPosition,
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transition: "left 1s ease-in-out", // Smooth arrow movement
          }}
        >
          <FontAwesomeIcon icon={faDroplet} color={getProgressBarColor()} />
          <Typography variant="body2" sx={{ color: getProgressBarColor() }}>
            {progress.toFixed(2)}%
          </Typography>
        </Box>
      </Box>

      {/* Share Results */}
      <Box
        className={styles.shareContainer}
        sx={{ margin: "3rem 0 2rem", textAlign: "center" }}
      >
        <Typography variant="h4" sx={{ mb: 1 }}>
          Let your friends know!
        </Typography>
        {["facebook", "twitter", "linkedin"].map((platform) => (
          <Button
            key={platform}
            onClick={() => handleShare(platform)}
            variant="text"
            sx={{ color: theme.palette.secondary.main, padding: "0", mr: 2 }}
          >
            <FontAwesomeIcon
              icon={
                platform === "facebook"
                  ? faFacebook
                  : platform === "twitter"
                  ? faTwitter
                  : faLinkedin
              }
            />{" "}
            {platform.charAt(0).toUpperCase() + platform.slice(1)}
          </Button>
        ))}
      </Box>

      {/* Action Buttons */}
      <Box className={styles.resultsButton}>
        <Button color="secondary" variant="contained" onClick={handleGoHome}>
          Go to Home
        </Button>
        {availableLevels.map((level) => (
          <Button
            color="secondary"
            key={level}
            variant="contained"
            onClick={() => handleAttemptLevel(level)}
            sx={{ mr: 2 }}
          >
            Try {level.charAt(0).toUpperCase() + level.slice(1)}
          </Button>
        ))}

        {/* Review Mode */}
        {incorrectAnswers.length > 0 && (
          <>
            <Button
              variant="outlined"
              color={reviewMode ? "error" : "secondary"}
              onClick={() => setReviewMode(!reviewMode)}
            >
              {reviewMode ? (
                <>
                  Exit Review Mode&nbsp;
                  <FontAwesomeIcon icon={faArrowDown} />
                </>
              ) : (
                <>
                  Review Incorrect Answers&nbsp;
                  <FontAwesomeIcon icon={faArrowUp} />
                </>
              )}
            </Button>

            {reviewMode && (
              <div className={styles.resultContainer}>
                {incorrectAnswers.map((questionIndex) => (
                  <Box key={questionIndex} mt={2} sx={{ textAlign: "left" }}>
                    <Typography variant="h6" gutterBottom>
                      Review Question {parseInt(questionIndex) + 1}:
                    </Typography>
                    <Typography variant="body1">
                      <strong>Question:</strong>{" "}
                      {questions[questionIndex]?.question}
                    </Typography>
                    <Typography variant="body1" color="error">
                      <strong>Your Answer:</strong> {answers[questionIndex]}
                    </Typography>
                    <Typography variant="body1" color="success">
                      <strong>Correct Answer:</strong>{" "}
                      {questions[questionIndex]?.correctAnswer}
                    </Typography>
                    <Typography variant="body1" color="success">
                      <strong>Explanation:</strong>
                      <blockquote className={styles.blockquote}>
                        {questions[questionIndex]?.explanation}
                      </blockquote>
                    </Typography>
                    <Divider sx={{ marginTop: "1rem" }} />
                  </Box>
                ))}
              </div>
            )}
          </>
        )}
      </Box>
    </div>
  );
};

export default Results;
