import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

export default function Login(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Login`} description="Login to CodePod">
      <main
        style={{
          marginTop: "100px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          maxWidth: "600px",
        }}
      >
        <h1>Try CodePod on the cloud</h1>
        <a
          href="https://test.codepod.io"
          target="_blank"
          style={{
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
          Try CodePod Online
        </a>
        <div style={{}}>
          This is a test server, and{" "}
          <span
            style={{
              fontWeight: "bold",
            }}
          >
            data will not be preserved
          </span>{" "}
          to our official release.
        </div>
        <div
          style={{
            color: "gray",
            marginTop: "20px",
          }}
        >
          Looking for the previous version of CodePod? You can find it at{" "}
          <a
            href="https://old-app.codepod.io"
            target="_blank"
            style={{
              color: "black",
            }}
          >
            old-app.codepod.io (deprecated)
          </a>
          . Note that this version is deprecated and the{" "}
          <span
            style={{
              fontWeight: "bold",
            }}
          >
            data is not guaranteed to be preserved
          </span>
          .
        </div>
      </main>
    </Layout>
  );
}
