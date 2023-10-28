import connectMongoDB from '@/lib/mongoose';
import Player from '@/models/player';
import { NextResponse } from 'next/server';

export async function POST(request) {
	const { firstName, lastName, team } = await request.json();
	await connectMongoDB();
	const player = await Player.create({
		firstName,
		lastName,
		team,
	}).then((res) => res);
	return NextResponse.json(
		{ created_id: player._id, message: 'player Created' },
		{ status: 201 }
	);
}
