"use client";

import { PageFooter } from "@/component/registration/PageFooter";
import { PageHeader } from "@/component/registration/PageHeader";
import RegistrationForm from "@/component/registration/RegistrationForm";
import { useEffect } from "react";

export default function RegisterPage() {
  useEffect(() => {
    // Add subtle parallax effect to the background pattern
    const handleMouseMove = (e) => {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.005;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.005;
      document.documentElement.style.setProperty("--move-x", `${moveX}px`);
      document.documentElement.style.setProperty("--move-y", `${moveY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden pattern-grid opacity-[0.03] z-0" />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <PageHeader />

        <main className="flex justify-center items-center rounded shadow-2xl overflow-hidden my-10">
          <div className="w-full">
            <RegistrationForm />
          </div>
        </main>

        <PageFooter />
      </div>
    </div>
  );
}
