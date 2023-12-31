import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema({
  userId: {
    _id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    ObjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    product: {
      Product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    },
    quantity: {
      Number: {
        type: Number,
        required: true,
        default: 1,
      },
    },
  },
});

const Cart = mongoose.model("Cart", CartItemSchema);
export default Cart;
