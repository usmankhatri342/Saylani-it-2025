// pages/login.js
import React from 'react'
import Header from "@/components/header"

function Login() {
  return (
    <>
    <Header />
    <div className="min-h-screen flex items-center justify-center bg-green-200">
      <div className="w-full max-w-md p-8 bg-green-400 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">Login</h2>

        <form className="space-y-4">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300"
          >
            Login
          </button>

          {/* Forgot Password */}
          <div className="text-center mt-4">
            <a href="/reset-password" className="text-blue-500 hover:underline">Forgot Password?</a>
          </div>
        </form>

        {/* Sign Up Link */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">Dont have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a></p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;