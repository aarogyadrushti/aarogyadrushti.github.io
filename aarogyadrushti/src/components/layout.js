import * as React from "react";
import { Link } from "gatsby";
import { Head } from "gatsby-theme-landing-page";
import "../styles.css";
import * as cssVars from "gatsby-theme-landing-page/src/styles/variables.module.css";
import * as styles from "./layout.module.css";

export default function Layout(props) {
  return (
    <div className={[cssVars.root, styles.root].join(" ")}>
      <Head {...props} />
      {/* <header className={styles.header}>
        <Link to="/">home</Link>
        <Link to="/demo">home</Link>
      </header> */}
      <main className={styles.main}>{props.children}</main>
      <footer className={styles.footer}>
        <a href="https://aarogyadrushti.com/" target="_blank" rel="noopener noreferrer">&copy;aaryogyadrushti.com 2022</a>
        <a href="https://imsheth.com/" target="_blank" rel="noopener noreferrer">Built by imsheth</a>
      </footer>
    </div>
  );
}
