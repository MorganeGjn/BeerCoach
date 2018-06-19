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
  											<h3>Modifier les informations de son compte</h3>
  											<form @submit="onSubmit">
  												<div class="row form-group">
  													<div class="col-md-6">
  														<label for="fullname">Nom</label>
  														<input type="text" id="name" class="form-control" v-model="User[0].nom">
  														</div>
  													<div class="col-md-6">
  														<label for="fullname">Prénom</label>
  														<input type="text" id="firstname" class="form-control" v-model="User[0].prenom">
  													</div>
  												</div>

  												<div class="row form-group">
  													<div class="col-md-12">
  														<label for="Mail">Email</label>
  														<input type="text" id="number" class="form-control" v-model="User[0].email">
  													</div>
  												</div>

  												<div class="row form-group">
  													<div class="col-md-12">
  														<label for="fullname">Bio</label>
  														<input type="text" id="number" class="form-control" v-model="User[0].description">
  													</div>
  												</div>



  												<div class="row form-group">
  													<div class="col-md-12">
  														<!-- Là il faut ajouter une condition suivant si les deux mdp tapés sont identiques ! -->
  														<b-btn type="submit" class="btn btn-primary btn-block" style="color: #fff">Enregistrer les modifications</b-btn>
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
	name: 'Profil',
  data () {
    return {
			User:[]
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
					this.User = res.data;
					console.log(this.User);
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
  onSubmit (evt) {
    evt.preventDefault()
    axios.put(`http://localhost:3000/User/` + this.User[0]._id, this.User[0])
      .then(response => {
        this.$router.push({
          name: 'Profil'
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
}
</script>
