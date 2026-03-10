'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const navbarMenu = [
        { name: "Blog", path: "/blog" },
        { name: "About", path: "/about" },
    ];
  return (
    <div className="navbar">
        <div className="navbar-container">
            <img src="../nav-logo.png" alt="no Img" className="nav-logo"/>
            <div className="nav-link">
                {navbarMenu.map((item, idx) => (
                    <Link href={item.path} key={idx} className={`${ pathname === item.path ? "text-[#7C4EE4]" : ''}`}>{item.name}</Link>
                ))}
                <img src="../nav-search.png" alt="no Img" style={{ width: '23px', height: '23px', objectFit: 'contain' }}/>
                <Link className="nav-contact-link" href={'/contact'}>Contact Us</Link>
            </div>
        </div>
    </div>
  )
}