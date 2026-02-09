import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/StyledLink.module.css";

const StyledLink = ({ href, children }) => {
  return (
    <Link href={href} className={styles.linkStyle}>
      <Button
        variant="text"
        color="primary"
        startIcon={
          <FontAwesomeIcon
            icon={faChevronRight}
            size="lg"
            className={styles.bounceIcon}
          />
        }
      >
        {children}
      </Button>
    </Link>
  );
};

const LinkList = (linksList) => {
  // State to track whether all links are shown
  const [showAll, setShowAll] = useState(false);
  const [links, setlinks] = useState([]);

  // Function to handle the show more/less toggle
  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  useEffect(() => {
    setlinks(linksList?.linksList);
  }, [links]);

  return (
    <>
      <div className={`${showAll ? styles.expanded : styles.collapse}`}>
        {/* Show only the first 4 links initially, or all if 'showAll' is true */}
        {links.length &&
          links.map((link, index) => (
            <StyledLink key={index} href={link.href}>
              {link.label}
            </StyledLink>
          ))}
      </div>

      {/* Show 'More' or 'Show Less' button */}
      <Button
        variant="text"
        color="primary"
        className={styles.showMoreButton}
        onClick={handleShowMore}
      >
        {showAll ? "Show Less" : "Show More"}
      </Button>
    </>
  );
};

export default LinkList;
