import Sidebar from "@/components/Sidebar"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="adminLayout flex min-h-screen">
      <div className="sidebarFather">
        <Sidebar />
      </div>
      <div className="adminContent">
        {children}
      </div>
    </div>
  )
}