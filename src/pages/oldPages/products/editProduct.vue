
<template>
  <div>
    <top-bar-card
      @onChangeGrid="changeGrid"
      :newUrlName="`add-products`"
      editUrlName="`edit-products`"
      :submit="updateProduct"
      :id="product_id"
    />

    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="updateProduct" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row align-items-end">
              <div class="col-6">
                <lang-tabs :languages="languages">
                  <template v-slot:input="{ language }">
                    <editInputs
                      :language="language"
                      :errors="errors"
                      :product="product"
                    />
                  </template>
                </lang-tabs>
              </div>

              <div class="col-6">
                <div class="form-group has-float-label">
                  <select class="form-control" name="category_id">
                    <option value=""></option>
                    <option
                      v-for="category in categories.data"
                      v-bind:value="category.id"
                      :selected="category.id == product.category_id"
                    >
                      {{ category.name }}
                    </option>
                  </select>
                  <label for="exampleSelectl" class="col-form-label">{{
                    "categories"
                  }}</label>
                  <span class="text-danger" v-if="errors.category_id">
                    {{ errors.category_id[0] }}
                  </span>
                </div>
                <div class="row">
                  <div class="col has-float-label">
                    <div class="form-group m-0">
                      <input
                        type="text"
                        name="parcode"
                        placeholder="parcode"
                        class="form-control"
                        aria-describedby="emailHelp"
                        :value="product ? product.parcode : ''"
                      />
                      <label for="inputState" class="col-form-label">{{
                        $t("parcode")
                      }}</label>
                      <span class="text-danger" v-if="errors.parcode">
                        {{ errors.parcode[0] }}
                      </span>
                    </div>
                  </div>
                  <div class="col has-float-label">
                    <div class="form-group m-0">
                      <input
                        type="text"
                        name="code"
                        placeholder="code"
                        class="form-control"
                        aria-describedby="emailHelp"
                        :value="product ? product.code : ''"
                      />
                      <label for="inputState" class="col-form-label">{{
                        $t("code")
                      }}</label>
                      <span class="text-danger" v-if="errors.code">
                        {{ errors.code[0] }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div :class="`add-tabs w-100 sub-tabs ${gridClassName}`">
              <ul class="nav nav-tabs0" id="myTab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="general2-tab"
                    data-toggle="tab"
                    href="#page-general2"
                  >
                    <span class="nav-icon">
                      <i class="flaticon2-gear"></i>
                    </span>
                    <span class="nav-text">{{ $t("General") }}</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="data-tab"
                    data-toggle="tab"
                    href="#data-data"
                  >
                    <span class="nav-icon">
                      <i class="flaticon2-gear"></i>
                    </span>
                    <span class="nav-text">{{ $t("data") }}</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="units-tab"
                    data-toggle="tab"
                    href="#units-data"
                  >
                    <span class="nav-icon">
                      <i class="flaticon2-gear"></i>
                    </span>
                    <span class="nav-text">{{ $t("units") }}</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="options-tab"
                    data-toggle="tab"
                    href="#stock-data"
                  >
                    <span class="nav-icon">
                      <i class="flaticon2-gear"></i>
                    </span>
                    <span class="nav-text">{{ $t("Stock") }}</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="alternative-items-tab"
                    data-toggle="tab"
                    href="#alternative-items"
                  >
                    <span class="nav-icon">
                      <i class="flaticon2-layers-2"></i>
                    </span>
                    <span class="nav-text">{{ $t("alternative_items") }}</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="taxes-items-tab"
                    data-toggle="tab"
                    href="#taxes-items"
                  >
                    <span class="nav-icon">
                      <i class="flaticon2-gear"></i>
                    </span>
                    <span class="nav-text">{{ $t("taxes") }}</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="accounts-items-tab"
                    data-toggle="tab"
                    href="#accounts-items"
                  >
                    <span class="nav-icon">
                      <i class="flaticon2-gear"></i>
                    </span>
                    <span class="nav-text">{{ $t("accounts") }}</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="classifications-items-tab"
                    data-toggle="tab"
                    href="#classifications-items"
                  >
                    <span class="nav-icon">
                      <i class="flaticon2-gear"></i>
                    </span>
                    <span class="nav-text">{{ $t("classifications") }}</span>
                  </a>
                </li>
              </ul>

              <div class="tab-content main-tab-content" id="myTabContent">
                <general-inputs
                  :errors="errors"
                  :product="product"
                  :base_unit="base_unit"
                />
                <data-inputs :errors="errors" :product="product" />
                <warehouses :errors="errors" :product="product" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import LangTabs from "@/components/form/LangTabs.vue";
import editInputs from "./editInputs.vue";
import DataInputs from "./dataInputs.vue";
import generalInputs from "./editGeneralInputs.vue";

// import Options from "./Options.vue";
// import Alternatives from "./alternative.vue";
import FileUpload from "@/components/form/fileUpload";
import warehouses from "./warehouses.vue";
// import units from "./units.vue";
// import accounts from "./accounts.vue";
// import classifications from "./classifications.vue";
import { bus } from "../../../main";
export default {
  name: "edit-products",
  components: {
    LangTabs,
    editInputs,
    DataInputs,
    generalInputs,
    FileUpload,
    warehouses,
  },

  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      price: 0,
      languages: window.$languages,
      categories: {},
      gridClassName: "product_list",
      selected_units: [],
      product: {},
      product_id: this.$route.params.id,
      base_unit: 0,
    };
  },
  created() {
    this.getProduct();
    bus.$on("priceFromData", (data) => {
      this.price = Number(data);
    });
    this.getCategories();
  },
  computed() {},
  methods: {
    async updateProduct() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        formData.append("_method", "PUT");
        const product = {
          URL: "/products/" + this.$route.params.id,
          data: formData,
        };

        await this.$store.dispatch("updateProduct", product);
        document.location.href = "products";
      } catch (errors) {
        this.errors = errors;
      }
    },
    changeGrid(event) {
      this.gridClassName = event;
    },
    getCategories() {
      $axios
        .get(`/allCategories`)
        .then((response) => {
          this.categories = response.data;
        })
        .catch((error) => {});
    },
    selectUnit(item, event) {
      var value = event.target.value;
      console.log(event.target);
      var options = event.target.options;
      if (options.selectedIndex > -1) {
        var name = options[options.selectedIndex].getAttribute("name");
      }
      this.selected_units.push({ name: name, id: value });
    },

    async getProduct() {
      const product = { URL: "products/" + this.product_id };
      const getProduct = await this.$store.dispatch("getProduct", product);
      this.product = getProduct.data.data;
      if (this.product.unit) {
        this.base_unit = this.product.unit[0].id;
      }
    },
  },
};
</script>

<style></style>