<template lang="html">
	<div class="container index">
		<section class="widgets">
			<tlog class="tlog"></tlog>
			<meetups class="meetups"></meetups>
		</section>
		<feed></feed>
	</div>
</template>

<script>
import tlog from '~/components/widgets/tlog.vue'
import feed from '~/components/widgets/feed.vue'
import meetups from '~/components/widgets/meetups.vue'

export default {
	components: {
		tlog,
		feed,
		meetups
	}
}
</script>

<style scoped lang="less">
@import "~assets/css/main.less";

.index {
	display: grid;
	flex: 1;
	grid-template-columns: 1fr 2fr;
	grid-template-rows: 1fr;
	grid-gap: 1em;
	padding-top: 2em;
	padding-bottom: 2em;
}

.widgets {
	min-width: 400px;
}

.meetups {
	margin-top: 1em;
}
</style>
