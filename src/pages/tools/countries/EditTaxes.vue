<template>
  <div class="row">
    <div class="col-12">
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
        <!-- table  -->

        <table class="datatable-table table table-bordered">
          <thead class="datatable-head">
            <tr class="datatable-row" style="left: 0px">
              <th
                data-field="RecordID"
                class="datatable-cell-center datatable-cell text-center"
              >
                <span>#</span>
              </th>
              <th data-field="" class="datatable-cell end-cell text-center">
                <span style="">
                  {{ $t("action") }}
                </span>
              </th>
              <th data-field="" class="datatable-cell">
                <span style=""> {{ $t("Tax_name") }}</span>
              </th>
              <th data-field="" class="datatable-cell">
                <span style=""> {{ $t("type") }}</span>
              </th>
              <th data-field="" class="datatable-cell">
                <span style=""> {{ $t("impact") }}</span>
              </th>
              <th data-field="" class="datatable-cell">
                <span style=""> {{ $t("value") }}</span>
              </th>
              <th data-field="" class="datatable-cell">
                <span style=""> {{ $t("active_in_country") }}</span>
              </th>
              <th data-field="" class="datatable-cell">
                <span style=""> {{ $t("active_out_country") }}</span>
              </th>
              <th data-field="" class="datatable-cell">
                <span style=""> {{ $t("start_date") }}</span>
              </th>
              <th data-field="" class="datatable-cell">
                <span style=""> {{ $t("end_date") }}</span>
              </th>
            </tr>
          </thead>
          <tbody class="datatable-body">
            <tr
              v-for="(tax, index) in TaxesCountry"
              :key="index"
              class="datatable-row datatable-row-even"
            >
              <td class="datatable-cell-center datatable-cell">
                <span style="width: 30px">{{ index + 1 }}</span>
              </td>
              <td class="text-center end-td">
                <button
                  type="button"
                  data-toggle="tooltip"
                  title="Remove"
                  :disabled="index + 1 == 1 ? '' : disabled"
                  class="btn btn-danger btn-option"
                  @click="deleteRow(index)"
                >
                  <i class="fa fa-minus-circle"></i>
                </button>
              </td>
              <td class="datatable-cell">
                <select
                  class="form-control"
                  v-if="!tax.tax_id"
                  :id="'tax-' + index"
                  @change="
                    changeOption(
                      $event,
                      index,
                      `taxes[${index}][tax_id]`,
                      'tax'
                    )
                  "
                >
                  <option selected value="">Choose...</option>

                  <option
                    v-for="taxs in taxes.data"
                    :key="taxs.id"
                    v-bind:value="taxs.id"
                    :selected="taxs.id == tax.tax_id"
                  >
                    {{ taxs.name }}
                  </option>
                </select>
                <select
                  class="form-control"
                  :name="`taxes[${index}][tax_id]`"
                  :class="'form-control tax_' + index"
                  :disabled="!tax.tax_id"
                  v-else
                >
                  <option selected value="">Choose...</option>

                  <option
                    v-for="taxs in taxes.data"
                    :key="taxs.id"
                    v-bind:value="taxs.id"
                    :selected="taxs.id == tax.tax_id"
                  >
                    {{ taxs.name }}
                  </option>
                </select>
                <span
                  class="text-danger"
                  v-if="errors[`taxes.${index}.tax_id`]"
                >
                  {{ errors[`taxes.${index}.tax_id`] }}
                </span>
              </td>
              <td class="datatable-cell">
                <select
                  :name="`taxes[${index}][type]`"
                  :class="'form-control tax_' + index"
                  :disabled="!tax.type"
                >
                  <option selected value="">Choose...</option>
                  <!-- <option value="fixed_number">fixed_number</option> -->
                  <option
                    value="percentage"
                    :selected="tax.type == 'percentage'"
                  >
                    percentage
                  </option>
                </select>
                <span class="text-danger" v-if="errors[`taxes.${index}.type`]">
                  {{ errors[`taxes.${index}.type`] }}
                </span>
              </td>
              <td class="datatable-cell">
                <select
                  :class="'form-control tax_' + index"
                  :disabled="!tax.impact"
                  :name="`taxes[${index}][impact]`"
                >
                  <option selected value="">Choose...</option>
                  <option value="addition" :selected="tax.impact == 'addition'">
                    addition
                  </option>
                  <option value="discount" :selected="tax.impact == 'discount'">
                    discount
                  </option>
                </select>
                <span
                  class="text-danger"
                  v-if="errors[`taxes.${index}.impact`]"
                >
                  {{ errors[`taxes.${index}.impact`] }}
                </span>
              </td>
              <td class="datatable-cell">
                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder="add_value"
                  :name="`taxes[${index}][value]`"
                  :value="tax ? tax.value : ''"
                  :class="'form-control tax_' + index"
                  :disabled="!tax.value"
                />
                <span class="text-danger" v-if="errors[`taxes.${index}.value`]">
                  {{ errors[`taxes.${index}.value`] }}
                </span>
              </td>
              <td class="datatable-cell">
                <select
                  :name="`taxes[${index}][active_in_country]`"
                  :class="'form-control tax_' + index"
                  :disabled="
                    tax.active_in_country != 0 && tax.active_in_country != 1
                  "
                >
                  <option selected disabled>Choose...</option>
                  <option value="1" :selected="tax.active_in_country == 1">
                    Active
                  </option>
                  <option value="0" :selected="tax.active_in_country == 0">
                    unActive
                  </option>
                </select>
                <span
                  class="text-danger"
                  v-if="errors[`taxes.${index}.active_in_country`]"
                >
                  {{ errors[`taxes.${index}.active_in_country`] }}
                </span>
              </td>
              <td class="datatable-cell">
                <select
                  :name="`taxes[${index}][active_out_country]`"
                  :class="'form-control tax_' + index"
                  :disabled="
                    tax.active_out_country != 0 && tax.active_out_country != 1
                  "
                >
                  <option selected value="">Choose...</option>
                  <option value="1" :selected="tax.active_out_country == 1">
                    Active
                  </option>
                  <option value="0" :selected="tax.active_out_country == 0">
                    unActive
                  </option>
                </select>
                <span
                  class="text-danger"
                  v-if="errors[`taxes.${index}.active_out_country`]"
                >
                  {{ errors[`taxes.${index}.active_out_country`] }}
                </span>
              </td>
              <td class="datatable-cell">
                <input
                  type="date"
                  :name="`taxes[${index}][start_date]`"
                  :class="'form-control tax_' + index"
                  :disabled="!tax.start_date"
                  :value="tax ? tax.start_date : ''"
                />
                <span
                  class="text-danger"
                  v-if="errors[`taxes.${index}.start_date`]"
                >
                  {{ errors[`taxes.${index}.start_date`] }}
                </span>
              </td>
              <td class="datatable-cell">
                <input
                  type="date"
                  :name="`taxes[${index}][end_date]`"
                  :class="'form-control tax_' + index"
                  :disabled="!tax.end_date"
                  :value="tax ? tax.end_date : ''"
                />
                <span
                  class="text-danger"
                  v-if="errors[`taxes.${index}.end_date`]"
                >
                  {{ errors[`taxes.${index}.end_date`] }}
                </span>
              </td>
            </tr>
            <tr class="datatable-row datatable-row-even">
              <td class="datatable-cell-center datatable-cell">
                <span style="width: 30px"></span>
              </td>
              <td class="text-center end-td">
                <button
                  @click="addRow()"
                  type="button"
                  class="btn btn-primary add_new"
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
              <td class="datatable-cell"><span></span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--  -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },

    TaxesCountry: {},
  },
  data() {
    return {
      date: new Date(),

      TaxesCountry: [
        {
          id: 1,
        },
      ],
      nextItemId: "",
      incrment: "",
    };
  },
  created() {
    this.getTaxes();
  },
  computed: {
    taxes() {
      return this.$store.getters.getTaxes;
    },
  },
  methods: {
    addRow() {
      this.TaxesCountry.push({
        id: (this.nextItemId += this.nextItemId),
      });
      this.incrment++;
      this.nextItemId++;
    },
    deleteRow(index) {
      this.TaxesCountry.splice(index, 1);
      this.incrment--;
    },
    async getTaxes() {
      const taxUrl = { URL: "taxes" };
      const taxes = await this.$store.dispatch("fetchTaxes", taxUrl);
    },
    changeOption(event, $index, $name, $model) {
      var value = event.target.value;
      this.info = value;
      var id = event.target.id;
      var select = document.getElementById(id);
      var disabled_elements = document.getElementsByClassName(
        $model + "_" + $index
      );
      select.name = $name;
      for (var index in disabled_elements) {
        if (disabled_elements[index] != disabled_elements.length) {
          disabled_elements[index].disabled = false;
        }
      }
    },
  },
};
</script>

<style></style>
