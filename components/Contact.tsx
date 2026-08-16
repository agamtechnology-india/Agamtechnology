"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  setSuccessMessage("");
  setErrorMessage("");

  if (!name || !email || !message) {
    setErrorMessage("Please fill in all fields.");
    return;
  }

  try {
    setIsSending(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      setErrorMessage(
        data.message || "Unable to send your message."
      );
      return;
    }

    setSuccessMessage(
      "Thank you! Your message has been sent successfully."
    );

    setName("");
    setEmail("");
    setMessage("");
  } catch (error) {
    console.error("Contact form error:", error);

    setErrorMessage(
      "Something went wrong. Please try again."
    );
  } finally {
    setIsSending(false);
  }
};

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-900 px-6 py-24 scroll-mt-20"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-blue-600/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            Let&apos;s Connect
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Contact{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Agam Technology
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Let&apos;s discuss your next networking, automation, cloud,
            or infrastructure project.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-8">
              <h3 className="text-2xl font-bold text-white">
                Get in Touch
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Have a networking or automation requirement?
                Send us a message and let&apos;s explore how Agam
                Technology can help.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10">
                    <Mail
                      size={20}
                      className="text-blue-400"
                    />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Email
                    </p>
                    <p className="mt-1 text-slate-200">
                      info@agamtechnology.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10">
                    <Phone
                      size={20}
                      className="text-blue-400"
                    />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Phone
                    </p>
                    <p className="mt-1 text-slate-200">
                      +91-97112-65723
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10">
                    <MapPin
                      size={20}
                      className="text-blue-400"
                    />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Location
                    </p>
                    <p className="mt-1 text-slate-200">
                      New Delhi, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-800 bg-slate-950/70 p-8"
            >
              <h3 className="text-2xl font-bold text-white">
                Send Us a Message
              </h3>

              {successMessage && (
                <div className="mt-6 rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-green-400">
                  {successMessage}
                </div>
              )}
              {errorMessage && (
  <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-400">
    {errorMessage}
  </div>
)}

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we help you?"
                  className="w-full resize-none rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <button
  type="submit"
  disabled={isSending}
  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 disabled:cursor-not-allowed disabled:opacity-60"
>
  {isSending ? "Sending..." : "Send Message"}

  {!isSending && <Send size={18} />}
</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}