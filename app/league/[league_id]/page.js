import PoolManager from '@/components/PoolManager';
import { Button } from '@/components/ui/Button';
import { Separator } from '@/components/ui/Separator';
import PermissionWall from '@/components/utility/PermissionWall';
import { getLeagueById } from '@/lib/utils';
import Link from 'next/link';

async function LeagueView({ params }) {
	const { league_id } = params;
	const { league } = await getLeagueById(league_id);
	return (
		<div className="m-5 flex flex-col gap-5">
			<div className="grid grid-flow-col justify-start items-center">
				<div className="flex flex-col align-middle">
					<h1 className="text-4xl">{league.name}</h1>
					<h1 className="text-3xl text-muted-foreground">
						{league.region}
					</h1>
				</div>
				<PermissionWall>
					<Button variant="link">
						<Link href={`${league_id}/editLeague`}>Edit</Link>
					</Button>
				</PermissionWall>
			</div>
			<PoolManager league_id={league_id} noEdit />
		</div>
	);
}

export default LeagueView;
