import Vuex from 'vuex';
import middleware from './modules/middleware';
import auth from "./modules/auth";
import cmn from "./modules/cmn";

export default new Vuex.Store({
    modules: {
        middleware,
        auth,
        cmn
    }
})
