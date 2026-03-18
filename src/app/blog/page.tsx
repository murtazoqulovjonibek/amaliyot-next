import { collection, getDocs } from "firebase/firestore"
import { db } from "@/firebase/firebase.config"
import PostCard from "@/components/PostCard"
import { Post } from "@/types/type"

export default async function BlogPage() {

    const querySnapshot = await getDocs(collection(db,"posts"))

    const posts: Post[] = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<Post,"id">)
    }))

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

                {posts.map((post)=>(
                    <PostCard key={post.id} post={post}/>
                ))}

            </div>

        </main>
    )
}