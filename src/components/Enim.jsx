import React from 'react'
import '../style/enim.css'
import bg_img from '../image/Mask Group.png'
function Enim() {
  return (
    <section className='enim'>
      <div className="container">
        <div className="enim__wrapper">
          <img src={bg_img} alt="" />
        <div className="enim__card">
            <h4>LEARN</h4>
            <h2>Ut enim</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
            <span>Shop now</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Enim
