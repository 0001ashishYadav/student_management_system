import Link from "next/link";

export function PageFooter() {
  return (
    <footer className="mt-16 text-center text-sm text-gray-500">
      <div className="mb-4">
        <div className="flex justify-center space-x-6">
          <Link href="#" className="hover:text-blue-600 transition-colors">
            Terms of Service
          </Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">
            Contact Us
          </Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">
            FAQ
          </Link>
        </div>
      </div>
      <p>© 2025 EduPortal. All rights reserved.</p>
    </footer>
  );
}
