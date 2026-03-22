"use client"

import { useState } from "react"
import { addDoc, collection } from "firebase/firestore"
import { db } from "@/firebase/firebase.config"
import { toast, ToastContainer } from "react-toastify"

export default function ContactPage() {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [subject,setSubject] = useState("")
  const [message,setMessage] = useState("")

  const handleSubmit = async (e:React.FormEvent)=>{
    e.preventDefault()

    if(!name && !email && !message){
      toast.error("Majburiy maydonlarni to‘ldiring ❗")
      return
    }

    await addDoc(collection(db,"contacts"),{
      name,
      email,
      phone,
      subject,
      message,
      createdAt: new Date()
    })

    toast.success("Xabar yuborildi ✅")

    setName("")
    setEmail("")
    setPhone("")
    setSubject("")
    setMessage("")
  }

  return (
    <main className="contactPage">

      <section className="contactHero">

        <h1>Get in Touch</h1>

        <p className="contactDesc">
          Contact us to publish your content and show ads to our website and get a good reach.
        </p>

        <div className="contactCards">

          <div className="contactCard">
            <div className="contactIcon">
                <img src={'/contactOffice.png'} />
            </div>
            <h4>Office</h4>
            <p className="contactP">Victoria Street, London, UK</p>
          </div>

          <div className="contactCard">
            <div className="contactIcon">
                <img src={'/contactEmail.png'} />
            </div>
            <h4>Email</h4>
            <p className="contactP">hello@zarrin.com</p>
          </div>

          <div className="contactCard">
            <div className="contactIcon">
                <img src={'/contactPhone.png'} />
            </div>
            <h4>Phone</h4>
            <p className="contactP">+012 345 6789</p>
          </div>

        </div>

      </section>


      <div className="mapSection">
        <img src="/map.png" alt="map"/>
      </div>

      <section className="contactFormSection">

        <form className="contactForm" onSubmit={handleSubmit}>

          <div className="formRow">
            <div>
              <span>Name</span>
              <input value={name} onChange={e=>setName(e.target.value)} />
            </div>

            <div>
              <span>Email</span>
              <input value={email} onChange={e=>setEmail(e.target.value)} />
            </div>
          </div>

          <div className="formRow">
            <div>
              <span>Phone</span>
              <input value={phone} onChange={e=>setPhone(e.target.value)} />
            </div>

            <div>
              <span>Subject</span>
              <input value={subject} onChange={e=>setSubject(e.target.value)} />
            </div>
          </div>

          <div>
            <span>Message</span>
            <textarea value={message} onChange={e=>setMessage(e.target.value)} />
          </div>

          <button type="submit">Send Message</button>

        </form>

        <ToastContainer />
      </section>

    </main>
  )
}