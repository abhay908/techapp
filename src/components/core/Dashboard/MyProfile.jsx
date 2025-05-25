import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { BiEdit } from "react-icons/bi";
import IconBtn from '../../Common/IconBtn';
import { formattedDate } from '../../../utils/dateFormatter';

const MyProfile = () => {
    const { user } = useSelector((state) => state.profile);
    const navigate = useNavigate();

    return (
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <h1 className="mb-8 text-2xl font-medium text-richblack-5 sm:mb-10 sm:text-3xl">
                My Profile
            </h1>

            {/* Section 1 - Profile Card */}
            <div className="flex flex-col items-center justify-between gap-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6 sm:flex-row sm:p-8 md:px-12">
                <div className="flex flex-col items-center gap-x-4 sm:flex-row">
                    <img 
                        src={user?.image} 
                        alt={`profile-${user?.firstName}`} 
                        className="aspect-square w-16 rounded-full object-cover sm:w-[78px]"
                    />
                    <div className="mt-4 space-y-1 text-center sm:mt-0 sm:text-left">
                        <p className="text-lg font-semibold text-richblack-5">
                            {user?.firstName + " " + user?.lastName}
                        </p>
                        <p className="text-sm text-richblack-300">
                            {user?.email}
                        </p>
                    </div>
                </div>
                <IconBtn
                    text="Edit"
                    onclick={() => {
                        navigate("/dashboard/settings")
                    }}
                    customClasses="mt-4 sm:mt-0"
                >
                    <BiEdit />
                </IconBtn>
            </div>

            {/* Section 2 - About */}
            <div className="my-8 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6 sm:my-10 sm:gap-y-8 sm:p-8 md:px-12">
                <div className="flex w-full items-center justify-between">
                    <p className="text-lg font-semibold text-richblack-5">About</p>
                    <IconBtn
                        text="Edit"
                        onclick={() => {
                            navigate("/dashboard/settings")
                        }}
                    >
                        <BiEdit />
                    </IconBtn>
                </div>
                <p
                    className={`${
                        user?.additionalDetails?.about
                            ? "text-richblack-5"
                            : "text-richblack-400"
                    } text-sm font-medium`}
                >
                    {user?.additionalDetails?.about ?? "Write Something About Yourself"}
                </p>
            </div>

            {/* Section 3 - Personal Details */}
            <div className="my-8 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6 sm:my-10 sm:gap-y-8 sm:p-8 md:px-12">
                <div className="flex w-full items-center justify-between">
                    <p className="text-lg font-semibold text-richblack-5">
                        Personal Details
                    </p>
                    <IconBtn
                        text="Edit"
                        onclick={() => {
                            navigate("/dashboard/settings")
                        }}
                    >
                        <BiEdit />
                    </IconBtn>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
                    <div className="space-y-5">
                        <div>
                            <p className="mb-2 text-sm text-richblack-600">First Name</p>
                            <p className="text-sm font-medium text-richblack-5">
                                {user?.firstName}
                            </p>
                        </div>
                        <div>
                            <p className="mb-2 text-sm text-richblack-600">Email</p>
                            <p className="text-sm font-medium text-richblack-5">
                                {user?.email}
                            </p>
                        </div>
                        <div>
                            <p className="mb-2 text-sm text-richblack-600">Gender</p>
                            <p className="text-sm font-medium text-richblack-5">
                                {user?.additionalDetails?.gender ?? "Add Gender"}
                            </p>
                        </div>
                    </div>
                    <div className="space-y-5">
                        <div>
                            <p className="mb-2 text-sm text-richblack-600">Last Name</p>
                            <p className="text-sm font-medium text-richblack-5">
                                {user?.lastName}
                            </p>
                        </div>
                        <div>
                            <p className="mb-2 text-sm text-richblack-600">Phone Number</p>
                            <p className="text-sm font-medium text-richblack-5">
                                {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
                            </p>
                        </div>
                        <div>
                            <p className="mb-2 text-sm text-richblack-600">Date Of Birth</p>
                            <p className="text-sm font-medium text-richblack-5">
                                {formattedDate(user?.additionalDetails?.dateOfBirth) ??
                                    "Add Date Of Birth"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile