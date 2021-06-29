import axios from "axios";

const API = axios.create({
  baseURL: "https://private-anon-bea6bbb359-technicaltaskapi.apiary-mock.com/",
});

export const fetcher = (url: string) => API.get(url).then((r) => r.data);

export const fetcherWithParam = (url: string, param: string) =>
  API.get(`${url}/${param}`).then((r) => r.data);
