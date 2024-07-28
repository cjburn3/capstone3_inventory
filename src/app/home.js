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
        <AddForm handleAddForm={handleAddInventory} />
      </div>
      <ul className="space-y-2">
        {inventory.map((item) => (
          <li key={item.id} className="flex justify-between items-center bg-blue-300 p-2 rounded-md">
            <div>
              <p className="font-semibold">{item.name} ({item.symbol})</p>
              <p>Price: ${item.price}</p>
            </div>
            <div>
              <button onClick={() => handleSetEditInventory(item)} className="text-blue-500 mr-2">
                Edit
              </button>
              <button onClick={() => handleDeleteInventory(item.id)} className="text-red-500">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <RegisterForm />
        <LoginForm />
        <LogoutButton />
      </div>
    </div>