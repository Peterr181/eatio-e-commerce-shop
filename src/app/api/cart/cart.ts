import User from "@/models/userModel";
import { connectToDb } from "@/lib/connect";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { userId, cartItemData } = await request.json();

  // Connect to the database
  await connectToDb();

  try {
    // Find the user based on userId
    const user = await User.findOne({ userId });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    // Add the cart item to the user's cart
    user.cart.push(cartItemData);

    // Save the updated user document
    await user.save();

    return new NextResponse("Item added to cart", { status: 200 });
  } catch (error) {
    // Handle errors
    console.error("Error adding item to cart:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
