import type { AppProps } from "next/app";
import Layout from "./Layout";

function PortfolioApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default PortfolioApp;
