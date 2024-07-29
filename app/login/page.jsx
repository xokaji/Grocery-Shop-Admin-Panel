"use client"

import styles from "../ui/dashboard/login/login.module.css";
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const router = useRouter();

    const handleSignUp = async (e) => {
        e.preventDefault(); // Prevent form from submitting and refreshing the page
        try {
            const res = await signInWithEmailAndPassword(email, password);
            console.log({ res });
            sessionStorage.setItem('user' , true);
            setEmail("");
            setPassword("");
            router.push('/dashboard');

        } catch (e) {
            console.error(e);
            
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSignUp} className={styles.form}>
                <h1>Sign Up</h1>

                <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                
                <button type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Sign Up'}
                </button>

                {error && <p className={styles.error}>{error.message}</p>}
            </form>
        </div>
    )
} 

export default LoginPage;
