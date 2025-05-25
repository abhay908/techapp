import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { resetPassword } from '../services/operations/authAPI';
import { HiEyeOff, HiEye } from "react-icons/hi";
import { BiArrowBack } from "react-icons/bi"

const UpdatePassword = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    })
    const navigate = useNavigate()
    const { loading } = useSelector((state) => state.auth);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { password, confirmPassword } = formData;

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const token = location.pathname.split('/').at(-1);
        dispatch(resetPassword(password, confirmPassword, token, navigate));
    }

    return (
        <div className="min-h-[calc(100vh-3.5rem)] bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 flex items-center justify-center p-4">
            {
                loading ?
                    (
                        <div className="spinner"></div>
                    )
                    :
                    (
                        <div className="w-full max-w-md bg-richblack-800 rounded-xl shadow-lg overflow-hidden border border-richblack-700">
                            <div className="p-6 sm:p-8">
                                <div className="flex items-center gap-2 mb-2">
                                    <BiArrowBack className="text-purple-200" />
                                    <Link to="/login" className="text-purple-200 hover:text-purple-50 transition-colors text-sm">
                                        Back to Login
                                    </Link>
                                </div>

                                <h1 className="text-2xl sm:text-3xl font-bold text-richblack-5 mb-2">
                                    Choose new password
                                </h1>
                                <p className="text-richblack-200 mb-6">
                                    Almost done. Enter your new password and you're all set.
                                </p>

                                <form onSubmit={handleOnSubmit} className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-richblack-5">
                                            New Password <span className="text-pink-200">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                required
                                                type={showPassword ? "text" : "password"}
                                                name='password'
                                                value={password}
                                                onChange={handleOnChange}
                                                placeholder="Enter Password"
                                                className="w-full bg-richblack-700 border border-richblack-600 rounded-lg py-2 px-3 text-richblack-5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-10"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword((prev) => !prev)}
                                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-richblack-400 hover:text-richblack-100"
                                            >
                                                {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-richblack-5">
                                            Confirm New Password <span className="text-pink-200">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                required
                                                type={showConfirmPassword ? "text" : "password"}
                                                name='confirmPassword'
                                                value={confirmPassword}
                                                onChange={handleOnChange}
                                                placeholder="Confirm Password"
                                                className="w-full bg-richblack-700 border border-richblack-600 rounded-lg py-2 px-3 text-richblack-5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-10"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword((prev) => !prev)}
                                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-richblack-400 hover:text-richblack-100"
                                            >
                                                {showConfirmPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                                            </button>
                                        </div>
                                    </div>

                                    <button
                                        type='submit'
                                        className="w-full bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                                    >
                                        Reset Password
                                    </button>
                                </form>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}

export default UpdatePassword