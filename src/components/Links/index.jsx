// import Image from "next/image";
import classes from "@/components/Links/Links.module.css"

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

export function Links() {
    return (
        <div className={classes.grid}
        //  className="flex gap-4 items-center flex-col sm:flex-row"
        >
            {ITEMS.map((item) => {
                return (
                    <div key={item.href}>
                        <a  href={item.href} className={item.class}>
                            <h3 className={classes.title}>🔸{item.title}</h3>
                        </a>
                        {/* <image className={item.image}/> */}
                    </div>
                );
            })}
        </div>
    );
}
