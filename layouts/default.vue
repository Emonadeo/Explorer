<template>
  <div>
		<nav>
			<nuxt-link to="/">Home</nuxt-link>
			<nuxt-link to="/discover">Discover</nuxt-link>



			<section class="user">
				<a href="#" id="search">
					<img src="~/assets/icons/search.svg" alt="">
				</a>
				<a href="#" id="notifications">
					<img src="~/assets/icons/notifications.svg" alt="">
				</a>
				<a href="#" id="profile">
					<img src="~/assets/img/dummy.svg" alt="">
				</a>
			</section>
		</nav>
    <nuxt/>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="less" scoped>
@import "~assets/css/var";

nav {
	background: #214235;
	background: linear-gradient(90deg, #374f2f 0%, #00474b 100%);
	color: white;
	display: flex;
	font-family: @font-display;
	padding: 0 10vw;

	> a {
		border-bottom: 2px solid transparent;
		display: block;
		font-size: 1.3em;
		font-weight: 900;
		padding: 0.7em 0;
		text-transform: uppercase;

		&.nuxt-link-exact-active {
			border-bottom: 2px solid white;
		}

		&:not(:last-of-type) {
			margin-right: 2em;
		}
	}

	.user {
		display: flex;
		flex: 1;
		justify-content: flex-end;
		align-items: center;

		a:not(:first-of-type) {
			margin-left: 1em;
		}

		#profile {
			display: flex;

			img {
				border-radius: 50%;
				height: 2.5em;
			}
		}
	}
}
</style>
