"use client";
import { updateLeague } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../../ui/Button";

export default function EditLeagueForm({ league }) {
    const [newName, setNewName] = useState(league.name);
    const [newRegion, setNewRegion] = useState(league.region);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        updateLeague(league._id, newName, newRegion).then(() => {
            router.refresh();
        });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-5">
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
