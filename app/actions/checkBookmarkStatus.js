"use server";
import connectDB from "@/config/database";
import User from "@/models/User";
import { getSessionUser } from "@/utlis/getSessionUser";


async function checkBookmarkStatus(propertyId){
     await connectDB();
      const sessionUser = await getSessionUser();
      if (!sessionUser || !sessionUser.user.id) {
        throw new Error("User is ID is required");
      }
    
      const { userId } = sessionUser;
      const user = await User.findById(userId);

      let isBookmarked = user.bookmarks.includes(propertyId);

      return {isBookmarked};

};

export default checkBookmarkStatus;