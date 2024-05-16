import NextAuth, { type DefaultSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";

declare module "next-auth" {
  interface Session {
    user: User & DefaultSession["user"];
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        user = await new Promise((resolve, reject) => {
          resolve({
            id: 1,
            name: "John Doe",
            email: "johndoe@acme.com",
          });
        });

        if (!user) {
          throw new Error("User not found");
        }

        return user;
      },
    }),
  ],
});
