// components/AuthModal.tsx
import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";

export default function AuthModal({ onClose }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.9)] flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[360px] p-4 relative">
        <button
          className="absolute top-2 right-3 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="flex mb-4 border-b border-gray-300">
          <button
            className={`pb-2 px-2 text-sm font-semibold ${
              isLogin ? "border-b-2 border-black" : "text-gray-500"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Log in
          </button>
          <button
            className={`pb-2 px-2 ml-4 text-sm font-semibold ${
              !isLogin ? "border-b-2 border-black" : "text-gray-500"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {isLogin ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
}
