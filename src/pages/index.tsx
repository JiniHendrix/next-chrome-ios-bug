import Head from "next/head";
import { Box, Flex } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";

export const getServerSideProps = async () => {
  const before = Date.now();
  const timeTaker = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("done");
      }, 700);
    });
  await timeTaker();
  console.log("how much time :>> ", Date.now() - before);
  return {
    props: {},
    // every 6 hours (in secs)
  };
};

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0"
        />
        <meta name="theme-color" content="#fff" />
        <meta
          property="og:title"
          key="og:title"
          content="SpotOn - Online Ordering"
        />
        <meta
          property="og:description"
          key="og:description"
          content="Order Online with Spot On"
        />
        <meta name="description" content="SpotOn OLO Web" />
        <link rel="apple-touch-icon" href="logo192.png" />
        {/* <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}
      </Head>
      <Flex direction="column" width="100vw" height="100vh">
        <a href="http://192.168.50.120:3000" target="_blank">
          LINKTOME
        </a>
        <Box flex={1} backgroundColor="white" width="100%">
          <Box
            pos="fixed"
            bottom={0}
            width="100vw"
            backgroundColor="red"
            height={50}
          />
        </Box>
      </Flex>
    </>
  );
}
