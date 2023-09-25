import connectMongoDB from "@/lib/mongodb";
import Team from "@/models/team";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const {
        newName: name,
        newHomeCourse: homeCourse,
        newAddress: address,
        newCaptainOne: captainOne,
        newCaptainTwo: captainTwo,
        newCaptainThree: captainThree,
        newPool: pool,
    } = await request.json();
    await connectMongoDB();
    await Team.findByIdAndUpdate(id, {
        name,
        homeCourse,
        address,
        captainOne,
        captainTwo,
        captainThree,
        pool,
    });
    return NextResponse.json({ message: "Team updated" }, { status: 200 });
}

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const team = await Team.findOne({ _id: id }).populate("leagueId").exec();
    return NextResponse.json({ team }, { status: 200 });
}
