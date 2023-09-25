import EditLeagueForm from "@/components/forms/EditLeagueForm";

const getLeagueById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/leagues/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch league");
        }

        return res.json();
    } catch (error) {
        console.log(error);
    }
};

export default async function EditLeague({ params }) {
    const { id } = params;
    const { league } = await getLeagueById(id);
    const { name, region } = league;

    return <EditLeagueForm id={id} name={name} region={region} />;
}
