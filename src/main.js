import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// Page Components
import Home from './components/pages/Home'
import Preview from './components/pages/Preview'

Vue.use(VueRouter)
Vue.use(VueResource)

var router = new VueRouter({
	hashbang: false,
	history: true,
	transitionOnLoad: false,
	root: ''
})

// Routes
router.map({
	'/': {
		component: Home
	},
	'/preview': {
		component: Preview
	},
	'*': {
		component: {
			template: '<h1>404</h1>'
		}
	}
})

// Define global components
import Tab from './components/modules/Tab'
Vue.component('tab', Tab)
import Toggle from './components/modules/Toggle'
Vue.component('toggle', Toggle)
import Progress from './components/modules/Progress'
Vue.component('progress', Progress)
import ProgressLabeled from './components/modules/ProgressLabeled'
Vue.component('progress-labeled', ProgressLabeled)
import Icon from './components/modules/Icon'
Vue.component('icon', Icon)
import Item from './components/modules/Item'
Vue.component('item', Item)
import Dropdown from './components/modules/Dropdown'
Vue.component('dropdown', Dropdown)
import Divider from './components/modules/Divider'
Vue.component('divider', Divider)

router.start(App, 'body')
