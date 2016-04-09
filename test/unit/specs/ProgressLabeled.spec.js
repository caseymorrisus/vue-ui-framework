import Vue from 'vue'
import ProgressLabeled from 'src/components/modules/ProgressLabeled'

var vm = new Vue({
	template: '<div><progress-labeled title="Test"></progress-labeled></div>',
	components: { ProgressLabeled }
}).$mount()

var vm2 = new Vue({
	template: '<div><progress-labeled title="Test" percent></progress-labeled></div>',
	components: { ProgressLabeled }
}).$mount()

function rgb2hex (rgb) {
	rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)
	return (rgb && rgb.length === 4) ? '#' +
	('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) +
	('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) +
	('0' + parseInt(rgb[3], 10).toString(16)).slice(-2) : ''
}

describe('ProgressLabeled [Component]', function (done) {
	it('should render correctly', () => {
		expect(vm.$el.querySelector('.Progress--Labeled')).to.exist
	})
	it('should have default prop values', function (done) {
		expect(vm.$children[0]._props.min.options.default).to.equal(0)
		expect(vm.$children[0]._props.max.options.default).to.equal(100)
		expect(vm.$children[0]._props.current.options.default).to.equal(5)
		expect(vm.$children[0]._props.bgColor.options.default).to.equal('#222')
		expect(vm.$children[0]._props.percent.options.default).to.be.false
		done()
	})
	it('should render title', () => {
		expect(vm.$el.querySelector('.Progress--Labeled__title')).to.exist
	})
	it('should have labels', () => {
		expect(vm.$el.querySelector('.Progress--Labeled__amount')).to.exist
	})
	it('should have min and max set correctly in label', () => {
		vm.$el.querySelector('.Progress--Labeled__amount').textContent.should.contain('5/100')
	})
	it('should use percent in label if percent is true', () => {
		vm2.$el.querySelector('.Progress--Labeled__amount').textContent.should.contain('5%')
	})
	describe('Progress [Child Component]', () => {
		it('should render correctly', () => {
			expect(vm.$el.querySelector('.Progress')).to.exist
		})
		it('should have curentWidth computed data', () => {
			expect(vm.$children[0].currentWidth).to.equal(5)
		})
		it('should set width of bar', () => {
			expect(vm.$el.querySelector('.Progress__current').style.width).to.equal('5%')
		})
		it('should set background of bar', () => {
			var rgb = vm.$el.querySelector('.Progress__current').style.background
			expect(rgb2hex(rgb)).to.equal('#222222')
		})
	})
})
