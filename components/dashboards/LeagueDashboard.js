import { getLeagueById } from '@/lib/utils';
import Link from 'next/link';
import PoolManager from '../PoolManager';
import { Button } from '../ui/Button';
import PermissionWall from '../utility/PermissionWall';

async function LeagueDashboard({ league_id }) {
	const { league } = await getLeagueById(league_id);
	return (
		<div>
			<div className="grid grid-flow-col justify-start items-center">
				<div className="flex flex-col align-middle">
					<h1 className="text-4xl  mx-5">{league.name}</h1>
					<h1 className="text-3xl  mx-5 text-muted-foreground">
						{league.region}
					</h1>
				</div>
				<PermissionWall>
					<Button variant="link">
						<Link href={`${league_id}/editLeague`}>Edit</Link>
					</Button>
				</PermissionWall>
			</div>
			<div>
				<PoolManager league_id={league_id} noEdit />
			</div>
		</div>
	);
}

export default LeagueDashboard;
