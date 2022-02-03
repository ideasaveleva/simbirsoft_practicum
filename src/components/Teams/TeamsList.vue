<template>
	<div v-if="teams.length > 0">
		<h3>Cписок команд</h3>
		<teams-item v-for="team in teams" :team="team" :key="team.id" />
	</div>
	<h2 v-else style="color: red; padding: 15px 0 10px; font-weight: 600">
		Список команд пуст
	</h2>
</template>

<script>
import TeamsItem from "@/components/Teams/TeamsItem";

export default {
	components: {
		TeamsItem,
	},
	props: {
		teams: {
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