<script setup>
  import { onMounted, ref } from 'vue';
  import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
  import { useRouter } from 'vue-router'

  const isLoggedIn = ref(false);
  const router = useRouter(); // obtenir une référence à notre routeur vue

  let auth;
  onMounted( () => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if(user) {
        isLoggedIn.value = true;     
      } else {
        isLoggedIn.value = false;
      }
    })
  });

  // tout ce que nous avons à faire est d'appeler signout(auth) depuis firebase/auth

  const handleSignOut = () => {
    signOut(auth).then(() => {
      router.push("/")
    })
  };
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
        <button class="mr-5" @click="handleSignOut" v-if="isLoggedIn">Logout</button>
      </nav>
    </div>
  </header>
</template>