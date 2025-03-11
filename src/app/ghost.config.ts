const API_URL = "http://localhost:2368/ghost/api/content/posts";
const API_KEY = "e2cb9e6e0d7d6688c7326d172a"; // Thay bằng API Key của bạn

export async function getPosts() {
  const url = `${API_URL}/?key=${API_KEY}&limit=10&include=tags,authors`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(
      `Failed to fetch posts: ${res.statusText}\nResponse: ${text}`
    );
  }

  const data = await res.json();
  return data.posts;
}
