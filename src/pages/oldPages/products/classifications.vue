<template>
  <div
    class="tab-pane fade tab-product-main"
    id="classifications-items"
    role="tabpanel"
    aria-labelledby="#classifications-items-tab"
  >
    <div class="panel panel-default">
      <div class="panel-heading" v-wow="{
        'animation-name': 'fadeInUp',
        'animation-duration': '2s',
      }">
        <h4
          class="panel-title"
          @click.prevent="changeclass"
          :class="[{ active: active }, `${addactive}`]"
        >
          <a
            data-toggle="collapse"
            data-parent=".tab-pane"
            href="#collapseseven"
          >
            <i class="flaticon2-layers-2"></i>
            <span>{{ $t("classifications") }}</span>
          </a>
        </h4>
      </div>
      <div
        id="collapseseven"
        class="panel-collapse collapse"
        :class="`${dataa}`"
      >
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
                id="kt_datatable_8"
                style=""
              >
                <table class="table table-bordered mt-2">
                  <thead class="datatable-head">
                    <tr class="datatable-row" style="left: 0px">
                      <th
                        data-field="RecordID"
                        class="datatable-cell-center datatable-cell text-center"
                      >
                        <span>#</span>
                      </th>
                      <th
                        data-field=""
                        class="datatable-cell end-cell text-center"
                      >
                        <span style="">{{ $t("action") }}</span>
                      </th>
                      <th data-field="name" class="datatable-cell">
                        <span style="">{{ $t("Classification_Name") }}</span>
                      </th>
                      <th data-field="main-price" class="datatable-cell">
                        <span style="">{{ $t("price_for_main_unit") }}</span>
                      </th>
                      <th data-field="min_price" class="datatable-cell">
                        <span style="">{{
                          $t("min_price_for_main_unit")
                        }}</span>
                      </th>
                      <template v-for="select_unit in selected_units">
                        <th class="datatable-cell">
                          <span style="">price for {{ select_unit.name }}</span>
                        </th>
                        <th class="datatable-cell">
                          <span style=""
                            >min price for {{ select_unit.name }}</span
                          >
                        </th>
                      </template>
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
                            :id="'classification-' + index"
                            @change="
                              changeOption(
                                $event,
                                index,
                                'classifications[' +
                                  index +
                                  '][classification_id]',
                                'classification'
                              )
                            "
                          >
                            <option value="null" selected>
                              {{ $t("Choose") }}
                            </option>
                            <option
                              v-for="classification in classifications.data"
                              :key="classification.id"
                              v-bind:value="classification.id"
                            >
                              {{ classification.name }}
                            </option>
                          </select>
                        </span>
                      </td>
                      <td class="datatable-cell">
                        <span
                          ><input
                            type="number"
                            :name="
                              'classifications[' +
                              index +
                              '][main_selling_price]'
                            "
                            :id="'m_unit-price' + index"
                            placeholder="Value"
                            :class="'form-control classification_' + index"
                            disabled
                        /></span>
                      </td>
                      <td class="datatable-cell">
                        <span
                          ><input
                            type="number"
                            :id="'min_m_unit-price' + index"
                            :name="
                              'classifications[' +
                              index +
                              '][main_min_selling_price]'
                            "
                            placeholder="Value"
                            :class="'form-control classification_' + index"
                            disabled
                        /></span>
                      </td>

                      <template
                        v-for="(select_unit, unit_index) in selected_units"
                      >
                        <td class="datatable-cell">
                          <span
                            ><input
                              type="number"
                              :id="'unit-price-' + select_unit.id + '-' + index"
                              :name="
                                'classifications[' +
                                index +
                                '][selling_price][' +
                                unit_index +
                                '][value]'
                              "
                              placeholder="Value"
                              :class="'form-control classification_' + index"
                              disabled
                            />
                            <input
                              type="hidden"
                              :name="
                                'classifications[' +
                                index +
                                '][selling_price][' +
                                unit_index +
                                '][unit_id]'
                              "
                              :class="'classification_' + index"
                              disabled
                              v-bind:value="select_unit.id"
                            />
                          </span>
                        </td>
                        <td class="datatable-cell">
                          <span
                            ><input
                              type="number"
                              :id="
                                'min_unit-price-' + select_unit.id + '-' + index
                              "
                              placeholder="Value"
                              :name="
                                'classifications[' +
                                index +
                                '][min_selling_price][' +
                                unit_index +
                                '][value]'
                              "
                              :class="'form-control classification_' + index"
                              disabled
                            />
                            <input
                              type="hidden"
                              :name="
                                'classifications[' +
                                index +
                                '][min_selling_price][' +
                                unit_index +
                                '][unit_id]'
                              "
                              :class="'form-control classification_' + index"
                              disabled
                              v-bind:value="select_unit.id"
                            />
                          </span>
                        </td>
                      </template>
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
  name: "classifications-inputs",
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
    selected_units: {
      type: Array,
    },
    changeOption: {
      type: Function,
    },
  },
  data() {
    return {
      classifications: {},
      index: 0,
      isActive: true,
      activeAssign: false,
      trs: [
        {
          id: 1,
        },
      ],
      incrment: 2,
      active: false,
      nextItemId: 2,
    };
  },
  created() {
    this.getClassifications();
  },

  methods: {
    getClassifications() {
      $axios
        .get(`/classifications`)
        .then((response) => {
          this.classifications = response.data;
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
      console.log(index);
      this.trs.splice(index, 1);
      this.incrment--;
    },
    changeclass() {
      this.active = this.active == true ? false : true;
    },
  },
};
</script>
