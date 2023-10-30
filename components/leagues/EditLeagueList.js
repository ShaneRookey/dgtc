import PoolManager from "@/components/PoolManager";
import EditLeagueForm from "@/components/forms/league/EditLeagueForm";

async function EditLeagueList({ league_id }) {
    return (
        <>
            <EditLeagueForm league_id={league_id} />
            <PoolManager league_id={league_id} />
        </>
    );
}

export default EditLeagueList;
