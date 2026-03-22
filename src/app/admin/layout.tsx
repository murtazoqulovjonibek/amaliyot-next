"use client"

import { useState } from "react"
import Sidebar from "@/components/Sidebar"
import Protected from "@/components/Protected"

export default function AdminLayout({ children }: { children: React.ReactNode }) {

  const [open, setOpen] = useState(false)

  return (
    <Protected>
      <div className="adminLayout">
        <div className="adminMobileHeader">
          <button onClick={()=>setOpen(true)}>☰</button>
          <h2>Admin</h2>
        </div>

        {open && <div className="adminOverlay" onClick={()=>setOpen(false)}></div>}

        <div className={`sidebarFather ${open ? "open" : ""}`}>
          <Sidebar close={() => setOpen(false)}/>
        </div>

        <div className="adminContent">
          {children}
        </div>
      </div>
    </Protected>
  )
}