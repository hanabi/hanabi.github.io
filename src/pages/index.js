import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import React from 'react';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

const features = [
  {
    num: 1,
    title: 'Beginner\'s Guide',
    iconName: 'baby',
    description: (
      <>
        Start here to learn the fundamentals.
      </>
    ),
    link: 'beginner',
  },
  {
    num: 2,
    title: 'Learning Path',
    iconName: 'school',
    description: (
      <>
        Learn our strategies gradually, level by level.
      </>
    ),
    link: 'learning_path',
  },
  {
    num: 3,
    title: 'Reference Document',
    iconName: 'list-ul',
    description: (
      <>
        Look up something specific.
      </>
    ),
    link: 'reference',
  },
];

function Feature({num, title, iconName, description, link}) {
  const iconStyles = `fa fa-${iconName} fa-stack-1x fa-inverse`;
  const circleStyles = `fa fa-circle fa-stack-2x accent${num}`;
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {iconStyles && (
        <div className="text--center">
          <br />
          <a href={useBaseUrl(`docs/${link}`)}>
            <span className="fa-stack fa-3x">
              <i className={circleStyles}></i>
              <i className={iconStyles}></i>
            </span>
          </a>
          <br /><br />
        </div>
      )}
      <h3 className="text--center">
        <a href={useBaseUrl(`docs/${link}`)}>{title}</a>
      </h3>
      <p className="text--center">{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title="Home"
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img src={useBaseUrl('img/hyphenated_circle.png')} />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">
            Strategies for <a
              href="https://boardgamegeek.com/boardgame/98778/hanabi"
              target="_blank"
              rel="noopener noreferrer"
            >Hanabi</a>, a cooperative card game of logic and reasoning.
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/about')}>
              Learn More
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
