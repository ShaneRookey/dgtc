import LeaguesList from "@/components/LeaguesList";
import { Button } from "@/components/ui/Button";
import PermissionWall from "@/components/utility/PermissionWall";
import Link from "next/link";

function LeagueViewer() {
    return (
        <div className="flex flex-col p-5">
            <PermissionWall>
                <Button asChild className="m-3 p-5">
                    <Link href={"/leagues/addLeague"}>Add League</Link>
                </Button>
            </PermissionWall>
            <LeaguesList />
        </div>
    );
}

export default LeagueViewer;
