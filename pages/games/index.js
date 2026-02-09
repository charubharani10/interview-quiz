import { Typography, Container, Grid, Card, CardContent, CardMedia, Button, Box } from "@mui/material";
import Link from "next/link";

import Meta from "../../components/Meta";
import styles from "../../styles/Games.module.css";
import { titlesMeta } from "../../utils/titles";

const Games = () => {
  const games = [
    {
      title: "Memory Match",
      description: "Test your memory by matching pairs of cards. Improve your concentration and recall abilities.",
      image: "/images/games/memory-match.jpg",
      link: "/games/memory-match"
    },
    {
      title: "Word Scramble",
      description: "Unscramble words to test your vocabulary and quick thinking skills.",
      image: "/images/games/word-scramble.jpg",
      link: "/games/word-scramble"
    },
    {
      title: "Math Challenge",
      description: "Solve mathematical problems against the clock to improve your mental arithmetic.",
      image: "/images/games/math-challenge.jpg",
      link: "/games/math-challenge"
    }
  ];

  return (
    <Container maxWidth="lg" className={styles.gamesWrapper}>
      <Meta
        title={titlesMeta.games?.title || "Games - Quiz Interview"}
        description={titlesMeta.games?.description || "Play interactive games to enhance your skills. Challenge yourself with our collection of brain-training games."}
        canonical="https://www.quizinterview.com/games"
      />

      <Typography variant="h1" gutterBottom>
        Brain Training Games
      </Typography>

      <Typography variant="body1" className={styles.intro} gutterBottom>
        Challenge yourself with our collection of brain-training games designed to improve your cognitive skills.
      </Typography>

      <Grid container spacing={4} className={styles.gamesGrid}>
        {games.map((game, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className={styles.gameCard}>
              <CardMedia
                component="img"
                height="200"
                image={game.image}
                alt={game.title}
                className={styles.gameImage}
              />
              <CardContent>
                <Typography variant="h3" gutterBottom>
                  {game.title}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {game.description}
                </Typography>
                <Link href={game.link} className={styles.playButton}>
                  <Button
                    variant="contained"
                    color="primary"
                  >
                    Play Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box className={styles.comingSoon}>
        <Typography variant="h2" gutterBottom>
          Coming Soon
        </Typography>
        <Typography variant="body1">
          We're working on adding more games to help you train your brain and improve your skills. Stay tuned for updates!
        </Typography>
      </Box>
    </Container>
  );
};

export default Games; 