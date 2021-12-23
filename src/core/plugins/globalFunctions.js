import Vue from "vue";
Vue.prototype.$loader = () => {
  return Vue.$loading.show({
    color: "#007bff",
    loader: "spinner",
    width: 64,
    height: 64,
    backgroundColor: "#000000",
  });
};
Vue.prototype.getBack = () => {
  history.go(-1);
};
Vue.prototype.$SwalChecks = (warningText) => {
  return Swal.fire({
    title: "Are you sure?",
    text: warningText,
    type: "warning",
    confirmButtonColor: "#cd2b1b",
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
    icon: "question",
    iconHtml: "؟",
  });
};
 

Vue.prototype.$success = () => {
  return Swal.fire(
    "Changes Saved",
    "The WareHouse details have been added",
    "success"
  );
};
