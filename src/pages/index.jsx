import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import Head from "next/head";
import { useEffect, useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [count, setCount] = useState(1)
  const handleClick = (e) => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "green";
    return () => {
        document.body.style.backgroundColor = "";
    };
},[]);


  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>
      <Main page="index"/>

      <Footer />
    </div>
  );
}
