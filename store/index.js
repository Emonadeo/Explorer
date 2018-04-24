export const state = () => ({
	locale: 'en',
	user: null
})

export const actions = {
	nuxtServerInit ({ commit }, { req }) {
		if (req.user) {
			commit('user', req.user)
		}
	}
}

export const mutations = {
	user (state, user) {
		state.user = user
	}
}

export const getters = {
	auth (state) {
		return !!state.user
	}
}
