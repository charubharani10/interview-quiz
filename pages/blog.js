import { useState, useEffect } from "react";
import {
  Button,
  Typography,
  Card,
  CardContent,
  CircularProgress,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Meta from "../components/Meta";
import { titlesMeta } from "../utils/titles";

import styles from "../styles/Blog.module.css";

const BloggerPosts = () => {
  const BLOG_ID = "9221928786301725617";
  const API_KEY = "AIzaSyDzvVWCIpA72wM6kF4wWP6nFA0jT-6jFnc";
  const [posts, setPosts] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch posts from the API
  const fetchPosts = async (pageToken = "") => {
    setLoading(true);
    setError(null);
    try {
      const url = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}&maxResults=5${
        pageToken ? `&pageToken=${pageToken}` : ""
      }`;
      const res = await fetch(url);
      const data = await res.json();

      if (res.ok) {
        // If there's no nextPageToken, clear the posts first to prevent duplicate entries
        if (!pageToken) {
          setPosts(data.items);
        } else {
          // Append only if there's a pageToken (pagination)
          setPosts((prevPosts) => [...prevPosts, ...data.items]);
        }
        setNextPageToken(data.nextPageToken || null);
      } else {
        throw new Error(data.error.message || "Failed to fetch posts");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Helper function to generate a preview from the full content
  const generateContentPreview = (content, length = 200) => {
    const textOnly = content.replace(/<[^>]*>/g, ""); // Strip HTML
    return textOnly.length > length
      ? `${textOnly.substring(0, length)}...`
      : textOnly;
  };

  useEffect(() => {
    fetchPosts(); // Fetch the first page of posts when the component mounts
  }, []);

  return (
    <div className={styles.wrapper}>
      <Meta
        title={titlesMeta.blog.title}
        description={titlesMeta.blog.description}
        canonical="https://www.quizinterview.com/blog"
      />

      <Typography variant="h1" gutterBottom>
        Blog Posts
      </Typography>

      {error && (
        <Typography color="error" variant="body1">
          Error: {error}
        </Typography>
      )}

      <div>
        {posts.map((post) => (
          <Card key={post.id} className={styles.card}>
            <CardContent className={styles.cardContent}>
              {/* Left side with the logo */}
              <img
                src={post.author.image.url || "https://via.placeholder.com/50"}
                alt={post.author.displayName}
                className={styles.logo}
              />

              {/* Content */}
              <div className={styles.contentPreview}>
                <Typography
                  className={styles.title}
                  variant="h5"
                  component="div"
                  gutterBottom
                >
                  {post.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className={styles.contentPreview}
                >
                  {/* Show preview of the content */}
                  {generateContentPreview(post.content, 200)}
                </Typography>
              </div>

              {/* External link button */}
              <a
                href={post.url}
                target="_blank"
                className={styles.externalLink}
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  style={{ marginRight: "5px" }}
                />
                Read More
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      {loading && (
        <div className={styles.loading}>
          <CircularProgress />
        </div>
      )}

      {!loading && nextPageToken && (
        <Button
          onClick={() => fetchPosts(nextPageToken)}
          variant="contained"
          color="primary"
          size="large"
          className={styles.button}
        >
          Load More
        </Button>
      )}
    </div>
  );
};

export default BloggerPosts;
