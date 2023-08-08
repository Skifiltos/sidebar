import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import styled from "styled-components";
import { links, SocialBar } from "./links";
const Sidebar = () => {
  return <Wrapper>
    <div className="sidebar-content">
      <header>
        <div className="nav-brand">
          <h4>Sidebar</h4>
        </div>
        <button-btn className="btn-delete">
          <AiFillCloseCircle className="nav-icon" />
        </button-btn>
      </header>
      <ul className="sidebar-links">
        {
          links.map((link) => {
            return (
              <li key={link.id} className="link">
                <a href={link.url}>{link.text}</a>
              </li>
            );
          })
        }
      </ul>
      <footer>
        <SocialBar />
      </footer>
    </div>
  </Wrapper>;
};

const Wrapper = styled.aside`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: white;
  /* se commento sotto non applico la visibilità della sidebar */
  /* visibility: hidden; */
  /* se commento sotto non applico l'opacità della sidebar  */
  /* opacity: 0; */
  transition: var(--transition);
  /* se commento sotto non applico la trasformazione della sidebar */
  /* transform: translateX(-100%); */
  z-index: 2;
  .sidebar-content {
    width: 90%;
    margin: 0 auto;
    display: grid;
    gap: 2rem;
    place-items: center;
    header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .sidebar-links {
      margin-left: 0;
      place-items: center;
      display: grid;
      gap: 2rem;
      font-variant: small-caps;
      .link {
        padding: 0.2rem 0.725rem;
        border-radius: var(--btn-radius);
        transition: var(--transition);
        &:hover {
          background-color: var(--bg-blue);
        }
      }
    }
  }
`;

export default Sidebar;
