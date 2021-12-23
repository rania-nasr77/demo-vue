<template>
  <div
    class="tab-pane fade tab-product-main active show"
    id="carcard-data"
    role="tabpanel"
    aria-labelledby="carcard-tab"
  >
    <div class="panel panel-default">
      <div class="panel-heading" v-wow="{
        'animation-name': 'fadeInUp',
        'animation-duration': '2s',
      }">
        <h4
          class="panel-title"
          @click.prevent="changeclass"
          :class="[{ active: active }, `${addactive}`]"
        >
          <a data-toggle="collapse" data-parent=".tab-pane" href="#collapseOneone">
            <i class="flaticon2-contract"></i>
            <span>Data</span>
          </a>
        </h4>
      </div>

      <div id="collapseOneone" class="panel-collapse collapse" :class="`${dataa}`">
        <div class="panel-body">
          <div class="row">
            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                  type="number"
                  name="baseSize"
                  id
                  placeholder="baseSize"
                  class="form-control"
                  v-on:input="valCode($event)"
                  :class="{ [``]: errors.baseSize }"
                />
                <label for class="col-form-label">{{ $t("baseSize") }}</label>
                <span
                  class="text-danger"
                  v-if="errors.baseSize"
                  :class="seenCode"
                >{{ errors.baseSize[0] }}</span>
              </div>
            </div>

            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                  type="number"
                  name="secretNo"

                  placeholder="password"
                  class="form-control"

                />
                <label for class="col-form-label">{{ $t("secretNo") }}</label>
                <span
                  class="text-danger"
                  v-if="errors.secretNo"
                  :class="seenCode"
                >{{ errors.secretNo[0] }}</span>
              </div>
            </div>

            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                  type="date"
                  name="prodDate"

                  placeholder="made_date"
                  class="form-control"

                />
                <label for class="col-form-label">{{ $t("prodDate") }}</label>
                <span
                  class="text-danger"
                  v-if="errors.prodDate"
                  :class="seenCode"
                >{{ errors.prodDate[0] }}</span>
              </div>
            </div>

            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                  type="number"
                  name="chassisNo"
                  id
                  placeholder="chassisNo"
                  class="form-control"
                  v-on:input="valCode($event)"
                  :class="{
                    [``]: errors.chassisNo,
                  }"
                />
                <label for class="col-form-label">{{ $t("car_chassis_number") }}</label>
                <span
                  class="text-danger"
                  v-if="errors.chassisNo"
                  :class="seenCode"
                >{{ errors.chassisNo[0] }}</span>
              </div>
            </div>



            <div class="col-3">
              <div class="form-group has-float-label">
                <input list="browsers1" name="color" class="form-control" />
                <datalist id="browsers1">
                  <option v-for="car in rows1" :key="car.id" v-bind:value="car.color"></option>
                </datalist>
                <label for="exampleSelectl" class="col-form-label">{{ $t("color") }}</label>
                <span class="text-danger"></span>
              </div>
            </div>





            <div class="col-3">
              <div class="form-group has-float-label">
                <input list="browsers1" name="model" class="form-control" />
                <datalist id="browsers1">
                  <option v-for="car in rows2" :key="car.id" v-bind:value="car.model"></option>
                </datalist>
                <label for="exampleSelectl" class="col-form-label">{{ $t("model") }}</label>
                <span class="text-danger"></span>
              </div>
            </div>

            <div class="col-3">
              <div class="form-group has-float-label">
                <input list="browsers1" name="type" class="form-control" />
                <datalist id="browsers1">
                  <option v-for="car in rows3" :key="car.id" v-bind:value="car.type"></option>
                </datalist>
                <label for="exampleSelectl" class="col-form-label">{{ $t("type") }}</label>
                <span class="text-danger"></span>
              </div>
            </div>

            <div class="col-3">
              <div class="form-group has-float-label">
                <input list="browsers1" name="vehicleKind" class="form-control" />
                <datalist id="browsers1">
                  <option v-for="car in rows4" :key="car.id" v-bind:value="car.vehicleKind"></option>
                </datalist>
                <label for="exampleSelectl" class="col-form-label">{{ $t("vehicleKind") }}</label>
                <span class="text-danger"></span>
              </div>
            </div>

            <div class="col-3">
              <div class="form-group has-float-label">
                <input list="browsers1" name="class" class="form-control" />
                <datalist id="browsers1">
                  <option v-for="car in rows5" :key="car.id" v-bind:value="car.class"></option>
                </datalist>
                <label for="exampleSelectl" class="col-form-label">{{ $t("class") }}</label>
                <span class="text-danger"></span>
              </div>
            </div>

            <div class="col-3">
              <div class="form-group has-float-label">
                <input list="browsers1" name="Base_type" class="form-control" />
                <datalist id="browsers1">
                  <option v-for="car in rows6" :key="car.id" v-bind:value="car.Base_type"></option>
                </datalist>
                <label for="exampleSelectl" class="col-form-label">{{ $t("Base_type") }}</label>
                <span class="text-danger"></span>
              </div>
            </div>

            

            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                  type="number"
                  name="maintenance_limit"
                  id
                  placeholder="maintenance_limit"
                  class="form-control"
                  v-on:input="valCode($event)"
                  :class="{
                    [``]: errors.maintenance_limit,
                  }"
                />
                <label for class="col-form-label">{{ $t("maintenance_limit") }}</label>
                <span
                  class="text-danger"
                  v-if="errors.maintenance_limit"
                  :class="seenCode"
                >{{ errors.maintenance_limit[0] }}</span>
              </div>
            </div>

            

            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                  type="date"
                  name="renewDate"

                  placeholder="renewDate"
                  class="form-control"

                />
                <label for class="col-form-label">{{ $t("form_renewal_date") }}</label>
                <span
                  class="text-danger"
                  v-if="errors.renewDate"
                  :class="seenCode"
                >{{ errors.renewDate[0] }}</span>
              </div>
            </div>

            <div class="col-3 has-float-label">
              <div class="form-group has-float-label">
                <select class="form-control" name="baseType">
                  <option selected value></option>

                  <option value="first">first</option>
                  <option value="second">second</option>
                </select>
                <label for class="col-form-label">baseType</label>

                <span class="text-danger" v-if="errors.baseType">
                  {{
                  errors.baseType[0]
                  }}
                </span>
              </div>
            </div>
               <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                  type="text"
                  name="extCode"

                  placeholder="extCode"
                  class="form-control"

                />
                <label for class="col-form-label">{{ $t("extra_code") }}</label>
                <span
                  class="text-danger"
                  v-if="errors.extCode"
                  :class="seenCode"
                >{{ errors.extCode[0] }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "data-input",

  props: {
    errors: {
      type: Object,
      default: () => ({})
    },
    rows1:{},
    rows2:{},
    rows3:{},
    rows4:{},
    rows5:{},
    rows6:{},
    
    dataa: {
      type: String
    },
    addactive: {
      type: String
    }
  },
  
  data() {
    return {
      languages: window.$languages,
      gridClassName: window.$gridClassName,
      active: false
    };
  },
    
 
  

  methods: {
    changeclass() {
      this.active = this.active == true ? false : true;
    }
  }
};
</script>

<style></style>
