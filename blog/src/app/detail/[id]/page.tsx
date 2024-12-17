import connectMongo from "@/lib/db";
import Post from "@/models/Post";
import Link from "next/link";

export default async function DetailPage({ params }) {
  await connectMongo();
  const post = await Post.findById(params.id);
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 mb-4">{post.content}</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Back to Home
      </Link>
    </div>
  );
}
