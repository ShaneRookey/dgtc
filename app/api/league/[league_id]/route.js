import connectMongoDB from "@/lib/mongoose";
import League from "@/models/league";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { league_id } = params;
    const { newName: name, newRegion: region } = await request.json();
    await connectMongoDB();
    await League.findByIdAndUpdate(league_id, {
        name,
        region,
    });
    return NextResponse.json({ message: "League updated" }, { status: 200 });
}

export async function GET(request, { params }) {
    const { league_id } = params;
    await connectMongoDB();
    const league = await League.findOne({ _id: league_id });
    return NextResponse.json({ league }, { status: 200 });
}
