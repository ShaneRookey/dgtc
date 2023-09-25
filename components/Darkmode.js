"use client";
import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
import { Button } from "./ui/Button";

function Darkmode() {
    const { theme, setTheme } = useTheme();
    const isDark = theme === "dark";
    return (
        <Button
            variant="link"
            onClick={() => setTheme(isDark ? "light" : "dark")}
        >
            <MdDarkMode />
        </Button>
    );
}

export default Darkmode;
