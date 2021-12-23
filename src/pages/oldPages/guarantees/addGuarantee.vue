<template>
  <div>
    <top-bar-card
      :newUrlName="`add-guarantees`"
      :submit="newGuarantee"
      :id="0"
      :editUrlName="`edit-guarantees`"
      :navigationUrl="`guranteeNavigation`"
      :model="`guarantee`"
    />

    <div
      class="card card-custom mb-9 mt-10"
      v-wow="{
        'animation-name': 'fadeInUp',
        'animation-duration': '.6s',
      }"
    >
      <div v-if="isEmpty">
        <errors :errors="errors" />
      </div>
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit="newGuarantee" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row align-items-end">
              <div
                class="col-6"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <lang-tabs :languages="languages">
                  <template v-slot:input="{ language }">
                    <inputs :language="language" :errors="errors" />
                  </template>
                </lang-tabs>
              </div>
              <div
                class="col-6 has-float-label"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="mt-4 justify-content-between">
                  <div class="form-group">
                    <input
                      type="text"
                      name="duration"
                      placeholder="duration"
                      class="form-control"
                      v-on:input="valinput($event)"
                      :class="{ [`${addclass}`]: errors.duration }"
                      required
                    />
                    <label for="exampleSelectl"
                      >{{ $t("duration") }}
                      <span class="text-danger">*</span></label
                    >

                    <span
                      class="text-danger"
                      v-if="errors.duration"
                      :class="seenMessage"
                    >
                      {{ errors.duration[0] }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div
                class="col-12 has-float-label"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
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
import Errors from "@/components/layouts/errors.vue";
import Inputs from "./Inputs.vue";
import FileUpload from "@/components/form/fileUpload";
import { UAnimateContainer, UAnimate } from "vue-wow";
export default {
  name: "add-guarantees",
  components: {
    LangTabs,
    Inputs,
    FileUpload,
    Errors,
    UAnimateContainer,
    UAnimate,
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
      isEmpty: false,
      addclass: "is-invalid",
      seenMessage: "",
    };
  },
  methods: {
    async newGuarantee() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        const guarantee = { URL: "guarantees", data: formData };
        await this.$store.dispatch("storeGuarantees", guarantee);
        document.location.href = "guarantees";
      } catch (errors) {
        this.errors = errors;
        this.isEmpty = true;
      }
    },
    valinput(e) {
      if (e.target.value == "") {
        this.addclass = "is-invalid";
        this.seenMessage = "";
      } else {
        this.addclass = "is-valid";
        this.seenMessage = "d-none";
      }
    },
  },
};
</script>

<style>
</style>