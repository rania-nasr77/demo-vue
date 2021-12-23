<template>
  <div
    class="tab-pane fade tab-product-main"
    id="page-cards"
    role="tabpanel"
    aria-labelledby="cards-tab"
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
                      v-for="(card, index) in VehicleCards"
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


                      <input type="hidden" :name="`cards[${index}][id]`"  :value="card.id"/>




                      <td class="datatable-cell">
                        <select
                          class="form-control"
                          :name="`cards[${index}][document_issuer_id]`"
                          :id="'unit-' + index"
                          @change="changed(index)">

                          <option v-for="documentIsser in documentIssers.data"  v-bind:value="documentIsser.id"
                                  :selected="card.c_document_issuer_id ==documentIsser.c_document_issuer_id"
                                  >

                                
                          {{ documentIsser.name_en }}


                          </option>
                        </select>
                      </td>

                      <td class="datatable-cell">
                        <select
                          class="form-control"
                          :name="`cards[${index}][document_type_id]`"
                          :id="'unit-' + index"
                          @change="changed(index)">

                          <option value disabled selected>Choose</option>
                          <option v-for="DocumentType in DocumentTypes.data"  v-bind:value="DocumentType.id"

                                  :selected="card.document_type_id==DocumentType.document_type_id"
                          >


                            {{ DocumentType.name_en }}


                          </option>
                        </select>
                      </td>
                      <td class="datatable-cell">
                        <input
                          type="number"
                          class="form-control"
                          :value="card.doc_serial"
                          placeholder="doc_serial"
                          :name="`cards[${index}][doc_serial]`"
                        />
                      </td>


                      <td class="datatable-cell">
                        <input
                          type="date"
                          class="form-control"
                          placeholder="startDate"
                          :value="card.start_date"
                          :name="`cards[${index}][start_date]`"
                        />
                      </td>

                      <td class="datatable-cell">
                        <input
                          type="date"
                          class="form-control"
                          placeholder="endDate"
                          :value="card.end_date"
                          :name="`cards[${index}][end_date]`"
                        />
                      </td>

                      <td class="datatable-cell">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="notes"
                          :value="card.notes"
                          :name="`cards[${index}][notes]`"
                        />
                      </td>

                      <td class="datatable-cell">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="value"
                          :value="card.value"
                          :name="`cards[${index}][value]`"
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
    VehicleCards:{
      type: Array,
    },
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

    addclassshow: {
      type: Object,
      default: null,
    },
  },
  data() {

    return {
      documentIssers: [],
      DocumentTypes:[],

      VehicleCards: [
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
  computed: {

  },
  methods: {
    addRow() {
      this.VehicleCards.push({
        id: (this.nextItemId += this.nextItemId),
      });
      this.incrment++;

      this.nextItemId++;
    },
    deleteRow(index) {
      this.VehicleCards.splice(index, 1);
      this.incrment--;
    },

    changeclass() {
      this.active = this.active == true ? false : true;
    },


    getDocumentIssers() {
      $axios
        .get("/document-issuer")
        .then(response => {
          this.documentIssers = response.data;
          console.log(this.documentIssers.data);
        })
        .catch(error => {});
    },

    getDocumentType() {
      $axios
          .get("/documentTypes?dtype=1")
          .then(response => {
            this.DocumentTypes = response.data;
            console.log(this.DocumentTypes.data);
          })
          .catch(error => {});
    }
           

  }
};
</script>

<style></style>
