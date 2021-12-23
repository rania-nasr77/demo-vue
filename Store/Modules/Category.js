export default {
  state: () => ({
    categories: [],
  }),

  mutations: {
    setCategories(state, categories) {
      state.categories = categories;
    },
  },
  actions: {
    async fetchCategories(vuexContext, paramObject) {
      try {
        const categories = await $axios.get(paramObject.URL,{
          params: {
            all: paramObject.all ?? null,
          },
        });

        await vuexContext.commit("setCategories", categories.data);
      } catch (error) {}
    },

    async storeCategories(vuexContext, { URL, data }) {
      try {
        document.getElementById("category-add").disabled = true;
        await $axios.post(URL, data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The Category details have been added",
            "success"
          );
        });
      } catch (error) {
        document.getElementById("category-add").disabled = false;
        throw error.response.data.errors;
      }
    },
    async updateCategories(vuexContext, paramObject) {
      try {
        
        await $axios.post(paramObject.URL, paramObject.data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The Category details have been updated",
            "success"
          );
        });
      } catch (error) {
        throw error.response.data.errors;
      }
    },
    async deleteCategory(vuexContext, URL) {
      try {
        const category = await $axios.delete(URL);
        vuexContext.dispatch("swalSuccess", "Deleted");
        return category.data;
      } catch (error) {
        Swal.fire({
          title: "Warrning",
          text: error.response.data.message,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Now You Know",
        });
        throw error;
      }
    },
  },
  getters: {
    getCategories(state) {
      return state.categories;
    },
  },
};
