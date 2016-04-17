<template>
<div class="Avatar" :style="{background: bg, color: color}" :class="{ 'disabled': disabled }">
	<template v-if="!src">
		<slot></slot>
	</template>
	<template v-if="src">
		<img :src="src" v-if="src">
	</template>
	<template v-if="icon">
		<icon :src="icon" :color="iconColor" :hover="iconHover"></icon>
	</template>
</div>
</template>

<script>
export default {
	props: {
		bg: {
			type: String
		},
		color: {
			type: String,
			default: '#EDE7F6'
		},
		src: {
			type: String
		},
		disabled: {
			type: Boolean,
			default: false
		},
		icon: {
			type: String
		},
		iconColor: {
			type: String
		},
		iconHover: {
			type: String
		}
	}
}
</script>

<style lang="scss">
$size: 50px;
.Avatar {
	display: inline-block;
	margin-right: 5px;
	margin-bottom: 15px;
	width: $size;
	height: $size;
	border-radius: 50%;
	font-size: 2em;
	text-align: center;
	line-height: $size;
	user-select: none;
	cursor: default;
	background: none;
	color: #fff;
	overflow: hidden;
	&.disabled {
		background: #ccc !important;
		color: #555 !important;
		svg {
			fill: #555 !important;
		}
		&:hover {
			svg {
				fill: #555 !important;
			}
		}
	}
	img {
		border-radius: 50%;
	}
	> .Icon {
		svg {
			width: 30px;
			height: 50px;
		}
	}
}
</style>