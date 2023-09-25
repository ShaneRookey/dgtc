import { getSession } from "@auth0/nextjs-auth0";
import Image from "next/image";
import Link from "next/link";
import Darkmode from "./Darkmode";
import { Button } from "./ui/Button";

export default async function Navbar() {
    let user;
    if (typeof window !== "undefined") {
        user = await getSession();
    }
    return (
        <nav className="flex flex-row justify-start items-center p-5 gap-5 font-momcake text-5xl sticky top-0 bg-inherit">
            <a href="/">
                <Image
                    src={"/dgtclogo_xs.png"}
                    width={100}
                    height={100}
                    alt="xs_logo"
                />
            </a>

            <Button variant="link" asChild>
                <Link href="/">Home</Link>
            </Button>
            <Button variant="link">
                {user ? (
                    <a href="/api/auth/logout">Logout</a>
                ) : (
                    <a href="/api/auth/login">Login</a>
                )}
            </Button>
            <Darkmode />
        </nav>
    );
}
