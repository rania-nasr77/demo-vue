<template>
  <div v-if="allErrors">
    <div class="alert alert-danger" role="alert">
      <ul>
        <li v-for="(error, index) in allErrors" :key="index">
          {{ error[0] }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "errors",
  data() {
    return {
      allErrors: this.backErrors,
    };
  },
  props: {
    backErrors: {
      type: Object,
      default: {},
    },
  },
  computed: {
    listError() {
      return this.backErrors;
    },
  },
};
</script>