<template lang="html">
	<div class="container">
		<section class="widgets">
			<tlog class="tlog"></tlog>
			<div class="meetup">

			</div>
		</section>
		<section class="feed">
			<div class="nav">

			</div>
			<div class="items">

			</div>
		</section>
	</div>
</template>

<script>
import tlog from '~/components/widgets/tlog.vue'

export default {
	components: {
		'tlog': tlog
	}
}
</script>

<style scoped lang="less">
@import "~assets/css/var.less";

.container {
	display: grid;
	grid-template-columns: 1fr 2fr;
	grid-template-rows: 1fr;
	grid-gap: 1em;
	padding-top: 2em;
	min-height: 100vh;
}

.tlog {
	height: 20em;
}
</style>
