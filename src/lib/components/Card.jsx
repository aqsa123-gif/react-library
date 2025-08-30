import React from "react";

export default function Card({ title, description }) {
  return (
    <div className="border p-4 rounded shadow-md max-w-sm">
      <h2 className="font-bold text-lg">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
