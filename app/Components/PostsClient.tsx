"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

interface Post {
  userId?: number;
  id: number;
  title: string;
  body: string;
}

type Props = {
  initialSearch?: string;
  initialPage?: number;
};

export default function PostsClient({
  initialSearch = "",
  initialPage = 1,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const urlSearch = searchParams?.get("search") ?? initialSearch;

  // parse page param; fallback to initialPage (or 1)
  const parsedPage = parseInt(searchParams?.get("page") ?? String(initialPage), 10);
  const urlPage = Number.isNaN(parsedPage) ? initialPage ?? 1 : Math.max(1, parsedPage);

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const PAGE_SIZE = 9;
  const [page, setPage] = useState<number>(urlPage);

  useEffect(() => {
    setPage(urlPage >= 1 ? urlPage : 1);
  }, [urlPage]);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch posts");
        return res.json() as Promise<Post[]>;
      })
      .then((data) => {
        if (!cancelled) setPosts(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err?.message ?? "Error fetching posts");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const term = (urlSearch || "").trim().toLowerCase();
  const filtered = term
    ? posts.filter(
        (p) =>
          p.title.toLowerCase().includes(term) ||
          p.body.toLowerCase().includes(term)
      )
    : posts.slice();

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const visible = filtered.slice(start, start + PAGE_SIZE);

  useEffect(() => {
    const encoded = encodeURIComponent(term);
    const target = encoded ? `/blog?search=${encoded}&page=${currentPage}` : `/blog?page=${currentPage}`;
    router.replace(target);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const goTo = (p: number) => setPage(p);
  const prev = () => goTo(Math.max(1, currentPage - 1));
  const next = () => goTo(Math.min(totalPages, currentPage + 1));

  return (
    <div>
      {loading && <div className="mb-4">Loading posts...</div>}
      {error && <div className="text-red-500 mb-4">Error: {error}</div>}

      {visible.length === 0 && !loading ? (
        <p className="text-gray-600">No posts found.</p>
      ) : (
        <div>
          <div className="border-gray-400 p-2 text-lg border-2 sm:w-full lg:w-80 rounded-2xl mb-10 text-center shadow-lg shadow-amber-400">
            {total} Posts
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 p-1">
            {visible.map((post) => (
              <div
                key={post.id}
                className="mb-6 p-4 border border-gray-300 rounded-lg shadow-sm"
              >
                <h2 className="font-semibold text-lg text-amber-400">{post.title}</h2>
                <p className="text-gray-500 mt-2 whitespace-pre-line">{post.body}</p>

                <Link href={`/blog-detail?id=${post.id}`}>
                  <button className="btn bg-gray-400 text-gray-800 shadow-md shadow-amber-400 rounded-sm hover:bg-amber-500 mt-3">
                    Read More
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pagination controls */}
      <div className="mt-4">
        <div className="join">
          <button
            className="join-item btn bg-amber-500"
            onClick={prev}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {(() => {
            const maxButtons = Math.min(5, totalPages);
            let startBtn = currentPage - Math.floor(maxButtons / 2);
            if (startBtn < 1) startBtn = 1;

            let endBtn = startBtn + maxButtons - 1;
            if (endBtn > totalPages) {
              endBtn = totalPages;
              startBtn = Math.max(1, endBtn - maxButtons + 1);
            }

            const buttons = [];
            for (let p = startBtn; p <= endBtn; p++) {
              buttons.push(
                <button
                  key={p}
                  className={`join-item btn ${p === currentPage ? "btn-active" : ""}`}
                  onClick={() => goTo(p)}
                >
                  {p}
                </button>
              );
            }
            return buttons;
          })()}

          <button
            className="join-item btn bg-amber-500"
            onClick={next}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>

        <p className="text-sm text-gray-500 mt-2">
          Showing {Math.min(total, start + 1)}–{Math.min(total, start + visible.length)} of {total} results
        </p>
      </div>
    </div>
  );
}
