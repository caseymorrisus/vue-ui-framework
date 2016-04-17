<template>
<div class="Dropdown">
	<button @click="toggle()" class="Dropdown--toggle">
		<span class="Dropdown--title">{{title}}</span><span class="Dropdown--arrow">▼</span>
	</button>
	<ul v-show="open" class="Dropdown--content">
		<slot></slot>
	</ul>
</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: 'Dropdown'
		},
		open: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		toggle () {
			this.open = !this.open
		}
	}
}
</script>

<style lang="scss">
$hoverColor: #222;
.Dropdown {
	position: relative;
	width: 200px;
	margin-bottom: 15px;
}
.Dropdown--toggle {
	position: relative;
	display: block;
	width: 100%;
	border: 1px solid #000;
	padding: 7px 25px 10px 10px;
	outline: none;
	user-select: none;
	cursor: pointer;
	margin-bottom: 5px;
	text-align: left;
	vertical-align: middle;
	&::-moz-focus-inner {
		border: 0;
	}
}
.Dropdown--title {
	vertical-align: middle;
	margin-right: 10px;
}
.Dropdown--arrow {
	position: absolute;
	right: 15px;
	top: 13px;
	font-size: 0.5em;
	vertical-align: middle;
}
.Dropdown--content {
	border: 1px solid #000;
	position: absolute;
	width: 100%;
	background: #fff;
	z-index: 9999;
}
.Item {
	svg {
		fill: #888;
	}
	&:hover {
		a {
			color: #222;
		}
		svg {
			fill: $hoverColor;
		}
	}
	&.active {
		a {
			color: #222;
		}
		svg {
			fill: $hoverColor;
		}
	}
	span {
		display: inline-block;
		vertical-align: middle;
	}
	.Icon {
		svg {
			width: 20px;
		}
		margin-right: 5px;
	}
}
.Item--link {
	position: relative;
	color: #888;
	text-decoration: none;
	padding: 10px;
	display: block;
	padding-right: 20px;
	.Badge {
		position: absolute;
		right: 15px;
	}
}
</style>