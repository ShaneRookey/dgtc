import LeaguesList from "@/components/LeaguesList";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

function LeagueViewer() {
    return (
        <div className="flex flex-col h-screen p-5">
            <Button className="border-solid" asChild>
                <Link href={"/leagues/addLeague"}>Add League</Link>
            </Button>
            <LeaguesList />
        </div>
    );
}

export default LeagueViewer;
