"use client";
import { getPoolByPoolId, getTeamsByPoolId } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
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
            <div className="bg-white w-1/3">
                <div className="text-primary-foreground text-2xl font-bold p-2">
                    {pool.name}
                </div>
                <div className="grid grid-cols-2 gap-3 p-5">
                    {teams?.map((team, i) => {
                        return (
                            <div
                                key={i}
                                className="border bg-primary-foreground rounded-sm min-w-max p-5"
                            >
                                <div className="overflow-hidden text-left flex items-center gap-2">
                                    {team.name}
                                    <a className="text-left hover:cursor-pointer">
                                        <AiFillEye />
                                    </a>
                                </div>
                                <div>
                                    <PermissionWall>
                                        <Link
                                            href={`${pool_id}/editTeam/${team._id}`}
                                        >
                                            Edit
                                        </Link>
                                    </PermissionWall>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="w-2/3 bg-white">
                <div className="w-full">hey</div>
            </div>
        </div>
    );
}
