import { Category, Product } from "interfaces";

export const getAllProducts = async () => {
  let response = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/products`, {
    method: "GET",
    headers: {'Access-Control-Allow-Origin': '*'},
  });
  const { data, status } = await response.json();
  if (status == 200) return data as Product[];
  return null
};


export const getAllCategories = async () => {
  let response = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/categories`, {
    method: "GET",
    headers: {'Access-Control-Allow-Origin': '*'},
  });
  const data = await response.json();
  if (data) return data as any;
  return null
};

export const  addProduct = async (data: any) => {
  return await fetch(`${process.env.NEXT_PUBLIC_API}/v1/products`, {
    method: "POST",
    headers: {'Access-Control-Allow-Origin': '*'},
    body: data,
  });
};

export const  addCategory = async (data: any) => {
  return await fetch(`${process.env.NEXT_PUBLIC_API}/v1/categories`, {
    method: "POST",
    headers: {'Access-Control-Allow-Origin': '*'},
    body: data,
  });
};

