import router from "../../src/router";
const url = `districts`;
export default {
  state: () => ({
    districts: {},
  }),

  mutations: {
    setDistricts(state, districts) {
      state.districts = districts;
    },
  },
  actions: {
    /**
     *
     * @param {*} vuexContext
     */
    async fetchDistricts(vuexContext) {
      try {
        const districts = await $axios.get(`${url}`);
        await vuexContext.commit("setDistricts", districts.data);
      } catch (error) {}
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} param1
     */
    async storeDistrict(vuexContext, { data }) {
      document.getElementById("district-add").disabled = true;
      await $axios.post(`${url}`, data).then((res) => {
        if (res.data.status == 422) {
          document.getElementById("district-add").disabled = false;
          throw res.data.errors;
        } else {
          router.push({ name: "districts" });
          vuexContext.dispatch("swalAddSuccess", "saved");
        }
      });
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} param
     * @returns
     */
    async getDistrict(vuexContext, param) {
      return await $axios.get(`${url}/${param.Id}`);
    },
    /**
     *
     * @param {*} vuexContext
     * @returns
     */
    async getDistrictCode(vuexContext) {
      return await $axios.get(`${url}/code`);
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} param
     */
    async updateDistrict(vuexContext, param) {
      document.getElementById("district-update").disabled = true;
      await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
        if (res.data.status == 422) {
          document.getElementById("district-update").disabled = false;
          throw res.data.errors;
        } else {
          router.push({ name: "districts" });
          vuexContext.dispatch("swalAddSuccess", "saved");
        }
      });
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} URL
     * @returns
     */

    async deleteDistrict(vuexContext, id) {
      await $axios.delete(`${url}/${id}`).then((res) => {
        if (res.data.status == 500) {
          vuexContext.dispatch("SwalNotDeleted", res.data.message);
          throw res.data.errors;
        } else {
          vuexContext.dispatch("swalAddSuccess", "Deleted");
        }
      });
    },
  },
  getters: {
    getDistricts(state) {
      return state.districts;
    },
  },
};
