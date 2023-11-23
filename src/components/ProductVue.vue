<template>
  <h1>This is Listing Product Page </h1>
  <div class="card">
    <div class="card-header">
      <h4>Products
        <RouterLink to="/product/create" class="btn btn-primary float-end">
          Add Product
        </RouterLink>
      </h4>
    </div>
    <div class="card-body">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>image</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" v-bind:key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.description }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.image }}</td>
            <td>{{ product.category.name }}</td>

          </tr>
        </tbody>

      </table>
    </div>
  </div>
</template>


<script>
export default {
  name: "ProductList",
  data() {
    return {
      products: []
    }
  },
  methods: {
    async getProducts() {
      const res = await fetch("http://127.0.0.1:8000/api/products");
      const finalRes = await res.json();
      this.products = finalRes;
      console.log(this.products);
    }
  },
  mounted() {
    this.getProducts()
  }
}
</script>