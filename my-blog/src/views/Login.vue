<template>
  <div class="bg-gray-200 flex content-center justify-center items-center h-full" id="login">
    <div class="w-full max-w-lg">
      <form class="bg-white shadow-md rounded-2xl px-8 py-8 mb-4" @submit.prevent="handleSubmit">

        <h1 class="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h1>


          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
                Email
              </label>
              <input 
                    v-model="email"
                    name="email"
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    type="email" 
                    placeholder="myblog@vue.com"
                    required>
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="password">
                Password
              </label>
              <input 
                    v-model="password"
                    name="password"
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    type="password" 
                    placeholder="******************"
                    required>
            </div>
          </div>

          <div class="w-full">
            <div class="flex justify-center">
              <button class="shadow bg-blue-500 hover:bg-blue-700 text-white focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                Login
              </button>
            </div>
          </div>

          <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-6" role="alert">
            <strong class="font-bold">{{ error }}</strong>
          </div>

      </form>
    </div>
  </div>
</template>

<script>

import {ref} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export default {
  name:'Login',
  setup() {
    const email = ref('')
    const password = ref('')

    const store = useStore()
    const router = useRouter()
    const error = ref(null)

    const handleSubmit = async () => {
      console.log(email.value, password.value)
      try {
        await store.dispatch('login', {
          email: email.value, 
          password: password.value 
        })
        router.push('/')

      } catch (err) {
        error.value = err.message
      }
    }

    return { handleSubmit, email,  password, error}
  }
  }
</script>

<style>
  #login {
    height: 100vh;
  }
</style>