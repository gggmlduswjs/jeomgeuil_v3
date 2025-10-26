import axiosInstance from "./axiosInstance";

export const getLearningWords = async () => {
  const res = await axiosInstance.get("/learn/start/");
  return res.data.data;
};