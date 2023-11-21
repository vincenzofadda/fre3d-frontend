import { acceptHMRUpdate, defineStore } from 'pinia'

interface User {
  id: string
  name: string
  email: string
  address: string
  role: string
}

export const useUserStore = defineStore('user', {
  state: () => {
    const user = ref<User>()
    const token = ref<string>()

    return {
      user,
      token,
    }
  },
  actions: {
    setUser(newUser: User) {
      this.user = newUser
    },
    setToken(newToken: string) {
      this.token = newToken
    },
    getToken() {
      return JSON.parse(this.token ?? '{}')
    },
    getUser() {
      return this.user
    },
  },
  persist: true,
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
