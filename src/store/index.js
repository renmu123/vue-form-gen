import Vue from "vue";
import Vuex from "vuex";
import { componentsData, itemOptions, formOptions } from "./components";
import { keyBy, cloneDeep } from "lodash-es";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    form: {
      form: {
        model: "formData",
        "label-width": "80px",
        inline: false,
        "label-position": "left",
        "hide-required-asterisk": false,
        "show-message": false,
        "inline-message": false,
        disabled: false,
      },
      items: [],
    },
    formOptions: formOptions,
    itemOptions: itemOptions,
    componentsArr: componentsData,
    currentIndex: -1,
    span: 24,
    globalId: 1,
  },
  getters: {
    currentItem(state) {
      if (state.currentIndex === -1) {
        return {};
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
      state.currentIndex = state.form.items.length - 1;
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
            state.currentIndex = length - 1;
          } else {
            state.currentIndex -= 1;
          }
        }
      }
    },
    copyItem(state, index) {
      let item = cloneDeep(state.form.items[index]);

      const globalId = state.globalId;
      item.prop = `field_${globalId}`;
      state.form.items.splice(index + 1, 0, item);

      state.globalId += 1;
    },
    // 移除所有组件
    clearItems(state) {
      state.form.items = [];
    },
    // 设置全局间隔
    setSpan(state, span) {
      state.span = span;
    },
    // 设置全局id
    setGlobalId(state, id) {
      state.globalId = id;
    },
  },
  actions: {},
  modules: {},
});
