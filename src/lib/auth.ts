import NextAuth from "next-auth";

import Credentials from "next-auth/providers/credentials";

import bcrypt from "bcrypt";

import { prisma } from "@/lib/prisma";

export const {
  handlers,
  signIn,
  signOut,
  auth,
} = NextAuth({

  providers: [

    Credentials({

      credentials: {

        email: {},

        password: {},

      },

      async authorize(credentials) {

        if (
          !credentials?.email ||
          !credentials?.password
        ) {
          return null;
        }

        const user =
          await prisma.user.findUnique({

            where: {
              email: credentials.email as string,
            },

          });

        if (!user || !user.password) {
          return null;
        }

        // BLOCK UNVERIFIED USERS

        if (!user.isVerified) {

          throw new Error(
            "Please verify your email first."
          );

        }

        const passwordsMatch =
          await bcrypt.compare(
            credentials.password as string,
            user.password
          );

        if (!passwordsMatch) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
        };

      },

    }),

  ],

  session: {
    strategy: "jwt",
  },

  secret: process.env.AUTH_SECRET,

});