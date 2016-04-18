<template>
<div class="Card">
	<div class="Card--inner">
		<div class="Card--image">
			<img src="http://placeimg.com/225/225/any">
		</div>
		<div class="Card--content">
			<h3 class="Card--header">
				Kristy
			</h3>
			<h4 class="Card--sub-header">
				Joined in 2013
			</h4>
			<p class="Card--text">
				Kristy is an art director living in New York.
			</p>
		</div>
		<div class="Card--extra">
			<icon src="users" color="#888"></icon>
			<span class="Card--extra--text">
				22 Friends
			</span>
		</div>
	</div>
</div>
</template>

<script>
export default {
	data () {
		return {
			// data goes here
		}
	}
}
</script>

<style lang="scss" scoped>
.Card {
	flex: 1;
	flex-basis: 250px;
	margin: auto;
	padding:0 5px;
	margin-bottom: 10px;
	&:last-of-type {
		margin-right: 0;
	}
}
.Card--inner {
	border: 1px solid #222;
	border-radius: 4px;
	overflow: hidden;
}
.Card--image {
	img {
		width: 100%;
	}
}
.Card--content {
	padding: 10px;
}
.Card--header {

}
.Card--sub-header {
	color: #888;
	margin-bottom: 10px;
	font-size: 0.8em;
}
.Card--text {

}
.Icon {
	vertical-align: middle;
	display: inline-block;
	&:hover {
		svg {
			fill: red !important;
		}
	}
	svg {
		&:hover {
			fill: #888;
		}
	}
}
.Card--extra {
	padding: 10px;
	border-top: 1px solid #ddd;
	font-size: 0.8em;
}
.Card--extra--text {
	vertical-align: middle;
	display: inline-block;
	color: #888;
}
</style>