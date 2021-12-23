<template>
  <div
    class="tab-pane fade show tab-product-main"
    id="options-data"
    role="tabpanel"
    aria-labelledby="options-tab"
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
          <a
            data-toggle="collapse"
            data-parent=".tab-pane"
            href="#collapseFour"
          >
            <i class="flaticon2-console"></i> <span>{{ $t("options") }}</span>
          </a>
        </h4>
      </div>
      <div
        id="collapseFour"
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
                style=""
              >
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
                        <span style="">{{ $t("Option_Name") }}</span>
                      </th>
                      <th data-field="main-price" class="datatable-cell">
                        <span style="">{{ $t("Value_Name") }}</span>
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
                          class="btn btn-danger btn-option"
                          data-original-title="Remove"
                          :disabled="index + 1 == 1 ? '' : disabled"
                        >
                          <i class="fa fa-minus-circle"></i>
                        </button>
                      </td>

                      <td class="datatable-cell">
                        <span>
                          <select
                            class="form-control"
                            :id="'option-' + index"
                            @change="
                              changeOption(
                                $event,
                                index,
                                'options[' + index + '][option_id]',
                                'option'
                              )
                            "
                          >
                            <option value="null" selected>Choose</option>
                            <option
                              v-for="option in options.data"
                              :key="option.id"
                              v-bind:value="option.id"
                            >
                              {{ option.name }}
                            </option>
                          </select>
                        </span>
                      </td>
                      <td class="datatable-cell">
                        <span>
                          <select
                            :class="'form-control option_' + index"
                            disabled
                            :name="'options[' + index + '][option_value_id]'"
                          >
                            <option disabled selected>Choose</option>
                            <option
                              v-for="(value, value_index) in values[index]"
                              :key="value.index"
                              v-bind:value="value.id"
                            >
                              {{ value.name }}
                            </option>
                          </select></span
                        >
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
  name: "options-inputs",

  props: {
    dataa: {
      type: String,
    },
    addactive: {
      type: String,
    },
    changeOption: {
      type: Function,
    },
    values: {
      type: Array,
    },
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      selectedIndex: 0,
      isActive: true,
      activeAssign: false,
      trs: [
        {
          id: "",
        },
      ],
      active: false,
      incrment: 2,
    };
  },
  created() {
    this.getOptions();
  },
  computed: {
    options() {
      return this.$store.getters.getOptions;
    },
  },
  mounted() {
    this.selectTab(0);
  },
  methods: {
    addRow() {
      this.trs.push({
        id: this.index,
      });
      this.index++;
      this.incrment++;
    },
    deleteRow(index) {
      if (index != 0) {
        this.trs.splice(index, 1);
      }
      this.incrment--;
    },
    async getOptions(page = 1) {
      const optionUrl = {
        URL: "options",
        page,
      };
      const options = await this.$store.dispatch("fetchOptions", optionUrl);
      this.laravelData = options;
    },
    selectTab(index) {
      this.selectedIndex = index;
    },
    getValue(e, i) {
      let subId = "options" + `[${i}]`;
      let quantity = document.getElementById(`value-row-quantity-${i}`);
      quantity.removeAttribute("name");
      quantity.setAttribute(
        "name",
        subId + `[values]` + `[${e.target.value}]` + `[stock]`
      );

      let price_prefix = document.getElementById(`value-row-price-prefix-${i}`);
      price_prefix.removeAttribute("name");
      price_prefix.setAttribute(
        "name",
        subId + `[values]` + `[${e.target.value}]` + `[price_prefix]`
      );

      let price = document.getElementById(`value-row-price-${i}`);
      price.removeAttribute("name");
      price.setAttribute(
        "name",
        subId + `[values]` + `[${e.target.value}]` + `[price]`
      );
    },
    changeclass() {
      this.active = this.active == true ? false : true;
    },
  },
};
</script>

<style>
</style>