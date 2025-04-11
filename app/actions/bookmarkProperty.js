"use server";
import connectDB from "@/config/database";
import User from "@/models/User";
import { getSessionUser } from "@/utlis/getSessionUser";
import { revalidatePath } from "next/cache";

async function bookmarkProperty(propertyId) {
  await connectDB();
  const sessionUser = await getSessionUser();
  if (!sessionUser || !sessionUser.user.id) {
    throw new Error("User is ID is required");
  }

  const { userId } = sessionUser;
  const user = await User.findById(userId);

  const isBookmarked = user.bookmarks.includes(propertyId);

  let message;

  if (isBookmarked) {
    //  If already bookmarked, then remove
    user.bookmarks.pull(propertyId);
    message = "Bookmark Removed";
    isBookmarked = false;
  }else{
    // if not bookmarked, then add
    user.bookmarks.push(propertyId);
    message = "Bookmark Added";
    isBookmarked = true;
  }

  await user.save();
  revalidatePath('/properties/saved', 'page');
  return {
    message, isBookmarked
  }
}

export default bookmarkProperty;
