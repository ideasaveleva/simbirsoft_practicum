<template>
	<div>
		<template v-if="$route.query.api == 'standings'">
			<!-- <h1>Страница поста с ID = {{ $route.params.id }}</h1> -->
			<div class="matches">
				<h2>Cписок матчей лиги</h2>
				<list-matches :matches="matches" v-if="!isPostLoading" />
			</div>
		</template>
		<template v-if="$route.query.api == 'teams_coaches'">
			<div class="coach-block">
				{{ $route.query.team_name }}
			</div>
			<div class="coathes" v-for="coach in coaches" :key="coach.id">
				<!-- <h2>Cписок тренеров команды</h2> -->
				<!-- <list-matches :matches="matches" v-if="!isPostLoading" /> -->
				<div class="coach-title"><strong>Имя:</strong> {{ coach.name }}</div>
				<h2><strong>Возраст:</strong> {{ coach.age }}</h2>
				<h2><strong>Национальность:</strong> {{ coach.nationality }}</h2>
				<h2><strong>Карьера:</strong> {{}}</h2>
				<div v-for="coach in coach.career" :key="coach">
					<h3>Начало: {{ coach.start }}</h3>
					<h3>Окончание: {{ coach.end }}</h3>
				</div>
			</div>
		</template>
	</div>
</template>

<script>
import axios from "axios";
import ListMatches from "../components/Matches/ListMatches.vue";

export default {
	components: {
		ListMatches,
	},
	data() {
		return {
			transfer: {
				// standings:
				// teams:
				// type:
			},
			matches: [],
			coaches: [],
			// dialogVisible: false,
			isPostLoading: false,
			// selectedSort: '',
			// searchQuery: '',
			// sortOptions: [
			// 	{value: 'post.currentSeason.startDate', name: 'По началу'},
			// 	{value: 'post.currentSeason.endDate', name: 'По окончанию'},
			// ],
		};
	},
	methods: {
		showDialog() {
			this.dialogVisible = true;
		},
		async fetchMatches() {
			try {
				this.isPostLoading = true;
				if (this.$route.query.api == "standings") {
					const response = await axios.get(
						`https://v3.football.api-sports.io/${this.$route.query.api}?league=${this.$route.query.league}&season=${this.$route.query.season}`,
						{
							headers: {
								"x-rapidapi-host": "v3.football.api-sports.io",
								"x-rapidapi-key": "0a2e17e01da0910c8eefcc11165fa448",
							},
						}
					);
					this.matches =
						response.data.response[0].league[this.$route.query.api][0];
				}

				if (this.$route.query.api == "teams_coaches") {
					const response = await axios.get(
						// `https://v3.football.api-sports.io/teams/statistics?league=39&season=2010&team=${this.$route.query.team_id}`,
						`https://v3.football.api-sports.io/coachs?team=${this.$route.query.team_id}`,
						{
							headers: {
								"x-rapidapi-host": "v3.football.api-sports.io",
								"x-rapidapi-key": "0a2e17e01da0910c8eefcc11165fa448",
							},
						}
					);
					// this.coachs =
					// 	response.data.response[0].league[this.$route.query.api][0];

					// response.data.response.forEach((e) => {
					// 	let career = e.career.filter((t) => {
					// 		if (t.id == this.$route.query.team_id) {
					// 			return t;
					// 		}
					// 	});
					// 	e.career = career;
					// });

					this.coaches = [];
					response.data.response.forEach((e) => {
						e.career = e.career.filter((t) => {
							if (t.team.id == this.$route.query.team_id) {
								return t;
							}
						});
						this.coaches.push(e);
					});
					console.log(response.data.response);
				}
			} catch (error) {
				alert("Ошибка");
			} finally {
				this.isPostLoading = false;
			}
		},
	},
	mounted() {
		console.log(this.$route.query);
		this.fetchMatches();
	},
};
</script>

<style scoped>
.observer {
	height: 30px;
	background: #50b553;
}
.coach-block {
	background-color: rgba(255, 255, 255, 0.8);
	margin-top: 20px;
	border-radius: 5px;
	padding: 10px;
	font-weight: 600;
}
.coathes {
	padding: 15px;
	border: 2px solid #50b553;
	margin-top: 15px;
	justify-content: space-between;
	background-color: rgba(255, 255, 255, 0.8);
	border-radius: 5px;
}
</style>

