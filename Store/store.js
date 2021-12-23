import Vue from "vue";
import i18n from "../locales/i18n";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    welcomeMSG: "",
    token: "",
    user: "",
  },
  // -----------------------------------------------------------------

  // -----------------------------------------------------------------
  mutations: {
    setAuthToken(state, token) {
      state.token = token;
    },

    setCurrentUser(state, user) {
      state.user = user;
    },
    destroyToken(state) {
      state.token = null;
      state.user = null;
      state.permissions = null;
      window.permissions = null;
    },
  },
  // -----------------------------------------------------------------
  getters: {
    loggedin(state) {
      if (state.token != null) {
        if (state.token != undefined) {
          if (state.token != "") {
            return true;
          }
        }
      }
      state.token = null;
      return false;
    },
    getToken(state) {
      return state.token;
    },
  },
  actions: {
    swalSuccess(vuexContext, text) {
      Swal.fire({
        type: "success",
        text: text,
      });
    },

    swalAddSuccess(vuexContext, text) {
      Swal.fire({
        position: "center-center",
        icon: "success",
        title: text ? i18n.t(`${text}`) : i18n.t("saved"),
        showConfirmButton: false,
        padding: "1em",
        color: "#716add",

        background: "#fff url(/images/trees.png)",
        timer: 2000,
        showClass: {
          popup: "animate__animated animate__fadeInLeft",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutRight",
        },
      });
    },
    SwalNotDeleted(vuexContext, text) {
      return Swal.fire({
        title: "Warrning",
        text: text,
        confirmButtonColor: "#cd2b1b",
        confirmButtonText: "ok",
        icon: "warning",
      });
    },
  },
  // -----------------------------------------------------------------

  modules: {},
});
