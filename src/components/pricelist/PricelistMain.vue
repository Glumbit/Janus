<template>
	<div class="pricelist">
		<div class="container">
			<div class="pricelist__inner">
				<div class="pricelist__article article">Наши услуги</div>
				<SliderMain @dataFromSlider="fromSlider" />
				<PricelistCalc :results="results" />
			</div>
		</div>
	</div>
</template>

<script>
import SliderMain from './PricelistSlider.vue'
import PricelistCalc from './PricelistCalc.vue'
export default {
	name: 'PricelistMain',
	components: {
		SliderMain,
		PricelistCalc,
	},
	data() {
		return {
			results: [],
		}
	},
	methods: {
		fromSlider(results) {
			if (this.results.length == 0) {
				this.results.push(results[0])
				return
			}
			let similar
			for (let i = 0; i < results.length; i++) {
				similar = false
				for (let j = 0; j < this.results.length; j++) {
					if (results[i].resId == this.results[j].resId) {
						similar = true
						this.results[j] = results[i]
					}
				}
				if (!similar) {
					this.results.push(results[i])
				}
			}
		},
	}
}
</script>

<style lang="scss" scoped>
@import './pricelist.scss';
</style>