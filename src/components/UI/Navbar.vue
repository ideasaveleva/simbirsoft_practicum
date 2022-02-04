<template>
	<div class="navbar flex justify-between items-center content-center">
		<router-link to="/">SoccerStat - feedback</router-link>
		<div class="navbar__link">
			<router-link to="/league">Лиги</router-link>
			<router-link to="/teams" style="margin-left: 25px;">Команды</router-link>
			<router-link to="/about" style="margin-left: 25px;">Тестовое задание</router-link>
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
		background-color: #000000;
		color: #fff;
		box-shadow: 0px 3px 10px gray;
		padding: 30px 50px;
	}
</style>