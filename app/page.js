import { buttonVariants } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

export default async function Welcome() {
    return (
        <div className="flex flex-col items-center m-5">
            <Image
                priority
                src={"/dgtclogo.png"}
                width={500}
                height={500}
                alt="logo"
            />
            <Link
                className={buttonVariants({ variant: "outline" })}
                href="/leagues"
            >
                Leagues
            </Link>
        </div>
    );
}
