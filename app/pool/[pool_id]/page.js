import PoolDashboard from "@/components/dashboards/PoolDashboard";
import { buttonVariants } from "@/components/ui/Button";
import PermissionWall from "@/components/utility/PermissionWall";
import Link from "next/link";

function Pool({ params }) {
    const { pool_id } = params;
    return (
        <div className="flex flex-col m-5 gap-2">
            <PermissionWall className="flex flex-col">
                Commissioner Tools:
                <Link
                    className={buttonVariants({ variant: "outline" })}
                    href={`${pool_id}/addTeam`}
                >
                    Add Team
                </Link>
            </PermissionWall>

            <PoolDashboard pool_id={pool_id} />
        </div>
    );
}

export default Pool;
