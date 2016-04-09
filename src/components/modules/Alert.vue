<template>
<div v-if="show" transition="fade" class="Alert Alert--{{ type }}">
	<p>
		<span class="Alert__type">{{ type | capitalize }}!</span>
		<slot></slot>
		<span class="Alert__close" v-if="important" @click="closeAlert">&times;</span>
	</p>
</div>
</template>

<script>
export default {
	data () {
		return {
			show: true
		}
	},
	props: {
		type: {
			type: String,
			default: 'info'
		},
		important: {
			type: Boolean,
			default: false
		},
		delay: {
			type: Number,
			default: 3000
		}
	},
	methods: {
		closeAlert () {
			this.show = false
		}
	},
	ready () {
		var that = this
		setTimeout(function () {
			if (!that.important) {
				that.closeAlert()
			}
		}, this.delay)
	}
}
</script>

<style lang="scss" scoped>
.Alert {
	$bgColor: #7f8c8d;
	background: $bgColor;
	padding: 20px 20px;
	border-radius: 5px;
	border: 1px solid darken($bgColor, 30%);
	margin-bottom: 15px;
	position: relative;
	.Alert {
		margin-top: 15px;
	}
}
.Alert--success {
	$color: #2ecc71;
	color: darken($color, 10%);
	background: lighten($color, 40%);
	border: 1px solid lighten($color, 30%);
}
.Alert--info {
	$color: #3498db;
	color: darken($color, 10%);
	background: lighten($color, 40%);
	border: 1px solid lighten($color, 30%);
}
.Alert--warning {
	$color: #f1c40f;
	color: darken($color, 10%);
	background: lighten($color, 40%);
	border: 1px solid lighten($color, 30%);
}
.Alert--danger {
	$color: #e74c3c;
	color: darken($color, 10%);
	background: lighten($color, 40%);
	border: 1px solid lighten($color, 30%);
}
.Alert__type {
	font-weight: bold;
}
.Alert__close {
	cursor: pointer;
	position: absolute;
	right: 20px;
	top: 20px;
}
.fade-transition {
	transition: all 300ms ease-in-out;
	opacity: 1;
}
.fade-leave {
	opacity: 0;
}
</style>