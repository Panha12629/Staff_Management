import axios from "axios";

const exportApi = axios.create({
  baseURL: "http://localhost:5282/api/export", 
});

export const exportExcel = () =>
  exportApi.get("/excel", { responseType: "blob" }); 

export const exportPdf = () =>
  exportApi.get("/pdf", { responseType: "blob" });
