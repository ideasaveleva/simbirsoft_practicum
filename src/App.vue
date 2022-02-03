<template>
	<navbar></navbar>
	<div class="app">
      <router-view></router-view>
	</div>
</template>

<script>
import Navbar from "@/components/UI/Navbar";
	export default {
		components: {
			Navbar
		}
	}
</script>

<style>

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Roboto' sans-serif;
		font-size: 16px;
	}
	.app {
		margin: 0 auto;
		padding: 0 20px;
	}
	body {
    background: no-repeat center center fixed url("./assets/ball.jpg");
		background-size: cover;
	}

</style>