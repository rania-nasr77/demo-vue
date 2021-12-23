<template>
  <div
    class="tab-pane fade tab-product-main"
    id="page-cards"
    role="tabpanel"
    aria-labelledby="cards-tab"
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
            href="#collapseThree"
          >
            <i class="flaticon2-layers-2"></i>
            <span> {{ $t("cards") }}</span>
          </a>
        </h4>
      </div>
      <div
        id="collapseThree"
        class="panel-collapse collapse"
        :class="`${dataa}`"
      >
        <div class="panel-body">
          <div class="row">
            <div class="form-group col-12 mb-0">
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
                id="kt_datatable_2"
                style
              >
                <table class="datatable-table table table-bordered mb-0">
                  <thead class="datatable-head">
                    <tr class="datatable-row" style="left: 0px">
                      <th
                        data-field="RecordID"
                        class="datatable-cell-center datatable-cell text-center"
                      >
                        <span>#</span>
                      </th>
                      <th
                        data-field
                        class="datatable-cell end-cell text-center"
                      >
                        <span style> {{ $t("action") }} </span>
                      </th>
                      <th data-field class="datatable-cell">
                        <span style>{{ $t("document_issuer_id") }} </span>
                      </th>
                      <th data-field class="datatable-cell">
                        <span style>{{ $t("document_type_id") }} </span>
                      </th>
                      <th data-field class="datatable-cell">
                        <span style>{{ $t("number") }}</span>
                      </th>


                      <th data-field class="datatable-cell">
                        <span style>{{ $t("issue_date") }}</span>
                      </th>

                      <th data-field class="datatable-cell">
                        <span style>{{ $t("expire_date") }}</span>
                      </th>

                      <th data-field class="datatable-cell">
                        <span style>{{ $t("note") }}</span>
                      </th>

                      <th data-field class="datatable-cell">
                        <span style>{{ $t("value") }}</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="datatable-body">
                    <tr
                      v-for="(card, index) in formData.cards"
                      :key="card.id"
                      class="datatable-row datatable-row-even"
                    >
                      <td class="datatable-cell-center datatable-cell">
                        <span style="width: 30px">{{ index + 1 }}</span>
                      </td>
                      <td class="text-center end-td">
                        <button
                          type="button"
                          data-toggle="tooltip"
                          @click="deleteRow(index)"
                          title="Remove"
                          :disabled="index + 1 == 1 ? '' : disabled"
                          class="btn btn-danger btn-option"
                        >
                          <i class="fa fa-minus-circle"></i>
                        </button>
                      </td>

                      <td class="datatable-cell">
                        <select
                          class="form-control"

                          :id="'unit-' + index"
                          v-model="formData.cards[index].document_issuer_id"
                       >
                          <option value disabled selected>Choose</option>
                          <option
                            v-for="documentIsser in documentIssers.data"
                            v-bind:key="documentIsser.id"
                            :value="documentIsser.id"
                          >
                            {{ documentIsser.name_en }}
                          </option>
                        </select>
                      </td>

                      <td class="datatable-cell">
                        <select
                          class="form-control"
                          :id="'unit-' + index"
                          v-model="formData.cards[index].document_type_id"
                        >
                          <option value disabled selected>Choose</option>

                          <option
                            v-for="DocumentType in DocumentTypes.data"
                            v-bind:key="DocumentType.id"
                            :value="DocumentType.id"
                          >
                            {{ DocumentType.name_en }}
                          </option>
                        </select>
                      </td>
                      <td class="datatable-cell">
                        <input
                          type="number"
                          class="form-control"
                          placeholder="doc_serial"
                          v-model="formData.cards[index].doc_serial"
                        />

                      </td>



                      <td class="datatable-cell">
                        <input
                          type="date"
                          class="form-control"
                          placeholder="startDate"
                          v-model="formData.cards[index].start_date"
                        />
                      </td>

                      <td class="datatable-cell">
                        <input
                          type="date"
                          class="form-control"
                          placeholder="endDate"
                          v-model="formData.cards[index].end_date"
                        />
                      </td>

                      <td class="datatable-cell">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="notes"
                          v-model="formData.cards[index].notes"
                        />
                      </td>

                      <td class="datatable-cell">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="value"
                          v-model="formData.cards[index].value"
                        />
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
                      <td class="datatable-cell">
                        <span></span>
                      </td>
                      <td class="datatable-cell">
                        <span></span>
                      </td>
                      <td class="datatable-cell">
                        <span></span>
                      </td>
                      <td class="datatable-cell">
                        <span></span>
                      </td>
                      <td class="datatable-cell">
                        <span></span>
                      </td>
                      <td class="datatable-cell">
                        <span></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    dataa: {
      type: String,
    },
    addactive: {
      type: String,
    },
    language: {
      type: String,
      default: "en",
    },

    formData: { type: Object },

    addclassshow: {
      type: Object,
      default: null,
    },
    backErrors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      documentIssers: [],
      DocumentTypes: [],

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
    this.getDocumentIssers();
    this.getDocumentType();
  },
  computed: {},
  methods: {
    addRow() {


      this.formData.cards.push({
        doc_serial: "",
        document_issuer_id: "",
        document_type_id: "",
        end_date: "",


        notes: "",
        start_date: "",
        value: "",
      });
      this.incrment++;

      this.nextItemId++;
    },
    deleteRow(index) {
      this.formData.cards.splice(index, 1);
      this.incrment--;
    },

    changeclass() {
      this.active = this.active == true ? false : true;
    },

    getDocumentIssers() {
      $axios
        .get("/document-issuer")
        .then((response) => {
          this.documentIssers = response.data;
          console.log(this.documentIssers.data);
        })
        .catch((error) => {});
    },

    getDocumentType() {
      $axios
        .get("/document-types?dtype=1")
        .then((response) => {
          this.DocumentTypes = response.data;
          console.log(this.DocumentTypes.data);
        })
        .catch((error) => {});
    },
  },
};
</script>

<style></style>
