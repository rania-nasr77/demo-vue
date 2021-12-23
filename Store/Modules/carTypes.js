import router from "../../src/router";
const url = `vehicle-types`;
export default {
  state: () => ({
    carTypes: {},
  }),

  mutations: {
    setcarTypes(state, carTypes) {
      state.carTypes = carTypes;
    },
  },
  actions: {
    /**
     *
     * @param {*} vuexContext
     */
    async fetchcarTypes(vuexContext) {
      try {
        const carTypes = await $axios.post(`${url}/type`, { vtype: 1 });
         
        await vuexContext.commit("setcarTypes", carTypes.data);
      } catch (error) {}
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} param1
     */
    async storecarTypes(vuexContext, { data }) {
      document.getElementById("carType-add").disabled = true;
      await $axios.post(`${url}`, data).then((res) => {
        if (res.data.status == 422) {
          document.getElementById("carType-add").disabled = false;
          throw res.data.errors;
        } else {
          router.push({ name: "carTypes" });
          vuexContext.dispatch("swalAddSuccess", "Created");
        }
      });
    },

    /**
     *
     * @param {*} vuexContext
     * @param {*} param
     * @returns
     */
    async getcarType(vuexContext, param) {
      return await $axios.get(`${url}/${param.Id}`);
    },
    async getCarTypeCode(vuexContext) {
      return await $axios.get(`${url}/code`, {
        params: {
          vtype: 1,
        },
      });
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} param
     */
    async updatecarType(vuexContext, param) {
      document.getElementById("carType-update").disabled = true;
      await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
        if (res.data.status == 422) {
          document.getElementById("carType-update").disabled = false;
          throw res.data.errors;
        } else {
          router.push({ name: "carTypes" });
          vuexContext.dispatch("swalAddSuccess", "update");
        }
      });
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} URL
     * @returns
     */
    async deleteCarType(vuexContext, id) {
      await $axios.delete(`${url}/${id}`).then((res) => {
        if (res.data.status == 500) {
          Swal.fire({
            title: "Warrning",
            text: res.data.message,
            confirmButtonColor: "#cd2b1b",
            confirmButtonText: "ok",
            icon: "warning",
          });
          throw res.data.errors;
        } else {
          vuexContext.dispatch("swalAddSuccess", "Deleted");
        }
      });
    },
  },
  getters: {
    getcarTypes(state) {
      return state.carTypes;
    },
  },
};
