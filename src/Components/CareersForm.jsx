import React, { useState } from "react";
import axios from "axios";
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Import styles for the phone input

const CareersForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    qualification: '',
    experience: '',
    linkedin: '',
    message: '',
    cv: null,
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);  // New state to track form submission

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleFileChange = (e) => {
    const { id, files } = e.target;
    const file = files[0];
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

    if (file && !allowedTypes.includes(file.type)) {
      setErrors((prev) => ({ ...prev, [id]: "Only PDF or Word documents are allowed." }));
      setFormData({ ...formData, [id]: null });
      return;
    }

    setErrors((prev) => ({ ...prev, [id]: '' }));
    setFormData({ ...formData, [id]: file });
  };

  const validateForm = () => {
    const { name, email, phone, gender, qualification, experience, cv } = formData;
    let formErrors = {};

    // Name Validation (Only letters and spaces allowed)
    if (!name.match(/^[a-zA-Z\s]+$/)) formErrors.name = "Name must only contain letters and spaces.";

    // Email Validation (Starts with a letter and ends with .com)
    if (!email.match(/^[a-zA-Z][^\s@]*@[^\s@]+\.(com)$/)) formErrors.email = "Enter a valid email starting with a letter and ending with .com.";

    // Phone Validation (Phone number is required and valid)
    if (!phone) {
      formErrors.phone = "Please enter your contact number.";
    } else if (!isValidPhoneNumber(phone)) {
      formErrors.phone = "Please enter a valid phone number.";
    }

    // Gender Validation (Gender is required)
    if (!gender) formErrors.gender = "Please select your gender.";

    // Qualification Validation (Qualification is required)
    if (!qualification) formErrors.qualification = "Please select your qualification level.";

    // Experience Validation (Experience is required)
    if (!experience) formErrors.experience = "Please enter your experience.";

    // CV Validation (Only Word or PDF files allowed)
    if (!cv) formErrors.cv = "Please upload your CV in word or pdf form.";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);  // Set submitting state to true before starting form submission

    const formDataToSend = new FormData();
    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await axios.post("http://localhost:8084/careers", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSuccessMessage(response.data.message);
      setErrors({});
      setFormData({
        name: '',
        email: '',
        phone: '',
        gender: '',
        qualification: '',
        experience: '',
        linkedin: '',
        message: '',
        cv: null,
      });
    } catch (err) {
      setSuccessMessage('');
      setErrors({ submit: "An error occurred while submitting the form." });
    } finally {
      setIsSubmitting(false);  // Set submitting state to false after form submission completes
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center mb-8">Careers</h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto" onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label className="block font-semibold mb-2" htmlFor="name">Your Name *</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full border rounded p-2"
            required
          />
          {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold mb-2" htmlFor="email">Your Email *</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full border rounded p-2"
            required
          />
          {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
        </div>

        {/* Phone */}
        <div>
          <label className="block font-semibold mb-2" htmlFor="phone">Contact No *</label>
            <PhoneInput
              id="phone"
              value={formData.phone}
              onChange={(value) => setFormData({ ...formData, phone: value })}
              placeholder="Enter phone number"
              defaultCountry="US"
              className="w-full p-2 rounded border"
              required
            />
          {errors.phone && <div className="text-red-500 text-sm mt-1">{errors.phone}</div>}
        </div>

        {/* Gender */}
        <div>
          <label className="block font-semibold mb-2" htmlFor="gender">Gender *</label>
          <select
            id="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <div className="text-red-500 text-sm mt-1">{errors.gender}</div>}
        </div>

        {/* Qualification */}
        <div>
          <label className="block font-semibold mb-2" htmlFor="qualification">Qualification *</label>
          <select
            id="qualification"
            value={formData.qualification}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          >
            <option value="">Select Qualification</option>
            <option value="bachelor">Bachelor</option>
            <option value="master">Master</option>
            <option value="phd">PhD</option>
          </select>
          {errors.qualification && <div className="text-red-500 text-sm mt-1">{errors.qualification}</div>}
        </div>

        {/* Experience */}
        <div>
          <label className="block font-semibold mb-2" htmlFor="experience">Experience *</label>
          <input
            type="text"
            id="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Experience in Years"
            className="w-full border rounded p-2"
            required
          />
          {errors.experience && <div className="text-red-500 text-sm mt-1">{errors.experience}</div>}
        </div>

        {/* LinkedIn */}
        <div className="md:col-span-2">
          <label className="block font-semibold mb-2" htmlFor="linkedin">LinkedIn Profile</label>
          <input
            type="url"
            id="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            placeholder="LinkedIn URL"
            className="w-full border rounded p-2"
          />
        </div>

        {/* CV */}
        <div className="md:col-span-2">
          <label className="block font-semibold mb-2" htmlFor="cv">Upload CV *</label>
          <input
            type="file"
            id="cv"
            onChange={handleFileChange}
            className="w-full border rounded p-2"
            required
          />
          {errors.cv && <div className="text-red-500 text-sm mt-1">{errors.cv}</div>}
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <label className="block font-semibold mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Enter a message"
            className="w-full border rounded p-2"
          />
        </div>

        {/* Submit */}
        <div className="md:col-span-2 text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600"
            disabled={isSubmitting}  // Disable button while submitting
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>

      {/* General Error or Success Message */}
      {errors.submit && <div className="text-red-500 text-center mt-4">{errors.submit}</div>}
      {successMessage && <div className="text-green-500 text-center mt-4">{successMessage}</div>}
    </div>
  );
};

export default CareersForm;