<template>
	<div class="testimonials__item" ref="carsd">
		<div class="testimonials__img"><img :src="require('../../assets/testimonials/' + testimonialsData.image)"
				alt="card img">
		</div>
		<div class="testimonials__text">
			<div class="testimonials__name subarticle">{{ testimonialsData.name }}</div>
			<div class="cards__text subtitle">{{ testimonialsData.text }}</div>
			<div class="rating">
				<img src="../../assets/testimonials/star.png" alt="star" v-for="(el, id) in ratingAmount" :key="id">
				<img src="../../assets/testimonials/starEmpty.png" alt="star empty" v-for="(el, id) in ratingRest"
					:key="id">
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		testimonialsData: {
			type: Object
		}
	},
	data() {
		return {
			ratingAmount: [],
			ratingRest: [],
		}
	},
	mounted() {
		this.$emit('setElementWidth', this.$refs.carsd.offsetWidth)
		if (this.testimonialsData.rating <= 5 && this.testimonialsData.rating > 0) {
			for (let i = 0; i < this.testimonialsData.rating; i++) {
				this.ratingAmount += ' '
			}
			let temp = 5 - this.ratingAmount.length;
			for (let i = 0; i < temp; i++) {
				this.ratingRest += ' '
			}
		}
		if (this.testimonialsData.rating <= 0) {
			this.ratingAmount += ' '
			let temp = 5 - this.ratingAmount.length;
			for (let i = 0; i < temp; i++) {
				this.ratingRest += ' '
			}
		}
		if (this.testimonialsData.rating > 5) {
			for (let i = 0; i < 5; i++) {
				this.ratingAmount += ' '
			}
		}
	}
}
</script>

<style scoped lang="scss">
@import './testimonialsCards.scss';
</style>