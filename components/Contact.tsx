"use client";

import { useState } from "react";
export default function Contact() {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
     setSuccessMessage("Thank you! Your message has been submitted.");
    };

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-slate-900 px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-center text-4xl font-bold text-white">
          Contact Us
        </h2>
        
        <p className="mb-12 text-center text-slate-400">
          Let's discuss your next networking or automation project.
        </p>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-white">
              Get in Touch
            </h3>

            <div className="space-y-4 text-slate-300">
              <p>📧 info@agamtechnology.com</p>
              <p>📞 +91-97112-34567</p>
              <p>📍 New Delhi, India</p>
            </div>
          </div>
           {successMessage && (
           <div className="mb-6 rounded-lg bg-green-600 p-4 text-white">
            {successMessage}
           </div>
              )}
          {/* Contact Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-white"
              >
                Name
              </label>

              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
                />         
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-white"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-white"
              >
                Message
              </label>

             <textarea
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="How can we help you?"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
             />
              
            
            </div>

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}