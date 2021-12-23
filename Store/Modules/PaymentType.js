import router from "../../src/router";
const url = `payment-types`;
export default {
  state: () => ({
    paymentTypes: {},
  }),

  mutations: {
    setPaymentTypes(state, paymentTypes) {
      state.paymentTypes = paymentTypes;
    },
  },
  actions: {
    /**
     *
     * @param {*} vuexContext
     */
    async fetchPaymentTypes(vuexContext) {
      try {
        const paymentTypes = await $axios.get(`${url}`);
        await vuexContext.commit("setPaymentTypes", paymentTypes.data);
      } catch (error) {}
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} param1
     */
    async storePaymentType(vuexContext, { data }) {
      document.getElementById("paymentType-add").disabled = true;
      await $axios.post(`${url}`, data).then((res) => {
        if (res.data.status == 422) {
          document.getElementById("paymentType-add").disabled = false;
          throw res.data.errors;
        } else {
          router.push({ name: "paymentType" });
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
    async getPaymentType(vuexContext, param) {
      return await $axios.get(`${url}/${param.Id}`);
    },
    /**
     *
     * @param {*} vuexContext
     * @returns
     */
    async getPaymentTypeCode(vuexContext) {
      return await $axios.get(`${url}/code`);
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} param
     */
    async updatePaymentType(vuexContext, param) {
      document.getElementById("paymentType-update").disabled = true;
      await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
        if (res.data.status == 422) {
          document.getElementById("paymentType-update").disabled = false;
          throw res.data.errors;
        } else {
          router.push({ name: "paymentType" });
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

     async deletePaymentType(vuexContext, id) {
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
    getPaymentTypes(state) {
      return state.paymentTypes;
    },
  },
};
