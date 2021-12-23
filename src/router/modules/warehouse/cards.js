import Pages from "@/pages";
export default [
  {
    path: "/wareHouses",
    name: "wareHouses",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/warehouse/wareHouses/index.vue"),
    },
  },
  {
    path: "/wareHouses/create",
    name: "add-wareHouses",
    components: {
      default: Pages,
      pageContent: () =>
        import("@/pages/warehouse/wareHouses/addWareHouses.vue"),
    },
  },
  {
    path: "/wareHouses/edit/:id",
    name: "edit-wareHouses",
    components: {
      default: Pages,
      pageContent: () =>
        import("@/pages/warehouse/wareHouses/editWareHouses.vue"),
    },
  },
];
