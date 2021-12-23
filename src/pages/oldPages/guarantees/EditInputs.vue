<template>
  <div class="inputs has-float-label">
    <div class="col-12 p-0">
      <div class="mt-4 justify-content-between">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            :name="`name[${language}]`"
            :id="`name[${language}]`"
            :placeholder="`Name`"
            :value="guarantee ? guarantee.names[language] : ''"
          />
          <label class="col-form-label"> {{ $t(`${language}.name`) }} <span class="text-danger">*</span></label>
          <span class="text-danger" v-if="errors[`name.${language}`]">
            {{ errors[`name.${language}`][0] }}
          </span>
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
          :value="guarantee ? guarantee.descriptions[language] : ''"
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
  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
    language: {
      type: String,
      default: "en",
    },
    guarantee: {
      type: Object,
      default: null,
    },
  },
};
</script>