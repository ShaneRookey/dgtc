import connectMongoDB from '@/lib/mongoose';
import Player from '@/models/player';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
	const { team_id } = params;
	await connectMongoDB();
	const players = await Player.find({ team: team_id });
	return NextResponse.json({ players }, { status: 200 });
}
