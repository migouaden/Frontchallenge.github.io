import { createRouter, createWebHistory } from 'vue-router'
import ProductVue from '../components/ProductVue.vue'
import CreateProduct from '../components/CreateProduct.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ProductList',
      component: ProductVue
    },
    {
      path: '/product/create',
      name: 'ProductCreate',
      component: CreateProduct
    },

  ]
})

export default router
