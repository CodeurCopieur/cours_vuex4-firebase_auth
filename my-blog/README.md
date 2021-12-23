## Setup Tailwind in a Vue 3

> Vuex est une solution de gestion d'état pour Vue.js, qui permet d'accéder et de mettre à jour facilement l'état global partagé dans une application Vue. Apprendre à utiliser Vuex version 4 avec Firebase auth, pour fournir une authentification globale et un état utilisateur à un site Web Vue 3 (à l'aide de l'API de composition).

- npm init vite
- project name : ...
- select a framework : ...
- cd folder
- yarn install
- yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest
- npx tailwindcss init -p
- tailwind.config.js > content : './index.html', './src/**/*{vue,js,ts,jsx,tsx}'
- touch src/index.css : <br>
  @tailwind base; <br>@tailwind components; <br>@tailwind utilities;
- main.js : import "./index.css"
- npm i vue-router@4
- npm i vue@next -D
- yarn run dev
