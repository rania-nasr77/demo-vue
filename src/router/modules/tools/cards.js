import Pages from "@/pages";
export default [
  {
    path: "/currencies",
    name: "currencies",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/currencies/index.vue"),
    },
  },
  {
    path: "/currencies/edit/:id",
    name: "currencies.edit",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/currencies/editCurrency.vue"),
    },
  },
  {
    path: "/currencies/create",
    name: "add-currencies",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/currencies/addCurrency.vue"),
    },
  },
  {
    path: "/units",
    name: "units",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/units/index.vue"),
    },
  },

  {
    path: "/units/create",
    name: "add-units",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/units/addUnit.vue"),
    },
  },

  {
    path: "/units/edit/:id",
    name: "edit-units",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/units/editUnit.vue"),
    },
  },

  {
    path: "/DocumentIssuer",
    name: "DocumentIssuer",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/DocumentIssuer/index.vue"),
    },
  },
  {
    path: "/DocumentIssuer/create",
    name: "add_DocumentIssuer",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/DocumentIssuer/add.vue"),
    },
  },
  {
    path: "/DocumentIssuer/edit/:id",
    name: "edit_DocumentIssuer",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/DocumentIssuer/edit.vue"),
    },
  },
  {
    path: "/DocumentIssuer/:id",
    name: "show_DocumentIssuer",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/DocumentIssuer/show.vue"),
    },
  },


  ////////////////////////
  {
    path: "/paymentTypes",
    name: "paymentType",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/paymentTypes/index.vue"),
    },
  },
  {
    path: "/paymentTypes/create",
    name: "add-paymentType",
    components: {
      default: Pages,
      pageContent: () =>
        import("@/pages/paymentTypes/addPaymentType.vue"),
    },
  },
  {
    path: "/paymentTypes/edit/:id",
    name: "edit-paymentType",
    components: {
      default: Pages,
      pageContent: () =>
        import("@/pages/paymentTypes/editPaymentType.vue"),
    },
  },
///////////////////////////////





  {
    path: "/CarStatus",
    name: "CarStatus",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/CarStatus/index.vue"),
    },
  },

  {
    path: "/CarStatus/create",
    name: "add_CarStatus",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/CarStatus/add.vue"),
    },
  },
  {
    path: "/CarStatus/edit/:id",
    name: "edit_CarStatus",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/CarStatus/edit.vue"),
    },
  },
  {
    path: "/CarStatus/:id",
    name: "show_CarStatus",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/CarStatus/show.vue"),
    },
  },
  {
    path: "/districts",
    name: "districts",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/districts/index.vue"),
    },
  },
  {
    path: "/districts/create",
    name: "add-districts",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/districts/addDistrict.vue"),
    },
  },
  {
    path: "/districts/edit/:id",
    name: "edit-districts",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/districts/editDistrict.vue"),
    },
  },
  {
    path: "/carClassifications",
    name: "carClassifications",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/carClassifications/index.vue"),
    },
  },

  {
    path: "/carClassifications/create",
    name: "add-carClassifications",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/carClassifications/create.vue"),
    },
  },

  {
    path: "/carClassifications/edit/:id",
    name: "edit-carClassifications",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/carClassifications/edit.vue"),
    },
  },

  {
    path: "/taxes",
    name: "taxes",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/taxes/index.vue"),
    },
  },
  {
    path: "/taxes/create",
    name: "add-taxes",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/taxes/addTax.vue"),
    },
  },

  {
    path: "/taxes/edit/:id",
    name: "edit-taxes",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/taxes/editTax.vue"),
    },
  },
  {
    path: "/carTypes",
    name: "carTypes",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/carTypes/index.vue"),
    },
  },
  {
    path: "/carTypes/create",
    name: "add-carTypes",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/carTypes/addcarTypes.vue"),
    },
  },

  {
    path: "/carTypes/edit/:id",
    name: "edit-carTypes",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/carTypes/editcarTypes.vue"),
    },
  },
  {
    path: "/trailerTypes",
    name: "trailerTypes",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/trailerTypes/index.vue"),
    },
  },
  {
    path: "/trailerTypes/create",
    name: "add-trailerTypes",
    components: {
      default: Pages,
      pageContent: () =>
        import("@/pages/tools/trailerTypes/addtrailerTypes.vue"),
    },
  },

  {
    path: "/trailerTypes/edit/:id",
    name: "edit-trailerTypes",
    components: {
      default: Pages,
      pageContent: () =>
        import("@/pages/tools/trailerTypes/edittrailerTypes.vue"),
    },
  },
  {
    path: "/carWheels",
    name: "carWheels",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/carWheels/index.vue"),
    },
  },
  {
    path: "/carWheels/create",
    name: "add-carWheels",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/carWheels/addcarWheels.vue"),
    },
  },

  {
    path: "/carWheels/edit/:id",
    name: "edit-carWheels",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/carWheels/editcarWheels.vue"),
    },
  },
  {
    path: "/trailerWheels",
    name: "trailerWheels",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/trailerWheels/index.vue"),
    },
  },
  {
    path: "/trailerWheels/create",
    name: "add-trailerWheels",
    components: {
      default: Pages,
      pageContent: () =>
        import("@/pages/tools/trailerWheels/addtrailerWheels.vue"),
    },
  },

  {
    path: "/trailerWheels/edit/:id",
    name: "edit-trailerWheels",
    components: {
      default: Pages,
      pageContent: () =>
        import("@/pages/tools/trailerWheels/edittrailerWheels.vue"),
    },
  },
  {
    path: "/trailerDocumentTypes",
    name: "trailerDocumentType",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/trailerDocumentTypes/index.vue"),
    },
  },
  {
    path: "/trailerDocumentTypes/create",
    name: "add-trailerDocumentType",
    components: {
      default: Pages,
      pageContent: () =>
        import("@/pages/tools/trailerDocumentTypes/addTrailerDocumentType.vue"),
    },
  },

  {
    path: "/trailerDocumentTypes/edit/:id",
    name: "edit-trailerDocumentType",
    components: {
      default: Pages,
      pageContent: () =>
        import(
          "@/pages/tools/trailerDocumentTypes/editTrailerDocumentType.vue"
        ),
    },
  },

  {
    path: "/carDocumentTypes",
    name: "carDocumentType",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/carDocumentTypes/index.vue"),
    },
  },
  {
    path: "/carDocumentTypes/create",
    name: "add-carDocumentType",
    components: {
      default: Pages,
      pageContent: () =>
        import("@/pages/tools/carDocumentTypes/addCarDocumentType.vue"),
    },
  },

  {
    path: "/carDocumentTypes/edit/:id",
    name: "edit-carDocumentType",
    components: {
      default: Pages,
      pageContent: () =>
        import("@/pages/tools/carDocumentTypes/editCarDocumentType.vue"),
    },
  },
  {
    path: "/vehicleData",
    name: "vehicleData",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/vehicleData/index.vue"),
    },
  },
  {
    path: "/vehicleData/create",
    name: "add-vehicleData",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/vehicleData/add.vue"),
    },
  },
  {
    path: "/trailerData",
    name: "trailerData",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/trailerData/index.vue"),
    },
  },
  {
    path: "/trailerData/create",
    name: "add-trailerData",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/trailerData/add.vue"),
    },
  },
  {
    path: "/countries",
    name: "countries",

    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/countries/index.vue"),
    },
  },
  {
    path: "/countries/create",
    name: "add-countries",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/countries/addCountry.vue"),
    },
  },
  {
    path: "/countries/edit/:id",
    name: "edit-countries",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/tools/countries/editCountry.vue"),
    },
  },
];
