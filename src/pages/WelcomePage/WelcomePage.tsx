import React from "react";

import { useNavigate } from "react-router-dom";

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-6">
      <h1 className="mb-4 text-4xl font-extrabold">
        {/* {userName ? `Вітаємо, ${"Олександер"}!` : "Ласкаво просимо!"} */}
        Ласкаво просимо!
      </h1>
      <p className="mb-8 max-w-md text-center text-lg font-light drop-shadow-lg">
        Радий бачити тебе! Готовий підкорювати нові вершини з нашим додатком.
      </p>
      <button
        onClick={() => navigate("/todolist")}
        className="rounded-lg bg-white px-6 py-3 font-semibold text-purple-600 shadow-lg transition hover:bg-purple-100"
      >
        Почати роботу
      </button>
    </div>
  );
};

export default WelcomePage;
