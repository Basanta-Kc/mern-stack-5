import connectMongo from "@/lib/db";
import Post from "@/models/Post";
import { NextRequest, NextResponse } from "next/server";

// type User = {
//     id: number,
//     name: string,
// }

// const basanta:User = {
//     id: 1,
//     name: 'basanta'
// }

// type NextRequest = {

// }

type Params = {
  params: {
    id: string;
  };
};

export async function DELETE(request: NextRequest, { params }: Params) {
  await connectMongo();
  await Post.deleteOne({ _id: params.id });
  return NextResponse.json({
    message: "Post deleted succesfully",
  });
}

export async function PUT(request: NextRequest, { params }: Params) {
  await connectMongo();
  const data = await request.json();
  await Post.updateOne({ _id: params.id }, data);
  return NextResponse.json(
    {
      message: "Post udpated succesfully",
    },
    {
      status: 201,
    }
  );
}

export async function GET(request, { params }: Params) {
  await connectMongo();
  const post = await Post.findOne({ _id: params.id });
  return NextResponse.json(post);
}
