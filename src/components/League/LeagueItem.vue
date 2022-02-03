<template>
	<div class="post">
		<div>
			<h2>{{ post.league.id }}</h2>
			<h2><strong>Название лиги:</strong> {{ post.league.name }}</h2>
			<h2><strong>Территория:</strong> {{ post.country.name }}</h2>
			<h2><strong>Код страны:</strong> {{ post.country.code }}</h2>
			<div class="season-block">
				<strong>Сезоны: </strong>
				<my-button
					class="btn"
					@click="
						$router.push(
							`/api_list?api=standings&league=${post.league.id}&season=${season.year}`
						)
					"
					v-for="(season, i) in post.seasons"
					:key="i"
				>
					{{ season.year }}
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
import MyButton from "@/components/UI/MyButton";
export default {
	components: { MyButton },
	props: {
		post: {
			type: Object,
			requiered: false,
		},
	},
};
</script>

<style scoped>
.post {
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
	margin-bottom: 10px;
	padding: 3px 10px;
	border-radius: 5px;
	background: #0048a0;
	color: #fff;
}
.season-block {
	margin-top: 20px;
}
</style>