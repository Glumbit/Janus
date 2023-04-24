<template>
	<div class="popup">
		<div class="popup__inner">
			<div class="popup__header">
				<span>popup name</span>
				<div class="popup__img"><img src="../../assets/popup/close.png" alt="close"></div>
			</div>
			<div class="popup__content">
				<slot></slot>
			</div>
			<div class="popup__footer">
				<button>Отмена</button>
				<button>Заказать</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {

	},
	data() {
		return {

		}
	},
	computed: {

	},
}
</script>

<style scoped lang="scss">
@import './popup.scss';
</style>