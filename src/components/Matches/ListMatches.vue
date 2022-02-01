<template>
	<div v-if="matches.length > 0">
			<item-matches
				v-for="match in matches"
				:match="match"
				:key="match.id"
			/>
	</div>
	<h2 v-else style="color: red" >Список матчей пуст</h2>
</template>

<script>
import ItemMatches from "@/components/Matches/ItemMatches";

export default {
	components: {
		ItemMatches
	},
  props: {
		matches: {
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