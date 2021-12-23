<template>
  <div>
    <top-bar-card
      @onChangeGrid="changeGrid"
      :newUrlName="`add-products`"
      :submit="newProduct"
      :model="`product`"
    />

    <div
      class="card card-custom mb-9 mt-10"
      v-wow="{
        'animation-name': 'fadeInUp',
        'animation-duration': '1s',
      }"
    >
      <div v-if="isEmpty">
        <errors :errors="errors" />
      </div>
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="newProduct" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}.
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row align-items-end">
              <div
                class="col-2"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="img-upload-box">
                  <img v-if="url" :src="url" width="100%" height="100%" />

                  <input
                    type="file"
                    name="image"
                    class="form-control"
                    @change="onFileChange"
                  />
                </div>
              </div>
              <div
                class="col-10 p-0"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div
                  class="d-flex justify-content-between mt-4 align-items-end"
                >
                  <div
                    class="col-6"
                    v-wow="{
                      'animation-name': 'fadeInUp',
                      'animation-duration': '1s',
                    }"
                  >
                    <lang-tabs :languages="languages">
                      <template v-slot:input="{ language }">
                        <inputs :language="language" :errors="errors" />
                      </template>
                    </lang-tabs>
                  </div>

                  <div
                    class="col-6"
                    v-wow="{
                      'animation-name': 'fadeInUp',
                      'animation-duration': '1s',
                    }"
                  >
                    <div class="form-group has-float-label">
                      <select class="form-control" name="category_id">
                        <option value=""></option>
                        <option
                          v-for="category in categories.data"
                          v-bind:value="category.id"
                        >
                          {{ category.name }}
                        </option>
                      </select>
                      <label for="exampleSelectl" class="col-form-label">{{
                        $t("categories")
                      }}</label>
                      <span class="text-danger" v-if="errors.category_id">
                        {{ errors.category_id[0] }}
                      </span>
                    </div>
                    <div class="row">
                      <div
                        class="col has-float-label"
                        v-wow="{
                          'animation-name': 'fadeInUp',
                          'animation-duration': '1s',
                        }"
                      >
                        <div class="form-group m-0">
                          <input
                            type="numper"
                            name="parcode"
                            placeholder="parcode"
                            class="form-control"
                            aria-describedby="emailHelp"
                          />
                          <label for="inputState" class="col-form-label"
                            >parcode</label
                          >
                          <span class="text-danger" v-if="errors.parcode">
                            {{ errors.parcode[0] }}
                          </span>
                        </div>
                      </div>
                      <div
                        class="col has-float-label"
                        v-wow="{
                          'animation-name': 'fadeInUp',
                          'animation-duration': '1s',
                        }"
                      >
                        <div class="form-group m-0">
                          <input
                            type="numper"
                            name="code"
                            placeholder="code"
                            class="form-control"
                            aria-describedby="emailHelp"
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
                <div
                  class="d-flex justify-content-between mt-4 align-items-end"
                >
                  <div
                    class="col-md-6"
                    v-wow="{
                      'animation-name': 'fadeInUp',
                      'animation-duration': '1s',
                    }"
                  >
                    <div class="has-float-label">
                      <div class="form-group stock-select">
                        <div class="input-group">
                          <input
                            class="form-control"
                            type="text"
                            id="warehouse-search"
                            @keyup="
                              search(
                                'Warehouse',
                                'ware_houses',
                                'warehouse-search'
                              )
                            "
                            :value="search_key"
                          />
                          <label class="col-form-label">{{
                            $t("warehouse")
                          }}</label>
                          <input type="hidden" id="warehouse_data" />
                          <div v-if="this.$refs.personal">
                            <p
                              v-for="warehouse in this.$refs.personal
                                .selected_objects"
                              :key="warehouse"
                            >
                              {{ warehouse.name.en }}
                            </p>
                          </div>
                          <b-button
                            v-b-modal.modal-lg
                            @click="
                              openSearch($event, 'Warehouse', 'ware_houses')
                            "
                            >Search</b-button
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-6"
                    v-wow="{
                      'animation-name': 'fadeInUp',
                      'animation-duration': '1s',
                    }"
                  >
                    <div class="form-group has-float-label">
                      <select
                        class="form-control"
                        name="unit_id"
                        @change="valUnit($event)"
                        :class="{ [`${addclass}`]: errors.unit_id }"
                      >
                        <option selected disabled value=""></option>

                        <option
                          v-for="unit in units.data"
                          v-bind:value="unit.id"
                          v-bind:name="unit.name"
                        >
                          {{ unit.name }}
                        </option>
                      </select>
                      <label class="col-form-label"
                        >{{ $t("units")
                        }}<span class="text-danger">*</span></label
                      >
                      <span
                        class="text-danger"
                        v-if="errors.unit_id"
                        :class="seenUnit"
                      >
                        {{ errors.unit_id }}
                      </span>
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
                      <span class="nav-text">{{ $t("attachments") }}</span>
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
                      href="#options-data"
                    >
                      <span class="nav-icon">
                        <i class="flaticon2-gear"></i>
                      </span>
                      <span class="nav-text">{{ $t("options") }}</span>
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
                      <span class="nav-text">{{
                        $t("alternative_items")
                      }}</span>
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
                  <div class="btn-collapse">
                    <button @click.prevent="showwdata">
                      {{ $t("Collapse_All") }}
                    </button>
                    |
                    <button @click.prevent="hidedata">
                      {{ $t("Expand_All") }}
                    </button>
                  </div>
                  <general-inputs
                    :errors="errors"
                    :dataa="dataa"
                    :addactive="addactive"
                  />
                  <data-inputs
                    :errors="errors"
                    :dataa="dataa"
                    :addactive="addactive"
                  />
                  <units
                    :errors="errors"
                    :price="price"
                    :selectUnit="selectUnit"
                    :dataa="dataa"
                    :addactive="addactive"
                    :changeOption="changeOption"
                    :selected_unit="selected_unit"
                  />
                  <options
                    :errors="errors"
                    :dataa="dataa"
                    :addactive="addactive"
                    :changeOption="changeOption"
                    :values="values"
                  />
                  <alternatives
                    :errors="errors"
                    :dataa="dataa"
                    :addactive="addactive"
                    :changeOption="changeOption"
                  />
                  <taxes
                    :errors="errors"
                    :dataa="dataa"
                    :addactive="addactive"
                    :changeOption="changeOption"
                    :countries="countries"
                  />
                  <accounts
                    :errors="errors"
                    :dataa="dataa"
                    :addactive="addactive"
                    :changeOption="changeOption"
                  />
                  <classifications
                    :errors="errors"
                    :selected_units="selected_units"
                    :dataa="dataa"
                    :addactive="addactive"
                    :changeOption="changeOption"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
        <search
          ref="personal"
          :search="search"
          :errors="errors"
          :columns="columns"
          :search_setting="search_setting"
          :columns_search="columns_search"
          :columns_view="columns_view"
          :model="model"
          :results="results"
          :search_key="search_key"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LangTabs from "@/components/form/LangTabs.vue";
import Inputs from "./Inputs.vue";
import DataInputs from "./dataInputs.vue";
import Errors from "@/components/layouts/errors.vue";
import Options from "./Options.vue";
import Alternatives from "./alternative.vue";
import generalInputs from "./generalInputs.vue";
import FileUpload from "@/components/form/fileUpload";
import taxes from "./taxes.vue";
import units from "./units.vue";
import accounts from "./accounts.vue";
import classifications from "./classifications.vue";
import { bus } from "../../../main";
import search from "../../search.vue";
import { UAnimateContainer, UAnimate } from "vue-wow";
export default {
  name: "add-products",
  components: {
    LangTabs,
    Inputs,
    DataInputs,
    units,
    Options,
    Alternatives,
    generalInputs,
    FileUpload,
    taxes,
    accounts,
    classifications,
    Errors,
    search,
    UAnimateContainer,
    UAnimate,
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
      url: "assets/default_product_image.png",

      languages: window.$languages,
      categories: {},
      gridClassName: "product_list",
      selected_units: [],
      active: false,
      values: [],
      dataa: "",
      addactive: "",
      isEmpty: false,
      countries: [],
      addclass: "is-invalid",
      seenUnit: "",
      selected_unit: 0,
      search_setting: {},
      columns: [],
      model: "",
      results: [],
      search_key: "",
      columns_view: [],
      columns_search: [],
    };
  },
  created() {
    bus.$on("priceFromData", (data) => {
      this.price = Number(data);
    });
    this.getCategories();
    this.getWareHouses();
    this.getResults();
  },

  computed: {
    units() {
      return this.$store.getters.getUnits;
    },
    wareHouses() {
      return this.$store.getters.getWareHouses;
    },
  },
  methods: {
    showwdata: function () {
      this.dataa = "show";
      this.addactive = "active";
    },
    hidedata: function () {
      this.dataa = "";
      this.addactive = "";
    },

    async getResults(page = 1) {
      const unitUrl = {
        URL: "units",
        page,
      };
      const units = await this.$store.dispatch("fetchUnits", unitUrl);
    },

    async getWareHouses(page = 1) {
      const warehouseUrl = {
        URL: "wareHouses",
        page,
      };
      const warehouses = await this.$store.dispatch(
        "fetchWareHouses",
        warehouseUrl
      );
    },

    async newProduct() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        const product = {
          URL: "products",
          data: formData,
        };
        await this.$store.dispatch("store", product);
      } catch (errors) {
        this.errors = errors;
        this.isEmpty = true;
      }
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
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
      var options = event.target.options;
      if (options.selectedIndex > -1) {
        var name = options[options.selectedIndex].getAttribute("name");
      }
      this.selected_units.push({ name: name, id: value });
    },
    changeOption(event, $index, $name, $model) {
      var value = event.target.value;
      this.info = value;
      var id = event.target.id;
      var select = document.getElementById(id);
      var disabled_elements = document.getElementsByClassName(
        $model + "_" + $index
      );

      if ($model == "option") {
        $axios
          .get(`option/values/${value}`)
          .then((response) => {
            var values_data = response.data;
            this.$set(this.values, $index, values_data.data);

            if (this.values[$index].length > 0) {
              select.name = $name;
              for (var index in disabled_elements) {
                if (disabled_elements[index] != disabled_elements.length) {
                  disabled_elements[index].disabled = false;
                }
              }
            } else {
              select.name = "";
            }
          })
          .catch((error) => {});
      } else if ($model == "unit") {
        var options = event.target.options;
        if (options.selectedIndex > -1) {
          var name = options[options.selectedIndex].getAttribute("name");
        }
        select.name = $name;
        for (var index in disabled_elements) {
          if (disabled_elements[index] != disabled_elements.length) {
            disabled_elements[index].disabled = false;
          }
        }
        this.selected_units.push({ name: name, id: value });
      } else if ($model == "tax") {
        $axios
          .get(`/taxCountries/${value}`)
          .then((response) => {
            var tax_data = response.data;
            this.$set(this.countries, $index, tax_data.data);
            select.name = $name;
            for (var index in disabled_elements) {
              if (disabled_elements[index] != disabled_elements.length) {
                disabled_elements[index].disabled = false;
              }
            }
          })
          .catch((error) => {});
      } else {
        select.name = $name;
        for (var index in disabled_elements) {
          if (disabled_elements[index] != disabled_elements.length) {
            disabled_elements[index].disabled = false;
          }
        }
      }
    },

    valUnit(e) {
      if (e.target.value == "") {
        this.addclass = "is-invalid";
        this.seenUnit = "";
      } else {
        this.selected_unit = e.target.value;
        this.addclass = "";
        this.seenUnit = "d-none";
      }
    },

    openSearch(e, model, table) {
      this.model = model;
      $axios
        .get(`columns`, {
          params: {
            table: table,
          },
        })
        .then((response) => {
          this.columns = response.data;
        });

      $axios
        .get(`search-setting`, {
          params: {
            model: model,
          },
        })
        .then((response) => {
          if (response != 0) {
            this.search_setting = response.data;
            this.columns_search = this.search_setting.data.columns;
            this.columns_view = this.search_setting.data.columns_view;
          }
        });

      if (e.keyCode === 13) {
        e.preventDefault(); // Ensure it is only this code that runs
        var this_modal = document.getElementById("exampleModalSizeLg");
        this_modal.modal("toggle");
        this_modal.modal("show");
      }
    },

    search(model, table, id) {
      var search = document.getElementById(id).value;
      this.search_key = search;
      $axios
        .get(`search`, {
          params: {
            model: model,
            search: search,
            table: table,
          },
        })
        .then((response) => {
          this.results = response.data;
        });
    },
  },
};
</script>

<style></style>
