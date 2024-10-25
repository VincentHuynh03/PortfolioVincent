"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        )
        .then(
          (result) => {
            console.log("SUCCESS", result.text);
            alert("Message worked");
          },
          (error) => {
            console.log("FAILED", error.text);
            alert("Failed");
          },
        );
    }
  };

  return (
    <div className="mx-auto p-5 lg:w-1/4">
      <form ref={form} onSubmit={sendEmail} className="flex flex-col">
        <label className="mb-2 mt-2">Name</label>
        <input
          type="text"
          name="name"
          required
          className="p-2 rounded border border-gray-300 bg-gray-800"
        />
        <label className="mb-2 mt-2">Email</label>
        <input
          type="email"
          name="email"
          required
          className="p-2 rounded border border-gray-300 bg-gray-800"
        />
        <label className="mb-2 mt-2">Message</label>
        <textarea
          name="message"
          required
          className="p-2 rounded border border-gray-300 min-h-[100px] bg-gray-800"
        ></textarea>
        <button
          type="submit"
          className="m-auto lg:w-1/4 mt-5 p-2 bg-blue-600 hover:bg-blue-500 hover:shadow-2xl text-white border-none rounded cursor-pointer"
        >
          Send
        </button>
      </form>
    </div>
  );
}
