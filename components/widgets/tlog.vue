<template lang="html">
	<ed-material class="ed-tlog">
		<section class="head">
			<div class="content">
				<h1>Trip to Norwegia</h1>
				<p>Documentation of spending a year abroad to learn the foreign language and study the unique environment</p>
			</div>
			<div class="cutout"></div>
		</section>
		<section class="actions">
			<span>Last Edited &mdash; 17/06/2018</span>
			<ed-button>Edit</ed-button>
		</section>
	</ed-material>
</template>

<script>
import edButton from '~/components/buttons/ed-button.vue'
import edMaterial from '~/components/material/ed-material.vue'

export default {
	components: {
		edButton,
		edMaterial
	}
}
</script>

<style lang="less" scoped>
.ed-tlog {
	display: flex;
	flex-direction: column;

	.head {
		background-color: yellow;
		display: flex;
		flex: 1;
		flex-direction: column;

		.content {
			flex: 1;
			padding: 1.5em;

			h1 {
				margin-top: 0.8em;
			}
		}
	}

	.cutout {
		clip-path: polygon(0 100%, 100% 0, 100% 100%);
		height: 50px;
		background-color: white;
	}

	.actions {
		align-items: center;
		display: flex;
		justify-content: space-between;
		padding: 1em 1em 1em 1.5em;
	}
}
</style>
