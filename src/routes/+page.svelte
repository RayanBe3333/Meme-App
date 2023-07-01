<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
    data.imageUrl
</script>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Meme App</title>
</head>
<h1>Meme App</h1>
<div>

    <header>
        {#if data.author == "[deleted]"}
        <h3 class="by">In {data.subreddit}: User deleted</h3>
        {:else}
        <h3 class="by">In {data.subreddit}: by {data.author}</h3>
        {/if}
    </header>
    
    <main>
        <h1 class="title">{data.title}</h1>
        <img on:click={() => {window.location.href;}} class="img" src={data.imageUrl} alt="Meme"><br><br>
        <button on:click={() => window.location.reload()}>New Meme</button>
        <a class="a" href={data.postLink}>See The Post</a>
    </main>
</div>
    
<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    div {
        display: flex;
        justify-content: center;
    }

    * {
        text-align: center;
        font-family: 'Roboto', sans-serif;
    }
    .img {
        height: 600px;
        width: 600px;
    }

    .a {
        color: black;
        text-decoration: none;
        font-size: 50px;
        border: 5px solid;
        border-radius: 25px;
    }
    button {
        background-color: transparent;
        cursor: pointer;
        color: black;
        text-decoration: none;
        font-size: 50px;
        border: 5px solid;
        border-radius: 25px;
    }
</style>
