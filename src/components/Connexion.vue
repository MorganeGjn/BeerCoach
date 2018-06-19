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
						</div>
					</div>
				</nav>
				<header id="gtco-header" class="gtco-cover gtco-cover-md" role="banner" style="background-image: url('https://imageshack.com/a/img923/1808/z4qwdQ.jpg')">
					<div class="overlay"></div>
					<div class="gtco-container">
						<div class="row">
							<div class="col-md-12 col-md-offset-0 text-left">
								<div class="row row-mt-15em">
									<div class="col-md-6 mt-text animate-box" data-animate-effect="fadeInUp">
										<h1>Besoin d'aide pour choisir une bière ?</h1>
									</div>
									<div class="col-md-5 col-md-push-1 animate-box" data-animate-effect="fadeInRight">
										<div class="form-wrap">
											<div class="tab">

												<div class="tab-content">
													<div class="tab-content-inner active" data-content="signup">
														<h3>Se connecter</h3>
														<form action="#">
															<div class="row form-group">
																<div class="col-md-12">
																	<label for="Mail">Identifiant</label>
																	<input type="text" id="mail" class="form-control" v-model="email">
																</div>
															</div>
															<div class="row form-group">
																<div class="col-md-12">
																	<label for="fullname">Mot de passe</label>
																	<input type="password" class="form-control" v-model="password">
																</div>
															</div>
															<div class="row form-group">
																<div class="col-md-12">
																	<b-btn class="btn btn-primary btn-block" variant="primary"  @click.stop="login()">Se connecter</b-btn>
																</div>
															</div>
															<p>Vous n'avez pas encore de compte ? <a href="/#/inscription"> Créez-en un !</a></p>
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
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login (event) {
      axios.post('http://localhost:3000/login', {
        'email': this.email, 'pass': this.password
      })
        .then(response => {
					if(response.data == "done"){
						this.$router.push({
			        name: 'Actualites'
			      })
					}
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}

</script>
