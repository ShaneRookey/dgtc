'use client';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function Roster() {
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const player = { firstName: firstName, lastName: lastName };
		await updateRoster(player).then(() => {
			router.refresh();
		});
	};

	return (
		<div className="flex flex-col gap-5">
			<form
				className="flex gap-5 border rounded-md p-5"
				onSubmit={handleSubmit}
			>
				<input
					onChange={(e) => setNewFirstName(e.target.value)}
					value={firstName}
					className="border border-slate-500 px-8 py-2"
					type="text"
					placeholder="Player First Name"
				/>
				<input
					onChange={(e) => setNewLastName(e.target.value)}
					value={lastName}
					className="border border-slate-500 px-8 py-2"
					type="text"
					placeholder="Player Last Name"
				/>
				<Button type="submit">Add Player</Button>
			</form>
			<div className="flex gap-5 border rounded-md p-5">
				<h1>Players</h1>
			</div>
		</div>
	);
}

export default Roster;
