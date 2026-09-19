import { NavLink, Outlet } from "react-router-dom";
import droplet from "./assets/droplet.svg";

export default function Layout() {
  return (
    <div className="app">
      <header className="site-header">
        <NavLink to="/" className="brand">
          <img src={droplet} alt="LifeDrop logo" className="logo" />
          <span className="brand-name">LifeDrop</span>
        </NavLink>
        <nav className="site-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/requests">Requests</NavLink>
          <NavLink to="/donate">Donate</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/login">Login</NavLink>
        </nav>
      </header>
      <main className="site-main">
        <Outlet />
      </main>
      <footer className="site-footer">
        LifeDrop · Blood Donor &amp; Request Finder · 2026
      </footer>
    </div>
  );
}
