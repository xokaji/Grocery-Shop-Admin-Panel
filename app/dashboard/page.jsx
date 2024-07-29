"use client"

import Cards from "../ui/dashboard/card/card"
import styles from '../ui/dashboard/dashboard.module.css'
import Rightbar from "../ui/dashboard/rightbar/rightbar"
import Transactions from "../ui/dashboard/transactions/transactions"
import Charts from "../ui/dashboard/chart/chart"
import {useAuthState} from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase"
import { useRouter } from "next/navigation"

const DashboardPage = ()=> {
    const [user] = useAuthState(auth);
    const router = useRouter();
    const userSession = sessionStorage.getItem('user');

    if(!user || !userSession){
        router.push('/signup')
    }
    return(
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.card}>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                </div>
                <Transactions/>
                <Charts/>
            </div>
            
            
        </div>
    )
}

export default DashboardPage