import { useEffect } from "react";

export const useBgChange = () => {
    useEffect(() => {
        document.body.style.backgroundColor = "green";
        return () => {
            document.body.style.backgroundColor = "";
        };
    },[]);
}