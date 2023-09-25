import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/Accordion";
import AccordionToolbar from "./ui/AccordionToolbar";

const getLeagues = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/leagues", {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch leagues");
        }

        return res.json();
    } catch (error) {
        console.log("Error loading leagues: ", error);
    }
};

export default async function LeaguesList() {
    const { leagues } = await getLeagues();

    return (
        <Accordion type="multiple">
            {leagues.map((l) => (
                <AccordionItem
                    key={l._id}
                    value={l.name}
                    className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start flex-col"
                >
                    <AccordionTrigger className="font-bold text-2xl">
                        {l.name}
                    </AccordionTrigger>
                    <AccordionContent>
                        <AccordionToolbar id={l._id} />
                        {l.teams?.map((team) => team.name)}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
