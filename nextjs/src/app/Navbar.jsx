

import Link from "next/link";

export default function AboutBar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">
          MyWebsite
        </h1>

        {/* Links */}
        <div className="space-x-6">
          <Link href="/" className="hover:text-blue-400 transition duration-300">
            Home
          </Link>

          <Link href="/about" className="hover:text-blue-400 transition duration-300">
            About
          </Link>

          <Link href="/contact" className="hover:text-blue-400 transition duration-300">
            Contact
          </Link>
        </div>

      </div>
    </nav>
  );
}
