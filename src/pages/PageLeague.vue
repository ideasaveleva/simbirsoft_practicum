<template>
	<div>
		<h1>Страница с лигами</h1>
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
		<league-list
			v-if="!isPostLoading"
		/>
		<div v-else>Идет загрузка...</div>
		<div class="observer"></div>
	</div>
</template>



<script>
// import PostForm from "@/components/PostForm";
import LeagueList from "@/components/League/LeagueList";
import MyButton from "@/components/UI/MyButton";
import axios from 'axios';
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";




	export default {
		components: {
			MyInput,
			MySelect,
			MyButton,
			LeagueList,
		},

		data() {
			return {
				posts: [],
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
			async fetchPosts() {
				try {
					this.isPostLoading = true;
					const response = await axios.get('https://v3.football.api-sports.io/leagues?country=england', {
						headers: {
							"x-rapidapi-host": "v3.football.api-sports.io",
							"x-rapidapi-key": "0a2e17e01da0910c8eefcc11165fa448"
						}
					})
					this.posts = response.data.response;
					console.log(response.data)
				} catch (error) {
					alert('Ошибка')
				} finally {
					this.isPostLoading = false;
				}
			},
		},
		mounted() {
			this.fetchPosts();
		},
		// computed: {
		// 	sortedPosts() {
		// 		return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
		// 	},
		// 	sortedAndSearchedPosts() {
		// 		return this.sortedPosts.filter(post => post.title ? post.title.toLowerCase().includes(this.searchQuery.toLowerCase()) : "NULL")
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