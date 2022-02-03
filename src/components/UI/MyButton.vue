<template>
	<button>
		<slot> </slot>
	</button>
</template>

<script>
export default {
	name: "my-button",
};
</script>

<style>
button {
	align-self: flex-end;
	padding: 15px 30px;
	background: #003f90;
	color: #fff;
}
</style>