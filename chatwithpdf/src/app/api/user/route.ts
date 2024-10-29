import connectMongo from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongo();

  const users = await User.find();
  return NextResponse.json({ meassge: "success", data: users, status: 200 });
}
