import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_logo}>Apna Experience</div>
      <div className={styles.navbar_tabs}>
        <Link className={styles.navbar_tabs_link} to="/">
          Home
        </Link>
        <Link className={styles.navbar_tabs_link} to="/about">
          About
        </Link>
      </div>
      <div className={styles.navbar_end}>
        <Button variant="contained" color="success">
          Sign Out
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
