"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { User, Mail, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong");
    }
  };

  return (
    <section
  className="px-4 md:px-16 lg:px-24 xl:px-32 w-full bg-white"
  aria-label="Contact Ocean World Logistics"
>
      {/* Section Label */}
      <p className="text-center font-medium text-blue-600 px-6 py-2 rounded-full bg-blue-100 border border-blue-300 w-max mx-auto">
        Contact
      </p>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mx-auto mt-4">
  Contact Ocean World Logistics
</h2>

      {/* Description */}
      <p className="text-gray-600 text-center mt-2 max-w-md mx-auto text-base md:text-lg">
        Need professional customs clearance, freight forwarding, warehousing or transportation services? Contact Ocean World Logistics today for reliable logistics solutions across Pakistan and international trade routes.
      </p>

      {/* Form */}
      <form
        className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto mt-16 w-full"
        onSubmit={handleSubmit}
      >
        {/* Name */}
        <div>
          <p className="mb-2 font-medium text-gray-800">Your name</p>
          <div className="flex items-center pl-3 rounded-xl border border-gray-300 focus-within:border-blue-600 outline-none transition-shadow shadow-sm hover:shadow-md bg-white">
            <User className="text-gray-400 w-5 h-5 mr-2" />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-3 bg-white outline-none rounded-r-xl"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <p className="mb-2 font-medium text-gray-800">Email id</p>
          <div className="flex items-center pl-3 rounded-xl border border-gray-300 focus-within:border-blue-600 outline-none transition-shadow shadow-sm hover:shadow-md bg-white">
            <Mail className="text-gray-400 w-5 h-5 mr-2" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 bg-white outline-none rounded-r-xl"
              required
            />
          </div>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <p className="mb-2 font-medium text-gray-800">Message</p>
          <textarea
            name="message"
            rows={6}
            value={form.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-600 outline-none resize-none transition-shadow shadow-sm hover:shadow-md bg-white"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="sm:col-span-2 flex justify-center mt-2">
          <button
            type="submit"
            className="inline-flex items-center justify-center bg-linear-to-r from-blue-600 to-teal-400 hover:from-teal-400 hover:to-blue-600 text-white font-semibold px-8 md:px-12 py-3 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg md:text-xl gap-2"
          >
            Send Message
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </form>

      {/* Status Message */}
      {status && (
        <p className="text-center mt-4 text-gray-700 text-base md:text-lg">{status}</p>
      )}
      <br/>
      <br/>
    </section>
    
  );
}
