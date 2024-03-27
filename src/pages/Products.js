import React, { useState } from 'react'

import smartBalanceImage from '../smart_balance.jpeg';
import maggi from '../maggi.jpeg';
import cartzila from '../cartzilla.jpg'
import masala from '../masala.jpeg'
import nescafe from '../nescafe.jpeg'

import kitchep from '../kitchep.jpg'


import supplements from '../supplements.jpeg'
import scale from '../smart_scale.jpeg'
import sunscreen from '../sunscreen.avif'
import thermometer from '../thermometer.jpg'
import mobility_scooterr from '../scooter.jpeg'


const Products = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <section id="productsContainer" style={{ display: isOpen ? 'block' : 'none' }}>
      <div class="product-list">
        <h2>Products</h2>
        {/* Add your product categories and items here */}
        <ul>
          <h3>Grocery Items</h3>
         <div>
          <img src={smartBalanceImage} alt="" style={{ width: '200px', height: 'auto', display: 'inline-block' }} />
        <img src={maggi} alt="" style={{ width: '200px', height: 'auto', display: 'inline-block' }} />
        <img src={cartzila} alt="" style={{ width: '200px', height: 'auto', display: 'inline-block' }} />
        <img src={masala} alt="" style={{ width: '200px', height: 'auto', display: 'inline-block' }} />
        <img src={nescafe} alt="" style={{ width: '200px', height: 'auto', display: 'inline-block' }} />
        <img src={kitchep} alt="" style={{ width: '200px', height: 'auto', display: 'inline-block' }} />
        </div>


          <h3>Health & Baby Care</h3>


      <div>
        <img src={supplements} alt="" style={{ width: '200px', height: 'auto', display: 'inline-block' }} />
        <img src={scale} alt="" style={{ width: '200px', height: 'auto', display: 'inline-block' }} />
        <img src={sunscreen} alt="" style={{ width: '200px', height: 'auto', display: 'inline-block' }} />
        <img src={thermometer} alt="" style={{ width: '200px', height: 'auto', display: 'inline-block' }} />
        <img src={mobility_scooterr} alt="" style={{ width: '200px', height: 'auto', display: 'inline-block' }} />
  
      </div>










        </ul>
      </div>
     

      <button onClick={handleClick}>{isOpen ? 'Hide' : 'Show'} Products</button>
    </section>
  )
}

export default Products