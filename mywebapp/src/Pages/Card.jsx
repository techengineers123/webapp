import React from "react";

function Card({ title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transform transition hover:scale-105">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Card;
