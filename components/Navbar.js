"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Darkmode from "./Darkmode";
import { Button } from "./ui/Button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function Navbar() {
    const { data: session, status } = useSession();

    const renderLoginButton = () => {
        return status === "authenticated" ? (
            <DropdownMenu>
                <DropdownMenuTrigger className="text-sm border-white border rounded-sm p-2">
                    User: {session.user.email}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        <Link href={`/user/${session.user.id}`}>
                            My Account
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href="/api/auth/signout">Logout</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href="/myteam">My Team</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        ) : (
            <div className="flex gap-5 text-sm p-5">
                <a href="/api/auth/signin">Login</a>
                <a href="/register">register</a>
            </div>
        );
    };

    return (
        <nav className="flex flex-row justify-start items-center p-5 gap-5 font-momcake text-5xl sticky top-0 bg-inherit">
            <a href="/">
                <Image
                    src={"/dgtclogo_xs.png"}
                    width={100}
                    height={100}
                    alt="xs_logo"
                    priority
                />
            </a>

            <Button variant="link" asChild>
                <Link href="/">Home</Link>
            </Button>

            <Darkmode />
            {renderLoginButton()}
        </nav>
    );
}
