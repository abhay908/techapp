import React, { useState } from 'react'
import { sidebarLinks } from '../../../data/dashboard-links'
import { logout } from '../../../services/operations/authAPI'
import { useDispatch, useSelector } from 'react-redux'
import SidebarLink from './SidebarLink'
import { useNavigate } from 'react-router-dom'
import { VscSignOut } from 'react-icons/vsc'
import ConfirmationModal from '../../Common/ConfirmationModal'

const Sidebar = () => {
  const { user, loading: profileLoading } = useSelector((state) => state.profile)
  const { loading: authLoading } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [confirmationModal, setConfirmationModal] = useState(null)
  const [isClicked, setIsClicked] = useState(false)

  if (profileLoading || authLoading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center bg-richblack-800">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-purple-500 border-t-transparent"></div>
      </div>
    )
  }

  return (
    <>
      <div className="flex h-[calc(100vh-3.5rem)] min-w-[220px] flex-col border-r border-richblack-700 bg-blue-50 py-8 shadow-[5px_0_15px_0_rgba(0,0,0,0.3)]">
        <div className="flex flex-1 flex-col gap-0.5 px-2">
          {sidebarLinks.map((link) => {
            if (link.type && user.accountType !== link.type) return null
            return (
              <SidebarLink 
                key={link.id} 
                link={link} 
                iconName={link.icon}
              />
            )
          })}
        </div>

        <div className="mx-auto my-4 h-px w-10/12 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

        <div className="flex flex-col gap-0.5 px-2">
          <SidebarLink
            link={{ name: "Settings", path: "dashboard/settings" }}
            iconName="VscSettingsGear"
          />

          <button
            onClick={() => {
              setIsClicked(true)
              setTimeout(() => setIsClicked(false), 200)
              setConfirmationModal({
                text1: "Are You Sure?",
                text2: "You will be logged out of your Account",
                btn1Text: "Logout",
                btn2Text: "Cancel",
                btn1Handler: () => dispatch(logout(navigate)),
                btn2Handler: () => setConfirmationModal(null),
              })
            }}
            className={`group px-8 py-2.5 text-sm font-medium text-richblack-100 
              hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 hover:text-white 
              ${isClicked ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-[0_0_10px_0_rgba(168,85,247,0.5)]' : ''}
              transition-all rounded-lg`}
          >
            <div className="flex items-center gap-x-2">
              <VscSignOut className={`text-lg text-richblack-200 group-hover:text-white transition-colors ${isClicked ? 'text-white' : ''}`} />
              <span>Logout</span>
            </div>
          </button>
        </div>
      </div>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  )
}

export default Sidebar