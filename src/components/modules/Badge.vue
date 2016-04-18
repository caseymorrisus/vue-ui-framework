<template>
<div class="Badge" :style="{background: bg, color: color}">
	{{ num }}
</div>
</template>

<script>
export default {
	props: {
		bg: {
			type: String,
			default: '#222'
		},
		color: {
			type: String,
			default: '#fff'
		},
		num: {
			type: [String, Number],
			default: 0
		}
	}
}
</script>

<style lang="scss" scoped>
$size: 20px;
.Badge {
	display: inline-block;
	padding: 0px 7px;
	border-radius: ($size / 2);
	// width: $size;
	height: $size;
	line-height: $size;
	text-align: center;
	font-size: 12px;
	font-weight: 500;
	user-select: none;
	cursor: default;
}
</style>