import router from "../../src/router";
export default {
  state: () => ({
    taxes: {},
  }),

  mutations: {
    setTaxes(state, taxes) {
      state.taxes = taxes;
    },
  },
  actions: {
    async fetchTaxes(vuexContext, paramObject) {
      try {
        const taxes = await $axios.get(paramObject.URL,{
          params: {
            all: paramObject.all ?? null,
          },
        });

        await vuexContext.commit("setTaxes", taxes.data);
      } catch (error) {}
    },
    async storeTaxes(vuexContext, { URL, data }) {
      document.getElementById("tax-add").disabled = true;
      await $axios
        .post(`${URL}`, data)
        .then(() => {
          router.push({ name: URL });
          Swal.fire(
            "Changes Saved",
            "The product details have been updated",
            "success"
          );
        })
        .catch((error) => {
          document.getElementById("tax-add").disabled = false;

          throw error.response.data.errors;
        });
    },
    async updateTax(vuexContext, paramObject) {
      try {
        console.log(paramObject);
        await $axios.post(paramObject.URL, paramObject.data).then(() => {
          Swal.fire(
              "Changes Saved",
              "The Taxes details have been updated",
              "success"
          );
        });
      } catch (error) {
        throw error.response.data.errors;
      }
    },

    async deleteTax(vuexContext, URL) {
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
    getTaxes(state) {
      return state.taxes;
    },
  },
};
