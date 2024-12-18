import connectMongo from "@/lib/db";
import Post from "@/models/Post";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  await connectMongo();
  const posts = await Post.find();
  return NextResponse.json(posts);
}

export async function POST(request: NextRequest) {
  await connectMongo();
  const data = await request.json();
  await Post.create(data);
  return NextResponse.json({
    message: "Post created succesfully",
  });
}
