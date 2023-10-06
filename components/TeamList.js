import { getTeamsByLeagueId } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "./ui/Card";

export default async function TeamsList({ league_id }) {
    const { teams } = await getTeamsByLeagueId(league_id);

    return teams?.map((t) => {
        return (
            <Card
                key={t._id}
                value={t.name}
                className="p-4  my-3 flex justify-between gap-5 items-start flex-col"
            >
                <CardHeader className="font-bold text-2xl">{t.name}</CardHeader>
                <CardContent>{t.homeCourse}</CardContent>
            </Card>
        );
    });
}
