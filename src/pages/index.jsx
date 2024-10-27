// import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(() => {
    if(count < 10){
      setCount((prevCount) => prevCount + 1);
    }
  },[count]);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  const handleChange = useCallback((e) => {
    if(e.target.value.length > 5) {
      alert("5文字以内にしてください");
      return;
    };
    setText(e.target.value.trim());
  },[])

  useEffect(() => {
    document.body.style.backgroundColor = "green";
    return () => {
        document.body.style.backgroundColor = "";
    };
},[]);


  return (
    <div
      className={styles.container}
      // className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />

      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input
        type="text"
        value={text}
        onChange={handleChange}
      />
      <Main page="index"/>

      <Footer />
    </div>
  );
}
