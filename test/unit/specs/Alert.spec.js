import Vue from 'vue'
import Alert from 'src/components/modules/Alert'

var vm = new Vue({
	template: '<div><alert type="success" important>Test</alert></div>',
	components: { Alert }
}).$mount()

var vm2 = new Vue({
	template: '<div><alert type="success" :delay="100">Test</alert></div>',
	components: { Alert }
}).$mount()

describe('Alert [Component]', function (done) {
	it('should render correctly', () => {
		expect(vm.$el.querySelector('.Alert')).to.exist
	})
	it('should render slot content correctly', () => {
		vm.$el.querySelector('.Alert').textContent.should.contain('Test')
	})
	it('should give the correct class based on type', () => {
		vm.$el.querySelector('.Alert.Alert--success').textContent.should.contain('Test')
	})
	it('should have a close button if alert is important', () => {
		expect(vm.$el.querySelector('.Alert__close')).to.exist
	})
	it('should not have a close button if not important', () => {
		expect(vm2.$el.querySelector('.Alert__close')).not.to.exist
	})
	it('should disappear after delay amount if not important', function (done) {
		this.timeout(200)
		vm2.$appendTo(document.body)
		setTimeout(function () {
			expect(vm2.$children[0]._data.show).to.be.false
			done()
		}, 150)
	})
})
