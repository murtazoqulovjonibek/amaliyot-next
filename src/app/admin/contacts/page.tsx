"use client"

import { useEffect, useState } from "react"
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore"
import { db } from "@/firebase/firebase.config"

type Contact = {
  id?: string
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function ContactsPage(){

  const [contacts,setContacts] = useState<Contact[]>([])

  const getContacts = async ()=>{
    const snapshot = await getDocs(collection(db,"contacts"))

    const data:Contact[] = snapshot.docs.map(doc=>({
      id: doc.id,
      ...(doc.data() as Omit<Contact,"id">)
    }))

    setContacts(data)
  }

  useEffect(()=>{
    getContacts()
  },[])

  const handleDelete = async (id:string)=>{
    await deleteDoc(doc(db,"contacts",id))
    getContacts()
  }

  return(
    <div className="Contact-Head">

      <h1>Contacts</h1>

      <div className="ContCard-container">
        {contacts.map(contact=>(
          <div key={contact.id} className="contactAdminCard">

            <h3>{contact.name}</h3>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <p>{contact.subject}</p>
            <p>{contact.message}</p>

            <button onClick={()=>handleDelete(contact.id!)}>Delete</button>

          </div>
        ))}
      </div>

    </div>
  )
}