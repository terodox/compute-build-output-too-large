import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import pillarsOfCreationPng from "../../public/pillars-of-creation.png";
import largeFile from "../../public/large-file.png";
import largeFile1 from "../../public/large-file-one.png";
import largeFile2 from "../../public/large-file-two.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Large image</title>
        <meta
          name="description"
          content="An optimized picture of the pillars of creation"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <figure>
          <figcaption>Using path</figcaption>
          <Image
            src="/pillars-of-creation.png"
            alt="The pillars of creation"
            height={300}
            width={900}
          ></Image>
        </figure>
        <figure>
          <figcaption>Using static import</figcaption>
          <Image
            src={pillarsOfCreationPng}
            alt="The pillars of creation"
            height={300}
            width={900}
          ></Image>
          <Image
            src={largeFile}
            alt="A really large file"
            height={300}
            width={900}
          ></Image>
          <Image
            src={largeFile1}
            alt="A really large file"
            height={300}
            width={900}
          ></Image>
          <Image
            src={largeFile2}
            alt="A really large file"
            height={300}
            width={900}
          ></Image>
        </figure>
      </main>
    </>
  );
}
