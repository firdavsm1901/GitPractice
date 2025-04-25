import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="max-w-sm w-full p-6 bg-white rounded shadow-lg">
      <div className="bg-gray-100 text-sm p-3 rounded mb-4">
        Username: <span className="text-green-700 font-medium">Employer</span>{" "}
        or <span className="text-green-700 font-medium">Candidate</span>
        <br />
        Password: <span className="text-green-700 font-medium">uxper123</span>
      </div>

      <form className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Enter Account or Email"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            className="w-full border border-gray-300 rounded px-3 py-2 pr-10"
          />
          <button
            type="button"
            className="absolute right-2 top-2.5 text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <div className="text-right text-sm">
          Forgot your password?{" "}
          <a href="#" className="text-green-700 font-medium">
            Reset password.
          </a>
        </div>

        <button className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800">
          Sign in
        </button>
      </form>

      <div className="text-center my-4 text-sm text-gray-500">
        Or Continue with
      </div>

      <div className="flex justify-center gap-4">
        <button className="bg-blue-600 text-white p-2 rounded-full">f</button>
        <button className="bg-red-500 text-white p-2 rounded-full">G</button>
        <button className="bg-blue-500 text-white p-2 rounded-full">in</button>
      </div>
    </div>
  );
}
