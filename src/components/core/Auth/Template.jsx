import { useSelector } from "react-redux"
import { FcGoogle } from "react-icons/fc"
import frameImg from "../../../assets/Images/frame.png"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

function Template({ title, description1, description2, image, formType }) {
  const { loading } = useSelector((state) => state.auth)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center p-4">
      {loading ? (
        <div className="flex flex-col items-center justify-center">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-lg text-purple-600">Loading...</p>
        </div>
      ) : (
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          {/* Left Side - Form */}
          <div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16">
            <div className="mb-8 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  {title}
                </span>
              </h1>
              <p className="text-lg text-gray-600">
                <span>{description1}</span>{" "}
                <span className="font-semibold text-blue-500">{description2}</span>
              </p>
            </div>

            {/* Google Sign In Button */}
            <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-lg py-3 px-4 text-gray-700 font-medium hover:bg-gray-50 transition-all mb-6">
              <FcGoogle className="text-xl" />
              <span>Continue with Google</span>
            </button>

            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Form Component */}
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>

          {/* Right Side - Image */}
          <div className="hidden md:block md:w-1/2 relative bg-gradient-to-br from-purple-500 to-blue-600">
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="relative w-full h-full max-w-md">
                <img
                  src={frameImg}
                  alt="Pattern"
                  className="w-full h-full object-contain opacity-20"
                />
                <img
                  src={image}
                  alt="Students"
                  className="absolute top-0 left-0 w-full h-full object-contain p-8"
                />
              </div>
            </div>
            <div className="absolute bottom-8 left-0 right-0 text-center text-white px-8">
              <p className="text-lg font-medium">Join thousands of students worldwide</p>
              <p className="text-sm opacity-90 mt-1">Start your tech journey today</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Template