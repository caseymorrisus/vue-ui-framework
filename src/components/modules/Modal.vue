<template>
	<div class="Modal--wrapper" v-show="open">
		<div class="Modal" v-el:modal :style='{ top: modalTop, left: modalLeft }'>
			<div class="Modal--title">
				{{ title }}
				<span @click="closeModal()" class="Modal--close">&times;</span>
			</div>
			<div class="Modal--content">
				<slot></slot>
			</div>
		</div>
		<div class="Modal--mask"></div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			modalTop: '80px',
			modalLeft: '50px',
			open: false
		}
	},
	props: {
		title: {
			type: String,
			default: 'Modal'
		}
	},
	methods: {
		resizeModal () {
			var w = window.innerWidth
			var h = window.innerHeight
			var mw = this.$els.modal.offsetWidth
			var mh = this.$els.modal.offsetHeight
			console.log('Resizing Modal.')
			console.log('Window Width:', w)
			console.log('Window Height:', h)
			console.log('Modal Width:', mw)
			console.log('Modal Height:', mh)
			this.modalLeft = ((w / 2) - (mw / 2)) + 'px'
			this.modalTop = ((h / 2) - (mh / 2)) + 'px'
		},
		closeModal () {
			this.open = false
		},
		openModal () {
			this.open = true
			this.$nextTick(function () {
				this.resizeModal()
			})
		}
	},
	ready () {
		this.resizeModal()
	}
}
</script>

<style lang="scss" scoped>
.Modal--wrapper {
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
}
.Modal {
	background: #fff;
	border: 1px solid #555;
	position: fixed;
	width: 500px;
	z-index: 999999;
	line-height: 1.3;
	> div {
		padding: 20px;
	}
}
.Modal--close {
	float: right;
	cursor: pointer;
	padding: 0px 5px;
}
.Modal--mask {
	background: rgba(0,0,0,0.6);
	position: fixed;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	z-index: 99999;
}
.Modal--title {
	background: #ddd;
	border-bottom: 1px solid #ccc;
}
</style>