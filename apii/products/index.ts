import { Category, Product } from "interfaces";

export const getAllProducts = async () => {
  let response = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/products`, {
    method: "GET",
  });
  const { data, status } = await response.json();
  if (status == 200) return data as Product[];
  return null
};


export const getAllCategories = async () => {
  let response = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/categories`, {
    method: "GET",
  });
  const data = await response.json();
  if (data) return data as any;
  return null
};

export const  addProduct = async (data: any) => {
  return await fetch(`${process.env.NEXT_PUBLIC_API}/v1/products`, {
    method: "POST",
    body: data,
  });
};

export const  addCategory = async (data: any) => {
  return await fetch(`${process.env.NEXT_PUBLIC_API}/v1/categories`, {
    method: "POST",
    body: data,
  });
};

