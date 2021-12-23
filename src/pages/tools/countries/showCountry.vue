<template>
  <div>
    <top-bar-card :newUrlName="`add-countries`" />
    <div
      class="card card-custom mb-9 mt-10"
      v-wow="{
        'animation-name': 'fadeInRight',
        'animation-duration': '.6s',
      }"
    >
      <div class="inf0-top-fixed">
        <h5 class="font-weight-bolder text-primary d-b">
          {{ $t("show_countries") }}
        </h5>
        <div class="separator separator-solid my-3"></div>
        <div class="row">
          <div class="col">
            <div class="bg-lighten border p-3">
              <div class="mb-6">
                <div class="fw-bold text-gray-600 fs-7">country name</div>
                <div class="fw-bolder text-gray-800 fs-6">
                  {{ country.names[lang] }}
                </div>
              </div>
              <div class="mb-6">
                <div class="fw-bold text-gray-600 fs-7">Status</div>
                <div class="fw-bolder text-gray-800 fs-6 mt-2">
                  <span class="badge-light-success">{{ country.active }}</span>
                </div>
              </div>
              <div class="mb-6">
                <div class="fw-bold text-gray-600 fs-7">Created At</div>
                <div class="fw-bolder text-gray-800 fs-6">
                  {{ country.created_at }}
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <table class="table table-striped p-3 mb-0 table-bordered">
              <thead class="datatable-head">
                <tr class="datatable-row" style="left: 0px">
                  <th data-field="" class="datatable-cell">
                    <span style="">ID </span>
                  </th>
                  <th data-field="" class="datatable-cell">
                    <span style="">Name</span>
                  </th>
                </tr>
              </thead>
              <tbody class="items">
                <tr>
                  <td class="text-start">
                    <div class=""></div>
                  </td>
                  <td>
                    <div class=""></div>
                  </td>
                </tr>
                <tr v-for="city in country.cities" :key="city.id">
                  <td class="text-start">
                    <div class="">
                      {{ city.id }}
                    </div>
                  </td>
                  <td>
                    <div class="">
                      {{ city.names[lang] }}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-12 mt-4">
            <table class="table table-striped p-3 mb-0 table-bordered">
              <thead class="datatable-head">
                <tr class="datatable-row" style="left: 0px">
                  <th data-field="" class="datatable-cell">
                    <span style="">Tax name </span>
                  </th>
                  <th data-field="" class="datatable-cell">
                    <span style="">type</span>
                  </th>
                  <th data-field="" class="datatable-cell">
                    <span style="">impact</span>
                  </th>
                  <th data-field="" class="datatable-cell">
                    <span style="">value</span>
                  </th>
                  <th data-field="" class="datatable-cell">
                    <span style="">active_in_country</span>
                  </th>
                  <th data-field="" class="datatable-cell">
                    <span style="">active_out_country</span>
                  </th>
                  <th data-field="" class="datatable-cell">
                    <span style="">Start date</span>
                  </th>
                  <th data-field="" class="datatable-cell">
                    <span style="">end date</span>
                  </th>
                </tr>
              </thead>
              <tbody class="items">
                <tr v-for="(tr, index) in country.pivotData" :key="tr.id">
                  <td class="text-start">
                    <div class="">
                      <select
                        class="form-control"
                        :name="`taxes[${index + 1}][tax_id]`"
                      >
                        <option selected value="">Choose...</option>

                        <option
                          v-for="tax in taxes.data"
                          :key="tax.id"
                          v-bind:value="tax.id"
                          :selected="tax.id == tr.tax_id"
                        >
                          {{ tax.name }}
                        </option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <div class="">
                      <select
                        class="form-control"
                        :name="`taxes[${index + 1}][type]`"
                      >
                        <option selected value="">Choose...</option>
                        <option
                          :selected="tr.type == 'fixed_number'"
                          value="fixed_number"
                        >
                          fixed_number
                        </option>
                        <option
                          :selected="tr.type == 'percentage'"
                          value="percentage"
                        >
                          percentage
                        </option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <div class="">
                      <select
                        class="form-control"
                        :name="`taxes[${index + 1}][impact]`"
                      >
                        <option selected value="">Choose...</option>
                        <option
                          :selected="tr.impact == 'addition'"
                          value="addition"
                        >
                          addition
                        </option>
                        <option
                          :selected="tr.impact == 'discount'"
                          value="discount"
                        >
                          discount
                        </option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <div class="">
                      <input
                        type="number"
                        class="form-control"
                        :value="tr.value"
                        placeholder="add_value"
                        :name="`taxes[${index + 1}][value]`"
                      />
                    </div>
                  </td>
                  <td>
                    <div class="">
                      <select
                        class="form-control"
                        :name="`taxes[${index + 1}][active_in_country]`"
                      >
                        <option selected value="">Choose...</option>
                        <option :selected="tr.active_in_country == 1" value="1">
                          Active
                        </option>
                        <option :selected="tr.active_in_country == 0" value="0">
                          unActive
                        </option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <div class="">
                      <select
                        class="form-control"
                        :name="`taxes[${index + 1}][active_out_country]`"
                      >
                        <option selected value="">Choose...</option>
                        <option
                          :selected="tr.active_out_country == 1"
                          value="1"
                        >
                          Active
                        </option>
                        <option
                          :selected="tr.active_out_country == 0"
                          value="0"
                        >
                          unActive
                        </option>
                      </select>
                    </div>
                  </td>

                  <td>
                    <div class="">
                      <input
                        type="date"
                        :name="`taxes[${index + 1}][start_date]`"
                        class="form-control"
                        :value="tr.start_date"
                      />
                    </div>
                  </td>
                  <td>
                    <div class="">
                      <input
                        type="date"
                        :name="`taxes[${index + 1}][end_date]`"
                        class="form-control"
                        :value="tr.end_date"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LangTabs from "@/components/form/LangTabs.vue";
import Inputs from "./Inputs.vue";
import { bus } from "../../../main";
export default {
  name: "show-countries",
  components: {
    LangTabs,
    Inputs,
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
      languages: window.$languages,
      lang: "ar",
    };
  },
  created() {
    this.getCountry();
    this.getTaxes();
    bus.$on("lang", (data) => {
      this.lang = data;
    });
  },
  computed: {
    taxes() {
      return this.$store.getters.getTaxes;
    },
  },
  methods: {
    async getTaxes() {
      const taxUrl = {
        URL: "taxes",
      };
      const taxes = await this.$store.dispatch("fetchTaxes", taxUrl);
    },
    async getCountry() {
      const country = {
        URL: "countries/" + this.$route.params.id,
      };
      const getCountry = await this.$store.dispatch("getCountry", country);
      this.country = getCountry.data.data;
    },
  },
};
</script>

<style>
</style>