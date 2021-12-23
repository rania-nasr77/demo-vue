<template>
  <div>
    <top-bar-card
      :newUrlName="`add-currencies`"
      :submit="newCurrency"
      :id="0"
      :editUrlName="`currencies.edit`"
      :navigationUrl="`currencyNavigation`"
      :model="`currency`"
      :listUrlName="`currencies`"
      :mainModuel="`tools`"
      :MainCategory="`cards`"
      :pageName="$t(`currency`)"
      :operation="`add`"
    />

    <div
      class="card card-custom mb-9 mt-10"
      v-wow="{
        'animation-name': 'fadeInRight',
        'animation-duration': '.6s',
      }"
    >
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="newCurrency" ref="my-form" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("currencies") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row align-items-end">
              <div
                class="col-md-6 col-12 has-float-label position-relative"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group">
                  <input
                    type="string"
                    class="form-control"
                    name="code"
                    :class="{
                      'is-invalid': $v.formData.code.$error,
                      'is-vaild': !$v.formData.code.$invalid,
                    }"
                    v-model="$v.formData.code.$model"
                    placeholder="Code"
                    ref="code"
                    id="code"
                    @keyup="chanagClass($event, `code`)"
                  />
                  <label for="" class="col-form-label"
                    >{{ $t("code") }}<span class="text-danger0">*</span></label
                  >
                  <button
                    @click.prevent="clearValueInput(`code`)"
                    id="button_code"
                    class="close"
                    ref="button_code"
                  >
                    &times;
                  </button>
                </div>
              </div>
              <div class="col-12 d-flex p-0">
                <div
                  class="col-lg-6 has-float-label position-relative"
                  v-wow="{
                    'animation-name': 'fadeInUp',
                    'animation-duration': '1s',
                  }"
                >
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control w-100"
                      :class="{
                        'is-invalid': $v.formData.name_ar.$error,
                        'is-vaild': !$v.formData.name_ar.$invalid,
                      }"
                      id="name_ar"
                      ref="name_ar"
                      v-model="$v.formData.name_ar.$model"
                      :placeholder="`Name`"
                      @keyup="chanagClass($event, `ar`)"
                    />

                    <label class="col-form-label">
                      {{ $t(`ar.name`) }}
                      <span class="text-danger0">*</span></label
                    >
                    <span
                      class="text-danger"
                      v-if="backErrors[`name_ar`]"
                      :class="seenName"
                    >
                      {{ backErrors[`name_ar`][0] }}
                    </span>

                    <button
                      @click.prevent="clearValueInput(`name_ar`, 'button_ar')"
                      id="button_ar"
                      class="close d-none"
                      ref="button_ar"
                    >
                      &times;
                    </button>
                  </div>
                </div>
                <div
                  class="col-lg-6 has-float-label position-relative"
                  v-wow="{
                    'animation-name': 'fadeInUp',
                    'animation-duration': '1s',
                  }"
                >
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control w-100"
                      :name="`name_en`"
                      id="name_en"
                      ref="name_en"
                      :class="{
                        'is-invalid': $v.formData.name_en.$error,
                        'is-vaild': !$v.formData.name_en.$invalid,
                      }"
                      v-model="$v.formData.name_en.$model"
                      :placeholder="`Name`"
                      @keyup="chanagClass($event, `en`)"
                    />

                    <label class="col-form-label">
                      {{ $t(`en.name`) }}
                      <span class="text-danger0">*</span></label
                    >
                    <span
                      class="text-danger"
                      v-if="backErrors[`name_en`]"
                      :class="seenName"
                    >
                      {{ backErrors[`name_en`][0] }}
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
              </div>

              <div class="col-12 d-flex p-0">
                <div
                  class="col-lg-6 has-float-label position-relative"
                  v-wow="{
                    'animation-name': 'fadeInUp',
                    'animation-duration': '1s',
                  }"
                >
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control w-100"
                      :name="`part_name_ar`"
                      :placeholder="`Part Name Arabic`"
                    />

                    <label class="col-form-label">
                      {{ $t(`part_name_ar`) }}
                    </label>
                  </div>
                </div>
                <div
                  class="col-lg-6 has-float-label position-relative"
                  v-wow="{
                    'animation-name': 'fadeInUp',
                    'animation-duration': '1s',
                  }"
                >
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control w-100"
                      :name="`part_name_en`"
                      :placeholder="`Part Name English`"
                    />

                    <label class="col-form-label">
                      {{ $t(`part_name_en`) }}
                    </label>
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
                <div class="d-flex">
                  <active-toggle :formData="formData" class="col p-0" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, requiredUnless } from "@vuelidate/validators";
import { UAnimateContainer, UAnimate } from "vue-wow";
export default {
  name: "add-currencies",
  components: { UAnimateContainer, UAnimate },

  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      formData: {
        code: "",
        is_active: true,
        name_ar: "",
        name_en: "",
      },
      isEmpty: false,

      backErrors: {},
    };
  },
  validations() {
    return {
      formData: {
        name_ar: {
          requiredIfNameAr: requiredUnless(this.formData.name_en),
          requiredIfFuction: requiredUnless(this.validatorName),
        },
        name_en: {
          requiredINameEn: requiredUnless(this.formData.name_ar),
          requiredIfFuction: requiredUnless(this.validatorName),
        },
        code: { required },
      },
    };
  },
  setup: () => ({ $v: useVuelidate() }),
  mounted() {
    this.getCode();
  },
  methods: {
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
    async getCode() {
      const code = await this.$store.dispatch("getCarStatusCode");

      this.formData.code = code.data.data;
    },
  },

  //OLD CODE

  // data() {
  //   return {
  //     // currencies: {},
  //   };
  // },
  // created() {
  //   this.getCurrencies();
  // },
  // methods: {
  //   async newCurrency() {
  //     try {
  //       var form = document.getElementById("currentForm");
  //       var formData = new FormData(form);
  //       const currencies = { URL: "currencies", data: formData };
  //       await this.$store.dispatch("storeCurrencies", currencies);
  //       document.location.href = "currencies";
  //     } catch (errors) {
  //       this.errors = errors;
  //       this.isEmpty = true;
  //     }
  //   },
  //   getCurrencies() {
  //     $axios
  //       .get("/currencies/create")
  //       .then((response) => {
  //         this.allCurrencies = response.data.data;
  //       })
  //       .catch((error) => {});
  //   },
  //   valCode(e) {
  //     if (e.target.value == "") {
  //       this.addClassCode = "is-invalid";
  //       this.seenCode = "";
  //     } else {
  //       this.addClassCode = "is-valid";
  //       this.seenCode = "d-none";
  //     }
  //   },
  // },
};
</script>

<style></style>
