'use client'

import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
import React, { createContext, useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { User } from "@/types/type";

type AuthContextType = {
    user: null | User;
    loading: boolean;
    error: string | null;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<null | User>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
      const savedUser = localStorage.getItem("user");
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    }, []);

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    const logout = () => {
        setUser(null)
    }

    const login = async (email: string, password: string) => {
        try {
            setLoading(true);
            setError(null);

            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const firebaseUser = userCredential.user;

            const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));

            if (!userDoc.exists()) {
                setError("User database’da topilmadi");
                return false;
            }

            const role = userDoc.data()?.role;

            if (role !== "admin") {
                setError("Siz admin emassiz");
            return false;
            }

            setUser({
                id: firebaseUser.uid,
                email: firebaseUser.email || "",
                role: role,
            });

            return true;

        } catch (err: any) {
            if (err.code === "auth/invalid-email") setError("Email noto‘g‘ri");
            else if (err.code === "auth/user-not-found") setError("User topilmadi");
            else if (err.code === "auth/wrong-password") setError("Password noto‘g‘ri");
            else setError("Login error");

            return false;

        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, error, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};