import router from "../../src/router";

export default {
  state: () => ({
    currencies: {},
  }),
  mutations: {
    setCurrencies(state, currencies) {
      state.currencies = currencies;
    },
  },
  actions: {
    async fetchCurrencies(vuexContext, paramObject) {
      try {
        const currencies = await $axios.get(paramObject.URL,{
          params: {
            all: paramObject.all ?? null,
          },
        });

        await vuexContext.commit("setCurrencies", currencies.data);
      } catch (error) {}
    },

    async storeCurrencies(vuexContext, { URL, data }) {
      try {
        document.getElementById("currency-add").disabled = true;
        await $axios.post(URL, data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The Currency details have been added",
            "success"
          );
        });
      } catch (error) {
        document.getElementById("currency-add").disabled = false;
        throw error.response.data.errors;
      }
    },

    async updateCurrencies(vuexContext, paramObject) {
      try {
        await $axios.post(paramObject.URL, paramObject.data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The Currency details have been updated",
            "success"
          );
        });
      } catch (error) {
        throw error.response.data.errors;
      }
    },
    async deleteCurrency(vuexContext, URL) {
      try {
        await $axios.delete(URL);
        vuexContext.dispatch("swalSuccess", "Deleted");
        return true;
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
    getCurrencies(state) {
      return state.currencies;
    },
  },
};
