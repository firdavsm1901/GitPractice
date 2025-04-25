import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterForm() {
  const [isEmployer, setIsEmployer] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="max-w-sm w-full p-6 bg-white rounded shadow-lg space-y-4">
      {/* Toggle */}
      <div className="flex space-x-2">
        <button
          type="button"
          onClick={() => setIsEmployer(false)}
          className={`flex-1 border px-4 rounded-lg ${
            !isEmployer ? "bg-green-700 text-white" : "bg-white text-gray-700"
          }`}
        >
          👤 Candidate
        </button>
        <button
          type="button"
          onClick={() => setIsEmployer(true)}
          className={`flex-1 border px-4 rounded-lg ${
            isEmployer ? "bg-green-700 text-white" : "bg-white text-gray-700"
          }`}
        >
          🏢 Employer
        </button>
      </div>

      {/* Name Fields */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="First Name"
          className="w-1/2 border border-gray-300 rounded px-3 py-2"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-1/2 border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <input
        type="text"
        placeholder="Enter Username"
        className="w-full border border-gray-300 rounded px-3 py-2"
      />
      <input
        type="email"
        placeholder="Enter Email"
        className="w-full border border-gray-300 rounded px-3 py-2"
      />

      {/* Phone Number */}
      <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
        <select className="bg-transparent pr-2 text-sm focus:outline-none">
          <option value="+1">🇺🇸 +1</option>
          <option value="+44">🇬🇧 +44</option>
          <option value="+91">🇮🇳 +91</option>
          <option value="+358" selected>
            🇫🇮 +358
          </option>
          <option value="+61">🇦🇺 +61</option>
          {/* Add more country codes as needed */}
        </select>
        <input
          type="tel"
          className="ml-3 w-full text-sm placeholder-gray-400 focus:outline-none"
          placeholder="Phone number"
        />
      </div>

      {/* Password Field */}
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          className="w-full border border-gray-300 rounded px-3 py-2 pr-10"
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      {/* Terms */}
      <label className="flex items-start space-x-2 text-sm text-gray-600">
        <input type="checkbox" className="mt-1" />
        <span>
          Accept the{" "}
          <a href="#" className="text-green-700 underline">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="text-green-700 underline">
            Privacy Policy
          </a>
        </span>
      </label>

      {/* Sign Up */}
      <button className="w-full bg-green-700 text-white py-2 rounded-full hover:bg-green-800">
        Sign up
      </button>
    </div>
  );
}
