<template>
	<div class="wrapper">
		<navigation></navigation>
		<div class="wrapper__inner">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import Navigation from './components/modules/Navigation'

export default {
	components: {
		Navigation
	},
	replace: false,
	data () {
		return {
			pageTitle: 'UI Framework',
			titleBase: 'UI Framework'
		}
	},
	computed: {
		fullTitle () {
			return this.titleBase + ' - ' + this.pageTitle
		}
	},
	events: {
		'change-title': function (pageTitle) {
			this.pageTitle = pageTitle
		}
	},
	ready () {
		this.pageTitle = this.titleBase
	}
}
</script>

<style lang="scss">
html {
	box-sizing: border-box;
}
*, *:before, *:after {
	box-sizing: inherit;
}
body {
	font-family: -apple-system, ".SFNSText-Regular", "San Francisco", "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif;
	font-family: 'Roboto', sans-serif;
	
}
.wrapper {
	background: #333;
}
.wrapper__inner {
	background: #ffffff;
	padding: 25px 50px;
	margin-left: 250px;
}
table {
	margin-bottom: 1em;
}
td {
	padding: 10px 15px;
}
tr {
	margin-bottom: 1px;
}
tr:nth-of-type(even) {
	background: #ddd;
}
tr:nth-of-type(odd) {
	background: #efefef;
}
tr:first-of-type {
	background: transparent;
}
strong {
	font-weight: bold;
}
.table__titles {
	font-weight: bold;
	cursor: pointer;
	td {
		&:hover {
			color: #888;
		}
	}
}

.spinner {
	width: 50px;
	height: 40px;
	text-align: center;
	font-size: 10px;
}

.spinner > div {
	background-color: #333;
	height: 100%;
	width: 6px;
	display: inline-block;
	
	-webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
	animation: sk-stretchdelay 1.2s infinite ease-in-out;
}

.spinner .rect2 {
	-webkit-animation-delay: -1.1s;
	animation-delay: -1.1s;
}

.spinner .rect3 {
	-webkit-animation-delay: -1.0s;
	animation-delay: -1.0s;
}

.spinner .rect4 {
	-webkit-animation-delay: -0.9s;
	animation-delay: -0.9s;
}

.spinner .rect5 {
	-webkit-animation-delay: -0.8s;
	animation-delay: -0.8s;
}

@-webkit-keyframes sk-stretchdelay {
	0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  
	20% { -webkit-transform: scaleY(1.0) }
}

@keyframes sk-stretchdelay {
	0%, 40%, 100% { 
		transform: scaleY(0.4);
		-webkit-transform: scaleY(0.4);
	}  20% { 
		transform: scaleY(1.0);
		-webkit-transform: scaleY(1.0);
	}
}

/* always present */
.fade-transition {
	transition: all .3s ease;
	opacity: 1
}

/* .fade-enter defines the starting state for entering */
/* .fade-leave defines the ending state for leaving */
.fade-enter, .fade-leave {
	opacity: 0;
}
h3 {
	margin-bottom: 0.25em;
}
.link {
	cursor: pointer;
	&:hover {
		color: #c0392b;
	}
}
.v-link-active {
	color: #c0392b;
}
a {
	color: #000;
}
table {
	border-collapse:separate; 
	border-spacing:1px;
}
h1 {
	font-size: 2em;
	font-weight: bold;
	margin-bottom: 1em;
}

h3 {
	font-size: 1.5em;
	font-weight: bold;
}
</style>
