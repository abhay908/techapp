import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { BiArrowBack } from "react-icons/bi"
import { getPasswordResetToken } from '../services/operations/authAPI'

const ForgotPassword = () => {
  const [emailSent, setEmailSent] = useState(false)
  const [email, setEmail] = useState("")
  const { loading } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(getPasswordResetToken(email, setEmailSent))
  }

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center bg-richblack-900">
      {loading ? (
        <div className="flex flex-col items-center justify-center">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-purple-500 border-t-transparent"></div>
          <p className="mt-4 text-richblack-100">Processing your request...</p>
        </div>
      ) : (
        <div className="w-full max-w-[500px] rounded-xl bg-richblack-800 p-6 shadow-[0_0_20px_0_rgba(168,85,247,0.3)] lg:p-8">
          <h1 className="text-3xl font-bold text-richblack-5">
            {!emailSent ? "Reset your Password" : "Check Your Email"}
          </h1>
          
          <p className="my-6 text-richblack-100">
            {!emailSent 
              ? "Have no fear. We'll email you instructions to reset your password. If you don't have access to your email we can try account recovery" 
              : `We have sent the reset email to ${email}`
            }
          </p>

          <form onSubmit={handleOnSubmit} className="mt-4">
            {!emailSent && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-richblack-5 mb-2">
                  Email Address <span className="text-pink-200">*</span>
                </label>
                <input 
                  type="email"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full rounded-lg bg-richblack-700 border border-richblack-600 px-4 py-3 text-richblack-5 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              {!emailSent ? "Reset Password" : "Resend Email"}
            </button>
          </form>

          <div className="mt-6">
            <Link to="/login" className="flex items-center gap-2 text-richblack-5 hover:text-purple-200 transition-colors">
              <BiArrowBack />
              <span>Back to Login</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default ForgotPassword