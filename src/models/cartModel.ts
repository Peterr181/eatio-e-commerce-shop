import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    cartItemId: {
      type: String,
      unique: true,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  const cartItem = this;
  if (!cartItem.cartItemId) {
    cartItem.cartItemId = `${cartItem.userId}_${Date.now()}`;
  }
  next();
});

export default mongoose.models.User || mongoose.model("User", userSchema);
