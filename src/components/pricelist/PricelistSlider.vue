<template>
	<div class="slider__wrapper">
		<div class="slider__content cards" :style="`transform: translateX(${move}px)`">
			<PricelistCards v-for="(el, index) in priceData" :key="index" :priceData="el"
				@setElementWidth="elementWidth" @dataFomCard="fromCard" />
		</div>
		<div class="slider__controll">
			<button class="slider__arrow btn" @click="moveBackward"><img src="../../assets/pricelist/arrow.png"
					alt="arrow"></button>
			<div class="slider__dot" v-for="(element, id) in priceData" :key="id" ref="sliderDot" @click="clickDot(id)">
			</div>
			<button class="slider__arrow btn" @click="moveForward"><img src="../../assets/pricelist/arrow.png"
					alt="arrow"></button>
		</div>
	</div>
</template>

<script>
import PricelistCards from '../pricelist/PricelistCards.vue';
export default {
	data() {
		return {
			move: '',
			dotCounter: 0,
			elwidth: 0,
			results: [],
			priceData: [
				{
					id: 1,
					image: 'pricelist-card-image1.png',
					title: 'Кухня',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel delectus maiores excepturi exercitationem officia blanditiis ad nesciunt. Necessitatibus, ad soluta.',
					mainService: [
						'фыроващфыуроващро', 'фыроващфыуроващро', 'фыроващфыуроващро', 'фыроващфыуроващро',
					],
					additionalService: [
						{
							serviceName: 'Окна',
							servicePrice: '15',
						},
						{
							serviceName: 'hiowahudiawd',
							servicePrice: '10',
						},
					],
					price: '500',
				},
				{
					id: 2,
					image: 'pricelist-card-image2.png',
					title: 'Ванная',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel delectus maiores excepturi exercitationem officia blanditiis ad nesciunt. Necessitatibus, ad soluta.',
					mainService: [
						'фыроващфыуроващро', 'фыроващфыуроващро', 'фыроващфыуроващро', 'фыроващфыуроващро',
					],
					additionalService: [
						{
							serviceName: 'Окна',
							servicePrice: '1.2',
						},
						{
							serviceName: 'hiowahudiawd',
							servicePrice: '1.5',
						},
					],
					price: '5'
				},
				{
					id: 3,
					image: 'pricelist-card-image3.png',
					title: 'Гостинная',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel delectus maiores excepturi exercitationem officia blanditiis ad nesciunt. Necessitatibus, ad soluta.',
					mainService: [
						'фыроващфыуроващро', 'фыроващфыуроващро', 'фыроващфыуроващро', 'фыроващфыуроващро',
					],
					additionalService: [
						{
							serviceName: 'Окна',
							servicePrice: '1.2',
						},
						{
							serviceName: 'hiowahudiawd',
							servicePrice: '1.5',
						},
					],
					price: '3',
				},
				{
					id: 4,
					image: 'pricelist-card-image2.png',
					title: 'Ванная',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel delectus maiores excepturi exercitationem officia blanditiis ad nesciunt. Necessitatibus, ad soluta.',
					mainService: [
						'фыроващфыуроващро', 'фыроващфыуроващро', 'фыроващфыуроващро', 'фыроващфыуроващро',
					],
					additionalService: [
						{
							serviceName: 'Окна',
							servicePrice: '1.2',
						},
						{
							serviceName: 'hiowahudiawd',
							servicePrice: '1.5',
						},
					],
					price: '5'
				},
			]

		}
	},
	components: {
		PricelistCards,
	},
	methods: {
		elementWidth(data) {
			this.elwidth = data + 40
		},
		moveBackward() {
			let sliderwidth = Number(this.priceData.length) - 1
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
			let sliderwidth = Number(this.priceData.length) - 1
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
		fromCard(price, id, title) {
			if (this.results.length == 0) {
				this.results[0] = {
					resPrice: price,
					resId: id,
					resTitle: title,
				}
				this.fromSlider()
				return
			}
			for (let i = 0; i < this.results.length; i++) {
				if (this.results[i].resId != id) {
					this.results[this.results.length] = {
						resPrice: price,
						resId: id,
						resTitle: title,
					}
				}
				else {
					this.results[i].resPrice = price
					this.results[i].resId = id
					this.results[i].resTitle = title
				}

			}
			this.fromSlider()
		},
		fromSlider() {
			this.$emit('dataFromSlider', this.results)
		}
	},
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/slider/slider.scss';
</style>