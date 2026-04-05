import {
  signIn,
  signInWithGoogle,
  signInWithGithub,
} from "@/utils/db/servicefirebase";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

/**
 * Handler reusable untuk semua OAuth provider (Google, GitHub, dll)
 * Menghindari duplikasi logic signInWithGoogle dan signInWithGithub
 */
async function handleOAuthSignIn(
  provider: string,
  user: any,
  callbackFn: Function,
) {
  const data = {
    fullname: user.name || `${provider} User`, // fallback jika name null
    email: user.email,
    image: user.image,
    type: provider,
  };

  // Mengubah callback menjadi promise agar bisa menggunakan async/await
  return new Promise((resolve) => {
    callbackFn(data, (result: any) => {
      resolve(result);
    });
  });
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    /**
     * Login menggunakan email & password (credentials)
     */
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user: any = await signIn(credentials.email);

        if (user) {
          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            user.password,
          );

          if (isPasswordValid) {
            return {
              id: user.id,
              email: user.email,
              fullname: user.fullname,
              role: user.role,
              image: user.image || null,
            };
          }
        }

        return null;
      },
    }),

    /**
     * OAuth Google
     */
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),

    /**
     * OAuth GitHub
     */
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
  ],

  callbacks: {
    /**
     * Callback JWT
     * Menyimpan data user ke dalam token
     */
    async jwt({ token, account, user }: any) {
      /**
       * Credentials login
       */
      if (account?.provider === "credentials" && user) {
        token.email = user.email;
        token.fullname = user.fullname;
        token.role = user.role;
        token.image = user.image;
      }

      /**
       * OAuth handler untuk Google dan GitHub (reusable)
       */
      if (["google", "github"].includes(account?.provider)) {
        const serviceMap: any = {
          google: signInWithGoogle,
          github: signInWithGithub,
        };

        const result: any = await handleOAuthSignIn(
          account.provider,
          user,
          serviceMap[account.provider],
        );

        if (result?.status) {
          token.fullname = result.data.fullname;
          token.email = result.data.email;
          token.image = result.data.image;
          token.type = result.data.type;
          token.role = result.data.role;
        }
      }

      return token;
    },

    /**
     * Callback session
     * Mengirim data dari token ke session (frontend)
     */
    async session({ session, token }: any) {
      if (token.email) session.user.email = token.email;
      if (token.fullname) session.user.fullname = token.fullname;
      if (token.image) session.user.image = token.image;
      if (token.role) session.user.role = token.role;
      if (token.type) session.user.type = token.type;

      return session;
    },
  },

  pages: {
    signIn: "/auth/login",
  },
};

export default NextAuth(authOptions);
