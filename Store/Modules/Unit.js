import router from "../../src/router";
const url = `units`

export default {
    state: () => ({
        units: {},
    }),

    mutations: {
        setUnits(state, units) {
            state.units = units;
        },
    },

    actions: {

        async fetchUnits(vuexContext) {
            try {
                const units = await $axios.get(`${url}`);
                await vuexContext.commit("setUnits", units.data);
            } catch (error) {
                console.log(error)
            }
        },

        async storeUnit(vuexContext, { data }) {
            document.getElementById("unit-add").disabled = true;
            await $axios.post(`${url}`, data).then((res) => {

                    if (res.data.status == 422) {
                        document.getElementById("unit-add").disabled = false;
                        throw res.data.errors
                    } else {
                        router.push({ name: "units" });
                        vuexContext.dispatch("swalAddSuccess", "Created");
                    }
            });
        },

        // Why we add vueContext as parameter?!
        async getUnit(vuexContext, param) {
            return await $axios.get(`${url}/${param.Id}`); 
        },

        async getUnitCode() {
            return await $axios.get("units/code");
        },

        async updateUnit(vuexContext, param) {
            document.getElementById("unit-update").disabled = true;
            await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
                if (res.data.status == 422) {
                    document.getElementById("unit-update").disabled = false;
                    throw res.data.errors;
                } else {
                    router.push({ name: "units" });
                    vuexContext.dispatch("swalAddSuccess", "Updated");
                }
            });
        },

        async deleteUnit(vuexContext, id) {
            await $axios.delete(`${url}/${id}`).then((res) => {
                if (res.data.status == 500) {
                    vuexContext.disdpatch("SwalNotDeleted", res.data.message);
                    throw res.data.errors;
                } else {
                    vuexContext.dispatch("swalAddSuccess", "Deleted");
                }
            });
        },

    },

    getters: {
        getUnits(state) {
            return state.units;
        },
    },
};
