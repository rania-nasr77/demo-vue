
import router from "../../src/router";
const url = `cashiers`

export default {
    state: () => ({
        SellingPoint: {},
    }),

    mutations: {
        setSellingPoint(state, SellingPoint) {
            state.SellingPoint = SellingPoint;
        },
    },

    actions: {

        /**
         *
         * @param {*} vuexContext
         */

        async fetchSellingPoint(vuexContext) {
            console.log("hghghg");
            
            try {
                const SellingPoint = await $axios.get(`${url}`);
                await vuexContext.commit("setSellingPoint", SellingPoint.data);
            } catch (error) {}
        },


        /**
         *
         * @param {*} vuexContext
         * @param {*} param1
         */

        async storeSellingPoint(vuexContext, { data }) {
             
            // document.getElementById("add-sellingPoint").disabled = true;
            await $axios.post(`${url}`, data).then((res) => {
                 console.log();
                if (res.data.status == 422) {
                    // document.getElementById("add-sellingPoint").disabled = false;
                    throw res.data.errors;
                } else {
                    router.push({ name: "sellingPoints" });
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

        async getSellingPoint(vuexContext, param) {
            return await $axios.get(`${url}/${param.Id}`);
        },


        async getSellingPointCode(vuexContext) {
            return await $axios.get("cashiers/code");
        },

    
        async updateSellingPoint(vuexContext, param) {

            // document.getElementById("sellingPoint-edit").disabled = true;
            await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
                if (res.data.status == 422) {
                        // document.getElementById("sellingPoint-edit").disabled = false;
                        throw res.data.errors;
                } else {
                    router.push({ name: "sellingPoints" });
                    vuexContext.dispatch("swalAddSuccess", "Updated");
                }
            });            
        },

        /**
         *
         * @param {*} vuexContext
         * @param {*} URL
         * @returns
         */
        async deleteSellingPoint(vuexContext, id) {
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
        getSellingPoint(state) {
            return state.SellingPoint;
        },
    },

};
