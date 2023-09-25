import EditTeamForm from "@/components/forms/EditTeamForm";

const getTeamById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/team/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch team");
        }

        return res.json();
    } catch (error) {
        console.log(error);
    }
};

export default async function EditTeam({ params }) {
    const { id } = params;
    const { team } = await getTeamById(id);
    const { name, homeCourse, address, captainOne, captainTwo, captainThree } =
        team;

    return (
        <EditTeamForm
            id={id}
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
