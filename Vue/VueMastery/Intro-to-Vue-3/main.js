const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
    };
  },
  methods: {
    pushToCart(id) {
      this.cart.push(id);
    },
    removeFromCart(id) {
      if (this.cart.length > 0) {
        const index = this.cart.lastIndexOf(id);
        if (index !== -1) {
          this.cart.splice(index, 1);
        }
      }
    },
  },
});
