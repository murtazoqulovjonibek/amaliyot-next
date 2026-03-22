'use client'

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useAuth } from "@/context/UseAuth"

export default function Sidebar({ close }: { close: () => void }) {

  const pathname = usePathname()
  const router = useRouter()
  const { logout } = useAuth()

  const menu = [
    { name: "Posts", path: "/admin/posts" },
    { name: "Contacts", path: "/admin/contacts" }
  ]

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <div className="sidebar">
      <div>
        <h2 className="text-black text-2xl mb-15 font-bold">Admin</h2>

        <ul className="sidebarContain">
          {menu.map((item,index) => {

            const isActive = pathname.startsWith(item.path)

            return (
              <li key={index} className={`mb-2 rounded-xl border border-gray-300 transition-all duration-500
                ${ isActive ? "bg-[#7C4EE4] text-black" : "hover:bg-[#7C4EE4]" }`}>
                <Link href={item.path} onClick={close} className="p-3 font-medium text-lg">
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      <button onClick={handleLogout} className="logoutBtn">
        Logout
      </button>

    </div>
  )
}