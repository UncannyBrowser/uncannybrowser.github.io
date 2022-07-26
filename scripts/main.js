const app = Vue.createApp({
  components: {
    'nav-bar': Vue.defineAsyncComponent( () => loadVueFile('./components/navbar.vue') ),
    'home': Vue.defineAsyncComponent( () => loadVueFile('./components/home.vue') ),
    'about': Vue.defineAsyncComponent( () => loadVueFile('./components/about.vue') ),
  }
});

async function fetchURL(url) {
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
