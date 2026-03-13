import PostCard from "@/components/PostCard";

export default function SingleBlog() {
  return (
    <main className="singleBlog">

        <div className="q">
            <div>
                <p className="singleblog-Meta">
                    <span className="single-dev">DEVELOPMENT</span><span className="single-date">16 March 2023</span> ❤️ 24
                </p>

                <h1 className="singlePost">
                    How to make a Game look more attractive with New VR & AI Technology
                </h1>
            </div>
        </div>

        <img
            className="postImage"
            src="/FeaturedPost.png"
            alt="blog image"
        />

        <p className="postText">
            Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.
        </p>

        <p className="postText">
            We’re now at a pivotal moment in our AI journey. Breakthroughs in generative AI are fundamentally changing how people interact with technology — and at Google, we’ve been responsibly developing large language models so we can safely bring them to our products. Today, we’re excited to share our early progress. Developers and businesses can now try new APIs and products that make it easy, safe and scalable to start building with Google’s best AI models through Google Cloud and a new prototyping environment called MakerSuite. And in Google Workspace, we’re introducing new features that help people harness the power of generative AI to create, connect and collaborate.
        </p>

        <div className="singletexts">
            <div>
                <blockquote className="quote">
                    “People worry that computers will get too smart and take over the world, but the real problem is that they’re too stupid and they’ve already taken over the world.”
                </blockquote>
            </div>
        </div>

        <div>

            <div className="singlepost-top">
                <h3>Popular Post</h3>

                <button className="single-viewBtn1">View All</button>
            </div>

            <div className="singleGrid">
                <PostCard />
            </div>

        </div>

    </main>
  )
}