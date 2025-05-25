import React, { useEffect, useState } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import ProfileDropDown from "../core/Auth/ProfileDropDown";
import { categories } from "../../services/apis";
import { apiConnector } from "../../services/apiConnector";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const [subLinks, setSubLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [catalogDropdownOpen, setCatalogDropdownOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API);
        setSubLinks(res.data.data);
      } catch (error) {
        console.log("Could not fetch Categories.", error);
      }
      setLoading(false);
    })();
  }, []);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              TechTutor
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              <Link 
                to="/" 
                className={`px-3 py-2 font-medium ${location.pathname === "/" ? "text-purple-600" : "text-gray-700 hover:text-purple-600"}`}
              >
                Home
              </Link>
              
              {/* Catalog Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setCatalogDropdownOpen(!catalogDropdownOpen)}
                  className={`px-3 py-2 font-medium flex items-center ${catalogDropdownOpen || matchRoute("/catalog/:catalogName") ? "text-purple-600" : "text-gray-700 hover:text-purple-600"}`}
                >
                  Catalog
                  <IoIosArrowDown className={`ml-1 transition-transform ${catalogDropdownOpen ? "transform rotate-180" : ""}`} />
                </button>
                
                {catalogDropdownOpen && (
                  <div className="absolute z-10 left-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {loading ? (
                        <p className="px-4 py-2 text-sm text-gray-700">Loading...</p>
                      ) : subLinks.length ? (
                        subLinks
                          ?.filter((subLink) => subLink?.courses?.length >= 0)
                          ?.map((subLink, i) => (
                            <Link
                              key={i}
                              to={`/catalog/${subLink.name.split(" ").join("-").toLowerCase()}`}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={() => setCatalogDropdownOpen(false)}
                            >
                              {subLink.name}
                            </Link>
                          ))
                      ) : (
                        <p className="px-4 py-2 text-sm text-gray-700">No Courses Found</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
              
              <Link 
                to="/about" 
                className={`px-3 py-2 font-medium ${matchRoute("/about") ? "text-purple-600" : "text-gray-700 hover:text-purple-600"}`}
              >
                About Us
              </Link>
              
              <Link 
                to="/contact" 
                className={`px-3 py-2 font-medium ${matchRoute("/contact") ? "text-purple-600" : "text-gray-700 hover:text-purple-600"}`}
              >
                Contact Us
              </Link>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4 ml-8">
              {user && user?.accountType !== "Instructor" && (
                <Link to="/dashboard/cart" className="relative">
                  <IoCartOutline className="text-2xl text-gray-700 hover:text-purple-600" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-purple-600 rounded-full">
                      {totalItems}
                    </span>
                  )}
                </Link>
              )}
              
              {token === null && (
                <>
                  <Link to="/login">
                    <button className="border-2 border-purple-600 text-purple-600 px-4 py-2 rounded-md font-medium hover:bg-purple-50 transition-colors">
                      Login
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-md font-medium hover:opacity-90 transition-opacity">
                      Sign Up
                    </button>
                  </Link>
                </>
              )}
              
              {token !== null && <ProfileDropDown />}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {user && user?.accountType !== "Instructor" && (
              <Link to="/dashboard/cart" className="relative mr-4">
                <IoCartOutline className="text-2xl text-gray-700" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-purple-600 rounded-full">
                    {totalItems}
                  </span>
                )}
              </Link>
            )}
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <AiOutlineClose className="h-6 w-6" />
              ) : (
                <AiOutlineMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === "/" ? "bg-purple-50 text-purple-600" : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            <div>
              <button
                onClick={() => setCatalogDropdownOpen(!catalogDropdownOpen)}
                className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium ${catalogDropdownOpen || matchRoute("/catalog/:catalogName") ? "bg-purple-50 text-purple-600" : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"}`}
              >
                Catalog
                <IoIosArrowDown className={`ml-1 transition-transform ${catalogDropdownOpen ? "transform rotate-180" : ""}`} />
              </button>
              
              {catalogDropdownOpen && (
                <div className="pl-4">
                  {loading ? (
                    <p className="px-3 py-2 text-sm text-gray-700">Loading...</p>
                  ) : subLinks.length ? (
                    subLinks
                      ?.filter((subLink) => subLink?.courses?.length >= 0)
                      ?.map((subLink, i) => (
                        <Link
                          key={i}
                          to={`/catalog/${subLink.name.split(" ").join("-").toLowerCase()}`}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                          onClick={() => {
                            setCatalogDropdownOpen(false);
                            setMobileMenuOpen(false);
                          }}
                        >
                          {subLink.name}
                        </Link>
                      ))
                  ) : (
                    <p className="px-3 py-2 text-sm text-gray-700">No Courses Found</p>
                  )}
                </div>
              )}
            </div>
            
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium ${matchRoute("/about") ? "bg-purple-50 text-purple-600" : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium ${matchRoute("/contact") ? "bg-purple-50 text-purple-600" : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            
            {token === null && (
              <div className="pt-4 pb-2 border-t border-gray-200">
                <Link
                  to="/login"
                  className="block w-full px-4 py-2 text-center rounded-md border-2 border-purple-600 text-purple-600 font-medium mb-2 hover:bg-purple-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block w-full px-4 py-2 text-center rounded-md bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:opacity-90"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;