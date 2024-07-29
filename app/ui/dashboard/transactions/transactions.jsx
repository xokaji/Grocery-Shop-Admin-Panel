"use client";

import styles from './transactions.module.css';
import Image from 'next/image';
import { get, ref } from "firebase/database";
import { useEffect, useState } from 'react';
import { database } from '@/lib/firebase';

const Transactions = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const customersRef = ref(database, "customers");
    get(customersRef).then((snapshot) => {
      if (snapshot.exists()) {
        const customerArray = Object.entries(snapshot.val()).map(([id, data]) => ({
          id,
          ...data,
        }));
        setCustomers(customerArray);
      } else {
        console.log("No data available!");
      }
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>
                <div className={styles.user}>
                  <Image src='/noavatar.png' alt='user' width={40} height={40} className={styles.userImage} />
                  {customer.title}
                </div>
              </td>
              <td>
                <span className={`${styles.status} ${styles[customer.status.toLowerCase()]}`}>
                  {customer.status}
                </span>
              </td>
              <td>{customer.date}</td>
              <td>{`Rs. ${customer.amount}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
