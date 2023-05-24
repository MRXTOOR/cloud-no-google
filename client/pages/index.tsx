import Head from "next/head";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Главная страница</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <a href="http://localhost:3000/dashboard"><h1 className={styles.tout}>Добро пожаловать, сохраним твои данные? </h1></a>
      </main>
    </>
  );
}
