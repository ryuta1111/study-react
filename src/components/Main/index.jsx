// import Image from "next/image";
import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";
import { useCallback, useState } from "react";

const ITEMS = [
    {
        href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",
        title: "Deploy now",
        class: "rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5",
        // image: {
        //     class:"dark:invert",
        //     src:"/vercel.svg",
        //     alt:"Vercel logomark",
        //     width:20,
        //     height:20
        // }
    },
    {
        href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",
        title: "Read our docs",
        class: "rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44",
    }
]

export function Main(props) {
    const [items, setItems] = useState(ITEMS);
    const handleReduce = useCallback(() => {
        setItems(prevItems => {
            return prevItems.slice(0, prevItems.length - 1);
        })
    })
    return (
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Headline page={props.page} handleReduce={handleReduce} length={items.length}>
        </Headline>
        <Links items={items}/>
        </main>
    );
}
