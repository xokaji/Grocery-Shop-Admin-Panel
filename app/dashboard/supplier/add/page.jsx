"use client";

import styles from '@/app/ui/dashboard/supplier/supplier.module.css';
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";

const SupplierPage = () => {
  // State hooks for form data
  const [supplier, setSupplier] = useState("");
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");
  const [itemNo, setItemNo] = useState("");


  // Function to add data to Firestore
  const addDataToFirestore = async () => {
    try {
      const docRef = await addDoc(collection(db, "supplier"), {
        supplier,
        name,
        telephone,
        location,
        company,
        itemNo,
       
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
      setSupplier("");
      setName("");
      setTelephone("");
      setLocation("");
      setCompany("");
      setItemNo("");

      alert("Supplier Registration Successfully!");
    }
  };

  return (

    <div className={styles.container}>
       
      <form onSubmit={handleSubmit} className={styles.form}>

        <input
          type="text"
          placeholder="Supplier ID"
          value={supplier}
          onChange={(e) => setSupplier(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Supplier Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Item NO"
          value={itemNo}
          onChange={(e) => setItemNo(e.target.value)}
          required
        />

        
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SupplierPage;
