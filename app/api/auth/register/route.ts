import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import User from "@/models/User";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email or Password is missing" },
        { status: 400 }
      );
    }
    console.log(email, password);

    await connectToDatabase();

    const existedUser = await User.findOne({ email });
    if (existedUser) {
      return NextResponse.json(
        { error: "Email is already existed" },
        { status: 400 }
      );
    }

    const createUser = await User.create({ email, password });

    if (!createUser) {
      return NextResponse.json(
        { error: "Server error while creating user, Please try again" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: "User Registered Successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
