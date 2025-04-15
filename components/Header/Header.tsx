"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      {/* Left Side: Logo & Navigation */}
      <div className="flex items-center">
        {/* Logo & Name (as a single unit) */}
        <div className="flex items-center space-x-2">
          <Image
            alt="CryptoConnect"
            width={50}
            height={50}
            src="https://yt3.googleusercontent.com/wDC9y0YFW4zH9I-kXiVrnH3okS4L5AX2P22bBWDj0CTfxNcsFQEvcoV6H93PTjl4QDb1attvdrU=s160-c-k-c0x00ffffff-no-rj"
            className="rounded-full"
          />
          <span className="text-xl font-bold text-gray-800">CryptoConnect</span>
        </div>

        {/* Navigation Links with more spacing */}
        <nav className="ml-12">
          <ul className="flex space-x-8 text-gray-700 font-semibold">
            <li><Link href="#payment" className="hover:text-sky-500">Payment</Link></li>
            <li><Link href="#earn" className="hover:text-sky-500">Earn</Link></li>
            <li><Link href="#apis" className="hover:text-sky-500">APIs</Link></li>
            <li><Link href="#blog" className="hover:text-sky-500">Blog</Link></li>
          </ul>
        </nav>
      </div>

      {/* Right Side: Login & Signup */}
      <div className="flex space-x-4">
        <Button variant="outline">
          <Link href="/login">Login</Link>
        </Button>
        <Button variant="default">
          <Link href="/signup">Sign Up</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
