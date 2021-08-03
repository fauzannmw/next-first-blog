import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

const about = () => {
  return (
    <Layout>
      <Head>
        <title>About Me</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Hello my name is Fauzan
          <br />
          <Link href="/">
            <a>Home</a>
          </Link>
        </h1>
      </div>
    </Layout>
  );
};

export default about;
