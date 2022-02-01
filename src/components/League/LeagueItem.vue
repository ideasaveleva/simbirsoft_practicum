<template>
	<div class="post">
		<div>
			<div>{{ post.league.id }}</div>
			<div><strong>Название лиги:</strong> {{ post.league.name }}</div>
			<div><strong>Территория:</strong> {{ post.country.name }}</div>
			<div><strong>Код страны:</strong> {{ post.country.code }}</div>
			<div><strong>Сезоны: </strong>
			<my-button class="btn" @click="$router.push(`/api_list?api=standings&league=${post.league.id}&season=${season.year}`)" v-for="(season, i) in post.seasons">
				{{season.year}}
				<!-- <template v-if="i < post.seasons.length - 1">, </template><template v-else>.</template> -->
			</my-button>
			</div>
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
		post: {
			type: Object,
			requiered: false,
		}
	}
}
</script>

<style scoped>
	.post {
		padding: 15px;
		border: 2px solid teal;
		margin-top: 15px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.post__btns {
		display: flex;
	}
	.btn {
		margin-right: 10px;
		padding: 5px 10px;
		border-radius: 5px;
	}
</style>