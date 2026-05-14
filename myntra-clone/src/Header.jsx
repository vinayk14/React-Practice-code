import React from "react";
import {createRoot} from "react-dom/client"


function Header () {
    return(
        <div className="header">
          <img className="images" src="https://cdn.pnggallery.com/wp-content/uploads/myntra-logo-02.png" alt="myntra_logo"/>

          <div className="option">
            <button className="btns">Mens</button>
            <button className="btns">Womens</button>
            <button className="btns">Kids</button>
            <button className="btns">Home</button>
            <button className="btns">GenZ</button>
            <button className="btns">Beauty</button>
          </div>
          <input className="searchbox" type="text" placeholder="Search for products, brands and more" />
           <div className="profile">
            <button className="pro">Profile</button>
            <button className="pro">Waitlist</button>
            <button className="pro">Bag</button>
          </div>
        </div>
    )

}

export default Header