import { useState } from "react";
import { Typography, TextField, Button, Box, Container, Grid, Snackbar, Alert } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import Meta from "../components/Meta";
import styles from "../styles/Contact.module.css";
import { titlesMeta } from "../utils/titles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          loading: false,
          success: true,
          error: false,
          message: "Message sent successfully! We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: error.message || "Failed to send message. Please try again.",
      });
    }
  };

  const handleCloseSnackbar = () => {
    setStatus((prev) => ({ ...prev, success: false, error: false }));
  };

  return (
    <Container maxWidth="lg" className={styles.contactWrapper}>
      <Meta
        title={titlesMeta.contact?.title || "Contact Us - Quiz Interview"}
        description={titlesMeta.contact?.description || "Get in touch with Quiz Interview. We're here to help with your questions, feedback, or support needs."}
        canonical="https://www.quizinterview.com/contact"
      />
      
      <Typography variant="h1" gutterBottom>
        Contact Us
      </Typography>

      <Typography variant="body1" gutterBottom className={styles.intro}>
        Have questions, feedback, or need support? We're here to help! Fill out the form below or use our contact information to reach out to us.
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box component="form" onSubmit={handleSubmit} className={styles.form}>
            <TextField
              fullWidth
              label="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              margin="normal"
              disabled={status.loading}
            />
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              margin="normal"
              disabled={status.loading}
            />
            <TextField
              fullWidth
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              margin="normal"
              disabled={status.loading}
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              margin="normal"
              disabled={status.loading}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              className={styles.submitButton}
              disabled={status.loading}
            >
              {status.loading ? "Sending..." : "Send Message"}
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box className={styles.contactInfo}>
            <Typography variant="h2" gutterBottom>
              Get in Touch
            </Typography>
            
            <Box className={styles.contactItem}>
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
              <Box>
                <Typography variant="h3">Email Us</Typography>
                <Typography variant="body1">
                  <a href="mailto:pixelxpr@gmail.com">pixelxpr@gmail.com</a>
                </Typography>
              </Box>
            </Box>

            <Box className={styles.contactItem}>
              <FontAwesomeIcon icon={faPhone} className={styles.icon} />
              <Box>
                <Typography variant="h3">Call Us</Typography>
                <Typography variant="body1">
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </Typography>
              </Box>
            </Box>

            <Box className={styles.contactItem}>
              <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
              <Box>
                <Typography variant="h3">Location</Typography>
                <Typography variant="body1">
                  San Francisco, CA<br />
                  United States
                </Typography>
              </Box>
            </Box>

            <Box className={styles.faq}>
              <Typography variant="h3" gutterBottom>
                Frequently Asked Questions
              </Typography>
              <Typography variant="body1">
                Before contacting us, you might find answers to common questions in our FAQ section. Check out our Help Center for detailed information about our services and features.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Snackbar
        open={status.success || status.error}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={status.success ? "success" : "error"}
          sx={{ width: '100%' }}
        >
          {status.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact; 