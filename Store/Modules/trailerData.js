import router from "../../src/router";
const url = `vehicle-data`;
export default {
  state: () => ({
    trailerDatas: {},
  }),

  mutations: {
    settrailerDatas(state, trailerDatas) {
      state.trailerDatas = trailerDatas;
    },
  },
  actions: {
    /**
     *
     * @param {*} vuexContext
     */
    async fetchtrailerDatas(vuexContext) {
      console.log("fdsfsd");
      try {
        const trailerDatas= await $axios.post(`${url}/type`,{vtype:2});
        await vuexContext.commit("settrailerDatas", trailerDatas.data);
      } catch (error) {}
    },
     /**
     *
     * @param {*} vuexContext
     * @param {*} param1
     */
      async storetrailerDatas(vuexContext, { data }) {
        document.getElementById("trailerData-add").disabled = true;
        await $axios.post(`${url}`, data).then((res) => {
          if (res.data.status == 422) {
            document.getElementById("trailerData-add").disabled = false;
            throw res.data.errors;
          } else {
            router.push({ name: "trailerData" });
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
    async gettrailerData(vuexContext, param) {
      return await $axios.get(`${url}/${param.Id}`);
    },
    async gettrailerDataCode(vuexContext) {
      return await $axios.get(`${url}/code`,{
        params: {
          vtype:2
        
        },
      });
    },
     /**
     * 
     * @param {*} vuexContext 
     * @param {*} param 
     */
      async updatetrailerData(vuexContext, param) {
        document.getElementById("trailerData-update").disabled = true;
        await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
          if (res.data.status == 422) {
            document.getElementById("trailerData-update").disabled = false;
            throw res.data.errors;
          } else {
            router.push({ name: "trailerDatas" });
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
     async deletetrailerData(vuexContext, id) {
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
    gettrailerData(state) {
      return state.trailerDatas;
    },
  },
};
