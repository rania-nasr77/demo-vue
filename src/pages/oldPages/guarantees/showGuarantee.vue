<template>
  <div>
    <top-bar-card :newUrlName="`add-categories`" />

    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form>
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row">
              <div class="col-6">
                <lang-tabs :languages="languages">
                  <template v-slot:input="{ language }">
                    <inputs
                      :language="language"
                      :errors="errors"
                      :guarantee="guarantee"
                    />
                  </template>
                </lang-tabs>
              </div>
              <div class="col-6">
                <div class="col-12">
                  <div class="mt-4 d-flex justify-content-between">
                    <div class="col form-group">
                      <label for="exampleSelectl">{{ $t("duration") }}</label>
                      <input
                        type="text"
                        name="duration"
                        id=""
                        class="form-control"
                        :value="guarantee.duration"
                      />

                      <span class="text-danger" v-if="errors.duration">
                        {{ errors.duration[0] }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12">
                <div class="col-12 d-flex justify-content-between">
                  <div class="col mt-lg-12 form-group">
                    <label for="exampleSelectl">{{ $t("Upload_Files") }}</label>

                    <file-upload></file-upload>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import LangTabs from "@/components/form/LangTabs.vue";
import Inputs from "./Inputs.vue";
import FileUpload from "@/components/form/fileUpload";

export default {
  name: "show-guarantees",
  components: { LangTabs, Inputs, FileUpload },

  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      guarantee: {},
      languages: window.$languages,
    };
  },
  created() {
    this.guaranteeId = this.$route.params.id;
    this.getGuarantee();
  },
  methods: {
    async updateGuarantees() {
      try {
        console.log("updated");
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        formData.append("_method", "PUT");
        const guarantee = {
          URL: "/guarantees/" + this.$route.params.id,
          data: formData,
        };
        await this.$store.dispatch("updateGuarantees", guarantee);
      } catch (errors) {
        this.errors = errors;
      }
    },
    getGuarantee() {
      $axios
        .get("/guarantees/" + this.guaranteeId)
        .then((response) => {
          console.log(response.data.data.id);
          this.guarantee = response.data.data;
        })
        .catch((error) => {});
    },
  },
};
</script>

<style>
</style>