"use server";
import connectDB from "@/config/database";
import Message from "@/models/Message";
import { getSessionUser } from "@/utlis/getSessionUser";



async function getUnreadMessageCount(){
     await connectDB();
      const sessionUser = await getSessionUser();
      if (!sessionUser || !sessionUser.user.id) {
        throw new Error("User is ID is required");
      }
    
      const { userId } = sessionUser;

      const count = await Message.countDocuments({
        recipient: userId,
        read: false,
      })


      return {count}
     };

export default getUnreadMessageCount;