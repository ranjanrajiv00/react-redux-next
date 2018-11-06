import React from 'react';
import { Link } from '../server/routes';

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">App</a>
        </div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link route="product" params={{ id: '1' }}>
              <a className="nav-link">Products</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}