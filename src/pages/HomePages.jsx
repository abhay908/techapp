import React from "react";
import { Link } from 'react-router-dom';

const HomePages = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
      {/* Navigation */}
      

      {/* Hero Section */}
      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 md:mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  Unlock Your Potential
                </span>
                <br />
                <span className="relative inline-block">
                  with Tech Skills
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-200 opacity-50 -z-10 transform translate-y-1/2"></span>
                </span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
                Master in-demand coding skills through our interactive online
                courses. Learn at your own pace, build real-world projects, and
                get personalized guidance from industry experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link to="/signup">
                  <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform duration-300 text-base md:text-lg">
                    Start Learning Now
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="border-2 border-purple-600 text-purple-600 px-6 py-3 md:px-8 md:py-4 rounded-lg font-medium hover:bg-purple-50 transition-colors shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-transform duration-300 text-base md:text-lg">
                    Book a Demo
                  </button>
                </Link>
              </div>
              <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border-2 border-white overflow-hidden">
                      <img
                        src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? "women" : "men"}/${i + 20}.jpg`}
                        alt="Student"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-gray-600">
                  <p className="font-medium text-sm md:text-base">
                    Join <span className="text-purple-600">10,000+</span> happy students
                  </p>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-1 md:ml-2 text-sm md:text-base">5.0 (2,500 reviews)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative order-1 md:order-2 mb-8 md:mb-0">
              <div className="absolute -top-4 -left-4 w-40 h-40 md:w-64 md:h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-4 -right-4 w-40 h-40 md:w-64 md:h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-64 md:h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="relative bg-white p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl border border-gray-100 transform hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-purple-100 rounded-full flex items-center justify-center mr-3 md:mr-4 shadow-inner">
                    <svg className="w-5 h-5 md:w-8 md:h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                    Why Choose TechTutor?
                  </h3>
                </div>
                <ul className="space-y-2 md:space-y-4">
                  {[
                    "Hands-on coding exercises and projects",
                    "Personalized feedback from instructors",
                    "Learn at your own pace",
                    "Access from anywhere in the world",
                    "Career support and job placement",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-purple-100 flex items-center justify-center">
                          <svg className="w-3 h-3 md:w-4 md:h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <span className="ml-2 md:ml-3 text-gray-700 text-sm md:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Become Instructor Section */}
        <section className="py-12 md:py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl md:rounded-[40px] p-6 md:p-8 lg:p-12 text-center shadow-xl md:shadow-2xl">
              <div className="absolute -top-16 -right-16 w-40 h-40 md:w-64 md:h-64 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-16 -left-16 w-40 h-40 md:w-64 md:h-64 bg-white/10 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-24 md:h-48 bg-gradient-to-r from-white/10 to-white/0"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center bg-white/10 text-white px-4 py-1 md:px-6 md:py-2 rounded-full mb-4 md:mb-6">
                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  <span className="text-sm md:text-base font-medium">Join Our Team</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
                  Share Your Knowledge <br />
                  <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                    And Earn Money
                  </span>
                </h2>

                <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-6 md:mb-8 lg:mb-10">
                  Teach what you love to thousands of students worldwide. Set
                  your own schedule, pricing, and create content on your terms.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                  <Link to="/signup">
                    <button className="bg-white text-purple-600 px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform duration-300 text-base md:text-lg flex items-center justify-center">
                      Start Teaching Today
                      <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button className="border-2 border-white/30 bg-white/5 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-medium hover:bg-white/10 transition-colors shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-transform duration-300 text-base md:text-lg flex items-center justify-center">
                      How It Works
                      <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Instructor Benefits Grid */}
            <div className="mt-12 md:mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Earn Money",
                  description: "Get paid monthly based on student enrollment. Top instructors earn $10,000+ per month.",
                  stat: "Up to 80% revenue share",
                },
                {
                  icon: (
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Global Reach",
                  description: "Teach students from 180+ countries without leaving your home.",
                  stat: "500,000+ students",
                },
                {
                  icon: (
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  ),
                  title: "Full Support",
                  description: "Our team helps with course creation, marketing, and technical support.",
                  stat: "24/7 support",
                },
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-md md:shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center mb-4 md:mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">{benefit.description}</p>
                  <div className="text-xs md:text-sm font-semibold text-purple-600">{benefit.stat}</div>
                </div>
              ))}
            </div>

            {/* Success Story */}
            <div className="mt-12 md:mt-16 lg:mt-24 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <div className="inline-flex items-center bg-white text-purple-600 px-3 py-1 md:px-4 md:py-2 rounded-full mb-4 md:mb-6 shadow-sm text-sm md:text-base">
                    <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Instructor Success Story
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                    "TechTutor changed my life. I went from freelancer to full-time instructor earning 5x more."
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
                    Maria Rodriguez was a freelance developer before joining TechTutor. Now she teaches over 15,000 students worldwide and has built a sustainable income doing what she loves.
                  </p>
                  <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors flex items-center text-sm md:text-base">
                    Read Maria's story
                    <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl md:rounded-3xl opacity-20 blur-xl"></div>
                  <div className="relative bg-white p-1 md:p-2 rounded-xl md:rounded-2xl shadow-md md:shadow-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Instructor teaching"
                      className="w-full h-auto rounded-lg md:rounded-xl"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6">
                      <div className="text-white font-bold text-lg md:text-xl">Maria Rodriguez</div>
                      <div className="text-white/80 text-sm md:text-base">Full Stack Instructor</div>
                      <div className="flex mt-1 md:mt-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="text-white/80 ml-1 md:ml-2 text-sm md:text-base">4,872 reviews</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="mt-12 md:mt-16 lg:mt-24 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">How To Become an Instructor</h3>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-8 md:mb-10 lg:mb-12">
                Follow these simple steps to start teaching on TechTutor
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {[
                  {
                    step: "1",
                    title: "Apply",
                    description: "Submit your application with your skills and experience",
                  },
                  {
                    step: "2",
                    title: "Create",
                    description: "Develop your course with our guidance and templates",
                  },
                  {
                    step: "3",
                    title: "Publish",
                    description: "Launch your course to our global student community",
                  },
                  {
                    step: "4",
                    title: "Earn",
                    description: "Get paid as students enroll in your course",
                  },
                ].map((item, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg md:rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative bg-white rounded-lg md:rounded-xl p-6 h-full">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-600 flex items-center justify-center text-xl md:text-2xl font-bold mb-4 md:mb-6 mx-auto">
                        {item.step}
                      </div>
                      <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{item.title}</h4>
                      <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Popular Courses Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 relative inline-block">
                Popular Courses
                <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-200 opacity-50 -z-10 transform translate-y-1 md:translate-y-2"></span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
                Explore our most popular courses taught by industry experts
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: "Full Stack Web Development",
                  description: "Master HTML, CSS, JavaScript, React, Node.js and more to build modern web applications",
                  icon: "💻",
                  color: "from-purple-600 to-indigo-600",
                  duration: "12 Weeks",
                  students: "3.2k",
                },
                {
                  title: "Data Science Fundamentals",
                  description: "Learn Python, Pandas, NumPy, and data visualization to analyze and interpret complex data",
                  icon: "📊",
                  color: "from-blue-600 to-cyan-600",
                  duration: "10 Weeks",
                  students: "2.5k",
                },
                {
                  title: "Mobile App Development",
                  description: "Build iOS and Android apps with React Native and Flutter with real-world projects",
                  icon: "📱",
                  color: "from-pink-600 to-rose-600",
                  duration: "8 Weeks",
                  students: "1.8k",
                },
              ].map((course, index) => (
                <div key={index} className="group bg-white rounded-xl md:rounded-2xl shadow-md md:shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2 transition-transform">
                  <div className={`h-40 md:h-48 bg-gradient-to-r ${course.color} flex flex-col items-center justify-center text-5xl md:text-6xl text-white`}>
                    {course.icon}
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex justify-between items-center mb-3 md:mb-4">
                      <span className="text-xs md:text-sm font-medium text-gray-500">{course.duration}</span>
                      <span className="text-xs md:text-sm font-medium text-gray-500 flex items-center">
                        <svg className="w-3 h-3 md:w-4 md:h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                        {course.students}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-purple-600 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">{course.description}</p>
                    <button className="w-full bg-gray-50 hover:bg-gray-100 text-purple-600 font-semibold py-2 md:py-3 px-3 md:px-4 rounded-lg transition-colors flex items-center justify-center text-sm md:text-base">
                      Enroll Now
                      <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 md:mt-10 lg:mt-12">
              <button className="border-2 border-purple-600 text-purple-600 px-6 py-2 md:px-8 md:py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors shadow-sm hover:shadow-md text-sm md:text-base">
                View All Courses
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 relative inline-block">
                What Our Students Say
                <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-200 opacity-50 -z-10 transform translate-y-1 md:translate-y-2"></span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it - hear from our students
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  quote: "TechTutor helped me transition from marketing to a full-time developer role in just 6 months! The hands-on projects were exactly what employers were looking for.",
                  name: "Sarah Johnson",
                  role: "Frontend Developer at Google",
                  avatar: "https://randomuser.me/api/portraits/women/44.jpg",
                  rating: 5,
                },
                {
                  quote: "The projects were so practical - I could immediately apply what I learned at my job. The instructor feedback was incredibly valuable for my growth.",
                  name: "Michael Chen",
                  role: "Data Analyst at Amazon",
                  avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                  rating: 5,
                },
                {
                  quote: "Best investment I've made in my career. The instructors are incredibly supportive and the community is amazing. Landed my dream job after completing the course!",
                  name: "David Wilson",
                  role: "Mobile Developer at Facebook",
                  avatar: "https://randomuser.me/api/portraits/men/67.jpg",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-xl md:rounded-2xl p-6 md:p-8 border border-gray-200 hover:border-purple-300 transition-colors group">
                  <div className="text-lg md:text-xl text-gray-700 mb-4 md:mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-white shadow-md mr-3 md:mr-4">
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base md:text-lg">{testimonial.name}</h4>
                      <p className="text-gray-600 text-xs md:text-sm">{testimonial.role}</p>
                      <div className="flex mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-3xl md:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-lg border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Stay Updated</h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest courses, tips, and special offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 md:px-6 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm md:text-base"
                />
                <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg text-sm md:text-base">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mb-12 md:mb-16">
            <div className="md:col-span-2">
              <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4 md:mb-6">
                TechTutor
              </h3>
              <p className="text-gray-400 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                Empowering the next generation of developers and tech professionals through high-quality, accessible education.
              </p>
              <div className="flex space-x-3 md:space-x-4">
                {["twitter", "facebook", "linkedin", "instagram", "youtube"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                    aria-label={social}
                  >
                    {social === "twitter" && (
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    )}
                    {social === "facebook" && (
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    )}
                    {social === "linkedin" && (
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    )}
                    {social === "instagram" && (
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    )}
                    {social === "youtube" && (
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 md:mb-6 text-white">Courses</h4>
              <ul className="space-y-2 md:space-y-3">
                {[
                  "Web Development",
                  "Data Science",
                  "Mobile Apps",
                  "Cloud Computing",
                  "UI/UX Design",
                  "DevOps",
                  "Cybersecurity",
                  "Blockchain",
                ].map((course) => (
                  <li key={course}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                      {course}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 md:mb-6 text-white">Company</h4>
              <ul className="space-y-2 md:space-y-3">
                {[
                  "About Us",
                  "Careers",
                  "Blog",
                  "Press",
                  "Contact",
                  "Instructors",
                  "Success Stories",
                  "Affiliate Program",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 md:mb-6 text-white">Support</h4>
              <ul className="space-y-2 md:space-y-3">
                {[
                  "Help Center",
                  "FAQ",
                  "Community",
                  "Feedback",
                  "Scholarships",
                  "Accessibility",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 md:mb-6 text-white">Legal</h4>
              <ul className="space-y-2 md:space-y-3">
                {[
                  "Privacy Policy",
                  "Terms of Service",
                  "Cookie Policy",
                  "Refund Policy",
                  "Copyright",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0 text-sm md:text-base">
              © {new Date().getFullYear()} TechTutor. All rights reserved.
            </p>
            <div className="flex space-x-4 md:space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default HomePages;