<script>
	import Header from './comp/Header.svelte'
	import Footer from './comp/Footer.svelte'
	import SearchBar from './comp/SearchBar.svelte'
	import Images from './comp/Images.svelte'
	import { onMount } from 'svelte'

	let data;
	$: fetched = false;
	
	async function search(e) {
		fetched = false;
		let query = e.detail;
        let url = `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`
        await fetch(url).then(res => res.json()).then((returnedData) => {
			data = returnedData; 
        })
        console.log(data)
		fetched = true;
    }

	onMount(() => {
		search({detail: "pikachu"})
	})
</script>

<Header/>

<main>
	<SearchBar on:search={search}/>
	<div class="data mt-10">
		{#if fetched}
			<Images {data}/>
		{/if}
	</div>
</main>

<Footer/>

<style>
</style>