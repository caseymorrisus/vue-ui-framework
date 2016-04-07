<template>
	<div class="Tabs__tab" v-show="show">
		<slot></slot>
	</div>
</template>

<script>
export default {
	data () {
		return {
			index: 0,
			show: false
		}
	},
	computed: {
		show () {
			return (this.$parent.active === this.index)
		}
	},
	props: {
		title: {
			type: String,
			required: true
		}
	},
	created () {
		this.$parent.tabData.push({
			title: this.title
		})
	},
	ready () {
		for (var child in this.$parent.$children) {
			if (this.$parent.$children[child].$el === this.$el) {
				this.index = Number(child)
				break
			}
		}
	}
}
</script>

<style lang="scss">
.Tabs__tab {
	display: inline-block;
}
</style>