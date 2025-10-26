import axiosInstance from "./axiosInstance";

export const convertToBraille = async (text: string) => {
  const res = await axiosInstance.post("/braille/convert/", { text });
  return res.data.braille;
};
