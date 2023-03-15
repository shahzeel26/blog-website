import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
   <div className="sidebar">
    <div className="sidebarItem">
      <span className="sidebarTitle">
        ABOUT ME
      </span>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC0mMt47pNfPXRZgp-NfCVunnT_lpqqY4XCQ&usqp=CAU" alt="" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, ea libero molestias iure maiores, repudiandae, corporis ipsam cupiditate aliquam voluptatum nesciunt ab obcaecati natus exercitationem possimus assumenda vitae officia quas. Maxime tempore illum laboriosam!</p>
    </div>
    <div className="sidebarItem">
      <span className="sidebarTitle">
        CATEGORIES
      </span>
      <ul className="sidebarList">
        <li className="sidebarListItem">Life</li>
        
        <li className="sidebarListItem">Music</li>
        
        <li className="sidebarListItem">Style</li>
        
        <li className="sidebarListItem">Sport</li>

      
        <li className="sidebarListItem">Tech</li>
        
        <li className="sidebarListItem">Cinema</li>
      </ul>
    </div>
    <div className="sidebarItem">
      <span className="sidebarTitle">
        FOLLOW US
      </span>
      <div className="sidebarSocial">
      <i className="sidebarIcons fa-brands fa-square-facebook"></i>
        <i className="sidebarIcons fa-brands fa-square-twitter"></i>
        <i className="sidebarIcons fa-brands fa-square-pinterest"></i>
        <i className="sidebarIcons fa-brands fa-square-instagram" ></i>
        
      </div>
    </div>
   </div>
  );
}

export default Sidebar