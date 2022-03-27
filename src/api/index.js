import * as localforage from "localforage";

export const saveForm = (data) => {
  return localforage.setItem("form", data);
};

export const getForm = () => {
  return localforage.getItem("form");
};

export const getGobalId = async () => {
  const id = await localforage.getItem("id");
  if (id === null) {
    await localforage.setItem("id", 1);
    return localforage.getItem("id");
  } else {
    return id;
  }
};

export const setGlobalId = async (id) => {
  await localforage.setItem("id", id);
};

export const setSpan = async (span) => {
  return localforage.setItem("span", span);
};

export const getSpan = async () => {
  const span = await localforage.getItem("span");
  if (span === null) {
    await localforage.setItem("span", 24);
    return localforage.getItem("span");
  } else {
    return span;
  }
};
