import router from "../../src/router";

const url = `car-status`;
export default {
  state: () => ({
    CarStatus: {},
  }),

  mutations: {
    setCarStatus(state, CarStatus) {
      state.CarStatus = CarStatus;
    },
  },
  actions: {

    async fetchCarStatus(vuexContext) {
      try {
        const CarStatus = await $axios.get(`${url}`);
        await vuexContext.commit("setCarStatus", CarStatus.data);
      } catch (error) {
      }
    },


    async getCarStatus(vuexContext, param) {
      return await $axios.get(`${url}/${param.Id}`);
    },
    async storeCarStatus(vuexContext, {URL, data}) {
      document.getElementById("CarStatus-add").disabled = true;
      await $axios.post(`${url}`, data).then((res) => {
        if (res.data.status == 422) {

          document.getElementById("CarStatus-add").disabled = false;
          throw res.data.errors;
        } else {

          router.push({name: "CarStatus"});
          vuexContext.dispatch("swalAddSuccess", "saved");
        }
      });

    },

    async getCarStatusCode(vuexContext) {
      return await $axios.get(`${url}/code`);
    },

    async deleteCarStatus(vuexContext, id) {

       await $axios.delete(`${url}/${id}`).then((res) => {
                if (res.data.status == 500) {
                  vuexContext.dispatch("SwalNotDeleted", res.data.message);
                  throw res.data.errors;
                } else {
                  vuexContext.dispatch("swalAddSuccess", "Deleted");
                }
              });
    },


    async updateCarStatus(vuexContext, param) {
      document.getElementById("CarStatus-update").disabled = true;
      await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
        if (res.data.status == 422) {
          document.getElementById("CarStatus-update").disabled = false;
          throw res.data.errors;
        } else {
          router.push({name: "CarStatus"});
          vuexContext.dispatch("swalAddSuccess", "saved");
        }
      });
    },


  },
  getters: {
    getCarStatus(state) {
      return state.CarStatus;
    },
  },
};