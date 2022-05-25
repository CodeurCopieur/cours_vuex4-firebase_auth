<script setup >
  import { ref } from 'vue'
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
  import { useRouter } from 'vue-router'

  const email = ref('');
  const password = ref('');
  const errMsg = ref(''); //ERROR MESSAGE
  const router = useRouter(); // obtenir une référence à notre routeur vue

    // function creer son compte
  const signIn = ()=> {
    // besoin .value pq ref()
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then( data => {
        console.log('Connecté avec succès !');
        router.push('/feed')
      })
      .catch( error => {
        console.log(error.code);
        switch (error.code) {
          case 'auth/invalid-email':
            errMsg.value="Email invalide";
            break;
          case 'auth/user-not-found':
            errMsg.value="Aucun compte avec cet e-mail n'a été trouvé";
            break;
          case 'auth/wrong-password':
            errMsg.value="Mot de passe incorrect";
            break;
        
          default:
            errMsg.value="l'email ou le mot de passe était incorrect";
            break;
        }
      });
  };
</script>
<template>
    <div class="bg-gray-200 flex content-center justify-center items-center h-full" id="signup">
      <div class="w-full max-w-lg">
          <form class="bg-white shadow-md rounded-2xl px-8 py-8 mb-4" >
            <h1 class="text-2xl font-bold text-gray-800 mb-6 text-center">Sign In</h1>

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
                <p v-if="errMsg"> {{errMsg}} </p>
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
              <div class="flex flex-col justify-center">
                <button @click.prevent="signIn" class="shadow bg-blue-400 hover:bg-blue-500 text-white focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mb-2" type="submit">
                  Submit
                </button>

                <button class="shadow bg-orange-400 hover:bg-orange-500 text-white focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                  Sign In With Google
                </button>
              </div>
              <div class="flex justify-center">
                
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