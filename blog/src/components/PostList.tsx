import connectMongo from "@/lib/db";
import Post from "@/models/Post";
import { revalidatePath } from "next/cache";
import Link from "next/link";

export default async function PostList() {
  await new Promise((resolve, reject) => {
    setTimeout(() => resolve("success"), 4000);
  });

  await connectMongo();
  const posts = await Post.find();

  const deletePost = async (formData) => {
    "use server";
    await connectMongo();
    await Post.findByIdAndDelete(formData.get("id"));
    revalidatePath("/");
  };
  return (
    <>
      {posts.map(({ _id, title, content }) => (
        <div key={_id} className="bg-white shadow-md rounded p-4">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="text-gray-600">{content}</p>
          <div className="mt-4 flex space-x-2">
            <Link
              href={`/detail/${_id}`}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              View Details
            </Link>
            <Link
              href={`/edit/${_id}`}
              className="bg-yellow-500 text-white px-4 py-2 rounded"
            >
              Edit
            </Link>
            <form action={deletePost}>
              <input type="hidden" defaultValue={_id.toString()} name="id" />
              <button
                type="submit"
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </form>
          </div>
        </div>
      ))}
    </>
  );
}
