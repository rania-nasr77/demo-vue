<template>
  <div
      class="tab-pane fade tab-product-main"
      id="page-covers"
      role="tabpanel"
      aria-labelledby="covers-tab"
  >
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4
            class="panel-title"
            @click.prevent="changeclass"
            :class="[{ active: active }, `${addactive}`]"
        >
          <a data-toggle="collapse" data-parent=".tab-pane" href="#collapsefour">
            <i class="flaticon2-layers-2"></i>
            <span>Covers</span>
          </a>
        </h4>
      </div>
      <div id="collapsefour" class="panel-collapse collapse" :class="`${dataa}`">
        <div class="panel-body">
          <div class="row">
            <div class="form-group col-12 mb-0">
              <div
                  class="datatable datatable-bordered datatable-head-custom datatable-default datatable-primary datatable-loaded table-product alternative-table"
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
                    <!-- <th data-field class="datatable-cell end-cell text-center">
                      <span style>action</span>
                    </th> -->
                    <th data-field class="datatable-cell">
                      <span style>installation location</span>
                    </th>
                    <th data-field class="datatable-cell">
                      <span style>cover</span>
                    </th>
                    <th data-field class="datatable-cell">
                      <span style>warehouses</span>
                    </th>
                    <th data-field class="datatable-cell">
                      <span style>serial number</span>
                    </th>

                    <th data-field class="datatable-cell">
                      <span style>size</span>
                    </th>

                    <th data-field class="datatable-cell">
                      <span style>description</span>
                    </th>

                    <th data-field class="datatable-cell">
                      <span style>kind_cover</span>
                    </th>


                    <th data-field class="datatable-cell">
                      <span style>status</span>
                    </th>

                    <th data-field class="datatable-cell">
                      <span style>date_made</span>
                    </th>

                    <th data-field class="datatable-cell">
                      <span style>note</span>
                    </th>

                    <th data-field class="datatable-cell">
                      <span style>guarantee</span>
                    </th>


                  </tr>
                  </thead>
                  <tbody class="datatable-body">
                  <tr
                      v-for="(tr, index) in getCover"
                      :key="index"
                      class="datatable-row datatable-row-even"
                  >
                    <td class="datatable-cell-center datatable-cell">
                      <span style="width: 30px;">{{ index + 1 }}</span>
                    </td>
                    <td class="datatable-cell">
                      <input
                          type="text"
                          class="form-control"
                          placeholder="issue place"
                          v-bind:value="tr.installation_location"

                          :name="`cards[${index}][installation_location]`"
                      />
                    </td>


                    <td class="datatable-cell">
                      <input
                          type="text"
                          class="form-control"
                          placeholder="cover"
                          v-bind:value="tr.cover"

                          :name="`cards[${index}][cover]`"
                      />
                    </td>


                    <td class="datatable-cell">
                      <input
                          type="text"
                          class="form-control"
                          placeholder="warehouses"
                          v-bind:value="tr.warehouses"

                          :name="`cards[${index}][warehouses]`"
                      />
                    </td>

                    <td class="datatable-cell">
                      <input
                          type="text"
                          class="form-control"
                          placeholder="serial number"
                          v-bind:value="tr.serial_number"

                          :name="`cards[${index}][serial_number]`"
                      />
                    </td>

                    <td class="datatable-cell">
                      <input
                          type="text"
                          class="form-control"
                          placeholder="size "
                          v-bind:value="tr.size"

                          :name="`cards[${index}][size]`"
                      />
                    </td>

                    <td class="datatable-cell">
                      <input
                          type="text"
                          class="form-control"
                          placeholder="description"
                          v-bind:value="tr.description"

                          :name="`cards[${index}][description]`"
                      />
                    </td>

                    <td class="datatable-cell">
                      <input
                          type="text"
                          class="form-control"
                          placeholder="kind cover"
                          v-bind:value="tr.kind_cover"

                          :name="`cards[${index}][kind_cover]`"
                      />
                    </td>

                    <td class="datatable-cell">
                      <input
                          type="text"
                          class="form-control"
                          placeholder="status"
                          v-bind:value="tr.status"

                          :name="`cards[${index}][status]`"
                      />
                    </td>

                    <td class="datatable-cell">
                      <input
                          type="text"
                          class="form-control"
                          placeholder="date made"
                          v-bind:value="tr.date_made"

                          :name="`cards[${index}][date_made]`"
                      />
                    </td>

                    <td class="datatable-cell">
                      <input
                          type="text"
                          class="form-control"
                          placeholder="note"
                          v-bind:value="tr.note"

                          :name="`cards[${index}][note]`"
                      />
                    </td>

                    <td class="datatable-cell">
                      <input
                          type="text"
                          class="form-control"
                          placeholder="guarantee"
                          v-bind:value="tr.guarantee"

                          :name="`cards[${index}][guarantee]`"
                      />
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
  name: "editCoverInput",
  props: {
    errors: {
      type: Object,
      default: () => ({})
    },
    dataa: {
      type: String
    },
    addactive: {
      type: String
    },
    language: {
      type: String,
      default: "en"
    },

    addclassshow: {
      type: Object,
      default: null
    },
    testTrs: {},

  },
  data() {
    return {

      CoverData: [
        {
          id: 1
        }
      ],
      nextItemId: 2,
      active: false,
      incrment: 2
    };
  },
  created() {
    this.getAllCoversData();
    this.getResults();


  },
  computed: {
    cards() {
      return this.$store.getters.getCards;
    },
    getCover(){
      return this.$store.getters.getVehicleData;

    }
  },
  methods: {
    addRow() {
      this.CoverData.push({
        id: (this.nextItemId += this.nextItemId)
      });
      this.incrment++;

      this.nextItemId++;
    },
    deleteRow(index) {
      this.CoverData.splice(index, 1);
      this.incrment--;
    },
    async getResults() {
      const cardUrl = {URL: "cards"};
      const cards = await this.$store.dispatch("fetchCards", cardUrl);
    },
    changeclass() {
      this.active = this.active == true ? false : true;
    },
    methodevent() {
      this.$emit("methodevent");
    },
    methodactive() {
      if (this.addactive == "") {
        this.addactive == active;
      } else {
        this.addactive == "";
      }
    },
    async getAllCoversData() {
      const covers = {URL: "vehicle-datas/getCover?id=2"};
      const getvehicleData = await this.$store.dispatch("getVehicleData", covers);
      this.CoverData = getvehicleData.data.data;
      console.log(this.CoverData);


    },
  }
};
</script>

<style></style>
