import router from "../../src/router";

const url = `vehicle-data`;
export default {
    state: () => ({
        VehicleData: {},
    }),

    mutations: {
        setVehicleData(state, VehicleData) {
            state.VehicleData = VehicleData;
        },
    },
    actions: {


        async fetchVehicleData(vuexContext, VehicleDataObject) {
            try {

                const VehicleData = await $axios.get(VehicleDataObject.URL, {
                    params: {
                        all: VehicleDataObject.all ?? null,
                    },
                });
                await vuexContext.commit("setVehicleData", VehicleData.data);
            } catch (error) {
            }
        },

        async getVehicleData(vuexContext, param) {
            return await $axios.get(`${url}/${param.Id}`);
        },
        async storeVehicleData(vuexContext, {URL, data}) {
            console.log(data)
            document.getElementById("vehicleData-add").disabled = true;
            await $axios.post(`${url}`, data).then((res) => {
                console.log(res.data)
                if (res.data.status == 422) {
                    console.log(res.data.status)
                    document.getElementById("vehicleData-add").disabled = false;
                    throw res.data.errors;
                } else {

                    router.push({name: "vehicleData"});
                    vuexContext.dispatch("swalAddSuccess", "saved");
                }
            });

        },

        async getVehicleDataCode(vuexContext) {
            return await $axios.get(`${url}/code`);
        },

        async deleteVehicleData(vuexContext, id) {

            await $axios.delete(`${url}/${id}`).then((res) => {
                console.log(res.data);
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


        async updateVehicleData(vuexContext, param) {
            document.getElementById("VehicleData-update").disabled = true;
            await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
                if (res.data.status == 422) {
                    document.getElementById("VehicleData-update").disabled = false;
                    throw res.data.errors;
                } else {
                    router.push({name: "VehicleData"});
                    vuexContext.dispatch("swalAddSuccess", "saved");
                }
            });
        },


    },
    getters: {
        getVehicleData(state) {
            return state.VehicleData;
        },
    },
};