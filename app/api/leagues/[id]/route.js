import connectMongoDB from "@/lib/mongodb";
import League from "@/models/league";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const { newName: name, newRegion: region } = await request.json();
    await connectMongoDB();
    await League.findByIdAndUpdate(id, {
        name,
        region,
    });
    return NextResponse.json({ message: "League updated" }, { status: 200 });
}

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const league = await League.findOne({ _id: id }).populate("teams").exec();
    return NextResponse.json({ league }, { status: 200 });
}
