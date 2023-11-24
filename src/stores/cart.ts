import { acceptHMRUpdate, defineStore } from 'pinia'

export interface Product {
  id: string
  name: string
  picture: string
  basePrice: string
  modelUrl: string
  createdAt: string
  description: string
  quantity: number
  categories: [{
    id: string
    name: string
  }]
}

export const useCartStore = defineStore('cart', {
  state: () => {
    const products = ref<Product[]>([])

    return {
      products,
    }
  },
  actions: {
    addProduct(product: Product) {
      const existingProduct = this.products.find(p => p.id === product.id)

      if (existingProduct)
        existingProduct.quantity++
      else
        this.products.push({ ...product, quantity: 1 })

      this.persistState()
    },

    removeProduct(productId: string) {
      const index = this.products.findIndex(p => p.id === productId)

      if (index !== -1) {
        if (this.products[index].quantity > 1)
          this.products[index].quantity--
        else
          this.products.splice(index, 1)

        this.persistState()
        this.getAll()
      }
    },

    getAll() {
      const storedProducts = localStorage.getItem('cart')

      if (storedProducts)
        this.products = JSON.parse(storedProducts)

      return this.products
    },

    clearAll() {
      this.products = []
      this.persistState()
    },

    persistState() {
      // Update localStorage with the current cart data
      localStorage.setItem('cart', JSON.stringify(this.products))
    },
  },
})

// Enable Hot Module Replacement (HMR) for the store
if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))
