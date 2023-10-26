'use client';
import { createPoolByLeagueId, getPoolsByLeagueId } from '@/lib/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from './ui/Button';
import { Card, CardHeader } from './ui/Card';

function PoolManager({ league_id, noLink, noEdit }) {
	const [poolName, setPoolName] = useState();
	const [commissioner, setCommissioner] = useState('coming soon');
	const [allPools, setAllPools] = useState();
	const [refresh, setRefresh] = useState(true);

	useEffect(() => {
		if (refresh) {
			getPoolsByLeagueId(league_id).then((res) => {
				setAllPools(res.pools);
				setRefresh(false);
			});
		}
	}, [refresh]);

	const handleNewPool = () => {
		createPoolByLeagueId(league_id, poolName, commissioner).then(() => {
			setPoolName('');
			setRefresh(true);
		});
	};

	return (
		<div className="flex flex-col ">
			{noEdit ? undefined : (
				<div className="flex gap-5 p-5">
					<Button onClick={handleNewPool}>Add Pool</Button>
					<input
						value={poolName}
						onChange={(e) => setPoolName(e.target.value)}
						className="border border-slate-500 px-8 py-2"
						type="text"
						placeholder="Pool Name"
					/>
					<input
						readOnly
						value={commissioner}
						className="border border-slate-500 px-8 py-2"
						type="text"
						placeholder="Commissioner - Coming Soon!"
					/>
				</div>
			)}
			<div>
				{allPools?.map((pool, i) => {
					const pool_id = pool._id;
					return (
						<Card key={i} className="w-full">
							<CardHeader>
								{noLink ? (
									<h1>{pool.name}</h1>
								) : (
									<Button variant="link">
										<Link href={`/pool/${pool_id}`}>
											{pool.name}
										</Link>
									</Button>
								)}
							</CardHeader>
						</Card>
					);
				})}
			</div>
		</div>
	);
}

export default PoolManager;
