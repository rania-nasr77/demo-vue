import router from "@/router";

export default {
  state: () => ({
    countries: {},
  }),

  mutations: {
    setCountries(state, countries) {
      state.countries = countries;
    },
  },
  actions: {
    async fetchCountries(vuexContext, paramObject) {
      try {
        const countries = await $axios.get(paramObject.URL, {
          params: {
            all: paramObject.all ?? null,
          },
        });
        await vuexContext.commit("setCountries", countries.data);
      } catch (error) {}
    },
    async storeCountry(vuexContext, { URL, data }) {
      document.getElementById("country-add").disabled = true;
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
          document.getElementById("country-add").disabled = false;
          throw error.response.data.errors;
        });
    },
    async getCountry(vuexContext, paramObject) {
      const country = await $axios.get(paramObject.URL);
      return country;
    },
    async updateCountry(vuexContext, paramObject) {
      try {
        await $axios.post(paramObject.URL, paramObject.data);
        router.push({ name: paramObject.URL });
        Swal.fire(
          "Changes Saved",
          "The product details have been updated",
          "success"
        );
      } catch (error) {
        throw error.response.data.errors;
      }
    },
    async deleteCountry(vuexContext, URL) {
      try {
        const country = await $axios.delete(URL);
        vuexContext.dispatch("swalSuccess", "Deleted");
        return country.data;
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
    getCountries(state) {
      return state.countries;
    },
  },
};
