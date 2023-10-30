"use client";
import { getAllLeagues } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { buttonVariants } from "../ui/Button";

export default function LeagueList({ edit = false }) {
    const [leagues, setLeagues] = useState();

    useEffect(() => {
        getAllLeagues().then((res) => setLeagues(res.leagues));
    }, []);

    return leagues?.map((league) => {
        const league_id = league._id;
        return (
            <div key={league_id} className="grid">
                <Link
                    className={buttonVariants({ variant: "outline" })}
                    href={
                        edit
                            ? `/league/${league_id}/edit`
                            : `/league/${league_id}`
                    }
                >
                    {league?.name}
                </Link>
            </div>
        );
    });
}
