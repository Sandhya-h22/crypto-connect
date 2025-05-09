import type { NextAuthConfig } from "next-auth";
import google from "next-auth/providers/google";

// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [google],
  trustHost: true,
  callbacks: {
    // this function runs on each and every request according to the matcher in middleware file
    authorized: async ({ auth, request: { nextUrl } }) => {
      const isLoggedIn = !!auth?.user;
      const isOnUser = nextUrl.pathname.startsWith("/user");
      if (isOnUser) {
        if (isLoggedIn) {
          return true;
        }
        return false;
      }
      return true;
    },
  },
  theme: {
    logo: "/logo.svg",
  },
  pages: {
    signIn: "/auth/signin", // Custom sign-in page
  },
} satisfies NextAuthConfig;
