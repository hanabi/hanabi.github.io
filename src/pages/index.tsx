import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import HomepageFeatures from "../components/HomepageFeatures";
import styles from "./styles.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero hero--primary", styles["heroBanner"])}>
      <div className="container">
        <img src={useBaseUrl("img/logo.png")} width="200em" />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          Strategies for{" "}
          <a
            href="https://boardgamegeek.com/boardgame/98778/hanabi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hanabi
          </a>
          , a cooperative card game of logic and reasoning.
        </p>
        <div className={styles["buttons"]}>
          <Link
            className={clsx(
              "button button--outline button--secondary button--lg",
              styles["getStarted"],
            )}
            to={useBaseUrl("docs/about")}
          >
            Learn More
          </Link>
        </div>
      </div>
    </header>
  );
}

function Home(): JSX.Element {
  return (
    <Layout
      title="Home"
      description="Strategies for Hanabi, a cooperative card game of logic and reasoning"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

export default Home;
