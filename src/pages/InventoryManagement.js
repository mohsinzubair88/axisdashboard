import React, { useState } from 'react'

const InventoryManagement = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <section id="Inventorymanagement1" style={{ display: isOpen ? 'block' : 'none' }}>
      <div class="Inventorymanagement12">
        <h2>Inventory Management</h2>
        {/* Add your inventory management items here */}
        <p>Just In Time</p>
        <p>Bulk Management</p>
      </div>
      <button onClick={handleClick}>{isOpen ? 'Hide' : 'Show'} Inventory Management</button>
    </section>
  )
}

export default InventoryManagement