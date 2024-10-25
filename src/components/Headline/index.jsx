import Image from "next/image";
import classes from "@/components/Headline/Headline.module.css";

export function Headline(props) {
    return (
        <>
            <Image
                className="dark:invert"
                src="/next.svg"
                alt="Next.js logo"
                width={180}
                height={38}
                priority
            />

            <h3 className={classes.title}>{props.page} page</h3>

            <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                <li className="mb-2">
                    Get started by editing{" "}
                <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                    src/pages/{props.page}.js
                </code>
                    .
                </li>
                {props.children}
            </ol>
        </>
    );
}
