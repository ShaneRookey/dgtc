"use client";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddLeague() {
    const [name, setName] = useState("");
    const [region, setRegion] = useState("");
    const [teams, setTeams] = useState([]);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !region) {
            alert("League name and region are required.");
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/leagues", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    region,
                    teams,
                }),
            });

            if (res.ok) {
                router.push("/leagues");
                router.refresh();
            } else {
                throw new Error("Failed to create a league");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
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
            <Button type="submit" className="py-3 px-6 w-fit">
                Submit
            </Button>
        </form>
    );
}
