<template>
<div class="Toggle">
	<h3 class="Toggle__title" @click="toggleContent()" :class="toggleClass">
		{{ title }}
	</h3>
	<div class="Toggle__content" v-show="show">
		<slot></slot>
	</div>
</div>

</template>

<script>
export default {
	data () {
		return {
			show: false
		}
	},
	props: {
		title: {
			type: String,
			required: true
		},
		important: {
			type: Boolean,
			required: false,
			default: false
		}
	},
	methods: {
		toggleContent () {
			this.show = !this.show
		}
	},
	computed: {
		toggleClass () {
			if (this.show) {
				return 'active'
			}
		}
	},
	created () {
		if (this.important) {
			this.show = true
		}
	}
}
</script>

<style lang="scss" scope>
.Toggle {
	margin-bottom: 15px;
	.Toggle {
		padding-left: 25px;
		margin-top: 15px;
	}
}
.Toggle__title {
	cursor: pointer;
	&:after {
		content: ' [+]'
	}
	&.active {
		&:after {
		content: ' [-]'
	}
	}
}
</style>