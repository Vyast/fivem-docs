import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { useColorMode } from "@docusaurus/theme-common";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { colorMode } = useColorMode();
  console.log(
    colorMode,
    "colorMode",
    `img/${colorMode === "light" ? "black200" : "white200"}.png`
  );
  return (
    <div className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <img
          src={`img/${colorMode === "light" ? "black200" : "white200"}.png`}
          alt="Logo"
          width={200}
          height={200}
          className={styles.ox}
        />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/faq">
            Get Started 📁
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Documentation`}
      description="Official documentation site for all vyast.dev FiveM resources."
    >
      <HomepageHeader />
    </Layout>
  );
}
