<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Liste des bières
        <b-link href="#/add-Beer">(Editer une bière)</b-link>
      </h2>
      <b-table striped hover :items="Beers" :fields="fields">
        <template slot="actions" scope="row">
          <b-btn size="sm" @click.stop="details(row.item)">Details</b-btn>
        </template>
      </b-table>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors">
          {{error.message}}
        </li>
      </ul>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'BeerList',
  data () {
    return {
      fields: {
        nom: { label: 'Nom', sortable: true, 'class': 'text-center' },
        brasserie: { label: 'Brasserie', sortable: true, 'class': 'text-center' },
        alcool: { label: 'Alcool', sortable: true, 'class': 'text-center' },
        actions: { label: 'Action', 'class': 'text-center' }
      },
      Beers: [],
      errors: []
    }
  },
  beforeCreate () {
  	axios.get(`http://localhost:3000/isLogged`)
  		.then(response => {
  			if(response.data.logged==false){
  				this.$router.push({
  					name: 'Connexion'
  				})
  			}
  		})
  		.catch(e => {
  			this.errors.push(e)
  		})
  },
  created () {
    axios.get(`http://localhost:3000/Beer`)
      .then(response => {
        this.Beers = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {
    details (Beer) {
      this.$router.push({
        name: 'ShowBeer',
        params: { id: Beer._id }
      })
    }
  }
}
</script>
