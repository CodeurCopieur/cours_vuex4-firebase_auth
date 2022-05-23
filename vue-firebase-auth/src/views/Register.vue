<script setup >
  import {ref} from 'vue'
</script>

<template>
  <!-- <h1>Register</h1> -->
    <div class="bg-gray-200 flex content-center justify-center items-center h-full" id="signup">
      <div class="w-full max-w-lg">
          <form class="bg-white shadow-md rounded-2xl px-8 py-8 mb-4">
            <h1 class="text-2xl font-bold text-gray-800 mb-6 text-center">Register</h1>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
                Email
              </label>
              <input 
                    
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
                      name="password"
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                      type="password" 
                      placeholder="******************"
                      required>
              </div>
            </div>

            <div class="w-full">
              <div class="flex justify-center">
                <button class="shadow bg-blue-400 hover:bg-blue-500 text-white focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mb-2" type="submit">
                  Submit
                </button>
              </div>
            </div>  
            <div class="w-full">
              <div class="flex justify-center">
                <button class="shadow bg-orange-400 hover:bg-orange-500 text-white focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                  Sign In With Google
                </button>
              </div>
            </div>  
         </form>
      </div>
    </div>
</template>

<style>
  #signup {
    height: 100vh;
  }
</style>