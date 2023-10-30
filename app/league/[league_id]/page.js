import PoolList from "@/components/pools/PoolList";
import { buttonVariants } from "@/components/ui/Button";
import PermissionWall from "@/components/utility/PermissionWall";
import { getLeagueById } from "@/lib/utils";
import Link from "next/link";

async function LeagueView({ params }) {
    const { league_id } = params;
    const { league } = await getLeagueById(league_id);

    return (
        <div className="flex flex-col m-5 gap-3">
            <div className="flex justify-between rounded-md p-3">
                <h1 className="text-4xl">{league.name}</h1>
                <PermissionWall className="flex flex-col items-end">
                    <Link
                        className={buttonVariants({ variant: "outline" })}
                        href={`${league_id}/edit`}
                    >
                        Edit
                    </Link>
                </PermissionWall>
            </div>
            <PoolList league_id={league_id} />
        </div>
    );
}

export default LeagueView;
