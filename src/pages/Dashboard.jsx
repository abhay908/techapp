import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useLocation, matchPath } from 'react-router-dom';
import Sidebar from '../components/core/Dashboard/Sidebar';

const Dashboard = () => {
  // Get loading states from Redux store
  const { loading: authLoading } = useSelector((state) => state.auth);
  const { loading: profileLoading } = useSelector((state) => state.profile);
  const location = useLocation();

  // Fixed version of matchRoute to avoid recursive calls
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  // Show loading spinner while data is being fetched
  if (profileLoading || authLoading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)]">
      {/* Sidebar navigation */}
      <Sidebar matchRoute={matchRoute} />
      
      {/* Main content area with scrollable container */}
      <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
        {/* Container with max-width for better readability on large screens */}
        <div className="mx-auto w-11/12 max-w-[1000px] py-10">
          {/* 
            Outlet renders the matched child route component 
            This is where nested dashboard routes will appear
          */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;