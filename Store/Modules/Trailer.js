
export default {
    state: () => ({
        trailers: {},
    }),
  
    mutations: {
      setTrailers(state, trailers) {
        state.trailers = trailers;
      },
    },
    actions: {
      async storeTrailer(vuexContext, {  data }) {
        try {
          document.getElementById("trailer-add").disabled = true;
          await $axios.post("trailers", data).then(() => {
            Swal.fire(
              "Changes Saved",
              "The trailer details have been added",
              "success"
            );
          });
        } catch (error) {
          document.getElementById("trailer-add").disabled = false;
          throw error.response.data.errors;
        }
      },
      async fetchTrailers(vuexContext, trailerObject) {
        try {
          
          const trailers = await $axios.get(trailerObject.URL, {
            params: {
              all: trailerObject.all ?? null,
            },
          });
          await vuexContext.commit("setTrailers", trailers.data);
        } catch (error) {}
      },
      async getTrailer(vuexContext, paramObject) {
  
        const trailer = await $axios.get(paramObject.URL);
       
        return trailer;
      },
      async updateTrailer(vuexContext, paramObject) {
        try {
          await $axios.post(paramObject.URL, paramObject.data).then(() => {
            Swal.fire(
              "Changes Saved",
              "The Trailer details have been updated",
              "success"
            );
          });
        } catch (error) {
          throw error.response.data.errors;
        }
      },
      async deleteTrailers(vuexContext, URL) {
        try {
          const trailer = await $axios.delete(URL);
          vuexContext.dispatch("swalSuccess", "Deleted");
          return true;
        } catch (error) {
          Swal.fire({
            title: "Warrning",
            text: error.response.data.message,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Now You Know",
          });
          throw error;
        }
      },
    },
    getters: {
      getTrailers(state) {
        return state.trailers;
      },
    },
  };
  