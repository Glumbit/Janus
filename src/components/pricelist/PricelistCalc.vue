<template>
	<div class="calculator">
		<div class="calculator__inner subtitle">
			<div class="calulator__header subarticle">
				<div class="header__item">Название комнаты</div>
				<div class="header__item">Размеры конаты<span class="subtitle"><br>(если у вас несколько комнат введите
						общую
						площадь)</span></div>
				<div class="header__item">Сумма</div>
			</div>
			<div class="calculator__item" v-for="(el, id) in results" :key="id" ref="calcItem">
				<div class="calculator__title">{{ el.resTitle }}</div>
				<div class="roomsize">
					<label for="size">Размер комнаты</label>
					<input type="text" v-model="this.area[id]" @input="setPrice(id)" name="size">
				</div>
				<div class="calculator__result">{{ summ[id] }} руб.</div>
			</div>
			<div class="calculator__footer">
				<div class="addres">
					<div class="addres__item">
						<label for="city">Город*</label>
						<input type="text" name="city">
					</div>
					<div class="addres__item">
						<label for="street">Улица*</label>
						<input type="text" name="street">
					</div>
					<div class="addres__item">
						<label for="House">Дом*</label>
						<input type="text" name="House">
					</div>
					<div class="addres__item">
						<label for="apartment">Квартира</label>
						<input type="text" name="apartment">
					</div>
				</div>
				<div class="calculator__total">
					Итого: {{ total }} руб.
				</div>
			</div>
			<button class="btn subtitle">К оплате</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			summ: [],
			area: [],
			total: 0,
		}
	},
	props: {
		results: {
			type: Array,
		}
	},
	methods: {
		setPrice(id) {
			this.total = 0
			this.summ[id] = Number(this.area[id]) * Number(this.results[id].resPrice)
			for (let i = 0; i < this.summ.length; i++) {
				this.total += this.summ[i]
			}
		},
	},
}
</script>

<style lang="scss" scoped>
@import './pricelistCalc.scss';
</style>