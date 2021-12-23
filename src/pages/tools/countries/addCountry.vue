<template>
  <div>
    <top-bar-card
      :newUrlName="`add-countries`"
      :submit="newCountry"
      :id="0"
      :editUrlName="`edit-countries`"
      :navigationUrl="`countryNavigation`"
      :model="`country`"
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
      <div class="card-header flex-wrap border-0 pb-0 d-block holder">
        <form ref="my-form" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row align-items-end">
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
              <div class="col-md-6 col-12 mt-7">
                <active-toggle
                  v-wow="{
                    'animation-name': 'fadeInUp',
                    'animation-duration': '1s',
                  }"
                />
              </div>
            </div>
            <hr />

            <div>
              <taxes
                :errors="errors"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '2s',
                }"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/form/button.vue";
import LangTabs from "@/components/form/LangTabs.vue";
import Errors from "@/components/layouts/errors.vue";
import Inputs from "./Inputs.vue";
import taxes from "./taxes.vue";
import { UAnimateContainer, UAnimate } from "vue-wow";
export default {
  name: "add-countries",
  components: {
    LangTabs,
    Inputs,
    taxes,
    Button,
    Errors,
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
      country: {},
      activeAssign: false,
      languages: window.$languages,
      formId: "currentForm",
      active: 0,
      isEmpty: false,
    };
  },

  methods: {
    async newCountry() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        const country = { URL: "countries", data: formData };
        await this.$store.dispatch("storeCountry", country);
      } catch (errors) {
        this.errors = errors;
        this.isEmpty = true;
      }
    },
    changeBt() {
      this.active = this.active == 0 ? 1 : 0;
    },
  },
};
</script>

<style></style>
