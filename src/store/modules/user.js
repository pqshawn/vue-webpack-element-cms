/**
 * store user's info
 */
const state = {
    token: '',
    name: '',
    avatar: '',
    roles: []
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
        state.roles = roles
    }
}

const actions = {
    // get user's info
    getInfo({ commit, state }) {
        return new Promise((resolve, reject) => {
            // TODO get info from datasource
            const data = { roles: ['editor'], name: '可可西里', avatar: '' }

            const { roles, name, avatar } = data

            commit('SET_ROLES', roles)
            commit('SET_NAME', name)
            commit('SET_AVATAR', avatar)
            resolve(data)
        }).catch(error => {
            reject(error)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}