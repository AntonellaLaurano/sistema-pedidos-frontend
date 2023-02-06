import NextAuth from "next-auth";
import type { NextApiRequest, NextApiResponse } from "next";

import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
			credentials: {
				identifier: { label: 'identifier', type: 'text' },
				password: { label: 'password', type: 'number' },
			},
      async authorize(credentials, req) {
        try {
          let response = await fetch(
            `${process.env.NEXT_PUBLIC_API}/v1/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                identifier: credentials?.identifier ?? "",
                password: credentials?.password ?? "",
              }),
            }
          );
          const responseData = await response.json();
					if (responseData?.status == 200) {
						return responseData.data;
					}

					return Promise.reject(new Error(responseData.message));
				} catch (error) {
					console.log(error);
					return Promise.resolve(error);
				}
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.token
      }
      return token
    },
    async session({ session, token, user }) {
      session.accessToken = token.accessToken
      return session
    }
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await NextAuth(req, res, authOptions);
};
