"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { createTeamByPoolId } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddTeam({ params }) {
    const [name, setName] = useState("");
    const [homeCourse, setHomeCourse] = useState("");
    const [address, setAddress] = useState("");
    const [captainOne, setCaptainOne] = useState("");
    const [captainTwo, setCaptainTwo] = useState("");
    const [captainThree, setCaptainThree] = useState("");
    const { league_id, pool_id } = params;
    const league = league_id;
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !homeCourse) {
            alert("Name and homeCourse are required.");
            return;
        }

        createTeamByPoolId(
            pool_id,
            league,
            name,
            homeCourse,
            address,
            captainOne,
            captainTwo,
            captainThree
        ).then((res) => {
            alert(res.message);
            router.push(`/league/${league_id}/pool/${pool_id}`);
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="text-muted-foreground">
                    League ID: {league_id}
                </div>
                <div className="text-muted-foreground">Pool ID: {pool_id}</div>

                <Input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="border border-slate-500 px-8 py-2"
                    type="text"
                    placeholder="Team Name"
                />

                <Input
                    onChange={(e) => setHomeCourse(e.target.value)}
                    value={homeCourse}
                    className="border border-slate-500 px-8 py-2"
                    type="text"
                    placeholder="Home Course"
                />

                <Input
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                    className="border border-slate-500 px-8 py-2"
                    type="text"
                    placeholder="Address"
                />

                <Input
                    onChange={(e) => setCaptainOne(e.target.value)}
                    value={captainOne}
                    className="border border-slate-500 px-8 py-2"
                    type="text"
                    placeholder="captainOne"
                />

                <Input
                    onChange={(e) => setCaptainTwo(e.target.value)}
                    value={captainTwo}
                    className="border border-slate-500 px-8 py-2"
                    type="text"
                    placeholder="captainTwo"
                />

                <Input
                    onChange={(e) => setCaptainThree(e.target.value)}
                    value={captainThree}
                    className="border border-slate-500 px-8 py-2"
                    type="text"
                    placeholder="captainThree"
                />

                <Button type="submit" className="py-3 px-6 w-fit">
                    Submit
                </Button>
            </form>
        </div>
    );
}
