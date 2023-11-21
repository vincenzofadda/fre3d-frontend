<script setup>
import axios from 'axios'
import { API_URL } from '../../config'

const router = useRouter()
const loading = ref(false)
const showPassword = ref(false)

const signUpData = ref({
  name: '',
  email: '',
  password: '',
  address: '',
})

function toggleShowPassword() {
  showPassword.value = !showPassword.value
}

async function signUp() {
  loading.value = true
  axios.post(`${API_URL}/user`, signUpData.value)
    .then(() => {
      loading.value = false
      notify({
        type: 'success',
        title: 'Tudo certo!',
        text: 'Conta criada com sucesso!',
        group: 'notifications',
      }, 8000)
      router.push('/auth/login')
      // products.value = response.data
    })
    .catch((err) => {
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
  <div h-100vh w-full flex items-center justify-start px-20>
    <div class="w-8/10 flex flex-col rounded-xl bg-white px-15 py-10 lg:w-1/2">
      <span class="text-gradient mb-5 text-3xl font-bold tracking-wide">Criar Conta</span>
      <input
        v-model="signUpData.name"
        name="name"
        placeholder="Nome"
        required
        class="mb-5 border border-gray-300 rounded-md bg-white p-2 text-black"
      >

      <input
        v-model="signUpData.email"
        name="email"
        type="email"
        placeholder="E-mail"
        required
        class="mb-5 border border-gray-300 rounded-md bg-white p-2 text-black"
      >

      <div flex items-center justify-between border border-gray-300 rounded-md bg-white text-black>
        <input
          v-model="signUpData.password"
          name="password"
          placeholder="Senha"
          :type="showPassword ? 'text' : 'password'"
          required grow p-2 outline-none
        >
        <button mr-4 hover:text-primary @click="toggleShowPassword">
          <div :class="showPassword ? 'i-carbon-view-off' : 'i-carbon-view'" />
        </button>
      </div>

      <button
        my-5 flex justify-center rounded-lg bg-primary px-4 py-2 font-bold text-white
        :disabled="loading"
        @click="signUp()"
      >
        <LoadingSpinner
          v-if="loading"
          :size="['w-5', 'h-5']"
          border="border-4"
        />
        <span v-else>Criar</span>
      </button>

      <router-link text-center text-black to="/auth/login">
        Já possui uma conta? <span text-primary text-underline underline-offset-2> Faça o login!</span>
      </router-link>
    </div>
    <div class="flex grow justify-center pa-5">
      <RotatingCard />
    </div>
  </div>
</template>
