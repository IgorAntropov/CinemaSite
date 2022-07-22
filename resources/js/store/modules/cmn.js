const state = {
    currentTab: 'dashboard-tab'
}

const actions = {
    changeCurrentTab(ctx, tabName) {
        ctx.commit('CHANGE_CURRENT_TAB', tabName);
    }
}

const mutations = {
    CHANGE_CURRENT_TAB: (state, payload) => {
        state.currentTab = payload;
    }
}

const getters = {
    currentTab(state) {
        return state.currentTab;
    },
}

export default {
    namespaced: false,
    state,
    actions,
    mutations,
    getters
}
