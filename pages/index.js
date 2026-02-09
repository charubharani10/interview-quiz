import { Container, Grid, Typography, Card, CardContent, CardActionArea } from "@mui/material";
import Link from "next/link";
import Meta from "../components/Meta";
import styles from "../styles/Home.module.css";
import { titlesMeta } from "../utils/titles";

const categories = [
  {
    title: "Aptitude",
    items: [
      { href: "/test/simplification", label: "Simplification" },
      { href: "/test/number-series", label: "Number Series" },
      { href: "/test/algebra", label: "Algebra" },
      { href: "/test/percentage", label: "Percentage" },
      { href: "/test/ratio-proportion", label: "Ratio & Proportion" },
      { href: "/test/average", label: "Average" },
      { href: "/test/interest", label: "Interest" },
      { href: "/test/profit-loss", label: "Profit & Loss" },
      { href: "/test/speed-time-distance", label: "Speed, Time & Distance" },
      { href: "/test/mixture-allegation", label: "Mixture & Allegation" },
      { href: "/test/time-and-work", label: "Time and Work" },
      { href: "/test/permutation-combination-probability", label: "Permutation, Combination & Probability" },
      { href: "/test/mensuration", label: "Mensuration" },
      { href: "/test/data-sufficiency", label: "Data Sufficiency" },
      { href: "/test/data-interpretation", label: "Data Interpretation" },
      { href: "/test/comparison-of-quantities", label: "Comparison of Quantities" },
    ]
  },
  {
    title: "Reasoning",
    items: [
      { href: "/test/numerical-reasoning", label: "Numerical" },
      { href: "/test/verbal-reasoning", label: "Verbal" },
      { href: "/test/abstract-reasoning", label: "Abstract" },
      { href: "/test/logical-reasoning", label: "Logical" },
      { href: "/test/mechanical-reasoning", label: "Mechanical" },
    ]
  },
  {
    title: "Programming",
    items: [
      { href: "/test/html", label: "HTML" },
      { href: "/test/css", label: "CSS" },
      { href: "/test/javascript", label: "JavaScript" },
      { href: "/test/reactjs", label: "React JS" },
      { href: "/test/nodejs", label: "Node JS" },
      { href: "/test/python", label: "Python" },
      { href: "/test/java", label: "Java" },
      { href: "/test/cpp", label: "C++" },
    ]
  },
  {
    title: "Data Structures",
    items: [
      { href: "/test/arrays", label: "Arrays" },
      { href: "/test/linked-lists", label: "Linked Lists" },
      { href: "/test/stacks", label: "Stacks" },
      { href: "/test/queues", label: "Queues" },
      { href: "/test/trees", label: "Trees" },
      { href: "/test/graphs", label: "Graphs" },
      { href: "/test/hashing", label: "Hashing" },
      { href: "/test/heaps", label: "Heaps" },
      { href: "/test/advanced-data-structures", label: "Advanced Data Structures" },
    ]
  },
  {
    title: "Soft Skills",
    items: [
      { href: "/test/leadership-and-teamwork", label: "Leadership and Teamwork" },
      { href: "/test/communication-skills", label: "Communication Skills" },
      { href: "/test/adaptability-and-flexibility", label: "Adaptability and Flexibility" },
      { href: "/test/emotional-intelligence", label: "Emotional Intelligence" },
      { href: "/test/conflict-resolution", label: "Conflict Resolution" },
      { href: "/test/time-management", label: "Time Management" },
      { href: "/test/situational-judgement", label: "Situational Judgement" },
      { href: "/test/problem-solving-scenarios", label: "Problem-Solving Scenarios" },
      { href: "/test/decision-making", label: "Decision Making" },
      { href: "/test/handling-workplace-pressure", label: "Handling Workplace Pressure" },
      { href: "/test/crisis-management", label: "Crisis Management" },
      { href: "/test/ethical-dilemmas", label: "Ethical Dilemmas" },
    ]
  }
];

const Home = () => {
  return (
    <Container maxWidth="lg" className={styles.container}>
      <Meta
        title={titlesMeta.default.title}
        description={titlesMeta.default.description}
        canonical="https://www.quizinterview.com/"
      />

      <Typography variant="h1" gutterBottom className={styles.mainTitle}>
        Free Interview Preparation Quizzes
      </Typography>

      <Typography variant="body1" className={styles.intro} gutterBottom>
        Prepare for your next job interview with our comprehensive collection of free quizzes. 
        Test your skills in aptitude, reasoning, programming, data structures, and soft skills.
      </Typography>

      <Grid container spacing={4}>
        {categories.map((category, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card className={styles.categoryCard}>
              <CardContent>
                <Typography variant="h2" gutterBottom className={styles.categoryTitle}>
                  {category.title}
                </Typography>
                <div className={styles.linksList}>
                  {category.items.map((item, itemIndex) => (
                    <Link 
                      key={itemIndex} 
                      href={item.href}
                      className={styles.categoryLink}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
