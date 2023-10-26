import { Button } from '@/components/ui/Button';
import { Card, CardHeader } from '@/components/ui/Card';
import PermissionWall from '@/components/utility/PermissionWall';
import { getAllLeagues } from '@/lib/utils';
import Link from 'next/link';

async function LeagueViewer() {
	const { leagues } = await getAllLeagues();
	return (
		<div className="flex flex-col m-5 gap-3">
			<div className="flex items-center border rounded-md p-3">
				<h1>Commissioner Tools:</h1>
				<PermissionWall>
					<Button asChild className="m-3 p-3">
						<Link href={'/leagues/addLeague'}>Add League</Link>
					</Button>
				</PermissionWall>
			</div>
			{leagues?.map((league) => {
				const league_id = league._id;
				return (
					<Card className="w-full">
						<CardHeader>
							<Button variant="link" className="text-3xl">
								<Link href={`/league/${league_id}`}>
									{league.name}
								</Link>
							</Button>
						</CardHeader>
					</Card>
				);
			})}
		</div>
	);
}

export default LeagueViewer;
