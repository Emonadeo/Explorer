<template lang="html">
	<div class="ed-fab">
		<div class="icon">
			<i class="material-icons">
				<slot></slot>
			</i>
		</div>
	</div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
@import '~assets/css/main.less';

.ed-fab {
	position: relative;
}

.icon {
	cursor: pointer;
	position: absolute;
	bottom: -28px;
	right: 0;
	background-color: @color-primary;
	border-radius: 100%;
	border: 0.5rem solid @color-background;
	width: 40px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;

	&:hover {
		width: 50px;
		height: 50px;
		bottom: -33px;
		right: -5px;
		background-color: @color-primary-hover;
	}

	&:active {
		background-color: @color-primary;
	}

	transition: width 250ms cubic-bezier(.30,.15,.15,1.7),
			height 250ms cubic-bezier(.30,.15,.15,1.7),
			bottom 250ms cubic-bezier(.30,.15,.15,1.7),
			right 250ms cubic-bezier(.30,.15,.15,1.7),
			background-color 250ms ease;
}
</style>
