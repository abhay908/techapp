import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { apiConnector } from '../../../services/apiConnector';
import { contactusEndpoint } from '../../../services/apis'
import CountryCode from '../../../data/countrycode.json'

const ContactUsForm = () => {
    const [loading, setLoading] = useState(false);
    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful }
    } = useForm();

    const submitContactForm = async (data) => {
        console.log("Logging Data", data);
        try {
            setLoading(true);
            const res = await apiConnector(
                "POST", 
                contactusEndpoint.CONTACT_US_API,
                data
            )
            console.log("Response", res);
            setLoading(false);
        } catch (error) {
            console.log("ERROR MESSAGE - ", error.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                email: "",
                firstname: "",
                lastname: "",
                message: "",
                phoneNo: "",
                countrycode: ""
            })
        }
    }, [reset, isSubmitSuccessful]);

    return (
        <form
            className="flex flex-col gap-6"
            onSubmit={handleSubmit(submitContactForm)}
        >
            <div className="flex flex-col gap-5 lg:flex-row">
                {/* First Name */}
                <div className="flex flex-col gap-2 lg:w-[48%]">
                    <label htmlFor="firstname" className="text-sm font-medium text-gray-700">
                        First Name
                    </label>
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        placeholder="Enter first name"
                        className="w-full rounded-md border border-gray-300 p-3 focus:border-purple-500 focus:ring-purple-500"
                        {...register("firstname", { required: true })}
                    />
                    {errors.firstname && (
                        <span className="text-sm text-red-500">
                            Please enter your name.
                        </span>
                    )}
                </div>

                {/* Last Name */}
                <div className="flex flex-col gap-2 lg:w-[48%]">
                    <label htmlFor="lastname" className="text-sm font-medium text-gray-700">
                        Last Name
                    </label>
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        placeholder="Enter last name"
                        className="w-full rounded-md border border-gray-300 p-3 focus:border-purple-500 focus:ring-purple-500"
                        {...register("lastname")}
                    />
                </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email address"
                    className="w-full rounded-md border border-gray-300 p-3 focus:border-purple-500 focus:ring-purple-500"
                    {...register("email", { required: true })}
                />
                {errors.email && (
                    <span className="text-sm text-red-500">
                        Please enter your email address.
                    </span>
                )}
            </div>
            
            {/* Phone Number */}
            <div className='flex flex-col gap-2'>
                <label htmlFor="phonenumber" className="text-sm font-medium text-gray-700">
                    Phone Number
                </label>
                <div className='flex gap-4'>
                    {/* Country Code Dropdown */}
                    <div className='flex w-[30%] flex-col gap-2'>
                        <select
                            name="countrycode"
                            id="countrycode"
                            className="w-full rounded-md border border-gray-300 p-3 focus:border-purple-500 focus:ring-purple-500"
                            {...register("countrycode", { required: true })}
                        >
                            {CountryCode.map((element, index) => (
                                <option key={index} value={element.code}>
                                    {element.code} - {element.country}
                                </option>
                            ))}
                        </select>
                    </div>
                    
                    {/* Phone Number Input */}
                    <div className="flex w-[70%] flex-col gap-2">
                        <input 
                            type="tel"
                            name='phoneNo'
                            id='phoneNo'
                            placeholder='9999 9999'
                            className="w-full rounded-md border border-gray-300 p-3 focus:border-purple-500 focus:ring-purple-500"
                            {...register("phoneNo", {
                                required: { value: true, message: "Please enter Phone Number" },
                                maxLength: { value: 15, message: "Invalid Phone Number" },
                                minLength: { value: 8, message: "Invalid Phone Number" }
                            })}
                        />
                    </div>
                </div>
                {errors.phoneNo && (
                    <span className="text-sm text-red-500">
                        {errors.phoneNo.message}
                    </span>
                )}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
                </label>
                <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="6"
                    placeholder="Enter your message here"
                    className="w-full rounded-md border border-gray-300 p-3 focus:border-purple-500 focus:ring-purple-500"
                    {...register("message", { required: true })}
                />
                {errors.message && (
                    <span className="text-sm text-red-500">
                        Please enter your message.
                    </span>
                )}
            </div>

            {/* Submit Button */}
            <button
                disabled={loading}
                type="submit"
                className={`w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 px-6 rounded-lg font-bold hover:from-purple-700 hover:to-blue-600 transition-colors shadow-md hover:shadow-lg ${
                    loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
            >
                {loading ? "Sending..." : "Send Message"}
            </button>
        </form>
    );
}

export default ContactUsForm;