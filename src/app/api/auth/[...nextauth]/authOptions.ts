import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import UserLogIn from '@/libs/userLogIn'

export const authOptions: AuthOptions = {
      providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        try {
          const user = await UserLogIn(credentials.email, credentials.password);
          if (user) {
            
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.log("Error during login:", error);
          return null;
        }
      }
    })
  ],
  session: {
    strategy: "jwt",
  },

  callbacks: {

    async jwt({ token, user }) {
      if (user) {
        token.token = (user as any).token; 
      }
      return token;
    },
    
    async session({ session, token }) {
      if (session.user) {
        (session as any).user.token = token.token; 
      }
      return session;
    }
  }
}