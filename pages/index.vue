<template lang="html">
	<div class="container">
		<section class="widgets">
			<div class="tlog">

			</div>
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
export default {
}
</script>

<style scoped lang="less">
.container {
	display: grid;
	grid-template-columns: 1fr 1.61fr;
	grid-template-rows: 1fr;
	grid-gap: 1em;
	padding-top: 2em;
	min-height: 100vh;
}
</style>
