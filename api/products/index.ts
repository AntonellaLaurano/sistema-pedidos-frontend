import { Product } from "interfaces";

export const getAllProducts = async () => {
  let response = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/products`, {
    method: "GET",
  });
  const { data, status } = await response.json();
  if (status == 200) return data as Product[];
  return null
};