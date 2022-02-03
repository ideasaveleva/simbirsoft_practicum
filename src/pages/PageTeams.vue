<template>
	<div class="teams-block">
		<h1 class="teams-title">Страница с командами</h1>
		<!-- <my-input
			v-focus
			v-model="searchQuery"
			placeholder="Поиск...."
		/> -->
		<!-- <div class="app__btns">
			<my-select
				v-model="selectedSort"
				:options="sortOptions"
			/>
		</div> -->
		<teams-list :teams="teams" v-if="!isPostLoading" />
		<div class="loading-title" v-else>Идет загрузка...</div>
		<div class="observer"></div>
	</div>
</template>



<script>
// import PostForm from "@/components/PostForm";
import TeamsList from "@/components/Teams/TeamsList";
import MyButton from "@/components/UI/MyButton";
import axios from "axios";
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";

export default {
	components: {
		MyInput,
		MySelect,
		MyButton,
		TeamsList,
	},

	data() {
		return {
			// transfer: {
			// 	teams: []
			// },
			teams: [],
			// dialogVisible: false,
			// isPostLoading: false,
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
		async fetchTeams() {
			try {
				this.isPostLoading = true;
				const response = await axios.get(
					"https://v3.football.api-sports.io/teams?country=england&league=39&season=2010",
					{
						headers: {
							"x-rapidapi-host": "v3.football.api-sports.io",
							"x-rapidapi-key": "0a2e17e01da0910c8eefcc11165fa448",
						},
					}
				);
				this.teams = response.data.response;
				console.log(response.data);
			} catch (error) {
				alert("Ошибка");
			} finally {
				this.isPostLoading = false;
			}
		},
	},
	mounted() {
		this.fetchTeams();
	},
	// computed: {
	// 	sortedTeams() {
	// 		return [...this.teams].sort((team1, team2) => team1[this.selectedSort]?.localeCompare(team2[this.selectedSort]))
	// 	},
	// 	sortedAndSearchedTeams() {
	// 		return this.sortedTeams.filter(team => team.title ? team.title.toLowerCase().includes(this.searchQuery.toLowerCase()) : "NULL")
	// 	}
	// },
};
</script>



<style>
.observer {
	height: 20px;
	background: #50b553;
	border-radius: 5px;
}
.teams-title {
	font-weight: 600;
	font-size: 20px;
	color: white;
}
.teams-block {
	padding: 30px;
}
</style>