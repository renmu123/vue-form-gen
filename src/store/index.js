import Vue from "vue";
import Vuex from "vuex";
import { componentsData, itemOptions, formOptions } from "./components";
import { keyBy } from "lodash-es";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    form: {
      form: {
        model: "formData",
        "label-width": "80px",
      },
      items: [],
    },
    formOptions: formOptions,
    itemOptions: itemOptions,
    componentsArr: componentsData,
    currentIndex: -1,
  },
  getters: {
    currentItem(state) {
      if (state.currentIndex === -1) {
        return [];
      }
      return state.form.items[state.currentIndex];
    },
    componentsObj(state) {
      return keyBy(state.componentsArr, "name");
    },
  },
  mutations: {
    updateForm(state, data) {
      state.form = data;
    },
    updateItem(state, newItems) {
      state.form.items = newItems;
    },
    pushItem(state, item) {
      state.form.items.push(item);
    },
    setCurrentIndex(state, index) {
      state.currentIndex = Number(index);
    },
    deletItem(state, index) {
      state.form.items.splice(index, 1);
      const length = state.form.items.length;
      if (length !== 0) {
        if (index <= state.currentIndex) {
          if (state.currentIndex === 0) {
            state.currentIndex = state.form.items.length;
          } else {
            state.currentIndex -= 1;
          }
        }
      }
    },
    copyItem(state, index) {
      state.form.items.splice(index, 0, state.form.items[index]);
    },
  },
  actions: {},
  modules: {},
});
