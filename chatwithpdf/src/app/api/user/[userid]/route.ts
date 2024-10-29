import connectMongo from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { userid: string } }
) {
  await connectMongo();
  const { userid } = params;
  return NextResponse.json(`success ${userid}`);
}
