class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }

  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }

    get totalPrice() {
      return this.product.price * this.quantity;
    }
  }

  class ShoppingCart {
    constructor() {
      this.items = [];
    }

    get totalItems() {
      return this.items.length;
    }

    addItem(item) {
      this.items.push(item);
    }

    removeItem(item) {
      this.items = this.items.filter(cartItem => cartItem !== item);
    }

    displayCart() {
      console.log("Shopping Cart:");
      for (const item of this.items) {
        console.log(`${item.product.name} (x${item.quantity}) - $${item.totalPrice.toFixed(2)}`);
      }
    }
  }

  // Testing the classes
  const product1 = new Product(1, "T-Shirt", 19.99);
  const product2 = new Product(2, "Jeans", 39.99);

  const cart = new ShoppingCart();

  cart.addItem(new ShoppingCartItem(product1, 2));
  cart.addItem(new ShoppingCartItem(product2, 1));

  cart.displayCart();

  cart.removeItem(new ShoppingCartItem(product1, 1)); // Remove only one T-Shirt

  cart.displayCart();