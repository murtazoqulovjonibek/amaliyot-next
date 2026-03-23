import { Post } from "@/types/type"
import { FaRegEye } from "react-icons/fa";
import Link from "next/link"

export default function PostCard({ post }: { post: Post }) {

  return (
    <div className="postCard">

      <img src={post?.image} alt="post image" className="postImage1"/>

      <div className="postInfo">

        <div className="postTravel">
          <div>
            {post?.category}<span className="post-date"> {post?.date}</span>
          </div>
          <span className="single-view"><FaRegEye /> {post.views}</span>
        </div>

        <h6 className="postTitle">
          <Link href={`/blog/${post?.id}`}>
            {post?.title}
          </Link>
        </h6>

        <p className="postDesc">
          {post.desc.length > 120 ? post.desc.slice(0 , 120) + '...' : post.desc}
        </p>

        <Link href={`/blog/${post?.id}`} className="post-readMore">
          Read More...
        </Link>

      </div>

    </div>
  )
}