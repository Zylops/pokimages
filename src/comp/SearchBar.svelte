<script>
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher();
    let query;
</script>

<div class="search flex justify-center">
    <input class="p-2 border-2 border-gray-200 rounded-md w-96" placeholder="🔍 Search your pokemon!" bind:value={query} type="text">
    <button on:click={() => {dispatch('search', query)}} class="rounded text-gray-600 font-rubik ml-2 p-2 bg-gray-200">Search</button>
</div>