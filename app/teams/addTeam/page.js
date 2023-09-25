"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddTeam() {
    const [name, setName] = useState("");
    const [homeCourse, setHomeCourse] = useState("");
    const [address, setAddress] = useState("");
    const [captainOne, setCaptainOne] = useState("");
    const [captainTwo, setCaptainTwo] = useState("");
    const [captainThree, setCaptainThree] = useState("");
    const [pool, setPool] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !homeCourse) {
            alert("Name and homeCourse are required.");
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/teams", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    homeCourse,
                    address,
                    captainOne,
                    captainTwo,
                    captainThree,
                    pool,
                }),
            });

            if (res.ok) {
                router.push("/teams");
                router.refresh();
            } else {
                throw new Error("Failed to create a team");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
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

                <Input
                    onChange={(e) => setPool(e.target.value)}
                    value={pool}
                    className="border border-slate-500 px-8 py-2"
                    type="text"
                    placeholder="pool"
                />

                <Button type="submit" className="py-3 px-6 w-fit">
                    Submit
                </Button>
            </form>
        </div>
    );
}
