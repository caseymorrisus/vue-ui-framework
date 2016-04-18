<template>
<button class="Button">
	<slot></slot>
</button>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
$color: #666;
$hoverColor: #222;
.Button {
	border: 2px solid $color;
	color: $color;
	padding: 10px 20px;
	text-transform: uppercase;
	user-select: none;
	outline: none;
	cursor: pointer;
	transition: 200ms all ease-in-out;
	&:hover {
		color: $hoverColor;
		border-color: $hoverColor;
	}
	&::-moz-focus-inner {
		border: 0;
	}
}
</style>