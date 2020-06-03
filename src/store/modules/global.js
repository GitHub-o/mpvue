export default {
  state () {
    return {
      user: null,
      recomLesson: {}
    }
  },

  mutations: {
    SET_USER (state, user) {
      state.user = user;
    },

    SET_RECOM_LESSON (state, lesson) {
      state.recomLesson = lesson;
    }
  },

  actions: {
    SetUser ({ commit }, user) {
      commit('SET_USER', user);
    },

    SetRecomLesson ({ commit }, lesson) {
      commit('SET_RECOM_LESSON', lesson);
    }
  }
}
