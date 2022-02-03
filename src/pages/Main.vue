<template>
	<div class="container mx-auto">
		<div class="flex justify-center px-6 my-12 h-full">
			<!-- Row -->
			<div class="w-full xl:w-3/4 lg:w-11/12 flex">
				<!-- Col -->
				<div
					class="
						w-full
						h-auto
						bg-gray-400
						hidden
						lg:block lg:w-1/2
						bg-cover
						rounded-l-lg
					"
					style="
						background-image: url('https://a.d-cd.net/lVsf7GMN1oI9QsbCEX28tCla-iY-1920.jpg');
					"
				></div>
				<!-- Col -->
				<div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
					<div class="px-8 mb-4 text-center h-96">
						<h3 class="pt-4 mb-2 text-3xl">My feedback</h3>
						<p class="mb-4 text-md text-gray-700">
							Попыталась работать с api, указанной в задании. Документация не
							понравилась тем, что нет полного описания разделов самого дерева. Сама api c неполными разделами. Выбрала другую api, здесь хорошая документация - https://www.api-football.com/documentation-v3, только бесплатной подписки хватает на 100 запросов и работа с api заканчивается очень быстро.
							Были мысли переписать некоторые разделы в файл json и работать с ним.
							Я много времени потратила на первую api из-за проблем с документацией. В итоге взяла другую api. Некоторые пункты из задания не успела сделать.<br> Я очень надеюсь, если у вас будут свободные места на практикуме, потому что я очень бы хотела у вас учиться. <b>Frontend vue-developer Ekaterina.</b>
						</p>
					</div>
					<form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
						<div class="mb-6 text-center pt-60">
						</div>
						<hr class="mb-6 border-t" />
						<div class="text-center">
							<a class="
									inline-block
									text-sm text-blue-500
									align-baseline
									hover:text-blue-800
								" href="mailto:ash2789@mail.ru">Написать на почту</a>
						</div>
						<div class="text-center">
							<a
								class="
									inline-block
									text-sm text-blue-500
									align-baseline
									hover:text-blue-800
								"
								href="https://wa.me/79184495727"
							>
								Написать на WhatsApp
							</a>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
	color: white;
}
</style>