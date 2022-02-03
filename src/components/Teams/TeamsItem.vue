<template>
	<div class="team">
		<div>
			<h2>{{ team.team.id }}</h2>
			<h2><strong>Название команды:</strong> {{ team.team.name }}</h2>
			<h2><strong>Страна:</strong> {{ team.team.country }}</h2>
			<h2><strong>Основана:</strong> {{ team.team.founded }}</h2>
			<h2><strong>Стадион:</strong> {{ team.venue.name }}</h2>
			<h2><strong>Адрес:</strong> {{ team.venue.address }}</h2>
			<h2><strong>Город:</strong> {{ team.venue.city }}</h2>
			<div>
				<my-button
					class="btn"
					@click="
						$router.push(
							`/api_list?api=teams_coaches&team_id=${team.team.id}&team_name=${team.team.name}`
						)
					"
				>
					Тренерский состав
				</my-button>
			</div>
		</div>
		<!-- <div class="teams__btns">
			<my-button @click="$router.push(`/api_list?search=manches`)" class="btn">Открыть</my-button>
		</div> -->
	</div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
export default {
	props: {
		team: {
			type: Object,
			requiered: false,
		},
	},
	components: {
		MyButton,
	},
};
</script>

<style scoped>
.team {
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
	margin: 10px 10px 10px 0;
	padding: 3px 10px;
	border-radius: 5px;
	background: #0048a0;
	color: #fff;
}
</style>