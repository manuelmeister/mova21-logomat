import Vue from 'vue';
import Vuex, {createLogger} from 'vuex';
import VuexPersist from 'vuex-persist';

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  storage: window.localStorage,
});

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  strict: debug,
  plugins: debug ? [createLogger(), vuexLocalStorage.plugin] : [vuexLocalStorage.plugin],
  state: {
    user: null,
  },
  mutations: {
    loginSucceeded(state, user) {
      console.log(user)
      state.user = user;
    },
    loginFailed(state) {
      state.user = null;
    },
    logOut(state) {
      state.user = null;
    }
  }
});
