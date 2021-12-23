export default {
  state: () => ({
    maincategories: [],
  }),

  mutations: {
    setMainCategories(state, maincategories) {
      state.maincategories = maincategories;
    },
  },
  actions: {
    async fetchMainCategories(vuexContext, paramObject) {
      try {
        const maincategories = await $axios.get(paramObject.URL);
        
        await vuexContext.commit("setMainCategories", maincategories.data);
      } catch (error) {}
    },
  },
  getters: {
    getMainCategories(state) {
      return state.maincategories;
    },
  },
};
