<template>
	<div class="stitched stitched--{{ type }}">
		<img :src="'../../../static/img/tip-' + type + '.svg'">
		<p>
			<slot></slot>
		</p>
	</div>
</template>

<script>
export default {
	props: ['type']
}
</script>

<style lang="scss" scoped>
$borderWidth: 1px;
p {
	display: inline-block;
	vertical-align: middle;
	border-left: 1px solid rgba(255,255,255,0.3);
	padding-left: 15px;
}
.stitched {
	$color: #95a5a6;
	padding: 17px 20px 20px 20px;
	margin: 20px 0px;
	color: #fff;
	font-size: 21px;
	font-weight: bold;
	line-height: 1.3em;
	border: $borderWidth solid darken($color, 10%);
	border-radius: 10px;
	font-weight: normal;
	background: $color;

	img {
		width: 25px;
		height: auto;
		vertical-align: middle;
		margin-right: 15px;
	}
}
.stitched--info {
	$color: #3498db;
	border: $borderWidth solid darken($color, 5%);
	background: #3498db;
}

.stitched--success {
	$color: #2ecc71;
	border: $borderWidth solid darken($color, 5%);
	background: #2ecc71;
}

.stitched--warning {
	$color: #f1c40f;
	border: $borderWidth solid darken($color, 5%);
	background: #f1c40f;
}

.stitched--danger {
	$color: #e74c3c;
	border: $borderWidth solid darken($color, 5%);
	background: #e74c3c;
}
</style>