<template>
	<div class="team">
		<div>
			<div>{{ team.team.id }}</div>
			<div><strong>Название команды:</strong> {{ team.team.name }}</div>
			<div><strong>Страна:</strong> {{ team.team.country}}</div>
			<div><strong>Основана:</strong> {{ team.team.founded }}</div>
			<div><strong>Место встречи:</strong> {{ team.venue.name }}</div>
			<div><strong>Адрес:</strong> {{ team.venue.address }}</div>
			<div><strong>Город:</strong> {{ team.venue.city }}</div>
			<div><strong>Сезоны: </strong>
			<button class="btn" @click="$router.push(`/api_list?api=teams_matches`)">
				cписок матчей
			</button>
			</div>
		</div>
		<!-- <div class="teams__btns">
			<my-button @click="$router.push(`/api_list?search=manches`)" class="btn">Открыть</my-button>
		</div> -->
	</div>
</template>

<script>
export default {
	props: {
		team: {
			type: Object,
			requiered: false,
		}
	}
}
</script>

<style scoped>
	.team {
		padding: 15px;
		border: 2px solid teal;
		margin-top: 15px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.team__btns {
		display: flex;
	}
	.btn {
		margin-right: 10px;
		padding: 5px 10px;
		border-radius: 5px;
	}
</style>