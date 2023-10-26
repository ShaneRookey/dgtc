import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

// LEAGUE HELPERS

export const getAllLeagues = async () => {
	try {
		const res = await fetch('http://localhost:3000/api/leagues', {
			cache: 'no-store',
		});

		if (!res.ok) {
			throw new Error('Failed to fetch leagues');
		}
		return res.json();
	} catch (error) {
		console.log('Error loading leagues: ', error);
	}
};

export const createNewLeague = async (name, region, teams) => {
	try {
		const res = await fetch('http://localhost:3000/api/leagues', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({
				name,
				region,
				teams,
			}),
		});

		if (!res.ok) {
			throw new Error('Failed to create a league');
		}
		return res.json();
	} catch (error) {
		console.log('Error creating league', error);
	}
};

export const getLeagueById = async (league_id) => {
	try {
		const res = await fetch(
			`http://localhost:3000/api/league/${league_id}`,
			{
				cache: 'no-store',
			}
		);

		if (!res.ok) {
			throw new Error('Failed to fetch league');
		}

		return res.json();
	} catch (error) {
		console.log(error);
	}
};

// POOL HELPERS
export const getPoolByPoolId = async (pool_id) => {
	try {
		const res = await fetch(`http://localhost:3000/api/pool/${pool_id}`, {
			cache: 'no-store',
		});

		if (!res.ok) {
			throw new Error('Failed to fetch pools');
		}

		return res.json();
	} catch (error) {
		console.log('Error loading pools: ', error);
	}
};

export const getPoolsByLeagueId = async (league_id) => {
	try {
		console.log(process.env.BASE_URL);
		const res = await fetch(
			`http://localhost:3000/api/league/${league_id}/pools`,
			{
				cache: 'no-store',
			}
		);

		if (!res.ok) {
			throw new Error('Failed to fetch pools');
		}

		return res.json();
	} catch (error) {
		console.log('Error loading pools: ', error);
	}
};

export const updateTeam = async (
	team_id,
	newName,
	newHomeCourse,
	newAddress,
	newCaptainOne,
	newCaptainTwo,
	newCaptainThree,
	newPool
) => {
	try {
		const res = await fetch(`http://localhost:3000/api/team/${team_id}`, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({
				newName,
				newHomeCourse,
				newAddress,
				newCaptainOne,
				newCaptainTwo,
				newCaptainThree,
				newPool,
			}),
		});

		if (!res.ok) {
			throw new Error('Failed to update team');
		}
	} catch (error) {
		console.log('Error updating team: ', error);
	}
};

export const updateRoster = async (roster) => {
	try {
		const res = await fetch(`http://localhost:3000/api/team/${team_id}`, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({
				roster,
			}),
		});

		if (!res.ok) {
			throw new Error('Failed to update team');
		}
	} catch (error) {
		console.log('Error updating team: ', error);
	}
};

export const createPoolByLeagueId = async (league_id, name, commissioner) => {
	try {
		const res = await fetch(
			`http://localhost:3000/api/league/${league_id}/pools`,
			{
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify({
					name,
					commissioner,
					league: league_id,
				}),
			}
		);

		if (!res.ok) {
			throw new Error('Failed to add pool');
		}

		return res.json();
	} catch (error) {
		console.log('Error loading pools: ', error);
	}
};

// TEAM HELPERS

export const getTeamByTeamId = async (team_id) => {
	try {
		const res = await fetch(`http://localhost:3000/api/team/${team_id}`, {
			cache: 'no-store',
		});

		if (!res.ok) {
			throw new Error('Failed to fetch team');
		}

		return res.json();
	} catch (error) {
		console.log(error);
	}
};

export const getTeamsByLeagueId = async (league_id) => {
	try {
		const res = await fetch(
			`http://localhost:3000/api/league/${league_id}/teams`,
			{
				cache: 'no-store',
			}
		);

		if (!res.ok) {
			throw new Error('Failed to fetch teams');
		}

		return res.json();
	} catch (error) {
		console.log('Error loading teams: ', error);
	}
};

export const getTeamsByPoolId = async (pool_id) => {
	try {
		const res = await fetch(
			`http://localhost:3000/api/pool/${pool_id}/teams`,
			{
				cache: 'no-store',
			}
		);

		if (!res.ok) {
			throw new Error('Failed to fetch pools');
		}

		return res.json();
	} catch (error) {
		console.log('Error loading pools: ', error);
	}
};

export const createTeamByPoolId = async (
	pool_id,
	league,
	name,
	homeCourse,
	address,
	captainOne,
	captainTwo,
	captainThree
) => {
	try {
		const res = await fetch(
			`http://localhost:3000/api/pool/${pool_id}/teams`,
			{
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify({
					league,
					pool: pool_id,
					name,
					homeCourse,
					address,
					captainOne,
					captainTwo,
					captainThree,
				}),
			}
		);

		if (!res.ok) {
			throw new Error('Failed to create a team');
		}
		return res.json();
	} catch (error) {
		console.log(error);
	}
};

// Users

export const createNewUser = async (firstName, lastName, email) => {
	try {
		const res = await fetch('http://localhost:3000/api/user', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({
				firstName,
				lastName,
				email,
			}),
		});
		if (res.status !== 400 && !res.ok) {
			throw new Error('Failed to create a user');
		}
		return res.json();
	} catch (error) {
		console.log('Error creating user', error);
	}
};
export const getUserByUserId = async (user_id) => {
	try {
		const res = await fetch(`http://localhost:3000/api/user/${user_id}`, {
			cache: 'no-store',
		});

		if (!res.ok) {
			throw new Error('Failed to fetch team');
		}

		return res.json();
	} catch (error) {
		console.log(error);
	}
};
