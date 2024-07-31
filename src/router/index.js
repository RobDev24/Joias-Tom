import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { compile } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
      
    },
    {
     path: "/Eventos",
     name: 'Eventos',
    
     component: () => import('../views/Eventos.vue')
  }, 
  {
  path: "/Colecoes",
  name: "Colecoes",
 
  component: () => import('../views/Colecoes.vue')
},
{
  path: "/Store",
  name: "Store",
 
  component: () => import('../views/Store.vue')
},
{
  path: "/Sobre",
  name: "Sobre",
 
  component: () => import('../views/Sobre.vue')
},
{
  path: "/C",
  name: "ContOrca",

  component: () => import('../views/ContOrca.vue')
}
     
  ]
})

export default router
