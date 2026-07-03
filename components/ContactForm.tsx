"use client";

import React, { useState } from "react";
import Button from "./Button";

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Full name is required";
      isValid = false;
    } else if (formData.name.length < 2) {
      tempErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
      isValid = false;
    } else if (formData.phone.length < 8) {
      tempErrors.phone = "Please enter a valid phone number";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Please choose a subject";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message content is required";
      isValid = false;
    } else if (formData.message.length < 10) {
      tempErrors.message = "Message must be at least 10 characters long";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error dynamically when typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    try {
      // Construct WhatsApp message text
      const messageText = `Hello Raja Ayurvedic & Unani PVT LTD,
New Inquiry Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Subject: ${formData.subject}
- Message: ${formData.message}`;

      // Encode for URI
      const encodedText = encodeURIComponent(messageText);
      const whatsappUrl = `https://wa.me/917673963808?text=${encodedText}`;

      // Open WhatsApp URL in a new tab
      window.open(whatsappUrl, "_blank");

      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-100 shadow-md">
      {isSuccess ? (
        <div className="text-center py-10 space-y-4 animate-fade-in">
          <div className="w-16 h-16 bg-accent-light text-accent rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-heading text-xl font-bold text-primary">Message Sent Successfully!</h3>
          <p className="text-sm sm:text-base text-neutral-gray max-w-sm mx-auto font-light">
            Thank you for reaching out. Our Ayurvedic consultant or receptionist will contact you shortly to confirm your booking or reply to your query.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="text-xs font-semibold uppercase tracking-wider text-accent hover:text-accent-hover cursor-pointer"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <h3 className="font-heading text-xl font-bold text-primary mb-4">Send a Message</h3>
          
          {/* Row 1: Name and Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-primary mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={`w-full px-4 py-2.5 bg-slate-50 border ${
                  errors.name ? "border-red-500 focus:ring-red-200" : "border-slate-200 focus:border-accent"
                } rounded-lg text-sm focus:outline-none focus:ring-2`}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-xs text-red-500 font-medium">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-primary mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`w-full px-4 py-2.5 bg-slate-50 border ${
                  errors.email ? "border-red-500 focus:ring-red-200" : "border-slate-200 focus:border-accent"
                } rounded-lg text-sm focus:outline-none focus:ring-2`}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-xs text-red-500 font-medium">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Phone and Subject */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                placeholder="e.g. +91 9876543210"
                className={`w-full px-4 py-2.5 bg-slate-50 border ${
                  errors.phone ? "border-red-500 focus:ring-red-200" : "border-slate-200 focus:border-accent"
                } rounded-lg text-sm focus:outline-none focus:ring-2`}
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1 text-xs text-red-500 font-medium">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-primary mb-1.5">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? "subject-error" : undefined}
                className={`w-full px-4 py-2.5 bg-slate-50 border ${
                  errors.subject ? "border-red-500 focus:ring-red-200" : "border-slate-200 focus:border-accent"
                } rounded-lg text-sm focus:outline-none focus:ring-2`}
              >
                <option value="">Select an option</option>
                <option value="consultation">Doctor Consultation</option>
                <option value="therapy">Therapy Booking</option>
                <option value="products">Product Question</option>
                <option value="general">General Inquiry</option>
              </select>
              {errors.subject && (
                <p id="subject-error" className="mt-1 text-xs text-red-500 font-medium">
                  {errors.subject}
                </p>
              )}
            </div>
          </div>

          {/* Row 3: Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-primary mb-1.5">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={`w-full px-4 py-2.5 bg-slate-50 border ${
                errors.message ? "border-red-500 focus:ring-red-200" : "border-slate-200 focus:border-accent"
              } rounded-lg text-sm focus:outline-none focus:ring-2`}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-xs text-red-500 font-medium">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              className="w-full justify-center"
            >
              {isSubmitting ? "Submitting..." : "Send Message"}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
