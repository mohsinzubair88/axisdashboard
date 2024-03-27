import React, { useState } from 'react'

const Orders = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <section id="productsOrder" style={{ display: isOpen ? 'block' : 'none' }}>
      <div class="order list-list">
        <h2>Order</h2>
        {/* Add your order items here */}
        <p>Order Reciver</p>
        <p>Not Recived</p>
      </div>
      <button onClick={handleClick}>{isOpen ? 'Hide' : 'Show'} Orders</button>
    </section>
  )
}

export default Orders