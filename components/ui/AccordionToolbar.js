import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import { Button } from "./Button";

function AccordionToolbar({ id }) {
    return (
        <div className="w-full bg-slate-950 rounded-full">
            <Button className="rounded-full" asChild>
                <Link href={`/leagues/editLeague/${id}`}>
                    <HiPencilAlt />
                </Link>
            </Button>
        </div>
    );
}

export default AccordionToolbar;
