<template>
  <div>
    <top-bar-card
      :newUrlName="`edit-vehicleData`"
      :submit="updateVehicleData"
      :id="vehicleData.id"
      :editUrlName="`edit-vehicleData`"
      :navigationUrl="`countryNavigation`"
    />

    <div
      class="card card-custom mb-9 mt-10"
      v-wow="{
        'animation-name': 'fadeInUp',
        'animation-duration': '.6s',
      }"
    >
      <div v-if="isEmpty">
        <errors :errors="errors" />
      </div>

      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="updateVehicleData" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row align-items-end">
              <div
                class="col-md-6 col-12 mt-7"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group has-float-label">
                  <label class="col-form-label">
                    {{ $t(`en.plate_number_ar`) }}
                    <span class="text-danger0">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control w-100"
                    :name="`plate_number_ar`"
                    id="plate_number_ar"
                    ref="plate_number_ar"
                    :class="{
                      'is-invalid': $v.formData.plate_number_ar.$error,
                      'is-vaild': !$v.formData.plate_number_ar.$invalid,
                    }"
                    v-model="$v.formData.plate_number_ar.$model"
                    :placeholder="`plate_number_ar`"
                    @keyup="chanagClass($event, `en`)"
                  />

                  <span
                    class="text-danger"
                    v-if="backErrors[`plate_number_ar`]"
                    :class="seenName"
                  >
                    {{ backErrors[`plate_number_ar`][0] }}
                  </span>

                  <button
                    @click.prevent="clearValueInput(`name_en`, 'button_en')"
                    id="button_en"
                    class="close d-none"
                    ref="button_en"
                  >
                    &times;
                  </button>
                </div>
              </div>

              <div
                class="col-md-6 col-12 mt-7"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group has-float-label">
                  <label class="col-form-label">
                    {{ $t(`en.plate_number_en`) }}
                    <span class="text-danger0">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control w-100"
                    :name="`plate_number_ar`"
                    id="plate_number_en"
                    ref="plate_number_en"
                    :class="{
                      'is-invalid': $v.formData.plate_number_en.$error,
                      'is-vaild': !$v.formData.plate_number_en.$invalid,
                    }"
                    v-model="$v.formData.plate_number_en.$model"
                    :placeholder="`plate_number_en`"
                    @keyup="chanagClass($event, `en`)"
                  />

                  <span
                    class="text-danger"
                    v-if="backErrors[`plate_number_en`]"
                    :class="seenName"
                  >
                    {{ backErrors[`plate_number_en`][0] }}
                  </span>

                  <button
                    @click.prevent="clearValueInput(`name_en`, 'button_en')"
                    id="button_ar"
                    class="close d-none"
                    ref="button_en"
                  >
                    &times;
                  </button>
                </div>
              </div>
              <div
                class="col-md-6 col-12 mt-7"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group has-float-label">
                  <select class="form-control" id name="cost_center_id">
                    <option value></option>
                    <option
                      value="1"
                      :selected="vehicleData.cost_center_id == 1"
                    >
                      Dr. Alphonso Volkman Jr.
                    </option>
                    <option
                      value="2"
                      :selected="vehicleData.cost_center_id == 2"
                    >
                      Aimee Kovacek.
                    </option>
                    <option
                      value="3"
                      :selected="vehicleData.cost_center_id == 3"
                    >
                      Emmett Brown.
                    </option>
                    <option
                      value="4"
                      :selected="vehicleData.cost_center_id == 4"
                    >
                      Maria Will.
                    </option>
                    <option
                      value="5"
                      :selected="vehicleData.cost_center_id == 5"
                    >
                      Dr. Alphonso Volkman Jr.
                    </option>
                  </select>
                  <label for="exampleSelectl" class="col-form-label"
                    >{{ $t("CostCenters") }}
                  </label>
                  <span
                    class="text-danger"
                    v-if="errors.cost_center_id"
                    :class="seenCostCenters"
                    >{{ errors.cost_center_id[0] }}</span
                  >
                </div>
              </div>
              <input type="hidden" name="vtype" value="1" />
              <div
                class="col-md-6 col-12"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group has-float-label">
                  <select class="form-control" id name="account_id">
                    <option></option>
                    <option value="1" :selected="vehicleData.account_id == 1">
                      Dr. Alphonso Volkman Jr.
                    </option>
                    <option value="2" :selected="vehicleData.account_id == 2">
                      Aimee Kovacek.
                    </option>
                    <option value="3" :selected="vehicleData.account_id == 3">
                      Emmett Brown.
                    </option>
                    <option value="4" :selected="vehicleData.account_id == 4">
                      Maria Will.
                    </option>
                    <option value="5" :selected="vehicleData.account_id == 5">
                      Dr. Alphonso Volkman Jr.
                    </option>
                  </select>
                  <label for="exampleSelectl" class="col-form-label">
                    {{ $t("accounts") }}</label
                  >
                  <span
                    class="text-danger"
                    v-if="errors.account_id"
                    :class="seenemployees"
                    >{{ errors.account_id[0] }}</span
                  >
                </div>
              </div>

              <div class="col-6 has-float-label">
                <div class="form-group">
                  <input
                    type="number"
                    name="code"
                    id
                    placeholder="code"
                    class="form-control"
                    :value="vehicleData.code"
                    v-on:input="valCode($event)"
                    :class="{ [``]: errors.code }"
                  />
                  <label for class="col-form-label"> {{ $t("code") }}</label>
                  <span
                    class="text-danger"
                    v-if="errors.code"
                    :class="seenCode"
                    >{{ errors.code[0] }}</span
                  >
                </div>
              </div>

              <div
                class="col-md-6 col-12"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              ></div>
            </div>
            <div class="row align-items-end">
              <div
                class="col-lg-6 has-float-label position-relative"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group">
                  <select
                    class="form-control"
                    @keyup="chanagClass($event, `ar`)"
                    v-model="formData.vehicle_type_id"
                    :class="{
                      'is-invalid': $v.formData.vehicle_type_id.$error,
                      'is-vaild': !$v.formData.vehicle_type_id.$invalid,
                    }"
                  >
                    <option
                      v-for="VehicleType in VehicleTypes"
                      :key="VehicleType.id"
                      v-bind:value="VehicleType.id"
                      :selected="vehicleData.vehicle_type_id == VehicleType.id"
                    >
                      {{ VehicleType.name }}
                    </option>
                  </select>
                  <label for class="col-form-label">
                    {{ $t("vehicle_type_id") }}</label
                  >

                  <span
                    class="text-danger"
                    v-if="backErrors[`vehicle_type_id`]"
                    :class="seenName"
                  >
                    {{ backErrors[`vehicle_type_id`][0] }}
                  </span>

                  <button
                    @click.prevent="
                      clearValueInput(`vehicle_type_id`, 'button_ar')
                    "
                    class="close d-none"
                    ref="button_ar"
                  >
                    &times;
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div :class="`add-tabs w-100 sub-tabs p-0 mt-3 ${gridClassName}`">
            <ul class="nav nav-tabs0" id="myTab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="carcard-tab"
                  data-toggle="tab"
                  href="#carcard-data"
                >
                  <span class="nav-icon">
                    <i class="flaticon2-contract"></i>
                  </span>
                  <span class="nav-text"> {{ $t("data") }}</span>
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link"
                  id="cards-tab"
                  data-toggle="tab"
                  href="#page-cards"
                >
                  <span class="nav-icon">
                    <i class="flaticon2-contract"></i>
                  </span>
                  <span class="nav-text"> {{ $t("cards") }}</span>
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link"
                  id="covers-tab"
                  data-toggle="tab"
                  href="#page-covers"
                >
                  <span class="nav-icon">
                    <i class="flaticon2-contract"></i>
                  </span>
                  <span class="nav-text"> {{ $t("covers") }}</span>
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

              <edit-data-input
                v-if="vehicleData"
                :errors="errors"
                :dataa="dataa"
                :vehicleData="vehicleData"
              />

              <data-input v-else />

              <editcards
                v-if="VehicleCards.length > 0"
                :dataa="dataa"
                :VehicleCards="VehicleCards"
              />

              <cards v-else />

              <edit-cover :errors="errors" :dataa="dataa" />

              <!-- <form @submit.prevent="newBranch" id="currentForm"> -->
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
              </div>

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
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<<<<<<< HEAD:src/pages/vehicleData/edit.vue
<script>
import LangTabs from "../../components/form/LangTabs.vue";
import Errors from "../../components/layouts/errors.vue";

import Editcards from "./Editcards.vue";
import EditCover from "./editCover.vue";
import EditDataInput from "./EditDataInput.vue";
import MainErrors from "../../components/form/MainErrors.vue";
import switcherLang from "../../components/layouts/switcherLang.vue";
import {UAnimateContainer, UAnimate} from "vue-wow";

import Cards from "./cards.vue";

import DataInput from "./dataInput.vue";
import {required, requiredUnless} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";

export default {
  name: "add-vehicleData",
  components: {
    LangTabs,

    DataInput,
    Editcards,
    EditCover,
    MainErrors,
    Cards,
    switcherLang,
    Errors,
    EditDataInput,
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
      carCard: {},
      VehicleCards: '',
      vehicleData: {},
      formData:{},
      languages: window.$languages,
      gridClassName: window.$gridClassName,
      addactive: '',
      active: false,
      dataa: "",
      VehicleTypes: '',
      isEmpty: '',
      backErrors: {},


    };
  },
  validations() {
    return {
      formData: {
        plate_number_ar: {
          requiredIfPlateNumberAr: requiredUnless(this.formData.plate_number_ar),
          requiredIfFuction: requiredUnless(this.validatorName),
        },
        plate_number_en: {
          requiredIPlateNumberEn: requiredUnless(this.formData.plate_number_en),
          requiredIfFuction: requiredUnless(this.validatorName),
        },
        code: {required},
        account_id: {},
        vehicle_type_id:{required},
      },
    };
  },
  setup: () => ({$v: useVuelidate()}),
  created() {
    this.getVehicleData();
    this.getVehicleType();
  },
  computed: {},
  mounted() {
  },
  methods: {

    async getVehicleType() {
      await this.$store.dispatch("fetchcarTypes");
      this.VehicleTypes = this.$store.getters.getcarTypes.data;

    },

    async getVehicleData() {
      const getVehicleData = await this.$store.dispatch("getVehicleData", {
        Id: this.$route.params.id,
      });
      this.formData = getVehicleData.data.data;
    },
    async updateVehicleData() {

      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        formData.append("_method", "PATCH");
        const VehicleData = {
          URL: "vehicle-data/" + this.$route.params.id,
          data: formData,
        };
        await this.$store.dispatch("updateVehicleData", VehicleData);
        document.location.href = "vehicleData";
      } catch (errors) {
        this.errors = errors;
      }
    },
    changeGrid(event) {
      this.gridClassName = event;
    },
    // async getVehicleData() {
    //   const vehicleDatas = {URL: "vehicle-data/" + this.$route.params.id};
    //   const getvehicleData = await this.$store.dispatch("getVehicleData", vehicleDatas);
    //   this.vehicleData = getvehicleData.data.data;
    //   this.VehicleCards = getvehicleData.data.data.cards;
    //   console.log(this.VehicleCards);
    //
    //
    // },

    validatorName() {
      if (this.formData.plate_number_en == "" || this.formData.plate_number_ar == "") {
        return true;
      }
      return false;
    },
    /**
     *
     * to clear any data in any button
     */
    clearValueInput(inputId, buttonId) {
      this.formData[`${inputId}`] = "";
      this.$refs[`${buttonId}`].classList.add("d-none");
    },

    /**
     *
     * to add and remove class d-none
     */
    chanagClass(e, id) {
      if (e.target.value !== "") {
        this.$refs[`button_${id}`].classList.remove(`d-none`);
      } else {
        this.$refs[`button_${id}`].classList.add(`d-none`);
      }
    },

    valinput(e) {
      if (e.target.value == "") {
        this.addclass = "is-invalid";
        this.seenName = "";
      } else {
        this.seenName = "d-none";
      }
    },

  },
};
</script>

<style></style>
>>>>>>> 3ceae32a7bf712524c840265c045f1f5bb0fea2e
