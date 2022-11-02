import React from "react";
import './navbar.css';

const Navbar = ({ user, logout }) => {

  return (
    <header>
      <h1>Notekar</h1>
      <div className="align-left">
        {user ? (
          <>
            <span>{user}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : <></>}
      </div>
    </header>
  );
}

export default Navbar;