import React from 'react';

const IndianPlayers = () => {
  const T20players = ["Virat", "Rohit", "Pant", "Bumrah"];
  const RanjiPlayers = ["Rahane", "Pujara", "Saha", "Ishant"];

  const allPlayers = [...T20players, ...RanjiPlayers];

  const [first, second, ...rest] = allPlayers;

  const oddTeam = allPlayers.filter((_, idx) => idx % 2 !== 0);
  const evenTeam = allPlayers.filter((_, idx) => idx % 2 === 0);

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>{oddTeam.map((p, i) => <li key={i}>{p}</li>)}</ul>
      <h2>Even Team Players</h2>
      <ul>{evenTeam.map((p, i) => <li key={i}>{p}</li>)}</ul>
    </div>
  );
};

export default IndianPlayers;
