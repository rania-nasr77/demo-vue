<template>
  <div
    class="tab-pane fade tab-product-main"
    id="taxes-items"
    role="tabpanel"
    aria-labelledby="#taxes-items-tab"
  >
    <div class="panel panel-default">
      <div
        class="panel-heading"
        v-wow="{
          'animation-name': 'fadeInUp',
          'animation-duration': '2s',
        }"
      >
        <h4
          class="panel-title"
          @click.prevent="changeclass"
          :class="[{ active: active }, `${addactive}`]"
        >
          <a data-toggle="collapse" data-parent=".tab-pane" href="#collapsesix">
            <i class="flaticon2-layers-2"></i> <span>{{ $t("taxes") }}</span>
          </a>
        </h4>
      </div>
      <div id="collapsesix" class="panel-collapse collapse" :class="`${dataa}`">
        <div class="panel-body">
          <div class="row">
            <div class="col-12">
              <!--begin: Datatable-->

              <div
                class="
                  datatable
                  datatable-bordered
                  datatable-head-custom
                  datatable-default
                  datatable-primary
                  datatable-loaded
                  table-product
                  alternative-table
                "
                style=""
              >
                <div class="row">
                  <div class="align-self-center col-3">
                    <input
                      type="checkbox"
                      id="apply_tax"
                      name="apply_tax"
                      value="1"
                      class="mr-2"
                    />
                    <label for="apply_tax">{{ $t("Apply_tax") }}</label>
                  </div>

                  <div class="col-3 p-0">
                    <div class="form-group has-float-label">
                      <select class="form-control" name="">
                        <option value="" disabled selected>
                          {{ $t("Choose") }}
                        </option>
                        <option value="always">{{ $t("Always") }}</option>
                        <option value="sales">{{ $t("Sales") }}</option>
                        <option value="purshase">{{ $t("Purshase") }}</option>
                      </select>
                      <label for="exampleSelectl">{{ $t("taxes_At") }}</label>
                    </div>
                  </div>
                </div>
                <table class="datatable-table table table-bordered mt-2">
                  <thead class="datatable-head">
                    <tr class="datatable-row" style="left: 0px">
                      <th
                        data-field="RecordID"
                        class="datatable-cell-center datatable-cell text-center"
                      >
                        <span style="width: 30px">#</span>
                      </th>
                      <th
                        data-field=""
                        class="datatable-cell end-cell text-center"
                      >
                        <span style="">{{ $t("action") }}</span>
                      </th>
                      <th data-field="name" class="datatable-cell">
                        <span style=""> {{ $t("Tax_Name") }}</span>
                      </th>
                      <th data-field="country" class="datatable-cell">
                        <span style="">{{ $t("country") }}</span>
                      </th>
                      <th data-field="active-in" class="datatable-cell">
                        <span style="">{{ $t("in_country") }}</span>
                      </th>
                      <th data-field="active-out" class="datatable-cell">
                        <span style="">{{ $t("out_country") }}</span>
                      </th>
                      <th data-field="value" class="datatable-cell">
                        <span style="">{{ $t("value") }}</span>
                      </th>
                      <th data-field="impact" class="datatable-cell">
                        <span style="">{{ $t("impact") }}</span>
                      </th>
                      <th data-field="tax_case" class="datatable-cell">
                        <span style="">{{ $t("Tax_implementation") }}</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="datatable-body">
                    <tr
                      class="datatable-row datatable-row-even"
                      v-for="(tr, index) in trs"
                      :key="tr.id"
                      style="left: 0px"
                    >
                      <td
                        class="datatable-cell-center datatable-cell text-center"
                      >
                        <span style="width: 30px">{{ index + 1 }}</span>
                      </td>
                      <td class="text-center end-td">
                        <button
                          type="button"
                          data-toggle="tooltip"
                          title=""
                          @click="deleteRow(index)"
                          :disabled="index + 1 == 1 ? '' : disabled"
                          class="btn btn-danger btn-option"
                          data-original-title="Remove"
                        >
                          <i class="fa fa-minus-circle"></i>
                        </button>
                      </td>
                      <td class="datatable-cell">
                        <span>
                          <select
                            class="form-control"
                            :id="'tax-' + index"
                            @change="
                              changeOption(
                                $event,
                                index,
                                'taxes[' + index + '][tax_id]',
                                'tax'
                              )
                            "
                          >
                            <option value="" disabled selected>
                              {{ $t("Choose") }}
                            </option>
                            <option
                              v-for="tax in taxes.data"
                              :key="tax.id"
                              v-bind:value="tax.id"
                            >
                              {{ tax.name }}
                            </option>
                          </select>
                        </span>
                      </td>
                      <td class="datatable-cell">
                        <span>
                          <select
                            :class="'form-control tax_' + index"
                            disabled
                            :name="'taxes[' + index + '][country_id]'"
                          >
                            <option value="" disabled selected>
                              {{ $t("Choose") }}
                            </option>
                            <option
                              v-for="country in countries[index]"
                              :key="country.id"
                              v-bind:value="country.id"
                            >
                              {{ country.name }}
                            </option>
                          </select>
                        </span>
                      </td>
                      <td class="datatable-cell">
                        <select
                          :name="'taxes[' + index + '][active_in_country]'"
                          :id="'active-in-' + index"
                          :class="'form-control tax_' + index"
                          disabled
                        >
                          <option value="" disabled selected>
                            {{ $t("Choose") }}
                          </option>
                          <option v-bind:value="1">{{ $t("active") }}</option>
                          <option v-bind:value="0">{{ $t("unActive") }}</option>
                        </select>
                      </td>
                      <td class="datatable-cell">
                        <select
                          :class="'form-control tax_' + index"
                          disabled
                          :name="'taxes[' + index + '][active_out_country]'"
                          :id="'active-out-' + index"
                        >
                          <option value="" disabled selected>
                            {{ $t("Choose") }}
                          </option>
                          <option v-bind:value="1">{{ $t("active") }}</option>
                          <option v-bind:value="0">{{ $t("unActive") }}</option>
                        </select>
                      </td>
                      <td class="datatable-cell">
                        <span
                          ><input
                            type="number"
                            :id="'value-' + index"
                            placeholder="Value"
                            :class="'form-control tax_' + index"
                            disabled
                            :name="'taxes[' + index + '][value]'"
                        /></span>
                      </td>
                      <td class="datatable-cell">
                        <span>
                          <select
                            :class="'form-control tax_' + index"
                            disabled
                            :id="'impact-' + index"
                            :name="'taxes[' + index + '][impact]'"
                          >
                            <option value="" disabled selected>
                              {{ $t("Choose") }}
                            </option>
                            <option value="addition">
                              {{ $t("addition") }}
                            </option>
                            <option value="discount">
                              {{ $t("discount") }}
                            </option>
                          </select>
                        </span>
                      </td>
                      <td class="datatable-cell">
                        <span>
                          <select
                            :class="'form-control tax_' + index"
                            disabled
                            :id="'apply-' + index"
                            :name="'taxes[' + index + '][tax_case]'"
                          >
                            <option value="" disabled selected>
                              {{ $t("Choose") }}
                            </option>
                            <option value="always">{{ $t("Always") }}</option>
                            <option value="sales">{{ $t("Sales") }}</option>
                            <option value="purshase">
                              {{ $t("Purshase") }}
                            </option>
                          </select>
                        </span>
                      </td>
                    </tr>
                    <tr
                      class="datatable-row datatable-row-even"
                      id="relative_button_row"
                      style="left: 0px"
                    >
                      <td
                        class="datatable-cell-center datatable-cell text-center"
                      >
                        <span style="width: 30px">{{ incrment }}</span>
                      </td>
                      <td class="text-center end-td">
                        <button
                          type="button"
                          title=""
                          class="btn btn-primary btn-option"
                          @click="addRow()"
                        >
                          <i class="fa fa-plus-circle"></i>
                        </button>
                      </td>
                      <td class="datatable-cell"><span></span></td>
                      <td class="datatable-cell"><span></span></td>
                      <td class="datatable-cell"><span></span></td>
                      <td class="datatable-cell"><span></span></td>
                      <td class="datatable-cell"><span></span></td>
                      <td class="datatable-cell"><span></span></td>
                      <td class="datatable-cell"><span></span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--end: Datatable-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "taxes-inputs",
  props: {
    dataa: {
      type: String,
    },
    addactive: {
      type: String,
    },
    errors: {
      type: Object,
      default: () => ({}),
    },
    changeOption: {
      type: Function,
    },
    countries: {
      type: Array,
    },
  },
  data() {
    return {
      taxes: {},
      index: 0,
      activeAssign: false,
      isActive: true,
      trs: [
        {
          id: 1,
        },
      ],
      nextItemId: 2,
      active: false,
      incrment: 2,
    };
  },
  created() {
    this.getTaxes();
  },

  methods: {
    getTaxes() {
      $axios
        .get(`/taxes`)
        .then((response) => {
          this.taxes = response.data;
        })
        .catch((error) => {});
    },
    addRow() {
      this.trs.push({
        id: (this.nextItemId += this.nextItemId),
      });

      this.nextItemId++;
      this.incrment++;
    },
    deleteRow(index) {
      this.trs.splice(index, 1);
      this.incrment--;
    },
    changeTax(event, $val) {
      var value = event.target.value;
      this.info = value;
      $axios
        .get(`/taxCountries/${value}`)
        .then((response) => {
          var tax_data = response.data;
          this.$set(this.countries, $val, tax_data.data);
        })
        .catch((error) => {});
    },
    changeclass() {
      this.active = this.active == true ? false : true;
    },
  },
};
</script>
