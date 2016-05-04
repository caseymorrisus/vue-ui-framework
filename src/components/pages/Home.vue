<template>
	<h1>Vue.js UI Framework</h1>
	<h2>Todo</h2>
	<ul class="todo-list">
		<li class="done">Update Vue.js and Webpack Template (vue-cli)</li>
		<li class="done">Write unit tests for current components</li>
		<li class="done">Convert all tests to same style (if possible)</li>
		<li>Convert use of $el to $refs in tests (deprecated in 2.0)</li>
		<li>Pop-over component</li>
		<li>Cleanup components and styles</li>
	</ul>
</template>

<script>
export default {
	name: 'HomePage',
	data () {
		return {
			pageTitle: 'Home'
		}
	},
	created () {
		document.title = 'UI Framework'
	}
}
</script>

<style lang="scss" scoped>
.todo-list {
	max-width: 700px;
	list-style-type: decimal;
	padding-left: 35px;
	li {
		margin-bottom: 5px;
		&.done {
			text-decoration: line-through;
		}
	}
}
h2 {
	font-size: 1.7em;
	font-weight: 700;
	margin-bottom: 10px;
}
.icons--large {
	.Icon {
		svg {
			width: 48px;
		}
	}
}
.icons--medium {
	.Icon {
		svg {
			width: 32px;
		}
	}
}
.icons--small {
	.Icon {
		svg {
			width: 24px;
		}
	}
}
.Icon {
	cursor: pointer;
	svg {
		width: 48px;
		transition: all 200ms ease-out;
	}
	&:hover {
		svg {
			fill: #1abc9c;
		}
	}
}
nav {
	.Icon {
		margin-right: 10px;
		svg {
			padding-top: 3px;
			fill: #888;
			width: 22px;
		}
	}
	a:hover,
	.v-link-active {
		color: #fff;
		.Icon {
			svg {
				fill: #fff;
			}
		}
	}
}
</style>