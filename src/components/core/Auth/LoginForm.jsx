import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import { login } from "../../../services/operations/authAPI" // from backend
function LoginForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false)

  const { email, password } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password, navigate))
  }

  return (
    <div className="mx-auto w-full max-w-md rounded-xl bg-white p-8 shadow-2xl shadow-purple-200/50">
      <form onSubmit={handleOnSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address <span className="text-red-500">*</span>
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={handleOnChange}
              placeholder="Enter email address"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-purple-500 focus:ring-purple-500"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="text-sm">
              <Link 
                to="/forgot-password" 
                className="font-medium text-purple-600 hover:text-purple-500"
              >
                Forgot password?
              </Link>
            </div>
          </div>
          <div className="relative mt-1">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              required
              value={password}
              onChange={handleOnChange}
              placeholder="Enter password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-10 focus:border-purple-500 focus:ring-purple-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-500"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible className="h-5 w-5" />
              ) : (
                <AiOutlineEye className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 py-3 px-4 font-medium text-white shadow-md hover:from-purple-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200"
          >
            Sign In
          </button>
        </div>
      </form>

      <div className="mt-6 text-center text-sm text-gray-600">
        <p>
          Don't have an account?{" "}
          <Link 
            to="/signup" 
            className="font-medium text-purple-600 hover:text-purple-500"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginForm