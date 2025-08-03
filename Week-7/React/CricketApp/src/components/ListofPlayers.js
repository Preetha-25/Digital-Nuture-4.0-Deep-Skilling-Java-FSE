import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 80 },
    { name: "Rohit", score: 50 },
    { name: "Dhoni", score: 90 },
    { name: "Rahul", score: 60 },
    { name: "Pant", score: 85 },
    { name: "Jadeja", score: 45 },
    { name: "Shami", score: 70 },
    { name: "Ashwin", score: 30 },
    { name: "Bumrah", score: 55 },
    { name: "Surya", score: 95 },
    { name: "Gill", score: 77 }
  ];

  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>{players.map(p => <li key={p.name}>{p.name} - {p.score}</li>)}</ul>
      <h2>Players with Score Below 70</h2>
      <ul>{below70.map(p => <li key={p.name}>{p.name} - {p.score}</li>)}</ul>
    </div>
  );
};

export default ListofPlayers;
