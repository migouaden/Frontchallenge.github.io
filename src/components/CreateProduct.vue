<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Add Product</h4>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="">Name</label>
                    <input type="text" v-model="model.product.name" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Description</label>
                    <input type="text" v-model="model.product.description" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Price</label>
                    <input type="text" v-model="model.product.price" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Image</label>
                    <input type="file" class="form-control" @change="uploadimage" />
                </div>
                <div class="mb-3">
                    <label for="productCategory">Category</label>
                    <select v-model="model.product.category_id" class="form-control" id="productCategory">
                        <option v-for="category in this.categories" :key="category.id" :value="category.id">
                            {{ category.name }}
                        </option>
                    </select>
                </div>

            </div>
            <div class="mb-3">
                <button type="button" @click="saveProduct" class="btn btn-primary">Save</button>
            </div>
        </div>

    </div>
</template>
<script>

import axios from 'axios'
export default {
    name: 'ProductCreate',
    data() {
        return {
            model: {
                product: {
                    name: '',
                    description: '',
                    price: '',
                    image: null,
                    category_id: null,
                }
            }
        }

    },
    methods: {
        fetchCategories() {
            axios.get('http://127.0.0.1:8000/api/categories')
                .then(response => {
                    this.categories = response.data;
                    console.log(this.categories)
                })
        },
        uploadimage(event) {
            const file = event.target.files[0];
            this.model.product.image = file;
        },
    },
    saveProduct() {
        axios.post('http://127.0.0.1:8000/api/products', this.model.product)
            .then(response => {
                console.log('Product saved successfully:', response.data);
            });
    },

    mounted() {
        this.fetchCategories();
    }
}

</script>