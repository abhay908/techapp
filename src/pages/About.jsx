import React from 'react';
import { Link } from 'react-router-dom';
import ContactFormSection from '../components/core/AboutPage/ContactFormSection'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
      {/* Navigation - Matching the homepage */}
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              About TechTutor
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering the next generation of developers through accessible, high-quality tech education.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="TechTutor team" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  Our Story
                </span>
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 2020, TechTutor began as a small team of passionate developers who wanted to make tech education more accessible. We noticed that traditional coding bootcamps were expensive and inflexible, leaving many aspiring developers behind.
              </p>
              <p className="text-gray-600 mb-4">
                Our mission is to break down barriers to tech education by providing affordable, high-quality courses that anyone can access from anywhere in the world.
              </p>
              <p className="text-gray-600">
                Today, we've helped over 50,000 students from 120+ countries launch their tech careers, and we're just getting started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Our Core Values
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at TechTutor
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Accessibility",
                description: "We believe tech education should be available to everyone, regardless of background or financial situation.",
                icon: (
                  <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                )
              },
              {
                title: "Quality",
                description: "We maintain the highest standards for our curriculum and only work with industry-expert instructors.",
                icon: (
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: "Community",
                description: "Learning is better together. We foster supportive communities where students help each other grow.",
                icon: (
                  <svg className="w-10 h-10 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Meet Our Team
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate educators and industry experts dedicated to your success
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Founder & CEO",
                bio: "Former lead developer at TechCorp with 10+ years of experience",
                img: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                name: "Maria Garcia",
                role: "Head of Education",
                bio: "Curriculum designer with a passion for accessible learning",
                img: "https://randomuser.me/api/portraits/women/44.jpg"
              },
              {
                name: "David Kim",
                role: "Lead Instructor",
                bio: "Full-stack developer specializing in JavaScript frameworks",
                img: "https://randomuser.me/api/portraits/men/22.jpg"
              },
              {
                name: "Sarah Williams",
                role: "Community Manager",
                bio: "Dedicated to building supportive learning communities",
                img: "https://randomuser.me/api/portraits/women/68.jpg"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-center">
                  <img 
                    src={member.img} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-gradient-to-r from-purple-600 to-blue-500 overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
  <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* CTA Content */}
      <div className="text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to start your tech journey?
        </h2>
        <p className="text-xl text-white opacity-90 mb-8">
          Join thousands of students who've transformed their careers with TechTutor
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Link 
            to="/signup" 
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Started Now
          </Link>
          <Link 
            to="/catalog" 
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 hover:shadow-lg"
          >
            Browse Courses
          </Link>
        </div>
        
        {/* Contact info */}
        <div className="mt-12 text-white text-left hidden lg:block">
          <h3 className="text-xl font-semibold mb-4">Prefer to talk?</h3>
          <div className="space-y-3">
            <p className="flex items-center">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +1 (555) 123-4567
            </p>
            <p className="flex items-center">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              support@techtutor.com
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Form */}
      <div className="relative">
        <div className="absolute -top-8 -left-8 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="relative bg-white p-8 rounded-2xl shadow-2xl border border-white/20">
          <h3 className="text-3xl font-semibold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-2">
            Have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Send us a message and we'll get back to you within 24 hours
          </p>
          <ContactFormSection />
        </div>
      </div>
    </div>
  </div>
</section>

       

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                TechTutor
              </h3>
              <p className="text-gray-400 mb-4">
                Empowering the next generation of developers and tech professionals.
              </p>
              <div className="flex space-x-4">
                {['twitter', 'facebook', 'linkedin', 'github'].map((social) => (
                  <a key={social} href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">{social}</span>
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                      {social === 'twitter' && '🐦'}
                      {social === 'facebook' && '📘'}
                      {social === 'linkedin' && '🔗'}
                      {social === 'github' && '💻'}
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Courses</h4>
              <ul className="space-y-2">
                {['Web Development', 'Data Science', 'Mobile Apps', 'Cloud Computing', 'UI/UX Design'].map((course) => (
                  <li key={course}>
                    <Link to="#" className="text-gray-400 hover:text-white transition-colors">{course}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {['About Us', 'Careers', 'Blog', 'Press', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link to="#" className="text-gray-400 hover:text-white transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Refund Policy'].map((item) => (
                  <li key={item}>
                    <Link to="#" className="text-gray-400 hover:text-white transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2023 TechTutor. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="#" className="text-gray-400 hover:text-white transition-colors">Privacy</Link>
              <Link to="#" className="text-gray-400 hover:text-white transition-colors">Terms</Link>
              <Link to="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</Link>
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

export default AboutPage;