import Head from "next/head";
import Home from "./home";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Stripe | Payment Processing Platform for the Internet</title>
        <meta name="description" content="Stripe Payments Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Home />
      </main>
    </div>
  );
};

export default Index;
