<template>
	<navbar></navbar>
	<div class="app">
		<div class="container-background"></div>
    <div class="content">
      <router-view></router-view>
    </div>
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
		position: relative;
		margin: 0 auto;
	}
	.app .container-background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: no-repeat center center fixed url("./assets/ball.jpg");
		background-size: cover;
    opacity: 0.5;
		height: 100vh;
	}
	.app .content {
    position: relative;
    z-index: 1;
	}

</style>