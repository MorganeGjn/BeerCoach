<template>
  <html>
  	<head>
  	<meta charset="utf-8">
  	<meta http-equiv="X-UA-Compatible" content="IE=edge">
  	<meta name="viewport" content="width=device-width, initial-scale=1">
  	<meta name="description" content="BeerCoach website developped for web project at ENIB." />
  	<meta name="keywords" content="beer, beers, coach, enib, html5, css3, mobile first, responsive" />
  	<meta name="author" content="M. Goujon, P.Perraud, O.CLoarec" />

    	<!-- Facebook and Twitter integration -->
  	<meta property="og:title" content=""/>
  	<meta property="og:image" content=""/>
  	<meta property="og:url" content=""/>
  	<meta property="og:site_name" content=""/>
  	<meta property="og:description" content=""/>
  	<meta name="twitter:title" content="" />
  	<meta name="twitter:image" content="" />
  	<meta name="twitter:url" content="" />
  	<meta name="twitter:card" content="" />

  	<link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet">
  	</head>
  	<body>

  	<!--<div class="gtco-loader"></div>
-->
  	<div id="page">


  	<!-- <div class="page-inner"> -->
  	<nav class="gtco-nav" role="navigation">
  		<div class="gtco-container">

  			<div class="row">
  				<div class="col-sm-4 col-xs-12">
  					<div id="gtco-logo"><a href="/#/actualites">BeerCoach <em>.</em></a></div>
  				</div>
  				<div class="col-xs-8 text-right menu-1">
  					<ul>
  						<li><a href="/#/actualites">Actualités</a></li>
  						<li><a href="/#/recherche">Recherche</a></li>
  						<li><a href="/#/profil">Mon profil</a></li>
  					</ul>
  				</div>
  			</div>

  		</div>
  	</nav>

  	<header id="gtco-header" class="gtco-cover gtco-cover-md" role="banner" style="background-image: url('https://imageshack.com/a/img923/1808/z4qwdQ.jpg')">
  		<div class="overlay"></div>
  		<div class="gtco-container">
  			<div class="row">
  				<div class="col-md-12 col-md-offset-0 text-left">
  					<div class="row row-mt-15em">
  						<div class="col-md-10 col-md-push-1 animate-box" data-animate-effect="fadeInRight">
  							<div class="form-wrap">
  								<div class="tab">

  									<div class="tab-content">
  										<div class="tab-content-inner active" data-content="signup">
  											<form action="#">
  												<div class="row form-group">
  													<div class="col-md-4">
  														<img src="../images/biere_random.jpg" style="width: 200px;">
  													</div>
  													<div class="col-md-8">
  													<div class="row">
                              <h3>{{Beer.nom}}</h3>
                              <div style="margin-left: 200px;">Nombre de ♥: {{Beer.favorite}}</div>
                              <b-btn  @click.stop="like()" style="margin-left: 20px; padding: 0px; border:0px; height: 35px; width: 40px; background-color: transparent;">
        												<img v-if="Beer.like == true" src="../images/coeur_plein.png" style="width:50px;">
        												<img v-else src="../images/coeur_vide.png" style="width:50px;">
        											</b-btn>
                            </div>
  														<h4> {{Beer.brasserie}}</h4>
  														<p style="text-align: justify;">{{Beer.description}}</p>
                              <div> Degré: {{Beer.alcool}}<div>

  														<div class="row form-group">
  															<div class="col-md-4 col-md-push-4">
  																<a class="btn btn-primary btn-block"  @click.stop="editBeer(Beer._id)" style="color: #fff">Editer</a>
  															</div>
  															<div class="col-md-4 col-md-push-4">
  																<a class="btn btn-danger btn-block" @click.stop="deleteBeer(Beer._id)" style="color: #fff">Supprimer</a>
  															</div>
  														</div>
  													</div>
  												</div>

  											</form>
  										</div>
  									</div>
  								</div>
  							</div>
  						</div>
  					</div>


  				</div>
  			</div>
  		</div>
  	</header>

  	<div class="gtco-section">
  		<div class="gtco-container">
  			<div class="row">
            <b-table hover :items="Comments" :fields="fields" style="background-color: transparent; height: 35px;">
          </b-table>
  			</div>



  			<b-form  @submit="onSubmit">
  				<h3>Ajouter un commentaire sur cette bière</h3>
          <div class="row">
  				<div class="col-md-3">
  					<label for="fullname">Titre</label>
  					<input type="text" class="form-control" v-model="Comment.titre">
  				</div>
  				<div class="col-md-9">
  					<label for="Mail">Message</label>
  					<input type="text" class="form-control" v-model="Comment.message">
  				</div>
  			</div>
        <br/>
  				<div class="col-md-4 col-md-push-8">
  					<b-btn class="btn btn-primary btn-block" type="submit" style="color: #fff">Ajouter ce commentaire !</b-btn>
  				</div>
        </b-form>
  		</div>
  	</div>
  	<footer id="gtco-footer" role="contentinfo">
  		<div class="gtco-container">
  			<div class="row row-p	b-md">

  				<div class="col-md-2">
  					<div class="gtco-widget">
  						<img src="../images/logo.png" style="width: 200px;">
  					</div>
  				</div>

  				<div class="col-md-5 col-md-push-1">
  					<div class="gtco-widget">
  						<h3>A propos</h3>
  						<p>Site développé dans le cadre du module CAI à l'ENIB.</p>
  					</div>
  				</div>
  				<div class="col-md-4 col-md-push-1">
  					<div class="gtco-widget">
  						<h3>L'équipe de développement</h3>
  						<ul class="gtco-footer-links">
  							<p>O. Cloarec </br>
  							M. Goujon</br>
  							P. Perraud</p>
  						</ul>
  					</div>
  				</div>
  			</div>

  		</div>
  	</footer>
  	<!-- </div> -->

  	</div>

  	<div class="gototop js-top">
  		<a href="#" class="js-gotop"><i class="icon-arrow-up"></i></a>
  	</div>
  	</body>
  </html>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ShowBeer',
  data () {
    return {
      fields: {
        titre: { label: 'Titre', sortable: true, 'class': 'text-center' },
        message: { label: 'Message', sortable: true, 'class': 'text-center' },
        //beer: { label: 'Bière', 'class': 'text-center' }
        Username: {label: 'Utilisateur', sortable: true, 'class': 'text-center'}
      },
      Beer: [],
      Comments: [],
      Comment: {},
      User: []
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
        else{
          axios.get(`http://localhost:3000/User/email/`+ response.data.user)
          .then(res=>{
            this.User = res.data
            axios.get(`http://localhost:3000/Beer/` + this.$route.params.id)
              .then(response => {
                this.Beer = response.data
                var like = false
                for(var i=0; i<this.User[0].favoriteBeer.length; i++){
                  if(this.Beer._id == this.User[0].favoriteBeer[i]){
                    this.Beer.like = true
                    like = true
                  }
                  else if(like == false){
                    this.Beer.like = false
                  }
                }
                axios.get(`http://localhost:3000/Comment/` + this.Beer.nom)
                  .then(response => {
                    this.Comments = response.data
                  })
                  .catch(e => {
                    this.errors.push(e)
                  })
              })
              .catch(e => {
                this.errors.push(e)
              })
          })
          .catch(e => {
            this.errors.push(e)
          })
        }
  		})
  		.catch(e => {
  			this.errors.push(e)
  		})
  },
  methods: {
    editBeer (Beerid) {
      this.$router.push({
        name: 'EditBeer',
        params: { id: Beerid }
      })
    },
    deleteBeer (Beerid) {
      axios.delete('http://localhost:3000/Beer/' + Beerid)
        .then((result) => {
          for(var i=0; i<this.Comments.length; i++){
          axios.delete('http://localhost:3000/Comment' + this.Comments[i]._id)
          .then(response =>{
            this.$router.push({
              name: 'Recherche'
            })
          })
          .catch(e => {
            this.errors.push(e)
          })
        }
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    onSubmit (evt) {
      this.Comment.beer = this.Beer;
      this.Comment.user = this.User[0];
      evt.preventDefault()
      axios.post(`http://localhost:3000/Comment/`, this.Comment)
        .then(response => {
          axios.get(`http://localhost:3000/Comment/` + this.Beer.nom)
            .then(response => {
              this.Comments = response.data
              this.Comment.titre = 'Titre'
              this.Comment.message = 'Message'
            })
            .catch(e => {
              this.errors.push(e)
            })
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    like () {
      console.log("Like");
			var dislike = false;
			for(var i = 0; i<this.User[0].favoriteBeer.length; i++){
				if(this.User[0].favoriteBeer[i] == this.Beer._id){
						this.User[0].favoriteBeer.splice(i);
            this.Beer.favorite = this.Beer.favorite -1;
						dislike = true;
					}
				}
			if(dislike == false){
				this.User[0].favoriteBeer.push(this.Beer._id);
        this.Beer.favorite=this.Beer.favorite +1;
			}
      axios.put(`http://localhost:3000/User/` + this.User[0]._id, this.User[0])
			.then(response=>{
				axios.get(`http://localhost:3000/User/email/`+ this.User[0].email)
				.then(response=>{
					this.User = response.data;
          axios.put(`http://localhost:3000/Beer/` + this.Beer._id, this.Beer)
          .then(response=>{
					axios.get(`http://localhost:3000/Beer/` + this.Beer._id)
						.then(response => {
							this.Beer = response.data;
								for(var i=0; i<this.User[0].favoriteBeer.length; i++){
									if(this.Beer._id == this.User[0].favoriteBeer[i]){
										this.Beer.like = true;
										break;
									}
									else{
										this.Beer.like = false;
									}
							  }
						})
						.catch(e => {
							this.errors.push(e)
						})
            })
            .catch(e => {
							this.errors.push(e)
						})
				})
				.catch(e => {
					this.errors.push(e)
				})
			})
	}
  }
}
</script>
