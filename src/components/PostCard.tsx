import { Post } from "@/types/type"
import Link from "next/link"

export default function PostCard({ post }: { post: Post }) {

  return (
    <div className="postCard">

      <img src={post?.image} alt="post image" className="postImage1"/>

      <div className="postInfo">

        <p className="postTravel">
          {post?.category}<span className="post-date"> {post?.date}</span>
        </p>

        <h6 className="postTitle">
          {post?.title}
        </h6>

        <p className="postDesc">
          {post?.desc}
        </p>

        <Link href={`/blog/${post?.id}`} className="post-readMore">
          Read More...
        </Link>

      </div>

    </div>
  )
}