import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import "@radix-ui/themes/styles.css";
import { Button, DropdownMenu } from "@radix-ui/themes";

function Hero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      // className={clsx(styles.heroBanner)}
      style={{
        padding: "4rem 0",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Heading
          as="h1"
          style={{
            fontSize: "3rem",
          }}
        >
          Canvas-based Scalable Interactive Coding
        </Heading>
        <p
          style={{
            fontSize: "1.5rem",
            maxWidth: "50rem",
          }}
        >
          CodePod.io is an open-source canvas-based coding IDE that helps
          programmers develop large, production-ready projects faster by
          presenting interactive coding (e.g., Jupyter) on a hierarchical,
          scoped, 2D canvas.
        </p>
        {/* 3 link buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          <Link
            href="/login"
            // target="_blank"
            style={{
              // transform the tailwindcss class to inline style
              borderRadius: "0.375rem",
              backgroundColor: "#6366F1",
              padding: "0.375rem 0.875rem",
              fontSize: "1rem",
              fontWeight: 600,
              lineHeight: "1.75rem",
              color: "#fff",
              boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            }}
          >
            Try it online
          </Link>
          <Link
            href="/docs/manual"
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              lineHeight: "1.75rem",
              color: "#4B5563",
            }}
          >
            Read the manual <span aria-hidden="true">→</span>
          </Link>
          <a
            href="https://arxiv.org/abs/2301.02410"
            target="_blank"
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              lineHeight: "1.75rem",
              color: "#4B5563",
            }}
          >
            Read our paper <span aria-hidden="true">→</span>
          </a>
        </div>
        <iframe
          style={{
            marginTop: "4rem",
            width: "60%",
            aspectRatio: 16 / 9,
          }}
          src="https://www.youtube.com/embed/M0t2zxSrF6Q"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <div
          style={{
            marginTop: "4rem",
          }}
        >
          <div
            style={{
              borderRadius: "1rem",
              backgroundColor: "rgba(0, 0, 0, 0.05)",
              padding: "0.5rem",
              boxShadow: "inset 0 1px 2px 0 rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src="/img/google-docs-example.png"
              alt="App screenshot"
              style={{
                borderRadius: "0.5rem",
                boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

import Dropdown from "../components/Dropdown";

function WhyIn3() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        gap: "2rem",
      }}
      className="container"
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          // the children should be equal width
          alignItems: "center",
        }}
      >
        <h2>Why</h2>
        <div>
          Codepod provides the interactive coding experience popularized by
          Jupyter, but with scalability and production-readiness. <br />
          {/* Codepod was invented because Jupyter is usually only suitable for small-scale prototyping or demonstrative projects. */}
          Users can still incrementally build up code by trying out a small code
          snippet each time. But they would not be overwhelmed by the great
          number of code snippets as the projects grow.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>How</h2>
        <div>
          CodePod offers freeform coding on a hierarchical 2D canvas to
          spatially and semantically modularize code.
          <br />
          Code snippets can be inserted anywhere on the canvas, and can be
          hierarchically organized into modules. In this way, Codepod allows
          managing large amounts of code without using files.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>So What</h2>
        <div>
          With Codepod, interactive programming is no longer limited to
          small-scale prototyping or demonstrative projects. Not only can one
          remain fast in prototyping, but also quick in prototype-to-product
          conversion as code is modularized rather than intermingled as in
          Jupyter.
        </div>
      </div>
    </div>
  );
}

function LDAExample() {
  return (
    <div>
      <div
        style={{
          flexGrow: 1,
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          justifyContent: "center",
        }}
      >
        {/* <h3 align="center">Spread your code cells in 2D on a canvas with hierarchy and namespace management! </h3> */}
        <a href="/img/graph_based_LDA.png">
          <img src="/img/graph_based_LDA.png" alt="Product screenshot" />
        </a>
      </div>
    </div>
  );
}

function FeatureList2() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        gap: "2rem",
      }}
      className="container"
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          // the children should be equal width
          alignItems: "center",
        }}
      >
        <h2>Open Source</h2>
        <div>
          CodePod is available as open-source software. You can find our{" "}
          <a href="https://github.com/codepod-io/codepod" target="_blank">
            source code
          </a>{" "}
          on GitHub.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Zoom in and out your code</h2>
        <div>
          In CodePod, you can zoom out to see the big picture, as well as zoom
          in to a line. Just a swipe or scroll. No more going up and down the
          folder hierarchy and close and open a series of files or tabs.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Any language, and any domain</h2>
        <div>
          Codepod's dream is to expand REPL or the interactive or exploratory
          coding experience from Data Science and Machine Learning (dominated by
          Python), to any domain and any programming language.
        </div>
      </div>
    </div>
  );
}

function HebiLi() {
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
      }}
    >
      <img
        src="/img/hebi-paris.jpeg"
        alt=""
        style={{
          width: "10rem",
          height: "10rem",
          borderRadius: "1rem",
          objectFit: "cover",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3
          style={{
            margin: 0,
          }}
        >
          Hebi Li
        </h3>
        <div
          style={{
            fontSize: "1rem",
            lineHeight: "1.75rem",
            color: "#4B5563",
          }}
        >
          CEO, co-founder
        </div>
        <div
          style={{
            marginTop: "1rem",
            fontSize: "1rem",
            lineHeight: "1.75rem",
            color: "#4B5563",
            maxWidth: "20rem",
          }}
        >
          Hebi is an ex-Google-Brainer and an ex-ByteDancer.
          <a
            href="https://lihebi.com"
            //   className="text-sky-500 hover:text-sky-600"
          >
            https://lihebi.com
          </a>
        </div>
      </div>
    </div>
  );
}

function ForrestBao() {
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
      }}
    >
      <img
        src="/img/forrest.jpg"
        alt=""
        style={{
          width: "10rem",
          height: "10rem",
          borderRadius: "1rem",
          objectFit: "cover",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3
          style={{
            margin: 0,
          }}
        >
          Forrest Bao
        </h3>
        <div
          style={{
            fontSize: "1rem",
            lineHeight: "1.75rem",
            color: "#4B5563",
          }}
        >
          CPO, co-founder
        </div>
        <div
          style={{
            marginTop: "1rem",
            fontSize: "1rem",
            lineHeight: "1.75rem",
            color: "#4B5563",
            maxWidth: "20rem",
          }}
        >
          Forrest is an AI veteran and series entrepreneur.
          <a
            href="https://forrestbao.github.io"
            className="text-sky-500 hover:text-sky-600"
          >
            https://forrestbao.github.io
          </a>
        </div>
      </div>
    </div>
  );
}

function Team() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <h1>Meet our team</h1>
      <div
        style={{
          fontSize: "1.5rem",
          maxWidth: "50rem",
          color: "#4B5563",
        }}
      >
        Our team is based in the SF Bay Area. We’re a dynamic group of
        individuals who are passionate about what we do.
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {/* People 1 */}
        <HebiLi />
        {/* People 2 */}
        <ForrestBao />
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div
      // className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        padding: " 4rem 0",
        backgroundColor: "#f3f4f6",
        alignItems: "center",
      }}
    >
      <h2>Contact Us</h2>
      <div>
        For investment, partnership, or any other inquiries, please contact us
        at <a href="mailto:invest@codepod.team">invest@codepod.team</a>
      </div>
    </div>
  );
}

function Videos() {
  return (
    <div
      style={{
        // margin: "auto",
        // width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      {/* <iframe
        style={{
          width: "40%",
          aspectRatio: 16 / 9,
        }}
        src="https://www.youtube.com/embed/M0t2zxSrF6Q"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe> */}
      <iframe
        style={{
          width: "40%",
          aspectRatio: 16 / 9,
        }}
        src="https://www.youtube.com/embed/06yr8FTTxtI"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={``} description={`${siteConfig.tagline}`}>
      <Hero />

      <main
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4rem",
        }}
      >
        {/* <HomepageFeatures /> */}
        <WhyIn3 />
        <Videos />
        <LDAExample />
        <FeatureList2 />
        <Team />
        <Contact />
      </main>
    </Layout>
  );
}
