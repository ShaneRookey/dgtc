import connectMongoDB from "@/lib/mongoose";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { email, firstName, lastName } = await request.json();
    await connectMongoDB();
    const user = await User.exists({ email: email });
    if (user) {
        return NextResponse.json(
            { message: "Email already in use" },
            { status: 400 }
        );
    }
    const newUser = await User.create({
        email,
        firstName,
        lastName,
    });
    return NextResponse.json(
        { created_id: newUser._id, message: "User Created" },
        { status: 201 }
    );
}
