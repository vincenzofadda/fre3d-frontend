<script setup>
import axios from 'axios'
import { API_URL } from '../../config'
import { useUserStore } from '../../stores/user'

const router = useRouter()
const userStore = useUserStore()

const loading = ref(false)
const showPassword = ref(false)

const loginData = ref({
  email: '',
  password: '',
})

function toggleShowPassword() {
  showPassword.value = !showPassword.value
}

async function signIn() {
  loading.value = true
  axios.post(`${API_URL}/login`, loginData.value)
    .then((response) => {
      loading.value = false
      userStore.setUser(response.data.user)
      userStore.setToken(response.data.accessToken)

      router.push('/produtos')
    })
    .catch((err) => {
      console.log(err)
      loading.value = false
      const defaultMessage = 'Algo de errado aconteceu.'
      let errorMessage

      if (err.response && err.response.data) {
        const { message } = err.response.data

        if (message)
          errorMessage = Array.isArray(message) ? message[0] : message
      }

      const text = errorMessage || defaultMessage
      notify({
        type: 'error',
        title: 'Oops!',
        text,
        group: 'notifications',
      }, 8000)
    })
}
</script>

<template>
  <div relative h-100vh w-full flex items-center justify-start px-20>
    <router-link
      absolute left-5 top-5 h-10 w-10 rounded-full pa-5 text-2xl text-white
      to="/"
    >
      <div i-carbon-arrow-left />
    </router-link>

    <div class="w-8/10 flex flex-col rounded-xl bg-white px-15 py-10 lg:w-1/2">
      <span class="text-gradient mb-5 text-3xl font-bold tracking-wide">Entrar</span>
      <input
        v-model="loginData.email"
        name="email"
        type="email"
        placeholder="E-mail"
        required
        class="mb-5 border border-gray-300 rounded-md bg-white p-2 text-black"
      >

      <div flex items-center justify-between border border-gray-300 rounded-md bg-white text-black>
        <input
          v-model="loginData.password"
          name="password"
          placeholder="Senha"
          :type="showPassword ? 'text' : 'password'"
          required grow p-2 outline-none
        >
        <button mr-4 hover:text-primary @click="toggleShowPassword">
          <div :class="showPassword ? 'i-carbon-view-off' : 'i-carbon-view'" />
        </button>
      </div>

      <router-link mb-5 mt-2 text-right text-sm text-black to="/auth/criar-conta">
        Esqueceu a sua senha? <span text-primary text-underline underline-offset-2> Recupere aqui!</span>
      </router-link>

      <button
        mb-5 flex items-center justify-center rounded-lg bg-primary px-4 py-2 font-bold text-white
        :disabled="loading"
        @click="signIn()"
      >
        <LoadingSpinner
          v-if="loading"
          :size="['w-5', 'h-5']"
          border="border-4"
        />
        <span v-else>Entrar</span>
      </button>

      <router-link text-center text-black to="/auth/criar-conta">
        Não possui uma conta? <span text-primary text-underline underline-offset-2> Crie uma aqui!</span>
      </router-link>
    </div>
    <div class="flex grow justify-center pa-5">
      <RotatingCard />
    </div>
  </div>
</template>
