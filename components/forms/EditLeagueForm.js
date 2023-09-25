"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/Button";

export default function EditLeagueForm({ id, name, region }) {
    const [newName, setNewName] = useState(name);
    const [newRegion, setNewRegion] = useState(region);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/leagues/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ newName, newDescription }),
            });

            if (!res.ok) {
                throw new Error("Failed to update league");
            }

            router.refresh();
            router.push("/dashboard/global");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                onChange={(e) => setNewName(e.target.value)}
                value={newName}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="League Name"
            />

            <input
                onChange={(e) => setNewRegion(e.target.value)}
                value={newRegion}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="League Region"
            />

            <Button className=" font-bold  py-3 px-6 w-fit">
                <Link href="/teams">Update Teams</Link>
            </Button>

            <Button className="font-bold py-3 px-6 w-fit">Update League</Button>
        </form>
    );
}
