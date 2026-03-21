"use client"

import { useEffect, useState } from "react"
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore"
import { db } from "@/firebase/firebase.config"
import { Post } from "@/types/type"
import Link from "next/link"
import { toast, ToastContainer } from "react-toastify"

export default function AdminPage(){

  const [posts,setPosts] = useState<Post[]>([])

  const getPosts = async ()=>{
    const querySnapshot = await getDocs(collection(db,"posts"))

    const data:Post[] = querySnapshot.docs.map(doc=>({
      id:doc.id,
      ...(doc.data() as Omit<Post,"id">)
    }))

    setPosts(data)
  }

  useEffect(()=>{
    getPosts()
  },[])

  const handleDelete = async (id:string)=>{
    await deleteDoc(doc(db,"posts",id))
    toast('post successfully deleted')
    getPosts()
  }

  return(
    <div className="postsHeader">
      <div className="Add-post">
        <h1>Posts</h1>

        <Link href="/admin/add">
          <button>Add Post</button>
        </Link>
      </div>

      <div className="adminCardContainer">
        {posts.map(post=>(
          <div key={post.id} className="adminCard">

            <img src={post.image || undefined} alt="no Img"/>

            <div>
              <h3>{post.title}</h3>
              <p>{post.category}</p>
            </div>

            <div className="flex">
              <Link className="editBtn" href={`/admin/edit/${post.id}`}>
                <button>Edit</button>
              </Link>

              <button className="delBtn" onClick={()=>handleDelete(post.id!)}>Delete</button>
            </div>

          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  )
}