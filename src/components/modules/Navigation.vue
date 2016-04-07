<template>
	<nav>
		<a v-link="{ path: '/', exact: true }"><icon src="home"></icon><span>Home</span></a>
		<a v-link="{ path: '/preview'}"><icon src="heart"></icon><span>Preview</span></a>
	</nav>
</template>

<script>
export default {
	data () {
		return {
			// stuff
		}
	}
}
</script>

<style lang="scss" scoped>
$mainColor: #1abc9c;
$bgColor: #333;
nav {
	position: absolute;
	width: 250px;
	min-height: 100%;
	background: $bgColor;
}
a {
	display: block;
	text-decoration: none;
	padding: 15px 20px;
	border-left: 5px solid $bgColor;
	color: #888;
	span {
		display: inline-block;
		vertical-align: middle;
	}
}
a:hover,
.v-link-active {
	background: #222;
	border-left: 5px solid $mainColor;
}
</style>
