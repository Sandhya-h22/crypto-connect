"use client";

import { AppFeatures } from "@/components/Appfeatures";
import CTAsection from "@/components/CTAsection";
import HomePageActionButtons from "@/components/HomePageButtons";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/lib/UseClientUIs";
import { ExternalLink, Github, Twitter, ArrowDown } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

function Main() {
  const nextSectionRef = useRef<HTMLDivElement>(null);

  const scrollToNextSection = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background Image Animation */}
      <MotionDiv
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
        className="absolute top-44 right-12 -z-10 pointer-events-none"
      >
        <Image
          src="https://skill-mine.com/wp-content/uploads/2021/11/Group-730.svg"
          alt="Decorative background"
          height={600}
          width={600}
          priority
        />
      </MotionDiv>

      {/* Solana Devnet Tag */}
      <div className="absolute top-5 left-5">
        <div className="bg-green-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
          <div className="relative w-3 h-3 bg-green-300 rounded-full">
            <div className="absolute inset-0 bg-green-200 opacity-50 animate-pulse rounded-full"></div>
            <div className="absolute -inset-0.5 bg-green-400 opacity-30 blur-sm animate-pulse rounded-full"></div>
          </div>
          <span>On Solana Devnet</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="xl:pl-16 pl-6 space-y-6 max-w-4xl relative">
          <div className="flex items-center gap-2">
            <Image
              alt="CryptoConnect"
              width={150}
              height={150}
              src="https://yt3.googleusercontent.com/wDC9y0YFW4zH9I-kXiVrnH3okS4L5AX2P22bBWDj0CTfxNcsFQEvcoV6H93PTjl4QDb1attvdrU=s160-c-k-c0x00ffffff-no-rj"
              className="rounded-full"
            />
            <span className="text-7xl font-bold text-gray-800">
              CryptoConnect
            </span>
          </div>

          <div className="text-xl sm:text-2xl md:text-3xl xl:text-5xl flex flex-wrap gap-2 items-center font-bold text-black xl:text-slate-600">
            <span>Wallet</span>
            <span className="text-sky-500 text-4xl sm:text-5xl md:text-6xl xl:text-8xl">
              X
            </span>
            <span>Payment Gateway</span>
          </div>

          <p className="text-lg sm:text-xl xl:text-2xl text-black/80 xl:text-slate-500 max-w-3xl">
            Make Payment & get payments without leaving the app
          </p>

          <HomePageActionButtons />

          <div className="absolute bottom-8 left-0 right-0 flex justify-center">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                onClick={scrollToNextSection}
                className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-sky-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
                <MotionDiv
                  animate={{ y: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowDown className="text-white w-6 h-6 z-10 transition-colors duration-300" />
                </MotionDiv>
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 animate-pulse" />
              </Button>
            </MotionDiv>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div ref={nextSectionRef}>
        <AppFeatures />
      </div>

      {/* Call To Action Section */}
      <CTAsection />

      {/* Footer */}
      <footer className="bg-black py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Logo & Resources */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-1 mb-6">
                <Image
                  alt="CryptoConnect"
                  width={50}
                  height={50}
                  src="https://yt3.googleusercontent.com/wDC9y0YFW4zH9I-kXiVrnH3okS4L5AX2P22bBWDj0CTfxNcsFQEvcoV6H93PTjl4QDb1attvdrU=s160-c-k-c0x00ffffff-no-rj"
                  className="rounded-full"
                />
                <span className="text-3xl font-bold text-white">
                  CryptoConnect
                </span>
              </div>

              <p className="text-white mb-6 max-w-md">
                The future of Web3 payments, simplified. Make and receive crypto
                payments without ever leaving the app.
              </p>

              <h3 className="text-lg font-bold mb-4 text-white">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-gray-500 text-sm">
            <span>© 2025 CryptoConnect. All Rights Reserved.</span>
            <div className="flex mt-4 sm:mt-0 space-x-5">
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                aria-label="Twitter"
                className="hover:text-indigo-500"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://github.com/yourrepo"
                target="_blank"
                aria-label="GitHub"
                className="hover:text-indigo-500"
              >
                <Github size={20} />
              </a>
              <a
                href="https://yourwebsite.com"
                target="_blank"
                aria-label="Website"
                className="hover:text-indigo-500"
              >
                <ExternalLink size={20} />
              </a>
              <a
                href="https://discord.gg/yourserver"
                target="_blank"
                aria-label="Discord"
                className="hover:text-indigo-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M22 24c-.4-1.5-.7-2.8-1-4.2-.3-1.2-.6-2.5-1-3.7 1-.4 1.7-1 2.1-2-.6.3-1.2.5-1.9.6-.6-.6-1.3-1-2.1-1.3-.9-.3-1.8-.5-2.8-.5s-1.9.2-2.8.5c-.8.3-1.5.8-2.1 1.3-.6-.1-1.3-.3-1.9-.6.4 1 .9 1.6 2.1 2-.4 1.2-.7 2.5-1 3.7-.3 1.4-.6 2.7-1 4.2 1.7-1 3.2-2 4.9-2.9 1.7.9 3.2 1.9 4.9 2.9z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/yourcompany"
                target="_blank"
                aria-label="LinkedIn"
                className="hover:text-indigo-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M4.98 3.5C4.98 5 3.94 6 2.48 6H2.45C1 6 0 5 0 3.5S1 1 2.45 1C3.91 1 4.98 2 4.98 3.5zM.5 8.98h4v15h-4v-15zm7.5 0h3.8v2.2h.05c.53-1 1.84-2.2 3.8-2.2 4.07 0 4.82 2.63 4.82 6v6.98h-4v-6.2c0-1.5-.03-3.44-2.1-3.44-2.1 0-2.42 1.63-2.42 3.32v6.3h-4v-15z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Main;
