import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";

export function Main(props) {
    return (
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Headline
            page={props.page}
        >
            <li>Save and see your changes instantly.</li>
        </Headline>
        <Links />
        </main>
    );
}
