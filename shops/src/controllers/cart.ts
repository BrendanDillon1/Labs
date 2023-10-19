import Cart from "../models/CartItem";
import { reqRes } from "../utils/interfaces";
import { CartItemNotFoundError } from "../utils/errors";

// READ ALL
export const getCartItems: reqRes = async (req, res) => {
  try {
    const cartItems = await Cart.find({ userId: req.params.userId });
    res.status(200).send(cartItems);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

// CREATE

export const postCartItem: reqRes = async (req, res) => {
  try {
    const existingCartItem = await Cart.findOne({ userId: req.params.userId, "product._id": req.body.product._id });

    if (existingCartItem) {
      existingCartItem.quantity += req.body.quantity;
      await existingCartItem.save();
      return res.status(200).send(existingCartItem);
    }

    const cartItem = new Cart(req.body);
    await cartItem.save();
    res.status(201).send(cartItem);
  } catch (err) {
    res.status(400).send("Bad Request");
  }
};

// UPDATE

export const updateCartItem: reqRes = async (req, res) => {
  try {
    const cartItem = await Cart.findOne({ userId: req.params.userId, "product._id": req.params.productId });

    if (!cartItem) throw new CartItemNotFoundError();

    cartItem.quantity = req.body.quantity;

    await cartItem.save();
    res.status(200).send(cartItem);
  } catch (err) {
    let status = { code: 500, message: "Server Error" };
    if (err instanceof CartItemNotFoundError) {
      status = { code: 404, message: err.message };
    }
    res.status(status.code).send(status.message);
  }
};
//DELETE

export const deleteCartItem: reqRes = async (req, res) => {
  try {
    const result = await Cart.findOneAndDelete({ userId: req.params.userId, "product._id": req.params.productId });

    if (!result) throw new CartItemNotFoundError();

    res.status(204).send();
  } catch (err) {
    let status = { code: 500, message: "Server Error" };
    if (err instanceof CartItemNotFoundError) {
      status = { code: 404, message: "Not found" };
    }
    res.status(status.code).send(status.message);
  }
};
