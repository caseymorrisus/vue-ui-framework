import Vue from 'vue'
import Progress from 'src/components/modules/Progress'

var vm = new Vue({
	template: '<div><progress></progress></div>',
	components: { Progress }
}).$mount()

function rgb2hex (rgb) {
	rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)
	return (rgb && rgb.length === 4) ? '#' +
	('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) +
	('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) +
	('0' + parseInt(rgb[3], 10).toString(16)).slice(-2) : ''
}

describe('Progress [Component]', function (done) {
	it('should render correctly', () => {
		expect(vm.$el.querySelector('.Progress')).to.exist
	})
	it('should have default prop values', function (done) {
		expect(vm.$children[0]._props.min.options.default).to.equal(0)
		expect(vm.$children[0]._props.max.options.default).to.equal(100)
		expect(vm.$children[0]._props.current.options.default).to.equal(5)
		expect(vm.$children[0]._props.bgColor.options.default).to.equal('#222')
		done()
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
