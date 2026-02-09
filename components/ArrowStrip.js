import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/ArrowStrip.module.css"; // Import your CSS module
import { Typography } from "@mui/material";

const ArrowStrip = () => {
  return (
    <div className={styles.arrowStrip}>
      <FontAwesomeIcon icon={faArrowLeft} className={styles.animatedArrow} />
      <Typography variant="body1" sx={{ marginLeft: "0.75rem" }}>
        Choose another set of question
      </Typography>
    </div>
  );
};

export default ArrowStrip;
