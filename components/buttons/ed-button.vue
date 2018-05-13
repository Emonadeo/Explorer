<template lang="html">
  <a class="ed-button">
    <slot></slot>
  </a>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
@import '~assets/css/main.less';

a {
	align-items: center;
	background-color: @color-primary;
	border-radius: 100px;
	color: white;
	font-family: @font-display;
	font-size: 1.2em;
	justify-content: center;
	letter-spacing: 0.06em;
	min-width: 60px;
	padding: 0.5rem 1em;

	transition: background-color 100ms cubic-bezier(.25,.8,.25,1);

	&:hover {
		background-color: @color-primary-hover;
	}

	&:active {
		background-color: @color-primary;
	}
}
</style>
