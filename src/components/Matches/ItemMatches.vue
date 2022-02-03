<template>
	<div class="match">
		<div>
			<div><strong>Название лиги:</strong> {{ match.group }}</div>
			<div><strong>Описание:</strong> {{ match.description }}</div>
			<div><strong>Команда:</strong> {{ match.team.name }}</div>
			<!-- <div><strong>Территория:</strong> {{ match.country.name }}</div>
			<div><strong>Код страны:</strong> {{ match.country.code }}</div> -->
			<!-- <div><strong>Сезоны: </strong>
			<button class="btn" @click="$router.push(`/posts/${season.year}`)" v-for="(season, i) in match.seasons">
				{{season.year}}<template v-if="i < post.seasons.length - 1">, </template><template v-else>.</template>
			</button>
			</div> -->
		</div>
		<!-- <div class="post__btns">
			<my-button @click="$router.push(`/posts/${post.league.id}`)" class="btn">Открыть</my-button>
			<my-button @click="$emit('remove', post)" class="btn">Удалить</my-button>
		</div> -->
	</div>
</template>

<script>
export default {
	props: {
		match: {
			type: Object,
			requiered: false,
		},
	},
};
</script>

<style scoped>
.match {
	padding: 15px;
	border: 2px solid #50b553;
	margin-top: 15px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: rgba(255, 255, 255, 0.8);
	border-radius: 5px;
}
.btn {
	margin-right: 10px;
	padding: 5px 10px;
	border-radius: 5px;
}
</style>