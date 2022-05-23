<script setup>

</script>
<template>
  <header class="text-center bg-sky-600 text-white p-4">
    <div class="container mx-auto flex flex-wrap px-5 flex-col md:flex-row items-center">
      <router-link to='/' class="flex title-font font-bold items-center">
        <h1 class="ml-3 text-2xl">Vue Auth</h1>
      </router-link>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <router-link to='/feed' class="mr-5 font-medium hover:text-gray-900">Feed</router-link>
        <router-link to='/register' class="mr-5 font-medium hover:text-gray-900">Register</router-link>
        <router-link to='/sign-in' class="mr-5 font-medium hover:text-gray-900">Login</router-link>
      </nav>
    </div>
  </header>
</template>