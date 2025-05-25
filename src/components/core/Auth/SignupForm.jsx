import { useState } from "react"
import { toast } from "react-hot-toast"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { sendOtp } from "../../../services/operations/authAPI"
import { setSignupData } from "../../../slices/authSlice"
import { ACCOUNT_TYPE } from "../../../utils/constants"
import Tab from "../../Common/Tab"


function SignupForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const { firstName, lastName, email, password, confirmPassword } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match")
      return
    }

    const signupData = {
      ...formData,
      accountType,
    }

    dispatch(setSignupData(signupData))
    dispatch(sendOtp(formData.email, navigate))

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
    setAccountType(ACCOUNT_TYPE.STUDENT)
  }

  const tabData = [
    {
      id: 1,
      tabName: "Student",
      type: ACCOUNT_TYPE.STUDENT,
    },
    {
      id: 2,
      tabName: "Instructor",
      type: ACCOUNT_TYPE.INSTRUCTOR,
    },
  ]

  return (
    <div className="mx-auto w-full max-w-md rounded-xl bg-white p-8 shadow-2xl shadow-purple-200/50">
      {/* Account Type Tabs */}
      <div className="mb-6">
        <Tab tabData={tabData} field={accountType} setField={setAccountType} />
      </div>

      <form onSubmit={handleOnSubmit} className="space-y-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              value={firstName}
              onChange={handleOnChange}
              placeholder="Enter first name"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-purple-500 focus:ring-purple-500"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              value={lastName}
              onChange={handleOnChange}
              placeholder="Enter last name"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-purple-500 focus:ring-purple-500"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-purple-500 focus:ring-purple-500"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative mt-1">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={handleOnChange}
                placeholder="Create password"
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
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <div className="relative mt-1">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                required
                value={confirmPassword}
                onChange={handleOnChange}
                placeholder="Confirm password"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-10 focus:border-purple-500 focus:ring-purple-500"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-500"
              >
                {showConfirmPassword ? (
                  <AiOutlineEyeInvisible className="h-5 w-5" />
                ) : (
                  <AiOutlineEye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 py-3 px-4 font-medium text-white shadow-md hover:from-purple-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200"
          >
            Create Account
          </button>
        </div>
      </form>

      <div className="mt-6 text-center text-sm text-gray-600">
        <p>
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-purple-600 hover:text-purple-500"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignupForm