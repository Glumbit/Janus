<template>
	<div class="testimonials">
		<div class="container">
			<div class="testimonials__inner">
				<TestimonialsSlider />
			</div>
		</div>
	</div>
</template>

<script>
import TestimonialsSlider from './TestimonialsSlider.vue'
export default {
	components: {
		TestimonialsSlider,
	}
}
</script>

<style scoped lang="scss">
@import './testomonilas.scss';
</style>