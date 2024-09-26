import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Core Programming Language",
    Svg: require("../../../static/img/java.png").default,
    description: (
      <>
       Used Java for OOP, DSA, and projects in college.
      </>
    ),
  },
  {
    title: "Primary Dev Language",
    Svg: require("../../../static/img/js.png").default,
    description: (
      <>
        Used JavaScript for React, MERN stack, and college projects.
      </>
    ),
  },
  {
    title: "Also Used",
    Svg: require("../../../static/img/atom.png").default,
    description: (
      <>
       Used React Native in internship to build multiple mobile apps.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <img src={Svg} height={200} width={200} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
