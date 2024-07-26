// import React, { useState } from 'react';

// const AddForm = ({ handleAddForm }) => {
//   const [name, setName] = useState('');
//   const [symbol, setSymbol] = useState('');
//   const [price, setPrice] = useState('');

//   const onSubmit = (e) => {
//     e.preventDefault();
//     handleAddForm(name, symbol, price);
//     setName('');
//     setSymbol('');
//     setPrice('');
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Enter stock name"
//         className="border rounded-md p-2 mr-2"
//         required
//       />
//       <input
//         type="text"
//         value={symbol}
//         onChange={(e) => setSymbol(e.target.value)}
//         placeholder="Enter stock symbol"
//         className="border rounded-md p-2 mr-2"
//         required
//       />
//       <input
//         type="number"
//         value={price}
//         onChange={(e) => setPrice(e.target.value)}
//         placeholder="Enter stock price"
//         className="border rounded-md p-2 mr-2"
//         required
//       />
//       <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">
//         Add Stock
//       </button>
//     </form>
//   );
// };

// export default AddForm;

// src/app/components/AddForm.js
import React, { useState } from 'react';

const AddForm = ({ handleAddForm }) => {
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [price, setPrice] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    handleAddForm(name, symbol, price);
    setName('');
    setSymbol('');
    setPrice('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter inventory name"
        className="border rounded-md p-2 mr-2"
        required
      />
      <input
        type="text"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        placeholder="Enter inventory symbol"
        className="border rounded-md p-2 mr-2"
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter inventory price"
        className="border rounded-md p-2 mr-2"
        required
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">
        Add Inventory
      </button>
    </form>
  );
};

export default AddForm;