"use client";
import { createPoolByLeagueId } from "@/lib/utils";
import { useState } from "react";
import PoolList from "./pools/PoolList";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Separator } from "./ui/Separator";

function PoolManager({ league_id }) {
    const [poolName, setPoolName] = useState();
    const [commissioner, setCommissioner] = useState();

    const handleNewPool = () => {
        if (!poolName) {
            alert("Must at least have a pool name to create a new pool.");
        } else {
            createPoolByLeagueId(league_id, poolName, commissioner).then(() => {
                setPoolName("");
                setCommissioner("");
            });
        }
    };

    return (
        <div className="flex flex-col gap-1 border p-2">
            Add Pool Tool
            <div className="flex gap-2 items-center rounded-md">
                <Input
                    value={poolName}
                    onChange={(e) => setPoolName(e.target.value)}
                    className="bg-primary-foreground rounded-md px-8 py-2"
                    type="text"
                    placeholder="Pool Name"
                />
                <Input
                    onChange={(e) => setCommissioner(e.target.value)}
                    value={commissioner}
                    className="bg-primary-foreground rounded-md px-8 py-2"
                    type="text"
                    placeholder="Commissioner"
                />
            </div>
            <Button
                className="bg-primary-foreground"
                variant="outline"
                onClick={handleNewPool}
            >
                Add Pool
            </Button>
            <Separator className="p-2 my-2" />
            <PoolList league_id={league_id} />
        </div>
    );
}

export default PoolManager;
