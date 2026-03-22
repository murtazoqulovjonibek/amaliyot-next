import { doc, getDoc, increment, updateDoc, collection, getDocs } from "firebase/firestore"
import { db } from "@/firebase/firebase.config"
import { Post } from "@/types/type"
import PopularPosts from "@/components/PopularPosts"
import LikeButton from "@/components/LikeButton"

interface Props {
    params: Promise<{ id: string }>
}

export default async function SingleBlog({ params }: Props) {
    const { id } = await params

    const docRef = doc(db, "posts", id)
    const docSnap = await getDoc(docRef)

    if (!docSnap.exists()) {
        return <p>Post not found</p>
    }

    await updateDoc(docRef, {
        views: increment(1)
    })

    const post = {
        id: docSnap.id, ...(docSnap.data() as Omit<Post,"id">)
    }

    const querySnapshot = await getDocs(collection(db,"posts"))

    const posts: Post[] = querySnapshot.docs.map(doc => ({
        id: doc.id, ...(doc.data() as Omit<Post,"id">)
    }))

    const popularPosts = posts.filter(p => p.id !== id).sort((a,b)=>b.views - a.views).slice(0,3)

    return (
        <main className="singleBlog">

            <div className="q">
                <div>
                    <div className="singleblog-Meta">
                        <div>
                            <span className="single-dev">{post.category}</span>
                            <span className="single-date">{post.date}</span>
                        </div>

                        <LikeButton id={post.id} initialLikes={post.likes || 0} />
                    </div>

                    <h1 className="singlePost">
                        {post.title}
                    </h1>
                </div>
            </div>

            <img className="postImage" src={post.image} alt={post.title} />

            <p className="postText">
                {post.desc}
            </p>

            <PopularPosts posts={popularPosts}/>

        </main>
    )
}