<template>
<div class="Headline">
	<h1>
		<slot></slot>
	</h1>
	<p v-if="sub">
		{{ sub }}
	</p>
</div>
</template>
<script>
export default {
	data () {
		return {
			// stuff
		}
	},
	props: {
		sub: {
			type: String,
			require: false
		}
	}
}
</script>
<style lang="scss" scoped>
h1 {
	margin-bottom: 15px;
}
p {
	margin-bottom: 15px;
}
</style>