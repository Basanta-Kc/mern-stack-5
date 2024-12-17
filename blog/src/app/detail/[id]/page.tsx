import Link from "next/link";

export default function DetailPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Blog Post Title</h1>
      <p className="text-gray-700 mb-4">
        Detailed content of the blog post goes here...
      </p>
      <Link href="/" className="text-blue-500 hover:underline">
        Back to Home
      </Link>
    </div>
  );
}
