import PoolManager from '@/components/PoolManager';
import EditLeagueForm from '@/components/forms/league/EditLeagueForm';

async function EditLeague({ params }) {
	const { league_id } = params;

	return (
		<div className="m-5">
			<EditLeagueForm league_id={league_id} />
			<PoolManager league_id={league_id} />
		</div>
	);
}

export default EditLeague;
