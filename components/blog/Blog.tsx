import { Tabs } from "../tabs";
import { BlogPost } from "../blogPost";
import posts from "../../dummyData/posts.json";

function Blog() {
  const { posts: postsData } = posts;
  return (
    <div>
      <Tabs />
      <div className="blog">
        {postsData.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
export default Blog;
