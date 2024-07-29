"use client";

import styles from '@/app/ui/dashboard/stocks/stock.module.css';
import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useState } from "react";

const StockPage = () => {
  // State hooks for form data and fetched data
  const [month, setMonth] = useState("");
  const [category, setCategory] = useState("");
  const [stockData, setStockData] = useState([]);

  // Function to fetch data from Firestore
  const fetchDataFromFirestore = async () => {
    try {
      const q = query(
        collection(db, "products"),
        where("month", "==", month),
        where("category", "==", category)
      );
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => doc.data());
      setStockData(data);
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchDataFromFirestore();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          required
        >
          <option value="" disabled>Select a Month</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="" disabled>Choose a Category</option>
          <option value="Grocery">Grocery</option>
          <option value="Dairy & Eggs">Dairy & Eggs</option>
          <option value="Meats & Seafoods">Meats & Seafoods</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Bakery Foods">Bakery Foods</option>
          <option value="Health & Wellness">Health & Wellness</option>
        </select>

        <button type="submit">Search</button>
      </form>

      {stockData.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Date</th>
              <th>Quantity</th>
              <th>Availability</th>
              <th>Purchases</th>
            </tr>
          </thead>
          <tbody>
            {stockData.map((item, index) => (
              <tr key={index}>
                <td>{item.product}</td>
                <td>{item.date}</td>
                <td>{item.stocks}</td>
                <td>{item.discount ? "In Stock" : "Out of Stock"}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StockPage;
