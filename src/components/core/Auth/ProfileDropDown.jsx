import { useRef, useState } from "react"
import { AiOutlineCaretDown } from "react-icons/ai"
import { VscDashboard, VscSignOut } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import useOnClickOutside from "../../../hooks/useOnClickOutside"
import { logout } from "../../../services/operations/authAPI"

export default function ProfileDropdown() {
  const { user } = useSelector((state) => state.profile)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useOnClickOutside(ref, () => setOpen(false))

  if (!user) return null

  return (
    <div className="relative" ref={ref}>
      <button 
        onClick={() => setOpen(!open)}
        className="flex items-center gap-x-1 group"
      >
        <img
          src={user?.image}
          alt={`profile-${user?.firstName}`}
          className="aspect-square w-8 h-8 rounded-full object-cover border-2 border-transparent group-hover:border-purple-500 transition-all"
        />
        <AiOutlineCaretDown className={`text-sm text-richblack-100 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-[calc(100%+8px)] right-0 z-[1000] min-w-[180px] overflow-hidden rounded-lg bg-richblack-800 shadow-[0_0_20px_0_rgba(0,0,0,0.3)] border border-richblack-600"
        >
          <Link 
            to="/dashboard/my-profile" 
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-3 text-sm text-richblack-100 hover:bg-richblack-700 hover:text-gray-600 transition-colors"
          >
            <VscDashboard className="text-lg text-purple-500" />
            Dashboard
          </Link>
          
          <button
            onClick={() => {
              dispatch(logout(navigate))
              setOpen(false)
            }}
            className="w-full flex items-center gap-3 px-4 py-3 text-sm text-richblack-100 hover:bg-richblack-700 hover:text-gray-600 transition-colors"
          >
            <VscSignOut className="text-lg text-pink-500" />
            Logout
          </button>
        </div>
      )}
    </div>
  )
}