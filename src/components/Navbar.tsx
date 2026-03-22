'use client'

import { useAuth } from "@/context/UseAuth";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Rodal from "rodal";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [validationError,setValidationError] = useState('')
    const [menuOpen, setMenuOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const pathname = usePathname();

    const navbarMenu = [
        { name: "Blog", path: "/blog" },
        { name: "About", path: "/about" },
    ];
    
    const router = useRouter()
    const { login,loading,error } = useAuth()
    
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    async function handleSubmit(e: React.FormEvent){
        e.preventDefault()
        setValidationError('')

        if (!email || !password) {
            setValidationError('Email and password are required')
            return
        }

        const success = await login(email, password)
                
        if (success) {
            setIsOpen(false)
            setEmail('')
            setPassword('')
            router.push('/admin/posts')
        }
    }

    return (
        <div className="navbar">
            <div className="navbar-container">
                <img src="/nav-logo.png" alt="no Img" className="nav-logo"/>
                <div className="flex gap-4">
                    <div className="nav-link">
                        {navbarMenu.map((item, idx) => (
                            <Link href={item.path} key={idx} className={`${ pathname === item.path ? "text-[#7C4EE4]" : ''}`}>{item.name}</Link>
                        ))}
                        <img src="../nav-search.png" alt="no Img" style={{ width: '23px', height: '23px', objectFit: 'contain' }}/>
                        <div className="nn">
                            <Link className="nav-contact-link" href={'/contact'}>Contact Us</Link>
                        </div>
                    </div>
                    <button onClick={() => setIsOpen(!isOpen)} className="admin-btn">Admin</button>
                </div>
                <button className="menuBtn" onClick={()=>setMenuOpen(true)}>☰</button>
            </div>

            {menuOpen && <div className="overlay" onClick={()=>setMenuOpen(false)}></div>}

            <div className={`mobileMenu ${menuOpen ? "open" : ""}`}>
                <button className="closeBtn" onClick={()=>setMenuOpen(false)}>✕</button>
                
                <div className="menuLink">
                    <Link href="/" onClick={()=>setMenuOpen(false)}>Home</Link>
                    <Link href="/blog" onClick={()=>setMenuOpen(false)}>Blog</Link>
                    <Link href="/about" onClick={()=>setMenuOpen(false)}>About</Link>
                    <Link href="/contact" onClick={()=>setMenuOpen(false)}>Contact</Link>
                </div>
            </div>

            <Rodal visible={isOpen} onClose={() => setIsOpen(false)} customStyles={{ width: "600px", minHeight: "600px", borderRadius: "15px"}}>
                <div className="modalWrapper">
                    <form onSubmit={handleSubmit} className="loginForm">
                        <div>
                            <h1>Welcome Back</h1>
                            <p>Sign in to your dashboard</p>
                        </div>

                        <span>Email</span>
                        <input type="email" placeholder="enter your email" value={email || ''} onChange={e => setEmail(e.target.value)} />

                        <span>Password</span>
                        <input type="password" placeholder="enter your password" value={password} onChange={e => setPassword(e.target.value)} />

                        {(error || validationError) && ( <div className="errorBox"> {error || validationError} </div> )}

                        <button className="loginBtn" disabled={loading}>
                            {loading ? "Checking..." : "Sign in"}
                        </button>
                    </form>
                </div>
            </Rodal>
        </div>
    )
}