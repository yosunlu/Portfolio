import React from "react";

export default function Footer() {
  return (
    <footer className="mt-20 mb-6 px-4 text-center text-slate-400">
      <small className="mb-2 block text-xs">
        &copy; 2024 Yushan.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js, TypeScript, Tailwind CSS,
        React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
