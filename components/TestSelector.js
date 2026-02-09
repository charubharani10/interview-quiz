import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Button,
} from '@mui/material';
import { useRouter } from 'next/router';
import styles from '../styles/TestSelector.module.css';

const TestSelector = ({ skill }) => {
  const router = useRouter();
  const tests = [
    {
      id: 1,
      title: 'Basic Concepts',
      description: 'Test your knowledge of fundamental concepts',
      questions: 10,
      timeLimit: '10 minutes',
    },
    {
      id: 2,
      title: 'Advanced Topics',
      description: 'Challenge yourself with advanced problems',
      questions: 15,
      timeLimit: '15 minutes',
    },
    {
      id: 3,
      title: 'Practice Test',
      description: 'Mixed questions from various topics',
      questions: 20,
      timeLimit: '20 minutes',
    },
  ];

  const handleTestSelect = (testId) => {
    router.push(`/test/${skill}/${testId}`);
  };

  return (
    <Box className={styles.container}>
      <Typography variant="h1" className={styles.title}>
        {skill.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Tests
      </Typography>
      
      <Typography variant="body1" className={styles.description}>
        Select a test to begin practicing. Each test focuses on different aspects and difficulty levels.
      </Typography>

      <Grid container spacing={3} className={styles.grid}>
        {tests.map((test) => (
          <Grid item xs={12} sm={6} md={4} key={test.id}>
            <Card className={styles.card}>
              <CardActionArea onClick={() => handleTestSelect(test.id)}>
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {test.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    {test.description}
                  </Typography>
                  <Box className={styles.details}>
                    <Typography variant="body2" color="textSecondary">
                      Questions: {test.questions}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Time: {test.timeLimit}
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    className={styles.startButton}
                  >
                    Start Test
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TestSelector; 