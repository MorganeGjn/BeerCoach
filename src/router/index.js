import Vue from 'vue'
import Router from 'vue-router'
import BeerList from '@/components/BeerList'
import ShowBeer from '@/components/ShowBeer'
import CreateBeer from '@/components/CreateBeer'
import EditBeer from '@/components/EditBeer'
import Actualites from '@/components/Actualite'
import Recherche from '@/components/Recherche'
import Profil from '@/components/Profil'
import Connexion from '@/components/Connexion'
import Inscription from '@/components/Inscription.vue'
import CreationBiere from '@/components/CreationBiere'
import ModifProfil from '@/components/ModificationProfil'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BeerList',
      component: BeerList
    },
    {
      path: '/inscription',
      name: 'Inscription',
      component: Inscription
    },
    {
      path: '/modifProfil',
      name: 'ModifProfil',
      component: ModifProfil
    },
    {
      path: '/show-Beer/:id',
      name: 'ShowBeer',
      component: ShowBeer
    },
    {
      path: '/add-Beer',
      name: 'CreateBeer',
      component: CreateBeer
    },
    {
      path: '/edit-Beer/:id',
      name: 'EditBeer',
      component: EditBeer
    },
    {
      path: '/actualites',
      name: 'Actualites',
      component: Actualites
    },
    {
      path: '/connexion',
      name: 'Connexion',
      component: Connexion
    },
    {
      path: '/creationBiere',
      name: 'CreationBiere',
      component: CreationBiere
    },
    {
      path: '/profil',
      name: 'Profil',
      component: Profil
    },
    {
      path: '/recherche',
      name: 'Recherche',
      component: Recherche
    }
  ]
})
