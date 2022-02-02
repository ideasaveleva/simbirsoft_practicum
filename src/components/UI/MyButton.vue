<template>
	<button>
		<slot>

		</slot>
	</button>
</template>

<script>
export default {
	name:'my-button'
}
</script>

<style>
	button {
		align-self: flex-end;
		padding: 15px 30px;
		background: #1D46F6;
		color: #fff;
	}
</style>