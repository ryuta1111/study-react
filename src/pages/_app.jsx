import { useBgChange } from "@/hooks/useBgChange";
import { useCounter } from "@/hooks/useCounter";
import { useInputArray } from "@/hooks/useInputArray";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgChange();



  return(
    <>
      <Head>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <Component {...pageProps} {...counter} {...inputArray} />;
    </>
  )
}
