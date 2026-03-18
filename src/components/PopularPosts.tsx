import { Post } from "@/types/type"
import PostCard from "./PostCard"
import Link from "next/link"

export default function PopularPosts({ posts }: { posts: Post[] }) {
  return (
    <section className="popular">

      <div className="popularpost-top">

        <h3>Popular Post</h3>

        <Link href="/blog">
          <button className="popular-viewBtn">View All</button>
        </Link>

      </div>

      <div className="popularGrid">

        {posts.map((post) => (
          <PostCard key={post.id} post={post}/>
        ))}

      </div>

    </section>
  )
}