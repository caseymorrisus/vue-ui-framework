<template>
<div class="test-container">
	<headline sub="Slider component for displaying groups of slides">
		Slider
	</headline>
	<slider>
		<slide title="Slide 1"></slide>
		<slide title="Slide 2"></slide>
		<slide title="Slide 3"></slide>
		<slide title="Slide 4"></slide>
		<slide title="Slide 5"></slide>
	</slider>
</div>
</template>

<script>
export default {
	data () {
		return {
			// stuff
		}
	},
	components: {

	},
	methods: {

	},
	created () {
		document.title = 'UI Framework - Preview 2'
	},
	ready () {

	}
}
</script>

<style lang="scss" scoped>

</style>