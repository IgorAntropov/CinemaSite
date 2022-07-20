import axios from "../../../axios/axios-instance";

const state = {
    userDetails: {},
    isLoggedIn: false,
    errors: [],
    invalidData: ''
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
                .then((response) => {
                    if (response.data) {
                        window.location.replace('/login');
                        resolve(response);
                    } else {
                        reject(response);
                    }
                })
                .catch((error) => {
                    if (error.response.status === 422) {
                        ctx.commit('SET_ERRORS', error.response.data.errors);
                    }
                })
        });
    },
    loginUser(ctx, payload) {
        return new Promise((resolve, reject) => {
            axios
                .post('/api/login', payload)
                .then((response) => {
                    if (response.data.access_token) {
                        localStorage.setItem('token', response.data.access_token);
                        window.location.replace('/dashboard');
                        ctx.commit('LOGGED', true);
                        ctx.dispatch('currentUser').then(() => resolve(response));
                        resolve(response);
                    } else {
                        reject(response);
                    }
                })
                .catch((error) => {
                    if (error.response.data.error) {
                        ctx.commit('SET_INVALID_DATA', error.response.data.error);
                    } else if (error.response.status === 422) {
                        ctx.commit('SET_ERRORS', error.response.data.errors);
                    }
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
    },
    forgotPassword(ctx, user) {
        return new Promise((resolve, reject) => {
            axios.post('/api/forgot-password', {
                email: user.email
            })
                .then((response) => {
                    if (response.data) {
                        window.location.replace('/login');
                        resolve(response);
                    } else {
                        reject(response);
                    }
                })
                .catch((error) => {
                    if (error.response.status === 422) {
                        ctx.commit('SET_ERRORS', error.response.data.errors);
                    } else if (error.response.status === 500) {
                        ctx.commit('SET_INVALID_DATA', error.response.data.error);
                    }
                })
        });
    },
    resetPassword(ctx, payload) {
        return new Promise((resolve, reject) => {
            axios.post('/api/reset-password', payload)
                .then((response) => {
                    if (response.data) {
                        window.location.replace('/login');
                        resolve(response);
                    } else {
                        reject(response);
                    }
                })
                .catch((error) => {
                    if (error.response.status === 422) {
                        ctx.commit('SET_ERRORS', error.response.data.errors);
                    } else if (error.response.status === 500) {
                        ctx.commit('SET_INVALID_DATA', error.response.data.error);
                    }
                })
        });
    },
    currentUser(ctx) {
        return new Promise((resolve, reject) => {
            axios.get('/api/user')
                .then((response) => {
                    ctx.commit('SET_USER_DETAILS', response.data.data);
                })
                .catch((error) => {
                    reject(error);
                })
        });
    }
}

const mutations = {
    LOGGED: (state, payload) => {
        state.isLoggedIn = payload;
    },
    SET_ERRORS: (state, errors) => {
        state.errors = errors;
    },
    SET_INVALID_DATA: (state, invalidData) => {
        state.invalidData = invalidData;
    },
    SET_USER_DETAILS: (state, payload) => {
        state.userDetails = payload;
    }
}

const getters = {
    loggedIn(state) {
        return state.isLoggedIn;
    },
    userDetails(state) {
        return state.userDetails;
    },
    errors(state) {
        return state.errors;
    },
    invalidData(state) {
        return state.invalidData;
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
