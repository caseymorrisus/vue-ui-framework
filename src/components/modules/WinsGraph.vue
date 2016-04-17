<template>
	<div class="WinsGraph">
		<canvas width="400" height="300" v-el:canvas></canvas>
	</div>
</template>

<script>
// import Chart from 'chart.js'
export default {
	data () {
		return {
			chartData: {
				labels: ['Player', 'Opponent'],
				datasets: [
					{
						label: 'My First dataset',
						fillColor: 'rgba(220,220,220,0.5)',
						strokeColor: 'rgba(220,220,220,0.8)',
						highlightFill: 'rgba(220,220,220,0.75)',
						highlightStroke: 'rgba(220,220,220,1)',
						data: [10, 5]
					},
					{
						label: 'My Second dataset',
						fillColor: 'rgba(151,187,205,0.5)',
						strokeColor: 'rgba(151,187,205,0.8)',
						highlightFill: 'rgba(151,187,205,0.75)',
						highlightStroke: 'rgba(151,187,205,1)',
						data: [12, 4]
					}
				]
			}
		}
	},
	ready () {
		// this.$els.canvas.getContext('2d')
		// var ctx = this.$els.canvas.getContext('2d')
		// var myBarChart = new Chart(ctx).Bar(data, options)
	}
}
</script>

<style lang="scss" scoped>
	
</style>