<template>
	<div>
		<h1>Страница с командами</h1>
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
		<teams-list
		
			v-if="!isPostLoading"
		/>
		<div v-else>Идет загрузка...</div>
		<div class="observer"></div>
	</div>
</template>



<script>
// import PostForm from "@/components/PostForm";
import TeamsList from "@/components/Teams/TeamsList";
import MyButton from "@/components/UI/MyButton";
import axios from 'axios';
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
			}
		},
		methods: {
			showDialog() {
				this.dialogVisible = true;
			},
			async fetchTeams() {
				try {
					this.isPostLoading = true;
					const response = await axios.get("https://v3.football.api-sports.io/teams?country=england&league=39&season=2010", {
						headers: {
							"x-rapidapi-host": "v3.football.api-sports.io",
							"x-rapidapi-key": "0a2e17e01da0910c8eefcc11165fa448"
						}
					});
					this.teams = response.data.response;
        	console.log(response.data);
				} catch (error) {
					alert('Ошибка')
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
	}
</script>



<style>
	.app__btns {
		margin: 15px 0;
		display: flex;
		justify-content: space-between;
	}
	.page__wrapper {
		display: flex;
		margin-top: 15px;
	}
	.page {
		border: 1px solid black;
		padding: 10px;
	}
	.current-page {
		border: 2px solid teal;
	}

	.observer {
		height: 30px;
		background: green;
	}

</style>