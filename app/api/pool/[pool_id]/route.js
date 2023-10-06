import connectMongoDB from "@/lib/mongoose";
import Pool from "@/models/pool";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { pool_id } = params;
    await connectMongoDB();
    const pool = await Pool.findOne({ _id: pool_id });
    return NextResponse.json({ pool }, { status: 200 });
}
