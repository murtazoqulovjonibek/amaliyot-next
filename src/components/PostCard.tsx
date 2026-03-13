// import { Post } from "@/types/type"
// import Link from "next/link"

// export default function PostCard({ post }: { post: Post }) {
//   return (
//     <div className="postCard">

//         <img src="/postcard.png" alt="post image" />

//         <div className="postInfo">

//             <p className="postTravel">
//                 Travel <span className="post-date">13 March 2023</span>
//             </p>

//             <h6 className="postTitle">
//                 8 Rules Of Travelling In Sea You Need To Know
//             </h6>

//             <p className="postDesc">
//                 Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs 
//             </p>

//             <Link href="/blog/1" className="post-readMore">
//                 Read More...
//             </Link>

//         </div>

//     </div>
//   )
// }

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