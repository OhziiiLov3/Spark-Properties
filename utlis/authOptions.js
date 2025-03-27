import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/config/database";
import User from "@/models/User";

export const authOptions = {
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          authorization: {
            params: {
              prompt: "consent",
              access_type: "offline",
              response_type: "code"
            }
          }
        })
      ],
  callbacks: {
    // invoked on successful sign in
    async signIn({ profile }) {
      // 1 connect to db
      await connectDB();
      // 2 check if user exists
      const userExists = await User.findOne({ email: profile.email });
      // 3 if not create user
      if (!userExists) {
        // slice/truncate username if too long
        const username = profile.name.slice(0, 20);

        await User.create({
          email: profile.email,
          username,
          image: profile.picture,
        });
      }
      return true;
      // 4 return true to allow sign in
    },
    //Session callback function that modifies the session object
    async session({ session }) {
      // 1 Get user from db
      const user = await User.findOne({ email: session.user.email });
      // 2 assign user id from the session
      session.user.id = user._id.toString();
      return session;
      // return the session
    },
  },
};
