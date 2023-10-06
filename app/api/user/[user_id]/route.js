import connectMongoDB from "@/lib/mongoose";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { user_id } = params;
    await connectMongoDB();
    const user = await User.findOne({ _id: user_id });
    return NextResponse.json({ user }, { status: 200 });
}
