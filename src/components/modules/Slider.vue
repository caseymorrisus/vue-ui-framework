<template>
<div class="Slider">
	<div class="Slider--prev" @click="prevSlide()">
		<
	</div>
	<slot></slot>
	<div class="Slider--next" @click="nextSlide()">
		>
	</div>
</div>
</template>

<script>
export default {
	data () {
		return {
			currentSlide: 0
		}
	},
	components: {
	},
	ready () {
		var slides = this.$children
		for (var i = 0; i < slides.length; i++) {
			if (slides[i].active === true) {
				console.log(i)
				this.currentSlide === i
				break
			}
		}
		slides[this.currentSlide].active = true
		console.log('Current Slide:', this.currentSlide)
	},
	methods: {
		nextSlide () {
			var currentSlide = this.currentSlide
			var nextSlide = currentSlide + 1
			if (nextSlide >= this.$children.length) {
				console.log('No next item.')
			} else {
				this.changeSlide(currentSlide, nextSlide)
				this.currentSlide = nextSlide
			}
		},
		prevSlide () {
			var currentSlide = this.currentSlide
			var prevSlide = currentSlide - 1
			if (prevSlide < 0) {
				console.log('No previous item.')
			} else {
				this.changeSlide(currentSlide, prevSlide)
				this.currentSlide = prevSlide
			}
		},
		changeSlide (original, updated) {
			var slides = this.$children
			slides[original].active = false
			slides[updated].active = true
		}
	}
}
</script>

<style lang="scss" scoped>
$slider-height: 300px;
.Slider {
	position: relative;
	border: 1px solid #777;
	border-radius: 4px;
	height: $slider-height;
	overflow: hidden;
}
.Slider--next,
.Slider--prev {
	position: absolute;
	width: 50px;
	height: $slider-height;
	color: #222;
	line-height: $slider-height;
	text-align: center;
	background: #fff;
	opacity: 0.5;
	transition: 200ms all ease-out;
	cursor: pointer;
	user-select: none;
	&:hover {
		opacity: 1;
	}
}
.Slider--next {
	top: 0;
	right: 0;
	border-left: 1px solid #ddd;
}
.Slider--prev {
	top: 0;
	left: 0;
	border-right: 1px solid #ddd;
}
</style>