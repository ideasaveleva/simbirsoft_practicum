<template>
	<div v-if="matches.length > 0">
		<item-matches v-for="match in matches" :match="match" :key="match.id" />
	</div>
	<h2 v-else style="color: red; padding: 15px 0 10px; font-weight: 700">
		Список матчей пуст
	</h2>
</template>

<script>
import ItemMatches from "@/components/Matches/ItemMatches";

export default {
	components: {
		ItemMatches,
	},
	props: {
		matches: {
			type: Array,
			requiered: true,
		},
	},
};
</script>

<style scoped>
</style>