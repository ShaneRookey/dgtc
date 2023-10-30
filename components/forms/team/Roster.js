"use client";
import { Button } from "@/components/ui/Button";
import { Skeleton } from "@/components/ui/skeleton";
import { addPlayer, getPlayersByTeamId } from "@/lib/utils";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Roster() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [loading, setLoading] = useState(true);
    const [players, setPlayers] = useState();
    const { team_id } = useParams();
    const router = useRouter();

    useEffect(() => {
        if (loading) {
            getPlayersByTeamId(team_id).then((res) => {
                setPlayers(res.players);
                setLoading(false);
            });
        }
    }, [loading]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await addPlayer(firstName, lastName, team_id).then(() => {
            router.refresh();
            setLoading(false);
        });
    };

    return (
        <div className="flex flex-col gap-5">
            <form
                className="flex gap-5 border rounded-md p-5"
                onSubmit={handleSubmit}
            >
                <input
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    className="border border-slate-500 px-8 py-2"
                    type="text"
                    placeholder="Player First Name"
                />
                <input
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    className="border border-slate-500 px-8 py-2"
                    type="text"
                    placeholder="Player Last Name"
                />
                <Button type="submit">Add Player</Button>
            </form>
            <div className="flex flex-col gap-5 border rounded-md p-5">
                {players ? (
                    players.map((player) => {
                        return (
                            <h1 key={player._id}>
                                {player.firstName + " " + player.lastName}
                            </h1>
                        );
                    })
                ) : (
                    <Skeleton className="h-10 w-[250px]" />
                )}
            </div>
        </div>
    );
}

export default Roster;
