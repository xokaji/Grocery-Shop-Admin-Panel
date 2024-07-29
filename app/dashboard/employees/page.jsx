"use client"
import React, { useEffect, useState } from 'react';
import { db } from "@/lib/firebase";
import { getDocs, collection } from "firebase/firestore";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/employees/employees.module.css";
import Link from "next/link";
import Image from "next/image";

async function fetchEmployees() {
    const querySnapshot = await getDocs(collection(db, "employees"));
    const data = [];
    querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
    });
    return data;
}

const UserPage = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await fetchEmployees();
            setUserData(data);
        }
        fetchData();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for an employee..." />
                <Link href="employees/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email Address</th>
                        <th>Gender</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user) => (
                        <tr key={user.id}>
                            <td>
                                <div className={styles.user}>
                                    <Image src="/noavatar.png" height={40} width={40} className={styles.userImage} alt="Avatar" />
                                    {user.name}
                                </div>
                            </td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td>{user.role}</td>
                            <td>{user.status}</td>
                            <td>
                                <div className={styles.buttons}>
                                    <Link href="/dashboard/employees/test9">
                                        <button className={`${styles.button} ${styles.view}`}>View</button>
                                    </Link>
                                    <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserPage;
