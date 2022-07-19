import axios from "axios";

const state = {
    userDetails: {},
    isLoggedIn: false
}

const actions = {
    registerUser(ctx, user) {
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
    loginUser(ctx, payload) {
        return new Promise((resolve, reject) => {
            axios
                .post('/api/login', payload)
                .then(response => {
                    if (response.data.access_token) {
                        localStorage.setItem('token', response.data.access_token);
                        window.location.replace('/dashboard');
                        ctx.commit('LOGGED', true);
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
    logout(ctx) {
        return new Promise((resolve) => {
            localStorage.removeItem('token');
            ctx.commit('LOGGED', false);
            resolve(true);
            window.location.replace('/login');
        });
    },
    setLoggedInState(ctx) {
        return new Promise((resolve) => {
            let hasToken = !!localStorage.getItem('token');

            ctx.commit('LOGGED', hasToken);
            resolve(hasToken);
        })
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
