import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdMenu } from "@react-icons/all-files/md/MdMenu";
import { MdClose } from "@react-icons/all-files/md/MdClose";

const NavMenuStyles = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background-color: var(--dark-bg);

  .navItems {
    margin: 0 auto;
    width: 90%;
    text-align: center;

    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: var(--deep-dark);
      }

      a {
        display: inline-block;
        font-family: "RobotoMono Regular";
        padding: 1rem 2rem;
        font-size: 2rem;
        color: var(--gray-1);
        outline: none;

        &.active {
          color: var(--white);
        }
      }
    }

    .closeNavIcon {
      display: none;
      width: 3rem;
      margin: 0 0 0 auto;
      cursor: pointer;
      * {
        pointer-events: none;
      }
    }
  }

  .mobile-menu-icon {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    *{
      pointer-events: none;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 0;

    .mobile-menu-icon {
      display: block;

      &.hide-menu-icon {
        display: none;
      }
    }

    .navItems {
      position: absolute;
      right: 1rem;
      top: -30rem;
      width: 90%;
      max-width: 300px;
      transition: all 0.5s ease;
      background-color: var(--deep-dark);
      padding: 2rem;
      border-radius: 12px;
      opacity: 0;

      &.active {
        top: 1rem;
        opacity: 1;
      }

      .closeNavIcon {
        display: block;
      }

      li {
        display: block;
        margin-bottom: 1rem;

        a {
          width: 90%;
        }
      }
    }
  }
`;
export default function NavMenu() {
  const [showNav, setShowNav] = useState(false);

  return (
    <NavMenuStyles>
      <div
        className={
          !showNav ? "mobile-menu-icon" : "mobile-menu-icon hide-menu-icon"
        }
        onClick={() => setShowNav(true)}
      >
        <MdMenu />
      </div>
      <ul className={showNav ? "navItems active" : "navItems"}>
        <div className="closeNavIcon" onClick={() => setShowNav(false)}>
          <MdClose />
        </div>
        <li>
          <NavLink to="/" exact='true' onClick={() => setShowNav(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setShowNav(false)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" onClick={() => setShowNav(false)}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => setShowNav(false)}>
            Contact
          </NavLink>
        </li>
      </ul>
    </NavMenuStyles>
  );
}
