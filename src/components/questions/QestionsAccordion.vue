<template>
	<div class="accordion">
		<div class="accordion__item" v-for="(el, id) in accordionData" :key="id" @click="show(id)">
			<div class="accordion__title subarticle">{{ el.question }} <img src="../../assets/pricelist/arrow.png"
					alt="arrow" ref="accordionImg"></div>
			<div class="accordion__subtitle subtitle" ref="accordionSubtitle">{{ el.answer }}</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		accordionData: {
			type: Object,
		}
	},
	methods: {
		show(id) {
			// Если нужно что бы был открыт только один блок

			// let prew
			// for (let i = 0; i < this.$refs.accordionImg.length; i++) {
			// 	const img = this.$refs.accordionImg[i]
			// 	const subtitle = this.$refs.accordionSubtitle[i]
			// 	if (subtitle.style.height == '100%') {
			// 		subtitle.style.height = '0px'
			// 		img.style.transform = 'translateY(-50%)'
			// 		prew = i
			// 	}
			// 	if (i == id && prew != i) {
			// 		subtitle.style.height = '100%'
			// 		img.style.transform = 'rotate(180deg) translateY(50%)'
			// 	}
			// 	
			// }

			for (let i = 0; i < this.$refs.accordionImg.length; i++) {
				const img = this.$refs.accordionImg[i]
				const subtitle = this.$refs.accordionSubtitle[i]
				if (i == id) {
					if (subtitle.style.height == '100%') {
						subtitle.style.height = '0px'
						img.style.transform = 'translateY(-50%)'
						return
					}
					subtitle.style.height = '100%'
					img.style.transform = 'rotate(180deg) translateY(50%)'
				}
			}
		},
	},
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/accordion/accordion.scss';
</style>