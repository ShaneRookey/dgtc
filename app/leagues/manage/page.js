"use client";
import LeagueList from "@/components/leagues/LeagueList";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { createNewLeague } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ManageLeague() {
    const [name, setName] = useState("");
    const [region, setRegion] = useState("");
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !region) {
            alert("League name and region are required.");
            return;
        }

        createNewLeague(name, region).then((res) => {
            setName("");
            setRegion("");
        });
    };

    return (
        <div className="flex flex-col gap-3 m-3 p-5">
            <form
                className="flex flex-col gap-2 items-center border p-5"
                onSubmit={handleSubmit}
            >
                <h1 className="self-start">Add Leagues</h1>
                <Input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="border border-slate-500 px-8 py-2"
                    type="text"
                    placeholder="League Name"
                />
                <Input
                    onChange={(e) => setRegion(e.target.value)}
                    value={region}
                    className="border border-slate-500 px-8 py-2"
                    type="text"
                    placeholder="League Region/Location"
                />
                <Button
                    variant="outline"
                    type="submit"
                    className="py-3 px-6 w-fit"
                >
                    Add League
                </Button>
            </form>
            <div className="flex flex-col gap-2 border p-5">
                Edit Leagues:
                <LeagueList edit={true} />
            </div>
        </div>
    );
}
