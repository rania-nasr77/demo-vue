<template>
  <div>
    <top-bar-card
      :newUrlName="`add-countries`"
      :submit="updateCountry"
      :id="country.id"
      :editUrlName="`edit-countries`"
      :navigationUrl="`countryNavigation`"
    />

    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form ref="my-form" id="currentForm">
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
                      :country="country"
                    />
                  </template>
                </lang-tabs>
              </div>
              <div class="col-md-6 col-12 mt-7">
                <active-toggle :active="active" />
              </div>
            </div>
            <hr />

            <div>
              <div v-if="TaxesCountry.length > 0">
                <editTaxes :errors="errors" :TaxesCountry="TaxesCountry" />
              </div>

              <div v-else>
                <taxes />
              </div>
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
import EditInputs from "./EditInputs.vue";
import taxes from "./taxes.vue";
import EditTaxes from "./EditTaxes.vue";

export default {
  name: "edit-countries",
  components: { LangTabs, EditInputs, Button, taxes, EditTaxes },
  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      country: {},
      TaxesCountry: {},
      activeAssign: false,
      active: {},
      languages: window.$languages,
    };
  },
  created() {
    this.getCountry();
  },
  methods: {
    async updateCountry() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        formData.append("_method", "PATCH");
        const country = {
          URL: "countries/" + this.$route.params.id,
          data: formData,
        };
        await this.$store.dispatch("updateCountry", country);
        document.location.href = "countries";
      } catch (errors) {
        this.errors = errors;
      }
    },
    async getCountry() {
      const country = { URL: "countries/" + this.$route.params.id };
      const getCountry = await this.$store.dispatch("getCountry", country);
      this.country = getCountry.data.data;
      this.active = getCountry.data.data.active;
      this.TaxesCountry = this.country.pivotData;
    },
  },
};
</script>

<style>
</style>