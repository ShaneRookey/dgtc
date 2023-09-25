import connectMongoDB from "@/lib/mongodb";
import Team from "@/models/team";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {
        name,
        homeCourse,
        address,
        captainOne,
        captainTwo,
        captainThree,
        pool,
    } = await request.json();
    await connectMongoDB();
    await Team.create({
        name,
        homeCourse,
        address,
        captainOne,
        captainTwo,
        captainThree,
        pool,
    });
    return NextResponse.json({ message: "Team Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const teams = await Team.find();
    return NextResponse.json({ teams });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Team.findByIdAndDelete(id);
    return NextResponse.json({ message: "Team deleted" }, { status: 200 });
}
