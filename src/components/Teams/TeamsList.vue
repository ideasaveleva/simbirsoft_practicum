<template>
	<div v-if="teams.length > 0">
		<h3>Cписок команд</h3>
			<teams-item
				v-for="team in teams"
				:team="team"
				:key="team.id"
			/>
	</div>
	<h2 v-else style="color: red" >Список команд пуст</h2>
</template>

<script>
import TeamsItem from "@/components/Teams/TeamsItem";

export default {
	components: {
		TeamsItem
	},
  props: {
		teams: {
			type: Array,
			requiered: true
		}
	}
}
</script>

<style scoped>
	.user-list-item {
  display: inline-block;
  margin-right: 10px;
}
.user-list-enter-active,
.user-list-leave-active {
  transition: all 0.4s ease;
}
.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.user-list-move {
  transition: transform 0.4s ease;
}
</style>