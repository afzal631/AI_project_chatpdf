import connectMongo from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

interface User {
  username: string;
  email: string;
  password: string;
}

export async function POST(req: Request, res: Response) {
  try {
    await connectMongo();
    const { username, email, password }: User = await req.json();

    const newUser = new User({
      username,
      email,
      password,
    });
    const isExist = await User.findOne({ email });
    if (isExist) {
      return NextResponse.json({
        message: "Account already exists",
        status: 409,
      });
    }

    await newUser.save();
    return NextResponse.json({ message: "Success", status: 200 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ message: "failure", status: 500 });
  }
}
