"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Do you accept insurance?",
    a: "No, but a superbill is provided for self-submission.",
  },
  {
    q: "Are online sessions available?",
    a: "Yes—all sessions are available via Zoom.",
  },
  {
    q: "What is your cancellation policy?",
    a: "24-hour notice is required to cancel or reschedule.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-100">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        {faqs.map((item, i) => (
          <div
            key={i}
            className="mb-4 border border-gray-300 rounded bg-white overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center text-left px-4 py-4 text-gray-800 font-medium focus:outline-none cursor-pointer"
            >
              <span>{item.q}</span>
              <span>
                {openIndex === i ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 12H6"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                )}
              </span>
            </button>

            {/* FAQ answer with transition */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden px-4 ${
                openIndex === i
                  ? "max-h-40 py-2 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600">{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
