import React from "react";
import "./SearchPage.css";

const cards = [
  {
    title: "Invitation",
    text: "This is an invitation card",
  },
  {
    title: "Notice",
    text: "This is a notice card",
  },
];
const SearchPage = () => {
  return (
    <div className="search-page">
      <h2>Search Something</h2>
      <input type="text" placeholder="Search..." />
      <button>Search</button>

      {cards.map((card, index) => {
        return (
          <div key={index} className="card">
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SearchPage;
