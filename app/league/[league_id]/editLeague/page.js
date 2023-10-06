import PoolManager from "@/components/PoolManager";
import EditLeagueForm from "@/components/forms/league/EditLeagueForm";

async function EditLeague({ params }) {
    const { league_id } = params;

    return (
        <>
            <EditLeagueForm league_id={league_id} />
            <PoolManager league_id={league_id} />
        </>
    );
}

export default EditLeague;
