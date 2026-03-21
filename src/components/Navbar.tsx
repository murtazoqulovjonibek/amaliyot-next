'use client'

import { useAuth } from "@/context/UseAuth";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Rodal from "rodal";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [validationError,setValidationError] = useState('')
    const pathname = usePathname();

    const navbarMenu = [
        { name: "Blog", path: "/blog" },
        { name: "About", path: "/about" },
    ];

    const router = useRouter()
    const { login,loading,error } = useAuth()

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
                <div className="nav-link">
                    {navbarMenu.map((item, idx) => (
                        <Link href={item.path} key={idx} className={`${ pathname === item.path ? "text-[#7C4EE4]" : ''}`}>{item.name}</Link>
                    ))}
                    <img src="../nav-search.png" alt="no Img" style={{ width: '23px', height: '23px', objectFit: 'contain' }}/>
                    <div className="nn">
                        <Link className="nav-contact-link" href={'/contact'}>Contact Us</Link>
                        <button onClick={() => setIsOpen(!isOpen)} className="admin-btn">Admin</button>
                    </div>
                </div>
                <img src="/navPhoneImg.png" alt="no img" className="navPhone"/>
            </div>


            <Rodal visible={isOpen} onClose={(() => setIsOpen(!isOpen))} className='bg-white' customStyles={{width: "600px", minHeight: "600px", borderRadius: "15px",}}>
                <div className="flex justify-center items-center h-full rounded-2xl">
                    <form onSubmit={handleSubmit} className="bg-black min-h-100 p-5 rounded-xl w-100 space-y-4 shadow-lg">
                        <div>
                            <h1 className="text-2xl mb-1.5 text-white font-bold text-center">Welcome Back</h1>
                            <p className="text-gray-400 text-[12px] text-center">Sign in to your dashboard</p>
                        </div>
                        <span className="text-white">Email</span>
                        <input type="text" className="border-2 border-gray-500 mt-3 py-3 text-white w-full rounded-lg p-2" placeholder="enter your email" value={email} onChange={e => setEmail(e.target.value)}/>   
                        <span className="text-white">Password</span>
                        <input type="password" className="border-2 border-gray-500 py-3 text-white mt-3 w-full rounded-lg p-2" placeholder="enter your password" value={password} onChange={e => setPassword(e.target.value)}/>
                        
                        {(error || validationError) ? (
                            <div className="border-red-800 rounded-lg border-2 py-2.5 text-[#c57575] text-sm px-2 bg-[#4e2222]">{error || validationError}</div>
                        ): null}
                        
                        <button className="w-full hover:-translate-y-1 duration-300 cursor-pointer hover:bg-gray-200 bg-white text-black mt-9 rounded-lg py-3 font-bold transition-all" disabled={loading}>{loading ? 'Checking' : 'Sign in'}</button>
                    </form>
                </div>
            </Rodal>
        </div>
    )
}