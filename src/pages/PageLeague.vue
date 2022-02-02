<template>
	<div class="league-block">
		<h1>Страница с лигами</h1>
		<input v-model="search" type="text" placeholder="Search league" />
		<select v-model="select.value" @change="changeOption">
			<!-- <option disabled value="">Выберите из списка</option> -->
			<option
				v-for="option in select.options"
				:key="option.value"
				:value="option.key"
			>
				{{ option.name }}
			</option>
		</select>
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
		<league-list v-if="!isPostLoading" :posts="posts" />
		<div v-else>Идет загрузка...</div>
		<div class="observer"></div>
	</div>
</template>

<script>
// import PostForm from "@/components/PostForm";
import LeagueList from "@/components/League/LeagueList";
import MyButton from "@/components/UI/MyButton";
import axios from "axios";
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
			search: "",
			select: {
				options: [
					{
						key: "league",
						name: "Наименование лиги",
					},
					{
						key: "country",
						name: "Наименование страны",
					},
					{
						key: "seasons",
						name: "Сезоны",
					},
				],
				value: "league",
			},
			posts: [],
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
		async fetchPosts() {
			try {
				this.isPostLoading = true;
				const response = await axios.get(
					"https://v3.football.api-sports.io/leagues?country=england",
					{
						headers: {
							"x-rapidapi-host": "v3.football.api-sports.io",
							"x-rapidapi-key": "0a2e17e01da0910c8eefcc11165fa448",
						},
					}
				);
				this.posts = response.data.response;
				console.log(response.data);
			} catch (error) {
				alert("Ошибка");
			} finally {
				this.isPostLoading = false;
			}
		},
	},
	mounted() {
		this.fetchPosts();
	},
	computed: {
		searchData() {
			let search = this.search && this.search.toLowerCase();
			let posts = this.posts;

			if (search) {
				posts = posts.filter((e) => {
					return Object.keys(row).some((key) => {
						if (key == "league") {
							return String(row[key].name).toLowerCase().indexOf(search) > -1;
						}
					});
				});
			}
		},
		// 	sortedPosts() {
		// 		return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
		// 	},
		// 	sortedAndSearchedPosts() {
		// 		return this.sortedPosts.filter(post => post.title ? post.title.toLowerCase().includes(this.searchQuery.toLowerCase()) : "NULL")
		// 	}
	},
};
</script>

<style>
.league-block {
	padding: 30px;
}
</style>
