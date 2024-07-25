"use client"
import { useState, useEffect } from 'react';
import { addDocument, getAllDocuments } from '../app/utils/firebaseUtils';
import { db } from "../../firebase.config";
import LoginForm from "../components/LoginForm";
import LogoutButton from ""../components/LogoutButton";

export default function Home() {

  const [inventory, setInventory] = useState([]);;

  const loadInventory = async () => {
    
    const docs = await getAllDocuments(db, "garage");
    console.log(docs);
    setInventory(docs);
  }

  useEffect(() => {

    loadInventory();

  }, [])


  return (
    <div className="container mx-auto p-4">

      <ul className="space-y-2">
        {inventory.map((inventory) => (
          <li key={inventory.id} className="bg-blue-400 p-2 rounded-md">
            <p className="font-semibold">{inventory.name} ({inventory.symbol})</p>
            <p>Price: ${inventory.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
