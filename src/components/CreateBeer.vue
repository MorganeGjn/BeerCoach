<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Ajouter une bières
        <b-link href="#/">(Liste des bières)</b-link>
      </h2>
      <b-form @submit="onSubmit">
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Nom">
          <b-form-input id="nom" :state="state" v-model.trim="Beer.nom"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Brasserie">
          <b-form-input id="brasserie" :state="state" v-model.trim="Beer.brasserie"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Description">
            <b-form-textarea id="description"
                       v-model="Beer.description"
                       placeholder="Mettre quelque chose"
                       :rows="2"
                       :max-rows="6">{{Beer.description}}</b-form-textarea>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Alcool">
          <b-form-input id="alcool" :state="state" v-model.trim="Beer.alcool"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Sauvegarder</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'CreateBeer',
  data () {
    return {
      Beer: {}
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
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      axios.post(`http://localhost:3000/Beer`, this.Beer)
        .then(response => {
          this.$router.push({
            name: 'ShowBeer',
            params: { id: response.data._id }
          })
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>
