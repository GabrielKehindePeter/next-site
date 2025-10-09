import React from "react";
import PageBanner from "../Components/PageBanner";
import Link from "next/link";

const Page = async ({ searchParams }) => {
  // extract the id from URL: /blog-detail?id=1
  const id = searchParams?.id;

  // fetch a single post
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return (
    <div>
      <PageBanner name="Blog Details" />

      <div className="p-10 pt-30 pb-30">
        <h1 className="text-3xl font-bold text-gray-200 mb-4">
          {data.title}
        </h1>
        <p className="text-gray-400 whitespace-pre-line">{data.body}</p><br />
        <Link href={'/blog'} className="btn bg-gray-400 text-gray-800 shadow-md shadow-amber-400 rounded-sm hover:bg-amber-500 mt-3">Back</Link>
      </div>
    </div>
  );
};

export default Page;
