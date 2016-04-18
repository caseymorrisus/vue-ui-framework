<template>
<div class="Slide" v-show="active">
	<h2 class="Slide--title">
		{{ title }}
	</h2>
</div>
</template>

<script>
export default {
	data () {
		return {
			// data goes here
		}
	},
	props: {
		active: {
			type: Boolean,
			default: false
		},
		title: {
			type: String,
			default: 'Slide Title'
		}
	}
}
</script>

<style lang="scss" scoped>
$slide-height: 300px;
.Slide {
	background: #efefef;
	height: $slide-height;
	line-height: $slide-height;
	text-align: center;
}
.Slide--title {
	text-transform: uppercase;
	font-size: 2em;
	font-weight: 100;
	color: #444;
}
</style>