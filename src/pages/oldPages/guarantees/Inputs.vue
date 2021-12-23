<template>
  <div class="inputs has-float-label">
    <div class="col-12 p-0">
      <div class="mt-4 justify-content-between">
        <div class="form-group">
          <input
            type="text"
            autofocus
            required
            class="form-control"
            :name="`name[${language}]`"
            :id="`name[${language}]`"
            :placeholder="`Name`"
            v-on:input="valinput($event)"
            :class="{ [`${addclass}`]: errors[`name.${language}`] }"
          />
          <label class="col-form-label"> {{ $t(`${language}.name`) }} <span class="text-danger">*</span></label>
          <!-- <span
            class="text-danger"
            v-if="errors[`name.${language}`]"
            :class="seenName"
          >
            {{ errors[`name.${language}`][0] }}
          </span> -->
        </div>
      </div>
    </div>
    <div class="col-12 p-0">
      <div class="form-group">
        <textarea
          type="text"
          class="form-control"
          :name="`description[${language}]`"
          :id="`description[${language}]`"
          :placeholder="`description`"
        ></textarea>
        <label class="col-form-label">
          {{ $t(`${language}.description`) }}</label
        >

        <span class="text-danger" v-if="errors[`${language}.description`]">
          {{ errors[`${language}.description`][0] }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "guarantees-inputs",
  data() {
    return {
      addclass: "is-invalid",
      seenName: "",
    };
  },
  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
    language: {
      type: String,
      default: "en",
    },
  },
  methods: {
    valinput(e) {
      if (e.target.value == "") {
        this.addclass = "is-invalid";
        this.seenName = "";
      } else {
        this.addclass = "is-valid";
        this.seenName = "d-none";
      }
    },
  },
};
</script>