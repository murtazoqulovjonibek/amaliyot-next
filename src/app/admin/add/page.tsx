"use client"

import { useState } from "react"
import { addDoc, collection } from "firebase/firestore"
import { db } from "@/firebase/firebase.config"
import { useRouter } from "next/navigation"

export default function AddPostPage(){

  const [title,setTitle] = useState("")
  const [desc,setDesc] = useState("")
  const [image,setImage] = useState("")
  const [category,setCategory] = useState("")

  const router = useRouter()

  const handleSubmit = async (e:React.FormEvent)=>{
    e.preventDefault()

    await addDoc(collection(db,"posts"),{
      title,
      desc,
      image,
      category,
      date:new Date().toLocaleDateString(),
      views:0,
      likes:0
    })

    alert("Post qo‘shildi ✅")
    router.push('/admin/posts')
    setTitle("")
    setDesc("")
    setImage("")
    setCategory("")
  }

  return(
    <div className="add-header">

      <h1>Add Post</h1>

      <form onSubmit={handleSubmit} className="adminForm">

        <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)}/>
        <input placeholder="Image" value={image} onChange={e=>setImage(e.target.value)}/>
        <input placeholder="Category" value={category} onChange={e=>setCategory(e.target.value)}/>
        <textarea placeholder="Description" value={desc} onChange={e=>setDesc(e.target.value)}/>

        <button type="submit">Add</button>

      </form>
    </div>
  )
}