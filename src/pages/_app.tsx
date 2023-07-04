import NextApp, { AppContext, AppProps } from "next/app";
import Head from "next/head";
import {
  ColorSchemeProvider,
  MantineProvider,
  ColorScheme,
  createEmotionCache,
} from "@mantine/core";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { useState } from "react";
import { getCookie, setCookie } from "cookies-next";
import { useColorScheme, useMediaQuery } from "@mantine/hooks";

const emotionCache = createEmotionCache({ key: "poggit" });

export default function App(
  props: AppProps & { colorScheme: ColorScheme | "resolve" }
) {
  const { Component, pageProps } = props;

  const systemPreferred = useMediaQuery("(prefers-color-scheme: dark)")
    ? "dark"
    : "light";
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    props.colorScheme === "resolve" ? systemPreferred : props.colorScheme
  );
  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
    setCookie("color-scheme", nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withCSSVariables
          theme={{ colorScheme }}
          emotionCache={emotionCache}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme: getCookie("color-scheme", appContext.ctx) || "resolve",
  };
};
