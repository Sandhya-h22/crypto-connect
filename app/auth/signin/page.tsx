"use client";

import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";

export default function SignInPage() {
  const [providers, setProviders] = useState<any>(null);

  useEffect(() => {
    // Fetch providers from the NextAuth API
    const fetchProviders = async () => {
      const res = await fetch("/api/auth/providers");
      const data = await res.json();
      setProviders(data);
    };

    fetchProviders();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="flex items-center space-x-3 justify-center mb-8">
        {/* Custom Logo */}
        <div className="bg-white rounded-full ">
          <img
            src="/logo.svg"
            alt="Custom Logo"
            className="w-16 h-16 rounded-full p-1"
          />
        </div>
      </div>

      {/* Custom Name */}
      <h1 className="text-4xl font-bold mb-6">CryptoConnect</h1>

      {/* Sign-In Buttons */}
      {providers &&
        Object.values(providers).map((provider: any) => (
          <div key={provider.name}>
            <button
              onClick={() =>
                signIn(provider.id, {
                  callbackUrl: "/user/wallet/send", // Redirect here after sign-in
                })
              }
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
    </div>
  );
}
