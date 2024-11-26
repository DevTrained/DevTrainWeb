import React, { useState } from "react";
import axios from "axios";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css"; // Import PhoneInput styles

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "", // This will store the phone number
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    isSubmitting: false,
    message: "",
    error: false,
  });

  const [errors, setErrors] = useState({}); // Validation errors

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: "" }); // Clear error for the field being edited
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, contact: value });
    setErrors({ ...errors, contact: "" }); // Clear error for phone field
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation: Only letters and spaces allowed
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = "Name can only contain letters and spaces.";
    }

    // Email validation: Starts with a letter and ends with .com
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[a-zA-Z][^\s@]*@[^\s@]+\.(com)$/.test(formData.email)) {
      newErrors.email = "Email must start with a letter and end with .com";
    }

    // Phone validation: Ensure it's a valid phone number
    if (!formData.contact) {
      newErrors.contact = "Please enter your contact number.";
    } else if (!isValidPhoneNumber(formData.contact)) {
      newErrors.contact = "Please enter a valid phone number.";
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setStatus({ isSubmitting: true, message: "", error: false });

    try {
      const response = await axios.post("http://localhost:8084/contact", formData);
      if (response.status === 200) {
        setStatus({ isSubmitting: false, message: "Message sent successfully!", error: false });
        setFormData({ name: "", email: "", contact: "", subject: "", message: "" });
      }
    } catch (error) {
      setStatus({ isSubmitting: false, message: "Error sending message.", error: true });
    }
  };

  return (
    <div className="h-[120%] flex flex-wrap ">
      {/* Map Section */}
      <div className="w-full lg:w-1/2 py-4 ">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13613.375548620608!2d74.2724814!3d31.4597251!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919010049dff735%3A0x4c296f77089efb43!2sDevtrain!5e0!3m2!1sen!2s!4v1731946453708!5m2!1sen!2s"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="border-0 rounded-lg"
        ></iframe>
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 h-full bg-white py-4  overflow-auto">
        <form
          className="w-full max-w-lg mx-auto bg-gray-50 p-6 rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-semibold text-center mb-6">Contact Us</h2>

          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-lg p-2 mt-1 text-sm lg:text-base`}
              placeholder="Enter your name"
              required
            />
            {errors.name && <p className="text-red-500 text-xs lg:text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div className="mt-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-lg p-2 mt-1 text-sm lg:text-base`}
              placeholder="Enter your email"
              required
            />
            {errors.email && <p className="text-red-500 text-xs lg:text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Phone Input Field */}
          <div className="mt-4">
            <label htmlFor="contact" className="block text-gray-700 font-medium">
              Contact No
            </label>
            <PhoneInput
              id="contact"
              value={formData.contact}
              onChange={handlePhoneChange}
              className={`w-full border ${errors.contact ? "border-red-500" : "border-gray-300"} rounded-lg p-2 mt-1 text-sm lg:text-base`}
              defaultCountry="US"
              placeholder="Enter your contact number"
              required
            />
            {errors.contact && (
              <p className="text-red-500 text-xs lg:text-sm mt-1">{errors.contact}</p>
            )}
          </div>

          {/* Subject Field */}
          <div className="mt-4">
            <label htmlFor="subject" className="block text-gray-700 font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className={`w-full border ${errors.subject ? "border-red-500" : "border-gray-300"} rounded-lg p-2 mt-1 text-sm lg:text-base`}
              placeholder="Enter subject"
              required
            />
            {errors.subject && (
              <p className="text-red-500 text-xs lg:text-sm mt-1">{errors.subject}</p>
            )}
          </div>

          {/* Message Field */}
          <div className="mt-4">
            <label htmlFor="message" className="block text-gray-700 font-medium">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              className={`w-full border ${errors.message ? "border-red-500" : "border-gray-300"} rounded-lg p-2 mt-1 text-sm lg:text-base`}
              placeholder="Enter your message"
              rows="4"
              required
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs lg:text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 mt-4"
            disabled={status.isSubmitting}
          >
            {status.isSubmitting ? "Submitting..." : "Submit"}
          </button>

          {/* Status Message */}
          {status.message && (
            <div
              className={`mt-4 p-2 rounded-lg text-center ${
                status.error ? "bg-red-100 text-red-500" : "bg-green-100 text-green-500"
              }`}
            >
              {status.message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
