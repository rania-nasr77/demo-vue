import router from "../../src/router";
const url = `wheel-types`;
export default {
  state: () => ({
    carWheels: {},
  }),

  mutations: {
    setcarWheels(state, carWheels) {
      state.carWheels = carWheels;
    },
  },
  actions: {
    /**
     *
     * @param {*} vuexContext
     */
    async fetchcarWheels(vuexContext) {
      try {
        const carWheels= await $axios.post(`${url}/type`,{vtype:1});
        await vuexContext.commit("setcarWheels", carWheels.data);
      } catch (error) {}
    },
     /**
     *
     * @param {*} vuexContext
     * @param {*} param1
     */
      async storecarWheels(vuexContext, { data }) {
        document.getElementById("carWheel-add").disabled = true;
        await $axios.post(`${url}`, data).then((res) => {
          if (res.data.status == 422) {
            document.getElementById("carWheel-add").disabled = false;
            throw res.data.errors;
          } else {
            router.push({ name: "carWheels" });
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
    async getcarWheel(vuexContext, param) {
      return await $axios.get(`${url}/${param.Id}`);
    },
    async getcarWheelCode(vuexContext) {
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
      
      async updatecarWheel(vuexContext, param) {
        document.getElementById("carWheel-update").disabled = true;
        await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
          if (res.data.status == 422) {
            document.getElementById("carWheel-update").disabled = false;
            throw res.data.errors;
          } else {
            router.push({ name: "carWheels" });
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
     async deletecarWheel(vuexContext, id) {
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
          router.push({ name: "carWheels" });
          vuexContext.dispatch("swalAddSuccess", "Deleted");
        }
      });
    },
  },
  getters: {
    getcarWheels(state) {
      return state.carWheels;
    },
  },
};
