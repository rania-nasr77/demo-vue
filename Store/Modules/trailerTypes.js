import router from "../../src/router";
const url = `vehicle-types`;
export default {
  state: () => ({
    trailerTypes: {},
  }),

  mutations: {
    settrailerTypes(state, trailerTypes) {
      state.trailerTypes = trailerTypes;
    },
  },
  actions: {
    /**
     *
     * @param {*} vuexContext
     */
    async fetchtrailerTypes(vuexContext) {
      try {
        const trailerTypes= await $axios.post(`${url}/type`,{vtype:2});
        await vuexContext.commit("settrailerTypes", trailerTypes.data);
      } catch (error) {}
    },
     /**
     *
     * @param {*} vuexContext
     * @param {*} param1
     */
      async storetrailerTypes(vuexContext, { data }) {
        document.getElementById("trailerType-add").disabled = true;
        await $axios.post(`${url}`, data).then((res) => {
          if (res.data.status == 422) {
            document.getElementById("trailerType-add").disabled = false;
            throw res.data.errors;
          } else {
            router.push({ name: "trailerTypes" });
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
    async gettrailerType(vuexContext, param) {
      return await $axios.get(`${url}/${param.Id}`);
    },
    async gettrailerTypeCode(vuexContext) {
      return await $axios.get(`${url}/code`,{
        params: {
          vtype:1
        
        },
      });
    },
     /**
     * 
     * @param {*} vuexContext 
     * @param {*} param 
     */
      async updatetrailerType(vuexContext, param) {
        document.getElementById("trailerType-update").disabled = true;
        await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
          if (res.data.status == 422) {
            document.getElementById("trailerType-update").disabled = false;
            throw res.data.errors;
          } else {
            router.push({ name: "trailerTypes" });
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
     async deletetrailerType(vuexContext, id) {
      await $axios.delete(`${url}/${id}`).then((res) => {
        if (res.data.status == 500) {
          Swal.fire({
            title: "Warrning",
            text: res.data.message,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "ok",
          });
          throw res.data.errors;
        } else { 
          vuexContext.dispatch("swalAddSuccess", "Deleted");
        }
      });
    },
  },
  getters: {
    gettrailerTypes(state) {
      return state.trailerTypes;
    },
  },
};
