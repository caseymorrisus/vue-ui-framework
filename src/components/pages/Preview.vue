<template>
<div class="test-container">
	<alert type="success" :delay="1000">
		This is an alert! It is important and does not fade based on timer.
	</alert>
	<headline sub="Icon component for displaying SVG's">
		Icon
	</headline>
	<headline>
		Small
	</headline>
	<div class="icons--small">
		<icon v-for="icon in icons" :src="icon"></icon>
	</div>
	<headline>
		Medium
	</headline>
	<div class="icons--medium">
		<icon v-for="icon in icons" :src="icon"></icon>
	</div>
	<headline>
		Large
	</headline>
	<div class="icons--large">
		<icon v-for="icon in icons" :src="icon"></icon>
	</div>
	
	<br>
	<headline sub="For displaying progress bars">
		Progress
	</headline>
	<progress-labeled
		:current="44"
		bg-color="#3498db"
		title="This is my title."
	></progress-labeled>
	<progress-labeled
		:current="81"
		bg-color="#9b59b6"
		title="Wow, another progress bar"
	></progress-labeled>
	<progress-labeled
		:current="99"
		bg-color="#1abc9c"
		title="People that like cats"
	></progress-labeled>
	<progress-labeled
		:current="100"
		bg-color="#f1c40f"
		title="People that like cats more than dogs"
		percent
	></progress-labeled>
	</progress>

	<headline sub="Content can be toggle by clicking its title">
		Toggle
	</headline>
	<toggle title="This can be clicked to expand content.">
		{{ quotes[0].body }} 
	</toggle>
	<toggle title="So can this.">
		{{ quotes[1].body }} 
	</toggle>
	<toggle title="You can have them open by default" important>
		{{ quotes[2].body }} 
	</toggle>

	<headline sub="Content that can be switched using tabs">
		Tabs
	</headline>
	<tabs :active="1">
		<tab v-for="quote in quotes" :title="quote.title">
			<alert :type="quote.alert.type" important>
				{{ quote.alert.body }}
			</alert>
			{{ quote.body }}
		</tab>
	</tabs>

	<headline sub="For displaying information boldy, cannot be made to disappear">
		Tips
	</headline>
	<tip type="success">
		Success! This is a tip.
	</tip>
	<tip type="info">
		Info! This is a tip.
	</tip>
	<tip type="warning">
		Warning! This is a tip.
	</tip>
	<tip type="danger">
		Danger! This is a tip.
	</tip>

	<headline sub="For alerting the user. Can be set to use a timer or a close button.">
		Alerts
	</headline>
	<alert type="success" important>
		This is an alert! It is important and does not fade based on timer.
	</alert>
	<alert type="info" important>
		This is an alert! It is important and does not fade based on timer.
	</alert>
	<alert type="warning" important>
		This is an alert! It is important and does not fade based on timer.
	</alert>
	<alert type="danger" important>
		This is an alert! It is important and does not fade based on timer.
	</alert>

	<headline sub="Alerts can be infinitely nested and still maintain all functionality">
		Nested Alerts
	</headline>
	<alert type="info" important>
		You can nest alerts within each other.
		<alert type="success" important>
			This is a nested alert!
			<alert type="warning" important>
				Be careful, things can get a bit crowded.
				<alert type="danger" important>
					Just because you can, doesn't mean you should.
				</alert>
			</alert>
		</alert>
	</alert>
</div>
</template>

<script>
import Headline from '../modules/Headline'
import Tip from '../modules/Tip'
import Alert from '../modules/Alert'
import Tabs from '../modules/Tabs'
export default {
	name: 'TestPage',
	data () {
		return {
			pageTitle: 'Test',
			quotes: [
				{
					title: 'Cats',
					body: 'It\'s hard to see things when you\'re too close. Take a step back and look. I started painting as a hobby when I was little. I didn\'t know I had any talent. I believe talent is just a pursued interest. Anybody can do what I do. Trees grow however makes them happy. Look around, look at what we have. Beauty is everywhere, you only have to look to see it. Let\'s put some happy little bushes on the other side now. Put light against light - you have nothing. Put dark against dark - you have nothing. It\'s the contrast of light and dark that each give the other one meaning. In life you need colors. I think there\'s an artist hidden in the bottom of every single one of us.',
					alert: {
						type: 'info',
						body: 'This is a quote about cats, or something. Meow.'
					}
				},
				{
					title: 'Dogs',
					body: 'Clouds are free they come and go as they please. It looks so good, I might as well not stop. We tell people sometimes: we\'re like drug dealers, come into town and get everybody absolutely addicted to painting. It doesn\'t take much to get you addicted. In this world, everything can be happy. Let\'s put some happy little bushes on the other side now.',
					alert: {
						type: 'warning',
						body: 'Dogs aren\'t as cool as cats.'
					}
				},
				{
					title: 'Lizards',
					body: 'That\'s the way I look when I get home late; black and blue. We don\'t want to set these clouds on fire. Any little thing can be your friend if you let it be. Let\'s put some happy little clouds in our world. We\'ll have a super time. Trees grow however makes them happy. If we\'re gonna walk though the woods, we need a little path. There we go.',
					alert: {
						type: 'success',
						body: 'Lizards are like weird, hairless, cats.'
					}
				},
				{
					title: 'Frogs',
					body: 'We have no limits to our world. We\'re only limited by our imagination. It just happens - whether or not you worried about it or tried to plan it. Trees cover up a multitude of sins. A tree needs to be your friend if you\'re going to paint him. Just think about these things in your mind - then bring them into your world. Don\'t hurry. Take your time and enjoy.',
					alert: {
						type: 'danger',
						body: 'Frogs are cool somtimes, if they don\'t touch you.'
					}
				}
			],
			icons: [
				'close-circled',
				'plus-circled',
				'minus-circled',
				'alert-circled',
				'alert',
				'close',
				'refresh',
				'shuffle',
				'home',
				'search',
				'flag',
				'star',
				'heart',
				'gear-a',
				'gear-b',
				'trash-a',
				'trash-b',
				'settings',
				'document',
				'email',
				'bag',
				'card',
				'cash',
				'chatbox',
				'chatbox-working',
				'chatboxes',
				'clock',
				'cloud',
				'image',
				'ios-arrow-left',
				'ios-arrow-right',
				'link',
				'location',
				'locked',
				'pause',
				'user',
				'user-add',
				'users',
				'pie-graph',
				'play',
				'pricetag',
				'pricetags',
				'quote',
				'record',
				'stats-bars',
				'stop',
				'unlocked',
				'upload'
			]
		}
	},
	components: {
		Headline, Tip, Alert, Tabs
	},
	created () {
		document.title = 'UI Framework - Preview'
	}
}
</script>

<style lang="scss">
.test-container {
	max-width: 700px;
}
.Tabs li {
	color: purple;
}
</style>