import React from 'react'
import '../style/seller.css'
import coctel from '../image/idish1.png'
import coctel2 from '../image/idish2.png'
import coctel3 from '../image/idish3.png'
import coctel4 from '../image/idish4.png'
import { NavLink } from 'react-router-dom'
function Seller() {
  return (
    <section className='seller'>
      <div className="container">
        <h2>Our best sellers</h2>
        <div className="seller__grid">
            <div className="seller__card">
                <NavLink to="/shop"><img src={coctel} alt="" /></NavLink>
                <h4>Ipsum dolor</h4>
                <p>Ut enim ad minim veniam, quis nostrud exerp ex ea commodo consequat. </p>
                <button>Shop now</button>
            </div>
            <div className="seller__card">
                <NavLink to="/shop"><img src={coctel2} alt="" /></NavLink>
                <h4>Consectetur adipiscing</h4>
                <p>Ut enim ad minim veniam, quis nostrud exerp ex ea commodo consequat. </p>
                <span>Shop now</span>
            </div>
            <div className="seller__card">
                <NavLink to ="/shop"><img src={coctel3} alt="" /></NavLink>
                <h4>Consequat</h4>
                <p>Ut enim ad minim veniam, quis nostrud exerp ex ea commodo consequat. </p>
                <span>Shop now</span>
            </div>
            <div className="seller__card">
                <NavLink to="/shop"><img src={coctel4} alt="" /></NavLink>
                <h4>Commodo</h4>
                <p>Ut enim ad minim veniam, quis nostrud exerp ex ea commodo consequat. </p>
                <span>Shop now</span>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Seller
