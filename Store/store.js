import Vue from "vue";
import i18n from "../locales/i18n";
import Vuex from "vuex";
import Country from "./Modules/Country";
import City from "./Modules/City";
import Shift from "./Modules/Shift";
import InvoiceSettingGroup from "./Modules/InvoiceSettingGroup";
import FixedAssetCat from "./Modules/FixedAssetCat";
import VehicleData from "./Modules/VehicleData";
import DiscountVendorContract from "./Modules/DiscountVendorContract";
import District from "./Modules/District";
import Branch from "./Modules/Branch";
import Unit from "./Modules/Unit";
import Tax from "./Modules/Tax";
import CostWay from "./Modules/CostWay";
import ProductType from "./Modules/ProductType";
import Category from "./Modules/Category";
import SubCategory from "./Modules/SubCategory";
import Discount from "./Modules/Discount";
import Currency from "./Modules/Currency";
import Employee from "./Modules/Employee";
import Guarantee from "./Modules/Guarantee";
import Product from "./Modules/Product";
import Classification from "./Modules/Classification";
import WareHouse from "./Modules/WareHouse";
import Option from "./Modules/Option";
import Account from "./Modules/Account";
import Voucher from "./Modules/Voucher";
import Producer from "./Modules/Producer";
import CostCenter from "./Modules/CostCenter";
import VendorContract from "./Modules/VendorContract";
import Customnotification from "./Modules/Customnotification";
import Auth from "./Modules/Auth";
import InvoiceSetting from "./Modules/InvoiceSetting";
import Purchase from "./Modules/Invoice";
import Card from "./Modules/Card";
import PointOfSale from "./Modules/PointOfSale";
import Log from "./Modules/Log";
import Tabulation from "./Modules/Tabulation";
import Promotion from "./Modules/Promotion";
import PaymentWay from "./Modules/PaymentWay";
import FinancialAccount from "./Modules/FinancialAccount";
import DelecateCommission from "./Modules/DelecateCommission";
import Commission from "./Modules/Commission";
import GetMainCategory from "./Modules/GetMainCategory";
import InvoiceInstallment from "./Modules/InvoiceInstallment";
import Trailer from "./Modules/Trailer";
import AssetGroup from "./Modules/AssetGroup";
import carTypes from "./Modules/carTypes";
import trailerTypes from "./Modules/trailerTypes";
import carWheels from "./Modules/carWheels";
import CarStatus from "./Modules/CarStatus";
import DocumentIssuer from "./Modules/DocumentIssuer";
import AssetStatus from "./Modules/AssetStatus";
import trailerWheels from "./Modules/trailerWheels";
import CarClassification from "./Modules/CarClassification";
import trailerData from "./Modules/trailerData";
import trailerDocumentType from "./Modules/trailerDocumentType";
import carDocumentType from "./Modules/carDocumentType";

import SellingPoint from "./Modules/SellingPoint";
import Period from "./Modules/Period";

import PaymentType from "./Modules/PaymentType";


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    welcomeMSG: "",
    token: "",
    user: "",
  },
  // -----------------------------------------------------------------

  // -----------------------------------------------------------------
  mutations: {
    setAuthToken(state, token) {
      state.token = token;
    },

    setCurrentUser(state, user) {
      state.user = user;
    },
    destroyToken(state) {
      state.token = null;
      state.user = null;
      state.permissions = null;
      window.permissions = null;
    },
  },
  // -----------------------------------------------------------------
  getters: {
    loggedin(state) {
      if (state.token != null) {
        if (state.token != undefined) {
          if (state.token != "") {
            return true;
          }
        }
      }
      state.token = null;
      return false;
    },
    getToken(state) {
      return state.token;
    },
  },
  actions: {
    swalSuccess(vuexContext, text) {
      Swal.fire({
        type: "success",
        text: text,
      });
    },

    swalAddSuccess(vuexContext, text) {
      Swal.fire({
        position: "center-center",
        icon: "success",
        title: text ? i18n.t(`${text}`) : i18n.t("saved"),
        showConfirmButton: false,
        padding: "1em",
        color: "#716add",

        background: "#fff url(/images/trees.png)",
        timer: 2000,
        showClass: {
          popup: "animate__animated animate__fadeInLeft",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutRight",
        },
      });
    },
    SwalNotDeleted(vuexContext, text) {
      return Swal.fire({
        title: "Warrning",
        text: text,
        confirmButtonColor: "#cd2b1b",
        confirmButtonText: "ok",
        icon: "warning",
      });
    },
  },
  // -----------------------------------------------------------------

  modules: {
    Country: Country,
    City: City,
    District: District,
    Branch: Branch,
    Unit: Unit,
    InvoiceSettingGroup: InvoiceSettingGroup,
    FixedAssetCat: FixedAssetCat,
    VehicleData: VehicleData,
    DiscountVendorContract: DiscountVendorContract,
    Tax: Tax,
    CostWay: CostWay,
    Category: Category,
    SubCategory: SubCategory,
    ProductType: ProductType,
    Discount: Discount,
    Currency: Currency,
    Employee: Employee,
    Guarantee: Guarantee,
    Product: Product,
    Classification: Classification,
    WareHouse: WareHouse,
    Option: Option,
    Account: Account,
    Voucher: Voucher,
    Producer: Producer,
    CostCenter: CostCenter,
    InvoiceSetting: InvoiceSetting,
    Purchase: Purchase,
    VendorContract: VendorContract,
    Customnotification: Customnotification,
    Card: Card,
    PointOfSale: PointOfSale,
    Log: Log,
    Tabulation: Tabulation,
    Promotion: Promotion,
    PaymentWay: PaymentWay,
    FinancialAccount: FinancialAccount,
    DelecateCommission: DelecateCommission,
    Commission: Commission,
    GetMainCategory: GetMainCategory,
    InvoiceInstallment: InvoiceInstallment,
    Trailer: Trailer,
    Shift: Shift,
    AssetGroup: AssetGroup,
    carTypes: carTypes,
    trailerTypes: trailerTypes,
    carWheels: carWheels,
    trailerWheels: trailerWheels,
    CarStatus: CarStatus,
    CarClassification: CarClassification,
    DocumentIssuer: DocumentIssuer,
    AssetStatus: AssetStatus,
    SellingPoint: SellingPoint,
    Period: Period,
    trailerData: trailerData,
    trailerDocumentType: trailerDocumentType,
    carDocumentType: carDocumentType,
    PaymentType: PaymentType,
  },
});
