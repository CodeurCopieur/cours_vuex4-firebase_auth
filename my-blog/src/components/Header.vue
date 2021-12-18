<template>
  <header class="text-center bg-sky-600 text-white p-4">
    <div class="container mx-auto flex flex-wrap px-5 flex-col md:flex-row items-center">
      <router-link to='/' class="flex title-font font-medium items-center">
        <h1 class="ml-3 text-xl">Vue Auth</h1>
      </router-link>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <!-- logged in -->
        <div>
          <span>loggin in as...</span>
          <button>Logout</button>
        </div>
        <!-- logged out -->
        <div>
          <router-link to='/login' class="mr-5 hover:text-gray-900">Login</router-link>
          <router-link to='/signup' class="mr-5 hover:text-gray-900">Signup</router-link>
        </div>
        
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>