/* eslint-disable */

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

	<!--<div class="gtco-loader"></div>-->

		<div id="page">
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
			<header id="gtco-header" class="gtco-cover gtco-cover-sm" role="banner" style="background-image: url('https://imageshack.com/a/img923/1808/z4qwdQ.jpg')">
				<div class="overlay"></div>
				<div class="gtco-container">
					<div class="row">
						<div class="col-md-12 col-md-offset-0 text-center">
							<div class="row row-mt-15em">

								<div class="col-md-12 mt-text animate-box" data-animate-effect="fadeInUp">
									<h1>Mon profil</h1>
								</div>

							</div>

						</div>
					</div>
				</div>
			</header>
			<div class="gtco-section">
		<div class="gtco-container">

			<div class="row">
				<div class="col-md-10 col-md-push-1">
					<div class="col-md-5">
						<img src="../images/profile.png" style="width: 200px;">
					</div>
					<div class="col-md-7">
						<ul class="fh5co-faq-list">
							<li class="animate-box">
								<table class="table">
								  <tbody>
								    <tr>
								      <th scope="row">Nom</th>
								      <td>{{User[0].nom}}</td>

								    </tr>
								    <tr>
								      <th scope="row">Prénom</th>
								      <td>{{User[0].prenom}}</td>

								    </tr>
								    <tr>
								      <th scope="row">Email</th>
								      <td>{{User[0].email}}</td>

								    </tr>
								    <tr>
								      <th scope="row">Bio</th>
								      <td style="text-align: justify;">{{User[0].description}}</td>

								    </tr>
								  </tbody>
								</table>
							</li>
						</ul>
					</div>

				</div>
			</div>
			<div class="row">
				<div class="col-md-3 col-md-push-8">
					<a class="btn btn-primary btn-block" href="/#/modifProfil" style="color: #fff">Editer</a>
				</div>
			</div>

		</div>
	</div>



	<footer id="gtco-footer" role="contentinfo">
		<div class="gtco-container">
			<div class="row row-p	b-md">

				<div class="col-md-2" style="align-content: center;">
					<div class="gtco-widget">
						<img src="../images/logo.png" style="width: 200px; ">
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
				})
				.catch(e => {
					this.errors.push(e)
				})
			}
		})
		.catch(e => {
			this.errors.push(e)
		})
}
}
</script>
