<template>
  <div>
    <top-bar-card 
    :newUrlName="`add-trailerData`"
    
     />
    <div class="card card-custom mb-9 mt-10 gutter-b">
      <!--begin::Header-->
      <div class="card-header">
        <div class="dropdown ml-auto">
          <button
            class="btn btn-outline-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="flaticon2-gear"></i> {{ $t("Settings") }}
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <label
              v-for="field in columns"
              :key="field.key"
              class="
                form-check form-check-custom form-check-solid
                me-10
                dropdown-item
                mb-0
              "
            >
              <input
                class="h-15px w-15px"
                :disabled="visibleFields.length == 2 && field.visible"
                v-model="field.visible"
                type="checkbox"
                inline
              />
              <span class="form-check-label fw-bold pl-3">{{
                field.label
              }}</span>
            </label>
          </div>
        </div>
      </div>
      <!--end::Header-->

      <vue-good-table
        :columns="visibleFields"
        :rows="rows"
        :fixed-header="true"
        theme="polar-bear"
        :search-options="{
          enabled: true,
        }"
        :sort-options="{
          enabled: true,
          initialSortBy: [
            { field: 'code', type: 'asc' },
            { field: 'plateNumber', type: 'asc' },
          ],
        }"
        :pagination-options="{
          enabled: true,
        }"
      >
        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'actions'">
            <delete-action :id="props.row.id" @delete="Delete"></delete-action>
          </span>
          <span v-else>
            {{ props.formattedRow[props.column.field] }}
          </span>
        </template>
      </vue-good-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "trailerDatas",
  url: `http://127.0.0.1:8000/api/trailerdata/export`,

  data() {
    return {
      languages: window.$languages,
      lang: "ar",
      columns: [
        {
          label: this.$t("code"),
          field: "code",
          uniqueId: true,
          visible: true,
        },
        {
          label: this.$t("plateNumber"),
          type: "String",
          field: "plateNumber",
          visible: true,
        },
        {
          label: this.$t("prodDate"),
          field: "prodDate",
          visible: true,
        },
        {
          label: this.$t("color"),
          field: "color",
          visible: true,
        },
        {
          label: this.$t("actions"),
          field: "actions",
          visible: true,
        },
      ],
      rows: [],
    };
  },
  created() {
    this.getResults();
  },
  computed: {
    trailerDatas() {
      return this.$store.getters.gettrailerData;
    },
    visibleFields() {
      return this.columns.filter((field) => field.visible);
    },
  },
  methods: {
    async getResults() {
            console.log("fdsfsd");

      await this.$store.dispatch("fetchtrailerDatas");
      this.rows = this.$store.getters.gettrailerData.data;
            console.log(this.rows);

    },
    async Delete(id) {
      const result = await this.$SwalChecks(
        "You won't be able to revert this!"
      );
      if (result.value) {
        const URL = "vehicle-data/" + id;
        await this.$store.dispatch("deleteVehicleData", URL);
        this.rows = this.rows.filter((item) => {
          return item.id != id;
        });
      }
    },
  },
};
</script>
<style>
</style>