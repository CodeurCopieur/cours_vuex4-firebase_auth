import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: () => import('../views/Home.vue')},
    {path: '/register', component: () => import('../views/Register.vue')},
    {path: '/sign-in', component: () => import('../views/SignIn.vue')},
    {
      path: '/feed', 
      component: () => import('../views/Feed.vue'),
      meta: {
        requiresAuth: true,
      }
    },
  ]  
});

// nous avons donc une authentification de base,  protéger /feed ?

const getCurrentUser = ()=> {
  return new Promise( (resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

// utilise vue-router navigation guards qui s'exécute avant chaque itinéraire

router.beforeEach(async(to, from, next) => {
  if(to.matched.some((record) => record.meta.requiresAuth)) {
    if(await getCurrentUser()) {
      next();
    } else {
      next("/");
      alert("vous n'y avez pas accès !");
    }
  } else {
    next();
  }
});

export default router;