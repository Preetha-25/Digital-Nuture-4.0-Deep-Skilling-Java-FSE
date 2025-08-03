import React from "react";

const App = () => {
  const offices = [
    {
      name: "SkyView Offices",
      rent: 55000,
      address: "MG Road, Bangalore",
      image: "https://via.placeholder.com/200"
    },
    {
      name: "GreenTech Hub",
      rent: 75000,
      address: "Guindy, Chennai",
      image: "https://via.placeholder.com/200"
    },
    {
      name: "SeaView Corporate",
      rent: 62000,
      address: "Marine Drive, Mumbai",
      image: "https://via.placeholder.com/200"
    }
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Office Space Rental App</h1>
      {offices.map((office, index) => (
        <div key={index} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
          <h2>{office.name}</h2>
          <img src={office.image} alt={office.name} width="200" />
          <p><strong>Address:</strong> {office.address}</p>
          <p style={{ color: office.rent < 60000 ? "red" : "green" }}>
            <strong>Rent:</strong> ₹{office.rent}
          </p>
        </div>
      ))}
    </div>
  );
};

export default App;