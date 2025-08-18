import { authOptions } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import video, { IVideo } from "@/models/Video";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDatabase();
    const videos = await video.find({}).sort({ createdAt: -1 }).lean();
    if (!video || video.length === 0) {
      return NextResponse.json([], { status: 404 });
    }
    return NextResponse.json(videos, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "falied to fetch video" },
      { status: 404 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
    }
    await connectToDatabase();
    const body: IVideo = await request.json();
    if (
      !body.title ||
      !body.thumbnailUrl ||
      !body.description ||
      !body.videoUrl
    ) {
      return NextResponse.json(
        { error: "Missing required feilds" },
        { status: 400 }
      );
    }

    const videoData: IVideo = {
      ...body,
      controls: body.controls! ?? "true",
      tranformation: {
        height: 1920,
        width: 1080,
        quality: body.tranformation?.quality ?? 100,
      },
    };

    const newVideo = await video.create(videoData);
    return NextResponse.json(newVideo);
  } catch (error) {
    return NextResponse.json(
      { error: "falied to create video" },
      { status: 500 }
    );
  }
}
