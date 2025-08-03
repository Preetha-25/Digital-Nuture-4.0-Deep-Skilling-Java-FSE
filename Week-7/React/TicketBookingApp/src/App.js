import React, { useState } from "react";
import GuestPage from "./GuestPage";
import UserPage from "./UserPage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Ticket Booking App</h1>
      {isLoggedIn ? (
        <>
          <UserPage />
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <GuestPage />
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
};

export default App;