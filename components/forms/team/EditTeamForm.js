'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '../../ui/Button';
import Link from 'next/link';
import { updateTeam } from '@/lib/utils';

export default function EditTeamForm({
	team_id,
	name,
	homeCourse,
	address,
	captainOne,
	captainTwo,
	captainThree,
}) {
	const [newName, setNewName] = useState(name);
	const [newHomeCourse, setNewHomeCourse] = useState(homeCourse);
	const [newAddress, setNewAddress] = useState(address);
	const [newCaptainOne, setNewCaptainOne] = useState(captainOne);
	const [newCaptainTwo, setNewCaptainTwo] = useState(captainTwo);
	const [newCaptainThree, setNewCaptainThree] = useState(captainThree);

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await updateTeam(
			team_id,
			newName,
			newHomeCourse,
			newAddress,
			newCaptainOne,
			newCaptainTwo,
			newCaptainThree
		).then(() => {
			router.refresh();
		});
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col justify-center items-center gap-3"
		>
			<input
				onChange={(e) => setNewName(e.target.value)}
				value={newName}
				className="border border-slate-500 px-8 py-2"
				type="text"
				placeholder="Team Name"
			/>
			<input
				onChange={(e) => setNewHomeCourse(e.target.value)}
				value={newHomeCourse}
				className="border border-slate-500 px-8 py-2"
				type="text"
				placeholder="Home Course"
			/>
			<input
				onChange={(e) => setNewAddress(e.target.value)}
				value={newAddress}
				className="border border-slate-500 px-8 py-2"
				type="text"
				placeholder="Address"
			/>
			<input
				onChange={(e) => setNewCaptainOne(e.target.value)}
				value={newCaptainOne}
				className="border border-slate-500 px-8 py-2"
				type="text"
				placeholder="Captain #1"
			/>
			<input
				onChange={(e) => setNewCaptainTwo(e.target.value)}
				value={newCaptainTwo}
				className="border border-slate-500 px-8 py-2"
				type="text"
				placeholder="Captain #2"
			/>
			<input
				onChange={(e) => setNewCaptainThree(e.target.value)}
				value={newCaptainThree}
				className="border border-slate-500 px-8 py-2"
				type="text"
				placeholder="Captain #3"
			/>
			<Button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
				<Link href={'roster'}>Manage Roster</Link>
			</Button>
			<Button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
				Update Team
			</Button>
		</form>
	);
}
