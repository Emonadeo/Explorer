<template lang="html">
	<div class="ed-tabs">
		<nav class="nav">
			<a class="tab" :class="isPrimary ? 'selected' : ''" @click="isPrimary = true">
				{{ primary }}
			</a>
			<a class="tab" :class="isPrimary ? '' : 'selected'" @click="isPrimary = false">
				{{ secondary }}
			</a>
		</nav>
		<section class="view">
			<div class="" v-show="isPrimary">
				<slot name="primary"></slot>
			</div>
			<div class="" v-show="!isPrimary">
				<slot name="secondary"></slot>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	props: ['primary', 'secondary'],
	data () {
		return {
			isPrimary: true
		}
	}
}
</script>

<style lang="less" scoped>
@import "~assets/css/main.less";

.view {
	overflow: visible;
}

nav {
	display: flex;

	a {
		flex: 1;
		font-family: @font-display;
		font-size: 1.2em;
		padding: 1rem 1em;

		&:not(.selected) {
			background-color: @color-background-outline;

			&:hover {
				background-color: darken(@color-background-outline, 5%);
			}
		}

		transition: background-color 100ms ease;
	}
}
</style>
