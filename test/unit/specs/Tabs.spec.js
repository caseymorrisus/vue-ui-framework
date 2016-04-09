import Vue from 'vue'
import Tabs from 'src/components/modules/Tabs'
import Tab from 'src/components/modules/Tab'

var vm = new Vue({
	template: '<div><tabs><tab title="Test Title">Test Body</tab><tab title="Test Title2">Test Body2</tab></tabs></div>',
	components: { Tabs, Tab }
}).$mount()

var vm2 = new Vue({
	template: '<div><tabs :active="1"><tab title="Test Title3">Test Body3</tab><tab title="Test Title4">Test Body4</tab></tabs></div>',
	components: { Tabs, Tab }
}).$mount()

describe('Tabs [Component]', function (done) {
	it('should render correctly', () => {
		expect(vm.$el.querySelector('.Tabs-container')).to.exist
	})
	it('should have prop with default value', () => {
		expect(vm.$children[0]._props.active.options.default).to.equal(0)
	})
	it('should render title correctly', () => {
		expect(vm.$el.querySelector('.Tabs').textContent).to.contain('Test Title')
	})
	it('should render content correctly', () => {
		expect(vm.$el.querySelector('.Tabs__content').textContent).to.contain('Test Body')
	})
	it('should give active class to first tab by default', () => {
		expect(vm.$el.querySelector('.Tabs li').classList[0]).to.equal('active')
	})
	it('should display first tab content by default', () => {
		expect(vm.$el.querySelector('.Tabs__tab').style.display).to.equal('')
	})
	it('should give active class to different tab if specified', () => {
		expect(vm2.$el.querySelector('.Tabs li').classList[0]).not.to.equal('active')
	})
	it('should display different tab content if specified', () => {
		expect(vm2.$el.querySelector('.Tabs__tab').style.display).to.equal('none')
	})
})
