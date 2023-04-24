<template>
	<div class="intro" @mouseenter="log">
		<img class="intro-background" src="../../assets/intro/intro-background.png" alt="">
		<div class="intro__inner">
			<div class="intro__content">
				<div class="subarticle">
					Lorem ipsum dolor sit amet.
				</div>
				<div class="subtitle">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate veritatis, vitae praesentium
					dolor neque saepe! Laborum aperiam doloremque, voluptate consectetur maiores earum eligendi sint?
					Maxime laboriosam repellendus accusantium sit autem. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Possimus perspiciatis culpa tempora illum minus quae dolores provident animi
					sapiente ratione id reprehenderit numquam quo quia, laudantium nostrum vitae! Qui, iusto?
				</div>
				<div class="intro__cards cards">
					<div class="cards__item" v-for="(el, index) in cardData" :key="index">
						<div class="card--move" style="transform: translateY(-100%); opacity: 0;">
							<img class="cards__img" :src="el.img" :alt="`card img ${index}`">
							<div class="cards__subarticle subarticle"> {{ el.advantage }} </div>
							<div class="subtitle"> {{ el.text }} </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'IntroMain',
	data() {
		return {
			cardStyle: {
				translate: '-100',
				opasity: '0',
			},
			mainColors: {
				blue: '#d5efe9',
				black: '#000000',
				white: '#ffffff',
			},
			additionalColors: {
				additional1: '#D3EEF8',
				additional2: '#B8D8D9',
				additional3: '#B8D9C7',
				additional4: '#D3F8D9',
				additional5: '#F0CCD3',
				additional6: '#A38389',
			},
			cardData: [
				{
					img: require('../../assets/light/cleaning-light1.png'),
					advantage: 'Скорость',
					text: 'Избавим вас от грязи за 2 часа',
				},
				{
					img: require('../../assets/light/cleaning-light2.png'),
					advantage: 'Качество',
					text: 'Чистим даже в самых труднодоступных местах ',
				},
				{
					img: require('../../assets/light/cleaning-light3.png'),
					advantage: 'Покрытие',
					text: 'Приедем в любое место в пределах Новоросийска',
				},
				{
					img: require('../../assets/light/cleaning-light4.png'),
					advantage: 'Персонал',
					text: 'Добросовестные сотрудники',
				},
			]
		}
	},
}
</script>

<style lang="scss" scoped>
@import './Intro.scss';
</style>