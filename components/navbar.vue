<template>

		<div class="nav justify-content-center">
			<!-- displayes the different navbar buttons -->
			<ul>
  				<li><a href="index.html">Home</a></li>
  				<li><a href="about.html">News</a></li>
			</ul>
		</div>
		<!-- displays a welcome message containing name -->
		<div v-if="loggedInUser" class="text-primary text-center">Welcome, {{ loggedInUser }}!</div>

</template>

<script>

		export default {

			props: {

				selected: String

			},

			setup() {
				//returns the username stored in local storage
				let loggedInUser = Vue.computed(function() {
				
					return localStorage.getItem('username');
				
				});
				// Return variables, computed properties and methods
				return {

					loggedInUser

				}

			}

		}

</script>

<style>
	ul {
  		list-style-type: none;
  		margin: 0;
  		padding: 0;
  		overflow: hidden;
  		background-color: #333;
	}

	li {
  		float: left;
	}

	li a {
  		display: block;
  		color: white;
  		text-align: center;
  		padding: 14px 16px;
  		text-decoration: none;
	}

	/* Change the link color to #111 (black) on hover */
		li a:hover {
 		background-color: #111;
	}
</style>
