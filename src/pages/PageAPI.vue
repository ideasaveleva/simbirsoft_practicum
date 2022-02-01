<template>
<div>
  <template v-if="$route.query.api == 'standings'">
    <!-- <h1>Страница поста с ID = {{ $route.params.id }}</h1> -->
    <div class="matches">

      <h2>Cписок матчей лиги </h2>
      <list-matches :matches="matches" v-if="!isPostLoading" />
    </div>
  </template>
  <template v-if="$route.query.api == 'teams_matches'">
    <div class="matches">

      <h2>Cписок матчей команды </h2>
      <!-- <list-matches :matches="matches" v-if="!isPostLoading" /> -->
    </div>
  </template>
</div>
</template>

<script>
import axios from 'axios';
import ListMatches from "../components/Matches/ListMatches.vue";

export default {
  components: {
    ListMatches
  },
  data() {
    return {
      transfer: {
        // standings:
        // teams: 
        // type: 
      },
      matches: [],
      teams_matches: [],
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
    async fetchMatches() {
      try {
        this.isPostLoading = true;
        if (this.$route.query.api == 'standings') {
          const response = await axios.get(`https://v3.football.api-sports.io/${this.$route.query.api}?league=${this.$route.query.league}&season=${this.$route.query.season}`, {
            headers: {
              "x-rapidapi-host": "v3.football.api-sports.io",
              "x-rapidapi-key": "0a2e17e01da0910c8eefcc11165fa448"
            }
          });
          this.matches = response.data.response[0].league[this.$route.query.api][0];
        };
        if (this.$route.query.api == 'teams_matches') {
          const response = await axios.get(`https://v3.football.api-sports.io/teams?search=manches`, {
            headers: {
              "x-rapidapi-host": "v3.football.api-sports.io",
              "x-rapidapi-key": "4effa0f14f3a40812ae2a77b536ba269"
            }
          });
          // this.teams_matches = response.data.response[0].league[this.$route.query.api][0];
					
        };
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
}
</script>

<style scoped>
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
