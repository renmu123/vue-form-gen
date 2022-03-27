import * as localforage from "localforage";

export const saveForm = (data) => {
  return localforage.setItem("form", data);
};

export const getForm = () => {
  return localforage.getItem("form");
};
