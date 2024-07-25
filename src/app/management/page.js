"use client"

import React, { useState, useEffect } from 'react';
import { db } from '../../../firebase.config';
import { getAllDocuments, addDocument, deleteDocument, updateDocument } from '../utils/firebaseUtils';

import AddForm from '../components/AddForm';
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';
import LogoutButton from '../components/LogoutButton';

export default function Management() {
  const [inventory, setInventory] = useState([]);
  const [newInventoryName, setNewInventoryName] = useState('');
  const [newInventorySymbol, setNewInventorySymbol] = useState('');
  const [newInventoryPrice, setNewInventoryPrice] = useState('');
  const [editInventoryId, setEditInventoryId] = useState(null);
  const [editInventoryName, setEditInventoryName] = useState('');
  const [editInventorySymbol, setEditInventorySymbol] = useState('');
  const [editInventoryPrice, setEditInventoryPrice] = useState('');

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    const querySnapshot = await getAllDocuments(db , "Inventory");
    setInventory(querySnapshot);
  };

  const handleAddInventory = async () => {
    if (newInventoryName.trim() !== '' && newInventorySymbol.trim() !== '' && newInventoryPrice.trim() !== '') {
      const newInventory = {
        name: newInventoryName,
        symbol: newInventorySymbol,
        price: parseFloat(newInventoryPrice),
      };

      const ref = await addDocument(db, "Inventory", newInventory) ;

      fetchInventory();
      setNewInventoryName('');
      setNewInventorySymbol('');
      setNewInventoryPrice('');

      console.log("Inserted Object");

      console.log(ref);
    }
  };

  const handleEditInventory = async () => {
    if (editInventoryId !== null && editInventoryName.trim() !== '' && editInventorySymbol.trim() !== '' && editInventoryPrice.trim() !== '') {
      
      const dataInfo = {
        name: editInventoryName,
        symbol: editInventorySymbol,
        price: parseFloat(editInventoryPrice)
      }

      await updateDocument(db, "inventory", editInventoryId, dataInfo);

      fetchInventory();
      setEditInventoryId(null);
      setEditInventoryName('');
      setEditInventorySymbol('');
      setEditInventoryPrice('');
    }
  };

  const handleDeleteInventory = async (id) => {
    await deleteDocument(db, "inventory", id);
    fetchInventory();
  };

  const handleSetEditInventory = (stock) => {
    setEditInventoryId(inventory.id);
    setEditInventoryName(inventory.name);
    setEditInventorySymbol(inventory.symbol);
    setEditInventoryPrice(inventory.price);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Garage Inventory</h1>
      <div className="mb-4">
        <input
          type="text"
          value={editInventoryName}
          onChange={(e) => setEditInventoryName(e.target.value)}
          placeholder="Enter inventory name"
          className="border rounded-md p-2 mr-2"
        />
        <input
          type="text"
          value={editInventorySymbol}
          onChange={(e) => setEditInventorySymbol(e.target.value)}
          placeholder="Enter inventory symbol"
          className="border rounded-md p-2 mr-2"
        />
        <input
          type="number"
          value={editInventoryPrice}
          onChange={(e) => setEditInventoryPrice(e.target.value)}
          placeholder="Enter inventory price"
          className="border rounded-md p-2 mr-2"
        />
        <button onClick={handleEditInventory} className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Update Inventory
        </button>
      </div>
      <div className="mb-4">
        <input
          type="text"
          value={newInventoryName}
          onChange={(e) => setNewInventoryName(e.target.value)}
          placeholder="Enter new inventory name"
          className="border rounded-md p-2 mr-2 color-black"
        />
        <input
          type="text"
          value={newInventorySymbol}
          onChange={(e) => setNewInventorySymbol(e.target.value)}
          placeholder="Enter new inventory symbol"
          className="border rounded-md p-2 mr-2 COLO"
        />
        <input
          type="number"
          value={newInventoryPrice}
          onChange={(e) => setNewInventoryPrice(e.target.value)}
          placeholder="Enter new inventory price"
          className="border rounded-md p-2 mr-2"
        />
        <button onClick={handleAddInventory} className="bg-green-500 text-white px-4 py-2 rounded-md">
          Add Inventory
        </button>
        <AddForm handleAddForm={handleAddForm} />
      </div>
      <ul className="space-y-2">
        {inventory.map((inventory) => (
          <li key={inventory.id} className="flex justify-between items-center bg-blue-300 p-2 rounded-md">
            <div>
              <p className="font-semibold">{inventory.name} ({inventory.symbol})</p>
              <p>Price: ${inventory.price}</p>
            </div>
            <div>
              <button onClick={() => handleSetEditInventory(inventory)} className="text-blue-500 mr-2">
                Edit
              </button>
              <button onClick={() => handleDeleteInventory(inventory.id)} className="text-red-500">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}