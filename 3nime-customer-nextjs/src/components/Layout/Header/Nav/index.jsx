import NavSidbar from "./NavSidbar";
import React, { useState } from "react";

import { useRouter } from 'next/router';

function Navbar(props) {
  const router = useRouter();
 
  const [activeTab, setActiveTab] = useState(router.pathname);

  const onClickTab = () => {
    setActiveTab(router.pathname);
  };


  return (
    <>
      <nav className="navbar navbar-expand-lg mx-5">
        <div className="container-fluid">
          <button 
            className="navbar-toggler active-colors"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa-solid fa-bars" />
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navigation-menu navbar-nav me-auto mb-2 mb-lg-0">
              <NavSidbar
                title="Trang Chủ"
                a_href="/"
                activeTab={activeTab}
                onClick={onClickTab}
              />

              <NavSidbar
                title="Giới Thiệu"
                activeTab={activeTab}
                onClick={onClickTab}
                a_href="/about-us"
              />

              <NavSidbar
                title="Hướng Dẫn"
                activeTab={activeTab}
                onClick={onClickTab}
                submenutab="0"
                a_href="#"
                titlemenu1="Đặt mua & Thanh Toán"
                a_href1="/payment-instructions"
                titlemenu2="Kiếm 250k / h"
                a_href2="/Blogs/instruct"
                titlemenu3="Tiết kiệm tiêu dùng"
                a_href3="/Blogs/Kakeibo"
              />     

              <NavSidbar
                title="Sản Phẩm"
                activeTab={activeTab}
                onClick={onClickTab}
                a_href="/collections"
              />

              <NavSidbar
                title="Hỏi đáp"
                activeTab={activeTab}
                onClick={onClickTab}
                a_href="/answer"
              />

            </ul>
          </div>
        </div>
      </nav>
      
      <style jsx>
          {`
            /* Navbar */
            nav {
              display: flex;
              text-align: center;
              font-family: "Arial", sans-serif;
              font-size: 16px;
              & ul {
                margin: 0;
                padding: 0;
                list-style: none;
              }
            }
  
            
            .navigation-menu {
              vertical-align: top;
              background: #0000;
              box-shadow: 1px -1px -1px 1px #000, -1px 1px -1px 1px #fff,
                0 0 6px 3px #fff;
              border-radius: 10px;
              & a {
                display: block;
                background: #fff;
                color: #665d5d;
                text-decoration: none;
                padding: 10px 15px;
                text-transform: uppercase;
                font-size: 80%;
                letter-spacing: 2px;
                text-shadow: 0 -1px 0 #000;
                position: relative;
              }
              & li {
                position: relative;
              }
            }
            .active-colors {
              color: rgb(221, 51, 193) !important;
              font-weight: bold;
            }
            .navigation-menu > li {
              float: left;
              border-bottom: 1px #fff solid;
              margin-right: 1px;
              & > a {
                margin-bottom: 1px;
                box-shadow: inset 0 1.5em 0.33em -0.3em #fcf8f8;
              }
            }
            /* NavMenu */
            .navigation-menu > li:hover,
            .navigation-menu > li:hover > a {
              border-bottom-color: rgb(221, 51, 193);
              transition: all 1s ease-out;
            }
  
            .navigation-menu li:hover > a {
              color: rgb(221, 51, 193);
              transition: all 1s ease-out;
              animation: menuPop 0.2s linear;
            }
  
            .navigation-menu > li:first-child {
              border-radius: 4px 0 0 4px;
              & > a {
                border-radius: 4px 0 0 0;
              }
            }
  
            .navigation-menu > li:last-child {
              border-radius: 0 0 4px 0;
              margin-right: 0;
              & > a {
                border-radius: 0 4px 0 0;
              }
            }
  
            .navigation-menu li li a {
              margin-top: 1px;
            }
  
            .navigation-menu li a:first-child:nth-last-child(2):before {
              content: "";
              position: absolute;
              height: 0;
              width: 0;
              border: 5px solid transparent;
              top: 50%;
              right: -1px;
              transition: all 0.25s ease-out;
            }
  
            /* NavSubmenu */
            .navigation-menu ul {
              position: absolute;
              white-space: nowrap;
              border-bottom: 1px rgb(221, 51, 193) solid;
              z-index: 1;
              left: -99999em;
              transition: all 0.25s ease-out;
            }
            .navigation-menu > li:focus-within > ul {
              display: none;
              left: auto;
              padding-top: 5px;
              min-width: 100%;
            }
            .navigation-menu > li:hover > ul {
              display: block;
              left: auto;
              padding-top: 5px;
              min-width: 100%;
            }
            .navigation-menu > li li ul {
              border-left: 1px solid #fff;
              margin-left: 1px;
              transition: all 0.25s ease-out;
            }
            .navigation-menu > li li:hover > ul {
              left: 100%;
              top: -1px;
            }
  
            /* NavCaret */
            .navigation-menu
              > li.active-colors
              > a:first-child:nth-last-child(2):before {
              border-top-color: rgb(221, 51, 193);
            }
            .navigation-menu > li > a:first-child:nth-last-child(2):before {
              border-top-color: #aaa;
            }
            .navigation-menu > li:hover > a:first-child:nth-last-child(2):before {
              border: 5px solid transparent;
              margin-top: -5px;
              border-bottom-color: rgb(221, 51, 193);
            }
            .navigation-menu li li > a:first-child:nth-last-child(2):before {
              border-left-color: #aaa;
              margin-top: -5px;
            }
            .navigation-menu
              li
              li:hover
              > a:first-child:nth-last-child(2):before {
              border: 5px solid transparent;
              right: 10px;
              border-right-color: rgb(221, 51, 193);
            }
  
            @keyframes menuPop {
              0% {
                transform: translateY(3px) rotateY(30deg);
                opacity: 0.5;
              }
              100% {
                transform: translateY(0px) rotateY(0deg);
                opacity: 1;
              }
            }
  
            @keyframes shake {
              0% {
                transform: rotate(0deg);
              }
              25% {
                transform: rotate(0.5deg);
              }
              50% {
                transform: rotate(0eg);
              }
              75% {
                transform: rotate(-0.5deg);
              }
              100% {
                transform: rotate(0deg);
              }
            }
            .nav-home {
              display: block;
            }
            /* reponsive */
            @media screen and (max-width: 991px) {
              .navigation-menu ul {
                display: block;
                position: absolute;
                white-space: nowrap;
                border-bottom: 1px rgb(221, 51, 193) solid;
                z-index: 1;
                left: -99999em;
                transition: all 0.25s ease-out;
              }
              .nav-home {
                display: none;
              }
              .navigation-menu > li:hover > ul {
                display: none;
              }
              .navigation-menu > li:focus-within > ul {
                display: block;
                left: auto;
                padding-top: 5px;
                min-width: 100%;
              }
            }
  
            @media screen and (max-width: 426px) {
            }
          `}
        </style>
    </>
  );
}

export default Navbar;
