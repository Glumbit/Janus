<template>
	<div class="questions">
		<div class="container">
			<div class="questions__inner">
				<div class="questions__subarticle subarticle">Частозадаваемые вопросы</div>
				<Accordion :accordionData="accordionData" />
			</div>
		</div>
	</div>
</template>

<script>
import Accordion from './QestionsAccordion.vue'
export default {
	data() {
		return {
			accordionData: [
				{
					question: 'oifhoeashjfouies',
					answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsa officiis ullam explicabo tempora ipsum, a veniam nisi eos laboriosam, totam voluptatem, laudantium optio eveniet sapiente odio incidunt quas velit.',
				},
				{
					question: 'oifhoeashjfouies',
					answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsa officiis ullam explicabo tempora ipsum, a veniam nisi eos laboriosam, totam voluptatem, laudantium optio eveniet sapiente odio incidunt quas velit.',
				},
				{
					question: 'oifhoeashjfouies',
					answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsa officiis ullam explicabo tempora ipsum, a veniam nisi eos laboriosam, totam voluptatem, laudantium optio eveniet sapiente odio incidunt quas velit.',
				},
				{
					question: 'oifhoeashjfouies',
					answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsa officiis ullam explicabo tempora ipsum, a veniam nisi eos laboriosam, totam voluptatem, laudantium optio eveniet sapiente odio incidunt quas velit.',
				},
				{
					question: 'oifhoeashjfouies',
					answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsa officiis ullam explicabo tempora ipsum, a veniam nisi eos laboriosam, totam voluptatem, laudantium optio eveniet sapiente odio incidunt quas velit.',
				},
				{
					question: 'oifhoeashjfouies',
					answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsa officiis ullam explicabo tempora ipsum, a veniam nisi eos laboriosam, totam voluptatem, laudantium optio eveniet sapiente odio incidunt quas velit.',
				},
			],
		}
	},
	components: {
		Accordion,
	}
}
</script>

<style scoped lang="scss">
@import './questions.scss';
</style>