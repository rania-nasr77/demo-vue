<template>
  <div>
    <top-bar-card
      :newUrlName="`currencies.edit`"
      :submit="updateCurrencies"
      :id="currency.id"
      :editUrlName="`currencies.edit`"
      :navigationUrl="`currencyNavigation`"
    />

    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="updateCurrencies" id="currentForm" ref="my-form">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row">
              <div class="col-md-6 col-12 mt-7">
                <div class="form-group has-float-label">
                  <select id="" class="form-control" name="code">
                    <option disabled selected>Convert Code</option>
                    <!-- <option
                      v-for="(currencies, index) in allCurrencies"
                      :value="currencies.currency_code"
                      :key="index"
                      :selected="(currencies.currency_code = currency.code)"
                    >
                      {{ currencies.currency_code }}
                    </option> -->
                  </select>
                  <label for="" class="col-form-label">{{ $("code") }}</label>
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
export default {
  name: "currencies.edit",
  components: {},

  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      currency: {},
    };
  },
};
</script>

