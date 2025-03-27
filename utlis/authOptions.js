import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SERCET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // invoked on successful dign in
    async signIn({ profile }) {
      // 1 connect to db
      // 2 check if user exists
      // 3 if not create user
      // 4 return true to allow sign in
    },
    //Session callback function that modifies the session object
    async session({ session }) {
      // 1 Get user from db
      // 2 assign user id from the session
      // return the session
    },
  },
};
