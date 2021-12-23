<template>
  <div>
    <div class="header-side h-side-l">
      <span class="item-logo">
        <a href="#">
          <img src="assets/media/logos/asset-1.png" class="logo-img00" />
        </a>
      </span>
    </div>
    <div id="kt_header" class="header header-fixed">
      <div class="ruby-menu-demo-header w-100">
        <!-- ########################### -->
        <!-- START: RUBY HORIZONTAL MENU -->
        <div class="ruby-wrapper">
          <ul class="ruby-menu">
            <!-- <li class="ruby-active-menu-item item-logo">
            <a href="#">
              <img src="assets/media/logos/asset-1.png" class="logo-img00" />
            </a>
          </li> -->

            <li class="ruby-menu-mega">
              <a href="#">{{ $t("nav.Accounting") }}</a>
              <div class="ruby-grid ruby-grid-lined">
                <div class="ruby-row"></div>
              </div>
              <span class="ruby-dropdown-toggle"></span>
            </li>

            <!-- START FIXED ASSET -->
            <li
              class="ruby-menu-mega"
              id="fixedAsset"
              ref="fixedAsset"
              @click.prevent="addClassActiveToSub(`fixedAsset`)"
            >
              <a href="#">{{ $t("nav.Fixed assets") }}</a>

              <div class="ruby-grid ruby-grid-lined">
                <div class="ruby-row">
                  <div class="w-22 operation-part hidden-md" style="width: 10%">
                    <div class="border-redius-custem">
                      <ul style="padding: 2px">
                        <li class="w-50">
                          <router-link
                            @click.once="addClassActiveToSub(`fixedAsset`)"
                            :to="{ name: 'add-assetGroup' }"
                            v-b-tooltip.hover.bottom
                            :title="$t('nav.asset_group')"
                          >
                            <img :src="url26" width="100%" height="100%" />
                          </router-link>
                        </li>
                        <li class="w-50">
                          <router-link
                            @click.once="addClassActiveToSub(`fixedAsset`)"
                            to="/asset-status/create"
                            v-b-tooltip.hover.bottom
                            :title="$t('nav.asset_status')"
                          >
                            <img :src="url27" width="100%" height="100%" />
                          </router-link>
                        </li>
                      </ul>
                    </div>

                    <div class="divcontaier-level text-center">
                      {{ $t("nav.cards") }}

                      <span class="ruby-dropdown-toggle"></span>
                    </div>
                  </div>
                </div>
              </div>
              <span class="ruby-dropdown-toggle"></span>
            </li>
            <!-- END FIXED ASSET -->

            <!-- START Stocking -->
            <li
              class="ruby-menu-mega"
              ref="warehouse"
              id="warehouse"
              @click.prevent="addClassActiveToSub(`warehouse`)"
            >
              <a href="#">{{ $t("nav.Stocking") }}</a>
              <div class="ruby-grid ruby-grid-lined">
                <div class="ruby-row">
                  <div
                    class="w-22 operation-part hidden-md"
                    style="width: max-content"
                  >
                    <div class="border-redius-custem">
                      <ul style="padding: 2px">
                        <li class="w-100">
                          <router-link
                            @click.once="addClassActiveToSub(`warehouse`)"
                            :to="{
                              name: 'add-wareHouses',
                              params: {
                                mainModule: `warehouses`,
                                MainCategory: `cards`,
                              },
                            }"
                            v-b-tooltip.hover.bottom
                            :title="$t('warehouses')"
                          >
                            <img :src="url4" width="100%" height="100%" />
                          </router-link>
                        </li>
                        <li class="w-100">
                          <router-link
                            to="/products/create"
                            v-b-tooltip.hover.bottom
                            title="product card"
                          >
                            <img :src="url" width="100%" height="100%" />
                          </router-link>
                        </li>
                      </ul>
                    </div>

                    <div class="divcontaier-level text-center">
                      {{ $t("nav.cards") }}

                      <span class="ruby-dropdown-toggle"></span>
                    </div>
                  </div>

                  <!-- <div class="w-22 hidden-md">
                  <div class="border-redius-custem">
                    <ul style="padding: 2px">
                      <li>
                        <router-link to="/warehouses/create">
                          <img :src="url4" width="100%" height="100%" />
                          {{ $t("sidebar.warehouses") }}
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/products/create">
                          <img :src="url" width="100%" height="100%" />
                          {{ $t("sidebar.products") }}
                        </router-link>
                      </li>
                      <li>
                        <a href="#">
                          <img :src="url3" width="100%" height="100%" />group
                          card
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img :src="url5" width="100%" height="100%" />cashier
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            :src="url6"
                            width="100%"
                            height="100%"
                          />description card
                        </a>
                      </li>
                      <li>
                        <router-link to="/paymentWays/create">
                          <img :src="url2" width="100%" height="100%" />
                          {{ $t("sidebar.PaymentWay") }}
                        </router-link>
                      </li>
                    </ul>
                  </div>
                  <h3 class="ruby-list-heading text-center">cards</h3>
                </div> -->
                  <!-- <div class="w-22 operation-part hidden-md">
                  <div class="border-redius-custem">
                    <ul style="padding: 2px">
                      <li>
                        <a
                          href="#"
                          v-b-tooltip.hover.bottom
                          title="Transfer Item Voucher"
                        >
                          <img :src="url7" width="100%" height="100%" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          v-b-tooltip.hover.bottom
                          title="Inventory Lists"
                        >
                          <img :src="url8" width="100%" height="100%" />
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          v-b-tooltip.hover.bottom
                          title="Inventory List Approval"
                        >
                          <img :src="url9" width="100%" height="100%" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          v-b-tooltip.hover.bottom
                          title="Label Print"
                        >
                          <img :src="url10" width="100%" height="100%" />
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="divcontaier-level text-center">
                    operation
                    <i class="ki ki-bold-more-ver">
                      <ul class="level-menu-ul">
                        <li>
                          <a href="#">opening stock bill</a>
                          <ul>
                            <li>
                              <a href="#">F.P Stock</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">sales</a>
                          <ul>
                            <li>
                              <a href="#">sales</a>
                            </li>
                            <li>
                              <a href="#">qutation</a>
                            </li>
                            <li>
                              <a href="#">POS</a>
                            </li>
                            <li>
                              <a href="#">مبيعات</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <router-link to="/invoice/purchase/create">{{
                            $t("sidebar.Purchase")
                          }}</router-link>
                          <ul>
                            <li>
                              <router-link to="/invoice/purchase/create">{{
                                $t("sidebar.Purchase")
                              }}</router-link>
                            </li>
                            <li>
                              <router-link
                                to="/invoice/purchase_order/create"
                                >{{ $t("sidebar.Purchase_Order") }}</router-link
                              >
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">resales</a>
                          <ul>
                            <li>
                              <a href="#">Retaurn sales</a>
                            </li>
                            <li>
                              <a href="#">R.Pos</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">repurchases</a>
                          <ul>
                            <li>
                              <a href="#">retaurn purchase</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">documentary credits</a>
                          <ul>
                            <li>
                              <a href="#">shipment policies</a>
                            </li>
                            <li>
                              <a href="#">documentary credits voucher types</a>
                            </li>
                            <li>
                              <a href="#">documentary credits types</a>
                            </li>
                            <li>
                              <a href="#">open documentary credits</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">simple receive entries</a>
                          <ul>
                            <li>
                              <a href="#">received from customer</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">simple pay entries</a>
                          <ul>
                            <li>
                              <a href="#">pay for supplier</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </i>

                    <span class="ruby-dropdown-toggle"></span>
                  </div>
                </div> -->
                  <!-- <div class="w-22 hidden-md" style="width: 13%">
                  <div class style="border: 1px solid #01499073">
                    <ul style="padding: 2px">
                      <li class="w-50">
                        <a href="#">
                          <img :src="url11" width="100%" height="100%" />prod
                          chart
                        </a>
                      </li>
                      <li class="w-50">
                        <a href="#">
                          <img :src="url13" width="100%" height="100%" />stores
                          chart
                        </a>
                      </li>
                      <li class="w-50">
                        <a href="#">
                          <img :src="url12" width="100%" height="100%" />bills
                          chart
                        </a>
                      </li>
                      <li class="w-50">
                        <a href="#">
                          <img :src="url14" width="100%" height="100%" />account
                          chart
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 class="ruby-list-heading text-center">charts</h3>
                </div>
                <div class="w-22 hidden-md">
                  <div class style="border: 1px solid #01499073">
                    <ul style="padding: 2px">
                      <li>
                        <a href="#">
                          <img :src="url4" width="100%" height="100%" />store
                          card
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img :src="url" width="100%" height="100%" />product
                          card
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img :src="url3" width="100%" height="100%" />group
                          card
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img :src="url5" width="100%" height="100%" />cashier
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            :src="url6"
                            width="100%"
                            height="100%"
                          />description card
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img :src="url2" width="100%" height="100%" />pay way
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 class="ruby-list-heading text-center">reports</h3>
                </div>
                <div class="w-22 hidden-md">
                  <div class style="border: 1px solid #01499073">
                    <ul style="padding: 2px">
                      <li>
                        <a href="#">
                          <img :src="url4" width="100%" height="100%" />store
                          card
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img :src="url" width="100%" height="100%" />product
                          card
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img :src="url3" width="100%" height="100%" />group
                          card
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img :src="url5" width="100%" height="100%" />cashier
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            :src="url6"
                            width="100%"
                            height="100%"
                          />description card
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img :src="url2" width="100%" height="100%" />pay way
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 class="ruby-list-heading text-center">management</h3>
                </div> -->
                </div>
              </div>
              <span class="ruby-dropdown-toggle"></span>
            </li>
            <!-- END Stocking -->

            <!-- START POS -->
            <li
              class="ruby-menu-mega"
              id="POS"
              ref="POS"
              @click.prevent="addClassActiveToSub(`POS`)"
            >
              <a href="#">{{ $t("nav.POS") }}</a>

              <div class="ruby-grid ruby-grid-lined">
                <div class="ruby-row">
                  <div class="w-22 operation-part hidden-md" style="width: 10%">
                    <div class="border-redius-custem">
                      <ul style="padding: 2px">
                        <li class="w-50">
                          <router-link
                            @click.once="addClassActiveToSub(`POS`)"
                            to="/selling-points/create"
                            v-b-tooltip.hover.bottom
                            :title="$t('nav.selling_point')"
                          >
                            <img :src="url26" width="100%" height="100%" />
                          </router-link>
                        </li>
                        <li class="w-50">
                          <router-link
                            @click.once="addClassActiveToSub(`POS`)"
                            to="/periods/create"
                            v-b-tooltip.hover.bottom
                            :title="$t('nav.periods')"
                          >
                            <img :src="url27" width="100%" height="100%" />
                          </router-link>
                        </li>
                      </ul>
                    </div>

                    <div class="divcontaier-level text-center">
                      {{ $t("nav.cards") }}

                      <span class="ruby-dropdown-toggle"></span>
                    </div>
                  </div>

                  <!-- <div class="w-22 operation-part hidden-md" style="width: 35%"> -->
                  <!-- <div class="border-redius-custem">
                      <ul style="padding: 2px"> -->
                  <!-- <li>
                          <router-link
                            to="/carClassifications/create"
                            v-b-tooltip.hover.bottom
                            :title="$t('carClassifications')"
                          >
                            <img :src="url18" width="100%" height="100%" />
                          </router-link>
                        </li> -->
                  <!-- <li>
                        <router-link
                          to="/employees/create"
                          v-b-tooltip.hover.bottom
                          title="emp.card"
                        >
                          <img :src="url17" width="100%" height="100%" />
                        </router-link>
                      </li> -->

                  <!-- <li>
                          <router-link
                            to="/documentTypes/create"
                            v-b-tooltip.hover.bottom
                            :title="$t('nav.nav.car_card')"
                          >
                            <img :src="url15" width="100%" height="100%" />
                          </router-link>
                        </li> -->
                  <!-- <li>
                          <router-link
                            to="/trailerdocumentTypes/create"
                            v-b-tooltip.hover.bottom
                            :title="$t('nav.trailer_card')"
                          >
                            <img :src="url16" width="100%" height="100%" />
                          </router-link>
                        </li> -->

                  <!-- <li>
                          <router-link
                            to="/accounts/create"
                            v-b-tooltip.hover.bottom
                            :title="$t('acc. card')"
                          >
                            <img :src="url19" width="100%" height="100%" />
                          </router-link>
                        </li> -->
                  <!-- <li>
                          <router-link
                            to="/warehouses/create"
                            v-b-tooltip.hover.bottom
                            :title="$t('warehouses')"
                          >
                            <img :src="url4" width="100%" height="100%" />
                          </router-link>
                        </li> -->
                  <!-- <li>
                          <router-link
                            to="/"
                            v-b-tooltip.hover.bottom
                            :title="$t('group card')"
                          >
                            <img :src="url3" width="100%" height="100%" />
                          </router-link>
                        </li> -->
                  <!-- <li>
                        <router-link
                          to="/products/create"
                          v-b-tooltip.hover.bottom
                          title="product card"
                        >
                          <img :src="url" width="100%" height="100%" />
                        </router-link>
                      </li> -->
                  <!-- </ul>
                    </div> -->

                  <!-- <div class="divcontaier-level text-center">
                      {{ $t("nav.related cards") }}

                      <span class="ruby-dropdown-toggle"></span>
                    </div> -->
                  <!-- </div> -->
                  <!-- <div class="w-22 hidden-md" style="width: 13%">
                  <div class style="border: 1px solid #01499073">
                    <ul style="padding: 2px">
                      <li class="w-50">
                        <a href="#">
                          <img :src="url11" width="100%" height="100%" />prod
                          chart
                        </a>
                      </li>
                      <li class="w-50">
                        <a href="#">
                          <img :src="url13" width="100%" height="100%" />stores
                          chart
                        </a>
                      </li>
                      <li class="w-50">
                        <a href="#">
                          <img :src="url12" width="100%" height="100%" />bills
                          chart
                        </a>
                      </li>
                      <li class="w-50">
                        <a href="#">
                          <img :src="url14" width="100%" height="100%" />account
                          chart
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 class="ruby-list-heading text-center">charts</h3>
                </div> -->
                </div>
              </div>
              <span class="ruby-dropdown-toggle"></span>
            </li>
            <!-- END POS -->
            <li class="ruby-menu-mega">
              <a href="#">{{ $t("nav.Employee") }}</a>
              <div class="ruby-grid ruby-grid-lined">
                <div class="ruby-row"></div>
              </div>
              <span class="ruby-dropdown-toggle"></span>
            </li>
            <li class="ruby-menu-mega">
              <a href="#">{{ $t("nav.Salary") }}</a>
              <div class="ruby-grid ruby-grid-lined">
                <div class="ruby-row"></div>
              </div>
              <span class="ruby-dropdown-toggle"></span>
            </li>
            <li class="ruby-menu-mega">
              <a href="#">{{ $t("nav.Industry") }}</a>
              <div class="ruby-grid ruby-grid-lined">
                <div class="ruby-row"></div>
              </div>
              <span class="ruby-dropdown-toggle"></span>
            </li>
            <li class="ruby-menu-mega">
              <a href="#">{{ $t("nav.Maintenance") }}</a>
              <div class="ruby-grid ruby-grid-lined">
                <div class="ruby-row"></div>
              </div>
              <span class="ruby-dropdown-toggle"></span>
            </li>
            <li class="ruby-menu-mega">
              <a href="#">{{ $t("nav.Transport") }}</a>
              <div class="ruby-grid ruby-grid-lined">
                <div class="ruby-row"></div>
              </div>
              <span class="ruby-dropdown-toggle"></span>
            </li>
            <li class="ruby-menu-mega">
              <a href="#">{{ $t("nav.Workshop") }}</a>
              <div class="ruby-grid ruby-grid-lined">
                <div class="ruby-row"></div>
              </div>
              <span class="ruby-dropdown-toggle"></span>
            </li>
            <li class="ruby-menu-mega">
              <a href="#">{{ $t("nav.Customs Clearance") }}</a>
              <div class="ruby-grid ruby-grid-lined">
                <div class="ruby-row"></div>
              </div>
              <span class="ruby-dropdown-toggle"></span>
            </li>
            <li class="ruby-menu-mega">
              <a href="#">{{ $t("nav.Renting") }}</a>
              <div class="ruby-grid ruby-grid-lined">
                <div class="ruby-row"></div>
              </div>
              <span class="ruby-dropdown-toggle"></span>
            </li>
            <li class="ruby-menu-mega">
              <a href="#">{{ $t("nav.Investment portfolio") }}</a>
              <div class="ruby-grid ruby-grid-lined">
                <div class="ruby-row"></div>
              </div>
              <span class="ruby-dropdown-toggle"></span>
            </li>
            <li class="ruby-menu-mega">
              <a href="#">{{ $t("nav.Yards") }}</a>
              <div class="ruby-grid ruby-grid-lined">
                <div class="ruby-row"></div>
              </div>
              <span class="ruby-dropdown-toggle"></span>
            </li>
            <li class="ruby-menu-mega">
              <a href="#">{{ $t("nav.Producing-Cost-Calc") }}</a>
              <div class="ruby-grid ruby-grid-lined">
                <div class="ruby-row"></div>
              </div>
              <span class="ruby-dropdown-toggle"></span>
            </li>
            <li class="ruby-menu-mega">
              <a href="#">{{ $t("nav.Projects") }}</a>
              <div class="ruby-grid ruby-grid-lined">
                <div class="ruby-row"></div>
              </div>
              <span class="ruby-dropdown-toggle"></span>
            </li>

            <li
              class="ruby-menu-mega"
              id="tools"
              ref="tools"
              @click.prevent="addClassActiveToSub(`tools`)"
            >
              <a href="#">{{ $t("nav.tools") }}</a>
              <div class="ruby-grid ruby-grid-lined">
                <div class="ruby-row">
                  <div
                    class="w-22 operation-part hidden-md"
                    style="width: max-content"
                  >
                    <div class="border-redius-custem">
                      <ul style="padding: 2px">
                        <li>
                          <router-link
                            @click.once="addClassActiveToSub(`tools`)"
                            to="/districts/create"
                            v-b-tooltip.hover.bottom
                            :title="$t('nav.districts')"
                          >
                            <img :src="url28" width="100%" height="100%" />
                          </router-link>
                        </li>

                        <li>
                          <router-link
                            @click.once="addClassActiveToSub(`tools`)"
                            to="/paymentTypes/create"
                            v-b-tooltip.hover.bottom
                            :title="$t('nav.paymentTypes')"
                          >
                            <img :src="url2" width="100%" height="100%" />
                          </router-link>
                        </li>

                        <li>
                          <router-link
                            @click.once="addClassActiveToSub(`tools`)"
                            to="/carTypes/create"
                            v-b-tooltip.hover.bottom
                            :title="$t('nav.car_types')"
                          >
                            <img :src="url20" width="100%" height="100%" />
                          </router-link>
                        </li>
                        <li>
                          <router-link
                            @click.once="addClassActiveToSub(`tools`)"
                            to="/carWheels/create"
                            v-b-tooltip.hover.bottom
                            :title="$t('nav.car Wheels')"
                          >
                            <img :src="url23" width="100%" height="100%" />
                          </router-link>
                        </li>
                        <li>
                          <router-link
                            to="/carClassifications/create"
                            v-b-tooltip.hover.bottom
                            :title="$t('carClassifications')"
                          >
                            <img :src="url29" width="100%" height="100%" />
                          </router-link>
                        </li>
                        <li>
                          <router-link
                            @click.once="addClassActiveToSub(`tools`)"
                            to="/CarStatus/create"
                            v-b-tooltip.hover.bottom
                            :title="$t('nav.Car Status')"
                          >
                            <img :src="url21" width="100%" height="100%" />
                          </router-link>
                        </li>

                        <li>
                          <router-link
                            @click.once="addClassActiveToSub(`tools`)"
                            to="/trailerTypes/create"
                            v-b-tooltip.hover.bottom
                            :title="$t('nav.trailer Types')"
                          >
                            <img :src="url22" width="100%" height="100%" />
                          </router-link>
                        </li>

                        <li>
                          <router-link
                            @click.once="addClassActiveToSub(`tools`)"
                            to="/trailerWheels/create"
                            v-b-tooltip.hover.bottom
                            :title="$t('nav.trailer Wheels')"
                          >
                            <img :src="url24" width="100%" height="100%" />
                          </router-link>
                        </li>
                        <li>
                          <router-link
                            @click.once="addClassActiveToSub(`tools`)"
                            to="/trailerDocumentTypes/create"
                            v-b-tooltip.hover.bottom
                            :title="$t('nav.trailer_card')"
                          >
                            <img :src="url16" width="100%" height="100%" />
                          </router-link>
                        </li>
                        <li>
                          <router-link
                            @click.once="addClassActiveToSub(`tools`)"
                            to="/carDocumentTypes/create"
                            v-b-tooltip.hover.bottom
                            :title="$t('nav.car_card')"
                          >
                            <img :src="url15" width="100%" height="100%" />
                          </router-link>
                        </li>
                        <li>
                          <router-link
                            @click.once="addClassActiveToSub(`tools`)"
                            to="/units/create"
                            v-b-tooltip.hover.bottom
                            :title="$t('nav.units')"
                          >
                            <img :src="url31" width="100%" height="100%" />
                          </router-link>
                        </li>
                        <li>
                          <router-link
                            @click.once="addClassActiveToSub(`tools`)"
                            to="/taxes/create"
                            v-b-tooltip.hover.bottom
                            :title="$t('taxes')"
                          >
                            <img :src="url30" width="100%" height="100%" />
                          </router-link>
                        </li>
                        <li>
                          <router-link
                            @click.once="addClassActiveToSub(`tools`)"
                            :to="{
                              name: 'add-wareHouses',
                              params: {
                                mainModule: `tools`,
                                MainCategory: `cards`,
                              },
                            }"
                            v-b-tooltip.hover.bottom
                            :title="$t('warehouses')"
                          >
                            <img :src="url4" width="100%" height="100%" />
                          </router-link>
                        </li>

                        <li>
                          <router-link
                            @click.once="addClassActiveToSub(`tools`)"
                            to="/DocumentIssuer/create"
                            v-b-tooltip.hover.bottom
                            :title="$t('nav.Document Issuer')"
                          >
                            <img :src="url25" width="100%" height="100%" />
                          </router-link>
                        </li>
                        <li>
                          <router-link
                            @click.once="addClassActiveToSub(`tools`)"
                            to="/currencies/create"
                            v-b-tooltip.hover.bottom
                            :title="$t('nav.currencies')"
                          >
                            <img :src="url32" width="100%" height="100%" />
                          </router-link>
                        </li>
                      </ul>
                    </div>

                    <div class="divcontaier-level text-center">
                      {{ $t("nav.cards") }}
                      <span class="ruby-dropdown-toggle"></span>
                    </div>
                  </div>
                </div>
              </div>
              <span class="ruby-dropdown-toggle"></span>
            </li>

            <!-- <li></li> -->
          </ul>
        </div>

        <!-- END:   RUBY HORIZONTAL MENU -->
        <!-- ########################### -->
      </div>
    </div>
    <div class="header-side h-side-r">
      <span class="">
        <switcher-lang />
      </span>
    </div>
  </div>
</template>

<script>
import switcherLang from "./switcherLang";
export default {
  name: "navBar",
  components: {
    switcherLang,
  },
  data() {
    return {
      url: "assets/icons-menu/product-card.png",
      url2: "assets/icons-menu/pay-way.png",
      url3: "assets/icons-menu/group-card.png",
      url4: "assets/icons-menu/store-card.png",
      url5: "assets/icons-menu/cashier.png",
      url6: "assets/icons-menu/description.png",
      url7: "assets/icons-menu/stock-t.png",
      url8: "assets/icons-menu/inventory1.png",
      url9: "assets/icons-menu/inventory2.png",
      url10: "assets/icons-menu/label.png",
      url11: "assets/icons-menu/report.png",
      url12: "assets/icons-menu/stores-chart.png",
      url13: "assets/icons-menu/pill-chart.png",
      url14: "assets/icons-menu/account-chart.png",
      url15: "assets/icons-menu/car-card.png",
      url16: "assets/icons-menu/trailer-card.png",
      url17: "assets/icons-menu/emp-card.png",
      url18: "assets/icons-menu/classification.png",
      url19: "assets/icons-menu/acc-card.png",
      url20: "assets/icons-menu/car-type.png",
      url21: "assets/icons-menu/car-status.png",
      url22: "assets/icons-menu/trailer-type.png",
      url23: "assets/icons-menu/tires-wheel.png",
      url24: "assets/icons-menu/tires-car.png",
      url25: "assets/icons-menu/doc-issu.png",
      url26: "assets/icons-menu/ass-group.png",
      url27: "assets/icons-menu/asset-statu.png",
      url28: "assets/icons-menu/location.png",
      url29: "assets/icons-menu/classification-car.png",
      url30: "assets/icons-menu/tax.png",
      url31: "assets/icons-menu/units.png",
      url32: "assets/icons-menu/currency.png",

      placements: ["bottom"],
    };
  },

  methods: {
    async addClassActiveToSub(parm) {
      if (document.getElementById(`${parm}`).classList.contains("active")) {
        this.removeActiveFromAnyItems();
        await document.getElementById(`${parm}`).classList.remove("active");
      } else {
        this.removeActiveFromAnyItems();
        await document.getElementById(`${parm}`).classList.add("active");
      }
    },

    removeActiveFromAnyItems() {
      Array.from(document.querySelectorAll(".ruby-menu-mega")).forEach((el) =>
        el.classList.remove("active")
      );
    },
  },
};
</script>

<style>
</style>