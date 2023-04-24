<template>
  <MainHeader :navData="navData" />
  <introMain />
  <PricelistMain />
  <CompanyMain />
  <TestimonialsMain />
  <QuestionsMain />
  <FooterMain />
</template>

<script>
import MainHeader from './components/header/MainHeader.vue'
import introMain from './components/intro/IntroMain.vue'
import PricelistMain from './components/pricelist/PricelistMain.vue'
import CompanyMain from './components/company/CompanyMain.vue'
import TestimonialsMain from './components/testimonials/TestimonialsMain.vue'
import QuestionsMain from './components/questions/QuestionsMain.vue'
import FooterMain from './components/footer/FooterMain.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
    introMain,
    PricelistMain,
    CompanyMain,
    TestimonialsMain,
    QuestionsMain,
    FooterMain,
  },
  data() {
    return {
      navData: ['Вводная', 'Прайслист', 'Юр. лица', 'Отзывы', 'Вопросы',],
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500&family=Satisfy&display=swap');
@import './assets/scss/global/global.scss'
</style>
