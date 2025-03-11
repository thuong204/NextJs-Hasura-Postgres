import { getPosts } from "../ghost.config";

export default async function Blog() {
  const posts = await getPosts(); // Lấy danh sách bài viết

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-red-500">
        Danh sách bài viết
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post: any) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition hover:scale-105"
          >
            {post.feature_image && (
              <img
                src={post.feature_image}
                alt={post.feature_image_alt || post.title}
                className="!w-[400px] h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {post.title}
              </h2>
              <p className="text-gray-600 mt-2">{post.excerpt}</p>
              <div className="flex items-center mt-4 text-gray-500 text-sm">
                <span>✍ {post.primary_author?.name || "Ẩn danh"}</span>
                <span className="ml-4">
                  📅 {new Date(post.published_at).toLocaleDateString()}
                </span>
              </div>
              <a
                href={post.url}
                target="_blank"
                className="block mt-4 text-blue-600 font-medium hover:underline"
              >
                Đọc thêm →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
