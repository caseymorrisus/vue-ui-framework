import Vue from 'vue'
import Toggle from 'src/components/modules/Toggle'

var vm = new Vue({
	template: '<div><toggle title="Test Title" important>Test Content</toggle></div>',
	components: { Toggle }
}).$mount()

describe('Toggle [Component]', function (done) {
	it('should render correctly', () => {
		expect(vm.$el.querySelector('.Toggle')).to.exist
	})
	it('should render slot content correctly', () => {
		expect(vm.$el.querySelector('.Toggle__content').textContent).to.contain('Test Content')
	})
	it('should render title correctly', () => {
		expect(vm.$el.querySelector('.Toggle__title').textContent).to.contain('Test Title')
	})
	it('should not be important by default', () => {
		expect(vm.$children[0]._props.important.options.default).to.be.false
	})
	it('should be visibile if important is true', () => {
		expect(vm.$children[0]._data.show).to.be.true
	})
	it('should toggle visibility when clicked', () => {
		vm.$children[0].toggleContent()
		expect(vm.$children[0]._data.show).to.be.false
	})
})
