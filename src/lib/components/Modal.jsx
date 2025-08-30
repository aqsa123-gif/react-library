import React from "react";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-lg">
        {children}
        <button onClick={onClose} className="mt-2 px-4 py-2 bg-red-500 text-white rounded">Close</button>
      </div>
    </div>
  );
}
