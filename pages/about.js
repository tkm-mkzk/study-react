import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import { Footer } from "@/components/Footer";
import { Headline } from "@/components/Headline";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Headline page="about" />
      </main>

      <Footer />
    </div>
  );
}
