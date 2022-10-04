import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Open Source",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        {/* Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly. */}
        Like you, we believe in open-source. You can find the{" "}
        <a href="https://github.com/lihebi/codepod" target="_blank">
          source code
        </a>{" "}
        on GitHub. We'd like your contribution to make it a better tool!
      </>
    ),
  },
  {
    title: "Interactive Development",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        {/* Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go */}
        {/* ahead and move your docs into the <code>docs</code> directory. */}
        Jupyter-like experience. Run code and see results in real time. Make
        edits and loop. Read-Eval-Print-Loop.
      </>
    ),
  },
  {
    title: "Scalable to large projects",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        {/* Extend or customize your website layout by reusing React. Docusaurus can */}
        {/* be extended while reusing the same header and footer. */}
        Intuitive and consistent namespace support. Build your project from
        ground up to the universe. Sky's the limit.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
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
