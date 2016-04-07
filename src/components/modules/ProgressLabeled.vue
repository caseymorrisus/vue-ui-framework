<template>
<div class="Progress--Labeled">
	<div class="Progress--Labeled__labels">
		<span class="Progress--Labeled__title" v-if="title">
			{{ title }}
		</span>
		<span class="Progress--Labeled__amount">
			<template v-if="!percent">
				<strong>{{ current }}</strong>/{{ max }}
			</template>
			<template v-else>
				<strong>{{ currentWidth + '%' }}</strong>
			</template>
		</span>
	</div>
	<progress
		:min="min"
		:max="max"
		:current="current"
		:bg-color="bgColor"
	>
	</progress>
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
		},
		title: {
			type: String
		},
		percent: {
			type: Boolean,
			default: false
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
.Progress--Labeled__labels {
	margin-bottom: 5px;
	font-size: 0.8em;
	&:after {
		content: "";
		display: table;
		clear: both;
	}
}
.Progress--Labeled__amount {
	float: right;
}
</style>