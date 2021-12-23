<template>
  <div>
    <top-bar-card
      :newUrlName="`edit-guarantees`"
      :submit="updateGuarantees"
      :id="guarantee.id"
      :editUrlName="`edit-guarantees`"
      :navigationUrl="`guranteeNavigation`"
    />

    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="updateGuarantees" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row align-items-end">
              <div class="col-6">
                <lang-tabs :languages="languages">
                  <template v-slot:input="{ language }">
                    <editInputs
                      :language="language"
                      :errors="errors"
                      :guarantee="guarantee"
                    />
                  </template>
                </lang-tabs>
              </div>
              <div class="col-6 has-float-label">
                <div class="mt-4 justify-content-between">
                  <div class="form-group">
                    <input
                      type="text"
                      name="duration"
                      id=""
                      class="form-control"
                      :value="guarantee.duration"
                    />
                    <label for="exampleSelectl"
                      >{{ $t("duration") }}
                      <span class="text-danger">*</span></label
                    >
                    <span class="text-danger" v-if="errors.duration">
                      {{ errors.duration[0] }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 has-float-label">
                <div class="justify-content-between">
                  <div class="form-group">
                    <label for="exampleSelectl">{{ $t("Upload_Files") }}</label>

                    <file-upload></file-upload>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import LangTabs from "@/components/form/LangTabs.vue";
import EditInputs from "./EditInputs.vue";
import FileUpload from "@/components/form/fileUpload";

export default {
  name: "edit-guarantees",
  components: {
    LangTabs,
    EditInputs,
    FileUpload,
  },

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
        document.location.href = "guarantees";
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