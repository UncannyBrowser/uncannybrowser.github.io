<template>
	
	<div class='justify-content-center-text-center'>

		<div class="content">

			<link rel="icon" type="image/x-icon" v-bind:src="icon">

			<h1>{{ title }}</h1>
			<p>
				<input class="search" placeholder="Enter city..." class="zoom" v-model="city"></input>

				<!-- <button @click="getData">Get Data</button> -->

				<br/>

				<button v-if="city" class="zoom" @click="getData(this.api)">Get weather in {{ city }}</button>
			</p>
			<!-- <p v-if="error">{{ error }}</p> -->

			<br></br>

			<img v-bind:src="icon"></img>

			<p v-if="tempShown">{{ city }} :: {{ text }} :: {{ temperature }}&deg;C </p>

			<button class="zoom" @click="getLocation">Get Location</button>

		</div>

	</div>

</template>


<script>

	export default {

		setup() {

			let city = Vue.ref("Canberra")
			let title = Vue.ref('Weather');
			let api = Vue.ref("https://api.weatherapi.com/v1/current.json?key=8c7f59d7457e458c88c52432220404&q="+ city);
			let temperature = Vue.ref(0);
			let weather = Vue.ref({});
			let tempShown = Vue.ref(false);
			let error = Vue.ref("")
			let icon = Vue.ref()
			let location = Vue.ref("")
			let lat = Vue.ref("")
			let lon = Vue.ref("")
			let text = Vue.ref("")

			let getData = async function(/*link*/) {
			 	//fetches data from the API and sets the variables to it
				// console.log(link)
				
				weather.value = await fetchURL("https://api.weatherapi.com/v1/current.json?key=8c7f59d7457e458c88c52432220404&q="+ city.value);
			 	
				console.log(weather.value)

				// if (weather.value == "{\"error\":{\"code\":1006,\"message\":\"No matching location found.\"}}") {
				// 	error = "error"
				// }

			 	this.temperature = this.weather.current.temp_c
				this.city = this.weather.location.name
				this.tempShown = true
				this.icon = "https:" + this.weather.current.condition.icon
				this.text = this.weather.current.condition.text

				console.log(this.icon)
			}

			function getLocation() {
  			if (navigator.geolocation) {
    			navigator.geolocation.getCurrentPosition(showPosition);
  				} else {
    				console.log("Geolocation is not supported by this browser.");
 				}
			}

			function showPosition(position) {
				lat.value = position.coords.latitude
				lon.value = position.coords.longitude
				console.log(this.lat, this.lon)
				getData(`https://api.weatherapi.com/v1/current.json?key=8c7f59d7457e458c88c52432220404&q=${lat.value},${lon.value}&aqi=no`)
			}

			 return {
			// 	title, getData, results, temperature, api
			title, temperature, getData, api, weather, tempShown, city, error, icon, location, getLocation, lat, lon, text
			 }

		}

	}

</script>
