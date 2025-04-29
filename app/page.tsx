"use client";

import { AppFeatures } from "@/components/Appfeatures";
import CTAsection from "@/components/CTAsection";
import HomePageActionButtons from "@/components/HomePageButtons";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/lib/UseClientUIs";
import { ExternalLink, Github, Twitter, ArrowDown } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

function Main() {
  const nextSectionRef = useRef<HTMLDivElement>(null);

  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative overflow-hidden">
   <MotionDiv
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    duration: 0.5,
    delay: 0,
    ease: [0, 0.71, 0.2, 1.01],
  }}
  className="absolute xl:top-[15rem] bottom-0 right-[7rem] -z-10 pointer-events-none"


>

<Image
  src="https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coins-isolated-white_1017-31520.jpg?ga=GA1.1.1433945378.1745335830&semt=ais_hybrid&w=740"
  alt="Decorative image"
  height={1000}  // Increase height
  width={1000}   // Increase width
  className="object-cover opacity-80 rotate-180 xl:opacity-100 xl:rotate-0 w-full max-w-[60rem] max-md:w-[80vw] max-sm:h-[70vh] max-sm:w-auto"
/>


      </MotionDiv>

      {/* solana devnet tag */}
      <div className="absolute top-5 left-5">
        <div className="relative bg-green-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
          <div className="relative w-3 h-3 rounded-full bg-green-300">
            <div className="absolute inset-0 rounded-full bg-green-200 opacity-50 animate-pulse"></div>
            <div className="absolute -inset-0.5 bg-green-400 rounded-full opacity-30 blur-sm animate-pulse"></div>
          </div>
          <span className="relative z-10">On Solana Devnet</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 relative">
        <div className="xl:pl-16 pl-6 space-y-4 md:space-y-6 max-w-4xl">
          <div className="flex items-center space-x-2 ">
                   <Image
                     alt="CryptoConnect"
                     width={150}
                     height={150}
                     src="https://yt3.googleusercontent.com/wDC9y0YFW4zH9I-kXiVrnH3okS4L5AX2P22bBWDj0CTfxNcsFQEvcoV6H93PTjl4QDb1attvdrU=s160-c-k-c0x00ffffff-no-rj"
                     className="rounded-full"
                   />
                   <span className="text-7xl font-bold text-gray-800">CryptoConnect</span>
                 </div>
          
         
          <div className="text-xl sm:text-2xl md:text-3xl xl:text-5xl flex flex-wrap gap-2 items-center font-bold pt-1 text-black xl:text-slate-600">
            <div>Wallet</div>
            <span className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl text-sky-500">
              X
            </span>
            <div>Payment Gateway</div>
          </div>
          <div className="text-lg sm:text-xl xl:text-2xl text-black/80 xl:text-slate-500 max-w-3xl">
            Make Payment & get payments without leaving the app
          </div>
          <HomePageActionButtons />
          <div className="absolute bottom-8 left-0 right-0 flex justify-center">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                onClick={scrollToNextSection}
                className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-sky-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                <MotionDiv
                  animate={{ y: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowDown className="text-white w-6 h-6 group-hover:text-white z-10 transition-colors duration-300" />
                </MotionDiv>
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 animate-pulse"></div>
              </Button>
            </MotionDiv>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div ref={nextSectionRef}>
        <AppFeatures />
      </div>
      {/* Stats Section */}
      {/* <Stats /> */}

      <CTAsection />

      {/* Footer */}
      <footer className="bg-black py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
      
      {/* Logo Section */}
      <div className="md:col-span-2">
        <div className="flex items-center gap-3 mb-6">
          <Image
            alt="CryptoConnect"
            width={50}
            height={50}
            src="https://yt3.googleusercontent.com/wDC9y0YFW4zH9I-kXiVrnH3okS4L5AX2P22bBWDj0CTfxNcsFQEvcoV6H93PTjl4QDb1attvdrU=s160-c-k-c0x00ffffff-no-rj"
            className="rounded-full"
          />
          <span className="text-3xl font-bold text-white">CryptoConnect</span>
        </div>

        <p className="text-white mb-6 max-w-sm">
          The future of Web3 payments, simplified.
          <br />
          Make and receive crypto payments without ever leaving the app.
        </p>
      </div>

      {/* Resources Section */}
      <div>
        <h3 className="text-lg font-bold mb-6 text-white">Resources</h3>
        <ul className="space-y-4 text-gray-500">
          <li>
            <a href="#" target="_blank" className="hover:text-indigo-600 transition-colors">
              Documentation
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="hover:text-indigo-600 transition-colors">
              API Reference
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-indigo-600 transition-colors">
              Blog
            </a>
          </li>
        </ul>
      </div>

      {/* Company Section */}
      <div>
        <h3 className="text-lg font-bold mb-6 text-white">Company</h3>
        <ul className="space-y-4 text-gray-500">
          <li>
            <a href="#" className="hover:text-indigo-600 transition-colors">About Us</a>
          </li>
          <li>
            <a href="#" target="_blank" className="hover:text-indigo-600 transition-colors">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-indigo-600 transition-colors">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom Footer Bar */}
    <div className="mt-16 pt-8 border-t border-gray-100 text-center text-gray-500 sm:flex sm:items-center sm:justify-between">
      <span className="text-sm text-gray-500 sm:text-center">
        © 2025. All Rights Reserved.
      </span>
      
      <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
        <div className="flex flex-wrap gap-6 text-gray-400">
          <a href="#" className="hover:text-indigo-600 transition-colors" aria-label="Twitter">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-indigo-600 transition-colors" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="#" className="hover:text-indigo-600 transition-colors" aria-label="Website">
            <ExternalLink size={20} />
          </a>
          <a href="#" className="hover:text-indigo-600 transition-colors" aria-label="Discord">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M22 24c-.4-1.5-.7-2.8-1-4.2-.3-1.2-.6-2.5-1-3.7 1-.4 1.7-1 2.1-2-.6.3-1.2.5-1.9.6-.6-.6-1.3-1-2.1-1.3-.9-.3-1.8-.5-2.8-.5s-1.9.2-2.8.5c-.8.3-1.5.8-2.1 1.3-.6-.1-1.3-.3-1.9-.6.4 1 .9 1.6 2.1 2-.4 1.2-.7 2.5-1 3.7-.3 1.4-.6 2.7-1 4.2 1.7-1 3.2-2 4.9-2.9 1.7.9 3.2 1.9 4.9 2.9z" />
            </svg>
          </a>
          <a href="#" className="hover:text-indigo-600 transition-colors" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M4.98 3.5C4.98 5 3.94 6 2.48 6H2.45C1 6 0 5 0 3.5S1 1 2.45 1C3.91 1 4.98 2 4.98 3.5zM.5 8.98h4v15h-4v-15zm7.5 0h3.8v2.2h.05c.53-1 1.84-2.2 3.8-2.2 4.07 0 4.82 2.63 4.82 6v6.98h-4v-6.2c0-1.5-.03-3.44-2.1-3.44-2.1 0-2.42 1.63-2.42 3.32v6.3h-4v-15z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
}

export default Main;
