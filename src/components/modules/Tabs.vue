<template>
<div class="Tabs-container">
	<ul class="Tabs">
		<li 
			v-for="tab in tabData"
			:class="{'active': ($index === active)}"
			@click.prevent="handleTabClicked($index, tab)"
		>
			<slot name="title">
				{{{tab.title}}}
			</slot>
		</li>
	</ul>
	<div class="Tabs__content">
		<slot></slot>
	</div>
</div>
</template>

<script>
import Tab from './Tab'
export default {
	data () {
		return {
			tabData: []
		}
	},
	components: {
		Tab
	},
	props: {
		active: {
			type: Number,
			default: 0
		}
	},
	methods: {
		handleTabClicked (index, el) {
			this.active = index
		}
	}
}
</script>

<style lang="scss" scoped>
$mainColor: #222;
$fontColor: #efefef;
$strokeWidth: 2px;
h1 {
	margin-bottom: 10px;
}
.Tabs li {
	color: $fontColor;
	display: inline-block;
	background: $mainColor;
	margin-right: 5px;
	padding: 10px 15px;
	border-radius: 2px 2px 0 0;
	border: $strokeWidth solid transparent;
	border-bottom: none;
	cursor: pointer;
	user-select: none;
	&.active {
		color: $mainColor;
		background: none;
		border: $strokeWidth solid $mainColor;
		border-bottom: none;
	}
}
.Tabs__content {
	border: $strokeWidth solid $mainColor;
	padding: 20px 25px;
	border-radius: 0px 2px 2px 2px;
	line-height: 1.5em;
	margin-bottom: 15px;
}
</style>