"use client"

import { doc, updateDoc, increment } from "firebase/firestore"
import { db } from "@/firebase/firebase.config"
import { useState } from "react"

export default function LikeButton({ id, initialLikes }: { id: string, initialLikes: number }) {

    const [likes, setLikes] = useState(initialLikes)
    const [loading, setLoading] = useState(false)

    const handleLike = async () => {
        if (loading) return

        setLoading(true)

        const docRef = doc(db, "posts", id)

        await updateDoc(docRef, {
        likes: increment(1)
        })

        setLikes(prev => prev + 1)
        setLoading(false)
    }

    return (
        <button onClick={handleLike} className="likeBtn">
        ❤️ {likes}
        </button>
    )
}