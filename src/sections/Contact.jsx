import React from "react";

export default function Contact() {
  return(
        <section id="contact" className="px-8 py-20 scroll-mt-16">
        <h2
          className="text-4xl font-bold text-center sm:text-5xl mb-6"
        >
          Contact Us
        </h2>
        <form
          action=""
          className="max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4"
        >
          <label for="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            minlength="3"
            maxlength="60"
            placeholder="Your Subject"
            className="w-full text-black text-2xl sm:text-3xl rounded-xl p-3 border border-solid border-slate-900"
          />
          <label for="message">Message:</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="7"
            placeholder="Your Message"
            required
            className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900"
          ></textarea>
          <button
            className="bg-zinc-600 hover:bg-zinc-500 text-white p-3 w-48 rounded-xl border border-solid border-slate-900"
          >
            Submit
          </button>
        </form>
      </section>
  ) 
}
