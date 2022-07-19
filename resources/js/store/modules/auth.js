import axios from "axios";

const state = {
    userDetails: {},
    isLoggedIn: true
}

const actions = {
    registerUser({commit}, user) {
        return new Promise((resolve, reject) => {
            axios
                .post('/api/register', {
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    password_confirmation: user.password_confirmation
                })
                .then(response => {
                    if (response.data) {
                        window.location.replace('/login');
                        resolve(response);
                    } else {
                        reject(response);
                    }
                })
                .catch((error) => {
                    reject(error);
                })
        });
    },
    loginUser({commit}, payload) {
        return new Promise((resolve, reject) => {
            axios
                .post('/api/login', payload)
                .then(response => {
                    if (response.data.access_token) {
                        localStorage.setItem('token', response.data.access_token);
                        window.location.replace('/dashboard');
                        commit('LOGGED', true);
                        resolve(response);
                    } else {
                        reject(response);
                    }
                })
                .catch(error => {
                    reject(error);
                })

        });
    },
    logout({commit}) {
        return new Promise((resolve) => {
            localStorage.removeItem('token');
            commit('LOGGED', false);
            resolve(true);
            window.location.replace('/login');
        });
    }
}

const mutations = {
    LOGGED: (state, payload) => {
        state.isLoggedIn = payload;
    }
}

const getters = {
    loggedIn(state) {
        return state.isLoggedIn;
    },
    userDetails(state) {
        return state.userDetails;
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
