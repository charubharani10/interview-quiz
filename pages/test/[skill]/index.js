import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button, Box } from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Meta from '../../../components/Meta';
import { titlesMeta } from '../../../utils/titles';
import styles from '../../../styles/TestSelector.module.css';

const tests = {
  javascript: [
    {
      id: 1,
      title: 'JavaScript Fundamentals',
      description: 'Test your knowledge of JavaScript basics including types, functions, and core concepts.',
      questionCount: 5,
      timeLimit: '5 minutes'
    },
    {
      id: 2,
      title: 'ES6+ Features',
      description: 'Challenge yourself with modern JavaScript features including destructuring, template literals, and async/await.',
      questionCount: 5,
      timeLimit: '5 minutes'
    },
    {
      id: 3,
      title: 'DOM and Events',
      description: 'Test your understanding of DOM manipulation, event handling, and browser interactions.',
      questionCount: 5,
      timeLimit: '5 minutes'
    }
  ],
  trees: [
    {
      id: 1,
      title: 'Tree Fundamentals',
      description: 'Test your understanding of basic tree concepts, traversals, and binary tree properties.',
      questionCount: 5,
      timeLimit: '5 minutes'
    },
    {
      id: 2,
      title: 'Advanced Tree Concepts',
      description: 'Challenge yourself with advanced tree concepts including AVL trees, Red-Black trees, and specialized tree structures.',
      questionCount: 5,
      timeLimit: '5 minutes'
    }
  ],
  graphs: [
    {
      id: 1,
      title: 'Graph Fundamentals',
      description: 'Test your knowledge of basic graph concepts, representations, and traversal algorithms.',
      questionCount: 5,
      timeLimit: '5 minutes'
    },
    {
      id: 2,
      title: 'Advanced Graph Algorithms',
      description: 'Challenge yourself with advanced graph algorithms including shortest paths, minimum spanning trees, and network flow.',
      questionCount: 5,
      timeLimit: '5 minutes'
    }
  ],
  stacks: [
    {
      id: 1,
      title: 'Stack Fundamentals',
      description: 'Test your understanding of basic stack operations, LIFO principle, and common applications.',
      questionCount: 5,
      timeLimit: '5 minutes'
    },
    {
      id: 2,
      title: 'Advanced Stack Applications',
      description: 'Challenge yourself with advanced stack concepts including expression evaluation, monotonic stacks, and complex applications.',
      questionCount: 5,
      timeLimit: '5 minutes'
    }
  ],
  queues: [
    {
      id: 1,
      title: 'Queue Fundamentals',
      description: 'Test your knowledge of basic queue operations, FIFO principle, and common applications.',
      questionCount: 5,
      timeLimit: '5 minutes'
    },
    {
      id: 2,
      title: 'Advanced Queue Types',
      description: 'Challenge yourself with advanced queue concepts including priority queues, deques, and concurrent queues.',
      questionCount: 5,
      timeLimit: '5 minutes'
    }
  ],
  heaps: [
    {
      id: 1,
      title: 'Heap Fundamentals',
      description: 'Test your understanding of basic heap properties, operations, and array representation.',
      questionCount: 5,
      timeLimit: '5 minutes'
    },
    {
      id: 2,
      title: 'Advanced Heap Concepts',
      description: 'Challenge yourself with advanced heap concepts including heap construction, specialized heaps, and applications.',
      questionCount: 5,
      timeLimit: '5 minutes'
    }
  ],
  hashing: [
    {
      id: 1,
      title: 'Hashing Fundamentals',
      description: 'Test your knowledge of basic hashing concepts, collision resolution, and hash table operations.',
      questionCount: 5,
      timeLimit: '5 minutes'
    },
    {
      id: 2,
      title: 'Advanced Hashing Techniques',
      description: 'Challenge yourself with advanced hashing concepts including consistent hashing, perfect hashing, and specialized applications.',
      questionCount: 5,
      timeLimit: '5 minutes'
    }
  ]
};

const TestSelector = () => {
  const router = useRouter();
  const { skill } = router.query;

  if (!skill) return null;

  const availableTests = tests[skill] || [];
  const skillTitle = skill.charAt(0).toUpperCase() + skill.slice(1);

  return (
    <Container maxWidth="lg" className={styles.container}>
      <Meta
        title={titlesMeta[skill]?.title || `${skillTitle} Tests - Quiz Interview`}
        description={titlesMeta[skill]?.description || `Practice ${skillTitle} with our interactive quizzes.`}
        canonical={`https://www.quizinterview.com/test/${skill}`}
      />

      <Typography variant="h1" className={styles.title}>
        {skillTitle} Practice Tests
      </Typography>

      <Typography variant="body1" className={styles.description}>
        Choose a test below to start practicing {skillTitle}. Each test focuses on different aspects and difficulty levels.
      </Typography>

      <Grid container spacing={3} className={styles.grid}>
        {availableTests.map((test) => (
          <Grid item xs={12} sm={6} md={4} key={test.id}>
            <Card className={styles.card}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {test.title}
                </Typography>
                <Box className={styles.details}>
                  <Typography color="textSecondary">
                    Questions: {test.questionCount}
                  </Typography>
                  <Typography color="textSecondary">
                    Time: {test.timeLimit}
                  </Typography>
                </Box>
                <Typography variant="body2" component="p">
                  {test.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Link href={`/test/${skill}/${test.id}`} passHref>
                  <Button size="large" color="primary" variant="contained" className={styles.startButton}>
                    Start Test
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TestSelector; 