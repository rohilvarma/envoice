import dbManager from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authConfig: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      // Prevents sign-in if no email is provided.
      if (!user.email) {
        return false;
      }

      const db = dbManager.getDb;

      const existingUser = await db
        .select()
        .from(users)
        .where(eq(users.email, user.email))
        .then((res) => res[0]);

      // Adds a new user to the database.
      if (!existingUser) {
        const newUser = await db.insert(users).values({
          name: user.name || "No Name",
          email: user.email,
          avatarUrl: user.image,
          provider: account?.provider || "Unknown",
          providerId: account?.providerAccountId || "",
        }).returning();
        
        user.id = newUser[0].id
      }
      else {
        user.id = existingUser.id
      }
      return true;
    },
    async session({ session, token }) {
      if (session.user && token.id) {
        session.user.id = token.id as string;
      }
      return session;
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
      }

      if (account) {
        token.accessToken = account.access_token;
        token.provider = account.provider;
      }
      return token;
    },
  },
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
};

export const { handlers, auth } = NextAuth(authConfig);
