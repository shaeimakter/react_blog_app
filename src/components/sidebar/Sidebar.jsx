import React from 'react'
import "./sidebar.css"
import { Link } from "react-router-dom";

export default function Sidebar() {
 return (
  <div className="sidebar">
   <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <a>
              Life
            </a>
          </li>
          <li className="sidebarListItem">
            <a>
              Music
            </a>
          </li>
          <li className="sidebarListItem">
            <a>
              Sport
            </a>
          </li>
          <li className="sidebarListItem">
            <a>
              Style
            </a>
          </li>
          <li className="sidebarListItem">
            <a>
              Tech
            </a>
          </li>
          <li className="sidebarListItem">
            <a>
              Cinema
            </a>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  </div>
 )
}
