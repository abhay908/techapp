import React from 'react'
import * as Icons from 'react-icons/vsc'
import { matchPath, NavLink, useLocation } from 'react-router-dom'

const SidebarLink = ({ link, iconName }) => {
  const Icon = Icons[iconName]
  const location = useLocation()

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  return (
    <NavLink
      to={link.path}
      className={`relative px-8 py-3 text-sm font-medium transition-all duration-300 ${
        matchRoute(link.path)
          ? "text-white"
          : "text-richblack-300 hover:text-richblack-50"
      }`}
    >
      {/* Active state gradient highlight */}
      {matchRoute(link.path) && (
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-md"></div>
      )}

      {/* Hover gradient effect */}
      <div className={`absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-md opacity-0 ${
        !matchRoute(link.path) && "group-hover:opacity-100"
      } transition-opacity duration-300`}></div>

      {/* Active state indicator bar */}
      <span className={`absolute px-8 py-2.5 text-sm font-medium text-richblack-100 
              hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 hover:text-white ${
        matchRoute(link.path) ? "opacity-100" : "opacity-0 group-hover:opacity-50"
      } transition-opacity duration-300`}></span>

      <div className="relative flex items-center gap-x-3">
        <Icon className={`text-lg ${
          matchRoute(link.path)
            ? "text-yellow-50 drop-shadow-md"
            : "text-richblack-400 group-hover:text-white"
        } transition-all duration-300`} />
        <span className="relative z-10">{link.name}</span>
        
        {/* Glow effect for active state */}
        {matchRoute(link.path) && (
          <div className="absolute -inset-1 rounded-md bg-purple-500/10 blur-sm"></div>
        )}
      </div>
    </NavLink>
  )
}

export default SidebarLink