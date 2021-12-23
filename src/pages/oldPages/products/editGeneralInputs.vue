<template>
  <div
    class="tab-pane fade show tab-product-main active"
    id="page-general2"
    role="tabpanel"
    aria-labelledby="general2-tab"
  >
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent=".tab-pane" href="#collapseOne">
            <i class="flaticon2-gear"></i> <span>{{ $t("General") }}</span>
          </a>
        </h4>
      </div>
      <div id="collapseOne" class="panel-collapse collapse in show">
        <div class="panel-body">
          <div class="row">
            <div class="col-md-6">
              <div class="has-float-label">
                <div class="form-group stock-select">
                  <div class="input-group">
                    <select
                      type="text"
                      name="warehouses[]"
                      id="cust"
                      placeholder="stock"
                      multiple
                      class="form-control"
                    >
                      <option
                        v-for="warehouse in wareHouses.data"
                        v-bind:value="warehouse.id"
                        v-bind:name="warehouse.name"
                      >
                        {{ warehouse.name }}
                      </option>
                    </select>
                    <label class="col-form-label">{{ $t("Stock") }}</label>
                    <div class="input-group-append">
                      <div
                        class="btn btn-icon btn-search-o"
                        onclick="viewSearchModal(1)"
                        style=""
                        data-toggle="modal"
                        data-target="#exampleModalSizeLg"
                      >
                        <span class="svg-icon svg-icon-xl svg-icon-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              stroke-width="1"
                              fill="none"
                              fill-rule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24"></rect>
                              <path
                                d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                                fill="#000000"
                                fill-rule="nonzero"
                                opacity="0.3"
                              ></path>
                              <path
                                d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                                fill="#000000"
                                fill-rule="nonzero"
                              ></path>
                            </g>
                          </svg>
                          <!--end::Svg Icon-->
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group has-float-label">
                <select class="form-control" name="unit_id">
                  <option selected disabled value=""></option>

                  <option
                    v-for="unit in units.data"
                    v-bind:value="unit.id"
                    v-bind:name="unit.name"
                    :selected="unit.id == base_unit"
                  >
                    {{ unit.name }}
                  </option>
                </select>
                <label class="col-form-label">{{ $t("units") }}</label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-group has-float-label">
                <label for="exampleSelectl" class="img-upload">{{
                  $t("upload_image_product")
                }}</label>

                <file-upload></file-upload>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FileUpload from "@/components/form/fileUpload";
export default {
  components: {
    FileUpload,
  },
  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
    product: {
      type: Object,
      default: {},
    },
    base_unit: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  created() {
    this.getWareHouses();
    this.getResults();
    this.getUnit();
  },
  computed: {
    units() {
      return this.$store.getters.getUnits;
    },
    wareHouses() {
      return this.$store.getters.getWareHouses;
    },
  },
  methods: {
    async getResults(page = 1) {
      const unitUrl = {
        URL: "units",
        page,
      };
      const units = await this.$store.dispatch("fetchUnits", unitUrl);
    },
    async getWareHouses(page = 1) {
      const warehouseUrl = {
        URL: "wareHouses",
        page,
      };
      const warehouses = await this.$store.dispatch(
        "fetchWareHouses",
        warehouseUrl
      );
    },
  },
};
</script>

<style></style>
