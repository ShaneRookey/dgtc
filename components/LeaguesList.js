import { getAllLeagues } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/Button";
import { Card, CardHeader } from "./ui/Card";

export default async function LeaguesList() {
    const { leagues } = await getAllLeagues();

    return leagues?.map((l) => (
        <Card className="w-fit">
            <CardHeader>
                <Button variant="link" className="text-3xl">
                    <Link href={`/league/${l._id}`}>{l.name}</Link>
                </Button>
            </CardHeader>
        </Card>
    ));
}
