import LeagueDashboard from "@/components/dashboards/LeagueDashboard";

function LeagueView({ params }) {
    const { league_id } = params;
    return <LeagueDashboard league_id={league_id} />;
}

export default LeagueView;
