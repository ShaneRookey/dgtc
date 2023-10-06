import connectMongoDB from "@/lib/mongoose";
import Pool from "@/models/pool";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { pool_id } = params;
    await connectMongoDB();
    const teams = await Pool.find({ pool: pool_id });
    return NextResponse.json({ teams }, { status: 200 });
}
