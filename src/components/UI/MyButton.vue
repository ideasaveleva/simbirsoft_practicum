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
		padding: 10px 20px;
		background: teal;
		color: #fff;
	}
</style>