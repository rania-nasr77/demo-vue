<template>
  <div>
    <top-bar-card
      :newUrlName="`add-periods`"
      :submit="newPeriod"
      :id="0"
      :editUrlName="`edit-periods`"
      :navigationUrl="`Periods`"
      :model="`Periods`"
      :mainModuel="`POS`"
      :MainCategory="`cards`"
      :pageName="`Periods`"
      :operation="`add`"
      :listUrlName="``"
    />

    <div
      class="card card-custom mb-9 mt-10"
      v-wow="{
        'animation-name': 'fadeInRight',
        'animation-duration': '.6s',
      }"
    >
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form ref="my-form" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("periods") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row align-items-end">
              <div class="col-md-6 col-12 has-float-label">
                <div class="form-group">
                  <input
                    type="text"
                    name="code"
                    id=""
                    placeholder="code"
                    class="form-control"
                  />
                  <label for="" class="col-form-label">{{ "code" }}</label>
                </div>
              </div>
              <div class="col-12 d-flex p-0">
                <div
                  class="col-lg-6 has-float-label position-relative"
                  v-wow="{
                    'animation-name': 'fadeInUp',
                    'animation-duration': '1s',
                  }"
                >
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control w-100"
                      :placeholder="`Name`"
                    />

                    <label class="col-form-label">
                      {{ $t(`ar.name`) }}
                      <span class="text-danger0">*</span></label
                    >
                  </div>
                </div>
                <div
                  class="col-lg-6 has-float-label position-relative"
                  v-wow="{
                    'animation-name': 'fadeInUp',
                    'animation-duration': '1s',
                  }"
                >
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control w-100"
                      :name="`name_en`"
                      :placeholder="`Name`"
                    />

                    <label class="col-form-label">
                      {{ $t(`en.name`) }}
                      <span class="text-danger0">*</span></label
                    >
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-12 has-float-label">
                <div class="form-group has-float-label">
                  <select class="form-control" id="" name="account_id">
                    <option value=""></option>
                  </select>
                  <label class="col-form-label">account</label>
                </div>
              </div>
              <div class="col-md-6 col-12 has-float-label">
                <div class="row">
                  <div class="col-6">
                    <div class="form-group">
                      <input
                        type="time"
                        name="start_time"
                        class="form-control"
                      />
                      <label for="" class="col-form-label">{{
                        $t("start_time")
                      }}</label>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group">
                      <input type="time" name="end_time" class="form-control" />
                      <label for="" class="col-form-label">{{
                        $t("end_time")
                      }}</label>
                    </div>
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
import { UAnimateContainer, UAnimate } from "vue-wow";
export default {
  name: "add-Periods",
  components: { UAnimateContainer, UAnimate },

  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
};
</script>

<style></style>
