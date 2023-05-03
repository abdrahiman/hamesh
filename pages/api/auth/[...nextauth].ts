import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import TwitterProvider from "next-auth/providers/twitter";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
let User = require("../../../models/user");
// Transcribble

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID as string,
      clientSecret: process.env.TWITTER_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    // CredentialsProvider({
    //   name: "credentials",
    //   credentials: {
    //     email: { label: "email", type: "text" },
    //     password: { label: "password", type: "password" },
    //   },
    //   async authorize(credentials) {
    //     if (!credentials?.email || !credentials?.password) {
    //       throw new Error("Invalid credentials");
    //     }

    //     const user = await User.findUnique({
    //       email: credentials.email,
    //     });

    //     if (!user || !user?.hashedPassword) {
    //       throw new Error("Invalid credentials");
    //     }

    //     const isCorrectPassword = await bcrypt.compare(
    //       credentials.password,
    //       user.hashedPassword
    //     );
    //     if (!isCorrectPassword) {
    //       throw new Error("Invalid credentials");
    //     }
    //     return user;
    //   },
    // }),
  ],
  pages: {
    signIn: "/auth",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
