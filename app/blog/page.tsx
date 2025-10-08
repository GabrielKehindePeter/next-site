
import PageBanner from "../Components/PageBanner";
import Search from "../Components/Search";

const Page = async () => {
  //  Await the fetch 
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

 
  return (
    <div>
      <PageBanner name="Blog" />
      <div className="p-8 mb-20">
        {/* <h1 className="text-2xl font-bold mb-6">Posts</h1> */}

     <Search />


        {posts.slice(0, 10).map((post) => ( // limit to first 10 for brevity
          <div
            key={post.id}
            className="mb-6 p-4 border border-gray-300 rounded-lg shadow-sm"
          >
            <h2 className="font-semibold text-lg text-amber-600">
              {post.title}
            </h2>
            <p className="text-gray-700 mt-2 whitespace-pre-line">{post.body}</p>
            <button key={post.id} href='/red-more' className="btn bg-amber-900 rounded-sm hover:bg-amber-600">Read More</button>
          </div>
        ))}


              <div className="join">
                <button className="join-item btn">Prev</button>
                <button className="join-item btn">Page 22</button>
                <button className="join-item btn">Next</button>
                </div>
      </div>


    </div>
  );
};

export default Page;
