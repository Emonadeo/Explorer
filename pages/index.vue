<template lang="html">
	<div class="container index">
		<section class="widgets">
			<tlog class="tlog"></tlog>
			<div class="meetup">

			</div>
		</section>
		<feed></feed>
	</div>
</template>

<script>
import tlog from '~/components/widgets/tlog.vue'
import feed from '~/components/widgets/feed.vue'

export default {
	components: {
		tlog,
		feed
	}
}
</script>

<style scoped lang="less">
@import "~assets/css/var.less";

.index {
	display: grid;
	flex: 1;
	grid-template-columns: 1fr 2fr;
	grid-template-rows: 1fr;
	grid-gap: 1em;
	padding-top: 2em;
	padding-bottom: 2em;
}

.tlog {
	height: 20em;
}
</style>
