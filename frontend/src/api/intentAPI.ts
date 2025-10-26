import axiosInstance from "./axiosInstance";

export const parseIntent = async (text: string) => {
  const res = await axiosInstance.post("/intent/parse/", { text });
  return res.data;
};
