import LeagueList from "@/components/leagues/LeagueList";
import { buttonVariants } from "@/components/ui/Button";
import PermissionWall from "@/components/utility/PermissionWall";
import Link from "next/link";

function LeagueViewer() {
    return (
        <div className="flex flex-col m-5 gap-3">
            <PermissionWall>
                <h1>Developer Tools:</h1>
                <Link
                    className={buttonVariants({ variant: "outline" })}
                    href={"/leagues/manage"}
                >
                    Manage Leagues
                </Link>
            </PermissionWall>
            <LeagueList />
        </div>
    );
}

export default LeagueViewer;
