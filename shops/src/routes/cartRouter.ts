import express from "express";
import { postCartItem, getCartItems, updateCartItem, deleteCartItem } from "../controllers/cart";

const routes = express.Router({ mergeParams: true });

routes.get("/:userId/cart", getCartItems);
routes.post("/:userId/cart", postCartItem);
routes.patch("/:userId/cart/:productId", updateCartItem);
routes.delete("/:userId/cart/:productId", deleteCartItem);

export default routes;
