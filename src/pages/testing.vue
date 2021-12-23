 <template>
  <div>
    <top-bar-card :newUrlName="`add-taxes`" />
    <div class="card card-custom mb-9 mt-10 gutter-b">
      <!--begin::Header-->
      <div class="card-header"></div>
      <!--end::Header-->
      <name-input :errors="errors" />

      <edit-input :errors="errors" :data="city" />
    </div>
    <!-- <div>
      <Select2
        v-model="myValue"
        :options="myOptions"
        :settings="{ settingOption: value, settingOption: value }"
        @change="myChangeEvent($event)"
        @select="mySelectEvent($event)"
      />
    </div> -->
    <div>
      <label class="typo__label">Tagging</label>
      <multiselect
        v-model="value"
        tag-placeholder="Add this as new tag"
        placeholder="Search or add a tag"
        label="name"
        track-by="code"
        :options="options"
        :multiple="true"
        :taggable="true"
        @tag="addTag"
      ></multiselect>
    </div>
  </div>
</template>

<script>
export default {
  name: "testing",
  data() {
    return {
      city: {
        name_ar: "testing",
        name_en: "testing",
      },
      myValue: "",
      myOptions: ["op1", "op2", "op3"], // or [{id: key, text: value}, {id: key, text: value}]
      value: [{ name: "Javascript", code: "js" }],
      options: [
        { name: "Vue.js", code: "vu" },
        { name: "Javascript", code: "js" },
        { name: "Open Source", code: "os" },
      ],
    };
  },
  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
    city: {
      type: Object,
      default: () => ({ name_ar: "testing", name_en: "testing" }),
    },
  },
  // data() {
  //   return {
  //     languages: window.$languages,
  //   };
  // },

  methods: {
    myChangeEvent(val) {
      console.log(val);
    },
    mySelectEvent({ id, text }) {
      console.log({ id, text });
    },
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.options.push(tag);
      this.value.push(tag);
    },
  },
};
</script>
