"use client";
import { getPoolByPoolId, getTeamsByPoolId } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import PoolStats from "../stats/PoolStats";
import TeamStats from "../stats/TeamStats";
import { Skeleton } from "../ui/skeleton";
import PermissionWall from "../utility/PermissionWall";

export default function PoolDashboard({ pool_id }) {
    const [pool, setPool] = useState();
    const [teams, setTeams] = useState();
    const [loading, setLoading] = useState(true);
    const [selected, setSelected] = useState();

    useEffect(() => {
        getPoolByPoolId(pool_id).then((res) => setPool(res.pool));
        getTeamsByPoolId(pool_id).then((res) => {
            setTeams(res.teams);
            setLoading(false);
        });
    }, []);

    return loading ? (
        <div className="flex gap-3">
            <Skeleton className="h-10 w-[250px]" />
            <Skeleton className="h-10 w-[500px]" />
        </div>
    ) : (
        <div className="flex gap-3">
            <div className="bg-white w-fit rounded-md">
                <div className="text-primary-foreground text-2xl font-bold p-5">
                    <button
                        onClick={() => setSelected()}
                        className="text-left hover:cursor-pointer hover:animate-pulse"
                    >
                        {pool.name}
                    </button>
                </div>
                <div className="flex flex-col w-fit gap-3 p-5">
                    {teams?.map((team, i) => {
                        const team_id = team._id;
                        return (
                            <div
                                key={team_id}
                                className="flex gap-2 items-center"
                            >
                                <div
                                    onClick={() => setSelected(team)}
                                    className="hover:cursor-pointer hover:translate-x-1 border bg-primary-foreground rounded-sm w-full p-5"
                                >
                                    <button>{team.name}</button>
                                </div>
                                <PermissionWall>
                                    <Link
                                        href={`/team/${team_id}/edit`}
                                        className="text-primary-foreground"
                                    >
                                        Edit
                                    </Link>
                                </PermissionWall>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="w-full bg-primary rounded-md text-primary-foreground p-5 text-2xl font-bold">
                {selected ? <TeamStats team={selected} /> : <PoolStats />}
            </div>
        </div>
    );
}
