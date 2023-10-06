"use client";

import { getLeagueById } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../../ui/Button";

export default function EditLeagueForm({ league_id }) {
    const [newName, setNewName] = useState();
    const [newRegion, setNewRegion] = useState();

    const router = useRouter();

    useEffect(() => {
        getLeagueById(league_id).then((res) => {
            setNewName(res.league.name);
            setNewRegion(res.league.region);
        });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(
                `http://localhost:3000/api/league/${league_id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({ newName, newRegion }),
                }
            );

            if (!res.ok) {
                throw new Error("Failed to update league");
            }

            router.refresh();
            router.push(`/league/${league_id}`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 m-3 p-5">
            <input
                onChange={(e) => setNewName(e.target.value)}
                value={newName}
                className="border border-slate-500 px-8 py-2"
                type="text"
            />

            <input
                onChange={(e) => setNewRegion(e.target.value)}
                value={newRegion}
                className="border border-slate-500 px-8 py-2"
                type="text"
            />

            <Button className="font-bold py-3 px-6 w-fit">
                Submit Changes
            </Button>
        </form>
    );
}
