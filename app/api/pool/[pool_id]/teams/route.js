import connectMongoDB from "@/lib/mongoose";
import Team from "@/models/team";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {
        league,
        pool,
        name,
        address,
        captainOne,
        captainTwo,
        captainThree,
    } = await request.json();
    await connectMongoDB();
    await Team.create({
        league,
        pool,
        name,
        address,
        captainOne,
        captainTwo,
        captainThree,
    });
    return NextResponse.json({ message: "Team Created" }, { status: 201 });
}

export async function GET(request, { params }) {
    const { pool_id } = params;
    await connectMongoDB();
    const teams = await Team.find({ pool: pool_id });
    return NextResponse.json({ teams: teams });
}
