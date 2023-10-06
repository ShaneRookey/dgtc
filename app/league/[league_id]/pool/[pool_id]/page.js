import PoolDashboard from "@/components/dashboards/PoolDashboard";
import { Button } from "@/components/ui/Button";
import PermissionWall from "@/components/utility/PermissionWall";
import Link from "next/link";

function Pool({ params }) {
    const { pool_id } = params;
    return (
        <div className="m-3 p-5">
            <PermissionWall>
                <Button className="m-3">
                    <Link href={`${pool_id}/addTeam`}>Add Team</Link>
                </Button>
            </PermissionWall>

            <PoolDashboard pool_id={pool_id} />
        </div>
    );
}

export default Pool;
