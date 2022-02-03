<template>
	<div v-if="posts.length > 0">
		<h3>Cписок лиг</h3>
		<!-- <transition-group name="user-list"> -->
		<league-item v-for="post in posts" :post="post" :key="post.id" />
		<!-- </transition-group> -->
	</div>
	<h2 v-else style="color: red; padding: 15px 0 10px; font-weight: 700">
		Список лиг пуст
	</h2>
</template>

<script>
import LeagueItem from "@/components/League/LeagueItem";

export default {
	components: {
		LeagueItem,
	},
	props: {
		posts: {
			type: Array,
			requiered: true,
		},
	},
};
</script>

<style scoped>
h3 {
	font-weight: 700;
	background-color: #50b553;
	border-radius: 5px;
	padding: 10px;
	margin-top: 30px;
}
</style>