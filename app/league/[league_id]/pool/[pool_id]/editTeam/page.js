import EditTeamForm from "@/components/forms/team/EditTeamForm";
import { getTeamByTeamId } from "@/lib/utils";

export default async function EditTeam({ params }) {
    const { team_id } = params;
    const { team } = await getTeamByTeamId(team_id);
    const {
        league,
        pool,
        name,
        homeCourse,
        address,
        captainOne,
        captainTwo,
        captainThree,
    } = team;

    return (
        <EditTeamForm
            id={id}
            league={league}
            pool={pool}
            name={name}
            description={description}
            homeCourse={homeCourse}
            address={address}
            captainOne={captainOne}
            captainTwo={captainTwo}
            captainThree={captainThree}
        />
    );
}
