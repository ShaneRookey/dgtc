import PoolManager from "@/components/PoolManager";
import EditLeagueForm from "@/components/forms/league/EditLeagueForm";
import { getLeagueById } from "@/lib/utils";

async function EditLeague({ params }) {
    const { league_id } = params;
    const { league } = await getLeagueById(league_id);

    return (
        <div className="m-5">
            <EditLeagueForm league={league} />
            <PoolManager league_id={league_id} />
        </div>
    );
}

export default EditLeague;
