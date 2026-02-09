import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

import styles from "../styles/SelectLevel.module.css";

const SelectLevel = () => {
  const router = useRouter();
  const { skill, level: urlLevel } = router.query; // Get level from URL
  const [selectedLevel, setSelectedLevel] = useState(urlLevel || ""); // Set initial level from URL

  const handleStartTest = async () => {
    // Update the URL to include the selected level and test1
    router.push(`/test/${skill}/${selectedLevel}/test1`);
  };

  return (
    <div className={styles.selectlevel}>
      <Typography variant="h1" gutterBottom sx={{ fontSize: "1.5rem" }}>
        Select Level
      </Typography>
      <RadioGroup
        aria-label="level"
        name="level"
        value={selectedLevel}
        onChange={(e) => setSelectedLevel(e.target.value)}
      >
        <FormControlLabel
          value="beginner"
          control={<Radio />}
          label="Beginner"
        />
        <FormControlLabel
          value="intermediate"
          control={<Radio />}
          label="Intermediate"
        />
        <FormControlLabel
          value="advanced"
          control={<Radio />}
          label="Advanced"
          sx={{ marginBottom: "1rem" }}
        />
      </RadioGroup>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleStartTest}
        disabled={!selectedLevel}
      >
        Start Test
      </Button>
    </div>
  );
};

export default SelectLevel;
