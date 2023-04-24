<template>
	<header class="header">
		<div class="header__inner">
			<div class="logo">
				<div class="subtitle">{{ phoneNumber }}</div>
				<div class="logo__inner">
					<div class="logo__img">
						<img src="../../assets/light/janus-light.png" alt="logo">
					</div>
					<p class="logo__text">Janus</p>
				</div>
				<div class="subtitle">{{ email }}</div>
			</div>
			<nav class="nav">
				<div class="nav__inner">
					<div class="nav__item subtitle" v-for="(el, index) in navData" :key="index">
						{{ el }}
					</div>
				</div>
			</nav>
		</div>
	</header>
</template>

<script>
export default {
	name: 'MainHeader',
	data() {
		return {
			phoneNumber: '8(934)956-26-83',
			email: 'fshjiofjopsejfo@oijawd.riopt'
		}
	},
	props: ['navData'],
}
</script>

<style lang="scss" scoped>
@import './header.scss';
</style>