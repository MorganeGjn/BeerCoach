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
						<div class="col-md-12 col-md-offset-0">
							<div class="row row-mt-15em">
								<div class="col-md-12 animate-box" data-animate-effect="fadeInRight">
									<div class="form-wrap">
										<div class="tab">
											<div class="tab-content">
												<div class="tab-content-inner active" data-content="signup">
													<h3>Rechercher une bière</h3>
													<b-form @submit="onSubmit">
														<div class="row form-group">
															<div class="col-md-12">
																<b-form-group
																					label="Mot Clé">
																					<br/>
																	<b-form-input id="search" :state="state" v-model="search"  placeholder="Recherche"/>
																	</b-form-group>
															</div>
														</div>
														<div class="row form-group">
															<div class="col-md-2 col-md-push-10">
																<b-button type="submit" variant="primary">Rechercher</b-button>
															</div>
														</div>
														</b-form>
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

			<div class="gtco-section" style="height: 500px" >
				<div class="gtco-container">
					<div class="row">
						<div class="col-md-10 col-md-offset-1">
								<b-table hover :current-page="currentPage" :per-page="perPage" :items="beer" :fields="fields" style="background-color: transparent;">
										<template slot="details" scope="row" style="background-color: transparent; height: 35px; margin: 0px; padding: 0px; border:0px;">
						          <b-btn @click.stop="details(row.item)" style=" margin: 0px; padding: 0px; border:0px; background-color: transparent;">
												<img src="../images/loupe.png" style="width:30px;">
											</b-btn>
						        </template>
						      </b-table>
							<b-row>
					      <b-col md="6" class="my-1">
					        <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
					      </b-col>
					    </b-row>
						</div>
					</div>
				</div>
			</div>
			<div class="gtco-section" style="padding: none;" >
					<div class="gtco-cover gtco-cover-sm" style="height: 120px; background-color: #077480;">
						<div class="row">
							<div style="margin: auto; margin-top: 50px;">
								<h4 style="color: #fff">La bière que vous cherchez n'est pas dans la liste ? <a href="/#/creationBiere" style="color: #fff">Ajoutez-la !</a></h4>
							</div>
						</div>
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
		</div>
		<div class="gototop js-top">
			<a href="#" class="js-gotop"><i class="icon-arrow-up"></i></a>
		</div>
	</body>
</html>
</template>


<script>
import axios from 'axios';

export default {
  data () {
    return {
			fields: {
				details: { label: 'Details', 'class': 'text-center' },
        nom: { label: 'Bière', sortable: true, 'class': 'text-center' },
        brasserie: { label: 'Brasserie', sortable: true, 'class': 'text-center' },
        alcool: { label: 'Degré', sortable: true, 'class': 'text-center' },
				favorite: {label: 'Nombre de ♥', 'class': 'text-center'},
				//actions: { label: 'Like', 'class': 'text-center' }
      },
			search: [],
			beer: [],
			User: [],
			currentPage: 1,
			perPage: 5,
			totalRows: 0,
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
						axios.get(`http://localhost:3000/Beer`)
						.then(res=>{
							this.beer = res.data;
							this.totalRows = this.beer.length;
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
		onSubmit(evt) {
			evt.preventDefault()
			if(this.search == ""){
			}
			else{
			axios.get(`http://localhost:3000/Beer/search/` + this.search)
				.then(response => {
					this.beer = [];
					this.beer = response.data;
					this.totalRows = this.beer.length;
					var k = 0;
					for(var j=0; j<this.beer.length; j++){
					for(var i=0; i<this.User[0].favoriteBeer.length; i++){
						if(this.beer[j]._id == this.User[0].favoriteBeer[i]){
							this.beer[j].like = true;
							k++;
						}
						else if(k < j){
							k=j;
						}
						else if(k == j){
							this.beer[j].like = false;
						}
					}
				}
				})
				.catch(e => {
					this.errors.push(e)
				})
			}
		},
		details (Beer) {
      this.$router.push({
        name: 'ShowBeer',
        params: { id: Beer._id }
      })
    },
		like (Beer) {
			var dislike = false;
			for(var i =0; i<this.User[0].favoriteBeer.length; i++){
				if(this.User[0].favoriteBeer[i] == Beer._id){
						this.User[0].favoriteBeer.splice(i);
						dislike = true;
					}
				}
			if(dislike == false){
				this.User[0].favoriteBeer.push(Beer._id)
			}
      axios.put(`http://localhost:3000/User/` + this.User[0]._id, this.User[0])
			.then(response=>{
				axios.get(`http://localhost:3000/User/email/`+ this.User[0].email)
				.then(response=>{
					this.User = response.data;
					axios.get(`http://localhost:3000/Beer/search/` + this.search)
						.then(response => {
							this.beer = response.data;
							this.totalRows = this.beer.length;
							var k= 0;
							for(var j=0; j<this.beer.length; j++){
								for(var i=0; i<this.User[0].favoriteBeer.length; i++){
									if(this.beer[j]._id == this.User[0].favoriteBeer[i]){
										this.beer[j].like = true;
										k++;
									}
									else if(k < j){
										k=j;
									}
									else if(k == j){
										this.beer[j].like = false;
									}
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
	}
	}
}




</script>
