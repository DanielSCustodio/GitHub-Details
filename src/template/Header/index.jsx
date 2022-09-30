import React from 'react';
import { Nav } from './style';
import { Link } from 'react-router-dom';
import logo from './logo-git-details.svg';

export default function Header() {
  return (
    <Nav>
      <Link to="/">
        <img src={logo} alt="Git Collection" />
      </Link>
      <a
        href="https://github.com/DanielSCustodio"
        target="_blank"
        rel="noreferrer"
      >
        <span>Desenvolvido por Daniel Custódio</span>
      </a>
    </Nav>
  );
}
