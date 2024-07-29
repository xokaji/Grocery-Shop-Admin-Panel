"use client";

import React, { useState } from "react";
import styles from '@/app/ui/dashboard/employees/addEmployee/addEmployee.module.css';
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

const AddEmployeePage = () => {
  // State hooks for form data
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bankNumber, setBankNumber] = useState("");
  const [isActive, setActive] = useState("");
  const [address, setAddress] = useState("");

  // Function to add data to Firestore
  const addDataToFirestore = async () => {
    try {
      const docRef = await addDoc(collection(db, "employees"), {
        name,
        gender,
        role,
        email,
        phoneNumber,
        bankNumber,
        isActive,
        address
      });
      console.log("Document written with ID: ", docRef.id);
      return true;
    } catch (error) {
      console.error("Error adding document: ", error);
      return false;
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const added = await addDataToFirestore();
    if (added) {
      // Clear form fields
      setName("");
      setGender("");
      setRole("");
      setEmail("");
      setPhoneNumber("");
      setBankNumber("");
      setActive("");
      setAddress("");
      alert("Employee added Successfully!");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="">Select a Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="">Select a Role</option>
          <option value="Manager">Manager</option>
          <option value="Cashier">Cashier</option>
          <option value="Stock Keeper">Stock Keeper</option>
          <option value="Trainee">Trainee</option>
          <option value="Delivery Rider">Delivery Rider</option>
        </select>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Bank Account Number"
          value={bankNumber}
          onChange={(e) => setBankNumber(e.target.value)}
          required
        />

        <select
          value={isActive}
          onChange={(e) => setActive(e.target.value)}
          required
        >
          <option value="">Is Active?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          rows="4"
          placeholder="Address"
          required
        ></textarea>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default AddEmployeePage;
