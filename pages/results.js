import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Container,
  Typography,
  Paper,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  CircularProgress
} from '@mui/material';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import Meta from "../components/Meta";
import styles from '../styles/Results.module.css';

const Results = () => {
  const router = useRouter();
  const { score, total, skill, testId } = router.query;
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      if (skill && testId) {
        try {
          const response = await fetch(`/api/questions/${skill}/${testId}`);
          const data = await response.json();
          setQuestions(data);
        } catch (error) {
          console.error('Error fetching questions:', error);
        }
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [skill, testId]);

  if (!score || !total || loading) {
    return (
      <Container className={styles.loadingContainer}>
        <CircularProgress />
      </Container>
    );
  }

  const percentage = (Number(score) / Number(total)) * 100;
  
  const getLevel = (percentage) => {
    if (percentage >= 90) return 'Expert';
    if (percentage >= 70) return 'Advanced';
    if (percentage >= 50) return 'Intermediate';
    return 'Beginner';
  };

  const getColor = (percentage) => {
    if (percentage >= 90) return '#4caf50';
    if (percentage >= 70) return '#2196f3';
    if (percentage >= 50) return '#ff9800';
    return '#f44336';
  };

  return (
    <Container maxWidth="md" className={styles.container}>
      <Meta
        title="Test Results - Quiz Interview"
        description="View your test results and continue learning"
        canonical="https://www.quizinterview.com/results"
      />

      <Paper elevation={3} className={styles.paper}>
        <Typography variant="h4" component="h1" gutterBottom className={styles.title}>
          Test Results
        </Typography>

        <Box className={styles.scoreSection}>
          <Box className={styles.scoreCircle} style={{ borderColor: getColor(percentage) }}>
            <Typography variant="h3">
              {Math.round(percentage)}%
            </Typography>
            <Typography variant="body1">
              {score} / {total} correct
            </Typography>
          </Box>

          <Box className={styles.levelInfo}>
            <Typography variant="h5" gutterBottom>
              Performance Level
            </Typography>
            <Typography variant="h4" style={{ color: getColor(percentage) }}>
              {getLevel(percentage)}
            </Typography>
          </Box>
        </Box>

        <Box className={styles.analysisSection}>
          <Typography variant="h5" gutterBottom>
            Detailed Analysis
          </Typography>
          <List>
            {questions.map((question, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemText
                    primary={
                      <Box className={styles.questionHeader}>
                        <Typography variant="subtitle1" component="span">
                          Question {index + 1}:
                        </Typography>
                        <Typography 
                          variant="body1" 
                          component="span" 
                          className={styles.questionText}
                        >
                          {question.question}
                        </Typography>
                      </Box>
                    }
                    secondary={
                      <Box className={styles.answerSection}>
                        <Typography component="div" className={styles.correctAnswer}>
                          <FontAwesomeIcon icon={faCheck} className={styles.icon} />
                          Correct Answer: {question.correctAnswer}
                        </Typography>
                        <Typography component="div" className={styles.explanation}>
                          {question.explanation}
                        </Typography>
                      </Box>
                    }
                  />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </Box>

        <Box className={styles.actions}>
          <Link href={`/test/${skill}`} passHref>
            <Button variant="outlined" color="primary">
              Try Another Test
            </Button>
          </Link>
          <Link href="/" passHref>
            <Button variant="contained" color="primary">
              Back to Home
            </Button>
          </Link>
        </Box>
      </Paper>
    </Container>
  );
};

export default Results; 