"use client";
import React, { useEffect, useState } from "react";
import LoginFormDemo from "./../components/ui/login-form-demo"; // ✅ Make sure this exists

export default function LoginModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (open) {
      setTimeout(() => setShow(true), 10);
    } else {
      setShow(false);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div
        className={`relative w-full max-w-md transition-all duration-300 transform ${
          show ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <button
          className="absolute -top-4 -right-4 z-10 bg-white dark:bg-black rounded-full p-1.5 shadow-lg"
          onClick={onClose}
        >
          <span className="text-black dark:text-white text-xl">×</span>
        </button>
        <LoginFormDemo /> {/* 👈 Your actual form goes here */}
      </div>
    </div>
  );
}
