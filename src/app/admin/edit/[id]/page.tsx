// "use client"

// import { useEffect, useState } from "react"
// import { doc, getDoc, updateDoc } from "firebase/firestore"
// import { db } from "@/firebase/firebase.config"
// import { useRouter } from "next/navigation"

// export default function EditPage({ params }: { params: { id: string } }){

//   const router = useRouter()

//   const [title,setTitle] = useState("")
//   const [desc,setDesc] = useState("")
//   const [image,setImage] = useState("")
//   const [category,setCategory] = useState("")

//   useEffect(()=>{
//     const getPost = async ()=>{
//       const docRef = doc(db,"posts",params.id)
//       const snap = await getDoc(docRef)

//       if (snap.exists()){
//         const data = snap.data()

//         setTitle(data.title)
//         setDesc(data.desc)
//         setImage(data.image)
//         setCategory(data.category)
//       }
//     }

//     getPost()
//   },[params.id])

//   const handleUpdate = async (e:React.FormEvent)=>{
//     e.preventDefault()

//     const docRef = doc(db,"posts",params.id)

//     await updateDoc(docRef,{
//       title,
//       desc,
//       image,
//       category
//     })

//     router.push("/admin")
//   }

//   return(
//     <form onSubmit={handleUpdate} className="adminForm">
//       <h1>Edit Post</h1>

//       <input value={title} onChange={e=>setTitle(e.target.value)}/>
//       <input value={image} onChange={e=>setImage(e.target.value)}/>
//       <input value={category} onChange={e=>setCategory(e.target.value)}/>
//       <textarea value={desc} onChange={e=>setDesc(e.target.value)}/>

//       <button>Update</button>
//     </form>
//   )
// }

"use client"

import { useEffect, useState } from "react"
import { doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "@/firebase/firebase.config"
import { useRouter, useParams } from "next/navigation" // 🔥

export default function EditPage(){

  const router = useRouter()
  const params = useParams() // 🔥

  const id = params.id as string // 🔥

  const [title,setTitle] = useState("")
  const [desc,setDesc] = useState("")
  const [image,setImage] = useState("")
  const [category,setCategory] = useState("")

  useEffect(()=>{
    const getPost = async ()=>{
      const docRef = doc(db,"posts",id)
      const snap = await getDoc(docRef)

      if (snap.exists()){
        const data = snap.data()

        setTitle(data.title)
        setDesc(data.desc)
        setImage(data.image)
        setCategory(data.category)
      }
    }

    if(id) getPost()
  },[id])

  const handleUpdate = async (e:React.FormEvent)=>{
    e.preventDefault()

    const docRef = doc(db,"posts",id)

    await updateDoc(docRef,{
      title,
      desc,
      image,
      category
    })

    router.push("/admin/posts") // 🔥 fix
  }

  return(
    <div className="add-header">
      <h1>Edit Post</h1>

      <form onSubmit={handleUpdate} className="adminForm">
        <input value={title} onChange={e=>setTitle(e.target.value)}/>
        <input value={image} onChange={e=>setImage(e.target.value)}/>
        <input value={category} onChange={e=>setCategory(e.target.value)}/>
        <textarea value={desc} onChange={e=>setDesc(e.target.value)}/>

        <button>Update</button>
      </form>
    </div>

  )
}