"use client";

import { GraduationCap } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export function PageHeader() {
  const router = useRouter();

  return (
    <header className="py-4">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-2 text-blue-600 transition-colors hover:text-blue-700"
        >
          <GraduationCap size={32} />
          <span className="text-xl font-bold">Inflection</span>
        </Link>

        <div className="flex items-center space-x-4">
          <Link
            className={` hover:text-blue-700${
              router.pathname === "/register" ? "text-blue-600" : "text-black"
            }`}
            href="/register"
          >
            Home
          </Link>
          <Link
            className={` hover:text-blue-700${
              router.pathname === "/login" ? "text-blue-600" : "text-black"
            }`}
            href="/login"
          >
            Login
          </Link>
          <Link
            className={` hover:text-blue-700${
              router.pathname === "/help" ? "text-blue-600" : "text-black"
            }`}
            href="/help"
          >
            Help
          </Link>
        </div>
      </div>
    </header>
  );
}
