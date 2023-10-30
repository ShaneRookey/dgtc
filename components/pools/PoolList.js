"use client";
import { getPoolsByLeagueId } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { buttonVariants } from "../ui/Button";

export default function PoolList({ league_id }) {
    const [pools, setPools] = useState();

    useEffect(() => {
        getPoolsByLeagueId(league_id).then((res) => setPools(res.pools));
    }, []);

    return (
        <div className="grid gap-2">
            {pools?.map((pool, i) => {
                const pool_id = pool._id;
                return (
                    <Link
                        key={i}
                        className={buttonVariants({ variant: "outline" })}
                        href={`/pool/${pool_id}`}
                    >
                        {pool.name}
                    </Link>
                );
            })}
        </div>
    );
}
