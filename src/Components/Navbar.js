import React from 'react'
import Products from '../pages/Products'; 
import Orders from '../pages/Orders';
import InventoryManagement from '../pages/InventoryManagement'; 

export default function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li><a href="#" onClick={() => { document.getElementById('productsContainer').style.display = 'block' }}>Products</a></li>
          <li><a href="#" onClick={() => { document.getElementById('productsOrder').style.display = 'block' }}>Orders</a></li>
          <li><a href="#" onClick={() => { document.getElementById('Inventorymanagement1').style.display = 'block' }}>Inventory Management</a></li>
          <li><a href="#">Customers</a></li>
          <li><a href="#">Payment</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </nav>

      <main>
        <p>Welcome to the Axis-commerce dashboard!</p>
      </main>

      <Products/>
      <Orders/>
      <InventoryManagement/>
</>
  )
}