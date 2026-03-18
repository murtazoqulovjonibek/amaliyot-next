// import { collection, getDocs } from "firebase/firestore"
// import { db } from "@/firebase/firebase.config"
// import HeroSection from "@/components/HeroSection"
// import RecentPosts from "@/components/RecentPosts"
// import PopularPosts from "@/components/PopularPosts"
// import { Post } from "@/types/type"

// export default async function Home() {

//   const querySnapshot = await getDocs(collection(db, "posts"))

//   const posts: Post[] = querySnapshot.docs.map(doc => ({
//     id: doc.id,
//     ...(doc.data() as Omit<Post, "id">)
//   }))

//   const featuredPost = posts.find(post => post.featured)

//   return (
//     <main>

//       {featuredPost && (
//         <HeroSection post={featuredPost}/>
//       )}

//       <RecentPosts />

//       <PopularPosts />

//     </main>
//   )

// }

import { collection, getDocs } from "firebase/firestore"
import { db } from "@/firebase/firebase.config"
import HeroSection from "@/components/HeroSection"
import RecentPosts from "@/components/RecentPosts"
import PopularPosts from "@/components/PopularPosts"
import { Post } from "@/types/type"

export default async function Home() {

  const querySnapshot = await getDocs(collection(db, "posts"))

  const posts: Post[] = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...(doc.data() as Omit<Post, "id">)
  }))

  const featuredPost = posts.find(post => post.featured)

  const recentPosts = posts.slice(0, 3)

  const popularPosts = posts.sort((a, b) => b.views - a.views).slice(0, 6)

  return (
    <main>

      {featuredPost && <HeroSection post={featuredPost} />}

      <RecentPosts posts={recentPosts} />

      <PopularPosts posts={popularPosts} />

    </main>
  )
}