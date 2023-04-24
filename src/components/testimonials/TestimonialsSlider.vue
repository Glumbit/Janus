<template>
	<div class="slider__wrapper">
		<div class="slider__content cards" :style="`transform: translateX(${move}px)`">
			<TestimonialsCards v-for="(el, index) in testimonialsData" :key="index" :testimonialsData="el"
				@setElementWidth="elementWidth" />
		</div>
		<div class="slider__controll">
			<button class="slider__arrow btn" @click="moveBackward"><img src="../../assets/pricelist/arrow.png"
					alt="arrow"></button>
			<div class="slider__dot" v-for="(element, id) in testimonialsData" :key="id" ref="sliderDot"
				@click="clickDot(id)">
			</div>
			<button class="slider__arrow btn" @click="moveForward"><img src="../../assets/pricelist/arrow.png"
					alt="arrow"></button>
		</div>
	</div>
</template>

<script>
import TestimonialsCards from './TestimonialsCards.vue'
export default {
	data() {
		return {
			move: '',
			dotCounter: 0,
			elwidth: 0,
			testimonialsData: [
				{
					image: '1.png',
					name: 'hiqawhdihawidhawi waohjdoawjdoa',
					text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore aliquam impedit voluptatum, corrupti exercitationem dolorem eos reiciendis optio minima asperiores aliquid perferendis dolorum maiores culpa quibusdam veniam voluptas? Quos, voluptates?',
					rating: 2,
				},
				{
					image: '1.png',
					name: 'hiqawhdihawidhawi waohjdoawjdoa',
					text: 'hawidhoawhdoawhdohawodhoawdhohdouawhd',
					rating: 4,
				},
				{
					image: '1.png',
					name: 'hiqawhdihawidhawi waohjdoawjdoa',
					text: 'hawidhoawhdoawhdohawodhoawdhohdouawhd',
					rating: 4,
				},
				{
					image: '1.png',
					name: 'hiqawhdihawidhawi waohjdoawjdoa',
					text: 'hawidhoawhdoawhdohawodhoawdhohdouawhd',
					rating: 4,
				},
			]

		}
	},
	components: {
		TestimonialsCards,
	},
	methods: {
		elementWidth(data) {
			this.elwidth = data + 50
		},
		moveBackward() {
			let sliderwidth = Number(this.testimonialsData.length) - 1
			let dots = this.$refs.sliderDot
			if (Number(this.move) >= 0) {
				this.move = String(sliderwidth * - this.elwidth)
				dots[this.dotCounter].style.background = '#000000'
				this.dotCounter = dots.length - 1
				dots[this.dotCounter].style.background = '#ffffff'
				return
			}
			this.dotCounter--
			for (const key in dots) {
				if (Object.hasOwnProperty.call(dots, key)) {
					const element = dots[key];
					element.style.background = '#000000'
					if (Number(key) == this.dotCounter) {
						element.style.background = '#ffffff'
					}
				}
			}
			this.move = String(Number(this.move) + this.elwidth)
		},
		moveForward() {
			let sliderwidth = Number(this.testimonialsData.length) - 1
			let dots = this.$refs.sliderDot
			if (Number(this.move) <= sliderwidth * - this.elwidth) {
				this.move = '0'
				dots[this.dotCounter].style.background = '#000000'
				this.dotCounter = 0
				dots[this.dotCounter].style.background = '#ffffff'
				return
			}
			this.dotCounter++
			for (const key in dots) {
				if (Object.hasOwnProperty.call(dots, key)) {
					const element = dots[key];
					element.style.background = '#000000'
					if (Number(key) == this.dotCounter) {
						element.style.background = '#ffffff'
					}
				}
			}
			this.move = String(Number(this.move) - this.elwidth)
		},
		clickDot(id) {
			let dots = this.$refs.sliderDot
			for (const key in dots) {
				if (Object.hasOwnProperty.call(dots, key)) {
					const element = dots[key];
					element.style.background = '#000000'
				}
			}
			this.$refs.sliderDot[id].style.background = '#ffffff'
			this.dotCounter = id
			this.move = String(this.elwidth * -id)
		},
	},
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/slider/slider.scss';
@import './testimonialSlider.scss';
</style>