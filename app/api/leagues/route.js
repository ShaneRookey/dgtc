import connectMongoDB from "@/lib/mongodb";
import League from "@/models/league";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { name, region, teams } = await request.json();
    await connectMongoDB();
    await League.create({
        name,
        region,
        teams,
    });
    return NextResponse.json({ message: "League Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const leagues = await League.find();
    return NextResponse.json({ leagues });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await League.findByIdAndDelete(id);
    return NextResponse.json({ message: "League deleted" }, { status: 200 });
}
