<template>
<div class="Progress">
	<div 
		class="Progress__current"
		:style="{ width: currentWidth + '%', background: bgColor }"
	>
	</div>
</div>
</template>

<script>
export default {
	props: {
		min: {
			type: Number,
			default: 0
		},
		max: {
			type: Number,
			default: 100
		},
		current: {
			type: Number,
			default: 5
		},
		bgColor: {
			type: String,
			default: '#222'
		}
	},
	computed: {
		currentWidth () {
			return (this.current / this.max) * 100
		}
	}
}
</script>

<style lang="scss" scoped>
.Progress {
	background: #efefef;
	height: 10px;
	margin-bottom: 15px;
}
.Progress__current {
	background: tomato;
	height: 100%;
}
</style>