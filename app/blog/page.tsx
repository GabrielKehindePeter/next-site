import PageBanner from "../Components/PageBanner";
import Search from "../Components/Search";
import PostsClient from "../Components/PostsClient";

export default function Page({ searchParams }) {
  const initialSearch = searchParams?.search ?? "";
  const initialPage = parseInt(searchParams?.page ?? "1", 10);

  return (
    <div>
      <PageBanner name="Blog" />
      <div className="p-8 mb-20">
        <Search initialValue={initialSearch} />
        <PostsClient initialSearch={initialSearch} initialPage={initialPage} />
      </div>
    </div>
  );
}
