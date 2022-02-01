<template>
	<div class="navbar">
		<div @click="$router.push('/')" style="text-shadow: 2px 2px 4px teal;">Vue 3</div>
		<div class="navbar__btns">
			<button class="btn btn-primary" @click="$router.push('/league')">Лиги</button>
			<button class="btn" @click="$router.push('/teams')" style="margin-left: 20px;">Команды</button>
			<button class="btn" @click="$router.push('/about')" style="margin-left: 20px;">О сайте</button>
			<!-- <my-button @click="$router.push('/store')" style="margin-left: 20px;">store</my-button>
			<my-button @click="$router.push('/composition')" style="margin-left: 20px;">Composition</my-button> -->
		</div>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style>
	.navbar {
		font-size: 20px;
		font-weight: 900;
		height: 50px;
		background-color: darkgrey;
		box-shadow: 2px 2px 4px gray;
		display: flex;
		align-items: center;
		padding: 0 15px;
	}
	.navbar__btns {
		margin-left: auto;
	}
</style>