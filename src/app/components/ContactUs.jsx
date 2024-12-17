"use client";
import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <section
      className="w-full min-h-screen bg-secondary py-20 font-hostGrotesk"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get in Touch
          </h2>
          <p className="text-tertiary text-lg md:text-xl max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something
            extraordinary.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-tertiary/20 focus:border-primary focus:ring-2 focus:ring-primary/5 bg-transparent transition duration-200 outline-none text-primary"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-tertiary/20 focus:border-primary focus:ring-2 focus:ring-primary/5 bg-transparent transition duration-200 outline-none text-primary"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone Number Input */}
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-tertiary/20 focus:border-primary focus:ring-2 focus:ring-primary/5 bg-transparent transition duration-200 outline-none text-primary"
                  placeholder="123-456-7890"
                />
              </div>
            </div>

            {/* Subject Input */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-primary mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md border border-tertiary/20 focus:border-primary focus:ring-2 focus:ring-primary/5 bg-transparent transition duration-200 outline-none text-primary"
                placeholder="Project Discussion"
              />
            </div>

            {/* Message Input */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-primary mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-md border border-tertiary/20 focus:border-primary focus:ring-2 focus:ring-primary/5 bg-transparent transition duration-200 outline-none text-primary resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex justify-center items-center px-8 py-3 border-2 border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-secondary transition-all duration-300 min-w-[160px]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
