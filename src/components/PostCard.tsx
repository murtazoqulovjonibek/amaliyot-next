import Link from "next/link"

export default function PostCard() {
  return (
    <div className="postCard">

        <img src="/postcard.png" alt="post image" />

        <div className="postInfo">

            <p className="postTravel">
                Travel <span className="post-date">13 March 2023</span>
            </p>

            <h6 className="postTitle">
                8 Rules Of Travelling In Sea You Need To Know
            </h6>

            <p className="postDesc">
                Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs 
            </p>

            <Link href="#" className="post-readMore">
                Read More...
            </Link>

        </div>

    </div>
  )
}