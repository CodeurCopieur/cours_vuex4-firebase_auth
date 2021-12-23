<template>
  <header class="text-center bg-sky-600 text-white p-4">
    <div class="container mx-auto flex flex-wrap px-5 flex-col md:flex-row items-center">
      <router-link to='/' class="flex title-font font-bold items-center">
        <h1 class="ml-3 text-2xl">Vue Auth</h1>
      </router-link>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <router-link to='/' class="mr-5 font-medium hover:text-gray-900">Home</router-link>
        
        <div v-if="user">
          <!-- logged in -->
          <span class="mr-5">loggin in as {{user.email}}</span>
          <button class="mr-5" @click="handleClick">Logout</button>
        </div>
        
        
        <div v-else>
          <!-- logged out -->
          <router-link to='/login' class="mr-5 font-medium  hover:text-gray-900">Login</router-link>
          <router-link to='/signup' class="mr-5 font-medium  hover:text-gray-900">Signup</router-link>
        </div>
        
      </nav>
    </div>
  </header>
</template>

<script>

import {useStore} from 'vuex'
import {computed} from 'vue';

export default {
  name: 'Header',
  setup() {
    const store = useStore()

    const handleClick = () => {
      store.dispatch('logout')
    }

    return {handleClick, user: computed(()=> store.state.user)}
  }
}
</script>