"use client";

import styles from '@/app/ui/dashboard/products/addProduct/addProduct.module.css';
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";

const AddProductPage = () => {
  // State hooks for form data
  const [product, setProduct] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stocks, setStocks] = useState("");
  const [date, setDate] = useState("");
  const [discount, setDiscount] = useState("");
  const [description, setDescription] = useState("");

  // Function to add data to Firestore
  const addDataToFirestore = async () => {
    try {
      const docRef = await addDoc(collection(db, "products"), {
        product,
        category,
        price,
        stocks,
        date,
        discount,
        description
      });
      console.log("Document written with ID:", docRef.id);
      return true;
    } catch (error) {
      console.error("Error adding document:", error);
      return false;
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const added = await addDataToFirestore();
    if (added) {
      // Clear form fields
      setProduct("");
      setCategory("");
      setPrice("");
      setStocks("");
      setDate("");
      setDiscount("");
      setDescription("");
      alert("Product added successfully!");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Product Name"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          required
        />

        <select
          name="cat"
          id="cat"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Choose a Category</option>
          <option value="Grocery">Grocery</option>
          <option value="Dairy & Eggs">Dairy & Eggs</option>
          <option value="Meats & Seafoods">Meats & Seafoods</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Bakery Foods">Bakery Foods</option>
          <option value="Health & Wellness">Health & Wellness</option>
        </select>

        <input
          type="number"
          placeholder="Price"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Stocks"
          name="stocks"
          value={stocks}
          onChange={(e) => setStocks(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="Expired at"
          name="expiry"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Discount (optional)"
          name="discount"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        />
        <textarea
          name="desc"
          id="desc"
          cols="30"
          rows="10"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductPage;
