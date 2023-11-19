<script setup>
const signUpData = ref({
  email: '',
  password: '',
})

async function signUp() {
//   const { data } = await axios.post(`${AUTH_API_URL}/token`, { ...token.value })
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
        class="mb-5 border border-gray-300 rounded-md bg-white p-2"
      >

      <input
        v-model="signUpData.email"
        name="email"
        type="email"
        placeholder="E-mail"
        required
        class="mb-5 border border-gray-300 rounded-md bg-white p-2"
      >

      <input
        v-model="signUpData.password"
        name="password"
        placeholder="Senha"
        type="password"
        required
        class="border border-gray-300 rounded-md bg-white p-2"
      >

      <button
        bg-primary my-5 rounded-lg px-4 py-2 font-bold text-white
        @click="signUp()"
      >
        Criar
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
