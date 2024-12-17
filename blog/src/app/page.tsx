import connectMongo from "@/lib/db";
import Post from "@/models/Post";
import Link from "next/link";

export default async function Home() {
  await connectMongo();
  const posts = await Post.find();

  return (
    <>
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6">Blog Posts</h1>
        <div className="space-y-4">
          {posts.map(({ _id, title, content }) => (
            <div key={_id} className="bg-white shadow-md rounded p-4">
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className="text-gray-600">{content}</p>
              <div className="mt-4 flex space-x-2">
                <Link
                  href="/detail/123"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  View Details
                </Link>
                <Link
                  href="/edit/123"
                  className="bg-yellow-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </Link>
                <button className="bg-red-500 text-white px-4 py-2 rounded">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// paht="/orders/:id"  {id} = useParams()
