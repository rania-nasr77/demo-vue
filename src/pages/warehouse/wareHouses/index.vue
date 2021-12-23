<template>
  <div>
    <top-bar-card
      :newUrlName="`add-wareHouses`"
      :MainCategory="`cards`"
      :pageName="`Warehouse`"
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
              showUrlName="show-wareHouses"
            ></show-action> -->
            <edit-action
              :id="props.row.id"
              editUrlName="edit-wareHouses"
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
  name: "wareHouses",
  data() {
    return {
      columns: [
        {
          label: this.$t("column_code"),
          field: "code",
          sort: true,
          uniqueId: true,
          visible: true,
        },
        {
          label: this.$t("columns_name"),
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
  mounted() {
    this.getResults();
  },
  computed: {
    wareHouses() {
      return this.$store.getters.getWareHouses;
    },
    visibleFields() {
      return this.columns.filter((field) => field.visible);
    },
  },
  methods: {
    async getResults() {
      await this.$store.dispatch("fetchWareHouses");

      this.rows = this.$store.getters.getWareHouses.data;
    },

    async Delete(id) {
      try {
        const result = await this.$SwalChecks(
          "You won't be able to revert this!"
        );
        if (result.value) {
          await this.$store.dispatch("deleteWareHouse", id);
          this.rows = this.rows.filter((wareHouse) => {
            return wareHouse.id != id;
          });
        }
      } catch (errors) {
        this.errors = errors;
      }
    },
  },
};
</script>
