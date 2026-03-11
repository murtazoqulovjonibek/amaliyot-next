import PostCard from "./PostCard";

export default function RecentPosts() {
  return (
    <div className="recentPost">
      <div className="recenpost-top">
        <h3>Our Recent Post</h3>

        <button className="recent-viewBtn">View All</button>

      </div>

      <div className="recentpost-bottom">

        <img src="/FeaturedPost.png"/>

        <div className="recentText">

          <span className="recent-development">DEVELOPMENT<span className="recent-date">16 March 2023</span></span>

          <h3>
            How to make a Game look more attractive with New VR & AI Technology
          </h3>

          <p>
            Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.
          </p>

          <button className="recent-btn">Read More</button>

        </div>

      </div>

    <div className="postGrid container">

      <PostCard/>
      <PostCard/>
      <PostCard/>

    </div>

    </div>  
)
}
