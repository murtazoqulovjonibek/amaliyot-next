import Link from "next/link"
import { Post } from "@/types/type"

export default function HeroSection({ post }: { post: Post }) {

  return (
    <section className="heroSection">

      <div className="hero-container">

        <div className="heroText">

          <p>Featured Post</p>

          <h1>{post.title}</h1>

          <p>
            {post.desc.length > 120 ? post.desc.slice(0 , 242) + '...' : post.desc}
          </p>

          <Link href={`/blog/${post.id}`}>
            <button className="heroText-button">Read More</button>
          </Link>

        </div>

        <div className="heroImage">
          <img src={post.image} alt={post.title} />
        </div>

      </div>

    </section>
  )
}