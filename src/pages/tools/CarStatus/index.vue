<template>
  <div>
    <top-bar-card
        :newUrlName="`add_CarStatus`"
        :mainModuel="`tools`"
        :MainCategory="`cards`"
        :pageName="`cards`"
        :operation="`list`"
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
            { field: 'name', type: 'asc' },
            { field: 'code', type: 'asc' },
          ],
        }"
          :pagination-options="{
          enabled: true,
        }"
      >
        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'actions'">
            <!-- <show-action
              :id="props.row.id"
              showUrlName="show-CarStatus"
            ></show-action> -->
            <edit-action
                :id="props.row.id"
                editUrlName="edit_CarStatus"
            ></edit-action>
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
  name: "CarStatus",
  data() {
    return {
      columns: [
        {
          label: this.$t("code"),
          field: "code",
          sort: true,
          uniqueId: true,
          visible: true,
        },
        {
          label: this.$t("name"),
          type: "String",
          field: "name",
          visible: true,
        },

        {
          label: this.$t("created_at"),
          field: "created_at",
          visible: true,
        },
        {
          label: this.$t("action"),
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
    CarStatus() {
      return this.$store.getters.getCarStatus;
    },
    visibleFields() {
      return this.columns.filter((field) => field.visible);
    },
  },
  methods: {
    async getResults() {
      await this.$store.dispatch("fetchCarStatus");
      this.rows = this.$store.getters.getCarStatus.data;
    },


    async Delete(id) {
      const result = await this.$SwalChecks(
          "You won't be able to revert this!"
      );
      if (result.value) {

        await this.$store.dispatch("deleteCarStatus",id);

        this.rows = this.rows.filter((item) => {
          return item.id != id;
        });
      }
    },
  },
};
</script>