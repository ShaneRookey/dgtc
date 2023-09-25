import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/Accordion";

const getTeams = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/teams", {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch teams");
        }

        return res.json();
    } catch (error) {
        console.log("Error loading teams: ", error);
    }
};

export default async function TeamsList() {
    const { teams } = await getTeams();

    return (
        <Accordion type="multiple">
            {teams.map((t) => (
                <AccordionItem
                    key={t._id}
                    value={t.name}
                    className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start flex-col"
                >
                    <AccordionTrigger className="font-bold text-2xl">
                        {t.name}
                    </AccordionTrigger>
                    <AccordionContent>{t.homeCourse}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
