<template>

		<div class="nav justify-content-center">
			<!-- displayes the different navbar buttons -->
			<a class="border nav-link" :class="selected == 'Home' ? 'bg-primary text-white' : 'bg-light'" href="index.html">Home</a>

			<a class="border nav-link" :class="selected == 'API' ? 'bg-primary text-white' : 'bg-light'" href="about.html">API</a>

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


