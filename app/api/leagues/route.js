import connectMongoDB from "@/lib/mongoose";
import League from "@/models/league";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { name, region } = await request.json();
    await connectMongoDB();
    const league = await League.create({
        name,
        region,
    }).then((res) => res);
    return NextResponse.json(
        { created_id: league._id, message: "League Created" },
        { status: 201 }
    );
}

export async function GET() {
    await connectMongoDB();
    const leagues = await League.find();
    return NextResponse.json({ leagues }, { status: 200 });
}
