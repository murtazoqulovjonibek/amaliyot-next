import PostCard from "@/components/PostCard"
import Subscribe from "@/components/Subscribe.tsx"

export default function BlogPage() {
  return (
    <main className="blogPage">

      <div className="blogHeader">

        <p className="blogSmall">OUR BLOG</p>

        <h1>Find our all blogs from here</h1>

        <p className="blogDesc">
          our blogs are written from very research research and well known writers
          writers so that we can provide you the best blogs and articles for you
          to read them all along
        </p>

      </div>

      <div className="blogGrid">

        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>

      </div>

    </main>
  )
}