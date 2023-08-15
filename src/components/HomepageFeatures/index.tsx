import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

interface FeatureItem {
  num: number;
  title: string;
  iconName: string;
  description: JSX.Element;
  link: string;
}

// eslint-disable-next-line isaacscript/require-capital-const-assertions, isaacscript/require-capital-read-only
const FeatureList: FeatureItem[] = [
  {
    num: 1,
    title: "Beginner's Guide",
    iconName: "baby",
    description: <>Start here to learn the fundamentals.</>,
    link: "beginner",
  },
  {
    num: 2,
    title: "Learning Path",
    iconName: "school",
    description: <>Learn our strategies gradually, level by level.</>,
    link: "learning-path",
  },
  {
    num: 3,
    title: "Reference Document",
    iconName: "list-ul",
    description: <>Look up something specific.</>,
    link: "reference",
  },
];

function Feature({ num, title, iconName, description, link }: FeatureItem) {
  const iconStyles = `fa fa-${iconName} fa-stack-1x fa-inverse`;
  const circleStyles = `fa fa-circle fa-stack-2x accent${num}`;
  return (
    <div className={clsx("col col--4", styles["feature"])}>
      {iconStyles !== "" && (
        <div className="text--center">
          <br />
          <a href={useBaseUrl(`docs/${link}`)}>
            <span className="fa-stack fa-3x">
              <i className={circleStyles}></i>
              <i className={iconStyles}></i>
            </span>
          </a>
          <br />
          <br />
        </div>
      )}
      <h3 className="text--center">
        <a href={useBaseUrl(`docs/${link}`)}>{title}</a>
      </h3>
      <p className="text--center">{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles["features"]}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
