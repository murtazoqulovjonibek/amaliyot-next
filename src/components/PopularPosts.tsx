import PostCard from "./PostCard"

export default function PopularPosts() {
  return (
    <section className="popular">

      <div className="popularpost-top">

        <h3>Popular Post</h3>

        <button className="popular-viewBtn">View All</button>

      </div>

      <div className="popularGrid">

        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />

      </div>

    </section>
  )
}