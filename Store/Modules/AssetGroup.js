import router from "../../src/router";
const url = `asset-groups`;

export default {
    state: () => ({
        assetGroup: {},
    }),

    mutations: {
        setAssetGroup(state, AssetGroup) {
            state.AssetGroup = AssetGroup;
        },
    },

    actions: {

        async fetchAssetGroup(vuexContext) {
            try {
                const AssetGroup = await $axios.get(`${url}`);
                await vuexContext.commit("setAssetGroup", AssetGroup.data);
                console.log(AssetGroup.data);
            } catch (error) {}
        },

        async storeAssetGroup(vuexContext, { data }) {
            document.getElementById("assetGroup-add").disabled = true;
            await $axios.post(`${url}`, data).then((res) => { 
                if (res.data.status == 422) {
                    console.log(res.data.errors);
                    document.getElementById("assetGroup-add").disabled = false;
                    throw res.data.errors;
                } else {
                    router.push({ name: "assetGroups" });
                    vuexContext.dispatch("swalAddSuccess", "saved");
                }
            });
        },

        async getAssetGroup(vuexContext, param) {
            return await $axios.get(`${url}/${param.Id}`);
        },

        
        // We changed the route of asset group
        async getAssetGroupCode(vuexContext) {
            return await $axios.get("asset-groups/code");
        },

        async updateAssetGroup(vuexContext, param) {
            document.getElementById("assetGroups-update").disabled = true;
            await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
                if (res.data.status == 422) {
                    document.getElementById("assetGroups-update").disabled = false;
                    throw res.data.errors;
                } else {
                    router.push({ name: "assetGroups" });
                    vuexContext.dispatch("swalAddSuccess", "saved");
                }
            });
        },

        async deleteAssetGroup(vuexContext, id) {
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
        getAssetGroup(state) {
            return state.AssetGroup;
        },
    },
};
