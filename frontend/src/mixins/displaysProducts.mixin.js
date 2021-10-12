export default {
  methods: {
    calcProductPrice(product) {
      const exCents = parseInt(100 * product.exPrice);
      const gstCents = parseInt(100 * product.gstPrice);

      return (exCents + gstCents) / 100;
    }
  }
};