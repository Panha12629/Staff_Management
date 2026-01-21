import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5282/api/staff", 
});

export const getStaffs = (params) => api.get("/", { params });
export const createStaff = (data) => api.post("/", data);
export const updateStaff = (id, data) => api.put(`/${id}`, data);
export const deleteStaff = (id) => api.delete(`/${id}`);
