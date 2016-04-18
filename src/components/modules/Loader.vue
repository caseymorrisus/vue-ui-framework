<template>
<div class="Loader" v-show="active">
	<div class="Loader--svg">
		<svg :width="size" :height="size" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" :stroke="color">
			<g fill="none" fill-rule="evenodd">
				<g transform="translate(1 1)" stroke-width="2">
					<circle stroke-opacity=".5" cx="18" cy="18" r="18"/>
					<path d="M36 18c0-9.94-8.06-18-18-18">
						<animateTransform
							attributeName="transform"
							type="rotate"
							from="0 18 18"
							to="{{direction}} 18 18"
							dur="{{duration}}"
							repeatCount="{{repeatCount}}"/>
					</path>
				</g>
			</g>
		</svg>
	</div>
	<div class="Loader--text" :style="{fontSize: textSize}">
		{{ text }}
	</div>
</div>
</template>

<script>
export default {
	props: {
		color: {
			type: String,
			default: '#000'
		},
		size: {
			type: [String, Number],
			default: 38
		},
		reverse: {
			type: Boolean,
			default: false
		},
		repeatCount: {
			type: [String, Number],
			default: 'indefinite'
		},
		duration: {
			type: String,
			default: '1s'
		},
		text: {
			type: String,
			default: 'Loading'
		},
		textSize: {
			type: String,
			default: '1em'
		},
		active: {
			type: Boolean,
			default: true
		}
	},
	computed: {
		direction () {
			if (this.reverse) {
				return -360
			} else {
				return 360
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.Loader {
	display: inline-block;
	vertical-align: middle;
	text-align: center;
	margin-bottom: 15px;
	user-select: none;
}
.Loader--svg {
	display: block;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 5px;
}
</style>