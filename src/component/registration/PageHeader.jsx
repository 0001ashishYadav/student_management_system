"use client";

import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
          <span className="text-xl font-bold">EduPortal</span>
        </Link>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" onClick={() => router.push("/")}>
            Home
          </Button>
          <Button variant="ghost" onClick={() => router.push("/login")}>
            Login
          </Button>
          <Button variant="ghost" onClick={() => router.push("/help")}>
            Help
          </Button>
        </div>
      </div>
    </header>
  );
}
