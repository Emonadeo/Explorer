<template lang="html">
	<ed-material class="meetups">
		<ed-tabs primary="Your Meetups" secondary="Other's Meetups">
			<section slot="primary">
				<ul class="entries">
					<li v-for="item in items">
						<div class="title">
							{{ item.title }}
						</div>
						<div class="details">
							<div class="date">
								<i class="material-icons">event</i>
								{{ item.date }}
							</div>
							<div class="place">
								<i class="material-icons">place</i>
								{{ item.place }}
							</div>
						</div>
					</li>
				</ul>
				<!-- FAB -->
				<ed-fab class="fab-add">add</ed-fab>
			</section>
			<section slot="secondary">
				<ul class="entries">
					<li v-for="item in items">
						<div class="title">
							{{ item.title }}
						</div>
						<div class="details">
							<div class="date">
								<i class="material-icons">event</i>
								{{ item.date }}
							</div>
							<div class="place">
								<i class="material-icons">place</i>
								{{ item.place }}
							</div>
						</div>
					</li>
				</ul>
			</section>
		</ed-tabs>
	</ed-material>
</template>

<script>
import edMaterial from '~/components/material/ed-material.vue'
import edTabs from '~/components/buttons/ed-tabs.vue'
import edFab from '~/components/buttons/ed-fab.vue'

export default {
	data () {
		return {
			items: [
				{
					title: 'Barbecue Party',
					date: '13/08/2018',
					place: '762 14th St, Denver, CO'
				},
				{
					title: 'TED Speech',
					date: '07/07/2018',
					place: '587 Caroline St, Houston TX'
				},
				{
					title: 'Japan Meetup w/ Signing Session',
					date: '27/06/2018',
					place: '371 Hibikino, Fukuoka, JP'
				}
			]
		}
	},
	components: {
		edMaterial,
		edTabs,
		edFab
	}
}
</script>

<style lang="less" scoped>
@import "~assets/css/main.less";

.meetups {
	overflow: visible;
}

.fab-add {
	margin-right: 1em;
}

.entries {
	li {
		border-bottom: 2px solid @color-background;
		padding: 1rem;

		&:last-child {
			border-bottom: none;
		}

		.title {
			font-size: 1.2em;
			font-family: @font-display;
			font-weight: 900;
			margin-bottom: 0.2rem;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
		}

		.details {
			align-items: center;
			display: flex;
			color: rgba(0, 0, 0, 0.51);

			> div {
				align-items: center;
				display: inline-flex;

				&:not(:last-child) {
					margin-right: 0.5em;
				}
			}

			.place {
				overflow: hidden;
				white-space: nowrap;
			}
		}
	}
}
</style>
