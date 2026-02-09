import { Button, Card, CardContent, Typography } from "@mui/material";
import Link from "next/link";

import styles from "../styles/OurServices.module.css";

const OurServicesItem = ({ title, body, icon, links }) => {
  return (
    <Card className={styles.services_item_text_wrapper}>
      <CardContent>
        <span className={styles.icons}>{icon}</span>
        <Typography variant="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {body}
        </Typography>
        {links}
      </CardContent>
    </Card>
  );
};

export default OurServicesItem;
