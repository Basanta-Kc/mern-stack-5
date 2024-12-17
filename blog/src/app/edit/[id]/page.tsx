import connectMongo from "@/lib/db";
import Post from "@/models/Post";
import { redirect } from "next/navigation";

export default async function EditBlog({ params }) {
  await connectMongo();
  const post = await Post.findById(params.id);

  const updatePost = async (formData) => {
    "use server";
    await connectMongo();
    await Post.updateOne(
      { _id: params.id },
      {
        title: formData.get("title"),
        content: formData.get("content"),
      }
    );
    redirect("/");
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Edit Blog</h1>
      <form action={updatePost} className="bg-white shadow-md rounded p-6">
        <div className="mb-4">
          <label className="block text-gray-700">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={post.title}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter blog title"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Content:</label>
          <textarea
            id="content"
            name="content"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter blog content"
            defaultValue={post.content}
            rows={6}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
}
