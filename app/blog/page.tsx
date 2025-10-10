import React from "react";
import PageBanner from "../Components/PageBanner";
import Search from "../Components/Search";
import PostsClient from "../Components/PostsClient";

type Props = {
  searchParams: {
    search?: string;
    page?: string;
  };
};

export default function Page({ searchParams }: Props) {
  const initialSearch = searchParams?.search ?? "";
  // parse page, fallback to 1 if missing or NaN
  const parsed = parseInt(searchParams?.page ?? "1", 10);
  const initialPage = Number.isNaN(parsed) ? 1 : parsed;

  return (
    <div>
      <PageBanner pagename="Blog" />
      <div className="p-8 mb-20">
        <Search initialValue={initialSearch} />
        <PostsClient initialSearch={initialSearch} initialPage={initialPage} />
      </div>
    </div>
  );
}
