<script setup>
const loginData = ref({
  email: '',
  password: '',
})

async function signIn() {
//   const { data } = await axios.post(`${AUTH_API_URL}/token`, { ...token.value })
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
        class="mb-5 border border-gray-300 rounded-md bg-white p-2"
      >
      <input
        v-model="loginData.password"
        name="password"
        placeholder="Senha"
        type="password"
        required
        class="border border-gray-300 rounded-md bg-white p-2"
      >
      <router-link mb-5 mt-2 text-right text-sm text-black to="/auth/criar-conta">
        Esqueceu a sua senha? <span text-primary text-underline underline-offset-2> Recupere aqui!</span>
      </router-link>

      <button
        bg-primary mb-5 rounded-lg px-4 py-2 font-bold text-white
        @click="signIn()"
      >
        Entrar
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
