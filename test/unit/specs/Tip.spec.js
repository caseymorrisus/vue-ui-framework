import Vue from 'vue'
import Tip from 'src/components/modules/Tip'

var vm = new Vue({
	template: '<div><tip>Test Content</tip></div>',
	components: { Tip }
}).$mount()

var vm2 = new Vue({
	template: '<div><tip type="success">Test Content</tip></div>',
	components: { Tip }
}).$mount()

describe('Tip [Component]', function (done) {
	it('should render correctly', () => {
		expect(vm.$el.querySelector('.Tip')).to.exist
	})
	it('should render slot content correctly', () => {
		expect(vm.$el.querySelector('.Tip p').textContent).to.contain('Test Content')
	})
	it('should have default type of info', () => {
		expect(vm.$children[0]._props.type.options.default).to.equal('info')
	})
	it('should use custom type if supplied', () => {
		expect(vm.$el.querySelector('.Tip').classList[1]).to.equal('Tip--info')
	})
	it('should pass correct class for styling', () => {
		expect(vm2.$el.querySelector('.Tip').classList[1]).to.equal('Tip--success')
	})
})
