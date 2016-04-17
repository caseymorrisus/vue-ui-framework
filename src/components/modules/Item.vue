<template>
<li class="Item" v-bind:class="{ 'active': active}">
	<a :href="href" class="Item--link">
		<slot></slot>
	</a>
</li>
</template>

<script>
export default {
	props: {
		href: {
			type: String,
			required: true
		},
		active: {
			type: Boolean,
			default: false
		}
	}
}
</script>