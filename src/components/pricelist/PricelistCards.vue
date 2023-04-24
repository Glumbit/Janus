<template>
	<div class="pricelist__item" ref="carsd">
		<div class="cards__background">
			<img :src="require('../../assets/pricelist/' + priceData.image)" :alt="`card img`">
		</div>
		<div class="cards__inner">
			<div class="pricelist__order" ref="order">
				<div class="pricelist__inside">
					<div class="order__close" @click="close"><img src="../../assets/popup/close.png" alt=""></div>
					<div class="subarticle"> {{ priceData.title }} </div>
					<form action="#" class="order__form">
						<label class="checkbox" v-for="(elem,id) in priceData.additionalService" :key="id">
							<input type="checkbox" name="" class="checkbox__input"
								@change="addToCart(elem.servicePrice, id, priceData.additionalService.length)"
								ref="checkbox">
							<div class="checkbox__style">
							</div>
							<p class="subtitle">{{ elem.serviceName }}</p>
						</label>
					</form>
					<button class="pay btn subtitle" @click="send">Добавить в заказ</button>
				</div>
			</div>
			<div class="subarticle"> {{ priceData.title }} </div>
			<div class="cards__text subtitle"> {{ priceData.text }} </div>
			<ul class="cards__list">
				<li v-for="(elem,id) in priceData.mainService" :key="id" class="subtitle">
					{{ elem }}
				</li>
			</ul>
			<button class="cards__btn btn subtitle" @click="showOrder">Расщитать</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PricelistCards',
	data() {
		return {
			result: 0,
			isActive: [],
			isSended: false,
		}
	},
	props: {
		priceData: {
			type: Object,
		}
	},
	mounted() {
		this.$emit('setElementWidth', this.$refs.carsd.offsetWidth)

		let checkAmount = []
		for (let i = 0; i < this.priceData.additionalService.length; i++) {
			checkAmount[i] = false;
		}
		for (let i = 0; i < checkAmount.length; i++) {
			this.isActive[i] = checkAmount[i]
		}
	},
	methods: {
		showOrder() {
			this.$refs.order.style.transform = 'translateY(0px)'
		},
		close() {
			this.$refs.order.style.transform = 'translateY(-100%)'
		},
		addToCart(price, id) {
			for (let i = 0; i < this.isActive.length; i++) {
				if (i == id) {
					if (this.isActive[i] == true) {
						this.isActive[i] = false
						price = Number(price) - Number.EPSILON
						this.result -= Number(price.toFixed(2))
					}
					else {
						this.isActive[i] = true
						price = Number(price) + Number.EPSILON
						this.result += Number(price.toFixed(2))
					}
				}
			}
		},
		send() {
			if (!this.isSended) {
				this.result += Number(this.priceData.price)
				this.isSended = true
			}
			this.$emit('dataFomCard', this.result.toFixed(2), this.priceData.id, this.priceData.title)
		},
	}
}
</script>

<style scoped lang="scss">
@import './pricelist.scss';
@import './pricelistCards.scss';
</style>