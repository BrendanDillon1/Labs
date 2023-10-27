export class ProductNotFoundError extends Error {
  constructor() {
    super("Could not find this product");
    this.name = "productNotFoundError";
  }
}
export class UserNotFoundError extends Error {
  constructor() {
    super("Could not find this user");
    this.name = "userNotFoundError";
  }
}

export class CartItemNotFoundError extends Error {
  constructor() {
    super("Could not find this cart item");
    this.name = "cartItemNotFoundError";
  }
}
