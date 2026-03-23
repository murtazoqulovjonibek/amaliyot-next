import { Post } from "@/types/type"
import PostCard from "./PostCard"
import Link from "next/link"

export default function RecentPosts({ posts }: { posts: Post[] }) {

  const mainPost = posts[0]

  return (
    <div className="recentPost">

      <div className="recenpost-top">

        <h3>Our Recent Post</h3>

        <Link href="/blog">
          <button className="recent-viewBtn">View All</button>
        </Link>

      </div>

      {mainPost && (
        <div className="recentpost-bottom">

          <img src={mainPost.image} alt={mainPost.title}/>

          <div className="recentText">

            <span className="recent-development">
              {mainPost.category}
              <span className="recent-date"> {mainPost.date}</span>
            </span>

            <h3>{mainPost.title}</h3>

            <p>{mainPost.desc.length > 120 ? mainPost.desc.slice(0 , 600) + '...' : mainPost.desc}</p>

            <Link href={`/blog/${mainPost.id}`}>
              <button className="recent-btn">Read More</button>
            </Link>

          </div>

        </div>
      )}

      <div className="postGrid">

        {posts.map(post => (
          <PostCard key={post.id} post={post}/>
        ))}

      </div>

    </div>
  )
}