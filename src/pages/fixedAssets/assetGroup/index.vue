<template>
  <div>
    <top-bar-card 

        :newUrlName="`add-assetGroup`"
        :mainModuel="`tools`"
        :MainCategory="`cards`"
        :pageName="`assets_groups`"
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
            <i class="flaticon2-gear"></i> {{ $t("settings") }}
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
              showUrlName="showAssetGroups"
            ></show-action> -->
            <edit-action
              :id="props.row.id"
              editUrlName="edit-assetGroup"
            ></edit-action>
            <delete-action
              :id="props.row.id"
              @delete="deleteAssetGroup"
            ></delete-action>
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
  name: "asset-groups",
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
    AssetGroup() {
      return this.$store.getters.getAssetGroup;
    },
    visibleFields() {
      return this.columns.filter((field) => field.visible);
    },
  },
  methods: {

    async getResults() {
        await this.$store.dispatch("fetchAssetGroup");
        this.rows = this.$store.getters.getAssetGroup.data;
    },



    async deleteAssetGroup(assetGroup_id) {
      try {
        const result = await this.$SwalChecks(
          "You won't be able to revert this!"
        );
        if (result.value) {
          const URL = "asset-groups/" + assetGroup_id;
          await this.$store.dispatch("deleteAssetGroup", URL);
          this.rows = this.rows.filter((assetGroup) => {
            return assetGroup.id != assetGroup_id;
          });
        }
      } catch (errors) {
        this.errors = errors;
      }
    },
  },
};
</script>
