import connectMongoDB from "@/lib/mongoose";
import Pool from "@/models/pool";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { name, commissioner, league } = await request.json();
    await connectMongoDB();
    await Pool.create({
        name,
        commissioner,
        league,
    });
    return NextResponse.json({ message: "Pool Created" }, { status: 201 });
}

export async function GET(request, { params }) {
    const { league_id } = params;
    await connectMongoDB();
    const pools = await Pool.find({ league: league_id });
    return NextResponse.json({ pools });
}
