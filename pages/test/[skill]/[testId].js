import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Box,
  Paper,
  CircularProgress,
  Alert,
  LinearProgress,
  Chip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as fasBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import Meta from "../../../components/Meta";
import { titlesMeta } from "../../../utils/titles";
import styles from "../../../styles/Test.module.css";

const Test = () => {
  const router = useRouter();
  const { skill, testId } = router.query;
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showReview, setShowReview] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState(new Set());
  const [flaggedQuestions, setFlaggedQuestions] = useState(new Set());
  const [showConfirmFinish, setShowConfirmFinish] = useState(false);

  useEffect(() => {
    if (skill && testId) {
      loadQuestions();
    }
  }, [skill, testId]);

  useEffect(() => {
    if (timeLeft > 0 && !reviewMode) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      handleFinish();
    }
  }, [timeLeft, reviewMode]);

  const loadQuestions = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/questions/${skill}/${testId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch questions');
      }
      const questions = await response.json();
      setQuestions(questions);
      setTimeLeft(questions.length * 60); // 1 minute per question
      setIsLoading(false);
    } catch (err) {
      console.error('Error loading questions:', err);
      setError(`Failed to load questions: ${err.message}`);
      setIsLoading(false);
    }
  };

  const handleAnswerSelect = (event) => {
    const newAnswers = { ...answers };
    newAnswers[currentQuestion] = event.target.value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleJumpToQuestion = (index) => {
    setCurrentQuestion(index);
  };

  const handleFinish = () => {
    const score = calculateScore();
    router.push({
      pathname: "/results",
      query: {
        score,
        total: questions.length,
        skill,
        testId,
      },
    });
  };

  const calculateScore = () => {
    return Object.entries(answers).reduce((score, [index, answer]) => {
      return answer === questions[index].correctAnswer ? score + 1 : score;
    }, 0);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const toggleBookmark = () => {
    const newBookmarked = new Set(bookmarkedQuestions);
    if (newBookmarked.has(currentQuestion)) {
      newBookmarked.delete(currentQuestion);
    } else {
      newBookmarked.add(currentQuestion);
    }
    setBookmarkedQuestions(newBookmarked);
  };

  const toggleFlag = () => {
    const newFlagged = new Set(flaggedQuestions);
    if (newFlagged.has(currentQuestion)) {
      newFlagged.delete(currentQuestion);
    } else {
      newFlagged.add(currentQuestion);
    }
    setFlaggedQuestions(newFlagged);
  };

  const getQuestionStatus = (index) => {
    if (bookmarkedQuestions.has(index)) return 'bookmarked';
    if (flaggedQuestions.has(index)) return 'flagged';
    if (answers[index]) return 'answered';
    return 'unanswered';
  };

  const progress = (Object.keys(answers).length / questions.length) * 100;

  if (isLoading) {
    return (
      <Container className={styles.loadingContainer}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container className={styles.errorContainer}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  if (!questions.length) {
    return null;
  }

  return (
    <Container maxWidth="lg" className={styles.container}>
      <Meta
        title={titlesMeta[skill]?.title || "Quiz - Quiz Interview"}
        description={titlesMeta[skill]?.description || "Test your knowledge with our interactive quiz."}
        canonical={`https://www.quizinterview.com/test/${skill}/${testId}`}
      />

      <Box className={styles.header}>
        <Typography variant="h1" className={styles.title}>
          {skill.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")} - Test {testId}
        </Typography>
        <Box className={styles.progressInfo}>
          <Typography variant="body1" className={styles.timer}>
            Time Left: {formatTime(timeLeft)}
          </Typography>
          <Typography variant="body1">
            Progress: {Math.round(progress)}% ({Object.keys(answers).length}/{questions.length})
          </Typography>
        </Box>
        <LinearProgress 
          variant="determinate" 
          value={progress} 
          className={styles.progressBar}
        />
      </Box>

      <Box className={styles.mainContent}>
        <Paper className={styles.questionNav}>
          <Typography variant="h6" gutterBottom>
            Questions
          </Typography>
          <Box className={styles.questionGrid}>
            {questions.map((_, index) => (
              <Chip
                key={index}
                label={index + 1}
                onClick={() => handleJumpToQuestion(index)}
                color={getQuestionStatus(index) === 'answered' ? "primary" : "default"}
                variant={currentQuestion === index ? "filled" : "outlined"}
                className={`${styles.questionChip} ${styles[getQuestionStatus(index)]}`}
              />
            ))}
          </Box>
          <Box className={styles.legend}>
            <Typography variant="body2">
              <span className={styles.legendItem}>● Answered</span>
              <span className={styles.legendItem}>◯ Unanswered</span>
              <span className={styles.legendItem}>⚑ Flagged</span>
              <span className={styles.legendItem}>★ Bookmarked</span>
            </Typography>
          </Box>
        </Paper>

        <Paper className={styles.questionCard}>
          <Box className={styles.questionHeader}>
            <Typography variant="h3" className={styles.questionNumber}>
              Question {currentQuestion + 1} of {questions.length}
            </Typography>
            <Box>
              <IconButton onClick={toggleBookmark} color={bookmarkedQuestions.has(currentQuestion) ? "primary" : "default"}>
                <FontAwesomeIcon 
                  icon={bookmarkedQuestions.has(currentQuestion) ? fasBookmark : farBookmark} 
                  className={styles.icon}
                />
              </IconButton>
              <IconButton onClick={toggleFlag} color={flaggedQuestions.has(currentQuestion) ? "error" : "default"}>
                <FontAwesomeIcon 
                  icon={faFlag} 
                  className={styles.icon}
                />
              </IconButton>
            </Box>
          </Box>

          <Typography variant="body1" className={styles.question}>
            {questions[currentQuestion].question}
          </Typography>

          <RadioGroup
            value={answers[currentQuestion] || ""}
            onChange={handleAnswerSelect}
            className={styles.options}
          >
            {questions[currentQuestion].options.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option}
                control={<Radio />}
                label={option}
                className={styles.option}
              />
            ))}
          </RadioGroup>

          {reviewMode && (
            <Box className={styles.explanation}>
              <Typography variant="h4">Explanation:</Typography>
              <Typography variant="body1">
                {questions[currentQuestion].explanation}
              </Typography>
            </Box>
          )}

          <Box className={styles.actions}>
            <Button
              variant="outlined"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>
            <Button
              variant="outlined"
              onClick={handleNext}
              disabled={currentQuestion === questions.length - 1}
            >
              Next
            </Button>
            {currentQuestion === questions.length - 1 && (
              <Button
                variant="contained"
                color="primary"
                onClick={() => setShowConfirmFinish(true)}
                disabled={Object.keys(answers).length !== questions.length}
              >
                Finish Test
              </Button>
            )}
          </Box>
        </Paper>
      </Box>

      <Dialog
        open={showConfirmFinish}
        onClose={() => setShowConfirmFinish(false)}
      >
        <DialogTitle>Finish Test?</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to finish the test? You won't be able to change your answers after submitting.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowConfirmFinish(false)}>Cancel</Button>
          <Button onClick={handleFinish} color="primary" variant="contained">
            Submit Test
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Test; 