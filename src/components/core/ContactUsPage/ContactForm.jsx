import React from "react";
import ContactUsForm from "./ContactUsForm";

const ContactForm = () => {
  return (
    <div className="border border-gray-400 text-richblack-400 rounded-xl p-7 lg:p-14 flex gap-3 flex-col">
      <span className="text-3xl font-semibold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
      Got a Idea? We&apos;ve got the skills. Let&apos;s team up
      </span>
      
      <p className="text-gray-600">
        Tell us more about yourself and what you&apos;re got in mind.
      </p>

      <div className="mt-7">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactForm;
