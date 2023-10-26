import EditTeamForm from '@/components/forms/team/EditTeamForm';
import { getTeamByTeamId } from '@/lib/utils';

export default async function EditTeam({ params }) {
	const { team_id, league_id, pool_id } = params;
	const { team } = await getTeamByTeamId(team_id);
	const { name, homeCourse, address, captainOne, captainTwo, captainThree } =
		team;

	return (
		<EditTeamForm
			team_id={team_id}
			league_id={league_id}
			pool_id={pool_id}
			name={name}
			homeCourse={homeCourse}
			address={address}
			captainOne={captainOne}
			captainTwo={captainTwo}
			captainThree={captainThree}
		/>
	);
}
