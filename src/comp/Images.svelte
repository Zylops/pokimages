<script>
    // import Sprite from './Sprite.svelte'
    import Card from './Card.svelte'

    export let data;
    let sprites = data.sprites;
</script>

<div class="images grid grid-cols-6 px-6 gap-4 place-items-center">
    <Card>
        <img class="transform transition hover:scale-125" src="{sprites.front_default}" alt="Image not Found">
        <hr class="mb-2">
        <h3 class="font-rubik">Front Default</h3>
        <p class="text-xs">Click <a class="text-blue-500 border-b-2 border-blue-600" href="{sprites.front_default}">here</a> if you can't right click to save</p>
    </Card>
    
    <Card>
        <img class="transform transition hover:scale-125" src="{sprites.back_default}" alt="Image not Found">
        <hr class="mb-2">
        <h3 class="font-rubik">Back Default</h3>
        <p class="text-xs">Click <a class="text-blue-500 border-b-2 border-blue-600" href="{sprites.back_default}">here</a> if you can't right click to save</p>
    </Card>

    <Card>
        <img class="transform transition hover:scale-125" src="{sprites.front_shiny}" alt="Image not Found">
        <hr class="mb-2">
        <h3 class="font-rubik">Front Shiny</h3>
        <p class="text-xs">Click <a class="text-blue-500 border-b-2 border-blue-600" href="{sprites.front_shiny}">here</a> if you can't right click to save</p>
    </Card>


    <Card>
        <img class="transform transition hover:scale-125" src="{sprites.back_shiny}" alt="Image not Found">
        <hr class="mb-2">
        <h3 class="font-rubik">Back Shiny</h3>
        <p class="text-xs">Click <a class="text-blue-500 border-b-2 border-blue-600" href="{sprites.back_shiny}">here</a> if you can't right click to save</p>
    </Card>

    <Card>
        <img class="p-4 w-40 h-40 transform transition hover:scale-125" src="{sprites.other.dream_world.front_default}" alt="Image not Found">
        <hr class="mb-2">
        <h3 class="font-rubik">Dream World</h3>
        <p class="text-xs">Click <a class="text-blue-500 border-b-2 border-blue-600" href="{sprites.other.dream_world.front_default}">here</a> if you can't right click to save</p>
    </Card>

    <Card>
        <img class="p-4 h-40 transform transition hover:scale-125" src="{sprites.other["official-artwork"].front_default}" alt="Image not Found">
        <hr class="mb-2">
        <h3 class="font-rubik">Official Artwork</h3>
        <p class="text-xs">Click <a class="text-blue-500 border-b-2 border-blue-600" href="{sprites.other["official-artwork"].front_default}">here</a> if you can't right click to save</p>
    </Card>
</div>