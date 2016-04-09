import Vue from 'vue'
import Headline from 'src/components/modules/Headline'

var vm = new Vue({
	template: '<div><headline sub="Sub Test">Test</headline></div>',
	components: { Headline }
}).$mount()

var vm2 = new Vue({
	template: '<div><headline>Test</headline></div>',
	components: { Headline }
}).$mount()

describe('Headline [Component]', function (done) {
	it('should render correctly', () => {
		expect(vm.$el.querySelector('.Headline')).to.exist
	})
	it('should render slot content', () => {
		vm.$el.querySelector('.Headline h1').textContent.should.contain('Test')
	})
	it('should render sub-title', () => {
		vm.$el.querySelector('.Headline p').textContent.should.contain('Sub Test')
	})
	it('should not have a p element if no sub-title', () => {
		expect(vm2.$el.querySelector('.Headline p')).not.to.exist
	})
})
